import { BaseElement } from "./BaseElement";

export interface KeyboardConfig {
  up?: (key: string) => void;
}

let keyboardCount = 0;
export class Keyboard extends BaseElement {
  protected upCallback?: (key: string) => void;

  constructor(config: KeyboardConfig) {
    keyboardCount++;
    super("SPAN");

    this.el.style.display = "none";
    this.el.className = "keyboard__" + keyboardCount;

    this.up = config.up;

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (this.upCallback !== undefined) {
        this.upCallback(e.key);
      }
    });
  }

  set up(callback: KeyboardConfig["up"]) {
    this.upCallback = callback;
  }

  get up(): KeyboardConfig["up"] {
    return this.upCallback;
  }
}
