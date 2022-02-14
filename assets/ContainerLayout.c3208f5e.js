var j=Object.defineProperty;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(e,o,t)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o||(o={}))P.call(o,t)&&I(e,t,o[t]);if(v)for(var t of v(o))S.call(o,t)&&I(e,t,o[t]);return e};import{I as D,L as V,r as s,o as n,s as m,t as i,k,K as g,J as E,H as u,m as d,l as c,C as h,B as w,a5 as U,P as A,G as b,a2 as K,v as O,a6 as B,R as G}from"./vendor.858816ef.js";import{l as H}from"./lodash.e0f5f211.js";import{_ as J,i as R}from"./index.c46a4edc.js";const z=D({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=G(),o=V(!1);return{showPassword:o,tooglePassword:function(){o.value=!o.value},getInputItemAttrs:function(t){const r={},l=t.type==="password";return r.type=l?o.value?"text":"password":"text",y({clearable:!l,placeholder:t.placeholder},r)},getFormItemAttrs:function(t){return y({rules:R(t.rules)?t.rules.call(e):""},H.exports.omit(t,["rules"]))},getActionItemEvent:function(t){const r={};return Object.keys(t).forEach(l=>{r[l]=t[l].bind(e.$parent,e.$refs.boxForm)}),r},handleClickLink:function(t){t.click.call(e.$parent,e.$refs.boxForm)},onSubmit:function(){e.$emit("on-submit",e.$refs.boxForm)}}}}),M={class:"user-account-container-layout"},N={class:"form-title"},Q={class:"form-title-icon"},T={class:"form-title-text"},W={class:"form-desc-text"},X={class:"form-custom-label"};var ae=J(z,[["render",function(e,o,t,r,l,Y){const C=s("IconFont"),F=s("el-link"),x=s("FontAwesomeIcon"),_=s("el-input"),$=s("el-form-item"),q=s("el-button"),L=s("el-form");return n(),m("div",M,[i("div",N,[i("div",Q,[e.titleIcon?(n(),k(C,{key:0,icon:e.titleIcon},null,8,["icon"])):g("",!0),E(e.$slots,"titleIcon",{},void 0,!0)]),i("p",T,u(e.title),1),i("p",W,u(e.desc),1)]),d(L,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:o[1]||(o[1]=U(a=>e.onSubmit(),["enter"]))},{default:c(()=>[(n(!0),m(h,null,w(e.formConfig,(a,f)=>(n(),k($,O(b({key:f},e.getFormItemAttrs(a.attrs))),{default:c(()=>[i("div",X,[i("p",null,u(a.label),1),a.link?(n(),k(F,{key:0,type:"primary",underline:!1,onClick:p=>e.handleClickLink(a.link)},{default:c(()=>[A(u(a.link.text),1)]),_:2},1032,["onClick"])):g("",!0)]),d(_,b({modelValue:e.formData[a.attrs.prop],"onUpdate:modelValue":p=>e.formData[a.attrs.prop]=p},e.getInputItemAttrs(a)),K({_:2},[a.prefixIcon?{name:"prefix",fn:c(()=>[d(x,{class:"input-icon-prefix",icon:a.prefixIcon},null,8,["icon"])])}:void 0,a.type==="password"?{name:"suffix",fn:c(()=>[d(x,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:o[0]||(o[0]=p=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(n(!0),m(h,null,w(e.actionList,(a,f)=>(n(),m("div",{key:`${f}-`,class:"submit-form-action-list"},[d(q,b(a.attrs,{class:"submit-form-action-button"},B(e.getActionItemEvent(a.on)||{})),{default:c(()=>[A(u(a.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-54c7339a"]]);export{ae as default};
