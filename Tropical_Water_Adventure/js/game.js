class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.gameWinScreen = document.getElementById("win-game-end")
      this.player = null;
      this.height = 750;
      this.width = 1000;
      this.obstacles = [];
      this.score = 0;
      this.lives = 1;
      this.gameIsOver = false;
      this.player = new Player(
        this.gameScreen,
        200,
        500,
        220,
        300,
        "./Images/Boy.png"
      );
    } 
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      //
      this.gameLoop();
    }
  
    gameLoop() {
      console.log("in the game loop");
  
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      this.player.move();
  
      // Check for collision and if an obstacle is still on the screen
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        // If the player's windsurf board collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Reduce player's lives by 1
          this.lives--;
          // Update the counter variable to account for the removed obstacle
          i--;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.score++;

          if(this.score === 5){
            this.winGame();
          }
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }
  
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability
      // when there is no other obstacles on the screen
      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        // some logic to randomly pick shark or seagul 

       const selector =  Math.random()

       let objectType

       if(selector < 0.35){
        objectType = new SharkObstacle(this.gameScreen)
       } else if (selector > 0.35 && selector < 0.70){
        objectType = new SeagullObstacle(this.gameScreen)
       } else {
       objectType = new CircleObstacle(this.gameScreen)
      }
        this.obstacles.push(objectType);
      }
    }
  
    // Method responsible for ending the game
    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
      });
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }

    winGame(){
      this.player.element.remove();
      this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
      });
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show win end game screen
      this.gameWinScreen.style.display = "block";
    }
    }
  
