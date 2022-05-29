import{I as x,a7 as R,u as S,h as _,L as d,S as I,Y as E,i as T,a8 as A,X as C,r as l,o as O,s as P,t,H as U,m as c,l as b,G as q,R as D,d as y,E as j,M as z,O as F}from"./vendor.483d3242.js";import G from"./ContainerLayout.65f9dbde.js";import{T as H}from"./Translations.fc1fc966.js";import{_ as M,u as V}from"./index.23339ee5.js";import"./lodash.97b33910.js";const X=x({name:"UserAccountLogin",components:{UserAccountContainerLayout:G,Promotion:R,Translations:H},setup(){const{proxy:a}=D(),g=V(),p=S(),v=_(),i=d(!0),n=d(""),o=d(""),u=I({email:"vite.admin@gmail.com",password:"123456"}),s=E(),m=T(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:i.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:o.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function e(r=!1){i.value=r}return e(!0),A(()=>{C(()=>{e(!1)})}),{isLoading:i,inputErrorEmail:n,inputErrorPassword:o,formData:u,configLogin:m,setLoading:e,onSubmit:function(r){i.value||r.validate(async h=>{if(!h)return;n.value="",o.value="",e(!0);const{error:L,data:f,msg:k}=await g.login(u);if(L)return n.value=" ",o.value=k,void e(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{j.success({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),w=a=>(z("data-v-fcdb7480"),a=a(),F(),a),Y={class:"user-account-login"},$={class:"user-account-nav"},B={class:"nav-left"},J=w(()=>t("div",{class:"nav-logo"},null,-1)),K=w(()=>t("div",{class:"nav-circle"},null,-1)),N={class:"nav-title"},Q={class:"nav-right"},W={class:"user-account-body"};var oa=M(X,[["render",function(a,g,p,v,i,n){const o=l("Translations"),u=l("Promotion"),s=l("el-icon"),m=l("UserAccountContainerLayout"),e=l("Footer");return O(),P("div",Y,[t("div",$,[t("div",B,[J,K,t("div",N,U(a._t("base.systemTitle")),1)]),t("div",Q,[c(o)])]),t("div",W,[c(m,q(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[c(s,null,{default:b(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(e)])}],["__scopeId","data-v-fcdb7480"]]);export{oa as default};
