let result = 1;
const arr1 = [2, 3, 5, 8];
for (let i = 0; i < arr1.length; i++) {
  result *= arr1[i];
}
console.log(result);
// 240 //



const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if(arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}
// 8, 6 //

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if ((arr3[i] % 2) === 0) {
    console.log(arr3[i]);
  }
}
// 2, 8, 0, 6, 20 //