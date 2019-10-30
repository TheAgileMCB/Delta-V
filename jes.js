var xMax = 600;
var yMax = 600;
var wMax = 150;
var hMax = 120;
var cMax = 256;

function setup() {
    createCanvas(600, 600);
    noStroke();
    noLoop();
}

function randomX(xMax) {
    return Math.floor(Math.random() * Math.floor(xMax));
}

function randomY(yMax) {
    return Math.floor(Math.random() * Math.floor(yMax));
}

function randomW(wMax) {
    return Math.ceil(Math.random() * Math.ceil(wMax));
}

function randomH(hMax) {
    return Math.ceil(Math.random() * Math.ceil(hMax));
}

function randomC(cMax) {
    return Math.floor(Math.random() * Math.floor(cMax));
}

function draw() {
    var xFish = randomX(xMax);
    var yFish = randomY(yMax);
    var wFish = randomW(wMax);
    var hFish = randomH(hMax);
    var wTail = wFish / 4;
    var hTail = hFish / 2;
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(xFish, yFish, wFish, hFish);
    triangle(xFish - wFish / 2, yFish, xFish - wFish / 2 - wTail, yFish - hTail, xFish - wFish / 2 - wTail, yFish + hTail);
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(xFish + wFish / 4, yFish, hFish / 5, hFish / 5);
} 

function keyPressed() {
    redraw();
}