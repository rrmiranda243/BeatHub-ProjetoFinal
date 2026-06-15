const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','navMenu')


//Slides

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   pagination: {
        el: ".swiper-pagination",
      },
});


//Relogio - p5js

let lastUpdate = 0;
let steps = 8600;
let calories = 468;
let heartRate = 86;
let distance = 12.00;
let battery = 75;

let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function setup() {
  let canvas = createCanvas(320, 400);
  canvas.parent('relogio-container');
}

function draw() {
  background(230);

  noStroke();
  fill(0);
  rect(5, 5, 310, 390, 40);

  fill(255);
  textFont('Arial');
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(78);
  text(nf(hour(), 2), 25, 8);
  text(nf(minute(), 2), 25, 90);

  textStyle(NORMAL);
  textSize(16);
  fill(180);
  text(diasSemana[new Date().getDay()], 25, 180);

  drawRing(230, 95, 90, map(steps % 10000, 0, 10000, 0, 360), [80, 220, 200]);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(steps, 230, 95);

  drawHeart(40, 250, 12, color(255, 70, 90));
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(18);
  text(heartRate, 65, 250);

  drawFlame(40, 290, 12, color(255, 140, 30));
  text(calories, 65, 290);

  drawPin(40, 330, 12, color(90, 230, 130));
  text(nf(distance, 1, 2) + " km", 65, 330);

  drawRing(230, 300, 90, map(battery, 0, 100, 0, 360), [170, 130, 240]);
  noStroke();
  fill(170, 130, 240);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(battery + "%", 230, 300);

  if (millis() - lastUpdate > 3000) {
    steps++;
    calories++;
    heartRate++;
    distance += 0.01;
    battery = (battery + 1) % 101;
    lastUpdate = millis();
  }
}

function drawRing(cx, cy, d, progress, rgb) {
  noFill();
  strokeWeight(8);
  stroke(60);
  ellipse(cx, cy, d, d);
  stroke(rgb[0], rgb[1], rgb[2]);
  arc(cx, cy, d, d, -HALF_PI, -HALF_PI + radians(progress));
}

function drawHeart(x, y, s, c) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  ellipse(-s * 0.5, -s * 0.3, s, s);
  ellipse(s * 0.5, -s * 0.3, s, s);
  triangle(-s, -s * 0.1, s, -s * 0.1, 0, s * 0.9);
  pop();
}

function drawFlame(x, y, s, c) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  beginShape();
  vertex(0, -s * 1.3);
  bezierVertex(s * 1.2, -s * 0.4, s * 0.8, s * 0.6, 0, s * 1.3);
  bezierVertex(-s * 0.8, s * 0.6, -s * 1.2, -s * 0.4, 0, -s * 1.3);
  endShape(CLOSE);

  fill(255, 220, 150);
  beginShape();
  vertex(0, -s * 0.5);
  bezierVertex(s * 0.5, 0, s * 0.3, s * 0.6, 0, s * 0.9);
  bezierVertex(-s * 0.3, s * 0.6, -s * 0.5, 0, 0, -s * 0.5);
  endShape(CLOSE);
  pop();
}

function drawPin(x, y, s, c) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  beginShape();
  vertex(-s, -s * 0.4);
  bezierVertex(-s, -s * 1.6, s, -s * 1.6, s, -s * 0.4);
  bezierVertex(s, s * 0.2, 0, s * 1.5, 0, s * 1.5);
  bezierVertex(0, s * 1.5, -s, s * 0.2, -s, -s * 0.4);
  endShape(CLOSE);
  fill(0);
  ellipse(0, -s * 0.4, s * 0.9, s * 0.9);
  pop();
}