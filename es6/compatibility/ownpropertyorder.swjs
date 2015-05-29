function() {
    var obj = {
      2:    true,
      0:    true,
      1:    true,
      ' ':  true,
      9:    true,
      D:    true,
      B:    true,
      '-1': true,
    };
    obj.A = true;
    obj[3] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;
    
    var result = '';
    for(var i in obj) {
      result += i;
    }
    return result === "012349 DB-1AC";
}

function() {
    var obj = {
      2:    true,
      0:    true,
      1:    true,
      ' ':  true,
      9:    true,
      D:    true,
      B:    true,
      '-1': true,
    };
    obj.A = true;
    obj[3] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;
    
    return Object.keys(obj).join('') === "012349 DB-1AC";
}

function() {
    var obj = {
      2:    true,
      0:    true,
      1:    true,
      ' ':  true,
      9:    true,
      D:    true,
      B:    true,
      '-1': true,
    };
    obj.A = true;
    obj[3] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;
    
    return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AC";
}

function() {
    function f(key) {
      return {
        get: function() { result += key; return true; },
        set: Object,
        enumerable: true
      };
    };
    var result = '';
    var obj = Object.defineProperties({}, {
      2:    f(2),
      0:    f(0),
      1:    f(1),
      ' ':  f(' '),
      9:    f(9),
      D:    f('D'),
      B:    f('B'),
      '-1': f('-1'),
    });
    Object.defineProperty(obj,'A',f('A')); 
    Object.defineProperty(obj,'3',f('3'));
    Object.defineProperty(obj,'C',f('C')); 
    Object.defineProperty(obj,'4',f('4'));
    delete obj[2];
    obj[2] = true;
    
    Object.assign({}, obj);
    
    return result === "012349 DB-1AC";
}

function() {
    var obj = {
      2:    true,
      0:    true,
      1:    true,
      ' ':  true,
      9:    true,
      D:    true,
      B:    true,
      '-1': true,
    };
    obj.A = true;
    obj[3] = true;
    Object.defineProperty(obj, 'C', { value: true, enumerable: true });
    Object.defineProperty(obj, '4', { value: true, enumerable: true });
    delete obj[2];
    obj[2] = true;
    
    return JSON.stringify(obj) ===
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}';
}

function() {
    var result = '';
    JSON.parse(
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"9":true," ":true,"D":true,"B":true,"-1":true,"A":true,"C":true}',
      function reviver(k,v) {
        result += k;
        return v;
      }
    );
    return result === "012349 DB-1AC";
}

