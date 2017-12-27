This repository bundles [expression-eval](https://github.com/donmccurdy/expression-eval) and [jsep](https://github.com/soney/jsep) to a single file. You can find the bundle under `dist/` folder.

Usage:

```js
const render = expressionEval.compile("[a + 1, b.slice(-2), c.toUpperCase()]");
render({a: 1, b: "foo", c: "bar"});
// [ 2, "oo", "BAR" ]
```m

[Live demo](https://jsbin.com/wokulacatu/edit?js,console)
