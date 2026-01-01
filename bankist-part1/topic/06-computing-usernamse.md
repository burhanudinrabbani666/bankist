## Computing username

this function can be used on HOMIE to !!!

```js
// map in practice
function createUserName(accounts) {
  accounts.forEach((account) => {
    // adding new properti to account
    account.userName = account.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}

// reduce in practice
function calcAndPrintBalance(movement) {
  const balance = movement.reduce((acc, curr) => {
    return (acc += curr);
  });

  labelBalance.textContent = `${balance} EUR`;
}
```

[Next: Chaining Method](./07-chaining-method.md)
