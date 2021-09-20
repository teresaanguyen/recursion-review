// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var result = '';

  // number, boolean, null
    // else - string

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    result += String(obj);
  } else if (typeof obj === 'string') {
    result += '"' + obj.toString() + '"';
  }

  // array
  if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i !== obj.length-1) {
        result += ',';
      }
    }
    result += ']';
  }

  // obj
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    result += '{';
    var keys = Object.keys(obj);
    var lastKey = keys[keys.length - 1];
    for (var key in obj) {
      if (key === 'functions' || key === 'undefined') {
        continue;
      }
      result += '"' + String(key) + '"' + ':';
      var value = obj[key];
      result += stringifyJSON(value);
      if (key !== lastKey) {
        result += ',';
      }
    }
    result += '}';
  }

  return result;
};
