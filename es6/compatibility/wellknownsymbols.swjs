function() {
    var passed = false;
    var obj = { foo: true };
    var C = function(){};
    Object.defineProperty(C, Symbol.hasInstance, {
      value: function(inst) { passed = inst.foo; return false; }
    });
    obj instanceof C;
    return passed;
}

function() {
    var a = [], b = [];
    b[Symbol.isConcatSpreadable] = false;
    a = a.concat(b);
    return a[0] === b;
}

function() {
    var a = 0, b = {};
    b[Symbol.iterator] = function() {
      return {
        next: function() {
          return {
            done: a++ === 1,
            value: "foo"
          };
        }
      };
    };
    var c;
    for (c of b) {}
    return c === "foo";
}

function() {
    return RegExp[Symbol.species] === RegExp
      && Array[Symbol.species] === Array
      && !(Symbol.species in Object);
}

function() {
    var a = {}, b = {}, c = {};
    var passed = 0;
    a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
    b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
    c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };

    a >= 0;
    b in {};
    c == 0;
    return passed === 3;
}

function() {
    var a = {};
    a[Symbol.toStringTag] = "foo";
    return (a + "") === "[object foo]";
}

function() {
    var a = { foo: 1, bar: 2 };
    a[Symbol.unscopables] = { bar: true };
    with (a) {
      return foo === 1 && typeof bar === "undefined";
    }
}

