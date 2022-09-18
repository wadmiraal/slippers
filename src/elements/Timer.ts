import { Config } from "../types";
import { BaseElement } from "./BaseElement";

let timerCount = 0;
export class Timer extends BaseElement {
  protected frequency: number;
  protected callback: (
    totalMs: number,
    ms: number,
    s: number,
    m: number
  ) => void;
  protected ellapsed: number;
  protected timer?: number;

  constructor(config: Config) {
    super("SPAN");
    timerCount++;

    this.el.style.display = "none";
    this.el.className = "timer__" + timerCount;

    this.frequency = config.freq || 1000;
    this.ellapsed = 0;
    this.callback = config.do || (() => {});
  }

  set freq(value: number) {
    this.frequency = value;
    this.stop();
    this.start();
  }

  get freq() {
    return this.frequency;
  }

  set do(
    callback: (totalMs: number, ms: number, s: number, m: number) => void
  ) {
    this.callback = callback;
    this.stop();
    this.start();
  }

  get do() {
    return this.callback;
  }

  start() {
    if (this.timer) {
      this.stop();
    }

    this.timer = window.setInterval(() => {
      this.ellapsed += this.frequency;
      if (this.callback !== undefined) {
        const minutes = Math.floor(this.ellapsed / 60000);
        const [seconds, milliseconds] = String(
          (this.ellapsed % 60000) / 1000
        ).split(".");
        this.callback(
          this.ellapsed,
          Number(milliseconds),
          Number(seconds),
          minutes
        );
      }
    }, this.frequency);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  reset() {
    this.stop();
    this.ellapsed = 0;
  }

  restart() {
    this.stop();
    this.ellapsed = 0;
    this.start();
  }
}
