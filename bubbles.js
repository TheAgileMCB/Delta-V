var fishes = [];

function setup() {
    createCanvas(1000, 600);
    for (var i = 0; i < 30; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(40, 150);
        let h = random(30, 120);
        let wTail = w/4;
        let hTail = h/2;
        let b = new Fish(x, y, w, h, wTail, hTail);
        fishes.push(b);
    }
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//  }

function mousePressed() {
    for (let i = fishes.length-1; i >= 0; i--) {
        if (fishes[i].contains(mouseX, mouseY)) {
            fishes.splice(i, 1);
        }
    }
}

function draw() {
    // "document.querySelector('style.canvas.background
//     noStroke();
// colorMode(RGB, 150);
// for (let k = 0; k < 255; k++) {
//   for (let j = 0; j < 255; j++) {
//         stroke(0, j, k);
//         point(k, j);
//         }
//     };
background(20,150,255);
    for (let i = 0; i < fishes.length; i++) {
        fishes[i].move();
        fishes[i].show();
    };
}

class Fish {
    constructor(x, y, w, h, wTail, hTail) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.wTail = wTail;
        this.hTail = hTail;
    }


    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if(d < this.w) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-2, 4);
        this.y = this.y + random(-2, 4);
    }

    show() {
        noStroke();
        fill(200, 100, 20);
        ellipse(this.x, this.y, this.w, this.h);
        triangle(this.x - this.w / 2, this.y, this.x - this.w / 2 - this.wTail, this.y - this.hTail, this.x - this.w / 2 - this.wTail, this.y + this.hTail);
        fill(255);
        ellipse(this.x + this.w / 4, this.y, this.h / 5, this.h / 5);
    }
}