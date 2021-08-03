# CSS Maid 🧹

![css-maid logo](https://raw.githubusercontent.com/joshxfi/green-calculator/master/public/css-maid-logo.png)

## What is it?

> TL;DR &rarr; `CSS-Maid` is a `CSS` reset for `React.js`!

`CSS Maid` is a tool for `React.js` that helps clean up & reset default css! It resets default padding, remove text-decoration on `<a>` tag, and many more! This tool was built using `emotion` & `typescript`!

## Installation

```shell
# install with npm
npm i css-maid

# install with yarn
yarn add css-maid
```

## Quick Start

- Javascript

```js
import Maid from "css-maid";

const App = () => {
  return (
    <div>
      <a href='#'>Hello World!</a>
      <ul>
        <li>React</li>
        <li>CSS</li>
        <li>Maid</li>
      </ul>

      <Maid />
    </div>
  );
};
```

- TypeScript

```js
import React from "react";
import Maid from "css-maid";

const App: React.FC = () => {
  return (
    <div>
      <a href='#'>Hello World!</a>
      <ul>
        <li>React</li>
        <li>CSS</li>
        <li>Maid</li>
      </ul>

      <Maid />
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
}

body {
  line-height: 1;
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
