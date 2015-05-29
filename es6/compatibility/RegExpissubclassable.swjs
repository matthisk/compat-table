function() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.global && r.source === "baz";
}

function() {
    class R extends RegExp {}
    var r = new R("baz","g");
    return r.exec("foobarbaz")[0] === "baz" && r.lastIndex === 9;
}

function() {
    class R extends RegExp {}
    var r = new R("baz");
    return r.test("foobarbaz");
}

