// =====================
// Elements
// =====================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts-container");

// 👉 CHANGE TO YOUR NUMBER (no +)
const phoneNumber = "2347035356591";

// =====================
// Yes Button Action
// =====================
yesBtn.addEventListener("click", () => {
  createHeartBurst();

  setTimeout(() => {
    const message = encodeURIComponent(
      "Hey my love ❤️ I said YES! I’ll be your Valentine 💖💋"
    );
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  }, 2000);
});

// =====================
// No Button Runs Away 😏
// =====================
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// =====================
// Floating Hearts
// =====================
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 14 + "px";
  heart.style.opacity = Math.random();
  heart.style.animation = "floatUp 6s linear forwards";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function createHeartBurst() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
}

setInterval(createHeart, 700);

// =====================
// Heart Animation Style
// =====================
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
