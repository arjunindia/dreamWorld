function rndn() {
  return Math.floor(Math.random() * 255);
}

setInterval(() => {
  document.querySelector(
    ".logo h2"
  ).style.color = `rgb(${rndn()},${rndn()},${rndn()})`;
}, 1000);
