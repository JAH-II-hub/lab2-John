const paragraphs = document.querySelectorAll(".paragraph");
const firstParagraph = document.querySelector(".paragraph");

const highlightBtn = document.getElementById("highlight-btn");
const clearBtn = document.getElementById("clear-btn");
const toggleBtn = document.getElementById("toggle-btn");

highlightBtn?.addEventListener("click", () => {
  paragraphs.forEach(p => p.classList.add("highlight"));
});

clearBtn?.addEventListener("click", () => {
  paragraphs.forEach(p => p.classList.remove("highlight"));
});

toggleBtn?.addEventListener("click", () => {
  if (!firstParagraph) {
    console.error("First paragraph not found");
  } else {
    firstParagraph.classList.toggle("highlight");
  }
});
