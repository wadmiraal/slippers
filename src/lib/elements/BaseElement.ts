export class BaseElement<T extends HTMLElement = HTMLElement> {
  protected el: T;

  constructor(tagName: string) {
    this.el = document.createElement(tagName) as T;
  }

  delete() {
    this.el.parentNode?.removeChild(this.el);
  }

  getHTMLElement() {
    return this.el;
  }
}
