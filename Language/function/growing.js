function greet(name) {
    console.log(`Hello, ${name}!`);
}
  
  // Enhance the greet function by adding the age parameter
function greetWithAge(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
  
greet("John"); // Output: Hello, John!
greetWithAge("John", 25); // Output: Hello, John! You are 25 years old.


function greet(name) {
    if (name === "Alice") {
      console.log("Hello, Alice! Nice to see you.");
    } else {
      console.log(`Hello, ${name}!`);
    }
}
  
greet("John"); // Output: Hello, John!
greet("Alice"); // Output: Hello, Alice! Nice to see you.




function calculateSum(a, b, c) {
    return a + b + c;
}
  
function calculateAverage(a, b, c) {
    return calculateSum(a, b, c) / 3;
}
  
console.log(calculateAverage(2, 4, 6)); // Output: 4



function Circle(radius) {
    this.radius = radius;
}
  
Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};
  
const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483


function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
    cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);