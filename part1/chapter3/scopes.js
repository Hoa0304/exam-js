function outer() {
    var outerVariable = "I'm from outer scope";
  
    function inner() {
      console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
  
    inner(); // Call inner function
}
  
outer(); // Call outer function