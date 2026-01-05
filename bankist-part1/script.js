"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

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
function displayMovements(currentAccount) {
  const html = currentAccount.movements
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

btnClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // const index = accounts.findIndex(
    //   (account) => account.username === currentAccount.username
    // );

    // accounts.splice(index, 1);

    accounts = accounts.filter(
      (account) => account.username !== inputCloseUsername.value
    );

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

// Simple Array Method

const arr = [1, 2, 3, 4, 5];

// 1. Slice Method
console.log(arr.slice(3)); // [4, 5]
console.log(arr.slice(0, 3)); // [1, 2, 3]
console.log(arr.slice(-1)); // [5]

// copy all array
console.log(arr.slice()); // [1, 2, 3, 4, 5]
console.log([...arr]); // [1, 2, 3, 4, 5]

// 2. Splice Method
console.log(arr.splice(2)); // [3, 4, 5]
console.log(arr); // [1, 2]

// 3. Reverse Method
const arr1 = [6, 7, 8, 9, 10];
console.log(arr1.reverse());

// 4. Concat Method
const nums = arr.concat(arr1);
console.log(nums); // [1, 2, 6, 7, 8, 9, 10]

// 5. Join Method
console.log(nums.join(" ")); // "1 2 6 7 8 9 10"

const arr = [1, 2, 3, 4, 5];

// 6. At Method
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

// get last value of index
console.log(arr[arr.length - 1]); // 5
console.log(arr.slice(-1)); // 5
console.log(arr.at(-1)); // 5

// use at string
console.log("burhanudin rabbani".at(-1)); // i

// 7. forEach Method

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



// using forEach with maps and set

// a. forEach on map
currencies.forEach((currencie, key) => {
  console.log(`${key}: ${currencie}`);
});

console.log(`-------------`);
// b. forEach on set
const currencies2 = new Set(["EUR", "EUR", "DOLLAR", "DOLLAR", "IDR", "IDR"]);

currencies2.forEach((currencie, key) => {
  console.log(`${key}: ${currencie}`);
});

*/

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets

Test data:
Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
const dogsJuliaCorrected = dogsJulia.slice(1, -2);
const dogsJuliaAndKate = dogsJuliaCorrected.concat(dogsKate);

function checkDogs(dogs) {
  dogs.forEach((dog, index) => {
    const checkDog = dog >= 3 ? "adult" : "puppy";

    console.log(
      `Dog 🐶 number ${index + 1} is an ${checkDog}, and is ${dog} years old`
    );
  });
}

checkDogs(dogsJuliaAndKate);

// map method

const ueroToUsd = 1.1;
const movementUsd = movements.map((mov) => mov * ueroToUsd);

console.log(movements); // not mutate
console.log(movementUsd);

const movementUsd1 = [];
for (const mov of movements) {
  movementUsd1.push(mov * ueroToUsd);
}
console.log(movementUsd1);

const movementsDescription = movements.map(
  (mov, index) =>
    `movement ${index + 1}: You ${
      mov > 0 ? "deposite" : "withdrawal"
    } ${Math.abs(mov)}`
);

console.log(movementsDescription);

// Filter method

const deposit = movements.filter((movement) => movement >= 0);
const withdrawal = movements.filter((movement) => movement <= 0);

console.log(movements);
console.log(deposit); // [200, 450, 3000, 70, 1300]
console.log(withdrawal); // [-400, -650, -130]

const deposit1 = [];
const withdrawal1 = [];
for (const movement of movements) {
  movement > 0 ? deposit1.push(movement) : withdrawal1.push(movement);
}

console.log(deposit1);
console.log(withdrawal1);

// reduce method

const balance = movements.reduce((acc, curr) => {
  console.log(`${acc} + ${curr} = ${acc + curr}`);
  return (acc += curr); // Snowball
}, 0); // Initial Value

console.log(balance);

console.log(`----------`);
// Maximum value

const maxValue = movements.reduce((acc, curr) => {
  console.log(`${acc} > ${curr} = `);

  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(maxValue);


// Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3]
Data 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

function calcAvgHumanAge(ages) {
  const humanAges = ages
  .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge >= 18);

  // const AvgHumanAge =
  //   humanAges.reduce((acc, curr) => {
  //     return (acc += curr);
  //   }, 0) /
  //   humanAges.reduce((acc, _) => {
  //     return (acc += 1);
  //   }, 0);

  const AvgHumanAge = humanAges.reduce((acc, age, _, array) => {
    return (acc += age / array.length);
  }, 0);

  return AvgHumanAge;
}

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Chaining method

const totalDepositeInUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositeInUSD);

// Challenge #3
function calcAvgHumanAge(ages) {
  const avgHumanAges = ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge >= 18)
    .reduce((acc, age, _, array) => acc + age / array.length, 0);

  return avgHumanAges;
}

// §Data 1: [5, 2, 4, 1, 15, 8, 3]
// §Data 2: [16, 6, 10, 5, 6, 1, 4]

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));

// find method
const firstWithdrawal = movements.find((mov) => mov < 0);
const account = accounts.find((acc) => (acc.owner = "Jessica Devis"));

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); // -450, first value and not array
console.log(accounts);

console.log(account);

*/

console.log(movements);

const lastWithdrawal = movements.findLastIndex((mov) => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 2000
);

console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex === 1
      ? `last Movement`
      : `${movements.length - latestLargeMovementIndex} movements ago`
  }`
);
