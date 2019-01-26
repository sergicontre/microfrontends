import { LitElement, html } from 'lit-element';
import { myLitMicroAppStyle } from './my-lit-microapp.style';

export class MyLitMicroApp extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      value: { type: Number }
    }
  }

  constructor() {
    super();
    this.value = 0;
    this.message = 'Lit Element'
  }

  render() {
    return html`
    <style>${myLitMicroAppStyle}</style>
    <h1>Made with <span style="color:#e21010">♥</span> ️in ${this.message}</h1>
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
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }));
  }
}

// Register the element with the browser
customElements.define('my-lit-microapp', MyLitMicroApp);

