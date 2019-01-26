import { css } from 'lit-css';

export const myLitMicroAppStyle = css`
:host {
  display: block;
}
:host([hidden]) {
  display: none;
}
h1 {
    font-size: 1.4em;
    margin: 1em 0;
}
button {
    width: 3rem;
    height: 3rem;
    border: none;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    background-color: var(--button-background-color);
    color: var(--button-color);
    font-weight: bold;
}

button + span {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    padding: .76em;
}
`;
