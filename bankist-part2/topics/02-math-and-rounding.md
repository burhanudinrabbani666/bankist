## Math and Rounding

```js
// MATH and ROUNDING
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 16, 34, 11, 3)); // 34
console.log(Math.max(5, 161, "342", 113, 38)); // 342
console.log(Math.min(5, 16, 34, 11, 3)); // 3

console.log(Math.PI * Number.parseFloat(`10px`) ** 2); //314

console.log(Math.trunc(Math.random() * 6) + 1); /// 1-6

const renderInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// integer Rounding
console.log(renderInt(10, 20));
console.log(renderInt(0, 3));

console.log(Math.trunc(20.5)); // 20
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.9)); // 23
console.log(Math.floor(23.2)); // 23

console.log(Math.trunc(-23.3)); // 23
console.log(Math.floor(-23.3)); // 24 ✅ lebih bagus pakai ini

// decimals rounding
console.log((2.7).toFixed(0)); // 3 //return string
console.log((2.7).toFixed(3)); // 2.700 // return string
console.log((3.123).toFixed(2)); // 3.12 // return string
console.log(+(2.7).toFixed(0)); // 3 return Number
```
