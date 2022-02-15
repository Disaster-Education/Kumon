// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./BasemapGallery/nls/BasemapGallery ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./BasemapGallery/BasemapGalleryViewModel ./support/widget".split(" "),function(l,u,m,d,h,n,p,e,q,r,c){var t=l.toUrl("../themes/base/images/basemap-toggle-64.svg");return function(k){function b(a){a=k.call(this)||this;a._handles=new n;a.activeBasemap=null;a.iconClass="esri-icon-basemap";
a.label=h.widgetLabel;a.source=null;a.view=null;a.viewModel=new r;return a}m(b,k);b.prototype.postInitialize=function(){var a=this,b=this._handles;this.own([p.on(this,"viewModel.items","change",function(c){var f=c.added;c=c.moved;b.remove("basemap-gallery-item-changes");b.add(f.concat(c).map(function(c){return c.watch("state",function(){return a.scheduleRender()})}),"basemap-gallery-item-changes");a.scheduleRender()}),b])};b.prototype.render=function(){var a="loading"===this.get("source.state"),b=
"disabled"===this.get("viewModel.state"),d=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),b=(f={},f["esri-basemap-gallery--source-loading"]=a,f["esri-disabled"]=b,f),f=a?c.tsx("div",{class:"esri-basemap-gallery__loader",key:"esri-basemap-gallery__loader"}):null,a=a?null:0<d.length?c.tsx("ul",{class:"esri-basemap-gallery__item-container",key:"esri-basemap-gallery__item-container",role:"menu"},d):c.tsx("div",{class:"esri-basemap-gallery__empty-message",key:"esri-basemap-gallery__empty-message"},
h.noBasemaps);return c.tsx("div",{class:"esri-basemap-gallery esri-widget esri-widget--panel-height-only",classes:b},f,a);var f};b.prototype._handleClick=function(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)};b.prototype._renderBasemapGalleryItem=function(a){var b=a.get("basemap.thumbnailUrl")||t,d=a.get("basemap.title"),f=a.get("error.message")||d,e="ready"===a.state?0:-1,h=this.viewModel.basemapEquals(a.basemap,this.activeBasemap),k=(g={},g["esri-basemap-gallery__item--selected"]=
h,g["esri-basemap-gallery__item--loading"]="loading"===a.state,g["esri-basemap-gallery__item--error"]="error"===a.state,g),g="loading"===a.state?c.tsx("div",{class:"esri-basemap-gallery__loader",key:"esri-basemap-gallery__loader"}):null;return c.tsx("li",{"aria-selected":h,bind:this,class:"esri-basemap-gallery__item",classes:k,"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:e,title:f},g,c.tsx("img",{alt:"",class:"esri-basemap-gallery__item-thumbnail",src:b}),
c.tsx("div",{class:"esri-basemap-gallery__item-title"},d));var g};d([e.aliasOf("viewModel.activeBasemap"),c.renderable()],b.prototype,"activeBasemap",void 0);d([e.property()],b.prototype,"iconClass",void 0);d([e.property()],b.prototype,"label",void 0);d([e.aliasOf("viewModel.source"),c.renderable("source.state")],b.prototype,"source",void 0);d([e.aliasOf("viewModel.view"),c.renderable()],b.prototype,"view",void 0);d([e.property(),c.renderable(["viewModel.state"])],b.prototype,"viewModel",void 0);
d([c.accessibleHandler()],b.prototype,"_handleClick",null);return b=d([e.subclass("esri.widgets.BasemapGallery")],b)}(e.declared(q))});