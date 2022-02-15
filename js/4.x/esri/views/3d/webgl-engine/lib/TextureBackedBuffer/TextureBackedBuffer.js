// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/BufferView","../../../../webgl/Texture"],function(c,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(a){this.rctx=a;this.textureWidth=4096;this.dirty=!0;this.texture=new f(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:this.textureWidth,height:1,flipped:!1});this.data=new e.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}b.prototype.dispose=function(){this.texture.dispose();
this.data=this.texture=void 0};b.prototype.setData=function(a,g,b,c,d){this.dirty=!0;this.data.set(a,0,g);this.data.set(a,1,b);this.data.set(a,2,c);this.data.set(a,3,d)};b.prototype.setDataElement=function(a,b,c){this.dirty=!0;this.data.set(a,b,c)};b.prototype.resizeToFit=function(a){a>=this.data.count&&(a=new e.BufferViewVec4u8(new ArrayBuffer(Math.ceil((a+1)/this.textureWidth)*this.textureWidth*4)),a.typedBuffer.set(this.data.typedBuffer),this.data=a)};b.prototype.updateTexture=function(){if(this.dirty){var a=
this.texture.descriptor.width;this.data.count>a*this.texture.descriptor.height&&this.texture.resize(a,this.data.count/a);this.texture.setData(this.data.typedBuffer);this.dirty=!1}};b.prototype.bind=function(a,b){this.rctx.bindTexture(this.texture,b.unit);a.setUniform1i(b.tex,b.unit);a.setUniform2f(b.invDim,1/this.texture.descriptor.width,1/this.texture.descriptor.height)};return b}();d.TextureBackedBuffer=c});