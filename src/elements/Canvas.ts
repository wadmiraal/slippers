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
  protected ctx: CanvasRenderingContext2D | null;

  constructor(...args: Args<CanvasConfig>) {
    const [config, children] = handleContainerArgs(args);
    super("CANVAS", config);

    this.ctx = (this.el as HTMLCanvasElement).getContext("2d");

    if (this.ctx === null) {
      // TODO
      return;
    }

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
        const fn = child[0];
        fn(child[1], child[2], this.ctx!);
      } else {
        const fn = child[0];
        fn(child[1], child[2], child[3], this.ctx!);
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
    if (this.ctx) {
      this.ctx.strokeStyle = value;
    }
  }

  get color() {
    return this.ctx ? this.ctx.strokeStyle.toString() : "black";
  }

  set lineWidth(value: number) {
    if (this.ctx) {
      this.ctx.lineWidth = value;
    }
  }

  get lineWidth() {
    return this.ctx ? this.ctx.lineWidth : 1;
  }
}

export function moveTo(
  x: number,
  y: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction | undefined {
  if (ctx) {
    ctx.moveTo(x, y);
  } else {
    return [moveTo, x, y];
  }
}

export function drawLine(
  x: number,
  y: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction | undefined {
  if (ctx) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    return [drawLine, x, y];
  }
}

export function drawCircle(
  x: number,
  y: number,
  r: number,
  ctx?: CanvasRenderingContext2D
): CanvasInstruction | undefined {
  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  } else {
    return [drawCircle, x, y, r];
  }
}
