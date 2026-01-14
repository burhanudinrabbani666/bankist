## Styling

```js
// styles
messsage.style.backgroundColor = "#37383d";
messsage.style.width = "120%";

console.log(messsage.style.color); // <Empty string>
console.log(messsage.style.backgroundColor);
console.log(getComputedStyle(messsage).color);
console.log(getComputedStyle(messsage).height);

messsage.style.height =
  Number.parseFloat(getComputedStyle(messsage).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "indigo");
```

## Atributes

```js
// atributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute("src"));
console.log(logo.className);

logo.alt = "Beutifull minimalist logo";

console.log(logo.alt);

// not standar
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data atributes
console.log(logo.dataset.versionNumber);
```

## Classes

```js
//classes
logo.classList.add("clasname");
logo.classList.remove("clasname");
logo.classList.toggle("clasname");
logo.classList.contains("clasname");

// dont use this
logo.className = "jonas";

console.log(logo);
```

[Next: Implement smooth scrolling](./04-implementing-smooth-scrolling.md)
