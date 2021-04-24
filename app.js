// GLOBAL VARIABLES

const game = document.getElementById("game");
const ctx = game.getContext("2d");

let player;

// ESTABLISH HEIGHT AND WIDTH OF GAME SCREEN
game.setAttribute('width', '800');
game.setAttribute('height', '800');




// FACTORY FUNCTION TO HELP BUILD ELEMENTS
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

// WAITS FOR ALL CONTENTS OF PAGE TO LOAD BEFORE RENDERING GAME
document.addEventListener("DOMContentLoaded", function() {
    player = new spaceObject(400, 700, "aquamarine", "hotpink", 2, 50, 50);
    // console.log(player);
    player.render();

});

    


// SANDBOX CODE FOR KEYBOARD INTERACTION

//   function movementHandler(e){
//        if key press matches 'W, S A or D" move character up,down, left or right
//        if(someCondition){
//            hero.y += 10
//        } else if (some condition){
//        }else if (some condition){
//        }else if(some condition){
//        }
//        key event codes - here https://keycode.info/
//   }
