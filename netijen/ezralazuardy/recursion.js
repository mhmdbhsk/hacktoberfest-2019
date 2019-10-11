let number = 4;

console.log(factorial(number));

function factorial(n) {
    if(n == 0) return 1;
    return n * factorial(n - 1);
}
