!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Switch=t(require("react")):e.Switch=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c);n(4);var f=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={switchActive:e.value,innerStateSet:!1},n}return a(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({switchActive:e.value})}},{key:"toggleStatus",value:function(){var e=this.props,t=this.state;e.readOnly||"function"==typeof this.props.onChange&&e.onChange(!t.switchActive)}},{key:"getClassName",value:function(){var e=this.props,t="dnn-switch";return e.value&&(t+=" dnn-switch-active"),e.readOnly&&(t+=" dnn-switch-readonly"),e.labelPlacement&&(t+=" place-"+e.labelPlacement),t}},{key:"render",value:function(){var e=this.props,t=this.state;return l["default"].createElement("div",{className:"dnn-switch-container"},e.label&&l["default"].createElement("span",{className:"switch-label"},e.label),l["default"].createElement("span",{className:this.getClassName(),onClick:this.toggleStatus.bind(this)},l["default"].createElement("span",{className:"mark"}),!e.labelHidden&&l["default"].createElement("label",null,t.switchActive?e.onText:e.offText)))}}]),t}(c.Component);f.propTypes={value:c.PropTypes.bool,labelHidden:c.PropTypes.bool,onText:c.PropTypes.string,offText:c.PropTypes.string,label:c.PropTypes.string,onChange:c.PropTypes.func,readOnly:c.PropTypes.bool,labelPlacement:c.PropTypes.oneOf(["left","right"])},f.defaultProps={onText:"On",offText:"Off",labelPlacement:"left"},t["default"]=f},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-switch-container{display:inline-block;padding:5px 0}.dnn-switch-container .switch-label{float:left;font-size:14px;font-weight:700;padding-top:1px}.dnn-switch-container .dnn-switch{display:inline-block;position:relative;width:45px;height:21px;border-radius:14px;border:1px solid #959695;background-color:#c8c8c8;margin:0;cursor:pointer;-webkit-transition:background .1s linear;transition:background .1s linear}.dnn-switch-container .dnn-switch.place-left{margin-left:25px}.dnn-switch-container .dnn-switch.place-left>label{left:-25px}.dnn-switch-container .dnn-switch.place-right{margin-right:25px}.dnn-switch-container .dnn-switch.place-right>label{right:-25px}.dnn-switch-container .dnn-switch>label{position:absolute;margin-top:2px;color:#46292b}.dnn-switch-container .dnn-switch.dnn-switch-active{background-color:#21a3da;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-active .mark{left:24px;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-readonly{border:1px solid #e5e7e6;cursor:not-allowed;background-color:#e5e7e6}.dnn-switch-container .dnn-switch.dnn-switch-readonly .mark{border:1px solid #e5e7e6;background-color:#eff0f0}.dnn-switch-container .dnn-switch .mark{width:21px;height:21px;display:inline-block;border-radius:13px;background-color:#fff;border:1px solid #959695;position:absolute;top:-1px;left:0;box-sizing:border-box;-webkit-transition:left .1s linear,background-color .1s linear,border-color .1s linear;transition:left .1s linear,background-color .1s linear,border-color .1s linear}.dnn-switch-container .dnn-switch .mark img{display:none}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],l={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=v(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var i=y++;n=g||(g=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=u.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var l=o(e);r(l,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete d[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e}])});