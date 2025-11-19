import{g as $u,f as Zu}from"./projects-DCU5I6T4.js";import{c as Ao,a as Nc,u as Oc,i as zs,f as Dc,S as Ju,b as Qu,W as ed,N as td,d as er,o as nd,e as id,B as rd,V as od,g as ad,h as ja,j as ul,k as sd,l as ld,m as cd,M as ud}from"./MediaCarousel-DF4AyrRC.js";import{r as qe,e as je,H as In,I as wr,d as At,J as Br,h as Te,V as dl,K as Fc,L as Uc,M as lr,O as dd,P as fd,Q as Mt,l as Ya,R as hr,S as Vs,T as kc,U as aa,W as An,X as Bc,v as Tt,Y as hd,Z as Xe,$ as ft,a0 as Ke,a1 as zc,a2 as Vc,a3 as Gs,a4 as pd,a5 as Vo,u as On,a as $t,a6 as md,j as Qt,a7 as di,a8 as Gc,a9 as pt,aa as tr,ab as Oo,ac as Hc,b as zr,ad as gd,ae as Sr,_ as Ro,F as Tr,af as xd,ag as vd,ah as Vr,ai as Wc,aj as vt,ak as _d,al as bd,am as yd,an as Ed,ao as Sd,ap as Td,aq as Md,ar as Ad,as as Rd,at as fl,f as Cd,g as wd,au as Pd,av as Ld,m as wn,s as Wt,x as gt,o as ii,n as ot,p as bi,B as Id,w as it,D as hl,t as pl,y as Xc,z as jc,A as Yi,E as Yc,N as Nd,G as Kc,q as Od}from"./index-C8lXdkzK.js";import{b as Dd}from"./utils-BXVzdOoR.js";import{_ as Fd,b as Ud,a as kd}from"./ul-uEkBFsFG.js";import{_ as Bd}from"./a-68Lkpkxy.js";function Mr(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}function ml(n){return n&-n}class qc{constructor(e,t){this.l=e,this.min=t;const i=new Array(e+1);for(let r=0;r<e+1;++r)i[r]=0;this.ft=i}add(e,t){if(t===0)return;const{l:i,ft:r}=this;for(e+=1;e<=i;)r[e]+=t,e+=ml(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;const{ft:t,min:i,l:r}=this;if(e>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let o=e*i;for(;e>0;)o+=t[e],e-=ml(e);return o}getBound(e){let t=0,i=this.l;for(;i>t;){const r=Math.floor((t+i)/2),o=this.sum(r);if(o>e){i=r;continue}else if(o<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}}let Zr;function zd(){return typeof document>"u"?!1:(Zr===void 0&&("matchMedia"in window?Zr=window.matchMedia("(pointer:coarse)").matches:Zr=!1),Zr)}let sa;function gl(){return typeof document>"u"?1:(sa===void 0&&(sa="chrome"in window?window.devicePixelRatio:1),sa)}const $c="VVirtualListXScroll";function Vd({columnsRef:n,renderColRef:e,renderItemWithColsRef:t}){const i=qe(0),r=qe(0),o=je(()=>{const a=n.value;if(a.length===0)return null;const d=new qc(a.length,0);return a.forEach((u,p)=>{d.add(p,u.width)}),d}),s=In(()=>{const a=o.value;return a!==null?Math.max(a.getBound(r.value)-1,0):0}),l=a=>{const d=o.value;return d!==null?d.sum(a):0},c=In(()=>{const a=o.value;return a!==null?Math.min(a.getBound(r.value+i.value)+1,n.value.length-1):0});return wr($c,{startIndexRef:s,endIndexRef:c,columnsRef:n,renderColRef:e,renderItemWithColsRef:t,getLeft:l}),{listWidthRef:i,scrollLeftRef:r}}const xl=At({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:n,endIndexRef:e,columnsRef:t,getLeft:i,renderColRef:r,renderItemWithColsRef:o}=Br($c);return{startIndex:n,endIndex:e,columns:t,renderCol:r,renderItemWithCols:o,getLeft:i}},render(){const{startIndex:n,endIndex:e,columns:t,renderCol:i,renderItemWithCols:r,getLeft:o,item:s}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:n,endColIndex:e,allColumns:t,item:s,getLeft:o});if(i!=null){const l=[];for(let c=n;c<=e;++c){const a=t[c];l.push(i({column:a,left:o(c),item:s}))}return l}return null}}),Gd=Ao(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ao("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ao("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Hd=At({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=Uc();Gd.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Nc,ssr:e}),lr(()=>{const{defaultScrollIndex:P,defaultScrollKey:I}=n;P!=null?h({index:P}):I!=null&&h({key:I})});let t=!1,i=!1;dd(()=>{if(t=!1,!i){i=!0;return}h({top:m.value,left:s.value})}),fd(()=>{t=!0,i||(i=!0)});const r=In(()=>{if(n.renderCol==null&&n.renderItemWithCols==null||n.columns.length===0)return;let P=0;return n.columns.forEach(I=>{P+=I.width}),P}),o=je(()=>{const P=new Map,{keyField:I}=n;return n.items.forEach((B,V)=>{P.set(B[I],V)}),P}),{scrollLeftRef:s,listWidthRef:l}=Vd({columnsRef:Mt(n,"columns"),renderColRef:Mt(n,"renderCol"),renderItemWithColsRef:Mt(n,"renderItemWithCols")}),c=qe(null),a=qe(void 0),d=new Map,u=je(()=>{const{items:P,itemSize:I,keyField:B}=n,V=new qc(P.length,I);return P.forEach((j,H)=>{const G=j[B],K=d.get(G);K!==void 0&&V.add(H,K)}),V}),p=qe(0),m=qe(0),g=In(()=>Math.max(u.value.getBound(m.value-Ya(n.paddingTop))-1,0)),_=je(()=>{const{value:P}=a;if(P===void 0)return[];const{items:I,itemSize:B}=n,V=g.value,j=Math.min(V+Math.ceil(P/B+1),I.length-1),H=[];for(let G=V;G<=j;++G)H.push(I[G]);return H}),h=(P,I)=>{if(typeof P=="number"){v(P,I,"auto");return}const{left:B,top:V,index:j,key:H,position:G,behavior:K,debounce:ce=!0}=P;if(B!==void 0||V!==void 0)v(B,V,K);else if(j!==void 0)y(j,K,ce);else if(H!==void 0){const Q=o.value.get(H);Q!==void 0&&y(Q,K,ce)}else G==="bottom"?v(0,Number.MAX_SAFE_INTEGER,K):G==="top"&&v(0,0,K)};let f,b=null;function y(P,I,B){const{value:V}=u,j=V.sum(P)+Ya(n.paddingTop);if(!B)c.value.scrollTo({left:0,top:j,behavior:I});else{f=P,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{f=void 0,b=null},16);const{scrollTop:H,offsetHeight:G}=c.value;if(j>H){const K=V.get(P);j+K<=H+G||c.value.scrollTo({left:0,top:j+K-G,behavior:I})}else c.value.scrollTo({left:0,top:j,behavior:I})}}function v(P,I,B){c.value.scrollTo({left:P,top:I,behavior:B})}function A(P,I){var B,V,j;if(t||n.ignoreItemResize||L(I.target))return;const{value:H}=u,G=o.value.get(P),K=H.get(G),ce=(j=(V=(B=I.borderBoxSize)===null||B===void 0?void 0:B[0])===null||V===void 0?void 0:V.blockSize)!==null&&j!==void 0?j:I.contentRect.height;if(ce===K)return;ce-n.itemSize===0?d.delete(P):d.set(P,ce-n.itemSize);const te=ce-K;if(te===0)return;H.add(G,te);const Se=c.value;if(Se!=null){if(f===void 0){const $=H.sum(G);Se.scrollTop>$&&Se.scrollBy(0,te)}else if(G<f)Se.scrollBy(0,te);else if(G===f){const $=H.sum(G);ce+$>Se.scrollTop+Se.offsetHeight&&Se.scrollBy(0,te)}w()}p.value++}const T=!zd();let C=!1;function F(P){var I;(I=n.onScroll)===null||I===void 0||I.call(n,P),(!T||!C)&&w()}function E(P){var I;if((I=n.onWheel)===null||I===void 0||I.call(n,P),T){const B=c.value;if(B!=null){if(P.deltaX===0&&(B.scrollTop===0&&P.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&P.deltaY>=0))return;P.preventDefault(),B.scrollTop+=P.deltaY/gl(),B.scrollLeft+=P.deltaX/gl(),w(),C=!0,Dd(()=>{C=!1})}}}function M(P){if(t||L(P.target))return;if(n.renderCol==null&&n.renderItemWithCols==null){if(P.contentRect.height===a.value)return}else if(P.contentRect.height===a.value&&P.contentRect.width===l.value)return;a.value=P.contentRect.height,l.value=P.contentRect.width;const{onResize:I}=n;I!==void 0&&I(P)}function w(){const{value:P}=c;P!=null&&(m.value=P.scrollTop,s.value=P.scrollLeft)}function L(P){let I=P;for(;I!==null;){if(I.style.display==="none")return!0;I=I.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:je(()=>{const{itemResizable:P}=n,I=hr(u.value.sum());return p.value,[n.itemsStyle,{boxSizing:"content-box",width:hr(r.value),height:P?"":I,minHeight:P?I:"",paddingTop:hr(n.paddingTop),paddingBottom:hr(n.paddingBottom)}]}),visibleItemsStyle:je(()=>(p.value,{transform:`translateY(${hr(u.value.sum(g.value))})`})),viewportItems:_,listElRef:c,itemsElRef:qe(null),scrollTo:h,handleListResize:M,handleListScroll:F,handleListWheel:E,handleItemResize:A}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:i}=this;return Te(dl,{onResize:this.handleListResize},{default:()=>{var r,o;return Te("div",Fc(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?Te("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[Te(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:s,renderItemWithCols:l}=this;return this.viewportItems.map(c=>{const a=c[e],d=t.get(a),u=s!=null?Te(xl,{index:d,item:c}):void 0,p=l!=null?Te(xl,{index:d,item:c}):void 0,m=this.$slots.default({item:c,renderedCols:u,renderedItemWithCols:p,index:d})[0];return n?Te(dl,{key:a,onResize:g=>this.handleItemResize(a,g)},{default:()=>m}):(m.key=a,m)})}})]):(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)])}})}}),Dn="v-hidden",Wd=Ao("[v-hidden]",{display:"none!important"}),vl=At({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=qe(null),i=qe(null);function r(s){const{value:l}=t,{getCounter:c,getTail:a}=n;let d;if(c!==void 0?d=c():d=i.value,!l||!d)return;d.hasAttribute(Dn)&&d.removeAttribute(Dn);const{children:u}=l;if(s.showAllItemsBeforeCalculate)for(const y of u)y.hasAttribute(Dn)&&y.removeAttribute(Dn);const p=l.offsetWidth,m=[],g=e.tail?a==null?void 0:a():null;let _=g?g.offsetWidth:0,h=!1;const f=l.children.length-(e.tail?1:0);for(let y=0;y<f-1;++y){if(y<0)continue;const v=u[y];if(h){v.hasAttribute(Dn)||v.setAttribute(Dn,"");continue}else v.hasAttribute(Dn)&&v.removeAttribute(Dn);const A=v.offsetWidth;if(_+=A,m[y]=A,_>p){const{updateCounter:T}=n;for(let C=y;C>=0;--C){const F=f-1-C;T!==void 0?T(F):d.textContent=`${F}`;const E=d.offsetWidth;if(_-=m[C],_+E<=p||C===0){h=!0,y=C-1,g&&(y===-1?(g.style.maxWidth=`${p-E}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:M}=n;M&&M(F);break}}}}const{onUpdateOverflow:b}=n;h?b!==void 0&&b(!0):(b!==void 0&&b(!1),d.setAttribute(Dn,""))}const o=Uc();return Wd.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Nc,ssr:o}),lr(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return Vs(()=>this.sync({showAllItemsBeforeCalculate:!1})),Te("div",{class:"v-overflow",ref:"selfRef"},[kc(n,"default"),n.counter?n.counter():Te("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Zc(n,e){e&&(lr(()=>{const{value:t}=n;t&&aa.registerHandler(t,e)}),An(n,(t,i)=>{i&&aa.unregisterHandler(i)},{deep:!1}),Bc(()=>{const{value:t}=n;t&&aa.unregisterHandler(t)}))}const Xd=new WeakSet;function jd(n){Xd.add(n)}function _l(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function la(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}function Ki(n,...e){return typeof n=="function"?n(...e):typeof n=="string"?Tt(n):typeof n=="number"?Tt(String(n)):null}const Yd=At({name:"Checkmark",render(){return Te("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Te("g",{fill:"none"},Te("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Kd=At({name:"ChevronDown",render(){return Te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),qd=hd("clear",()=>Te("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Te("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Te("g",{fill:"currentColor","fill-rule":"nonzero"},Te("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),$d=At({name:"Empty",render(){return Te("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),Te("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Zd=Xe("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[ft(">",[Ke("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[ft("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),ft("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),Ke("placeholder",`
 display: flex;
 `),Ke("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[zc({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Jd=At({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return pd("-base-clear",Zd,Mt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return Te("div",{class:`${n}-base-clear`},Te(Vc,null,{default:()=>{var e,t;return this.show?Te("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Gs(this.$slots.icon,()=>[Te(Vo,{clsPrefix:n},{default:()=>Te(qd,null)})])):Te("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),Qd=At({props:{onFocus:Function,onBlur:Function},setup(n){return()=>Te("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}});function bl(n){return Array.isArray(n)?n:[n]}const Ka={STOP:"STOP"};function Jc(n,e){const t=e(n);n.children!==void 0&&t!==Ka.STOP&&n.children.forEach(i=>Jc(i,e))}function ef(n,e={}){const{preserveGroup:t=!1}=e,i=[],r=t?s=>{s.isLeaf||(i.push(s.key),o(s.children))}:s=>{s.isLeaf||(s.isGroup||i.push(s.key),o(s.children))};function o(s){s.forEach(r)}return o(n),i}function tf(n,e){const{isLeaf:t}=n;return t!==void 0?t:!e(n)}function nf(n){return n.children}function rf(n){return n.key}function of(){return!1}function af(n,e){const{isLeaf:t}=n;return!(t===!1&&!Array.isArray(e(n)))}function sf(n){return n.disabled===!0}function lf(n,e){return n.isLeaf===!1&&!Array.isArray(e(n))}function ca(n){var e;return n==null?[]:Array.isArray(n)?n:(e=n.checkedKeys)!==null&&e!==void 0?e:[]}function ua(n){var e;return n==null||Array.isArray(n)?[]:(e=n.indeterminateKeys)!==null&&e!==void 0?e:[]}function cf(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function uf(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function df(n){return(n==null?void 0:n.type)==="group"}function ff(n){const e=new Map;return n.forEach((t,i)=>{e.set(t.key,i)}),t=>{var i;return(i=e.get(t))!==null&&i!==void 0?i:null}}class hf extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function pf(n,e,t,i){return Do(e.concat(n),t,i,!1)}function mf(n,e){const t=new Set;return n.forEach(i=>{const r=e.treeNodeMap.get(i);if(r!==void 0){let o=r.parent;for(;o!==null&&!(o.disabled||t.has(o.key));)t.add(o.key),o=o.parent}}),t}function gf(n,e,t,i){const r=Do(e,t,i,!1),o=Do(n,t,i,!0),s=mf(n,t),l=[];return r.forEach(c=>{(o.has(c)||s.has(c))&&l.push(c)}),l.forEach(c=>r.delete(c)),r}function da(n,e){const{checkedKeys:t,keysToCheck:i,keysToUncheck:r,indeterminateKeys:o,cascade:s,leafOnly:l,checkStrategy:c,allowNotLoaded:a}=n;if(!s)return i!==void 0?{checkedKeys:cf(t,i),indeterminateKeys:Array.from(o)}:r!==void 0?{checkedKeys:uf(t,r),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:d}=e;let u;r!==void 0?u=gf(r,t,e,a):i!==void 0?u=pf(i,t,e,a):u=Do(t,e,a,!1);const p=c==="parent",m=c==="child"||l,g=u,_=new Set,h=Math.max.apply(null,Array.from(d.keys()));for(let f=h;f>=0;f-=1){const b=f===0,y=d.get(f);for(const v of y){if(v.isLeaf)continue;const{key:A,shallowLoaded:T}=v;if(m&&T&&v.children.forEach(M=>{!M.disabled&&!M.isLeaf&&M.shallowLoaded&&g.has(M.key)&&g.delete(M.key)}),v.disabled||!T)continue;let C=!0,F=!1,E=!0;for(const M of v.children){const w=M.key;if(!M.disabled){if(E&&(E=!1),g.has(w))F=!0;else if(_.has(w)){F=!0,C=!1;break}else if(C=!1,F)break}}C&&!E?(p&&v.children.forEach(M=>{!M.disabled&&g.has(M.key)&&g.delete(M.key)}),g.add(A)):F&&_.add(A),b&&m&&g.has(A)&&g.delete(A)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(_)}}function Do(n,e,t,i){const{treeNodeMap:r,getChildren:o}=e,s=new Set,l=new Set(n);return n.forEach(c=>{const a=r.get(c);a!==void 0&&Jc(a,d=>{if(d.disabled)return Ka.STOP;const{key:u}=d;if(!s.has(u)&&(s.add(u),l.add(u),lf(d.rawNode,o))){if(i)return Ka.STOP;if(!t)throw new hf}})}),l}function xf(n,{includeGroup:e=!1,includeSelf:t=!0},i){var r;const o=i.treeNodeMap;let s=n==null?null:(r=o.get(n))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return l.treeNode=null,l;for(;s;)!s.ignored&&(e||!s.isGroup)&&l.treeNodePath.push(s),s=s.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(c=>c.key),l}function vf(n){if(n.length===0)return null;const e=n[0];return e.isGroup||e.ignored||e.disabled?e.getNext():e}function _f(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r+1)%i]:r===t.length-1?null:t[r+1]}function yl(n,e,{loop:t=!1,includeDisabled:i=!1}={}){const r=e==="prev"?bf:_f,o={reverse:e==="prev"};let s=!1,l=null;function c(a){if(a!==null){if(a===n){if(!s)s=!0;else if(!n.disabled&&!n.isGroup){l=n;return}}else if((!a.disabled||i)&&!a.ignored&&!a.isGroup){l=a;return}if(a.isGroup){const d=Hs(a,o);d!==null?l=d:c(r(a,t))}else{const d=r(a,!1);if(d!==null)c(d);else{const u=yf(a);u!=null&&u.isGroup?c(r(u,t)):t&&c(r(a,!0))}}}}return c(n),l}function bf(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r-1+i)%i]:r===0?null:t[r-1]}function yf(n){return n.parent}function Hs(n,e={}){const{reverse:t=!1}=e,{children:i}=n;if(i){const{length:r}=i,o=t?r-1:0,s=t?-1:r,l=t?-1:1;for(let c=o;c!==s;c+=l){const a=i[c];if(!a.disabled&&!a.ignored)if(a.isGroup){const d=Hs(a,e);if(d!==null)return d}else return a}}return null}const Ef={getChild(){return this.ignored?null:Hs(this)},getParent(){const{parent:n}=this;return n!=null&&n.isGroup?n.getParent():n},getNext(n={}){return yl(this,"next",n)},getPrev(n={}){return yl(this,"prev",n)}};function Sf(n,e){const t=e?new Set(e):void 0,i=[];function r(o){o.forEach(s=>{i.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||t===void 0||t.has(s.key))&&r(s.children)})}return r(n),i}function Tf(n,e){const t=n.key;for(;e;){if(e.key===t)return!0;e=e.parent}return!1}function Qc(n,e,t,i,r,o=null,s=0){const l=[];return n.forEach((c,a)=>{var d;const u=Object.create(i);if(u.rawNode=c,u.siblings=l,u.level=s,u.index=a,u.isFirstChild=a===0,u.isLastChild=a+1===n.length,u.parent=o,!u.ignored){const p=r(c);Array.isArray(p)&&(u.children=Qc(p,e,t,i,r,u,s+1))}l.push(u),e.set(u.key,u),t.has(s)||t.set(s,[]),(d=t.get(s))===null||d===void 0||d.push(u)}),l}function Mf(n,e={}){var t;const i=new Map,r=new Map,{getDisabled:o=sf,getIgnored:s=of,getIsGroup:l=df,getKey:c=rf}=e,a=(t=e.getChildren)!==null&&t!==void 0?t:nf,d=e.ignoreEmptyChildren?v=>{const A=a(v);return Array.isArray(A)?A.length?A:null:A}:a,u=Object.assign({get key(){return c(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return tf(this.rawNode,d)},get shallowLoaded(){return af(this.rawNode,d)},get ignored(){return s(this.rawNode)},contains(v){return Tf(this,v)}},Ef),p=Qc(n,i,r,u,d);function m(v){if(v==null)return null;const A=i.get(v);return A&&!A.isGroup&&!A.ignored?A:null}function g(v){if(v==null)return null;const A=i.get(v);return A&&!A.ignored?A:null}function _(v,A){const T=g(v);return T?T.getPrev(A):null}function h(v,A){const T=g(v);return T?T.getNext(A):null}function f(v){const A=g(v);return A?A.getParent():null}function b(v){const A=g(v);return A?A.getChild():null}const y={treeNodes:p,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:d,getFlattenedNodes(v){return Sf(p,v)},getNode:m,getPrev:_,getNext:h,getParent:f,getChild:b,getFirstAvailableNode(){return vf(p)},getPath(v,A={}){return xf(v,A,y)},getCheckedKeys(v,A={}){const{cascade:T=!0,leafOnly:C=!1,checkStrategy:F="all",allowNotLoaded:E=!1}=A;return da({checkedKeys:ca(v),indeterminateKeys:ua(v),cascade:T,leafOnly:C,checkStrategy:F,allowNotLoaded:E},y)},check(v,A,T={}){const{cascade:C=!0,leafOnly:F=!1,checkStrategy:E="all",allowNotLoaded:M=!1}=T;return da({checkedKeys:ca(A),indeterminateKeys:ua(A),keysToCheck:v==null?[]:bl(v),cascade:C,leafOnly:F,checkStrategy:E,allowNotLoaded:M},y)},uncheck(v,A,T={}){const{cascade:C=!0,leafOnly:F=!1,checkStrategy:E="all",allowNotLoaded:M=!1}=T;return da({checkedKeys:ca(A),indeterminateKeys:ua(A),keysToUncheck:v==null?[]:bl(v),cascade:C,leafOnly:F,checkStrategy:E,allowNotLoaded:M},y)},getNonLeafKeys(v={}){return ef(p,v)}};return y}const Af=Xe("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[Ke("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ft("+",[Ke("description",`
 margin-top: 8px;
 `)])]),Ke("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),Ke("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Rf=Object.assign(Object.assign({},$t.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Cf=At({name:"Empty",props:Rf,slots:Object,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedComponentPropsRef:i}=On(n),r=$t("Empty","-empty",Af,md,n,e),{localeRef:o}=Oc("Empty"),s=je(()=>{var d,u,p;return(d=n.description)!==null&&d!==void 0?d:(p=(u=i==null?void 0:i.value)===null||u===void 0?void 0:u.Empty)===null||p===void 0?void 0:p.description}),l=je(()=>{var d,u;return((u=(d=i==null?void 0:i.value)===null||d===void 0?void 0:d.Empty)===null||u===void 0?void 0:u.renderIcon)||(()=>Te($d,null))}),c=je(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:u},self:{[Qt("iconSize",d)]:p,[Qt("fontSize",d)]:m,textColor:g,iconColor:_,extraTextColor:h}}=r.value;return{"--n-icon-size":p,"--n-font-size":m,"--n-bezier":u,"--n-text-color":g,"--n-icon-color":_,"--n-extra-text-color":h}}),a=t?di("empty",je(()=>{let d="";const{size:u}=n;return d+=u[0],d}),c,n):void 0;return{mergedClsPrefix:e,mergedRenderIcon:l,localizedDescription:je(()=>s.value||o.value.description),cssVars:t?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),Te("div",{class:[`${e}-empty`,this.themeClass],style:this.cssVars},this.showIcon?Te("div",{class:`${e}-empty__icon`},n.icon?n.icon():Te(Vo,{clsPrefix:e},{default:this.mergedRenderIcon})):null,this.showDescription?Te("div",{class:`${e}-empty__description`},n.default?n.default():this.localizedDescription):null,n.extra?Te("div",{class:`${e}-empty__extra`},n.extra()):null)}}),El=At({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=Br(zs);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),s=e?e(r,!1):Ki(r[this.labelField],r,!1),l=Te("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),s);return r.render?r.render({node:l,option:r}):t?t({node:l,option:r,selected:!1}):l}});function wf(n,e){return Te(Gc,{name:"fade-in-scale-up-transition"},{default:()=>n?Te(Vo,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>Te(Yd)}):null})}const Sl=At({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:l,valueFieldRef:c,showCheckmarkRef:a,nodePropsRef:d,handleOptionClick:u,handleOptionMouseEnter:p}=Br(zs),m=In(()=>{const{value:f}=t;return f?n.tmNode.key===f.key:!1});function g(f){const{tmNode:b}=n;b.disabled||u(f,b)}function _(f){const{tmNode:b}=n;b.disabled||p(f,b)}function h(f){const{tmNode:b}=n,{value:y}=m;b.disabled||y||p(f,b)}return{multiple:i,isGrouped:In(()=>{const{tmNode:f}=n,{parent:b}=f;return b&&b.rawNode.type==="group"}),showCheckmark:a,nodeProps:d,isPending:m,isSelected:In(()=>{const{value:f}=e,{value:b}=i;if(f===null)return!1;const y=n.tmNode.rawNode[c.value];if(b){const{value:v}=r;return v.has(y)}else return f===y}),labelField:l,renderLabel:o,renderOption:s,handleMouseMove:h,handleMouseEnter:_,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:s,renderOption:l,renderLabel:c,handleClick:a,handleMouseEnter:d,handleMouseMove:u}=this,p=wf(t,n),m=c?[c(e,t),o&&p]:[Ki(e[this.labelField],e,t),o&&p],g=s==null?void 0:s(e),_=Te("div",Object.assign({},g,{class:[`${n}-base-select-option`,e.class,g==null?void 0:g.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(g==null?void 0:g.style)||"",e.style||""],onClick:la([a,g==null?void 0:g.onClick]),onMouseenter:la([d,g==null?void 0:g.onMouseenter]),onMousemove:la([u,g==null?void 0:g.onMousemove])}),Te("div",{class:`${n}-base-select-option__content`},m));return e.render?e.render({node:_,option:e,selected:t}):l?l({node:_,option:e,selected:t}):_}}),Pf=Xe("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[Xe("scrollbar",`
 max-height: var(--n-height);
 `),Xe("virtual-list",`
 max-height: var(--n-height);
 `),Xe("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[Ke("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),Xe("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),Xe("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),Ke("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),Ke("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),Ke("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),Ke("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),Xe("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),Xe("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[pt("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ft("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ft("&:active",`
 color: var(--n-option-text-color-pressed);
 `),pt("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),pt("pending",[ft("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),pt("selected",`
 color: var(--n-option-text-color-active);
 `,[ft("&::before",`
 background-color: var(--n-option-color-active);
 `),pt("pending",[ft("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),pt("disabled",`
 cursor: not-allowed;
 `,[tr("selected",`
 color: var(--n-option-text-color-disabled);
 `),pt("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),Ke("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Dc({enterScale:"0.5"})])])]),Lf=At({name:"InternalSelectMenu",props:Object.assign(Object.assign({},$t.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=On(n),i=zr("InternalSelectMenu",t,e),r=$t("InternalSelectMenu","-internal-select-menu",Pf,gd,n,Mt(n,"clsPrefix")),o=qe(null),s=qe(null),l=qe(null),c=je(()=>n.treeMate.getFlattenedNodes()),a=je(()=>ff(c.value)),d=qe(null);function u(){const{treeMate:Q}=n;let te=null;const{value:Se}=n;Se===null?te=Q.getFirstAvailableNode():(n.multiple?te=Q.getNode((Se||[])[(Se||[]).length-1]):te=Q.getNode(Se),(!te||te.disabled)&&(te=Q.getFirstAvailableNode())),I(te||null)}function p(){const{value:Q}=d;Q&&!n.treeMate.getNode(Q.key)&&(d.value=null)}let m;An(()=>n.show,Q=>{Q?m=An(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?u():p(),Vs(B)):p()},{immediate:!0}):m==null||m()},{immediate:!0}),Bc(()=>{m==null||m()});const g=je(()=>Ya(r.value.self[Qt("optionHeight",n.size)])),_=je(()=>Sr(r.value.self[Qt("padding",n.size)])),h=je(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),f=je(()=>{const Q=c.value;return Q&&Q.length===0});function b(Q){const{onToggle:te}=n;te&&te(Q)}function y(Q){const{onScroll:te}=n;te&&te(Q)}function v(Q){var te;(te=l.value)===null||te===void 0||te.sync(),y(Q)}function A(){var Q;(Q=l.value)===null||Q===void 0||Q.sync()}function T(){const{value:Q}=d;return Q||null}function C(Q,te){te.disabled||I(te,!1)}function F(Q,te){te.disabled||b(te)}function E(Q){var te;Mr(Q,"action")||(te=n.onKeyup)===null||te===void 0||te.call(n,Q)}function M(Q){var te;Mr(Q,"action")||(te=n.onKeydown)===null||te===void 0||te.call(n,Q)}function w(Q){var te;(te=n.onMousedown)===null||te===void 0||te.call(n,Q),!n.focusable&&Q.preventDefault()}function L(){const{value:Q}=d;Q&&I(Q.getNext({loop:!0}),!0)}function P(){const{value:Q}=d;Q&&I(Q.getPrev({loop:!0}),!0)}function I(Q,te=!1){d.value=Q,te&&B()}function B(){var Q,te;const Se=d.value;if(!Se)return;const $=a.value(Se.key);$!==null&&(n.virtualScroll?(Q=s.value)===null||Q===void 0||Q.scrollTo({index:$}):(te=l.value)===null||te===void 0||te.scrollTo({index:$,elSize:g.value}))}function V(Q){var te,Se;!((te=o.value)===null||te===void 0)&&te.contains(Q.target)&&((Se=n.onFocus)===null||Se===void 0||Se.call(n,Q))}function j(Q){var te,Se;!((te=o.value)===null||te===void 0)&&te.contains(Q.relatedTarget)||(Se=n.onBlur)===null||Se===void 0||Se.call(n,Q)}wr(zs,{handleOptionMouseEnter:C,handleOptionClick:F,valueSetRef:h,pendingTmNodeRef:d,nodePropsRef:Mt(n,"nodeProps"),showCheckmarkRef:Mt(n,"showCheckmark"),multipleRef:Mt(n,"multiple"),valueRef:Mt(n,"value"),renderLabelRef:Mt(n,"renderLabel"),renderOptionRef:Mt(n,"renderOption"),labelFieldRef:Mt(n,"labelField"),valueFieldRef:Mt(n,"valueField")}),wr(Qu,o),lr(()=>{const{value:Q}=l;Q&&Q.sync()});const H=je(()=>{const{size:Q}=n,{common:{cubicBezierEaseInOut:te},self:{height:Se,borderRadius:$,color:z,groupHeaderTextColor:W,actionDividerColor:Z,optionTextColorPressed:ue,optionTextColor:Ee,optionTextColorDisabled:Re,optionTextColorActive:Oe,optionOpacityDisabled:Fe,optionCheckColor:Qe,actionTextColor:X,optionColorPending:Be,optionColorActive:ee,loadingColor:me,loadingSize:ne,optionColorActivePending:Me,[Qt("optionFontSize",Q)]:Ae,[Qt("optionHeight",Q)]:Pe,[Qt("optionPadding",Q)]:S}}=r.value;return{"--n-height":Se,"--n-action-divider-color":Z,"--n-action-text-color":X,"--n-bezier":te,"--n-border-radius":$,"--n-color":z,"--n-option-font-size":Ae,"--n-group-header-text-color":W,"--n-option-check-color":Qe,"--n-option-color-pending":Be,"--n-option-color-active":ee,"--n-option-color-active-pending":Me,"--n-option-height":Pe,"--n-option-opacity-disabled":Fe,"--n-option-text-color":Ee,"--n-option-text-color-active":Oe,"--n-option-text-color-disabled":Re,"--n-option-text-color-pressed":ue,"--n-option-padding":S,"--n-option-padding-left":Sr(S,"left"),"--n-option-padding-right":Sr(S,"right"),"--n-loading-color":me,"--n-loading-size":ne}}),{inlineThemeDisabled:G}=n,K=G?di("internal-select-menu",je(()=>n.size[0]),H,n):void 0,ce={selfRef:o,next:L,prev:P,getPendingTmNode:T};return Zc(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:s,scrollbarRef:l,itemSize:g,padding:_,flattenedNodes:c,empty:f,virtualListContainer(){const{value:Q}=s;return Q==null?void 0:Q.listElRef},virtualListContent(){const{value:Q}=s;return Q==null?void 0:Q.itemsElRef},doScroll:y,handleFocusin:V,handleFocusout:j,handleKeyUp:E,handleKeyDown:M,handleMouseDown:w,handleVirtualListResize:A,handleVirtualListScroll:v,cssVars:G?void 0:H,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender},ce)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),Te("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Oo(n.header,s=>s&&Te("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?Te("div",{class:`${t}-base-select-menu__loading`},Te(Hc,{clsPrefix:t,strokeWidth:20})):this.empty?Te("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Gs(n.empty,()=>[Te(Cf,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):Te(Ju,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?Te(Hd,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?Te(El,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:Te(Sl,{clsPrefix:t,key:s.key,tmNode:s})}):Te("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?Te(El,{key:s.key,clsPrefix:t,tmNode:s}):Te(Sl,{clsPrefix:t,key:s.key,tmNode:s})))}),Oo(n.action,s=>s&&[Te("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),Te(Qd,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),If=At({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return Te(Hc,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?Te(Jd,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>Te(Vo,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Gs(e.default,()=>[Te(Kd,null)])})}):null})}}}),Nf=ft([Xe("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[Xe("base-loading",`
 color: var(--n-loading-color);
 `),Xe("base-selection-tags","min-height: var(--n-height);"),Ke("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),Ke("state-border",`
 z-index: 1;
 border-color: #0000;
 `),Xe("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[Ke("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),Xe("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[Ke("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),Xe("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[Ke("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),Xe("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),Xe("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[Xe("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[Ke("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),Ke("render-label",`
 color: var(--n-text-color);
 `)]),tr("disabled",[ft("&:hover",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),pt("focus",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),pt("active",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),Xe("base-selection-label","background-color: var(--n-color-active);"),Xe("base-selection-tags","background-color: var(--n-color-active);")])]),pt("disabled","cursor: not-allowed;",[Ke("arrow",`
 color: var(--n-arrow-color-disabled);
 `),Xe("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[Xe("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),Ke("render-label",`
 color: var(--n-text-color-disabled);
 `)]),Xe("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),Xe("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),Xe("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[Ke("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),Ke("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>pt(`${n}-status`,[Ke("state-border",`border: var(--n-border-${n});`),tr("disabled",[ft("&:hover",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),pt("active",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),Xe("base-selection-label",`background-color: var(--n-color-active-${n});`),Xe("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),pt("focus",[Ke("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),Xe("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),Xe("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ft("&:last-child","padding-right: 0;"),Xe("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[Ke("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Of=At({name:"InternalSelection",props:Object.assign(Object.assign({},$t.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=On(n),i=zr("InternalSelection",t,e),r=qe(null),o=qe(null),s=qe(null),l=qe(null),c=qe(null),a=qe(null),d=qe(null),u=qe(null),p=qe(null),m=qe(null),g=qe(!1),_=qe(!1),h=qe(!1),f=$t("InternalSelection","-internal-selection",Nf,xd,n,Mt(n,"clsPrefix")),b=je(()=>n.clearable&&!n.disabled&&(h.value||n.active)),y=je(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Ki(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),v=je(()=>{const x=n.selectedOption;if(x)return x[n.labelField]}),A=je(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function T(){var x;const{value:R}=r;if(R){const{value:D}=o;D&&(D.style.width=`${R.offsetWidth}px`,n.maxTagCount!=="responsive"&&((x=p.value)===null||x===void 0||x.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:x}=m;x&&(x.style.display="none")}function F(){const{value:x}=m;x&&(x.style.display="inline-block")}An(Mt(n,"active"),x=>{x||C()}),An(Mt(n,"pattern"),()=>{n.multiple&&Vs(T)});function E(x){const{onFocus:R}=n;R&&R(x)}function M(x){const{onBlur:R}=n;R&&R(x)}function w(x){const{onDeleteOption:R}=n;R&&R(x)}function L(x){const{onClear:R}=n;R&&R(x)}function P(x){const{onPatternInput:R}=n;R&&R(x)}function I(x){var R;(!x.relatedTarget||!(!((R=s.value)===null||R===void 0)&&R.contains(x.relatedTarget)))&&E(x)}function B(x){var R;!((R=s.value)===null||R===void 0)&&R.contains(x.relatedTarget)||M(x)}function V(x){L(x)}function j(){h.value=!0}function H(){h.value=!1}function G(x){!n.active||!n.filterable||x.target!==o.value&&x.preventDefault()}function K(x){w(x)}const ce=qe(!1);function Q(x){if(x.key==="Backspace"&&!ce.value&&!n.pattern.length){const{selectedOptions:R}=n;R!=null&&R.length&&K(R[R.length-1])}}let te=null;function Se(x){const{value:R}=r;if(R){const D=x.target.value;R.textContent=D,T()}n.ignoreComposition&&ce.value?te=x:P(x)}function $(){ce.value=!0}function z(){ce.value=!1,n.ignoreComposition&&P(te),te=null}function W(x){var R;_.value=!0,(R=n.onPatternFocus)===null||R===void 0||R.call(n,x)}function Z(x){var R;_.value=!1,(R=n.onPatternBlur)===null||R===void 0||R.call(n,x)}function ue(){var x,R;if(n.filterable)_.value=!1,(x=a.value)===null||x===void 0||x.blur(),(R=o.value)===null||R===void 0||R.blur();else if(n.multiple){const{value:D}=l;D==null||D.blur()}else{const{value:D}=c;D==null||D.blur()}}function Ee(){var x,R,D;n.filterable?(_.value=!1,(x=a.value)===null||x===void 0||x.focus()):n.multiple?(R=l.value)===null||R===void 0||R.focus():(D=c.value)===null||D===void 0||D.focus()}function Re(){const{value:x}=o;x&&(F(),x.focus())}function Oe(){const{value:x}=o;x&&x.blur()}function Fe(x){const{value:R}=d;R&&R.setTextContent(`+${x}`)}function Qe(){const{value:x}=u;return x}function X(){return o.value}let Be=null;function ee(){Be!==null&&window.clearTimeout(Be)}function me(){n.active||(ee(),Be=window.setTimeout(()=>{A.value&&(g.value=!0)},100))}function ne(){ee()}function Me(x){x||(ee(),g.value=!1)}An(A,x=>{x||(g.value=!1)}),lr(()=>{vd(()=>{const x=a.value;x&&(n.disabled?x.removeAttribute("tabindex"):x.tabIndex=_.value?-1:0)})}),Zc(s,n.onResize);const{inlineThemeDisabled:Ae}=n,Pe=je(()=>{const{size:x}=n,{common:{cubicBezierEaseInOut:R},self:{fontWeight:D,borderRadius:O,color:U,placeholderColor:q,textColor:Y,paddingSingle:ae,paddingMultiple:de,caretColor:ie,colorDisabled:_e,textColorDisabled:Ce,placeholderColorDisabled:J,colorActive:se,boxShadowFocus:ye,boxShadowActive:k,boxShadowHover:ve,border:xe,borderFocus:fe,borderHover:be,borderActive:he,arrowColor:Ie,arrowColorDisabled:Ve,loadingColor:Ge,colorActiveWarning:we,boxShadowFocusWarning:ke,boxShadowActiveWarning:Ne,boxShadowHoverWarning:We,borderWarning:Ye,borderFocusWarning:_t,borderHoverWarning:Gt,borderActiveWarning:en,colorActiveError:qn,boxShadowFocusError:Yr,boxShadowActiveError:wi,boxShadowHoverError:Kr,borderError:Pi,borderFocusError:qr,borderHoverError:$r,borderActiveError:Qo,clearColor:ea,clearColorHover:ta,clearColorPressed:na,clearSize:ia,arrowSize:ra,[Qt("height",x)]:N,[Qt("fontSize",x)]:re}}=f.value,pe=Sr(ae),ge=Sr(de);return{"--n-bezier":R,"--n-border":xe,"--n-border-active":he,"--n-border-focus":fe,"--n-border-hover":be,"--n-border-radius":O,"--n-box-shadow-active":k,"--n-box-shadow-focus":ye,"--n-box-shadow-hover":ve,"--n-caret-color":ie,"--n-color":U,"--n-color-active":se,"--n-color-disabled":_e,"--n-font-size":re,"--n-height":N,"--n-padding-single-top":pe.top,"--n-padding-multiple-top":ge.top,"--n-padding-single-right":pe.right,"--n-padding-multiple-right":ge.right,"--n-padding-single-left":pe.left,"--n-padding-multiple-left":ge.left,"--n-padding-single-bottom":pe.bottom,"--n-padding-multiple-bottom":ge.bottom,"--n-placeholder-color":q,"--n-placeholder-color-disabled":J,"--n-text-color":Y,"--n-text-color-disabled":Ce,"--n-arrow-color":Ie,"--n-arrow-color-disabled":Ve,"--n-loading-color":Ge,"--n-color-active-warning":we,"--n-box-shadow-focus-warning":ke,"--n-box-shadow-active-warning":Ne,"--n-box-shadow-hover-warning":We,"--n-border-warning":Ye,"--n-border-focus-warning":_t,"--n-border-hover-warning":Gt,"--n-border-active-warning":en,"--n-color-active-error":qn,"--n-box-shadow-focus-error":Yr,"--n-box-shadow-active-error":wi,"--n-box-shadow-hover-error":Kr,"--n-border-error":Pi,"--n-border-focus-error":qr,"--n-border-hover-error":$r,"--n-border-active-error":Qo,"--n-clear-size":ia,"--n-clear-color":ea,"--n-clear-color-hover":ta,"--n-clear-color-pressed":na,"--n-arrow-size":ra,"--n-font-weight":D}}),S=Ae?di("internal-selection",je(()=>n.size[0]),Pe,n):void 0;return{mergedTheme:f,mergedClearable:b,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:_,filterablePlaceholder:y,label:v,selected:A,showTagsPanel:g,isComposing:ce,counterRef:d,counterWrapperRef:u,patternInputMirrorRef:r,patternInputRef:o,selfRef:s,multipleElRef:l,singleElRef:c,patternInputWrapperRef:a,overflowRef:p,inputTagElRef:m,handleMouseDown:G,handleFocusin:I,handleClear:V,handleMouseEnter:j,handleMouseLeave:H,handleDeleteOption:K,handlePatternKeyDown:Q,handlePatternInputInput:Se,handlePatternInputBlur:Z,handlePatternInputFocus:W,handleMouseEnterCounter:me,handleMouseLeaveCounter:ne,handleFocusout:B,handleCompositionEnd:z,handleCompositionStart:$,onPopoverUpdateShow:Me,focus:Ee,focusInput:Re,blur:ue,blurInput:Oe,updateCounter:Fe,getCounter:Qe,getTail:X,renderLabel:n.renderLabel,cssVars:Ae?void 0:Pe,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:l,ellipsisTagPopoverProps:c,onRender:a,renderTag:d,renderLabel:u}=this;a==null||a();const p=o==="responsive",m=typeof o=="number",g=p||m,_=Te(ed,null,{default:()=>Te(If,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var f,b;return(b=(f=this.$slots).arrow)===null||b===void 0?void 0:b.call(f)}})});let h;if(e){const{labelField:f}=this,b=P=>Te("div",{class:`${l}-base-selection-tag-wrapper`,key:P.value},d?d({option:P,handleClose:()=>{this.handleDeleteOption(P)}}):Te(Ro,{size:t,closable:!P.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(P)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>u?u(P,!0):Ki(P[f],P,!0)})),y=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(b),v=r?Te("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},Te("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),Te("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,A=p?()=>Te("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},Te(Ro,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let T;if(m){const P=this.selectedOptions.length-o;P>0&&(T=Te("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},Te(Ro,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${P}`})))}const C=p?r?Te(vl,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:A,tail:()=>v}):Te(vl,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:A}):m&&T?y().concat(T):y(),F=g?()=>Te("div",{class:`${l}-base-selection-popover`},p?y():this.selectedOptions.map(b)):void 0,E=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?Te("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},Te("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,L=r?Te("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},C,p?null:v,_):Te("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},C,_);h=Te(Tr,null,g?Te(td,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>L,default:F}):L,w)}else if(r){const f=this.pattern||this.isComposing,b=this.active?!f:!this.selected,y=this.active?!1:this.selected;h=Te("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:_l(this.label)},Te("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?Te("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},Te("div",{class:`${l}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):Ki(this.label,this.selectedOption,!0))):null,b?Te("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},Te("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else h=Te("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?Te("div",{class:`${l}-base-selection-input`,title:_l(this.label),key:"input"},Te("div",{class:`${l}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):Ki(this.label,this.selectedOption,!0))):Te("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},Te("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),_);return Te("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,n&&`${l}-base-selection--${n}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},h,s?Te("div",{class:`${l}-base-selection__border`}):null,s?Te("div",{class:`${l}-base-selection__state-border`}):null)}});function Fo(n){return n.type==="group"}function eu(n){return n.type==="ignored"}function fa(n,e){try{return!!(1+e.toString().toLowerCase().indexOf(n.trim().toLowerCase()))}catch{return!1}}function Df(n,e){return{getIsGroup:Fo,getIgnored:eu,getKey(i){return Fo(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}function Ff(n,e,t,i){if(!e)return n;function r(o){if(!Array.isArray(o))return[];const s=[];for(const l of o)if(Fo(l)){const c=r(l[i]);c.length&&s.push(Object.assign({},l,{[i]:c}))}else{if(eu(l))continue;e(t,l)&&s.push(l)}return s}return r(n)}function Uf(n,e,t){const i=new Map;return n.forEach(r=>{Fo(r)?r[t].forEach(o=>{i.set(o[e],o)}):i.set(r[e],r)}),i}const tu=Wc("n-checkbox-group"),kf={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Bf=At({name:"CheckboxGroup",props:kf,setup(n){const{mergedClsPrefixRef:e}=On(n),t=Vr(n),{mergedSizeRef:i,mergedDisabledRef:r}=t,o=qe(n.defaultValue),s=je(()=>n.value),l=er(s,o),c=je(()=>{var u;return((u=l.value)===null||u===void 0?void 0:u.length)||0}),a=je(()=>Array.isArray(l.value)?new Set(l.value):new Set);function d(u,p){const{nTriggerFormInput:m,nTriggerFormChange:g}=t,{onChange:_,"onUpdate:value":h,onUpdateValue:f}=n;if(Array.isArray(l.value)){const b=Array.from(l.value),y=b.findIndex(v=>v===p);u?~y||(b.push(p),f&&vt(f,b,{actionType:"check",value:p}),h&&vt(h,b,{actionType:"check",value:p}),m(),g(),o.value=b,_&&vt(_,b)):~y&&(b.splice(y,1),f&&vt(f,b,{actionType:"uncheck",value:p}),h&&vt(h,b,{actionType:"uncheck",value:p}),_&&vt(_,b),o.value=b,m(),g())}else u?(f&&vt(f,[p],{actionType:"check",value:p}),h&&vt(h,[p],{actionType:"check",value:p}),_&&vt(_,[p]),o.value=[p],m(),g()):(f&&vt(f,[],{actionType:"uncheck",value:p}),h&&vt(h,[],{actionType:"uncheck",value:p}),_&&vt(_,[]),o.value=[],m(),g())}return wr(tu,{checkedCountRef:c,maxRef:Mt(n,"max"),minRef:Mt(n,"min"),valueSetRef:a,disabledRef:r,mergedSizeRef:i,toggleCheckbox:d}),{mergedClsPrefix:e}},render(){return Te("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),zf=()=>Te("svg",{viewBox:"0 0 64 64",class:"check-icon"},Te("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Vf=()=>Te("svg",{viewBox:"0 0 100 100",class:"line-icon"},Te("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Gf=ft([Xe("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[pt("show-label","line-height: var(--n-label-line-height);"),ft("&:hover",[Xe("checkbox-box",[Ke("border","border: var(--n-border-checked);")])]),ft("&:focus:not(:active)",[Xe("checkbox-box",[Ke("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),pt("inside-table",[Xe("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),pt("checked",[Xe("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[Xe("checkbox-icon",[ft(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),pt("indeterminate",[Xe("checkbox-box",[Xe("checkbox-icon",[ft(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),ft(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),pt("checked, indeterminate",[ft("&:focus:not(:active)",[Xe("checkbox-box",[Ke("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),Xe("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[Ke("border",{border:"var(--n-border-checked)"})])]),pt("disabled",{cursor:"not-allowed"},[pt("checked",[Xe("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[Ke("border",{border:"var(--n-border-disabled-checked)"}),Xe("checkbox-icon",[ft(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),Xe("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[Ke("border",`
 border: var(--n-border-disabled);
 `),Xe("checkbox-icon",[ft(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),Ke("label",`
 color: var(--n-text-color-disabled);
 `)]),Xe("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),Xe("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[Ke("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),Xe("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[ft(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),zc({left:"1px",top:"1px"})])]),Ke("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[ft("&:empty",{display:"none"})])]),_d(Xe("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),bd(Xe("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Hf=Object.assign(Object.assign({},$t.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Wf=At({name:"Checkbox",props:Hf,setup(n){const e=Br(tu,null),t=qe(null),{mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:o}=On(n),s=qe(n.defaultChecked),l=Mt(n,"checked"),c=er(l,s),a=In(()=>{if(e){const T=e.valueSetRef.value;return T&&n.value!==void 0?T.has(n.value):!1}else return c.value===n.checkedValue}),d=Vr(n,{mergedSize(T){const{size:C}=n;if(C!==void 0)return C;if(e){const{value:F}=e.mergedSizeRef;if(F!==void 0)return F}if(T){const{mergedSize:F}=T;if(F!==void 0)return F.value}return"medium"},mergedDisabled(T){const{disabled:C}=n;if(C!==void 0)return C;if(e){if(e.disabledRef.value)return!0;const{maxRef:{value:F},checkedCountRef:E}=e;if(F!==void 0&&E.value>=F&&!a.value)return!0;const{minRef:{value:M}}=e;if(M!==void 0&&E.value<=M&&a.value)return!0}return T?T.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:p}=d,m=$t("Checkbox","-checkbox",Gf,yd,n,i);function g(T){if(e&&n.value!==void 0)e.toggleCheckbox(!a.value,n.value);else{const{onChange:C,"onUpdate:checked":F,onUpdateChecked:E}=n,{nTriggerFormInput:M,nTriggerFormChange:w}=d,L=a.value?n.uncheckedValue:n.checkedValue;F&&vt(F,L,T),E&&vt(E,L,T),C&&vt(C,L,T),M(),w(),s.value=L}}function _(T){u.value||g(T)}function h(T){if(!u.value)switch(T.key){case" ":case"Enter":g(T)}}function f(T){switch(T.key){case" ":T.preventDefault()}}const b={focus:()=>{var T;(T=t.value)===null||T===void 0||T.focus()},blur:()=>{var T;(T=t.value)===null||T===void 0||T.blur()}},y=zr("Checkbox",o,i),v=je(()=>{const{value:T}=p,{common:{cubicBezierEaseInOut:C},self:{borderRadius:F,color:E,colorChecked:M,colorDisabled:w,colorTableHeader:L,colorTableHeaderModal:P,colorTableHeaderPopover:I,checkMarkColor:B,checkMarkColorDisabled:V,border:j,borderFocus:H,borderDisabled:G,borderChecked:K,boxShadowFocus:ce,textColor:Q,textColorDisabled:te,checkMarkColorDisabledChecked:Se,colorDisabledChecked:$,borderDisabledChecked:z,labelPadding:W,labelLineHeight:Z,labelFontWeight:ue,[Qt("fontSize",T)]:Ee,[Qt("size",T)]:Re}}=m.value;return{"--n-label-line-height":Z,"--n-label-font-weight":ue,"--n-size":Re,"--n-bezier":C,"--n-border-radius":F,"--n-border":j,"--n-border-checked":K,"--n-border-focus":H,"--n-border-disabled":G,"--n-border-disabled-checked":z,"--n-box-shadow-focus":ce,"--n-color":E,"--n-color-checked":M,"--n-color-table":L,"--n-color-table-modal":P,"--n-color-table-popover":I,"--n-color-disabled":w,"--n-color-disabled-checked":$,"--n-text-color":Q,"--n-text-color-disabled":te,"--n-check-mark-color":B,"--n-check-mark-color-disabled":V,"--n-check-mark-color-disabled-checked":Se,"--n-font-size":Ee,"--n-label-padding":W}}),A=r?di("checkbox",je(()=>p.value[0]),v,n):void 0;return Object.assign(d,b,{rtlEnabled:y,selfRef:t,mergedClsPrefix:i,mergedDisabled:u,renderedChecked:a,mergedTheme:m,labelId:id(),handleClick:_,handleKeyUp:h,handleKeyDown:f,cssVars:r?void 0:v,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender})},render(){var n;const{$slots:e,renderedChecked:t,mergedDisabled:i,indeterminate:r,privateInsideTable:o,cssVars:s,labelId:l,label:c,mergedClsPrefix:a,focusable:d,handleKeyUp:u,handleKeyDown:p,handleClick:m}=this;(n=this.onRender)===null||n===void 0||n.call(this);const g=Oo(e.default,_=>c||_?Te("span",{class:`${a}-checkbox__label`,id:l},c||_):null);return Te("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,t&&`${a}-checkbox--checked`,i&&`${a}-checkbox--disabled`,r&&`${a}-checkbox--indeterminate`,o&&`${a}-checkbox--inside-table`,g&&`${a}-checkbox--show-label`],tabindex:i||!d?void 0:0,role:"checkbox","aria-checked":r?"mixed":t,"aria-labelledby":l,style:s,onKeyup:u,onKeydown:p,onClick:m,onMousedown:()=>{nd("selectstart",window,_=>{_.preventDefault()},{once:!0})}},Te("div",{class:`${a}-checkbox-box-wrapper`}," ",Te("div",{class:`${a}-checkbox-box`},Te(Vc,null,{default:()=>this.indeterminate?Te("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Vf()):Te("div",{key:"check",class:`${a}-checkbox-icon`},zf())}),Te("div",{class:`${a}-checkbox-box__border`}))),g)}}),Xf=ft([Xe("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),Xe("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Dc({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),jf=Object.assign(Object.assign({},$t.props),{to:ja.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Yf=At({name:"Select",props:jf,slots:Object,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,namespaceRef:i,inlineThemeDisabled:r}=On(n),o=$t("Select","-select",Xf,Md,n,e),s=qe(n.defaultValue),l=Mt(n,"value"),c=er(l,s),a=qe(!1),d=qe(""),u=sd(n,["items","options"]),p=qe([]),m=qe([]),g=je(()=>m.value.concat(p.value).concat(u.value)),_=je(()=>{const{filter:J}=n;if(J)return J;const{labelField:se,valueField:ye}=n;return(k,ve)=>{if(!ve)return!1;const xe=ve[se];if(typeof xe=="string")return fa(k,xe);const fe=ve[ye];return typeof fe=="string"?fa(k,fe):typeof fe=="number"?fa(k,String(fe)):!1}}),h=je(()=>{if(n.remote)return u.value;{const{value:J}=g,{value:se}=d;return!se.length||!n.filterable?J:Ff(J,_.value,se,n.childrenField)}}),f=je(()=>{const{valueField:J,childrenField:se}=n,ye=Df(J,se);return Mf(h.value,ye)}),b=je(()=>Uf(g.value,n.valueField,n.childrenField)),y=qe(!1),v=er(Mt(n,"show"),y),A=qe(null),T=qe(null),C=qe(null),{localeRef:F}=Oc("Select"),E=je(()=>{var J;return(J=n.placeholder)!==null&&J!==void 0?J:F.value.placeholder}),M=[],w=qe(new Map),L=je(()=>{const{fallbackOption:J}=n;if(J===void 0){const{labelField:se,valueField:ye}=n;return k=>({[se]:String(k),[ye]:k})}return J===!1?!1:se=>Object.assign(J(se),{value:se})});function P(J){const se=n.remote,{value:ye}=w,{value:k}=b,{value:ve}=L,xe=[];return J.forEach(fe=>{if(k.has(fe))xe.push(k.get(fe));else if(se&&ye.has(fe))xe.push(ye.get(fe));else if(ve){const be=ve(fe);be&&xe.push(be)}}),xe}const I=je(()=>{if(n.multiple){const{value:J}=c;return Array.isArray(J)?P(J):[]}return null}),B=je(()=>{const{value:J}=c;return!n.multiple&&!Array.isArray(J)?J===null?null:P([J])[0]||null:null}),V=Vr(n),{mergedSizeRef:j,mergedDisabledRef:H,mergedStatusRef:G}=V;function K(J,se){const{onChange:ye,"onUpdate:value":k,onUpdateValue:ve}=n,{nTriggerFormChange:xe,nTriggerFormInput:fe}=V;ye&&vt(ye,J,se),ve&&vt(ve,J,se),k&&vt(k,J,se),s.value=J,xe(),fe()}function ce(J){const{onBlur:se}=n,{nTriggerFormBlur:ye}=V;se&&vt(se,J),ye()}function Q(){const{onClear:J}=n;J&&vt(J)}function te(J){const{onFocus:se,showOnFocus:ye}=n,{nTriggerFormFocus:k}=V;se&&vt(se,J),k(),ye&&Z()}function Se(J){const{onSearch:se}=n;se&&vt(se,J)}function $(J){const{onScroll:se}=n;se&&vt(se,J)}function z(){var J;const{remote:se,multiple:ye}=n;if(se){const{value:k}=w;if(ye){const{valueField:ve}=n;(J=I.value)===null||J===void 0||J.forEach(xe=>{k.set(xe[ve],xe)})}else{const ve=B.value;ve&&k.set(ve[n.valueField],ve)}}}function W(J){const{onUpdateShow:se,"onUpdate:show":ye}=n;se&&vt(se,J),ye&&vt(ye,J),y.value=J}function Z(){H.value||(W(!0),y.value=!0,n.filterable&&ae())}function ue(){W(!1)}function Ee(){d.value="",m.value=M}const Re=qe(!1);function Oe(){n.filterable&&(Re.value=!0)}function Fe(){n.filterable&&(Re.value=!1,v.value||Ee())}function Qe(){H.value||(v.value?n.filterable?ae():ue():Z())}function X(J){var se,ye;!((ye=(se=C.value)===null||se===void 0?void 0:se.selfRef)===null||ye===void 0)&&ye.contains(J.relatedTarget)||(a.value=!1,ce(J),ue())}function Be(J){te(J),a.value=!0}function ee(){a.value=!0}function me(J){var se;!((se=A.value)===null||se===void 0)&&se.$el.contains(J.relatedTarget)||(a.value=!1,ce(J),ue())}function ne(){var J;(J=A.value)===null||J===void 0||J.focus(),ue()}function Me(J){var se;v.value&&(!((se=A.value)===null||se===void 0)&&se.$el.contains(ld(J))||ue())}function Ae(J){if(!Array.isArray(J))return[];if(L.value)return Array.from(J);{const{remote:se}=n,{value:ye}=b;if(se){const{value:k}=w;return J.filter(ve=>ye.has(ve)||k.has(ve))}else return J.filter(k=>ye.has(k))}}function Pe(J){S(J.rawNode)}function S(J){if(H.value)return;const{tag:se,remote:ye,clearFilterAfterSelect:k,valueField:ve}=n;if(se&&!ye){const{value:xe}=m,fe=xe[0]||null;if(fe){const be=p.value;be.length?be.push(fe):p.value=[fe],m.value=M}}if(ye&&w.value.set(J[ve],J),n.multiple){const xe=Ae(c.value),fe=xe.findIndex(be=>be===J[ve]);if(~fe){if(xe.splice(fe,1),se&&!ye){const be=x(J[ve]);~be&&(p.value.splice(be,1),k&&(d.value=""))}}else xe.push(J[ve]),k&&(d.value="");K(xe,P(xe))}else{if(se&&!ye){const xe=x(J[ve]);~xe?p.value=[p.value[xe]]:p.value=M}Y(),ue(),K(J[ve],J)}}function x(J){return p.value.findIndex(ye=>ye[n.valueField]===J)}function R(J){v.value||Z();const{value:se}=J.target;d.value=se;const{tag:ye,remote:k}=n;if(Se(se),ye&&!k){if(!se){m.value=M;return}const{onCreate:ve}=n,xe=ve?ve(se):{[n.labelField]:se,[n.valueField]:se},{valueField:fe,labelField:be}=n;u.value.some(he=>he[fe]===xe[fe]||he[be]===xe[be])||p.value.some(he=>he[fe]===xe[fe]||he[be]===xe[be])?m.value=M:m.value=[xe]}}function D(J){J.stopPropagation();const{multiple:se}=n;!se&&n.filterable&&ue(),Q(),se?K([],[]):K(null,null)}function O(J){!Mr(J,"action")&&!Mr(J,"empty")&&!Mr(J,"header")&&J.preventDefault()}function U(J){$(J)}function q(J){var se,ye,k,ve,xe;if(!n.keyboard){J.preventDefault();return}switch(J.key){case" ":if(n.filterable)break;J.preventDefault();case"Enter":if(!(!((se=A.value)===null||se===void 0)&&se.isComposing)){if(v.value){const fe=(ye=C.value)===null||ye===void 0?void 0:ye.getPendingTmNode();fe?Pe(fe):n.filterable||(ue(),Y())}else if(Z(),n.tag&&Re.value){const fe=m.value[0];if(fe){const be=fe[n.valueField],{value:he}=c;n.multiple&&Array.isArray(he)&&he.includes(be)||S(fe)}}}J.preventDefault();break;case"ArrowUp":if(J.preventDefault(),n.loading)return;v.value&&((k=C.value)===null||k===void 0||k.prev());break;case"ArrowDown":if(J.preventDefault(),n.loading)return;v.value?(ve=C.value)===null||ve===void 0||ve.next():Z();break;case"Escape":v.value&&(jd(J),ue()),(xe=A.value)===null||xe===void 0||xe.focus();break}}function Y(){var J;(J=A.value)===null||J===void 0||J.focus()}function ae(){var J;(J=A.value)===null||J===void 0||J.focusInput()}function de(){var J;v.value&&((J=T.value)===null||J===void 0||J.syncPosition())}z(),An(Mt(n,"options"),z);const ie={focus:()=>{var J;(J=A.value)===null||J===void 0||J.focus()},focusInput:()=>{var J;(J=A.value)===null||J===void 0||J.focusInput()},blur:()=>{var J;(J=A.value)===null||J===void 0||J.blur()},blurInput:()=>{var J;(J=A.value)===null||J===void 0||J.blurInput()}},_e=je(()=>{const{self:{menuBoxShadow:J}}=o.value;return{"--n-menu-box-shadow":J}}),Ce=r?di("select",void 0,_e,n):void 0;return Object.assign(Object.assign({},ie),{mergedStatus:G,mergedClsPrefix:e,mergedBordered:t,namespace:i,treeMate:f,isMounted:Td(),triggerRef:A,menuRef:C,pattern:d,uncontrolledShow:y,mergedShow:v,adjustedTo:ja(n),uncontrolledValue:s,mergedValue:c,followerRef:T,localizedPlaceholder:E,selectedOption:B,selectedOptions:I,mergedSize:j,mergedDisabled:H,focused:a,activeWithoutMenuOpen:Re,inlineThemeDisabled:r,onTriggerInputFocus:Oe,onTriggerInputBlur:Fe,handleTriggerOrMenuResize:de,handleMenuFocus:ee,handleMenuBlur:me,handleMenuTabOut:ne,handleTriggerClick:Qe,handleToggle:Pe,handleDeleteOption:S,handlePatternInput:R,handleClear:D,handleTriggerBlur:X,handleTriggerFocus:Be,handleKeydown:q,handleMenuAfterLeave:Ee,handleMenuClickOutside:Me,handleMenuScroll:U,handleMenuKeydown:q,handleMenuMousedown:O,mergedTheme:o,cssVars:r?void 0:_e,themeClass:Ce==null?void 0:Ce.themeClass,onRender:Ce==null?void 0:Ce.onRender})},render(){return Te("div",{class:`${this.mergedClsPrefix}-select`},Te(rd,null,{default:()=>[Te(od,null,{default:()=>Te(Of,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var n,e;return[(e=(n=this.$slots).arrow)===null||e===void 0?void 0:e.call(n)]}})}),Te(ad,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ja.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>Te(Gc,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var n,e,t;return this.mergedShow||this.displayDirective==="show"?((n=this.onRender)===null||n===void 0||n.call(this),Ed(Te(Lf,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(e=this.menuProps)===null||e===void 0?void 0:e.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},header:()=>{var i,r;return[(r=(i=this.$slots).header)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[Sd,this.mergedShow],[ul,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ul,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function Kf(n){const{borderColor:e,primaryColor:t,baseColor:i,textColorDisabled:r,inputColorDisabled:o,textColor2:s,opacityDisabled:l,borderRadius:c,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:u,heightSmall:p,heightMedium:m,heightLarge:g,lineHeight:_}=n;return Object.assign(Object.assign({},Rd),{labelLineHeight:_,buttonHeightSmall:p,buttonHeightMedium:m,buttonHeightLarge:g,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${fl(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:i,colorDisabled:o,colorActive:"#0000",textColor:s,textColorDisabled:r,dotColorActive:t,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:t,buttonBorderColorHover:e,buttonColor:i,buttonColorActive:i,buttonTextColor:s,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${fl(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:c})}const nu={common:Ad,self:Kf},qf=Xe("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[pt("checked",[Ke("dot",`
 background-color: var(--n-color-active);
 `)]),Ke("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),Xe("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),Ke("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[ft("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),pt("checked",{boxShadow:"var(--n-box-shadow-active)"},[ft("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),Ke("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),tr("disabled",`
 cursor: pointer;
 `,[ft("&:hover",[Ke("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),pt("focus",[ft("&:not(:active)",[Ke("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),pt("disabled",`
 cursor: not-allowed;
 `,[Ke("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[ft("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),pt("checked",`
 opacity: 1;
 `)]),Ke("label",{color:"var(--n-text-color-disabled)"}),Xe("radio-input",`
 cursor: not-allowed;
 `)])]),$f={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},iu=Wc("n-radio-group");function Zf(n){const e=Br(iu,null),t=Vr(n,{mergedSize(b){const{size:y}=n;if(y!==void 0)return y;if(e){const{mergedSizeRef:{value:v}}=e;if(v!==void 0)return v}return b?b.mergedSize.value:"medium"},mergedDisabled(b){return!!(n.disabled||e!=null&&e.disabledRef.value||b!=null&&b.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:r}=t,o=qe(null),s=qe(null),l=qe(n.defaultChecked),c=Mt(n,"checked"),a=er(c,l),d=In(()=>e?e.valueRef.value===n.value:a.value),u=In(()=>{const{name:b}=n;if(b!==void 0)return b;if(e)return e.nameRef.value}),p=qe(!1);function m(){if(e){const{doUpdateValue:b}=e,{value:y}=n;vt(b,y)}else{const{onUpdateChecked:b,"onUpdate:checked":y}=n,{nTriggerFormInput:v,nTriggerFormChange:A}=t;b&&vt(b,!0),y&&vt(y,!0),v(),A(),l.value=!0}}function g(){r.value||d.value||m()}function _(){g(),o.value&&(o.value.checked=d.value)}function h(){p.value=!1}function f(){p.value=!0}return{mergedClsPrefix:e?e.mergedClsPrefixRef:On(n).mergedClsPrefixRef,inputRef:o,labelRef:s,mergedName:u,mergedDisabled:r,renderSafeChecked:d,focus:p,mergedSize:i,handleRadioInputChange:_,handleRadioInputBlur:h,handleRadioInputFocus:f}}const Jf=Object.assign(Object.assign({},$t.props),$f),Qf=At({name:"Radio",props:Jf,setup(n){const e=Zf(n),t=$t("Radio","-radio",qf,nu,n,e.mergedClsPrefix),i=je(()=>{const{mergedSize:{value:a}}=e,{common:{cubicBezierEaseInOut:d},self:{boxShadow:u,boxShadowActive:p,boxShadowDisabled:m,boxShadowFocus:g,boxShadowHover:_,color:h,colorDisabled:f,colorActive:b,textColor:y,textColorDisabled:v,dotColorActive:A,dotColorDisabled:T,labelPadding:C,labelLineHeight:F,labelFontWeight:E,[Qt("fontSize",a)]:M,[Qt("radioSize",a)]:w}}=t.value;return{"--n-bezier":d,"--n-label-line-height":F,"--n-label-font-weight":E,"--n-box-shadow":u,"--n-box-shadow-active":p,"--n-box-shadow-disabled":m,"--n-box-shadow-focus":g,"--n-box-shadow-hover":_,"--n-color":h,"--n-color-active":b,"--n-color-disabled":f,"--n-dot-color-active":A,"--n-dot-color-disabled":T,"--n-font-size":M,"--n-radio-size":w,"--n-text-color":y,"--n-text-color-disabled":v,"--n-label-padding":C}}),{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:s}=On(n),l=zr("Radio",s,o),c=r?di("radio",je(()=>e.mergedSize.value[0]),i,n):void 0;return Object.assign(e,{rtlEnabled:l,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{$slots:n,mergedClsPrefix:e,onRender:t,label:i}=this;return t==null||t(),Te("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},Te("div",{class:`${e}-radio__dot-wrapper`}," ",Te("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]}),Te("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),Oo(n.default,r=>!r&&!i?null:Te("div",{ref:"labelRef",class:`${e}-radio__label`},r||i)))}}),eh=Xe("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[Ke("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[pt("checked",{backgroundColor:"var(--n-button-border-color-active)"}),pt("disabled",{opacity:"var(--n-opacity-disabled)"})]),pt("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[Xe("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),Ke("splitor",{height:"var(--n-height)"})]),Xe("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[Xe("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),Ke("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),ft("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[Ke("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),ft("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[Ke("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),tr("disabled",`
 cursor: pointer;
 `,[ft("&:hover",[Ke("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),tr("checked",{color:"var(--n-button-text-color-hover)"})]),pt("focus",[ft("&:not(:active)",[Ke("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),pt("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),pt("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function th(n,e,t){var i;const r=[];let o=!1;for(let s=0;s<n.length;++s){const l=n[s],c=(i=l.type)===null||i===void 0?void 0:i.name;c==="RadioButton"&&(o=!0);const a=l.props;if(c!=="RadioButton"){r.push(l);continue}if(s===0)r.push(l);else{const d=r[r.length-1].props,u=e===d.value,p=d.disabled,m=e===a.value,g=a.disabled,_=(u?2:0)+(p?0:1),h=(m?2:0)+(g?0:1),f={[`${t}-radio-group__splitor--disabled`]:p,[`${t}-radio-group__splitor--checked`]:u},b={[`${t}-radio-group__splitor--disabled`]:g,[`${t}-radio-group__splitor--checked`]:m},y=_<h?b:f;r.push(Te("div",{class:[`${t}-radio-group__splitor`,y]}),l)}}return{children:r,isButtonGroup:o}}const nh=Object.assign(Object.assign({},$t.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ih=At({name:"RadioGroup",props:nh,setup(n){const e=qe(null),{mergedSizeRef:t,mergedDisabledRef:i,nTriggerFormChange:r,nTriggerFormInput:o,nTriggerFormBlur:s,nTriggerFormFocus:l}=Vr(n),{mergedClsPrefixRef:c,inlineThemeDisabled:a,mergedRtlRef:d}=On(n),u=$t("Radio","-radio-group",eh,nu,n,c),p=qe(n.defaultValue),m=Mt(n,"value"),g=er(m,p);function _(A){const{onUpdateValue:T,"onUpdate:value":C}=n;T&&vt(T,A),C&&vt(C,A),p.value=A,r(),o()}function h(A){const{value:T}=e;T&&(T.contains(A.relatedTarget)||l())}function f(A){const{value:T}=e;T&&(T.contains(A.relatedTarget)||s())}wr(iu,{mergedClsPrefixRef:c,nameRef:Mt(n,"name"),valueRef:g,disabledRef:i,mergedSizeRef:t,doUpdateValue:_});const b=zr("Radio",d,c),y=je(()=>{const{value:A}=t,{common:{cubicBezierEaseInOut:T},self:{buttonBorderColor:C,buttonBorderColorActive:F,buttonBorderRadius:E,buttonBoxShadow:M,buttonBoxShadowFocus:w,buttonBoxShadowHover:L,buttonColor:P,buttonColorActive:I,buttonTextColor:B,buttonTextColorActive:V,buttonTextColorHover:j,opacityDisabled:H,[Qt("buttonHeight",A)]:G,[Qt("fontSize",A)]:K}}=u.value;return{"--n-font-size":K,"--n-bezier":T,"--n-button-border-color":C,"--n-button-border-color-active":F,"--n-button-border-radius":E,"--n-button-box-shadow":M,"--n-button-box-shadow-focus":w,"--n-button-box-shadow-hover":L,"--n-button-color":P,"--n-button-color-active":I,"--n-button-text-color":B,"--n-button-text-color-hover":j,"--n-button-text-color-active":V,"--n-height":G,"--n-opacity-disabled":H}}),v=a?di("radio-group",je(()=>t.value[0]),y,n):void 0;return{selfElRef:e,rtlEnabled:b,mergedClsPrefix:c,mergedValue:g,handleFocusout:f,handleFocusin:h,cssVars:a?void 0:y,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var n;const{mergedValue:e,mergedClsPrefix:t,handleFocusin:i,handleFocusout:r}=this,{children:o,isButtonGroup:s}=th(Cd(wd(this)),e,t);return(n=this.onRender)===null||n===void 0||n.call(this),Te("div",{onFocusin:i,onFocusout:r,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,s&&`${t}-radio-group--button-group`],style:this.cssVars},o)}}),rh=Xe("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[pt("color-transition",{transition:"color .3s var(--n-bezier)"}),pt("depth",{color:"var(--n-color)"},[ft("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),ft("svg",{height:"1em",width:"1em"})]),oh=Object.assign(Object.assign({},$t.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),ah=At({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:oh,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=On(n),i=$t("Icon","-icon",rh,Ld,n,e),r=je(()=>{const{depth:s}=n,{common:{cubicBezierEaseInOut:l},self:c}=i.value;if(s!==void 0){const{color:a,[`opacity${s}Depth`]:d}=c;return{"--n-bezier":l,"--n-color":a,"--n-opacity":d}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),o=t?di("icon",je(()=>`${n.depth||"d"}`),r,n):void 0;return{mergedClsPrefix:e,mergedStyle:je(()=>{const{size:s,color:l}=n;return{fontSize:cd(s),color:l}}),cssVars:t?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{$parent:e,depth:t,mergedClsPrefix:i,component:r,onRender:o,themeClass:s}=this;return!((n=e==null?void 0:e.$options)===null||n===void 0)&&n._n_icon__&&Pd("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),Te("i",Fc(this.$attrs,{role:"img",class:[`${i}-icon`,s,{[`${i}-icon--depth`]:t,[`${i}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?Te(r):this.$slots)}}),sh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},lh=At({name:"ArrowMove20Regular",render:function(e,t){return Wt(),wn("svg",sh,t[0]||(t[0]=[gt("g",{fill:"none"},[gt("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),ch={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},uh=At({name:"ArrowMoveInward20Regular",render:function(e,t){return Wt(),wn("svg",ch,t[0]||(t[0]=[gt("g",{fill:"none"},[gt("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ws="181",Zi={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dh=0,Tl=1,fh=2,ru=1,hh=2,Hn=3,Yn=0,Kt=1,Tn=2,Xn=0,Ji=1,Ml=2,Al=3,Rl=4,ph=5,yi=100,mh=101,gh=102,xh=103,vh=104,_h=200,bh=201,yh=202,Eh=203,qa=204,$a=205,Sh=206,Th=207,Mh=208,Ah=209,Rh=210,Ch=211,wh=212,Ph=213,Lh=214,Za=0,Ja=1,Qa=2,nr=3,es=4,ts=5,ns=6,is=7,Xs=0,Ih=1,Nh=2,li=0,Oh=1,Dh=2,Fh=3,Uh=4,kh=5,Bh=6,zh=7,ou=300,ir=301,rr=302,rs=303,os=304,Go=306,oi=1e3,dn=1001,as=1002,fn=1003,Vh=1004,Jr=1005,xn=1006,ha=1007,Si=1008,Nn=1009,au=1010,su=1011,Pr=1012,js=1013,Ti=1014,Wn=1015,cr=1016,Ys=1017,Ks=1018,Lr=1020,lu=35902,cu=35899,uu=1021,du=1022,vn=1023,Ir=1026,Nr=1027,fu=1028,qs=1029,$s=1030,Zs=1031,Js=1033,Co=33776,wo=33777,Po=33778,Lo=33779,ss=35840,ls=35841,cs=35842,us=35843,ds=36196,fs=37492,hs=37496,ps=37808,ms=37809,gs=37810,xs=37811,vs=37812,_s=37813,bs=37814,ys=37815,Es=37816,Ss=37817,Ts=37818,Ms=37819,As=37820,Rs=37821,Cs=36492,ws=36494,Ps=36495,Ls=36283,Is=36284,Ns=36285,Os=36286,Gh=3200,Hh=3201,Qs=0,Wh=1,ri="",Nt="srgb",or="srgb-linear",Uo="linear",yt="srgb",Ii=7680,Cl=519,Xh=512,jh=513,Yh=514,hu=515,Kh=516,qh=517,$h=518,Zh=519,wl=35044,Pl="300 es",Ln=2e3,ko=2001;function pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jh(){const n=Or("canvas");return n.style.display="block",n}const Ll={};function Il(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Dt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Dr(...n){const e=n.join(" ");e in Ll||(Ll[e]=!0,nt(...n))}function Qh(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Ds=180/Math.PI;function Gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function ep(n,e){return(n%e+e)%e}function pa(n,e,t){return(1-t)*n+t*e}function pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tp={DEG2RAD:Io};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,l){let c=i[r+0],a=i[r+1],d=i[r+2],u=i[r+3],p=o[s+0],m=o[s+1],g=o[s+2],_=o[s+3];if(l<=0){e[t+0]=c,e[t+1]=a,e[t+2]=d,e[t+3]=u;return}if(l>=1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==p||a!==m||d!==g){let h=c*p+a*m+d*g+u*_;h<0&&(p=-p,m=-m,g=-g,_=-_,h=-h);let f=1-l;if(h<.9995){const b=Math.acos(h),y=Math.sin(b);f=Math.sin(f*b)/y,l=Math.sin(l*b)/y,c=c*f+p*l,a=a*f+m*l,d=d*f+g*l,u=u*f+_*l}else{c=c*f+p*l,a=a*f+m*l,d=d*f+g*l,u=u*f+_*l;const b=1/Math.sqrt(c*c+a*a+d*d+u*u);c*=b,a*=b,d*=b,u*=b}}e[t]=c,e[t+1]=a,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,o,s){const l=i[r],c=i[r+1],a=i[r+2],d=i[r+3],u=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=l*g+d*u+c*m-a*p,e[t+1]=c*g+d*p+a*u-l*m,e[t+2]=a*g+d*m+l*p-c*u,e[t+3]=d*g-l*u-c*p-a*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,l=Math.cos,c=Math.sin,a=l(i/2),d=l(r/2),u=l(o/2),p=c(i/2),m=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=p*d*u+a*m*g,this._y=a*m*u-p*d*g,this._z=a*d*g+p*m*u,this._w=a*d*u-p*m*g;break;case"YXZ":this._x=p*d*u+a*m*g,this._y=a*m*u-p*d*g,this._z=a*d*g-p*m*u,this._w=a*d*u+p*m*g;break;case"ZXY":this._x=p*d*u-a*m*g,this._y=a*m*u+p*d*g,this._z=a*d*g+p*m*u,this._w=a*d*u-p*m*g;break;case"ZYX":this._x=p*d*u-a*m*g,this._y=a*m*u+p*d*g,this._z=a*d*g-p*m*u,this._w=a*d*u+p*m*g;break;case"YZX":this._x=p*d*u+a*m*g,this._y=a*m*u+p*d*g,this._z=a*d*g-p*m*u,this._w=a*d*u-p*m*g;break;case"XZY":this._x=p*d*u-a*m*g,this._y=a*m*u-p*d*g,this._z=a*d*g+p*m*u,this._w=a*d*u+p*m*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],l=t[5],c=t[9],a=t[2],d=t[6],u=t[10],p=i+l+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(o-a)*m,this._z=(s-r)*m}else if(i>l&&i>u){const m=2*Math.sqrt(1+i-l-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+a)/m}else if(l>u){const m=2*Math.sqrt(1+l-i-u);this._w=(o-a)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-i-l);this._w=(s-r)/m,this._x=(o+a)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,l=t._x,c=t._y,a=t._z,d=t._w;return this._x=i*d+s*l+r*a-o*c,this._y=r*d+s*c+o*l-i*a,this._z=o*d+s*a+i*c-r*l,this._w=s*d-i*l-r*c-o*a,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,o=-o,s=-s,l=-l);let c=1-t;if(l<.9995){const a=Math.acos(l),d=Math.sin(a);c=Math.sin(c*a)/d,t=Math.sin(t*a)/d,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,l=e.z,c=e.w,a=2*(s*r-l*i),d=2*(l*t-o*r),u=2*(o*i-s*t);return this.x=t+c*a+s*u-l*d,this.y=i+c*d+l*a-o*u,this.z=r+c*u+o*d-s*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*s-i*c,this.z=i*l-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new oe,Nl=new ui;class st{constructor(e,t,i,r,o,s,l,c,a){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,l,c,a)}set(e,t,i,r,o,s,l,c,a){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=o,d[5]=c,d[6]=i,d[7]=s,d[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],l=i[3],c=i[6],a=i[1],d=i[4],u=i[7],p=i[2],m=i[5],g=i[8],_=r[0],h=r[3],f=r[6],b=r[1],y=r[4],v=r[7],A=r[2],T=r[5],C=r[8];return o[0]=s*_+l*b+c*A,o[3]=s*h+l*y+c*T,o[6]=s*f+l*v+c*C,o[1]=a*_+d*b+u*A,o[4]=a*h+d*y+u*T,o[7]=a*f+d*v+u*C,o[2]=p*_+m*b+g*A,o[5]=p*h+m*y+g*T,o[8]=p*f+m*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],d=e[8];return t*s*d-t*l*a-i*o*d+i*l*c+r*o*a-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],d=e[8],u=d*s-l*a,p=l*c-d*o,m=a*o-s*c,g=t*u+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*a-d*i)*_,e[2]=(l*i-r*s)*_,e[3]=p*_,e[4]=(d*t-r*c)*_,e[5]=(r*o-l*t)*_,e[6]=m*_,e[7]=(i*c-a*t)*_,e[8]=(s*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,l){const c=Math.cos(o),a=Math.sin(o);return this.set(i*c,i*a,-i*(c*s+a*l)+s+e,-r*a,r*c,-r*(-a*s+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new st,Ol=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){const n={enabled:!0,workingColorSpace:or,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===yt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===yt&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[or]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:Ol,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Ol,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),n}const ht=np();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class ip{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=Or("canvas")),Ni.width=e.width,Ni.height=e.height;const r=Ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=jn(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rp=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?o.push(xa(r[s].image)):o.push(xa(r[s]))}else o=xa(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ip.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let op=0;const va=new oe;class qt extends Ri{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=dn,r=dn,o=xn,s=Si,l=vn,c=Nn,a=qt.DEFAULT_ANISOTROPY,d=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Gr(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ou;qt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,a=c[0],d=c[4],u=c[8],p=c[1],m=c[5],g=c[9],_=c[2],h=c[6],f=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+h)<.1&&Math.abs(a+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(a+1)/2,v=(m+1)/2,A=(f+1)/2,T=(d+p)/4,C=(u+_)/4,F=(g+h)/4;return y>v&&y>A?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=T/i,o=C/i):v>A?v<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),i=T/r,o=F/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=C/o,r=F/o),this.set(i,r,o,t),this}let b=Math.sqrt((h-g)*(h-g)+(u-_)*(u-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(h-g)/b,this.y=(u-_)/b,this.z=(p-d)/b,this.w=Math.acos((a+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new qt(r);this.textures=[];const s=i.count;for(let l=0;l<s;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new el(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends ap{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mu extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=o.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(o,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),eo.subVectors(this.max,mr),Oi.subVectors(e.a,mr),Di.subVectors(e.b,mr),Fi.subVectors(e.c,mr),$n.subVectors(Di,Oi),Zn.subVectors(Fi,Di),pi.subVectors(Oi,Fi);let t=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-pi.y,pi.x,0];return!_a(t,Oi,Di,Fi,eo)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Oi,Di,Fi,eo))?!1:(to.crossVectors($n,Zn),t=[to.x,to.y,to.z],_a(t,Oi,Di,Fi,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],bn=new oe,Qr=new ci,Oi=new oe,Di=new oe,Fi=new oe,$n=new oe,Zn=new oe,pi=new oe,mr=new oe,eo=new oe,to=new oe,mi=new oe;function _a(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){mi.fromArray(n,o);const l=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),c=e.dot(mi),a=t.dot(mi),d=i.dot(mi);if(Math.max(-Math.max(c,a,d),Math.min(c,a,d))>l)return!1}return!0}const lp=new ci,gr=new oe,ba=new oe;class Hr{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(ba)),this.expandByPoint(gr.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new oe,ya=new oe,no=new oe,Jn=new oe,Ea=new oe,io=new oe,Sa=new oe;class Ho{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ya.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(ya);const o=e.distanceTo(t)*.5,s=-this.direction.dot(no),l=Jn.dot(this.direction),c=-Jn.dot(no),a=Jn.lengthSq(),d=Math.abs(1-s*s);let u,p,m,g;if(d>0)if(u=s*c-l,p=s*l-c,g=o*d,u>=0)if(p>=-g)if(p<=g){const _=1/d;u*=_,p*=_,m=u*(u+s*p+2*l)+p*(s*u+p+2*c)+a}else p=o,u=Math.max(0,-(s*p+l)),m=-u*u+p*(p+2*c)+a;else p=-o,u=Math.max(0,-(s*p+l)),m=-u*u+p*(p+2*c)+a;else p<=-g?(u=Math.max(0,-(-s*o+l)),p=u>0?-o:Math.min(Math.max(-o,-c),o),m=-u*u+p*(p+2*c)+a):p<=g?(u=0,p=Math.min(Math.max(-o,-c),o),m=p*(p+2*c)+a):(u=Math.max(0,-(s*o+l)),p=u>0?o:Math.min(Math.max(-o,-c),o),m=-u*u+p*(p+2*c)+a);else p=s>0?-o:o,u=Math.max(0,-(s*p+l)),m=-u*u+p*(p+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ya).addScaledVector(no,p),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),l=i-s,c=i+s;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,l,c;const a=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return a>=0?(i=(e.min.x-p.x)*a,r=(e.max.x-p.x)*a):(i=(e.max.x-p.x)*a,r=(e.min.x-p.x)*a),d>=0?(o=(e.min.y-p.y)*d,s=(e.max.y-p.y)*d):(o=(e.max.y-p.y)*d,s=(e.min.y-p.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),u>=0?(l=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(l=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,o){Ea.subVectors(t,e),io.subVectors(i,e),Sa.crossVectors(Ea,io);let s=this.direction.dot(Sa),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;Jn.subVectors(this.origin,e);const c=l*this.direction.dot(io.crossVectors(Jn,io));if(c<0)return null;const a=l*this.direction.dot(Ea.cross(Jn));if(a<0||c+a>s)return null;const d=-l*Jn.dot(Sa);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,o,s,l,c,a,d,u,p,m,g,_,h){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,l,c,a,d,u,p,m,g,_,h)}set(e,t,i,r,o,s,l,c,a,d,u,p,m,g,_,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=l,f[13]=c,f[2]=a,f[6]=d,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ui.setFromMatrixColumn(e,0).length(),o=1/Ui.setFromMatrixColumn(e,1).length(),s=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),l=Math.sin(i),c=Math.cos(r),a=Math.sin(r),d=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const p=s*d,m=s*u,g=l*d,_=l*u;t[0]=c*d,t[4]=-c*u,t[8]=a,t[1]=m+g*a,t[5]=p-_*a,t[9]=-l*c,t[2]=_-p*a,t[6]=g+m*a,t[10]=s*c}else if(e.order==="YXZ"){const p=c*d,m=c*u,g=a*d,_=a*u;t[0]=p+_*l,t[4]=g*l-m,t[8]=s*a,t[1]=s*u,t[5]=s*d,t[9]=-l,t[2]=m*l-g,t[6]=_+p*l,t[10]=s*c}else if(e.order==="ZXY"){const p=c*d,m=c*u,g=a*d,_=a*u;t[0]=p-_*l,t[4]=-s*u,t[8]=g+m*l,t[1]=m+g*l,t[5]=s*d,t[9]=_-p*l,t[2]=-s*a,t[6]=l,t[10]=s*c}else if(e.order==="ZYX"){const p=s*d,m=s*u,g=l*d,_=l*u;t[0]=c*d,t[4]=g*a-m,t[8]=p*a+_,t[1]=c*u,t[5]=_*a+p,t[9]=m*a-g,t[2]=-a,t[6]=l*c,t[10]=s*c}else if(e.order==="YZX"){const p=s*c,m=s*a,g=l*c,_=l*a;t[0]=c*d,t[4]=_-p*u,t[8]=g*u+m,t[1]=u,t[5]=s*d,t[9]=-l*d,t[2]=-a*d,t[6]=m*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=s*c,m=s*a,g=l*c,_=l*a;t[0]=c*d,t[4]=-u,t[8]=a*d,t[1]=p*u+_,t[5]=s*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=l*d,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,up)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Qn.crossVectors(i,cn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Qn.crossVectors(i,cn)),Qn.normalize(),ro.crossVectors(cn,Qn),r[0]=Qn.x,r[4]=ro.x,r[8]=cn.x,r[1]=Qn.y,r[5]=ro.y,r[9]=cn.y,r[2]=Qn.z,r[6]=ro.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],l=i[4],c=i[8],a=i[12],d=i[1],u=i[5],p=i[9],m=i[13],g=i[2],_=i[6],h=i[10],f=i[14],b=i[3],y=i[7],v=i[11],A=i[15],T=r[0],C=r[4],F=r[8],E=r[12],M=r[1],w=r[5],L=r[9],P=r[13],I=r[2],B=r[6],V=r[10],j=r[14],H=r[3],G=r[7],K=r[11],ce=r[15];return o[0]=s*T+l*M+c*I+a*H,o[4]=s*C+l*w+c*B+a*G,o[8]=s*F+l*L+c*V+a*K,o[12]=s*E+l*P+c*j+a*ce,o[1]=d*T+u*M+p*I+m*H,o[5]=d*C+u*w+p*B+m*G,o[9]=d*F+u*L+p*V+m*K,o[13]=d*E+u*P+p*j+m*ce,o[2]=g*T+_*M+h*I+f*H,o[6]=g*C+_*w+h*B+f*G,o[10]=g*F+_*L+h*V+f*K,o[14]=g*E+_*P+h*j+f*ce,o[3]=b*T+y*M+v*I+A*H,o[7]=b*C+y*w+v*B+A*G,o[11]=b*F+y*L+v*V+A*K,o[15]=b*E+y*P+v*j+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],l=e[5],c=e[9],a=e[13],d=e[2],u=e[6],p=e[10],m=e[14],g=e[3],_=e[7],h=e[11],f=e[15];return g*(+o*c*u-r*a*u-o*l*p+i*a*p+r*l*m-i*c*m)+_*(+t*c*m-t*a*p+o*s*p-r*s*m+r*a*d-o*c*d)+h*(+t*a*u-t*l*m-o*s*u+i*s*m+o*l*d-i*a*d)+f*(-r*l*d-t*c*u+t*l*p+r*s*u-i*s*p+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],d=e[8],u=e[9],p=e[10],m=e[11],g=e[12],_=e[13],h=e[14],f=e[15],b=u*h*a-_*p*a+_*c*m-l*h*m-u*c*f+l*p*f,y=g*p*a-d*h*a-g*c*m+s*h*m+d*c*f-s*p*f,v=d*_*a-g*u*a+g*l*m-s*_*m-d*l*f+s*u*f,A=g*u*c-d*_*c-g*l*p+s*_*p+d*l*h-s*u*h,T=t*b+i*y+r*v+o*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=b*C,e[1]=(_*p*o-u*h*o-_*r*m+i*h*m+u*r*f-i*p*f)*C,e[2]=(l*h*o-_*c*o+_*r*a-i*h*a-l*r*f+i*c*f)*C,e[3]=(u*c*o-l*p*o-u*r*a+i*p*a+l*r*m-i*c*m)*C,e[4]=y*C,e[5]=(d*h*o-g*p*o+g*r*m-t*h*m-d*r*f+t*p*f)*C,e[6]=(g*c*o-s*h*o-g*r*a+t*h*a+s*r*f-t*c*f)*C,e[7]=(s*p*o-d*c*o+d*r*a-t*p*a-s*r*m+t*c*m)*C,e[8]=v*C,e[9]=(g*u*o-d*_*o-g*i*m+t*_*m+d*i*f-t*u*f)*C,e[10]=(s*_*o-g*l*o+g*i*a-t*_*a-s*i*f+t*l*f)*C,e[11]=(d*l*o-s*u*o-d*i*a+t*u*a+s*i*m-t*l*m)*C,e[12]=A*C,e[13]=(d*_*r-g*u*r+g*i*p-t*_*p-d*i*h+t*u*h)*C,e[14]=(g*l*r-s*_*r-g*i*c+t*_*c+s*i*h-t*l*h)*C,e[15]=(s*u*r-d*l*r+d*i*c-t*u*c-s*i*p+t*l*p)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,l=e.y,c=e.z,a=o*s,d=o*l;return this.set(a*s+i,a*l-r*c,a*c+r*l,0,a*l+r*c,d*l+i,d*c-r*s,0,a*c-r*l,d*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,l=t._z,c=t._w,a=o+o,d=s+s,u=l+l,p=o*a,m=o*d,g=o*u,_=s*d,h=s*u,f=l*u,b=c*a,y=c*d,v=c*u,A=i.x,T=i.y,C=i.z;return r[0]=(1-(_+f))*A,r[1]=(m+v)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(m-v)*T,r[5]=(1-(p+f))*T,r[6]=(h+b)*T,r[7]=0,r[8]=(g+y)*C,r[9]=(h-b)*C,r[10]=(1-(p+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Ui.set(r[0],r[1],r[2]).length();const s=Ui.set(r[4],r[5],r[6]).length(),l=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const a=1/o,d=1/s,u=1/l;return yn.elements[0]*=a,yn.elements[1]*=a,yn.elements[2]*=a,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=o,i.y=s,i.z=l,this}makePerspective(e,t,i,r,o,s,l=Ln,c=!1){const a=this.elements,d=2*o/(t-e),u=2*o/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let g,_;if(c)g=o/(s-o),_=s*o/(s-o);else if(l===Ln)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(l===ko)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=d,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=_,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s,l=Ln,c=!1){const a=this.elements,d=2/(t-e),u=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,_;if(c)g=1/(s-o),_=s/(s-o);else if(l===Ln)g=-2/(s-o),_=-(s+o)/(s-o);else if(l===ko)g=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=d,a[4]=0,a[8]=0,a[12]=p,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=g,a[14]=_,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ui=new oe,yn=new Pt,cp=new oe(0,0,0),up=new oe(1,1,1),Qn=new oe,ro=new oe,cn=new oe,Fl=new Pt,Ul=new ui;class Rn{constructor(e=0,t=0,i=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],l=r[8],c=r[1],a=r[5],d=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ut(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,a));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,a),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,a),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dp=0;const kl=new oe,ki=new ui,kn=new Pt,oo=new oe,xr=new oe,fp=new oe,hp=new ui,Bl=new oe(1,0,0),zl=new oe(0,1,0),Vl=new oe(0,0,1),Gl={type:"added"},pp={type:"removed"},Bi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Ft extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new oe,t=new Rn,i=new ui,r=new oe(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new st}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(xr,oo,this.up):kn.lookAt(oo,xr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(kn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let a=0,d=c.length;a<d;a++){const u=c[a];o(e.shapes,u)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){const l=s(e.geometries),c=s(e.materials),a=s(e.textures),d=s(e.images),u=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(l){const c=[];for(const a in l){const d=l[a];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new oe(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new oe,Bn=new oe,Ma=new oe,zn=new oe,zi=new oe,Vi=new oe,Hl=new oe,Aa=new oe,Ra=new oe,Ca=new oe,wa=new Ot,Pa=new Ot,La=new Ot;class Mn{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){En.subVectors(r,t),Bn.subVectors(i,t),Ma.subVectors(e,t);const s=En.dot(En),l=En.dot(Bn),c=En.dot(Ma),a=Bn.dot(Bn),d=Bn.dot(Ma),u=s*a-l*l;if(u===0)return o.set(0,0,0),null;const p=1/u,m=(a*c-l*d)*p,g=(s*d-l*c)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,o,s,l,c){return this.getBarycoord(e,t,i,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,zn.x),c.addScaledVector(s,zn.y),c.addScaledVector(l,zn.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return wa.setScalar(0),Pa.setScalar(0),La.setScalar(0),wa.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,i),La.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(wa,o.x),s.addScaledVector(Pa,o.y),s.addScaledVector(La,o.z),s}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Bn.subVectors(e,t),En.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),En.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,l;zi.subVectors(r,i),Vi.subVectors(o,i),Aa.subVectors(e,i);const c=zi.dot(Aa),a=Vi.dot(Aa);if(c<=0&&a<=0)return t.copy(i);Ra.subVectors(e,r);const d=zi.dot(Ra),u=Vi.dot(Ra);if(d>=0&&u<=d)return t.copy(r);const p=c*u-d*a;if(p<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(i).addScaledVector(zi,s);Ca.subVectors(e,o);const m=zi.dot(Ca),g=Vi.dot(Ca);if(g>=0&&m<=g)return t.copy(o);const _=m*a-c*g;if(_<=0&&a>=0&&g<=0)return l=a/(a-g),t.copy(i).addScaledVector(Vi,l);const h=d*g-m*u;if(h<=0&&u-d>=0&&m-g>=0)return Hl.subVectors(o,r),l=(u-d)/(u-d+(m-g)),t.copy(r).addScaledVector(Hl,l);const f=1/(h+_+p);return s=_*f,l=p*f,t.copy(i).addScaledVector(zi,s).addScaledVector(Vi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=ep(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Ia(s,o,e+1/3),this.g=Ia(s,o,e),this.b=Ia(s,o,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function i(o){o!==void 0&&parseFloat(o)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ht.workingToColorSpace(jt.copy(this),e),Math.round(ut(jt.r*255,0,255))*65536+Math.round(ut(jt.g*255,0,255))*256+Math.round(ut(jt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,o=jt.b,s=Math.max(i,r,o),l=Math.min(i,r,o);let c,a;const d=(l+s)/2;if(l===s)c=0,a=0;else{const u=s-l;switch(a=d<=.5?u/(s+l):u/(2-s-l),s){case i:c=(r-o)/u+(r<o?6:0);break;case r:c=(o-i)/u+2;break;case o:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=a,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Nt){ht.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(ao);const i=pa(ei.h,ao.h,t),r=pa(ei.s,ao.s,t),o=pa(ei.l,ao.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new rt;rt.NAMES=xu;let mp=0;class fi extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=Ji,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=$a,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const l in o){const c=o[l];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new oe,so=new Ze;let gp=0;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class vu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _u extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xp=0;const mn=new Pt,Na=new Ft,Gi=new oe,un=new ci,vr=new ci,Ht=new oe;class kt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?_u:vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new st().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];un.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];vr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ht.addVectors(un.min,vr.min),un.expandByPoint(Ht),Ht.addVectors(un.max,vr.max),un.expandByPoint(Ht)):(un.expandByPoint(vr.min),un.expandByPoint(vr.max))}un.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ht.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let o=0,s=t.length;o<s;o++){const l=t[o],c=this.morphTargetsRelative;for(let a=0,d=l.count;a<d;a++)Ht.fromBufferAttribute(l,a),c&&(Gi.fromBufferAttribute(e,a),Ht.add(Gi)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),l=[],c=[];for(let F=0;F<i.count;F++)l[F]=new oe,c[F]=new oe;const a=new oe,d=new oe,u=new oe,p=new Ze,m=new Ze,g=new Ze,_=new oe,h=new oe;function f(F,E,M){a.fromBufferAttribute(i,F),d.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),p.fromBufferAttribute(o,F),m.fromBufferAttribute(o,E),g.fromBufferAttribute(o,M),d.sub(a),u.sub(a),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),h.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(w),l[F].add(_),l[E].add(_),l[M].add(_),c[F].add(h),c[E].add(h),c[M].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,E=b.length;F<E;++F){const M=b[F],w=M.start,L=M.count;for(let P=w,I=w+L;P<I;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new oe,v=new oe,A=new oe,T=new oe;function C(F){A.fromBufferAttribute(r,F),T.copy(A);const E=l[F];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),v.crossVectors(T,E);const w=v.dot(c[F])<0?-1:1;s.setXYZW(F,y.x,y.y,y.z,w)}for(let F=0,E=b.length;F<E;++F){const M=b[F],w=M.start,L=M.count;for(let P=w,I=w+L;P<I;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new oe,o=new oe,s=new oe,l=new oe,c=new oe,a=new oe,d=new oe,u=new oe;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),a.fromBufferAttribute(i,h),l.add(d),c.add(d),a.add(d),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(h,a.x,a.y,a.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(l,c){const a=l.array,d=l.itemSize,u=l.normalized,p=new a.constructor(c.length*d);let m=0,g=0;for(let _=0,h=c.length;_<h;_++){l.isInterleavedBufferAttribute?m=c[_]*l.data.stride+l.offset:m=c[_]*d;for(let f=0;f<d;f++)p[g++]=a[m++]}return new an(p,d,u)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],a=e(c,i);t.setAttribute(l,a)}const o=this.morphAttributes;for(const l in o){const c=[],a=o[l];for(let d=0,u=a.length;d<u;d++){const p=a[d],m=e(p,i);c.push(m)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,c=s.length;l<c;l++){const a=s[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const a=i[c];e.data.attributes[c]=a.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const a=this.morphAttributes[c],d=[];for(let u=0,p=a.length;u<p;u++){const m=a[u];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const a in r){const d=r[a];this.setAttribute(a,d.clone(t))}const o=e.morphAttributes;for(const a in o){const d=[],u=o[a];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(t));this.morphAttributes[a]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let a=0,d=s.length;a<d;a++){const u=s[a];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Pt,gi=new Ho,lo=new Hr,Xl=new oe,co=new oe,uo=new oe,fo=new oe,Oa=new oe,ho=new oe,jl=new oe,po=new oe;class Yt extends Ft{constructor(e=new kt,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){ho.set(0,0,0);for(let c=0,a=o.length;c<a;c++){const d=l[c],u=o[c];d!==0&&(Oa.fromBufferAttribute(u,e),s?ho.addScaledVector(Oa,d):ho.addScaledVector(Oa.sub(t),d))}t.add(ho)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(o),gi.copy(e.ray).recast(e.near),!(lo.containsPoint(gi.origin)===!1&&(gi.intersectSphere(lo,Xl)===null||gi.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(o).invert(),gi.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,l=o.index,c=o.attributes.position,a=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,p=o.groups,m=o.drawRange;if(l!==null)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=s[h.materialIndex],b=Math.max(h.start,m.start),y=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let v=b,A=y;v<A;v+=3){const T=l.getX(v),C=l.getX(v+1),F=l.getX(v+2);r=mo(this,f,e,i,a,d,u,T,C,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const b=l.getX(h),y=l.getX(h+1),v=l.getX(h+2);r=mo(this,s,e,i,a,d,u,b,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const h=p[g],f=s[h.materialIndex],b=Math.max(h.start,m.start),y=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let v=b,A=y;v<A;v+=3){const T=v,C=v+1,F=v+2;r=mo(this,f,e,i,a,d,u,T,C,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let h=g,f=_;h<f;h+=3){const b=h,y=h+1,v=h+2;r=mo(this,s,e,i,a,d,u,b,y,v),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function vp(n,e,t,i,r,o,s,l){let c;if(e.side===Kt?c=i.intersectTriangle(s,o,r,!0,l):c=i.intersectTriangle(r,o,s,e.side===Yn,l),c===null)return null;po.copy(l),po.applyMatrix4(n.matrixWorld);const a=t.ray.origin.distanceTo(po);return a<t.near||a>t.far?null:{distance:a,point:po.clone(),object:n}}function mo(n,e,t,i,r,o,s,l,c,a){n.getVertexPosition(l,co),n.getVertexPosition(c,uo),n.getVertexPosition(a,fo);const d=vp(n,e,t,i,co,uo,fo,jl);if(d){const u=new oe;Mn.getBarycoord(jl,co,uo,fo,u),r&&(d.uv=Mn.getInterpolatedAttribute(r,l,c,a,u,new Ze)),o&&(d.uv1=Mn.getInterpolatedAttribute(o,l,c,a,u,new Ze)),s&&(d.normal=Mn.getInterpolatedAttribute(s,l,c,a,u,new oe),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:a,normal:new oe,materialIndex:0};Mn.getNormal(co,uo,fo,p.normal),d.face=p,d.barycoord=u}return d}class ur extends kt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const l=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],a=[],d=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function g(_,h,f,b,y,v,A,T,C,F,E){const M=v/C,w=A/F,L=v/2,P=A/2,I=T/2,B=C+1,V=F+1;let j=0,H=0;const G=new oe;for(let K=0;K<V;K++){const ce=K*w-P;for(let Q=0;Q<B;Q++){const te=Q*M-L;G[_]=te*b,G[h]=ce*y,G[f]=I,a.push(G.x,G.y,G.z),G[_]=0,G[h]=0,G[f]=T>0?1:-1,d.push(G.x,G.y,G.z),u.push(Q/C),u.push(1-K/F),j+=1}}for(let K=0;K<F;K++)for(let ce=0;ce<C;ce++){const Q=p+ce+B*K,te=p+ce+B*(K+1),Se=p+(ce+1)+B*(K+1),$=p+(ce+1)+B*K;c.push(Q,te,$),c.push(te,Se,$),H+=6}l.addGroup(m,H,E),m+=H,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const r in i)e[r]=i[r]}return e}function _p(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const bp={clone:ar,merge:Jt};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new oe,Yl=new Ze,Kl=new Ze;class gn extends yu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Kl),t.subVectors(Kl,Yl)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,a=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/a,r*=s.width/c,i*=s.height/a}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Wi=1;class Sp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Hi,Wi,e,t);r.layers=this.layers,this.add(r);const o=new gn(Hi,Wi,e,t);o.layers=this.layers,this.add(o);const s=new gn(Hi,Wi,e,t);s.layers=this.layers,this.add(s);const l=new gn(Hi,Wi,e,t);l.layers=this.layers,this.add(l);const c=new gn(Hi,Wi,e,t);c.layers=this.layers,this.add(c);const a=new gn(Hi,Wi,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,l,c]=t;for(const a of t)this.remove(a);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,l,c,a,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,a),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Eu extends qt{constructor(e=[],t=ir,i,r,o,s,l,c,a,d){super(e,t,i,r,o,s,l,c,a,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Eu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),o=new Kn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Xn});o.uniforms.tEquirect.value=t;const s=new Yt(r,o),l=t.minFilter;return t.minFilter===Si&&(t.minFilter=xn),new Sp(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class ai extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){s=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,i),f=this._getHandJoint(a,_);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const d=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,g=.005;a.inputState.pinching&&p>m+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&p<=m-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),a!==null&&(a.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Su extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tl extends qt{constructor(e=null,t=1,i=1,r,o,s,l,c,a=fn,d=fn,u,p){super(null,s,l,c,a,d,r,o,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fa=new oe,Ap=new oe,Rp=new st;class ni{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fa.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rp.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Hr,Cp=new Ze(.5,.5),go=new oe;class nl{constructor(e=new ni,t=new ni,i=new ni,r=new ni,o=new ni,s=new ni){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const r=this.planes,o=e.elements,s=o[0],l=o[1],c=o[2],a=o[3],d=o[4],u=o[5],p=o[6],m=o[7],g=o[8],_=o[9],h=o[10],f=o[11],b=o[12],y=o[13],v=o[14],A=o[15];if(r[0].setComponents(a-s,m-d,f-g,A-b).normalize(),r[1].setComponents(a+s,m+d,f+g,A+b).normalize(),r[2].setComponents(a+l,m+u,f+_,A+y).normalize(),r[3].setComponents(a-l,m-u,f-_,A-y).normalize(),i)r[4].setComponents(c,p,h,v).normalize(),r[5].setComponents(a-c,m-p,f-h,A-v).normalize();else if(r[4].setComponents(a-c,m-p,f-h,A-v).normalize(),t===Ln)r[5].setComponents(a+c,m+p,f+h,A+v).normalize();else if(t===ko)r[5].setComponents(c,p,h,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=Cp.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tu extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new oe,zo=new oe,ql=new Pt,_r=new Ho,xo=new Hr,Ua=new oe,$l=new oe;class wp extends Ft{constructor(e=new kt,t=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Bo.fromBufferAttribute(t,r-1),zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new ct(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),xo.radius+=o,e.ray.intersectsSphere(xo)===!1)return;ql.copy(r).invert(),_r.copy(e.ray).applyMatrix4(ql);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let _=m,h=g-1;_<h;_+=a){const f=d.getX(_),b=d.getX(_+1),y=vo(this,e,_r,c,f,b,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(g-1),h=d.getX(m),f=vo(this,e,_r,c,_,h,g-1);f&&t.push(f)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let _=m,h=g-1;_<h;_+=a){const f=vo(this,e,_r,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=vo(this,e,_r,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function vo(n,e,t,i,r,o,s){const l=n.geometry.attributes.position;if(Bo.fromBufferAttribute(l,r),zo.fromBufferAttribute(l,o),t.distanceSqToSegment(Bo,zo,Ua,$l)>i)return;Ua.applyMatrix4(n.matrixWorld);const a=e.ray.origin.distanceTo(Ua);if(!(a<e.near||a>e.far))return{distance:a,point:$l.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Zl=new oe,Jl=new oe;class Pp extends wp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Zl.fromBufferAttribute(t,r),Jl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zl.distanceTo(Jl);e.setAttribute("lineDistance",new ct(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mu extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ql=new Pt,Fs=new Ho,_o=new Hr,bo=new oe;class Lp extends Ft{constructor(e=new kt,t=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(r),_o.radius+=o,e.ray.intersectsSphere(_o)===!1)return;Ql.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Ql);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=i.index,u=i.attributes.position;if(a!==null){const p=Math.max(0,s.start),m=Math.min(a.count,s.start+s.count);for(let g=p,_=m;g<_;g++){const h=a.getX(g);bo.fromBufferAttribute(u,h),ec(bo,h,c,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let g=p,_=m;g<_;g++)bo.fromBufferAttribute(u,g),ec(bo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function ec(n,e,t,i,r,o,s){const l=Fs.distanceSqToPoint(n);if(l<t){const c=new oe;Fs.closestPointToPoint(n,c),c.applyMatrix4(i);const a=r.ray.origin.distanceTo(c);if(a<r.near||a>r.far)return;o.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Au extends qt{constructor(e,t,i=Ti,r,o,s,l=fn,c=fn,a,d=Ir,u=1){if(d!==Ir&&d!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,o,s,l,c,d,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ru extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wo extends kt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:l,thetaLength:c};const a=this;r=Math.floor(r),o=Math.floor(o);const d=[],u=[],p=[],m=[];let g=0;const _=[],h=i/2;let f=0;b(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(m,2));function b(){const v=new oe,A=new oe;let T=0;const C=(t-e)/i;for(let F=0;F<=o;F++){const E=[],M=F/o,w=M*(t-e)+e;for(let L=0;L<=r;L++){const P=L/r,I=P*c+l,B=Math.sin(I),V=Math.cos(I);A.x=w*B,A.y=-M*i+h,A.z=w*V,u.push(A.x,A.y,A.z),v.set(B,C,V).normalize(),p.push(v.x,v.y,v.z),m.push(P,1-M),E.push(g++)}_.push(E)}for(let F=0;F<r;F++)for(let E=0;E<o;E++){const M=_[E][F],w=_[E+1][F],L=_[E+1][F+1],P=_[E][F+1];(e>0||E!==0)&&(d.push(M,w,P),T+=3),(t>0||E!==o-1)&&(d.push(w,L,P),T+=3)}a.addGroup(f,T,0),f+=T}function y(v){const A=g,T=new Ze,C=new oe;let F=0;const E=v===!0?e:t,M=v===!0?1:-1;for(let L=1;L<=r;L++)u.push(0,h*M,0),p.push(0,M,0),m.push(.5,.5),g++;const w=g;for(let L=0;L<=r;L++){const I=L/r*c+l,B=Math.cos(I),V=Math.sin(I);C.x=E*V,C.y=h*M,C.z=E*B,u.push(C.x,C.y,C.z),p.push(0,M,0),T.x=B*.5+.5,T.y=V*.5*M+.5,m.push(T.x,T.y),g++}for(let L=0;L<r;L++){const P=A+L,I=w+L;v===!0?d.push(I,I+1,P):d.push(I+1,I,P),F+=3}a.addGroup(f,F,v===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class il extends Wo{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,l=Math.PI*2){super(0,e,t,i,r,o,s,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:l}}static fromJSON(e){return new il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Ip(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=Cu(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let l,c,a;if(i&&(o=Up(n,e,o,t)),n.length>80*t){l=n[0],c=n[1];let d=l,u=c;for(let p=t;p<r;p+=t){const m=n[p],g=n[p+1];m<l&&(l=m),g<c&&(c=g),m>d&&(d=m),g>u&&(u=g)}a=Math.max(d-l,u-c),a=a!==0?32767/a:0}return Fr(o,s,t,l,c,a,0),s}function Cu(n,e,t,i,r){let o;if(r===Kp(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=tc(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=tc(s/i|0,n[s],n[s+1],o);return o&&sr(o,o.next)&&(kr(o),o=o.next),o}function Ai(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(sr(t,t.next)||wt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fr(n,e,t,i,r,o,s){if(!n)return;!s&&o&&Gp(n,i,r,o);let l=n;for(;n.prev!==n.next;){const c=n.prev,a=n.next;if(o?Op(n,i,r,o):Np(n)){e.push(c.i,n.i,a.i),kr(n),n=a.next,l=a.next;continue}if(n=a,n===l){s?s===1?(n=Dp(Ai(n),e),Fr(n,e,t,i,r,o,2)):s===2&&Fp(n,e,t,i,r,o):Fr(Ai(n),e,t,i,r,o,1);break}}}function Np(n){const e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,l=e.y,c=t.y,a=i.y,d=Math.min(r,o,s),u=Math.min(l,c,a),p=Math.max(r,o,s),m=Math.max(l,c,a);let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=p&&g.y>=u&&g.y<=m&&yr(r,l,o,c,s,a,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Op(n,e,t,i){const r=n.prev,o=n,s=n.next;if(wt(r,o,s)>=0)return!1;const l=r.x,c=o.x,a=s.x,d=r.y,u=o.y,p=s.y,m=Math.min(l,c,a),g=Math.min(d,u,p),_=Math.max(l,c,a),h=Math.max(d,u,p),f=Us(m,g,e,t,i),b=Us(_,h,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=f&&v&&v.z<=b;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=h&&y!==r&&y!==s&&yr(l,d,c,u,a,p,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=h&&v!==r&&v!==s&&yr(l,d,c,u,a,p,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=_&&y.y>=g&&y.y<=h&&y!==r&&y!==s&&yr(l,d,c,u,a,p,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=h&&v!==r&&v!==s&&yr(l,d,c,u,a,p,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dp(n,e){let t=n;do{const i=t.prev,r=t.next.next;!sr(i,r)&&Pu(i,t,t.next,r)&&Ur(i,r)&&Ur(r,i)&&(e.push(i.i,t.i,r.i),kr(t),kr(t.next),t=n=r),t=t.next}while(t!==n);return Ai(t)}function Fp(n,e,t,i,r,o){let s=n;do{let l=s.next.next;for(;l!==s.prev;){if(s.i!==l.i&&Xp(s,l)){let c=Lu(s,l);s=Ai(s,s.next),c=Ai(c,c.next),Fr(s,e,t,i,r,o,0),Fr(c,e,t,i,r,o,0);return}l=l.next}s=s.next}while(s!==n)}function Up(n,e,t,i){const r=[];for(let o=0,s=e.length;o<s;o++){const l=e[o]*i,c=o<s-1?e[o+1]*i:n.length,a=Cu(n,l,c,i,!1);a===a.next&&(a.steiner=!0),r.push(Wp(a))}r.sort(kp);for(let o=0;o<r.length;o++)t=Bp(r[o],t);return t}function kp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Bp(n,e){const t=zp(n,e);if(!t)return e;const i=Lu(t,n);return Ai(i,i.next),Ai(t,t.next)}function zp(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,s;if(sr(n,t))return t;do{if(sr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>o&&(o=u,s=t.x<t.next.x?t:t.next,u===i))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,c=s.x,a=s.y;let d=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&wu(r<a?i:o,r,c,a,r<a?o:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);Ur(t,n)&&(u<d||u===d&&(t.x>s.x||t.x===s.x&&Vp(s,t)))&&(s=t,d=u)}t=t.next}while(t!==l);return s}function Vp(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function Gp(n,e,t,i){let r=n;do r.z===0&&(r.z=Us(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Hp(r)}function Hp(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,l=0;for(let a=0;a<t&&(l++,s=s.nextZ,!!s);a++);let c=t;for(;l>0||c>0&&s;)l!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Us(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wu(n,e,t,i,r,o,s,l){return(r-s)*(e-l)>=(n-s)*(o-l)&&(n-s)*(i-l)>=(t-s)*(e-l)&&(t-s)*(o-l)>=(r-s)*(i-l)}function yr(n,e,t,i,r,o,s,l){return!(n===s&&e===l)&&wu(n,e,t,i,r,o,s,l)}function Xp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jp(n,e)&&(Ur(n,e)&&Ur(e,n)&&Yp(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||sr(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function sr(n,e){return n.x===e.x&&n.y===e.y}function Pu(n,e,t,i){const r=Eo(wt(n,e,t)),o=Eo(wt(n,e,i)),s=Eo(wt(t,i,n)),l=Eo(wt(t,i,e));return!!(r!==o&&s!==l||r===0&&yo(n,t,e)||o===0&&yo(n,i,e)||s===0&&yo(t,n,i)||l===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Eo(n){return n>0?1:n<0?-1:0}function jp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ur(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function Yp(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lu(n,e){const t=ks(n.i,n.x,n.y),i=ks(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function tc(n,e,t,i){const r=ks(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ks(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class qp{static triangulate(e,t,i=2){return Ip(e,t,i)}}class rl{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return rl.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];nc(e),ic(i,e);let s=e.length;t.forEach(nc);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,ic(i,t[c]);const l=qp.triangulate(i,r);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function nc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ic(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xo extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,l=Math.floor(i),c=Math.floor(r),a=l+1,d=c+1,u=e/l,p=t/c,m=[],g=[],_=[],h=[];for(let f=0;f<d;f++){const b=f*p-s;for(let y=0;y<a;y++){const v=y*u-o;g.push(v,-b,0),_.push(0,0,1),h.push(y/l),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<l;b++){const y=b+a*f,v=b+a*(f+1),A=b+1+a*(f+1),T=b+1+a*f;m.push(y,v,T),m.push(v,A,T)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ar extends kt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+l,Math.PI);let a=0;const d=[],u=new oe,p=new oe,m=[],g=[],_=[],h=[];for(let f=0;f<=i;f++){const b=[],y=f/i;let v=0;f===0&&s===0?v=.5/t:f===i&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const T=A/t;u.x=-e*Math.cos(r+T*o)*Math.sin(s+y*l),u.y=e*Math.cos(s+y*l),u.z=e*Math.sin(r+T*o)*Math.sin(s+y*l),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),h.push(T+v,1-y),b.push(a++)}d.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){const y=d[f][b+1],v=d[f][b],A=d[f+1][b],T=d[f+1][b+1];(f!==0||s>0)&&m.push(y,v,T),(f!==i-1||c<Math.PI)&&m.push(v,A,T)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $p extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zp extends fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Xs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jp extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qp extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class em{constructor(e,t,i){const r=this;let o=!1,s=0,l=0,c;const a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){l++,o===!1&&r.onStart!==void 0&&r.onStart(d,s,l),o=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,l),s===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return a.push(d,u),this},this.removeHandler=function(d){const u=a.indexOf(d);return u!==-1&&a.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=a.length;u<p;u+=2){const m=a[u],g=a[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tm=new em;class Pn{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class nm extends Error{constructor(e,t){super(e),this.response=t}}class Iu extends Pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Rr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:i,onError:r});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(s).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;const d=Vn[e],u=a.body.getReader(),p=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let _=0;const h=new ReadableStream({start(f){b();function b(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let T=0,C=d.length;T<C;T++){const F=d[T];F.onProgress&&F.onProgress(A)}f.enqueue(v),b()}},y=>{f.error(y)})}}});return new Response(h)}else throw new nm(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return a.json();default:if(l==="")return a.text();{const u=/charset="?([^;"\s]*)"?/i.exec(l),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return a.arrayBuffer().then(g=>m.decode(g))}}}).then(a=>{Rr.add(`file:${e}`,a);const d=Vn[e];delete Vn[e];for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onLoad&&m.onLoad(a)}}).catch(a=>{const d=Vn[e];if(d===void 0)throw this.manager.itemError(e),a;delete Vn[e];for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onError&&m.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xi=new WeakMap;class im extends Pn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Rr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let u=Xi.get(s);u===void 0&&(u=[],Xi.set(s,u)),u.push({onLoad:t,onError:r})}return s}const l=Or("img");function c(){d(),t&&t(this);const u=Xi.get(this)||[];for(let p=0;p<u.length;p++){const m=u[p];m.onLoad&&m.onLoad(this)}Xi.delete(this),o.manager.itemEnd(e)}function a(u){d(),r&&r(u),Rr.remove(`image:${e}`);const p=Xi.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(u)}Xi.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Rr.add(`image:${e}`,l),o.manager.itemStart(e),l.src=e,l}}class rm extends Pn{constructor(e){super(e)}load(e,t,i,r){const o=new qt,s=new im(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Nu extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ka=new Pt,rc=new oe,oc=new oe;class om{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ou extends yu{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=a*this.view.offsetX,s=o+a*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class am extends om{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ba extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sm extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lm{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cm extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ac{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class um extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sc(n,e,t,i){const r=dm(i);switch(t){case uu:return n*e;case fu:return n*e/r.components*r.byteLength;case qs:return n*e/r.components*r.byteLength;case $s:return n*e*2/r.components*r.byteLength;case Zs:return n*e*2/r.components*r.byteLength;case du:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case Js:return n*e*4/r.components*r.byteLength;case Co:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ls:case us:return Math.max(n,16)*Math.max(e,8)/4;case ss:case cs:return Math.max(n,8)*Math.max(e,8)/2;case ds:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ms:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _s:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ys:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Es:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ms:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case As:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cs:case ws:case Ps:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ls:case Is:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ns:case Os:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(n){switch(n){case Nn:case au:return{byteLength:1,components:1};case Pr:case su:case cr:return{byteLength:2,components:1};case Ys:case Ks:return{byteLength:2,components:4};case Ti:case js:case Wn:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ws}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ws);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Du(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function fm(n){const e=new WeakMap;function t(l,c){const a=l.array,d=l.usage,u=a.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,a,d),l.onUploadCallback();let m;if(a instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=n.SHORT;else if(a instanceof Uint32Array)m=n.UNSIGNED_INT;else if(a instanceof Int32Array)m=n.INT;else if(a instanceof Int8Array)m=n.BYTE;else if(a instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:p,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:u}}function i(l,c,a){const d=c.array,u=c.updateRanges;if(n.bindBuffer(a,l),u.length===0)n.bufferSubData(a,0,d);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];n.bufferSubData(a,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function s(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:r,remove:o,update:s}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Og=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:hm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:_m,aomap_pars_fragment:bm,batching_pars_vertex:ym,batching_vertex:Em,begin_vertex:Sm,beginnormal_vertex:Tm,bsdfs:Mm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Im,color_pars_fragment:Nm,color_pars_vertex:Om,color_vertex:Dm,common:Fm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:km,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:Hm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:o0,envmap_vertex:qm,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Qm,gradientmap_pars_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:r0,lights_toon_fragment:a0,lights_toon_pars_fragment:s0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:h0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:v0,map_fragment:_0,map_pars_fragment:b0,map_particle_fragment:y0,map_particle_pars_fragment:E0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:T0,morphinstance_vertex:M0,morphcolor_vertex:A0,morphnormal_vertex:R0,morphtarget_pars_vertex:C0,morphtarget_vertex:w0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:N0,normal_vertex:O0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:V0,premultiplied_alpha_fragment:G0,project_vertex:H0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:q0,shadowmap_vertex:$0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:Q0,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:rg,tonemapping_pars_fragment:og,transmission_fragment:ag,transmission_pars_fragment:sg,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,worldpos_vertex:dg,background_vert:fg,background_frag:hg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:xg,depth_vert:vg,depth_frag:_g,distanceRGBA_vert:bg,distanceRGBA_frag:yg,equirect_vert:Eg,equirect_frag:Sg,linedashed_vert:Tg,linedashed_frag:Mg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:wg,meshmatcap_vert:Pg,meshmatcap_frag:Lg,meshnormal_vert:Ig,meshnormal_frag:Ng,meshphong_vert:Og,meshphong_frag:Dg,meshphysical_vert:Fg,meshphysical_frag:Ug,meshtoon_vert:kg,meshtoon_frag:Bg,points_vert:zg,points_frag:Vg,shadow_vert:Gg,shadow_frag:Hg,sprite_vert:Wg,sprite_frag:Xg},De={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Cn={basic:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Jt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Jt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Jt([De.points,De.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Jt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Jt([De.common,De.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Jt([De.sprite,De.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Jt([De.common,De.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Jt([De.lights,De.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Cn.physical={uniforms:Jt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const So={r:0,b:0,g:0},vi=new Rn,jg=new Pt;function Yg(n,e,t,i,r,o,s){const l=new rt(0);let c=o===!0?0:1,a,d,u=null,p=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const A=g(y);A===null?f(l,c):A&&A.isColor&&(f(A,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Go)?(d===void 0&&(d=new Yt(new ur(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ar(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(vi)),d.material.toneMapped=ht.getTransfer(A.colorSpace)!==yt,(u!==A||p!==A.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,u=A,p=A.version,m=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(a===void 0&&(a=new Yt(new Xo(2,2),new Kn({name:"BackgroundMaterial",uniforms:ar(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=A,a.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,a.material.toneMapped=ht.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),a.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||p!==A.version||m!==n.toneMapping)&&(a.material.needsUpdate=!0,u=A,p=A.version,m=n.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null))}function f(y,v){y.getRGB(So,bu(n)),i.buffers.color.setClear(So.r,So.g,So.b,v,s)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(y,v=1){l.set(y),c=v,f(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(l,c)},render:_,addToRenderList:h,dispose:b}}function Kg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function l(M,w,L,P,I){let B=!1;const V=u(P,L,w);o!==V&&(o=V,a(o.object)),B=m(M,P,L,I),B&&g(M,P,L,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,v(M,w,L,P),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function a(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,w,L){const P=L.wireframe===!0;let I=i[M.id];I===void 0&&(I={},i[M.id]=I);let B=I[w.id];B===void 0&&(B={},I[w.id]=B);let V=B[P];return V===void 0&&(V=p(c()),B[P]=V),V}function p(M){const w=[],L=[],P=[];for(let I=0;I<t;I++)w[I]=0,L[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:P,object:M,attributes:{},index:null}}function m(M,w,L,P){const I=o.attributes,B=w.attributes;let V=0;const j=L.getAttributes();for(const H in j)if(j[H].location>=0){const K=I[H];let ce=B[H];if(ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;V++}return o.attributesNum!==V||o.index!==P}function g(M,w,L,P){const I={},B=w.attributes;let V=0;const j=L.getAttributes();for(const H in j)if(j[H].location>=0){let K=B[H];K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),I[H]=ce,V++}o.attributes=I,o.attributesNum=V,o.index=P}function _(){const M=o.newAttributes;for(let w=0,L=M.length;w<L;w++)M[w]=0}function h(M){f(M,0)}function f(M,w){const L=o.newAttributes,P=o.enabledAttributes,I=o.attributeDivisors;L[M]=1,P[M]===0&&(n.enableVertexAttribArray(M),P[M]=1),I[M]!==w&&(n.vertexAttribDivisor(M,w),I[M]=w)}function b(){const M=o.newAttributes,w=o.enabledAttributes;for(let L=0,P=w.length;L<P;L++)w[L]!==M[L]&&(n.disableVertexAttribArray(L),w[L]=0)}function y(M,w,L,P,I,B,V){V===!0?n.vertexAttribIPointer(M,w,L,I,B):n.vertexAttribPointer(M,w,L,P,I,B)}function v(M,w,L,P){_();const I=P.attributes,B=L.getAttributes(),V=w.defaultAttributeValues;for(const j in B){const H=B[j];if(H.location>=0){let G=I[j];if(G===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){const K=G.normalized,ce=G.itemSize,Q=e.get(G);if(Q===void 0)continue;const te=Q.buffer,Se=Q.type,$=Q.bytesPerElement,z=Se===n.INT||Se===n.UNSIGNED_INT||G.gpuType===js;if(G.isInterleavedBufferAttribute){const W=G.data,Z=W.stride,ue=G.offset;if(W.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)f(H.location+Ee,W.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)h(H.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Ee=0;Ee<H.locationSize;Ee++)y(H.location+Ee,ce/H.locationSize,Se,K,Z*$,(ue+ce/H.locationSize*Ee)*$,z)}else{if(G.isInstancedBufferAttribute){for(let W=0;W<H.locationSize;W++)f(H.location+W,G.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let W=0;W<H.locationSize;W++)h(H.location+W);n.bindBuffer(n.ARRAY_BUFFER,te);for(let W=0;W<H.locationSize;W++)y(H.location+W,ce/H.locationSize,Se,K,ce*$,ce/H.locationSize*W*$,z)}}else if(V!==void 0){const K=V[j];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(H.location,K);break;case 3:n.vertexAttrib3fv(H.location,K);break;case 4:n.vertexAttrib4fv(H.location,K);break;default:n.vertexAttrib1fv(H.location,K)}}}}b()}function A(){F();for(const M in i){const w=i[M];for(const L in w){const P=w[L];for(const I in P)d(P[I].object),delete P[I];delete w[L]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const L in w){const P=w[L];for(const I in P)d(P[I].object),delete P[I];delete w[L]}delete i[M.id]}function C(M){for(const w in i){const L=i[w];if(L[M.id]===void 0)continue;const P=L[M.id];for(const I in P)d(P[I].object),delete P[I];delete L[M.id]}}function F(){E(),s=!0,o!==r&&(o=r,a(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:F,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:h,disableUnusedAttributes:b}}function qg(n,e,t){let i;function r(a){i=a}function o(a,d){n.drawArrays(i,a,d),t.update(d,i,1)}function s(a,d,u){u!==0&&(n.drawArraysInstanced(i,a,d,u),t.update(d,i,u))}function l(a,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];t.update(m,i,1)}function c(a,d,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<a.length;g++)s(a[g],d[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,a,0,d,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function $g(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const F=C===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!F)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const d=c(a);d!==a&&(nt("WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function Zg(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new ni,l=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||r;return r=p,i=u.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,_=u.clipIntersection,h=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||o&&!h)o?d(null):a();else{const b=o?0:i,y=b*4;let v=f.clippingState||null;c.value=v,v=d(g,p,y,m);for(let A=0;A!==y;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,p,m,g){const _=u!==null?u.length:0;let h=null;if(_!==0){if(h=c.value,g!==!0||h===null){const f=m+_*4,b=p.matrixWorldInverse;l.getNormalMatrix(b),(h===null||h.length<f)&&(h=new Float32Array(f));for(let y=0,v=m;y!==_;++y,v+=4)s.copy(u[y]).applyMatrix4(b,l),s.normal.toArray(h,v),h[v+3]=s.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function Jg(n){let e=new WeakMap;function t(s,l){return l===rs?s.mapping=ir:l===os&&(s.mapping=rr),s}function i(s){if(s&&s.isTexture){const l=s.mapping;if(l===rs||l===os)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const a=new Tp(c.height);return a.fromEquirectangularTexture(n,s),e.set(s,a),s.addEventListener("dispose",r),t(a.texture,s.mapping)}else return null}}return s}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const si=4,lc=[.125,.215,.35,.446,.526,.582],Ei=20,Qg=256,br=new Ou,cc=new rt;let za=null,Va=0,Ga=0,Ha=!1;const ex=new oe;class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:l=ex}=o;za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Va,Ga),this._renderer.xr.enabled=Ha,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:cr,format:vn,colorSpace:or,depthBuffer:!1},r=dc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tx(o)),this._blurMaterial=ix(o,e,t)}return r}_compileMaterial(e){const t=new Yt(new kt,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,i,r,o){const c=new gn(90,1,t,i),a=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(cc),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new ur,new $i({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,h=_.material;let f=!1;const b=e.background;b?b.isColor&&(h.color.copy(b),e.background=null,f=!0):(h.color.copy(cc),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,a[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+d[y],o.y,o.z)):v===1?(c.up.set(0,0,a[y]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+d[y],o.z)):(c.up.set(0,a[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+d[y]));const A=this._cubeSize;ji(r,v*A,y>2?A:0,A,A),u.setRenderTarget(r),f&&u.render(_,c),u.render(e,c)}u.toneMapping=m,u.autoClear=p,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;ji(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const b=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=nx(this._lodMax,b,y)}const s=this._ggxMaterial,l=this._lodMeshes[i];l.material=s;const c=s.uniforms,a=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(a*a-d*d),p=.05+a*.95,m=u*p,{_lodMax:g}=this,_=this._sizeLods[i],h=3*_*(i>g-si?i-g+si:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,ji(o,h,f,3*_,2*_),r.setRenderTarget(o),r.render(l,br),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,ji(e,h,f,3*_,2*_),r.setRenderTarget(e),r.render(l,br)}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,l){const c=this._renderer,a=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[r];u.material=a;const p=a.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),_=o/g,h=isFinite(o)?1+Math.floor(d*_):Ei;h>Ei&&nt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ei}`);const f=[];let b=0;for(let C=0;C<Ei;++C){const F=C/_,E=Math.exp(-F*F/2);f.push(E),C===0?b+=E:C<h&&(b+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=f,p.latitudinal.value=s==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const v=this._sizeLods[r],A=3*v*(r>y-si?r-y+si:0),T=4*(this._cubeSize-v);ji(t,A,T,3*v,2*v),c.setRenderTarget(t),c.render(u,br)}}function tx(n){const e=[],t=[],i=[];let r=n;const o=n-si+1+lc.length;for(let s=0;s<o;s++){const l=Math.pow(2,r);e.push(l);let c=1/l;s>n-si?c=lc[s-n+si-1]:s===0&&(c=0),t.push(c);const a=1/(l-2),d=-a,u=1+a,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,h=2,f=1,b=new Float32Array(_*g*m),y=new Float32Array(h*g*m),v=new Float32Array(f*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,F=T>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];b.set(E,_*g*T),y.set(p,h*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const A=new kt;A.setAttribute("position",new an(b,_)),A.setAttribute("uv",new an(y,h)),A.setAttribute("faceIndex",new an(v,f)),i.push(new Yt(A,null)),r>si&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function dc(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ji(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nx(n,e,t){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ix(n,e,t){const i=new Float32Array(Ei),r=new oe(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,a=c===rs||c===os,d=c===ir||c===rr;if(a||d){let u=e.get(l);const p=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new uc(n)),u=a?t.fromEquirectangular(l,u):t.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return a&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new uc(n)),u=a?t.fromEquirectangular(l):t.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,e.set(l,u),l.addEventListener("dispose",o),u.texture):null}}}return l}function r(l){let c=0;const a=6;for(let d=0;d<a;d++)l[d]!==void 0&&c++;return c===a}function o(l){const c=l.target;c.removeEventListener("dispose",o);const a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function ox(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Dr("WebGLRenderer: "+i+" extension not supported."),r}}}function ax(n,e,t,i){const r={},o=new WeakMap;function s(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(u,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function a(u){const p=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let y=0,v=b.length;y<v;y+=3){const A=b[y+0],T=b[y+1],C=b[y+2];p.push(A,T,T,C,C,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const A=y+0,T=y+1,C=y+2;p.push(A,T,T,C,C,A)}}else return;const h=new(pu(p)?_u:vu)(p,1);h.version=_;const f=o.get(u);f&&e.remove(f),o.set(u,h)}function d(u){const p=o.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&a(u)}else a(u);return o.get(u)}return{get:l,update:c,getWireframeAttribute:d}}function sx(n,e,t){let i;function r(p){i=p}let o,s;function l(p){o=p.type,s=p.bytesPerElement}function c(p,m){n.drawElements(i,m,o,p*s),t.update(m,i,1)}function a(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,p*s,g),t.update(m,i,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,p,0,g);let h=0;for(let f=0;f<g;f++)h+=m[f];t.update(h,i,1)}function u(p,m,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<p.length;f++)a(p[f]/s,m[f],_[f]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=m[b]*_[b];t.update(f,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function lx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,l){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:Dt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cx(n,e,t){const i=new WeakMap,r=new Ot;function o(s,l,c){const a=s.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=d!==void 0?d.length:0;let p=i.get(l);if(p===void 0||p.count!==u){let E=function(){C.dispose(),i.delete(l),l.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=l.attributes.position.count*y,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*A*4*u),C=new mu(T,v,A,u);C.type=Wn,C.needsUpdate=!0;const F=y*4;for(let M=0;M<u;M++){const w=h[M],L=f[M],P=b[M],I=v*A*4*M;for(let B=0;B<w.count;B++){const V=B*F;m===!0&&(r.fromBufferAttribute(w,B),T[I+V+0]=r.x,T[I+V+1]=r.y,T[I+V+2]=r.z,T[I+V+3]=0),g===!0&&(r.fromBufferAttribute(L,B),T[I+V+4]=r.x,T[I+V+5]=r.y,T[I+V+6]=r.z,T[I+V+7]=0),_===!0&&(r.fromBufferAttribute(P,B),T[I+V+8]=r.x,T[I+V+9]=r.y,T[I+V+10]=r.z,T[I+V+11]=P.itemSize===4?r.w:1)}}p={count:u,texture:C,size:new Ze(v,A)},i.set(l,p),l.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<a.length;_++)m+=a[_];const g=l.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function ux(n,e,t,i){let r=new WeakMap;function o(c){const a=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==a&&(e.update(u),r.set(u,a)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==a&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,a))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==a&&(p.update(),r.set(p,a))}return u}function s(){r=new WeakMap}function l(c){const a=c.target;a.removeEventListener("dispose",l),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:o,dispose:s}}const Fu=new qt,pc=new Au(1,1),Uu=new mu,ku=new sp,Bu=new Eu,mc=[],gc=[],xc=new Float32Array(16),vc=new Float32Array(9),_c=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=mc[r];if(o===void 0&&(o=new Float32Array(r),mc[r]=o),e!==0){i.toArray(o,0);for(let s=1,l=0;s!==e;++s)l+=t,n[s].toArray(o,l)}return o}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;_c.set(i),n.uniformMatrix2fv(this.addr,!1,_c),Vt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;vc.set(i),n.uniformMatrix3fv(this.addr,!1,vc),Vt(t,i)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;xc.set(i),n.uniformMatrix4fv(this.addr,!1,xc),Vt(t,i)}}function vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function Ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=hu,o=pc):o=Fu,t.setTexture2D(e||o,r)}function Rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ku,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bu,r)}function wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uu,r)}function Px(n){switch(n){case 5126:return dx;case 35664:return fx;case 35665:return hx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return bx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return Sx;case 36295:return Tx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return wx}}function Lx(n,e){n.uniform1fv(this.addr,e)}function Ix(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Nx(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ox(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Dx(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fx(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ux(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kx(n,e){n.uniform1iv(this.addr,e)}function Bx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function Vx(n,e){n.uniform4iv(this.addr,e)}function Gx(n,e){n.uniform1uiv(this.addr,e)}function Hx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function jx(n,e,t){const i=this.cache,r=e.length,o=Yo(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Vt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Fu,o[s])}function Yx(n,e,t){const i=this.cache,r=e.length,o=Yo(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Vt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ku,o[s])}function Kx(n,e,t){const i=this.cache,r=e.length,o=Yo(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Vt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Bu,o[s])}function qx(n,e,t){const i=this.cache,r=e.length,o=Yo(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Vt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Uu,o[s])}function $x(n){switch(n){case 5126:return Lx;case 35664:return Ix;case 35665:return Nx;case 35666:return Ox;case 35674:return Dx;case 35675:return Fx;case 35676:return Ux;case 5124:case 35670:return kx;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Hx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return qx}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class Qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const l=r[o];l.setValue(e,t[l.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function ev(n,e,t){const i=n.name,r=i.length;for(Wa.lastIndex=0;;){const o=Wa.exec(i),s=Wa.lastIndex;let l=o[1];const c=o[2]==="]",a=o[3];if(c&&(l=l|0),a===void 0||a==="["&&s+2===r){bc(t,a===void 0?new Zx(l,n,e):new Jx(l,n,e));break}else{let u=t.map[l];u===void 0&&(u=new Qx(l),bc(t,u)),t=u}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);ev(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const l=t[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tv=37297;let nv=0;function iv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const l=s+1;i.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return i.join(`
`)}const Ec=new st;function rv(n){ht._getMatrix(Ec,ht.workingColorSpace,n);const e=`mat3( ${Ec.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Uo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+iv(n.getShaderSource(e),l)}else return o}function ov(n,e){const t=rv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function av(n,e){let t;switch(e){case Oh:t="Linear";break;case Dh:t="Reinhard";break;case Fh:t="Cineon";break;case Uh:t="ACESFilmic";break;case Bh:t="AgX";break;case zh:t="Neutral";break;case kh:t="Custom";break;default:nt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const To=new oe;function sv(){ht.getLuminanceCoefficients(To);const n=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function cv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:l}}return t}function Er(n){return n!==""}function Tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(n){return n.replace(dv,hv)}const fv=new Map;function hv(n,e){let t=lt[e];if(t===void 0){const i=fv.get(e);if(i!==void 0)t=lt[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bs(t)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(pv,mv)}function mv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Rc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function bv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yv(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,l=t.fragmentShader;const c=gv(t),a=xv(t),d=vv(t),u=_v(t),p=bv(t),m=lv(t),g=cv(o),_=r.createProgram();let h,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),f.length>0&&(f+=`
`)):(h=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),f=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?lt.tonemapping_pars_fragment:"",t.toneMapping!==li?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),s=Bs(s),s=Tc(s,t),s=Mc(s,t),l=Bs(l),l=Tc(l,t),l=Mc(l,t),s=Ac(s),l=Ac(l),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+h+s,v=b+f+l,A=yc(r,r.VERTEX_SHADER,y),T=yc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(w){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",P=r.getShaderInfoLog(A)||"",I=r.getShaderInfoLog(T)||"",B=L.trim(),V=P.trim(),j=I.trim();let H=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const K=Sc(r,A,"vertex"),ce=Sc(r,T,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+K+`
`+ce)}else B!==""?nt("WebGLProgram: Program Info Log:",B):(V===""||j==="")&&(G=!1);G&&(w.diagnostics={runnable:H,programLog:B,vertexShader:{log:V,prefix:h},fragmentShader:{log:j,prefix:f}})}r.deleteShader(A),r.deleteShader(T),F=new No(r,_),E=uv(r,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,tv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Ev=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tv(e),t.set(e,i)),i}}class Tv{constructor(e){this.id=Ev++,this.code=e,this.usedTimes=0}}function Mv(n,e,t,i,r,o,s){const l=new gu,c=new Sv,a=new Set,d=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return a.add(E),E===0?"uv":`uv${E}`}function h(E,M,w,L,P){const I=L.fog,B=P.geometry,V=E.isMeshStandardMaterial?L.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),H=j&&j.mapping===Go?j.image.height:null,G=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=K!==void 0?K.length:0;let Q=0;B.morphAttributes.position!==void 0&&(Q=1),B.morphAttributes.normal!==void 0&&(Q=2),B.morphAttributes.color!==void 0&&(Q=3);let te,Se,$,z;if(G){const we=Cn[G];te=we.vertexShader,Se=we.fragmentShader}else te=E.vertexShader,Se=E.fragmentShader,c.update(E),$=c.getVertexShaderID(E),z=c.getFragmentShaderID(E);const W=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),ue=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,Re=!!E.map,Oe=!!E.matcap,Fe=!!j,Qe=!!E.aoMap,X=!!E.lightMap,Be=!!E.bumpMap,ee=!!E.normalMap,me=!!E.displacementMap,ne=!!E.emissiveMap,Me=!!E.metalnessMap,Ae=!!E.roughnessMap,Pe=E.anisotropy>0,S=E.clearcoat>0,x=E.dispersion>0,R=E.iridescence>0,D=E.sheen>0,O=E.transmission>0,U=Pe&&!!E.anisotropyMap,q=S&&!!E.clearcoatMap,Y=S&&!!E.clearcoatNormalMap,ae=S&&!!E.clearcoatRoughnessMap,de=R&&!!E.iridescenceMap,ie=R&&!!E.iridescenceThicknessMap,_e=D&&!!E.sheenColorMap,Ce=D&&!!E.sheenRoughnessMap,J=!!E.specularMap,se=!!E.specularColorMap,ye=!!E.specularIntensityMap,k=O&&!!E.transmissionMap,ve=O&&!!E.thicknessMap,xe=!!E.gradientMap,fe=!!E.alphaMap,be=E.alphaTest>0,he=!!E.alphaHash,Ie=!!E.extensions;let Ve=li;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const Ge={shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:Se,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:ue,instancingColor:ue&&P.instanceColor!==null,instancingMorph:ue&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:or,alphaToCoverage:!!E.alphaToCoverage,map:Re,matcap:Oe,envMap:Fe,envMapMode:Fe&&j.mapping,envMapCubeUVHeight:H,aoMap:Qe,lightMap:X,bumpMap:Be,normalMap:ee,displacementMap:p&&me,emissiveMap:ne,normalMapObjectSpace:ee&&E.normalMapType===Wh,normalMapTangentSpace:ee&&E.normalMapType===Qs,metalnessMap:Me,roughnessMap:Ae,anisotropy:Pe,anisotropyMap:U,clearcoat:S,clearcoatMap:q,clearcoatNormalMap:Y,clearcoatRoughnessMap:ae,dispersion:x,iridescence:R,iridescenceMap:de,iridescenceThicknessMap:ie,sheen:D,sheenColorMap:_e,sheenRoughnessMap:Ce,specularMap:J,specularColorMap:se,specularIntensityMap:ye,transmission:O,transmissionMap:k,thicknessMap:ve,gradientMap:xe,opaque:E.transparent===!1&&E.blending===Ji&&E.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:he,combine:E.combine,mapUv:Re&&_(E.map.channel),aoMapUv:Qe&&_(E.aoMap.channel),lightMapUv:X&&_(E.lightMap.channel),bumpMapUv:Be&&_(E.bumpMap.channel),normalMapUv:ee&&_(E.normalMap.channel),displacementMapUv:me&&_(E.displacementMap.channel),emissiveMapUv:ne&&_(E.emissiveMap.channel),metalnessMapUv:Me&&_(E.metalnessMap.channel),roughnessMapUv:Ae&&_(E.roughnessMap.channel),anisotropyMapUv:U&&_(E.anisotropyMap.channel),clearcoatMapUv:q&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Y&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(E.sheenRoughnessMap.channel),specularMapUv:J&&_(E.specularMap.channel),specularColorMapUv:se&&_(E.specularColorMap.channel),specularIntensityMapUv:ye&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:ve&&_(E.thicknessMap.channel),alphaMapUv:fe&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Re||fe),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Z,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===yt,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&ht.getTransfer(E.emissiveMap.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ge.vertexUv1s=a.has(1),Ge.vertexUv2s=a.has(2),Ge.vertexUv3s=a.has(3),a.clear(),Ge}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)M.push(w),M.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),M.gradientMap&&l.enable(22),E.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reversedDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),E.push(l.mask)}function v(E){const M=g[E.type];let w;if(M){const L=Cn[M];w=bp.clone(L.uniforms)}else w=E.uniforms;return w}function A(E,M){let w;for(let L=0,P=d.length;L<P;L++){const I=d[L];if(I.cacheKey===M){w=I,++w.usedTimes;break}}return w===void 0&&(w=new yv(n,M,E,o),d.push(w)),w}function T(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function C(E){c.remove(E)}function F(){c.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:d,dispose:F}}function Av(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let l=n.get(s);return l===void 0&&(l={},n.set(s,l)),l}function i(s){n.delete(s)}function r(s,l,c){n.get(s)[l]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function Rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wc(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(u,p,m,g,_,h){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:h},n[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=h),e++,f}function l(u,p,m,g,_,h){const f=s(u,p,m,g,_,h);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(u,p,m,g,_,h){const f=s(u,p,m,g,_,h);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function a(u,p){t.length>1&&t.sort(u||Rv),i.length>1&&i.sort(p||Cc),r.length>1&&r.sort(p||Cc)}function d(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:d,sort:a}}function Cv(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new wc,n.set(i,[s])):r>=o.length?(s=new wc,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new rt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function Pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lv=0;function Iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nv(n){const e=new wv,t=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new oe);const r=new oe,o=new Pt,s=new Pt;function l(a){let d=0,u=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,_=0,h=0,f=0,b=0,y=0,v=0,A=0,T=0,C=0;a.sort(Iv);for(let E=0,M=a.length;E<M;E++){const w=a[E],L=w.color,P=w.intensity,I=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=L.r*P,u+=L.g*P,p+=L.b*P;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],P);C++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,H=t.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=w.shadow.matrix,b++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(L).multiplyScalar(P),V.distance=I,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[_]=V;const j=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,j.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[_]=j.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,v++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(L).multiplyScalar(P),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[h]=V,h++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const j=w.shadow,H=t.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=w.shadow.matrix,y++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(P),V.groundColor.copy(w.groundColor).multiplyScalar(P),i.hemi[f]=V,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==h||F.hemiLength!==f||F.numDirectionalShadows!==b||F.numPointShadows!==y||F.numSpotShadows!==v||F.numSpotMaps!==A||F.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=h,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=h,F.hemiLength=f,F.numDirectionalShadows=b,F.numPointShadows=y,F.numSpotShadows=v,F.numSpotMaps=A,F.numLightProbes=C,i.version=Lv++)}function c(a,d){let u=0,p=0,m=0,g=0,_=0;const h=d.matrixWorldInverse;for(let f=0,b=a.length;f<b;f++){const y=a[f];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),u++}else if(y.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),m++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),s.identity(),o.copy(y.matrixWorld),o.premultiply(h),s.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(h),_++}}}return{setup:l,setupView:c,state:i}}function Pc(n){const e=new Nv(n),t=[],i=[];function r(d){a.camera=d,t.length=0,i.length=0}function o(d){t.push(d)}function s(d){i.push(d)}function l(){e.setup(t)}function c(d){e.setupView(t,d)}const a={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Ov(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let l;return s===void 0?(l=new Pc(n),e.set(r,[l])):o>=s.length?(l=new Pc(n),s.push(l)):l=s[o],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uv(n,e,t){let i=new nl;const r=new Ze,o=new Ze,s=new Ot,l=new Jp({depthPacking:Hh}),c=new Qp,a={},d=t.maxTextureSize,u={[Yn]:Kt,[Kt]:Yn,[Tn]:Tn},p=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Dv,fragmentShader:Fv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let f=this.type;this.render=function(T,C,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Xn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=f!==Hn&&this.type===Hn,I=f===Hn&&this.type!==Hn;for(let B=0,V=T.length;B<V;B++){const j=T[B],H=j.shadow;if(H===void 0){nt("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const G=H.getFrameExtents();if(r.multiply(G),o.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/G.x),r.x=o.x*G.x,H.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/G.y),r.y=o.y*G.y,H.mapSize.y=o.y)),H.map===null||P===!0||I===!0){const ce=this.type!==Hn?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Mi(r.x,r.y,ce),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const K=H.getViewportCount();for(let ce=0;ce<K;ce++){const Q=H.getViewport(ce);s.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),L.viewport(s),H.updateMatrices(j,ce),i=H.getFrustum(),v(C,F,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Hn&&b(H,F),H.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(E,M,w)};function b(T,C){const F=e.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mi(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,F,p,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,F,m,_,null)}function y(T,C,F,E){let M=null;const w=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)M=w;else if(M=F.isPointLight===!0?c:l,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=M.uuid,P=C.uuid;let I=a[L];I===void 0&&(I={},a[L]=I);let B=I[P];B===void 0&&(B=M.clone(),I[P]=B,C.addEventListener("dispose",A)),M=B}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Hn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=n.properties.get(M);L.light=F}return M}function v(T,C,F,E,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Hn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const P=e.update(T),I=T.material;if(Array.isArray(I)){const B=P.groups;for(let V=0,j=B.length;V<j;V++){const H=B[V],G=I[H.materialIndex];if(G&&G.visible){const K=y(T,G,E,M);T.onBeforeShadow(n,T,C,F,P,K,H),n.renderBufferDirect(F,null,P,K,T,H),T.onAfterShadow(n,T,C,F,P,K,H)}}}else if(I.visible){const B=y(T,I,E,M);T.onBeforeShadow(n,T,C,F,P,B,null),n.renderBufferDirect(F,null,P,B,T,null),T.onAfterShadow(n,T,C,F,P,B,null)}}const L=T.children;for(let P=0,I=L.length;P<I;P++)v(L[P],C,F,E,M)}function A(T){T.target.removeEventListener("dispose",A);for(const F in a){const E=a[F],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const kv={[Za]:Ja,[Qa]:ns,[es]:is,[nr]:ts,[Ja]:Za,[ns]:Qa,[is]:es,[ts]:nr};function Bv(n,e){function t(){let k=!1;const ve=new Ot;let xe=null;const fe=new Ot(0,0,0,0);return{setMask:function(be){xe!==be&&!k&&(n.colorMask(be,be,be,be),xe=be)},setLocked:function(be){k=be},setClear:function(be,he,Ie,Ve,Ge){Ge===!0&&(be*=Ve,he*=Ve,Ie*=Ve),ve.set(be,he,Ie,Ve),fe.equals(ve)===!1&&(n.clearColor(be,he,Ie,Ve),fe.copy(ve))},reset:function(){k=!1,xe=null,fe.set(-1,0,0,0)}}}function i(){let k=!1,ve=!1,xe=null,fe=null,be=null;return{setReversed:function(he){if(ve!==he){const Ie=e.get("EXT_clip_control");he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ve=he;const Ve=be;be=null,this.setClear(Ve)}},getReversed:function(){return ve},setTest:function(he){he?W(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(he){xe!==he&&!k&&(n.depthMask(he),xe=he)},setFunc:function(he){if(ve&&(he=kv[he]),fe!==he){switch(he){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case es:n.depthFunc(n.EQUAL);break;case ts:n.depthFunc(n.GEQUAL);break;case ns:n.depthFunc(n.GREATER);break;case is:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=he}},setLocked:function(he){k=he},setClear:function(he){be!==he&&(ve&&(he=1-he),n.clearDepth(he),be=he)},reset:function(){k=!1,xe=null,fe=null,be=null,ve=!1}}}function r(){let k=!1,ve=null,xe=null,fe=null,be=null,he=null,Ie=null,Ve=null,Ge=null;return{setTest:function(we){k||(we?W(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(we){ve!==we&&!k&&(n.stencilMask(we),ve=we)},setFunc:function(we,ke,Ne){(xe!==we||fe!==ke||be!==Ne)&&(n.stencilFunc(we,ke,Ne),xe=we,fe=ke,be=Ne)},setOp:function(we,ke,Ne){(he!==we||Ie!==ke||Ve!==Ne)&&(n.stencilOp(we,ke,Ne),he=we,Ie=ke,Ve=Ne)},setLocked:function(we){k=we},setClear:function(we){Ge!==we&&(n.clearStencil(we),Ge=we)},reset:function(){k=!1,ve=null,xe=null,fe=null,be=null,he=null,Ie=null,Ve=null,Ge=null}}}const o=new t,s=new i,l=new r,c=new WeakMap,a=new WeakMap;let d={},u={},p=new WeakMap,m=[],g=null,_=!1,h=null,f=null,b=null,y=null,v=null,A=null,T=null,C=new rt(0,0,0),F=0,E=!1,M=null,w=null,L=null,P=null,I=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let G=null,K={};const ce=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),te=new Ot().fromArray(ce),Se=new Ot().fromArray(Q);function $(k,ve,xe,fe){const be=new Uint8Array(4),he=n.createTexture();n.bindTexture(k,he),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<xe;Ie++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ve+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return he}const z={};z[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),l.setClear(0),W(n.DEPTH_TEST),s.setFunc(nr),Be(!1),ee(Tl),W(n.CULL_FACE),Qe(Xn);function W(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function Z(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function ue(k,ve){return u[k]!==ve?(n.bindFramebuffer(k,ve),u[k]=ve,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ve),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ee(k,ve){let xe=m,fe=!1;if(k){xe=p.get(ve),xe===void 0&&(xe=[],p.set(ve,xe));const be=k.textures;if(xe.length!==be.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ie=be.length;he<Ie;he++)xe[he]=n.COLOR_ATTACHMENT0+he;xe.length=be.length,fe=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,fe=!0);fe&&n.drawBuffers(xe)}function Re(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Oe={[yi]:n.FUNC_ADD,[mh]:n.FUNC_SUBTRACT,[gh]:n.FUNC_REVERSE_SUBTRACT};Oe[xh]=n.MIN,Oe[vh]=n.MAX;const Fe={[_h]:n.ZERO,[bh]:n.ONE,[yh]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Rh]:n.SRC_ALPHA_SATURATE,[Mh]:n.DST_COLOR,[Sh]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[Th]:n.ONE_MINUS_DST_ALPHA,[Ch]:n.CONSTANT_COLOR,[wh]:n.ONE_MINUS_CONSTANT_COLOR,[Ph]:n.CONSTANT_ALPHA,[Lh]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(k,ve,xe,fe,be,he,Ie,Ve,Ge,we){if(k===Xn){_===!0&&(Z(n.BLEND),_=!1);return}if(_===!1&&(W(n.BLEND),_=!0),k!==ph){if(k!==h||we!==E){if((f!==yi||v!==yi)&&(n.blendEquation(n.FUNC_ADD),f=yi,v=yi),we)switch(k){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Al:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",k);break}b=null,y=null,A=null,T=null,C.set(0,0,0),F=0,h=k,E=we}return}be=be||ve,he=he||xe,Ie=Ie||fe,(ve!==f||be!==v)&&(n.blendEquationSeparate(Oe[ve],Oe[be]),f=ve,v=be),(xe!==b||fe!==y||he!==A||Ie!==T)&&(n.blendFuncSeparate(Fe[xe],Fe[fe],Fe[he],Fe[Ie]),b=xe,y=fe,A=he,T=Ie),(Ve.equals(C)===!1||Ge!==F)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Ge),C.copy(Ve),F=Ge),h=k,E=!1}function X(k,ve){k.side===Tn?Z(n.CULL_FACE):W(n.CULL_FACE);let xe=k.side===Kt;ve&&(xe=!xe),Be(xe),k.blending===Ji&&k.transparent===!1?Qe(Xn):Qe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),o.setMask(k.colorWrite);const fe=k.stencilWrite;l.setTest(fe),fe&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function ee(k){k!==dh?(W(n.CULL_FACE),k!==w&&(k===Tl?n.cullFace(n.BACK):k===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),w=k}function me(k){k!==L&&(V&&n.lineWidth(k),L=k)}function ne(k,ve,xe){k?(W(n.POLYGON_OFFSET_FILL),(P!==ve||I!==xe)&&(n.polygonOffset(ve,xe),P=ve,I=xe)):Z(n.POLYGON_OFFSET_FILL)}function Me(k){k?W(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function Ae(k){k===void 0&&(k=n.TEXTURE0+B-1),G!==k&&(n.activeTexture(k),G=k)}function Pe(k,ve,xe){xe===void 0&&(G===null?xe=n.TEXTURE0+B-1:xe=G);let fe=K[xe];fe===void 0&&(fe={type:void 0,texture:void 0},K[xe]=fe),(fe.type!==k||fe.texture!==ve)&&(G!==xe&&(n.activeTexture(xe),G=xe),n.bindTexture(k,ve||z[k]),fe.type=k,fe.texture=ve)}function S(){const k=K[G];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function D(){try{n.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function O(){try{n.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Y(){try{n.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ae(){try{n.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function de(){try{n.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{n.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function _e(k){te.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),te.copy(k))}function Ce(k){Se.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Se.copy(k))}function J(k,ve){let xe=a.get(ve);xe===void 0&&(xe=new WeakMap,a.set(ve,xe));let fe=xe.get(k);fe===void 0&&(fe=n.getUniformBlockIndex(ve,k.name),xe.set(k,fe))}function se(k,ve){const fe=a.get(ve).get(k);c.get(ve)!==fe&&(n.uniformBlockBinding(ve,fe,k.__bindingPointIndex),c.set(ve,fe))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},G=null,K={},u={},p=new WeakMap,m=[],g=null,_=!1,h=null,f=null,b=null,y=null,v=null,A=null,T=null,C=new rt(0,0,0),F=0,E=!1,M=null,w=null,L=null,P=null,I=null,te.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),l.reset()}return{buffers:{color:o,depth:s,stencil:l},enable:W,disable:Z,bindFramebuffer:ue,drawBuffers:Ee,useProgram:Re,setBlending:Qe,setMaterial:X,setFlipSided:Be,setCullFace:ee,setLineWidth:me,setPolygonOffset:ne,setScissorTest:Me,activeTexture:Ae,bindTexture:Pe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:de,texImage3D:ie,updateUBOMapping:J,uniformBlockBinding:se,texStorage2D:Y,texStorage3D:ae,texSubImage2D:D,texSubImage3D:O,compressedTexSubImage2D:U,compressedTexSubImage3D:q,scissor:_e,viewport:Ce,reset:ye}}function zv(n,e,t,i,r,o,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Ze,d=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Or("canvas")}function _(S,x,R){let D=1;const O=Pe(S);if((O.width>R||O.height>R)&&(D=R/Math.max(O.width,O.height)),D<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const U=Math.floor(D*O.width),q=Math.floor(D*O.height);u===void 0&&(u=g(U,q));const Y=x?g(U,q):u;return Y.width=U,Y.height=q,Y.getContext("2d").drawImage(S,0,0,U,q),nt("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+U+"x"+q+")."),Y}else return"data"in S&&nt("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),S;return S}function h(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,x,R,D,O=!1){if(S!==null){if(n[S]!==void 0)return n[S];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let U=x;if(x===n.RED&&(R===n.FLOAT&&(U=n.R32F),R===n.HALF_FLOAT&&(U=n.R16F),R===n.UNSIGNED_BYTE&&(U=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.R8UI),R===n.UNSIGNED_SHORT&&(U=n.R16UI),R===n.UNSIGNED_INT&&(U=n.R32UI),R===n.BYTE&&(U=n.R8I),R===n.SHORT&&(U=n.R16I),R===n.INT&&(U=n.R32I)),x===n.RG&&(R===n.FLOAT&&(U=n.RG32F),R===n.HALF_FLOAT&&(U=n.RG16F),R===n.UNSIGNED_BYTE&&(U=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RG8UI),R===n.UNSIGNED_SHORT&&(U=n.RG16UI),R===n.UNSIGNED_INT&&(U=n.RG32UI),R===n.BYTE&&(U=n.RG8I),R===n.SHORT&&(U=n.RG16I),R===n.INT&&(U=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RGB8UI),R===n.UNSIGNED_SHORT&&(U=n.RGB16UI),R===n.UNSIGNED_INT&&(U=n.RGB32UI),R===n.BYTE&&(U=n.RGB8I),R===n.SHORT&&(U=n.RGB16I),R===n.INT&&(U=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),R===n.UNSIGNED_INT&&(U=n.RGBA32UI),R===n.BYTE&&(U=n.RGBA8I),R===n.SHORT&&(U=n.RGBA16I),R===n.INT&&(U=n.RGBA32I)),x===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(U=n.R11F_G11F_B10F)),x===n.RGBA){const q=O?Uo:ht.getTransfer(D);R===n.FLOAT&&(U=n.RGBA32F),R===n.HALF_FLOAT&&(U=n.RGBA16F),R===n.UNSIGNED_BYTE&&(U=q===yt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function v(S,x){let R;return S?x===null||x===Ti||x===Lr?R=n.DEPTH24_STENCIL8:x===Wn?R=n.DEPTH32F_STENCIL8:x===Pr&&(R=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===Lr?R=n.DEPTH_COMPONENT24:x===Wn?R=n.DEPTH_COMPONENT32F:x===Pr&&(R=n.DEPTH_COMPONENT16),R}function A(S,x){return h(S)===!0||S.isFramebufferTexture&&S.minFilter!==fn&&S.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function T(S){const x=S.target;x.removeEventListener("dispose",T),F(x),x.isVideoTexture&&d.delete(x)}function C(S){const x=S.target;x.removeEventListener("dispose",C),M(x)}function F(S){const x=i.get(S);if(x.__webglInit===void 0)return;const R=S.source,D=p.get(R);if(D){const O=D[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&E(S),Object.keys(D).length===0&&p.delete(R)}i.remove(S)}function E(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const R=S.source,D=p.get(R);delete D[x.__cacheKey],s.memory.textures--}function M(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(x.__webglFramebuffer[D]))for(let O=0;O<x.__webglFramebuffer[D].length;O++)n.deleteFramebuffer(x.__webglFramebuffer[D][O]);else n.deleteFramebuffer(x.__webglFramebuffer[D]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[D])}else{if(Array.isArray(x.__webglFramebuffer))for(let D=0;D<x.__webglFramebuffer.length;D++)n.deleteFramebuffer(x.__webglFramebuffer[D]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let D=0;D<x.__webglColorRenderbuffer.length;D++)x.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[D]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const R=S.textures;for(let D=0,O=R.length;D<O;D++){const U=i.get(R[D]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),s.memory.textures--),i.remove(R[D])}i.remove(S)}let w=0;function L(){w=0}function P(){const S=w;return S>=r.maxTextures&&nt("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),w+=1,S}function I(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function B(S,x){const R=i.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&R.__version!==S.version){const D=S.image;if(D===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(R,S,x);return}}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function V(S,x){const R=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){z(R,S,x);return}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function j(S,x){const R=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){z(R,S,x);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function H(S,x){const R=i.get(S);if(S.version>0&&R.__version!==S.version){W(R,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}const G={[oi]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[as]:n.MIRRORED_REPEAT},K={[fn]:n.NEAREST,[Vh]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[ha]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},ce={[Xh]:n.NEVER,[Zh]:n.ALWAYS,[jh]:n.LESS,[hu]:n.LEQUAL,[Yh]:n.EQUAL,[$h]:n.GEQUAL,[Kh]:n.GREATER,[qh]:n.NOTEQUAL};function Q(S,x){if(x.type===Wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===ha||x.magFilter===Jr||x.magFilter===Si||x.minFilter===xn||x.minFilter===ha||x.minFilter===Jr||x.minFilter===Si)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,G[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,G[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,G[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,K[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,K[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==Jr&&x.minFilter!==Si||x.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(S,x){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",T));const D=x.source;let O=p.get(D);O===void 0&&(O={},p.set(D,O));const U=I(x);if(U!==S.__cacheKey){O[U]===void 0&&(O[U]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,R=!0),O[U].usedTimes++;const q=O[S.__cacheKey];q!==void 0&&(O[S.__cacheKey].usedTimes--,q.usedTimes===0&&E(x)),S.__cacheKey=U,S.__webglTexture=O[U].texture}return R}function Se(S,x,R){return Math.floor(Math.floor(S/R)/x)}function $(S,x,R,D){const U=S.updateRanges;if(U.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,R,D,x.data);else{U.sort((ie,_e)=>ie.start-_e.start);let q=0;for(let ie=1;ie<U.length;ie++){const _e=U[q],Ce=U[ie],J=_e.start+_e.count,se=Se(Ce.start,x.width,4),ye=Se(_e.start,x.width,4);Ce.start<=J+1&&se===ye&&Se(Ce.start+Ce.count-1,x.width,4)===se?_e.count=Math.max(_e.count,Ce.start+Ce.count-_e.start):(++q,U[q]=Ce)}U.length=q+1;const Y=n.getParameter(n.UNPACK_ROW_LENGTH),ae=n.getParameter(n.UNPACK_SKIP_PIXELS),de=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ie=0,_e=U.length;ie<_e;ie++){const Ce=U[ie],J=Math.floor(Ce.start/4),se=Math.ceil(Ce.count/4),ye=J%x.width,k=Math.floor(J/x.width),ve=se,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,ye,k,ve,xe,R,D,x.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Y),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function z(S,x,R){let D=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(D=n.TEXTURE_3D);const O=te(S,x),U=x.source;t.bindTexture(D,S.__webglTexture,n.TEXTURE0+R);const q=i.get(U);if(U.version!==q.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const Y=ht.getPrimaries(ht.workingColorSpace),ae=x.colorSpace===ri?null:ht.getPrimaries(x.colorSpace),de=x.colorSpace===ri||Y===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ie=_(x.image,!1,r.maxTextureSize);ie=Ae(x,ie);const _e=o.convert(x.format,x.colorSpace),Ce=o.convert(x.type);let J=y(x.internalFormat,_e,Ce,x.colorSpace,x.isVideoTexture);Q(D,x);let se;const ye=x.mipmaps,k=x.isVideoTexture!==!0,ve=q.__version===void 0||O===!0,xe=U.dataReady,fe=A(x,ie);if(x.isDepthTexture)J=v(x.format===Nr,x.type),ve&&(k?t.texStorage2D(n.TEXTURE_2D,1,J,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,J,ie.width,ie.height,0,_e,Ce,null));else if(x.isDataTexture)if(ye.length>0){k&&ve&&t.texStorage2D(n.TEXTURE_2D,fe,J,ye[0].width,ye[0].height);for(let be=0,he=ye.length;be<he;be++)se=ye[be],k?xe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,se.width,se.height,_e,Ce,se.data):t.texImage2D(n.TEXTURE_2D,be,J,se.width,se.height,0,_e,Ce,se.data);x.generateMipmaps=!1}else k?(ve&&t.texStorage2D(n.TEXTURE_2D,fe,J,ie.width,ie.height),xe&&$(x,ie,_e,Ce)):t.texImage2D(n.TEXTURE_2D,0,J,ie.width,ie.height,0,_e,Ce,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,J,ye[0].width,ye[0].height,ie.depth);for(let be=0,he=ye.length;be<he;be++)if(se=ye[be],x.format!==vn)if(_e!==null)if(k){if(xe)if(x.layerUpdates.size>0){const Ie=sc(se.width,se.height,x.format,x.type);for(const Ve of x.layerUpdates){const Ge=se.data.subarray(Ve*Ie/se.data.BYTES_PER_ELEMENT,(Ve+1)*Ie/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Ve,se.width,se.height,1,_e,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,se.width,se.height,ie.depth,_e,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,J,se.width,se.height,ie.depth,0,se.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,se.width,se.height,ie.depth,_e,Ce,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,J,se.width,se.height,ie.depth,0,_e,Ce,se.data)}else{k&&ve&&t.texStorage2D(n.TEXTURE_2D,fe,J,ye[0].width,ye[0].height);for(let be=0,he=ye.length;be<he;be++)se=ye[be],x.format!==vn?_e!==null?k?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,se.width,se.height,_e,se.data):t.compressedTexImage2D(n.TEXTURE_2D,be,J,se.width,se.height,0,se.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?xe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,se.width,se.height,_e,Ce,se.data):t.texImage2D(n.TEXTURE_2D,be,J,se.width,se.height,0,_e,Ce,se.data)}else if(x.isDataArrayTexture)if(k){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,J,ie.width,ie.height,ie.depth),xe)if(x.layerUpdates.size>0){const be=sc(ie.width,ie.height,x.format,x.type);for(const he of x.layerUpdates){const Ie=ie.data.subarray(he*be/ie.data.BYTES_PER_ELEMENT,(he+1)*be/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ie.width,ie.height,1,_e,Ce,Ie)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ce,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,ie.width,ie.height,ie.depth,0,_e,Ce,ie.data);else if(x.isData3DTexture)k?(ve&&t.texStorage3D(n.TEXTURE_3D,fe,J,ie.width,ie.height,ie.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ce,ie.data)):t.texImage3D(n.TEXTURE_3D,0,J,ie.width,ie.height,ie.depth,0,_e,Ce,ie.data);else if(x.isFramebufferTexture){if(ve)if(k)t.texStorage2D(n.TEXTURE_2D,fe,J,ie.width,ie.height);else{let be=ie.width,he=ie.height;for(let Ie=0;Ie<fe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,J,be,he,0,_e,Ce,null),be>>=1,he>>=1}}else if(ye.length>0){if(k&&ve){const be=Pe(ye[0]);t.texStorage2D(n.TEXTURE_2D,fe,J,be.width,be.height)}for(let be=0,he=ye.length;be<he;be++)se=ye[be],k?xe&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,_e,Ce,se):t.texImage2D(n.TEXTURE_2D,be,J,_e,Ce,se);x.generateMipmaps=!1}else if(k){if(ve){const be=Pe(ie);t.texStorage2D(n.TEXTURE_2D,fe,J,be.width,be.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ce,ie)}else t.texImage2D(n.TEXTURE_2D,0,J,_e,Ce,ie);h(x)&&f(D),q.__version=U.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function W(S,x,R){if(x.image.length!==6)return;const D=te(S,x),O=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+R);const U=i.get(O);if(O.version!==U.__version||D===!0){t.activeTexture(n.TEXTURE0+R);const q=ht.getPrimaries(ht.workingColorSpace),Y=x.colorSpace===ri?null:ht.getPrimaries(x.colorSpace),ae=x.colorSpace===ri||q===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const de=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let he=0;he<6;he++)!de&&!ie?_e[he]=_(x.image[he],!0,r.maxCubemapSize):_e[he]=ie?x.image[he].image:x.image[he],_e[he]=Ae(x,_e[he]);const Ce=_e[0],J=o.convert(x.format,x.colorSpace),se=o.convert(x.type),ye=y(x.internalFormat,J,se,x.colorSpace),k=x.isVideoTexture!==!0,ve=U.__version===void 0||D===!0,xe=O.dataReady;let fe=A(x,Ce);Q(n.TEXTURE_CUBE_MAP,x);let be;if(de){k&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ye,Ce.width,Ce.height);for(let he=0;he<6;he++){be=_e[he].mipmaps;for(let Ie=0;Ie<be.length;Ie++){const Ve=be[Ie];x.format!==vn?J!==null?k?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Ve.width,Ve.height,J,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ye,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,0,0,Ve.width,Ve.height,J,se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie,ye,Ve.width,Ve.height,0,J,se,Ve.data)}}}else{if(be=x.mipmaps,k&&ve){be.length>0&&fe++;const he=Pe(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ye,he.width,he.height)}for(let he=0;he<6;he++)if(ie){k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,_e[he].width,_e[he].height,J,se,_e[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ye,_e[he].width,_e[he].height,0,J,se,_e[he].data);for(let Ie=0;Ie<be.length;Ie++){const Ge=be[Ie].image[he].image;k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,Ge.width,Ge.height,J,se,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ye,Ge.width,Ge.height,0,J,se,Ge.data)}}else{k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,J,se,_e[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ye,J,se,_e[he]);for(let Ie=0;Ie<be.length;Ie++){const Ve=be[Ie];k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,0,0,J,se,Ve.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ie+1,ye,J,se,Ve.image[he])}}}h(x)&&f(n.TEXTURE_CUBE_MAP),U.__version=O.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Z(S,x,R,D,O,U){const q=o.convert(R.format,R.colorSpace),Y=o.convert(R.type),ae=y(R.internalFormat,q,Y,R.colorSpace),de=i.get(x),ie=i.get(R);if(ie.__renderTarget=x,!de.__hasExternalTextures){const _e=Math.max(1,x.width>>U),Ce=Math.max(1,x.height>>U);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,U,ae,_e,Ce,x.depth,0,q,Y,null):t.texImage2D(O,U,ae,_e,Ce,0,q,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ne(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,O,ie.__webglTexture,0,me(x)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,O,ie.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(S,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const D=x.depthTexture,O=D&&D.isDepthTexture?D.type:null,U=v(x.stencilBuffer,O),q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=me(x);ne(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,U,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,U,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,U,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,S)}else{const D=x.textures;for(let O=0;O<D.length;O++){const U=D[O],q=o.convert(U.format,U.colorSpace),Y=o.convert(U.type),ae=y(U.internalFormat,q,Y,U.colorSpace),de=me(x);R&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ae,x.width,x.height):ne(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=i.get(x.depthTexture);D.__renderTarget=x,(!D.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const O=D.__webglTexture,U=me(x);if(x.depthTexture.format===Ir)ne(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(x.depthTexture.format===Nr)ne(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Re(S){const x=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const D=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),D){const O=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,D.removeEventListener("dispose",O)};D.addEventListener("dispose",O),x.__depthDisposeCallback=O}x.__boundDepthTexture=D}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");const D=S.texture.mipmaps;D&&D.length>0?Ee(x.__webglFramebuffer[0],S):Ee(x.__webglFramebuffer,S)}else if(R){x.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[D]),x.__webglDepthbuffer[D]===void 0)x.__webglDepthbuffer[D]=n.createRenderbuffer(),ue(x.__webglDepthbuffer[D],S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer[D];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,U)}}else{const D=S.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ue(x.__webglDepthbuffer,S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,U)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(S,x,R){const D=i.get(S);x!==void 0&&Z(D.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Re(S)}function Fe(S){const x=S.texture,R=i.get(S),D=i.get(x);S.addEventListener("dispose",C);const O=S.textures,U=S.isWebGLCubeRenderTarget===!0,q=O.length>1;if(q||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=x.version,s.memory.textures++),U){R.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[Y]=[];for(let ae=0;ae<x.mipmaps.length;ae++)R.__webglFramebuffer[Y][ae]=n.createFramebuffer()}else R.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)R.__webglFramebuffer[Y]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(q)for(let Y=0,ae=O.length;Y<ae;Y++){const de=i.get(O[Y]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&ne(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Y=0;Y<O.length;Y++){const ae=O[Y];R.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[Y]);const de=o.convert(ae.format,ae.colorSpace),ie=o.convert(ae.type),_e=y(ae.internalFormat,de,ie,ae.colorSpace,S.isXRRenderTarget===!0),Ce=me(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,R.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Z(R.__webglFramebuffer[Y][ae],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae);else Z(R.__webglFramebuffer[Y],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let Y=0,ae=O.length;Y<ae;Y++){const de=O[Y],ie=i.get(de);let _e=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(_e=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ie.__webglTexture),Q(_e,de),Z(R.__webglFramebuffer,S,de,n.COLOR_ATTACHMENT0+Y,_e,0),h(de)&&f(_e)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Y=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,D.__webglTexture),Q(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Z(R.__webglFramebuffer[ae],S,x,n.COLOR_ATTACHMENT0,Y,ae);else Z(R.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,Y,0);h(x)&&f(Y),t.unbindTexture()}S.depthBuffer&&Re(S)}function Qe(S){const x=S.textures;for(let R=0,D=x.length;R<D;R++){const O=x[R];if(h(O)){const U=b(S),q=i.get(O).__webglTexture;t.bindTexture(U,q),f(U),t.unbindTexture()}}}const X=[],Be=[];function ee(S){if(S.samples>0){if(ne(S)===!1){const x=S.textures,R=S.width,D=S.height;let O=n.COLOR_BUFFER_BIT;const U=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=i.get(S),Y=x.length>1;if(Y)for(let de=0;de<x.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);const ae=S.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let de=0;de<x.length;de++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const ie=i.get(x[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,R,D,0,0,R,D,O,n.NEAREST),c===!0&&(X.length=0,Be.length=0,X.push(n.COLOR_ATTACHMENT0+de),S.depthBuffer&&S.resolveDepthBuffer===!1&&(X.push(U),Be.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let de=0;de<x.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const ie=i.get(x[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function me(S){return Math.min(r.maxSamples,S.samples)}function ne(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(S){const x=s.render.frame;d.get(S)!==x&&(d.set(S,x),S.update())}function Ae(S,x){const R=S.colorSpace,D=S.format,O=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==or&&R!==ri&&(ht.getTransfer(R)===yt?(D!==vn||O!==Nn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",R)),x}function Pe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(a.width=S.naturalWidth||S.width,a.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(a.width=S.displayWidth,a.height=S.displayHeight):(a.width=S.width,a.height=S.height),a}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ne}function Vv(n,e){function t(i,r=ri){let o;const s=ht.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Ys)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ks)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===au)return n.BYTE;if(i===su)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===js)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===uu)return n.ALPHA;if(i===du)return n.RGB;if(i===vn)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===fu)return n.RED;if(i===qs)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===Zs)return n.RG_INTEGER;if(i===Js)return n.RGBA_INTEGER;if(i===Co||i===wo||i===Po||i===Lo)if(s===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ss||i===ls||i===cs||i===us)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ss)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ls)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===us)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ds||i===fs||i===hs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ds||i===fs)return s===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===hs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ps||i===ms||i===gs||i===xs||i===vs||i===_s||i===bs||i===ys||i===Es||i===Ss||i===Ts||i===Ms||i===As||i===Rs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ps)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ms)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_s)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ys)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Es)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ss)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ts)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ms)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===As)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rs)return s===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cs||i===ws||i===Ps)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Cs)return s===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ws)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ps)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ls||i===Is||i===Ns||i===Os)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ls)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Is)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ns)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Os)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:Gv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xv extends Ri{constructor(e,t){super();const i=this;let r=null,o=1,s=null,l="local-floor",c=1,a=null,d=null,u=null,p=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",h=new Wv,f={},b=t.getContextAttributes();let y=null,v=null;const A=[],T=[],C=new Ze;let F=null;const E=new gn;E.viewport=new Ot;const M=new gn;M.viewport=new Ot;const w=[E,M],L=new cm;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=A[z];return W===void 0&&(W=new Da,A[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=A[z];return W===void 0&&(W=new Da,A[z]=W),W.getGripSpace()},this.getHand=function(z){let W=A[z];return W===void 0&&(W=new Da,A[z]=W),W.getHandSpace()};function B(z){const W=T.indexOf(z.inputSource);if(W===-1)return;const Z=A[W];Z!==void 0&&(Z.update(z.inputSource,z.frame,a||s),Z.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",j);for(let z=0;z<A.length;z++){const W=T[z];W!==null&&(T[z]=null,A[z].disconnect(W))}P=null,I=null,h.reset();for(const z in f)delete f[z];e.setRenderTarget(y),m=null,p=null,u=null,r=null,v=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||s},this.setReferenceSpace=function(z){a=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ue=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=b.stencil?Nr:Ir,ue=b.stencil?Lr:Ti);const Re={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};u=this.getBinding(),p=u.createProjectionLayer(Re),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Mi(p.textureWidth,p.textureHeight,{format:vn,type:Nn,depthTexture:new Au(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Z={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Mi(m.framebufferWidth,m.framebufferHeight,{format:vn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),a=null,s=await r.requestReferenceSpace(l),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(z){for(let W=0;W<z.removed.length;W++){const Z=z.removed[W],ue=T.indexOf(Z);ue>=0&&(T[ue]=null,A[ue].disconnect(Z))}for(let W=0;W<z.added.length;W++){const Z=z.added[W];let ue=T.indexOf(Z);if(ue===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(Z),ue=Re;break}else if(T[Re]===null){T[Re]=Z,ue=Re;break}if(ue===-1)break}const Ee=A[ue];Ee&&Ee.connect(Z)}}const H=new oe,G=new oe;function K(z,W,Z){H.setFromMatrixPosition(W.matrixWorld),G.setFromMatrixPosition(Z.matrixWorld);const ue=H.distanceTo(G),Ee=W.projectionMatrix.elements,Re=Z.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),Fe=Ee[14]/(Ee[10]+1),Qe=(Ee[9]+1)/Ee[5],X=(Ee[9]-1)/Ee[5],Be=(Ee[8]-1)/Ee[0],ee=(Re[8]+1)/Re[0],me=Oe*Be,ne=Oe*ee,Me=ue/(-Be+ee),Ae=Me*-Be;if(W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ae),z.translateZ(Me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Ee[10]===-1)z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Pe=Oe+Me,S=Fe+Me,x=me-Ae,R=ne+(ue-Ae),D=Qe*Fe/S*Pe,O=X*Fe/S*Pe;z.projectionMatrix.makePerspective(x,R,D,O,Pe,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ce(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let W=z.near,Z=z.far;h.texture!==null&&(h.depthNear>0&&(W=h.depthNear),h.depthFar>0&&(Z=h.depthFar)),L.near=M.near=E.near=W,L.far=M.far=E.far=Z,(P!==L.near||I!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,I=L.far),L.layers.mask=z.layers.mask|6,E.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const ue=z.parent,Ee=L.cameras;ce(L,ue);for(let Re=0;Re<Ee.length;Re++)ce(Ee[Re],ue);Ee.length===2?K(L,E,M):L.projectionMatrix.copy(E.projectionMatrix),Q(z,L,ue)};function Q(z,W,Z){Z===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(Z.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ds*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(L)},this.getCameraTexture=function(z){return f[z]};let te=null;function Se(z,W){if(d=W.getViewerPose(a||s),g=W,d!==null){const Z=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ue=!1;Z.length!==L.cameras.length&&(L.cameras.length=0,ue=!0);for(let Fe=0;Fe<Z.length;Fe++){const Qe=Z[Fe];let X=null;if(m!==null)X=m.getViewport(Qe);else{const ee=u.getViewSubImage(p,Qe);X=ee.viewport,Fe===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let Be=w[Fe];Be===void 0&&(Be=new gn,Be.layers.enable(Fe),Be.viewport=new Ot,w[Fe]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(X.x,X.y,X.width,X.height),Fe===0&&(L.matrix.copy(Be.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ue===!0&&L.cameras.push(Be)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Fe=u.getDepthInformation(Z[0]);Fe&&Fe.isValid&&Fe.texture&&h.init(Fe,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Fe=0;Fe<Z.length;Fe++){const Qe=Z[Fe].camera;if(Qe){let X=f[Qe];X||(X=new Ru,f[Qe]=X);const Be=u.getCameraImage(Qe);X.sourceTexture=Be}}}}for(let Z=0;Z<A.length;Z++){const ue=T[Z],Ee=A[Z];ue!==null&&Ee!==void 0&&Ee.update(ue,W,a||s)}te&&te(z,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const $=new Du;$.setAnimationLoop(Se),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}const _i=new Rn,jv=new Pt;function Yv(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,bu(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,b,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(h,f):f.isMeshToonMaterial?(o(h,f),u(h,f)):f.isMeshPhongMaterial?(o(h,f),d(h,f)):f.isMeshStandardMaterial?(o(h,f),p(h,f),f.isMeshPhysicalMaterial&&m(h,f,v)):f.isMeshMatcapMaterial?(o(h,f),g(h,f)):f.isMeshDepthMaterial?o(h,f):f.isMeshDistanceMaterial?(o(h,f),_(h,f)):f.isMeshNormalMaterial?o(h,f):f.isLineBasicMaterial?(s(h,f),f.isLineDashedMaterial&&l(h,f)):f.isPointsMaterial?c(h,f,b,y):f.isSpriteMaterial?a(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Kt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Kt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const b=e.get(f),y=b.envMap,v=b.envMapRotation;y&&(h.envMap.value=y,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(_i)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function s(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function l(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,b,y){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*b,h.scale.value=y*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function d(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function u(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function p(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,b){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function _(h,f){const b=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kv(n,e,t,i){let r={},o={},s=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const v=y.program;i.uniformBlockBinding(b,v)}function a(b,y){let v=r[b.id];v===void 0&&(g(b),v=d(b),r[b.id]=v,b.addEventListener("dispose",h));const A=y.program;i.updateUBOMapping(b,A);const T=e.render.frame;o[b.id]!==T&&(p(b),o[b.id]=T)}function d(b){const y=u();b.__bindingPointIndex=y;const v=n.createBuffer(),A=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let b=0;b<l;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const y=r[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,C=v.length;T<C;T++){const F=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,M=F.length;E<M;E++){const w=F[E];if(m(w,T,E,A)===!0){const L=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let B=0;B<P.length;B++){const V=P[B],j=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,L+I,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,I),I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,v,A){const T=b.value,C=y+"_"+v;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const F=A[C];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[C]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(b){const y=b.uniforms;let v=0;const A=16;for(let C=0,F=y.length;C<F;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,w=E.length;M<w;M++){const L=E[M],P=Array.isArray(L.value)?L.value:[L.value];for(let I=0,B=P.length;I<B;I++){const V=P[I],j=_(V),H=v%A,G=H%j.boundary,K=H+G;v+=G,K!==0&&A-K<j.storage&&(v+=A-K),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=j.storage}}}const T=v%A;return T>0&&(v+=A-T),b.__size=v,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",b),y}function h(b){const y=b.target;y.removeEventListener("dispose",h);const v=s.indexOf(y.__bindingPointIndex);s.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:a,dispose:f}}const qv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Gn=null;function $v(){return Gn===null&&(Gn=new tl(qv,32,32,$s,cr),Gn.minFilter=xn,Gn.magFilter=xn,Gn.wrapS=dn,Gn.wrapT=dn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Zv{constructor(e={}){const{canvas:t=Jh(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const g=new Set([Js,Zs,qs]),_=new Set([Nn,Ti,Pr,Lr,Ys,Ks]),h=new Uint32Array(4),f=new Int32Array(4);let b=null,y=null;const v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=Nt;let F=0,E=0,M=null,w=-1,L=null;const P=new Ot,I=new Ot;let B=null;const V=new rt(0);let j=0,H=t.width,G=t.height,K=1,ce=null,Q=null;const te=new Ot(0,0,H,G),Se=new Ot(0,0,H,G);let $=!1;const z=new nl;let W=!1,Z=!1;const ue=new Pt,Ee=new oe,Re=new Ot,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Qe(){return M===null?K:1}let X=i;function Be(N,re){return t.getContext(N,re)}try{const N={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ws}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const re="webgl2";if(X=Be(re,N),X===null)throw Be(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N("WebGLRenderer: "+N.message),N}let ee,me,ne,Me,Ae,Pe,S,x,R,D,O,U,q,Y,ae,de,ie,_e,Ce,J,se,ye,k,ve;function xe(){ee=new ox(X),ee.init(),ye=new Vv(X,ee),me=new $g(X,ee,e,ye),ne=new Bv(X,ee),me.reversedDepthBuffer&&p&&ne.buffers.depth.setReversed(!0),Me=new lx(X),Ae=new Av,Pe=new zv(X,ee,ne,Ae,me,ye,Me),S=new Jg(T),x=new rx(T),R=new fm(X),k=new Kg(X,R),D=new ax(X,R,Me,k),O=new ux(X,D,R,Me),Ce=new cx(X,me,Pe),de=new Zg(Ae),U=new Mv(T,S,x,ee,me,k,de),q=new Yv(T,Ae),Y=new Cv,ae=new Ov(ee),_e=new Yg(T,S,x,ne,O,m,c),ie=new Uv(T,O,me),ve=new Kv(X,Me,me,ne),J=new qg(X,ee,Me),se=new sx(X,ee,Me),Me.programs=U.programs,T.capabilities=me,T.extensions=ee,T.properties=Ae,T.renderLists=Y,T.shadowMap=ie,T.state=ne,T.info=Me}xe();const fe=new Xv(T,X);this.xr=fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(N){N!==void 0&&(K=N,this.setSize(H,G,!1))},this.getSize=function(N){return N.set(H,G)},this.setSize=function(N,re,pe=!0){if(fe.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,G=re,t.width=Math.floor(N*K),t.height=Math.floor(re*K),pe===!0&&(t.style.width=N+"px",t.style.height=re+"px"),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(H*K,G*K).floor()},this.setDrawingBufferSize=function(N,re,pe){H=N,G=re,K=pe,t.width=Math.floor(N*pe),t.height=Math.floor(re*pe),this.setViewport(0,0,N,re)},this.getCurrentViewport=function(N){return N.copy(P)},this.getViewport=function(N){return N.copy(te)},this.setViewport=function(N,re,pe,ge){N.isVector4?te.set(N.x,N.y,N.z,N.w):te.set(N,re,pe,ge),ne.viewport(P.copy(te).multiplyScalar(K).round())},this.getScissor=function(N){return N.copy(Se)},this.setScissor=function(N,re,pe,ge){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,re,pe,ge),ne.scissor(I.copy(Se).multiplyScalar(K).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(N){ne.setScissorTest($=N)},this.setOpaqueSort=function(N){ce=N},this.setTransparentSort=function(N){Q=N},this.getClearColor=function(N){return N.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(N=!0,re=!0,pe=!0){let ge=0;if(N){let le=!1;if(M!==null){const Le=M.texture.format;le=g.has(Le)}if(le){const Le=M.texture.type,Ue=_.has(Le),He=_e.getClearColor(),ze=_e.getClearAlpha(),et=He.r,tt=He.g,$e=He.b;Ue?(h[0]=et,h[1]=tt,h[2]=$e,h[3]=ze,X.clearBufferuiv(X.COLOR,0,h)):(f[0]=et,f[1]=tt,f[2]=$e,f[3]=ze,X.clearBufferiv(X.COLOR,0,f))}else ge|=X.COLOR_BUFFER_BIT}re&&(ge|=X.DEPTH_BUFFER_BIT),pe&&(ge|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),_e.dispose(),Y.dispose(),ae.dispose(),Ae.dispose(),S.dispose(),x.dispose(),O.dispose(),k.dispose(),ve.dispose(),U.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ye),fe.removeEventListener("sessionend",_t),Gt.stop()};function be(N){N.preventDefault(),Il("WebGLRenderer: Context Lost."),C=!0}function he(){Il("WebGLRenderer: Context Restored."),C=!1;const N=Me.autoReset,re=ie.enabled,pe=ie.autoUpdate,ge=ie.needsUpdate,le=ie.type;xe(),Me.autoReset=N,ie.enabled=re,ie.autoUpdate=pe,ie.needsUpdate=ge,ie.type=le}function Ie(N){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ve(N){const re=N.target;re.removeEventListener("dispose",Ve),Ge(re)}function Ge(N){we(N),Ae.remove(N)}function we(N){const re=Ae.get(N).programs;re!==void 0&&(re.forEach(function(pe){U.releaseProgram(pe)}),N.isShaderMaterial&&U.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,pe,ge,le,Le){re===null&&(re=Oe);const Ue=le.isMesh&&le.matrixWorld.determinant()<0,He=Qo(N,re,pe,ge,le);ne.setMaterial(ge,Ue);let ze=pe.index,et=1;if(ge.wireframe===!0){if(ze=D.getWireframeAttribute(pe),ze===void 0)return;et=2}const tt=pe.drawRange,$e=pe.attributes.position;let dt=tt.start*et,bt=(tt.start+tt.count)*et;Le!==null&&(dt=Math.max(dt,Le.start*et),bt=Math.min(bt,(Le.start+Le.count)*et)),ze!==null?(dt=Math.max(dt,0),bt=Math.min(bt,ze.count)):$e!=null&&(dt=Math.max(dt,0),bt=Math.min(bt,$e.count));const Lt=bt-dt;if(Lt<0||Lt===1/0)return;k.setup(le,ge,He,pe,ze);let It,St=J;if(ze!==null&&(It=R.get(ze),St=se,St.setIndex(It)),le.isMesh)ge.wireframe===!0?(ne.setLineWidth(ge.wireframeLinewidth*Qe()),St.setMode(X.LINES)):St.setMode(X.TRIANGLES);else if(le.isLine){let Je=ge.linewidth;Je===void 0&&(Je=1),ne.setLineWidth(Je*Qe()),le.isLineSegments?St.setMode(X.LINES):le.isLineLoop?St.setMode(X.LINE_LOOP):St.setMode(X.LINE_STRIP)}else le.isPoints?St.setMode(X.POINTS):le.isSprite&&St.setMode(X.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)Dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))St.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Je=le._multiDrawStarts,Rt=le._multiDrawCounts,mt=le._multiDrawCount,sn=ze?R.get(ze).bytesPerElement:1,Li=Ae.get(ge).currentProgram.getUniforms();for(let ln=0;ln<mt;ln++)Li.setValue(X,"_gl_DrawID",ln),St.render(Je[ln]/sn,Rt[ln])}else if(le.isInstancedMesh)St.renderInstances(dt,Lt,le.count);else if(pe.isInstancedBufferGeometry){const Je=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Rt=Math.min(pe.instanceCount,Je);St.renderInstances(dt,Lt,Rt)}else St.render(dt,Lt)};function ke(N,re,pe){N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,Pi(N,re,pe),N.side=Yn,N.needsUpdate=!0,Pi(N,re,pe),N.side=Tn):Pi(N,re,pe)}this.compile=function(N,re,pe=null){pe===null&&(pe=N),y=ae.get(pe),y.init(re),A.push(y),pe.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(y.pushLight(le),le.castShadow&&y.pushShadow(le))}),N!==pe&&N.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(y.pushLight(le),le.castShadow&&y.pushShadow(le))}),y.setupLights();const ge=new Set;return N.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Le=le.material;if(Le)if(Array.isArray(Le))for(let Ue=0;Ue<Le.length;Ue++){const He=Le[Ue];ke(He,pe,le),ge.add(He)}else ke(Le,pe,le),ge.add(Le)}),y=A.pop(),ge},this.compileAsync=function(N,re,pe=null){const ge=this.compile(N,re,pe);return new Promise(le=>{function Le(){if(ge.forEach(function(Ue){Ae.get(Ue).currentProgram.isReady()&&ge.delete(Ue)}),ge.size===0){le(N);return}setTimeout(Le,10)}ee.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ne=null;function We(N){Ne&&Ne(N)}function Ye(){Gt.stop()}function _t(){Gt.start()}const Gt=new Du;Gt.setAnimationLoop(We),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(N){Ne=N,fe.setAnimationLoop(N),N===null?Gt.stop():Gt.start()},fe.addEventListener("sessionstart",Ye),fe.addEventListener("sessionend",_t),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(re),re=fe.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,re,M),y=ae.get(N,A.length),y.init(re),A.push(y),ue.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),z.setFromProjectionMatrix(ue,Ln,re.reversedDepth),Z=this.localClippingEnabled,W=de.init(this.clippingPlanes,Z),b=Y.get(N,v.length),b.init(),v.push(b),fe.enabled===!0&&fe.isPresenting===!0){const Le=T.xr.getDepthSensingMesh();Le!==null&&en(Le,re,-1/0,T.sortObjects)}en(N,re,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(ce,Q),Fe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Fe&&_e.addToRenderList(b,N),this.info.render.frame++,W===!0&&de.beginShadows();const pe=y.state.shadowsArray;ie.render(pe,N,re),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const ge=b.opaque,le=b.transmissive;if(y.setupLights(),re.isArrayCamera){const Le=re.cameras;if(le.length>0)for(let Ue=0,He=Le.length;Ue<He;Ue++){const ze=Le[Ue];Yr(ge,le,N,ze)}Fe&&_e.render(N);for(let Ue=0,He=Le.length;Ue<He;Ue++){const ze=Le[Ue];qn(b,N,ze,ze.viewport)}}else le.length>0&&Yr(ge,le,N,re),Fe&&_e.render(N),qn(b,N,re);M!==null&&E===0&&(Pe.updateMultisampleRenderTarget(M),Pe.updateRenderTargetMipmap(M)),N.isScene===!0&&N.onAfterRender(T,N,re),k.resetDefaultState(),w=-1,L=null,A.pop(),A.length>0?(y=A[A.length-1],W===!0&&de.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function en(N,re,pe,ge){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||z.intersectsSprite(N)){ge&&Re.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ue);const Ue=O.update(N),He=N.material;He.visible&&b.push(N,Ue,He,pe,Re.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||z.intersectsObject(N))){const Ue=O.update(N),He=N.material;if(ge&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Re.copy(N.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Re.copy(Ue.boundingSphere.center)),Re.applyMatrix4(N.matrixWorld).applyMatrix4(ue)),Array.isArray(He)){const ze=Ue.groups;for(let et=0,tt=ze.length;et<tt;et++){const $e=ze[et],dt=He[$e.materialIndex];dt&&dt.visible&&b.push(N,Ue,dt,pe,Re.z,$e)}}else He.visible&&b.push(N,Ue,He,pe,Re.z,null)}}const Le=N.children;for(let Ue=0,He=Le.length;Ue<He;Ue++)en(Le[Ue],re,pe,ge)}function qn(N,re,pe,ge){const{opaque:le,transmissive:Le,transparent:Ue}=N;y.setupLightsView(pe),W===!0&&de.setGlobalState(T.clippingPlanes,pe),ge&&ne.viewport(P.copy(ge)),le.length>0&&wi(le,re,pe),Le.length>0&&wi(Le,re,pe),Ue.length>0&&wi(Ue,re,pe),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Yr(N,re,pe,ge){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ge.id]===void 0&&(y.state.transmissionRenderTarget[ge.id]=new Mi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?cr:Nn,minFilter:Si,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const Le=y.state.transmissionRenderTarget[ge.id],Ue=ge.viewport||P;Le.setSize(Ue.z*T.transmissionResolutionScale,Ue.w*T.transmissionResolutionScale);const He=T.getRenderTarget(),ze=T.getActiveCubeFace(),et=T.getActiveMipmapLevel();T.setRenderTarget(Le),T.getClearColor(V),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Fe&&_e.render(pe);const tt=T.toneMapping;T.toneMapping=li;const $e=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),y.setupLightsView(ge),W===!0&&de.setGlobalState(T.clippingPlanes,ge),wi(N,pe,ge),Pe.updateMultisampleRenderTarget(Le),Pe.updateRenderTargetMipmap(Le),ee.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let bt=0,Lt=re.length;bt<Lt;bt++){const It=re[bt],{object:St,geometry:Je,material:Rt,group:mt}=It;if(Rt.side===Tn&&St.layers.test(ge.layers)){const sn=Rt.side;Rt.side=Kt,Rt.needsUpdate=!0,Kr(St,pe,ge,Je,Rt,mt),Rt.side=sn,Rt.needsUpdate=!0,dt=!0}}dt===!0&&(Pe.updateMultisampleRenderTarget(Le),Pe.updateRenderTargetMipmap(Le))}T.setRenderTarget(He,ze,et),T.setClearColor(V,j),$e!==void 0&&(ge.viewport=$e),T.toneMapping=tt}function wi(N,re,pe){const ge=re.isScene===!0?re.overrideMaterial:null;for(let le=0,Le=N.length;le<Le;le++){const Ue=N[le],{object:He,geometry:ze,group:et}=Ue;let tt=Ue.material;tt.allowOverride===!0&&ge!==null&&(tt=ge),He.layers.test(pe.layers)&&Kr(He,re,pe,ze,tt,et)}}function Kr(N,re,pe,ge,le,Le){N.onBeforeRender(T,re,pe,ge,le,Le),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),le.onBeforeRender(T,re,pe,ge,N,Le),le.transparent===!0&&le.side===Tn&&le.forceSinglePass===!1?(le.side=Kt,le.needsUpdate=!0,T.renderBufferDirect(pe,re,ge,le,N,Le),le.side=Yn,le.needsUpdate=!0,T.renderBufferDirect(pe,re,ge,le,N,Le),le.side=Tn):T.renderBufferDirect(pe,re,ge,le,N,Le),N.onAfterRender(T,re,pe,ge,le,Le)}function Pi(N,re,pe){re.isScene!==!0&&(re=Oe);const ge=Ae.get(N),le=y.state.lights,Le=y.state.shadowsArray,Ue=le.state.version,He=U.getParameters(N,le.state,Le,re,pe),ze=U.getProgramCacheKey(He);let et=ge.programs;ge.environment=N.isMeshStandardMaterial?re.environment:null,ge.fog=re.fog,ge.envMap=(N.isMeshStandardMaterial?x:S).get(N.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&N.envMap===null?re.environmentRotation:N.envMapRotation,et===void 0&&(N.addEventListener("dispose",Ve),et=new Map,ge.programs=et);let tt=et.get(ze);if(tt!==void 0){if(ge.currentProgram===tt&&ge.lightsStateVersion===Ue)return $r(N,He),tt}else He.uniforms=U.getUniforms(N),N.onBeforeCompile(He,T),tt=U.acquireProgram(He,ze),et.set(ze,tt),ge.uniforms=He.uniforms;const $e=ge.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=de.uniform),$r(N,He),ge.needsLights=ta(N),ge.lightsStateVersion=Ue,ge.needsLights&&($e.ambientLightColor.value=le.state.ambient,$e.lightProbe.value=le.state.probe,$e.directionalLights.value=le.state.directional,$e.directionalLightShadows.value=le.state.directionalShadow,$e.spotLights.value=le.state.spot,$e.spotLightShadows.value=le.state.spotShadow,$e.rectAreaLights.value=le.state.rectArea,$e.ltc_1.value=le.state.rectAreaLTC1,$e.ltc_2.value=le.state.rectAreaLTC2,$e.pointLights.value=le.state.point,$e.pointLightShadows.value=le.state.pointShadow,$e.hemisphereLights.value=le.state.hemi,$e.directionalShadowMap.value=le.state.directionalShadowMap,$e.directionalShadowMatrix.value=le.state.directionalShadowMatrix,$e.spotShadowMap.value=le.state.spotShadowMap,$e.spotLightMatrix.value=le.state.spotLightMatrix,$e.spotLightMap.value=le.state.spotLightMap,$e.pointShadowMap.value=le.state.pointShadowMap,$e.pointShadowMatrix.value=le.state.pointShadowMatrix),ge.currentProgram=tt,ge.uniformsList=null,tt}function qr(N){if(N.uniformsList===null){const re=N.currentProgram.getUniforms();N.uniformsList=No.seqWithValue(re.seq,N.uniforms)}return N.uniformsList}function $r(N,re){const pe=Ae.get(N);pe.outputColorSpace=re.outputColorSpace,pe.batching=re.batching,pe.batchingColor=re.batchingColor,pe.instancing=re.instancing,pe.instancingColor=re.instancingColor,pe.instancingMorph=re.instancingMorph,pe.skinning=re.skinning,pe.morphTargets=re.morphTargets,pe.morphNormals=re.morphNormals,pe.morphColors=re.morphColors,pe.morphTargetsCount=re.morphTargetsCount,pe.numClippingPlanes=re.numClippingPlanes,pe.numIntersection=re.numClipIntersection,pe.vertexAlphas=re.vertexAlphas,pe.vertexTangents=re.vertexTangents,pe.toneMapping=re.toneMapping}function Qo(N,re,pe,ge,le){re.isScene!==!0&&(re=Oe),Pe.resetTextureUnits();const Le=re.fog,Ue=ge.isMeshStandardMaterial?re.environment:null,He=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:or,ze=(ge.isMeshStandardMaterial?x:S).get(ge.envMap||Ue),et=ge.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,tt=!!pe.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),$e=!!pe.morphAttributes.position,dt=!!pe.morphAttributes.normal,bt=!!pe.morphAttributes.color;let Lt=li;ge.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Lt=T.toneMapping);const It=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,St=It!==void 0?It.length:0,Je=Ae.get(ge),Rt=y.state.lights;if(W===!0&&(Z===!0||N!==L)){const Zt=N===L&&ge.id===w;de.setState(ge,N,Zt)}let mt=!1;ge.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Rt.state.version||Je.outputColorSpace!==He||le.isBatchedMesh&&Je.batching===!1||!le.isBatchedMesh&&Je.batching===!0||le.isBatchedMesh&&Je.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Je.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Je.instancing===!1||!le.isInstancedMesh&&Je.instancing===!0||le.isSkinnedMesh&&Je.skinning===!1||!le.isSkinnedMesh&&Je.skinning===!0||le.isInstancedMesh&&Je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Je.instancingMorph===!1&&le.morphTexture!==null||Je.envMap!==ze||ge.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==de.numPlanes||Je.numIntersection!==de.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==tt||Je.morphTargets!==$e||Je.morphNormals!==dt||Je.morphColors!==bt||Je.toneMapping!==Lt||Je.morphTargetsCount!==St)&&(mt=!0):(mt=!0,Je.__version=ge.version);let sn=Je.currentProgram;mt===!0&&(sn=Pi(ge,re,le));let Li=!1,ln=!1,fr=!1;const Ct=sn.getUniforms(),tn=Je.uniforms;if(ne.useProgram(sn.program)&&(Li=!0,ln=!0,fr=!0),ge.id!==w&&(w=ge.id,ln=!0),Li||L!==N){ne.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",N.projectionMatrix),Ct.setValue(X,"viewMatrix",N.matrixWorldInverse);const nn=Ct.map.cameraPosition;nn!==void 0&&nn.setValue(X,Ee.setFromMatrixPosition(N.matrixWorld)),me.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,ln=!0,fr=!0)}if(le.isSkinnedMesh){Ct.setOptional(X,le,"bindMatrix"),Ct.setOptional(X,le,"bindMatrixInverse");const Zt=le.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ct.setValue(X,"boneTexture",Zt.boneTexture,Pe))}le.isBatchedMesh&&(Ct.setOptional(X,le,"batchingTexture"),Ct.setValue(X,"batchingTexture",le._matricesTexture,Pe),Ct.setOptional(X,le,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",le._indirectTexture,Pe),Ct.setOptional(X,le,"batchingColorTexture"),le._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",le._colorsTexture,Pe));const pn=pe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ce.update(le,pe,sn),(ln||Je.receiveShadow!==le.receiveShadow)&&(Je.receiveShadow=le.receiveShadow,Ct.setValue(X,"receiveShadow",le.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(tn.envMap.value=ze,tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&re.environment!==null&&(tn.envMapIntensity.value=re.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=$v()),ln&&(Ct.setValue(X,"toneMappingExposure",T.toneMappingExposure),Je.needsLights&&ea(tn,fr),Le&&ge.fog===!0&&q.refreshFogUniforms(tn,Le),q.refreshMaterialUniforms(tn,ge,K,G,y.state.transmissionRenderTarget[N.id]),No.upload(X,qr(Je),tn,Pe)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(No.upload(X,qr(Je),tn,Pe),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&Ct.setValue(X,"center",le.center),Ct.setValue(X,"modelViewMatrix",le.modelViewMatrix),Ct.setValue(X,"normalMatrix",le.normalMatrix),Ct.setValue(X,"modelMatrix",le.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const Zt=ge.uniformsGroups;for(let nn=0,oa=Zt.length;nn<oa;nn++){const hi=Zt[nn];ve.update(hi,sn),ve.bind(hi,sn)}}return sn}function ea(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function ta(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(N,re,pe){const ge=Ae.get(N);ge.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),Ae.get(N.texture).__webglTexture=re,Ae.get(N.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:pe,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,re){const pe=Ae.get(N);pe.__webglFramebuffer=re,pe.__useDefaultFramebuffer=re===void 0};const na=X.createFramebuffer();this.setRenderTarget=function(N,re=0,pe=0){M=N,F=re,E=pe;let ge=!0,le=null,Le=!1,Ue=!1;if(N){const ze=Ae.get(N);if(ze.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(X.FRAMEBUFFER,null),ge=!1;else if(ze.__webglFramebuffer===void 0)Pe.setupRenderTarget(N);else if(ze.__hasExternalTextures)Pe.rebindTextures(N,Ae.get(N.texture).__webglTexture,Ae.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const $e=N.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&Ae.has($e)&&(N.width!==$e.image.width||N.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(N)}}const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const tt=Ae.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(tt[re])?le=tt[re][pe]:le=tt[re],Le=!0):N.samples>0&&Pe.useMultisampledRTT(N)===!1?le=Ae.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[pe]:le=tt,P.copy(N.viewport),I.copy(N.scissor),B=N.scissorTest}else P.copy(te).multiplyScalar(K).floor(),I.copy(Se).multiplyScalar(K).floor(),B=$;if(pe!==0&&(le=na),ne.bindFramebuffer(X.FRAMEBUFFER,le)&&ge&&ne.drawBuffers(N,le),ne.viewport(P),ne.scissor(I),ne.setScissorTest(B),Le){const ze=Ae.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze.__webglTexture,pe)}else if(Ue){const ze=re;for(let et=0;et<N.textures.length;et++){const tt=Ae.get(N.textures[et]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+et,tt.__webglTexture,pe,ze)}}else if(N!==null&&pe!==0){const ze=Ae.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ze.__webglTexture,pe)}w=-1},this.readRenderTargetPixels=function(N,re,pe,ge,le,Le,Ue,He=0){if(!(N&&N.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ae.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){ne.bindFramebuffer(X.FRAMEBUFFER,ze);try{const et=N.textures[He],tt=et.format,$e=et.type;if(!me.textureFormatReadable(tt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable($e)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-ge&&pe>=0&&pe<=N.height-le&&(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+He),X.readPixels(re,pe,ge,le,ye.convert(tt),ye.convert($e),Le))}finally{const et=M!==null?Ae.get(M).__webglFramebuffer:null;ne.bindFramebuffer(X.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(N,re,pe,ge,le,Le,Ue,He=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ae.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(re>=0&&re<=N.width-ge&&pe>=0&&pe<=N.height-le){ne.bindFramebuffer(X.FRAMEBUFFER,ze);const et=N.textures[He],tt=et.format,$e=et.type;if(!me.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.bufferData(X.PIXEL_PACK_BUFFER,Le.byteLength,X.STREAM_READ),N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+He),X.readPixels(re,pe,ge,le,ye.convert(tt),ye.convert($e),0);const bt=M!==null?Ae.get(M).__webglFramebuffer:null;ne.bindFramebuffer(X.FRAMEBUFFER,bt);const Lt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Qh(X,Lt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Le),X.deleteBuffer(dt),X.deleteSync(Lt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,re=null,pe=0){const ge=Math.pow(2,-pe),le=Math.floor(N.image.width*ge),Le=Math.floor(N.image.height*ge),Ue=re!==null?re.x:0,He=re!==null?re.y:0;Pe.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,pe,0,0,Ue,He,le,Le),ne.unbindTexture()};const ia=X.createFramebuffer(),ra=X.createFramebuffer();this.copyTextureToTexture=function(N,re,pe=null,ge=null,le=0,Le=null){Le===null&&(le!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=le,le=0):Le=0);let Ue,He,ze,et,tt,$e,dt,bt,Lt;const It=N.isCompressedTexture?N.mipmaps[Le]:N.image;if(pe!==null)Ue=pe.max.x-pe.min.x,He=pe.max.y-pe.min.y,ze=pe.isBox3?pe.max.z-pe.min.z:1,et=pe.min.x,tt=pe.min.y,$e=pe.isBox3?pe.min.z:0;else{const pn=Math.pow(2,-le);Ue=Math.floor(It.width*pn),He=Math.floor(It.height*pn),N.isDataArrayTexture?ze=It.depth:N.isData3DTexture?ze=Math.floor(It.depth*pn):ze=1,et=0,tt=0,$e=0}ge!==null?(dt=ge.x,bt=ge.y,Lt=ge.z):(dt=0,bt=0,Lt=0);const St=ye.convert(re.format),Je=ye.convert(re.type);let Rt;re.isData3DTexture?(Pe.setTexture3D(re,0),Rt=X.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(Pe.setTexture2DArray(re,0),Rt=X.TEXTURE_2D_ARRAY):(Pe.setTexture2D(re,0),Rt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment);const mt=X.getParameter(X.UNPACK_ROW_LENGTH),sn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Li=X.getParameter(X.UNPACK_SKIP_PIXELS),ln=X.getParameter(X.UNPACK_SKIP_ROWS),fr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,It.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,et),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,$e);const Ct=N.isDataArrayTexture||N.isData3DTexture,tn=re.isDataArrayTexture||re.isData3DTexture;if(N.isDepthTexture){const pn=Ae.get(N),Zt=Ae.get(re),nn=Ae.get(pn.__renderTarget),oa=Ae.get(Zt.__renderTarget);ne.bindFramebuffer(X.READ_FRAMEBUFFER,nn.__webglFramebuffer),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let hi=0;hi<ze;hi++)Ct&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,le,$e+hi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ae.get(re).__webglTexture,Le,Lt+hi)),X.blitFramebuffer(et,tt,Ue,He,dt,bt,Ue,He,X.DEPTH_BUFFER_BIT,X.NEAREST);ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(le!==0||N.isRenderTargetTexture||Ae.has(N)){const pn=Ae.get(N),Zt=Ae.get(re);ne.bindFramebuffer(X.READ_FRAMEBUFFER,ia),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,ra);for(let nn=0;nn<ze;nn++)Ct?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pn.__webglTexture,le,$e+nn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pn.__webglTexture,le),tn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Zt.__webglTexture,Le,Lt+nn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Zt.__webglTexture,Le),le!==0?X.blitFramebuffer(et,tt,Ue,He,dt,bt,Ue,He,X.COLOR_BUFFER_BIT,X.NEAREST):tn?X.copyTexSubImage3D(Rt,Le,dt,bt,Lt+nn,et,tt,Ue,He):X.copyTexSubImage2D(Rt,Le,dt,bt,et,tt,Ue,He);ne.bindFramebuffer(X.READ_FRAMEBUFFER,null),ne.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else tn?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(Rt,Le,dt,bt,Lt,Ue,He,ze,St,Je,It.data):re.isCompressedArrayTexture?X.compressedTexSubImage3D(Rt,Le,dt,bt,Lt,Ue,He,ze,St,It.data):X.texSubImage3D(Rt,Le,dt,bt,Lt,Ue,He,ze,St,Je,It):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Le,dt,bt,Ue,He,St,Je,It.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Le,dt,bt,It.width,It.height,St,It.data):X.texSubImage2D(X.TEXTURE_2D,Le,dt,bt,Ue,He,St,Je,It);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,sn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Li),X.pixelStorei(X.UNPACK_SKIP_ROWS,ln),X.pixelStorei(X.UNPACK_SKIP_IMAGES,fr),Le===0&&re.generateMipmaps&&X.generateMipmap(Rt),ne.unbindTexture()},this.initRenderTarget=function(N){Ae.get(N).__webglFramebuffer===void 0&&Pe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Pe.setTextureCube(N,0):N.isData3DTexture?Pe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Pe.setTexture2DArray(N,0):Pe.setTexture2D(N,0),ne.unbindTexture()},this.resetState=function(){F=0,E=0,M=null,ne.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Lc={type:"change"},ol={type:"start"},zu={type:"end"},Mo=new Ho,Ic=new ni,Jv=Math.cos(70*tp.DEG2RAD),Bt=new oe,on=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xa=1e-6;class Qv extends um{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new oe,this.cursor=new oe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new oe,this._lastQuaternion=new ui,this._lastTargetPosition=new oe,this._quat=new ui().setFromUnitVectors(e.up,new oe(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new oe,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new oe,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t_.bind(this),this._onPointerDown=e_.bind(this),this._onPointerUp=n_.bind(this),this._onContextMenu=c_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=a_.bind(this),this._onTouchStart=s_.bind(this),this._onTouchMove=l_.bind(this),this._onMouseDown=i_.bind(this),this._onMouseMove=r_.bind(this),this._interceptControlDown=u_.bind(this),this._interceptControlUp=d_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lc),this.update(),this.state=Et.NONE}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const l=Bt.length();s=this._clampDistance(l*this._scale);const c=l-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const l=new oe(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const a=new oe(this._mouse.x,this._mouse.y,0);a.unproject(this.object),this.object.position.sub(a).add(l),this.object.updateMatrixWorld(),s=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<Jv?this.object.lookAt(this.target):(Ic.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(Ic,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xa||this._lastTargetPosition.distanceToSquared(this.target)>Xa?(this.dispatchEvent(Lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let o=Bt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,l=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(s,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function e_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function t_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function n_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=Et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(ol)}function r_(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function o_(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(ol),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zu))}function a_(n){this.enabled!==!1&&this._handleKeyDown(n)}function s_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(ol)}function l_(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function c_(n){this.enabled!==!1&&n.preventDefault()}function u_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class f_ extends Pn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=new Iu(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{t(o.parse(l))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(a){const d=new DataView(a),u=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*u===d.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,d,_))return!1;return!0}function i(a,d,u){for(let p=0,m=a.length;p<m;p++)if(a[p]!==d.getUint8(u+p))return!1;return!0}function r(a){const d=new DataView(a),u=d.getUint32(80,!0);let p,m,g,_=!1,h,f,b,y,v;for(let w=0;w<70;w++)d.getUint32(w,!1)==1129270351&&d.getUint8(w+4)==82&&d.getUint8(w+5)==61&&(_=!0,h=new Float32Array(u*3*3),f=d.getUint8(w+6)/255,b=d.getUint8(w+7)/255,y=d.getUint8(w+8)/255,v=d.getUint8(w+9)/255);const A=84,T=12*4+2,C=new kt,F=new Float32Array(u*3*3),E=new Float32Array(u*3*3),M=new rt;for(let w=0;w<u;w++){const L=A+w*T,P=d.getFloat32(L,!0),I=d.getFloat32(L+4,!0),B=d.getFloat32(L+8,!0);if(_){const V=d.getUint16(L+48,!0);V&32768?(p=f,m=b,g=y):(p=(V&31)/31,m=(V>>5&31)/31,g=(V>>10&31)/31)}for(let V=1;V<=3;V++){const j=L+V*12,H=w*3*3+(V-1)*3;F[H]=d.getFloat32(j,!0),F[H+1]=d.getFloat32(j+4,!0),F[H+2]=d.getFloat32(j+8,!0),E[H]=P,E[H+1]=I,E[H+2]=B,_&&(M.setRGB(p,m,g,Nt),h[H]=M.r,h[H+1]=M.g,h[H+2]=M.b)}}return C.setAttribute("position",new an(F,3)),C.setAttribute("normal",new an(E,3)),_&&(C.setAttribute("color",new an(h,3)),C.hasColors=!0,C.alpha=v),C}function o(a){const d=new kt,u=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,h=new RegExp("vertex"+_+_+_,"g"),f=new RegExp("normal"+_+_+_,"g"),b=[],y=[],v=[],A=new oe;let T,C=0,F=0,E=0;for(;(T=u.exec(a))!==null;){F=E;const M=T[0],w=(T=m.exec(M))!==null?T[1]:"";for(v.push(w);(T=p.exec(M))!==null;){let I=0,B=0;const V=T[0];for(;(T=f.exec(V))!==null;)A.x=parseFloat(T[1]),A.y=parseFloat(T[2]),A.z=parseFloat(T[3]),B++;for(;(T=h.exec(V))!==null;)b.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),y.push(A.x,A.y,A.z),I++,E++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const L=F,P=E-F;d.userData.groupNames=v,d.addGroup(L,P,C),C++}return d.setAttribute("position",new ct(b,3)),d.setAttribute("normal",new ct(y,3)),d}function s(a){return typeof a!="string"?new TextDecoder().decode(a):a}function l(a){if(typeof a=="string"){const d=new Uint8Array(a.length);for(let u=0;u<a.length;u++)d[u]=a.charCodeAt(u)&255;return d.buffer||d}else return a}const c=l(e);return t(c)?r(c):o(s(e))}}/*! chevrotain - v9.0.1 */var at=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Vu=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),xt=at((n,e)=>{var t=n&&n.__spreadArray||function(ee,me){for(var ne=0,Me=me.length,Ae=ee.length;ne<Me;ne++,Ae++)ee[Ae]=me[ne];return ee};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(ee){return ee&&ee.length===0}n.isEmpty=i;function r(ee){return ee==null?[]:Object.keys(ee)}n.keys=r;function o(ee){for(var me=[],ne=Object.keys(ee),Me=0;Me<ne.length;Me++)me.push(ee[ne[Me]]);return me}n.values=o;function s(ee,me){for(var ne=[],Me=r(ee),Ae=0;Ae<Me.length;Ae++){var Pe=Me[Ae];ne.push(me.call(null,ee[Pe],Pe))}return ne}n.mapValues=s;function l(ee,me){for(var ne=[],Me=0;Me<ee.length;Me++)ne.push(me.call(null,ee[Me],Me));return ne}n.map=l;function c(ee){for(var me=[],ne=0;ne<ee.length;ne++){var Me=ee[ne];Array.isArray(Me)?me=me.concat(c(Me)):me.push(Me)}return me}n.flatten=c;function a(ee){return i(ee)?void 0:ee[0]}n.first=a;function d(ee){var me=ee&&ee.length;return me?ee[me-1]:void 0}n.last=d;function u(ee,me){if(Array.isArray(ee))for(var ne=0;ne<ee.length;ne++)me.call(null,ee[ne],ne);else if(V(ee))for(var Me=r(ee),ne=0;ne<Me.length;ne++){var Ae=Me[ne],Pe=ee[Ae];me.call(null,Pe,Ae)}else throw Error("non exhaustive match")}n.forEach=u;function p(ee){return typeof ee=="string"}n.isString=p;function m(ee){return ee===void 0}n.isUndefined=m;function g(ee){return ee instanceof Function}n.isFunction=g;function _(ee,me){return me===void 0&&(me=1),ee.slice(me,ee.length)}n.drop=_;function h(ee,me){return me===void 0&&(me=1),ee.slice(0,ee.length-me)}n.dropRight=h;function f(ee,me){var ne=[];if(Array.isArray(ee))for(var Me=0;Me<ee.length;Me++){var Ae=ee[Me];me.call(null,Ae)&&ne.push(Ae)}return ne}n.filter=f;function b(ee,me){return f(ee,function(ne){return!me(ne)})}n.reject=b;function y(ee,me){for(var ne=Object.keys(ee),Me={},Ae=0;Ae<ne.length;Ae++){var Pe=ne[Ae],S=ee[Pe];me(S)&&(Me[Pe]=S)}return Me}n.pick=y;function v(ee,me){return V(ee)?ee.hasOwnProperty(me):!1}n.has=v;function A(ee,me){return F(ee,function(ne){return ne===me})!==void 0}n.contains=A;function T(ee){for(var me=[],ne=0;ne<ee.length;ne++)me.push(ee[ne]);return me}n.cloneArr=T;function C(ee){var me={};for(var ne in ee)Object.prototype.hasOwnProperty.call(ee,ne)&&(me[ne]=ee[ne]);return me}n.cloneObj=C;function F(ee,me){for(var ne=0;ne<ee.length;ne++){var Me=ee[ne];if(me.call(null,Me))return Me}}n.find=F;function E(ee,me){for(var ne=[],Me=0;Me<ee.length;Me++){var Ae=ee[Me];me.call(null,Ae)&&ne.push(Ae)}return ne}n.findAll=E;function M(ee,me,ne){for(var Me=Array.isArray(ee),Ae=Me?ee:o(ee),Pe=Me?[]:r(ee),S=ne,x=0;x<Ae.length;x++)S=me.call(null,S,Ae[x],Me?x:Pe[x]);return S}n.reduce=M;function w(ee){return b(ee,function(me){return me==null})}n.compact=w;function L(ee,me){me===void 0&&(me=function(Me){return Me});var ne=[];return M(ee,function(Me,Ae){var Pe=me(Ae);return A(ne,Pe)?Me:(ne.push(Pe),Me.concat(Ae))},[])}n.uniq=L;function P(ee){for(var me=[],ne=1;ne<arguments.length;ne++)me[ne-1]=arguments[ne];var Me=[null],Ae=Me.concat(me);return Function.bind.apply(ee,Ae)}n.partial=P;function I(ee){return Array.isArray(ee)}n.isArray=I;function B(ee){return ee instanceof RegExp}n.isRegExp=B;function V(ee){return ee instanceof Object}n.isObject=V;function j(ee,me){for(var ne=0;ne<ee.length;ne++)if(!me(ee[ne],ne))return!1;return!0}n.every=j;function H(ee,me){return b(ee,function(ne){return A(me,ne)})}n.difference=H;function G(ee,me){for(var ne=0;ne<ee.length;ne++)if(me(ee[ne]))return!0;return!1}n.some=G;function K(ee,me){for(var ne=0;ne<ee.length;ne++)if(ee[ne]===me)return ne;return-1}n.indexOf=K;function ce(ee,me){var ne=T(ee);return ne.sort(function(Me,Ae){return me(Me)-me(Ae)}),ne}n.sortBy=ce;function Q(ee,me){if(ee.length!==me.length)throw Error("can't zipObject with different number of keys and values!");for(var ne={},Me=0;Me<ee.length;Me++)ne[ee[Me]]=me[Me];return ne}n.zipObject=Q;function te(ee){for(var me=[],ne=1;ne<arguments.length;ne++)me[ne-1]=arguments[ne];for(var Me=0;Me<me.length;Me++)for(var Ae=me[Me],Pe=r(Ae),S=0;S<Pe.length;S++){var x=Pe[S];ee[x]=Ae[x]}return ee}n.assign=te;function Se(ee){for(var me=[],ne=1;ne<arguments.length;ne++)me[ne-1]=arguments[ne];for(var Me=0;Me<me.length;Me++)for(var Ae=me[Me],Pe=r(Ae),S=0;S<Pe.length;S++){var x=Pe[S];v(ee,x)||(ee[x]=Ae[x])}return ee}n.assignNoOverwrite=Se;function $(){for(var ee=[],me=0;me<arguments.length;me++)ee[me]=arguments[me];return Se.apply(void 0,t([{}],ee))}n.defaults=$;function z(ee,me){var ne={};return u(ee,function(Me){var Ae=me(Me),Pe=ne[Ae];Pe?Pe.push(Me):ne[Ae]=[Me]}),ne}n.groupBy=z;function W(ee,me){for(var ne=C(ee),Me=r(me),Ae=0;Ae<Me.length;Ae++){var Pe=Me[Ae],S=me[Pe];ne[Pe]=S}return ne}n.merge=W;function Z(){}n.NOOP=Z;function ue(ee){return ee}n.IDENTITY=ue;function Ee(ee){for(var me=[],ne=0;ne<ee.length;ne++){var Me=ee[ne];me.push(Me!==void 0?Me:void 0)}return me}n.packArray=Ee;function Re(ee){console&&console.error&&console.error("Error: "+ee)}n.PRINT_ERROR=Re;function Oe(ee){console&&console.warn&&console.warn("Warning: "+ee)}n.PRINT_WARNING=Oe;function Fe(){return typeof Map=="function"}n.isES2015MapSupported=Fe;function Qe(ee){return ee[ee.length-1]}n.peek=Qe;function X(ee){var me=new Date().getTime(),ne=ee(),Me=new Date().getTime(),Ae=Me-me;return{time:Ae,value:ne}}n.timer=X;function Be(ee){function me(){}me.prototype=ee;var ne=new me;function Me(){return typeof ne.bar}return Me(),Me(),ee}n.toFastProperties=Be}),al=at((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(h){this.idx=h.idx,this.input=h.input,this.groupIdx=h.groupIdx},t.prototype.pattern=function(h){this.idx=0,this.input=h,this.groupIdx=0,this.consumeChar("/");var f=this.disjunction();this.consumeChar("/");for(var b={type:"Flags",loc:{begin:this.idx,end:h.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(b,"global");break;case"i":c(b,"ignoreCase");break;case"m":c(b,"multiLine");break;case"u":c(b,"unicode");break;case"y":c(b,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:b,value:f,loc:this.loc(0)}},t.prototype.disjunction=function(){var h=[],f=this.idx;for(h.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),h.push(this.alternative());return{type:"Disjunction",value:h,loc:this.loc(f)}},t.prototype.alternative=function(){for(var h=[],f=this.idx;this.isTerm();)h.push(this.term());return{type:"Alternative",value:h,loc:this.loc(f)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var h=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(h)};case"$":return{type:"EndAnchor",loc:this.loc(h)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(h)};case"B":return{type:"NonWordBoundary",loc:this.loc(h)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var f;switch(this.popChar()){case"=":f="Lookahead";break;case"!":f="NegativeLookahead";break}a(f);var b=this.disjunction();return this.consumeChar(")"),{type:f,value:b,loc:this.loc(h)}}d()},t.prototype.quantifier=function(h){var f,b=this.idx;switch(this.popChar()){case"*":f={atLeast:0,atMost:1/0};break;case"+":f={atLeast:1,atMost:1/0};break;case"?":f={atLeast:0,atMost:1};break;case"{":var y=this.integerIncludingZero();switch(this.popChar()){case"}":f={atLeast:y,atMost:y};break;case",":var v;this.isDigit()?(v=this.integerIncludingZero(),f={atLeast:y,atMost:v}):f={atLeast:y,atMost:1/0},this.consumeChar("}");break}if(h===!0&&f===void 0)return;a(f);break}if(!(h===!0&&f===void 0))return a(f),this.peekChar(0)==="?"?(this.consumeChar("?"),f.greedy=!1):f.greedy=!0,f.type="Quantifier",f.loc=this.loc(b),f},t.prototype.atom=function(){var h,f=this.idx;switch(this.peekChar()){case".":h=this.dotAll();break;case"\\":h=this.atomEscape();break;case"[":h=this.characterClass();break;case"(":h=this.group();break}return h===void 0&&this.isPatternCharacter()&&(h=this.patternCharacter()),a(h),h.loc=this.loc(f),this.isQuantifier()&&(h.quantifier=this.quantifier()),h},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var h=this.positiveInteger();return{type:"GroupBackReference",value:h}},t.prototype.characterClassEscape=function(){var h,f=!1;switch(this.popChar()){case"d":h=p;break;case"D":h=p,f=!0;break;case"s":h=g;break;case"S":h=g,f=!0;break;case"w":h=m;break;case"W":h=m,f=!0;break}return a(h),{type:"Set",value:h,complement:f}},t.prototype.controlEscapeAtom=function(){var h;switch(this.popChar()){case"f":h=s("\f");break;case"n":h=s(`
`);break;case"r":h=s("\r");break;case"t":h=s("	");break;case"v":h=s("\v");break}return a(h),{type:"Character",value:h}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var h=this.popChar();if(/[a-zA-Z]/.test(h)===!1)throw Error("Invalid ");var f=h.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:f}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var h=this.popChar();return{type:"Character",value:s(h)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var h=this.popChar();return{type:"Character",value:s(h)}}},t.prototype.characterClass=function(){var h=[],f=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),f=!0);this.isClassAtom();){var b=this.classAtom(),y=b.type==="Character";if(y&&this.isRangeDash()){this.consumeChar("-");var v=this.classAtom(),A=v.type==="Character";if(A){if(v.value<b.value)throw Error("Range out of order in character class");h.push({from:b.value,to:v.value})}else l(b.value,h),h.push(s("-")),l(v.value,h)}else l(b.value,h)}return this.consumeChar("]"),{type:"Set",complement:f,value:h}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var h=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),h=!1;break;default:this.groupIdx++;break}var f=this.disjunction();this.consumeChar(")");var b={type:"Group",capturing:h,value:f};return h&&(b.idx=this.groupIdx),b},t.prototype.positiveInteger=function(){var h=this.popChar();if(o.test(h)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.integerIncludingZero=function(){var h=this.popChar();if(r.test(h)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.patternCharacter=function(){var h=this.popChar();switch(h){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(h)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(h){switch(h===void 0&&(h=0),this.peekChar(h)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var h=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(h)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(h){for(var f="",b=0;b<h;b++){var y=this.popChar();if(i.test(y)===!1)throw Error("Expecting a HexDecimal digits");f+=y}var v=parseInt(f,16);return{type:"Character",value:v}},t.prototype.peekChar=function(h){return h===void 0&&(h=0),this.input[this.idx+h]},t.prototype.popChar=function(){var h=this.peekChar(0);return this.consumeChar(),h},t.prototype.consumeChar=function(h){if(h!==void 0&&this.input[this.idx]!==h)throw Error("Expected: '"+h+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(h){return{begin:h,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(h){return h.charCodeAt(0)}function l(h,f){h.length!==void 0?h.forEach(function(b){f.push(b)}):f.push(h)}function c(h,f){if(h[f]===!0)throw"duplicate flag "+f;h[f]=!0}function a(h){if(h===void 0)throw Error("Internal Error - Should never get here!")}function d(){throw Error("Internal Error - Should never get here!")}var u,p=[];for(u=s("0");u<=s("9");u++)p.push(u);var m=[s("_")].concat(p);for(u=s("a");u<=s("z");u++)m.push(u);for(u=s("A");u<=s("Z");u++)m.push(u);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function _(){}return _.prototype.visitChildren=function(h){for(var f in h){var b=h[f];h.hasOwnProperty(f)&&(b.type!==void 0?this.visit(b):Array.isArray(b)&&b.forEach(function(y){this.visit(y)},this))}},_.prototype.visit=function(h){switch(h.type){case"Pattern":this.visitPattern(h);break;case"Flags":this.visitFlags(h);break;case"Disjunction":this.visitDisjunction(h);break;case"Alternative":this.visitAlternative(h);break;case"StartAnchor":this.visitStartAnchor(h);break;case"EndAnchor":this.visitEndAnchor(h);break;case"WordBoundary":this.visitWordBoundary(h);break;case"NonWordBoundary":this.visitNonWordBoundary(h);break;case"Lookahead":this.visitLookahead(h);break;case"NegativeLookahead":this.visitNegativeLookahead(h);break;case"Character":this.visitCharacter(h);break;case"Set":this.visitSet(h);break;case"Group":this.visitGroup(h);break;case"GroupBackReference":this.visitGroupBackReference(h);break;case"Quantifier":this.visitQuantifier(h);break}this.visitChildren(h)},_.prototype.visitPattern=function(h){},_.prototype.visitFlags=function(h){},_.prototype.visitDisjunction=function(h){},_.prototype.visitAlternative=function(h){},_.prototype.visitStartAnchor=function(h){},_.prototype.visitEndAnchor=function(h){},_.prototype.visitWordBoundary=function(h){},_.prototype.visitNonWordBoundary=function(h){},_.prototype.visitLookahead=function(h){},_.prototype.visitNegativeLookahead=function(h){},_.prototype.visitCharacter=function(h){},_.prototype.visitSet=function(h){},_.prototype.visitGroup=function(h){},_.prototype.visitGroupBackReference=function(h){},_.prototype.visitQuantifier=function(h){},{RegExpParser:t,BaseRegExpVisitor:_,VERSION:"0.5.0"}})}),sl=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=al(),t={},i=new e.RegExpParser;function r(s){var l=s.toString();if(t.hasOwnProperty(l))return t[l];var c=i.pattern(l);return t[l]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),h_=at(n=>{var e=n&&n.__extends||function(){var _=function(h,f){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var v in y)Object.prototype.hasOwnProperty.call(y,v)&&(b[v]=y[v])},_(h,f)};return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");_(h,f);function b(){this.constructor=h}h.prototype=f===null?Object.create(f):(b.prototype=f.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=al(),i=xt(),r=sl(),o=Gu(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function l(_,h){h===void 0&&(h=!1);try{var f=r.getRegExpAst(_),b=c(f.value,{},f.flags.ignoreCase);return b}catch(v){if(v.message===s)h&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+_.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var y="";h&&(y=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+_.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+y)}}return[]}n.getOptimizedStartCodesIndices=l;function c(_,h,f){switch(_.type){case"Disjunction":for(var b=0;b<_.value.length;b++)c(_.value[b],h,f);break;case"Alternative":for(var y=_.value,b=0;b<y.length;b++){var v=y[b];switch(v.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var A=v;switch(A.type){case"Character":a(A.value,h,f);break;case"Set":if(A.complement===!0)throw Error(s);i.forEach(A.value,function(F){if(typeof F=="number")a(F,h,f);else{var E=F;if(f===!0)for(var M=E.from;M<=E.to;M++)a(M,h,f);else{for(var M=E.from;M<=E.to&&M<o.minOptimizationVal;M++)a(M,h,f);if(E.to>=o.minOptimizationVal)for(var w=E.from>=o.minOptimizationVal?E.from:o.minOptimizationVal,L=E.to,P=o.charCodeToOptimizedIndex(w),I=o.charCodeToOptimizedIndex(L),B=P;B<=I;B++)h[B]=B}}});break;case"Group":c(A.value,h,f);break;default:throw Error("Non Exhaustive Match")}var T=A.quantifier!==void 0&&A.quantifier.atLeast===0;if(A.type==="Group"&&p(A)===!1||A.type!=="Group"&&T===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(h)}n.firstCharOptimizedIndices=c;function a(_,h,f){var b=o.charCodeToOptimizedIndex(_);h[b]=b,f===!0&&d(_,h)}function d(_,h){var f=String.fromCharCode(_),b=f.toUpperCase();if(b!==f){var y=o.charCodeToOptimizedIndex(b.charCodeAt(0));h[y]=y}else{var v=f.toLowerCase();if(v!==f){var y=o.charCodeToOptimizedIndex(v.charCodeAt(0));h[y]=y}}}function u(_,h){return i.find(_.value,function(f){if(typeof f=="number")return i.contains(h,f);var b=f;return i.find(h,function(y){return b.from<=y&&y<=b.to})!==void 0})}function p(_){return _.quantifier&&_.quantifier.atLeast===0?!0:_.value?i.isArray(_.value)?i.every(_.value,p):p(_.value):!1}var m=function(_){e(h,_);function h(f){var b=_.call(this)||this;return b.targetCharCodes=f,b.found=!1,b}return h.prototype.visitChildren=function(f){if(this.found!==!0){switch(f.type){case"Lookahead":this.visitLookahead(f);return;case"NegativeLookahead":this.visitNegativeLookahead(f);return}_.prototype.visitChildren.call(this,f)}},h.prototype.visitCharacter=function(f){i.contains(this.targetCharCodes,f.value)&&(this.found=!0)},h.prototype.visitSet=function(f){f.complement?u(f,this.targetCharCodes)===void 0&&(this.found=!0):u(f,this.targetCharCodes)!==void 0&&(this.found=!0)},h}(t.BaseRegExpVisitor);function g(_,h){if(h instanceof RegExp){var f=r.getRegExpAst(h),b=new m(_);return b.visit(f),b.found}else return i.find(h,function(y){return i.contains(_,y.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),Gu=at(n=>{var e=n&&n.__extends||function(){var $=function(z,W){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(Z,ue){Z.__proto__=ue}||function(Z,ue){for(var Ee in ue)Object.prototype.hasOwnProperty.call(ue,Ee)&&(Z[Ee]=ue[Ee])},$(z,W)};return function(z,W){if(typeof W!="function"&&W!==null)throw new TypeError("Class extends value "+String(W)+" is not a constructor or null");$(z,W);function Z(){this.constructor=z}z.prototype=W===null?Object.create(W):(Z.prototype=W.prototype,new Z)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=al(),i=Ko(),r=xt(),o=h_(),s=sl(),l="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function a(){n.SUPPORT_STICKY=!0}n.enableSticky=a;function d($,z){z=r.defaults(z,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(S,x){return x()}});var W=z.tracer;W("initCharCodeToOptimizedIndexMap",function(){Se()});var Z;W("Reject Lexer.NA",function(){Z=r.reject($,function(S){return S[l]===i.Lexer.NA})});var ue=!1,Ee;W("Transform Patterns",function(){ue=!1,Ee=r.map(Z,function(S){var x=S[l];if(r.isRegExp(x)){var R=x.source;return R.length===1&&R!=="^"&&R!=="$"&&R!=="."&&!x.ignoreCase?R:R.length===2&&R[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],R[1])?R[1]:z.useSticky?L(x):w(x)}else{if(r.isFunction(x))return ue=!0,{exec:x};if(r.has(x,"exec"))return ue=!0,x;if(typeof x=="string"){if(x.length===1)return x;var D=x.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),O=new RegExp(D);return z.useSticky?L(O):w(O)}else throw Error("non exhaustive match")}})});var Re,Oe,Fe,Qe,X;W("misc mapping",function(){Re=r.map(Z,function(S){return S.tokenTypeIdx}),Oe=r.map(Z,function(S){var x=S.GROUP;if(x!==i.Lexer.SKIPPED){if(r.isString(x))return x;if(r.isUndefined(x))return!1;throw Error("non exhaustive match")}}),Fe=r.map(Z,function(S){var x=S.LONGER_ALT;if(x){var R=r.indexOf(Z,x);return R}}),Qe=r.map(Z,function(S){return S.PUSH_MODE}),X=r.map(Z,function(S){return r.has(S,"POP_MODE")})});var Be;W("Line Terminator Handling",function(){var S=K(z.lineTerminatorCharacters);Be=r.map(Z,function(x){return!1}),z.positionTracking!=="onlyOffset"&&(Be=r.map(Z,function(x){if(r.has(x,"LINE_BREAKS"))return x.LINE_BREAKS;if(H(x,S)===!1)return o.canMatchCharCode(S,x.PATTERN)}))});var ee,me,ne,Me;W("Misc Mapping #2",function(){ee=r.map(Z,V),me=r.map(Ee,j),ne=r.reduce(Z,function(S,x){var R=x.GROUP;return r.isString(R)&&R!==i.Lexer.SKIPPED&&(S[R]=[]),S},{}),Me=r.map(Ee,function(S,x){return{pattern:Ee[x],longerAlt:Fe[x],canLineTerminator:Be[x],isCustom:ee[x],short:me[x],group:Oe[x],push:Qe[x],pop:X[x],tokenTypeIdx:Re[x],tokenType:Z[x]}})});var Ae=!0,Pe=[];return z.safeMode||W("First Char Optimization",function(){Pe=r.reduce(Z,function(S,x,R){if(typeof x.PATTERN=="string"){var D=x.PATTERN.charCodeAt(0),O=te(D);ce(S,O,Me[R])}else if(r.isArray(x.START_CHARS_HINT)){var U;r.forEach(x.START_CHARS_HINT,function(Y){var ae=typeof Y=="string"?Y.charCodeAt(0):Y,de=te(ae);U!==de&&(U=de,ce(S,de,Me[R]))})}else if(r.isRegExp(x.PATTERN))if(x.PATTERN.unicode)Ae=!1,z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+x.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var q=o.getOptimizedStartCodesIndices(x.PATTERN,z.ensureOptimizations);r.isEmpty(q)&&(Ae=!1),r.forEach(q,function(Y){ce(S,Y,Me[R])})}else z.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+x.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Ae=!1;return S},[])}),W("ArrayPacking",function(){Pe=r.packArray(Pe)}),{emptyGroups:ne,patternIdxToConfig:Me,charCodeToPatternIdxToConfig:Pe,hasCustom:ue,canBeOptimized:Ae}}n.analyzeTokenTypes=d;function u($,z){var W=[],Z=m($);W=W.concat(Z.errors);var ue=g(Z.valid),Ee=ue.valid;return W=W.concat(ue.errors),W=W.concat(p(Ee)),W=W.concat(T(Ee)),W=W.concat(C(Ee,z)),W=W.concat(F(Ee)),W}n.validatePatterns=u;function p($){var z=[],W=r.filter($,function(Z){return r.isRegExp(Z[l])});return z=z.concat(h(W)),z=z.concat(y(W)),z=z.concat(v(W)),z=z.concat(A(W)),z=z.concat(f(W)),z}function m($){var z=r.filter($,function(ue){return!r.has(ue,l)}),W=r.map(z,function(ue){return{message:"Token Type: ->"+ue.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[ue]}}),Z=r.difference($,z);return{errors:W,valid:Z}}n.findMissingPatterns=m;function g($){var z=r.filter($,function(ue){var Ee=ue[l];return!r.isRegExp(Ee)&&!r.isFunction(Ee)&&!r.has(Ee,"exec")&&!r.isString(Ee)}),W=r.map(z,function(ue){return{message:"Token Type: ->"+ue.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[ue]}}),Z=r.difference($,z);return{errors:W,valid:Z}}n.findInvalidPatterns=g;var _=/[^\\][\$]/;function h($){var z=function(ue){e(Ee,ue);function Ee(){var Re=ue!==null&&ue.apply(this,arguments)||this;return Re.found=!1,Re}return Ee.prototype.visitEndAnchor=function(Re){this.found=!0},Ee}(t.BaseRegExpVisitor),W=r.filter($,function(ue){var Ee=ue[l];try{var Re=s.getRegExpAst(Ee),Oe=new z;return Oe.visit(Re),Oe.found}catch{return _.test(Ee.source)}}),Z=r.map(W,function(ue){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+ue.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[ue]}});return Z}n.findEndOfInputAnchor=h;function f($){var z=r.filter($,function(Z){var ue=Z[l];return ue.test("")}),W=r.map(z,function(Z){return{message:"Token Type: ->"+Z.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[Z]}});return W}n.findEmptyMatchRegExps=f;var b=/[^\\[][\^]|^\^/;function y($){var z=function(ue){e(Ee,ue);function Ee(){var Re=ue!==null&&ue.apply(this,arguments)||this;return Re.found=!1,Re}return Ee.prototype.visitStartAnchor=function(Re){this.found=!0},Ee}(t.BaseRegExpVisitor),W=r.filter($,function(ue){var Ee=ue[l];try{var Re=s.getRegExpAst(Ee),Oe=new z;return Oe.visit(Re),Oe.found}catch{return b.test(Ee.source)}}),Z=r.map(W,function(ue){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+ue.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[ue]}});return Z}n.findStartOfInputAnchor=y;function v($){var z=r.filter($,function(Z){var ue=Z[l];return ue instanceof RegExp&&(ue.multiline||ue.global)}),W=r.map(z,function(Z){return{message:"Token Type: ->"+Z.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[Z]}});return W}n.findUnsupportedFlags=v;function A($){var z=[],W=r.map($,function(Ee){return r.reduce($,function(Re,Oe){return Ee.PATTERN.source===Oe.PATTERN.source&&!r.contains(z,Oe)&&Oe.PATTERN!==i.Lexer.NA&&(z.push(Oe),Re.push(Oe)),Re},[])});W=r.compact(W);var Z=r.filter(W,function(Ee){return Ee.length>1}),ue=r.map(Z,function(Ee){var Re=r.map(Ee,function(Fe){return Fe.name}),Oe=r.first(Ee).PATTERN;return{message:"The same RegExp pattern ->"+Oe+"<-"+("has been used in all of the following Token Types: "+Re.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:Ee}});return ue}n.findDuplicatePatterns=A;function T($){var z=r.filter($,function(Z){if(!r.has(Z,"GROUP"))return!1;var ue=Z.GROUP;return ue!==i.Lexer.SKIPPED&&ue!==i.Lexer.NA&&!r.isString(ue)}),W=r.map(z,function(Z){return{message:"Token Type: ->"+Z.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[Z]}});return W}n.findInvalidGroupType=T;function C($,z){var W=r.filter($,function(ue){return ue.PUSH_MODE!==void 0&&!r.contains(z,ue.PUSH_MODE)}),Z=r.map(W,function(ue){var Ee="Token Type: ->"+ue.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+ue.PUSH_MODE+"<-which does not exist";return{message:Ee,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[ue]}});return Z}n.findModesThatDoNotExist=C;function F($){var z=[],W=r.reduce($,function(Z,ue,Ee){var Re=ue.PATTERN;return Re===i.Lexer.NA||(r.isString(Re)?Z.push({str:Re,idx:Ee,tokenType:ue}):r.isRegExp(Re)&&M(Re)&&Z.push({str:Re.source,idx:Ee,tokenType:ue})),Z},[]);return r.forEach($,function(Z,ue){r.forEach(W,function(Ee){var Re=Ee.str,Oe=Ee.idx,Fe=Ee.tokenType;if(ue<Oe&&E(Re,Z.PATTERN)){var Qe="Token: ->"+Fe.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+Z.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;z.push({message:Qe,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[Z,Fe]})}})}),z}n.findUnreachablePatterns=F;function E($,z){if(r.isRegExp(z)){var W=z.exec($);return W!==null&&W.index===0}else{if(r.isFunction(z))return z($,0,[],{});if(r.has(z,"exec"))return z.exec($,0,[],{});if(typeof z=="string")return z===$;throw Error("non exhaustive match")}}function M($){var z=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(z,function(W){return $.source.indexOf(W)!==-1})===void 0}function w($){var z=$.ignoreCase?"i":"";return new RegExp("^(?:"+$.source+")",z)}n.addStartOfInput=w;function L($){var z=$.ignoreCase?"iy":"y";return new RegExp(""+$.source,z)}n.addStickyFlag=L;function P($,z,W){var Z=[];return r.has($,n.DEFAULT_MODE)||Z.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has($,n.MODES)||Z.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has($,n.MODES)&&r.has($,n.DEFAULT_MODE)&&!r.has($.modes,$.defaultMode)&&Z.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+$.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has($,n.MODES)&&r.forEach($.modes,function(ue,Ee){r.forEach(ue,function(Re,Oe){r.isUndefined(Re)&&Z.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+Ee+"> at index: <"+Oe+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),Z}n.performRuntimeChecks=P;function I($,z,W){var Z=[],ue=!1,Ee=r.compact(r.flatten(r.mapValues($.modes,function(Fe){return Fe}))),Re=r.reject(Ee,function(Fe){return Fe[l]===i.Lexer.NA}),Oe=K(W);return z&&r.forEach(Re,function(Fe){var Qe=H(Fe,Oe);if(Qe!==!1){var X=G(Fe,Qe),Be={message:X,type:Qe.issue,tokenType:Fe};Z.push(Be)}else r.has(Fe,"LINE_BREAKS")?Fe.LINE_BREAKS===!0&&(ue=!0):o.canMatchCharCode(Oe,Fe.PATTERN)&&(ue=!0)}),z&&!ue&&Z.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),Z}n.performWarningRuntimeChecks=I;function B($){var z={},W=r.keys($);return r.forEach(W,function(Z){var ue=$[Z];if(r.isArray(ue))z[Z]=[];else throw Error("non exhaustive match")}),z}n.cloneEmptyGroups=B;function V($){var z=$.PATTERN;if(r.isRegExp(z))return!1;if(r.isFunction(z)||r.has(z,"exec"))return!0;if(r.isString(z))return!1;throw Error("non exhaustive match")}n.isCustomPattern=V;function j($){return r.isString($)&&$.length===1?$.charCodeAt(0):!1}n.isShortPattern=j,n.LineTerminatorOptimizedTester={test:function($){for(var z=$.length,W=this.lastIndex;W<z;W++){var Z=$.charCodeAt(W);if(Z===10)return this.lastIndex=W+1,!0;if(Z===13)return $.charCodeAt(W+1)===10?this.lastIndex=W+2:this.lastIndex=W+1,!0}return!1},lastIndex:0};function H($,z){if(r.has($,"LINE_BREAKS"))return!1;if(r.isRegExp($.PATTERN)){try{o.canMatchCharCode(z,$.PATTERN)}catch(W){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:W.message}}return!1}else{if(r.isString($.PATTERN))return!1;if(V($))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function G($,z){if(z.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+$.name+`> Token Type
`)+("	 Root cause: "+z.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(z.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+$.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=G;function K($){var z=r.map($,function(W){return r.isString(W)&&W.length>0?W.charCodeAt(0):W});return z}function ce($,z,W){$[z]===void 0?$[z]=[W]:$[z].push(W)}n.minOptimizationVal=256;var Q=[];function te($){return $<n.minOptimizationVal?$:Q[$]}n.charCodeToOptimizedIndex=te;function Se(){if(r.isEmpty(Q)){Q=new Array(65536);for(var $=0;$<65536;$++)Q[$]=$>255?255+~~($/255):$}}}),Wr=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=xt();function t(_,h){var f=_.tokenTypeIdx;return f===h.tokenTypeIdx?!0:h.isParent===!0&&h.categoryMatchesMap[f]===!0}n.tokenStructuredMatcher=t;function i(_,h){return _.tokenTypeIdx===h.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(_){var h=o(_);s(h),c(h),l(h),e.forEach(h,function(f){f.isParent=f.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(_){for(var h=e.cloneArr(_),f=_,b=!0;b;){f=e.compact(e.flatten(e.map(f,function(v){return v.CATEGORIES})));var y=e.difference(f,h);h=h.concat(y),e.isEmpty(y)?b=!1:f=y}return h}n.expandCategories=o;function s(_){e.forEach(_,function(h){d(h)||(n.tokenIdxToClass[n.tokenShortNameIdx]=h,h.tokenTypeIdx=n.tokenShortNameIdx++),u(h)&&!e.isArray(h.CATEGORIES)&&(h.CATEGORIES=[h.CATEGORIES]),u(h)||(h.CATEGORIES=[]),p(h)||(h.categoryMatches=[]),m(h)||(h.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function l(_){e.forEach(_,function(h){h.categoryMatches=[],e.forEach(h.categoryMatchesMap,function(f,b){h.categoryMatches.push(n.tokenIdxToClass[b].tokenTypeIdx)})})}n.assignCategoriesTokensProp=l;function c(_){e.forEach(_,function(h){a([],h)})}n.assignCategoriesMapProp=c;function a(_,h){e.forEach(_,function(f){h.categoryMatchesMap[f.tokenTypeIdx]=!0}),e.forEach(h.CATEGORIES,function(f){var b=_.concat(h);e.contains(b,f)||a(b,f)})}n.singleAssignCategoriesToksMap=a;function d(_){return e.has(_,"tokenTypeIdx")}n.hasShortKeyProperty=d;function u(_){return e.has(_,"CATEGORIES")}n.hasCategoriesProperty=u;function p(_){return e.has(_,"categoryMatches")}n.hasExtendingTokensTypesProperty=p;function m(_){return e.has(_,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=m;function g(_){return e.has(_,"tokenTypeIdx")}n.isTokenType=g}),Hu=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Ko=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=Gu(),t=xt(),i=Wr(),r=Hu(),o=sl();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var l=function(){function c(a,d){var u=this;if(d===void 0&&(d=s),this.lexerDefinition=a,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof d=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,d);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var m,g=!0;u.TRACE_INIT("Lexer Config handling",function(){if(u.config.lineTerminatorsPattern===s.lineTerminatorsPattern)u.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(u.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(d.safeMode&&d.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');u.trackStartLines=/full|onlyStart/i.test(u.config.positionTracking),u.trackEndLines=/full/i.test(u.config.positionTracking),t.isArray(a)?(m={modes:{}},m.modes[e.DEFAULT_MODE]=t.cloneArr(a),m[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,m=t.cloneObj(a))}),u.config.skipValidations===!1&&(u.TRACE_INIT("performRuntimeChecks",function(){u.lexerDefinitionErrors=u.lexerDefinitionErrors.concat(e.performRuntimeChecks(m,u.trackStartLines,u.config.lineTerminatorCharacters))}),u.TRACE_INIT("performWarningRuntimeChecks",function(){u.lexerDefinitionWarning=u.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(m,u.trackStartLines,u.config.lineTerminatorCharacters))})),m.modes=m.modes?m.modes:{},t.forEach(m.modes,function(b,y){m.modes[y]=t.reject(b,function(v){return t.isUndefined(v)})});var _=t.keys(m.modes);if(t.forEach(m.modes,function(b,y){u.TRACE_INIT("Mode: <"+y+"> processing",function(){if(u.modes.push(y),u.config.skipValidations===!1&&u.TRACE_INIT("validatePatterns",function(){u.lexerDefinitionErrors=u.lexerDefinitionErrors.concat(e.validatePatterns(b,_))}),t.isEmpty(u.lexerDefinitionErrors)){i.augmentTokenTypes(b);var v;u.TRACE_INIT("analyzeTokenTypes",function(){v=e.analyzeTokenTypes(b,{lineTerminatorCharacters:u.config.lineTerminatorCharacters,positionTracking:d.positionTracking,ensureOptimizations:d.ensureOptimizations,safeMode:d.safeMode,tracer:u.TRACE_INIT.bind(u)})}),u.patternIdxToConfig[y]=v.patternIdxToConfig,u.charCodeToPatternIdxToConfig[y]=v.charCodeToPatternIdxToConfig,u.emptyGroups=t.merge(u.emptyGroups,v.emptyGroups),u.hasCustom=v.hasCustom||u.hasCustom,u.canModeBeOptimized[y]=v.canBeOptimized}})}),u.defaultMode=m.defaultMode,!t.isEmpty(u.lexerDefinitionErrors)&&!u.config.deferDefinitionErrorsHandling){var h=t.map(u.lexerDefinitionErrors,function(b){return b.message}),f=h.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+f)}t.forEach(u.lexerDefinitionWarning,function(b){t.PRINT_WARNING(b.message)}),u.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(u.chopInput=t.IDENTITY,u.match=u.matchWithTest):(u.updateLastIndex=t.NOOP,u.match=u.matchWithExec),g&&(u.handleModes=t.NOOP),u.trackStartLines===!1&&(u.computeNewColumn=t.IDENTITY),u.trackEndLines===!1&&(u.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(u.config.positionTracking))u.createTokenInstance=u.createFullToken;else if(/onlyStart/i.test(u.config.positionTracking))u.createTokenInstance=u.createStartOnlyToken;else if(/onlyOffset/i.test(u.config.positionTracking))u.createTokenInstance=u.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+u.config.positionTracking+'"');u.hasCustom?(u.addToken=u.addTokenUsingPush,u.handlePayload=u.handlePayloadWithCustom):(u.addToken=u.addTokenUsingMemberAccess,u.handlePayload=u.handlePayloadNoCustom)}),u.TRACE_INIT("Failed Optimization Warnings",function(){var b=t.reduce(u.canModeBeOptimized,function(y,v,A){return v===!1&&y.push(A),y},[]);if(d.ensureOptimizations&&!t.isEmpty(b))throw Error("Lexer Modes: < "+b.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),u.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),u.TRACE_INIT("toFastProperties",function(){t.toFastProperties(u)})})}return c.prototype.tokenize=function(a,d){if(d===void 0&&(d=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var u=t.map(this.lexerDefinitionErrors,function(g){return g.message}),p=u.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var m=this.tokenizeInternal(a,d);return m},c.prototype.tokenizeInternal=function(a,d){var u=this,p,m,g,_,h,f,b,y,v,A,T,C,F,E,M=a,w=M.length,L=0,P=0,I=this.hasCustom?0:Math.floor(a.length/10),B=new Array(I),V=[],j=this.trackStartLines?1:void 0,H=this.trackStartLines?1:void 0,G=e.cloneEmptyGroups(this.emptyGroups),K=this.trackStartLines,ce=this.config.lineTerminatorsPattern,Q=0,te=[],Se=[],$=[],z=[];Object.freeze(z);var W=void 0;function Z(){return te}function ue(U){var q=e.charCodeToOptimizedIndex(U),Y=Se[q];return Y===void 0?z:Y}var Ee=function(U){if($.length===1&&U.tokenType.PUSH_MODE===void 0){var q=u.config.errorMessageProvider.buildUnableToPopLexerModeMessage(U);V.push({offset:U.startOffset,line:U.startLine!==void 0?U.startLine:void 0,column:U.startColumn!==void 0?U.startColumn:void 0,length:U.image.length,message:q})}else{$.pop();var Y=t.last($);te=u.patternIdxToConfig[Y],Se=u.charCodeToPatternIdxToConfig[Y],Q=te.length;var ae=u.canModeBeOptimized[Y]&&u.config.safeMode===!1;Se&&ae?W=ue:W=Z}};function Re(U){$.push(U),Se=this.charCodeToPatternIdxToConfig[U],te=this.patternIdxToConfig[U],Q=te.length,Q=te.length;var q=this.canModeBeOptimized[U]&&this.config.safeMode===!1;Se&&q?W=ue:W=Z}Re.call(this,d);for(var Oe;L<w;){h=null;var Fe=M.charCodeAt(L),Qe=W(Fe),X=Qe.length;for(p=0;p<X;p++){Oe=Qe[p];var Be=Oe.pattern;f=null;var ee=Oe.short;if(ee!==!1?Fe===ee&&(h=Be):Oe.isCustom===!0?(E=Be.exec(M,L,B,G),E!==null?(h=E[0],E.payload!==void 0&&(f=E.payload)):h=null):(this.updateLastIndex(Be,L),h=this.match(Be,a,L)),h!==null){if(_=Oe.longerAlt,_!==void 0){var me=te[_],ne=me.pattern;b=null,me.isCustom===!0?(E=ne.exec(M,L,B,G),E!==null?(g=E[0],E.payload!==void 0&&(b=E.payload)):g=null):(this.updateLastIndex(ne,L),g=this.match(ne,a,L)),g&&g.length>h.length&&(h=g,f=b,Oe=me)}break}}if(h!==null){if(y=h.length,v=Oe.group,v!==void 0&&(A=Oe.tokenTypeIdx,T=this.createTokenInstance(h,L,A,Oe.tokenType,j,H,y),this.handlePayload(T,f),v===!1?P=this.addToken(B,P,T):G[v].push(T)),a=this.chopInput(a,y),L=L+y,H=this.computeNewColumn(H,y),K===!0&&Oe.canLineTerminator===!0){var Me=0,Ae=void 0,Pe=void 0;ce.lastIndex=0;do Ae=ce.test(h),Ae===!0&&(Pe=ce.lastIndex-1,Me++);while(Ae===!0);Me!==0&&(j=j+Me,H=y-Pe,this.updateTokenEndLineColumnLocation(T,v,Pe,Me,j,H,y))}this.handleModes(Oe,Ee,Re,T)}else{for(var S=L,x=j,R=H,D=!1;!D&&L<w;)for(M.charCodeAt(L),a=this.chopInput(a,1),L++,m=0;m<Q;m++){var O=te[m],Be=O.pattern,ee=O.short;if(ee!==!1?M.charCodeAt(L)===ee&&(D=!0):O.isCustom===!0?D=Be.exec(M,L,B,G)!==null:(this.updateLastIndex(Be,L),D=Be.exec(a)!==null),D===!0)break}C=L-S,F=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(M,S,C,x,R),V.push({offset:S,line:x,column:R,length:C,message:F})}}return this.hasCustom||(B.length=P),{tokens:B,groups:G,errors:V}},c.prototype.handleModes=function(a,d,u,p){if(a.pop===!0){var m=a.push;d(p),m!==void 0&&u.call(this,m)}else a.push!==void 0&&u.call(this,a.push)},c.prototype.chopInput=function(a,d){return a.substring(d)},c.prototype.updateLastIndex=function(a,d){a.lastIndex=d},c.prototype.updateTokenEndLineColumnLocation=function(a,d,u,p,m,g,_){var h,f;d!==void 0&&(h=u===_-1,f=h?-1:0,p===1&&h===!0||(a.endLine=m+f,a.endColumn=g-1+-f))},c.prototype.computeNewColumn=function(a,d){return a+d},c.prototype.createTokenInstance=function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];return null},c.prototype.createOffsetOnlyToken=function(a,d,u,p){return{image:a,startOffset:d,tokenTypeIdx:u,tokenType:p}},c.prototype.createStartOnlyToken=function(a,d,u,p,m,g){return{image:a,startOffset:d,startLine:m,startColumn:g,tokenTypeIdx:u,tokenType:p}},c.prototype.createFullToken=function(a,d,u,p,m,g,_){return{image:a,startOffset:d,endOffset:d+_-1,startLine:m,endLine:m,startColumn:g,endColumn:g+_-1,tokenTypeIdx:u,tokenType:p}},c.prototype.addToken=function(a,d,u){return 666},c.prototype.addTokenUsingPush=function(a,d,u){return a.push(u),d},c.prototype.addTokenUsingMemberAccess=function(a,d,u){return a[d]=u,d++,d},c.prototype.handlePayload=function(a,d){},c.prototype.handlePayloadNoCustom=function(a,d){},c.prototype.handlePayloadWithCustom=function(a,d){d!==null&&(a.payload=d)},c.prototype.match=function(a,d,u){return null},c.prototype.matchWithTest=function(a,d,u){var p=a.test(d);return p===!0?d.substring(u,a.lastIndex):null},c.prototype.matchWithExec=function(a,d){var u=a.exec(d);return u!==null?u[0]:u},c.prototype.TRACE_INIT=function(a,d){if(this.traceInitPerf===!0){this.traceInitIndent++;var u=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(u+"--> <"+a+">");var p=t.timer(d),m=p.time,g=p.value,_=m>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&_(u+"<-- <"+a+"> time: "+m+"ms"),this.traceInitIndent--,g}else return d()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=l}),Ci=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=xt(),t=Ko(),i=Wr();function r(v){return s(v)?v.LABEL:v.name}n.tokenLabel=r;function o(v){return v.name}n.tokenName=o;function s(v){return e.isString(v.LABEL)&&v.LABEL!==""}n.hasTokenLabel=s;var l="parent",c="categories",a="label",d="group",u="push_mode",p="pop_mode",m="longer_alt",g="line_breaks",_="start_chars_hint";function h(v){return f(v)}n.createToken=h;function f(v){var A=v.pattern,T={};if(T.name=v.name,e.isUndefined(A)||(T.PATTERN=A),e.has(v,l))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(v,c)&&(T.CATEGORIES=v[c]),i.augmentTokenTypes([T]),e.has(v,a)&&(T.LABEL=v[a]),e.has(v,d)&&(T.GROUP=v[d]),e.has(v,p)&&(T.POP_MODE=v[p]),e.has(v,u)&&(T.PUSH_MODE=v[u]),e.has(v,m)&&(T.LONGER_ALT=v[m]),e.has(v,g)&&(T.LINE_BREAKS=v[g]),e.has(v,_)&&(T.START_CHARS_HINT=v[_]),T}n.EOF=h({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function b(v,A,T,C,F,E,M,w){return{image:A,startOffset:T,endOffset:C,startLine:F,endLine:E,startColumn:M,endColumn:w,tokenTypeIdx:v.tokenTypeIdx,tokenType:v}}n.createTokenInstance=b;function y(v,A){return i.tokenStructuredMatcher(v,A)}n.tokenMatcher=y}),hn=at(n=>{var e=n&&n.__extends||function(){var f=function(b,y){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,A){v.__proto__=A}||function(v,A){for(var T in A)Object.prototype.hasOwnProperty.call(A,T)&&(v[T]=A[T])},f(b,y)};return function(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");f(b,y);function v(){this.constructor=b}b.prototype=y===null?Object.create(y):(v.prototype=y.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=xt(),i=Ci(),r=function(){function f(b){this._definition=b}return Object.defineProperty(f.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),f.prototype.accept=function(b){b.visit(this),t.forEach(this.definition,function(y){y.accept(b)})},f}();n.AbstractProduction=r;var o=function(f){e(b,f);function b(y){var v=f.call(this,[])||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return Object.defineProperty(b.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(y){},enumerable:!1,configurable:!0}),b.prototype.accept=function(y){y.visit(this)},b}(r);n.NonTerminal=o;var s=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.orgText="",t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.Rule=s;var l=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.ignoreAmbiguities=!1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.Alternative=l;var c=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.Option=c;var a=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.RepetitionMandatory=a;var d=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.RepetitionMandatoryWithSeparator=d;var u=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.Repetition=u;var p=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return b}(r);n.RepetitionWithSeparator=p;var m=function(f){e(b,f);function b(y){var v=f.call(this,y.definition)||this;return v.idx=1,v.ignoreAmbiguities=!1,v.hasPredicates=!1,t.assign(v,t.pick(y,function(A){return A!==void 0})),v}return Object.defineProperty(b.prototype,"definition",{get:function(){return this._definition},set:function(y){this._definition=y},enumerable:!1,configurable:!0}),b}(r);n.Alternation=m;var g=function(){function f(b){this.idx=1,t.assign(this,t.pick(b,function(y){return y!==void 0}))}return f.prototype.accept=function(b){b.visit(this)},f}();n.Terminal=g;function _(f){return t.map(f,h)}n.serializeGrammar=_;function h(f){function b(A){return t.map(A,h)}if(f instanceof o)return{type:"NonTerminal",name:f.nonTerminalName,idx:f.idx};if(f instanceof l)return{type:"Alternative",definition:b(f.definition)};if(f instanceof c)return{type:"Option",idx:f.idx,definition:b(f.definition)};if(f instanceof a)return{type:"RepetitionMandatory",idx:f.idx,definition:b(f.definition)};if(f instanceof d)return{type:"RepetitionMandatoryWithSeparator",idx:f.idx,separator:h(new g({terminalType:f.separator})),definition:b(f.definition)};if(f instanceof p)return{type:"RepetitionWithSeparator",idx:f.idx,separator:h(new g({terminalType:f.separator})),definition:b(f.definition)};if(f instanceof u)return{type:"Repetition",idx:f.idx,definition:b(f.definition)};if(f instanceof m)return{type:"Alternation",idx:f.idx,definition:b(f.definition)};if(f instanceof g){var y={type:"Terminal",name:f.terminalType.name,label:i.tokenLabel(f.terminalType),idx:f.idx},v=f.terminalType.PATTERN;return f.terminalType.PATTERN&&(y.pattern=t.isRegExp(v)?v.source:v),y}else{if(f instanceof s)return{type:"Rule",name:f.name,orgText:f.orgText,definition:b(f.definition)};throw Error("non exhaustive match")}}n.serializeProduction=h}),ll=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=xt(),t=hn(),i=function(){function o(){}return o.prototype.walk=function(s,l){var c=this;l===void 0&&(l=[]),e.forEach(s.definition,function(a,d){var u=e.drop(s.definition,d+1);if(a instanceof t.NonTerminal)c.walkProdRef(a,u,l);else if(a instanceof t.Terminal)c.walkTerminal(a,u,l);else if(a instanceof t.Alternative)c.walkFlat(a,u,l);else if(a instanceof t.Option)c.walkOption(a,u,l);else if(a instanceof t.RepetitionMandatory)c.walkAtLeastOne(a,u,l);else if(a instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(a,u,l);else if(a instanceof t.RepetitionWithSeparator)c.walkManySep(a,u,l);else if(a instanceof t.Repetition)c.walkMany(a,u,l);else if(a instanceof t.Alternation)c.walkOr(a,u,l);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,l,c){},o.prototype.walkProdRef=function(s,l,c){},o.prototype.walkFlat=function(s,l,c){var a=l.concat(c);this.walk(s,a)},o.prototype.walkOption=function(s,l,c){var a=l.concat(c);this.walk(s,a)},o.prototype.walkAtLeastOne=function(s,l,c){var a=[new t.Option({definition:s.definition})].concat(l,c);this.walk(s,a)},o.prototype.walkAtLeastOneSep=function(s,l,c){var a=r(s,l,c);this.walk(s,a)},o.prototype.walkMany=function(s,l,c){var a=[new t.Option({definition:s.definition})].concat(l,c);this.walk(s,a)},o.prototype.walkManySep=function(s,l,c){var a=r(s,l,c);this.walk(s,a)},o.prototype.walkOr=function(s,l,c){var a=this,d=l.concat(c);e.forEach(s.definition,function(u){var p=new t.Alternative({definition:[u]});a.walk(p,d)})},o}();n.RestWalker=i;function r(o,s,l){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],a=c.concat(s,l);return a}}),Xr=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=hn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),qo=at(n=>{var e=n&&n.__extends||function(){var p=function(m,g){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,h){_.__proto__=h}||function(_,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(_[f]=h[f])},p(m,g)};return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(m,g);function _(){this.constructor=m}m.prototype=g===null?Object.create(g):(_.prototype=g.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=xt(),i=hn(),r=Xr();function o(p){return p instanceof i.Alternative||p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionMandatory||p instanceof i.RepetitionMandatoryWithSeparator||p instanceof i.RepetitionWithSeparator||p instanceof i.Terminal||p instanceof i.Rule}n.isSequenceProd=o;function s(p,m){m===void 0&&(m=[]);var g=p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionWithSeparator;return g?!0:p instanceof i.Alternation?t.some(p.definition,function(_){return s(_,m)}):p instanceof i.NonTerminal&&t.contains(m,p)?!1:p instanceof i.AbstractProduction?(p instanceof i.NonTerminal&&m.push(p),t.every(p.definition,function(_){return s(_,m)})):!1}n.isOptionalProd=s;function l(p){return p instanceof i.Alternation}n.isBranchingProd=l;function c(p){if(p instanceof i.NonTerminal)return"SUBRULE";if(p instanceof i.Option)return"OPTION";if(p instanceof i.Alternation)return"OR";if(p instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(p instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(p instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(p instanceof i.Repetition)return"MANY";if(p instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var a=function(p){e(m,p);function m(){var g=p!==null&&p.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return m.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},m.prototype.visitTerminal=function(g){var _=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,_)||(this.dslMethods[_]=[]),this.dslMethods[_].push(g)},m.prototype.visitNonTerminal=function(g){var _=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,_)||(this.dslMethods[_]=[]),this.dslMethods[_].push(g)},m.prototype.visitOption=function(g){this.dslMethods.option.push(g)},m.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},m.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},m.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},m.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},m.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},m}(r.GAstVisitor);n.DslMethodsCollectorVisitor=a;var d=new a;function u(p){d.reset(),p.accept(d);var m=d.dslMethods;return d.reset(),m}n.collectMethods=u}),Wu=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=xt(),t=hn(),i=qo();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return l(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return s(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var a=[],d=c.definition,u=0,p=d.length>u,m,g=!0;p&&g;)m=d[u],g=i.isOptionalProd(m),a=a.concat(r(m)),u=u+1,p=d.length>u;return e.uniq(a)}n.firstForSequence=o;function s(c){var a=e.map(c.definition,function(d){return r(d)});return e.uniq(e.flatten(a))}n.firstForBranching=s;function l(c){return[c.terminalType]}n.firstForTerminal=l}),Xu=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),p_=at(n=>{var e=n&&n.__extends||function(){var u=function(p,m){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,_){g.__proto__=_}||function(g,_){for(var h in _)Object.prototype.hasOwnProperty.call(_,h)&&(g[h]=_[h])},u(p,m)};return function(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");u(p,m);function g(){this.constructor=p}p.prototype=m===null?Object.create(m):(g.prototype=m.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=ll(),i=Wu(),r=xt(),o=Xu(),s=hn(),l=function(u){e(p,u);function p(m){var g=u.call(this)||this;return g.topProd=m,g.follows={},g}return p.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},p.prototype.walkTerminal=function(m,g,_){},p.prototype.walkProdRef=function(m,g,_){var h=a(m.referencedRule,m.idx)+this.topProd.name,f=g.concat(_),b=new s.Alternative({definition:f}),y=i.first(b);this.follows[h]=y},p}(t.RestWalker);n.ResyncFollowsWalker=l;function c(u){var p={};return r.forEach(u,function(m){var g=new l(m).startWalking();r.assign(p,g)}),p}n.computeAllProdsFollows=c;function a(u,p){return u.name+p+o.IN}n.buildBetweenProdsFollowPrefix=a;function d(u){var p=u.terminalType.name;return p+u.idx+o.IN}n.buildInProdFollowPrefix=d}),$o=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Ci(),t=xt(),i=xt(),r=hn(),o=qo();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var l=s.expected,c=s.actual;s.previous,s.ruleName;var a=e.hasTokenLabel(l),d=a?"--> "+e.tokenLabel(l)+" <--":"token of type --> "+l.name+" <--",u="Expecting "+d+" but found --> '"+c.image+"' <--";return u},buildNotAllInputParsedMessage:function(s){var l=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+l.image},buildNoViableAltMessage:function(s){var l=s.expectedPathsPerAlt,c=s.actual;s.previous;var a=s.customUserDescription;s.ruleName;var d="Expecting: ",u=i.first(c).image,p=`
but found: '`+u+"'";if(a)return d+a+p;var m=i.reduce(l,function(f,b){return f.concat(b)},[]),g=i.map(m,function(f){return"["+i.map(f,function(b){return e.tokenLabel(b)}).join(", ")+"]"}),_=i.map(g,function(f,b){return"  "+(b+1)+". "+f}),h=`one of these possible Token sequences:
`+_.join(`
`);return d+h+p},buildEarlyExitMessage:function(s){var l=s.expectedIterationPaths,c=s.actual,a=s.customUserDescription;s.ruleName;var d="Expecting: ",u=i.first(c).image,p=`
but found: '`+u+"'";if(a)return d+a+p;var m=i.map(l,function(_){return"["+i.map(_,function(h){return e.tokenLabel(h)}).join(",")+"]"}),g=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+m.join(" ,")+">");return d+g+p}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(s,l){var c="Invalid grammar, reference to a rule which is not defined: ->"+l.nonTerminalName+`<-
inside top level rule: ->`+s.name+"<-";return c}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(s,l){function c(h){return h instanceof r.Terminal?h.terminalType.name:h instanceof r.NonTerminal?h.nonTerminalName:""}var a=s.name,d=i.first(l),u=d.idx,p=o.getProductionDslName(d),m=c(d),g=u>0,_="->"+p+(g?u:"")+"<- "+(m?"with argument: ->"+m+"<-":"")+`
                  appears more than once (`+l.length+" times) in the top level rule: ->"+a+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return _=_.replace(/[ \t]+/g," "),_=_.replace(/\s\s+/g,`
`),_},buildNamespaceConflictError:function(s){var l=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+s.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return l},buildAlternationPrefixAmbiguityError:function(s){var l=i.map(s.prefixPath,function(d){return e.tokenLabel(d)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous alternatives: <"+s.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+c+"> inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return a},buildAlternationAmbiguityError:function(s){var l=i.map(s.prefixPath,function(d){return e.tokenLabel(d)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous Alternatives Detected: <"+s.ambiguityIndices.join(" ,")+"> in <OR"+c+">"+(" inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`);return a=a+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,a},buildEmptyRepetitionError:function(s){var l=o.getProductionDslName(s.repetition);s.repetition.idx!==0&&(l+=s.repetition.idx);var c="The repetition <"+l+"> within Rule <"+s.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return c},buildTokenNameError:function(s){return"deprecated"},buildEmptyAlternationError:function(s){var l="Ambiguous empty alternative: <"+(s.emptyChoiceIdx+1)+">"+(" in <OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return l},buildTooManyAlternativesError:function(s){var l=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
 has `+(s.alternation.definition.length+1)+" alternatives.");return l},buildLeftRecursionError:function(s){var l=s.topLevelRule.name,c=t.map(s.leftRecursionPath,function(u){return u.name}),a=l+" --> "+c.concat([l]).join(" --> "),d=`Left Recursion found in grammar.
`+("rule: <"+l+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+a+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return d},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var l;s.topLevelRule instanceof r.Rule?l=s.topLevelRule.name:l=s.topLevelRule;var c="Duplicate definition, rule: ->"+l+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return c}}}),m_=at(n=>{var e=n&&n.__extends||function(){var l=function(c,a){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,u){d.__proto__=u}||function(d,u){for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(d[p]=u[p])},l(c,a)};return function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");l(c,a);function d(){this.constructor=c}c.prototype=a===null?Object.create(a):(d.prototype=a.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=_n(),i=xt(),r=Xr();function o(l,c){var a=new s(l,c);return a.resolveRefs(),a.errors}n.resolveGrammar=o;var s=function(l){e(c,l);function c(a,d){var u=l.call(this)||this;return u.nameToTopRule=a,u.errMsgProvider=d,u.errors=[],u}return c.prototype.resolveRefs=function(){var a=this;i.forEach(i.values(this.nameToTopRule),function(d){a.currTopLevel=d,d.accept(a)})},c.prototype.visitNonTerminal=function(a){var d=this.nameToTopRule[a.nonTerminalName];if(d)a.referencedRule=d;else{var u=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,a);this.errors.push({message:u,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:a.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=s}),Zo=at(n=>{var e=n&&n.__extends||function(){var h=function(f,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,v){y.__proto__=v}||function(y,v){for(var A in v)Object.prototype.hasOwnProperty.call(v,A)&&(y[A]=v[A])},h(f,b)};return function(f,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");h(f,b);function y(){this.constructor=f}f.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=ll(),i=xt(),r=Wu(),o=hn(),s=function(h){e(f,h);function f(b,y){var v=h.call(this)||this;return v.topProd=b,v.path=y,v.possibleTokTypes=[],v.nextProductionName="",v.nextProductionOccurrence=0,v.found=!1,v.isAtEndOfPath=!1,v}return f.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},f.prototype.walk=function(b,y){y===void 0&&(y=[]),this.found||h.prototype.walk.call(this,b,y)},f.prototype.walkProdRef=function(b,y,v){if(b.referencedRule.name===this.nextProductionName&&b.idx===this.nextProductionOccurrence){var A=y.concat(v);this.updateExpectedNext(),this.walk(b.referencedRule,A)}},f.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},f}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var l=function(h){e(f,h);function f(b,y){var v=h.call(this,b,y)||this;return v.path=y,v.nextTerminalName="",v.nextTerminalOccurrence=0,v.nextTerminalName=v.path.lastTok.name,v.nextTerminalOccurrence=v.path.lastTokOccurrence,v}return f.prototype.walkTerminal=function(b,y,v){if(this.isAtEndOfPath&&b.terminalType.name===this.nextTerminalName&&b.idx===this.nextTerminalOccurrence&&!this.found){var A=y.concat(v),T=new o.Alternative({definition:A});this.possibleTokTypes=r.first(T),this.found=!0}},f}(s);n.NextAfterTokenWalker=l;var c=function(h){e(f,h);function f(b,y){var v=h.call(this)||this;return v.topRule=b,v.occurrence=y,v.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},v}return f.prototype.startWalking=function(){return this.walk(this.topRule),this.result},f}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var a=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkMany=function(b,y,v){if(b.idx===this.occurrence){var A=i.first(y.concat(v));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkMany.call(this,b,y,v)},f}(c);n.NextTerminalAfterManyWalker=a;var d=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkManySep=function(b,y,v){if(b.idx===this.occurrence){var A=i.first(y.concat(v));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkManySep.call(this,b,y,v)},f}(c);n.NextTerminalAfterManySepWalker=d;var u=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkAtLeastOne=function(b,y,v){if(b.idx===this.occurrence){var A=i.first(y.concat(v));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkAtLeastOne.call(this,b,y,v)},f}(c);n.NextTerminalAfterAtLeastOneWalker=u;var p=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkAtLeastOneSep=function(b,y,v){if(b.idx===this.occurrence){var A=i.first(y.concat(v));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkAtLeastOneSep.call(this,b,y,v)},f}(c);n.NextTerminalAfterAtLeastOneSepWalker=p;function m(h,f,b){b===void 0&&(b=[]),b=i.cloneArr(b);var y=[],v=0;function A(E){return E.concat(i.drop(h,v+1))}function T(E){var M=m(A(E),f,b);return y.concat(M)}for(;b.length<f&&v<h.length;){var C=h[v];if(C instanceof o.Alternative||C instanceof o.NonTerminal)return T(C.definition);if(C instanceof o.Option)y=T(C.definition);else if(C instanceof o.RepetitionMandatory){var F=C.definition.concat([new o.Repetition({definition:C.definition})]);return T(F)}else if(C instanceof o.RepetitionMandatoryWithSeparator){var F=[new o.Alternative({definition:C.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})];return T(F)}else if(C instanceof o.RepetitionWithSeparator){var F=C.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})]);y=T(F)}else if(C instanceof o.Repetition){var F=C.definition.concat([new o.Repetition({definition:C.definition})]);y=T(F)}else{if(C instanceof o.Alternation)return i.forEach(C.definition,function(E){i.isEmpty(E.definition)===!1&&(y=T(E.definition))}),y;if(C instanceof o.Terminal)b.push(C.terminalType);else throw Error("non exhaustive match")}v++}return y.push({partialPath:b,suffixDef:i.drop(h,v)}),y}n.possiblePathsFrom=m;function g(h,f,b,y){var v="EXIT_NONE_TERMINAL",A=[v],T="EXIT_ALTERNATIVE",C=!1,F=f.length,E=F-y-1,M=[],w=[];for(w.push({idx:-1,def:h,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var L=w.pop();if(L===T){C&&i.last(w).idx<=E&&w.pop();continue}var P=L.def,I=L.idx,B=L.ruleStack,V=L.occurrenceStack;if(!i.isEmpty(P)){var j=P[0];if(j===v){var H={idx:I,def:i.drop(P),ruleStack:i.dropRight(B),occurrenceStack:i.dropRight(V)};w.push(H)}else if(j instanceof o.Terminal)if(I<F-1){var G=I+1,K=f[G];if(b(K,j.terminalType)){var H={idx:G,def:i.drop(P),ruleStack:B,occurrenceStack:V};w.push(H)}}else if(I===F-1)M.push({nextTokenType:j.terminalType,nextTokenOccurrence:j.idx,ruleStack:B,occurrenceStack:V}),C=!0;else throw Error("non exhaustive match");else if(j instanceof o.NonTerminal){var ce=i.cloneArr(B);ce.push(j.nonTerminalName);var Q=i.cloneArr(V);Q.push(j.idx);var H={idx:I,def:j.definition.concat(A,i.drop(P)),ruleStack:ce,occurrenceStack:Q};w.push(H)}else if(j instanceof o.Option){var te={idx:I,def:i.drop(P),ruleStack:B,occurrenceStack:V};w.push(te),w.push(T);var Se={idx:I,def:j.definition.concat(i.drop(P)),ruleStack:B,occurrenceStack:V};w.push(Se)}else if(j instanceof o.RepetitionMandatory){var $=new o.Repetition({definition:j.definition,idx:j.idx}),z=j.definition.concat([$],i.drop(P)),H={idx:I,def:z,ruleStack:B,occurrenceStack:V};w.push(H)}else if(j instanceof o.RepetitionMandatoryWithSeparator){var W=new o.Terminal({terminalType:j.separator}),$=new o.Repetition({definition:[W].concat(j.definition),idx:j.idx}),z=j.definition.concat([$],i.drop(P)),H={idx:I,def:z,ruleStack:B,occurrenceStack:V};w.push(H)}else if(j instanceof o.RepetitionWithSeparator){var te={idx:I,def:i.drop(P),ruleStack:B,occurrenceStack:V};w.push(te),w.push(T);var W=new o.Terminal({terminalType:j.separator}),Z=new o.Repetition({definition:[W].concat(j.definition),idx:j.idx}),z=j.definition.concat([Z],i.drop(P)),Se={idx:I,def:z,ruleStack:B,occurrenceStack:V};w.push(Se)}else if(j instanceof o.Repetition){var te={idx:I,def:i.drop(P),ruleStack:B,occurrenceStack:V};w.push(te),w.push(T);var Z=new o.Repetition({definition:j.definition,idx:j.idx}),z=j.definition.concat([Z],i.drop(P)),Se={idx:I,def:z,ruleStack:B,occurrenceStack:V};w.push(Se)}else if(j instanceof o.Alternation)for(var ue=j.definition.length-1;ue>=0;ue--){var Ee=j.definition[ue],Re={idx:I,def:Ee.definition.concat(i.drop(P)),ruleStack:B,occurrenceStack:V};w.push(Re),w.push(T)}else if(j instanceof o.Alternative)w.push({idx:I,def:j.definition.concat(i.drop(P)),ruleStack:B,occurrenceStack:V});else if(j instanceof o.Rule)w.push(_(j,I,B,V));else throw Error("non exhaustive match")}}return M}n.nextPossibleTokensAfter=g;function _(h,f,b,y){var v=i.cloneArr(b);v.push(h.name);var A=i.cloneArr(y);return A.push(1),{idx:f,def:h.definition,ruleStack:v,occurrenceStack:A}}}),Jo=at(n=>{var e=n&&n.__extends||function(){var E=function(M,w){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(L,P){L.__proto__=P}||function(L,P){for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(L[I]=P[I])},E(M,w)};return function(M,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");E(M,w);function L(){this.constructor=M}M.prototype=w===null?Object.create(w):(L.prototype=w.prototype,new L)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=xt(),i=Zo(),r=ll(),o=Wr(),s=hn(),l=Xr(),c;(function(E){E[E.OPTION=0]="OPTION",E[E.REPETITION=1]="REPETITION",E[E.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",E[E.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",E[E.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",E[E.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function a(E){if(E instanceof s.Option)return c.OPTION;if(E instanceof s.Repetition)return c.REPETITION;if(E instanceof s.RepetitionMandatory)return c.REPETITION_MANDATORY;if(E instanceof s.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(E instanceof s.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(E instanceof s.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=a;function d(E,M,w,L,P,I){var B=v(E,M,w),V=F(B)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return I(B,L,V,P)}n.buildLookaheadFuncForOr=d;function u(E,M,w,L,P,I){var B=A(E,M,P,w),V=F(B)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return I(B[0],V,L)}n.buildLookaheadFuncForOptionalProd=u;function p(E,M,w,L){var P=E.length,I=t.every(E,function(j){return t.every(j,function(H){return H.length===1})});if(M)return function(j){for(var H=t.map(j,function(Z){return Z.GATE}),G=0;G<P;G++){var K=E[G],ce=K.length,Q=H[G];if(!(Q!==void 0&&Q.call(this)===!1))e:for(var te=0;te<ce;te++){for(var Se=K[te],$=Se.length,z=0;z<$;z++){var W=this.LA(z+1);if(w(W,Se[z])===!1)continue e}return G}}};if(I&&!L){var B=t.map(E,function(j){return t.flatten(j)}),V=t.reduce(B,function(j,H,G){return t.forEach(H,function(K){t.has(j,K.tokenTypeIdx)||(j[K.tokenTypeIdx]=G),t.forEach(K.categoryMatches,function(ce){t.has(j,ce)||(j[ce]=G)})}),j},[]);return function(){var j=this.LA(1);return V[j.tokenTypeIdx]}}else return function(){for(var j=0;j<P;j++){var H=E[j],G=H.length;e:for(var K=0;K<G;K++){for(var ce=H[K],Q=ce.length,te=0;te<Q;te++){var Se=this.LA(te+1);if(w(Se,ce[te])===!1)continue e}return j}}}}n.buildAlternativesLookAheadFunc=p;function m(E,M,w){var L=t.every(E,function(H){return H.length===1}),P=E.length;if(L&&!w){var I=t.flatten(E);if(I.length===1&&t.isEmpty(I[0].categoryMatches)){var B=I[0],V=B.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===V}}else{var j=t.reduce(I,function(H,G,K){return H[G.tokenTypeIdx]=!0,t.forEach(G.categoryMatches,function(ce){H[ce]=!0}),H},[]);return function(){var H=this.LA(1);return j[H.tokenTypeIdx]===!0}}}else return function(){e:for(var H=0;H<P;H++){for(var G=E[H],K=G.length,ce=0;ce<K;ce++){var Q=this.LA(ce+1);if(M(Q,G[ce])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=m;var g=function(E){e(M,E);function M(w,L,P){var I=E.call(this)||this;return I.topProd=w,I.targetOccurrence=L,I.targetProdType=P,I}return M.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},M.prototype.checkIsTarget=function(w,L,P,I){return w.idx===this.targetOccurrence&&this.targetProdType===L?(this.restDef=P.concat(I),!0):!1},M.prototype.walkOption=function(w,L,P){this.checkIsTarget(w,c.OPTION,L,P)||E.prototype.walkOption.call(this,w,L,P)},M.prototype.walkAtLeastOne=function(w,L,P){this.checkIsTarget(w,c.REPETITION_MANDATORY,L,P)||E.prototype.walkOption.call(this,w,L,P)},M.prototype.walkAtLeastOneSep=function(w,L,P){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,L,P)||E.prototype.walkOption.call(this,w,L,P)},M.prototype.walkMany=function(w,L,P){this.checkIsTarget(w,c.REPETITION,L,P)||E.prototype.walkOption.call(this,w,L,P)},M.prototype.walkManySep=function(w,L,P){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,L,P)||E.prototype.walkOption.call(this,w,L,P)},M}(r.RestWalker),_=function(E){e(M,E);function M(w,L,P){var I=E.call(this)||this;return I.targetOccurrence=w,I.targetProdType=L,I.targetRef=P,I.result=[],I}return M.prototype.checkIsTarget=function(w,L){w.idx===this.targetOccurrence&&this.targetProdType===L&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},M.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},M.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},M.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},M.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},M.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},M.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},M}(l.GAstVisitor);function h(E){for(var M=new Array(E),w=0;w<E;w++)M[w]=[];return M}function f(E){for(var M=[""],w=0;w<E.length;w++){for(var L=E[w],P=[],I=0;I<M.length;I++){var B=M[I];P.push(B+"_"+L.tokenTypeIdx);for(var V=0;V<L.categoryMatches.length;V++){var j="_"+L.categoryMatches[V];P.push(B+j)}}M=P}return M}function b(E,M,w){for(var L=0;L<E.length;L++)if(L!==w)for(var P=E[L],I=0;I<M.length;I++){var B=M[I];if(P[B]===!0)return!1}return!0}function y(E,M){for(var w=t.map(E,function(G){return i.possiblePathsFrom([G],1)}),L=h(w.length),P=t.map(w,function(G){var K={};return t.forEach(G,function(ce){var Q=f(ce.partialPath);t.forEach(Q,function(te){K[te]=!0})}),K}),I=w,B=1;B<=M;B++){var V=I;I=h(V.length);for(var j=function(G){for(var K=V[G],ce=0;ce<K.length;ce++){var Q=K[ce].partialPath,te=K[ce].suffixDef,Se=f(Q),$=b(P,Se,G);if($||t.isEmpty(te)||Q.length===M){var z=L[G];if(T(z,Q)===!1){z.push(Q);for(var W=0;W<Se.length;W++){var Z=Se[W];P[G][Z]=!0}}}else{var ue=i.possiblePathsFrom(te,B+1,Q);I[G]=I[G].concat(ue),t.forEach(ue,function(Ee){var Re=f(Ee.partialPath);t.forEach(Re,function(Oe){P[G][Oe]=!0})})}}},H=0;H<V.length;H++)j(H)}return L}n.lookAheadSequenceFromAlternatives=y;function v(E,M,w,L){var P=new _(E,c.ALTERNATION,L);return M.accept(P),y(P.result,w)}n.getLookaheadPathsForOr=v;function A(E,M,w,L){var P=new _(E,w);M.accept(P);var I=P.result,B=new g(M,E,w),V=B.startWalking(),j=new s.Alternative({definition:I}),H=new s.Alternative({definition:V});return y([j,H],L)}n.getLookaheadPathsForOptionalProd=A;function T(E,M){e:for(var w=0;w<E.length;w++){var L=E[w];if(L.length===M.length){for(var P=0;P<L.length;P++){var I=M[P],B=L[P],V=I===B||B.categoryMatchesMap[I.tokenTypeIdx]!==void 0;if(V===!1)continue e}return!0}}return!1}n.containsPath=T;function C(E,M){return E.length<M.length&&t.every(E,function(w,L){var P=M[L];return w===P||P.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=C;function F(E){return t.every(E,function(M){return t.every(M,function(w){return t.every(w,function(L){return t.isEmpty(L.categoryMatches)})})})}n.areTokenCategoriesNotUsed=F}),ju=at(n=>{var e=n&&n.__extends||function(){var L=function(P,I){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(B,V){B.__proto__=V}||function(B,V){for(var j in V)Object.prototype.hasOwnProperty.call(V,j)&&(B[j]=V[j])},L(P,I)};return function(P,I){if(typeof I!="function"&&I!==null)throw new TypeError("Class extends value "+String(I)+" is not a constructor or null");L(P,I);function B(){this.constructor=P}P.prototype=I===null?Object.create(I):(B.prototype=I.prototype,new B)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=xt(),i=xt(),r=_n(),o=qo(),s=Jo(),l=Zo(),c=hn(),a=Xr();function d(L,P,I,B,V){var j=t.map(L,function($){return u($,B)}),H=t.map(L,function($){return f($,$,B)}),G=[],K=[],ce=[];i.every(H,i.isEmpty)&&(G=i.map(L,function($){return v($,B)}),K=i.map(L,function($){return A($,P,B)}),ce=F(L,P,B));var Q=w(L,I,B),te=i.map(L,function($){return C($,B)}),Se=i.map(L,function($){return _($,L,V,B)});return t.flatten(j.concat(ce,H,G,K,Q,te,Se))}n.validateGrammar=d;function u(L,P){var I=new g;L.accept(I);var B=I.allProductions,V=t.groupBy(B,p),j=t.pick(V,function(G){return G.length>1}),H=t.map(t.values(j),function(G){var K=t.first(G),ce=P.buildDuplicateFoundError(L,G),Q=o.getProductionDslName(K),te={message:ce,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:L.name,dslName:Q,occurrence:K.idx},Se=m(K);return Se&&(te.parameter=Se),te});return H}function p(L){return o.getProductionDslName(L)+"_#_"+L.idx+"_#_"+m(L)}n.identifyProductionForDuplicates=p;function m(L){return L instanceof c.Terminal?L.terminalType.name:L instanceof c.NonTerminal?L.nonTerminalName:""}var g=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.allProductions=[],I}return P.prototype.visitNonTerminal=function(I){this.allProductions.push(I)},P.prototype.visitOption=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatory=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatoryWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetition=function(I){this.allProductions.push(I)},P.prototype.visitAlternation=function(I){this.allProductions.push(I)},P.prototype.visitTerminal=function(I){this.allProductions.push(I)},P}(a.GAstVisitor);n.OccurrenceValidationCollector=g;function _(L,P,I,B){var V=[],j=i.reduce(P,function(G,K){return K.name===L.name?G+1:G},0);if(j>1){var H=B.buildDuplicateRuleNameError({topLevelRule:L,grammarName:I});V.push({message:H,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:L.name})}return V}n.validateRuleDoesNotAlreadyExist=_;function h(L,P,I){var B=[],V;return t.contains(P,L)||(V="Invalid rule override, rule: ->"+L+"<- cannot be overridden in the grammar: ->"+I+"<-as it is not defined in any of the super grammars ",B.push({message:V,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:L})),B}n.validateRuleIsOverridden=h;function f(L,P,I,B){B===void 0&&(B=[]);var V=[],j=b(P.definition);if(t.isEmpty(j))return[];var H=L.name,G=t.contains(j,L);G&&V.push({message:I.buildLeftRecursionError({topLevelRule:L,leftRecursionPath:B}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:H});var K=t.difference(j,B.concat([L])),ce=t.map(K,function(Q){var te=t.cloneArr(B);return te.push(Q),f(L,Q,I,te)});return V.concat(t.flatten(ce))}n.validateNoLeftRecursion=f;function b(L){var P=[];if(t.isEmpty(L))return P;var I=t.first(L);if(I instanceof c.NonTerminal)P.push(I.referencedRule);else if(I instanceof c.Alternative||I instanceof c.Option||I instanceof c.RepetitionMandatory||I instanceof c.RepetitionMandatoryWithSeparator||I instanceof c.RepetitionWithSeparator||I instanceof c.Repetition)P=P.concat(b(I.definition));else if(I instanceof c.Alternation)P=t.flatten(t.map(I.definition,function(H){return b(H.definition)}));else if(!(I instanceof c.Terminal))throw Error("non exhaustive match");var B=o.isOptionalProd(I),V=L.length>1;if(B&&V){var j=t.drop(L);return P.concat(b(j))}else return P}n.getFirstNoneTerminal=b;var y=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.alternations=[],I}return P.prototype.visitAlternation=function(I){this.alternations.push(I)},P}(a.GAstVisitor);function v(L,P){var I=new y;L.accept(I);var B=I.alternations,V=t.reduce(B,function(j,H){var G=t.dropRight(H.definition),K=t.map(G,function(ce,Q){var te=l.nextPossibleTokensAfter([ce],[],null,1);return t.isEmpty(te)?{message:P.buildEmptyAlternationError({topLevelRule:L,alternation:H,emptyChoiceIdx:Q}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:L.name,occurrence:H.idx,alternative:Q+1}:null});return j.concat(t.compact(K))},[]);return V}n.validateEmptyOrAlternative=v;function A(L,P,I){var B=new y;L.accept(B);var V=B.alternations;V=i.reject(V,function(H){return H.ignoreAmbiguities===!0});var j=t.reduce(V,function(H,G){var K=G.idx,ce=G.maxLookahead||P,Q=s.getLookaheadPathsForOr(K,L,ce,G),te=E(Q,G,L,I),Se=M(Q,G,L,I);return H.concat(te,Se)},[]);return j}n.validateAmbiguousAlternationAlternatives=A;var T=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.allProductions=[],I}return P.prototype.visitRepetitionWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatory=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatoryWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetition=function(I){this.allProductions.push(I)},P}(a.GAstVisitor);n.RepetionCollector=T;function C(L,P){var I=new y;L.accept(I);var B=I.alternations,V=t.reduce(B,function(j,H){return H.definition.length>255&&j.push({message:P.buildTooManyAlternativesError({topLevelRule:L,alternation:H}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:L.name,occurrence:H.idx}),j},[]);return V}n.validateTooManyAlts=C;function F(L,P,I){var B=[];return i.forEach(L,function(V){var j=new T;V.accept(j);var H=j.allProductions;i.forEach(H,function(G){var K=s.getProdType(G),ce=G.maxLookahead||P,Q=G.idx,te=s.getLookaheadPathsForOptionalProd(Q,V,K,ce),Se=te[0];if(i.isEmpty(i.flatten(Se))){var $=I.buildEmptyRepetitionError({topLevelRule:V,repetition:G});B.push({message:$,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:V.name})}})}),B}n.validateSomeNonEmptyLookaheadPath=F;function E(L,P,I,B){var V=[],j=i.reduce(L,function(G,K,ce){return P.definition[ce].ignoreAmbiguities===!0||i.forEach(K,function(Q){var te=[ce];i.forEach(L,function(Se,$){ce!==$&&s.containsPath(Se,Q)&&P.definition[$].ignoreAmbiguities!==!0&&te.push($)}),te.length>1&&!s.containsPath(V,Q)&&(V.push(Q),G.push({alts:te,path:Q}))}),G},[]),H=t.map(j,function(G){var K=i.map(G.alts,function(Q){return Q+1}),ce=B.buildAlternationAmbiguityError({topLevelRule:I,alternation:P,ambiguityIndices:K,prefixPath:G.path});return{message:ce,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:I.name,occurrence:P.idx,alternatives:[G.alts]}});return H}function M(L,P,I,B){var V=[],j=i.reduce(L,function(H,G,K){var ce=i.map(G,function(Q){return{idx:K,path:Q}});return H.concat(ce)},[]);return i.forEach(j,function(H){var G=P.definition[H.idx];if(G.ignoreAmbiguities!==!0){var K=H.idx,ce=H.path,Q=i.findAll(j,function(Se){return P.definition[Se.idx].ignoreAmbiguities!==!0&&Se.idx<K&&s.isStrictPrefixOfPath(Se.path,ce)}),te=i.map(Q,function(Se){var $=[Se.idx+1,K+1],z=P.idx===0?"":P.idx,W=B.buildAlternationPrefixAmbiguityError({topLevelRule:I,alternation:P,ambiguityIndices:$,prefixPath:Se.path});return{message:W,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:I.name,occurrence:z,alternatives:$}});V=V.concat(te)}}),V}n.checkPrefixAlternativesAmbiguities=M;function w(L,P,I){var B=[],V=i.map(P,function(j){return j.name});return i.forEach(L,function(j){var H=j.name;if(i.contains(V,H)){var G=I.buildNamespaceConflictError(j);B.push({message:G,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:H})}}),B}}),g_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=xt(),t=m_(),i=ju(),r=$o();function o(l){l=e.defaults(l,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(l.rules,function(a){c[a.name]=a}),t.resolveGrammar(c,l.errMsgProvider)}n.resolveGrammar=o;function s(l){return l=e.defaults(l,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(l.rules,l.maxLookahead,l.tokenTypes,l.errMsgProvider,l.grammarName)}n.validateGrammar=s}),jr=at(n=>{var e=n&&n.__extends||function(){var g=function(_,h){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,b){f.__proto__=b}||function(f,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(f[y]=b[y])},g(_,h)};return function(_,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");g(_,h);function f(){this.constructor=_}_.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=xt(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",l=[i,r,o,s];Object.freeze(l);function c(g){return t.contains(l,g.name)}n.isRecognitionException=c;var a=function(g){e(_,g);function _(h,f){var b=this.constructor,y=g.call(this,h)||this;return y.token=f,y.resyncedTokens=[],Object.setPrototypeOf(y,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(y,y.constructor),y}return _}(Error),d=function(g){e(_,g);function _(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=i,y}return _}(a);n.MismatchedTokenException=d;var u=function(g){e(_,g);function _(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=r,y}return _}(a);n.NoViableAltException=u;var p=function(g){e(_,g);function _(h,f){var b=g.call(this,h,f)||this;return b.name=s,b}return _}(a);n.NotAllInputParsedException=p;var m=function(g){e(_,g);function _(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=o,y}return _}(a);n.EarlyExitException=m}),Yu=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Ci(),t=xt(),i=jr(),r=Xu(),o=_n();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(a){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=a}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var l=function(){function a(){}return a.prototype.initRecoverable=function(d){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(d,"recoveryEnabled")?d.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},a.prototype.getTokenToInsert=function(d){var u=e.createTokenInstance(d,"",NaN,NaN,NaN,NaN,NaN,NaN);return u.isInsertedInRecovery=!0,u},a.prototype.canTokenTypeBeInsertedInRecovery=function(d){return!0},a.prototype.tryInRepetitionRecovery=function(d,u,p,m){for(var g=this,_=this.findReSyncTokenType(),h=this.exportLexerState(),f=[],b=!1,y=this.LA(1),v=this.LA(1),A=function(){var T=g.LA(0),C=g.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:y,previous:T,ruleName:g.getCurrRuleFullName()}),F=new i.MismatchedTokenException(C,y,g.LA(0));F.resyncedTokens=t.dropRight(f),g.SAVE_ERROR(F)};!b;)if(this.tokenMatcher(v,m)){A();return}else if(p.call(this)){A(),d.apply(this,u);return}else this.tokenMatcher(v,_)?b=!0:(v=this.SKIP_TOKEN(),this.addToResyncTokens(v,f));this.importLexerState(h)},a.prototype.shouldInRepetitionRecoveryBeTried=function(d,u,p){return!(p===!1||d===void 0||u===void 0||this.tokenMatcher(this.LA(1),d)||this.isBackTracking()||this.canPerformInRuleRecovery(d,this.getFollowsForInRuleRecovery(d,u)))},a.prototype.getFollowsForInRuleRecovery=function(d,u){var p=this.getCurrentGrammarPath(d,u),m=this.getNextPossibleTokenTypes(p);return m},a.prototype.tryInRuleRecovery=function(d,u){if(this.canRecoverWithSingleTokenInsertion(d,u)){var p=this.getTokenToInsert(d);return p}if(this.canRecoverWithSingleTokenDeletion(d)){var m=this.SKIP_TOKEN();return this.consumeToken(),m}throw new s("sad sad panda")},a.prototype.canPerformInRuleRecovery=function(d,u){return this.canRecoverWithSingleTokenInsertion(d,u)||this.canRecoverWithSingleTokenDeletion(d)},a.prototype.canRecoverWithSingleTokenInsertion=function(d,u){var p=this;if(!this.canTokenTypeBeInsertedInRecovery(d)||t.isEmpty(u))return!1;var m=this.LA(1),g=t.find(u,function(_){return p.tokenMatcher(m,_)})!==void 0;return g},a.prototype.canRecoverWithSingleTokenDeletion=function(d){var u=this.tokenMatcher(this.LA(2),d);return u},a.prototype.isInCurrentRuleReSyncSet=function(d){var u=this.getCurrFollowKey(),p=this.getFollowSetFromFollowKey(u);return t.contains(p,d)},a.prototype.findReSyncTokenType=function(){for(var d=this.flattenFollowSet(),u=this.LA(1),p=2;;){var m=u.tokenType;if(t.contains(d,m))return m;u=this.LA(p),p++}},a.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var d=this.getLastExplicitRuleShortName(),u=this.getLastExplicitRuleOccurrenceIndex(),p=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(d),idxInCallingRule:u,inRule:this.shortRuleNameToFullName(p)}},a.prototype.buildFullFollowKeyStack=function(){var d=this,u=this.RULE_STACK,p=this.RULE_OCCURRENCE_STACK;return t.map(u,function(m,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:d.shortRuleNameToFullName(m),idxInCallingRule:p[g],inRule:d.shortRuleNameToFullName(u[g-1])}})},a.prototype.flattenFollowSet=function(){var d=this,u=t.map(this.buildFullFollowKeyStack(),function(p){return d.getFollowSetFromFollowKey(p)});return t.flatten(u)},a.prototype.getFollowSetFromFollowKey=function(d){if(d===n.EOF_FOLLOW_KEY)return[e.EOF];var u=d.ruleName+d.idxInCallingRule+r.IN+d.inRule;return this.resyncFollows[u]},a.prototype.addToResyncTokens=function(d,u){return this.tokenMatcher(d,e.EOF)||u.push(d),u},a.prototype.reSyncTo=function(d){for(var u=[],p=this.LA(1);this.tokenMatcher(p,d)===!1;)p=this.SKIP_TOKEN(),this.addToResyncTokens(p,u);return t.dropRight(u)},a.prototype.attemptInRepetitionRecovery=function(d,u,p,m,g,_,h){},a.prototype.getCurrentGrammarPath=function(d,u){var p=this.getHumanReadableRuleStack(),m=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:p,occurrenceStack:m,lastTok:d,lastTokOccurrence:u};return g},a.prototype.getHumanReadableRuleStack=function(){var d=this;return t.map(this.RULE_STACK,function(u){return d.shortRuleNameToFullName(u)})},a}();n.Recoverable=l;function c(a,d,u,p,m,g,_){var h=this.getKeyForAutomaticLookahead(p,m),f=this.firstAfterRepMap[h];if(f===void 0){var b=this.getCurrRuleFullName(),y=this.getGAstProductions()[b],v=new g(y,m);f=v.startWalking(),this.firstAfterRepMap[h]=f}var A=f.token,T=f.occurrence,C=f.isEndOfRule;this.RULE_STACK.length===1&&C&&A===void 0&&(A=e.EOF,T=1),this.shouldInRepetitionRecoveryBeTried(A,T,_)&&this.tryInRepetitionRecovery(a,d,u,A)}n.attemptInRepetitionRecovery=c}),cl=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),x_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Jo(),t=xt(),i=_n(),r=cl(),o=qo(),s=function(){function l(){}return l.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},l.prototype.preComputeLookaheadFunctions=function(c){var a=this;t.forEach(c,function(d){a.TRACE_INIT(d.name+" Rule Lookahead",function(){var u=o.collectMethods(d),p=u.alternation,m=u.repetition,g=u.option,_=u.repetitionMandatory,h=u.repetitionMandatoryWithSeparator,f=u.repetitionWithSeparator;t.forEach(p,function(b){var y=b.idx===0?"":b.idx;a.TRACE_INIT(""+o.getProductionDslName(b)+y,function(){var v=e.buildLookaheadFuncForOr(b.idx,d,b.maxLookahead||a.maxLookahead,b.hasPredicates,a.dynamicTokensEnabled,a.lookAheadBuilderForAlternatives),A=r.getKeyForAutomaticLookahead(a.fullRuleNameToShort[d.name],r.OR_IDX,b.idx);a.setLaFuncCache(A,v)})}),t.forEach(m,function(b){a.computeLookaheadFunc(d,b.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(g,function(b){a.computeLookaheadFunc(d,b.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(_,function(b){a.computeLookaheadFunc(d,b.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(h,function(b){a.computeLookaheadFunc(d,b.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(f,function(b){a.computeLookaheadFunc(d,b.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,b.maxLookahead,o.getProductionDslName(b))})})})},l.prototype.computeLookaheadFunc=function(c,a,d,u,p,m){var g=this;this.TRACE_INIT(""+m+(a===0?"":a),function(){var _=e.buildLookaheadFuncForOptionalProd(a,c,p||g.maxLookahead,g.dynamicTokensEnabled,u,g.lookAheadBuilderForOptional),h=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[c.name],d,a);g.setLaFuncCache(h,_)})},l.prototype.lookAheadBuilderForOptional=function(c,a,d){return e.buildSingleAlternativeLookaheadFunction(c,a,d)},l.prototype.lookAheadBuilderForAlternatives=function(c,a,d,u){return e.buildAlternativesLookAheadFunc(c,a,d,u)},l.prototype.getKeyForAutomaticLookahead=function(c,a){var d=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(d,c,a)},l.prototype.getLaFuncFromCache=function(c){},l.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},l.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},l.prototype.setLaFuncCache=function(c,a){},l.prototype.setLaFuncCacheUsingMap=function(c,a){this.lookAheadFuncsCache.set(c,a)},l.prototype.setLaFuncUsingObj=function(c,a){this.lookAheadFuncsCache[c]=a},l}();n.LooksAhead=s}),v_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,l){o.children[l]===void 0?o.children[l]=[s]:o.children[l].push(s)}n.addTerminalToCst=i;function r(o,s,l){o.children[s]===void 0?o.children[s]=[l]:o.children[s].push(l)}n.addNoneTerminalToCst=r}),Ku=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=xt();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var l=s.name;return l||"anonymous"}n.functionName=r;function o(s,l){var c=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:l}),!0):!1}n.defineNameProp=o}),__=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=xt(),t=Ku();function i(u,p){for(var m=e.keys(u),g=m.length,_=0;_<g;_++)for(var h=m[_],f=u[h],b=f.length,y=0;y<b;y++){var v=f[y];v.tokenTypeIdx===void 0&&this[v.name](v.children,p)}}n.defaultVisit=i;function r(u,p){var m=function(){};t.defineNameProp(m,u+"BaseSemantics");var g={visit:function(_,h){if(e.isArray(_)&&(_=_[0]),!e.isUndefined(_))return this[_.name](_.children,h)},validateVisitor:function(){var _=l(this,p);if(!e.isEmpty(_)){var h=e.map(_,function(f){return f.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+h.join(`

`).replace(/\n/g,`
	`)))}}};return m.prototype=g,m.prototype.constructor=m,m._RULE_NAMES=p,m}n.createBaseSemanticVisitorConstructor=r;function o(u,p,m){var g=function(){};t.defineNameProp(g,u+"BaseSemanticsWithDefaults");var _=Object.create(m.prototype);return e.forEach(p,function(h){_[h]=i}),g.prototype=_,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(u){u[u.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",u[u.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function l(u,p){var m=c(u,p),g=d(u,p);return m.concat(g)}n.validateVisitor=l;function c(u,p){var m=e.map(p,function(g){if(!e.isFunction(u[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(u.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(m)}n.validateMissingCstMethods=c;var a=["constructor","visit","validateVisitor"];function d(u,p){var m=[];for(var g in u)e.isFunction(u[g])&&!e.contains(a,g)&&!e.contains(p,g)&&m.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(u.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return m}n.validateRedundantMethods=d}),b_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=v_(),t=xt(),i=__(),r=_n(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(l){if(this.CST_STACK=[],this.outputCst=l.outputCst,this.nodeLocationTracking=t.has(l,"nodeLocationTracking")?l.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+l.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(l){l.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(l){l.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(l){l.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(l){var c=this.LA(1);l.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(l,c){var a={name:l,children:{}};this.setInitialNodeLocation(a),this.CST_STACK.push(a)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(l){var c=this.LA(0),a=l.location;a.startOffset<=c.startOffset?(a.endOffset=c.endOffset,a.endLine=c.endLine,a.endColumn=c.endColumn):(a.startOffset=NaN,a.startLine=NaN,a.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(l){var c=this.LA(0),a=l.location;a.startOffset<=c.startOffset?a.endOffset=c.endOffset:a.startOffset=NaN},s.prototype.cstPostTerminal=function(l,c){var a=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(a,c,l),this.setNodeLocationFromToken(a.location,c)},s.prototype.cstPostNonTerminal=function(l,c){var a=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(a,c,l),this.setNodeLocationFromNode(a.location,l.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var l=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=l,l}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var l=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=l,l}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var l=this.RULE_OCCURRENCE_STACK;return l[l.length-1]},s}();n.TreeBuilder=o}),y_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=_n(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),E_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=xt(),t=jr(),i=_n(),r=$o(),o=ju(),s=hn(),l=function(){function c(){}return c.prototype.ACTION=function(a){return a.call(this)},c.prototype.consume=function(a,d,u){return this.consumeInternal(d,a,u)},c.prototype.subrule=function(a,d,u){return this.subruleInternal(d,a,u)},c.prototype.option=function(a,d){return this.optionInternal(d,a)},c.prototype.or=function(a,d){return this.orInternal(d,a)},c.prototype.many=function(a,d){return this.manyInternal(a,d)},c.prototype.atLeastOne=function(a,d){return this.atLeastOneInternal(a,d)},c.prototype.CONSUME=function(a,d){return this.consumeInternal(a,0,d)},c.prototype.CONSUME1=function(a,d){return this.consumeInternal(a,1,d)},c.prototype.CONSUME2=function(a,d){return this.consumeInternal(a,2,d)},c.prototype.CONSUME3=function(a,d){return this.consumeInternal(a,3,d)},c.prototype.CONSUME4=function(a,d){return this.consumeInternal(a,4,d)},c.prototype.CONSUME5=function(a,d){return this.consumeInternal(a,5,d)},c.prototype.CONSUME6=function(a,d){return this.consumeInternal(a,6,d)},c.prototype.CONSUME7=function(a,d){return this.consumeInternal(a,7,d)},c.prototype.CONSUME8=function(a,d){return this.consumeInternal(a,8,d)},c.prototype.CONSUME9=function(a,d){return this.consumeInternal(a,9,d)},c.prototype.SUBRULE=function(a,d){return this.subruleInternal(a,0,d)},c.prototype.SUBRULE1=function(a,d){return this.subruleInternal(a,1,d)},c.prototype.SUBRULE2=function(a,d){return this.subruleInternal(a,2,d)},c.prototype.SUBRULE3=function(a,d){return this.subruleInternal(a,3,d)},c.prototype.SUBRULE4=function(a,d){return this.subruleInternal(a,4,d)},c.prototype.SUBRULE5=function(a,d){return this.subruleInternal(a,5,d)},c.prototype.SUBRULE6=function(a,d){return this.subruleInternal(a,6,d)},c.prototype.SUBRULE7=function(a,d){return this.subruleInternal(a,7,d)},c.prototype.SUBRULE8=function(a,d){return this.subruleInternal(a,8,d)},c.prototype.SUBRULE9=function(a,d){return this.subruleInternal(a,9,d)},c.prototype.OPTION=function(a){return this.optionInternal(a,0)},c.prototype.OPTION1=function(a){return this.optionInternal(a,1)},c.prototype.OPTION2=function(a){return this.optionInternal(a,2)},c.prototype.OPTION3=function(a){return this.optionInternal(a,3)},c.prototype.OPTION4=function(a){return this.optionInternal(a,4)},c.prototype.OPTION5=function(a){return this.optionInternal(a,5)},c.prototype.OPTION6=function(a){return this.optionInternal(a,6)},c.prototype.OPTION7=function(a){return this.optionInternal(a,7)},c.prototype.OPTION8=function(a){return this.optionInternal(a,8)},c.prototype.OPTION9=function(a){return this.optionInternal(a,9)},c.prototype.OR=function(a){return this.orInternal(a,0)},c.prototype.OR1=function(a){return this.orInternal(a,1)},c.prototype.OR2=function(a){return this.orInternal(a,2)},c.prototype.OR3=function(a){return this.orInternal(a,3)},c.prototype.OR4=function(a){return this.orInternal(a,4)},c.prototype.OR5=function(a){return this.orInternal(a,5)},c.prototype.OR6=function(a){return this.orInternal(a,6)},c.prototype.OR7=function(a){return this.orInternal(a,7)},c.prototype.OR8=function(a){return this.orInternal(a,8)},c.prototype.OR9=function(a){return this.orInternal(a,9)},c.prototype.MANY=function(a){this.manyInternal(0,a)},c.prototype.MANY1=function(a){this.manyInternal(1,a)},c.prototype.MANY2=function(a){this.manyInternal(2,a)},c.prototype.MANY3=function(a){this.manyInternal(3,a)},c.prototype.MANY4=function(a){this.manyInternal(4,a)},c.prototype.MANY5=function(a){this.manyInternal(5,a)},c.prototype.MANY6=function(a){this.manyInternal(6,a)},c.prototype.MANY7=function(a){this.manyInternal(7,a)},c.prototype.MANY8=function(a){this.manyInternal(8,a)},c.prototype.MANY9=function(a){this.manyInternal(9,a)},c.prototype.MANY_SEP=function(a){this.manySepFirstInternal(0,a)},c.prototype.MANY_SEP1=function(a){this.manySepFirstInternal(1,a)},c.prototype.MANY_SEP2=function(a){this.manySepFirstInternal(2,a)},c.prototype.MANY_SEP3=function(a){this.manySepFirstInternal(3,a)},c.prototype.MANY_SEP4=function(a){this.manySepFirstInternal(4,a)},c.prototype.MANY_SEP5=function(a){this.manySepFirstInternal(5,a)},c.prototype.MANY_SEP6=function(a){this.manySepFirstInternal(6,a)},c.prototype.MANY_SEP7=function(a){this.manySepFirstInternal(7,a)},c.prototype.MANY_SEP8=function(a){this.manySepFirstInternal(8,a)},c.prototype.MANY_SEP9=function(a){this.manySepFirstInternal(9,a)},c.prototype.AT_LEAST_ONE=function(a){this.atLeastOneInternal(0,a)},c.prototype.AT_LEAST_ONE1=function(a){return this.atLeastOneInternal(1,a)},c.prototype.AT_LEAST_ONE2=function(a){this.atLeastOneInternal(2,a)},c.prototype.AT_LEAST_ONE3=function(a){this.atLeastOneInternal(3,a)},c.prototype.AT_LEAST_ONE4=function(a){this.atLeastOneInternal(4,a)},c.prototype.AT_LEAST_ONE5=function(a){this.atLeastOneInternal(5,a)},c.prototype.AT_LEAST_ONE6=function(a){this.atLeastOneInternal(6,a)},c.prototype.AT_LEAST_ONE7=function(a){this.atLeastOneInternal(7,a)},c.prototype.AT_LEAST_ONE8=function(a){this.atLeastOneInternal(8,a)},c.prototype.AT_LEAST_ONE9=function(a){this.atLeastOneInternal(9,a)},c.prototype.AT_LEAST_ONE_SEP=function(a){this.atLeastOneSepFirstInternal(0,a)},c.prototype.AT_LEAST_ONE_SEP1=function(a){this.atLeastOneSepFirstInternal(1,a)},c.prototype.AT_LEAST_ONE_SEP2=function(a){this.atLeastOneSepFirstInternal(2,a)},c.prototype.AT_LEAST_ONE_SEP3=function(a){this.atLeastOneSepFirstInternal(3,a)},c.prototype.AT_LEAST_ONE_SEP4=function(a){this.atLeastOneSepFirstInternal(4,a)},c.prototype.AT_LEAST_ONE_SEP5=function(a){this.atLeastOneSepFirstInternal(5,a)},c.prototype.AT_LEAST_ONE_SEP6=function(a){this.atLeastOneSepFirstInternal(6,a)},c.prototype.AT_LEAST_ONE_SEP7=function(a){this.atLeastOneSepFirstInternal(7,a)},c.prototype.AT_LEAST_ONE_SEP8=function(a){this.atLeastOneSepFirstInternal(8,a)},c.prototype.AT_LEAST_ONE_SEP9=function(a){this.atLeastOneSepFirstInternal(9,a)},c.prototype.RULE=function(a,d,u){if(u===void 0&&(u=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,a)){var p=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:a,grammarName:this.className}),m={message:p,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:a};this.definitionErrors.push(m)}this.definedRulesNames.push(a);var g=this.defineRule(a,d,u);return this[a]=g,g},c.prototype.OVERRIDE_RULE=function(a,d,u){u===void 0&&(u=i.DEFAULT_RULE_CONFIG);var p=[];p=p.concat(o.validateRuleIsOverridden(a,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(p);var m=this.defineRule(a,d,u);return this[a]=m,m},c.prototype.BACKTRACK=function(a,d){return function(){this.isBackTrackingStack.push(1);var u=this.saveRecogState();try{return a.apply(this,d),!0}catch(p){if(t.isRecognitionException(p))return!1;throw p}finally{this.reloadRecogState(u),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=l}),S_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=xt(),t=cl(),i=jr(),r=Jo(),o=Zo(),s=_n(),l=Yu(),c=Ci(),a=Wr(),d=Ku(),u=function(){function p(){}return p.prototype.initRecognizerEngine=function(m,g){if(this.className=d.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=a.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(m)){if(e.isEmpty(m))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof m[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(m))this.tokensMap=e.reduce(m,function(b,y){return b[y.name]=y,b},{});else if(e.has(m,"modes")&&e.every(e.flatten(e.values(m.modes)),a.isTokenType)){var _=e.flatten(e.values(m.modes)),h=e.uniq(_);this.tokensMap=e.reduce(h,function(b,y){return b[y.name]=y,b},{})}else if(e.isObject(m))this.tokensMap=e.cloneObj(m);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var f=e.every(e.values(m),function(b){return e.isEmpty(b.categoryMatches)});this.tokenMatcher=f?a.tokenStructuredMatcherNoCategories:a.tokenStructuredMatcher,a.augmentTokenTypes(e.values(this.tokensMap))},p.prototype.defineRule=function(m,g,_){if(this.selfAnalysisDone)throw Error("Grammar rule <"+m+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var h=e.has(_,"resyncEnabled")?_.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,f=e.has(_,"recoveryValueFunc")?_.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,b=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[b]=m,this.fullRuleNameToShort[m]=b;function y(T){try{if(this.outputCst===!0){g.apply(this,T);var C=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(C),C}else return g.apply(this,T)}catch(F){return this.invokeRuleCatch(F,h,f)}finally{this.ruleFinallyStateUpdate()}}var v=function(T,C){return T===void 0&&(T=0),this.ruleInvocationStateUpdate(b,m,T),y.call(this,C)},A="ruleName";return v[A]=m,v.originalGrammarAction=g,v},p.prototype.invokeRuleCatch=function(m,g,_){var h=this.RULE_STACK.length===1,f=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(m)){var b=m;if(f){var y=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(y))if(b.resyncedTokens=this.reSyncTo(y),this.outputCst){var v=this.CST_STACK[this.CST_STACK.length-1];return v.recoveredNode=!0,v}else return _();else{if(this.outputCst){var v=this.CST_STACK[this.CST_STACK.length-1];v.recoveredNode=!0,b.partialCstResult=v}throw b}}else{if(h)return this.moveToTerminatedState(),_();throw b}}else throw m},p.prototype.optionInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(m,g,_)},p.prototype.optionInternalLogic=function(m,g,_){var h=this,f=this.getLaFuncFromCache(_),b,y;if(m.DEF!==void 0){if(b=m.DEF,y=m.GATE,y!==void 0){var v=f;f=function(){return y.call(h)&&v.call(h)}}}else b=m;if(f.call(this)===!0)return b.call(this)},p.prototype.atLeastOneInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,m);return this.atLeastOneInternalLogic(m,g,_)},p.prototype.atLeastOneInternalLogic=function(m,g,_){var h=this,f=this.getLaFuncFromCache(_),b,y;if(g.DEF!==void 0){if(b=g.DEF,y=g.GATE,y!==void 0){var v=f;f=function(){return y.call(h)&&v.call(h)}}}else b=g;if(f.call(this)===!0)for(var A=this.doSingleRepetition(b);f.call(this)===!0&&A===!0;)A=this.doSingleRepetition(b);else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[m,g],f,t.AT_LEAST_ONE_IDX,m,o.NextTerminalAfterAtLeastOneWalker)},p.prototype.atLeastOneSepFirstInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,m);this.atLeastOneSepFirstInternalLogic(m,g,_)},p.prototype.atLeastOneSepFirstInternalLogic=function(m,g,_){var h=this,f=g.DEF,b=g.SEP,y=this.getLaFuncFromCache(_);if(y.call(this)===!0){f.call(this);for(var v=function(){return h.tokenMatcher(h.LA(1),b)};this.tokenMatcher(this.LA(1),b)===!0;)this.CONSUME(b),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,b,v,f,o.NextTerminalAfterAtLeastOneSepWalker],v,t.AT_LEAST_ONE_SEP_IDX,m,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},p.prototype.manyInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.MANY_IDX,m);return this.manyInternalLogic(m,g,_)},p.prototype.manyInternalLogic=function(m,g,_){var h=this,f=this.getLaFuncFromCache(_),b,y;if(g.DEF!==void 0){if(b=g.DEF,y=g.GATE,y!==void 0){var v=f;f=function(){return y.call(h)&&v.call(h)}}}else b=g;for(var A=!0;f.call(this)===!0&&A===!0;)A=this.doSingleRepetition(b);this.attemptInRepetitionRecovery(this.manyInternal,[m,g],f,t.MANY_IDX,m,o.NextTerminalAfterManyWalker,A)},p.prototype.manySepFirstInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,m);this.manySepFirstInternalLogic(m,g,_)},p.prototype.manySepFirstInternalLogic=function(m,g,_){var h=this,f=g.DEF,b=g.SEP,y=this.getLaFuncFromCache(_);if(y.call(this)===!0){f.call(this);for(var v=function(){return h.tokenMatcher(h.LA(1),b)};this.tokenMatcher(this.LA(1),b)===!0;)this.CONSUME(b),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,b,v,f,o.NextTerminalAfterManySepWalker],v,t.MANY_SEP_IDX,m,o.NextTerminalAfterManySepWalker)}},p.prototype.repetitionSepSecondInternal=function(m,g,_,h,f){for(;_();)this.CONSUME(g),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,g,_,h,f],_,t.AT_LEAST_ONE_SEP_IDX,m,f)},p.prototype.doSingleRepetition=function(m){var g=this.getLexerPosition();m.call(this);var _=this.getLexerPosition();return _>g},p.prototype.orInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.OR_IDX,g),h=e.isArray(m)?m:m.DEF,f=this.getLaFuncFromCache(_),b=f.call(this,h);if(b!==void 0){var y=h[b];return y.ALT.call(this)}this.raiseNoAltException(g,m.ERR_MSG)},p.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var m=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:m,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,m))}},p.prototype.subruleInternal=function(m,g,_){var h;try{var f=_!==void 0?_.ARGS:void 0;return h=m.call(this,g,f),this.cstPostNonTerminal(h,_!==void 0&&_.LABEL!==void 0?_.LABEL:m.ruleName),h}catch(b){this.subruleInternalError(b,_,m.ruleName)}},p.prototype.subruleInternalError=function(m,g,_){throw i.isRecognitionException(m)&&m.partialCstResult!==void 0&&(this.cstPostNonTerminal(m.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:_),delete m.partialCstResult),m},p.prototype.consumeInternal=function(m,g,_){var h;try{var f=this.LA(1);this.tokenMatcher(f,m)===!0?(this.consumeToken(),h=f):this.consumeInternalError(m,f,_)}catch(b){h=this.consumeInternalRecovery(m,g,b)}return this.cstPostTerminal(_!==void 0&&_.LABEL!==void 0?_.LABEL:m.name,h),h},p.prototype.consumeInternalError=function(m,g,_){var h,f=this.LA(0);throw _!==void 0&&_.ERR_MSG?h=_.ERR_MSG:h=this.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:g,previous:f,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(h,g,f))},p.prototype.consumeInternalRecovery=function(m,g,_){if(this.recoveryEnabled&&_.name==="MismatchedTokenException"&&!this.isBackTracking()){var h=this.getFollowsForInRuleRecovery(m,g);try{return this.tryInRuleRecovery(m,h)}catch(f){throw f.name===l.IN_RULE_RECOVERY_EXCEPTION?_:f}}else throw _},p.prototype.saveRecogState=function(){var m=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:m,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},p.prototype.reloadRecogState=function(m){this.errors=m.errors,this.importLexerState(m.lexerState),this.RULE_STACK=m.RULE_STACK},p.prototype.ruleInvocationStateUpdate=function(m,g,_){this.RULE_OCCURRENCE_STACK.push(_),this.RULE_STACK.push(m),this.cstInvocationStateUpdate(g,m)},p.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},p.prototype.getCurrRuleFullName=function(){var m=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[m]},p.prototype.shortRuleNameToFullName=function(m){return this.shortRuleNameToFull[m]},p.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},p.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},p}();n.RecognizerEngine=u}),T_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=jr(),t=xt(),i=Jo(),r=_n(),o=function(){function s(){}return s.prototype.initErrorHandler=function(l){this._errors=[],this.errorMessageProvider=t.has(l,"errorMessageProvider")?l.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(l){if(e.isRecognitionException(l))return l.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(l),l;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(l){this._errors=l},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(l,c,a){for(var d=this.getCurrRuleFullName(),u=this.getGAstProductions()[d],p=i.getLookaheadPathsForOptionalProd(l,u,c,this.maxLookahead),m=p[0],g=[],_=1;_<=this.maxLookahead;_++)g.push(this.LA(_));var h=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:m,actual:g,previous:this.LA(0),customUserDescription:a,ruleName:d});throw this.SAVE_ERROR(new e.EarlyExitException(h,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(l,c){for(var a=this.getCurrRuleFullName(),d=this.getGAstProductions()[a],u=i.getLookaheadPathsForOr(l,d,this.maxLookahead),p=[],m=1;m<=this.maxLookahead;m++)p.push(this.LA(m));var g=this.LA(0),_=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:u,actual:p,previous:g,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(_,this.LA(1),g))},s}();n.ErrorHandler=o}),M_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=Zo(),t=xt(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var l=this.gastProductionsCache[o];if(t.isUndefined(l))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([l],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),l=this.getGAstProductions(),c=l[s],a=new e.NextAfterTokenWalker(c,o).startWalking();return a},r}();n.ContentAssist=i}),A_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=xt(),t=hn(),i=Ko(),r=Wr(),o=Ci(),s=_n(),l=cl(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var a=!0,d=Math.pow(2,l.BITS_FOR_OCCURRENCE_IDX)-1,u=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([u]);var p=o.createTokenInstance(u,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(p);var m={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function y(){}return y.prototype.initGastRecorder=function(v){this.recordingProdStack=[],this.RECORDING_PHASE=!1},y.prototype.enableRecording=function(){var v=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var A=function(C){var F=C>0?C:"";v["CONSUME"+F]=function(E,M){return this.consumeInternalRecord(E,C,M)},v["SUBRULE"+F]=function(E,M){return this.subruleInternalRecord(E,C,M)},v["OPTION"+F]=function(E){return this.optionInternalRecord(E,C)},v["OR"+F]=function(E){return this.orInternalRecord(E,C)},v["MANY"+F]=function(E){this.manyInternalRecord(C,E)},v["MANY_SEP"+F]=function(E){this.manySepFirstInternalRecord(C,E)},v["AT_LEAST_ONE"+F]=function(E){this.atLeastOneInternalRecord(C,E)},v["AT_LEAST_ONE_SEP"+F]=function(E){this.atLeastOneSepFirstInternalRecord(C,E)}},T=0;T<10;T++)A(T);v.consume=function(C,F,E){return this.consumeInternalRecord(F,C,E)},v.subrule=function(C,F,E){return this.subruleInternalRecord(F,C,E)},v.option=function(C,F){return this.optionInternalRecord(F,C)},v.or=function(C,F){return this.orInternalRecord(F,C)},v.many=function(C,F){this.manyInternalRecord(C,F)},v.atLeastOne=function(C,F){this.atLeastOneInternalRecord(C,F)},v.ACTION=v.ACTION_RECORD,v.BACKTRACK=v.BACKTRACK_RECORD,v.LA=v.LA_RECORD})},y.prototype.disableRecording=function(){var v=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var A=0;A<10;A++){var T=A>0?A:"";delete v["CONSUME"+T],delete v["SUBRULE"+T],delete v["OPTION"+T],delete v["OR"+T],delete v["MANY"+T],delete v["MANY_SEP"+T],delete v["AT_LEAST_ONE"+T],delete v["AT_LEAST_ONE_SEP"+T]}delete v.consume,delete v.subrule,delete v.option,delete v.or,delete v.many,delete v.atLeastOne,delete v.ACTION,delete v.BACKTRACK,delete v.LA})},y.prototype.ACTION_RECORD=function(v){},y.prototype.BACKTRACK_RECORD=function(v,A){return function(){return!0}},y.prototype.LA_RECORD=function(v){return s.END_OF_FILE},y.prototype.topLevelRuleRecord=function(v,A){try{var T=new t.Rule({definition:[],name:v});return T.name=v,this.recordingProdStack.push(T),A.call(this),this.recordingProdStack.pop(),T}catch(C){if(C.KNOWN_RECORDER_ERROR!==!0)try{C.message=C.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw C}throw C}},y.prototype.optionInternalRecord=function(v,A){return _.call(this,t.Option,v,A)},y.prototype.atLeastOneInternalRecord=function(v,A){_.call(this,t.RepetitionMandatory,A,v)},y.prototype.atLeastOneSepFirstInternalRecord=function(v,A){_.call(this,t.RepetitionMandatoryWithSeparator,A,v,a)},y.prototype.manyInternalRecord=function(v,A){_.call(this,t.Repetition,A,v)},y.prototype.manySepFirstInternalRecord=function(v,A){_.call(this,t.RepetitionWithSeparator,A,v,a)},y.prototype.orInternalRecord=function(v,A){return h.call(this,v,A)},y.prototype.subruleInternalRecord=function(v,A,T){if(b(A),!v||e.has(v,"ruleName")===!1){var C=new Error("<SUBRULE"+f(A)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(v)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var F=e.peek(this.recordingProdStack),E=v.ruleName,M=new t.NonTerminal({idx:A,nonTerminalName:E,referencedRule:void 0});return F.definition.push(M),this.outputCst?m:c},y.prototype.consumeInternalRecord=function(v,A,T){if(b(A),!r.hasShortKeyProperty(v)){var C=new Error("<CONSUME"+f(A)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(v)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var F=e.peek(this.recordingProdStack),E=new t.Terminal({idx:A,terminalType:v});return F.definition.push(E),p},y}();n.GastRecorder=g;function _(y,v,A,T){T===void 0&&(T=!1),b(A);var C=e.peek(this.recordingProdStack),F=e.isFunction(v)?v:v.DEF,E=new y({definition:[],idx:A});return T&&(E.separator=v.SEP),e.has(v,"MAX_LOOKAHEAD")&&(E.maxLookahead=v.MAX_LOOKAHEAD),this.recordingProdStack.push(E),F.call(this),C.definition.push(E),this.recordingProdStack.pop(),c}function h(y,v){var A=this;b(v);var T=e.peek(this.recordingProdStack),C=e.isArray(y)===!1,F=C===!1?y:y.DEF,E=new t.Alternation({definition:[],idx:v,ignoreAmbiguities:C&&y.IGNORE_AMBIGUITIES===!0});e.has(y,"MAX_LOOKAHEAD")&&(E.maxLookahead=y.MAX_LOOKAHEAD);var M=e.some(F,function(w){return e.isFunction(w.GATE)});return E.hasPredicates=M,T.definition.push(E),e.forEach(F,function(w){var L=new t.Alternative({definition:[]});E.definition.push(L),e.has(w,"IGNORE_AMBIGUITIES")?L.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(L.ignoreAmbiguities=!0),A.recordingProdStack.push(L),w.ALT.call(A),A.recordingProdStack.pop()}),c}function f(y){return y===0?"":""+y}function b(y){if(y<0||y>d){var v=new Error("Invalid DSL Method idx value: <"+y+`>
	`+("Idx value must be a none negative value smaller than "+(d+1)));throw v.KNOWN_RECORDER_ERROR=!0,v}}}),R_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=xt(),t=_n(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,l=typeof s=="number";this.traceInitMaxIdent=l?s:1/0,this.traceInitPerf=l?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var l=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(l+"--> <"+o+">");var c=e.timer(s),a=c.time,d=c.value,u=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(l+"<-- <"+o+"> time: "+a+"ms"),this.traceInitIndent--,d}else return s()},r}();n.PerformanceTracer=i}),C_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var l=Object.getOwnPropertyDescriptor(o,s);l&&(l.get||l.set)?Object.defineProperty(t.prototype,s,l):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),_n=at(n=>{var e=n&&n.__extends||function(){var T=function(C,F){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,M){E.__proto__=M}||function(E,M){for(var w in M)Object.prototype.hasOwnProperty.call(M,w)&&(E[w]=M[w])},T(C,F)};return function(C,F){if(typeof F!="function"&&F!==null)throw new TypeError("Class extends value "+String(F)+" is not a constructor or null");T(C,F);function E(){this.constructor=C}C.prototype=F===null?Object.create(F):(E.prototype=F.prototype,new E)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=xt(),i=p_(),r=Ci(),o=$o(),s=g_(),l=Yu(),c=x_(),a=b_(),d=y_(),u=E_(),p=S_(),m=T_(),g=M_(),_=A_(),h=R_(),f=C_();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(T){T[T.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",T[T.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",T[T.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",T[T.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",T[T.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",T[T.LEFT_RECURSION=5]="LEFT_RECURSION",T[T.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",T[T.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",T[T.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",T[T.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",T[T.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",T[T.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",T[T.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function b(T){return T===void 0&&(T=void 0),function(){return T}}n.EMPTY_ALT=b;var y=function(){function T(C,F){this.definitionErrors=[],this.selfAnalysisDone=!1;var E=this;if(E.initErrorHandler(F),E.initLexerAdapter(),E.initLooksAhead(F),E.initRecognizerEngine(C,F),E.initRecoverable(F),E.initTreeBuilder(F),E.initContentAssist(),E.initGastRecorder(F),E.initPerformanceTracer(F),t.has(F,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(F,"skipValidations")?F.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return T.performSelfAnalysis=function(C){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},T.prototype.performSelfAnalysis=function(){var C=this;this.TRACE_INIT("performSelfAnalysis",function(){var F;C.selfAnalysisDone=!0;var E=C.className;C.TRACE_INIT("toFastProps",function(){t.toFastProperties(C)}),C.TRACE_INIT("Grammar Recording",function(){try{C.enableRecording(),t.forEach(C.definedRulesNames,function(w){var L=C[w],P=L.originalGrammarAction,I=void 0;C.TRACE_INIT(w+" Rule",function(){I=C.topLevelRuleRecord(w,P)}),C.gastProductionsCache[w]=I})}finally{C.disableRecording()}});var M=[];if(C.TRACE_INIT("Grammar Resolving",function(){M=s.resolveGrammar({rules:t.values(C.gastProductionsCache)}),C.definitionErrors=C.definitionErrors.concat(M)}),C.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(M)&&C.skipValidations===!1){var w=s.validateGrammar({rules:t.values(C.gastProductionsCache),maxLookahead:C.maxLookahead,tokenTypes:t.values(C.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:E});C.definitionErrors=C.definitionErrors.concat(w)}}),t.isEmpty(C.definitionErrors)&&(C.recoveryEnabled&&C.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(C.gastProductionsCache));C.resyncFollows=w}),C.TRACE_INIT("ComputeLookaheadFunctions",function(){C.preComputeLookaheadFunctions(t.values(C.gastProductionsCache))})),!T.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(C.definitionErrors))throw F=t.map(C.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+F.join(`
-------------------------------
`))})},T.DEFER_DEFINITION_ERRORS_HANDLING=!1,T}();n.Parser=y,f.applyMixins(y,[l.Recoverable,c.LooksAhead,a.TreeBuilder,d.LexerAdapter,p.RecognizerEngine,u.RecognizerApi,m.ErrorHandler,g.ContentAssist,_.GastRecorder,h.PerformanceTracer]);var v=function(T){e(C,T);function C(F,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var M=this,w=t.cloneObj(E);return w.outputCst=!0,M=T.call(this,F,w)||this,M}return C}(y);n.CstParser=v;var A=function(T){e(C,T);function C(F,E){E===void 0&&(E=n.DEFAULT_PARSER_CONFIG);var M=this,w=t.cloneObj(E);return w.outputCst=!1,M=T.call(this,F,w)||this,M}return C}(y);n.EmbeddedActionsParser=A}),w_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Vu();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,l=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,c=o.css,a=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,d=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,u=`
<link rel='stylesheet' href='`+a+`'>
`,p=`
<script src='`+l+`vendor/railroad-diagrams.js'><\/script>
<script src='`+l+`src/diagrams_builder.js'><\/script>
<script src='`+l+`src/diagrams_behavior.js'><\/script>
<script src='`+l+`src/main.js'><\/script>
`,m=`
<div id="diagrams" align="center"></div>
`,g=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,_=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return d+u+p+m+g+_}n.createSyntaxDiagramsCode=t}),P_=at(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Vu();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=_n();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Ko();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Ci();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=$o();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=jr();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var l=Hu();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return l.defaultLexerErrorProvider}});var c=hn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var a=hn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return a.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return a.serializeProduction}});var d=Xr();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return d.GAstVisitor}});function u(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=u;var p=w_();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return p.createSyntaxDiagramsCode}});var m=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=m});const Cr=P_();class L_ extends Pn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?lm.extractUrlBase(e):o.path,l=new Iu(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(e,function(c){try{t(o.parse(c,s))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(S){const x=o(),R=new I_(x.tokens),D=new O_(x.tokenVocabulary),O=s(D.getBaseCstVisitorConstructor()),U=R.lex(S);D.input=U.tokens;const q=D.vrml();if(D.errors.length>0)throw console.error(D.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return O.visit(q)}function o(){const S=Cr.createToken,x=S({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),R=S({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:x}),D=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],O=S({name:"Version",pattern:/#VRML.*/,longer_alt:R}),U=S({name:"NodeName",pattern:new RegExp(D.join("|")),longer_alt:R}),q=S({name:"DEF",pattern:/DEF/,longer_alt:R}),Y=S({name:"USE",pattern:/USE/,longer_alt:R}),ae=S({name:"ROUTE",pattern:/ROUTE/,longer_alt:R}),de=S({name:"TO",pattern:/TO/,longer_alt:R}),ie=S({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),_e=S({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),Ce=S({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),J=S({name:"TrueLiteral",pattern:/TRUE/}),se=S({name:"FalseLiteral",pattern:/FALSE/}),ye=S({name:"NullLiteral",pattern:/NULL/}),k=S({name:"LSquare",pattern:/\[/}),ve=S({name:"RSquare",pattern:/]/}),xe=S({name:"LCurly",pattern:/{/}),fe=S({name:"RCurly",pattern:/}/}),be=S({name:"Comment",pattern:/#.*/,group:Cr.Lexer.SKIPPED}),Ie=[S({name:"WhiteSpace",pattern:/[ ,\s]/,group:Cr.Lexer.SKIPPED}),U,q,Y,ae,de,J,se,ye,O,R,x,ie,_e,Ce,k,ve,xe,fe,be],Ve={};for(let Ge=0,we=Ie.length;Ge<we;Ge++){const ke=Ie[Ge];Ve[ke.name]=ke}return{tokens:Ie,tokenVocabulary:Ve}}function s(S){class x extends S{constructor(){super(),this.validateVisitor()}vrml(O){const U={version:this.visit(O.version),nodes:[],routes:[]};for(let q=0,Y=O.node.length;q<Y;q++){const ae=O.node[q];U.nodes.push(this.visit(ae))}if(O.route)for(let q=0,Y=O.route.length;q<Y;q++){const ae=O.route[q];U.routes.push(this.visit(ae))}return U}version(O){return O.Version[0].image}node(O){const U={name:O.NodeName[0].image,fields:[]};if(O.field)for(let q=0,Y=O.field.length;q<Y;q++){const ae=O.field[q];U.fields.push(this.visit(ae))}return O.def&&(U.DEF=this.visit(O.def[0])),U}field(O){const U={name:O.Identifier[0].image,type:null,values:null};let q;return O.singleFieldValue&&(q=this.visit(O.singleFieldValue[0])),O.multiFieldValue&&(q=this.visit(O.multiFieldValue[0])),U.type=q.type,U.values=q.values,U}def(O){return(O.Identifier||O.NodeName)[0].image}use(O){return{USE:(O.Identifier||O.NodeName)[0].image}}singleFieldValue(O){return R(this,O)}multiFieldValue(O){return R(this,O)}route(O){return{FROM:O.RouteIdentifier[0].image,TO:O.RouteIdentifier[1].image}}}function R(D,O){const U={type:null,values:[]};if(O.node){U.type="node";for(let q=0,Y=O.node.length;q<Y;q++){const ae=O.node[q];U.values.push(D.visit(ae))}}if(O.use){U.type="use";for(let q=0,Y=O.use.length;q<Y;q++){const ae=O.use[q];U.values.push(D.visit(ae))}}if(O.StringLiteral){U.type="string";for(let q=0,Y=O.StringLiteral.length;q<Y;q++){const ae=O.StringLiteral[q];U.values.push(ae.image.replace(/'|"/g,""))}}if(O.NumberLiteral){U.type="number";for(let q=0,Y=O.NumberLiteral.length;q<Y;q++){const ae=O.NumberLiteral[q];U.values.push(parseFloat(ae.image))}}if(O.HexLiteral){U.type="hex";for(let q=0,Y=O.HexLiteral.length;q<Y;q++){const ae=O.HexLiteral[q];U.values.push(ae.image)}}if(O.TrueLiteral){U.type="boolean";for(let q=0,Y=O.TrueLiteral.length;q<Y;q++)O.TrueLiteral[q].image==="TRUE"&&U.values.push(!0)}if(O.FalseLiteral){U.type="boolean";for(let q=0,Y=O.FalseLiteral.length;q<Y;q++)O.FalseLiteral[q].image==="FALSE"&&U.values.push(!1)}return O.NullLiteral&&(U.type="null",O.NullLiteral.forEach(function(){U.values.push(null)})),U}return new x}function l(S){const x=S.nodes,R=new Su;for(let D=0,O=x.length;D<O;D++){const U=x[D];c(U)}for(let D=0,O=x.length;D<O;D++){const U=x[D],q=a(U);q instanceof Ft&&R.add(q),U.name==="WorldInfo"&&(R.userData.worldInfo=q)}return R}function c(S){S.DEF&&(i[S.DEF]=S);const x=S.fields;for(let R=0,D=x.length;R<D;R++){const O=x[R];if(O.type==="node"){const U=O.values;for(let q=0,Y=U.length;q<Y;q++)c(U[q])}}}function a(S){return S.USE?V(S.USE):(S.build!==void 0||(S.build=d(S)),S.build)}function d(S){const x=S.name;let R;switch(x){case"Anchor":case"Group":case"Transform":case"Collision":R=u(S);break;case"Background":R=p(S);break;case"Shape":R=m(S);break;case"Appearance":R=g(S);break;case"Material":R=_(S);break;case"ImageTexture":R=y(S);break;case"PixelTexture":R=b(S);break;case"TextureTransform":R=v(S);break;case"IndexedFaceSet":R=C(S);break;case"IndexedLineSet":R=F(S);break;case"PointSet":R=E(S);break;case"Box":R=M(S);break;case"Cone":R=w(S);break;case"Cylinder":R=L(S);break;case"Sphere":R=P(S);break;case"ElevationGrid":R=I(S);break;case"Extrusion":R=B(S);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":R=A(S);break;case"WorldInfo":R=T(S);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",x);break}return R!==void 0&&S.DEF!==void 0&&R.hasOwnProperty("name")===!0&&(R.name=S.DEF),R}function u(S){const x=new ai,R=S.fields;for(let D=0,O=R.length;D<O;D++){const U=R[D],q=U.name,Y=U.values;switch(q){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":j(Y,x);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const ae=new oe(Y[0],Y[1],Y[2]).normalize(),de=Y[3];x.quaternion.setFromAxisAngle(ae,de);break;case"scale":x.scale.set(Y[0],Y[1],Y[2]);break;case"scaleOrientation":break;case"translation":x.position.set(Y[0],Y[1],Y[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return x}function p(S){const x=new ai;let R,D,O,U;const q=S.fields;for(let ae=0,de=q.length;ae<de;ae++){const ie=q[ae],_e=ie.name,Ce=ie.values;switch(_e){case"groundAngle":R=Ce;break;case"groundColor":D=Ce;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":O=Ce;break;case"skyColor":U=Ce;break;default:console.warn("THREE.VRMLLoader: Unknown field:",_e);break}}const Y=1e4;if(U){const ae=new Ar(Y,32,16),de=new $i({fog:!1,side:Kt,depthWrite:!1,depthTest:!1});U.length>3?(ne(ae,Y,O,ee(U),!0),de.vertexColors=!0):de.color.setRGB(U[0],U[1],U[2],Nt);const ie=new Yt(ae,de);x.add(ie)}if(D&&D.length>0){const ae=new Ar(Y,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),de=new $i({fog:!1,side:Kt,vertexColors:!0,depthWrite:!1,depthTest:!1});ne(ae,Y,R,ee(D),!1);const ie=new Yt(ae,de);x.add(ie)}return x.renderOrder=-1/0,x}function m(S){const x=S.fields;let R=new $i({name:Pn.DEFAULT_MATERIAL_NAME,color:0}),D;for(let U=0,q=x.length;U<q;U++){const Y=x[U],ae=Y.name,de=Y.values;switch(ae){case"appearance":de[0]!==null&&(R=a(de[0]));break;case"geometry":de[0]!==null&&(D=a(de[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}let O;if(D&&D.attributes.position){const U=D._type;if(U==="points"){const q=new Mu({name:Pn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:R.opacity,transparent:R.transparent});D.attributes.color!==void 0?q.vertexColors=!0:R.isMeshPhongMaterial&&q.color.copy(R.emissive),O=new Lp(D,q)}else if(U==="line"){const q=new Tu({name:Pn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:R.opacity,transparent:R.transparent});D.attributes.color!==void 0?q.vertexColors=!0:R.isMeshPhongMaterial&&q.color.copy(R.emissive),O=new Pp(D,q)}else D._solid!==void 0&&(R.side=D._solid?Yn:Tn),D.attributes.color!==void 0&&(R.vertexColors=!0),O=new Yt(D,R)}else O=new Ft,O.visible=!1;return O}function g(S){let x=new Zp,R;const D=S.fields;for(let O=0,U=D.length;O<U;O++){const q=D[O],Y=q.name,ae=q.values;switch(Y){case"material":if(ae[0]!==null){const ie=a(ae[0]);ie.diffuseColor&&x.color.copy(ie.diffuseColor),ie.emissiveColor&&x.emissive.copy(ie.emissiveColor),ie.shininess&&(x.shininess=ie.shininess),ie.specularColor&&x.specular.copy(ie.specularColor),ie.transparency&&(x.opacity=1-ie.transparency),ie.transparency>0&&(x.transparent=!0)}else x=new $i({name:Pn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const de=ae[0];de!==null&&(de.name==="ImageTexture"||de.name==="PixelTexture")&&(x.map=a(de));break;case"textureTransform":ae[0]!==null&&(R=a(ae[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}if(x.map){if(x.map.__type){switch(x.map.__type){case Sn.INTENSITY_ALPHA:x.opacity=1;break;case Sn.RGB:x.color.set(16777215);break;case Sn.RGBA:x.color.set(16777215),x.opacity=1;break}delete x.map.__type}R&&(x.map.center.copy(R.center),x.map.rotation=R.rotation,x.map.repeat.copy(R.scale),x.map.offset.copy(R.translation))}return x}function _(S){const x={},R=S.fields;for(let D=0,O=R.length;D<O;D++){const U=R[D],q=U.name,Y=U.values;switch(q){case"ambientIntensity":break;case"diffuseColor":x.diffuseColor=new rt().setRGB(Y[0],Y[1],Y[2],Nt);break;case"emissiveColor":x.emissiveColor=new rt().setRGB(Y[0],Y[1],Y[2],Nt);break;case"shininess":x.shininess=Y[0];break;case"specularColor":x.specularColor=new rt().setRGB(Y[0],Y[1],Y[2],Nt);break;case"transparency":x.transparency=Y[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return x}function h(S,x,R){let D;switch(x){case Sn.INTENSITY:D=parseInt(S),R.r=D,R.g=D,R.b=D,R.a=1;break;case Sn.INTENSITY_ALPHA:D=parseInt("0x"+S.substring(2,4)),R.r=D,R.g=D,R.b=D,R.a=parseInt("0x"+S.substring(4,6));break;case Sn.RGB:R.r=parseInt("0x"+S.substring(2,4)),R.g=parseInt("0x"+S.substring(4,6)),R.b=parseInt("0x"+S.substring(6,8)),R.a=1;break;case Sn.RGBA:R.r=parseInt("0x"+S.substring(2,4)),R.g=parseInt("0x"+S.substring(4,6)),R.b=parseInt("0x"+S.substring(6,8)),R.a=parseInt("0x"+S.substring(8,10));break}}function f(S){let x;switch(S){case 1:x=Sn.INTENSITY;break;case 2:x=Sn.INTENSITY_ALPHA;break;case 3:x=Sn.RGB;break;case 4:x=Sn.RGBA;break}return x}function b(S){let x,R=oi,D=oi;const O=S.fields;for(let U=0,q=O.length;U<q;U++){const Y=O[U],ae=Y.name,de=Y.values;switch(ae){case"image":const ie=de[0],_e=de[1],Ce=de[2],J=f(Ce),se=new Uint8Array(4*ie*_e),ye={r:0,g:0,b:0,a:0};for(let k=3,ve=0,xe=de.length;k<xe;k++,ve++){h(de[k],J,ye);const fe=ve*4;se[fe+0]=ye.r,se[fe+1]=ye.g,se[fe+2]=ye.b,se[fe+3]=ye.a}x=new tl(se,ie,_e),x.colorSpace=Nt,x.needsUpdate=!0,x.__type=J;break;case"repeatS":de[0]===!1&&(R=dn);break;case"repeatT":de[0]===!1&&(D=dn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return x&&(x.wrapS=R,x.wrapT=D),x}function y(S){let x,R=oi,D=oi;const O=S.fields;for(let U=0,q=O.length;U<q;U++){const Y=O[U],ae=Y.name,de=Y.values;switch(ae){case"url":const ie=de[0];ie&&(x=Me.load(ie));break;case"repeatS":de[0]===!1&&(R=dn);break;case"repeatT":de[0]===!1&&(D=dn);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return x&&(x.wrapS=R,x.wrapT=D,x.colorSpace=Nt),x}function v(S){const x={center:new Ze,rotation:new Ze,scale:new Ze,translation:new Ze},R=S.fields;for(let D=0,O=R.length;D<O;D++){const U=R[D],q=U.name,Y=U.values;switch(q){case"center":x.center.set(Y[0],Y[1]);break;case"rotation":x.rotation=Y[0];break;case"scale":x.scale.set(Y[0],Y[1]);break;case"translation":x.translation.set(Y[0],Y[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return x}function A(S){return S.fields[0].values}function T(S){const x={},R=S.fields;for(let D=0,O=R.length;D<O;D++){const U=R[D],q=U.name,Y=U.values;switch(q){case"title":x.title=Y[0];break;case"info":x.info=Y;break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return x}function C(S){let x,R,D,O,U=!0,q=!0,Y=0,ae,de,ie,_e,Ce=!0,J=!0;const se=S.fields;for(let he=0,Ie=se.length;he<Ie;he++){const Ve=se[he],Ge=Ve.name,we=Ve.values;switch(Ge){case"color":const ke=we[0];ke!==null&&(x=a(ke));break;case"coord":const Ne=we[0];Ne!==null&&(R=a(Ne));break;case"normal":const We=we[0];We!==null&&(D=a(We));break;case"texCoord":const Ye=we[0];Ye!==null&&(O=a(Ye));break;case"ccw":U=we[0];break;case"colorIndex":ae=we;break;case"colorPerVertex":Ce=we[0];break;case"convex":break;case"coordIndex":de=we;break;case"creaseAngle":Y=we[0];break;case"normalIndex":ie=we;break;case"normalPerVertex":J=we[0];break;case"solid":q=we[0];break;case"texCoordIndex":_e=we;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ge);break}}if(de===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new kt;const ye=H(de,U);let k,ve,xe;if(x){if(Ce===!0)if(ae&&ae.length>0){const he=H(ae,U);k=ue(ye,he,x,3)}else k=Oe(ye,new ct(x,3));else if(ae&&ae.length>0){const he=K(x,ae),Ie=G(he,de);k=Ee(ye,Ie)}else{const he=G(x,de);k=Ee(ye,he)}me(k)}if(D)if(J===!0)if(ie&&ie.length>0){const he=H(ie,U);ve=ue(ye,he,D,3)}else ve=Oe(ye,new ct(D,3));else if(ie&&ie.length>0){const he=K(D,ie),Ie=G(he,de);ve=Ee(ye,Ie)}else{const he=G(D,de);ve=Ee(ye,he)}else ve=X(ye,R,Y);if(O)if(_e&&_e.length>0){const he=H(_e,U);xe=ue(ye,he,O,2)}else xe=Oe(ye,new ct(O,2));const fe=new kt,be=Oe(ye,new ct(R,3));return fe.setAttribute("position",be),fe.setAttribute("normal",ve),k&&fe.setAttribute("color",k),xe&&fe.setAttribute("uv",xe),fe._solid=q,fe._type="mesh",fe}function F(S){let x,R,D,O,U=!0;const q=S.fields;for(let _e=0,Ce=q.length;_e<Ce;_e++){const J=q[_e],se=J.name,ye=J.values;switch(se){case"color":const k=ye[0];k!==null&&(x=a(k));break;case"coord":const ve=ye[0];ve!==null&&(R=a(ve));break;case"colorIndex":D=ye;break;case"colorPerVertex":U=ye[0];break;case"coordIndex":O=ye;break;default:console.warn("THREE.VRMLLoader: Unknown field:",se);break}}let Y;const ae=ce(O);if(x){if(U===!0)if(D.length>0){const _e=ce(D);Y=ue(ae,_e,x,3)}else Y=Oe(ae,new ct(x,3));else if(D.length>0){const _e=K(x,D),Ce=Q(_e,O);Y=Re(ae,Ce)}else{const _e=Q(x,O);Y=Re(ae,_e)}me(Y)}const de=new kt,ie=Oe(ae,new ct(R,3));return de.setAttribute("position",ie),Y&&de.setAttribute("color",Y),de._type="line",de}function E(S){let x,R;const D=S.fields;for(let U=0,q=D.length;U<q;U++){const Y=D[U],ae=Y.name,de=Y.values;switch(ae){case"color":const ie=de[0];ie!==null&&(x=a(ie));break;case"coord":const _e=de[0];_e!==null&&(R=a(_e));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}const O=new kt;if(O.setAttribute("position",new ct(R,3)),x){const U=new ct(x,3);me(U),O.setAttribute("color",U)}return O._type="points",O}function M(S){const x=new oe(2,2,2),R=S.fields;for(let O=0,U=R.length;O<U;O++){const q=R[O],Y=q.name,ae=q.values;switch(Y){case"size":x.x=ae[0],x.y=ae[1],x.z=ae[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return new ur(x.x,x.y,x.z)}function w(S){let x=1,R=2,D=!1;const O=S.fields;for(let q=0,Y=O.length;q<Y;q++){const ae=O[q],de=ae.name,ie=ae.values;switch(de){case"bottom":D=!ie[0];break;case"bottomRadius":x=ie[0];break;case"height":R=ie[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",de);break}}return new il(x,R,16,1,D)}function L(S){let x=1,R=2;const D=S.fields;for(let U=0,q=D.length;U<q;U++){const Y=D[U],ae=Y.name,de=Y.values;switch(ae){case"bottom":break;case"radius":x=de[0];break;case"height":R=de[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",ae);break}}return new Wo(x,x,R,16,1)}function P(S){let x=1;const R=S.fields;for(let O=0,U=R.length;O<U;O++){const q=R[O],Y=q.name,ae=q.values;switch(Y){case"radius":x=ae[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Y);break}}return new Ar(x,16,16)}function I(S){let x,R,D,O,U=!0,q=!0,Y=!0,ae=!0,de=0,ie=2,_e=2,Ce=1,J=1;const se=S.fields;for(let we=0,ke=se.length;we<ke;we++){const Ne=se[we],We=Ne.name,Ye=Ne.values;switch(We){case"color":const _t=Ye[0];_t!==null&&(x=a(_t));break;case"normal":const Gt=Ye[0];Gt!==null&&(R=a(Gt));break;case"texCoord":const en=Ye[0];en!==null&&(D=a(en));break;case"height":O=Ye;break;case"ccw":ae=Ye[0];break;case"colorPerVertex":U=Ye[0];break;case"creaseAngle":de=Ye[0];break;case"normalPerVertex":q=Ye[0];break;case"solid":Y=Ye[0];break;case"xDimension":ie=Ye[0];break;case"xSpacing":Ce=Ye[0];break;case"zDimension":_e=Ye[0];break;case"zSpacing":J=Ye[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",We);break}}const ye=[],k=[],ve=[],xe=[];for(let we=0;we<_e;we++)for(let ke=0;ke<ie;ke++){const Ne=we*ie+ke,We=Ce*we,Ye=O[Ne],_t=J*ke;if(ye.push(We,Ye,_t),x&&U===!0){const Gt=x[Ne*3+0],en=x[Ne*3+1],qn=x[Ne*3+2];ve.push(Gt,en,qn)}if(R&&q===!0){const Gt=R[Ne*3+0],en=R[Ne*3+1],qn=R[Ne*3+2];k.push(Gt,en,qn)}if(D){const Gt=D[Ne*2+0],en=D[Ne*2+1];xe.push(Gt,en)}else xe.push(we/(ie-1),ke/(_e-1))}const fe=[];for(let we=0;we<ie-1;we++)for(let ke=0;ke<_e-1;ke++){const Ne=we+ke*ie,We=we+(ke+1)*ie,Ye=we+1+(ke+1)*ie,_t=we+1+ke*ie;ae===!0?(fe.push(Ne,Ye,We),fe.push(Ye,Ne,_t)):(fe.push(Ne,We,Ye),fe.push(Ye,_t,Ne))}const be=Oe(fe,new ct(ye,3)),he=Oe(fe,new ct(xe,2));let Ie,Ve;if(x){if(U===!1){for(let we=0;we<ie-1;we++)for(let ke=0;ke<_e-1;ke++){const Ne=we+ke*(ie-1),We=x[Ne*3+0],Ye=x[Ne*3+1],_t=x[Ne*3+2];ve.push(We,Ye,_t),ve.push(We,Ye,_t),ve.push(We,Ye,_t),ve.push(We,Ye,_t),ve.push(We,Ye,_t),ve.push(We,Ye,_t)}Ie=new ct(ve,3)}else Ie=Oe(fe,new ct(ve,3));me(Ie)}if(R)if(q===!1){for(let we=0;we<ie-1;we++)for(let ke=0;ke<_e-1;ke++){const Ne=we+ke*(ie-1),We=R[Ne*3+0],Ye=R[Ne*3+1],_t=R[Ne*3+2];k.push(We,Ye,_t),k.push(We,Ye,_t),k.push(We,Ye,_t),k.push(We,Ye,_t),k.push(We,Ye,_t),k.push(We,Ye,_t)}Ve=new ct(k,3)}else Ve=Oe(fe,new ct(k,3));else Ve=X(fe,ye,de);const Ge=new kt;return Ge.setAttribute("position",be),Ge.setAttribute("normal",Ve),Ge.setAttribute("uv",he),Ie&&Ge.setAttribute("color",Ie),Ge._solid=Y,Ge._type="mesh",Ge}function B(S){let x=[1,1,1,-1,-1,-1,-1,1,1,1],R=[0,0,0,0,1,0],D,O,U=!0,q=!0,Y=0,ae=!0,de=!0;const ie=S.fields;for(let Ge=0,we=ie.length;Ge<we;Ge++){const ke=ie[Ge],Ne=ke.name,We=ke.values;switch(Ne){case"beginCap":U=We[0];break;case"ccw":q=We[0];break;case"convex":break;case"creaseAngle":Y=We[0];break;case"crossSection":x=We;break;case"endCap":ae=We[0];break;case"orientation":O=We;break;case"scale":D=We;break;case"solid":de=We[0];break;case"spine":R=We;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ne);break}}const _e=x[0]===x[x.length-2]&&x[1]===x[x.length-1],Ce=[],J=new oe,se=new oe,ye=new oe,k=new oe,ve=new ui;for(let Ge=0,we=0,ke=0,Ne=R.length;Ge<Ne;Ge+=3,we+=2,ke+=4){J.fromArray(R,Ge),se.x=D?D[we+0]:1,se.y=1,se.z=D?D[we+1]:1,ye.x=O?O[ke+0]:0,ye.y=O?O[ke+1]:0,ye.z=O?O[ke+2]:1;const We=O?O[ke+3]:0;for(let Ye=0,_t=x.length;Ye<_t;Ye+=2)k.x=x[Ye+0],k.y=0,k.z=x[Ye+1],k.multiply(se),ve.setFromAxisAngle(ye,We),k.applyQuaternion(ve),k.add(J),Ce.push(k.x,k.y,k.z)}const xe=[],fe=R.length/3,be=x.length/2;for(let Ge=0;Ge<fe-1;Ge++)for(let we=0;we<be-1;we++){const ke=we+Ge*be;let Ne=we+1+Ge*be;const We=we+(Ge+1)*be;let Ye=we+1+(Ge+1)*be;we===be-2&&_e===!0&&(Ne=Ge*be,Ye=(Ge+1)*be),q===!0?(xe.push(ke,Ne,We),xe.push(We,Ne,Ye)):(xe.push(ke,We,Ne),xe.push(We,Ye,Ne))}if(U===!0||ae===!0){const Ge=[];for(let Ne=0,We=x.length;Ne<We;Ne+=2)Ge.push(new Ze(x[Ne],x[Ne+1]));const we=rl.triangulateShape(Ge,[]),ke=[];for(let Ne=0,We=we.length;Ne<We;Ne++){const Ye=we[Ne];ke.push(Ye[0],Ye[1],Ye[2])}if(U===!0)for(let Ne=0,We=ke.length;Ne<We;Ne+=3)q===!0?xe.push(ke[Ne+0],ke[Ne+1],ke[Ne+2]):xe.push(ke[Ne+0],ke[Ne+2],ke[Ne+1]);if(ae===!0){const Ne=be*(fe-1);for(let We=0,Ye=ke.length;We<Ye;We+=3)q===!0?xe.push(Ne+ke[We+0],Ne+ke[We+2],Ne+ke[We+1]):xe.push(Ne+ke[We+0],Ne+ke[We+1],Ne+ke[We+2])}}const he=Oe(xe,new ct(Ce,3)),Ie=X(xe,Ce,Y),Ve=new kt;return Ve.setAttribute("position",he),Ve.setAttribute("normal",Ie),Ve._solid=de,Ve._type="mesh",Ve}function V(S){const x=i[S],R=a(x);return R.isObject3D||R.isMaterial?R.clone():R}function j(S,x){for(let R=0,D=S.length;R<D;R++){const O=a(S[R]);O instanceof Ft&&x.add(O)}}function H(S,x){const R=[];let D=0;for(let O=0,U=S.length;O<U;O++){const q=S[D],Y=S[O+(x?1:2)],ae=S[O+(x?2:1)];R.push(q,Y,ae),(S[O+3]===-1||O+3>=U)&&(O+=3,D=O+1)}return R}function G(S,x){const R=[];let D=0;for(let O=0,U=x.length;O<U;O++){const q=D*3,Y=S[q],ae=S[q+1],de=S[q+2];R.push(Y,ae,de),(x[O+3]===-1||O+3>=U)&&(O+=3,D++)}return R}function K(S,x){const R=[];for(let D=0,O=x.length;D<O;D++){const q=x[D]*3,Y=S[q],ae=S[q+1],de=S[q+2];R.push(Y,ae,de)}return R}function ce(S){const x=[];for(let R=0,D=S.length;R<D;R++){const O=S[R],U=S[R+1];x.push(O,U),(S[R+2]===-1||R+2>=D)&&(R+=2)}return x}function Q(S,x){const R=[];let D=0;for(let O=0,U=x.length;O<U;O++){const q=D*3,Y=S[q],ae=S[q+1],de=S[q+2];R.push(Y,ae,de),(x[O+2]===-1||O+2>=U)&&(O+=2,D++)}return R}const te=new oe,Se=new oe,$=new oe,z=new Ze,W=new Ze,Z=new Ze;function ue(S,x,R,D){const O=[];for(let U=0,q=S.length;U<q;U+=3){const Y=x[U],ae=x[U+1],de=x[U+2];D===2?(z.fromArray(R,Y*D),W.fromArray(R,ae*D),Z.fromArray(R,de*D),O.push(z.x,z.y),O.push(W.x,W.y),O.push(Z.x,Z.y)):(te.fromArray(R,Y*D),Se.fromArray(R,ae*D),$.fromArray(R,de*D),O.push(te.x,te.y,te.z),O.push(Se.x,Se.y,Se.z),O.push($.x,$.y,$.z))}return new ct(O,D)}function Ee(S,x){const R=[];for(let D=0,O=0,U=S.length;D<U;D+=3,O++)te.fromArray(x,O*3),R.push(te.x,te.y,te.z),R.push(te.x,te.y,te.z),R.push(te.x,te.y,te.z);return new ct(R,3)}function Re(S,x){const R=[];for(let D=0,O=0,U=S.length;D<U;D+=2,O++)te.fromArray(x,O*3),R.push(te.x,te.y,te.z),R.push(te.x,te.y,te.z);return new ct(R,3)}function Oe(S,x){const R=x.array,D=x.itemSize,O=new R.constructor(S.length*D);let U=0,q=0;for(let Y=0,ae=S.length;Y<ae;Y++){U=S[Y]*D;for(let de=0;de<D;de++)O[q++]=R[U++]}return new ct(O,D)}const Fe=new oe,Qe=new oe;function X(S,x,R){const D=[],O={};for(let q=0,Y=S.length;q<Y;q+=3){const ae=S[q],de=S[q+1],ie=S[q+2],_e=new D_(ae,de,ie);te.fromArray(x,ae*3),Se.fromArray(x,de*3),$.fromArray(x,ie*3),Qe.subVectors($,Se),Fe.subVectors(te,Se),Qe.cross(Fe),Qe.normalize(),_e.normal.copy(Qe),O[ae]===void 0&&(O[ae]=[]),O[de]===void 0&&(O[de]=[]),O[ie]===void 0&&(O[ie]=[]),O[ae].push(_e.normal),O[de].push(_e.normal),O[ie].push(_e.normal),D.push(_e)}const U=[];for(let q=0,Y=D.length;q<Y;q++){const ae=D[q],de=Be(O[ae.a],ae.normal,R),ie=Be(O[ae.b],ae.normal,R),_e=Be(O[ae.c],ae.normal,R);te.fromArray(x,ae.a*3),Se.fromArray(x,ae.b*3),$.fromArray(x,ae.c*3),U.push(de.x,de.y,de.z),U.push(ie.x,ie.y,ie.z),U.push(_e.x,_e.y,_e.z)}return new ct(U,3)}function Be(S,x,R){const D=new oe;if(R===0)D.copy(x);else for(let O=0,U=S.length;O<U;O++)S[O].angleTo(x)<R&&D.add(S[O]);return D.normalize()}function ee(S){const x=[];for(let R=0,D=S.length;R<D;R+=3)x.push(new rt(S[R],S[R+1],S[R+2]));return x}function me(S){const x=new rt;for(let R=0;R<S.count;R++)x.fromBufferAttribute(S,R),ht.colorSpaceToWorking(x,Nt),S.setXYZ(R,x.r,x.g,x.b)}function ne(S,x,R,D,O){const U=[],q=O===!0?0:Math.PI;for(let Ce=0,J=D.length;Ce<J;Ce++){let se=Ce===0?0:R[Ce-1];se=O===!0?se:q-se;const ye=new oe;ye.setFromSphericalCoords(x,se,0),U.push(ye)}const Y=S.index,ae=S.attributes.position,de=new an(new Float32Array(S.attributes.position.count*3),3),ie=new oe,_e=new rt;for(let Ce=0;Ce<Y.count;Ce++){const J=Y.getX(Ce);ie.fromBufferAttribute(ae,J);let se,ye,k=1;for(let fe=1;fe<U.length;fe++){se=fe-1,ye=fe;const be=U[se],he=U[ye];if(O===!0){if(ie.y<=be.y&&ie.y>he.y){k=Math.abs(be.y-ie.y)/Math.abs(be.y-he.y);break}}else if(ie.y>=be.y&&ie.y<he.y){k=Math.abs(be.y-ie.y)/Math.abs(be.y-he.y);break}}const ve=D[se],xe=D[ye];_e.copy(ve).lerp(xe,k),ht.colorSpaceToWorking(_e,Nt),de.setXYZ(J,_e.r,_e.g,_e.b)}S.setAttribute("color",de)}const Me=new rm(this.manager);if(Me.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Ae=r(e);return l(Ae)}}class I_{constructor(e){this.lexer=new Cr.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const N_=Cr.CstParser;class O_ extends N_{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,l=e.RSquare,c=e.Identifier,a=e.RouteIdentifier,d=e.StringLiteral,u=e.HexLiteral,p=e.NumberLiteral,m=e.TrueLiteral,g=e.FalseLiteral,_=e.NullLiteral,h=e.DEF,f=e.USE,b=e.ROUTE,y=e.TO,v=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(v),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(v)}}])}),t.RULE("use",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(v)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(_)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(_)}}])}),t.CONSUME(l)}),t.RULE("route",function(){t.CONSUME(b),t.CONSUME(a),t.CONSUME(y),t.CONSUME2(a)}),this.performSelfAnalysis()}}class D_{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new oe}}const Sn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},qu=n=>(Xc("data-v-6cad1c94"),n=n(),jc(),n),F_={class:"options-div"},U_={class:"select-div"},k_={key:0,class:"checkbox-list"},B_=qu(()=>gt("label",{class:"label"},[gt("strong",null,"Parts:")],-1)),z_={class:"checkbox-grid"},V_={key:1,class:"radio-list"},G_=qu(()=>gt("label",{class:"label"},[gt("strong",null,"Version:")],-1)),H_={class:"radio-grid"},W_=At({__name:"ModelViewer",props:{models:{},backgroundColor:{}},setup(n){const e=n,t=qe(null);let i,r,o,s,l=null;const c=new f_,a=new L_,d=qe(null),u=qe([]),p=qe(null);let m=null;const g=qe(!1);let _=new Map,h=new Map,f=1;const b=je(()=>{const G=[];return e.models.forEach(K=>{Array.isArray(K.obj)?G.push(...K.obj):K.obj&&G.push(K.obj)}),G}),y=je(()=>e.models.map(G=>({label:G.name,value:G.name}))),v=je(()=>e.models.find(G=>G.name===d.value)),A=je(()=>{if(!v.value)return[];if(v.value.isGroup)return u.value;if(Array.isArray(v.value.obj))return p.value?[p.value]:[];const G=v.value.obj;return G.src?[G.src]:[]});An(()=>e.models,G=>{G.length&&!d.value&&(d.value=G[0].name)},{immediate:!0}),An(v,G=>{var K;G?G.isGroup&&Array.isArray(G.obj)?u.value=G.obj.map(ce=>ce.src):Array.isArray(G.obj)?(u.value=[],p.value=(K=G.obj[G.obj.length-1])==null?void 0:K.src):(u.value=[],p.value=null):(u.value=[],p.value=null),C()},{immediate:!0}),An(u,()=>{var G;(G=v.value)!=null&&G.isGroup&&C()}),An(p,()=>{var G;(G=v.value)!=null&&G.isGroup||C()}),lr(()=>{T(),C(),L()});function T(){i=new Su,i.background=new rt(e.backgroundColor||0);const G=t.value.clientWidth,K=500;r=new gn(45,G/K,.01,1e4),r.position.set(0,0,100),o=new Zv({antialias:!0}),o.setSize(G,K),o.setPixelRatio(window.devicePixelRatio),o.outputColorSpace=Nt,t.value.appendChild(o.domElement),s=new Qv(r,o.domElement),s.enableDamping=!0,s.dampingFactor=.05;const ce=new sm(16777215,.6);i.add(ce);const Q=new Ba(16777215,.8);Q.position.set(5,5,5),i.add(Q);const te=new Ba(16777215,.4);te.position.set(-5,0,-5),i.add(te);const Se=new Ba(16777215,.3);Se.position.set(0,-5,-5),i.add(Se)}async function C(){var K,ce,Q,te,Se;if(!A.value.length)return;const G=((K=v.value)==null?void 0:K.name)!==m;l&&i.remove(l),l=new ai;for(const $ of A.value)if($.toLowerCase().endsWith(".wrl")||$.toLowerCase().endsWith(".vrml")){const W=await E($);W.userData.src=$,l.add(W)}else{const W=await F($),Z=M(W,$);Z.position.set(0,0,0),Z.userData.src=$,l.add(Z)}if(i.add(l),G)if(m=((ce=v.value)==null?void 0:ce.name)??null,(Q=v.value)!=null&&Q.isGroup){const $=[],z=Array.isArray((te=v.value)==null?void 0:te.obj)?v.value.obj:(Se=v.value)!=null&&Se.obj?[v.value.obj]:[];for(const Z of z)if(!(Z.src.toLowerCase().endsWith(".wrl")||Z.src.toLowerCase().endsWith(".vrml"))){const Ee=await F(Z.src),Re=M(Ee,Z.src);Re.position.set(0,0,0),Re.userData.src=Z.src,$.push(Re)}const W=new ai;$.forEach(Z=>W.add(Z)),W.updateMatrixWorld(!0),V($,W),w(W)}else w(l);else s.update();l.children.forEach($=>{if(!($ instanceof Yt))return;const z=$.userData.src;_.has(z)||_.set(z,$.position.clone())}),g.value&&B()}function F(G){return new Promise((K,ce)=>{c.load(G,K,void 0,ce)})}function E(G){return new Promise((K,ce)=>{a.load(G,K,void 0,ce)})}function M(G,K){G.computeVertexNormals();const ce=K.toLowerCase().split("/").pop(),Q=b.value.find(ue=>ce.includes(ue.src.split("/").pop().toLowerCase())),te=(Q==null?void 0:Q.colorHex)??"0xffffff",Se=(Q==null?void 0:Q.opacity)??1,$=128,z=new Uint8Array($*$*4);for(let ue=0;ue<z.length;ue++)z[ue]=128+Math.random()*40;const W=new tl(z,$,$,vn);W.wrapS=W.wrapT=oi,W.repeat.set(10,10),W.needsUpdate=!0;const Z=new $p({color:parseInt(te.replace("#",""),16),transparent:Se<1,opacity:Se,roughness:.6,metalness:.05,emissive:1118481,normalMap:W,normalScale:new Ze(.2,.2),side:Tn});return Z.onBeforeCompile=ue=>{ue.fragmentShader=ue.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)},new Yt(G,Z)}function w(G){const K=G??l;if(!K)return;const ce=new ci().setFromObject(K),Q=ce.getSize(new oe).length(),te=ce.getCenter(new oe);s.target.copy(te),r.position.copy(te).addScalar(Q*.8),r.lookAt(te)}function L(){requestAnimationFrame(L),s.update(),o.render(i,r)}function P(){l&&(g.value?j():I(),g.value=!g.value)}function I(){if(!l)return;_.clear();const G=f*.25;l.children.forEach(K=>{if(!(K instanceof Yt))return;const ce=K.userData.src;_.set(ce,K.position.clone());const Q=h.get(ce);if(!Q)return;const te=K.position.clone().add(Q.clone().multiplyScalar(G));H(K,te)})}function B(){const G=f*.25;l.children.forEach(K=>{if(!(K instanceof Yt))return;const ce=h.get(K.userData.src);if(!ce)return;const Q=K.position.clone().add(ce.clone().multiplyScalar(G));K.position.copy(Q)})}function V(G,K){h.clear();const ce=new ci().setFromObject(K),Q=ce.getCenter(new oe),te=K.worldToLocal(Q.clone());f=ce.getSize(new oe).length();for(const Se of G){const z=new ci().setFromObject(Se).getCenter(new oe),Z=K.worldToLocal(z.clone()).clone().sub(te);Z.length()<1e-4?Z.set(0,0,0):Z.normalize(),h.set(Se.userData.src,Z)}}function j(){l&&l.children.forEach(G=>{if(!(G instanceof Yt))return;const K=_.get(G.userData.src);K&&H(G,K)})}function H(G,K){const ce=G.position.clone(),Q=.35,te=performance.now();function Se(){const $=(performance.now()-te)/1e3,z=Math.min($/Q,1);G.position.lerpVectors(ce,K,z),z<1&&requestAnimationFrame(Se)}requestAnimationFrame(Se)}return(G,K)=>{const ce=Yf,Q=ah,te=Id,Se=Wf,$=Bf,z=Qf,W=ih;return Wt(),wn(Tr,null,[gt("div",F_,[gt("div",U_,[ot(ce,{class:"select-model",value:d.value,"onUpdate:value":K[0]||(K[0]=Z=>d.value=Z),options:y.value},null,8,["value","options"]),v.value&&v.value.isGroup?(Wt(),bi(te,{key:0,class:"select-button",onClick:P,tertiary:""},{icon:it(()=>[ot(Q,null,{default:it(()=>[g.value?(Wt(),bi(hl(uh),{key:0})):ii("",!0),g.value?ii("",!0):(Wt(),bi(hl(lh),{key:1}))]),_:1})]),_:1})):ii("",!0)]),v.value&&v.value.isGroup?(Wt(),wn("div",k_,[B_,ot($,{value:u.value,"onUpdate:value":K[1]||(K[1]=Z=>u.value=Z)},{default:it(()=>[gt("div",z_,[(Wt(!0),wn(Tr,null,pl(v.value.obj,Z=>(Wt(),bi(Se,{key:Z.src,value:Z.src},{default:it(()=>[Tt(Yi(Z.name??"Unnamed Part"),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):ii("",!0),v.value&&!v.value.isGroup&&Array.isArray(v.value.obj)?(Wt(),wn("div",V_,[G_,ot(W,{value:p.value,"onUpdate:value":K[2]||(K[2]=Z=>p.value=Z)},{default:it(()=>[gt("div",H_,[(Wt(!0),wn(Tr,null,pl(v.value.obj,Z=>(Wt(),bi(z,{key:Z.src,value:Z.src},{default:it(()=>[Tt(Yi(Z.name??"???"),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):ii("",!0)]),gt("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),X_=Yc(W_,[["__scopeId","data-v-6cad1c94"]]),j_=n=>(Xc("data-v-e990d224"),n=n(),jc(),n),Y_={class:"project-view"},K_={class:"subtitle"},q_={key:1,class:"carousel-wrapper"},$_=j_(()=>gt("strong",null,"3D Model Viewer",-1)),Z_=At({__name:"ProjectTemplate",props:{id:{},media:{default:()=>[]},models:{default:()=>[]}},setup(n){const e=n,t=je(()=>$u(e.id)),i=je(()=>{var a;return(a=t.value)==null?void 0:a.name}),r=je(()=>{var a;return(a=t.value)==null?void 0:a.date}),o=je(()=>{var a;return(a=t.value)==null?void 0:a.status}),s=je(()=>{var a;return(a=t.value)==null?void 0:a.description}),l=je(()=>Zu(r.value??"")),c=je(()=>{switch(o.value){case"Completed":return"success";case"Prototype":return"warning";case"In Progress":default:return"info"}});return(a,d)=>{const u=Nd,p=Kc,m=Ro,g=Fd;return Wt(),wn("div",Y_,[ot(u,null,{default:it(()=>[Tt(Yi(i.value),1)]),_:1}),gt("div",K_,[ot(p,null,{default:it(()=>[gt("strong",null,Yi(l.value),1)]),_:1}),ot(m,{size:"small",type:c.value,bordered:!1},{default:it(()=>[Tt(Yi(o.value),1)]),_:1},8,["type"])]),s.value?(Wt(),bi(g,{key:0},{default:it(()=>[Tt(Yi(s.value),1)]),_:1})):ii("",!0),a.media&&a.media.length>0?(Wt(),wn("div",q_,[ot(ud,{media:a.media},null,8,["media"])])):ii("",!0),kc(a.$slots,"default",{},void 0,!0),a.models&&a.models.length>0?(Wt(),wn(Tr,{key:2},[ot(p,null,{default:it(()=>[$_]),_:1}),gt("div",null,[ot(X_,{ref:"viewer",models:a.models,backgroundColor:1710618},null,8,["models"])])],64)):ii("",!0)])}}}),J_=Yc(Z_,[["__scopeId","data-v-e990d224"]]),Q_=gt("strong",null,"The Story",-1),eb=gt("strong",null,"Key Features",-1),tb=gt("strong",null,"Soft, Diffused Lighting:",-1),nb=gt("strong",null,"Custom Enclosure:",-1),ib=gt("strong",null,"Browser-Based Control:",-1),rb=gt("strong",null,"Repurposed Components:",-1),ob=gt("strong",null,"Tech Stack",-1),ab=gt("strong",null,"Hardware:",-1),sb=gt("strong",null,"Firmware:",-1),lb=gt("strong",null,"Control Protocol:",-1),cb=gt("strong",null,"3D Design:",-1),ub=gt("strong",null,"Circuit Board Technique:",-1),db=gt("strong",null,"Challenges & Lessons Learned",-1),fb=gt("strong",null,"Links",-1),_b=At({__name:"MoodLight",setup(n){const e=qe([{type:"video",src:"mood-light/videos/PXL_20250911_232403363.mp4",poster:"mood-light/images/PXL_20250911_102431507.jpg"},{type:"video",src:"mood-light/videos/PXL_20250908_162742176.mp4",poster:"mood-light/images/PXL_20250908_162742176.jpg"},{type:"image",src:"mood-light/images/PXL_20250910_130605116.jpg"},{type:"image",src:"mood-light/images/PXL_20250911_102415897.jpg"},{type:"image",src:"mood-light/images/PXL_20250911_102431507.jpg"},{type:"image",src:"mood-light/images/PXL_20250911_112415716.jpg"}]),t=qe([{name:"Bottom",obj:[{name:"0.2",src:"mood-light/models/lamp-holder-v0.2.stl",colorHex:"0xff7f00"},{name:"0.5",src:"mood-light/models/lamp-bottom-v0.5.stl",colorHex:"0xff7f00"},{name:"0.9",src:"mood-light/models/lamp-bottom-v0.9.stl",colorHex:"0xff7f00"},{name:"0.95",src:"mood-light/models/lamp-bottom-v0.95.stl",colorHex:"0xff7f00"},{name:"0.96",src:"mood-light/models/lamp-bottom-v0.96.stl",colorHex:"0xff7f00"}]},{name:"Side",obj:[{name:"0.5",src:"mood-light/models/lamp-side-v0.5.stl",colorHex:"0xff7f00"},{name:"0.9",src:"mood-light/models/lamp-side-v0.9.stl",colorHex:"0xff7f00"},{name:"0.95",src:"mood-light/models/lamp-side-v0.95.stl",colorHex:"0xff7f00"},{name:"0.96",src:"mood-light/models/lamp-side-v0.96.stl",colorHex:"0xff7f00"},{name:"0.97",src:"mood-light/models/lamp-side-v0.97.stl",colorHex:"0xff7f00"}]},{name:"Tab",obj:{name:"0.1",src:"mood-light/models/lamp-tab-v0.1.stl",colorHex:"0xff7f00"}},{name:"Assembly",isGroup:!0,obj:[{name:"Bottom",src:"mood-light/models/assembly/lamp-bottom-v1.0.stl",colorHex:"0xff7f00"},{name:"Left",src:"mood-light/models/assembly/lamp-left-v1.0.stl",colorHex:"0xff7f00"},{name:"Right",src:"mood-light/models/assembly/lamp-right-v1.0.stl",colorHex:"0xff7f00"},{name:"Top",src:"mood-light/models/assembly/lamp-top-v1.0.stl",colorHex:"0xff7f00"},{name:"Screen",src:"mood-light/models/assembly/lamp-screen-v1.0.stl",colorHex:"0xeeeeee",opacity:.9},{name:"Tab",src:"mood-light/models/assembly/lamp-tab-v1.0.stl",colorHex:"0x00ff00"}]}]);return(i,r)=>{const o=Kc,s=Bd,l=Od("router-link"),c=Ud,a=kd;return Wt(),bi(J_,{id:"mood-light",media:e.value,models:t.value},{default:it(()=>[ot(o,null,{default:it(()=>[Q_]),_:1}),ot(o,null,{default:it(()=>[Tt(" This project was born from a happy accident. I had some leftover WS2811 LED strips from my "),ot(l,{to:{name:"ian"}},{default:it(()=>[ot(s,null,{default:it(()=>[Tt("thesis project")]),_:1})]),_:1}),Tt(" and a few plexiglass samples that I had originally ordered for the "),ot(l,{to:{name:"netscore"}},{default:it(()=>[ot(s,null,{default:it(()=>[Tt("NetScore")]),_:1})]),_:1}),Tt(` project - I thought they'd be clear display protectors, but they turned out to be translucent. This "mistake", however, turned out to be a pretty good material for a light diffuser. I designed a simple enclosure in Onshape, consisting of a 3D-printed frame that wraps around the plexiglass panel, with the LED strip running along the inner perimeter. The result is a soft, almost uniform glow. The light is powered by an ESP32-C3, and the LEDs are controlled wirelessly via a web app using the Web Bluetooth API, allowing you to connect and change colors on the fly from a browser. `)]),_:1}),ot(o,null,{default:it(()=>[eb]),_:1}),ot(a,null,{default:it(()=>[ot(c,null,{default:it(()=>[tb,Tt(" Uses a WS2811 LED strip paired with a translucent plexiglass panel for a smooth, ambient glow.")]),_:1}),ot(c,null,{default:it(()=>[nb,Tt(" The frame was parametrically designed in Onshape.")]),_:1}),ot(c,null,{default:it(()=>[ib,Tt(" Wirelessly change colors and patterns using the Web Bluetooth API—no native app required.")]),_:1}),ot(c,null,{default:it(()=>[rb,Tt(" Built from leftover materials from previous projects.")]),_:1})]),_:1}),ot(o,null,{default:it(()=>[ob]),_:1}),ot(a,null,{default:it(()=>[ot(c,null,{default:it(()=>[ab,Tt(" ESP32-C3, WS2811 individually addressable LED strip.")]),_:1}),ot(c,null,{default:it(()=>[sb]),_:1}),ot(a,null,{default:it(()=>[ot(c,null,{default:it(()=>[Tt(" Custom firmware written in C++ using the Arduino framework.")]),_:1}),ot(c,null,{default:it(()=>[Tt(" As for the web app it was built with Vue.js and TypeScript.")]),_:1})]),_:1}),ot(c,null,{default:it(()=>[lb,Tt(" BLE / Web Bluetooth API.")]),_:1}),ot(c,null,{default:it(()=>[cb,Tt(" Onshape.")]),_:1}),ot(c,null,{default:it(()=>[ub,Tt(" Perfboard for now.")]),_:1})]),_:1}),ot(o,null,{default:it(()=>[db]),_:1}),ot(o,null,{default:it(()=>[Tt(` The primary lesson from this project was the value of creative repurposing and "happy accidents." The translucent plexiglass, initially a purchasing mistake for another project, became the key component that defined the aesthetic and also the driving force in this project's creation. It's a good reminder that sometimes the best ideas come from adapting to unexpected materials and finding potential in leftovers. `)]),_:1}),ot(o,null,{default:it(()=>[fb]),_:1}),ot(a,null,{default:it(()=>[ot(c,null,{default:it(()=>[ot(s,{href:"toDo"},{default:it(()=>[Tt("GitHub Repository")]),_:1})]),_:1}),ot(c,null,{default:it(()=>[ot(s,{href:"toDo"},{default:it(()=>[Tt("Web App")]),_:1})]),_:1}),ot(c,null,{default:it(()=>[ot(s,{href:"https://cad.onshape.com/documents/ffe826fd84c7b0b803a26dcf/w/2289f860d06ea32193ad4090/e/bda82098034db4c28fba08ea?renderMode=0&uiState=691cc052b1846ac8b07025d5"},{default:it(()=>[Tt("Onshape")]),_:1})]),_:1})]),_:1})]),_:1},8,["media","models"])}}});export{_b as default};
