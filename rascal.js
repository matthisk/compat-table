var fs = require('fs');
var es6 = require('./data-es6');

var tests = es6.tests;

function insertQuote( lines ) {
  lines = lines.slice(1,-1);
  var firstLine = lines[0];
  var whitespace = lines[0].match(/[\t\s]*/g)[0];

  lines = lines.map(function(l) {
    return l.replace(whitespace, whitespace + "\'");
  });
  
  lines.unshift(whitespace + '\'' + "(function() {" );
  lines.push(whitespace + '\'' + "})();");

  return lines;
}

function unCommentTest( t ) { return t.exec.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1]; }

function makeLegalString( s ) {
  return s.replace(/("|'|>|<|\\)/g, function( $0 ) { return "\\" + $0; } );
}
function extractTest( t ) {
  lines = makeLegalString( unCommentTest(t) ).split('\n').map(function(l){ return '\t\t' + l; });
  return insertQuote( lines ).join('\n');
}

function createTest( name, t ) {
  return "\t\t\\it( \"" + makeLegalString( name ) + "\", tryRunning(\n\t\t\t\t\"\n"+extractTest( t )+"\"\n\t\t)),\n";
}

function makeLegalFunctionName( n ) {
  return n.replace(/\s|\./g,'').replace(/\([^\)]*\)/,'').replace(/["'><\\\-_+=:;{}]/g, '');
}

function makeRascalSpec() {
  var output = "module \\test::Compatibility\n";  
  output += "extend \\test::CompatibilityBase;\n\n"

  tests.forEach(function( t, testNum ) {
    output += "test bool " + makeLegalFunctionName( t.name ) + "() {\n"; 
    output += "\treturn\n";
    output += "\tdescribe(\""+ makeLegalString( t.name ) +"\", [\n";
    if( "subtests" in t ) {
      Object.keys(t.subtests).forEach(function(e) {
        output += createTest( e, t.subtests[e] );
      });
    } else {
      output += createTest( t.name, t );
    }
    output = output.slice(0,-2) + '\n';

    output += "\t]);\n";
    output += "}\n";

  });

  fs.writeFile("./es6/Compatibility.rsc", output, function(err) {
    if( err ) {
      return console.log(err);
    }

    console.log("Compatibility tests print to ./es6/Compatibility.rsc");
  });
}

function makeSweeterJS() {
  function removeWhiteSpace(s) {
    return s.slice(4,Infinity);
  }

  function createTest( t ) {
    return 'function() {' + unCommentTest(t).split('\n').map(removeWhiteSpace).join('\n').slice(0,-2) + '}';
  }

  function createTestFile( t, testNum ) {
    var output = "",
        fileName = makeLegalFunctionName(t.name);

    if( "subtests" in t ) {
      Object.keys(t.subtests).forEach(function(n) {
        output += createTest(t.subtests[n]) + '\n\n';
      });
    } else {
      output += createTest(t) + '\n\n'; 
    }

    fs.writeFile("./es6/compatibility/" + fileName + ".swjs", output, function(err) {
      if( err ) { return console.log("failed to export sweeter js tests:\n",err); }
      console.log("Saved: " + fileName);
      console.log(output);
    }); 
  }

  tests.forEach( createTestFile );
}

makeSweeterJS();

module.exports = {
  sweeterJSTests : makeSweeterJS,
  rascalSpec : makeRascalSpec
};
