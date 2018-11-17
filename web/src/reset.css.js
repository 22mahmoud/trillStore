const styled = { resetCss: css => css };

export default styled.resetCss`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  *,
  ::after,
  ::before {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }
  ::after,
  ::before {
    text-decoration: inherit;
    vertical-align: inherit;
  }
  html {
    box-sizing: border-box;
    cursor: default;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }
  body {
    font-size: 18px;
    margin: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  figcaption,
  figure,
  main {
    display: block;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  nav ol,
  nav ul {
    list-style: none;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  dfn {
    font-style: italic;
  }
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  ::-moz-selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }
  ::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
  audio,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    display: inline-block;
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details,
  menu {
    display: block;
  }
  summary {
    display: list-item;
  }
  canvas {
    display: inline-block;
  }
  template {
    display: none;
  }
  [tabindex],
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  [hidden] {
    display: none;
  }
  [aria-busy='true'] {
    cursor: progress;
  }
  [aria-controls] {
    cursor: pointer;
  }
  [aria-hidden='false'][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }
  [aria-disabled] {
    cursor: default;
  }

  ul,
  ol {
    padding-left: 0;
  }
  ul ul,
  ul ol,
  ol ol,
  ol ul {
    padding-left: 1.5em;
  }
  ul li,
  ol li {
    margin-bottom: 0.75em;
    line-height: 1.6;
  }
  @media all and (max-width: 1000px) {
    html,
    body {
      font-size: 14px;
    }
    li {
      list-style-position: outside;
      margin-left: 1em;
    }
  }
`;
