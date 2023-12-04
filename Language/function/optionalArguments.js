function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16


function greet(name = "Hoa") {
    console.log(`Hello, ${name}!`);
}
  
greet(); // Output: Hello, Hoa!
greet("Man"); // Output: Hello, Man!




function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
    // → -10
console.log(minus(10, 5));
    // → 

    function gret(name) {
        if (name === undefined) {
          console.log("Hello, Hoa!");
        } else {
          console.log(`Hello, ${name}!`);
        }
      }
      
    gret(); // Output: Hello, Hoa!
    gret("Dat"); // Output: Hello, Dat!


function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

function greet() {
    if (arguments.length === 0) {
      console.log("Hello, Hoa!");
    } else {
      console.log(`Hello, ${arguments[0]}!`);
    }
}
  
greet(); // Output: Hello, Hoa!
greet("Bao"); // Output: Hello, Bao!


console.log("C", "O", 2);
// → C O 2