import{d as i}from"./pinia-b4ff8589.js";import{c,u as v}from"./request-722aa2a8.js";import{ai as u,t as l,e as d,v as p,E as _,G as m,a7 as w,y as f,L as y}from"./_plugin-vue_export-helper-d2e88b79.js";import"./type-0f39189c.js";const g={title:"测试标题总览",content:"测试内容 overview"},h=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:e=>e.demoList},actions:{async getResultOverview(e){await c(800);const t={msg:"ok",error:0,data:g};return this.filterResponse(t,({data:o})=>{this.overviewData=o},()=>{})}}});const D=l({name:"ResultOverView",setup(){const e=h(),t=v(),o=d(()=>e.overviewData);async function s(){const{error:r,data:a}=await e.getResultOverview({projectId:t.params.projectId})}return s(),{overviewData:o}}}),R={style:{height:"100%",border:"1px solid"}};function L(e,t,o,s,r,a){const n=w("LayoutSection");return p(),_(n,{"flex-content":"",title:e.overviewData.title},{default:m(()=>[f("div",R,y(e.overviewData.content),1)]),_:1},8,["title"])}const q=u(D,[["render",L],["__scopeId","data-v-428c9c62"]]);export{q as default};