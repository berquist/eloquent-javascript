const n = 3.4;

// console.log(`square1: ${square1(n)}`)
console.log(`square2: ${square2(n)}`)
// console.log(`square3: ${square3(n)}`)
// console.log(`square4: ${square4(n)}`)

const square1 = function(x) {
    return x * x;
};

function square2(x) {
    return x * x;
}

const square3 = (x) => { return x * x; };
const square4 = x => x * x;

console.log(`square1: ${square1(n)}`)
console.log(`square2: ${square2(n)}`)
console.log(`square3: ${square3(n)}`)
console.log(`square4: ${square4(n)}`)
