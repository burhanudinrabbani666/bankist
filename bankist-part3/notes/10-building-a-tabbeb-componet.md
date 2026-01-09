## Bilding a Tabbed Components

```js
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContet = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");

  // Guard
  if (!clicked) return;

  // remove active classes
  tabs.forEach((tab) => {
    tab.classList.remove("operations__tab--active");
  });

  tabsContet.forEach((content) => {
    content.classList.remove("operations__content--active");
  });

  // Active Tabs
  clicked.classList.add("operations__tab--active");

  // Active content tabs
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
```
