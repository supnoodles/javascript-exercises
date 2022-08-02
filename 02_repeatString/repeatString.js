const repeatString = function (_str, times) {
    if (times == 0) {
        return ''
    } else if (times == -1) { 
        return 'ERROR'
    } else {
        return _str.repeat(times);
    }
};

// Do not edit below this line
module.exports = repeatString;
