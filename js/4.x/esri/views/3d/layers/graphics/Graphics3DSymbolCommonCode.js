// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/Point ../../../../geometry/support/coordsUtils ../../../../geometry/support/triangulationUtils ../../../../symbols/callouts/calloutUtils ./graphicUtils ../../lib/glMatrix ../../support/projectionUtils ../../webgl-engine/lib/Object3D".split(" "),function(B,e,x,C,I,J,D,E,r,K){function y(b,a,d,c,f){var g=0,e=a.z||0,h=0,h=d.mode;c=d.calculateOffsetRenderUnits(c);d=d.featureExpressionInfoContext;"on-the-ground"===h?(g=h=b.getElevation(a,"ground")||0,f&&(f.verticalDistanceToGround=
0,f.terrainElevation=h)):"relative-to-ground"===h?(h=b.getElevation(a,"ground")||0,g=c,null==d&&(g+=e),f&&(f.verticalDistanceToGround=g,f.terrainElevation=h),g+=h):"relative-to-scene"===h?(h=b.getElevation(a,"scene")||0,g=c,f&&(f.verticalDistanceToGround=g,f.terrainElevation=h),g+=h):"absolute-height"===h&&(g=c,null==d&&(g+=e),f&&(h=b.getElevation(a,"ground")||0,f.verticalDistanceToGround=g-h,f.terrainElevation=h));return g}function z(b,a){b=I.pathsToTriangulationInfo(b,a);return{vertexData:b.position,
polygons:b.polygons,outlines:b.outlines}}function F(b,a,d,c,f){a*=3;c*=3;for(var g=0;g<f;++g)d[c++]=b[a++],d[c++]=b[a++],d[c++]=b[a++]}function A(b,a,d,c,f,g,e){return r.bufferToBuffer(b,d,a,c,g,f,e)}function w(b,a,d){r.pointToVector(b,a,d)}function G(b,a){return!(b[0]>a[3]||b[0]<a[0]||b[1]>a[4]||b[1]<a[1])}function H(b,a){return!(a[0]>b[3]||a[3]<b[0]||a[1]>b[4]||a[4]<b[1])}Object.defineProperty(e,"__esModule",{value:!0});B=E.mat4d;var k=E.vec3d.create(),L=B.identity(),m=new x({x:0,y:0,z:0,spatialReference:null});
e.createStageObjectForPoint=function(b,a,d,c,f,g,e,h,m,M,t){var q=a?a.length:0,p=this._context.clippingExtent;w(b,k,this._context.elevationProvider.spatialReference);if(p&&!G(k,p))return null;w(b,k,this._context.renderSpatialReference);p=this._context.localOriginFactory.getOrigin(k);e=new K({castShadow:!1,metadata:{layerUid:h,graphicId:m,usesVerticalDistanceToGround:!!M},idHint:e});for(h=0;h<q;h++)e.addGeometry(a[h],d[h],c?c[h]:L,f,p,t);a=this._context.renderSpatialReference;c=this._context.elevationProvider;
f=this._context.renderCoordsHelper;d=0;var l;e.metadata.usesVerticalDistanceToGround?(d=y(c,b,g,f,n),D.updateVertexAttributeAuxpos1w(e,n.verticalDistanceToGround),l=n.terrainElevation):(t="absolute-height"!==g.mode,d=y(c,b,g,f,t?n:null),t&&(l=n.terrainElevation));g=e.getObjectTransformation();k[0]=b.x;k[1]=b.y;k[2]=d;r.computeLinearTransformation(b.spatialReference,k,g,a)?e.setObjectTransformation(g):console.warn("Could not locate symbol object properly, it might be misplaced");return{object:e,terrainElevation:l}};
e.extendPointGraphicElevationContext=function(b,a,d){b=b.elevationContext;d=d.spatialReference;w(a,k,d);b.centerPointInElevationSR=new x({x:k[0],y:k[1],z:a.hasZ?k[2]:0,spatialReference:d})};e.placePointOnPolyline=function(b){var a=b.paths[0];if(!a||0===a.length)return null;a=C.getPointOnPath(a,C.getPathLength(a)/2);return new x({x:a[0],y:a[1],z:a[2],spatialReference:b.spatialReference})};e.placePointOnPolygon=function(b){return D.computeCentroid(b)};e.computeElevation=y;e.getSingleSizeDriver=function(b,
a){void 0===a&&(a=0);return isFinite(b[a])?b[a]:null};e.copyPathData=z;e.copyVertices=F;e.chooseOrigin=function(b,a,d,c){a=Math.floor(a+(d-1)/2);c[0]=b[3*a+0];c[1]=b[3*a+1];c[2]=b[3*a+2]};e.subtractCoordinates=function(b,a,d,c){a*=3;for(var f=0;f<d;++f)b[a++]-=c[0],b[a++]-=c[1],b[a++]-=c[2]};e.setZ=function(b,a,d,c){a*=3;for(var f=0;f<d;++f)b[a+2]=c,a+=3};e.offsetZ=function(b,a,d,c){a*=3;for(var f=0;f<d;++f)b[a+2]+=c,a+=3};e.scaleZ=function(b,a,d,c){a*=3;for(var f=0;f<d;++f)b[a+2]*=c,a+=3};e.flatArrayToArrayOfArrays=
function(b,a,d){var c=[];a*=3;for(var f=0;f<d;++f)c.push([b[a++],b[a++],b[a++]]);return c};e.reproject=A;e.reprojectPoint=w;e.getGeometryVertexData3D=function(b,a,d,c,f,e,q){var h=f.spatialReference;b=z(b,a);a=b.vertexData;var g=a.length/3,k=new Float64Array(a.length),t=!0;d.equals(h)?F(a,0,k,0,a.length):t=A(a,0,d,k,0,h,g);var v=d=0,p=q.mode,l=0,u=0,n=0;e=q.calculateOffsetRenderUnits(e);q=q.featureExpressionInfoContext;m.spatialReference=f.spatialReference;d*=3;for(var v=3*v,r=0;r<g;++r)m.x=k[d+0],
m.y=k[d+1],m.z=k[d+2],"on-the-ground"===p?(u=l=f.getElevation(m)||0,n+=l):"relative-to-ground"===p?(l=f.getElevation(m)||0,u=l+e,null==q&&(u+=m.z),n+=l):"relative-to-scene"===p?(l=f.getElevation(m,"scene")||0,u=l+e,n+=l):"absolute-height"===p&&(u=e,null==q&&(u+=m.z)),a[v+0]=k[d+0],a[v+1]=k[d+1],a[v+2]=u,d+=3,v+=3;f=n/g;h.equals(c)||A(a,0,h,a,0,c,g);return{geometryData:b,vertexData:a,eleVertexData:k,terrainElevation:f,projectionSuccess:t}};e.getGeometryVertexDataDraped=function(b,a,d){b=z(b,!1);var c=
b.vertexData,f=c.length/3,e=!0;a.equals(d)||(e=r.bufferToBuffer(c,a,0,c,d,0,f));return{geometryData:b,vertexData:c,projectionSuccess:e}};e.computeBoundingBox=function(b,a,d,c){c[0]=Number.MAX_VALUE;c[1]=Number.MAX_VALUE;c[2]=Number.MAX_VALUE;c[3]=-Number.MAX_VALUE;c[4]=-Number.MAX_VALUE;c[5]=-Number.MAX_VALUE;a*=3;for(var e=0;e<d;++e){var g=b[a++],k=b[a++],h=b[a++];g<c[0]&&(c[0]=g);k<c[1]&&(c[1]=k);h<c[2]&&(c[2]=h);g>c[3]&&(c[3]=g);k>c[4]&&(c[4]=k);h>c[5]&&(c[5]=h)}return c};e.pointInBox2D=G;e.boxesIntersect2D=
H;e.boundingBoxClipped=function(b,a){return a?!H(b,a):!1};e.needsElevationUpdates2D=function(b){return"relative-to-ground"===b||"relative-to-scene"===b};e.needsElevationUpdates3D=function(b){return"absolute-height"!==b};e.needsOffsetAdjustment=function(b,a,d,c){if(!1===a.needsOffsetAdjustment||!1===a.supportsOffsetAdjustment||"on-the-ground"===b.mode)return!1;if(0===b.meterUnitOffset){if(!0===a.needsOffsetAdjustment)return!0;if(J.isCalloutSupport(c)&&c.hasVisibleVerticalOffset())return!1;if("relative-to-ground"===
b.mode&&(!d.hasZ||b.featureExpressionInfoContext)||"relative-to-scene"===b.mode)return!0}return!1};var n={verticalDistanceToGround:0,terrainElevation:0}});