// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menuButton").addEventListener("click", function() {
      this.classList.toggle("active");
      document.getElementById("navsp").classList.toggle("active");
      document.getElementById("mask").classList.toggle("active");
  })
});

// タイピング風文字
const typing = (element, sentence) => {
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 100 * ++index);
  });
}
typing('#typing', 'Welcome to my Portfolio');