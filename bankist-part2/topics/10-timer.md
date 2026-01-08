## timer

```js
const ingredients = [`olive`, `spinach`];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`),
  4000,
  ...ingredients
);
console.log("waiting...");

if (ingredients.includes(`spinach`)) clearTimeout(pizzaTimer);

// settimet out

setInterval(
  (value) => {
    const valueNum = value;
    valueNum + value;

    console.log(valueNum);
  },
  3000,
  1
);
```
