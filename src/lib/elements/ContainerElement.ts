import { BaseElement } from "./BaseElement";
import { VisualElement, VisualElementConfig } from "./VisualElement";

export interface ContainerElementConfig extends VisualElementConfig {
  align?: "left" | "center" | "right";
}

export class ContainerElement<T extends HTMLElement> extends VisualElement<T> {
  constructor(tagName: string, config?: ContainerElementConfig) {
    super(tagName, config);

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
