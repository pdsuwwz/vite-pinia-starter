import{_ as j,e as v,l as g,f as w,h as y,o,c as a,w as r,s as P,E as b,r as n,d as t,g as _,t as i,i as p,j as k,n as I}from"./index.c6a186cc.js";const $=v({name:"ProjectItem",components:{Loading:g},props:{dataset:{type:Object,default(){return{}}}},setup(e){const s=w(!1),l=y(()=>e.dataset.isPublished?"iconstop":"iconplay");async function d(m){s.value||(s.value=!0,await P(300),s.value=!1,b.success({message:"Successful!"}),e.dataset.isPublished=!e.dataset.isPublished)}return{isLoading:s,getActionIcon:l,handlePublish:d}}}),C={class:"project-item-container"},L={style:{flex:"1","min-width":"0"}},N={class:"project-item__name"},B={class:"project-item__name-left"},T={class:"project-item__name-desc"},V={class:"project-item__name-desc__corpname"},A={class:"project-item__name-desc__corpname-maintext text_nowrap"},E={class:"project-item__name-desc__fullname text_nowrap"},F={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},M={class:"project-item-action__icon"},S={class:"project-item-action__status"};function z(e,s,l,d,m,D){const c=n("IconFont"),u=n("Tooltip"),f=n("Loading"),h=n("router-link");return o(),a(h,{to:`${e.$route.params.locale?"/"+e.$route.params.locale+"/":"/"}result/${e.dataset.id}/overview`},{default:r(()=>[t("ul",C,[t("li",L,[t("div",N,[t("div",B,[_(c,{icon:"iconfile"})]),t("div",T,[t("div",V,[t("span",A,i(e.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[e.dataset.notes?(o(),a(u,{key:0,content:e.dataset.notes},{default:r(()=>[_(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):k("",!0)])]),t("p",E,i(e.dataset.name),1)])])]),t("li",F,i(e.dataset.createTime),1),t("li",{class:I(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=p(O=>e.handlePublish(e.dataset.id),["prevent"]))},[t("span",M,[e.isLoading?(o(),a(f,{key:1,class:"transform-rotate360"})):(o(),a(c,{key:0,icon:e.getActionIcon},null,8,["icon"]))]),t("span",S,i(e.dataset.isPublished?e._t("project.stop"):e._t("project.publish")),1)],2)])]),_:1},8,["to"])}const G=j($,[["render",z],["__scopeId","data-v-83516d41"]]);export{G as default};