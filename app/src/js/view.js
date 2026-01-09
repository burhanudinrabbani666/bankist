import { formatCurrencies, formatMovementDate } from "./model.js";
import {
  containerMovements,
  labelSumIn,
  labelSumOut,
  labelSumInterest,
  labelBalance,
} from "./element.js  ";

export function displayMovements(currentAccount, sort = false) {
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

export function displaySummary(currentAccount) {
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

export function calcAndPrintBalance(currentAccount) {
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

export function updateUi(currentAccount) {
  // Display summary,
  displaySummary(currentAccount);

  // Display balance
  calcAndPrintBalance(currentAccount);

  // Display movements
  displayMovements(currentAccount);
}
