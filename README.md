# CSS Maid 🧹
<a href='https://www.npmjs.com/package/css-maid' target='_blank'>![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)</a>
<a href='https://yarnpkg.com/package/css-maid' target='_blank'>![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)</a>
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![css-maid logo](https://raw.githubusercontent.com/joshxfi/green-calculator/master/public/css-maid-logo.png)

## What is it?

`CSS Maid` is a tool for that helps clean up & reset default css! It resets default padding, remove text-decoration on anchor tag, and many more!

## Installation

```shell
# install with npm
npm i css-maid

# install with yarn
yarn add css-maid
```

## Quick Start

- React

```js
import "css-maid";

const App = () => {
  return (
    <div>
      <h1>Yes, it's that easy!</h1>
    </div>
  );
};
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