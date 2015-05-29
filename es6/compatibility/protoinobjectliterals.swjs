function() {
    return { __proto__ : [] } instanceof Array
      && !({ __proto__ : null } instanceof Object);
}

function() {
    try {
      eval("({ __proto__ : [], __proto__: {} })");
    }
    catch(e) {
      return true;
    }
}

function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var a = "__proto__";
    return !({ [a] : [] } instanceof Array);
}

function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    var __proto__ = [];
    return !({ __proto__ } instanceof Array);
}

function() {
    if (!({ __proto__ : [] } instanceof Array)) {
      return false;
    }
    return !({ __proto__(){} } instanceof Function);
}

