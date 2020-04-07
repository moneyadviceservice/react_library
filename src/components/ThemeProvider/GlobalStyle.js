import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  // Fonts
  ${props => props.theme.typography.fontFace}

  // Resetting margins, paddings, and borders
  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  // typography
  html {
    font-size: 100%;
  }
  body {
    font-size: 1rem;
    ${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontLighter};
    color: ${props => props.theme.colors.black};
  }
  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  // anchor
  a {
    color: ${props => props.theme.colors.linkDefault};
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &:hover,
    &:focus {
      color: inherit;
      text-decoration: underline;
    }

    &:hover {
      outline: none;
    }

    &:focus {
      outline: solid 0.1875rem ${props => props.theme.colors.focusBg};
      color: ${props => props.theme.colors.focusBg};
    }

    // Removes active link colour that is applied in Mobile Safari and adds kerning
    &[href^=tel] {
      color: inherit;
      letter-spacing: -1px;
      text-decoration: none;
    }
  }

  // Layout & box sizing
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }

  // Resetting specific element styles
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  img,
  video {
    max-width: 100%;
  }
  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }

  // Attributes & states
  [hidden] {
    display: none !important;
  }
  [disabled] {
    cursor: not-allowed;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
`
export default GlobalStyle
