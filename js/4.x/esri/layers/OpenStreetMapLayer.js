// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["../config","./WebTileLayer"],function(a,b){a.request.corsEnabledServers.push("a.tile.openstreetmap.org","b.tile.openstreetmap.org","c.tile.openstreetmap.org");return b.createSubclass({declaredClass:"esri.layers.OpenStreetMapLayer",properties:{subDomains:{value:["a","b","c"],json:{read:!1,write:!1}},fullExtent:{json:{read:!1,write:!1}},urlTemplate:{value:"https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",json:{read:!1,write:!1}},operationalLayerType:"OpenStreetMap",type:{value:"open-street-map",
json:{read:!1}},copyright:{value:"Map data \x26copy; OpenStreetMap contributors, CC-BY-SA",json:{origins:{"web-document":{read:!1,write:!1}}}},wmtsInfo:{json:{read:!1,write:!1}}}})});