import{T as B}from"./Translations.b52d9d2c.js";import{_ as u}from"./index.4087c728.js";import{I as p,Y as b,i as h,o as i,s as d,t as n,C as N,B as x,H as y,R as S,a3 as T,d as _,r as o,k as m,l as s,m as l,V as I,J as L,y as $,M as j,O as H}from"./vendor.80e50c53.js";const J=p({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=S(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},O={class:"action-list"};var R=u(J,[["render",function(a,t,f,g,k,w){return i(),d("div",M,[n("ul",O,[(i(),d(N,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+y(e),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const V=p({name:"NavigationAvatar",components:{SwitchButton:T},setup(){const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{_.remove("token"),_.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),Y=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),q={class:"navigation-avatar__dropdown-command"},z=p({name:"NavigationNavBar",components:{Translations:B,NavigationSideAction:R,NavigationAvatar:u(V,[["render",function(a,t,f,g,k,w){const e=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),A=o("el-dropdown");return i(),m(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(c,null,{default:s(()=>[(i(!0),d(N,null,x(a.commandList,(v,C)=>(i(),m(r,{key:C,onClick:F=>a.handleCommand(v)},{default:s(()=>[n("div",q,[l(e,null,{default:s(()=>[(i(),m(I(v.icon)))]),_:2},1024),n("span",null,y(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[Y]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),D={class:"navbar-header-box"},E=(a=>(j("data-v-18ef2163"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var Q=u(z,[["render",function(a,t,f,g,k,w){const e=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),d("div",null,[n("header",{class:$(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",D,[L(a.$slots,"default",{},void 0,!0),E,l(e),l(r),l(c,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{Q as N};