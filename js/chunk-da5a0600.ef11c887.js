(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da5a0600"],{"36cb":function(t,e,n){"use strict";var i=n("9d31"),a=n.n(i);a.a},"48f4":function(t,e,n){"use strict";function i(t,e){var n=e.to,i=e.url,a=e.replace;if(n&&t){var r=t[a?"replace":"push"](n);r&&r.catch&&r.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else i&&(a?location.replace(i):location.href=i)}function a(t){i(t.parent&&t.parent.$router,t.props)}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"6b48":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{route:""},model:{value:t.tabbarActive,callback:function(e){t.tabbarActive=e},expression:"tabbarActive"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"shop-o"}},[t._v("商城")]),n("van-tabbar-item",{attrs:{replace:"",to:"/cart",icon:"shopping-cart-o"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{replace:"",to:"/user",icon:"user-o"}},[t._v("我的")])],1)],1)},r=[],o=n("ade3"),c=(n("68ef"),n("9d70"),n("3743"),n("ae73"),n("c31d")),s=n("d282"),u=n("a142"),l=n("48f4"),d=n("9884"),h=n("ad06"),f=n("6f2f"),b=Object(s["a"])("tabbar-item"),v=b[0],p=b[1],m=v({mixins:[Object(d["a"])("vanTabbar")],props:Object(c["a"])({},l["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String]}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,e=this.$route;if(t&&e){var n=Object(u["d"])(t)?t:{path:t},i=n.path===e.path,a=Object(u["b"])(n.name)&&n.name===e.name;return i||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(l["b"])(this.$router,this)}},render:function(){var t=arguments[0],e=this.icon,n=this.slots,i=this.parent.route?this.routeActive:this.active,a=this.parent[i?"activeColor":"inactiveColor"];return t("div",{class:p({active:i}),style:{color:a},on:{click:this.onClick}},[t("div",{class:p("icon")},[n("icon",{active:i})||e&&t(h["a"],{attrs:{name:e}}),t(f["a"],{attrs:{dot:this.dot,info:this.info}})]),t("div",{class:p("text")},[n("default",{active:i})])])}}),x=(n("9312"),n("b1d2")),O=Object(s["a"])("tabbar"),g=O[0],j=O[1],A=g({mixins:[Object(d["b"])("vanTabbar")],props:{route:Boolean,zIndex:[Number,String],activeColor:String,inactiveColor:String,safeAreaInsetBottom:Boolean,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0}},watch:{value:"setActiveItem",children:"setActiveItem"},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,n){e.active=(e.name||n)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}},render:function(){var t,e=arguments[0];return e("div",{style:{zIndex:this.zIndex},class:[(t={},t[x["e"]]=this.border,t),j({fixed:this.fixed,"safe-area-inset-bottom":this.safeAreaInsetBottom})]},[this.slots()])}}),B={components:(i={},Object(o["a"])(i,A.name,A),Object(o["a"])(i,m.name,m),i),data:function(){return{tabbarActive:0}}},C=B,S=(n("36cb"),n("2877")),$=Object(S["a"])(C,a,r,!1,null,null,null);e["default"]=$.exports},9312:function(t,e,n){},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("2b0e");function a(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function r(t,e){var n,r;void 0===e&&(e={});var o=e.indexKey||"index";return i["a"].extend({inject:(n={},n[t]={default:null},n),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=a(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9d31":function(t,e,n){},ae73:function(t,e,n){}}]);
//# sourceMappingURL=chunk-da5a0600.ef11c887.js.map