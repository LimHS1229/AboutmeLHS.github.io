(function () {
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
  }

  function highlightFirstExperienceItem() {
    var headings = document.querySelectorAll("h3, h2");
    var experienceHeading = null;

    for (var i = 0; i < headings.length; i++) {
      var text = (headings[i].textContent || "").trim().toLowerCase();
      if (text === "experience") {
        experienceHeading = headings[i];
        break;
      }
    }

    if (!experienceHeading) {
      return;
    }

    var experienceContainer =
      experienceHeading.closest(".section-container") ||
      experienceHeading.closest(".list-container") ||
      experienceHeading.parentElement;

    while (experienceContainer && !experienceContainer.querySelector(".layout")) {
      experienceContainer = experienceContainer.parentElement;
    }

    if (!experienceContainer) {
      return;
    }

    experienceContainer.classList.add("experience-section");

    var node = experienceContainer.querySelector(".layout");

    if (node) {
      node.classList.add("experience-first-highlight");
    }
  }

  var currentTheme = "light";
  applyTheme(currentTheme);
  highlightFirstExperienceItem();

  button.addEventListener("click", function () {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });
})();
