import { VisualElement, VisualElementConfig } from "./VisualElement";

export interface ImageConfig extends VisualElementConfig {
  url: string;
  description?: string;
}

export class Image extends VisualElement<HTMLImageElement> {
  constructor(config: ImageConfig) {
    super("IMG", config);

    this.url = config.url;

    if (config.description !== undefined) {
      this.description = config.description;
    }
  }

  set url(value: string) {
    this.el.setAttribute("src", value);
  }

  get url() {
    return this.el.getAttribute("src") ?? "";
  }

  set description(value: string) {
    this.el.setAttribute("alt", value);
  }

  get description() {
    return this.el.getAttribute("alt") ?? "";
  }
}
