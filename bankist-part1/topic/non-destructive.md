## toReverse

```js
console.log(movements); // original
const reverseMov = movements.reverse();

console.log(reverseMov);
console.log(movements); // mutated
```

```js
console.log(movements); // original
const reverseMov = movements.toReversed();

console.log(reverseMov);
console.log(movements); // not mutated
```

## with()

The with() method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

```js
const newMovement = movements.with(0, 2000);
console.log(newMovement); // mutated
console.log(movements); // not mutated
```
