import { Config } from "../types";
import { BaseElement } from "./BaseElement";
import { VisualElement } from "./VisualElement";

export class ContainerElement extends VisualElement {
  constructor(tagName: string, config?: Config) {
    super(tagName, config);

    this.el.style.position = "relative";
    if (config?.align) {
      this.align = config.align;
    }
  }

  set align(value: string) {
    this.el.style.textAlign = value;
  }

  get align() {
    return this.el.style.textAlign;
  }

  append(e: BaseElement) {
    this.el.appendChild(e.getHTMLElement());
  }

  remove(e: BaseElement) {
    this.el.removeChild(e.getHTMLElement());
  }
}
