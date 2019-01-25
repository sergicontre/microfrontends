/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


// Import LitElement base class and html helper function
import { LitElement, html } from '@polymer/lit-element';

export class MyLitMicroApp extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      value: { type: Number }
    }
  }

  // Alternative syntax, if using TypeScript or Babel experimental decorators and field assignments are available
  // @property({type: Number})
  // value = 0;

  constructor() {
    super();
    this.value = 0;
    this.message = 'Lit Element'
  }

  render() {
    return html`
    <style>
    :host {
      display: block;
    }
    h1{
      font-size: 1.4em;
    }
    button{
    border: none;
    padding: 15px 32px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    margin: 16px 0 !important;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    background-color: black;
    color: #fff;
    }
    button + span{
display: inline-block;
font-weight: 700;
padding: .76em;
    }
    :host([hidden]) { display: none; }

  </style>
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

