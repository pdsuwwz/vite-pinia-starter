import{k as n,m as p,s as o,_ as d,e as u,h as m,o as s,b as a,d as r,F as h,p as _,t as j,j as g,c as y,q as b,u as f,r as P}from"./index.f51deea2.js";import L from"./ProjectItem.6cf375e0.js";function N(e){return n({url:"/project/list",method:"get",params:e})}function k(e){return n({url:"/project/toggle_status",method:"get",params:e})}const S={id:Math.random(),name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},T=[{id:"111",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"",isPublished:!1,createTime:"2021.02.29"}],z=["Alabama","Alaska","Arizona","\u6D4B\u8BD5","\u6D4B\u8BD51","\u6D4B\u8BD52","\u6D4B\u8BD53","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],w=p("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await o(2e3);const t=await N(e);return this.filterResponse(t,null,()=>{})},async getProjectList(e){await o(2e3);const t={msg:"ok",error:0,data:{projectList:T}};return this.filterResponse(t,()=>{this.projectList=t.data.projectList},()=>{})},async createProject(e){const t={msg:"ok",error:0,data:{}};return await o(1e3),this.filterResponse(t,()=>{this.projectList.push(JSON.parse(JSON.stringify(S)))})},async updateTogglePublishStatus(e){const t=await k(e);return this.filterResponse(t,null)}}}),v=""+new URL("project-empty.ef06cc83.svg",import.meta.url).href;const I=u({name:"ProjectTableBody",components:{ProjectItem:L},setup(){const e=w();return{projectList:m(()=>e.projectList)}}}),M=e=>(b("data-v-15da802b"),e=e(),f(),e),B={class:"project-table-body-container"},C={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},D=M(()=>r("img",{src:v,alt:"Empty"},null,-1));function R(e,t,x,A,W,$){const i=P("ProjectItem");return s(),a("div",B,[r("div",C,[(s(!0),a(h,null,_(e.projectList,(c,l)=>(s(),y(i,{key:l,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?g("",!0):(s(),a("div",O,[D,r("span",null,j(e._t("base.empty")),1)]))])])}const V=d(I,[["render",R],["__scopeId","data-v-15da802b"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as P,E as T,z as c,w as u};