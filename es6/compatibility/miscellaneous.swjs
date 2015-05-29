function() {
    var \u0061;
    try {
      eval('var v\\u0061r');
    } catch(e) {
      return true;
    }
}

function() {
    'use strict';
    return this === undefined && ({ a:1, a:1 }).a === 1;
}

function() {
    do {} while (false) return true;
}

function() {
    try {
      eval('for (var i = 0 in {}) {}');
    }
    catch(e) {
      return true;
    }
}

function() {
    try {
      new (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;
    } catch(e) {
      return true;
    }
}

function() {
    return new Date(NaN) + "" === "Invalid Date";
}

function() {
    return new RegExp(/./im, "g").global === true;
}

function() {
    try {
      Boolean.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      Number.prototype.valueOf(); return false;
    } catch(e) {}
    try {
      String.prototype.toString(); return false;
    } catch(e) {}
    try {
      RegExp.prototype.source; return false;
    } catch(e) {}
    try {
      Date.prototype.valueOf(); return false;
    } catch(e) {}
    return true;
}

