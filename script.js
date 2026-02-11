document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const message = document.getElementById("message");
  const celebration = document.getElementById("celebration");
  const loveSong = document.getElementById("loveSong");
  const buttonsContainer = document.querySelector(".buttons");

  // Safety check
  if (!noBtn || !yesBtn || !message || !buttonsContainer) {
    console.error("Required elements missing in HTML");
    return;
  }

  // Move the "No" button randomly
  function moveNoButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = 120;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Desktop hover
  noBtn.addEventListener("mouseover", moveNoButton);

  // Mobile touch
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  });

  // YES button logic
  yesBtn.addEventListener("click", () => {
    // Update text
    message.textContent = "Yay! I knew you'd say yes! ❤️";

    // Show GIF
    if (celebration) {
      celebration.classList.remove("hidden");
    }

    // Play music
    if (loveSong) {
      loveSong.volume = 0.6;
      loveSong.currentTime = 0;
      loveSong.play().catch(() => {});
    }

    // 🔥 Remove the entire buttons container (NO extra space)
    buttonsContainer.style.display = "none";
  });
});
