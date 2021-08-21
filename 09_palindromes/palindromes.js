const palindromes = function (str) {
   
    let strL = str.toLowerCase();
    let reversed = [];
    let strArr = Array.from(strL.split(''));
    let strArrCopy = strArr;
    let argLength = strArr.length;

    console.log(strArrCopy);

    for (let i = 0; i < argLength; i++) {
        let lastChar = strArrCopy.pop();
        if (lastChar.match(/^[0-9a-z]+$/)) {
            reversed.push(lastChar);
        }
    }

    console.log(reversed);
    console.log(strArr);
    
    for(let i = 0; i < argLength - 1; i++) {
        if (strArr[i] !== reversed[i]) {
            console.log('strArr[i] == ' + strArr[i] + '    reversed[i] == ' + reversed[i]);
            return false;
        }
    }
    
    return true;
};

console.log(palindromes('racecar'));
module.exports = palindromes;
