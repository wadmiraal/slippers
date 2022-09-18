import { Config } from "../types";
import { BaseElement } from "./BaseElement";

let keyboardCount = 0;
export class Keyboard extends BaseElement {
  protected upCallback?: (key: string) => void;

  constructor(config: Config) {
    keyboardCount++;
    super("SPAN");

    this.el.style.display = "none";
    this.el.className = "keyboard__" + keyboardCount;

    this.upCallback = config.up;

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (this.upCallback !== undefined) {
        this.upCallback(e.key);
      }
    });
  }

  set up(callback: (key: string) => void) {
    this.upCallback = callback;
  }

  get up() {
    return this.upCallback || (() => {});
  }
}
