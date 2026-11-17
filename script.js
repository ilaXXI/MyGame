const puzzles = [
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
