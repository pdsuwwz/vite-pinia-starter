import{d as p}from"./pinia-b4ff8589.js";import{s as n,c as o}from"./request-939365e8.js";import d from"./ProjectItem-f65ca6c5.js";import{ai as m,t as u,e as h,v as s,x as a,y as r,F as _,a1 as j,L as g,J as y,E as f,ak as b,al as P,a7 as L}from"./_plugin-vue_export-helper-d2e88b79.js";function N(e){return n({url:"/project/list",method:"get",params:e})}function k(e){return n({url:"/project/toggle_status",method:"get",params:e})}const S={id:Math.random(),name:"测试项目",corpName:"测试公司",notes:"备注",isPublished:!1,createTime:"2021.01.29"},T=[{id:"111",name:"测试项目",corpName:"测试公司",notes:"备注备注",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目测试项目",corpName:"测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司测试公司",notes:"备注备注",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"测试项目",corpName:"测试公司",notes:"",isPublished:!1,createTime:"2021.02.29"}],H=["Alabama","Alaska","Arizona","测试","测试1","测试2","测试3","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],v=p("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await o(2e3);const t=await N(e);return this.filterResponse(t,null,()=>{})},async getProjectList(e){await o(2e3);const t={msg:"ok",error:0,data:{projectList:T}};return this.filterResponse(t,()=>{this.projectList=t.data.projectList},()=>{})},async createProject(e){const t={msg:"ok",error:0,data:{}};return await o(1e3),this.filterResponse(t,()=>{this.projectList.push(JSON.parse(JSON.stringify(S)))})},async updateTogglePublishStatus(e){const t=await k(e);return this.filterResponse(t,null)}}}),w=""+new URL("project-empty-ef06cc83.svg",import.meta.url).href;const I=u({name:"ProjectTableBody",components:{ProjectItem:d},setup(){const e=v();return{projectList:h(()=>e.projectList)}}}),M=e=>(b("data-v-15da802b"),e=e(),P(),e),B={class:"project-table-body-container"},C={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},D=M(()=>r("img",{src:w,alt:"Empty"},null,-1));function R(e,t,V,A,J,W){const i=L("ProjectItem");return s(),a("div",B,[r("div",C,[(s(!0),a(_,null,j(e.projectList,(c,l)=>(s(),f(i,{key:l,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?y("",!0):(s(),a("div",O,[D,r("span",null,g(e._t("base.empty")),1)]))])])}const x=m(I,[["render",R],["__scopeId","data-v-15da802b"]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{x as P,K as T,H as c,v as u};