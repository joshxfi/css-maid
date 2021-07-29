# CSS Maid 🧹
![css-maid logo](https://raw.githubusercontent.com/joshxfi/green-calculator/master/public/css-maid-logo.png)
## What is it?
`CSS Maid` is a tool for `React.js` that helps clean up default css! It resets default padding, remove text-decoration on `<a>` tag, and many more! This tool was built using `emotion` & `typescript`!

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
import Maid from 'css-maid'

const Component = () => {
  return (
    <div>
      <Maid />
    </div>
  )
}
```
- TypeScript
```js
import React from 'react'
import Maid from 'css-maid'

const Component: React.FC = () => {
  return (
    <div>
      <Maid />
    </div>
  )
}
```
