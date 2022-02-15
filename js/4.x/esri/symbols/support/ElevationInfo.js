// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ../../support/arcadeUtils".split(" "),function(p,q,f,c,g,h,b,n){var k=h({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),l=h({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),
m=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}f(a,d);e=a;Object.defineProperty(a.prototype,"requiredFields",{get:function(){return n.extractFieldNames(this.expression)},enumerable:!0,configurable:!0});a.prototype.clone=function(){return new e({expression:this.expression,title:this.title})};c([b.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);c([b.property({readOnly:!0,dependsOn:["expression"]})],a.prototype,"requiredFields",null);c([b.property({type:String,
json:{write:!0}})],a.prototype,"title",void 0);return a=e=c([b.subclass("esri.layers.support.FeatureExpressionInfo")],a);var e}(b.declared(g));return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}f(a,d);e=a;a.prototype.readFeatureExpressionInfo=function(a,b){if(null!=a)return a;if(b.featureExpression&&0===b.featureExpression.value)return{expression:"0"}};a.prototype.writeFeatureExpressionInfo=function(a,b,c,d){b[c]=a.write(null,d);"0"===a.expression&&(b.featureExpression=
{value:0})};Object.defineProperty(a.prototype,"mode",{get:function(){var a=this._get("mode");return a?a:null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(a){this._set("mode",a)},enumerable:!0,configurable:!0});a.prototype.write=function(a,b){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null};a.prototype.clone=function(){return new e({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?
this.featureExpressionInfo.clone():void 0,unit:this.unit})};c([b.property({type:m,json:{write:!0}})],a.prototype,"featureExpressionInfo",void 0);c([b.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],a.prototype,"readFeatureExpressionInfo",null);c([b.writer("featureExpressionInfo",{featureExpressionInfo:{type:m},"featureExpression.value":{type:Number}})],a.prototype,"writeFeatureExpressionInfo",null);c([b.property({type:String,dependsOn:["offset","featureExpressionInfo"],
json:{read:k.read,write:{writer:k.write,isRequired:!0}}})],a.prototype,"mode",null);c([b.property({type:Number,json:{write:!0}})],a.prototype,"offset",void 0);c([b.property({type:String,json:{read:l.read,write:l.write}})],a.prototype,"unit",void 0);return a=e=c([b.subclass("esri.layers.support.ElevationInfo")],a);var e}(b.declared(g))});