// ~~~ START SCREEN SCRIPT ~~~

// button variables
const instructions = document.getElementById('instructions');
const start = document.getElementById('start');
const abort = document.getElementById('quitGame');

// added hover feature to buttons

instructions.addEventListener("mouseover", () => {
    // console.log('testing i am over the button');
    instructions.style.backgroundColor = "#cbc3e3";
    instructions.style.fontStyle = "italic";
})
instructions.addEventListener("mouseout", () => {
    instructions.style.backgroundColor = "#0dcaf0";
    instructions.style.fontStyle = "normal";
})

start.addEventListener("mouseover", () => {
    start.style.backgroundColor = "#93DB70";
    start.style.fontStyle = "italic";
})
start.addEventListener("mouseout", () => {
    start.style.backgroundColor = "#ffca2c";
    start.style.fontStyle = "normal";
})

// go to play screen using BLAST OFF button

start.addEventListener('click', playGame);

function playGame() {
    if (document.querySelector('.start-screen').style.display = 'block') {
        document.querySelector('.start-screen').style.display = 'none';
        document.querySelector('.play-screen').style.display = 'block';
        // console.log('you are about to change screens')
    }
}

// go to start screen using ABORT MISSION button

abort.addEventListener('click', quitGame);

function quitGame() {
    if (document.querySelector('.play-screen').style.display = 'block') {
        document.querySelector('.play-screen').style.display = 'none';
        document.querySelector('.start-screen').style.display = 'block';
        reset();
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~ GAME SCREEN SCRIPT ~~~

// GLOBAL VARIABLES

const game = document.getElementById("game");
const ctx = game.getContext("2d");
let runGame;
let player;
const asteroidArray = [];


// ESTABLISH HEIGHT AND WIDTH OF GAME SCREEN

game.setAttribute('width', '500');
game.setAttribute('height', '600');

// FUNCTION TO CLEAR CANVAS
function clearCanvas() {
    ctx.clearRect(0, 0, game.width, game.height);
  }


// // FACTORY FUNCTION TO HELP BUILD ELEMENTS
function spaceship(x, y, color, lineColor, lineWeight, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lineColor = lineColor;
    this.lineWeight = lineWeight;
    this.width = width;
    this.height = height;
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
    let color = 'yellow';
    let lineColor = 'brown';
    let lineWeight = 2;
    this.width = 38;
    this.height = 38;
    this.impact = false;
    this.render = function () {
        ctx.fillStyle = color;
        ctx.strokeStyle = lineColor;
        ctx.strokeWidth = lineWeight;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
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

// CODE TO DETECT KEYBINDINGS and TRACK/ADJUST SCORE DISPLAY

function detectMovement(e){
    if(e.which === 32){
        let newScore = parseInt(score.innerText)
        player.y -= 10
        //  player ship will move 10 up
        newScore+=50
        score.innerText = newScore
    } else if (e.which === 37){
        player.x -= 10
        //  player ship will move 10 left
    }else if (e.which === 39){
        player.x += 10
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
                gameOver();
            }  
    })
}

function gameOver() {
    let gameOver = document.createElement('div');
    gameOver.style.position = 'absolute';
    gameOver.style.height = '30vh';
    gameOver.style.width = '30vw';
    gameOver.style.top = '20em';
    gameOver.style.backgroundColor = 'crimson';
    gameOver.style.color = 'white';
    gameOver.style.left = '7em';
    gameOver.textContent = "Game Over: Collision Detected";
    let tryAgain = document.createElement('button');
    tryAgain.textContent = "Try Again";
    document.querySelector('.play-screen').appendChild(gameOver);
    gameOver.appendChild(tryAgain);
    tryAgain.addEventListener('click', ( )=> {
        reset();
    });
}

function gameWon() {
    const test = (player.y + player.height > mothership.y &&
        player.y < mothership.y + mothership.height &&
        player.x + player.width > mothership.x &&
        player.x < mothership.x + mothership.width);
        if (test == true) {
            let winner = document.createElement('div');
            winner.style.position = 'absolute';
            winner.style.height = '30vh';
            winner.style.width = '30vw';
            winner.style.top = '20em';
            winner.style.backgroundColor = 'white';
            winner.style.color = 'black';
            winner.style.left = '7em';
            winner.textContent = "Congratulations! You made it to the Mothership!";
            let end = document.createElement('button');
            end.textContent = "End";
            document.querySelector('.play-screen').appendChild(winner);
            winner.appendChild(end);
            end.addEventListener('click', ( )=> {
                reset();
            });
        }
}

// 
function reset () {
    window.location.reload();
        // this reloaads the entire window which will reset the game loop
}

// FUNCTION THAT CONTROLS THE LIFE CYCLE OF A GAME [ FROM PLAY TO GAME OVER ]

function gameLoop() {
    clearCanvas();
    renderAsteroids();
        // this takes each element inside of the populated asteroidsArray and renders them to the page
    player.render();
    mothership.render();
  }


// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME

document.addEventListener("DOMContentLoaded", function () {
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30);
    mothership = new spaceship(180, 0, 'limegreen', 'black', 2, 150, 10);
    document.addEventListener("keydown", detectMovement);
    generateAsteroids();
        // this fills the asteroidsArray with asteroids and sets the elements to spaceObjects
    runGame = setInterval(gameLoop, 60);
    
  });