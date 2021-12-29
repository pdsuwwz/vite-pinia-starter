import k from"./ContainerLayout.7c7ea5bc.js";import{T as j}from"./Translations.5339c714.js";import{I,a7 as R,u as S,h as T,O as d,P as _,W as C,i as P,a8 as A,V as E,r as c,o as O,s as U,t as e,H as $,m as u,l as b,G as q,M as D,d as y,$ as V,a0 as z}from"./vendor.0cf0bcc0.js";import{_ as G,u as H}from"./index.f3bcdcc5.js";import"./lodash.1da54982.js";const M=I({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:R,Translations:j},setup(){const{proxy:a}=D(),g=H(),p=S(),v=T(),o=d(!0),n=d(""),t=d(""),l=_({email:"vite.admin@gmail.com",password:"123456"}),s=C(),m=P(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function i(r=!1){o.value=r}return i(!0),A(()=>{E(()=>{i(!1)})}),{isLoading:o,inputErrorEmail:n,inputErrorPassword:t,formData:l,configLogin:m,setLoading:i,onSubmit:function(r){o.value||r.validate(async w=>{if(!w)return;n.value="",t.value="",i(!0);const{error:L,data:f,msg:x}=await g.login(l);if(L)return n.value=" ",t.value=x,void i(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(V("data-v-a00ff6aa"),a=a(),z(),a),W={class:"user-account-login"},B={class:"user-account-nav"},F={class:"nav-left"},J=h(()=>e("div",{class:"nav-logo"},null,-1)),K=h(()=>e("div",{class:"nav-circle"},null,-1)),N={class:"nav-title"},Q={class:"nav-right"},X={class:"user-account-body"};var ta=G(M,[["render",function(a,g,p,v,o,n){const t=c("Translations"),l=c("Promotion"),s=c("el-icon"),m=c("UserAccountContainerLayout");return O(),U("div",W,[e("div",B,[e("div",F,[J,K,e("div",N,$(a._t("base.systemTitle")),1)]),e("div",Q,[u(t)])]),e("div",X,[u(m,q(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[u(s,null,{default:b(()=>[u(l)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}],["__scopeId","data-v-a00ff6aa"]]);export{ta as default};
