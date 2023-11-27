var name = 'Hoa';

console.log(name);

name = 'Dat'+ '' + "Di Caprio";
console.log(name);

name = true ;
console.log("name = "+ name);

var isActor = true;
var isHandsome = true;

var shouldILikeHim = isActor && isHandsome;

console.log('Should I Like Him?-Answer : ' + shouldILikeHim);

console.log('Hello'+ " " + 'js');
console.log('Hello'.concat( " ".concat('Javascript')));

function getName(){
    console.log('getName: '+ name);
}

getName();
console.log('name: '+name);
//--------------
function getname(){
    var name = 'Man';
    console.log('getName: '+ name);
}

getname(); // Man
console.log('name: '+name); //Hoa


var x = 5;
let y = 10;
const z = 15;

if (x>y && y>z) {
    alert ('error')
}