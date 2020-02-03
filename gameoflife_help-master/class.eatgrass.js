var LivingCreature = require("./class.livingcreature.js")
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.energy = 20;
    }
    stanalNorKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        return super.yntrelVandak(character)
    }
    sharjvel() {
        var yntrelvandakner = this.yntrelVandak(0);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
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
        var yntrelvandakner = this.yntrelVandak(1);
        var yntrelvandakner2 = this.yntrelVandak(6);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)] || yntrelvandakner2[Math.floor(Math.random()*yntrelvandakner2.length)];
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
    bazmacum() {
        this.multiply += 1.5;
        var yntrelvandakner = this.yntrelVandak(0);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
        if (newCell && this.multiply >= 20) {
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