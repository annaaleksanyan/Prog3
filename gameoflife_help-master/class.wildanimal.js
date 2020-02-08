var LivingCreature = require("./class.livingcreature.js")
var random = require("./random.js")
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
        this.multiply = 0;
        this.directions = [];
        this.exanakner = ['winter', 'spring', 'summer', 'autumn'];
        this.exanak = 'spring'
        this.ex = 0
        this.multiplyExanak = 0;
        this.ser = Math.floor(random(0, 2));
        this.zuyg;
    }
    stanalNorKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(character);
    }
    sharjvel() {
        var newCell = random(this.yntrelVandak(0)) || random(this.yntrelVandak(1));
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x
            this.y = y
        }
    }
    utel() {
        this.stanalNorKordinatner()
        var newCell = random(this.yntrelVandak(2));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;
            this.x = newX
            this.y = newY
            this.energy++
            if (this.energy > 25) {
                this.energy = 10;
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    // GishatichneriKoxmicSpanvacXotakerner++
                    break;
                }
            }
            this.bazmacum();
        } else {
            this.sharjvel()
            this.energy--
            if (this.energy < 1) {
                this.mernel()
            }
        }
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
            this.multiply += 1.9;
        } else if (this.exanak == 'summer') {
            this.multiply += 1.8;
        } else if (this.exanak == "autumn") {
            this.multiply += 1.7;
        } else if (this.exanak == "winter") {
            this.multiply += 1.7;
        }
    }
    gtnelZuyg() {
        if (this.ser == 1) {
            this.zuyg = 0;
        } else {
            this.zuyg = 1;
        }
    }
    bazmacum() {
        this.gtnelZuyg();
        this.stanalExanak();
        var newCellmult = random(this.yntrelVandak(4));
        for (var i in gishaticharr) {
            if (newCellmult && newCellmult[0] == gishaticharr[i].x && newCellmult[1] == gishaticharr[i].y) {
                var zuygiIndex = i;
            }
        }
        var newCell = random(this.yntrelVandak(0,1));
        if (zuygiIndex && newCell && newCellmult && gishaticharr[zuygiIndex].ser == this.zuyg) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            this.multiply = 0;
            gishaticharr.push(new Gishatich(newX, newY, 4));
        }
    }
    mernel() {
        for (var i in gishaticharr) {
            if (this.x == gishaticharr[i].x && this.y == gishaticharr[i].y) {
                gishaticharr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}