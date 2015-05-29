function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);

    return set.has(123);
}

function() {
    var obj1 = {};
    var obj2 = {};
    var set = new Set([obj1, obj2]);

    return set.has(obj1) && set.has(obj2);
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    var add = Set.prototype.add;
    Set.prototype.add = function(){ throw 0 };
    try {
      new Set(iter);
    } catch(e){}
    Set.prototype.add = add;
    return closed;
}

function() {
    var set = new Set();
    return set.add(0) === set;
}

function() {
    var set = new Set();
    set.add(-0);
    var k;
    set.forEach(function (value) {
      k = 1 / value;
    });
    return k === Infinity && set.has(+0);
}

function() {
    var obj = {};
    var set = new Set();

    set.add(123);
    set.add(123);
    set.add(456);

    return set.size === 2;
}

function() {
    return typeof Set.prototype.delete === "function";
}

function() {
    return typeof Set.prototype.clear === "function";
}

function() {
    return typeof Set.prototype.forEach === "function";
}

function() {
    return typeof Set.prototype.keys === "function";
}

function() {
    return typeof Set.prototype.values === "function";
}

function() {
    return typeof Set.prototype.entries === "function";
}

