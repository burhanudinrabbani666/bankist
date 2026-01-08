## Remainder operator

```js
// The  remainder Operator
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5
console.log(8 % 3); // 2
console.log(101 % 4); // 1
console.log(111 % 10); // 1
console.log(6 % 2); // 0

const isEven = (n) => n % 2 === 0;

console.log(isEven(10)); // true
console.log(isEven(11)); // false
console.log(isEven(70)); // true
console.log(isEven(67)); // false

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach((row, index) => {
    if (index % 2 === 0) row.style.backgroundColor = "orangered";
    if (index % 3 === 0) row.style.backgroundColor = "skyblue";
  });
});
```

[Next: Numeric Separator](./04-numeric-separator.md)
