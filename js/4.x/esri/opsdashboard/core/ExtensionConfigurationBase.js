// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/typescript ./errorMessages ./ExtensionBase ./messageHandler".split(" "),function(l,m,g,c,d,h,k,e){return function(f){function b(a){a=f.call(this)||this;a.config=null;return a}g(b,f);b.prototype._setConfig=function(a){this.config=a||{}};b.prototype.__messageReceived=function(a){"updateconfig"===a.functionName.toLowerCase()&&(a.args={configuration:this.config},e._sendMessage(a));this.inherited(arguments)};
b.prototype.readyToPersistConfig=function(a){if(!this._isHostInitialized())throw Error(h.hostNotReady);e._sendMessage({functionName:"readyToPersistConfig",args:{canAccept:a}})};c([d.shared("esri.opsdashboard.ExtensionConfigurationBase")],b.prototype,"declaredClass",void 0);return b=c([d.subclass()],b)}(k)});