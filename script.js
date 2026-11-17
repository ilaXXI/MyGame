const FLAGS = [
  ["🇦🇫", "Afghanistan"], ["🇿🇦", "Afrique du Sud"], ["🇦🇱", "Albanie"], ["🇩🇿", "Algérie"],
  ["🇩🇪", "Allemagne"], ["🇦🇩", "Andorre"], ["🇦🇴", "Angola"], ["🇦🇬", "Antigua-et-Barbuda"],
  ["🇸🇦", "Arabie saoudite"], ["🇦🇷", "Argentine"], ["🇦🇲", "Arménie"], ["🇦🇺", "Australie"],
  ["🇦🇹", "Autriche"], ["🇦🇿", "Azerbaïdjan"], ["🇧🇸", "Bahamas"], ["🇧🇭", "Bahreïn"],
  ["🇧🇩", "Bangladesh"], ["🇧🇧", "Barbade"], ["🇧🇪", "Belgique"], ["🇧🇿", "Belize"],
  ["🇧🇯", "Bénin"], ["🇧🇹", "Bhoutan"], ["🇧🇾", "Biélorussie"], ["🇲🇲", "Birmanie"],
  ["🇧🇴", "Bolivie"], ["🇧🇦", "Bosnie-Herzégovine"], ["🇧🇼", "Botswana"], ["🇧🇷", "Brésil"],
  ["🇧🇳", "Brunei"], ["🇧🇬", "Bulgarie"], ["🇧🇫", "Burkina Faso"], ["🇧🇮", "Burundi"],
  ["🇨🇻", "Cap-Vert"], ["🇰🇭", "Cambodge"], ["🇨🇲", "Cameroun"], ["🇨🇦", "Canada"],
  ["🇨🇫", "Centrafrique"], ["🇨🇱", "Chili"], ["🇨🇳", "Chine"], ["🇨🇾", "Chypre"],
  ["🇨🇴", "Colombie"], ["🇰🇲", "Comores"], ["🇨🇬", "Congo"], ["🇨🇩", "Congo (RDC)"],
  ["🇨🇷", "Costa Rica"], ["🇨🇮", "Côte d’Ivoire"], ["🇭🇷", "Croatie"], ["🇨🇺", "Cuba"],
  ["🇩🇰", "Danemark"], ["🇩🇯", "Djibouti"], ["🇩🇲", "Dominique"],
  ["🇨🇿", "Tchéquie"], ["🇦🇪", "Émirats arabes unis"], ["🇪🇨", "Équateur"], ["🇪🇬", "Égypte"],
  ["🇪🇷", "Érythrée"], ["🇪🇸", "Espagne"],
  ["🇪🇪", "Estonie"], ["🇸🇿", "Eswatini"], ["🇺🇸", "États-Unis"], ["🇪🇹", "Éthiopie"],
  ["🇫🇯", "Fidji"], ["🇫🇮", "Finlande"], ["🇫🇷", "France"], ["🇬🇦", "Gabon"],
  ["🇬🇲", "Gambie"], ["🇬🇪", "Géorgie"], ["🇬🇭", "Ghana"], ["🇬🇷", "Grèce"],
  ["🇬🇩", "Grenade"], ["🇬🇹", "Guatemala"], ["🇬🇳", "Guinée"], ["🇬🇼", "Guinée-Bissau"],
  ["🇬🇶", "Guinée équatoriale"], ["🇬🇾", "Guyana"], ["🇭🇹", "Haïti"], ["🇭🇳", "Honduras"],
  ["🇭🇺", "Hongrie"], ["🇮🇳", "Inde"], ["🇮🇩", "Indonésie"], ["🇮🇶", "Irak"],
  ["🇮🇷", "Iran"], ["🇮🇪", "Irlande"], ["🇮🇸", "Islande"], ["🇮🇱", "Israël"],
  ["🇮🇹", "Italie"], ["🇯🇲", "Jamaïque"], ["🇯🇵", "Japon"], ["🇯🇴", "Jordanie"],
  ["🇰🇿", "Kazakhstan"], ["🇰🇪", "Kenya"], ["🇰🇮", "Kiribati"], ["🇰🇼", "Koweït"],
  ["🇰🇬", "Kirghizistan"], ["🇱🇦", "Laos"], ["🇱🇸", "Lesotho"], ["🇱🇻", "Lettonie"],
  ["🇱🇧", "Liban"], ["🇱🇷", "Liberia"], ["🇱🇾", "Libye"], ["🇱🇮", "Liechtenstein"],
  ["🇱🇹", "Lituanie"], ["🇱🇺", "Luxembourg"], ["🇲🇰", "Macédoine du Nord"], ["🇲🇬", "Madagascar"],
  ["🇲🇼", "Malawi"], ["🇲🇾", "Malaisie"], ["🇲🇻", "Maldives"], ["🇲🇱", "Mali"],
  ["🇲🇹", "Malte"], ["🇲🇦", "Maroc"], ["🇲🇭", "Îles Marshall"], ["🇲🇷", "Mauritanie"],
  ["🇲🇺", "Maurice"], ["🇲🇽", "Mexique"], ["🇫🇲", "Micronésie"], ["🇲🇩", "Moldavie"],
  ["🇲🇨", "Monaco"], ["🇲🇳", "Mongolie"], ["🇲🇪", "Monténégro"], ["🇲🇿", "Mozambique"],
  ["🇳🇦", "Namibie"], ["🇳🇷", "Nauru"], ["🇳🇵", "Népal"], ["🇳🇮", "Nicaragua"],
  ["🇳🇪", "Niger"], ["🇳🇬", "Nigeria"], ["🇰🇵", "Corée du Nord"], ["🇰🇷", "Corée du Sud"], ["🇳🇴", "Norvège"],
  ["🇳🇿", "Nouvelle-Zélande"], ["🇴🇲", "Oman"], ["🇺🇬", "Ouganda"], ["🇺🇿", "Ouzbékistan"],
  ["🇵🇰", "Pakistan"], ["🇵🇼", "Palaos"], ["🇵🇸", "Palestine"], ["🇵🇦", "Panama"],
  ["🇵🇬", "Papouasie-Nouvelle-Guinée"], ["🇵🇾", "Paraguay"], ["🇳🇱", "Pays-Bas"], ["🇵🇪", "Pérou"],
  ["🇵🇭", "Philippines"], ["🇵🇱", "Pologne"], ["🇵🇹", "Portugal"], ["🇶🇦", "Qatar"],
  ["🇩🇴", "République dominicaine"], ["🇷🇴", "Roumanie"], ["🇬🇧", "Royaume-Uni"], ["🇷🇺", "Russie"],
  ["🇷🇼", "Rwanda"], ["🇰🇳", "Saint-Christophe-et-Niévès"], ["🇸🇲", "Saint-Marin"], ["🇻🇨", "Saint-Vincent-et-les-Grenadines"],
  ["🇱🇨", "Sainte-Lucie"], ["🇸🇧", "Salomon"], ["🇸🇻", "Salvador"], ["🇼🇸", "Samoa"],
  ["🇸🇹", "Sao Tomé-et-Principe"], ["🇸🇳", "Sénégal"], ["🇷🇸", "Serbie"], ["🇸🇨", "Seychelles"],
  ["🇸🇱", "Sierra Leone"], ["🇸🇬", "Singapour"], ["🇸🇰", "Slovaquie"], ["🇸🇮", "Slovénie"],
  ["🇸🇴", "Somalie"], ["🇸🇩", "Soudan"], ["🇸🇸", "Soudan du Sud"], ["🇱🇰", "Sri Lanka"],
  ["🇸🇪", "Suède"], ["🇨🇭", "Suisse"], ["🇸🇷", "Suriname"], ["🇸🇾", "Syrie"],
  ["🇹🇯", "Tadjikistan"], ["🇹🇿", "Tanzanie"], ["🇹🇩", "Tchad"], ["🇹🇭", "Thaïlande"],
  ["🇹🇱", "Timor oriental"], ["🇹🇬", "Togo"], ["🇹🇴", "Tonga"], ["🇹🇹", "Trinité-et-Tobago"],
  ["🇹🇳", "Tunisie"], ["🇹🇷", "Turquie"], ["🇹🇲", "Turkménistan"], ["🇹🇻", "Tuvalu"],
  ["🇺🇦", "Ukraine"], ["🇺🇾", "Uruguay"], ["🇻🇺", "Vanuatu"], ["🇻🇦", "Vatican"],
  ["🇻🇪", "Venezuela"], ["🇻🇳", "Viêt Nam"], ["🇾🇪", "Yémen"], ["🇿🇲", "Zambie"],
  ["🇿🇼", "Zimbabwe"]
];
const STORAGE_KEY = "drapeaux-sans-hesiter-v1";
const $ = (id) => document.getElementById(id);
let memory = loadMemory(), current, options = [], answered = false, streak = 0;

function loadMemory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function getRecord(name) { return memory[name] || { right: 0, wrong: 0, streak: 0, seen: 0 }; }
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(memory)); }
function isMastered(record) { return record.streak >= 4 && record.seen >= 4 && record.right / record.seen >= .8; }
function weight(flag) {
  const record = getRecord(flag[1]);
  return 1 + record.wrong * 4 + (record.seen && !isMastered(record) ? 3 : 0);
}
function pickWeighted(pool) {
  let cursor = Math.random() * pool.reduce((sum, flag) => sum + weight(flag), 0);
  return pool.find((flag) => (cursor -= weight(flag)) <= 0) || pool[pool.length - 1];
}
function chooseFlag() {
  const notMastered = FLAGS.filter((flag) => !isMastered(getRecord(flag[1])));
  // Même en fin de parcours, on continue à cibler les drapeaux non maîtrisés.
  // On ne repasse sur tout le catalogue que lorsque la liste est entièrement maîtrisée.
  const pool = notMastered.length ? notMastered : FLAGS;
  let next = pickWeighted(pool), attempts = 0;
  while (current && next[1] === current[1] && attempts++ < 10) next = pickWeighted(pool);
  return next;
}
function chooseOptions(correct) {
  const others = FLAGS.filter((flag) => flag[1] !== correct[1]), distractors = [];
  while (distractors.length < 3) {
    const candidate = others[Math.floor(Math.random() * others.length)];
    if (!distractors.some((flag) => flag[1] === candidate[1])) distractors.push(candidate);
  }
  return [correct, ...distractors].sort(() => Math.random() - .5);
}
function flagCode(flagEmoji) {
  return [...flagEmoji].map((character) => String.fromCharCode(character.codePointAt(0) - 127397)).join("").toLowerCase();
}
function renderQuestion() {
  current = chooseFlag(); options = chooseOptions(current); answered = false;
  $("question-number").textContent = String((Number($("question-number").textContent) % 99) + 1).padStart(2, "0");
  $("flag").innerHTML = `<img src="https://flagcdn.com/w320/${flagCode(current[0])}.png" alt="Drapeau à identifier" />`;
  $("options").innerHTML = options.map((flag, index) => `<button class="option" data-index="${index}" type="button"><span class="option-key">${index + 1}</span>${flag[1]}</button>`).join("");
  $("feedback").textContent = ""; $("feedback").className = "feedback";
  const record = getRecord(current[1]);
  $("focus-message").textContent = record.wrong > record.right ? "Ce drapeau revient parce qu’il mérite votre attention." : "Le jeu choisit votre prochain drapeau selon vos résultats.";
  document.querySelectorAll(".option").forEach((button) => button.addEventListener("click", () => answer(Number(button.dataset.index))));
}
function answer(index) {
  if (answered) return;
  answered = true;
  const selected = options[index], record = getRecord(current[1]);
  record.seen++;
  if (selected[1] === current[1]) {
    record.right++; record.streak++; streak++;
    $("feedback").textContent = isMastered(record) ? "Excellent : ce drapeau sort de votre liste prioritaire." : "Bonne réponse. La mémoire se renforce.";
    $("feedback").className = "feedback good"; $("options").children[index].classList.add("correct");
  } else {
    record.wrong++; record.streak = 0; streak = 0;
    $("feedback").textContent = `Pas encore — c’était ${current[1]}. Il reviendra bientôt.`;
    $("feedback").className = "feedback bad"; $("options").children[index].classList.add("wrong");
    options.forEach((flag, optionIndex) => { if (flag[1] === current[1]) $("options").children[optionIndex].classList.add("correct"); });
  }
  memory[current[1]] = record; save(); updateStats(); $("streak").innerHTML = `Série <strong>${streak}</strong> <span>◆</span>`;
  setTimeout(renderQuestion, 1100);
}
function updateStats() {
  const records = FLAGS.map((flag) => getRecord(flag[1])), mastered = records.filter(isMastered).length;
  const seen = records.reduce((sum, record) => sum + record.seen, 0), right = records.reduce((sum, record) => sum + record.right, 0);
  $("mastered-count").textContent = mastered; $("review-count").textContent = FLAGS.length - mastered;
  $("accuracy").textContent = seen ? `${Math.round(right / seen * 100)}%` : "—";
  $("mastery-percent").textContent = `${Math.round(mastered / FLAGS.length * 100)}%`; $("mastery-bar").style.width = `${mastered / FLAGS.length * 100}%`;
  $("pool-message").textContent = `${FLAGS.length} drapeaux · ${FLAGS.length - mastered} dans votre entraînement prioritaire`;
}
function resetMemory() {
  if (!confirm("Effacer toute votre progression et recommencer ?")) return;
  memory = {}; streak = 0; $("question-number").textContent = "00"; save(); updateStats(); renderQuestion();
}
document.addEventListener("keydown", (event) => { if (!answered && ["1", "2", "3", "4"].includes(event.key)) answer(Number(event.key) - 1); });
$("reset-button").addEventListener("click", resetMemory);
updateStats(); renderQuestion();
  {
    category: "Logique", title: "Les trois coffres", difficulty: "◆ ◆ ◇", type: "text",
    text: "Un seul coffre contient la clé. Un seul des trois messages est vrai. Coffre A : « La clé est dans B. » Coffre B : « La clé n’est pas ici. » Coffre C : « La clé n’est pas dans A. » Dans quel coffre se trouve la clé ?",
    answer: ["a", "coffre a", "le coffre a"], hint: "Si la clé est dans A, les messages de A et B sont faux, et celui de C est vrai.", art: "chests"
  },
  {
    category: "Observation", title: "Le mot intrus", difficulty: "◆ ◆ ◇", type: "choice",
    text: "Un mot ne suit pas la logique des autres. Trouvez l’intrus :",
    choices: ["MARS", "JUIN", "AOÛT", "LUNE"],
    answer: ["lune"], hint: "Trois mots sont des mois de l’année.", art: "words"
  },
  {
    category: "Code secret", title: "Le cadran de l’horloger", difficulty: "◆ ◆ ◆", type: "text",
    text: "Le code est formé de trois chiffres. 682 : un chiffre est correct et bien placé. 614 : un chiffre est correct mais mal placé. 206 : deux chiffres sont corrects mais mal placés. 738 : aucun chiffre n’est correct. 780 : un chiffre est correct mais mal placé. Quel est le code ?",
    answer: ["042"], hint: "Le 8, le 3 et le 7 sont absents. Dans 780, le 0 est donc correct, mais pas en troisième position.", art: "dial"
  },
  {
    category: "Déduction", title: "La suite oubliée", difficulty: "◆ ◆ ◆", type: "text",
    text: "Une suite de symboles a été gravée sur la porte : 2, 3, 5, 8, 12, 17, … Quel nombre doit venir ensuite ?",
    answer: ["23", "vingt trois", "vingt-trois"], hint: "Regardez l’écart entre chaque nombre : il augmente de 1 à chaque fois.", art: "sequence"
  }
];

const $ = (id) => document.getElementById(id);
let current = 0, score = 0, hints = 0, startedAt = Date.now(), timerId, selected = "";

function renderArt(kind) {
  if (kind === "chests") return '<div class="chest">COFFRE <span>A</span></div><div class="chest">COFFRE <span>B</span></div><div class="chest">COFFRE <span>C</span></div>';
  if (kind === "words") return '<div class="chest">MARS</div><div class="chest">JUIN</div><div class="chest">AOÛT</div><div class="chest">LUNE</div>';
  if (kind === "dial") return '<div class="chest" style="width:210px;font-size:20px;letter-spacing:.25em">6 · 8 · 2<br>6 · 1 · 4<br>2 · 0 · 6</div>';
  return '<div class="chest" style="width:280px;font-size:18px;letter-spacing:.18em">2 → 3 → 5 → 8 → 12 → 17 → ?</div>';
}

function render() {
  const p = puzzles[current];
  $("puzzle-number").textContent = String(current + 1).padStart(2, "0");
  $("puzzle-category").textContent = p.category;
  $("puzzle-title").textContent = p.title;
  $("puzzle-text").textContent = p.text;
  $("difficulty").textContent = p.difficulty;
  $("puzzle-art").innerHTML = renderArt(p.art);
  $("hint-cost").textContent = hints ? "indice utilisé" : "−10 pts";
  $("answer-area").innerHTML = p.type === "choice"
    ? p.choices.map((choice) => `<button class="choice" type="button" data-choice="${choice.toLowerCase()}">${choice}</button>`).join("")
    : `<input id="answer-input" type="text" autocomplete="off" placeholder="Votre réponse…" aria-label="Votre réponse" />`;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("progress-label").textContent = `Énigme ${current + 1} sur ${puzzles.length}`;
  $("progress-percent").textContent = `${Math.round((current + 1) / puzzles.length * 100)}%`;
  $("progress-bar").style.width = `${(current + 1) / puzzles.length * 100}%`;
  selected = "";
  document.querySelectorAll(".choice").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".choice").forEach((b) => b.classList.remove("selected"));
    button.classList.add("selected"); selected = button.dataset.choice;
  }));
  const input = $("answer-input");
  if (input) input.addEventListener("keydown", (event) => { if (event.key === "Enter") validate(); });
}

function normalize(value) {
  return value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");
}
function validate() {
  const p = puzzles[current];
  const value = p.type === "choice" ? selected : $("answer-input").value;
  if (!value) return showFeedback("Choisissez ou écrivez une réponse avant de valider.", "bad");
  if (p.answer.some((answer) => normalize(answer) === normalize(value))) {
    score += Math.max(10, 100 - hints * 10); $("score").textContent = score;
    showFeedback("Bonne déduction. Le dossier avance…", "good");
    $("validate-button").disabled = true;
    setTimeout(() => {
      if (current < puzzles.length - 1) { current++; hints = 0; $("validate-button").disabled = false; render(); }
      else finish();
    }, 750);
  } else showFeedback("Ce n’est pas la bonne piste. Observez encore les indices.", "bad");
}
function showFeedback(message, state) { $("feedback").textContent = message; $("feedback").className = `feedback ${state}`; }
function revealHint() {
  if (hints) return showFeedback(puzzles[current].hint, "bad");
  hints = 1; score = Math.max(0, score - 10); $("score").textContent = score;
  showFeedback(`Indice : ${puzzles[current].hint}`, "bad"); $("hint-cost").textContent = "indice utilisé";
}
function elapsed() {
  const seconds = Math.floor((Date.now() - startedAt) / 1000);
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}
function finish() {
  clearInterval(timerId); $("game-card").classList.add("hidden"); $("completion").classList.remove("hidden");
  $("final-score").textContent = score; $("final-time").textContent = elapsed();
  $("final-message").textContent = score >= 300 ? "Une performance remarquable. Le Cabinet vous reconnaît comme un esprit d’exception." : "Les énigmes sont résolues. Le Cabinet gardera précieusement le souvenir de votre passage.";
}
function reset() {
  current = 0; score = 0; hints = 0; startedAt = Date.now(); $("score").textContent = "0";
  $("game-card").classList.remove("hidden"); $("completion").classList.add("hidden"); $("validate-button").disabled = false; render();
}
$("validate-button").addEventListener("click", validate);
$("hint-button").addEventListener("click", revealHint);
$("restart-button").addEventListener("click", reset);
$("reset-button").addEventListener("click", reset);
timerId = setInterval(() => { $("timer").textContent = elapsed(); }, 1000);
render();
