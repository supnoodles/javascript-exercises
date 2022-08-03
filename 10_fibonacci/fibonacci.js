const fibonacci = function (x) {
    
    if (x <= 0) {
        return 'OOPS'
    }

    if (typeof x == "string") {
        x = Number(x);
    }

    if (x == 1 || x == 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    let c = 2;

    for (let i = 0; i < x - 2; ++i) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
