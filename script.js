// --------- Thème sombre (Dark Mode) ----------
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) toggleBtn.innerText = isDark ? "☀️" : "🌙";
}

// --------- Génération des sections communes ----------

function nav() {
  return `<ul class="nav-links">
    <li><a href="index.html">Accueil</a></li>
    <li><a href="about.html">À propos</a></li>
    <li><a href="experience.html">Parcours</a></li>
    <li><a href="projects.html">Projets</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>`;
}

function footer() {
  return `<div>© 2026 Mehdi Chougrani - Portfolio 3ème Année</div>`;
}

// --------- Logique Interactive ----------

function typedAccueil() {
  const el = document.querySelector('.typed-text');
  if (!el) return;
  const phrases = [
    "Toujours prêt à apprendre et à relever de nouveaux défis !",
    "Passionné par la cybersécurité et le développement web.",
    "Curieux, motivé et engagé dans la tech !"
  ];
  let i = 0, j = 0, erase = false;

  function typeLoop() {
    el.textContent = phrases[i].substring(0, j);
    if (!erase && j < phrases[i].length) {
      j++; setTimeout(typeLoop, 50);
    } else if (!erase && j === phrases[i].length) {
      erase = true; setTimeout(typeLoop, 1500);
    } else if (erase && j > 0) {
      j--; setTimeout(typeLoop, 25);
    } else {
      erase = false; i = (i + 1) % phrases.length; setTimeout(typeLoop, 500);
    }
  }
  typeLoop();
}

function toggleProjectDetail(id, event) {
  event.stopPropagation();
  const selected = document.getElementById('project-detail-' + id);
  if (!selected) return;

  // Close others (optional)
  // document.querySelectorAll('.project-detail').forEach(el => {
  //   if(el !== selected) el.style.display = 'none';
  // });

  if (selected.style.display === 'block') {
    selected.style.display = 'none';
    event.target.textContent = 'Détails';
  } else {
    selected.style.display = 'block';
    event.target.textContent = 'Masquer';
  }
}

// --------- Initialisation ----------

document.addEventListener("DOMContentLoaded", () => {
  // 1. Injecter Navbar et Footer
  const navbar = document.getElementById('navbar');
  const footerEl = document.getElementById('footer');

  if (navbar) navbar.innerHTML = nav();
  if (footerEl) footerEl.innerHTML = footer();

  // 2. Gestion du Thème
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Ajouter le bouton de thème
  if (navbar) {
    const isDarkStored = localStorage.getItem("theme") === "dark";
    const themeToggle = document.createElement("button");
    themeToggle.innerText = isDarkStored ? "☀️" : "🌙";
    themeToggle.className = "theme-toggle";
    themeToggle.onclick = toggleDarkMode;
    navbar.appendChild(themeToggle);
  }

  // 3. Active Link Highlight
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === page || (page === "" && linkPage === "index.html")) {
      link.classList.add('active');
    }
  });

  // 4. Initialiser Typed.js (Accueil uniquement)
  typedAccueil();

  // 5. Initialiser AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }
});
