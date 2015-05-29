function() {
    var x = 'y';
    return ({ [x]: 1 }).y === 1;
}

function() {
    var a = 7, b = 8, c = {a,b};
    return c.a === 7 && c.b === 8;
}

function() {
    return ({ y() { return 2; } }).y() === 2;
}

function() {
    return ({ "foo bar"() { return 4; } })["foo bar"]() === 4;
}

function() {
    var x = 'y';
    return ({ [x](){ return 1 } }).y() === 1;
}

function() {
    var x = 'y',
        valueSet,
        obj = {
          get [x] () { return 1 },
          set [x] (value) { valueSet = value }
        };
    obj.y = 'foo';
    return obj.y === 1 && valueSet === 'foo';
}

