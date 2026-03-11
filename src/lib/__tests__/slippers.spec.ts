import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ButtonConfig } from "../elements/Button";
import { Image as ImageEl, ImageConfig } from "../elements/Image";
import { KeyboardConfig } from "../elements/Keyboard";
import { LinkConfig } from "../elements/Link";
import { Text as TextEl } from "../elements/Text";
import {
  TextField as TextFieldEl,
  TextFieldConfig,
} from "../elements/TextField";
import { Timer as TimerEl, TimerConfig } from "../elements/Timer";
import "../slippers";
import { EnrichedWindow } from "../types";

afterEach(() => {
  document.body.childNodes.forEach((node) => {
    document.body.removeChild(node);
  });
});

const {
  App,
  Button,
  Image,
  Keyboard,
  Text,
  Link,
  Paragraph,
  Section,
  Timer,
  TextField,
} = window as unknown as EnrichedWindow;

describe("basic components", () => {
  it("should handle simple interactions", () => {
    renderBasicApp();
    expect(screen.queryByText("Clicked!")).not.toBeInTheDocument();
    screen.getByRole("button", { name: "Start" }).click();
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Link to example.com" })
    ).toHaveAttribute("href", "http://example.com");
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
    let text: TextEl;
    const app = App((text = Text({ text: "Some text" })));

    expect(screen.getByText("Some text")).toBeInTheDocument();
    app.remove(text);
    expect(screen.queryByText("Some text")).not.toBeInTheDocument();
  });

  it("should allow an element to remove itself", () => {
    let text: TextEl;
    App((text = Text({ text: "Some text" })));

    expect(screen.getByText("Some text")).toBeInTheDocument();
    text.delete();
    expect(screen.queryByText("Some text")).not.toBeInTheDocument();
  });

  function renderBasicApp() {
    let text: TextEl;
    App(
      Section(
        Button({
          text: "Start",
          do: () => {
            text.text = "Clicked!";
          },
        }),
        (text = Text({})),
        Link({
          text: "Link to example.com",
          to: "http://example.com",
        })
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
        Text({
          bold: false,
          italic: false,
        })
      )
    );
  }
});

describe("image", () => {
  it("should render an image with the given url", () => {
    App(Image({ url: "photo.jpg" }));

    expect(screen.getByRole("img")).toHaveAttribute("src", "photo.jpg");
  });

  it("should support an optional description", () => {
    App(Image({ url: "photo.jpg", description: "A nice photo" }));

    expect(screen.getByAltText("A nice photo")).toBeInTheDocument();
  });

  it("should allow url and description to be updated after creation", () => {
    let image: ImageEl;
    App((image = Image({ url: "before.jpg", description: "Before" })));

    image.url = "after.jpg";
    image.description = "After";

    expect(screen.getByRole("img")).toHaveAttribute("src", "after.jpg");
    expect(screen.getByAltText("After")).toBeInTheDocument();
  });

  it("should support standard visual properties", () => {
    App(Image({ url: "photo.jpg", width: 200, height: 150, left: 10, top: 20 }));

    expect(screen.getByRole("img")).toHaveStyle({
      width: "200px",
      height: "150px",
      left: "10px",
      top: "20px",
      position: "absolute",
    });
  });
});

describe("inputs", () => {
  it("should correctly handle text inputs", async () => {
    const user = userEvent.setup({ delay: null });
    let textInput: TextFieldEl;
    App((textInput = TextField({ value: "original value" })));

    expect(textInput.value).toEqual("original value");
    await user.type(screen.getByRole("textbox"), " and type");
    expect(textInput.value).toEqual("original value and type");
  });

  it("should correctly handle textareas", async () => {
    const user = userEvent.setup({ delay: null });
    let textInput: TextFieldEl;
    App((textInput = TextField({ large: true, value: "original value" })));

    expect(textInput.value).toEqual("original value");
    await user.type(screen.getByRole("textbox"), " and type");
    expect(textInput.value).toEqual("original value and type");
    expect(textInput.getHTMLElement().tagName).toEqual("TEXTAREA");
  });

  it("should correctly handle password inputs", async () => {
    const user = userEvent.setup({ delay: null });
    let passwordInput: TextFieldEl;
    App((passwordInput = TextField({ secret: true, value: "original value" })));

    expect(passwordInput.value).toEqual("original value");
    await user.type(screen.getByTestId("password-input"), " and type");
    expect(passwordInput.value).toEqual("original value and type");
    expect(passwordInput.getHTMLElement().type).toEqual("password");
  });

  it("should call the do callback with the current value on input", async () => {
    const user = userEvent.setup({ delay: null });
    const received: string[] = [];
    App(TextField({ do: (value) => received.push(value) }));

    await user.type(screen.getByRole("textbox"), "hi");
    expect(received).toEqual(["h", "hi"]);
  });

  it("should render a placeholder", () => {
    App(TextField({ placeholder: "Type here..." }));
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });
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
    let text: TextEl;
    App(
      (text = Text({ text: "No key pressed" })),
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
    let totalText: TextEl, formattedText: TextEl, timer: TimerEl;
    App(
      (totalText = Text({ text: "Not started" })),
      (formattedText = Text()),
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

  test("Link", () => {
    const config: LinkConfig = {
      to: "http://example.com",
    };
    const link = Link(config);
    expect(link.to).toEqual(config.to);
  });

  test("Image", () => {
    const config: ImageConfig = {
      url: "photo.jpg",
      description: "A photo",
    };
    const image = Image(config);

    expect(image.url).toEqual(config.url);
    expect(image.description).toEqual(config.description);
  });

  test("TextField", () => {
    const config: TextFieldConfig = {
      value: "value",
      secret: true,
      large: false,
      placeholder: "hint",
    };
    const field = TextField(config);
    expect(field.value).toEqual(config.value);
    expect(field.secret).toEqual(config.secret);
    expect(field.large).toEqual(config.large);
    expect(field.placeholder).toEqual(config.placeholder);
  });
});
