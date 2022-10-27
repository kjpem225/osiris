//code js Menu sticky
const header = document.querySelector(".header");
window.addEventListener("scroll", fixHeader);

function fixHeader() {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// code js lien actif
const lien = document.querySelectorAll("ul li a");

lien.forEach((item) => {
  item.addEventListener("click", () => {
    hideAllContent();
    item.classList.add("current");
  });
});

function hideAllContent() {
  lien.forEach((item) => item.classList.remove("current"));
}


//code js carousel partenaire

const partner = document.getElementById("partner");
const img = document.querySelectorAll("#partner img");

let idx = 0;
let timeInterval = 5000;
let interval = setInterval(run, timeInterval);

console.log(img)
function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 7) {
        idx = 0;
    }
    else if (idx < 0) {
        idx = img.length - 7;
    }
    partner.style.transform = `translateX(${-idx * 425}px)`;
}