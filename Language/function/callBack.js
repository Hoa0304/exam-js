function greet(who) {
    console.log("Hello " + who);
}

greet("Hoa");
console.log("Bye");

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}

console.log(chicken() + " came first.");