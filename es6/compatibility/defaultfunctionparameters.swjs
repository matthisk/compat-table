function() {
    return (function (a = 1, b = 2) { return a === 3 && b === 2; }(3));
}

function() {
    return (function (a = 1, b = 2) { return a === 1 && b === 3; }(undefined, 3));
}

function() {
    return (function (a, b = a) { return b === 5; }(5));
}

function() {
    return (function(x = 1) {
      try {
        eval("(function(a=a){}())");
        return false;
      } catch(e) {}
      try {
        eval("(function(a=b,b){}())");
        return false;
      } catch(e) {}
      return true;
    }());
}

function() {
    return (function(a=function(){
      return typeof b === 'undefined';
    }){
      var b = 1;
      return a();
    }());
}

function() {
    return new Function("a = 1", "b = 2",
      "return a === 3 && b === 2;"
    )(3);
}

