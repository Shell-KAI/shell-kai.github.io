"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.querySelector(".global-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".global-nav a");

  if (!nav || !toggle) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    body.classList.remove("is-menu-open");
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    body.classList.add("is-menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});
