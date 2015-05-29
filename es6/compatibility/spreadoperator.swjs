function() {
    return Math.max(...[1, 2, 3]) === 3
}

function() {
   return [...[1, 2, 3]][2] === 3;
}

function() {
   return Math.max(..."1234") === 4;
}

function() {
   return ["a", ..."bcd", "e"][3] === "d";
}

function() {
   return Array(..."𠮷𠮶")[0] === "𠮷";
}

function() {
   return [..."𠮷𠮶"][0] === "𠮷";
}

function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Math.max(...iterable) === 3;
}

function() {
    var iterable = global.__createIterableObject("b", "c", "d");
    return ["a", ...iterable, "e"][3] === "d";
}

function() {
    var iterable = global.__createIterableObject(1, 2, 3);
    return Math.max(...Object.create(iterable)) === 3;
}

function() {
    var iterable = global.__createIterableObject("b", "c", "d");
    return ["a", ...Object.create(iterable), "e"][3] === "d";
}

