/**
 * makeFlatArray
 * Function that flattens arrays.
 * 
 * @param { array } array - The array that we want to flatten.
 * @param { number } depth - The depth of the flattening.
 */

export function makeFlatArray(array = [], depth = 1) {
  let flattenArray = array;
  if (array.length > 0 && depth) {
    if (typeof depth === "number" && depth > 0) {
      if (depth === Infinity) {
        depth = 0;
        array.forEach(function each(item) {
          if (Array.isArray(item))
            depth++,
            item.forEach(each);
        });
      }
      for (i = 0; i < depth; i++) {
        flattenArray = [].concat.apply([], flattenArray);
      }
    }
  }

  return flattenArray;
}
