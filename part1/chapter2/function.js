function hello(name){
    console.log('Hello '+name);
}
hello('Hoa');
hello('Man');

function add(a,b){
    return a+b;
}

var result = add(10,19);
console.log('Result: '+ result);//20

var bye = function ( name ){
    return 'Bye '  + name;
};
console.log(bye('Hoa'));// Bye Hoa

prompt("Enter passcode");

const square = function (number) {
    return number * number;
};

const squar = (number) => {
    return number * number;
};