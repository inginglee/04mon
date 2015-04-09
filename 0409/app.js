var box = document.querySelectorAll('.box')[0];
var x = 10;

function randomNum(endNum){
  return Math.floor(Math.random()*endNum)+1;
  }
function moveBox(){
  var value = x +5;
  box.style.left = x +'px';
  x=value;
}

function startMove(){
  console.log('start')
  window.setInterval(moveBox, 41);

}
document.body.box.addEventListener('click',startMove);
