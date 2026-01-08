# CHECKING NUMBER

> Use **.isfinite()** to checking a number ⚠️.

```js
// 01. Checking number

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e30")); // NaN
console.log(Number.parseInt("2.5rem")); // 2
console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(parseFloat("2.5rem")); // 2.5

// IsNaN : boolean ❎
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite : boolean ✅ for checking number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20x")); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger : boolean ✅ for checking number
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger("20")); // false
console.log(Number.isInteger(+"20x")); // false
console.log(Number.isInteger(23 / 0)); // false
```

[Next: Math and rounding](./02-math-and-rounding.md)
