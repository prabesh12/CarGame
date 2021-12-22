let c;
let p1;
const body = document.body;
body.style = "background-image: url('img/car1.jpg')";
 


function init() {
  p1 = new PlayGround();
  p1.initialize();
  p1.roadLane(1);
  p1.roadLane(2);
  p1.moveLane(1);
  p1.moveLane(2);
  c = new Car();
  c.playerCar();
  c.playerCarPosition();
  e1 = new Car();
  e1.enemyCar(1, "img/truck.png");
  e2 = new Car();
  e2.enemyCar(2, "img/Audi.png");
  e3 = new Car();
  e3.enemyCar(3, "img/1.png");
  document.addEventListener("keydown", c.keyDownPress);
  document.addEventListener("keyup", c.keyUpPress);
}

let play = document.querySelector(".play-button").addEventListener("click", function () {
  document.querySelector(".playground").style.opacity = 1;
  document.querySelector(".play-button").style.display = "none";
  document.querySelector(".before-start").style.display = "none";
  e1.moveEnemy(1);
  e2.moveEnemy(2);
  e3.moveEnemy(3);
});


// for play-again function
 document.querySelector(".play-again").addEventListener("click", function () {

play;
});

init();
