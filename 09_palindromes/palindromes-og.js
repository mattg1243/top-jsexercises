const palindromes = function (str) {
    
    let ogStr = str;
    let strRev = str.toLowerCase();
    strRev.reverse;
    //let reversed = strL.reverse;
    let strRevArr = Array.from(strRev.split(''));
    let argLength = strRevArr.length;

    /*
    for (let i = argLength - 1; i >= 0; i--) {
        let lastChar = strArr[i];
        if (lastChar.match(/^[0-9a-z]+$/) || lastChar.match(" ")) {
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
    
    return true;*/

    console.log(strRevArr.reverse);
    console.log(strRevArr);
    
    for(let i = 0; i < argLength - 1; i++) {
        if (strRevArr[i] !== strRevArr.reverse[i]) {
            console.log('strArr[i] == ' + strRevArr[i] + '    reversed[i] == ' + strRevArr.reverse[i]);
            return false;
        }
    }
    
    return true;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));
module.exports = palindromes;
