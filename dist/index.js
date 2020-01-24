"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFlatArray = makeFlatArray;

/**
 * makeFlatArray
 * Function that flattens arrays.
 * 
 * @param { array } array - The array that we want to flatten.
 * @param { number } depth - The depth of the flattening.
 */
function makeFlatArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var flattenArray = array;

  if (array.length > 0 && depth) {
    if (typeof depth === "number" && depth > 0) {
      if (depth === Infinity) {
        depth = 0;
        arr4.forEach(function each(item) {
          if (Array.isArray(item)) depth++, item.forEach(each);
        });
      }

      for (i = 0; i < depth; i++) {
        flattenArray = [].concat.apply([], flattenArray);
      }
    }
  }

  return flattenArray;
}