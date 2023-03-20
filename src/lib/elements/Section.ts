import { Args } from "../types";
import { handleContainerArgs, isBaseElement } from "../utils";
import { ContainerElement, ContainerElementConfig } from "./ContainerElement";

export class Section extends ContainerElement<HTMLDivElement> {
  constructor(...args: Args<ContainerElementConfig>) {
    const [config, children] = handleContainerArgs(args);
    super("DIV", config);

    children.forEach((child) => {
      if (isBaseElement(child)) {
        this.append(child);
      }
    });
  }
}
