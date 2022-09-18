import { BaseElement } from "./BaseElement";

export interface TimerConfig {
  freq?: number;
  do?: (totalMs: number, ms: number, s: number, m: number) => void;
}

let timerCount = 0;
const DEFAULT_FREQ = 1000;
export class Timer extends BaseElement {
  protected frequency = DEFAULT_FREQ;
  protected callback: TimerConfig["do"];
  protected ellapsed: number;
  protected timer?: number;

  constructor(config?: TimerConfig) {
    super("SPAN");
    timerCount++;

    this.el.style.display = "none";
    this.el.className = "timer__" + timerCount;

    this.freq = config?.freq || DEFAULT_FREQ;
    this.ellapsed = 0;
    this.do = config?.do;
  }

  set freq(value: number) {
    this.frequency = value;
    if (this.timer) {
      this.start();
    }
  }

  get freq(): number {
    return this.frequency;
  }

  set do(callback: TimerConfig["do"]) {
    this.callback = callback;
    if (this.timer) {
      this.start();
    }
  }

  get do(): TimerConfig["do"] {
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
        const [seconds, milliseconds = 0] = String(
          (this.ellapsed % 60000) / 1000
        ).split(".");
        this.callback(
          this.ellapsed,
          Number(milliseconds) * 100,
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
