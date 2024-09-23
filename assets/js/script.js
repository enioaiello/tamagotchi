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
        thisTamagotchi.name = localStorage.getItem("name");
        thisTamagotchi.age = 0;
        thisTamagotchi.hunger = 100;
        thisTamagotchi.health = 100;
        thisTamagotchi.happiness = 100;
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

            displayProgressTitle();
        }
    }

    this.randomDelay = function() {
        const min = 2.5 * 1000;
        const max = 8.5 * 1000;
        return Math.random() * (max - min) + min;
    }
}


// Déclaration des variables globales
let myTamagotchi = new Tamagotchi();
const hungerProgress = document.querySelector("#hungerProgress");

// Déclaration des variables d'alimentation
let hungry = setInterval(() => {
    if (document.querySelector("#game").style.display === "block") {
        myTamagotchi.hungerFunction();
    }
}, myTamagotchi.randomDelay());

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

// Déclaration des variables du jeu
const nameTitle = document.querySelector("#name");
const progressBars = document.querySelectorAll("progress");

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
    // hunger(false);
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

function showEndPage() {
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
    showGamePage();
}

function saveGame() {
    console.log("Sauvegarde de la partie");
}

function showSettingsPage() {
    console.log("Affichage des paramètres");
}

function displayProgressTitle() {
    progressBars.forEach(progressBar => {
        progressBar.title = progressBar.value + "%";
    });
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
// loadSaveButton.addEventListener("click", loadSave);
registerNameButton.addEventListener("click", registerName);
backSaveButton.addEventListener("click", showMenuPage);
