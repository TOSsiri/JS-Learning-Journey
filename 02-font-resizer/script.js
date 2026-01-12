const textContent = document.getElementById("textContent");
const zoomIn = document.getElementById("zoomInBtn");
const zoomOut = document.getElementById("zoomOutBtn");

let size = 20;

zoomIn.addEventListener("click", function () {
  size = size + 5;
  textContent.style.fontSize = size + "px";
});

zoomOut.addEventListener("click", function () {
  size = size - 5;
  textContent.style.fontSize = size + "px";
});
