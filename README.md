Package for flattening arrays. Alternative to .flat()
Compatible with ES5, ES6.

# Make array flat


### How to use
Install the component with npm OR yarn:
```
npm install @x3m/make-flat-array;
OR
yarn add @x3m/make-flat-array;
```

Import the makeFlatArray into your file:
```
import { makeFlattArray } from "@x3m/make-flat-array";
```

You can also require it, or simply add it in <script></script> tag.

Example usage:
```
makeFlatArray(array, depth);
depth - from 1 to Infinity (if set to Infinity, it will automatically determine how much times it is needed to produce fully flatten array)

makeFlatArray(['1','2',['3','4']], 1);
```

This package is alternative to the ES2019 .flat()
