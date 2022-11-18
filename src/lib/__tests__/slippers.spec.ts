import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ButtonConfig } from "../elements/Button";
import { KeyboardConfig } from "../elements/Keyboard";
import { LineOfText as LineOfTextEl } from "../elements/LineOfText";
import { Timer as TimerEl, TimerConfig } from "../elements/Timer";
import "../slippers";
import { EnrichedWindow } from "../types";

afterEach(() => {
  document.body.childNodes.forEach((node) => {
    document.body.removeChild(node);
  });
});

const { App, Button, Keyboard, LineOfText, Paragraph, Section, Timer } =
  window as unknown as EnrichedWindow;

describe("basic components", () => {
  it("should handle simple interactions", () => {
    renderBasicApp();
    expect(screen.queryByText("Clicked!")).not.toBeInTheDocument();
    screen.getByRole("button", { name: "Start" }).click();
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });

  it("should handle styling correctly", () => {
    renderStyledApp();
    expect(document.querySelector("div")).toHaveStyle({
      // Explicitly set
      width: "200px",
      height: "200px",
      borderColor: "red",
      borderRadius: "5%",
      // Defaults or computed
      backgroundColor: "white",
      borderStyle: "solid",
      borderWidth: "2px",
      position: "relative",
    });
    expect(document.querySelector("p")).toHaveStyle({
      // Explicitly set
      backgroundColor: "blue",
      textAlign: "right",
    });
    expect(document.querySelector("button")).toHaveStyle({
      // Explicitly set
      fontFamily: "sans-serif",
      borderWidth: "1px",
      borderStyle: "dashed",
      fontStyle: "italic",
      color: "green",
      fontWeight: "bold",
      fontSize: "18px",
      left: "10px",
      top: "20px",
      // Defaults or computed
      position: "absolute",
    });
    expect(document.querySelector("span")).toHaveStyle({
      // Explicitly set
      fontStyle: "regular",
      fontWeight: "regular",
    });
  });

  it("should allow container elements to remove child elements", () => {
    let text: LineOfTextEl;
    const app = App((text = LineOfText({ text: "Some text" })));

    expect(screen.getByText("Some text")).toBeInTheDocument();
    app.remove(text);
    expect(screen.queryByText("Some text")).not.toBeInTheDocument();
  });

  it("should allow an element to remove itself", () => {
    let text: LineOfTextEl;
    const app = App((text = LineOfText({ text: "Some text" })));

    expect(screen.getByText("Some text")).toBeInTheDocument();
    text.delete();
    expect(screen.queryByText("Some text")).not.toBeInTheDocument();
  });

  function renderBasicApp() {
    let text: LineOfTextEl;
    App(
      Section(
        Button({
          text: "Start",
          do: () => {
            text.text = "Clicked!";
          },
        }),
        (text = LineOfText({}))
      )
    );
  }

  function renderStyledApp() {
    App(
      { width: 200, height: 200, borderColor: "red", borderRadius: 5 },
      Paragraph(
        { backgroundColor: "blue", align: "right" },
        Button({
          font: "sans-serif",
          borderWidth: 1,
          borderStyle: "dashed",
          italic: true,
          color: "green",
          bold: true,
          size: 18,
          left: 10,
          top: 20,
        }),
        LineOfText({
          bold: false,
          italic: false,
        })
      )
    );
  }
});

describe("keyboard", () => {
  it("should correctly register keyboard events", async () => {
    renderKeyboardApp();
    expect(screen.getByText("No key pressed")).toBeInTheDocument();

    const user = userEvent.setup({ delay: null });

    await user.keyboard("[ShiftLeft]");
    expect(screen.getByText("Pressed Shift")).toBeInTheDocument();

    await user.keyboard("[KeyF]");
    expect(screen.getByText("Pressed f")).toBeInTheDocument();
  });

  function renderKeyboardApp() {
    let text: LineOfTextEl;
    App(
      (text = LineOfText({ text: "No key pressed" })),
      Keyboard({
        up: (key: string) => {
          text.text = `Pressed ${key}`;
        },
      })
    );
  }
});

describe("timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should correctly give all time-based info", () => {
    renderTimerApp();
    expect(screen.getByText("Not started")).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    expect(screen.getByText("500 total")).toBeInTheDocument();
    expect(screen.getByText("0:0.500")).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    expect(screen.getByText("1000 total")).toBeInTheDocument();
    expect(screen.getByText("0:1.0")).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    expect(screen.getByText("1500 total")).toBeInTheDocument();
    expect(screen.getByText("0:1.500")).toBeInTheDocument();

    // Pass 1 minute.
    for (let i = 120; i > 0; i--) {
      jest.runOnlyPendingTimers();
    }
    expect(screen.getByText("61500 total")).toBeInTheDocument();
    expect(screen.getByText("1:1.500")).toBeInTheDocument();
  });

  it("should be stoppable, startable, and resetable", () => {
    let counter = 0;
    const timer = Timer({
      freq: 100,
      do: (ellapsed) => (counter = ellapsed),
    } as TimerConfig);
    expect(counter).toBe(0);

    // Not started yet
    jest.runOnlyPendingTimers();
    expect(counter).toBe(0);

    // Start.
    timer.start();
    jest.runOnlyPendingTimers();
    expect(counter).toBe(100);

    jest.runOnlyPendingTimers();
    expect(counter).toBe(200);

    timer.stop();
    jest.runOnlyPendingTimers();
    expect(counter).toBe(200);

    timer.start();
    jest.runOnlyPendingTimers();
    expect(counter).toBe(300);

    // Changing the callback doesn't interrupt the timer.
    timer.do = (ellapsed: number) => (counter = ellapsed + 50);
    jest.runOnlyPendingTimers();
    expect(counter).toBe(450);

    timer.restart();
    // Changing the frequency doesn't interrupt the timer.
    timer.freq = 200;
    jest.runOnlyPendingTimers();
    expect(counter).toBe(250);
  });

  function renderTimerApp() {
    let totalText: LineOfTextEl, formattedText: LineOfTextEl, timer: TimerEl;
    App(
      (totalText = LineOfText({ text: "Not started" })),
      (formattedText = LineOfText()),
      (timer = Timer({
        freq: 500,
        do: (totalMs: number, ms: number, s: number, m: number) => {
          totalText.text = `${totalMs} total`;
          formattedText.text = `${m}:${s}.${ms}`;
        },
      }))
    );
    timer.start();
  }
});

describe("configuration, setters, and getters", () => {
  test("Button", () => {
    const config: ButtonConfig = {
      do: () => {
        /* noop */
      },
    };
    const button = Button(config);

    expect(config.do).toEqual(button.do);
  });

  test("Keyboard", () => {
    const config: KeyboardConfig = {
      up: () => {
        /* noop */
      },
    };
    const keyboard = Keyboard(config);

    expect(config.up).toEqual(keyboard.up);
  });

  test("Timer", () => {
    const config: TimerConfig = {
      freq: 2000,
      do: () => {
        /* noop */
      },
    };
    const timer = Timer(config);

    expect(config.freq).toEqual(timer.freq);
    expect(config.do).toEqual(timer.do);
  });
});
