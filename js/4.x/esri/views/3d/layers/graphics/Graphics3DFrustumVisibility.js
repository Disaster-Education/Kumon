// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/aaBoundingBox ../../support/aaBoundingRect ../../support/earthUtils ../../support/intersectionUtils ../../support/mathUtils ../../support/projectionUtils".split(" "),function(m,F,c,p,y,h,n,r,t){var z=-.3*h.earthRadius;m=.5*Math.PI;var A=m/Math.PI*180,B=m*h.earthRadius,C=.9*h.earthRadius,E=function(){function b(){this.extent=Array(4);this.planes=Array(4);this.maxSpan=0;this.center={origin:c.vec3d.create(),direction:c.vec3d.create()};for(var a=
0;4>a;a++)this.extent[a]={origin:c.vec3d.create(),originLength:0,direction:c.vec3d.create(),cap:{next:null,direction:c.vec3d.create()}},this.planes[a]=c.vec4d.create();this.planes[4]=c.vec4d.create()}b.prototype.toRenderBoundingExtent=function(a,u,d,f){y.center(a,g);g[2]=f;t.computeLinearTransformation(d,g,k,u);c.mat4d.inverse(k,v);p.set(e,p.NEGATIVE_INFINITY);for(var b=0,w=D;b<w.length;b++)for(var l=w[b],h=l.x0,m=l.x1,n=l.y0,l=l.y1,q=0;5>q;q++){var x=q/4;g[0]=r.lerp(a[h],a[m],x);g[1]=r.lerp(a[n],
a[l],x);g[2]=f;t.vectorToVector(g,d,g,u);c.mat4d.multiplyVec3(v,g);p.expand(e,g)}c.mat4d.multiplyVec3(k,c.vec3d.set3(e[0],e[1],e[2],this.extent[0].origin));c.mat4d.multiplyVec3(k,c.vec3d.set3(e[3],e[1],e[2],this.extent[1].origin));c.mat4d.multiplyVec3(k,c.vec3d.set3(e[3],e[4],e[2],this.extent[2].origin));c.mat4d.multiplyVec3(k,c.vec3d.set3(e[0],e[4],e[2],this.extent[3].origin))};b.prototype.update=function(a,b,d,f,e,g){e=this.extent;this.toRenderBoundingExtent(a,d,f,g);c.vec3d.add(e[0].origin,e[2].origin,
this.center.origin);c.vec3d.scale(this.center.origin,.5);b(this.center.origin,this.center.direction);for(d=0;4>d;d++)f=e[d],b(f.origin,f.direction),f.originLength=c.vec3d.length(f.origin),g=e[3===d?0:d+1],f.cap.next=g.origin,c.vec3d.direction(g.origin,f.origin,f.cap.direction),this._computePlane(f.cap.direction,f.direction,f.origin,this.planes[d]);this._computePlane(e[1].cap.direction,e[0].cap.direction,e[0].origin,this.planes[4]);this.maxSpan=Math.max(Math.abs(a[0]-a[2]),Math.abs(a[1]-a[3]))};b.prototype.isVisibleInFrustumGlobal=
function(a){if(0>c.vec3d.dot(this.center.direction,a.direction))return!0;for(var b=0;4>b;b++)if(0>c.vec3d.dot(this.extent[b].direction,a.direction))return!0;return!1};b.prototype.isVisibleInFrustum=function(a,b,d){if("global"===a.viewingMode){if(this.maxSpan>(a.spatialReference.isWGS84?A:B))return!0;if(b.altitude>=C)return this.isVisibleInFrustumGlobal(b)}for(a=0;a<this.extent.length;a++)if(d=this.extent[a],n.frustumRay(b.planes,d.origin,null,d.direction)||n.frustumLineSegment(b.planes,d.origin,d.cap.next,
d.cap.direction))return!0;for(a=0;a<b.lines.length;a++)if(d=b.lines[a],n.frustumLineSegment(this.planes,d.origin,d.endpoint,d.direction))return!0;return!1};b.prototype._computePlane=function(a,b,d,e){c.vec3d.cross(a,b,e);e[3]=-c.vec3d.dot(e,d)};return b}();h=function(){function b(){this.frustumVisibilityDirty=this.frustumVisibility=!0;this.extent=null;this.extentEngine=new E;this.extentEngineDirty=!0;this.renderSREqualsViewSR=null;this._isVisibleBelowSurface=!1;this.layerView=null}b.prototype.initialize=
function(a){this.layerView=a;this.renderSREqualsViewSR=a.view.renderSpatialReference.equals(a.view.spatialReference)};b.prototype.destroy=function(){this.extentEngine=this.extent=this.layerView=null};b.prototype.needsIdleUpdate=function(){return this.frustumVisibilityDirty};b.prototype.canResume=function(){return this.frustumVisibility};b.prototype.setExtent=function(a){this.extent=a;this.frustumVisibilityDirty=this.extentEngineDirty=!0};b.prototype.viewChange=function(){this.frustumVisibilityDirty=
!0};b.prototype.elevationBoundsChange=function(){this.extentEngineDirty=this.frustumVisibilityDirty=!0};Object.defineProperty(b.prototype,"isVisibleBelowSurface",{set:function(a){this._isVisibleBelowSurface=a;this.extentEngineDirty=this.frustumVisibilityDirty=!0},enumerable:!0,configurable:!0});b.prototype.idleUpdate=function(a){!a.done()&&this.frustumVisibilityDirty&&(this.updateSuspendFrustumVisible(),this.frustumVisibilityDirty=!1)};b.prototype.updateExtentEngine=function(){if(this.extentEngineDirty){this.extentEngineDirty=
!1;var a=this.layerView.view,b=a.renderCoordsHelper.worldUpAtPosition.bind(a.renderCoordsHelper),d;if(this._isVisibleBelowSurface)d=z;else{d=a.basemapTerrain.getElevationBounds();var c=d[0];d=c-Math.max(1,(d[1]-c)*(1.2-1))}this.extentEngine.update(this.extent,b,a.renderSpatialReference,a.spatialReference,this.renderSREqualsViewSR,d)}};b.prototype.updateSuspendFrustumVisible=function(){if(this.extent){this.updateExtentEngine();var a=this.extentEngine.isVisibleInFrustum(this.layerView.view,this.layerView.view.frustum,
this._isVisibleBelowSurface);a!==this.frustumVisibility&&(this.frustumVisibility=a,this.layerView._notifySuspendedChange())}else this.frustumVisibility=!0};return b}();var D=[{x0:0,y0:1,x1:2,y1:1},{x0:0,y0:3,x1:2,y1:3},{x0:0,y0:1,x1:0,y1:3},{x0:2,y0:1,x1:2,y1:3}],g=c.vec3d.create(),k=c.mat4d.create(),v=c.mat4d.create(),e=p.create();return h});