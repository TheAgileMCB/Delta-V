var xMax = 1550;
var yMax = 600;
var wMax = 150;
var hMax = 120;
var cMax = 256;

function setup() {
    createCanvas(1550, 600);
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

function drawFish() {
    var xFish = randomX(xMax);
    var yFish = randomY(yMax);
    var wFish = randomW(wMax);
    var hFish = randomH(hMax);
    var wTail = wFish / 4;
    var hTail = hFish / 2;
    noStroke();
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(xFish, yFish, wFish, hFish);
    triangle(xFish - wFish / 2, yFish, xFish - wFish / 2 - wTail, yFish - hTail, xFish - wFish / 2 - wTail, yFish + hTail);
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(xFish + wFish / 4, yFish, hFish / 5, hFish / 5);
} 

function keyPressed() {
    drawFish();
}

function mousePressed() {
    drawBubble();
    drawWeeds();
}

function mouseReleased() {
    drawWeeds();
}

function draw() {
    stroke(255, 190, 0);
    strokeWeight(20);
    line(0, 600, 1550, 600);
}

function drawWeeds() {
    noStroke();
    fill(50, randomC(cMax), 0);
    arc(randomX(xMax), 597, 10, 100, 525, false);
    fill(0, randomC(cMax), 60);
    arc(randomX(xMax), 595, 20, 200, 550, false);
    fill(0, randomC(cMax), 80);
    arc(randomX(xMax), 595, 15, 300, 550, false);
}

function drawBubble() {
    noStroke();
    fill (150, 150, 150);
    arc(randomX(xMax), 595, 40, 45, 550, false);
    stroke(255, 255, 255);
    strokeWeight(2);
    noFill();
    // fill(160, 220, 250);
    ellipse(randomX(xMax), randomY(yMax), 30, 30);
}
