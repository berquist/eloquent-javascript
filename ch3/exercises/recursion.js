function isEven(n) {
    let na = Math.abs(n);
    if (na === 0) {
        return true;
    } else if (na === 1) {
        return false;
    } else {
        return isEven(na - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-4));
