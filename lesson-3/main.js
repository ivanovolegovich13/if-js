function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
test = isPalindrome('abydd');
test2 = isPalindrome('qweeewq');

console.log(test);
console.log(test2);


function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log('min', min(3, 5));

function min(a, b) {
  return a < b ? a : b;
}
console.log('min', min(6, 9));

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log('max', max(3, 5));

function max(a, b) {
  return a > b ? a : b;
}
console.log('max', max(2, 7));


const arr = [];
for (let i = 0; i < 10; i++ ) {
  arr.push( Math.round( Math.random() * 100 ));
}

const replacementZero = (arr) => arr.map((arr) => String(arr).includes('0') ? String(arr).replace(/0/g, 'zero') : arr);

console.log(arr);
console.log(replacementZero(arr));
