var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log("Server is running")

let n = 13;
let m = 18;

function genMatrix(n,m) {
    var matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < m; j++) {
            var probability = Math.floor(Math.random(0, 100))
            if (probability <= 35) {
                matrix[i][j] = 1;
                grassArr.push(new Xot(j, i, 1));
            } else if (probability > 31 && probability <= 44) {
                matrix[i][j] = 2;
                grassEaterArr.push(new Xotaker(j, i, 2));
            } else if (probability > 44 && probability <= 47) {
                matrix[i][j] = 3;
                amenakerArr.push(new Amenaker(j, i, 3));
            } else if (probability > 47 && probability <= 48) {
                matrix[i][j] = 4;
                gishaticharr.push(new Gishatich(j, i, 4));
            } else if (probability > 48 && probability <= 48.6) {
                matrix[i][j] = 5;
                shunarr.push(new Shun(j, i, 5));
            } else if (probability > 48.6 && probability <= 48.8) {
                matrix[i][j] = 6;
                maharr.push(new Mah(j, i, 6));
            } else {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }
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

matrix = genMatrix(n,m);

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
if (grassArr.length < 1) {
    grassArr.push(new Xot(4, 4, 1))
}
if (gishaticharr.length == 0) {
    gishaticharr.push(new Gishatich(0, 0, 4))
}
if (maharr.length < 1) {
    maharr.push(new Mah(1, 1, 6))
}
if (shunarr.length <= 2) {
    shunarr.push(new Shun(2, 2, 5))
}
if (grassEaterArr.length <= 20) {
    grassEaterArr.push(new Xotaker(3, 3, 2))
}
io.sockets.emit("matrix",matrix);
}
setInterval(drawserver,3000);

//     socket.on("send message", function (data) {
//         fs.writeFileSync("info.json", data);
//     })
// });
// app.get("/*", function (req, res) {
//     res.send("<h1>404 Error");
// });


// io.on('connection', function (socket) {
// socket.on("fire", function() {
//     matrix[this.y][this.x] = 0
// });
// });
