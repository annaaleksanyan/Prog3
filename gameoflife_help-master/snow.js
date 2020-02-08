var button = document.getElementById("button");
let snowflakes = [];
function bodyClick(evt) {
    function drawsnow() {
        var cnv = createCanvas(18 * side, 13 * side);
        cnv.parent('snow-holder');
        fill(240);
        
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