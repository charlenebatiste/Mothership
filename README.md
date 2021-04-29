# General Info

This game was created to help develop my Javascript skills while practicing using two elements new to me: CSS Frameworks & HTML5 Canvas.

## Table of contents

- [Title of Game](#title-of-game)
- [How to Play](how-to-play)
- [Start Up Screen](start-up-screen)
- [How It Works ](how-it-works)
- [Setup](#setup)
- [Technologies](#technologies)
- [Initial Wireframes](#initial-wireframes)
- [Future Considerations](#future-considerations)
- [Scratch Work](#scratch-work)

## Title of Game

🛸 MOTHERSHIP🛸

## How to Play

Guide your spaceship through the asteroid field to get to the mothership. Avoid flying into an asteroid or risk being blown out of the sky.

### To move your spaceship

- Press the _spacebar_ to go up
- Press the _right arrow key_ to go right
- Press the _left arrow key_ to go left

## Start Up Screen:

![Start Up Screen](/assets/start-screen.png)

## How it Works

1. Once the canvas dimensons are set, and images are loaded to the page, the Mothership and Player ship are set equal to their respective functions and rendered.
2. The process to render the asteroids starts with filling an empty asteroidArray with asteroids on page load and then setting them equal to another factory function called spaceObjects. Since I wanted all the asteroids to have the same general look, a majority of the values were hard coded inside the asteroid Image function while an equation was writtien into the spaceObjects function to generate a random x and y location for each individual asteroid.

```javascript
function generateAsteroids() {
  let asteroid;
  for (let i = 0; i < 20; i++) {
    asteroid = new spaceObject();
    asteroidArray.push(asteroid);
  }
}

function renderAsteroids() {
  asteroidArray.forEach((e) => {
    e.render();
  });
}

function spaceObject() {
  this.x = Math.floor(Math.random() * (game.width - 35));
  this.y = Math.floor(Math.random() * (game.height - 100));
  this.width = 45;
  this.height = 45;
  this.impact = false;
  this.render = function () {
    renderImage(this.x, this.y);
  };
}
```

_Extra dimensions were subtracted from the x and y axis to avoid asteroids rendering partially off of the canvas or over the player ship, which would immediately end the game._

3. Keybindings were set to move the player ship and collision functions were built to end the game. Depending on what the player ship impacted with, the player would either win or lose.

4. A score display was built into the detectMovement function so the player would gain 50pts to their score for every movement towards the 0 x axis.

5. Two functions where written that would either end the game and send the player back to the start screen or allow the player to retry the map they were just playing by resetting the score and rerendering the player back to the start position.

## Setup

1. _`Fork`_ and _`Clone`_ this respository to your local machine
2. Open `index.html` in your browser to play or
3. Open the directory in your text editor of choice to view or edit the code

Or

👽 [follow this link to play the game](https://charlenebatiste.github.io/Mothership/)

## Technologies

This project was created with:

- Bootstrap
- Canvas

# PROCESS WORK

## Initial Wireframes:

Initial Wireframe for Start Screen:

![Start Screen Wireframe](/assets/start-screen-wireframe.png)

Initial Wireframe for Play Screen:

![Play Screen Wireframe](/assets/play-screen-wireframe.png)

## FUTURE CONSIDERATIONS

1. Adjust impact zone around asteroids.
2. Add animations to the asteroids so they move across the screen rather than remaining stationary.
3. Develop a slow feature on the thrust key so the ship slows after the player releases the spacebar rather than stopping immediately.
4. Develop a blaster feature onto the players ship to shoot elements out of the sky for extra points.
5. Construct an animation so that the player ship would explode on impact with any asteroid.

## Scratch Work:

Loops to generate random x and y axis of 20 asteroids.

```javascript
function generateAsteroidX() {
  for (var i = 0; i < 20; i++) {
    var count = 0;
    var loopEnd = Math.floor(Math.random() * (game.width - 35));
    for (var j = 0; j < loopEnd; j++) {
      count++;
    }
    console.log(count);
  }
}
function generateAsteroidY() {
  for (var i = 0; i < 20; i++) {
    var count = 0;
    var loopEnd = Math.floor(Math.random() * (game.height - 35));
    for (var j = 0; j < loopEnd; j++) {
      count++;
    }
    console.log(count);
  }
}
```
