"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Adding element for cookie content

const header = document.querySelector(".header");
document.querySelectorAll(".section");

// adding new element
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookied for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message);

// delete element
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

// IMPLEMENT SMOOTH SCROOLING

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

btnScrollTo.addEventListener("click", function (event) {
  /*
  const section1Coordinte = section1.getBoundingClientRect();
  
  // OLD SCHOLL
   window.scrollTo({
     left: section1Coordinte.left + window.scrollX,
     top: section1Coordinte.top + window.scrollY,
     behavior: "smooth",
   });
  */

  // MODERN BROWSER
  section1.scrollIntoView({ behavior: "smooth" });
});
