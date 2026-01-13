const price = document.getElementById("totalPrice");
const water = document.getElementById("waterBtn");
const friedRice = document.getElementById("friedRiceBtn");
const shabu = document.getElementById("shabuBtn");
const resetBtn = document.getElementById("resetBtn");

let totalMoney = 0;

water.addEventListener("click", function () {
  totalMoney += 10;
  price.textContent = totalMoney;
});

friedRice.addEventListener("click", function () {
  totalMoney += 50;
  price.textContent = totalMoney;
});

shabu.addEventListener("click", function () {
  totalMoney += 399;
  price.textContent = totalMoney;
});

resetBtn.addEventListener("click", function () {
  totalMoney = 0;
  price.textContent = totalMoney;
});

