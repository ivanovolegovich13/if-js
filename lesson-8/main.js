const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = function(obj1, obj2)  {
  if (obj1 === obj2) {
    return true;
  }
  
  let key1 = Object.keys(obj1)
  let key2 = Object.keys(obj2)

  for (let key of key1) {
    if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3));  // false