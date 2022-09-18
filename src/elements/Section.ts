import { Args } from "../types";
import { handleContainerArgs, isBaseElement } from "../utils";
import { ContainerElement } from "./ContainerElement";

export class Section extends ContainerElement {
  constructor(...args: Args) {
    const [config, children] = handleContainerArgs(args);
    super("DIV", config);

    children.forEach((child) => {
      if (isBaseElement(child)) {
        this.append(child);
      }
    });
  }
}
