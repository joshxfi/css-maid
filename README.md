# CSS Maid 🧹
<div align=center>
  <img width=500 src='https://raw.githubusercontent.com/joshxfi/green-calculator/master/public/css-maid-logo.png' />
</div>

<a href='https://www.npmjs.com/package/css-maid' target='_blank'>![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)</a>
<a href='https://yarnpkg.com/package/css-maid' target='_blank'>![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)</a>
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## What is it?

CSS Maid is a tool for that helps clean up & reset default css! It resets default padding & margin, remove text-decoration on anchor tag, and many more!

## Installation

```shell
# install with npm
npm i css-maid

# install with yarn
yarn add css-maid
```

## Quick Start

- HTML via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-maid@2.0.0/Maid.min.css" />
```
---
- React.js

```js
import "css-maid";

const App = () => {
  return (
    <div>
      <h1>Yes, it's that easy!</h1>
    </div>
  );
};

export default App;
```

## Features

```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: inherit;
    vertical-align: baseline;
    font-size: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  input,
  textarea {
    outline: none;
  }
  
  textarea {
    resize: none;
  }
```
