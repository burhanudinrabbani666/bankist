## Looping Arrays: ForEach()

The forEach() method of Array instances executes a provided function once for each array element

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  movement > 0
    ? console.log(`Your deposite id ${movement} `)
    : console.log(`You Withdre ${Math.abs(movement)}`);
} // Traditional

console.log(`----------------------------`);

movements.forEach((movement) => {
  movement > 0
    ? console.log(`Your deposite id ${movement} `)
    : console.log(`You Withdre ${Math.abs(movement)}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
```

#### destruturing

```js
for (const [index, movement] of movements.entries()) {
  movement > 0
    ? console.log(`Movement ${index + 1}: Your deposite id ${movement} `)
    : console.log(`Movement ${index + 1}: You Withdre ${Math.abs(movement)}`);
} // Traditional

console.log(`----------------------------`);

movements.forEach((movement, index, array) => {
  movement > 0
    ? console.log(`Movement ${index + 1}: Your deposite id ${movement} `)
    : console.log(`Movement ${index + 1}: You Withdre ${Math.abs(movement)}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
```

> forEach always loop over the entier arrays
