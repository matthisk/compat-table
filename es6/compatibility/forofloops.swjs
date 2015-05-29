function() {
    var arr = [5];
    for (var item of arr)
      return item === 5;
}

function() {
    var str = "";
    for (var item of "foo")
      str += item;
    return str === "foo";
}

function() {
    var str = "";
    for (var item of "𠮷𠮶")
      str += item + " ";
    return str === "𠮷 𠮶 ";
}

function() {
    var result = "";
    var iterable = global.__createIterableObject(1, 2, 3);
    for (var item of iterable) {
      result += item;
    }
    return result === "123";
}

function() {
    var result = "";
    var iterable = global.__createIterableObject(1, 2, 3);
    for (var item of Object.create(iterable)) {
      result += item;
    }
    return result === "123";
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    for (var it of iter) break;
    return closed;
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    try {
      for (var it of iter) throw 0;
    } catch(e){}
    return closed;
}

