var fishes = []
var xMax = 1000;
var yMax = 500;
var wMax = 150;
var hMax = 120;
var cMax = 256;
var seaMax = 22;

function setup() {
    createCanvas(1000, 500);
    noStroke();
    for (let i = 0; i <= 70; i++) {
        drawWeeds();
    };
    for (let f = 0; f <= 20; f++) {
        fishes[f] = new Fish();
        // fishes[f].push;
    };
    // noLoop();
}

function randomX(xMax) {
    return Math.floor(Math.random() * xMax);
}

function randomY(yMax) {
    return Math.floor(Math.random() * yMax);
}

function randomW(wMax) {
    return Math.ceil(Math.random() * (wMax - 20) + 20);
}

function randomH(hMax) {
    return Math.ceil(Math.random() * (hMax - 20) + 20);
}

function randomC(cMax) {
    return Math.floor(Math.random() * cMax);
}

function randomSea(seaMax) {
    return Math.floor(Math.random() * seaMax);
}

function Fish() {
    this.xFish = random(0, xMax);
    this.yFish = random(0, yMax);
    this.wFish = random(0, wMax);
    this.hFish = random(0, hMax);
    this.wTail = this.wFish / 4;
    this.hTail = this.hFish / 2;
    noStroke();
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(this.xFish, this.yFish, this.wFish, this.hFish);
    triangle(this.xFish - this.wFish / 2, this.yFish, this.xFish - this.wFish / 2 - this.wTail, this.yFish - this.hTail, this.xFish - this.wFish / 2 - this.wTail, this.yFish + this.hTail);
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(this.xFish + this.wFish / 4, this.yFish, this.hFish / 5, this.hFish / 5);
} 

function drawWeeds() {
    noStroke();
    fill(50, random(0, cMax), 0);
    arc(random(0, xMax), 497, random(0, seaMax), 100, 525, false);
    fill(0, random(0, cMax), 60);
    arc(random(0, xMax), 497, random(0, seaMax), 200, 550, false);
    fill(0, random(0, cMax), 80);
    arc(random(0, xMax), 497, random(0, seaMax), 270, 550, false);
}

function drawBubble() {
    // var bubbleX = randomX(xMax);
    // var bubbleY = randomY(yMax);
    stroke(255, 255, 255);
    strokeWeight(2);
    noFill();
    ellipse(mouseX, mouseY, 30, 30);
    rect(mouseX - 7, mouseY - 7, 2, 2);
};

mousePressed() {
    // fish.splice(f, 1);
    drawBubble();
}

// function mouseReleased() {
//     drawBubble();
// }

function draw() {
    stroke(255, 190, 0);
    strokeWeight(20);
    line(0, 500, 1000, 500);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}