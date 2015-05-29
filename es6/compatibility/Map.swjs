function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.has(key) && map.get(key) === 123;
}

function() {
    var key1 = {};
    var key2 = {};
    var map = new Map([[key1, 123], [key2, 456]]);

    return map.has(key1) && map.get(key1) === 123 &&
           map.has(key2) && map.get(key2) === 456;
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      new Map(iter);
    } catch(e){}
    return closed;
}

function() {
    var map = new Map();
    return map.set(0, 0) === map;
}

function() {
    var map = new Map();
    map.set(-0, "foo");
    var k;
    map.forEach(function (value, key) {
      k = 1 / key;
    });
    return k === Infinity && map.get(+0) == "foo";
}

function() {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    return map.size === 1;
}

function() {
    return typeof Map.prototype.delete === "function";
}

function() {
    return typeof Map.prototype.clear === "function";
}

function() {
    return typeof Map.prototype.forEach === "function";
}

function() {
    return typeof Map.prototype.keys === "function";
}

function() {
    return typeof Map.prototype.values === "function";
}

function() {
    return typeof Map.prototype.entries === "function";
}

