function isPalindrome(str) {
  let strLen = str.length;
  let result = '';
    for (let i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 'yes';
      } else {
        result = 'no';
        return result;
      }
    }
    return result;
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


(function replacement (){
let arr = [ ];
for (let i = 0; i < 10; i++ ) {
arr.push( Math.round( Math.random() * 100 ));
}
let arrToString = arr.toString();
let newarr = arrToString.replace(/0/g, 'zero');
console.log(arrToString);
console.log(newarr);
} 
());
