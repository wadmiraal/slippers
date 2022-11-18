import { Args } from "../types";
import { handleContainerArgs, isBaseElement } from "../utils";
import { ContainerElement, ContainerElementConfig } from "./ContainerElement";

export class App extends ContainerElement {
  constructor(...args: Args<ContainerElementConfig>) {
    const [config, children] = handleContainerArgs(args);
    super("DIV", config);

    this.el.style.overflow = "hidden";
    this.el.style.margin = "20px auto";
    this.el.style.padding = "5px";
    this.el.style.position = "relative";

    if (config?.backgroundColor === undefined) {
      this.backgroundColor = "white";
    }

    children.forEach((child) => {
      if (isBaseElement(child)) {
        this.append(child);
      }
    });

    /* eslint-disable @typescript-eslint/no-explicit-any */
    if ((window as any).SLIPPERS_CONTAINER_ID !== undefined) {
      document
        .getElementById((window as any).SLIPPERS_CONTAINER_ID)
        ?.append(this.el);
    } else {
      document.body.append(this.el);
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }
}
