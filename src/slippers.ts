import { App } from "./elements/App";
import { Button } from "./elements/Button";
import { Canvas, drawCircle, drawLine, moveTo } from "./elements/Canvas";
import { Keyboard } from "./elements/Keyboard";
import { LineOfText } from "./elements/LineOfText";
import { Paragraph } from "./elements/Paragraph";
import { Section } from "./elements/Section";
import { Timer } from "./elements/Timer";
import { Args, Config } from "./types";

// Expose components.
(window as any).App = (...args: Args) => new App(...args);
(window as any).Button = (config: Config) => new Button(config);
(window as any).Canvas = (...args: Args) => new Canvas(...args);
(window as any).Keyboard = (config: Config) => new Keyboard(config);
(window as any).LineOfText = (config: Config) => new LineOfText(config);
(window as any).Paragraph = (...args: Args) => new Paragraph(...args);
(window as any).Section = (...args: Args) => new Section(...args);
(window as any).Timer = (config: Config) => new Timer(config);

// Expose special helper components.
(window as any).moveTo = moveTo;
(window as any).drawLine = drawLine;
(window as any).drawCircle = drawCircle;

// Expose constants.
(window as any).left = "left";
(window as any).center = "center";
(window as any).right = "right";

(window as any).green = "green";
(window as any).red = "red";
(window as any).white = "white";
(window as any).black = "black";
(window as any).lightGray = "lightgray";
