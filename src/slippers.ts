(function () {
  type Args = [Config | BaseElement, ...Array<BaseElement>];

  type Config = Partial<
    Omit<VisualElement, "delete" | "getConfig" | "getHTMLElement">
  > &
    Partial<Pick<ContainerElement, "align">> &
    Partial<
      Pick<TextElement, "text" | "size" | "font" | "color" | "bold" | "italic">
    > &
    Partial<Pick<Timer, "do" | "inc">> &
    Partial<Pick<Button, "do">>;

  function handleContainerArgs([first, ...rest]: Args): [
    Config | null,
    BaseElement[]
  ] {
    if (
      (first as any).width !== undefined ||
      (first as any).height !== undefined ||
      (first as any).do !== undefined ||
      (first as any).align !== undefined
      // TODO...
    ) {
      return [first as Config, rest];
    } else {
      return [null, [first as BaseElement, ...rest]];
    }
  }

  function extractNumber(value: string) {
    return Number(value.replace(/^(\d+).*/, "$1"));
  }

  class BaseElement {
    protected el: HTMLElement;

    constructor(tagName: string) {
      this.el = document.createElement(tagName);
    }

    delete() {
      this.el.parentNode?.removeChild(this.el);
    }

    getHTMLElement() {
      return this.el;
    }
  }

  class VisualElement extends BaseElement {
    constructor(tagName: string, config: Config) {
      super(tagName);

      if (config.backgroundColor !== undefined) {
        this.backgroundColor = config.backgroundColor;
      }
      if (config.borderColor !== undefined) {
        this.borderColor = config.borderColor;
      }
      if (config.borderRadius !== undefined) {
        this.borderRadius = config.borderRadius;
      }
      if (config.borderWidth !== undefined) {
        this.borderWidth = config.borderWidth;
      }
      if (config.left !== undefined) {
        this.left = config.left;
      }
      if (config.top !== undefined) {
        this.top = config.top;
      }
      if (config.width !== undefined) {
        this.width = config.width;
      }
      if (config.height !== undefined) {
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

  class TextElement extends VisualElement {
    constructor(tagName: string, config: Config) {
      super(tagName, config);

      if (config.text) {
        this.text = config.text;
      }
      if (config.size) {
        this.size = config.size;
      }
      if (config.font) {
        this.font = config.font;
      }
      if (config.color) {
        this.color = config.color;
      }
      if (config.bold) {
        this.bold = config.bold;
      }
      if (config.italic) {
        this.italic = config.italic;
      }
    }

    set size(value: number) {
      this.el.style.fontSize = String(value) + "px";
    }

    get size() {
      return extractNumber(this.el.style.fontSize);
    }

    set text(value: string) {
      this.el.textContent = value;
    }

    get text() {
      return this.el.textContent || "";
    }

    set font(value: string) {
      this.el.style.fontFamily = value;
    }

    get font() {
      return this.el.style.fontFamily;
    }

    set color(value: string) {
      this.el.style.color = value;
    }

    get color() {
      return this.el.style.color;
    }

    set bold(value: boolean) {
      this.el.style.fontWeight = value ? "bold" : "regular";
    }

    get bold() {
      return this.el.style.fontWeight === "bold";
    }

    set italic(value: boolean) {
      this.el.style.fontStyle = value ? "italic" : "regular";
    }

    get italic() {
      return this.el.style.fontStyle === "italic";
    }
  }

  class ContainerElement extends VisualElement {
    constructor(tagName: string, config: Config) {
      super(tagName, config);

      this.el.style.display = "relative";

      if (config.align) {
        this.align = config.align;
      }
    }

    set align(value: string) {
      this.el.style.textAlign = value;
    }

    get align() {
      return this.el.style.textAlign;
    }

    append(e: BaseElement) {
      this.el.appendChild(e.getHTMLElement());
    }

    remove(e: BaseElement) {
      this.el.removeChild(e.getHTMLElement());
    }
  }

  class App extends ContainerElement {
    constructor(...args: Args) {
      const [config, children] = handleContainerArgs(args);
      super("DIV", config || {});

      this.el.style.overflow = "hidden";
      this.el.style.margin = "20px auto";
      this.el.style.padding = "5px";

      if (!config || config.backgroundColor === undefined) {
        this.backgroundColor = "white";
      }

      children.forEach((child) => {
        this.append(child);
      });

      document.body.append(this.el);
    }
  }

  class Button extends TextElement {
    protected clickCallback?: () => void;

    constructor(config: Config) {
      super("BUTTON", config);

      this.clickCallback = config.do;

      this.el.addEventListener("click", () => {
        this.clickCallback && this.clickCallback();
      });

      this.el.style.padding = "5px 10px";
      this.el.style.margin = "2px";
      this.el.style.cursor = "pointer";

      if (
        config.borderColor === undefined &&
        config.borderWidth === undefined
      ) {
        this.borderColor = "transparent";
      }
      if (config.borderRadius === undefined) {
        this.borderRadius = 5;
      }
    }

    set do(callback: () => void) {
      this.clickCallback = callback;
    }

    get do() {
      return this.clickCallback || (() => {});
    }
  }

  class LineOfText extends TextElement {
    constructor(config: Config) {
      super("SPAN", config);
    }
  }

  class Paragraph extends ContainerElement {
    constructor(...args: Args) {
      const [config, children] = handleContainerArgs(args);
      super("P", config || {});

      children.forEach((child) => {
        this.append(child);
      });
    }
  }

  class Section extends ContainerElement {
    constructor(...args: Args) {
      const [config, children] = handleContainerArgs(args);
      super("DIV", config || {});

      children.forEach((child) => {
        this.append(child);
      });
    }
  }

  let timerCount = 0;
  class Timer extends BaseElement {
    protected increment: number;
    protected callback?: (
      totalMs: number,
      ms: number,
      s: number,
      m: number
    ) => void;
    protected ellapsed: number;
    protected timer: number = 0;

    constructor(config: Config) {
      super("SPAN");
      timerCount++;

      this.el.style.display = "none";
      this.el.className = "timer__" + timerCount;

      this.increment = config.inc || 1000;
      this.ellapsed = 0;
      this.callback = config.do;
    }

    set inc(value: number) {
      this.increment = value;
      this.stop();
      this.start();
    }

    get inc() {
      return this.increment;
    }

    set do(
      callback: (totalMs: number, ms: number, s: number, m: number) => void
    ) {
      this.callback = callback;
      this.stop();
      this.start();
    }

    get do() {
      return this.callback || (() => {});
    }

    start() {
      if (this.timer) {
        this.stop();
      }

      this.timer = setInterval(() => {
        this.ellapsed += this.increment;
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
      }, this.increment);
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

  // Expose components.
  (window as any).App = (...args: Args) => new App(...args);
  (window as any).Button = (config: Config) => new Button(config);
  (window as any).LineOfText = (config: Config) => new LineOfText(config);
  (window as any).Paragraph = (...args: Args) => new Paragraph(...args);
  (window as any).Section = (...args: Args) => new Section(...args);
  (window as any).Timer = (config: Config) => new Timer(config);

  // Expose constants.
  (window as any).green = "green";
  (window as any).red = "red";
  (window as any).white = "white";
  (window as any).black = "black";
})();
