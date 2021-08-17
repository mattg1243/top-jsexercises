const repeatString = function(string, iterations) {
    
    let rstr = '';
    
    for (let i=0; i<iterations; i++) {
        rstr += string;
    }

    return rstr;
};

module.exports = repeatString;
