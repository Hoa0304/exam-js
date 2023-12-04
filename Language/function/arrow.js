const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

const sum = (a, b) => {
    return a + b;
  };
  
console.log(sum(2, 3)); //  5

const tong = (a, b) => a + b;

console.log(tong(2, 3)); // 5