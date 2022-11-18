import { ContainerElement, ContainerElementConfig } from "../ContainerElement";

test("configuration, setters, and getters", () => {
  const config: ContainerElementConfig = {
    align: "right",
  };
  const container = new ContainerElement("DIV", config);

  expect(config.align).toEqual(container.align);
});
