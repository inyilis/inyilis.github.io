(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{dd43:function(t,a,e){},f820:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-bottom-navigation",{attrs:{value:t.value,color:"teal",grow:""}},[e("v-btn",[e("span",[t._v("Recents")]),e("v-icon",[t._v("mdi-history")])],1),e("v-btn",[e("span",[t._v("Favorites")]),e("v-icon",[t._v("mdi-heart")])],1),e("v-btn",[e("span",[t._v("Nearby")]),e("v-icon",[t._v("mdi-map-marker")])],1)],1)},o=[],n=e("2877"),s=e("6544"),l=e.n(s),r=e("5530"),c=(e("a9e3"),e("c7cd"),e("dd43"),e("3a66")),u=e("604c"),h=u["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return u["a"].options.computed.classes.call(this)}},methods:{genData:u["a"].options.methods.genData}}),v=e("a9ad"),d=e("24b2"),p=e("a452"),b=e("277e"),g=e("7560"),m=e("f2e7"),f=e("58df"),y=e("d9bd"),S=Object(f["a"])(Object(c["a"])("bottom",["height","inputValue"]),v["a"],d["a"],Object(m["b"])("inputValue"),p["a"],b["a"],g["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return b["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(y["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var a=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(a.directives=a.directives||[],a.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(h,this.setTextColor(this.color,a),this.$slots.default)}}),w=e("8336"),V=e("132d"),B={},O=Object(n["a"])(B,i,o,!1,null,null,null);a["default"]=O.exports;l()(O,{VBottomNavigation:S,VBtn:w["a"],VIcon:V["a"]})}}]);
//# sourceMappingURL=about.244ec06b.js.map