function() {
    class C extends Function {}
    var c = new C("return 'foo';");
    return c() === 'foo';
}

function() {
    class C extends Function {}
    var c = new C("this.bar = 2;");
    c.prototype.baz = 3;
    return new c().bar === 2 && new c().baz === 3;
}

function() {
    class C extends Function {}
    var c = new C("x", "return this.bar + x;");
    return c.call({bar:1}, 2) === 3;
}

function() {
    class C extends Function {}
    var c = new C("x", "return this.bar + x;");
    return c.apply({bar:1}, [2]) === 3;
}

function() {
    class C extends Function {}
    var c = new C("x", "y", "return this.bar + x + y;").bind({bar:1}, 2);
    return c(6) === 9 && c instanceof C;
}

