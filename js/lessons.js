function updateMatmul() {
  const m = document.getElementById("m").value;
  const k = document.getElementById("k").value;
  const n = document.getElementById("n").value;
  document.getElementById("matmulResult").textContent =
    `[${m},${k}] @ [${k},${n}] → [${m},${n}]`;
}

function normalizeShape(value) {
  return value.replace(/\s/g, "");
}

function checkQuiz() {
  const answers = [
    normalizeShape(document.getElementById("q1").value),
    normalizeShape(document.getElementById("q2").value),
    normalizeShape(document.getElementById("q3").value)
  ];
  const expected = ["[7,20]", "[16,100,2048]", "[16,100,512]"];
  const score = answers.reduce(
    (total, answer, index) => total + (answer === expected[index] ? 1 : 0),
    0
  );
  const feedback = document.getElementById("feedback");
  feedback.className = score === 3 ? "feedback ok" : "feedback bad";
  feedback.textContent =
    score === 3 ? "3/3 — mastered." :
    `${score}/3 — expected answers: ${expected.join(" ; ")}`;
}
