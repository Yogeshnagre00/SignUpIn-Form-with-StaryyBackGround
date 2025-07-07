function createStars() {
  const container = document.getElementById("starsContainer");
  const starCount = 800; // Increase density

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const sizes = ["small", "medium", "large"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(randomSize);

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(star);
  }
}

function createShootingStar() {
  const container = document.getElementById("starsContainer");
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";

  shootingStar.style.left = Math.random() * 100 + "%";
  shootingStar.style.top = Math.random() * 100 + "%";

  container.appendChild(shootingStar);

  setTimeout(() => {
    if (shootingStar.parentNode) {
      shootingStar.parentNode.removeChild(shootingStar);
    }
  }, 2000);
}

// Initialize stars
createStars();
// Create shooting stars at intervals
setInterval(createShootingStar, 4000);
