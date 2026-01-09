"use strict";
import { account1, account2 } from "./data.js";
import { createUserName, startLogoutTimer } from "./model.js";

// prettier-ignore
import {
  btnLogin, btnTransfer, btnLoan, btnClose, btnSort, containerApp,
  inputLoginUsername, inputLoginPin, inputCloseUsername, inputClosePin, inputTransferAmount, inputTransferTo,
  labelWelcome, labelDate, labelTimer,
  inputLoanAmount,nav, btnLogout
} from "./element.js";

import { updateUi, displayMovements } from "./view.js";

/////////////////////////////////////////////////
let accounts = [account1, account2];
let currentAccount;
let sorted = false;
let timer;

function App() {
  // Initial function calling
  createUserName(accounts);

  //Event Handler
  btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    currentAccount = accounts.find(
      (acc) => acc.username === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and Welcome message
      labelWelcome.textContent = `Welcome back ${
        currentAccount.owner.split(" ")[0]
      }`;
      nav.style.display = "none";
      containerApp.style.display = "grid";

      setTimeout(() => {
        containerApp.style.opacity = 1;
      }, 300);

      // Welcome message
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };

      labelDate.textContent = new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(now);

      // Clear input
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur();

      labelTimer.textContent = "";
      if (timer) clearInterval(timer);
      timer = startLogoutTimer();

      updateUi(currentAccount);
    }
  });

  btnTransfer.addEventListener("click", function (event) {
    event.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const reciverAccount = accounts.find(
      (account) => account.username === inputTransferTo.value
    );
    const movementDate = new Date().toISOString();

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
      currentAccount.movementsDates = [
        ...currentAccount.movementsDates,
        movementDate,
      ];

      reciverAccount.movements = [...reciverAccount.movements, amount];
      reciverAccount.movementsDates = [
        ...reciverAccount.movementsDates,
        movementDate,
      ];

      // Update UI
      updateUi(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }
  });

  btnLoan.addEventListener("click", function (event) {
    event.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);
    const movementDate = new Date().toISOString();

    if (
      amount > 0 &&
      currentAccount.movements.some((movement) => movement >= amount * 0.1)
    ) {
      setTimeout(() => {
        // Add Movemenet
        currentAccount.movements = [...currentAccount.movements, amount];

        // add movements dates
        currentAccount.movementsDates = [
          ...currentAccount.movementsDates,
          movementDate,
        ];

        // Update UI
        updateUi(currentAccount);

        // Reset
        clearInterval(timer);
        timer = startLogoutTimer();
      }, 2500);
    } else {
      alert("Loan Not accepted");
    }

    inputLoanAmount.value = "";
  });

  btnClose.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      accounts = accounts.filter(
        (account) => account.username !== inputCloseUsername.value
      );

      containerApp.style.opacity = 0;
      containerApp.style.display = "none";

      setTimeout(() => {
        nav.style.display = "inline-block";
      }, 500);
    }

    inputCloseUsername.value = inputClosePin.value = "";
    labelWelcome.textContent = `log in to get started`;
  });

  btnSort.addEventListener("click", function (event) {
    event.preventDefault();

    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
  });

  btnLogout.addEventListener("click", () => {
    containerApp.style.opacity = 0;
    containerApp.style.display = "none";

    setTimeout(() => {
      nav.style.display = "inline-block";
    }, 500);
  });
}

App();
