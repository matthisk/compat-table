function() {
    return (function (foo, ...args) {
      return args instanceof Array && args + "" === "bar,baz";
    }("foo", "bar", "baz"));
}

function() {
    return function(a, ...b){}.length === 1 && function(...c){}.length === 0;
}

function() {
    return (function (foo, ...args) {
      foo = "qux";
      // The arguments object is not mapped to the
      // parameters, even outside of strict mode.
      return arguments.length === 3
        && arguments[0] === "foo"
        && arguments[1] === "bar"
        && arguments[2] === "baz";
    }("foo", "bar", "baz"));
}

function() {
    return (function (...args) {
      try {
        eval("({set e(...args){}})");
      } catch(e) {
        return true;
      }
    }());
}

function() {
    return new Function("a", "...b",
      "return b instanceof Array && a+b === 'foobar,baz';"
    )('foo','bar','baz');
}

