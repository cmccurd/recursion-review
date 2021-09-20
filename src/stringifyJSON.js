// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create a result variable
  var result = '';
  console.log(obj);

  var innerFunction = function(element) {
    // base cases
    // boolean, number, null
    // string
    // undefined, function
    if (typeof element === 'boolean' || typeof element === 'number') {
      result += element;
      return;
    } else if (typeof element === 'string') {
      result += '"' + element + '"';
      return;
    } else if (typeof element === 'undefined' || typeof element === 'function') {
      result = '{';
      return;
    } else if (Array.isArray(element)) {
      result += '[';
      for (var i = 0; i < element.length; i++) {
        innerFunction(element[i]);
        if (i < element.length - 1) {
          result += ',';
        }
      }
    } else if (typeof element === 'object') {
      if (element === null) {
        result += 'null';
        return;
      } else {
        result += '{';
        var count = Object.keys(element).length;
        Object.keys(element).forEach(function(keys) {
          innerFunction(keys);
          result += ':';
          innerFunction(element[keys]);
          if (count !== 1) {
            result += ',';
          }
          count--;
        });
      }
    }

    // handle non-base cases (for objects and arrays)
    if (Array.isArray(element)) {
      result += ']';
      return;
    }
    if (typeof element === 'object') {
      result += '}';
      return;
    }
  };

  // invoke inner function passing obj
  innerFunction(obj);
  //return result variable
  console.log(result);
  return result;
};
