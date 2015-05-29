function() {
    const foo = 123;
    return (foo === 123);
}

function() {
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

function() {
    const baz = 1;
    try {
      Function("const foo = 1; foo = 2;")();
    } catch(e) {
      return true;
    }
}

function() {
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    const qux = 456;
    return passed;
}

function() {
    "use strict";
    const foo = 123;
    return (foo === 123);
}

function() {
    'use strict';
    const bar = 123;
    { const bar = 456; }
    return bar === 123;
}

function() {
    'use strict';
    const baz = 1;
    try {
      Function("'use strict'; const foo = 1; foo = 2;")();
    } catch(e) {
      return true;
    }
}

function() {
    'use strict';
    var passed = (function(){ try { qux; } catch(e) { return true; }}());
    const qux = 456;
    return passed;
}

