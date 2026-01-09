import { labelTimer, labelWelcome, containerApp } from "./element.js";

export function formatCurrencies(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

export function formatMovementDate(date, currentAccount) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDayPassed(new Date(), date);

  if (dayPassed === 0) return `Today`;
  if (dayPassed === 1) return `Yesterday`;
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  return new Intl.DateTimeFormat(currentAccount.locale).format(date);
}

export function createUserName(accounts) {
  accounts.forEach((account) => {
    // adding new properti to account
    account.username = account.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}

export const startLogoutTimer = function () {
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
  let time = 300;
  // call tiemr every second
  const timer = setInterval(tick, 1000);

  return timer;
};
