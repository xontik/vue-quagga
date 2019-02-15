!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("webrtc-adapter"),require("quagga")):"function"==typeof define&&define.amd?define("Scanner",["webrtc-adapter","quagga"],t):"object"==typeof exports?exports.Scanner=t(require("webrtc-adapter"),require("quagga")):e.Scanner=t(e["webrtc-adapter"],e.quagga)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";var r=n(11),o=n.n(r);t.a={name:"QuaggaScanner",props:{onDetected:{type:Function},onProcessed:{type:Function},readerTypes:{type:Array,default:function(){return["code_128_reader"]}},readerSize:{width:{type:Number,default:640},height:{type:Number,default:480}}},data:function(){return{quaggaState:{inputStream:{type:"LiveStream",constraints:{width:{min:this.readerSize.width},height:{min:this.readerSize.height},facingMode:"environment",aspectRatio:{min:1,max:2}}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,frequency:10,decoder:{readers:this.readerTypes},locate:!0}}},mounted:function(){o.a.init(this.quaggaState,function(e){if(e)return console.log(e);o.a.start()}),o.a.onDetected(this.onDetected?this.onDetected:this._onDetected),o.a.onProcessed(this.onProcessed?this.onProcessed:this._onProcessed)},methods:{_onProcessed:function(e){var t=o.a.canvas.ctx.overlay,n=o.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,parseInt(n.getAttribute("width")),parseInt(n.getAttribute("height"))),e.boxes.filter(function(t){return t!==e.box}).forEach(function(e){o.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})})),e.box&&o.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&o.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))},_onDetected:function(e){console.log("detected: ",e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function r(e){e.component("quagga-scanner",a.a)}n.d(t,"VERSION",function(){return i}),n.d(t,"Scanner",function(){return s}),t.install=r;var o=n(3),a=(n.n(o),n(4));n.d(t,"QuaggaScanner",function(){return a.a});var i="1.0.0",s=a.a,u={version:i,install:r};t.default=u;var c=null;"undefined"!=typeof window?c=window.Vue:void 0!==e&&(c=e.Vue),c&&c.use(u)}.call(t,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){n(5)}var o=n(0),a=n(12),i=n(10),s=r,u=i(o.a,a.a,!1,s,"data-v-316d7ef8",null);t.a=u.exports},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("0c8cfcbf",r,!0,{})},function(e,t,n){t=e.exports=n(7)(!1),t.push([e.i,".viewport[data-v-316d7ef8]{position:relative}.viewport canvas[data-v-316d7ef8],.viewport video[data-v-316d7ef8]{position:absolute;left:0;top:0}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var a=p++;r=l||(l=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(9),d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,g=o||{};var a=c(e,t);return r(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=d[i.id];s.refs--,n.push(s)}t?(a=c(e,t),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],c=a[3],d={id:e+":"+o,css:s,media:u,sourceMap:c};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,a){var i,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(a?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(e,t){return d.call(t),l(e,t)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:i,exports:s,options:c}}},function(e,n){e.exports=t},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"viewport scanner",attrs:{id:"interactive"}},[n("video"),e._v(" "),n("canvas",{staticClass:"drawingBuffer"})])}],a={render:r,staticRenderFns:o};t.a=a}])});
//# sourceMappingURL=vue-quagga.js.map