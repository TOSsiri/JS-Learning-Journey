const countNumber = document.getElementById("countNumber");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");
const addBtn = document.getElementById("addBtn");

let count = 0;

function updateDisplay() {
  countNumber.textContent = count;

  if (count > 0) {
    countNumber.style.color = "rgb(38, 197, 38)";
  } else if (count < 0) {
    countNumber.style.color = "rgb(255, 50, 50)";
  } else {
    countNumber.style.color = "gray";
  }
}

subtractBtn.addEventListener("click", function () {
  count -= 1;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});

addBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});
