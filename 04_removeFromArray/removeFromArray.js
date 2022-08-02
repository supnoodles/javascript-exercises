const removeFromArray = function (arr, ...args) {

    let index;

    for (let i = 0; i < args.length; ++i) {
        index = arr.indexOf(args[i]);
        if (index != -1) {
            arr.splice(index, 1)
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


