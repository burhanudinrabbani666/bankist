## fill()

The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// FILL
arr.fill(23, 2, 6); // mutate original array
console.log(arr);
```

## Array.from()

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, index) => index + 1);

const dice = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6));

labelBalance.addEventListener(`click`, function () {
  const movementUi = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace(`€`, ``))
  );

  console.log(movementUi);

  const movementUi2 = [...document.querySelectorAll(".movements__value")];

  console.log(movementUi2);
});
```
