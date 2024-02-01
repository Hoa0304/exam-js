const topScope = Object.create(null);
topScope.true = true;
topScope.false = false;

let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope));

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

topScope.print = value => {
    console.log(value);
    return value;
};