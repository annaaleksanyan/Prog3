var LivingCreature = require("./class.livingcreature.js")
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
        var yntrelvandakner = this.yntrelVandak(1);
        var yntrelvandakner2 = this.yntrelVandak(0);
        var newCell = yntrelvandakner[  Math.floor(Math.random()*yntrelvandakner.length)] || yntrelvandakner2[   Math.floor(Math.random()*yntrelvandakner2.length)   ];
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