var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log("Server is running")

XoteriQanak = 0;
KervacXot = 0;
KervacXotakerGishKoxm = 0;
MaheriQanak = 0;

var obj = {"info": [] };
function main(){
    var file = "info.json";
    obj.info.push({"Xoteri qanak": XoteriQanak,"Kervac Xoty Bolor Kerparneri Koxmic": KervacXot,"Kervac Xotakery Gishatichi Koxmic": KervacXotakerGishKoxm,"Maheri Qanak": MaheriQanak});
    fs.writeFileSync(file,JSON.stringify(obj,null,4))
}
setInterval(main,10000)

let n = 13;
let m = 18;

function genMatrix() {
    var matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < m; j++) {
            var probability = Math.floor(Math.random() * 100)
            if (probability <= 35) {
                matrix[i][j] = 1;
                grassArr.push(new Xot(j, i, 1));
                XoteriQanak++
            } else if (probability > 35 && probability <= 40) {
                matrix[i][j] = 2;
                grassEaterArr.push(new Xotaker(j, i, 2));
            } else if (probability > 40 && probability <= 43) {
                matrix[i][j] = 3;
                amenakerArr.push(new Amenaker(j, i, 3));
            } else if (probability > 43 && probability <= 46) {
                matrix[i][j] = 4;
                gishaticharr.push(new Gishatich(j, i, 4));
            } else if (probability > 46 && probability <= 47) {
                matrix[i][j] = 5;
                shunarr.push(new Shun(j, i, 5));
            } else if (probability > 47 && probability <= 47.2) {
                matrix[i][j] = 6;
                maharr.push(new Mah(j, i, 6));
                MaheriQanak++
            } else {
                matrix[i][j] = 0;
            }
        }

    }
    return matrix;
}

side = 35;
grassArr = [];
grassEaterArr = [];
amenakerArr = [];
gishaticharr = [];
shunarr = [];
maharr = [];

var Xot = require("./class.grass.js")
var Xotaker = require("./class.eatgrass.js")
var Gishatich = require("./class.wildanimal.js")
var Shun = require("./class.dog.js")
var Mah = require("./class.killerofvegan.js")
var Amenaker = require("./class.everythingeater.js")

let d = 50;
let g = 50;

matrix = genMatrix(g, d);

function drawserver() {
    for (var i in grassArr) {
        grassArr[i].bazmacum();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].utel();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].utel();
    }
    for (var i in gishaticharr) {
        gishaticharr[i].utel();
    }
    for (var i in shunarr) {
        shunarr[i].sharjvel();
    }
    for (var i in maharr) {
        maharr[i].sharjvel();
    }
    if (grassArr.length < 3) {
        grassArr.push(new Xot(4, 4, 1))
        XoteriQanak++
    }
    if (gishaticharr.length < 7) {
        gishaticharr.push(new Gishatich(0, 0, 4))
    }
    if (maharr.length < 1) {
        maharr.push(new Mah(1, 1, 6))
        MaheriQanak++
    }
    if (shunarr.length <= 2) {
        shunarr.push(new Shun(2, 2, 5))
    }
    if (grassEaterArr.length <= 20) {
        grassEaterArr.push(new Xotaker(Math.floor(Math.random()*9), Math.floor(Math.random()*9), 2))
    }
    io.sockets.emit("matrix", matrix);
}
setInterval(drawserver, 100);
