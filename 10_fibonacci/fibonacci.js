const fibonacci = function(arg) {
    
    let fib = [];

    if (arg < 0) {
        return 'OOPS';
    }

    if (typeof arg === 'string') {
        intArg = parseInt(arg, 10);
    }

    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= arg; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
    
    return fib[arg];
};

module.exports = fibonacci;
