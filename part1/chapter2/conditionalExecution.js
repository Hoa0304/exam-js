let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +

theNumber * theNumber);

}

if (1 + 1 == 2) console.log("It's true");
// It's true

let theNum = Number(prompt("Pick a number"));
if (!Number.isNaN(theNum)) {
console.log("Your number is the square root of " +

theNum * theNum);

} else {
console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}