import { VisualElement, VisualElementConfig } from "../VisualElement";

test("configuration, setters, and getters", () => {
  const config: VisualElementConfig = {
    backgroundColor: "gray",
    borderColor: "blue",
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "dotted",
    left: 100,
    top: 150,
    width: 500,
    height: 400,
  };
  const element = new VisualElement("DIV", config);

  expect(config.backgroundColor).toEqual(element.backgroundColor);
  expect(config.borderColor).toEqual(element.borderColor);
  expect(config.borderRadius).toEqual(element.borderRadius);
  expect(config.borderWidth).toEqual(element.borderWidth);
  expect(config.borderStyle).toEqual(element.borderStyle);
  expect(config.left).toEqual(element.left);
  expect(config.top).toEqual(element.top);
  expect(config.width).toEqual(element.width);
  expect(config.height).toEqual(element.height);
});
