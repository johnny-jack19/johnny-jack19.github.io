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

/***********************Calls to open API's************************/
function pingChatApi() {
  fetch("https://jackson-chat-api.herokuapp.com", {
    method: "GET",
  });
}

function pingChat() {
  fetch("https://jackson-chat.herokuapp.com", {
    method: "GET",
  });
}

function pingHotelApi() {
  fetch("https://jackson-hotel-db.herokuapp.com", {
    method: "GET",
  });
}

function pingIndigoSky() {
  fetch("https://indigo-sky.herokuapp.com", {
    method: "GET",
  });
}

function pingHotelCompany() {
  fetch("https://jackson-hotel-company.herokuapp.com", {
    method: "GET",
  });
}

function pingClock() {
  fetch("https://jacksonclock.herokuapp.com", {
    method: "GET",
  });
}

function pingRPS() {
  fetch("https://jackson-rps.herokuapp.com", {
    method: "GET",
  });
}

function pingCharacterSheet() {
  fetch("https://jackson-character-sheet-91260bbcc3da.herokuapp.com/", {
    method: "GET",
  });
}

pingChatApi();
pingHotelApi();
pingChat();
pingClock();
pingRPS();
pingIndigoSky();
pingHotelCompany();
pingCharacterSheet();
