var LivingCreature = require("./class.livingcreature.js")
var random = require("./random.js")
module.exports = class Shun extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
        this.directions = [];
    }
    stanalNorKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        this.stanalNorKordinatner();
        return super. yntrelVandak(character);
    }
    sharjvel() {
        var newCell = random(this.yntrelVandak(0)) || random(this.yntrelVandak(1));
        this.energy++
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x
            this.y = y
        }
        if (this.energy > 15) {
            this.energy = 5
        }
    }
}