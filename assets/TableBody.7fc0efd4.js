import{k as n,m,s as o,_ as d,e as u,h,o as s,b as r,d as i,F as j,p as g,t as y,j as b,c as P,q as f,u as L,r as N}from"./index.3eb1e278.js";import k from"./ProjectItem.b3722853.js";const w={id:Math.random(),name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},M=[{id:"111",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"",isPublished:!1,createTime:"2021.02.29"}],V=["Alabama","Alaska","Arizona","\u6D4B\u8BD5","\u6D4B\u8BD51","\u6D4B\u8BD52","\u6D4B\u8BD53","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],T=m("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await o(2e3);const a=await(t=e,n({url:"/project/list",method:"get",params:t}));var t;return this.filterResponse(a,null,()=>{})},async getProjectList(e){await o(2e3);const a={msg:"ok",error:0,data:{projectList:M}};return this.filterResponse(a,()=>{this.projectList=a.data.projectList},()=>{})},async createProject(e){return await o(1e3),this.filterResponse({msg:"ok",error:0,data:{}},()=>{this.projectList.push(JSON.parse(JSON.stringify(w)))})},async updateTogglePublishStatus(e){const a=await function(t){return n({url:"/project/toggle_status",method:"get",params:t})}(e);return this.filterResponse(a,null)}}}),_=""+new URL("project-empty.ef06cc83.svg",import.meta.url).href,v=u({name:"ProjectTableBody",components:{ProjectItem:k},setup(){const e=T();return{projectList:h(()=>e.projectList)}}}),I={class:"project-table-body-container"},S={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},R=(e=>(f("data-v-15da802b"),e=e(),L(),e))(()=>i("img",{src:_,alt:"Empty"},null,-1)),C=d(v,[["render",function(e,a,t,x,A,D){const c=N("ProjectItem");return s(),r("div",I,[i("div",S,[(s(!0),r(j,null,g(e.projectList,(l,p)=>(s(),P(c,{key:p,dataset:l},null,8,["dataset"]))),128)),e.projectList.length?b("",!0):(s(),r("div",O,[R,i("span",null,y(e._t("base.empty")),1)]))])])}],["__scopeId","data-v-15da802b"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{C as P,z as T,V as c,T as u};
