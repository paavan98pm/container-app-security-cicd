# random-bool

> Return a random boolean value (`true` or `false`).


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-bool/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-bool/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-bool)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-bool/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-bool)


## Install

```
$ npm install --save random-bool 
```


## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-bool/blob/master/test/spec/index.js).

```js
var randomBool = require('random-bool');

// API
// - randomBool([options])

// options
// - likelihood
```

The default likelihood of success (returning `true`) is `50%`:

```js
randomBool(); 
// => true
```

Can optionally specify the likelihood in percent:

```js
randomBool({ likelihood: 30 });
// => false
```

In this case only a `30%` likelihood of `true`, and a `70%` likelihood of `false`.

## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.
- [random-index](https://github.com/mock-end/random-index) - Return a random array-like index.
- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-octal](https://github.com/mock-end/random-octal) - Return a random octal number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 
- [random-char](https://github.com/mock-end/random-char) - Return a random char.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-bool/issues/new).
