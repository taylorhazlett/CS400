const doMath = (statement) => (str) => {
    const l = parseInt(str.charAt(0));
    const op = (str.charAt(1));
    const r = parseInt(str.charAt(2));
    switch (op) {
        case "+":
            return l + r;
        case "-":
            return l - r;
        case "*":
            return l * r;
        case "/":
            return l / r;
    }
}


const e1 = "4+2";
console.log(`${e1} = ${doMath(e1)(e1)}`);

const e2 = "5*7";
console.log(`${e2} = ${doMath(e2)(e2)}`);

const e3 = "6-1";
console.log(`${e3} = ${doMath(e3)(e3)}`);

const e4 = "9/2";
console.log(`${e4} = ${doMath(e4)(e4)}`);
