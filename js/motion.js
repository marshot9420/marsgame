class Hero {
  constructor(element) {
    this.element = document.querySelector(element);
    this.moveX = 0;
    this.speed = 16;
  }

  keyMotion() {
    if (key.keyDown["left"]) {
      this.element.classList.add("run");
      this.element.classList.add("flip");

      this.moveX = this.moveX - this.speed;
    } else if (key.keyDown["right"]) {
      this.element.classList.add("run");
      this.element.classList.remove("flip");

      this.moveX = this.moveX + this.speed;
    }

    if (key.keyDown["attack"]) {
      this.element.classList.add("attack");
      new Bullet();
    }

    if (!key.keyDown["left"] && !key.keyDown["right"]) {
      this.element.classList.remove("run");
    }

    if (!key.keyDown["attack"]) {
      this.element.classList.remove("attack");
    }

    this.element.parentNode.style.transform = `translateX(${this.moveX}px)`;
  }

  position() {
    return {
      left: this.element.getBoundingClientRect().left,
      right: this.element.getBoundingClientRect().right,
      top: gameProps.screenHeight - this.element.getBoundingClientRect().top,
      bottom:
        gameProps.screenHeight -
        this.element.getBoundingClientRect().top -
        this.element.getBoundingClientRect().height,
    };
  }

  heroSize() {
    return {
      width: this.element.offsetWidth,
      height: this.element.offsetHeight,
    };
  }
}

class Bullet {
  constructor() {
    this.parentNode = document.querySelector(".game");
    this.element = document.createElement("div");
    this.element.className = "bullet";
    this.heroPositionX = 0;
    this.heroPositionY = 0;
    this.init();
  }
  init() {
    this.heroPositionX = hero.position().left + hero.heroSize().width / 2;
    this.heroPositionY = hero.position().bottom - hero.heroSize().height / 2;

    this.element.style.transform = `translate(${this.heroPositionX}px, ${this.heroPositionY}px)`;
    this.parentNode.appendChild(this.element);
  }
}
