var LivingCreature = require("./class.livingcreature.js")
module.exports = class Shun extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [];
    }
    stanalNorKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        return super.yntrelVandak(character);
    }
    sharjvel() {
        var yntrelvandakner = this.yntrelVandak(0);
        var yntrelvandakner2 = this.yntrelVandak(1);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)] || yntrelvandakner2[Math.floor(Math.random()*yntrelvandakner2.length)];
        this.energy++
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        }
        if (this.energy > 15) {
            this.energy = 5
        }
    }
}