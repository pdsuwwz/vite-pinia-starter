import{d as p}from"./pinia-545f2afc.js";import{s as n,c as o}from"./request-e8bb67ec.js";import d from"./ProjectItem-262a54f5.js";import{ai as m,x as u,e as h,y as s,z as a,A as r,F as _,a0 as j,O as g,L as y,H as f,ak as b,al as P,a7 as L}from"./_plugin-vue_export-helper-cb68d2ee.js";function N(e){return n({url:"/project/list",method:"get",params:e})}function k(e){return n({url:"/project/toggle_status",method:"get",params:e})}const S={id:Math.random(),name:"测试项目",corpName:"测试公司",notes:"备注",isPublished:!1,createTime:"2021.01.29"},T=[{id:"111",name:"测试项目",corpName:"测试公司",notes:"备注备注",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目",corpName:"测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司",notes:"备注备注",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"测试项目",corpName:"测试公司",notes:"",isPublished:!1,createTime:"2021.02.29"}],E=["Alabama","Alaska","Arizona","测试","测试1","测试2","测试3","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],w=p("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await o(2e3);const t=await N(e);return this.filterResponse(t,null,()=>{})},async getProjectList(e){await o(2e3);const t={msg:"ok",error:0,data:{projectList:T}};return this.filterResponse(t,()=>{this.projectList=t.data.projectList},()=>{})},async createProject(e){const t={msg:"ok",error:0,data:{}};return await o(1e3),this.filterResponse(t,()=>{this.projectList.push(JSON.parse(JSON.stringify(S)))})},async updateTogglePublishStatus(e){const t=await k(e);return this.filterResponse(t,null)}}}),v=""+new URL("project-empty-ef06cc83.svg",import.meta.url).href;const I=u({name:"ProjectTableBody",components:{ProjectItem:d},setup(){const e=w();return{projectList:h(()=>e.projectList)}}}),M=e=>(b("data-v-15da802b"),e=e(),P(),e),B={class:"project-table-body-container"},C={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},D=M(()=>r("img",{src:v,alt:"Empty"},null,-1));function R(e,t,A,V,W,$){const i=L("ProjectItem");return s(),a("div",B,[r("div",C,[(s(!0),a(_,null,j(e.projectList,(c,l)=>(s(),f(i,{key:l,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?y("",!0):(s(),a("div",O,[D,r("span",null,g(e._t("base.empty")),1)]))])])}const x=m(I,[["render",R],["__scopeId","data-v-15da802b"]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{x as P,K as T,E as c,w as u};