let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let backBullets = document.querySelector(".backBullets");
let landingBackgounds = [
  "h0.png",
  "h1.jpg",
  "h2.jpg",
  "h3.png",
  "h4.jpg",
  "h5.jpg",
];

let imgIndex = 0;

next.onclick = () => {
  imgIndex = (imgIndex + 1) % landingBackgounds.length;
  let img = landingBackgounds[imgIndex];

  document.querySelector(
    ".landing"
  ).style.backgroundImage = `url('../images/${img}')`;
  activeBullet();
};

prev.onclick = () => {
  if (imgIndex == 0) {
    imgIndex = 5;
  } else {
    imgIndex--;
  }
  let img = landingBackgounds[imgIndex];

  document.querySelector(
    ".landing"
  ).style.backgroundImage = `url('../images/${img}')`;
  activeBullet();
};

for (let i = 0; i < landingBackgounds.length; i++) {
  let bullet = document.createElement("span");
  backBullets.appendChild(bullet);
}

function activeBullet() {
  let myBullets = document.querySelectorAll(".backBullets span");
  myBullets.forEach((bol, index) => {
    bol.classList.remove("active");
    if (index == imgIndex) {
      bol.classList.add("active");
    }
  });
}
activeBullet();
