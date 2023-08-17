class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = null;
      this.height = 650;
      this.width = 900;
      this.obstacles = [];
      this.score = 0;
      this.lives = 1;
      this.gameIsOver = false;
      this.player = new Player(
        this.gameScreen,
        300,
        600,
        200,
        250,
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
  
      // Start the game loop
      this.gameLoop();
    }
  
    gameLoop() {
      console.log("in the game loop");
  
      // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
        this.player.move();
    }
}  