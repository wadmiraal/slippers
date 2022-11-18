import { App } from "./elements/App";
import { BaseElement } from "./elements/BaseElement";
import { Button, ButtonConfig } from "./elements/Button";
import { Canvas, CanvasConfig } from "./elements/Canvas";
import { ContainerElementConfig } from "./elements/ContainerElement";
import { Keyboard, KeyboardConfig } from "./elements/Keyboard";
import { Paragraph } from "./elements/Paragraph";
import { Section } from "./elements/Section";
import { Text } from "./elements/Text";
import { TextElementConfig } from "./elements/TextElement";
import { Timer, TimerConfig } from "./elements/Timer";

export type Args<T> = [
  T | BaseElement | CanvasInstruction,
  ...Array<BaseElement | CanvasInstruction>
];

export interface EnrichedWindow extends Window {
  App: (...args: Args<ContainerElementConfig>) => App;
  Button: (config: ButtonConfig) => Button;
  Canvas: (...args: Args<CanvasConfig>) => Canvas;
  Keyboard: (config: KeyboardConfig) => Keyboard;
  Paragraph: (...args: Args<ContainerElementConfig>) => Paragraph;
  Section: (...args: Args<ContainerElementConfig>) => Section;
  Text: (config?: TextElementConfig) => Text;
  Timer: (config: TimerConfig) => Timer;

  moveTo: (
    x: number,
    y: number,
    ctx?: CanvasRenderingContext2D
  ) => CanvasInstruction;
  drawLine: (
    x: number,
    y: number,
    ctx?: CanvasRenderingContext2D
  ) => CanvasInstruction;
  drawCircle: (
    x: number,
    y: number,
    r: number,
    ctx?: CanvasRenderingContext2D
  ) => CanvasInstruction;
}

export type CanvasLineInstruction = [
  (x: number, y: number, ctx: CanvasRenderingContext2D) => void,
  number,
  number
];

export type CanvasCircleInstruction = [
  (x: number, y: number, r: number, ctx: CanvasRenderingContext2D) => void,
  number,
  number,
  number
];

export type CanvasInstruction = CanvasLineInstruction | CanvasCircleInstruction;
