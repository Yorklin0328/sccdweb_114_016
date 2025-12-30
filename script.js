let currentP5;

function playSketch(type) {
  if (currentP5) {
    currentP5.remove();
  } // 清除舊動畫

  const sketch = (p) => {
    if (type === "ball") {
      let xp = 50,
        yp = 50,
        xs = 0.5,
        ys = 3;
      p.setup = () => {
        p.createCanvas(600, 400);
        document.getElementById("sketch-title").innerText = "球落下教學作品";
      };
      p.draw = () => {
        p.background(100);
        p.fill(255, 20, 25);
        p.circle(xp, yp, 20);
        xp += xs;
        yp += ys;
        ys += 0.1;
        if (yp > p.height) {
          ys = -ys * 0.8;
          yp = p.height;
        }
      };
    } else if (type === "gradient") {
      let z = [];
      p.setup = () => {
        p.createCanvas(600, 400, p.WEBGL);
        document.getElementById("sketch-title").innerText = "漸層與 3D 方塊";
        for (let i = 0; i < 10; i++) z[i] = p.random(-1000, 1000);
      };
      p.draw = () => {
        p.background(205);
        p.lights();
        p.ambientLight(200, 10, 10);
        p.orbitControl();
        for (let i = 0; i < 10; i++) {
          z[i] += 10;
          if (z[i] > 1000) z[i] = -1000;
          p.push();
          p.translate(0, 0, z[i]);
          p.fill(200, 20, 20);
          p.box(60);
          p.pop();
        }
      };
    } else if (type === "robot") {
      p.setup = () => {
        p.createCanvas(400, 400);
        document.getElementById("sketch-title").innerText = "畫機器人教學";
      };
      p.draw = () => {
        p.background(200);
        p.fill("rgb(255,250,130)");
        p.circle(200, 300, 150);
        p.line(200, 50, 200, 100);
        p.circle(200, 50, 20);
        p.fill("rgb(173,173,173)");
        p.rect(100, 100, 200, 100);
        p.rect(120, 200, 160, 100);
        p.fill("rgb(146,75,158)");
        p.circle(150, 150, 30);
        p.circle(250, 150, 30);
        p.fill("rgb(108,175,228)");
        p.rect(50, 180, 20, 50);
        p.rect(330, 180, 20, 50);
      };
    }
  };
  currentP5 = new p5(sketch, "canvas-parent");
}
