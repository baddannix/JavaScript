// Find the smallest and biggest numbers
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  // Sum of Cubes
  function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}

// Filter out strings from an array
function filterArray(arr) {
    return arr.filter(n => typeof n === 'number');
  }

  // is the number Symetrical
  const isSymmetrical = num => {
    const str = String(num);
    return str.split('').reverse().join('') === str;
  }
  
  // Special array
  const isSpecialArray = a => a.every((v, i) => v%2 == i%2);


  // How much is true?
  function countTrue(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    return arr.filter(Boolean).length;
  }

  // Convert key, values in an object array
  function objectToArray(obj) {
    return Object.keys(obj).map(key => [key, obj[key]])
  }

  // Array Multiples
  const arrayOfMultiples = (num, length) =>
    Array.from({ length }, (_, i) => num * (i + 1));

  // 25-Mile marathon
  function marathonDistance(d){
	return d.reduce((total, item)=>total +=Math.abs(item), 0)==25
}

// Square every digit
function squareDigits(n) {
	return +[...String(n)].map(x => x*x).join('');
}