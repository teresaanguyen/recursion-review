// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//node.childNodes ---- element.classList --- document.body

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var innerFunction = function(element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element);
    }
    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        innerFunction(element.childNodes[i]);
      }
    }
  };
  innerFunction(document.body);
  return results;
};