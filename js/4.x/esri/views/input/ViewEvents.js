// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../geometry/ScreenPoint ../3d/support/mathUtils ./InputHandler".split(" "),function(g,h,p,q,r,t){function k(e){return!!u[e]}function v(e){for(var a=0;a<e.length;a++)if(!k(e[a]))return!1;return!0}Object.defineProperty(h,"__esModule",{value:!0});var u={click:!0,"double-click":!0,"immediate-click":!0,hold:!0,drag:!0,"key-down":!0,"key-up":!0,"pointer-down":!0,"pointer-move":!0,"pointer-up":!0,"pointer-drag":!0,"mouse-wheel":!0,"pointer-enter":!0,
"pointer-leave":!0},n;(function(e){e[e.Left=0]="Left";e[e.Middle=1]="Middle";e[e.Right=2]="Right"})(n||(n={}));g=function(){function e(a){this.handlers=new Map;this.counter=0;this.handlerCounts=new Map;this.view=a;this.inputManager=null}e.prototype.connect=function(a){var c=this;a&&this.disconnect();this.inputManager=a;this.handlers.forEach(function(b,f){return c.inputManager.installHandlers(f,[b])})};e.prototype.disconnect=function(){var a=this;this.inputManager&&this.handlers.forEach(function(c,
b){return a.inputManager.uninstallHandlers(b)});this.inputManager=null};e.prototype.destroy=function(){this.disconnect();this.handlers.clear();this.view=null};e.prototype.register=function(a,c,b){var f=this,d=Array.isArray(a)?a:a.split(",");if(!v(d))return d.some(k)&&console.error("Error: registering input events and other events on the view at the same time is not supported."),null;a=Array.isArray(c)?c:[];b=Array.isArray(c)?b:c;var l=this.createUniqueGroupName();c=new w(this.view,d,a,b);this.handlers.set(l,
c);for(b=0;b<d.length;b++){a=d[b];var m=this.handlerCounts.get(a)||0;this.handlerCounts.set(a,m+1)}this.inputManager&&this.inputManager.installHandlers(l,[c]);return{remove:function(){return f.removeHandler(l,d)}}};e.prototype.hasHandler=function(a){return!!this.handlerCounts.get(a)};e.prototype.removeHandler=function(a,c){if(this.handlers.has(a)){this.handlers.delete(a);for(var b=0;b<c.length;b++){var f=c[b],d=this.handlerCounts.get(f);void 0===d?console.error("Trying to remove handler for event that has no handlers registered: ",
f):1===d?this.handlerCounts.delete(f):this.handlerCounts.set(f,d-1)}}this.inputManager&&this.inputManager.uninstallHandlers(a)};e.prototype.createUniqueGroupName=function(){this.counter+=1;return"viewEvents_"+this.counter};return e}();h.ViewEvents=g;var w=function(e){function a(c,b,f,d){var a=e.call(this,!0)||this;a.view=c;for(c=0;c<b.length;c++)switch(b[c]){case "click":a.registerIncoming("click",f,function(b){return d(a.wrapClick(b))});break;case "double-click":a.registerIncoming("double-click",
f,function(b){return d(a.wrapDoubleClick(b))});break;case "immediate-click":a.registerIncoming("immediate-click",f,function(b){return d(a.wrapImmediateClick(b))});break;case "hold":a.registerIncoming("hold",f,function(b){return d(a.wrapHold(b))});break;case "drag":a.registerIncoming("drag",f,function(b){return d(a.wrapDrag(b))});break;case "key-down":a.registerIncoming("key-down",f,function(b){return d(a.wrapKeyDown(b))});break;case "key-up":a.registerIncoming("key-up",f,function(b){return d(a.wrapKeyUp(b))});
break;case "pointer-down":a.registerIncoming("pointer-down",f,function(b){return d(a.wrapPointer(b,"pointer-down"))});break;case "pointer-move":a.registerIncoming("pointer-move",f,function(b){return d(a.wrapPointer(b,"pointer-move"))});break;case "pointer-up":a.registerIncoming("pointer-up",f,function(b){return d(a.wrapPointer(b,"pointer-up"))});break;case "pointer-drag":a.registerIncoming("pointer-drag",f,function(b){return d(a.wrapPointerDrag(b))});break;case "mouse-wheel":a.registerIncoming("mouse-wheel",
f,function(b){return d(a.wrapMouseWheel(b))});break;case "pointer-enter":a.registerIncoming("pointer-enter",f,function(b){return d(a.wrapPointer(b,"pointer-enter"))});break;case "pointer-leave":a.registerIncoming("pointer-leave",f,function(b){return d(a.wrapPointer(b,"pointer-leave"))})}return a}p(a,e);a.prototype.wrapClick=function(a){var b=a.data,c=b.x,d=b.y;return{type:"click",pointerType:b.pointerType,button:b.button,buttons:b.buttons,x:c,y:d,native:b.native,timestamp:a.timestamp,screenPoint:new q(c,
d),mapPoint:this.view.toMap(c,d),stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapDoubleClick=function(a){var b=a.data,c=b.x,d=b.y;return{type:"double-click",pointerType:b.pointerType,button:b.button,buttons:b.buttons,x:c,y:d,native:b.native,timestamp:a.timestamp,mapPoint:this.view.toMap(c,d),stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapImmediateClick=function(a){var b=a.data,c=b.x,d=b.y;return{type:"immediate-click",pointerType:b.pointerType,button:b.button,
buttons:b.buttons,x:c,y:d,native:b.native,timestamp:a.timestamp,mapPoint:this.view.toMap(c,d),stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapHold=function(a){var b=a.data,c=b.x,d=b.y;return{type:"hold",pointerType:b.pointerType,button:b.button,buttons:b.buttons,x:c,y:d,native:b.native,timestamp:a.timestamp,mapPoint:this.view.toMap(c,d),stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapDrag=function(a){var b=a.data,c=b.center,d=c.x,c=c.y,e=b.action,
m=b.pointerType,g=b.button;"start"===e&&(this.latestDragStart=b);var h=b.pointer.native,k=a.timestamp;return{type:"drag",action:e,x:d,y:c,origin:{x:this.latestDragStart.center.x,y:this.latestDragStart.center.y},pointerType:m,button:g,buttons:b.buttons,radius:b.radius,angle:r.rad2deg(b.angle),native:h,timestamp:k,stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapKeyDown=function(a){var b=a.data;return{type:"key-down",key:b.key,repeat:b.repeat,native:b.native,timestamp:a.timestamp,
stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapKeyUp=function(a){var b=a.data;return{type:"key-up",key:b.key,native:b.native,timestamp:a.timestamp,stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapPointer=function(a,b){var c=a.data,d=c.native;return{type:b,x:c.x,y:c.y,pointerId:d.pointerId,pointerType:d.pointerType,button:c.button,buttons:c.buttons,native:d,timestamp:a.timestamp,stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapPointerDrag=
function(a){var b=a.data.currentEvent,c=a.data.startEvent.native;return{type:"pointer-drag",x:b.x,y:b.y,pointerId:c.pointerId,pointerType:c.pointerType,button:a.data.startEvent.button,buttons:b.buttons,action:a.data.action,origin:{x:a.data.startEvent.x,y:a.data.startEvent.y},native:b.native,timestamp:a.timestamp,stopPropagation:function(){return a.stopPropagation()}}};a.prototype.wrapMouseWheel=function(a){var b=a.data;return{type:"mouse-wheel",x:b.x,y:b.y,deltaY:b.deltaY,native:b.native,timestamp:a.timestamp,
stopPropagation:function(){return a.stopPropagation()}}};return a}(t.InputHandler)});