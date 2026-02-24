(function () {
  var STORAGE_KEY = "manual-theme";
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle-button");

  if (!button) {
    return;
  }

  function applyTheme(theme) {
    root.classList.remove("manual-light", "manual-dark");
    root.classList.add(theme === "light" ? "manual-light" : "manual-dark");
    button.querySelector(".theme-toggle-icon").textContent = theme === "light" ? "L" : "D";
    button.querySelector(".theme-toggle-text").textContent = theme === "light" ? "Light" : "Dark";
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function preferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    // Default to dark mode unless user explicitly picked a mode.
    return "dark";
  }

  var currentTheme = preferredTheme();
  applyTheme(currentTheme);

  button.addEventListener("click", function () {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });
})();
