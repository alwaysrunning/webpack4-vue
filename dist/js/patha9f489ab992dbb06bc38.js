!function(t){function e(e){for(var r,i,a=e[0],l=e[1],s=e[2],f=0,p=[];f<a.length;f++)i=a[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);p.length;)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var c=l;u.push([11,1]),n()}([,function(t,e,n){},function(t,e,n){},,,,function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e,n){"use strict";var r=n(2);n.n(r).a},,,,function(t,e,n){"use strict";n.r(e);var r=n(3),o={name:"app"},u=n(0),i=Object(u.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("router-view")}),[],!1,null,null,null).exports,a=n(5),l={data:()=>({title:"首页"})},s=(n(6),Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h2",[this._v(this._s(this.title))])])}),[],!1,null,null,null).exports),c={data:()=>({title:"我的"})},f=(n(7),Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mine"},[e("h2",[this._v(this._s(this.title))])])}),[],!1,null,null,null).exports);r.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"home",component:s},{path:"/mine",name:"mine",component:f}]});new r.a({el:"#app",router:p,render:t=>t(i)})}]);