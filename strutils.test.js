const assert = require("assert");
const { capitalize, truncate } = require("./strutils");

assert.strictEqual(capitalize("hello"), "Hello");
assert.strictEqual(truncate("hello world", 5), "hello...");
assert.strictEqual(truncate("hi", 5), "hi");

console.log("All tests passed.");
