const maryPoppins = 'supercalifragilisticexpialidocious';

const problem3 = (x, f) => f(x);

//replace, use regular expression
//OR take string, replace each c with 'c*', split on *
let splitonC = problem3(maryPoppins, y => y.split(/(?=c)/g));
console.log(splitonC);

let replaced = problem3(maryPoppins, y => {
    const newString = {
        originalString: maryPoppins,
        modifiedString: y.replace(/a/g, "A"),
        numberReplaced: y.match(/a/g).length,
        length: y.length,
    }
    return newString;
});
console.log(replaced);