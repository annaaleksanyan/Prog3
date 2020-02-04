var socket = io();
var matrix = [];
// let n = 13;
// let m = 18;
var side = 35;

function setup() {
    frameRate(30);
    background(255, 228, 225);
    createCanvas(35* side, side * 20);
    var cnv = createCanvas(18 * side, 13 * side);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.parent('sketch-holder');
}

var grassArr = [];
var grassEaterArr = [];
var amenakerArr = [];
var gishaticharr = [];
var shunarr = [];
var maharr = [];

socket.on("matrix", drawMatrix);

function drawMatrix(matrix) {    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(72, 61, 139);
            } else if (matrix[y][x] == 2) {
                fill(220, 20, 60);
            } else if (matrix[y][x] == 3) {
                fill(124, 252, 0)
            } else if (matrix[y][x] == 0) {
                fill(255, 228, 225);
            } else if (matrix[y][x] == 4) {
                fill("yellow");
            } else if (matrix[y][x] == 5) {
                fill(30, 144, 255);
            } else if (matrix[y][x] == 6) {
                fill("black");
            } else {
                fill("#acacac")
            }
            strokeWeight(2);
            rect(x * side, y * side, side, side);
        }
    }
}

