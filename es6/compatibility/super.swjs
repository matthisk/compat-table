function() {
    var passed = false;
    class B {
      constructor(a) { passed = (a === "barbaz"); }
    }
    class C extends B {
      constructor(a) { super("bar" + a); }
    }
    new C("baz");
    return passed;
}

function() {
    class B {
      constructor(a) { return ["foo" + a]; }
    }
    class C extends B {
      constructor(a) { return super("bar" + a); }
    }
    return new C("baz")[0] === "foobarbaz";
}

function() {
    class B {}
    B.prototype.qux = "foo";
    B.prototype.corge = "baz";
    class C extends B {
      quux(a) { return super.qux + a + super["corge"]; }
    }
    C.prototype.qux = "garply";
    return new C().quux("bar") === "foobarbaz";
}

function() {
    class B {
      qux(a) { return "foo" + a; }
    }
    class C extends B {
      qux(a) { return super.qux("bar" + a); }
    }
    return new C().qux("baz") === "foobarbaz";
}

function() {
    class B {
      qux(a) { return this.foo + a; }
    }
    class C extends B {
      qux(a) { return super.qux("bar" + a); }
    }
    var obj = new C();
    obj.foo = "foo";
    return obj.qux("baz") === "foobarbaz";
}

function() {
    class B {
      qux() { return "bar"; }
    }
    class C extends B {
      qux() { return super.qux() + this.corge; }
    }
    var obj = {
      qux: C.prototype.qux,
      corge: "ley"
    };
    return obj.qux() === "barley";
}

