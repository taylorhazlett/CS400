function* F () {
    let [val0, val1, result] = [0,1,0];
    while (true) {
        result = val0 + val1;
        val0 = val1;
        val1 = result;
        yield result;

    }
}

function* evenFibs () {
    let fun = F();
    fib = fun.next();
    while (!fib.done) {
        if (fib.value % 2 === 0) {
            yield fib.value
        }
        fib = fun.next();
    }
}

let f = evenFibs();

//1st even
console.log(f.next().value);
//2nd even
console.log(f.next().value);
//3rd even
console.log(f.next().value);