import{_ as l}from"./index.7f6f6dbc.js";import{I as r,r as t,o as c,s as _,m as a,l as o,t as i,H as k,h as N,k as B}from"./vendor.9e0d4f5b.js";import{N as S}from"./NavBar.68f3fe5b.js";import"./Translations.abeb442e.js";const j=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},h={class:"go-back-title"},w=r({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:l(j,[["render",function(e,u,d,f,v,m){const n=t("IconFont"),s=t("router-link");return c(),_("div",y,[a(s,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[a(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",h,k(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-71a0f896"]])},setup:()=>(N(),{})}),x=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var A=l(w,[["render",function(e,u,d,f,v,m){const n=t("NavigationSideGoBack"),s=t("NavigationNavBar"),p=t("LayoutSection"),b=t("router-view"),g=t("LayoutArea");return c(),B(g,null,{top:o(()=>[a(s,{fixed:!1},{default:o(()=>[a(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[a(p,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[x]),_:1},8,["title"])]),content:o(()=>[a(b)]),_:1})}]]);export{A as default};
