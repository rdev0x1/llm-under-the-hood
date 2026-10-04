function numberValue(id) {
  return Number(document.getElementById(id).value);
}

function updateAutogradDemo() {
  const x = numberValue("agX");
  const y = numberValue("agY");
  const z = numberValue("agZ");

  const a = x * y;
  const loss = a + z;

  const dLossDOutput = 1.0;
  const dLossDA = dLossDOutput * 1.0;
  const dLossDX = dLossDA * y;
  const dLossDY = dLossDA * x;
  const dLossDZ = dLossDOutput * 1.0;

  document.getElementById("nodeX").textContent = x;
  document.getElementById("nodeA").textContent = a;
  document.getElementById("nodeZ").textContent = z;
  document.getElementById("nodeL").textContent = loss;
  document.getElementById("gradX").textContent = `grad = ${dLossDX}`;
  document.getElementById("gradA").textContent = `grad = ${dLossDA}`;
  document.getElementById("gradZ").textContent = `grad = ${dLossDZ}`;
  document.getElementById("autogradSummary").textContent =
    `L = ${loss}; dL/dx = ${dLossDX}; dL/dy = ${dLossDY}; dL/dz = ${dLossDZ}`;
}

function updateSharedGradient() {
  const x = numberValue("sharedX");
  const leftMultiplyContribution = x;
  const rightMultiplyContribution = x;
  const directContribution = 1.0;
  const total =
    leftMultiplyContribution + rightMultiplyContribution + directContribution;

  document.getElementById("sharedGradientResult").textContent =
    `x = ${x} → dy/dx = ${x} + ${x} + 1 = ${total}`;
}

function configureCourseNavigation() {
  const nav = document.querySelector(".navlinks");
  if (!nav) {
    return;
  }

  nav.innerHTML = `
    <a href="index.html#math">1. Math</a>
    <a href="autograd.html#autograd" aria-current="page">2. Autograd</a>
  `;
}

function enableRoadmapNavigation() {
  const steps = document.querySelectorAll("#roadmap .step");
  const targets = ["index.html#math", "autograd.html#autograd"];

  targets.forEach((target, index) => {
    const step = steps[index];
    if (!step) {
      return;
    }

    const chapterTitle = step.querySelector("h3")?.textContent || "chapter";
    step.setAttribute("role", "link");
    step.setAttribute("tabindex", "0");
    step.setAttribute("aria-label", `Open ${chapterTitle}`);
    step.title = `Open ${chapterTitle}`;
    step.style.cursor = "pointer";

    const navigate = () => {
      window.location.href = target;
    };

    step.addEventListener("click", navigate);
    step.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        navigate();
      }
    });
  });
}

configureCourseNavigation();
enableRoadmapNavigation();
updateAutogradDemo();
updateSharedGradient();
