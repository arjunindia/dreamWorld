function rndn() {
  return Math.floor(Math.random() * 255);
}
let cc = 0;
setInterval(() => {
  document.querySelector(
    ".logo h2"
  ).style.color = `rgb(${rndn()},${rndn()},${rndn()})`;
}, 1000);
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sdiv");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

function hhc() {
  if (cc % 2 == 0) {
    document.querySelector(`.links-2`).classList.add(`hhc`);
    document.querySelector(`.hh span`).innerHTML = `menu_open`;
  } else {
    document.querySelector(`.links-2`).classList.remove(`hhc`);
    document.querySelector(`.hh span`).innerHTML = `menu`;
  }
  cc++;
  console.log("opened");
}
