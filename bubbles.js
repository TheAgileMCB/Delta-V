var bubbles = [];

function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < 30; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(40, 70);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }


}

function mousePressed() {
    for (let i = bubbles.length-1; i >= 0; i--) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if(d < this.r) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        fill(this.brightness);
        // tint(255, 255);
        ellipse(this.x, this.y, this.r);
    }
}