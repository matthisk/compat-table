function() {
    return typeof Array.prototype.copyWithin === 'function';
}

function() {
    return typeof Array.prototype.find === 'function';
}

function() {
    return typeof Array.prototype.findIndex === 'function';
}

function() {
    return typeof Array.prototype.fill === 'function';
}

function() {
    return typeof Array.prototype.keys === 'function';
}

function() {
    return typeof Array.prototype.values === 'function';
}

function() {
    return typeof Array.prototype.entries === 'function';
}

function() {
    var unscopables = Array.prototype[Symbol.unscopables];
    if (!unscopables) {
      return false;
    }
    var ns = "find,findIndex,fill,copyWithin,entries,keys,values".split(",");
    for (var i = 0; i < ns.length; i++) {
      if (Array.prototype[ns[i]] && !unscopables[ns[i]]) return false;
    }
    return true;
}

