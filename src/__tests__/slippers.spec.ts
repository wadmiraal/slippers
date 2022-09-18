import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { App } from "../elements/App";
import { Button } from "../elements/Button";
import { LineOfText } from "../elements/LineOfText";
import { Paragraph } from "../elements/Paragraph";
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
      // Defaults or computed
      position: "relative",
    });
    expect(document.querySelector("button")).toHaveStyle({
      // Explicitly set
      fontFamily: "sans-serif",
      borderWidth: "1px",
      fontStyle: "italic",
      color: "green",
      fontWeight: "bold",
      fontSize: "18px",
      left: "10px",
      top: "20px",
      // Defaults or computed
      position: "absolute",
    });
  });

  function renderBasicApp() {
    let text: LineOfText;
    new App(
      new Button({
        text: "Start",
        do: () => {
          text.text = "Clicked!";
        },
      }),
      (text = new LineOfText({}))
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
          italic: true,
          color: "green",
          bold: true,
          size: 18,
          left: 10,
          top: 20,
        })
      )
    );
  }
});
