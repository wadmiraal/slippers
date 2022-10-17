import { TextElement, TextElementConfig } from "./TextElement";

export interface ButtonConfig extends TextElementConfig {
  do?: () => void;
}

export class Button extends TextElement {
  protected clickCallback?: () => void;

  constructor(config: ButtonConfig) {
    super("BUTTON", config);

    this.do = config.do;

    this.el.addEventListener("click", () => {
      this.clickCallback && this.clickCallback();
    });

    this.el.style.padding = "5px 10px";
    this.el.style.margin = "2px";
    this.el.style.cursor = "pointer";

    if (config.borderColor === undefined && config.borderWidth === undefined) {
      this.borderColor = "transparent";
    }
    if (config.borderRadius === undefined) {
      this.borderRadius = 5;
    }
  }

  set do(callback: ButtonConfig["do"]) {
    this.clickCallback = callback;
  }

  get do(): ButtonConfig["do"] {
    return this.clickCallback;
  }
}
