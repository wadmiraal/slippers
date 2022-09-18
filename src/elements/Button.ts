import { Config } from "../types";
import { TextElement } from "./TextElement";

export class Button extends TextElement {
  protected clickCallback?: () => void;

  constructor(config: Config) {
    super("BUTTON", config);

    this.clickCallback = config.do;

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

  set do(callback: () => void) {
    this.clickCallback = callback;
  }

  get do() {
    return this.clickCallback || (() => {});
  }
}
