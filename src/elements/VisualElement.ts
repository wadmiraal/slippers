import { Config } from "../types";
import { extractNumber } from "../utils";
import { BaseElement } from "./BaseElement";

export class VisualElement extends BaseElement {
  constructor(tagName: string, config?: Config) {
    super(tagName);

    if (config?.backgroundColor !== undefined) {
      this.backgroundColor = config.backgroundColor;
    }
    if (config?.borderColor !== undefined) {
      this.borderStyle = "solid";
      this.borderWidth = 2;
      this.borderColor = config.borderColor;
    }
    if (config?.borderRadius !== undefined) {
      this.borderStyle = "solid";
      this.borderWidth = 2;
      this.borderRadius = config.borderRadius;
    }
    if (config?.borderWidth !== undefined) {
      this.borderStyle = "solid";
      this.borderWidth = config.borderWidth;
    }
    if (config?.borderStyle !== undefined) {
      this.borderStyle = config.borderStyle;
    }
    if (config?.left !== undefined) {
      this.left = config.left;
    }
    if (config?.top !== undefined) {
      this.top = config.top;
    }
    if (config?.width !== undefined) {
      this.width = config.width;
    }
    if (config?.height !== undefined) {
      this.height = config.height;
    }
  }

  set backgroundColor(value: string) {
    this.el.style.backgroundColor = value;
  }

  get backgroundColor() {
    return this.el.style.backgroundColor;
  }

  set borderColor(value: string) {
    this.el.style.borderColor = value;
  }

  get borderColor() {
    return this.el.style.borderColor;
  }

  set borderStyle(value: string) {
    this.el.style.borderStyle = value;
  }

  get borderStyle() {
    return this.el.style.borderStyle;
  }

  set borderWidth(value: number) {
    this.el.style.borderWidth = String(value) + "px";
  }

  get borderWidth() {
    return extractNumber(this.el.style.borderWidth);
  }

  set borderRadius(value: number) {
    this.el.style.borderRadius = String(value) + "%";
  }

  get borderRadius() {
    return extractNumber(this.el.style.borderRadius);
  }

  set width(value: number) {
    this.el.style.width = String(value) + "px";
  }

  get width() {
    return extractNumber(this.el.style.width);
  }

  set height(value: number) {
    this.el.style.height = String(value) + "px";
  }

  get height() {
    return extractNumber(this.el.style.height);
  }

  set left(value: number) {
    this.el.style.position = "absolute";
    this.el.style.left = String(value) + "px";
  }

  get left() {
    return extractNumber(this.el.style.left);
  }

  set top(value: number) {
    this.el.style.position = "absolute";
    this.el.style.top = String(value + "px");
  }

  get top() {
    return extractNumber(this.el.style.top);
  }
}
