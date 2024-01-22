function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();

function Person(name) { this.name = name; }
let ferdinand = Person("CHTran"); // oops
console.log(name);