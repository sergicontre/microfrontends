import { css } from 'lit-css';

export const myLitMicroAppStyle = css`
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
  :host([hidden]) {
    display: none;
  }
`;
