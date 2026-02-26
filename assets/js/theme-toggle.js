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
    var experienceHeading = document.getElementById("experience");
    var experienceContainer = null;

    if (experienceHeading) {
      experienceContainer = experienceHeading.closest(".list-container");
    }

    if (!experienceContainer) {
      var headings = document.querySelectorAll(".list-container h3");
      for (var i = 0; i < headings.length; i++) {
        if ((headings[i].textContent || "").trim().toLowerCase() === "experience") {
          experienceContainer = headings[i].closest(".list-container");
          break;
        }
      }
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

  var currentTheme = "dark";
  applyTheme(currentTheme);
  highlightFirstExperienceItem();

  button.addEventListener("click", function () {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });
})();
