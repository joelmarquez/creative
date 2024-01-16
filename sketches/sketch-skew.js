const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1080, 1080 ]
};

const sketch = () => {
  let x, y, w, h;
  let radius, angle;

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    x = width * 0.5;
    y = width * 0.5;
    w = width * 0.6;
    h = width * 0.1;

    context.save();
    context.translate(x, y);
    context.translate(w * -0.5, h * -0.5);

    context.strokestyle = "blue";

    // Dibujo directo
    // context.strokeRect(w * -0.5, h * -0.5, w, h);

    // Dibujo punto a punto del rectangulo
    // context.beginPath();
    // context.moveTo(w * -0.5, h * -0.5);
    // context.lineTo(w *  0.5, h * -0.5);
    // context.lineTo(w *  0.5, h *  0.5);
    // context.lineTo(w * -0.5, h *  0.5);
    // context.closePath();
    // context.stroke();

    // Factorizando codigo de arriba
    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(w, 0);
    // context.lineTo(w, h);
    // context.lineTo(0, h);
    // context.closePath();
    // context.stroke();

    radius = 200;
    angle = math.degToRad(30);

    x = Math.cos(angle) * radius;
    y = Math.sin(angle) * radius;

    console.log(x, y);

    // Dibujando una linea
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, y);
    context.stroke();

    context.restore();

  };
};


canvasSketch(sketch, settings);
