## Implement login

**!! BUG**

The bug is that every time you switch accounts, the HTML from the previous account is still stored in the HTML without being deleted.

I replaced the for-each that inserts "afterbegin" with a map and directly inserted it into containerMovements via innerHTML.

```js
function displayMovements(acc) {
  const html = acc.movements
    .map((movement, index) => {
      const type = movement > 0 ? "deposit" : "withdrawal";

      return `
        <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        index + 1
      } deposit</div>
      <div class="movements__value">${movement}€</div>
    </div>

    `;
    })
    .reverse()
    .join("");

  containerMovements.innerHTML = html;
}
```

Implement login. All UI starts when the user correctly enters the username and pin.

```js
//Event Handler
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Display summary,
    displaySummary(currentAccount);

    // Display balance
    calcAndPrintBalance(currentAccount);

    // Display movements
    displayMovements(currentAccount);
  }
});
```

[Next: Implement Transfer](./10-implements-transfer.md)
