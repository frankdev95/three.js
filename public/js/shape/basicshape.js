class BasicShape {
    constructor(geometry, material) {
        this.geometry = geometry;
        this.material = material;
        this.shape = new THREE.Mesh(this.geometry, this.material);
    }

    getShape() {
        return this.shape;
    }
}
