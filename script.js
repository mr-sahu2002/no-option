const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 40;
  const maxY = 120;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  message.textContent = "Yay! 💖 Happy Valentine’s Day! 😘";
});
