var LivingCreature = require("./class.livingcreature.js")
var random = require("./random.js")
module.exports = class Xot extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.exanakner = ['winter', 'spring', 'summer', 'autumn'];
        this.exanak = 'spring'
        this.ex = 0
        this.multiplyExanak = 0;
    }
    yntrelVandak(character) {
        return super.yntrelVandak(character);
    }
    stanalExanak() {
        this.multiplyExanak++;
        if (this.multiplyExanak >= 18) {
            this.exanak = this.exanakner[this.ex];
            this.ex++;
            if (this.ex >= 4) {
                this.ex = 0;
            }
            this.multiplyExanak = 0;
        }
        if (this.exanak == "spring") {
            this.multiply += 1.7;
        } else if (this.exanak == 'summer') {
            this.multiply += 2.2;
        } else if (this.exanak == "autumn") {
            this.multiply += 1.5;
        } else if (this.exanak == "winter") {
            this.multiply += 1;
        }
    }
    bazmacum() {
        this.stanalExanak();
        var newCell = random(this.yntrelVandak(0));
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            this.multiply = 0;
            grassArr.push(new Xot(newX, newY, 1));
            XoteriQanak++
        }
    }
}