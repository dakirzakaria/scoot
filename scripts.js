"use strict";

const menuToggleButton = document.querySelector(".menu-toggle-button");
const menuToggleButtonIcon = document.querySelector(".menu-toggle-icon");
const mainNavigation = document.querySelector("#main-navigation");

const createOverlayModal = () => {
  let overlayModal = document.querySelector(".overlay-modal");
  if (overlayModal) {
    overlayModal.remove();
  } else {
    overlayModal = document.createElement("div");
    overlayModal.classList.add("overlay-modal");
    document.body.appendChild(overlayModal);
  }
};

menuToggleButton.addEventListener("click", () => {
  createOverlayModal();
  mainNavigation.dataset.status =
    mainNavigation.dataset.status === "closed" ? "open" : "closed";
  menuToggleButtonIcon.src =
    mainNavigation.dataset.status === "closed"
      ? "../images/icon-menu-open.png"
      : "../images/icon-menu-close.png";
});
