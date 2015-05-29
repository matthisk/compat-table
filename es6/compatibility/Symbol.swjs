function() {
    var object = {};
    var symbol = Symbol();
    var value = {};
    object[symbol] = value;
    return object[symbol] === value;
}

function() {
    return typeof Symbol() === "symbol";
}

function() {
    var object = {};
    var symbol = Symbol();
    object[symbol] = 1;

    for (var x in object){}
    var passed = !x;

    if (Object.keys && Object.getOwnPropertyNames) {
      passed &= Object.keys(object).length === 0
        && Object.getOwnPropertyNames(object).length === 0;
    }

    return passed;
}

function() {
    var object = {};
    var symbol = Symbol();
    var value = {};

    if (Object.defineProperty) {
      Object.defineProperty(object, symbol, { value: value });
      return object[symbol] === value;
    }

    return passed;
}

function() {
    var symbol = Symbol();

    try {
      symbol + "";
      return false;
    }
    catch(e) {}

    try {
      symbol + 0;
      return false;
    } catch(e) {}

    return true;
}

function() {
    return String(Symbol("foo")) === "Symbol(foo)";
}

function() {
    var symbol = Symbol();
    try {
      new Symbol();
    } catch(e) {
      return true;
    }
}

function() {
    var symbol = Symbol();
    var symbolObject = Object(symbol);

    return typeof symbolObject === "object" &&
      symbolObject == symbol &&
      symbolObject !== symbol &&
      symbolObject.valueOf() === symbol;
}

function() {
    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
       Symbol.keyFor(symbol) === 'foo';
}

