import{I as j,a0 as v,L as h,i as b,r as e,o,k as n,l as r,t as a,m as d,H as i,D as p,K as g,y,E as w}from"./vendor.05596bad.js";import{_ as x,s as P}from"./index.0aa37d0f.js";const k=j({name:"ProjectItem",components:{Loading:v},props:{dataset:{type:Object,default:()=>({})}},setup(t){const s=h(!1),l=b(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await P(300),s.value=!1,w.success({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),I={class:"project-item-container"},L={style:{flex:"1","min-width":"0"}},$={class:"project-item__name"},A={class:"project-item__name-left"},C={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},D={class:"project-item__name-desc__corpname-maintext text_nowrap"},E={class:"project-item__name-desc__fullname text_nowrap"},F={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},H={class:"project-item-action__icon"},K={class:"project-item-action__status"};var B=x(k,[["render",function(t,s,l,m,N,O){const c=e("IconFont"),_=e("Tooltip"),u=e("Loading"),f=e("router-link");return o(),n(f,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:r(()=>[a("ul",I,[a("li",L,[a("div",$,[a("div",A,[d(c,{icon:"iconfile"})]),a("div",C,[a("div",T,[a("span",D,i(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[t.dataset.notes?(o(),n(_,{key:0,content:t.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):g("",!0)])]),a("p",E,i(t.dataset.name),1)])])]),a("li",F,i(t.dataset.createTime),1),a("li",{class:y(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=p(S=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",H,[t.isLoading?(o(),n(u,{key:1,class:"transform-rotate360"})):(o(),n(c,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",K,i(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-cda5c1b2"]]);export{B as default};
