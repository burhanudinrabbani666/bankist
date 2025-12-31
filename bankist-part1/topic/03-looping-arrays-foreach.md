## Looping Arrays: ForEach()

The forEach() method of Array instances executes a provided function once for each array element. foreach cannot be break like for of !!

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
// forEach Method

// looping with for of
// for (const mov of movements) {
for (const [index, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movements ${index + 1}: You deposited ${mov}`);

  if (mov < 0)
    console.log(`Movements ${index + 1}: You withdrew ${Math.abs(mov)}`);
}

console.log(`-----------------`);

// looping with foreach
movements.forEach((mov, index) => {
  if (mov > 0) console.log(`Movements ${index + 1}: You deposited ${mov}`);

  if (mov < 0)
    console.log(`Movements ${index + 1}: You withdrew ${Math.abs(mov)}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
```

[Next: foreach with maps and sets](./04-foreach-with-maps-and-sets.md)
