const sumAll = function(min, max) {

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
