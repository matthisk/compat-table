function() {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar";
}

function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Array.from(iterable) + '' === "1,2,3";
}

function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Array.from(Object.create(iterable)) + '' === "1,2,3";
}

function() {
    return Array.from({ 0: "foo", 1: "bar", length: 2 }, function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1";
}

function() {
    var iterable = global.__createIterableObject("foo", "bar", "bal");
    return Array.from(iterable, function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
}

function() {
    var iterable = global.__createIterableObject("foo", "bar", "bal");
    return Array.from(Object.create(iterable), function(e, i) {
      return e + this.baz + i;
    }, { baz: "d" }) + '' === "food0,bard1,bald2";
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      Array.from(iter, function() { throw 42 });
    } catch(e){}
    return closed;
}

function() {
    return typeof Array.of === 'function' &&
      Array.of(2)[0] === 2;
}

