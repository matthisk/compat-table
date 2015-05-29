function() {
    function * generator(){
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var generator = function * (){
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    function * generator(){
      yield this.x; yield this.y;
    };
    var iterator = { g: generator, x: 5, y: 6 }.g();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    function * generator(){
      yield this.x; yield this.y;
    };
    try {
      (new generator()).next();
    }
    catch (e) {
      return true;
    }
}

function() {
    var sent;
    function * generator(){
      sent = [yield 5, yield 6];
    };
    var iterator = generator();
    iterator.next();
    iterator.next("foo");
    iterator.next("bar");
    return sent[0] === "foo" && sent[1] === "bar";
}

function() {
    function * generatorFn(){}
    var ownProto = Object.getPrototypeOf(generatorFn());
    var passed = ownProto === generatorFn.prototype;

    var sharedProto = Object.getPrototypeOf(ownProto);
    passed &= sharedProto !== Object.prototype &&
      sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
      sharedProto.hasOwnProperty('next');

    return passed;
}

function() {
    var passed = false;
    function * generator(){
      try {
        yield 5; yield 6;
      } catch(e) {
        passed = (e === "foo");
      }
    };
    var iterator = generator();
    iterator.next();
    iterator.throw("foo");
    return passed;
}

function() {
    function * generator(){
      yield 5; yield 6;
    };
    var iterator = generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.return("quxquux");
    passed    &= item.value === "quxquux" && item.done === true;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var passed;
    function * generator(){
      passed = yield 0 ? true : false;
    };
    var iterator = generator();
    iterator.next();
    iterator.next(true);
    return passed;
}

function() {
    var iterator = (function * generator() {
      yield * [5, 6];
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var iterator = (function * generator() {
      yield * "56";
    }());
    var item = iterator.next();
    var passed = item.value === "5" && item.done === false;
    item = iterator.next();
    passed    &= item.value === "6" && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var iterator = (function * generator() {
      yield * "𠮷𠮶";
    }());
    var item = iterator.next();
    var passed = item.value === "𠮷" && item.done === false;
    item = iterator.next();
    passed    &= item.value === "𠮶" && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var iterator = (function * generator() {
      yield * global.__createIterableObject(5, 6, 7);
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var iterator = (function * generator() {
      yield * Object.create(__createIterableObject(5, 6, 7));
    }());
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 7 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var closed = '';
    var iter = __createIterableObject(1, 2, 3);
    iter['return'] = function(){
      closed += 'a';
      return {done: true};
    }
    var gen = (function* generator(){
      try {
        yield *iter;
      } finally {
        closed += 'b';
      }
    })();
    gen.next();
    gen['return']();
    return closed === 'ab';
}

function() {
    var closed = false;
    var iter = __createIterableObject(1, 2, 3);
    iter['throw'] = undefined;
    iter['return'] = function(){
      closed = true;
      return {done: true};
    }
    var gen = (function*(){
      try {
        yield *iter;
      } catch(e){}
    })();
    gen.next();
    gen['throw']();
    return closed;
}

function() {
    var o = {
      * generator() {
        yield 5; yield 6;
      },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var o = {
      * "foo bar"() {
        yield 5; yield 6;
      },
    };
    var iterator = o["foo bar"]();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var garply = "generator";
    var o = {
      * [garply] () {
        yield 5; yield 6;
      },
    };
    var iterator = o.generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    class C {
      * generator() {
        yield 5; yield 6;
      }
    };
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

function() {
    var garply = "generator";
    class C {
      * [garply] () {
        yield 5; yield 6;
      }
    }
    var iterator = new C().generator();
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
}

