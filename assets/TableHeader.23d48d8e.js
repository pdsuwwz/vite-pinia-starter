import{_ as c}from"./index.74ae0913.js";import{I as i,Y as l,i as d,o as a,s as r,C as m,B as p,a1 as u,H as h}from"./vendor.6a9f388a.js";const j=i({name:"ProjectTableHeader",setup(){const e=l(),s=d(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);return{localeInject:e,list:s,getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),f={class:"project-table-header-container"};var g=c(j,[["render",function(e,s,t,w,I,_){return a(),r("ul",f,[(a(!0),r(m,null,p(e.list,(n,o)=>(a(),r("li",{key:o,style:u(e.getHeadItem(n)),class:"project-table-header-container__head-item"},h(n.name),5))),128))])}],["__scopeId","data-v-a09676c6"]]);export{g as default};