const themeToggle = document.querySelector(".checkbox");
const body = document.body;

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
});

// Optional: Save theme preference in localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(currentTheme);
  themeToggle.checked = currentTheme === "dark-theme";
}

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark-theme" : "light-theme";
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
});
