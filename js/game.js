const key = {
  keyDown: {},
  keyValue: {
    37: "left",
    39: "right",
    90: "attack",
  },
};

const windowEvent = () => {
  window.addEventListener("keydown", (event) => {
    key.keyDown[key.keyValue[event.which]] = true;
    hero.keyMotion();
  });
  window.addEventListener("keyup", (event) => {
    key.keyDown[key.keyValue[event.which]] = false;
    hero.keyMotion();
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
};

window.onload = () => {
  init();
};
