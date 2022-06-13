import{T as S}from"./Translations.6b9330f6.js";import{e as m,v as b,h,_ as p,o as i,b as d,d as n,F as N,p as x,t as A,A as T,H as B,I as _,r as e,c as u,w as s,g as l,a as I,J as L,n as $,q,u as j}from"./index.86bef402.js";const F=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),H={class:"side-action-container"},J={class:"action-list"};var z=p(F,[["render",function(a,t,f,g,k,w){return i(),d("div",H,[n("ul",J,[(i(),d(N,null,x(3,o=>n("li",{key:o,class:"action-item"}," Action "+A(o),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const D=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{_.remove("token"),_.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),E=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),G={class:"navigation-avatar__dropdown-command"};var K=p(D,[["render",function(a,t,f,g,k,w){const o=e("el-icon"),c=e("el-dropdown-item"),r=e("el-dropdown-menu"),y=e("el-dropdown");return i(),u(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(r,null,{default:s(()=>[(i(!0),d(N,null,x(a.commandList,(v,C)=>(i(),u(c,{key:C,onClick:Q=>a.handleCommand(v)},{default:s(()=>[n("div",G,[l(o,null,{default:s(()=>[(i(),u(I(v.icon)))]),_:2},1024),n("span",null,A(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[E]),_:1})}]]);const M=m({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:z,NavigationAvatar:K},props:{fixed:{type:Boolean,default:!0}}}),O={class:"navbar-header-box"},P=(a=>(q("data-v-18ef2163"),a=a(),j(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var V=p(M,[["render",function(a,t,f,g,k,w){const o=e("NavigationSideAction"),c=e("NavigationAvatar"),r=e("Translations");return i(),d("div",null,[n("header",{class:$(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",O,[L(a.$slots,"default",{},void 0,!0),P,l(o),l(c),l(r,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{V as N};