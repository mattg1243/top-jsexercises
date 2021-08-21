const palindromes = function (str) {
    
    // remove punctuation, change to all lowercase
    let strAlpha = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let argArr = Array.from(strAlpha);
    let argLength = argArr.length;
    let revArr = argArr.map(x => x);
    revArr.reverse();
    
    for (i = 0; i < argLength; i++)  { 
        if (argArr[i] !== revArr[i]) {
            return false;
        }
    }

    return true;
};

module.exports = palindromes;
