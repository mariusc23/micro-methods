# micro-allow-methods

> Method validation middleware for [micro](https://github.com/zeit/micro).

## Installation

    npm install --save @mariusc23/micro-allow-methods

## Usage

```js
const { applyMiddleware } = require('@mariusc23/micro-middleware')
const { allowMethods } = require('@mariusc23/micro-allow-methods')

const middleware = [
  allowMethods(['GET'])
]

module.exports = applyMiddleware(middleware, async (req, res) => {
  return 'Hello world'
})
```

## License

Copyright (c) 2017 Marius Craciunoiu. Licensed under the MIT license.
