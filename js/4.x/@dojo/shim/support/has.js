//>>built
(function(c){"object"===typeof module&&"object"===typeof module.exports?(c=c(require,exports),void 0!==c&&(module.exports=c)):"function"===typeof define&&define.amd&&define("require exports tslib @dojo/has/has ../global @dojo/has/has".split(" "),c)})(function(c,e){Object.defineProperty(e,"__esModule",{value:!0});var f=c("tslib"),a=c("@dojo/has/has"),b=c("../global");e.default=a.default;f.__exportStar(c("@dojo/has/has"),e);a.add("es6-array",function(){return["from","of"].every(function(a){return a in
b.default.Array})&&["findIndex","find","copyWithin"].every(function(a){return a in b.default.Array.prototype})},!0);a.add("es6-array-fill",function(){return"fill"in b.default.Array.prototype?1===[1].fill(9,Number.POSITIVE_INFINITY)[0]:!1},!0);a.add("es7-array",function(){return"includes"in b.default.Array.prototype},!0);a.add("es6-map",function(){if("function"===typeof b.default.Map)try{var d=new b.default.Map([[0,1]]);return d.has(0)&&"function"===typeof d.keys&&a.default("es6-symbol")&&"function"===
typeof d.values&&"function"===typeof d.entries}catch(h){}return!1},!0);a.add("es6-math",function(){return"clz32 sign log10 log2 log1p expm1 cosh sinh tanh acosh asinh atanh trunc fround cbrt hypot".split(" ").every(function(a){return"function"===typeof b.default.Math[a]})},!0);a.add("es6-math-imul",function(){return"imul"in b.default.Math?-5===Math.imul(4294967295,5):!1},!0);a.add("es6-object",function(){return a.default("es6-symbol")&&["assign","is","getOwnPropertySymbols","setPrototypeOf"].every(function(a){return"function"===
typeof b.default.Object[a]})},!0);a.add("es2017-object",function(){return["values","entries","getOwnPropertyDescriptors"].every(function(a){return"function"===typeof b.default.Object[a]})},!0);a.add("es-observable",function(){return"undefined"!==typeof b.default.Observable},!0);a.add("es6-promise",function(){return"undefined"!==typeof b.default.Promise&&a.default("es6-symbol")},!0);a.add("es6-set",function(){if("function"===typeof b.default.Set){var d=new b.default.Set([1]);return d.has(1)&&"keys"in
d&&"function"===typeof d.keys&&a.default("es6-symbol")}return!1},!0);a.add("es6-string",function(){return["fromCodePoint"].every(function(a){return"function"===typeof b.default.String[a]})&&"codePointAt normalize repeat startsWith endsWith includes".split(" ").every(function(a){return"function"===typeof b.default.String.prototype[a]})},!0);a.add("es6-string-raw",function(){function a(a){for(var b=1;b<arguments.length;b++);b=f.__spread(a);b.raw=a.raw;return b}if("raw"in b.default.String){var c=a(g||
(g=f.__makeTemplateObject(["a\n",""],["a\\n",""])),1);c.raw=["a\\n"];return"a:\\n"===b.default.String.raw(c,42)}return!1},!0);a.add("es2017-string",function(){return["padStart","padEnd"].every(function(a){return"function"===typeof b.default.String.prototype[a]})},!0);a.add("es6-symbol",function(){return"undefined"!==typeof b.default.Symbol&&"symbol"===typeof Symbol()},!0);a.add("es6-weakmap",function(){if("undefined"!==typeof b.default.WeakMap){var d={},c={},e=new b.default.WeakMap([[d,1]]);Object.freeze(d);
return 1===e.get(d)&&e.set(c,2)===e&&a.default("es6-symbol")}return!1},!0);a.add("microtasks",function(){return a.default("es6-promise")||a.default("host-node")||a.default("dom-mutationobserver")},!0);a.add("postmessage",function(){return"undefined"!==typeof b.default.window&&"function"===typeof b.default.postMessage},!0);a.add("raf",function(){return"function"===typeof b.default.requestAnimationFrame},!0);a.add("setimmediate",function(){return"undefined"!==typeof b.default.setImmediate},!0);a.add("dom-mutationobserver",
function(){if(a.default("host-browser")&&(b.default.MutationObserver||b.default.WebKitMutationObserver)){var c=document.createElement("div"),e=new (b.default.MutationObserver||b.default.WebKitMutationObserver)(function(){});e.observe(c,{attributes:!0});c.style.setProperty("display","block");return!!e.takeRecords().length}return!1},!0);a.add("dom-webanimation",function(){return a.default("host-browser")&&void 0!==b.default.Animation&&void 0!==b.default.KeyframeEffect},!0);var g});