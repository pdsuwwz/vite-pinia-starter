import{e as i,I as n,u as c,i as v,r as d,o as l,k as u,l as w,t as f,H as m}from"./vendor.0cf0bcc0.js";import{s as p,_ as D}from"./index.f3bcdcc5.js";const g={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},R=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:t=>t.demoList},actions:{async getResultOverview(t){await p(800);const e={msg:"ok",error:0,data:g};return this.filterResponse(e,({data:a})=>{this.overviewData=a},()=>{})}}}),h=n({name:"ResultOverView",setup(){const t=R(),e=c(),a=v(()=>t.overviewData);return async function(){const{error:s,data:o}=await t.getResultOverview({projectId:e.params.projectId})}(),{overviewData:a}}}),j={style:{height:"100%",border:"1px solid"}};var L=D(h,[["render",function(t,e,a,s,o,x){const r=d("LayoutSection");return l(),u(r,{"flex-content":"",title:t.overviewData.title},{default:w(()=>[f("div",j,m(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-a93569d2"]]);export{L as default};
