function() {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (typeof String.prototype[names[i]] !== 'function') {
        return false;
      }
    }
    return true;
}

function() {
    var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
      "italics", "link", "small", "strike", "sub", "sup"];
    for (i = 0; i < names.length; i++) {
      if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
        return false;
      }
    }
    return true;
}

function() {
    var i, names = ["anchor", "fontcolor", "fontsize", "link"];
    for (i = 0; i < names.length; i++) {
      if (""[names[i]]('"') !== ""[names[i]]('&' + 'quot;')) {
        return false;
      }
    }
    return true;
}

