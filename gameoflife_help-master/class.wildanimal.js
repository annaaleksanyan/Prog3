var LivingCreature = require("./class.livingcreature.js")
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
        this.multiply = 0;
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
        var yntrelvandakner = this.yntrelVandak(2);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
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
    bazmacum() {
        this.multiply += 2;
        var yntrelvandakner = this.yntrelVandak(0);
        var norvandak = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
        if (this.multiply >= 8 && norvandak) {
            var x = norvandak[0];
            var y = norvandak[1];
            grassEaterArr.push(new Gishatich(x, y, 4))
            matrix[y][x] = 4;
            this.multiply = 0;
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