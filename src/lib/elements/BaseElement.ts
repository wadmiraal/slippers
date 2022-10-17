export class BaseElement {
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
