import{I as j,a0 as v,L as h,i as b,r as e,o,k as n,l as r,t,m as d,H as i,D as p,K as g,y,E as w}from"./vendor.aed31b4d.js";import{_ as x,s as P}from"./index.1cc221fc.js";const k=j({name:"ProjectItem",components:{Loading:v},props:{dataset:{type:Object,default:()=>({})}},setup(a){const s=h(!1),l=b(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await P(300),s.value=!1,w.success({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),I={class:"project-item-container"},L={style:{flex:"1","min-width":"0"}},$={class:"project-item__name"},A={class:"project-item__name-left"},C={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},D={class:"project-item__name-desc__corpname-maintext text_nowrap"},E={class:"project-item__name-desc__fullname text_nowrap"},F={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},H={class:"project-item-action__icon"},K={class:"project-item-action__status"};var B=x(k,[["render",function(a,s,l,m,N,O){const c=e("IconFont"),_=e("Tooltip"),u=e("Loading"),f=e("router-link");return o(),n(f,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:r(()=>[t("ul",I,[t("li",L,[t("div",$,[t("div",A,[d(c,{icon:"iconfile"})]),t("div",C,[t("div",T,[t("span",D,i(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[a.dataset.notes?(o(),n(_,{key:0,content:a.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):g("",!0)])]),t("p",E,i(a.dataset.name),1)])])]),t("li",F,i(a.dataset.createTime),1),t("li",{class:y(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=p(S=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",H,[a.isLoading?(o(),n(u,{key:1,class:"transform-rotate360"})):(o(),n(c,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",K,i(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-cda5c1b2"]]);export{B as default};
