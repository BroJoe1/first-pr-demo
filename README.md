# first-pr-demo

A tiny string utility library.

## Functions

- `capitalize(str)` — capitalizes the first letter of a string.
- `truncate(str, maxLength)` — truncates a string to `maxLength` characters and appends `...` if it was cut.

## Usage

```js
const { capitalize, truncate } = require("./strutils");

capitalize("hello"); // "Hello"
truncate("hello world", 5); // "hello..."
```

## Testing

Run the test suite:

```
npm test
```
