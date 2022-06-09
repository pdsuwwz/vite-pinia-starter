var D=Object.defineProperty;var I=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o||(o={}))L.call(o,t)&&v(e,t,o[t]);if(I)for(var t of I(o))P.call(o,t)&&v(e,t,o[t]);return e};import{_ as V,e as j,f as E,o as a,b as m,d as i,c as b,j as g,J as U,t as u,g as d,w as c,F as w,p as A,P as O,Q as B,r as n,D as h,C as k,B as J,R as K,S as Q,A as R}from"./index.63f278d8.js";import{l as z}from"./lodash.a56a4f4a.js";const G=j({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=R(),o=E(!1);return{showPassword:o,tooglePassword:function(){o.value=!o.value},getInputItemAttrs:function(t){const r={},l=t.type==="password";return r.type=l?o.value?"text":"password":"text",y({clearable:!l,placeholder:t.placeholder},r)},getFormItemAttrs:function(t){return y({rules:B(t.rules)?t.rules.call(e):""},z.exports.omit(t,["rules"]))},getActionItemEvent:function(t){const r={};return Object.keys(t).forEach(l=>{r[l]=t[l].bind(e.$parent,e.$refs.boxForm)}),r},handleClickLink:function(t){t.click.call(e.$parent,e.$refs.boxForm)},onSubmit:function(){e.$emit("on-submit",e.$refs.boxForm)}}}}),H={class:"user-account-container-layout"},M={class:"form-title"},N={class:"form-title-icon"},T={class:"form-title-text"},W={class:"form-desc-text"},X={class:"form-custom-label"};var oe=V(G,[["render",function(e,o,t,r,l,Y){const C=n("IconFont"),F=n("el-link"),x=n("FontAwesomeIcon"),_=n("el-input"),$=n("el-form-item"),q=n("el-button"),S=n("el-form");return a(),m("div",H,[i("div",M,[i("div",N,[e.titleIcon?(a(),b(C,{key:0,icon:e.titleIcon},null,8,["icon"])):g("",!0),U(e.$slots,"titleIcon",{},void 0,!0)]),i("p",T,u(e.title),1),i("p",W,u(e.desc),1)]),d(S,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:o[1]||(o[1]=O(s=>e.onSubmit(),["enter"]))},{default:c(()=>[(a(!0),m(w,null,A(e.formConfig,(s,f)=>(a(),b($,K(k({key:f},e.getFormItemAttrs(s.attrs))),{default:c(()=>[i("div",X,[i("p",null,u(s.label),1),s.link?(a(),b(F,{key:0,type:"primary",underline:!1,onClick:p=>e.handleClickLink(s.link)},{default:c(()=>[h(u(s.link.text),1)]),_:2},1032,["onClick"])):g("",!0)]),d(_,k({modelValue:e.formData[s.attrs.prop],"onUpdate:modelValue":p=>e.formData[s.attrs.prop]=p},e.getInputItemAttrs(s)),J({_:2},[s.prefixIcon?{name:"prefix",fn:c(()=>[d(x,{class:"input-icon-prefix",icon:s.prefixIcon},null,8,["icon"])])}:void 0,s.type==="password"?{name:"suffix",fn:c(()=>[d(x,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:o[0]||(o[0]=p=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(a(!0),m(w,null,A(e.actionList,(s,f)=>(a(),m("div",{key:`${f}-`,class:"submit-form-action-list"},[d(q,k(s.attrs,{class:"submit-form-action-button"},Q(e.getActionItemEvent(s.on)||{})),{default:c(()=>[h(u(s.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-24950b2c"]]);export{oe as default};
