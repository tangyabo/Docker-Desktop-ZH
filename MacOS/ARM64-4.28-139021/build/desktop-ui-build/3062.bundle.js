"use strict";(globalThis.webpackChunk_docker_desktop_ui=globalThis.webpackChunk_docker_desktop_ui||[]).push([[3062],{36714:(e,t,n)=>{var r=n(64836);t.Z=void 0;var i=r(n(64938)),o=n(85893),c=(0,i.default)((0,o.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East");t.Z=c},43062:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>z,WelcomeSurveyScreen:()=>z});var r=n(67294),i=n(43927),o=n(36714),c=n(88884),s=n(69397),a=n(19809),l=n(53640),d=n(20847),u=n(70785),p=n(74509),m=n(40476),h=n(16651),x=n(21987),g=n(21368),y=n(68061),k=n(26447),v=n(22715),j=n(23972),S=n(96486),b=n(79655),f=n(35692),Z=n(67270),w=n(3514),W=n(75485),C=n(44744),B=n(50084),D=n(66852),I=n(25416),P=n(85893);const _=["全栈开发人员","前端开发人员","后端开发人员","站点可靠性工程师","平台工程师","开发运营专家","基础架构经理","系统管理员","安全工程师","数据分析师","产品经理","老师","学生","其他"],F="Other",L=["本地开发","学习或教学","调试镜像","检查镜像","数据科学","部署应用程序","测试应用程序","业余爱好项目","对于工作","我不知道","人工智能/机器学习",F],T=[...(0,S.shuffle)(L.filter((e=>!["其他","我不知道"].includes(e)))),"我不知道",F];var O=function(e){return e.WelcomeSurveySubmitted="WelcomeSurveySubmitted",e.WelcomeSurveySkipped="WelcomeSurveySkipped",e.WelcomeSurveyDisplayed="WelcomeSurveyDisplayed",e.WelcomeSurveyBackButtonClicked="WelcomeSurveyBackButtonClicked",e}(O||{});const H="eventWelcomeSurvey";function z(){const[e]=(0,b.lr)(),t=e.get("do-not-randomize-order"),[n,S]=(0,r.useState)(1),[z,A]=(0,r.useState)(""),[E,R]=(0,r.useState)([]),[M,U]=(0,r.useState)(""),$=(0,W.a)(),[,q]=(0,C._)("welcome-survey-response",{}),G=(0,B.U)("DockerProjects"),J=""!==z||E.length>0,K="true"===t?L:T;(0,r.useEffect)((()=>{desktopIpcClient.analytics.track(H,{action:O.WelcomeSurveyDisplayed}).catch((e=>{D.x7.notify(e)}))}),[]);const N=e=>{A(e.target.value),S(2)};return(0,P.jsx)(I.e,{children:(0,P.jsxs)(w.A,{title:"欢迎",hideFooter:!0,children:[(0,P.jsx)(Z.B,{}),(0,P.jsx)(f.H,{children:(0,P.jsx)(k.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:e=>({marginTop:e.spacing(11),marginBottom:e.spacing(2)}),children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(x.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",p:e=>e.spacing(4)},children:[(0,P.jsx)(k.Z,{children:(0,P.jsx)(c.Z,{sx:{width:"56px",height:"56px",mb:e=>e.spacing(2),backgroundColor:e=>e.palette.docker.blue[100]},children:(0,P.jsx)(i.Z,{sx:{width:"32px",height:"32px",color:e=>e.palette.docker.blue[600]}})})}),(0,P.jsx)(j.Z,{id:"Welcome Survey",gutterBottom:!0,variant:"h3",children:"欢迎调查"}),(0,P.jsx)(j.Z,{mb:e=>e.spacing(4),variant:"body1",children:1===n?"第1步(共2步)":"第2步(共2步)"}),(0,P.jsx)("form",{"aria-labelledby":"欢迎调查",onSubmit:e=>{e.preventDefault();const t={role:z,uses:E,other_use:E.includes(F)?M:void 0};desktopIpcClient.analytics.track(H,{action:O.WelcomeSurveySubmitted,welcomeSurveyResponse:t}).catch((e=>{D.x7.notify(e)})),q(t),$(G?"/dashboard/docker-projects":"/dashboard/containers",{replace:!0})},children:(0,P.jsx)(k.Z,{direction:"column",width:440,children:(0,P.jsxs)(u.Z,{children:[1===n&&(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(l.Z,{fullWidth:!0,component:"fieldset",children:[(0,P.jsx)(m.Z,{sx:e=>({marginBottom:e.spacing(1)}),form:"welcome-survey-role",children:(0,P.jsx)("strong",{children:"你的角色是什么？"})}),(0,P.jsx)(h.ZP,{container:!0,rowSpacing:1,sx:e=>({marginBottom:e.spacing(1)}),children:(0,P.jsx)(y.Z,{id:"welcome-survey-role",onChange:N,row:!0,name:"row-radio-buttons-group",children:_.map((e=>(0,P.jsx)(h.ZP,{item:!0,xs:6,flex:2,children:(0,P.jsx)(d.Z,{value:e,control:(0,P.jsx)(g.Z,{"data-testid":e}),label:e,checked:z===e,onClick:()=>N({target:{value:e}})})},e)))})})]})}),2===n&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m.Z,{form:"welcome-survey-uses",sx:e=>({marginBotton:e.spacing(2)}),children:(0,P.jsx)("strong",{children:"您将使用Docker来做什么？"})}),(0,P.jsx)(j.Z,{variant:"body2",sx:e=>({marginBottom:e.spacing(2)}),children:"选择所有符合条件的"}),(0,P.jsx)(h.ZP,{container:!0,rowSpacing:1,sx:e=>({marginBottom:e.spacing(1)}),children:K.map((e=>{return(0,P.jsx)(h.ZP,{item:!0,xs:6,flex:2,children:(0,P.jsx)(d.Z,{control:(0,P.jsx)(a.Z,{id:"welcome-survey-uses",sx:{padding:.5},"data-testid":e}),label:e+(e===F?" (指定)":""),checked:E.includes(e),onChange:(t=e,(e,n)=>{R(n?[...E,t]:E.filter((e=>e!==t)))})})},e);var t}))}),E.includes(F)&&(0,P.jsxs)(l.Z,{fullWidth:!0,children:[(0,P.jsx)(v.Z,{label:"指定您将使用Docker的用途",minRows:4,multiline:!0,inputProps:{maxLength:120,name:F},onChange:e=>{U(e.target.value)},value:M}),(0,P.jsx)(p.Z,{children:`${M.length}/120`})]}),(0,P.jsxs)(k.Z,{direction:"row",marginTop:3,justifyContent:"space-between",spacing:2,children:[(0,P.jsx)(s.Z,{"data-action":"back",variant:"outlined",color:"primary",onClick:()=>{desktopIpcClient.analytics.track(H,{action:O.WelcomeSurveyBackButtonClicked,step:n}).catch((e=>{D.x7.notify(e,(e=>{e.context="点击欢迎调查返回按钮"}))})),S(1===n?2:1)},children:"后退"}),(0,P.jsx)(s.Z,{color:"primary",disabled:!J,type:"submit",children:"继续"})]})]})]})})})]}),(0,P.jsx)(k.Z,{direction:"row",mt:2,children:(0,P.jsx)(s.Z,{variant:"text","data-action":"skip",endIcon:(0,P.jsx)(o.Z,{}),onClick:()=>{desktopIpcClient.analytics.track(H,{action:O.WelcomeSurveySkipped}).catch((e=>{D.x7.notify(e)})),$(G?"/dashboard/docker-projects":"/dashboard/containers",{replace:!0})},children:"跳过调查"})})]})})})]})})}}}]);
//# sourceMappingURL=sourcemaps/3062.bundle.js.map