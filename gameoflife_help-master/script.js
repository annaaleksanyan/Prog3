// datarkutyun = 0
//xot = 1
//xotaker = 2
//amenaker = 3
//gishatich = 4
//shun = 5
//mah = 6

var song;
var socket = io();
var matrix = [];
var side = 35;
var exanakner = ['winter', 'spring', 'summer', 'autumn'];
var exanak = 'spring'
var ex = 0
var multiplyExanak = 0;

function setup() {
    song = loadSound("song.mp3")
    strokeWeight(2);
    var cnv = createCanvas(18 * side, 13 * side);
    cnv.parent('sketch-holder');
}
var button3 = document.getElementById("button3");
function bodyClick3(evt) {
    song.stop();
}
button3.onclick = bodyClick3;

var button2 = document.getElementById("button2");
function bodyClick2(evt) {
    song.play();
}
button2.onclick = bodyClick2;

socket.on("matrix", drawMatrix);
function drawMatrix(matrix) {
    button.onclick = bodyClick;
    multiplyExanak++;
    if (multiplyExanak >= 18) {
        exanak = exanakner[ex];
        ex++;
        if (ex >= 4) {
            ex = 0;
        }
        multiplyExanak = 0;
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && exanak == 'spring') {
                fill(0, 128, 0); //lime
            } else if (matrix[y][x] == 1 && exanak == 'summer') {
                fill(0, 255, 0); //forestgreen
            } else if (matrix[y][x] == 1 && exanak == 'winter') {
                fill(60, 179, 113); //lightgreen
            } else if (matrix[y][x] == 1 && exanak == 'autumn') {
                fill(255, 69, 0); //orangered
            } else if (matrix[y][x] == 2) {
                fill(220, 20, 60); //crimson
            } else if (matrix[y][x] == 3) {
                fill(255, 255, 0) //yello
            } else if (matrix[y][x] == 0) {
                fill(255, 228, 225); //vanila white
            } else if (matrix[y][x] == 4) {
                fill(125, 80, 139); //purple
            } else if (matrix[y][x] == 5) {
                fill(0, 191, 255); //blue 
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

