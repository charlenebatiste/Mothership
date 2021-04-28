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
        // console.log('you are about to change screens')
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
    var x = Math.floor(Math.random() * (game.width - 35));
    var y = Math.floor(Math.random() * (game.height - 100));
    // set y axis to random location and then subtracts 50 from game.height to avoid aseroids rndering over the player
    let color = 'yellow';
    let lineColor = 'brown';
    let lineWeight = 2;
    let width = 38;
    let height = 38;
    this.hit = false;
    this.render = function () {
        ctx.fillStyle = color;
        ctx.strokeStyle = lineColor;
        ctx.strokeWidth = lineWeight;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
      };
}

// FUNCTION TO FILL ASTROIDARRAY WITH ASTEROIDS AND SETS EACH ASTEROID EQUAL TO SPACE OBJECT

function generateAsteroids () {
    let asteroid;
    for (let i = 0; i < 15; i++) {
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

// CODE TO DETECT KEYBINDINGS

function detectMovement(e){
    if(e.which === 32){
        player.y -= 10
        //  player ship will move 10 up
    } else if (e.which === 37){
        player.x -= 10
        //  player ship will move 10 left
    }else if (e.which === 39){
        player.x += 10
        //  player ship will move 10 right
    }
}

// COLLISION DETECTION


function detectImpact() {
    asteroidArray.forEach(e => {
        if (player.y + player.height > e.y &&
            player.y < e.y + e.height &&
            player.x + player.width > e.x &&
            player.x < e.x + e.width) {
        console.log('impact alert!!!!');
        } else {
            return console.log('clear skies, captain');
        }
    });
}
    //   above function only logs 'clear skies captian' ~~~ i dont think the equation for collision works for this case

// FUNCTION THAT CONTROLS THE LIFE CYCLE OF A GAME [ FROM PLAY TO GAME OVER ]

function gameLoop() {
    clearCanvas();
    renderAsteroids();
        // this takes each element inside of the populated asteroidsArray and renders them to the page
    player.render();
    // detectImpact();  
  }


// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME

document.addEventListener("DOMContentLoaded", function () {
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30);
    document.addEventListener("keydown", detectMovement);
    generateAsteroids();
        // this fills the asteroidsArray with asteroids and sets the elements to spaceObjects
    runGame = setInterval(gameLoop, 60);
    
  });

  