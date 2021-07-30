function sum(a) {
  return function(b) {
    return a + b;
  };
}
console.log(sum(5)(2) ); //7



const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let actualColor = -1;

function changeTextColor(text) {
  actualColor++;
  if (actualColor >= 5) {
    actualColor = 0;
  }
  text.style.color = colors[actualColor];
}

text1.addEventListener('click', changeTextColor.bind(null, text1));
text2.addEventListener('click', changeTextColor.bind(null, text2));
text3.addEventListener('click', changeTextColor.bind(null, text3));