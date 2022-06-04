import{_ as p}from"./index.4bca7b31.js";import{I as g,Y as V,i as $,r as l,o as m,s as T,m as n,l as r,t as f,H as j,M as k,O as N,a0 as E,L as v,w,X as I,R as b,k as y,a2 as F,G as x,P as H,S as M}from"./vendor.1219cdbf.js";import{N as B}from"./NavBar.55b6f024.js";import R from"./ProjectForm.78b0aa2d.js";import U from"./TableHeader.a264390d.js";import{c as z,P as A,u as D}from"./TableBody.903f50e8.js";import{l as G}from"./lodash.541e48f9.js";import"./Translations.400f7106.js";import"./ProjectItem.51c71ab8.js";const K=g({name:"NavigationSideLogo",setup(){const e=V();return{title:$(()=>e.t("base.systemTitle"))}}}),O={class:"side-logo-container"},X=(e=>(k("data-v-75663c6a"),e=e(),N(),e))(()=>f("img",{class:"side-logo-img",src:"assets/pinia.7ed2c830.svg",alt:"\u5546\u6807"},null,-1)),Y={class:"side-logo-title"};var q=p(K,[["render",function(e,t,c,o,a,d){const s=l("router-link");return m(),T("div",O,[n(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[X,f("h1",Y,j(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-75663c6a"]]);const J=g({name:"SearchSelect",components:{Loading:E},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=b(),c=v(!1),o=v("");return w(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),w(()=>o,G.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{I(()=>{this.loading=!1})},200)}}}),Q=["title","innerHTML"],W=g({name:"SearchCorporation",components:{SearchSelect:p(J,[["render",function(e,t,c,o,a,d){const s=l("loading"),u=l("el-icon"),h=l("IconFont"),S=l("el-autocomplete");return m(),y(S,x({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container",size:"default","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),F({default:r(({item:i})=>[f("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,Q)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[n(u,{class:"search-loading-icon"},{default:r(()=>[n(s)]),_:1})])}:{name:"suffix",fn:r(()=>[f("i",{class:"search-icon"},[n(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:v("")}),methods:{handleFetchSearch:async e=>z.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}});var ie=p(g({name:"ProjectList",components:{NavigationNavBar:B,NavigationSideLogo:q,ProjectTableHeader:U,ProjectTableBody:A,SearchCorporation:p(W,[["render",function(e,t,c,o,a,d){const s=l("SearchSelect");return m(),y(s,x({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=b(),t=D(),c=V();function o(a){t.getProjectList({kw:a})}return o(),{localeInject:c,handleCreateProject:function(){const a=M({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:a,component:R},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.createProject(a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.getProjectList()}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=l("NavigationSideLogo"),u=l("NavigationNavBar"),h=l("IconFont"),S=l("el-button"),i=l("LayoutSection"),L=l("SearchCorporation"),P=l("ProjectTableHeader"),_=l("ProjectTableBody"),C=l("LayoutArea");return m(),y(C,null,{top:r(()=>[n(u,{fixed:!1},{default:r(()=>[n(s)]),_:1})]),side:r(()=>[n(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[n(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=Z=>e.handleCreateProject())},{default:r(()=>[n(h,{icon:"iconestablish"}),H(" "+j(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[n(i,{"has-divider":"","flex-content":""},{head:r(()=>[n(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[n(P),n(_)]),_:1})]),_:1})}],["__scopeId","data-v-dae878bc"]]);export{ie as default};