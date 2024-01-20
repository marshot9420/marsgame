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
}
