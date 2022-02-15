// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../tsSupport/assignHelper dojo/_base/kernel dojo/_base/lang ../../config ../../request ../Logger ../promiseUtils ../sniff ../urlUtils ./loaderConfig ./utils ./WorkerFallback".split(" "),function(z,v,p,A,B,k,C,D,w,l,x,y,m,g){function E(){return q?q:q=w.create(function(b){var a=new MessageChannel,c=a.port1,d=a.port2,e=function(a){l.add("esri-workers-supports-transfer-arraybuffer",Number(null!=a.data));c.removeEventListener("message",e);c.close();d.close();l("esri-workers-supports-transfer-arraybuffer")||
n.warn("This browser doesn't support ArrayBuffer transfer.");b()};c.addEventListener("message",e);c.start();d.start();a=new ArrayBuffer(0);d.postMessage(a,[a])})}function r(b){return E().then(function(){return w.create(function(a){function c(e){if(e=m.receiveMessage(e))switch(e.type){case F:e=b;var g=k.workers.loaderUrl||y.DEFAULT_LOADER_URL,h;null!=k["default"]?(h=B.mixin({},k),delete h["default"],h=JSON.parse(JSON.stringify(h))):h=JSON.parse(JSON.stringify(k));var f=k.workers.loaderConfig,f=y.default({baseUrl:f.baseUrl,
locale:A.locale,has:p({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1,"events-keypress-typed":0,"esri-workers-supports-transfer-arraybuffer":l("esri-workers-supports-transfer-arraybuffer")},f.has),map:p({},f.map),paths:p({},f.paths),packages:f.packages||[]});e.postMessage({type:G,configure:{esriConfig:h,loaderUrl:g,loaderConfig:f}});break;case H:b.removeEventListener("message",c),b.removeEventListener("error",d),a(b)}}function d(a){a.preventDefault();b.removeEventListener("message",
c);b.removeEventListener("error",d);n.warn("Failed to create Worker. Fallback to execute module in main thread",a);b=new g;b.addEventListener("message",c);b.addEventListener("error",d)}b.addEventListener("message",c);b.addEventListener("error",d)})})}Object.defineProperty(v,"__esModule",{value:!0});var t=x.normalize(z.toUrl("./worker.js")),I=!x.hasSameOrigin(t,location.href),n=D.getLogger("esri.core.workers"),u=null,H=m.MessageType.CONFIGURED,G=m.MessageType.CONFIGURE,F=m.MessageType.HANDSHAKE,q=
null;v.createWorker=function(){if(!l("esri-workers"))return r(new g);if(!I){var b=void 0;try{b=new Worker(t)}catch(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",event),b=new g}return r(b)}u||(u=C(t,{responseType:"text"}));return u.then(function(a){return new Worker(URL.createObjectURL(new Blob([a.data],{type:"text/javascript"})))}).catch(function(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",a);return new g}).then(function(a){return r(a)})}});