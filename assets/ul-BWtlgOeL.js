import{Z as h,$ as o,a9 as m,d as f,h as p,u as v,a as l,e as C,a8 as z,aw as _}from"./index-fL56cton.js";const q=h("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[o("&:first-child",{marginTop:0}),o("&:last-child",{marginBottom:0}),m("align-text",{marginLeft:"-16px"})]),y=Object.assign(Object.assign({},l.props),{alignText:Boolean}),B=f({name:"Blockquote",props:y,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=v(e),r=l("Typography","-blockquote",q,_,e,t),s=C(()=>{const{common:{cubicBezierEaseInOut:a},self:{blockquoteTextColor:d,blockquotePrefixColor:c,blockquoteLineHeight:g,blockquoteFontSize:u}}=r.value;return{"--n-bezier":a,"--n-font-size":u,"--n-line-height":g,"--n-prefix-color":c,"--n-text-color":d}}),n=i?z("blockquote",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:i?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("blockquote",{class:[`${t}-blockquote`,this.themeClass,this.alignText&&`${t}-blockquote--align-text`],style:this.cssVars},this.$slots)}}),L=f({name:"Li",render(){return p("li",null,this.$slots)}}),x=o("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),b=[o("&:first-child",`
 margin-top: 0;
 `),o("&:last-child",`
 margin-bottom: 0;
 `)],R=o([h("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[m("align-text",{paddingLeft:0}),x,b]),h("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[m("align-text",{paddingLeft:0}),x,b])]),P=Object.assign(Object.assign({},l.props),{alignText:Boolean}),O=f({name:"Ul",props:P,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=v(e),r=l("Typography","-xl",R,_,e,t),s=C(()=>{const{common:{cubicBezierEaseInOut:a},self:{olPadding:d,ulPadding:c,liMargin:g,liTextColor:u,liLineHeight:T,liFontSize:k}}=r.value;return{"--n-bezier":a,"--n-font-size":k,"--n-line-height":T,"--n-text-color":u,"--n-li-margin":g,"--n-ol-padding":d,"--n-ul-padding":c}}),n=i?z("ul",void 0,s,e):void 0;return{mergedClsPrefix:t,cssVars:i?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("ul",{class:[`${t}-ul`,this.themeClass,this.alignText&&`${t}-ul--align-text`],style:this.cssVars},this.$slots)}});export{B as _,O as a,L as b};
