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
    "2026-01-04T17:01:17.194Z",
    "2026-01-05T10:36:17.929Z",
    "2026-01-07T10:51:36.790Z",
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
let sorted = false;
let timer;

// fake always login
// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = 1;

// FUNCTION
function formatCurrencies(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

function formatMovementDate(date, currentAccount) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDayPassed(new Date(), date);

  if (dayPassed === 0) return `Today`;
  if (dayPassed === 1) return `Yesterday`;
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(currentAccount.locale).format(date);
}

// Display
function displayMovements(currentAccount, sort = false) {
  const combineMovementAndDates = currentAccount.movements.map(
    (movement, index) => {
      return {
        movement,
        movementDate: currentAccount.movementsDates.at(index),
      };
    }
  );

  if (sort) combineMovementAndDates.sort((a, b) => a.movement - b.movement);

  const html = combineMovementAndDates
    .map((object, index) => {
      const { movement, movementDate } = object;
      const type = movement > 0 ? "deposit" : "withdrawal";
      const date = new Date(movementDate);
      const displayDate = formatMovementDate(date, currentAccount);

      const formatedMovements = formatCurrencies(
        movement,
        currentAccount.locale,
        currentAccount.currency
      );

      return `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        index + 1
      } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMovements}</div>
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
  labelSumIn.textContent = formatCurrencies(
    incomes,
    currentAccount.locale,
    currentAccount.currency
  );
  labelSumOut.textContent = formatCurrencies(
    Math.abs(outcome),
    currentAccount.locale,
    currentAccount.currency
  );
  labelSumInterest.textContent = formatCurrencies(
    interest,
    currentAccount.locale,
    currentAccount.currency
  );
}

function calcAndPrintBalance(currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  // Render in DOM
  labelBalance.textContent = formatCurrencies(
    currentAccount.balance,
    currentAccount.locale,
    currentAccount.currency
  );
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

const startLogoutTimer = function () {
  const tick = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);

    // Each call print remining time
    labelTimer.textContent = `${min}:${sec}`;

    // timer 0, stop timer and logout
    if (time === 0) {
      clearInterval(timer);

      labelWelcome.textContent = `log in to get started`;
      containerApp.style.opacity = 0;
    }

    // decrises
    time--;
  };
  let time = 30;
  // call tiemr every second
  const timer = setInterval(tick, 1000);

  return timer;
};

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
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

btnSort.addEventListener("click", function (event) {
  event.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////

/*
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

////////////////////////////////
// 02. Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Math max and Math min
console.log(Math.max(5, 23, 65, 43, 11));
console.log(Math.max(5, 23, "65", 43, 11));
console.log(Math.max(5, 23, "65px", 43, 11));

console.log(Math.min(5, 23, 65, 43, 11));
console.log(Math.min("5", 23, 65, 43, 11));

// Math PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Math random
console.log(Math.random() * 6); // 0.... - 5

// Math trunc
console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// Rounding

console.log(Math.trunc(23.3)); // 23

// Math round
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Math ceil
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math floor
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Negative value
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding desimals - to string
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"

//////////////////
// 03. Reminder

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1 <---- 1 is reminder

function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

/////////////
// 06. Date
// Creating Date

const now = new Date();
console.log(now);

console.log(new Date("Jan 08 2026 13:14:04"));
console.log(new Date("December 24, 2025"));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 31, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with date

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142231780000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));

const calcDayPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

// console.log(day1);

// intl date

const num = 1323221.23;
const options = {
  style: "currency",
  unit: "celsius",
  currency: account2.currency,
};

console.log(`US:     `, new Intl.NumberFormat("en-US", options).format(num));
console.log(`Germany:`, new Intl.NumberFormat("de-BE", options).format(num));
console.log(`Syria:  `, new Intl.NumberFormat("ar-SY", options).format(num));

// Set timeout
setTimeout(() => console.log("Hello World"), 3000);
console.log("Hi");

// Set interval
// setInterval(() => {
//   console.log(new Date().getSeconds());
// }, 1000);
*/
