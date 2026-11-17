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
let memory = loadMemory(), current, answered = false, streak = 0;

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
function flagCode(flagEmoji) {
  return [...flagEmoji].map((character) => String.fromCharCode(character.codePointAt(0) - 127397)).join("").toLowerCase();
}
function renderQuestion() {
  current = chooseFlag(); answered = false;
  $("question-number").textContent = String((Number($("question-number").textContent) % 99) + 1).padStart(2, "0");
  $("flag").innerHTML = `<img src="https://flagcdn.com/w320/${flagCode(current[0])}.png" alt="Drapeau à identifier" />`;
  $("country-input").value = "";
  $("country-input").disabled = false;
  $("answer-button").disabled = false;
  $("feedback").textContent = ""; $("feedback").className = "feedback";
  const record = getRecord(current[1]);
  $("focus-message").textContent = record.wrong > record.right ? "Ce drapeau revient parce qu’il mérite votre attention." : "Le jeu choisit votre prochain drapeau selon vos résultats.";
  $("country-input").focus();
}
function answer() {
  if (answered) return;
  const value = $("country-input").value.trim();
  if (!value) {
    $("feedback").textContent = "Écrivez le nom d’un pays avant de valider.";
    $("feedback").className = "feedback bad";
    return;
  }
  answered = true;
  const record = getRecord(current[1]);
  record.seen++;
  let nextQuestionDelay = 1000;
  if (normalize(value) === normalize(current[1])) {
    record.right++; record.streak++; streak++;
    $("feedback").textContent = isMastered(record) ? "Excellent : ce drapeau sort de votre liste prioritaire." : "Bonne réponse. La mémoire se renforce.";
    $("feedback").className = "feedback good";
  } else {
    record.wrong++; record.streak = 0; streak = 0;
    $("feedback").textContent = `Pas encore — c’était ${current[1]}. Il reviendra bientôt.`;
    $("feedback").className = "feedback bad";
    nextQuestionDelay = 4000;
  }
  $("country-input").disabled = true; $("answer-button").disabled = true;
  memory[current[1]] = record; save(); updateStats(); $("streak").innerHTML = `Série <strong>${streak}</strong> <span>◆</span>`;
  setTimeout(renderQuestion, nextQuestionDelay);
}
function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'").trim();
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
document.addEventListener("keydown", (event) => {
  if (!answered && event.key === "Enter" && document.activeElement === $("country-input")) {
    event.preventDefault();
    answer();
  }
});
$("answer-button").addEventListener("click", answer);
$("reset-button").addEventListener("click", resetMemory);
updateStats(); renderQuestion();
