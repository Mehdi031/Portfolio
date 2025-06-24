// --------- Thème sombre (Dark Mode) ----------
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Appliquer le thème sauvegardé
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
const data = {
  name: "Mehdi Chougrani",
  subtitle: "Étudiant en 2ᵉ année de BUT Informatique à l’IUT de Villetaneuse (Université Sorbonne Paris Nord)",
  accroche_phrases: [
    "Toujours prêt à apprendre et à relever de nouveaux défis !",
    "Passionné par la cybersécurité et le développement web.",
    "Curieux, motivé et engagé dans la tech !"
  ],
  email: "mehdichougrani95140@gmail.com",
  github_url: "https://github.com/Mehdi031",
  cv: "CV_2025-06-16_Mehdi_CHOUGRANI.pdf",
  apropos: [
    "Bonjour ! Je m'appelle Mehdi Chougrani, étudiant passionné en deuxième année de BUT Informatique à l’IUT de Villetaneuse (Université Sorbonne Paris Nord). Depuis mes années collège, j’ai toujours été fasciné par la logique, les défis techniques et l’univers des nouvelles technologies.",
    "C’est naturellement que je me suis orienté vers l’informatique, avec un attrait particulier pour la cybersécurité et le développement web. Ce sont deux domaines complémentaires où je peux à la fois analyser, créer, protéger et innover.",
    "J’aime apprendre en faisant. C’est pourquoi je consacre une grande partie de mon temps à des projets personnels, des stages, et à une veille technologique régulière pour rester à jour sur les outils et pratiques du moment.",
    "En parallèle de mes études, je cultive mes autres passions : le football ⚽ qui m’enseigne l’esprit d’équipe et la stratégie, la musculation pour la discipline et le dépassement de soi, les jeux vidéo pour la créativité et la réflexion, et la lecture pour nourrir mon esprit.",
    "Mon rêve à long terme ? Intégrer un Master Cybersécurité et contribuer à construire un web plus sûr, plus fiable et plus éthique pour tous. 🌍"
  ],
  skills: [
    {
      group: "Langages de programmation",
      icons: [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", label: "Bash"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3"}
      ]
    },
    {
      group: "Frameworks & Bibliothèques",
      icons: [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", label: "Vue.js"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", label: "Tailwind"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", label: "Spring"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", label: "scikit-learn"}
      ]
    },
    {
      group: "Manipulation de données",
      icons: [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", label: "GraphQL"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL"}
      ]
    },
    {
      group: "Systèmes d’exploitation",
      icons: [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", label: "Windows"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Linux"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", label: "MacOS"}
      ]
    },
    {
      group: "Logiciels",
      icons: [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "VSCode"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg", label: "JetBrains"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Spyder_logo.svg", label: "Spyder"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", label: "Jupyter"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg", label: "Office"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", label: "Power BI"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Talend_logo.svg", label: "Talend"}
      ]
    }
  ],
  qualites: [
    {
      icon: "💡",
      titre: "Ce dont je suis le plus fier",
      desc: "Ma capacité à apprendre très rapidement et à rester curieux en toutes circonstances. En deux années de BUT Informatique, j’ai su m’approprier des langages variés, m’adapter à des projets complexes, et progresser avec régularité grâce à ma persévérance et mon envie constante d’évoluer."
    },
    {
      icon: "🎯",
      titre: "Autonome",
      desc: "Capable de travailler de manière indépendante, de prendre des initiatives et de mener mes projets à terme sans supervision constante."
    },
    {
      icon: "💭",
      titre: "Créatif",
      desc: "J’aime trouver des solutions innovantes aux problèmes techniques et explorer de nouvelles approches pour optimiser le code ou l’expérience utilisateur."
    },
    {
      icon: "🗂️",
      titre: "Organisé",
      desc: "Méthodique dans ma planification, je structure mes projets avec rigueur et respecte les délais grâce à une gestion efficace du temps."
    },
    {
      icon: "🤝",
      titre: "Esprit d’équipe",
      desc: "J’apprécie le travail collaboratif, sais écouter les idées des autres et contribue positivement à la dynamique de groupe."
    },
    {
      icon: "🔄",
      titre: "Adaptable",
      desc: "Flexible face aux changements, je m’adapte rapidement aux nouvelles technologies et aux évolutions des projets."
    },
    {
      icon: "📊",
      titre: "Analytique",
      desc: "J’ai une approche logique et structurée pour analyser les problèmes et décomposer les tâches complexes en étapes gérables."
    }
  ],
  experience: [
    {
      date: "2024 – Présent",
      title: "Agent d'attraction",
      place: "Parc Astérix",
      desc: "En tant qu’agent d’attraction, j’étais responsable de l’accueil des visiteurs, de la gestion des files d’attente et de la sécurité des équipements. J’ai appris à rester calme et réactif en toutes circonstances, à gérer les imprévus avec professionnalisme, et à maintenir un sourire même en situation de stress. Cette expérience m’a vraiment permis d'améliorer ma communication et mon sens du service."
    },
    {
      date: "2022 – Présent",
      title: "Bénévole",
      place: "ACIM",
      desc: "Je participe à des actions solidaires telles que la distribution de repas ou l’organisation d’événements locaux. Être bénévole m’a ouvert les yeux sur l’importance de la solidarité et m’a permis de développer ma patience, mon sens de l’écoute et ma capacité à collaborer avec des profils très variés."
    },
    {
      date: "Janv - Mars 2025",
      title: "Stage web (développement, cybersécurité)",
      place: "Lyman Agency (Garges-lès-Gonesse)",
      desc: "Ce stage a été une vraie immersion dans le monde professionnel. J’ai développé un site complet de réservation pour une entreprise de rénovation. De la prise de besoin au développement en passant par les maquettes et la sécurité, j’ai tout conçu et codé moi-même. Cela m’a permis de mettre en pratique mes compétences techniques tout en apprenant à travailler avec des attentes réelles et des contraintes concrètes."
    }
  ],
  projets: [
    {
      title: "SAE_AppChatAnnotation",
      image: "images/chat-annotation.png",
      desc: `Ce projet universitaire avait pour objectif de concevoir un outil d’annotation automatique de messages afin d’aider à la modération dans des discussions en ligne. Nous avons utilisé Java pour l’interface et Python pour les traitements d’analyse de texte.`,
      detail: `Ce projet m’a particulièrement marqué car il mêlait réflexion, technique et utilité sociale. L’idée de construire un outil permettant d’aider à la modération m’a vraiment intéressé. Nous avons réfléchi aux besoins des utilisateurs, aux risques de faux positifs, et à comment rendre notre interface compréhensible pour tous. J’ai pris beaucoup de plaisir à coder l’interface en Java et à expérimenter des méthodes simples de traitement de texte avec Python. C’était un vrai défi de faire dialoguer les deux langages et de créer un prototype fluide. Ce projet m’a permis de mieux comprendre l’importance de la rigueur dans les échanges de données entre systèmes et m’a donné envie d’approfondir mes compétences en NLP (Natural Language Processing).`,
      github: "https://github.com/Mehdi031/SAE_AppChatAnnotation"
    },
    {
      title: "Site de réservation (stage)",
      image: "images/reservation.png",
      desc: `Durant mon stage, j’ai développé un site complet de réservation pour une entreprise de rénovation. Le site permettait de créer un compte, réserver une intervention, suivre son historique, avec une interface administrateur.`,
      detail: `C’était mon premier projet en entreprise et j’en garde un excellent souvenir. J’ai été confronté à de vraies contraintes, à des retours client, à des choix techniques qui avaient des conséquences concrètes. J’ai appris à prioriser, à communiquer, à rédiger des comptes rendus clairs. Le site devait être simple pour les utilisateurs mais robuste côté sécurité. J’ai intégré une gestion de comptes, des réservations, des validations administrateur et même un espace historique. Le client a été très satisfait, et j’ai été fier d’avoir construit tout cela de A à Z. Ce projet m’a prouvé que j’étais capable de mener un développement complet, et il a renforcé mon envie de travailler dans le web ou en cybersécurité.` ,
      github: ""
    },
    {
      title: "Calculatrice JS",
      image: "images/calculatrice.png",
      desc: `Développement en binôme d'une calculatrice en Java avec gestion des opérations de base, contrôle des erreurs et structuration orientée objet.`,
      detail: `Dans cette activité, j'ai travaillé en binôme pour développer une calculatrice en Java. Nous avons utilisé Visual Studio Code pour programmer des fonctionnalités permettant de réaliser des opérations mathématiques de base comme l'addition, la soustraction, la multiplication et la division. Nous avons également traité des erreurs potentielles, comme la division par zéro, en ajoutant des contrôles appropriés dans notre code. Ce projet a été une excellente occasion de mettre en pratique la programmation orientée objet. Nous avons créé des diagrammes UML pour représenter les classes et les interactions, ce qui nous a aidés à organiser notre code de manière claire et structurée. Travailler sur ce projet m'a permis d'améliorer mes compétences en Java, en comprenant mieux comment structurer une application pour qu'elle soit à la fois robuste et utilisable. Cela m'a également appris l'importance de la collaboration, car nous avons dû travailler ensemble pour résoudre des problèmes et affiner notre application. Ces expériences ont renforcé ma confiance en mes capacités à développer des applications fonctionnelles et intuitives, préparant le terrain pour des projets plus complexes à l'avenir.`,
      github: "https://github.com/Mehdi031/Calculatrice"
    },
    {
      title: "Santa Claus Animation",
      image: "images/santa.png",
      desc: `Projet Python en binôme visant à planifier l’itinéraire optimal pour la tournée du Père Noël, avec analyse algorithmique et collaboration.`,
      detail: `Dans le cadre de cette activité, intitulée "Implémentation", j'ai collaboré avec un camarade sur un projet en Python où notre mission était de planifier un itinéraire optimal pour minimiser la distance parcourue, similaire à la coordination d'une tournée pour les rennes du Père Noël. Ce projet n'a pas seulement renforcé mes compétences en programmation avec Python, mais a également affiné mes capacités d'analyse pour résoudre des problèmes complexes. Ce travail en binôme a été particulièrement enrichissant, car il a favorisé un échange actif d'idées et a permis de combler les lacunes dans nos connaissances respectives. Cela a amélioré notre compréhension du langage Python et nous a appris l'importance du travail d'équipe dans la résolution de défis techniques. Ce projet a significativement contribué à mon développement professionnel, en améliorant à la fois mes compétences techniques et mes aptitudes à collaborer efficacement au sein d'une équipe.`,
      github: "https://github.com/Mehdi031/Santa-Claus"
    }
  ]
};

// ----------- Génération des sections -----------

function nav() {
  return `<ul>
    <li><a href="#accueil" class="active">Accueil</a></li>
    <li><a href="#apropos">À propos de moi</a></li>
    <li><a href="#competences">Compétences</a></li>
    <li><a href="#qualites">Qualités</a></li>
    <li><a href="#experience">Expérience</a></li>
    <li><a href="#projets">Projets</a></li>
    <li><a href="#veille">Veille</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>`;
}

function accueil() {
  return `
  <section class="accueil section" id="accueil" data-aos="zoom-in" style="position:relative;">
    <div class="avatar-large"><span>M</span></div>
    <h1>${data.name}</h1>
    <div class="accroche"><span class="typed-text"></span></div>
    <div class="subtitle">${data.subtitle}</div>
    <a href="#contact" class="btn-main">Me contacter</a>
  </section>
  `;
}
function veille() {
  const items = [
    { icon: "💬", title: "Zataz", url: "https://www.zataz.com/" },
    { icon: "📰", title: "Journal du Net", url: "https://www.lejournaldunet.com/" },
    { icon: "🧾", title: "WeLoveDevs", url: "https://www.welovedevs.com/fr/articles" },
    { icon: "🔐", title: "TryHackMe", url: "https://tryhackme.com/" },
    { icon: "🛡️", title: "HackerOne", url: "https://www.hackerone.com/" },
    { icon: "🧭", title: "Roadmap.sh", url: "https://roadmap.sh/" },
    { icon: "📚", title: "DevDocs", url: "https://devdocs.io/" },
    { icon: "🎥", title: "Micode", url: "https://www.youtube.com/@Micode" },
    { icon: "🎬", title: "Grafikart", url: "https://www.youtube.com/@Grafikart" },
    { icon: "🌐", title: "Parisien du Web", url: "https://www.youtube.com/@LeParisienduWeb" },
    { icon: "🔬", title: "Dr Nozman", url: "https://www.youtube.com/@DrNozman" }
  ];

  return `
    <section class="section" id="veille" data-aos="fade-up">
      <h2>🔎 Veille technologique</h2>
      <div class="veille-button-grid">
        ${items.map(item => `
          <button class="veille-button" onclick="window.open('${item.url}', '_blank')">
            <span class="veille-icon">${item.icon}</span>
            <span class="veille-title">${item.title}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function apropos() {
  return `
  <section class="section apropos" id="apropos" data-aos="fade-up">
    <h2>À propos de moi</h2>
    ${data.apropos.map(txt=>`<p>${txt}</p>`).join("")}
  </section>
  `;
}

function competences() {
  return `
    <section class="section" id="competences" data-aos="fade-up">
      <h2>Compétences techniques</h2>
      ${data.skills.map(group => `
        <h3>${group.group}</h3>
        <div class="skill-row">
          ${group.icons.map(skill => `
            <span class="icon-label">
              <img src="${skill.img}" alt="${skill.label}" title="${skill.label}">
              <span>${skill.label}</span>
            </span>
          `).join("")}
        </div>
      `).join("")}
    </section>
  `;
}

function qualites() {
  return `
  <section class="section" id="qualites" data-aos="fade-up">
    <h2>Qualités</h2>
    <div class="qualites-header fierté">
      <span class="q-icon">${data.qualites[0].icon}</span>
      <b>${data.qualites[0].titre}</b>
      <div style="margin-top:0.8em; color:#4a90e2;">${data.qualites[0].desc}</div>
    </div>
    <div class="qualites-cards">
      ${data.qualites.slice(1).map(q=>`
        <div class="qualite-card">
          <span class="q-icon">${q.icon}</span>
          <span class="q-title">${q.titre}</span>
          <div>${q.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function experience() {
  return `
  <section class="section" id="experience" data-aos="fade-up">
    <h2>Expériences professionnelles</h2>
    <div class="timeline-cards">
      ${data.experience.map(e=>`
        <div class="timeline-card">
          <span class="date">${e.date}</span>
          <div class="title">${e.title}</div>
          <div class="place">${e.place}</div>
          <div class="desc">${e.desc}</div>
        </div>`).join("")}
    </div>
  </section>
  `;
}
function projets() {
  return `
  <section class="section" id="projets">
    <h2 data-aos="fade-down">🛠️ Projets</h2>
    <div class="projects-cards">
      ${data.projets.map((p, idx) => `
        <div class="project-card hover-zoom" data-aos="fade-up" data-aos-delay="${idx * 100}">
          <img src="${p.image}" alt="${p.title}" class="project-image">
          <div class="project-title">${p.title}</div>
          <div class="desc">${p.desc}</div>
          <button onclick="toggleProjectDetail(${idx}, event)" class="btn-toggle-detail">Voir les détails</button>
          <div class="project-detail" id="project-detail-${idx}" style="display:none;margin-top:1em;color:#b6c3db;">
            <p>${p.detail}</p>
            ${p.github ? `<p><a href="${p.github}" target="_blank" style="color:#4a90e2;font-weight:bold;">🔗 Voir sur GitHub</a></p>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function contact() {
  return `
  <section class="section" id="contact" data-aos="fade-up">
    <h2>Contact</h2>
    <form class="contact-form" action="https://formspree.io/f/mayrnvjz" method="POST">
      <input type="text" name="name" placeholder="Votre nom" required>
      <input type="email" name="email" placeholder="Votre email" required>
      <textarea name="message" rows="5" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
    <div class="contact-social">
      <a href="mailto:${data.email}" style="color:#4a90e2;font-weight:600;">
        ${data.email}
      </a>
      <a href="${data.github_url}" target="_blank" class="github-icon-link" title="Voir mon GitHub" style="display: flex; align-items: center; gap:0.4em;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height:28px;">
        <span>GitHub</span>
      </a>
    </div>
    <div>
      <a class="btn-main" href="${data.cv}" download style="margin-top:1.2em;display:inline-block;">Télécharger mon CV (PDF)</a>
    </div>
  </section>
  `;
}

function footer() {
  return `<div>© 2025 Mehdi Chougrani - Portfolio personnel</div>`;
}

// -------- Typed effect accueil (texte animé) --------
function typedAccueil() {
  const el = document.querySelector('.typed-text');
  if (!el) return;
  const phrases = data.accroche_phrases;
  let i = 0, j = 0, erase = false;

  function typeLoop() {
    el.textContent = phrases[i].substring(0, j);
    if (!erase && j < phrases[i].length) {
      j++; setTimeout(typeLoop, 44);
    } else if (!erase && j === phrases[i].length) {
      erase = true; setTimeout(typeLoop, 1300);
    } else if (erase && j > 0) {
      j--; setTimeout(typeLoop, 17);
    } else {
      erase = false; i = (i + 1) % phrases.length; setTimeout(typeLoop, 400);
    }
  }
  typeLoop();
}

// -------- Badge draggable (ludique) --------
function badgeDraggable() {
  const badge = document.getElementById('badgeLudique');
  let offsetX, offsetY, dragging = false;

  badge.addEventListener('mousedown', startDrag);
  badge.addEventListener('touchstart', startDragTouch);

  function startDrag(e) {
    dragging = true;
    const rect = badge.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
  }
  function onDrag(e) {
    if (!dragging) return;
    badge.style.left = (e.clientX - offsetX) + 'px';
    badge.style.top = (e.clientY - offsetY) + 'px';
    badge.style.transform = 'none';
  }
  function stopDrag() {
    dragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
  }
  // Touch support (mobile)
  function startDragTouch(e) {
    dragging = true;
    const touch = e.touches[0];
    const rect = badge.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
    document.addEventListener('touchmove', onDragTouch);
    document.addEventListener('touchend', stopDragTouch);
  }
  function onDragTouch(e) {
    if (!dragging) return;
    const touch = e.touches[0];
    badge.style.left = (touch.clientX - offsetX) + 'px';
    badge.style.top = (touch.clientY - offsetY) + 'px';
    badge.style.transform = 'none';
  }
  function stopDragTouch() {
    dragging = false;
    document.removeEventListener('touchmove', onDragTouch);
    document.removeEventListener('touchend', stopDragTouch);
  }
}

// --------- Nav active + scroll fluide ----------
function navActive() {
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY + 110;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if(!section) return;
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      if(this.hash && document.querySelector(this.hash)) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({behavior: "smooth"});
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('navbar').innerHTML = nav();
  // Ajoute le bouton dark mode (🌙) dans la navbar
  const themeToggle = document.createElement("button");
  themeToggle.innerText = "🌙";
  themeToggle.className = "theme-toggle";
  themeToggle.onclick = toggleDarkMode;
  document.getElementById("navbar").appendChild(themeToggle);

  document.getElementById('main').innerHTML = [
    accueil(),
    apropos(),
    competences(),
    qualites(),
    experience(),
    projets(),
    veille(),
    contact()
  ].join('');
  document.getElementById('footer').innerHTML = footer();
  typedAccueil();
  navActive();
  badgeDraggable();
  // Active AOS après rendu du DOM dynamique
  if (typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });
});

// --------- Toggle project details (projets section) ----------
function toggleProjectDetail(id, event) {
  event.stopPropagation();
  const allDetails = document.querySelectorAll('.project-detail');
  const selected = document.getElementById('project-detail-' + id);
  if (!selected) return;
  // Use computed style to determine visibility, so we handle default CSS properly
  const isVisible = window.getComputedStyle(selected).display === 'block';
  allDetails.forEach(detail => detail.style.display = 'none');
  selected.style.display = isVisible ? 'none' : 'block';
}
