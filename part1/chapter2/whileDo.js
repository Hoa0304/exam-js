console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}
// → 0
// → 2
// ... etcetera

let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);
// → 1024


let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let userInput;
do {
  userInput = Number(prompt("Enter a number from 1 to 5"));
} while (userInput < 1 || userInput > 5);

console.log("You entered a valid number: " + userInput);