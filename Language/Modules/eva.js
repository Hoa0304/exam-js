const x = 1;
function evalAndReturnX(code) {
eval(code);
return x;
}
console.log(evalAndReturnX("var x = 2"));
// → 2
console.log(x);