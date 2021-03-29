export default class KeyListener {
    constructor() {
        this.keys = {};
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keydown', this.keyUp);
    }

    keyDown(e) {
        this.keys[e.code] = true;
    }

    keyUp(e) {
        this.keys[e.code] = false;
    }

    getKeys() {
        return this.keys;
    }
}
