var LivingCreature = require("./class.livingcreature.js");
var random = require("./random.js");
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.energy = 20;
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
        return super.yntrelVandak(character)
    }
    sharjvel() {
        var newCell = random(this.yntrelVandak(0));
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x
            this.y = y
        }
    }
    utel() {
        this.stanalNorKordinatner()
        var newCell = random(this.yntrelVandak(1)) || random(this.yntrelVandak(6));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 1) {
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 2;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy > 20) {
                    this.energy = 10;
                }
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        KervacXot++
                        break;
                    }
                }
                this.bazmacum();
            } else {
                this.mernel()
            }
        }
        else {
            this.energy--;
            this.sharjvel();
            if (this.energy <= 1) {
                this.mernel();
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
            this.multiply += 2;
        } else if (this.exanak == 'summer') {
            this.multiply += 2.4;
        } else if (this.exanak == "autumn") {
            this.multiply += 1.5;
        } else if (this.exanak == "winter") {
            this.multiply += 1.2;
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
        var newCellmult = random(this.yntrelVandak(2)); 
        for (var i in grassEaterArr) {
            if (newCellmult && newCellmult[0] == grassEaterArr[i].x && newCellmult[1] == grassEaterArr[i].y) {
                var zuygiIndex = i;
            }
        }
        var newCell = random(this.yntrelVandak(0,1));
        if (zuygiIndex && newCell && newCellmult && grassEaterArr[zuygiIndex].ser == this.zuyg) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            grassEaterArr.push(new Xotaker(newX, newY, 2));
            this.multiply = 0;
        }
    }
    mernel() {
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}