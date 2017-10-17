document.addEventListener("DOMContentLoaded", function(event) {
  var head = document.head
  var html = document.getElementsByTagName('html')[0];
  var body = document.body;
  var child = document.getElementsByClassName('child')
  $('#color1').colorPicker();

  container.addEventListener("click", addcolor)
  button.addEventListener("click", res)

function addcolor(a) {
if(a.target !== container) {
a.target.style.background = $('#color1').val();
}
}

function res() {
  for(let i=0; i<child.length;i++)
  child[i].style.background = null;
}
// for(let i=0; i < document.getElementsByClassName('childb').length; i++) {
// document.getElementsByClassName('childb')[i].style.background = random_color;
// }
// for(let j=0; j < document.getElementsByClassName('childr').length; j++) {
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementsByClassName('childr')[j].style.background = random_color;
// // }

})
