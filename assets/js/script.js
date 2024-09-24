'use strict' // Utilisation du mode strict de JavaScript

// Création de la classe Tamagotchi
function Tamagotchi() {
    let thisTamagotchi = this;
    this.name = "";
    this.age = 0;
    this.hunger = 100;
    this.health = 100;
    this.happiness = 100;

    this.init = function() {
        thisTamagotchi.name = localStorage.getItem("name") || "";
        thisTamagotchi.age = 0;
        thisTamagotchi.hunger = parseInt(localStorage.getItem("hunger"), 10) || 100;
        thisTamagotchi.health = parseInt(localStorage.getItem("health"), 10) || 100;
        thisTamagotchi.happiness = parseInt(localStorage.getItem("happiness"), 10) || 100;
    }

    this.hungerFunction = function() {
        if (document.querySelector("#game").style.display === "block") {
            if (thisTamagotchi.hunger > 0) {
                thisTamagotchi.hunger -= 1;
                console.log("Hunger: " + thisTamagotchi.hunger);
            } else {
                showEndPage();
            }

            hungerProgress.value = thisTamagotchi.hunger;

            displayProgressTitle("hunger");
        }
    }

    this.happinessFunction = function() {
        if (document.querySelector("#game").style.display === "block") {
            if (thisTamagotchi.happiness > 0) {
                thisTamagotchi.happiness -= 1;
                console.log("Happiness: " + thisTamagotchi.happiness);
            } else {
                showEndPage();
            }

            displayProgressTitle("happiness");
        }
    }

    this.healthFunction = function() {
        if (document.querySelector("#game").style.display === "block") {
            if (thisTamagotchi.health > 0) {
                thisTamagotchi.health -= 1;
                console.log("Health: " + thisTamagotchi.health);
            } else {
                showEndPage();
            }

            displayProgressTitle("health");
        }
    }

    this.randomDelay = function(category) {
        if (category === "hungry") {
            const min = 2.5 * 1000;
            const max = 8.5 * 1000;
            return Math.random() * (max - min) + min;
        }
        if (category === "happy") {
            const min = 5.1 * 1000;
            const max = 12.5 * 1000;
            return Math.random() * (max - min) + min;
        }
        if (category === "health") {
            const min = 15 * 1000;
            const max = 30 * 1000;
            return Math.random() * (max - min) + min;
        }
    }
}

// Déclaration des variables globales
let myTamagotchi = new Tamagotchi();
const hungerProgress = document.querySelector("#hungerProgress");

// Déclaration des variables d'alimentation
let hungry = setInterval(() => {
    if (document.querySelector("#game").style.display === "block") {
        myTamagotchi.hungerFunction("hungry");
    }
}, myTamagotchi.randomDelay("hungry"));

let happy = setInterval(() => {
    if (document.querySelector("#game").style.display === "block") {
        myTamagotchi.happinessFunction("happy");
    }
}, myTamagotchi.randomDelay("happy"));

let health = setInterval(() => {
    if (document.querySelector("#game").style.display === "block") {
        myTamagotchi.healthFunction("health");
    }
}, myTamagotchi.randomDelay("health"));

// Déclaration des pages
const loadingPage = document.querySelector("#loading");
const startPage = document.querySelector("#start");
const menuPage = document.querySelector("#menu");
const savePage = document.querySelector("#save");
const registerPage = document.querySelector("#register");
const gamePage = document.querySelector("#game");
const endPage = document.querySelector(".end");

// Déclaration des variables du menu
const launchGameButton = document.querySelector("#launchGame");
const startGameButton = document.querySelector("#startGame");
const settingsButton = document.querySelector("#settings");
const githubButton = document.querySelector("#github");
const newSaveButton = document.querySelector("#newSave");
const loadSaveButton = document.querySelector("#loadSave");
const backSaveButton = document.querySelector("#backSave");
const registerNameButton = document.querySelector("#registerName");
const reasonLabel = document.querySelector("#reason");

// Déclaration des variables du jeu
const nameTitle = document.querySelector("#name");
const progressBars = document.querySelectorAll("progress");
const feedButton = document.querySelector("#feed");
const happinessButton = document.querySelector("#happiness");
const healthButton = document.querySelector("#health");
const saveGameButton = document.querySelector("#saveGame");
const deleteGameButton = document.querySelector("#deleteGame");

// Création des fonctions
function initGame() {
    // Initialisation du jeu
    console.log("Initialisation du jeu");

    // Afficher la page de chargement
    loadingPage.style.display = "flex";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";

    setTimeout(showStartPage, 3500);
}

function showStartPage() {
    // Afficher la page de démarrage
    startPage.style.display = "block";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";
}

function showMenuPage() {
    // Afficher la page de menu
    menuPage.style.display = "block";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";
}

function showSavePage() {
    // Afficher la page de sauvegarde
    savePage.style.display = "block";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";
}

function showRegisterPage() {
    // Afficher la page d'enregistrement
    registerPage.style.display = "block";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";

    if (localStorage.getItem("name")) {
        document.querySelector("#nameInput").value = localStorage.getItem("name");
    }
}

function showGamePage() {
    // Afficher la page de jeu
    gamePage.style.display = "block";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de fin
    endPage.style.display = "none";

    myTamagotchi.init();
    displayProgressTitle();
}

function showEndPage(reason) {
    // Afficher la page de fin
    endPage.style.display = "flex ";
    // Masquer la page de chargement
    loadingPage.style.display = "none";
    // Masquer la page de démarrage
    startPage.style.display = "none";
    // Masquer la page de menu
    menuPage.style.display = "none";
    // Masquer la page de sauvegarde
    savePage.style.display = "none";
    // Masquer la page d'enregistrement
    registerPage.style.display = "none";
    // Masquer la page de jeu
    gamePage.style.display = "none";

    localStorage.clear();

    if (reason === "hunger") {
        reasonLabel.textContent = "Votre Tamagotchi est mort de faim.";
    } else if (reason === "happiness") {
        reasonLabel.textContent = "Votre Tamagotchi est mort de tristesse.";
    } else if (reason === "health") {
        reasonLabel.textContent = "Votre Tamagotchi est mort de maladie.";
    } else if (reason === "old") {
        reasonLabel.textContent = "Votre Tamagotchi est mort de vieillesse.";
    } else if (reason === "delete") {
        reasonLabel.textContent = "Votre Tamagotchi a été supprimé.";
    }

    setTimeout(showMenuPage, 5000);
}

function registerName(e) {
    e.preventDefault();
    localStorage.setItem("name", document.querySelector("#nameInput").value);
    nameTitle.textContent = document.querySelector("#nameInput").value;
    showGamePage();
}

function loadSave() {
    console.log("Chargement de la sauvegarde");
    myTamagotchi.name = localStorage.getItem("name");
    nameTitle.textContent = myTamagotchi.name;
    myTamagotchi.age = parseInt(localStorage.getItem("age"), 10);
    myTamagotchi.hunger = parseInt(localStorage.getItem("hunger"), 10);
    progressBars[0].value = myTamagotchi.hunger;
    myTamagotchi.happiness = parseInt(localStorage.getItem("happiness"), 10);
    progressBars[1].value = myTamagotchi.happiness;
    myTamagotchi.health = parseInt(localStorage.getItem("health"), 10);
    progressBars[2].value = myTamagotchi.health;
    showGamePage();
}

function saveGame() {
    console.log("Sauvegarde de la partie");
    localStorage.setItem("name", myTamagotchi.name);
    localStorage.setItem("age", myTamagotchi.age);
    localStorage.setItem("hunger", myTamagotchi.hunger);
    localStorage.setItem("health", myTamagotchi.health);
    localStorage.setItem("happiness", myTamagotchi.happiness);
    showMenuPage();
}

function showSettingsPage() {
    console.log("Affichage des paramètres");
}

function displayProgressTitle(category) {
    if (category === "hunger") {
        progressBars[0].title = "Faim: " + myTamagotchi.hunger + "%";
        progressBars[0].value = myTamagotchi.hunger;
        localStorage.setItem("hunger", myTamagotchi.hunger);
    }
    if (category === "happiness") {
        progressBars[1].title = "Bonheur: " + myTamagotchi.happiness + "%";
        progressBars[1].value = myTamagotchi.happiness;
        localStorage.setItem("happiness", myTamagotchi.happiness);
    }
    if (category === "health") {
        progressBars[2].title = "Santé: " + myTamagotchi.health + "%";
        progressBars[2].value = myTamagotchi.health;
        localStorage.setItem("health", myTamagotchi.health);
    }
}

// Création des événements
initGame();
launchGameButton.addEventListener("click", showMenuPage);
startGameButton.addEventListener("click", showSavePage);
// settingsButton.addEventListener("click", showSettingsPage);
githubButton.addEventListener("click", () => {
    window.open("https://github.com/enioaiello/tamagotchi", "_blank");
});
newSaveButton.addEventListener("click", showRegisterPage);
loadSaveButton.addEventListener("click", loadSave);
registerNameButton.addEventListener("click", registerName);
backSaveButton.addEventListener("click", showMenuPage);
feedButton.addEventListener("click", () => {
    if (myTamagotchi.hunger < 100) {
        myTamagotchi.hunger += 10;
        if (myTamagotchi.hunger > 100) {
            myTamagotchi.hunger = 100;
        }
        hungerProgress.value = myTamagotchi.hunger;
        displayProgressTitle();
    }
});
happinessButton.addEventListener("click", () => {
    if (myTamagotchi.happiness < 100) {
        myTamagotchi.happiness += 10;
        if (myTamagotchi.happiness > 100) {
            myTamagotchi.happiness = 100;
        }
        hungerProgress.value = myTamagotchi.happiness;
        displayProgressTitle("happiness");
    }
});
healthButton.addEventListener("click", () => {
    if (myTamagotchi.health < 100) {
        myTamagotchi.health += 10;
        if (myTamagotchi.health > 100) {
            myTamagotchi.health = 100;
        }
        hungerProgress.value = myTamagotchi.health;
        displayProgressTitle("health");
    }
});
saveGameButton.addEventListener("click", saveGame);
deleteGameButton.addEventListener("click", () => {
    document.querySelector("#tamagotchiContent img").src = "./assets/img/explosion.png";

    setTimeout(() => {
        localStorage.clear();
        clearInterval(hungry);
        clearInterval(happy);
        clearInterval(health);
        showEndPage("delete");
    }, 2500);
});