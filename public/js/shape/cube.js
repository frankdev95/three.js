
export class Cube {
    constructor(dimensions = {x: 1, y: 1, z: 1}, materialProperties = {color: 0x000000}) {
        this.geometry = new THREE.BoxGeometry(dimensions.x, dimensions.y, dimensions.z);
        this.materia = new THREE.MeshBasicMaterial()
    }


}
