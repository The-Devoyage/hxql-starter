// Set active tab on load
var tabs = document.querySelectorAll(".tab");
var path = window.location.pathname;
tabs.forEach((tab) => {
  const href = tab.getAttribute("href");
  if (href === path) {
    tab.classList.add("tab--active");
  }
});
