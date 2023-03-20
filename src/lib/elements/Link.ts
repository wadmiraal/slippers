import { TextElement, TextElementConfig } from "./TextElement";

export interface LinkConfig extends TextElementConfig {
  to: string;
}

export class Link extends TextElement<HTMLAnchorElement> {
  constructor(config?: LinkConfig) {
    super("A", config);

    if (config?.to) {
      this.to = config.to;
    }
  }

  set to(href: string) {
    this.el.setAttribute("href", href);
  }

  get to() {
    return this.el.getAttribute("href") ?? "";
  }
}
