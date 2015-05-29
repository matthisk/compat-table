function() {
    var A = function(){};
    return (new A()).__proto__ === A.prototype;
}

function() {
    var o = {};
    o.__proto__ = Array.prototype;
    return o instanceof Array;
}

function() {
    var o = Object.create(null), p = {};
    o.__proto__ = p;
    return Object.getPrototypeOf(o) !== p;
}

function() {
    return Object.prototype.hasOwnProperty('__proto__');
}

function() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
    var A = function(){};

    return (desc
      && "get" in desc
      && "set" in desc
      && desc.configurable
      && !desc.enumerable);
}

function() {
    return Object.getOwnPropertyNames(Object.prototype).indexOf('__proto__') > -1;
}

