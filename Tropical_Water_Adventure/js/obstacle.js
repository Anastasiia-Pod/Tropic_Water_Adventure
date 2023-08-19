class Obstacle {
  constructor(gameScreen, imagePath, width, height) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 650 + 70);
    this.top = 0;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");

    this.element.src = imagePath;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 2;
    this.updatePosition();
  }
}

class SharkObstacle extends Obstacle {
  constructor(gameScreen) {
    super(gameScreen, "./Images/shark.png", 200, 200);
  }
}

class SeagullObstacle extends Obstacle {
  constructor(gameScreen) {
    super(gameScreen, "./Images/seagull.png", 220, 220);
  }
}

class CircleObstacle extends Obstacle {
  constructor(gameScreen) {
    super(gameScreen, "./Images/sircle.png", 180, 180);
  }
}
