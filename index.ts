// Import stylesheets
import './style.scss';

var price = 0;
var quantity = 0;

document.getElementById('price').onchange = function (a) {
  console.log(document.getElementById('price').value);
  var quantity = document.getElementById('quantity').value;
  var price = document.getElementById('price').value;
  doMath(price, quantity);
};

document.getElementById('quantity').onchange = function (a) {
  console.log(document.getElementById('quantity').value);
  var price = document.getElementById('price').value;
  var quantity = document.getElementById('quantity').value;
  doMath(price, quantity);
};

function doMath(a, b) {
  console.log(a * b);
  changeHtml(a * b);
}

function changeHtml(input) {
  document.getElementById('total').innerHTML = input;
}
