const key = {
  keyDown: {},
  keyValue: {
    37: "left",
    39: "right",
    90: "attack",
  },
};

const gameProps = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};

const renderGame = () => {
  hero.keyMotion();
  window.requestAnimationFrame(renderGame);
};

const windowEvent = () => {
  window.addEventListener("keydown", (event) => {
    key.keyDown[key.keyValue[event.which]] = true;
  });
  window.addEventListener("keyup", (event) => {
    key.keyDown[key.keyValue[event.which]] = false;
  });
};

const loadImage = () => {
  const preLoadImageSources = [
    "../images/ninja_attack.png",
    "../images/ninja_run.png",
  ];
  preLoadImageSources.forEach((source) => {
    const image = new Image();
    image.src = source;
  });
};

let hero;
const init = () => {
  hero = new Hero(".hero");
  loadImage();
  windowEvent();
  renderGame();
};

window.onload = () => {
  init();
};
