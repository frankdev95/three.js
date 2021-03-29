export default class Context {
    constructor(scene, camera, renderer, dimensions) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.renderer.setSize(dimensions.width, dimensions.height);
        document.body.appendChild(this.renderer.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    setScene(scene) {
        this.scene = scene;
    }

    getScene() {
        return this.scene;
    }

    setCamera(camera) {
        this.camera = camera;
    }

    getCamera() {
        return this.camera;
    }

    setRendered(renderer) {
        this.renderer = renderer;
    }

    getRenderer() {
        return this.renderer;
    }
}
