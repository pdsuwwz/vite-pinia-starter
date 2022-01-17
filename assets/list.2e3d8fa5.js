import{_ as m}from"./index.7f6f6dbc.js";import{I as p,Y as b,i as C,r as l,o as f,s as $,m as n,l as r,t as g,H as y,M as N,O as k,a0 as E,L as j,w,X as I,R as V,k as v,a2 as B,G as P,P as F,S as H}from"./vendor.9e0d4f5b.js";import{N as M}from"./NavBar.68f3fe5b.js";import R from"./ProjectForm.638c308f.js";import U from"./TableHeader.add91076.js";import{c as z,P as A,u as D}from"./TableBody.99cb23b1.js";import{l as G}from"./lodash.7d242fe7.js";import"./Translations.abeb442e.js";import"./ProjectItem.496d7111.js";const K=p({name:"NavigationSideLogo",setup(){const e=b();return{title:C(()=>e.t("base.systemTitle"))}}}),O={class:"side-logo-container"},X=(e=>(N("data-v-75663c6a"),e=e(),k(),e))(()=>g("img",{class:"side-logo-img",src:"assets/pinia.7ed2c830.svg",alt:"\u5546\u6807"},null,-1)),Y={class:"side-logo-title"};var q=m(K,[["render",function(e,t,c,o,a,d){const s=l("router-link");return f(),$("div",O,[n(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[X,g("h1",Y,y(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-75663c6a"]]);const J=p({name:"SearchSelect",components:{Loading:E},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=V(),c=j(!1),o=j("");return w(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),w(()=>o,G.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{I(()=>{this.loading=!1})},200)}}}),Q=["title","innerHTML"],W=p({name:"SearchCorporation",components:{SearchSelect:m(J,[["render",function(e,t,c,o,a,d){const s=l("loading"),u=l("el-icon"),h=l("IconFont"),S=l("el-autocomplete");return f(),v(S,P({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container",size:"medium","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),B({default:r(({item:i})=>[g("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,Q)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[n(u,{class:"search-loading-icon"},{default:r(()=>[n(s)]),_:1})])}:{name:"suffix",fn:r(()=>[g("i",{class:"search-icon"},[n(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:j("")}),methods:{handleFetchSearch:async e=>z.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}});var ie=m(p({name:"ProjectList",components:{NavigationNavBar:M,NavigationSideLogo:q,ProjectTableHeader:U,ProjectTableBody:A,SearchCorporation:m(W,[["render",function(e,t,c,o,a,d){const s=l("SearchSelect");return f(),v(s,P({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=V(),t=D(),c=b();function o(a){t.getProjectList({kw:a})}return o(),{localeInject:c,handleCreateProject:function(){const a=H({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:a,component:R},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.createProject(a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.getProjectList()}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=l("NavigationSideLogo"),u=l("NavigationNavBar"),h=l("IconFont"),S=l("el-button"),i=l("LayoutSection"),x=l("SearchCorporation"),L=l("ProjectTableHeader"),T=l("ProjectTableBody"),_=l("LayoutArea");return f(),v(_,null,{top:r(()=>[n(u,{fixed:!1},{default:r(()=>[n(s)]),_:1})]),side:r(()=>[n(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[n(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=Z=>e.handleCreateProject())},{default:r(()=>[n(h,{icon:"iconestablish"}),F(" "+y(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[n(i,{"has-divider":"","flex-content":""},{head:r(()=>[n(x,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[n(L),n(T)]),_:1})]),_:1})}],["__scopeId","data-v-dae878bc"]]);export{ie as default};
