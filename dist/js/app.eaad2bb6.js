(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/webgis-performance/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0c48":function(e,t,r){},"445a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("43f9"),o=r.n(a),i=r("1cf8"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-20"},[r("LayerControl",{on:{"layer-input":function(t){e.rasterLayer=t}}})],1),r("div",{staticClass:"md-layout-item md-size-80"},[r("Map",{attrs:{layer:e.rasterLayer}})],1)])],1)},c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[r("md-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"1"}},[r("h3",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v("Web GIS App")]),r("md-button",[e._v("Refresh")]),r("md-button",{staticClass:"md-primary"},[e._v("Clean")])],1)],1)},u=[],p={name:"Navbar"},d=p,f=(r("9840"),r("2877")),m=Object(f["a"])(d,l,u,!1,null,"715a3b46",null),v=m.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage"},[r("md-card",[r("md-card-header",[r("div",{staticClass:"md-layout md-alignment-center-center"},[r("span",{staticClass:"card-header-title"},[e._v("LAYERS:")])])]),r("md-divider"),r("md-card-content",e._l(e.layers,(function(t){return r("div",{key:t.id},[r("md-radio",{staticClass:"md-primary",attrs:{value:t.name},on:{change:function(r){return e.$emit("layer-input",t)}},model:{value:e.layerSelected,callback:function(t){e.layerSelected=t},expression:"layerSelected"}},[e._v(e._s(t.name))])],1)})),0)],1)],1)},b=[],h={name:"LayerControl",data:function(){return{layerSelected:"Open Street Map",layers:[{id:1,name:"Open Street Map",source:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{id:2,name:"ESRI World Topo Map",source:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"},{id:3,name:"ESRI World Imagery",source:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}]}}},g=h,S=(r("ecf4"),Object(f["a"])(g,y,b,!1,null,"5b414c8c",null)),_=S.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"map"},[r("vl-map",{attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"}},[r("vl-view",{attrs:{zoom:e.zoom,center:e.center},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t}}}),r("vl-layer-tile",[r("vl-source-xyz",{attrs:{url:e.layer.source}})],1)],1),r("div",{staticClass:"inform"},[e._v(" Zoom: "+e._s(e.zoom)),r("br"),e._v(" Center: "+e._s(e.center)),r("br")])],1)},O=[],w={name:"Map",props:{layer:Object},data:function(){return{zoom:7,center:[25.371622547063208,58.602373945187594],url:"https://soil-pygeoapi-docker-bozea3cspa-ew.a.run.app/collections/estsoil?f=json"}}},E=w,x=(r("d6f7"),Object(f["a"])(E,C,O,!1,null,"56193872",null)),M=x.exports,j={name:"App",components:{Navbar:v,LayerControl:_,Map:M},data:function(){return{rasterLayer:{id:1,name:"Open Street Map",source:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}}}},z=j,G=(r("034f"),Object(f["a"])(z,s,c,!1,null,null,null)),I=G.exports;r("51de"),r("e094"),r("2b69");n["default"].config.productionTip=!1,n["default"].use(o.a),n["default"].use(i["a"]),new n["default"]({render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,r){},9840:function(e,t,r){"use strict";var n=r("445a"),a=r.n(n);a.a},d6f7:function(e,t,r){"use strict";var n=r("0c48"),a=r.n(n);a.a},dfb2:function(e,t,r){},ecf4:function(e,t,r){"use strict";var n=r("dfb2"),a=r.n(n);a.a}});
//# sourceMappingURL=app.eaad2bb6.js.map