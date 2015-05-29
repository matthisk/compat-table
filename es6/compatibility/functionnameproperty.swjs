function() {
    function foo(){};
    return foo.name === 'foo' &&
      (function(){}).name === '';
}

function() {
    return (function foo(){}).name === 'foo' &&
      (function(){}).name === '';
}

function() {
    return (new Function).name === "anonymous";
}

function() {
    function foo() {};
    return foo.bind({}).name === "bound foo" &&
      (function(){}).bind({}).name === "bound ";
}

function() {
    var foo = function() {};
    var bar = function baz() {};
    return foo.name === "foo" && bar.name === "baz";
}

function() {
    var o = { foo: function(){}, bar: function baz(){}};
    o.qux = function(){};
    return o.foo.name === "foo" &&
           o.bar.name === "baz" &&
           o.qux.name === "";
}

function() {
    var o = { get foo(){}, set foo(x){} };
    var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
    return descriptor.get.name === "get foo" &&
           descriptor.set.name === "set foo";
}

function() {
    var o = { foo(){} };
    return o.foo.name === "foo";
}

function() {
    var f = "foo";
    return ({f() { return f; }}).f() === "foo";
}

function() {
    var sym1 = Symbol("foo");
    var sym2 = Symbol();
    var o = {
      [sym1]: function(){},
      [sym2]: function(){}
    };

    return o[sym1].name === "[foo]" &&
           o[sym2].name === "";
}

function() {
    class foo {};
    class bar { static name() {} };
    return foo.name === "foo" &&
      typeof bar.name === "function";
}

function() {
    return class foo {}.name === "foo" &&
      typeof class bar { static name() {} }.name === "function";
}

function() {
    var foo = class {};
    var bar = class baz {};
    var qux = class { static name() {} };
    return foo.name === "foo" &&
           bar.name === "baz" &&
           typeof qux.name === "function";
}

function() {
    var o = { foo: class {}, bar: class baz {}};
    o.qux = class {};
    return o.foo.name === "foo" &&
           o.bar.name === "baz" &&
           o.qux.name === "";
}

function() {
    class C { foo(){} };
    return (new C).foo.name === "foo";
}

function() {
    class C { static foo(){} };
    return C.foo.name === "foo";
}

function() {
    var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
    return descriptor.enumerable   === false &&
           descriptor.writable     === false &&
           descriptor.configurable === true;
}

