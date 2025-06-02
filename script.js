const logoPath = "image/logo.jpg";
const otherImages = [
  "image/akeem.jpg", "image/baale.png", "image/kunle.jpg",
  "image/keji.jpg", "image/qudrat.jpg", "image/rotimi.jpg",
  "image/tayo.jpg", "image/tunde.jpg", "image/ademola.jpg",
  "image/fatimah.jpg", "image/femi.jpg", "image/dada.jpg",
  "image/yomi.jpg","image/morufat.jpg","image/quazeem.jpg",
  "image/toyin.jpg"
];

const birthdayMembers = [
  { name: "Oludiran Tayo Gbenga", day: 26, month: 4, image: "image/tayo.gif" },
  { name: "Fatimat Sobiye (nee Makanjuola)", day: 22, month: 9, image: "image/fatimah.gif" },
  { name: "Morenikeji Adebunmi (Nee Olaoba)", day: 31, month: 6, image: "image/keji.gif" }, // Fixed
  { name: "Soremekun Oluwafemi", day: 9, month: 10, image: "image/femi.gif" },
  { name: "Olurotimi Makinde", day: 16, month: 3, image: "image/rotimi.gif" },
  { name: "Ademola Adebesin", day: 29, month: 5, image: "image/ademola.gif" },
  { name: "Babatunde Sowunmi", day: 28, month: 1, image: "image/tunde.gif" },
  { name: "Abayomi Aroyeun", day: 21, month: 5, image: "image/Abayomi.jpg" },
  { name: "Dada Ishaq Olakunle", day: 9, month: 1, image: "image/dada.jpg" },
  { name: "Quazeem Mabayomije Adeogun", day: 4, month: 9, image: "image/quazeem.jpg" },
  { name: "Oluwatoyin Oluwakemi Awobajo", day: 26, month: 7, image: "image/toyin.jpg" },
  { name: "Qudrat Offor (Nee Eyiowuawi)", day: 17, month: 7, image: "image/qudrat.gif" }
];

const memberNames = [
  "Quazeem Mayomije Adeogun (Head Boy)",
  "Morufat Akinwande (Head Girl)",
  "Fatimah Sobiye (Nee Makanjuola)",
  "Oludiran Tayo Gbenga",
  "Nurudeen Makanjuola",
  "Morenikeji Adebunmi(Nee Olaoba)",
  "Soremekun Oluwafemi",
  "Olurotimi Makinde",
  "Ademola Adebesin",
  "Babatunde Sowunmi",
  "Abayomi Aroyeun",
  "Dada Ishaq Olakunle",
  "Qudrat Offor (Nee Eyiowuawi)",
  "Quazeem Mabayomije Adeogun",
  "Gbenga Malomo",
  "Oluwatoyin Oluwakemi Awobaji(Nee Adekanmbi)"
];

const isTesting = false;
const testDate = new Date(2025, 4, 30); // May 30

let lastIndex = -1;

function getCurrentTime() {
  return isTesting ? testDate : new Date();
}

function getTodayBirthday() {
  const now = getCurrentTime();
  const day = now.getDate();
  const month = now.getMonth();
  return birthdayMembers.find(member => member.day === day && member.month === month);
}

function updateTopImage() {
  const logoImg = document.getElementById("logo-img");
  const now = getCurrentTime();
  const hour = now.getHours();

  if (hour < 16) {
    logoImg.src = logoPath;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * otherImages.length);
    } while (randomIndex === lastIndex && otherImages.length > 1);
    lastIndex = randomIndex;
    logoImg.src = otherImages[randomIndex];
  }
}

function updateWelcomeSection() {
  const welcomeDiv = document.getElementById("Welcome");
  const birthday = getTodayBirthday();
  if (birthday) {
    welcomeDiv.style.animation = "none";
    welcomeDiv.style.backgroundImage = `url('${birthday.image}')`;
    welcomeDiv.innerHTML = `<h3>We celebrate you today,<br>${birthday.name.toUpperCase()}! <br> Igba Odun, Odun kan ni O. <br> Happy Birthday</h3>`;
  } else {
    welcomeDiv.style.animation = "slideshow 20s infinite";
    welcomeDiv.innerHTML = `<h2>Welcome Home !!!</h2>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updateTopImage();
  updateWelcomeSection();

  setInterval(() => {
    const now = getCurrentTime();
    if (now.getHours() >= 16 && now.getHours() <= 23) {
      updateTopImage();
    }
    updateWelcomeSection();
  }, 5000);

  // Member toggle logic
  const showBtn = document.getElementById("show-members-btn");
  const memberList = document.getElementById("members-list");
  let isVisible = false;

  showBtn.addEventListener("click", () => {
    isVisible = !isVisible;
    if (isVisible) {
      memberList.style.display = "block";
      showBtn.textContent = "Hide the Members";

      const sortedNames = [...memberNames].sort((a, b) => a.localeCompare(b));
      memberList.innerHTML = "";
      sortedNames.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        memberList.appendChild(li);
      });
    } else {
      memberList.style.display = "none";
      showBtn.textContent = "See the Members";
    }
  });
});

