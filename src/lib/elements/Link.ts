import { TextElement, TextElementConfig } from "./TextElement";

export interface LinkConfig extends TextElementConfig {
  to: string;
}

export class Link extends TextElement {
  constructor(config?: LinkConfig) {
    super("A", config);

    if (config?.to) {
      this.el.setAttribute("href", config.to);
    }
  }
}
