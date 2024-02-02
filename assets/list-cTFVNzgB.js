import{_ as f,e as g,u as V,f as k,r as o,o as _,b as N,g as n,w as r,t as j,d as h,p as T,h as I,l as B,i as S,j as y,n as E,c as $,k as F,m as w,q as v,s as R,v as H}from"./index-PGGbMWb8.js";import{N as D}from"./NavBar-N9te3055.js";import M from"./ProjectForm-5AC_ioBS.js";import q from"./TableHeader-t_UGYUEC.js";import{c as A,P as U,u as x}from"./TableBody-kQMgBikF.js";import{l as z}from"./lodash-qqeCDsL4.js";import"./Translations-hBuqrXcL.js";import"./ProjectItem-Q8jxCVH4.js";const K=""+new URL("pinia-OAnYRDmB.svg",import.meta.url).href,O=g({name:"NavigationSideLogo",setup(){const e=V();return{title:k(()=>e.t("base.systemTitle"))}}}),Y=e=>(T("data-v-c640d1a9"),e=e(),I(),e),G={class:"side-logo-container"},J=Y(()=>h("img",{class:"side-logo-img",src:K,alt:"商标"},null,-1)),Q={class:"side-logo-title"};function W(e,t,s,a,c,l){const i=o("router-link");return _(),N("div",G,[n(i,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[J,h("h1",Q,j(e.title),1)]),_:1},8,["to"])])}const X=f(O,[["render",W],["__scopeId","data-v-c640d1a9"]]),Z=g({name:"SearchSelect",components:{Loading:B},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default(){return()=>{}}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=v(),s=S(!1),a=S("");return y(()=>e.modelValue,c=>{a.value=c},{immediate:!0}),y(()=>a,z.debounce(function(c){t.$emit("update:modelValue",c),t.$emit("change",c)},300)),{loading:s,searchValue:a}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText(e){return e.replace(new RegExp(/(<([^>]+)>)/,"gi"),"")},handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const s=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let a=[];if(!s){t(a);return}this.loading=!0,a=await this.fetch(s)||[],a.forEach(l=>{l.label=l.label.replace(new RegExp(s,"gi"),i=>`<span class="search-select-highlight">${i}</span>`)}),t(a),setTimeout(()=>{E(()=>{this.loading=!1})},200)}}}),ee=["title","innerHTML"];function te(e,t,s,a,c,l){const i=o("loading"),p=o("el-icon"),m=o("IconFont"),u=o("el-autocomplete");return _(),$(u,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.searchValue=d),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container",size:"default","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=d=>e.keydown(d))}),F({default:r(({item:d})=>[h("span",{title:e.getExecText(d.label),innerHTML:d.label},null,8,ee)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[n(p,{class:"search-loading-icon"},{default:r(()=>[n(i)]),_:1})]),key:"0"}:{name:"suffix",fn:r(()=>[h("i",{class:"search-icon"},[n(m,{icon:"iconsearch"})])]),key:"1"}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}const oe=f(Z,[["render",te]]),ae=g({name:"SearchCorporation",components:{SearchSelect:oe},emits:["select"],setup(){return{searchValue:S("")}},methods:{async handleFetchSearch(e){return A.map(t=>({value:t,label:t}))},handleSelectSearch(e){this.$emit("select",e)}}});function ne(e,t,s,a,c,l){const i=o("SearchSelect");return _(),$(i,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=p=>e.searchValue=p),fetch:e.handleFetchSearch,placeholder:"搜索项目","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}const re=f(ae,[["render",ne]]),se=g({name:"ProjectList",components:{NavigationNavBar:D,NavigationSideLogo:X,ProjectTableHeader:q,ProjectTableBody:U,SearchCorporation:re},setup(){const{proxy:e}=v(),t=x(),s=V();function a(){const l=H({name:"",corpName:"",notes:""});e.$ModalDialog({title:s.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:l,component:M},async onConfirm(i,p){if(!await i.validateRules())return Promise.reject(new Error("error"));p.fullLoading=!0;const{error:u,data:d}=await t.createProject(l);if(p.fullLoading=!1,u)return Promise.reject(new Error("error"));t.getProjectList()}})}function c(l){t.getProjectList({kw:l})}return c(),{localeInject:s,handleCreateProject:a,handleSelectSearch:c}}});function ce(e,t,s,a,c,l){const i=o("NavigationSideLogo"),p=o("NavigationNavBar"),m=o("IconFont"),u=o("el-button"),d=o("LayoutSection"),L=o("SearchCorporation"),P=o("ProjectTableHeader"),b=o("ProjectTableBody"),C=o("LayoutArea");return _(),$(C,null,{top:r(()=>[n(p,{fixed:!1},{default:r(()=>[n(i)]),_:1})]),side:r(()=>[n(d,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[n(u,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=le=>e.handleCreateProject())},{default:r(()=>[n(m,{icon:"iconestablish"}),R(" "+j(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[n(d,{"has-divider":"","flex-content":""},{head:r(()=>[n(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[n(P),n(b)]),_:1})]),_:1})}const _e=f(se,[["render",ce],["__scopeId","data-v-4baf0f51"]]);export{_e as default};