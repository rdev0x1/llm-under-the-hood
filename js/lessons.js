function updateMatmul() {
  const m = document.getElementById("m").value;
  const k = document.getElementById("k").value;
  const n = document.getElementById("n").value;
  document.getElementById("matmulResult").textContent =
    `[${m},${k}] @ [${k},${n}] → [${m},${n}]`;
}

function updateDerivative() {
  const x = Number(document.getElementById("derivativeX").value);
  const fx = x * x;
  const derivative = 2 * x;
  document.getElementById("derivativeResult").textContent =
    `x = ${x.toFixed(1)} → f(x) = ${fx.toFixed(2)} → f′(x) = ${derivative.toFixed(2)}`;
}

function stableSoftmax(values) {
  const maxValue = Math.max(...values);
  const exponentials = values.map((value) => Math.exp(value - maxValue));
  const sum = exponentials.reduce((total, value) => total + value, 0);
  return exponentials.map((value) => value / sum);
}

function updateSoftmax() {
  const logits = [
    Number(document.getElementById("logit1").value),
    Number(document.getElementById("logit2").value),
    Number(document.getElementById("logit3").value)
  ];
  const probabilities = stableSoftmax(logits);
  document.getElementById("softmaxResult").textContent =
    `softmax([${logits.join(", ")}]) ≈ [${probabilities.map((p) => p.toFixed(3)).join(", ")}]`;
}

function updateCrossEntropy() {
  const probability = Number(document.getElementById("correctProbability").value);
  const loss = -Math.log(probability);
  document.getElementById("crossEntropyResult").textContent =
    `p = ${probability.toFixed(3)} → loss = ${loss.toFixed(3)}`;
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s/g, "");
}

function checkCheckpoint() {
  const answers = [
    normalize(document.getElementById("q1").value),
    normalize(document.getElementById("q2").value),
    normalize(document.getElementById("q3").value),
    normalize(document.getElementById("q4").value),
    normalize(document.getElementById("q5").value),
    normalize(document.getElementById("q6").value),
    normalize(document.getElementById("q7").value),
    normalize(document.getElementById("q8").value)
  ];

  const checks = [
    answers[0] === "[7,20]",
    answers[1] === "[16,100,512]",
    answers[2] === "6",
    answers[3] === "24",
    answers[4] === "1" || answers[4] === "1.0",
    answers[5] === "yes" || answers[5] === "y",
    answers[6] === "0.9" || answers[6] === ".9",
    answers[7] === "chainrule" || answers[7] === "thechainrule"
  ];

  const score = checks.filter(Boolean).length;
  const feedback = document.getElementById("feedback");

  if (score === checks.length) {
    feedback.className = "feedback ok";
    feedback.textContent = "8/8 — Chapter 1 mastered. You are ready for Autograd.";
    return;
  }

  feedback.className = "feedback bad";
  feedback.textContent =
    `${score}/8 — review the missed concepts before moving to Autograd. ` +
    "Expected: [7,20] ; [16,100,512] ; 6 ; 24 ; 1 ; yes ; 0.9 ; chain rule.";
}

function addAutogradLink() {
  const nextChapter = document.querySelector(".next-chapter");
  if (!nextChapter) {
    return;
  }

  const textColumn = nextChapter.querySelector("div");
  if (!textColumn || textColumn.querySelector(".chapter-link")) {
    return;
  }

  const link = document.createElement("a");
  link.className = "chapter-link";
  link.href = "autograd.html";
  link.textContent = "Open Chapter 2 — Autograd →";
  link.style.display = "inline-flex";
  link.style.marginTop = "12px";
  link.style.padding = "9px 12px";
  link.style.border = "1px solid #3d5180";
  link.style.borderRadius = "10px";
  link.style.background = "#172340";
  link.style.textDecoration = "none";
  textColumn.appendChild(link);
}

updateDerivative();
updateSoftmax();
updateCrossEntropy();
addAutogradLink();
