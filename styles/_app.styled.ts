import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    /* background-color: #1D1338; */
    background-image: url('https://images6.alphacoders.com/101/1012987.jpg');
    color: #fff;
  }

  /* Works for Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Works for Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  div h1:first-child {
    margin-top: 0;
  }
`;

export const ComponentContainer = styled.div`
  padding: 15px;
  position: relative;
  z-index: 10;
  @media screen and (min-width: 900px) {
    padding: 30px 60px;
  }
`;

export const BgShadow = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;