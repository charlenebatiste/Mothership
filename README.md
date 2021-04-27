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

_Images of the start up screen go here_

## How it Works

How the game works will go here
Code snippets go here

## Setup

1. _`Fork`_ and _`Clone`_ this respository to your local machine
2. Open `index.html` in your browser to play or
3. Open the directory in your text editor of choice to view or edit the code

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

1. I would like to add some sort of animations to the asteroids so they move across the screen rather than remaining stationary.
2. I would like to have a slow feature on the thrust key so the ship slows after the player releases the spacebar rather than stopping immediately.
3. I would like to build a blaster feature into the players ship to shoot elements out of the sky for extra points.

## Scratch Work:

Loops to generate random x and y axis of 20 asteroids

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
