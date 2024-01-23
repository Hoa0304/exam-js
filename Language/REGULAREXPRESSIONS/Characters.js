let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("03-04-2004 15:20"));
// → true
console.log(dateTime.test("05-jan-2004 15:20"));
// → false