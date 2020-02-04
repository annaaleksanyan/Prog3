var LivingCreature = require("./class.livingcreature.js")
module.exports = class Amenaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
    }
    stanalNoraguynKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        return super.yntrelVandak(character);
    }
    sharjvel() {
        var yntrelvandakner = this.yntrelVandak(0);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)];
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x
            this.y = y
        }
    }
    utel() {
        this.stanalNoraguynKordinatner()
        var yntrelvandakner = this.yntrelVandak(1);
        var yntrelvandakner2 = this.yntrelVandak(2);
        var yntrelvandakner3 = this.yntrelVandak(4);
        var yntrelvandakner4 = this.yntrelVandak(5);
        var yntrelvandakner5 = this.yntrelVandak(6);
        var newCell = yntrelvandakner[Math.floor(Math.random()*yntrelvandakner.length)] || yntrelvandakner2[Math.floor(Math.random()*yntrelvandakner2.length)] || yntrelvandakner3[Math.floor(Math.random()*yntrelvandakner3.length)] || yntrelvandakner4[Math.floor(Math.random()*yntrelvandakner4.length)] || yntrelvandakner5[Math.floor(Math.random()*yntrelvandakner5.length)];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX
            this.y = newY
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY][newX] == 4) {
                for (var i in gishaticharr) {
                    if (newX == gishaticharr[i].x && newY == gishaticharr[i].y) {
                        gishaticharr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY][newX] == 5) {
                for (var i in shunarr) {
                    if (newX == shunarr[i].x && newY == shunarr[i].y) {
                        shunarr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY][newX] == 6) {
                for (var i in maharr) {
                    if (newX == maharr[i].x && newY == maharr[i].y) {
                        maharr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
}