(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("post-component")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Latest Posts")]),n("div",[n("label",[e._v("Say something")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{on:{click:e.CreatePost}},[e._v("post !")])]),n("hr"),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("div",{staticClass:"posts-container"},e._l(e.posts,(function(t,r){return n("div",{key:t._id,staticClass:"post",attrs:{item:t,index:r}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[e._v(e._s(t.text))])])})),0)])},s=[],u=n("1da1"),i=(n("96cf"),n("5530")),p=n("d4ec"),l=n("bee2"),f=(n("d81d"),n("bc3a")),d=n.n(f),v="api/posts/",m=function(){function e(){Object(p["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getPosts",value:function(){return new(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(v);case 3:r=e.sent,o=r.data,t(o.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return d.a.post(v,{text:e})}},{key:"deletePost",value:function(e){return d.a.delete("".concat(v).concat(e))}}]),e}(),h=m,b={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getPost();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.maessage;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{CreatePost:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.insertPost(e.text);case 2:return t.next=4,h.getPosts();case 4:e.posts=t.sent;case 5:case"end":return t.stop()}}),t)})))()}}},g=b,x=(n("cde4"),n("2877")),y=Object(x["a"])(g,c,s,!1,null,"8fd6fc06",null),w=y.exports,_={name:"App",components:{PostComponent:w}},O=_,P=(n("034f"),Object(x["a"])(O,o,a,!1,null,null,null)),j=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},cde4:function(e,t,n){"use strict";n("d601")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d601:function(e,t,n){}});
//# sourceMappingURL=app.4817b06e.js.map