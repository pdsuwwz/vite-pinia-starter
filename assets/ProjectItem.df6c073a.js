import{I as v,a0 as h,L as b,i as g,r as o,o as n,k as i,l as d,t as a,m as p,H as c,D as m,K as x,y,R as w}from"./vendor.f84b6935.js";import{_ as P,s as k}from"./index.0a0adf7b.js";const I=v({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(t){const{proxy:s}=w(),e=b(!1),r=g(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(_){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},D={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},H={class:"project-item__name-desc__fullname text_nowrap"},K={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},N={class:"project-item-action__icon"},O={class:"project-item-action__status"};var B=P(I,[["render",function(t,s,e,r,_,R){const l=o("IconFont"),u=o("Tooltip"),f=o("Loading"),j=o("router-link");return n(),i(j,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:d(()=>[a("ul",L,[a("li",$,[a("div",A,[a("div",C,[p(l,{icon:"iconfile"})]),a("div",T,[a("div",D,[a("span",F,c(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[t.dataset.notes?(n(),i(u,{key:0,content:t.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):x("",!0)])]),a("p",H,c(t.dataset.name),1)])])]),a("li",K,c(t.dataset.createTime),1),a("li",{class:y(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=m(S=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",N,[t.isLoading?(n(),i(f,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",O,c(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-0c087a3c"]]);export{B as default};
