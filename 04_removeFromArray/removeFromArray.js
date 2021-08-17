const removeFromArray = function(arr, bval) {

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === bval) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

module.exports = removeFromArray;
