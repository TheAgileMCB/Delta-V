var fishes = [];
var colors = ["aqua", "bisque", "burlywood", "navy", "teal", "olive", "crimson", "coral", "chartreuse", "cornsilk", "deeppink", "darkviolet", "firebrick", "forestgreen", "dimgrey", "darkorchid", "fuschia", "gold", "goldenrod", "greenyellow", "hotpink", "lawngreen", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumvioletred", "mintcream", "midnightblue", "paleturqoise", "peru", "rosybrown", "salmon", "seagreen", "sienna", "red", "blue", "pink", "yellow", "green", "skyblue", "white", "purple", "orange", "grey"];
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
// function drawWeeds() {
//     noStroke();
//     fill(50, random(256), 0);
//     arc(random(width), height, random(22), 100, 525, false);
//     fill(0, random(256), 60);
//     arc(random(width), height, random(22), 200, 550, false);
//     fill(0, random(256), 80);
//     arc(random(width), height, random(22), 270, 550, false);
// }

function setup() {
    alert("Welcome to ANGLER MANAGEMENT! \n\nYour mission--should you choose to accept it--is to CATCH all these fish! \n\nCATCH fish by clicking them.");
    createCanvas(1000, 600);
    for (var i = 0; i < 10; i++) {
        let x = -random(width);
        let y = random(height);
        let w = random(30, 120);
        let h = random(20, 100);
        let wTail = w/4;
        let hTail = h/2;
        let color = random(colors);
        let b = new Fish(x, y, w, h, wTail, hTail, color);
        fishes.push(b);
    };
    // for (let i = 0; i <= 70; i++) {
    //     drawWeeds();
    // };
    if (!timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    };
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
   
// for(var pixelW = 0; pixelW <= 1000; pixelW++) {
//     for(var pixelH = 0; pixelH <= 600; pixelH++) {
//         noStroke();
//         colorMode(RGB, 150);
//         for (let k = 0; k < 255; k++) {
//           for (let j = 0; j < 255; j++) {
//                 stroke(0, j, k);
//                 point(pixelW, pixelH);
//                 }
//             };
//         }
//     }
    
    background(20,150,255);
    for (let i = 0; i < fishes.length; i++) {
        fishes[i].move();
        fishes[i].show();
    };
    if (fishes.length === 0) {
        noLoop();
        clearInterval(interval);
        alert("GAME OVER! \n\nGood anglin', friend! \n\nYour time was " + theTimer.innerHTML) + "!";
    };
    console.log(fishes.length);
}

// Reset everything:
// function reset() {
//     clearInterval(interval);
//     interval = null;
//     timer = [0,0,0,0];
//     timerRunning = false;
//     theTimer.innerHTML = "00:00:00";
//     redraw();
// }

// resetButton.addEventListener("click", reset, false);

class Fish {
    constructor(x, y, w, h, wTail, hTail, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.wTail = wTail;
        this.hTail = hTail;
        this.color = color;
    }


    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if(d < this.w-this.w/4) {
            return true;
        } else {
            return false;
        }
    }

    move() {
        this.x = this.x + random(-2, 7);
        this.y = this.y + random(-1, 1);
        if(this.x > width+50) {
            this.y = floor(random(0, height));
            this.x = -50;
        }
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
        triangle(this.x - this.w / 2, this.y, this.x - this.w / 2 - this.wTail, this.y - this.hTail, this.x - this.w / 2 - this.wTail, this.y + this.hTail);
        fill(0);
        ellipse(this.x + this.w / 4, this.y, this.h / 5, this.h / 5);
    }
}