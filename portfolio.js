const nav = document.getElementById("navbar");
document.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    nav.style.backgroundColor = "rgb(252, 163, 17)";
    nav.style.fontSize = "1.1em";
  } else {
    nav.style.backgroundColor = "";
    nav.style.fontSize = "1em";
  }
});

function naming(element) {
  const overlay = element.previousElementSibling.childNodes[3];
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    element.innerHTML = "View Less";
  } else {
    overlay.classList.add("hidden");
    element.innerHTML = "View More";
  }
}
