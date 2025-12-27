// --------- Thème sombre (Dark Mode) ----------
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) toggleBtn.innerText = isDark ? "☀️" : "🌙";
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
  cv: "Cv_Mehdi_v2.pdf",
  apropos: [
    "Bonjour ! Je m'appelle Mehdi Chougrani, étudiant passionné en deuxième année de BUT Informatique à l’IUT de Villetaneuse (Université Sorbonne Paris Nord). Depuis mes années collège, j’ai toujours été fasciné par la logique, les défis techniques et l’univers des nouvelles technologies. Ce sont ces passions qui ont naturellement guidé mon parcours vers les études d'informatique.",
    "C’est tout particulièrement la cybersécurité et le développement web qui m’attirent. Ce sont deux domaines très complémentaires qui exigent à la fois rigueur, créativité et sens de l’anticipation. J’y vois la possibilité d’avoir un impact réel sur le monde numérique en participant à rendre les systèmes plus sûrs, plus performants et plus respectueux des utilisateurs.",
    "Je suis un apprenant actif : j’aime expérimenter, tester, construire, déconstruire pour mieux comprendre. Cela m’a amené à réaliser divers projets personnels, à effectuer un stage professionnalisant, et à consacrer beaucoup de temps à la veille technologique. J’essaie constamment de rester à jour sur les langages, frameworks et bonnes pratiques les plus pertinents.",
    "En dehors de mes études, je cultive plusieurs passions qui nourrissent mes qualités humaines : le football ⚽ m’apprend la cohésion et la stratégie, la musculation m’enseigne la discipline et la persévérance, les jeux vidéo stimulent ma créativité et ma logique, et la lecture m’ouvre à de nouveaux horizons.",
    "À long terme, je souhaite intégrer un Master spécialisé en cybersécurité, et m’investir dans la conception de systèmes sécurisés, accessibles, éthiques. Mon objectif : contribuer à un numérique plus responsable et inclusif."
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
      desc: "Ma capacité à apprendre très rapidement, à rester curieux et à m’adapter en toutes circonstances. En seulement deux années de BUT Informatique, j’ai acquis une large palette de compétences techniques, j’ai mené à bien plusieurs projets exigeants, et j’ai su progresser avec rigueur et enthousiasme. Ma soif de comprendre et ma capacité à aller au fond des choses sont des moteurs puissants dans mon quotidien."
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
      title: "Opérateur",
      place: "Parc Astérix",
      desc: "En tant qu’opérateur d’attractions au Parc Astérix, j’étais chargé d’assurer la sécurité, le confort et l’expérience des visiteurs sur différents manèges. Cette mission m’a confronté à des situations variées, allant de la gestion des flux de visiteurs à la communication en temps réel avec les équipes techniques et d’accueil. J’ai appris à appliquer scrupuleusement des protocoles de sécurité, à rester concentré et vigilant sur de longues périodes, et à intervenir rapidement en cas d’incident ou de besoin d’assistance. Mon rôle consistait également à rassurer les visiteurs, à expliquer les consignes de manière claire, et à garantir un déroulement fluide des attractions. Ce poste m’a permis de développer ma gestion du stress, ma rigueur professionnelle et mes capacités à travailler en équipe dans un environnement dynamique, tout en renforçant mon sens du service et de la responsabilité."
    },
    {
      date: "2022 – Présent",
      title: "Bénévole",
      place: "ACIM",
      desc: "En tant que bénévole à l’association ACIM, j’ai pris part à plusieurs actions solidaires : distributions alimentaires, organisation de collectes, aide logistique pour des événements. Ces missions m’ont appris la patience, l’écoute active, l’humilité et le sens du collectif. J’ai compris l’importance d’être utile aux autres et de s’investir dans des causes humaines, ce qui m’a également appris à travailler avec des profils très différents dans des environnements parfois instables."
    },
    {
      date: "Janv - Mars 2025",
      title: "Stage web (développement, cybersécurité)",
      place: "Lyman Agency (Garges-lès-Gonesse)",
      desc: "Ce stage de 2e année a été une expérience extrêmement formatrice. J’ai eu la responsabilité de concevoir de A à Z un site de réservation pour une entreprise de rénovation. Cela comprenait la collecte des besoins, le maquettage, le développement, la sécurité, les tests et la mise en ligne. J’ai utilisé des outils web modernes et assuré l’intégration de fonctionnalités complexes (historique client, interface administrateur, système de connexion). Ce projet m’a appris à m’organiser, à prendre des décisions techniques, et à répondre à des attentes concrètes. Le client a été très satisfait, ce qui m’a donné confiance en mes compétences professionnelles."
    }
  ],
  projets: [
    {
      title: "SAE_AppChatAnnotation",
      image: "./images/saechatAnnotation.png",
      desc: `Ce projet universitaire avait pour objectif de concevoir un outil d’annotation automatique de messages afin d’aider à la modération dans des discussions en ligne. Nous avons utilisé Java pour l’interface et Python pour les traitements d’analyse de texte.`,
      detail: `Ce projet m’a particulièrement marqué car il mêlait réflexion, technique et utilité sociale. L’idée de construire un outil permettant d’aider à la modération m’a vraiment intéressé. Nous avons réfléchi aux besoins des utilisateurs, aux risques de faux positifs, et à comment rendre notre interface compréhensible pour tous. J’ai pris beaucoup de plaisir à coder l’interface en Java et à expérimenter des méthodes simples de traitement de texte avec Python. C’était un vrai défi de faire dialoguer les deux langages et de créer un prototype fluide. Ce projet m’a permis de mieux comprendre l’importance de la rigueur dans les échanges de données entre systèmes et m’a donné envie d’approfondir mes compétences en NLP (Natural Language Processing).

Ce projet illustre particulièrement les compétences du BUT Informatique suivantes :
- Gérer des données de diverses natures (SAÉ 3.01/3.02),
- Développer des applications informatiques avec des interfaces ergonomiques,
- Concevoir des traitements automatiques de texte simples (introduction au NLP),
- Collaborer efficacement dans un projet en binôme avec répartition des tâches.
`,
      github: "https://github.com/Mehdi031/SAE_AppChatAnnotation"
    },
    {
      title: "Site de réservation (stage)",
      desc: `Durant mon stage, j’ai développé un site complet de réservation pour une entreprise de rénovation. Le site permettait de créer un compte, réserver une intervention, suivre son historique, avec une interface administrateur.`,
      detail: `C’était mon premier projet en entreprise et j’en garde un excellent souvenir. J’ai été confronté à de vraies contraintes, à des retours client, à des choix techniques qui avaient des conséquences concrètes. J’ai appris à prioriser, à communiquer, à rédiger des comptes rendus clairs. Le site devait être simple pour les utilisateurs mais robuste côté sécurité. J’ai intégré une gestion de comptes, des réservations, des validations administrateur et même un espace historique. Le client a été très satisfait, et j’ai été fier d’avoir construit tout cela de A à Z. Ce projet m’a prouvé que j’étais capable de mener un développement complet, et il a renforcé mon envie de travailler dans le web ou en cybersécurité.

Ce projet est en lien direct avec les compétences suivantes du BUT Informatique :
- Concevoir, développer, tester et sécuriser une application web,
- Réaliser un projet en autonomie dans un cadre professionnel,
- Gérer un projet de A à Z avec expression de besoin, spécifications, développement et mise en production,
- Appliquer des bonnes pratiques de sécurité dans le développement.
` ,
      github: ""
    },
    {
      title: "Calculatrice JS",
      image: "./images/calculatrice.png",
      desc: `Développement en binôme d'une calculatrice en Java avec gestion des opérations de base, contrôle des erreurs et structuration orientée objet.`,
      detail: `Dans cette activité, j'ai travaillé en binôme pour développer une calculatrice en Java. Nous avons utilisé Visual Studio Code pour programmer des fonctionnalités permettant de réaliser des opérations mathématiques de base comme l'addition, la soustraction, la multiplication et la division. Nous avons également traité des erreurs potentielles, comme la division par zéro, en ajoutant des contrôles appropriés dans notre code. Ce projet a été une excellente occasion de mettre en pratique la programmation orientée objet. Nous avons créé des diagrammes UML pour représenter les classes et les interactions, ce qui nous a aidés à organiser notre code de manière claire et structurée. Travailler sur ce projet m'a permis d'améliorer mes compétences en Java, en comprenant mieux comment structurer une application pour qu'elle soit à la fois robuste et utilisable. Cela m'a également appris l'importance de la collaboration, car nous avons dû travailler ensemble pour résoudre des problèmes et affiner notre application. Ces expériences ont renforcé ma confiance en mes capacités à développer des applications fonctionnelles et intuitives, préparant le terrain pour des projets plus complexes à l'avenir.

Ce projet correspond aux compétences visées dans le cadre du BUT Informatique :
- Implémenter des fonctionnalités selon un cahier des charges,
- Maîtriser la programmation orientée objet,
- Travailler en binôme sur la structuration du code et sa documentation,
- Mettre en œuvre des tests simples et une gestion d’erreurs.
`,
      github: "https://github.com/Mehdi031/Calculatrice"
    },
    {
      title: "Santa Claus Animation",
      image: "./images/santa Claus.png",
      desc: `Projet Python en binôme visant à planifier l’itinéraire optimal pour la tournée du Père Noël, avec analyse algorithmique et collaboration.`,
      detail: `Dans le cadre de cette activité universitaire d’implémentation algorithmique, j’ai collaboré avec un camarade sur un projet stimulant consistant à simuler la tournée optimale du Père Noël. L’objectif était de minimiser la distance parcourue à travers une série de points représentant les maisons à visiter, une problématique analogue au célèbre problème du voyageur de commerce (TSP).

Nous avons choisi Python comme langage de développement pour sa clarté et la richesse de ses bibliothèques scientifiques. Après avoir analysé plusieurs stratégies, nous avons mis en œuvre un algorithme glouton ainsi qu’une approche par recherche locale, afin de comparer leur efficacité. Ce travail m’a permis de renforcer ma capacité à structurer un programme en plusieurs modules réutilisables et à produire un code lisible et maintenable.

Au-delà de la technique, ce projet a été une formidable opportunité de coopération : nous avons régulièrement confronté nos idées, divisé les tâches de manière équilibrée, et documenté rigoureusement notre avancement. J’ai particulièrement apprécié la phase de visualisation, où nous avons utilisé des bibliothèques graphiques pour représenter dynamiquement l’itinéraire choisi. Cela rendait le rendu non seulement plus parlant, mais aussi plus motivant.

Ce projet a renforcé ma compréhension des algorithmes d’optimisation, de la gestion de projet en binôme, et m’a ouvert la voie vers l’exploration de la recherche opérationnelle et de la data science. Il illustre parfaitement mon goût pour les défis techniques concrets et ma capacité à apprendre par la pratique.

Ce projet s’aligne avec plusieurs compétences du BUT Informatique :
- Implémenter des algorithmes d’optimisation en Python,
- Analyser la complexité et comparer plusieurs approches,
- Collaborer en binôme avec répartition des modules de développement,
- Représenter graphiquement un résultat de manière interactive et compréhensible.
`,
      github: "https://github.com/Mehdi031/Santa-Claus"
    }
  ]
};

// ----------- Génération des sections -----------

function nav() {
  // Style for the nav bar container (ul)
  const ulStyle = "display:flex;gap:1.2em;flex-wrap:wrap;justify-content:center;padding:1em 0;margin:0;background:var(--card-bg);box-shadow:0 2px 8px rgba(0,0,0,0.1);border-radius:12px;";
  // Style for each nav link
  const linkStyle = "padding:0.4em 0.8em;border-radius:6px;font-weight:500;transition:all 0.3s;";
  // Mouseover/mouseout for hover effect
  const hover = "onmouseover=\"this.style.background='var(--accent)';this.style.color='white'\" onmouseout=\"this.style.background='';this.style.color=''\"";
  // Nav links
  return `<ul style="${ulStyle}">
    <li><a href="#accueil" class="active" style="${linkStyle}" ${hover}>Accueil</a></li>
    <li><a href="#apropos" style="${linkStyle}" ${hover}>À propos de moi</a></li>
    <li><a href="#competences" style="${linkStyle}" ${hover}>Compétences</a></li>
    <li><a href="#but" style="${linkStyle}" ${hover}>BUT Informatique</a></li>
    <li><a href="#qualites" style="${linkStyle}" ${hover}>Qualités</a></li>
    <li><a href="#experience" style="${linkStyle}" ${hover}>Expérience</a></li>
    <li><a href="#projets" style="${linkStyle}" ${hover}>Projets</a></li>
    <li><a href="#veille" style="${linkStyle}" ${hover}>Veille</a></li>
    <li><a href="#contact" style="${linkStyle}" ${hover}>Contact</a></li>
  </ul>`;
}
// -------- Compétences du BUT Informatique ---------
function competencesBUT() {
  const blocs = [
    {
      titre: "B1 – Réaliser un développement d’application",
      desc: "Ce bloc constitue le socle fondamental de ma formation. J’y ai appris à maîtriser des langages comme Java, Python ou JavaScript, à comprendre les principes de la programmation impérative, orientée objet et fonctionnelle, et à développer des applications fiables, testables, maintenables. Grâce à cela, je suis capable de traduire un besoin utilisateur en une solution logicielle concrète, en structurant le code proprement et en adoptant une démarche de qualité dès les premières étapes du développement."
    },
    {
      titre: "B2 – Optimiser des applications informatiques",
      desc: "Ce bloc m’a permis d’acquérir une rigueur algorithmique et une capacité à évaluer l'efficacité des programmes. J’ai appris à sélectionner des structures de données performantes (arbres, tables de hachage...), à analyser la complexité (notation O), à concevoir des algorithmes plus efficaces (recherche, tri, optimisation). Ces compétences sont précieuses pour améliorer la réactivité, les performances et la robustesse des applications dans des contextes concrets."
    },
    {
      titre: "B3 – Administrer des systèmes informatiques communicants complexes",
      desc: "Cette compétence m’a introduit au monde des systèmes d’exploitation, des réseaux et de la cybersécurité. J’ai manipulé Linux (commandes Bash, processus, gestion des utilisateurs), configuré des connexions réseaux (IP, DNS, routage), compris les protocoles de communication (HTTP, TCP/IP), et exploré les bases de la sécurité (chiffrement, gestion des ports, firewall). Elle me permet aujourd’hui d’assurer la mise en place, la sécurisation et le dépannage d’environnements informatiques variés."
    },
    {
      titre: "B4 – Gérer des données de l’information",
      desc: "Ce bloc porte sur la collecte, l’organisation, l’interrogation et la valorisation des données. J’ai appris à concevoir des bases (modèle conceptuel, MCD, MLD), à manipuler SQL pour créer, interroger ou modifier des tables, à utiliser des SGBD comme PostgreSQL ou MySQL. J’ai également exploré des technologies comme GraphQL pour créer des interfaces de données plus souples. Cela me donne les moyens de gérer efficacement de grandes quantités d’informations dans des contextes métiers variés."
    },
    {
      titre: "B5 – Conduire un projet",
      desc: "J’ai découvert les principes de la gestion de projet informatique : de la planification (diagramme de Gantt, gestion du backlog), à la répartition des rôles (Product Owner, Scrum Master...), jusqu’au suivi (points d’avancement, outils collaboratifs). Lors des SAE et de mon stage, j’ai expérimenté l’importance de bien formuler un besoin, d’anticiper les imprévus, de communiquer efficacement au sein d’une équipe projet, et de livrer des résultats conformes aux attentes du client."
    },
    {
      titre: "B6 – Travailler dans une équipe informatique",
      desc: "Ce dernier bloc met en avant les compétences relationnelles et la capacité à coopérer dans des projets techniques. J’ai appris à écouter les besoins des autres, à documenter mes choix, à relire du code d’équipe, à donner du feedback constructif. Cela m’a permis de m’adapter à différents profils, de mieux comprendre le fonctionnement des collectifs agiles, et d’assurer un climat de travail serein. Ces compétences humaines sont complémentaires aux aspects purement techniques."
    }
  ];

  return `
  <section class="section" id="but" data-aos="fade-up">
    <h2>📚 Compétences du BUT Informatique</h2>
    <div class="but-blocs" style="display:grid;gap:1.5em;margin-top:2em;">
      ${blocs.map((b, idx) => `
        <div class="but-card" style="background:var(--card-bg);padding:1em 1.2em;border-radius:14px;box-shadow:0 6px 16px rgba(0,0,0,0.07);cursor:pointer;" onclick="toggleButDetail(${idx})">
          <h3 style="margin:0;color:var(--accent);font-size:1.1rem;">${b.titre}</h3>
          <div id="but-detail-${idx}" class="but-detail" style="display:none;margin-top:0.6em;font-size:1.05rem;color:var(--text-sub);">${b.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>`;
}

function accueil() {
  return `
  <section class="accueil section" id="accueil" data-aos="zoom-in" style="position:relative;">
    <div class="avatar-large"><span>M</span></div>
    <div style="margin-bottom:1em;font-size:1.2rem;font-weight:500;color:var(--text-sub);">Bienvenue sur mon portfolio 👋</div>
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
    { icon: "🔬", title: "Dr Nozman", url: "https://www.youtube.com/@DrNozman" },
    // Nouveaux liens :
    { icon: "📢", title: "Blog de Korben", url: "https://korben.info/" },
    { icon: "🧠", title: "OpenClassrooms Tech Blog", url: "https://openclassrooms.com/fr/blog-tech" },
    { icon: "⚙️", title: "Stack Overflow", url: "https://stackoverflow.com/" },
    { icon: "📦", title: "GitHub Explore", url: "https://github.com/explore" },
    { icon: "📰", title: "Numerama", url: "https://www.numerama.com/tech/" },
    { icon: "📈", title: "Cybersecurity & Infrastructure Agency", url: "https://www.cisa.gov/news-events" }
  ];

  // Animation: fadeSlideIn (see CSS below)
  return `
    <section class="section" id="veille" data-aos="fade-up" style="animation: fadeSlideIn 0.8s ease-in-out;">
      <h2>🔎 Veille technologique</h2>
      <p style="max-width:750px;margin:1.5em auto;text-align:center;font-size:1.08rem;color:var(--text-sub);">
        La veille technologique est une démarche essentielle pour rester en phase avec les avancées rapides de l’informatique. 
        Elle me permet de découvrir de nouveaux outils, de suivre les évolutions des langages, des frameworks, et de la cybersécurité. 
        Grâce à cette veille constante, je développe une vision à jour des tendances du secteur, ce qui m’aide à orienter mes choix de formation, 
        à anticiper les compétences à acquérir, et à nourrir ma curiosité technique. Vous trouverez ci-dessous une sélection des sites, blogs, plateformes 
        et chaînes que je consulte régulièrement.
      </p>
      <input id="veilleSearch" type="text" placeholder="Rechercher une ressource..." 
        style="padding:0.6em 1em;border:1px solid var(--accent);border-radius:8px;margin:1em auto;display:block;max-width:400px;width:90%;font-size:1rem;"
        oninput="filterVeille(this.value)">
      <div class="veille-button-grid">
        ${items.map(item => `
          <button class="veille-button hover-zoom" onclick="window.open('${item.url}', '_blank')" 
            style="background:linear-gradient(135deg, var(--accent), #ff9e9e);color:white;
                   border:none;padding:1.4em;border-radius:16px;
                   box-shadow:0 8px 18px rgba(0,0,0,0.15);transition:transform 0.3s, box-shadow 0.3s;
                   width:100%;max-width:260px;text-align:center;"
            onmouseover="this.style.transform='scale(1.07)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.2)'" 
            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 18px rgba(0,0,0,0.15)'">
            <span class="veille-icon" style="font-size:2.2rem;">${item.icon}</span><br>
            <span class="veille-title" style="display:block;margin-top:0.6em;font-weight:600;font-size:1.1rem;">${item.title}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function apropos() {
  return `
  <section class="section apropos" id="apropos" data-aos="fade-right">
    <h2>À propos de moi</h2>
    ${data.apropos.map(txt=>`<p>${txt}</p>`).join("")}
  </section>
  `;
}

function competences() {
  return `
    <section class="section" id="competences" data-aos="zoom-in-up">
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
  <section class="section" id="qualites" data-aos="flip-down">
    <h2>🌟 Qualités personnelles</h2>
    <p style="max-width:760px;margin:1.5em auto;text-align:center;font-size:1.08rem;color:var(--text-sub);">
      Au-delà des compétences techniques, je développe depuis plusieurs années des qualités humaines et professionnelles indispensables dans le domaine de l’informatique. 
      Ces qualités me permettent de mieux collaborer, de progresser efficacement dans mes projets, et de m’épanouir dans des environnements variés.
    </p>
    <div class="qualites-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5em;margin-top:2em;">
      ${data.qualites.map(q => `
        <div class="qualite-card" style="background:var(--card-bg);padding:1.2em;border-radius:14px;box-shadow:0 8px 18px rgba(0,0,0,0.08);transition:transform 0.3s;" 
          onmouseover="this.style.transform='scale(1.04)'" 
          onmouseout="this.style.transform='scale(1)'">
          <div class="q-icon" style="font-size:2rem;margin-bottom:0.4em;">${q.icon}</div>
          <div class="q-title" style="font-weight:600;color:var(--accent);font-size:1.1rem;margin-bottom:0.3em;">${q.titre}</div>
          <div style="color:var(--text-sub);font-size:1.02rem;">${q.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function experience() {
  return `
  <section class="section" id="experience" data-aos="fade-left">
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
          ${typeof p.image !== "undefined" ? `
            <div style="width:100%;height:260px;overflow:hidden;border-radius:14px;box-shadow: 0 6px 14px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;">
              <img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:center;">
            </div>` : ""}
          <div class="project-title" data-aos="fade-right" data-aos-delay="${idx * 150 + 100}">${p.title}</div>
          <div class="desc" data-aos="fade-left" data-aos-delay="${idx * 150 + 200}">${p.desc}</div>
          <button onclick="toggleProjectDetail(${idx}, event)" class="btn-toggle-detail">Voir les détails</button>
          <div class="project-detail" id="project-detail-${idx}" style="display:none;margin-top:1em;" data-aos="zoom-in" data-aos-delay="200">
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
  <section class="section" id="contact" data-aos="zoom-in">
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
  // Inject global CSS for fadeSlideIn, fade-slide-up, fade-zoom, and hover-zoom/project-image effects if not already present
  if (!document.getElementById('fadeSlideIn-style')) {
    const style = document.createElement('style');
    style.id = 'fadeSlideIn-style';
    style.innerHTML = `
      @keyframes fadeSlideIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-slide-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeSlideUp 0.6s forwards ease;
      }
      @keyframes fadeSlideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-zoom {
        opacity: 0;
        transform: scale(0.95);
        animation: fadeZoomIn 0.6s forwards ease;
      }
      @keyframes fadeZoomIn {
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .hover-zoom {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        will-change: transform;
      }
      .hover-zoom:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 28px rgba(0,0,0,0.2);
      }
      .project-image {
        border-radius: 12px;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        box-shadow: 0 5px 16px rgba(0,0,0,0.15);
      }
      .project-card:hover .project-image {
        transform: scale(1.03);
        box-shadow: 0 10px 28px rgba(0,0,0,0.2);
      }
    `;
    document.head.appendChild(style);
  }

  document.getElementById('navbar').innerHTML = nav();
  // Ajoute le bouton dark mode avec le bon symbole dès la création
  const isDarkStored = localStorage.getItem("theme") === "dark";
  if (isDarkStored) document.body.classList.add("dark");
  const themeToggle = document.createElement("button");
  themeToggle.innerText = isDarkStored ? "☀️" : "🌙";
  themeToggle.className = "theme-toggle";
  themeToggle.onclick = toggleDarkMode;
  document.getElementById("navbar").appendChild(themeToggle);

  document.getElementById('main').innerHTML = [
    accueil(),
    apropos(),
    competences(),
    competencesBUT(),
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

  // --- Ajout : fond visuel doux et alterné pour chaque section, padding, centrage du contenu principal, typographie générale ---
  // Fond alterné et padding pour chaque section
  const sections = document.querySelectorAll('.section');
  sections.forEach((s, i) => {
    s.style.background = i % 2 === 0 ? 'var(--bg)' : '#f7f8fa';
    s.style.padding = '3em 1.5em';
    s.style.borderRadius = '20px';
    s.style.marginBottom = '2em';
  });
  // Mise en page centrée pour le contenu principal
  document.getElementById('main').style.maxWidth = '1100px';
  document.getElementById('main').style.margin = '0 auto';
  // Typographie générale
  document.body.style.lineHeight = '1.7';
  document.body.style.letterSpacing = '0.2px';
  document.body.style.fontSize = '16.5px';

  // Applique des effets d’entrée selon les sections
  ['accueil','apropos','competences','qualites','experience','projets','veille','contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === 'accueil' || id === 'projets') {
        el.classList.add('fade-zoom');
      } else {
        el.classList.add('fade-slide-up');
      }
    }
  });

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
// --------- Veille: Filtrage dynamique des ressources ---------
function filterVeille(search) {
  const cards = document.querySelectorAll('.veille-button');
  const val = search.toLowerCase();
  cards.forEach(btn => {
    const title = btn.querySelector('.veille-title').textContent.toLowerCase();
    btn.style.display = title.includes(val) ? "block" : "none";
  });
}
// -------- Accordéon BUT Informatique --------
function toggleButDetail(idx) {
  const el = document.getElementById('but-detail-' + idx);
  if (!el) return;
  const isVisible = window.getComputedStyle(el).display === 'block';
  const all = document.querySelectorAll('.but-detail');
  all.forEach(d => d.style.display = 'none');
  el.style.display = isVisible ? 'none' : 'block';
}
