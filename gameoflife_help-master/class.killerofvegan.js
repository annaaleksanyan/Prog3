var LivingCreature = require("./class.livingcreature.js")
var random = require("./random.js")
module.exports = class Mah extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
    }
    stanalNorKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        return super. yntrelVandak(character);
    }
    sharjvel() {
        this.stanalNorKordinatner()
        var newCell = random(this.yntrelVandak(0)) || random(this.yntrelVandak(1));
        if (newCell) {            
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            
        }
    }
}