import { LitElement, html } from 'lit-element';
import { myLitMicroAppStyle } from './my-lit-microapp.style';

export class MyLitMicroApp extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      value: { type: Number }
    }
  }

  constructor() {
    super();
    this.value = 0;
    this.title = 'Lit Element';
  }

  render() {
    return html`
    <style>${myLitMicroAppStyle}</style>
    <h1>Made with ❤️ ️in ${this.title}</h1>
    <button @click="${() => this.increment()}" aria-label="increment">+</button>
    <span>${this.value}</span>
    <button @click="${() => this.decrement()}" aria-label="decrement">-</button>
    `;
  }

  decrement() {
    this.value--;
    this._valueChanged();
  }

  increment() {
    this.value++;
    this._valueChanged();
  }

  _valueChanged() {
    this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
  }
}

// Register the element with the browser
customElements.define('my-lit-microapp', MyLitMicroApp);

