import{T as C}from"./Translations.438e7b4c.js";import{e as m,v as w,h as N,_ as f,o as t,b as l,d as e,F as k,p as y,t as b,A as S,H as B,c as v,w as d,g as r,a as L,I as $,r as a,J as I,n as T,q as j,u as D}from"./index.65a5b2a8.js";const F=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),i=w();function c(){n.$emit("click")}return{title:N(()=>i.t("base.systemTitle")),handleClick:c}}}),V={class:"side-action-container"},q={class:"action-list"};function z(n,i,c,o,g,h){return t(),l("div",V,[e("ul",q,[(t(),l(k,null,y(3,s=>e("li",{key:s,class:"action-item"}," Action "+b(s),1)),64))])])}const E=f(F,[["render",z],["__scopeId","data-v-7f66d8bd"]]),H=""+new URL("navigation-avatar.d1925bd8.webp",import.meta.url).href;const J=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){const n=w();return{commandList:N(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:o=>{o==null||o.click()}}}}),R=e("div",{style:{padding:"0 12px"}},[e("img",{src:H})],-1),U={class:"navigation-avatar__dropdown-command"};function G(n,i,c,o,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),x=a("el-dropdown");return t(),v(x,{class:"navigation-avatar",trigger:"click"},{dropdown:d(()=>[r(p,null,{default:d(()=>[(t(!0),l(k,null,y(n.commandList,(u,A)=>(t(),v(_,{key:A,onClick:X=>n.handleCommand(u)},{default:d(()=>[e("div",U,[r(s,null,{default:d(()=>[(t(),v(L(u.icon)))]),_:2},1024),e("span",null,b(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:d(()=>[R]),_:1})}const K=f(J,[["render",G]]);const M=m({name:"NavigationNavBar",components:{Translations:C,NavigationSideAction:E,NavigationAvatar:K},props:{fixed:{type:Boolean,default:!0}}}),O=n=>(j("data-v-485061ae"),n=n(),D(),n),P={class:"navbar-header-box"},Q=O(()=>e("div",{style:{flex:"1"}},null,-1));function W(n,i,c,o,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return t(),l("div",null,[e("header",{class:T(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[e("div",P,[I(n.$slots,"default",{},void 0,!0),Q,r(s),r(_),r(p,{dark:""})])],2)])}const nn=f(M,[["render",W],["__scopeId","data-v-485061ae"]]);export{nn as N};
