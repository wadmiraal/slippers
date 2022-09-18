import { BaseElement } from "./elements/BaseElement";
import { Button } from "./elements/Button";
import { Canvas } from "./elements/Canvas";
import { ContainerElement } from "./elements/ContainerElement";
import { Keyboard } from "./elements/Keyboard";
import { TextElement } from "./elements/TextElement";
import { Timer } from "./elements/Timer";
import { VisualElement } from "./elements/VisualElement";

export type Args = [Config | BaseElement, ...Array<BaseElement>];

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

export type Config = Partial<
  Omit<VisualElement, "delete" | "getConfig" | "getHTMLElement">
> &
  Partial<Pick<ContainerElement, "align">> &
  Partial<
    Pick<TextElement, "text" | "size" | "font" | "color" | "bold" | "italic">
  > &
  Partial<Pick<Timer, "do" | "freq">> &
  Partial<Pick<Button, "do">> &
  Partial<Pick<Canvas, "color" | "lineWidth">> &
  Partial<Pick<Keyboard, "up">>;
