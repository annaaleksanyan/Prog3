// datarkutyun = 0
//xot = 1
//xotaker = 2
//amenaker = 3
//gishatich = 4
//shun = 5
//mah = 6

//datarkutyun = spitakavun
//xot = manushakaguyn
//xotaker = vardaguyn
//amenaker = kanach
//gishatich = dexin
//shun = piruzaguyn
//mah = sev

//datarkutyun 0 = vochmiban chi anum|
//xot 1 = bazmanum e: datarkutyunnerum|
//xotaker 2 = sharjvum e: datarkutyunnerov| bazmanum e: datarkutyunnerum| utum e: xot ev mah| xot utelov: energian shatum e| mah utelov: mahanum e| haytnvum e: xotaker<=20| mahanum e: ete iran utum en kam ete inqy utum e mahy
//amenaker 3 = sharjvum e: datarkutyunnerov| chi bazmanum| utum e: xot,xotaker,gishatich ev mah| chi haytnvum| chi mahanum
//gishatich 4 = sharjvum e: datarkutyunnerov ev xoterov| bazmanum e: datarkutyunnerum| utume: xotaker| haytnvum e: ete ==0| mahanum e: ete utum e amenakery kam ete energy<1
//shun 5 = sharjvum e: datarkutyunnerov ev xoterov| chi bazmanum| chi utum| haytnvum e: ete shun<=2| mahanum e: ete utum e amenakery
//mah 6 = sharjvum e: datarkutyunnerov ev xoterov| chi bazmanum| chi utum| haytnvum e: ete mah<1| mahanum e: ete utum e amenakery

var socket = io();
var matrix = [];
let n = 13;
let m = 18;
var side = 35;

function setup() {
    frameRate(30);
    createCanvas(side, side);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
}

var grassArr = [];
var grassEaterArr = [];
var amenakerArr = [];
var gishaticharr = [];
var shunarr = [];
var maharr = [];

function drawMatrix(matrix) {
    background(255, 228, 225);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(72, 61, 139);
                strokeWeight(2);
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill(220, 20, 60);
                strokeWeight(2);
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill(124, 252, 0)
                strokeWeight(2)
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 0) {
                fill(255, 228, 225);
                strokeWeight(2)
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("yellow");
                strokeWeight(2)
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 5) {
                fill(30, 144, 255);
                strokeWeight(2)
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                strokeWeight(2)
                rect(x * side, y * side, side, side);
            }
        }
    }
}
socket.on("matrix", drawMatrix);

