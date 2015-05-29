function() {
    return Object.getPrototypeOf('a').constructor === String;
}

function() {
    return Object.getOwnPropertyDescriptor('a', 'foo') === undefined;
}

function() {
    var s = Object.getOwnPropertyNames('a');
    return s.length === 2 &&
      ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
}

function() {
    return Object.seal('a') === 'a';
}

function() {
    return Object.freeze('a') === 'a';
}

function() {
    return Object.preventExtensions('a') === 'a';
}

function() {
    return Object.isSealed('a') === true;
}

function() {
    return Object.isFrozen('a') === true;
}

function() {
    return Object.isExtensible('a') === false;
}

function() {
    var s = Object.keys('a');
    return s.length === 1 && s[0] === '0';
}

