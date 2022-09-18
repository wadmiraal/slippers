import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { App } from "../elements/App";
import { Button } from "../elements/Button";
import { Keyboard } from "../elements/Keyboard";
import { LineOfText } from "../elements/LineOfText";
import { Paragraph } from "../elements/Paragraph";
import { Section } from "../elements/Section";
import { Timer } from "../elements/Timer";
import "../slippers";

afterEach(() => {
  document.body.childNodes.forEach((node) => {
    document.body.removeChild(node);
  });
});

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
    let text: LineOfText;
    const app = new App((text = new LineOfText({ text: "Some text" })));

    expect(screen.getByText("Some text")).toBeInTheDocument();
    app.remove(text);
    expect(screen.queryByText("Some text")).not.toBeInTheDocument();
  });

  function renderBasicApp() {
    let text: LineOfText;
    new App(
      new Section(
        new Button({
          text: "Start",
          do: () => {
            text.text = "Clicked!";
          },
        }),
        (text = new LineOfText({}))
      )
    );
  }

  function renderStyledApp() {
    new App(
      { width: 200, height: 200, borderColor: "red", borderRadius: 5 },
      new Paragraph(
        { backgroundColor: "blue", align: "right" },
        new Button({
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
        new LineOfText({
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
    let text: LineOfText;
    new App(
      (text = new LineOfText({ text: "No key pressed" })),
      new Keyboard({
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
    const timer = new Timer({
      freq: 100,
      do: (ellapsed) => (counter = ellapsed),
    });
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

    timer.do = (ellapsed) => (counter = ellapsed + 50);
    jest.runOnlyPendingTimers();
    expect(counter).toBe(450);

    timer.reset();
    timer.start();
    jest.runOnlyPendingTimers();
    expect(counter).toBe(150);
  });

  function renderTimerApp() {
    let totalText: LineOfText, formattedText: LineOfText, timer: Timer;
    new App(
      (totalText = new LineOfText({ text: "Not started" })),
      (formattedText = new LineOfText()),
      (timer = new Timer({
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
