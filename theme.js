// SPDX-License-Identifier: AGPL-3.0-or-later
// Light, dark or the system's choice. Loaded in <head> so the page is drawn in the right theme at once; the choice
// is kept in this browser only (localStorage), nothing leaves it.
(function () {
  var KEY = "verkodo-theme";
  var root = document.documentElement;

  function get() {
    try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; }
  }

  function apply(choice) {
    if (choice === "light" || choice === "dark") root.setAttribute("data-theme", choice);
    else root.removeAttribute("data-theme");
    var buttons = document.querySelectorAll("[data-theme-choice]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-theme-choice") === choice));
    }
  }

  apply(get());

  document.addEventListener("DOMContentLoaded", function () {
    apply(get());
    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-theme-choice]");
      if (!button) return;
      var choice = button.getAttribute("data-theme-choice");
      try {
        if (choice === "system") localStorage.removeItem(KEY); else localStorage.setItem(KEY, choice);
      } catch (e) { /* storage blocked: the choice holds for this page only */ }
      apply(choice);
    });
  });
})();
