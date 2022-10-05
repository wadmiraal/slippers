import { Args, CanvasInstruction } from "../types";
import {
  handleContainerArgs,
  isCanvasInstruction,
  isCanvasLineInstruction,
} from "../utils";
import { ContainerElement, ContainerElementConfig } from "./ContainerElement";

export interface CanvasConfig extends ContainerElementConfig {
  color?: string;
  lineWidth?: number;
}

export class Canvas extends ContainerElement {
  protected ctx: CanvasRenderingContext2D;

  constructor(...args: Args<CanvasConfig>) {
    const [config, children] = handleContainerArgs(args);
    super("CANVAS", config);

    const ctx = (this.el as HTMLCanvasElement).getContext("2d");

    if (ctx === null) {
      throw new Error("Could not define Canvas context");
    }

    this.ctx = ctx;

    this.color = config?.color || "black";
    this.lineWidth = config?.lineWidth || 1;

    children.forEach((child) => {
      if (isCanvasInstruction(child)) {
        this.add(child);
      }
    });
  }

  add(...children: Array<CanvasInstruction>) {
    children.forEach((child) => {
      if (isCanvasLineInstruction(child)) {
        const [fn, x, y] = child;
        fn(x, y, this.ctx);
      } else {
        const [fn, x, y, r] = child;
        fn(x, y, r, this.ctx);
      }
    });
  }

  set width(value: number) {
    super.width = value;
    this.el.setAttribute("width", value.toString());
  }

  set height(value: number) {
    super.height = value;
    this.el.setAttribute("height", value.toString());
  }

  set color(value: string) {
    this.ctx.strokeStyle = value;
  }

  get color() {
    return this.ctx.strokeStyle.toString();
  }

  set lineWidth(value: number) {
    this.ctx.lineWidth = value;
  }

  get lineWidth() {
    return this.ctx.lineWidth;
  }
}

export function moveTo(
  x: number,
  y: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction {
  if (ctx) {
    ctx.moveTo(x, y);
  }
  return [moveTo, x, y];
}

export function drawLine(
  x: number,
  y: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction {
  if (ctx) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  return [drawLine, x, y];
}

export function drawCircle(
  x: number,
  y: number,
  r: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction {
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }
  return [drawCircle, x, y, r];
}
