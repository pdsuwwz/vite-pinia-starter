var b=Object.defineProperty,y=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var u=(a,o,s)=>o in a?b(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,i=(a,o)=>{for(var s in o||(o={}))M.call(o,s)&&u(a,s,o[s]);if(p)for(var s of p(o))z.call(o,s)&&u(a,s,o[s]);return a},m=(a,o)=>y(a,H(o));import{_ as g,u as T,l as A}from"./index.cbcaf24b.js";import{I as k,o as c,s as h,y as C,M as N,O,t as e,u as V,h as j,L as q,i as D,r as n,k as L,l as r,m as f,B as E,H as F,C as G}from"./vendor.12127e7d.js";const J=k({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),K=[(a=>(N("data-v-75d1e641"),a=a(),O(),a))(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],P=k({name:"TranslationsBox",components:{LogoIcon:g(J,[["render",function(a,o,s,d,l,v){return c(),h("span",{class:C(["locales-logo-icon",{"is-dark":a.dark}])},K,2)}],["__scopeId","data-v-75d1e641"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=V(),o=j(),s=T();return{localesList:q(A),currentLocale:D(()=>s.locale),handleChange:d=>{setTimeout(()=>{const{localeCode:l}=d;o.replace({params:m(i({},a.params),{locale:l})}),s.setLanguage({locale:l})})}}}}),Q={class:"icon-outer"},R={class:"custom-dropdown-item"};var X=g(P,[["render",function(a,o,s,d,l,v){const w=n("LogoIcon"),_=n("el-dropdown-item"),x=n("el-dropdown-menu"),B=n("el-dropdown");return c(),L(B,{class:C(["translations-box",{"is-dark":a.dark}]),"popper-class":"translations-box",trigger:"click",onCommand:a.handleChange},{dropdown:r(()=>[f(x,null,{default:r(()=>[(c(!0),h(G,null,E(a.localesList,(t,I)=>(c(),L(_,{key:I,command:t,disabled:a.currentLocale===t.localeCode},{default:r(()=>[e("span",R,F(t.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:r(()=>[e("span",Q,[f(w,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{X as T};
