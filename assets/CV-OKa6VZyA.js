import{Z as u,a0 as m,$ as v,d as y,u as I,a as S,bn as T,b as j,e as k,a8 as P,h as r,F as O,E as C,p as R,s as w,w as n,n as o,T as x,x as c,m as A,bo as D,v as a,y as V,z as F}from"./index-fL56cton.js";import{b as N,_ as H,a as J}from"./Grid-CyEJFAcZ.js";import"./utils-BXVzdOoR.js";const M=u("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[u("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),u("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[u("thing-header-wrapper",`
 flex: 1;
 `)]),u("thing-main",`
 flex-grow: 1;
 `,[u("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[m("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),m("description",[v("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),m("content",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("footer",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("action",[v("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),W=Object.assign(Object.assign({},S.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),L=y({name:"Thing",props:W,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:h,inlineThemeDisabled:_,mergedRtlRef:l}=I(e),p=S("Thing","-thing",M,T,e,h),b=j("Thing",l,h),$=k(()=>{const{self:{titleTextColor:f,textColor:i,titleFontWeight:E,fontSize:z},common:{cubicBezierEaseInOut:B}}=p.value;return{"--n-bezier":B,"--n-font-size":z,"--n-text-color":i,"--n-title-font-weight":E,"--n-title-text-color":f}}),s=_?P("thing",void 0,$,e):void 0;return()=>{var f;const{value:i}=h,E=b?b.value:!1;return(f=s==null?void 0:s.onRender)===null||f===void 0||f.call(s),r("div",{class:[`${i}-thing`,s==null?void 0:s.themeClass,E&&`${i}-thing--rtl`],style:_?void 0:$.value},t.avatar&&e.contentIndented?r("div",{class:`${i}-thing-avatar`},t.avatar()):null,r("div",{class:`${i}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?r("div",{class:`${i}-thing-avatar-header-wrapper`},t.avatar?r("div",{class:`${i}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?r("div",{class:`${i}-thing-header-wrapper`},r("div",{class:`${i}-thing-header`},t.header||e.title?r("div",{class:`${i}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?r("div",{class:`${i}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?r("div",{class:[`${i}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null):null):r(O,null,t.header||e.title||t["header-extra"]||e.titleExtra?r("div",{class:`${i}-thing-header`},t.header||e.title?r("div",{class:`${i}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?r("div",{class:`${i}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?r("div",{class:[`${i}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?r("div",{class:[`${i}-thing-main__content`,e.contentClass],style:e.contentStyle},t.default?t.default():e.content):null,t.footer?r("div",{class:`${i}-thing-main__footer`},t.footer()):null,t.action?r("div",{class:`${i}-thing-main__action`},t.action()):null))}}}),q={};function Z(e,t){const h=L,_=N;return w(),R(_,null,{default:n(()=>[o(h,null,{header:n(()=>[x(e.$slots,"header")]),"header-extra":n(()=>[c("b",null,[x(e.$slots,"headerExtra")])]),description:n(()=>[x(e.$slots,"description")]),footer:n(()=>[x(e.$slots,"footer")]),_:3})]),_:3})}const g=C(q,[["render",Z]]),d=e=>(V("data-v-89e90763"),e=e(),F(),e),G={class:"about"},K=d(()=>c("h1",{class:"pink-text"},"Educação",-1)),Q=d(()=>c("h1",{class:"blue-text"},"Outros",-1)),U=d(()=>c("h1",{class:"white-text"},"Experiência",-1)),X=d(()=>c("i",null,"frontend",-1)),Y=d(()=>c("i",null,"hardware",-1)),ee=d(()=>c("i",null,"Make Or Break",-1)),te=d(()=>c("i",null,"Hackathon",-1)),ne=d(()=>c("i",null,"Make Or Break",-1)),ae=d(()=>c("i",null,"funny",-1)),ie=d(()=>c("i",null,"full-stack",-1)),re=y({__name:"CV",setup(e){return(t,h)=>{const _=D,l=J,p=H;return w(),A("div",G,[o(_,{justify:"space-between"},{default:n(()=>[K,Q,U]),_:1}),o(p,{"y-gap":"16",cols:1},{default:n(()=>[o(l,{class:"cv-entry card-left"},{default:n(()=>[o(g,null,{header:n(()=>[a(" ISEP - Instituto Superior de Engenharia do Porto ")]),headerExtra:n(()=>[a(" Setembro 2012 - Agosto 2015 ")]),description:n(()=>[a(" Licenciatura em Engenharia Electrotécnica ")]),footer:n(()=>[a(" Rua Dr. António Benardino de Almeida, 431 - 4249-015 Porto ")]),_:1})]),_:1}),o(l,{class:"cv-entry card-left"},{default:n(()=>[o(g,null,{header:n(()=>[a(" Curso de Electrónica Avançada - 175 Horas ")]),headerExtra:n(()=>[a(" Julho 2013 - Dezembro 2013 ")]),description:n(()=>[a(" ATEC ")]),footer:n(()=>[a(" Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita ")]),_:1})]),_:1}),o(l,{class:"cv-entry card-center"},{default:n(()=>[o(g,null,{header:n(()=>[a(" Voluntariado - Explicador ")]),headerExtra:n(()=>[a(" Setembro 2016 - 2019 ")]),description:n(()=>[a(" Já T'Explico ")]),footer:n(()=>[a(" Apoio a crianças e jovens do 5º ao 9º ano de escolaridade do distrito do Porto. ")]),_:1})]),_:1}),o(l,{class:"cv-entry card-right"},{default:n(()=>[o(g,null,{header:n(()=>[a(" Web Developer ")]),headerExtra:n(()=>[a(" Novembro 2017 - Julho 2020 ")]),description:n(()=>[a(" Dotlogic - Soluções Informáticas ")]),footer:n(()=>[a(" Desenvolvimento web - "),X,a(" - na área médica (cardiologia), alguns projectos de "),Y,a(". ")]),_:1})]),_:1}),o(l,{class:"cv-entry card-center"},{default:n(()=>[o(g,null,{header:n(()=>[ee]),headerExtra:n(()=>[a(" 8 a 12 - Setembro 2017 ")]),description:n(()=>[a(" 48 Hour "),te]),footer:n(()=>[a(" Parte da equipa vencedora da edição de 2017 do "),ne,a(" na categoria "),ae,a(". ")]),_:1})]),_:1}),o(l,{class:"cv-entry card-right"},{default:n(()=>[o(g,null,{header:n(()=>[a(" Web Developer ")]),headerExtra:n(()=>[a(" Agosto 2020 - Presente ")]),description:n(()=>[a(" Fujifilm ")]),footer:n(()=>[a(" Desenvolvimento web - "),ie,a(" - na área médica. ")]),_:1})]),_:1})]),_:1})])}}}),le=C(re,[["__scopeId","data-v-89e90763"]]);export{le as default};
