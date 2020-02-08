var LivingCreature = require("./class.livingcreature.js")
var random = require("./random.js")
module.exports = class Amenaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
    }
    stanalNoraguynKordinatner() {
        return super.stanalNoraguynKordinatner();
    }
    yntrelVandak(character) {
        this.stanalNoraguynKordinatner();
        return super.yntrelVandak(character);
    }
    sharjvel() {
        var newCell = random(this.yntrelVandak(0));
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
        var newCell = random(this.yntrelVandak(1)) || random(this.yntrelVandak(2)) || random(this.yntrelVandak(4)) || random(this.yntrelVandak(5)) || random(this.yntrelVandak(6));
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
                        KervacXot++
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