import { Config } from "../types";
import { extractNumber } from "../utils";
import { VisualElement } from "./VisualElement";

export class TextElement extends VisualElement {
  constructor(tagName: string, config?: Config) {
    super(tagName, config);

    if (config?.text) {
      this.text = config.text;
    }
    if (config?.size) {
      this.size = config.size;
    }
    if (config?.font) {
      this.font = config.font;
    }
    if (config?.color) {
      this.color = config.color;
    }
    if (config?.bold) {
      this.bold = config.bold;
    }
    if (config?.italic) {
      this.italic = config.italic;
    }
  }

  set size(value: number) {
    this.el.style.fontSize = String(value) + "px";
  }

  get size() {
    return extractNumber(this.el.style.fontSize);
  }

  set text(value: string) {
    this.el.textContent = value;
  }

  get text() {
    return this.el.textContent || "";
  }

  set font(value: string) {
    this.el.style.fontFamily = value;
  }

  get font() {
    return this.el.style.fontFamily;
  }

  set color(value: string) {
    this.el.style.color = value;
  }

  get color() {
    return this.el.style.color;
  }

  set bold(value: boolean) {
    this.el.style.fontWeight = value ? "bold" : "regular";
  }

  get bold() {
    return this.el.style.fontWeight === "bold";
  }

  set italic(value: boolean) {
    this.el.style.fontStyle = value ? "italic" : "regular";
  }

  get italic() {
    return this.el.style.fontStyle === "italic";
  }
}
