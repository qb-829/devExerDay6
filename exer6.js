function lvl6exercise1 (num) {
    if(num === 1){
        return 'hello';
    }
    else if(num === 3){
        return 'world';
    }
    else {
        return 'bye';
    };
};

console.log(lvl6exercise1(3));

function lvl6exercise2 () {
    let arr = [];
    for (let i = 0; i < 18; i++) {
        arr.push('hello');
    };
    return arr
};

console.log(lvl6exercise2());

function lvl6exercise3 () {
    let arr = [
        'hello', 'hello',
        'hello', 'hello',
        'hello', 'hello',
        'hello', 'hello',
        'hello', 'hello'
      ];
    while(arr.length > 1) {
        arr.pop();
    };
    return arr;
};

console.log('arr = ', lvl6exercise3());