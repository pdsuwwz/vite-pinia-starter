import{I as v,Z as h,O as b,i as g,r as o,o as n,k as c,l as d,t,m as p,H as i,D as m,K as x,y,M as w}from"./vendor.0cf0bcc0.js";import{_ as P,s as k}from"./index.f3bcdcc5.js";const I=v({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(a){const{proxy:s}=w(),e=b(!1),r=g(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(_){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},O={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},D={class:"project-item__name-desc__corpname-maintext text_nowrap"},F={class:"project-item__name-desc__fullname text_nowrap"},H={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},K={class:"project-item-action__icon"},M={class:"project-item-action__status"};var z=P(I,[["render",function(a,s,e,r,_,N){const l=o("IconFont"),u=o("Tooltip"),f=o("Loading"),j=o("router-link");return n(),c(j,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:d(()=>[t("ul",L,[t("li",$,[t("div",A,[t("div",C,[p(l,{icon:"iconfile"})]),t("div",O,[t("div",T,[t("span",D,i(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[a.dataset.notes?(n(),c(u,{key:0,content:a.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):x("",!0)])]),t("p",F,i(a.dataset.name),1)])])]),t("li",H,i(a.dataset.createTime),1),t("li",{class:y(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=m(S=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",K,[a.isLoading?(n(),c(f,{key:1,class:"transform-rotate360"})):(n(),c(l,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",M,i(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-1b7a4cc6"]]);export{z as default};
