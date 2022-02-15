//>>built
(function(e){"object"===typeof module&&"object"===typeof module.exports?(e=e(require,exports),void 0!==e&&(module.exports=e)):"function"===typeof define&&define.amd&&define("require exports tslib ./global ./iterator ./support/has ./Symbol".split(" "),e)})(function(e,k){Object.defineProperty(k,"__esModule",{value:!0});var h=e("tslib"),q=e("./global"),m=e("./iterator"),r=e("./support/has");e("./Symbol");k.Observable=q.default.Observable;if(!r.default("es-observable")){var t=function(e,b){function h(){d||
(d=!0,a&&a())}function c(a){if(d)throw a;var c=void 0;try{h()}catch(l){c=l}var f=b.error;if(void 0!==f&&null!==f){if("function"===typeof f){a=f(a);if(void 0!==c)throw c;return a}throw new TypeError("Observer.error is not a function");}if(b.complete)return b.complete(a);throw a;}var d=!1,a,p=Object.create(Object.create({},{closed:{enumerable:!1,configurable:!0,get:function(){return d}},unsubscribe:{enumerable:!1,configurable:!0,writable:!0,value:h}})),n=Object.create({},{next:{enumerable:!1,writable:!0,
value:function(a){if(!d){var g=b.next;try{if("function"===typeof g)return g(a);if(void 0!==g&&null!==g)throw new TypeError("Observer.next is not a function");}catch(f){c(f)}}},configurable:!0},error:{enumerable:!1,writable:!0,value:c,configurable:!0},complete:{enumerable:!1,writable:!0,value:function(a){if(!d){var c=void 0;try{h()}catch(l){c=l}var f=b.complete;if(void 0!==f&&null!==f){if("function"===typeof f){a=f(a);if(void 0!==c)throw c;return a}throw new TypeError("Observer.complete is not a function");
}if(c)throw c;}},configurable:!0},closed:{enumerable:!1,configurable:!0,get:function(){return d}}});(function(n){b.start&&b.start(p);if(!d)try{var g=e(n);if("function"===typeof g)a=g;else if(g&&"unsubscribe"in g)a=g.unsubscribe;else if(void 0!==g&&null!==g)throw new TypeError("Subscriber must return a callable or subscription");d&&a&&a()}catch(f){c(f)}})(Object.create(n));return p};k.Observable=function(){function e(b,e,c){c.enumerable=!1}return function(){function b(c){if("function"!==typeof c)throw new TypeError("subscriber is not a function");
this._executor=c}b.prototype[k=Symbol.observable]=function(){return this};b.prototype.subscribe=function(c){for(var d=[],a=1;a<arguments.length;a++)d[a-1]=arguments[a];a=h.__read(h.__spread(d),2);d=a[0];a=a[1];if(!c||"number"===typeof c||"string"===typeof c||"boolean"===typeof c)throw new TypeError("parameter must be a function or an observer");var b;"function"===typeof c?(b={next:c},"function"===typeof d&&(b.error=d),"function"===typeof a&&(b.complete=a)):b=c;return t(this._executor,b)};b.of=function(){for(var c=
[],d=0;d<arguments.length;d++)c[d]=arguments[d];return new ("function"!==typeof this?b:this)(function(a){try{for(var b=h.__values(c),d=b.next();!d.done;d=b.next())a.next(d.value)}catch(f){e={error:f}}finally{try{d&&!d.done&&(g=b.return)&&g.call(b)}finally{if(e)throw e.error;}}a.complete();var e,g})};b.from=function(c){if(null===c||void 0===c)throw new TypeError("item cannot be null or undefined");var d;d="function"!==typeof this?b:this;var a=c[Symbol.observable];if(void 0!==a){if("function"!==typeof a)throw new TypeError("Symbol.observable must be a function");
a=a.call(c);if(void 0===a||null===a||"number"===typeof a||"boolean"===typeof a||"string"===typeof a)throw new TypeError("Return value of Symbol.observable must be object");return a.constructor&&a.constructor===this||a instanceof b?a:a.subscribe?new d(a.subscribe):d.of?d.of(a):b.of(a)}if(m.isIterable(c)||m.isArrayLike(c))return new d(function(a){if(m.isArrayLike(c))for(var b=0;b<c.length;b++)a.next(c[b]);else try{for(var b=h.__values(c),d=b.next();!d.done;d=b.next())a.next(d.value)}catch(l){e={error:l}}finally{try{d&&
!d.done&&(f=b.return)&&f.call(b)}finally{if(e)throw e.error;}}a.complete();var e,f});throw new TypeError("Parameter is neither Observable nor Iterable");};h.__decorate([e],b.prototype,k,null);h.__decorate([e],b.prototype,"subscribe",null);h.__decorate([e],b,"of",null);h.__decorate([e],b,"from",null);return b;var k}()}()}k.default=k.Observable});