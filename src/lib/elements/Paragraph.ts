import { Args } from "../types";
import { handleContainerArgs, isBaseElement } from "../utils";
import { ContainerElement, ContainerElementConfig } from "./ContainerElement";

export class Paragraph extends ContainerElement<HTMLParagraphElement> {
  constructor(...args: Args<ContainerElementConfig>) {
    const [config, children] = handleContainerArgs(args);
    super("P", config);

    children.forEach((child) => {
      if (isBaseElement(child)) {
        this.append(child);
      }
    });
  }
}
