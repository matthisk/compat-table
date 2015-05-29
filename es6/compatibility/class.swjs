function() {
    class C {}
    return typeof C === "function";
}

function() {
    class C {}
    var c1 = C;
    {
      class C {}
      var c2 = C;
    }
    return C === c1;
}

function() {
    return typeof class C {} === "function";
}

function() {
    return typeof class {} === "function";
}

function() {
    class C {
      constructor() { this.x = 1; }
    }
    return C.prototype.constructor === C
      && new C().x === 1;
}

function() {
    class C {
      method() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
}

function() {
    class C {
      "foo bar"() { return 2; }
    }
    return typeof C.prototype["foo bar"] === "function"
      && new C()["foo bar"]() === 2;
}

function() {
    var foo = "method";
    class C {
      [foo]() { return 2; }
    }
    return typeof C.prototype.method === "function"
      && new C().method() === 2;
}

function() {
    class C {
      static method() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
}

function() {
    var foo = "method";
    class C {
      static [foo]() { return 3; }
    }
    return typeof C.method === "function"
      && C.method() === 3;
}

function() {
    var baz = false;
    class C {
      get foo() { return "foo"; }
      set bar(x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}

function() {
    var garply = "foo", grault = "bar", baz = false;
    class C {
      get [garply]() { return "foo"; }
      set [grault](x) { baz = x; }
    }
    new C().bar = true;
    return new C().foo === "foo" && baz;
}

function() {
    var baz = false;
    class C {
      static get foo() { return "foo"; }
      static set bar(x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}

function() {
    var garply = "foo", grault = "bar", baz = false;
    class C {
      static get [garply]() { return "foo"; }
      static set [grault](x) { baz = x; }
    }
    C.bar = true;
    return C.foo === "foo" && baz;
}

function() {
    class C {
      method() { return typeof C === "function"; }
    }
    var M = C.prototype.method;
    C = undefined;
    return C === undefined && M();
}

function() {
    try {
      var B = class C {
        [C](){}
      }
    } catch(e) {
      return true;
    }
}

function() {
    class C {
      foo() {}
      static bar() {}
    }
    return !C.prototype.propertyIsEnumerable("foo") && !C.propertyIsEnumerable("bar");
}

function() {
    class C {
      static method() { return this === undefined; }
    }
    return (0,C.method)();
}

function() {
    class C {}
    try {
      C();
    }
    catch(e) {
      return true;
    }
}

function() {
    class B {}
    class C extends B {}
    return new C() instanceof B
      && B.isPrototypeOf(C)
      && B.prototype.isPrototypeOf(C.prototype);
}

function() {
    var B;
    class C extends (B = class {}) {}
    return new C() instanceof B
      && B.isPrototypeOf(C)
      && B.prototype.isPrototypeOf(C.prototype);
}

function() {
    class C extends null {
      constructor() { return Object.create(null); }
    }
    var c = new C();
    return !(c instanceof Object)
      && Function.prototype.isPrototypeOf(C)
      && Object.getPrototypeOf(C.prototype) === null;
}

function() {
    var passed = false;
    class A {
      constructor() {
        passed = new.target === B;
      }
    }
    class B extends A {}
    new B();
    (function() {
      passed &= new.target === undefined;
    }());
    return passed;
}

