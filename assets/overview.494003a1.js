import{_ as i,R as n}from"./index.69400af4.js";import{J as c,u as v,h as d,j as u,r as l,o as p,l as f,m,v as w,I as j}from"./vendor.44354767.js";const h=c({name:"ResultOverView",setup(){const t=v(),e=d(),a=u(()=>t.state.Result.overviewData);return async function(){const{error:s,data:o}=await t.dispatch(n.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),x={style:{height:"100%",border:"1px solid"}};var _=i(h,[["render",function(t,e,a,s,o,D){const r=l("LayoutSection");return p(),f(r,{"flex-content":"",title:t.overviewData.title},{default:m(()=>[w("div",x,j(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-ea915b2c"]]);export{_ as default};
