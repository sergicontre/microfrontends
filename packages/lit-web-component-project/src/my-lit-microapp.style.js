import { css } from 'lit-css';

export const myLitMicroAppStyle = css`
:host {
    display: block;
    color: var(--primary-color);
    background: var(--primary-background-color);
    --primary-color: var(--primary-color, #000);
    --primary-background-color: var(--primary-background-color, #FFF);
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
    background-color: var(--primary-color, black);
    color: var(--primary-background-color, #fff);
  }
  :host([hidden]) {
    display: none;
  }
`;
