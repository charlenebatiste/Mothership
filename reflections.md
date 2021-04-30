# Monday

- [x] What did you achieve over the weekend?
- [x] What are your goals for today?
- [x] Do you have any blockers?

1. I built the canvas for my game, a factory function to put elements on the canvas and rendered my character. I also filled out many of the .md files, made an initial framework for the 'start' screen and built the start screen using Bootstrap (including a modal with the instructions).
2. Goals for today

- Build the toggle function to move between the 'start' screen and the game screen and another toggle button on the 'game' screen that moves back to the 'start' screen.
- Build wireframe for game screen.
- Render an asteroid to a random location on the canvas.
- develop the detectImpact() function
- Increase the amount of asteroids so 'x' number appear on the screen.

3. I struggled to render the player after building a factory function. I realized it was because I wasn't passing enough arguments into the parameters that factory function required so it was keeping the initial value of the player ship, which was nothing.

# Tuesday

- [x] What did you achieve yesterday?
- [x] What are your goals for today?
- [x] Do you have any blockers?

1. I rendered the player and several hard-coded asteroids to the screen. I also got an asteroid to render to the canvas at a random location. I got the buttons working from the start screen to the play screen and vice-versa, and I built the wireframe for the play screen.
2. Goals for today:

- get a function written that will randomize the location of a set number of asteroids to the canvas.
- build the detectImpact function.

3. I expect to struggle building the loop for the asteroid randomizer as that's something I haven't been strong in in this course so I will have to take some time to review that and make the return variables of that loop available to be rendered.

# Wednesday

- [x] What did you achieve yesterday?
- [x] What are your goals for today?
- [x] Do you have any blockers?

1. Yesterday I built an two asteroid functions and refactored the factory functioni for the spaceObject to create a more efficient way to assign and render the asteroids to the page in random locations. I also built a functioning scoreboard that changes the display during game play.
2. Today I will build and complete the detectImpact function.
3. I've realized I tend to make writting code harder than necessary and want to focus on keeping evreything simple.

# Thursday

- [x] What did you achieve yesterday?
- [x] What are your goals for today?
- [x] Do you have any blockers?

1. I repaired bad data in the spaceObject factory function and built the detectImpact function. On impact with a asteroid the console logs 'game over'. I also created a mothership object and on impact with the mothership, the console logs "you won". I built modals that are called when either of those functions are true that lets the player quit the game or restart.
2. Refactor my code so it's cleaner and less repetitive. Set a player speed so that on impact the speed changes to zero. Build a resetGameboard function that resets the player without reloading the page. Get images in place of the square for asteroids and the player spaceship. If there is time at the end of the day I would like to set an animation to the asteroids so they float across the screen at a speed of 2.
3. Im unsure how to build the resetGameboard function that does not reload the page without rewritting the pageload function.

# Friday

1. What HTML, CSS, and or JavaScript skills you learned while building your game?

- I learned how to build a game using Canvas and grid to style for the first time. I also used Bootstrap which was my first time implementing a framework on a project. This project helped me nail down for loops which was something I understood theoretically but was able to really be able to make on my own.

2. What's one topic you want to spend more practice on?

- I definitely want to spend more time working on working with APIs.
