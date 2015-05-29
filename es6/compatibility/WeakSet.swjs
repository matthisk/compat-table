function() {
    var obj1 = {};
    var weakset = new WeakSet();

    weakset.add(obj1);
    weakset.add(obj1);

    return weakset.has(obj1);
}

function() {
    var obj1 = {}, obj2 = {};
    var weakset = new WeakSet([obj1, obj2]);

    return weakset.has(obj1) && weakset.has(obj2);
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      new WeakSet(iter);
    } catch(e){}
    return closed;
}

function() {
    var weakset = new WeakSet();
    var obj = {};
    return weakset.add(obj) === weakset;
}

function() {
    return typeof WeakSet.prototype.delete === "function";
}

