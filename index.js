const textAreaEl = document.getElementById("textarea");
const totalCharEl = document.querySelector(".total-char");
const remainingCharEl = document.querySelector(".remaining-char");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  let maxChar = textAreaEl.getAttribute("maxLength");
  let totalChar = textAreaEl.value.length;
  let remainingChar = maxChar - totalChar;

  totalCharEl.innerText = totalChar;
  remainingCharEl.innerText = remainingChar;
}
