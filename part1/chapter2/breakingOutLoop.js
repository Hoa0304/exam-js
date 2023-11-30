for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i equals 5
    }
    console.log(i);
}

function myFunction() {
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        return; // Exit the function when i equals 5
      }
      console.log(i);
    }
}
  
myFunction();