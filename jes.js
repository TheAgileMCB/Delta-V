var xMax = 1550;
var yMax = 600;
var wMax = 150;
var hMax = 120;
var cMax = 256;
var seaMax = 22;

function setup() {
    createCanvas(1550, 600);
    noStroke();
    noLoop();
}

function randomX(xMax) {
    return Math.floor(Math.random() * xMax);
}

function randomY(yMax) {
    return Math.floor(Math.random() * yMax);
}

function randomW(wMax) {
    return Math.ceil(Math.random() * wMax);
}

function randomH(hMax) {
    return Math.ceil(Math.random() * hMax);
}

function randomC(cMax) {
    return Math.floor(Math.random() * cMax);
}

function randomSea(seaMax) {
    return Math.floor(Math.random() * seaMax);
}

function drawFish() {
    // var xFish = randomX(xMax);
    // var yFish = randomY(yMax);
    var wFish = randomW(wMax);
    var hFish = randomH(hMax);
    var wTail = wFish / 4;
    var hTail = hFish / 2;
    noStroke();
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(mouseX, mouseY, wFish, hFish);
    triangle(mouseX - wFish / 2, mouseY, mouseX - wFish / 2 - wTail, mouseY - hTail, mouseX - wFish / 2 - wTail, mouseY + hTail);
    fill(randomC(cMax), randomC(cMax), randomC(cMax));
    ellipse(mouseX + wFish / 4, mouseY, hFish / 5, hFish / 5);
} 

function mousePressed() {
    drawFish();
}

function keyPressed() {
    drawWeeds();
}

function mouseReleased() {
    drawWeeds();
    drawBubble();
}

function draw() {
    stroke(255, 190, 0);
    strokeWeight(20);
    line(0, 600, 1550, 600);
}

function drawWeeds() {
    noStroke();
    fill(50, randomC(cMax), 0);
    arc(randomX(xMax), 597, randomSea(seaMax), 100, 525, false);
    fill(0, randomC(cMax), 60);
    arc(randomX(xMax), 595, randomSea(seaMax), 200, 550, false);
    fill(0, randomC(cMax), 80);
    arc(randomX(xMax), 595, randomSea(seaMax), 270, 550, false);
}

function drawBubble() {
    var bubbleX = randomX(xMax);
    var bubbleY = randomY(yMax);
    noStroke();
    fill (150, 150, 150);
    arc(randomX(xMax), 595, 40, 45, 550, false);
    stroke(255, 255, 255);
    strokeWeight(2);
    noFill();
    ellipse(bubbleX, bubbleY, 30, 30);
    rect(bubbleX - 7, bubbleY - 7, 2, 2);
}