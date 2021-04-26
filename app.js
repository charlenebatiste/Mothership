// ~~~ START SCRIPT ~~~

// button variables
const instructions = document.getElementById('instructions');
const start = document.getElementById('start');

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

// open instructions modal


// ~~~ GAME SCRIPT ~~~

// GLOBAL VARIABLES

const game = document.getElementById("game");
const ctx = game.getContext("2d");

let player;

// ESTABLISH HEIGHT AND WIDTH OF GAME SCREEN

game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
// takes the height and width properties of the canvas from stylesheet,
// and sets resolves those values to scale with the browser 


// FACTORY FUNCTION TO HELP BUILD ELEMENTS
function spaceObject(x, y, color, lineColor, lineWeight, width, height, speed) {
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

// WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME
window.addEventListener("DOMContentLoaded", initializeGame);


function initializeGame() {
    player = new spaceObject(450, 300, "aquamarine", "hotpink", 2, 50, 50, 10);
    player.render();
    document.addEventListener("keydown", detectMovement);
    
};

    


// CODE TO DETECT KEYBINDINGS

   function detectMovement(e){
        if(e.which === 32){
            player.y -= speed
            console.log('you are pressing space')
            //  player ship will move 10 up
        } else if (e.which === 37){
            player.x -= player.speed
            console.log('you are pressing the left arrow')
            //  player ship will move 10 left
        }else if (e.which === 39){
            player.x += player.speed
            console.log('you are pressing the right arrow')
            //  player ship will move 10 right
        }
   }

//    ?need to link key binding to player?

// CODE TO MOVE PLAYER SHIP 

function moveShip() {
    
}


