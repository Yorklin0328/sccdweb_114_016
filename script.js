let appInstance;

function startSketch(mode) {
  if (appInstance) {
    appInstance.remove();
  }

  const s = (p) => {
    if (mode === "ball") {
      let x = 50,
        y = 50,
        vx = 2,
        vy = 3;
      p.setup = () => {
        p.createCanvas(800, 500);
        document.getElementById("sketch-name").innerText = "BOUNCE SIMULATION";
      };
      p.draw = () => {
        p.background(10);
        p.fill(0, 255, 204);
        p.noStroke();
        p.circle(x, y, 25);
        x += vx;
        y += vy;
        vy += 0.2;
        if (y > p.height - 12) {
          vy = -vy * 0.85;
          y = p.height - 12;
        }
        if (x > p.width || x < 0) {
          vx = -vx;
        }
      };
    } else if (mode === "box") {
      let boxes = [];
      p.setup = () => {
        p.createCanvas(800, 500, p.WEBGL);
        document.getElementById("sketch-name").innerText = "3D SPACE RENDER";
        for (let i = 0; i < 15; i++) boxes[i] = p.random(-1000, 1000);
      };
      p.draw = () => {
        p.background(5);
        p.lights();
        p.orbitControl();
        for (let i = 0; i < 15; i++) {
          boxes[i] += 8;
          if (boxes[i] > 1000) boxes[i] = -1000;
          p.push();
          p.translate(0, 0, boxes[i]);
          p.fill(0, 255, 204, 150);
          p.stroke(255);
          p.box(50);
          p.pop();
        }
      };
    } else if (mode === "robot") {
      p.setup = () => {
        p.createCanvas(800, 500);
        document.getElementById("sketch-name").innerText =
          "GEOMETRIC CHARACTER";
      };
      p.draw = () => {
        p.background(20);
        p.translate(p.width / 2 - 200, 50);
        p.fill(255, 250, 130);
        p.circle(200, 300, 150);
        p.stroke(255);
        p.line(200, 50, 200, 100);
        p.circle(200, 50, 20);
        p.fill(173, 173, 173);
        p.rect(100, 100, 200, 100);
        p.rect(120, 200, 160, 100);
        p.fill(146, 75, 158);
        p.circle(150, 150, 30);
        p.circle(250, 150, 30);
        p.fill(108, 175, 228);
        p.rect(50, 180, 20, 50);
        p.rect(330, 180, 20, 50);
      };
    } else if (mode === "gradient") {
      p.setup = () => {
        p.createCanvas(800, 500);
        document.getElementById("sketch-name").innerText =
          "COLOR BLEND EXPERIMENT";
      };
      p.draw = () => {
        p.background(255);
        p.blendMode(p.MULTIPLY);
        let cA = p.color("#dc4e4e");
        let cB = p.color("#0019cd");
        for (let i = 0; i < p.width; i += 40) {
          cA.setAlpha(20);
          p.fill(cA);
          p.ellipse(200, 250, i);
          cB.setAlpha(20);
          p.fill(cB);
          p.ellipse(600, 250, i);
        }
        p.blendMode(p.BLEND);
        p.fill(0, 255, 204);
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
      };
    }
  };
  appInstance = new p5(s, "p5-canvas");
}
