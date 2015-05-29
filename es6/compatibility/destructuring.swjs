function() {
    var [a, , [b], c] = [5, null, [6]];
    var d, e;
    [d,e] = [7,8];
    return a === 5 && b === 6 && c === undefined
      && d === 7 && e === 8;
}

function() {
    var [a, b, c] = "ab";
    var d, e;
    [d,e] = "de";
    return a === "a" && b === "b" && c === undefined
      && d === "d" && e === "e";
}

function() {
    var c;
    [c] = "𠮷𠮶";
    return c === "𠮷";
}

function() {
    var [a, b, c] = global.__createIterableObject(1, 2);
    var d, e;
    [d, e] = global.__createIterableObject(3, 4);
    return a === 1 && b === 2 && c === undefined
      && d === 3 && e === 4;
}

function() {
    var [a, b, c] = Object.create(global.__createIterableObject(1, 2))
    var d, e;
    [d, e] = Object.create(global.__createIterableObject(3, 4));
    return a === 1 && b === 2 && c === undefined
      && d === 3 && e === 4;
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){ closed = true; return {}; }
    var [a, b] = iter;
    return closed;
}

function() {
    var a, b, iterable = [1,2];
    return ([a, b] = iterable) === iterable;
}

function() {
    var a,b,c,d;
    [a,b] = [c,d] = [1,2];
    return a === 1 && b === 2 && c === 1 && d === 2;
}

function() {
    var [a,] = [1];
    return a === 1;
}

function() {
    var {c, x:d, e} = {c:7, x:8};
    var f, g;
    ({f,g} = {f:9,g:10});
    return c === 7 && d === 8 && e === undefined
      && f === 9 && g === 10;
}

function() {
    var {toFixed} = 2;
    var {slice} = '';
    var toString, match;
    ({toString} = 2);
    ({match} = '');
    return toFixed === Number.prototype.toFixed
      && toString === Number.prototype.toString
      && slice === String.prototype.slice
      && match === String.prototype.match;
}

function() {
    var {a,} = {a:1};
    return a === 1;
}

function() {
    var a, b, obj = { a:1, b:2 };
    return ({a,b} = obj) === obj;
}

function() {
    var a,b,c,d;
    ({a,b} = {c,d} = {a:1,b:2,c:3,d:4});
    return a === 1 && b === 2 && c === 3 && d === 4;
}

function() {
    try {
      var {a} = null;
      return false;
    } catch(e) {}
    try {
      var {b} = undefined;
      return false;
    } catch(e) {}
    return true;
}

function() {
    var qux = "corge";
    var { [qux]: grault } = { corge: "garply" };
    return grault === "garply";
}

function() {
    var [a,b] = [5,6], {c,d} = {c:7,d:8};
    return a === 5 && b === 6 && c === 7 && d === 8;
}

function() {
    var [e, {x:f, g}] = [9, {x:10}];
    var {h, x:[i]} = {h:11, x:[12]};
    return e === 9 && f === 10 && g === undefined
      && h === 11 && i === 12;
}

function() {
    return (function({a, x:b, y:e}, [c, d]) {
      return a === 1 && b === 2 && c === 3 &&
        d === 4 && e === undefined;
    }({a:1, x:2}, [3, 4]));
}

function() {
    return new Function("{a, x:b, y:e}","[c, d]",
      "return a === 1 && b === 2 && c === 3 && "
      + "d === 4 && e === undefined;"
    )({a:1, x:2}, [3, 4]);
}

function() {
    return function({a, b}, [c, d]){}.length === 2;
}

function() {
    for(var [i, j, k] in { qux: 1 }) {
      return i === "q" && j === "u" && k === "x";
    }
}

function() {
    for(var [i, j, k] of [[1,2,3]]) {
      return i === 1 && j === 2 && k === 3;
    }
}

function() {
    var [a, ...b] = [3, 4, 5];
    var [c, ...d] = [6];
    return a === 3 && b instanceof Array && (b + "") === "4,5" &&
       c === 6 && d instanceof Array && d.length === 0;
}

function() {
    var a = [1, 2, 3], first, last;
    [first, ...[a[2], last]] = a;
    return first === 1 && last === 3 && (a + "") === "1,2,2";
}

function() {
    var {a = 1, b = 0, c = 3} = {b:2, c:undefined};
    return a === 1 && b === 2 && c === 3;
}

function() {
    return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}) {
      return a === 1 && b === 2 && c === 3 && d === 4 &&
        e === 5 && f === undefined;
    }({b:2, c:undefined, x:4}));
}

function() {
    var {a, b = 2} = {a:1};
    try {
      eval("let {c = c} = {};");
      return false;
    } catch(e){}
    try {
      eval("let {c = d, d} = {d:1};");
      return false;
    } catch(e){}
    return a === 1 && b === 2;
}

function() {
    return (function({a=function(){
      return typeof b === 'undefined';
    }}){
      var b = 1;
      return a();
    }({}));
}

function() {
    return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5, z:f}",
      "return a === 1 && b === 2 && c === 3 && d === 4 && "
      + "e === 5 && f === undefined;"
    )({b:2, c:undefined, x:4});
}

