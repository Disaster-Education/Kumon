// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix","./primitiveIntersectionUtils","../../support/mathUtils"],function(G,e,a,h,r){function t(b,a,d,e,f){void 0===f&&(f=!1);var c=n;h.createRay(a,d,c,f);return h.intersectSphere(b,c,e)?!0:(u(b,c,e),!1)}function p(a,c,d,e){var b=n;h.createRay(c,d,b,!0);return h.intersectSphere(a,b,e)}function v(b,c,d){a.vec3d.cross(b,c,d);b=a.vec3d.dot(b,c)/(a.vec3d.length(b)*a.vec3d.length(c));return-r.acos(b)}function w(b,c,d,e){var f=D;a.mat4d.identity(f);a.mat4d.rotate(f,
e,d);a.vec3d.subtract(b.eye,c);a.mat4d.multiplyVec3(f,b.eye,b.eye);a.vec3d.add(b.eye,c);a.vec3d.subtract(b.center,c);a.mat4d.multiplyVec3(f,b.center,b.center);a.vec3d.add(b.center,c);a.mat4d.multiplyVec3(f,b.up,b.up);b.markViewDirty()}function u(b,c,d){var e=x,f=y,g=E;a.vec3d.subtract(c.origin,b.center,f);a.vec3d.cross(f,c.direction,e);a.vec3d.cross(e,f,d);a.vec3d.scale(d,1/a.vec3d.length(d)*b.radius);b=-r.asin(b.radius/a.vec3d.length(c.origin));a.mat4d.identity(g);a.mat4d.rotate(g,b,e);a.mat4d.multiplyVec3(g,
d)}function z(b,c){a.vec3d.set3(0,0,0,c);for(var d=0;d<b.length;d++)a.vec3d.add(c,b[d]);a.vec3d.scale(c,1/b.length)}Object.defineProperty(e,"__esModule",{value:!0});e.Earth={center:a.vec3d.create(),radius:6378137};e.normalizeCoordinate=function(a,c,d){d[0]=c[0]/a.fullWidth;d[1]=c[1]/a.fullHeight;return d};e.sphereOrSilhouettePointFromScreenPoint=t;e.intersectSphereFromScreenPoint=p;e.rotationAndAxisFromPoints=v;e.rotationFromPointsAroundAxis=function(b,c,d){var e=x,f=y,g=F;a.vec3d.set(b,f);a.vec3d.set(c,
g);b=a.vec3d.dot(f,d);c=a.vec3d.dot(g,d);a.vec3d.scale(d,b,e);a.vec3d.subtract(f,e);a.vec3d.normalize(f);a.vec3d.scale(d,c,e);a.vec3d.subtract(g,e);a.vec3d.normalize(g);b=a.vec3d.dot(f,g);a.vec3d.cross(d,f,e);d=a.vec3d.dot(g,e);return Math.atan2(d,b)};e.setPlane=function(b,c,d){a.vec3d.set(c,d.normal);d.d=-a.vec3d.dot(c,b)};e.setPlaneD=function(b,c){c.d=-a.vec3d.dot(c.normal,b)};e.normalizeRotationDelta=function(a){for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;return a};e.applyRotation=
w;e.closestPointOnSphereSilhouette=u;e.intersectPlaneFromScreenPoint=function(a,c,d,e){var b=n;h.createRay(c,d,b);return h.intersectPlane(a,b,e)};e.applyZoomToPoint=function(b,c,d,e){var f=l;d=1-d;a.vec3d.subtract(c,b.eye,f);var g=a.vec3d.length(f),k=g*(1-d);0<=d&&k<e&&(k=e,d=-(k-g)/g);1E-6>Math.abs(g-k)||(a.vec3d.scale(f,d),a.vec3d.add(b.eye,f),a.vec3d.lerp(b.center,c,d))};e.applyZoomOnSphere=function(b,c,d){a.vec2d.set2(c.padding[3]+c.width/2,c.padding[2]+c.height/2,A);p(b,c,A,c.center);a.vec3d.subtract(c.center,
c.eye,l);b=a.vec3d.length(l);1E-6>Math.abs(b-b*d)||(a.vec3d.scale(l,d),a.vec3d.subtract(c.center,l,c.eye),c.markViewDirty())};var A=a.vec2d.create();e.navPointToScreenPoint=function(b,c,d){a.vec2d.set2(c.x,b.fullHeight-c.y,d)};e.centroidOnSphere=function(b,c,d){z(c,d);a.vec3d.normalize(d);a.vec3d.scale(d,b)};e.centroid=z;var m;(function(a){a[a.Vertical=0]="Vertical";a[a.Horizontal=1]="Horizontal"})(m=e.PanMode||(e.PanMode={}));e.VerticalPanTresholds={Elevation:3E4,Angle:8/180*Math.PI};e.pickPointAndInitSphere=
function(b,c,d,h){var f=a.vec3d.create(),g={center:a.vec3d.create(),radius:0},k=!0;b.pickPointInScreen(d,f)?g.radius=a.vec3d.length(f):(g.radius=a.vec3d.length(c.center),g.radius<.9*e.Earth.radius&&(g.radius=e.Earth.radius),g.radius=Math.max(a.vec3d.length(c.center),.9*e.Earth.radius),h?t(g,c,d,f):k=p(g,c,d,f));return{sphere:g,scenePickPoint:k?f:null}};e.decidePanMode=function(b,c,d){if(a.vec3d.length(b.eye)-e.Earth.radius<e.VerticalPanTresholds.Elevation){if(c.radius>a.vec3d.length(b.eye))return m.Vertical;
a.vec3d.normalize(a.vec3d.subtract(b.eye,d,B));return Math.abs(.5*Math.PI-Math.acos(a.vec3d.dot(d,B)/a.vec3d.length(d)))<e.VerticalPanTresholds.Angle?m.Vertical:m.Horizontal}return m.Horizontal};var B=a.vec3d.create();e.applyPanPlanar=function(b,c,d){a.vec3d.subtract(d,c,q);a.vec3d.subtract(b.eye,q);a.vec3d.subtract(b.center,q);b.markViewDirty()};var q=a.vec3d.create();e.applyPanSpherical=function(a,c,d,e){d=v(d,e,C);w(c,a.center,C,d)};var C=a.vec3d.create(),E=a.mat4d.create(),D=a.mat4d.create(),
l=a.vec3d.create(),x=a.vec3d.create(),y=a.vec3d.create(),F=a.vec3d.create(),n={origin:a.vec3d.create(),direction:a.vec3d.create()}});