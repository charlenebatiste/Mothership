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
// let asteroid;
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
    let width = 35;
    let height = 35;
    this.render = function () {
        ctx.fillStyle = color;
        ctx.strokeStyle = lineColor;
        ctx.strokeWidth = lineWeight;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
      };
}

// sets new asteroids equal to spaceObject // very repetitive // needs a short way to build this
// asteroid = new spaceObject();
// asteroid2 = new spaceObject();
// asteroid3 = new spaceObject();
// asteroid4 = new spaceObject();
// asteroid5 = new spaceObject();
// asteroid6 = new spaceObject();
// asteroid7 = new spaceObject();
// asteroid8 = new spaceObject();
// asteroid9 = new spaceObject();
// asteroid10 = new spaceObject();
// asteroid11 = new spaceObject();
// asteroid12 = new spaceObject();
// asteroid13 = new spaceObject();
// asteroid14 = new spaceObject();
// asteroid15 = new spaceObject();

function generateAsteroids () {
    for (let i = 0; i < 15; i++) {
    // 15 is the set number of asteroids to build
        asteroidArray.push('asteroid')
    }
    // console.log(asteroidArray)
}



// need to build a loop that will set x number of asteroids equal to a new spaceObject element and then render each
// of those x asteroids at the end of the function. that will be placed into the game loop after clearCanvas() and before
// player.render();



function generateSpaceObjects () {
    generateAsteroids();
    for (let i = 0; i <= asteroidArray.length; i++) {
        console.log(asteroidArray);
        asteroidArray[i] = new spaceObject;
    }
}



// // CODE TO DETECT KEYBINDINGS

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

function gameLoop() {
    clearCanvas();
    // generateSpaceObjects();
    // asteroid.render();
    // asteroid2.render();
    // asteroid3.render();
    // asteroid4.render();
    // asteroid5.render();
    // asteroid6.render();
    // asteroid7.render();
    // asteroid8.render();
    // asteroid9.render();
    // asteroid10.render();
    // asteroid11.render();
    // asteroid12.render();
    // asteroid13.render();
    // asteroid14.render();
    // asteroid15.render(); 
    player.render();
  }



// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME
document.addEventListener("DOMContentLoaded", function () {
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30);
    document.addEventListener("keydown", detectMovement);
    runGame = setInterval(gameLoop, 60);
  });

  