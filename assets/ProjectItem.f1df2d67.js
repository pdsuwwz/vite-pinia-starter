import{I as v,a0 as h,L as g,i as x,r as o,o as n,k as i,l as d,t,m as p,H as c,D as m,K as y,y as b,R as w}from"./vendor.6ee7ee93.js";import{_ as P,s as k}from"./index.45921810.js";const I=v({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(a){const{proxy:s}=w(),e=g(!1),r=x(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(_){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},D={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},H={class:"project-item__name-desc__fullname text_nowrap"},K={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},N={class:"project-item-action__icon"},O={class:"project-item-action__status"};var B=P(I,[["render",function(a,s,e,r,_,R){const l=o("IconFont"),u=o("Tooltip"),j=o("Loading"),f=o("router-link");return n(),i(f,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:d(()=>[t("ul",L,[t("li",$,[t("div",A,[t("div",C,[p(l,{icon:"iconfile"})]),t("div",T,[t("div",D,[t("span",F,c(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[a.dataset.notes?(n(),i(u,{key:0,content:a.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):y("",!0)])]),t("p",H,c(a.dataset.name),1)])])]),t("li",K,c(a.dataset.createTime),1),t("li",{class:b(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=m(S=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",N,[a.isLoading?(n(),i(j,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",O,c(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-0c087a3c"]]);export{B as default};
