const palindromes = function (str) {
   
    let strL = str.toLowerCase();
    let reversed = [];
    let strArr = Array.from(strL.split(''));
    let argLength = strArr.length;


    for (let i = argLength - 1; i >= 0; i--) {
        let lastChar = strArr[i];
        if (lastChar.match(/^[0-9a-z]+$/) || lastChar == "") {
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
