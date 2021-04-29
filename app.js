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

let newScore = parseInt(score.innerText);

function detectMovement(e){
    if(e.which === 32){
        player.y -= player.speed
        //  player ship will move 10 up
        newScore+=50
        score.innerText = newScore
    } else if (e.which === 37){
        player.x -= player.speed
        //  player ship will move 10 left
    }else if (e.which === 39){
        player.x += player.speed
        //  player ship will move 10 right
    }
    detectImpact();
    gameWon();
}

// gui update

// function updateScoreDisplay(bool){
//     if(player.y === -10){
//       newScore+=100
//       score.innerText = newScore
//     } else {
//         newScore+=0;
//     }
//   }

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
    const test = (player.y + player.height > mothership.y &&
        player.y < mothership.y + mothership.height &&
        player.x + player.width > mothership.x &&
        player.x < mothership.x + mothership.width);
        if (test == true) {
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
    mothership.render();
  }


//   sandbox
// var img = new Image();   // Create new img element
// function drawImage() {
//     ctx.drawImage(img, 0, 0, 35, 35);
//   };
// img.src = './assets/alien-ship.png'; // Set source path

// var imageObj = new Image();

//       imageObj.onload = function() {
//         ctx.drawImage(imageObj, 150, 50);
//       };
//       imageObj.src = 'https://2.bp.blogspot.com/-zG9DW_y7QPY/V18N7z7JfHI/AAAAAAAABhw/Ucgnsq36e1U4jzSDxlbpfzTl1f-KYi4YQCK4B/s1600/fabicon-big.jpg';
  

// // WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME

document.addEventListener("DOMContentLoaded", function () {
    player = new spaceship(250, 550, "aquamarine", "hotpink", 2, 30, 30, 10);
    mothership = new spaceship(180, 0, 'limegreen', 'black', 2, 150, 10, 0);
    document.addEventListener("keydown", detectMovement);
    generateAsteroids();
        // this fills the asteroidsArray with asteroids and sets the elements to spaceObjects
    runGame = setInterval(gameLoop, 60);
    
  });