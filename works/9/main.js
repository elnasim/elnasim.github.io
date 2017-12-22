var ruler = document.querySelector('.ruler');
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');
var btnStart = document.querySelector('.start');
var answer = document.querySelector('.answer');

var a = Math.floor(Math.random() * (10 - 6) + 6);
var sum = Math.floor(Math.random() * (15 - 11) + 11);
var b = sum - a;

num1.innerHTML = a;
num2.innerHTML = b;

var step = 55.5; // шаг стрелки для перемещения на одно целое деление

var inputValueFirst = document.createElement('input');
inputValueFirst.className = 'inputValueFirst';
inputValueFirst.setAttribute('type', 'text');
inputValueFirst.style.left = (a / 2) * 38 + 'px';

var inputValueSecond = document.createElement('input');
inputValueSecond.className = 'inputValueSecond';
inputValueSecond.setAttribute('type', 'text');
inputValueSecond.style.left = (a + b / 2) * 38.6 + 'px';

var inputValueAnswer = document.createElement('input');
inputValueAnswer.className = 'inputValueAnswer';
inputValueAnswer.setAttribute('type', 'text');

btnStart.addEventListener('click', function () {
  this.remove();
  var canvas = document.getElementById('canvas');

  ruler.appendChild(inputValueFirst);

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.transform(1, 0, 0, -1, 0, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0); // Начало фигуры
    ctx.bezierCurveTo(0, 0, (a * step) / 2, 300, a * step, 0); // Начало фигуры, контрольная точка и высота, конец фигуры
    ctx.stroke();
  }
});

function newLine() {
  var canvas = document.getElementById('canvas');

  ruler.appendChild(inputValueSecond);

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(a * step, 0); // Начало фигуры
    ctx.bezierCurveTo(a * step, 0, ((a + sum) * step) / 2, 200, sum * step, 0); // Начало фигуры, контрольная точка и высота, конец фигуры
    ctx.stroke();
  }
}

function typeAnswer() {
  answer.innerHTML = '';
  answer.appendChild(inputValueAnswer);
  answer.addEventListener('input', function () {
    if (inputValueAnswer.value == sum) {
      inputValueAnswer.remove();
      this.innerHTML = sum;
      inputValueAnswer.classList.remove('badAnswer');
    } else {
      inputValueAnswer.className = 'badAnswer';
    }
  })
}


inputValueFirst.addEventListener('input', function () {
  if (this.value == a) {
    this.remove();
    var trueAnswer = document.createElement('span');
    trueAnswer.className = 'trueAnswerFirst';
    trueAnswer.style.left = (a / 2) * 38 + 'px';
    trueAnswer.innerHTML = a;
    ruler.appendChild(trueAnswer);
    num1.classList.remove('numBad');
    newLine();
  } else {
    this.className = 'badAnswer inputValueFirst';
    num1.className = 'numBad';
  }
});

inputValueSecond.addEventListener('input', function () {
  if (this.value == b) {
    this.remove();
    var trueAnswer = document.createElement('span');
    trueAnswer.className = 'trueAnswerSecond';
    trueAnswer.style.left = (a + b / 2) * 38.6 + 'px';
    trueAnswer.innerHTML = b;
    ruler.appendChild(trueAnswer);
    num2.classList.remove('numBad');
    typeAnswer();
  } else {
    this.className = 'badAnswer inputValueSecond';
    num2.className = 'numBad';
  }
});