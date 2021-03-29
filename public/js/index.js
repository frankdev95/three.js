import KeyListener from "./input/keylistener.js";
import Game from "./graphics/game.js";
import Context from "./graphics/context.js"

const aspectRatio = window.innerWidth / window.innerHeight;
const width = window.innerWidth, height = window.innerHeight;
const dimensions =  {width : width, height: height};

const context = new Context(new THREE.Scene(), new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000), new THREE.WebGLRenderer(), dimensions);
const game = new Game(context);
const keyListener = new KeyListener();

function gameLoop() {
    requestAnimationFrame(gameLoop);
    game.update();
    game.render();
}

gameLoop();
