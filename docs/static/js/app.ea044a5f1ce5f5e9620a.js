webpackJsonp([1],{"9M+g":function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container"},[t("router-view")],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(e){n("ks0q")},null,null).exports,a=n("/ocq"),u={name:"Number",props:{number:{type:Number,required:!0,default:1},isOpened:{type:Boolean,required:!1,default:!1},isJustOpened:{type:Boolean,required:!1,default:!1}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light"}},[this._v("\n  "+this._s(this.number)+"\n")])},staticRenderFns:[]},l={name:"Bingo",components:{Number:n("VU/8")(u,o,!1,null,null,null).exports},data:function(){return{minValue:1,maxValue:75,numbers:[]}},created:function(){this.initData()},methods:{initData:function(){for(var e=[],t=this.minValue;t<=this.maxValue;t++)e.push({number:t,isOpened:!1,isJustOpend:!1});this.numbers=e}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bingo"},[t("h1",[this._v("BINGO")]),this._v(" "),t("b-button",{attrs:{variant:"primary"}},[this._v("\n    引く\n  ")]),this._v(" "),t("b-container",[t("b-row",this._l(this.numbers,function(e){return t("b-col",{key:e.number,attrs:{cols:"1"}},[t("number",{attrs:{number:e.number,"is-opened":e.isOpened,"is-just-opened":e.isJustOpened}})],1)}),1)],1)],1)},staticRenderFns:[]},p=n("VU/8")(l,c,!1,null,null,null).exports;r.default.use(a.a);var d=new a.a({routes:[{path:"/",name:"bingo",component:p}]}),m=n("Tqaz");n("Jmt5"),n("9M+g");r.default.use(m.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:d,components:{App:i},template:"<App/>"})},ks0q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ea044a5f1ce5f5e9620a.js.map