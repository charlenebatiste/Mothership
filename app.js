// GLOBAL VARIABLES

const start = document.getElementById('start');
const abort = document.getElementById('quitGame');

const mainScreen = document.querySelector('.start-screen');
const playScreen = document.querySelector('.play-screen');

const game = document.getElementById("game");
const ctx = game.getContext("2d");
let runGame;
let player;
const asteroidArray = [];

let newScore = parseInt(score.innerText);

var asteroidImage = new Image();
asteroidImage.src = './assets/asteroid.svg';


var playerImage = new Image();
playerImage.src = './assets/alien-ship.png';

// go to play screen using BLAST OFF button

start.addEventListener('click', playGame);

function playGame() {
    if (mainScreen.style.display = 'block') {
        mainScreen.style.display = 'none';
        playScreen.style.display = 'block';
    }
}

// quits game and resets page -> takes player back to start screen

abort.addEventListener('click', quitGame);

function quitGame() {
    if (playScreen.style.display = 'block') {
        playScreen.style.display = 'none';
        mainScreen.style.display = 'block';
        reset();
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ESTABLISH HEIGHT AND WIDTH OF GAME SCREEN

game.setAttribute('width', '500');
game.setAttribute('height', '600');

// FUNCTION TO CLEAR CANVAS

function clearCanvas() {
    ctx.clearRect(0, 0, game.width, game.height);
  }

// // FACTORY FUNCTION TO HELP BUILD ELEMENTS

function spaceship(x, y, color, lineColor, lineWeight, width, height, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lineColor = lineColor;
    this.lineWeight = lineWeight;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.render = function () {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.lineColor;
        ctx.strokeWidth = this.lineWeight;
        renderPlayerImage(this.x, this.y);
      };
}

function Mothership(x, y, color, lineColor, lineWeight, width, height, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lineColor = lineColor;
    this.lineWeight = lineWeight;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.render = function () {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.lineColor;
        ctx.strokeWidth = this.lineWeight;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
      };
}

function spaceObject() {
    this.x = Math.floor(Math.random() * (game.width - 35));
    this.y = Math.floor(Math.random() * (game.height - 100));
    // set y axis to random location and then subtracts 50 from game.height to avoid aseroids rndering over the player
    this.width = 45;
    this.height = 45;
    this.impact = false;
    this.render = function () {
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
            // this shows the impact zone for the asteroid
        renderImage(this.x, this.y)
      };
}

// FUNCTION TO FILL ASTROIDARRAY WITH ASTEROIDS AND SETS EACH ASTEROID EQUAL TO SPACE OBJECT

function generateAsteroids () {
    let asteroid;
    for (let i = 0; i < 20; i++) {
    // 15 is the set number of asteroids to build
        asteroid = new spaceObject;
        asteroidArray.push(asteroid)
    }
}

// FUNCTION TO RENDER EACH ELEMENT OF ASTEROIDARRAY TO THE PAGE

function renderAsteroids() {
    asteroidArray.forEach(e => {
        e.render();
    })
}

// FUNCTION TO DRAW THE ASTEROIDIMAGE TO CANVAS AND RENDER

function renderImage(x, y) {
    ctx.drawImage(asteroidImage, x, y, 45, 45);
}
 asteroidImage.onload = renderImage

// FUNCTION TO DRAW THE PLAYERIMAGE TO CANVAS AND RENDER

function renderPlayerImage(x, y) {
    ctx.drawImage(playerImage, x, y, 35, 35);
}
 playerImage.onload = renderPlayerImage

// CODE TO DETECT KEYBINDINGS and TRACK/ADJUST SCORE DISPLAY

function detectMovement(e){
    if(e.which === 32){
        player.y -= player.speed
        //  player ship will move 10 up
        if (player.speed !== 0) {
            newScore+=50
            score.innerText = newScore
         }
    } else if (e.which === 37){
        player.x -= player.speed
        //  player ship will move 10 left
    } else if (e.which === 39){
        player.x += player.speed
        //  player ship will move 10 right
    }
    detectImpact();
    gameWon();
}

// COLLISION DETECTION


function detectImpact() {
    asteroidArray.forEach(e => {
        const test = (player.y + player.height > e.y &&
        player.y < e.y + e.height &&
        player.x + player.width > e.x &&
        player.x < e.x + e.width);
        if (test == true) {
            player.speed = 0;
            gameOver();
        }  
    })
}

function gameOver() {
    document.getElementById('gameoverModal').style.display = 'block';
    let quit = document.getElementById('quit');
    let tryagain = document.getElementById('tryagain');
    quit.addEventListener('click', ( )=> {
        document.getElementById('gameoverModal').style.display = 'none';
        reset();
    });
    tryagain.addEventListener('click', ( )=> {
        document.getElementById('gameoverModal').style.display = 'none';
        resetGameboard();
    }
)}

function gameWon() {
    const test = (player.y + player.height > landingDock.y &&
        player.y < landingDock.y + landingDock.height &&
        player.x + player.width > landingDock.x &&
        player.x < landingDock.x + landingDock.width);
        if (test == true) {
            player.speed = 0;
            document.getElementById('youwonModal').style.display = 'block';
            let close = document.getElementById('close');
            close.addEventListener('click', ( )=> {
            reset();
        });
    }
}

function resetGameboard () {
    clearCanvas(); 
    newScore = 0;
    score.innerText = 0;
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30, 10); 
    player.render()
}
 // clears current location of player, respawns player at bottom of screen, resets score tracker

function reset () {
    window.location.reload();
        // this the window which will reset the game loop
}


// FUNCTION THAT CONTROLS THE LIFE CYCLE OF A GAME [ FROM PLAY TO GAME OVER ]

function gameLoop() {
    clearCanvas();
    renderAsteroids();
        // this takes each element inside of the populated asteroidsArray and renders them to the page
    player.render();
    landingDock.render();
    renderImage();
    renderPlayerImage();
  }

// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME

document.addEventListener("DOMContentLoaded", function () {
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30, 10);
    landingDock = new Mothership(180, 0, 'limegreen', 'black', 2, 150, 10, 0);
    document.addEventListener("keydown", detectMovement);
    generateAsteroids();
        // this fills the asteroidsArray with asteroids and sets the elements to spaceObjects
        runGame = setInterval(gameLoop, 60);
  });