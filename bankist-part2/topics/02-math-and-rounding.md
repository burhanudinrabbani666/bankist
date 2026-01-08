# MATH AND ROUNDING

````js
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Math max and Math min
console.log(Math.max(5, 23, 65, 43, 11));
console.log(Math.max(5, 23, "65", 43, 11));
console.log(Math.max(5, 23, "65px", 43, 11));

console.log(Math.min(5, 23, 65, 43, 11));
console.log(Math.min("5", 23, 65, 43, 11));

// Math PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Math random
console.log(Math.random() * 6); // 0.... - 5

// Math trunc
console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// Rounding

console.log(Math.trunc(23.3)); // 23

// Math round
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Math ceil
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math floor
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Negative value
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding desimals - to string
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"
```
````
