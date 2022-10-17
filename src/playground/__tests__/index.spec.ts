import { screen, waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { CoffeeScript } from "coffeescript";

jest.mock("coffeescript", () => ({
  CoffeeScript: {
    compile: jest.fn(
      () => `
    const btn = document.createElement("BUTTON");
    btn.textContent = "Hello";
    document.getElementById("result").appendChild(btn);
`
    ),
  },
}));

const editorMock = {
  setTheme: jest.fn(),
  session: {
    setMode: jest.fn(),
  },
  getValue: jest.fn(() => "some code"),
  setValue: jest.fn((code: string) => {
    const editor = document.getElementById("editor");
    if (editor) {
      editor.textContent = code;
    }
  }),
};

const originalConfirm = window.confirm;
const confirmMock = jest.fn().mockReturnValue(true);
const originalFetch = global.fetch;
const fetchMock = jest.fn((url: string) =>
  Promise.resolve({
    status: 200,
    text: () => Promise.resolve(`Loaded file: ${url}`),
  })
);

beforeAll(() => {
  Object.defineProperty(window, "confirm", {
    value: confirmMock,
    configurable: true,
  });

  Object.defineProperty(window, "ace", {
    value: {
      edit: () => editorMock,
    },
    configurable: true,
  });

  Object.defineProperty(global, "fetch", {
    value: fetchMock,
    configurable: true,
  });
});

afterAll(() => {
  Object.defineProperty(window, "confirm", {
    value: originalConfirm,
  });

  Object.defineProperty(global, "fetch", {
    value: originalFetch,
  });
});

afterEach(() => {
  document.body.childNodes.forEach((node) => {
    document.body.removeChild(node);
  });
});

describe("playground", () => {
  it("should correctly handle running code from the editor", async () => {
    renderPlayground();

    await userEvent.click(screen.getByRole("button", { name: "Play" }));
    expect(
      await screen.findByRole("button", { name: "Hello" })
    ).toBeInTheDocument();
  });

  it("should correctly handle resetting", async () => {
    renderPlayground();

    const resultWrapper = document.getElementById("result");
    if (resultWrapper) {
      resultWrapper.append("Result content");
    }
    expect(await screen.findByText("Result content")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Reset" }));
    waitFor(() => {
      expect(screen.queryByText("Result content")).not.toBeInTheDocument();
    });
  });

  it("should correctly log errors if anything goes wrong with code execution", async () => {
    (CoffeeScript.compile as jest.Mock)
      .mockImplementationOnce(() => {
        throw new Error("Missing )");
      })
      .mockImplementationOnce(() => "syntax error");
    renderPlayground();

    await userEvent.click(screen.getByRole("button", { name: "Play" }));
    expect(await screen.findByText(/Error: Missing \)/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Play" }));
    expect(
      await screen.findByText(/SyntaxError: Unexpected identifier/)
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Play" }));
    waitFor(() => {
      expect(
        screen.queryByText(/SyntaxError: Unexpected identifier/)
      ).not.toBeInTheDocument();
    });
  });

  it("should correctly load examples when requested", async () => {
    renderPlayground();

    await userEvent.selectOptions(
      screen.getByLabelText("Load example:"),
      "stopwatch.coffee"
    );
    expect(
      await screen.findByText("Loaded file: examples/stopwatch.coffee")
    ).toBeInTheDocument();

    // Say "no" when asking to confirm.
    confirmMock.mockReturnValueOnce(false);
    await userEvent.selectOptions(
      screen.getByLabelText("Load example:"),
      "hangman.coffee"
    );
    expect(
      screen.queryByText("Loaded file: examples/hangman.coffee")
    ).not.toBeInTheDocument();

    // Say "yes" when asking to confirm.
    confirmMock.mockReturnValueOnce(true);
    await userEvent.selectOptions(
      screen.getByLabelText("Load example:"),
      "hangman.coffee"
    );
    expect(
      await screen.findByText("Loaded file: examples/hangman.coffee")
    ).toBeInTheDocument();
  });

  it("should correctly log errors if anything goes wrong with loading the examples", async () => {
    fetchMock
      .mockRejectedValueOnce("Server Not Available")
      .mockResolvedValueOnce({
        status: 404,
        text: () => Promise.resolve("File Not Found"),
      });
    renderPlayground();

    await userEvent.selectOptions(
      screen.getByLabelText("Load example:"),
      "stopwatch.coffee"
    );
    expect(await screen.findByText(/Server Not Available/)).toBeInTheDocument();

    await userEvent.selectOptions(
      screen.getByLabelText("Load example:"),
      "hangman.coffee"
    );
    expect(await screen.findByText(/File Not Found/)).toBeInTheDocument();
  });

  function renderPlayground() {
    document.body.innerHTML = `
      <label for="select-example">Load example:</label>
      <select id="select-example">
        <option value="stopwatch">stopwatch.coffee</option>
        <option value="hangman">hangman.coffee</option>
      </select>

      <button id="play">Play</button>
      <button id="reset">Reset</button>

      <div id="editor" />
      <div id="result" />
    `;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { __attach, __detach } = require("../index");
    // We need to de-and-re-attach all event listeners every render. This is because
    // our require() statement will treat our code as a singleton, and not attach
    // new event listeners every new render. Loading our index file will attach
    // all needed event listeners by default, so in our case we can safely detach,
    // and then re-attach, every render.
    __detach();
    __attach();
  }
});
