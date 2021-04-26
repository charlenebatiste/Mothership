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
let asteroid;

// // ESTABLISH HEIGHT AND WIDTH OF GAME SCREEN

game.setAttribute('width', '500');
game.setAttribute('height', '600');

// sets resolves those values to scale with the browser 


// // FACTORY FUNCTION TO HELP BUILD ELEMENTS
function spaceObject(x, y, color, lineColor, lineWeight, width, height) {
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

// location of asteroids // very repetitive // needs a short way to build this
asteroid = new spaceObject(300, 200, 'yellow', 'brown', 2, 35, 35);
asteroid2 = new spaceObject(370, 140, 'yellow', 'brown', 2, 35, 35);
asteroid3 = new spaceObject(200, 285, 'yellow', 'brown', 2, 35, 35);
asteroid4 = new spaceObject(120, 420, 'yellow', 'brown', 2, 35, 35);
asteroid5 = new spaceObject(385, 350, 'yellow', 'brown', 2, 35, 35);
asteroid6 = new spaceObject(80, 200, 'yellow', 'brown', 2, 35, 35);
asteroid7 = new spaceObject(180, 120, 'yellow', 'brown', 2, 35, 35);
asteroid8 = new spaceObject(100, 360, 'yellow', 'brown', 2, 35, 35);


// // CODE TO DETECT KEYBINDINGS

   function detectMovement(e){
        if(e.which === 32){
            console.log(player)
            player.y -= 10
            console.log('you are pressing space')
            //  player ship will move 10 up
        } else if (e.which === 37){
            player.x -= 10
            console.log('you are pressing the left arrow')
            //  player ship will move 10 left
        }else if (e.which === 39){
            player.x += 10
            console.log('you are pressing the right arrow')
            //  player ship will move 10 right
        }
   }

// //    ?need to link key binding to player?

// // CODE TO MOVE PLAYER SHIP 

function gameLoop() {
    // clear function
    asteroid.render();
    asteroid2.render();
    asteroid3.render();
    asteroid4.render();
    asteroid5.render();
    asteroid6.render();
    asteroid7.render();
    asteroid8.render();
    player.render();
  }



// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME
document.addEventListener("DOMContentLoaded", function () {
    player = new spaceObject(250, 525, "aquamarine", "hotpink", 2, 30, 30);
    document.addEventListener("keydown", detectMovement);
    runGame = setInterval(gameLoop, 60);
  });

  