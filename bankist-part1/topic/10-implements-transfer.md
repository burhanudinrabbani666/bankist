## Implement Transfer

Transfer happen when transfer button click

```js
btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  // Clear fields
  inputTransferAmount.value = inputTransferTo.value = "";

  if (!reciverAccount) alert("Account not Found"); // check account

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAccount.username !== currentAccount.username
  ) {
    // Doing Transfer
    currentAccount.movements = [...currentAccount.movements, -amount];
    reciverAccount.movements = [...reciverAccount.movements, amount];

    // Update UI
    updateUi(currentAccount);
  }
});
```

[Next: find index of](./11-the-findindexof.md)
