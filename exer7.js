function finalFunction(num) {
    let arr = [];

    while(num > arr.length) {
        arr.push('hello');
    };

    return arr;
};

console.log(finalFunction(0))