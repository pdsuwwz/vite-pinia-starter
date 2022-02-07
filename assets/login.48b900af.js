import k from"./ContainerLayout.b563b1f6.js";import{T as R}from"./Translations.727ed0a4.js";import{I as S,a7 as _,u as j,h as I,L as m,S as T,Y as C,i as A,a8 as E,X as O,r as l,o as P,s as U,t,H as q,m as c,l as b,G as D,R as $,d as y,M as z,O as F}from"./vendor.2e39af1d.js";import{_ as G,u as H}from"./index.a4bad928.js";import"./lodash.b22c86f9.js";const M=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:_,Translations:R},setup(){const{proxy:a}=$(),g=H(),p=j(),v=I(),n=m(!0),i=m(""),o=m(""),u=T({email:"vite.admin@gmail.com",password:"123456"}),s=C(),d=A(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:i.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:o.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function e(r=!1){n.value=r}return e(!0),E(()=>{O(()=>{e(!1)})}),{isLoading:n,inputErrorEmail:i,inputErrorPassword:o,formData:u,configLogin:d,setLoading:e,onSubmit:function(r){n.value||r.validate(async L=>{if(!L)return;i.value="",o.value="",e(!0);const{error:w,data:f,msg:x}=await g.login(u);if(w)return i.value=" ",o.value=x,void e(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(z("data-v-68fc2098"),a=a(),F(),a),V={class:"user-account-login"},X={class:"user-account-nav"},Y={class:"nav-left"},B=h(()=>t("div",{class:"nav-logo"},null,-1)),J=h(()=>t("div",{class:"nav-circle"},null,-1)),K={class:"nav-title"},N={class:"nav-right"},Q={class:"user-account-body"};var ta=G(M,[["render",function(a,g,p,v,n,i){const o=l("Translations"),u=l("Promotion"),s=l("el-icon"),d=l("UserAccountContainerLayout"),e=l("Footer");return P(),U("div",V,[t("div",X,[t("div",Y,[B,J,t("div",K,q(a._t("base.systemTitle")),1)]),t("div",N,[c(o)])]),t("div",Q,[c(d,D(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[c(s,null,{default:b(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(e)])}],["__scopeId","data-v-68fc2098"]]);export{ta as default};
