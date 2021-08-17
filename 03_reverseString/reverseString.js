const reverseString = function(str) {

    let rlist = [];

    for (let i = 0; i<str.length; i++) {
        rlist.push(str[i]);
    }

    return rlist.reverse().join('');

};

module.exports = reverseString;
