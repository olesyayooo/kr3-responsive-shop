document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("site-nav--open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Закрыть меню" : "Открыть меню"
    );

    const icon = menuButton.querySelector(".menu-toggle__icon");

    icon.textContent = isOpen ? "✕" : "☰";
  });
});