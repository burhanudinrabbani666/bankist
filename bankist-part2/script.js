"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// for save the current account login
let currentAccount;

// FUNCTION
// Display
function displayMovements(currentAccount, sort = false) {
  const movements = sort
    ? currentAccount.movements.slice().sort((a, b) => a - b)
    : currentAccount.movements;

  const html = movements
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

function displaySummary(currentAccount) {
  const incomes = currentAccount.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const outcome = currentAccount.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = currentAccount.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * currentAccount.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);

  // Render in DOM
  labelSumIn.textContent = `${incomes} €`;
  labelSumOut.textContent = `${Math.abs(outcome)} €`;
  labelSumInterest.textContent = `${interest} €`;
}

function calcAndPrintBalance(currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  // Render in DOM
  labelBalance.textContent = `${currentAccount.balance} EUR`;
}

function updateUi(currentAccount) {
  // Display summary,
  displaySummary(currentAccount);

  // Display balance
  calcAndPrintBalance(currentAccount);

  // Display movements
  displayMovements(currentAccount);
}

// Bussiness Logic
function createUserName(accounts) {
  accounts.forEach((account) => {
    // adding new properti to account
    account.username = account.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}

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
    containerApp.style.opacity = 1;

    // Clear input
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

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

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((movement) => movement >= amount * 0.1)
  ) {
    // Add Movemenet
    currentAccount.movements = [...currentAccount.movements, amount];

    // Update UI
    updateUi(currentAccount);
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
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (event) {
  event.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////

// 01. Checking number

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e30")); // NaN
console.log(Number.parseInt("2.5rem")); // 2
console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(parseFloat("2.5rem")); // 2.5

// IsNaN : boolean ❎
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20x")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite : boolean ✅ for checking number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20x")); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger : boolean ✅ for checking number
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger("20")); // false
console.log(Number.isInteger(+"20x")); // false
console.log(Number.isInteger(23 / 0)); // false
