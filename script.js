const logoPath = "image/logo.jpg";
const otherImages = [
  "image/akeem.jpg",
  "image/baale.png",
  "image/kunle.jpg",
  "image/keji.jpg",
  "image/qudrat.jpg",
  "image/rotimi.jpg",
  "image/tayo.jpg",
  "image/tunde.jpg",
  "image/ademola.jpg",
  "image/fatimah.jpg",
  "image/femi.jpg",
  "image/yomi.jpg"
];

const logoImg = document.getElementById("logo-img");
const isTesting = false;

function getCurrentTime() {
  if (isTesting) {
    const simulated = new Date();
    simulated.setHours(17); // Simulate 5pm
    simulated.setMinutes(0);
    return simulated;
  }
  return new Date();
}

function updateTopImage() {
  const now = getCurrentTime();
  const hour = now.getHours();

  console.log(`Current hour: ${hour}`);

  if (hour >= 0 && hour < 16) {
    // Show logo
    if (logoImg.src.indexOf(logoPath) === -1) {
      console.log("Showing logo image");
      logoImg.src = logoPath;
    }
  } else if (hour >= 16 && hour <= 23) {
    // Show random image
    const randomIndex = Math.floor(Math.random() * otherImages.length);
    const newSrc = otherImages[randomIndex];
    if (logoImg.src.indexOf(newSrc) === -1) {
      console.log("Showing random image:", newSrc);
      logoImg.src = newSrc;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updateTopImage();

  setInterval(() => {
    const now = getCurrentTime();
    const hour = now.getHours();

    if (hour >= 16 && hour <= 23) {
      updateTopImage();
    }
  }, 5000);
});
let lastIndex = -1;

function updateTopImage() {
  const now = getCurrentTime();
  const hour = now.getHours();

  if (hour >= 0 && hour < 16) {
    if (logoImg.src.indexOf(logoPath) === -1) {
      logoImg.src = logoPath;
    }
  } else if (hour >= 16 && hour <= 23) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * otherImages.length);
    } while (randomIndex === lastIndex && otherImages.length > 1);

    lastIndex = randomIndex;
    logoImg.src = otherImages[randomIndex];
  }
}
