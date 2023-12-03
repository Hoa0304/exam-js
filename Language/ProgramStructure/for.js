for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
    // → 0
    // → 2
    // ... etcetera

let result = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);
    // → 1024

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}