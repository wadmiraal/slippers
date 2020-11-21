"use strict";
(function () {
    function handleContainerArgs([first, ...rest]) {
        if (first.width !== undefined ||
            first.height !== undefined ||
            first.do !== undefined ||
            first.align !== undefined
        // TODO...
        ) {
            return [first, rest];
        }
        else {
            return [null, [first, ...rest]];
        }
    }
    function extractNumber(value) {
        return Number(value.replace(/^(\d+).*/, "$1"));
    }
    class BaseElement {
        constructor(tagName) {
            this.el = document.createElement(tagName);
        }
        delete() {
            var _a;
            (_a = this.el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.el);
        }
        getHTMLElement() {
            return this.el;
        }
    }
    class VisualElement extends BaseElement {
        constructor(tagName, config) {
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
        set backgroundColor(value) {
            this.el.style.backgroundColor = value;
        }
        get backgroundColor() {
            return this.el.style.backgroundColor;
        }
        set borderColor(value) {
            this.el.style.borderColor = value;
        }
        get borderColor() {
            return this.el.style.borderColor;
        }
        set borderWidth(value) {
            this.el.style.borderWidth = String(value) + "px";
        }
        get borderWidth() {
            return extractNumber(this.el.style.borderWidth);
        }
        set borderRadius(value) {
            this.el.style.borderRadius = String(value) + "%";
        }
        get borderRadius() {
            return extractNumber(this.el.style.borderRadius);
        }
        set width(value) {
            this.el.style.width = String(value) + "px";
        }
        get width() {
            return extractNumber(this.el.style.width);
        }
        set height(value) {
            this.el.style.height = String(value) + "px";
        }
        get height() {
            return extractNumber(this.el.style.height);
        }
        set left(value) {
            this.el.style.position = "absolute";
            this.el.style.left = String(value) + "px";
        }
        get left() {
            return extractNumber(this.el.style.left);
        }
        set top(value) {
            this.el.style.position = "absolute";
            this.el.style.top = String(value + "px");
        }
        get top() {
            return extractNumber(this.el.style.top);
        }
    }
    class TextElement extends VisualElement {
        constructor(tagName, config) {
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
        set size(value) {
            this.el.style.fontSize = String(value) + "px";
        }
        get size() {
            return extractNumber(this.el.style.fontSize);
        }
        set text(value) {
            this.el.textContent = value;
        }
        get text() {
            return this.el.textContent || "";
        }
        set font(value) {
            this.el.style.fontFamily = value;
        }
        get font() {
            return this.el.style.fontFamily;
        }
        set color(value) {
            this.el.style.color = value;
        }
        get color() {
            return this.el.style.color;
        }
        set bold(value) {
            this.el.style.fontWeight = value ? "bold" : "regular";
        }
        get bold() {
            return this.el.style.fontWeight === "bold";
        }
        set italic(value) {
            this.el.style.fontStyle = value ? "italic" : "regular";
        }
        get italic() {
            return this.el.style.fontStyle === "italic";
        }
    }
    class ContainerElement extends VisualElement {
        constructor(tagName, config) {
            super(tagName, config);
            this.el.style.display = "relative";
            if (config.align) {
                this.align = config.align;
            }
        }
        set align(value) {
            this.el.style.textAlign = value;
        }
        get align() {
            return this.el.style.textAlign;
        }
        append(e) {
            this.el.appendChild(e.getHTMLElement());
        }
        remove(e) {
            this.el.removeChild(e.getHTMLElement());
        }
    }
    class App extends ContainerElement {
        constructor(...args) {
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
        constructor(config) {
            super("BUTTON", config);
            this.clickCallback = config.do;
            this.el.addEventListener("click", () => {
                this.clickCallback && this.clickCallback();
            });
            this.el.style.padding = "5px 10px";
            this.el.style.margin = "2px";
            this.el.style.cursor = "pointer";
            if (config.borderColor === undefined &&
                config.borderWidth === undefined) {
                this.borderColor = "transparent";
            }
            if (config.borderRadius === undefined) {
                this.borderRadius = 5;
            }
        }
        set do(callback) {
            this.clickCallback = callback;
        }
        get do() {
            return this.clickCallback || (() => { });
        }
    }
    class LineOfText extends TextElement {
        constructor(config) {
            super("SPAN", config);
        }
    }
    class Paragraph extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("P", config || {});
            children.forEach((child) => {
                this.append(child);
            });
        }
    }
    class Section extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("DIV", config || {});
            children.forEach((child) => {
                this.append(child);
            });
        }
    }
    let timerCount = 0;
    class Timer extends BaseElement {
        constructor(config) {
            super("SPAN");
            this.timer = 0;
            timerCount++;
            this.el.style.display = "none";
            this.el.className = "timer__" + timerCount;
            this.increment = config.inc || 1000;
            this.ellapsed = 0;
            this.callback = config.do;
        }
        set inc(value) {
            this.increment = value;
            this.stop();
            this.start();
        }
        get inc() {
            return this.increment;
        }
        set do(callback) {
            this.callback = callback;
            this.stop();
            this.start();
        }
        get do() {
            return this.callback || (() => { });
        }
        start() {
            if (this.timer) {
                this.stop();
            }
            this.timer = setInterval(() => {
                this.ellapsed += this.increment;
                if (this.callback !== undefined) {
                    const minutes = Math.floor(this.ellapsed / 60000);
                    const [seconds, milliseconds] = String((this.ellapsed % 60000) / 1000).split(".");
                    this.callback(this.ellapsed, Number(milliseconds), Number(seconds), minutes);
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
    window.App = (...args) => new App(...args);
    window.Button = (config) => new Button(config);
    window.LineOfText = (config) => new LineOfText(config);
    window.Paragraph = (...args) => new Paragraph(...args);
    window.Section = (...args) => new Section(...args);
    window.Timer = (config) => new Timer(config);
    // Expose constants.
    window.green = "green";
    window.red = "red";
    window.white = "white";
    window.black = "black";
})();
