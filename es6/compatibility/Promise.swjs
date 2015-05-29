function() {
    var p1 = new Promise(function(resolve, reject) { resolve("foo"); });
    var p2 = new Promise(function(resolve, reject) { reject("quux"); });
    var score = 0;

    function thenFn(result)  { score += (result === "foo");  check(); }
    function catchFn(result) { score += (result === "quux"); check(); }
    function shouldNotRun(result)  { score = -Infinity;   }

    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);

    p1.then(function() {
      // Promise.prototype.then() should return a new Promise
      score += p1.then() !== p1;
      check();
    });

    function check() {
      if (score === 4) asyncTestPassed();
    }
}

function() {
    var fulfills = Promise.all([
      new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
      new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
    ]);
    var rejects = Promise.all([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
    ]);
    var score = 0;
    fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
    rejects.catch(function(result) { score += (result === "qux"); check(); });

    function check() {
      if (score === 2) asyncTestPassed();
    }
}

function() {
    var fulfills = Promise.race([
      new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
      new Promise(function(_, reject) { setTimeout(reject, 300,"bar"); }),
    ]);
    var rejects = Promise.race([
      new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
      new Promise(function(resolve)   { setTimeout(resolve,300,"qux"); }),
    ]);
    var score = 0;
    fulfills.then(function(result) { score += (result === "foo"); check(); });
    rejects.catch(function(result) { score += (result === "baz"); check(); });

    function check() {
      if (score === 2) asyncTestPassed();
    }
}

