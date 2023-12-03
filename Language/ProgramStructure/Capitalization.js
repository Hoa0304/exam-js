let str = 'hello world';
let uppercaseStr = str.toUpperCase();
console.log(uppercaseStr); // Output: HELLO WORLD

let lowercaseStr = str.toLowerCase();
console.log(lowercaseStr); // Output: hello world

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
  
let capitalizedStr = capitalizeFirstLetter(str);
console.log(capitalizedStr); // Output: Hello world

function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = capitalizeFirstLetter(words[i]);
    }
    return words.join(' ');
}
  
let sentence = 'hello world';
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: Hello World