let hasTyped = false;

// Toggle Menu and Type "Palak Prakash"
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  if (!hasTyped) {
    const name = "Palak Prakash";
    const logoElement = document.getElementById("logo-text");
    logoElement.textContent = ""; // Clear existing text
    let i = 0;

    function typeLogo() {
      if (i < name.length) {
        logoElement.textContent += name.charAt(i);
        i++;
        setTimeout(typeLogo, 150);
      }
    }

    typeLogo();
    hasTyped = true;
  }
}

// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById("theme-toggle"); // Button to toggle theme
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // Toggle the class for dark mode

  // Save the user's mode preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Check saved theme preference and apply
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

