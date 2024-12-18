const elements = [
  document.querySelector("#motorpeyk"),
  document.querySelector("#phone-tapsi"),
  document.querySelector("#autopeyk"),
  document.querySelector("#hamkhat"),
  document.querySelector("#classic-tapsi"),
];

function swapContant() {
  for (let i = 0; i < elements.length - 1; i++) {
    let temp = elements[i].innerHTML;
    elements[i].innerHTML = elements[i + 1].innerHTML;
    elements[i + 1].innerHTML = temp;
  }
  let temp = elements[elements.length - 1].innerHTML;
  elements[elements.length - 1].innerHTML = elements[0].innerHTML;
  elements[0].innerHTML = temp;
}
setInterval(swapContant, 3000);

const citiesList = document.getElementById("cities-wrapper");
function swapCities() {
  const cityItems = citiesList.querySelectorAll("li");
  const firstCity = cityItems[0];
  citiesList.appendChild(firstCity);
}
setInterval(swapCities, 3000);

const openBtn = document.querySelector(".burger-menu");
const navlinks = document.querySelector(".nav-link-container");

openBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

let navTab = document.querySelector(".nav-tab");
let links = navTab.querySelectorAll("a");
let currentIndex = 0;

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("hover"); // Add the "hover" class on mouseover
  });
  link.addEventListener("mouseout", () => {
    link.classList.remove("hover"); // Remove the "hover" class on mouseout
  });
});

let colorChanger = function () {
  if (currentIndex > 0) {
    links[currentIndex - 1].classList.remove("hover");
  }
  links[currentIndex].classList.add("hover");

  currentIndex = (currentIndex + 1) % links.length;
};
setInterval(colorChanger, 1000);
