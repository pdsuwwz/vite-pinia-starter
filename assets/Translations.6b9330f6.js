var I=Object.defineProperty,M=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var u=(a,o,s)=>o in a?I(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,i=(a,o)=>{for(var s in o||(o={}))z.call(o,s)&&u(a,s,o[s]);if(p)for(var s of p(o))H.call(o,s)&&u(a,s,o[s]);return a},m=(a,o)=>M(a,y(o));import{e as f,_ as k,o as c,b as h,n as C,q as T,u as N,d as e,K as q,L as A,M as F,f as K,N as V,h as j,r as n,c as g,w as r,g as L,p as D,t as E,F as G}from"./index.86bef402.js";const J=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),O=[(a=>(T("data-v-75d1e641"),a=a(),N(),a))(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))];var P=k(J,[["render",function(a,o,s,d,l,v){return c(),h("span",{class:C(["locales-logo-icon",{"is-dark":a.dark}])},O,2)}],["__scopeId","data-v-75d1e641"]]);const Q=f({name:"TranslationsBox",components:{LogoIcon:P},props:{dark:{type:Boolean,default:!1}},setup(){const a=q(),o=A(),s=F();return{localesList:K(V),currentLocale:j(()=>s.locale),handleChange:d=>{setTimeout(()=>{const{localeCode:l}=d;o.replace({params:m(i({},a.params),{locale:l})}),s.setLanguage({locale:l})})}}}}),R={class:"icon-outer"},S={class:"custom-dropdown-item"};var X=k(Q,[["render",function(a,o,s,d,l,v){const w=n("LogoIcon"),_=n("el-dropdown-item"),b=n("el-dropdown-menu"),x=n("el-dropdown");return c(),g(x,{class:C(["translations-box",{"is-dark":a.dark}]),"popper-class":"translations-box",trigger:"click",onCommand:a.handleChange},{dropdown:r(()=>[L(b,null,{default:r(()=>[(c(!0),h(G,null,D(a.localesList,(t,B)=>(c(),g(_,{key:B,command:t,disabled:a.currentLocale===t.localeCode},{default:r(()=>[e("span",S,E(t.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:r(()=>[e("span",R,[L(w,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{X as T};