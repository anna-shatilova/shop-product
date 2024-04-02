import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Gotham';
  src: url('/fonts/gotham/GothamBook.ttf');
  font-style: normal;
}

@font-face {
  font-family: 'Gotham Pro';
  src: url('/fonts/gothamPro/gothampro.ttf');
  font-style: normal;
}

a,
a:visited {
  font-family: 'Gotham';
  text-decoration: none;
  cursor: pointer;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Gotham';
  color: #000000;
}

button {
  cursor: pointer;
}

input,
button {
  border: none;
  outline: none;
}

ul li {
  list-style: none;
}`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 16px 24px 48px 0px;
`

export const Button = styled.button`
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  background: #1551e5;

  &:hover {
    background: #316cff;
    box-shadow: 0px 12px 16px -7px #1551e570;
  }

  &:focus {
    background: #1551e5;
  }
`
