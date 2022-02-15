// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper dojo/Deferred dojo/json ../../core/Evented ../../core/typescript".split(" "),function(n,p,h,k,g,d,l,m){return new (function(f){function c(){var a=null!==f&&f.apply(this,arguments)||this;a._targetUrl="";a._loadingDeferred=null;a._redirectIdentityManager=!1;a.isNative=!1;return a}h(c,f);c.prototype.dojoConstructor=function(){var a=this;this._promises={};this.messageId=0;var b=document.referrer;b&&(b=b.split(/[\/?#]/),
this._targetUrl=b[0]+"//"+b[2]);this._loadingDeferred=new g;window.engine?(this.isNative=!0,window.engine._trigger=function(e,b){a._engineCallbacks(e,b)},window.engine.BindingsReady(),window.document.addEventListener("contextmenu",function(a){var b=new MouseEvent("click",{view:a.view,altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,metaKey:a.metaKey,which:a.which,button:a.button,buttons:a.buttons,detail:a.detail,currentTarget:a.currentTarget,relatedTarget:a.relatedTarget,target:a.target,timeStamp:a.timeStamp,
clientX:a.clientX,clientY:a.clientY,screenX:a.screenX,screenY:a.screenY});a.target.dispatchEvent(b)})):(window.addEventListener("message",function(b){b.origin===a._targetUrl&&a._messageReceived(b.data)},!1),this._loadingDeferred.resolve());window.setInterval(function(){return a.checkPromises},3E4)};c.prototype._engineCallbacks=function(a,b){switch(a.toLowerCase()){case "_onready":this._loadingDeferred.resolve();break;case "receivemessages":this._messageReceived(b)}};c.prototype.checkPromises=function(){var a=
this,b=Date.now()-3E4,e=[],c;for(c in this._promises)this._promises[c].timestamp>b||(e.push(c),this._promises[c].promise.isFulfilled()||this._promises[c].promise.reject(Error("messageTimeout")));e.forEach(function(b){delete a._promises[b]})};c.prototype._messageReceived=function(a){a=d.parse(a);if(a.args)for(var b in a.args){var c=a.args[b];"string"===typeof c&&0===c.indexOf("{")&&(a.args[b]=d.parse(c))}if((b=void 0!==a.clientMessageId?this._promises[a.clientMessageId]:null)||!a.clientMessageId){if(b)return delete this._promises[a.clientMessageId],
b.promise.isFulfilled()?void 0:a.args?a.args.error?b.promise.reject({error:a.args.error}):a.args.cancelled?b.promise.reject({cancel:a.args.cancelled}):b.promise.resolve(a.args):b.promise.resolve();a.functionName&&this.emit("message-received",a)}};c.prototype.__sendMessage=function(a){window.name&&(a.addinId=window.name);window.engine?window.engine.SendMessage.call(this,"sendMessage",null,d.stringify(a),window.location.hostname):window.parent.postMessage(d.stringify(a),this._targetUrl)};c.prototype._sendMessageWithReply=
function(a){var b=this;return this._loadingDeferred.then(function(){var c=new g;a.clientMessageId=b.messageId++;b._promises[a.clientMessageId]={promise:c,timestamp:Date.now()};b.__sendMessage(a);return c.promise})};c.prototype._sendMessage=function(a){var b=this;this._loadingDeferred.then(function(){b.__sendMessage(a)})};return c=k([m.subclass()],c)}(l))});