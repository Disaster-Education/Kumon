// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../.././../../geometry ../../../../../core/Handles ./DirectLineMeasurement3DView".split(" "),function(k,l,m,n,e,h,g){function f(c){return"mouse"!==c.pointerType||0===c.button}return function(){function c(a,b){this._dragHandles={};this._viewEventHandles=new h;this._cachedPickRequest=new g.PickRequest;this._cachedPickResult=new g.PickResult;this._isAnyPointerDown=!1;this.model=
a;this.view=b;this.model.reset()}c.prototype.activate=function(a){var b=this,d=this._viewEventHandles;d.add(a.on("immediate-click",function(a){return b._handleImmediateClick(a)}));d.add(a.on("click",function(a){return b._handleClick(a)}));d.add(a.on("double-click",function(a){return b._handleDoubleClick(a)}));d.add(a.on("drag",function(a){return b._handleDrag(a)}));d.add(a.on("pointer-move",function(a){return b._handlePointerMove(a)}));d.add(a.on("pointer-down",function(a){return b._handlePointerDown(a)}));
d.add(a.on("pointer-up",function(a){return b._handlePointerUp(a)}));d.add(a.on("pointer-drag",function(a){return b._handlePointerDrag(a)}));d.add(a.on("key-down",function(a){return b._handleKeyDown(a)}))};c.prototype.deactivate=function(){this._viewEventHandles.removeAll()};c.prototype._handleDrag=function(a){0!==this.model.draggedHandles.length&&a.stopPropagation()};c.prototype._handlePointerMove=function(a){this._clearCachedPickRequest();var b=new e.ScreenPoint({x:a.x,y:a.y});"mouse"===a.pointerType&&
(this._hoverAt(b),"drawing"===this.model.state&&(this._endAt(b,a.pointerType),a.stopPropagation()))};c.prototype._handlePointerDown=function(a){this._clearCachedPickRequest();this._isAnyPointerDown=!0;if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y}),b=this.view.handleAt(b,a.pointerType);"drawing"===this.model.state||!b||b in this._dragHandles||(this._dragHandles[a.pointerId]=b,this.model.draggedHandles.push(b));0<this.model.draggedHandles.length&&"measured"===this.model.state&&(this.model.state="editing")}};
c.prototype._handlePointerUp=function(a){this._clearCachedPickRequest();this._isAnyPointerDown=!1;if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y}),d=this._dragHandles[a.pointerId];d&&(delete this._dragHandles[a.pointerId],this.model.draggedHandles.remove(d),0===this.model.draggedHandles.length&&this.model.finishedMeasurement({cameraAboveGround:this.view.cameraAboveGround}),this._updateHoveredHandle(b,a.pointerType));0===this.model.draggedHandles.length&&"editing"===this.model.state&&(this.model.state=
"measured")}};c.prototype._handlePointerDrag=function(a){this._clearCachedPickRequest();if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y}),d=this._dragHandles[a.pointerId];null!=d&&("update"===a.action&&this._moveHandleTo(d,b,a.pointerType),a.stopPropagation())}};c.prototype._handleImmediateClick=function(a){this._clearCachedPickRequest();if(f(a)){var b=new e.ScreenPoint({x:a.x,y:a.y});switch(this.model.state){case "initial":if(this._startAt(b,a.pointerType)){this.model.state="drawing";a.stopPropagation();
return}break;case "drawing":if(this._endAt(b,a.pointerType)){this.model.finishedMeasurement({cameraAboveGround:this.view.cameraAboveGround});a.stopPropagation();return}break;case "measured":if(null===this.view.handleAt(b,a.pointerType)&&(this.model.clearMeasurement(),this._startAt(b,a.pointerType))){this.model.state="drawing";a.stopPropagation();return}}"mouse"===a.pointerType&&this._hoverAt(b)}};c.prototype._handleClick=function(a){f(a)&&a.stopPropagation()};c.prototype._handleDoubleClick=function(a){f(a)&&
a.stopPropagation()};c.prototype._handleKeyDown=function(a){"Escape"===a.key&&"drawing"===this.model.state&&(this.model.clearMeasurement(),a.stopPropagation())};c.prototype._hoverAt=function(a){this._updateHoveredHandle(a,"mouse");var b=this._isAnyPointerDown&&"drawing"!==this.model.state&&"editing"!==this.model.state;this.view.requiresCursorPoint&&!b?(a=this._pick(a),a.mapPoint&&(this.model.cursorPoint=a.mapPoint)):this.model.cursorPoint=null};c.prototype._startAt=function(a,b){var d=this._pick(a);
if(d.mapPoint)return this.model.startPoint=d.mapPoint,this.model.startPointSurfaceLocation=this._surfaceLocation(d.mapPoint,d.type),this.model.hoveredHandle="touch"!==b?"start":null,!0;this._updateHoveredHandle(a,b);return!1};c.prototype._endAt=function(a,b){var d=this._pick(a);if(d.mapPoint&&!this.view.overlappingHandles(d.mapPoint,this.model.startPoint))return this.model.endPoint=d.mapPoint,this.model.endPointSurfaceLocation=this._surfaceLocation(d.mapPoint,d.type),this.model.hoveredHandle="touch"!==
b?"end":null,!0;this._updateHoveredHandle(a,b);return!1};c.prototype._moveHandleTo=function(a,b,d){b=this._clipToScreen(b);var c=this._pick(b);if(c.mapPoint)if("start"===a){if(!this.view.overlappingHandles(c.mapPoint,this.model.endPoint))return this.model.startPoint=c.mapPoint,this.model.startPointSurfaceLocation=this._surfaceLocation(c.mapPoint,c.type),this.model.hoveredHandle="touch"!==d?"start":null,!0}else if("end"===a&&!this.view.overlappingHandles(c.mapPoint,this.model.startPoint))return this.model.endPoint=
c.mapPoint,this.model.endPointSurfaceLocation=this._surfaceLocation(c.mapPoint,c.type),this.model.hoveredHandle="touch"!==d?"end":null,!0;this._updateHoveredHandle(b,d);return!1};c.prototype._pick=function(a){var b=this._cachedPickRequest.screenPoint;if(b&&b.x===a.x&&b.y===a.y)return this._cachedPickResult;this._cachedPickRequest.screenPoint=a;return this._cachedPickResult=this.view.pick(this._cachedPickRequest)};c.prototype._clearCachedPickRequest=function(){this._cachedPickRequest.screenPoint=null};
c.prototype._clipToScreen=function(a){return new e.ScreenPoint({x:Math.max(0,Math.min(this.model.sceneView.width,a.x)),y:Math.max(0,Math.min(this.model.sceneView.height,a.y))})};c.prototype._updateHoveredHandle=function(a,b){this.model.hoveredHandle="touch"!==b?this.view.handleAt(a,b):null};c.prototype._surfaceLocation=function(a,b){return"surface"===b?"on-the-surface":a.z>=this.view.getElevation(a)?"above-the-surface":"below-the-surface"};return c}()});