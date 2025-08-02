document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("modeToggle");
  const body = document.body;

  // 1. Dark Mode Toggle with localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    modeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  });

  // 2. Smooth Scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Optional: Typing animation for hero heading
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    let index = 0;

    function type() {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // typing speed
      }
    }

    type();
  }
});


