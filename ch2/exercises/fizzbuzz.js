for (let i = 1; i <= 100; i++) {
    let out = i;
    let div3 = i % 3 == 0;
    let div5 = i % 5 == 0;
    if (div3 && div5) {
        out = "FizzBuzz";
    } else if (div3) {
        out = "Fizz";
    } else if (div5) {
        out = "Buzz";
    }
    console.log(out);
}
