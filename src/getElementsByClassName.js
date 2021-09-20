// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  var result = [];

  var innerfunction = function (node) {
    //if classname  === classname /push
    if (node.classList === undefined) {

    } else if (node.classList.value.includes(className)) {
      result.push(node);
      console.log(node.classList.value.includes(className));
    }
    //if has children loop
    if (node.hasChildNodes) {
      node.childNodes.forEach(function (item) {
        innerfunction(item);
      });
    }
  };
  innerfunction(document.body);
  return result;
};



// You should use document.body, element.childNodes, and element.classList

