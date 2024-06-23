// Set active tab on load
var tabs = document.querySelectorAll(".tab");
var path = window.location.pathname;
tabs.forEach((tab) => {
  const hxGet = tab.getAttribute("hx-get");
  const href = hxGet ? hxGet.replace("/index.md", "") : "";
  if (href === path) {
    tab.classList.add("tab--active");
  }
});
