import{T}from"./Translations.727ed0a4.js";import{_ as m}from"./index.a4bad928.js";import{I as u,Y as w,i as _,o as i,s as l,t as n,C as h,B as x,H as N,R as B,a3 as S,d as y,r as o,k as p,l as s,m as d,V as j,J as I,y as L,M as $,O as H}from"./vendor.2e39af1d.js";const J=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=B(),t=w();return{title:_(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},O={class:"action-list"};var R=m(J,[["render",function(a,t,f,g,k,b){return i(),l("div",M,[n("ul",O,[(i(),l(h,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+N(e),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const V=u({name:"NavigationAvatar",components:{SwitchButton:S},setup(){const a=w();return{commandList:_(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{y.remove("token"),y.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),Y=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),q={class:"navigation-avatar__dropdown-command"},z=u({name:"NavigationNavBar",components:{Translations:T,NavigationSideAction:R,NavigationAvatar:m(V,[["render",function(a,t,f,g,k,b){const e=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),A=o("el-dropdown");return i(),p(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(c,null,{default:s(()=>[(i(!0),l(h,null,x(a.commandList,(v,C)=>(i(),p(r,{key:C,onClick:F=>a.handleCommand(v)},{default:s(()=>[n("div",q,[d(e,null,{default:s(()=>[(i(),p(j(v.icon)))]),_:2},1024),n("span",null,N(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[Y]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),D={class:"navbar-header-box"},E=(a=>($("data-v-18ef2163"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var Q=m(z,[["render",function(a,t,f,g,k,b){const e=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),l("div",null,[n("header",{class:L(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",D,[I(a.$slots,"default",{},void 0,!0),E,d(e),d(r),d(c,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{Q as N};
