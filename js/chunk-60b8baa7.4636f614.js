(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b8baa7"],{"113e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"transfer-registrar-container"},[a("div",{staticClass:"transfer-registrar-content"},[a("h3",[t._v("Congratulations! "+t._s(t.fullDomainName)+" is available!")]),a("p",[t._v("Do you want to register "+t._s(t.fullDomainName)+"?")]),a("div",{staticClass:"secret-phrase-container"},[a("label",{attrs:{for:"range-slider"}},[t._v("How many years do you want to keep the name?")]),a("b-form-input",{attrs:{id:"range-slider",type:"range",min:"1",max:"20",step:"1"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),a("div",[t._v(t._s(t.duration>1?t.duration+" years":t.duration+" year"))])],1),a("div",{staticClass:"transfer-registrar-button"},[a("button",{class:["large-round-button-green-filled",t.loading?"disabled":""],on:{click:t.createCommitment}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("\n          Register\n        ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),a("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],r=(a("c5f6"),a("539d")),s={components:{"interface-bottom-text":r["a"]},props:{hostName:{type:String,default:""},createCommitment:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},data:function(){return{duration:"1"}},computed:{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}},watch:{duration:function(t){this.$emit("updateDuration",Number(t))}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},o=s,u=(a("fa86"),a("2877")),l=Object(u["a"])(o,n,i,!1,null,"6e95587e",null),c=l.exports;a.d(e,"default",function(){return c})},"6afd":function(t,e,a){},fa86:function(t,e,a){"use strict";var n=a("6afd"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-60b8baa7.4636f614.js.map