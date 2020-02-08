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
var grassArr = [];
var grassEaterArr = [];
var amenakerArr = [];
var gishaticharr = [];
var shunarr = [];
var maharr = [];
// var GishatichneriKoxmicSpanvacXotakerner = 0;
// var SpanvacXotakerner = 0;
// var AmenakerneriKeracXoty = 0;
// var KeracXoty = 0;
// var ShneriQanaky = 0;
// var MaheriQanaky = 0;

// if (frameCount % 60 == 0) {
//     var info = {
//         "Gishatichneri Koghmic Spanvac Xotakerneri Tokosy": Math.floor((GishKoghmicSpanvacXotaker * 100) / SpanvacXotakerner),
//         "Amenakerneri Kerac Xoti Tokosy": Math.floor((AmenakerneriKeracXoty * 100) / KeracXoty),
//         "Shneri Qanaky": shunarr.length,
//         "Maheri qanaky": MaheriQanaky
//     };
//     var myJSON = JSON.stringify(info);
//     function handleSubmit(evt) {
//         socket.emit("send message", myJSON);
//     }
//     handleSubmit();
// }
// alert(info);

function setup() {
    // frameRate(2);
    
    song = loadSound("song.mp3")
    strokeWeight(2);
    var cnv = createCanvas(18 * side, 13 * side);
    cnv.parent('sketch-holder');
     // var x = (windowWidth - width) / 2;
    // var y = (windowHeight - height) / 2;
}

socket.on("clickclick", bodyClick3);
var button3 = document.getElementById("button3");
function bodyClick3(evt) {
    song.stop();
}
button3.onclick = bodyClick3;

socket.on("clicking", bodyClick2);
var button2 = document.getElementById("button2");

function bodyClick2(evt) {
    song.play();
}
button2.onclick = bodyClick2;

socket.on("click", bodyClick);
var button = document.getElementById("button");
let snowflakes = [];
function bodyClick(evt) {
    function drawsnow() {
        var cnv = createCanvas(18 * side, 13 * side);
        cnv.parent('snow-holder');
        fill(240);
        noStroke();
        let t = frameCount / 60;
        for (let i = 0; i < random(5); i++) {
            snowflakes.push(new snowflake());
        }
        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    }
    function snowflake() {
        this.posX = 0;
        this.posY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);
        this.radius = sqrt(random(pow(width / 2, 2)));
        this.update = function (time) {
            let w = 0.6;
            let angle = w * time + this.initialangle;
            this.posX = width / 2 + this.radius * sin(angle);
            this.posY += pow(this.size, 0.5);
            if (this.posY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };
        this.display = function () {
            ellipse(this.posX, this.posY, this.size);
        };
    }
    setInterval(drawsnow,50);
}
button.onclick = bodyClick;

socket.on("matrix", drawMatrix);
function drawMatrix(matrix) {
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
                fill(0, 128, 0); //xot lime
            } else if (matrix[y][x] == 1 && exanak == 'summer') {
                fill(0, 255, 0); //xot forestgreen
            } else if (matrix[y][x] == 1 && exanak == 'winter') {
                fill(60, 179, 113); //xot lightgreen
            } else if (matrix[y][x] == 1 && exanak == 'autumn') {
                fill(255, 69, 0); //xot orangered
            } else if (matrix[y][x] == 2) {
                fill(220, 20, 60); //xotaker crimson
            } else if (matrix[y][x] == 3) {
                fill(255, 255, 0) //amenaker yello
            } else if (matrix[y][x] == 0) {
                fill(255, 228, 225); //vanilawhite
            } else if (matrix[y][x] == 4) {
                fill(125, 80, 139); //gishatich purple
            } else if (matrix[y][x] == 5) {
                fill(0, 191, 255); //shun blue 
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

