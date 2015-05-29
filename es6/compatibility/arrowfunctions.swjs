function() {
    return (() => 5)() === 5;
}

function() {
    var b = x => x + "foo";
    return (b("fee fie foe ") === "fee fie foe foo");
}

function() {
    var c = (v, w, x, y, z) => "" + v + w + x + y + z;
    return (c(6, 5, 4, 3, 2) === "65432");
}

function() {
    var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
    var e = { x : "baz", y : d };
    return d("ley") === "barley" && e.y("ley") === "barley";
}

function() {
    var d = { x : "foo", y : function() { return () => this.x; }};
    var e = { x : "bar" };
    return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
}

function() {
    var d = { x : "bar", y : function() { return z => this.x + z; }};
    var e = { x : "baz" };
    return d.y().bind(e, "ley")() === "barley";
}

function() {
    var f = (function() { return z => arguments[0]; }(5));
    return f(6) === 5;
}

function() {
    return (() => {
      try { Function("x\n => 2")(); } catch(e) { return true; }
    })();
}

function() {
    var a = () => 5;
    return !a.hasOwnProperty("prototype");
}

function() {
    class B {
      qux() {
        return "quux";
      }
    }
    class C extends B {
      baz() {
        return x => super.qux();
      }
    }
    var arrow = new C().baz();
    return arrow() === "quux";
}

function() {
    function C() {
      return x => new.target;
    }
    return new C()() === C && C()() === undefined;
}

