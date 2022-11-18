import { TextElement, TextElementConfig } from "../TextElement";

test("configuration, setters, and getters", () => {
  const config: TextElementConfig = {
    text: "my text",
    size: 12,
    font: "Arial",
    color: "red",
    bold: true,
    italic: false,
  };
  const text = new TextElement("SPAN", config);

  expect(config.text).toEqual(text.text);
  expect(config.size).toEqual(text.size);
  expect(config.font).toEqual(text.font);
  expect(config.color).toEqual(text.color);
  expect(config.bold).toEqual(text.bold);
  expect(config.italic).toEqual(text.italic);
});
