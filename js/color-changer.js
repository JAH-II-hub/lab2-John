const boxes = document.querySelectorAll(".box");
if (!boxes.length) console.error("Boxes not found");

const redBtn = document.getElementById("btn-red");
const blueBtn = document.getElementById("btn-blue");
const greenBtn = document.getElementById("btn-green");
const resetBtn = document.getElementById("reset-btn");

function changeColor(color) {
  boxes.forEach(box => {
    box.style.backgroundColor = color;
  });
}

redBtn?.addEventListener("click", () => changeColor("red"));
blueBtn?.addEventListener("click", () => changeColor("blue"));
greenBtn?.addEventListener("click", () => changeColor("green"));
resetBtn?.addEventListener("click", () => changeColor("lightgray"));
