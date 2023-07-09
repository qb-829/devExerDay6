function lvl4exercise1 () {
    return true;
};

console.log(lvl4exercise1());

function lvl4exercise2 () {
    return false;
};

console.log(lvl4exercise2());

function lvl4exercise3 (bool) {
    return !bool;
};

console.log(lvl4exercise3(false));

function lvl4exercise4 (bool1, bool2) {
    if(bool1 && bool2){
        return true
    }
    else {
        return false
    };
};

console.log(lvl4exercise4(true, true));
console.log(lvl4exercise4(false, false));
console.log(lvl4exercise4(false, true));

function lvl4exercise5 (bool1, bool2) {
    if(bool1 || bool2){
        return true
    }
    else {
        return false
    };
};

console.log(lvl4exercise5(false, false));
console.log(lvl4exercise5(false, true));
console.log(lvl4exercise5(true, true));