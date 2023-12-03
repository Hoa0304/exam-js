let count = 0;
count = count + 1; // Increment count by 1
console.log(count); // Output: 1

let value = 10;
value = value * 2; // Multiply value by 2
console.log(value); // Output: 20
//------------------------
let countt = 0;
count += 1; // Equivalent to count = count + 1
console.log(count); // Output: 1

let valuee = 10;
value *= 2; // Equivalent to value = value * 2
console.log(value); // Output: 20
//------------------------
let person = { name: 'Hoa', age: 19 };
person = { ...person, age: 20 }; // Update the age property
console.log(person); // Output: { name: 'Hoa', age: 20 }

let coordinates = { x: 10, y: 20 };
coordinates = { ...coordinates, x: 15 }; // Update the x property
console.log(coordinates); // Output: { x: 15, y: 20 }