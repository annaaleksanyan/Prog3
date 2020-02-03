var LivingCreature = require("./class.livingcreature.js")
module.exports = class Xot extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
    }
    yntrelVandak(character) {
        return super.yntrelVandak(character);
    }
    bazmacum() {
        this.multiply += 1.8;
        var yntrelvandakner = this.yntrelVandak(0);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            this.multiply = 0;
            grassArr.push(new Xot(newX, newY, 1));
        }
    }
}