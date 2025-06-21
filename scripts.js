"use strict";

const mobileMenuButton = document.querySelector(".menu-toggle-btn");
const mobileMenuIcon = document.querySelector(".mobile-nav-toggle");
const navigationMenu = document.querySelector("#nav-menu");

const toggleOverlay = () => {
  const overlay = document.querySelector(".overlay-modal");
  if (overlay) {
    overlay.remove();
  } else {
    const newOverlay = document.createElement("div");
    newOverlay.classList.add("overlay-modal");
    document.body.appendChild(newOverlay);
  }
};


mobileMenuButton.addEventListener("click", () => {
  toggleOverlay();
  const isClosed = navigationMenu.dataset.status === "closed";
  navigationMenu.dataset.status = isClosed ? "open" : "closed";
  mobileMenuIcon.src = isClosed 
    ? "../images/hamburger-menu-close.png"
    : "../images/hamburger-menu-open.png";
});