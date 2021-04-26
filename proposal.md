# Proposal of Game

The intent is to build a game in which a stranded alien ship returns to the Mothership that is waiting outside the planet's atmosphere. There will be asteroids between the player and the Mothership and the player needs to avoid hitting them or be blown up.

# Game Creation Plan

- build a canvas that renders the player ship and x number of asteroids (at various locations) to the canvas.
- move player ship through the sky using keybindings
  The game will use key bindings to move the player:

*spacebar to thrust `function moveUp()`
*left arrow keys to go right `function moveRight()`
*right arrow key to to right `function moveLeft()`
*up arrow key to shoot `function shoot()`

- detectImpact() that will recognize if ship goes into the body of any asteroid elements

- space traveled between player ship start point and the end of the game will count as the score.

~~

I initially wanted to create this game using mainly css animations but because I wanted the player to be able to control the flight of the spaceship I will use canvas.

I would still like to try using animations for affects.

Bootstrap for basic styling.
