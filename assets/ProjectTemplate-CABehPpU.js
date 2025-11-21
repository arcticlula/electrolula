import{g as ad,f as sd}from"./projects-DHEqHIaG.js";import{c as No,a as Gc,f as ld,u as Hc,i as js,b as Za,S as Wc,d as cd,W as ud,N as dd,e as ir,o as fd,g as hd,h as Xc,B as pd,V as md,j as vl,k as Oo,l as gd,m as xd,M as vd}from"./MediaCarousel-BuzcJbEX.js";import{r as Ye,e as ze,H as $t,I as rr,d as xt,J as $n,h as de,V as _l,K as jc,L as Kc,M as hr,O as _d,P as bd,Q as ft,l as si,R as vr,S as Ko,T as Yc,U as fa,W as rn,X as Ks,v as Wn,Y as yd,Z as He,$ as lt,a0 as $e,a1 as qc,a2 as $c,a3 as Wr,a4 as Zc,a5 as or,a6 as Xr,u as On,a as Kt,a7 as Ed,j as Zt,a8 as pi,a9 as rt,aa as ar,ab as Nr,ac as Ys,b as jr,ad as Sd,ae as wr,_ as Do,F as Cr,af as Td,ag as Md,ah as Kr,ai as qs,aj as Et,ak as Ad,al as Rd,am as wd,an as Jc,ao as Cd,ap as Pd,aq as Ja,ar as Ld,as as Id,at as Nd,f as Od,g as Dd,au as Fd,av as kd,m as Pn,s as Wt,x as Jt,o as oi,n as wn,p as qi,B as Ud,w as Sn,D as bl,t as yl,y as Bd,z as zd,A as $i,E as Qc,N as Vd,G as Gd}from"./index-KM-T22Ti.js";import{b as Hd}from"./utils-BXVzdOoR.js";import{_ as Wd}from"./ul-Dmrv9D_0.js";function Or(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}function El(n){return n&-n}class eu{constructor(e,t){this.l=e,this.min=t;const i=new Array(e+1);for(let r=0;r<e+1;++r)i[r]=0;this.ft=i}add(e,t){if(t===0)return;const{l:i,ft:r}=this;for(e+=1;e<=i;)r[e]+=t,e+=El(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;const{ft:t,min:i,l:r}=this;if(e>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let o=e*i;for(;e>0;)o+=t[e],e-=El(e);return o}getBound(e){let t=0,i=this.l;for(;i>t;){const r=Math.floor((t+i)/2),o=this.sum(r);if(o>e){i=r;continue}else if(o<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}}let io;function Xd(){return typeof document>"u"?!1:(io===void 0&&("matchMedia"in window?io=window.matchMedia("(pointer:coarse)").matches:io=!1),io)}let ha;function Sl(){return typeof document>"u"?1:(ha===void 0&&(ha="chrome"in window?window.devicePixelRatio:1),ha)}const tu="VVirtualListXScroll";function jd({columnsRef:n,renderColRef:e,renderItemWithColsRef:t}){const i=Ye(0),r=Ye(0),o=ze(()=>{const a=n.value;if(a.length===0)return null;const u=new eu(a.length,0);return a.forEach((d,m)=>{u.add(m,d.width)}),u}),s=$t(()=>{const a=o.value;return a!==null?Math.max(a.getBound(r.value)-1,0):0}),l=a=>{const u=o.value;return u!==null?u.sum(a):0},c=$t(()=>{const a=o.value;return a!==null?Math.min(a.getBound(r.value+i.value)+1,n.value.length-1):0});return rr(tu,{startIndexRef:s,endIndexRef:c,columnsRef:n,renderColRef:e,renderItemWithColsRef:t,getLeft:l}),{listWidthRef:i,scrollLeftRef:r}}const Tl=xt({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:n,endIndexRef:e,columnsRef:t,getLeft:i,renderColRef:r,renderItemWithColsRef:o}=$n(tu);return{startIndex:n,endIndex:e,columns:t,renderCol:r,renderItemWithCols:o,getLeft:i}},render(){const{startIndex:n,endIndex:e,columns:t,renderCol:i,renderItemWithCols:r,getLeft:o,item:s}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:n,endColIndex:e,allColumns:t,item:s,getLeft:o});if(i!=null){const l=[];for(let c=n;c<=e;++c){const a=t[c];l.push(i({column:a,left:o(c),item:s}))}return l}return null}}),Kd=No(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[No("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[No("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),nu=xt({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=Kc();Kd.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Gc,ssr:e}),hr(()=>{const{defaultScrollIndex:P,defaultScrollKey:I}=n;P!=null?h({index:P}):I!=null&&h({key:I})});let t=!1,i=!1;_d(()=>{if(t=!1,!i){i=!0;return}h({top:p.value,left:s.value})}),bd(()=>{t=!0,i||(i=!0)});const r=$t(()=>{if(n.renderCol==null&&n.renderItemWithCols==null||n.columns.length===0)return;let P=0;return n.columns.forEach(I=>{P+=I.width}),P}),o=ze(()=>{const P=new Map,{keyField:I}=n;return n.items.forEach((z,G)=>{P.set(z[I],G)}),P}),{scrollLeftRef:s,listWidthRef:l}=jd({columnsRef:ft(n,"columns"),renderColRef:ft(n,"renderCol"),renderItemWithColsRef:ft(n,"renderItemWithCols")}),c=Ye(null),a=Ye(void 0),u=new Map,d=ze(()=>{const{items:P,itemSize:I,keyField:z}=n,G=new eu(P.length,I);return P.forEach((j,W)=>{const J=j[z],se=u.get(J);se!==void 0&&G.add(W,se)}),G}),m=Ye(0),p=Ye(0),g=$t(()=>Math.max(d.value.getBound(p.value-si(n.paddingTop))-1,0)),v=ze(()=>{const{value:P}=a;if(P===void 0)return[];const{items:I,itemSize:z}=n,G=g.value,j=Math.min(G+Math.ceil(P/z+1),I.length-1),W=[];for(let J=G;J<=j;++J)W.push(I[J]);return W}),h=(P,I)=>{if(typeof P=="number"){_(P,I,"auto");return}const{left:z,top:G,index:j,key:W,position:J,behavior:se,debounce:xe=!0}=P;if(z!==void 0||G!==void 0)_(z,G,se);else if(j!==void 0)y(j,se,xe);else if(W!==void 0){const ne=o.value.get(W);ne!==void 0&&y(ne,se,xe)}else J==="bottom"?_(0,Number.MAX_SAFE_INTEGER,se):J==="top"&&_(0,0,se)};let f,b=null;function y(P,I,z){const{value:G}=d,j=G.sum(P)+si(n.paddingTop);if(!z)c.value.scrollTo({left:0,top:j,behavior:I});else{f=P,b!==null&&window.clearTimeout(b),b=window.setTimeout(()=>{f=void 0,b=null},16);const{scrollTop:W,offsetHeight:J}=c.value;if(j>W){const se=G.get(P);j+se<=W+J||c.value.scrollTo({left:0,top:j+se-J,behavior:I})}else c.value.scrollTo({left:0,top:j,behavior:I})}}function _(P,I,z){c.value.scrollTo({left:P,top:I,behavior:z})}function A(P,I){var z,G,j;if(t||n.ignoreItemResize||L(I.target))return;const{value:W}=d,J=o.value.get(P),se=W.get(J),xe=(j=(G=(z=I.borderBoxSize)===null||z===void 0?void 0:z[0])===null||G===void 0?void 0:G.blockSize)!==null&&j!==void 0?j:I.contentRect.height;if(xe===se)return;xe-n.itemSize===0?u.delete(P):u.set(P,xe-n.itemSize);const ie=xe-se;if(ie===0)return;W.add(J,ie);const Ee=c.value;if(Ee!=null){if(f===void 0){const ee=W.sum(J);Ee.scrollTop>ee&&Ee.scrollBy(0,ie)}else if(J<f)Ee.scrollBy(0,ie);else if(J===f){const ee=W.sum(J);xe+ee>Ee.scrollTop+Ee.offsetHeight&&Ee.scrollBy(0,ie)}w()}m.value++}const T=!Xd();let C=!1;function D(P){var I;(I=n.onScroll)===null||I===void 0||I.call(n,P),(!T||!C)&&w()}function S(P){var I;if((I=n.onWheel)===null||I===void 0||I.call(n,P),T){const z=c.value;if(z!=null){if(P.deltaX===0&&(z.scrollTop===0&&P.deltaY<=0||z.scrollTop+z.offsetHeight>=z.scrollHeight&&P.deltaY>=0))return;P.preventDefault(),z.scrollTop+=P.deltaY/Sl(),z.scrollLeft+=P.deltaX/Sl(),w(),C=!0,Hd(()=>{C=!1})}}}function E(P){if(t||L(P.target))return;if(n.renderCol==null&&n.renderItemWithCols==null){if(P.contentRect.height===a.value)return}else if(P.contentRect.height===a.value&&P.contentRect.width===l.value)return;a.value=P.contentRect.height,l.value=P.contentRect.width;const{onResize:I}=n;I!==void 0&&I(P)}function w(){const{value:P}=c;P!=null&&(p.value=P.scrollTop,s.value=P.scrollLeft)}function L(P){let I=P;for(;I!==null;){if(I.style.display==="none")return!0;I=I.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:ze(()=>{const{itemResizable:P}=n,I=vr(d.value.sum());return m.value,[n.itemsStyle,{boxSizing:"content-box",width:vr(r.value),height:P?"":I,minHeight:P?I:"",paddingTop:vr(n.paddingTop),paddingBottom:vr(n.paddingBottom)}]}),visibleItemsStyle:ze(()=>(m.value,{transform:`translateY(${vr(d.value.sum(g.value))})`})),viewportItems:v,listElRef:c,itemsElRef:Ye(null),scrollTo:h,handleListResize:E,handleListScroll:D,handleListWheel:S,handleItemResize:A}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:i}=this;return de(_l,{onResize:this.handleListResize},{default:()=>{var r,o;return de("div",jc(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?de("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[de(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:s,renderItemWithCols:l}=this;return this.viewportItems.map(c=>{const a=c[e],u=t.get(a),d=s!=null?de(Tl,{index:u,item:c}):void 0,m=l!=null?de(Tl,{index:u,item:c}):void 0,p=this.$slots.default({item:c,renderedCols:d,renderedItemWithCols:m,index:u})[0];return n?de(_l,{key:a,onResize:g=>this.handleItemResize(a,g)},{default:()=>p}):(p.key=a,p)})}})]):(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)])}})}}),Dn="v-hidden",Yd=No("[v-hidden]",{display:"none!important"}),Ml=xt({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=Ye(null),i=Ye(null);function r(s){const{value:l}=t,{getCounter:c,getTail:a}=n;let u;if(c!==void 0?u=c():u=i.value,!l||!u)return;u.hasAttribute(Dn)&&u.removeAttribute(Dn);const{children:d}=l;if(s.showAllItemsBeforeCalculate)for(const y of d)y.hasAttribute(Dn)&&y.removeAttribute(Dn);const m=l.offsetWidth,p=[],g=e.tail?a==null?void 0:a():null;let v=g?g.offsetWidth:0,h=!1;const f=l.children.length-(e.tail?1:0);for(let y=0;y<f-1;++y){if(y<0)continue;const _=d[y];if(h){_.hasAttribute(Dn)||_.setAttribute(Dn,"");continue}else _.hasAttribute(Dn)&&_.removeAttribute(Dn);const A=_.offsetWidth;if(v+=A,p[y]=A,v>m){const{updateCounter:T}=n;for(let C=y;C>=0;--C){const D=f-1-C;T!==void 0?T(D):u.textContent=`${D}`;const S=u.offsetWidth;if(v-=p[C],v+S<=m||C===0){h=!0,y=C-1,g&&(y===-1?(g.style.maxWidth=`${m-S}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");const{onUpdateCount:E}=n;E&&E(D);break}}}}const{onUpdateOverflow:b}=n;h?b!==void 0&&b(!0):(b!==void 0&&b(!1),u.setAttribute(Dn,""))}const o=Kc();return Yd.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Gc,ssr:o}),hr(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return Ko(()=>this.sync({showAllItemsBeforeCalculate:!1})),de("div",{class:"v-overflow",ref:"selfRef"},[Yc(n,"default"),n.counter?n.counter():de("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function $s(n,e){e&&(hr(()=>{const{value:t}=n;t&&fa.registerHandler(t,e)}),rn(n,(t,i)=>{i&&fa.unregisterHandler(i)},{deep:!1}),Ks(()=>{const{value:t}=n;t&&fa.unregisterHandler(t)}))}const qd=new WeakSet;function $d(n){qd.add(n)}function Al(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function pa(n){const e=n.filter(t=>t!==void 0);if(e.length!==0)return e.length===1?e[0]:t=>{n.forEach(i=>{i&&i(t)})}}function Zi(n,...e){return typeof n=="function"?n(...e):typeof n=="string"?Wn(n):typeof n=="number"?Wn(String(n)):null}const iu=xt({name:"Checkmark",render(){return de("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},de("g",{fill:"none"},de("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Zd=xt({name:"ChevronDown",render(){return de("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Jd=xt({name:"ChevronRight",render(){return de("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Qd=yd("clear",()=>de("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},de("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},de("g",{fill:"currentColor","fill-rule":"nonzero"},de("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),ef=xt({name:"Empty",render(){return de("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),de("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),tf=He("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[lt(">",[$e("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[lt("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),lt("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),$e("placeholder",`
 display: flex;
 `),$e("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[qc({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),nf=xt({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Zc("-base-clear",tf,ft(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return de("div",{class:`${n}-base-clear`},de($c,null,{default:()=>{var e,t;return this.show?de("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Wr(this.$slots.icon,()=>[de(or,{clsPrefix:n},{default:()=>de(Qd,null)})])):de("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),ru=xt({props:{onFocus:Function,onBlur:Function},setup(n){return()=>de("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}}),rf=He("base-menu-mask",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`,[ld()]),of=xt({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(n){Zc("-base-menu-mask",rf,ft(n,"clsPrefix"));const e=Ye(null);let t=null;const i=Ye(!1);return Ks(()=>{t!==null&&window.clearTimeout(t)}),Object.assign({message:e,show:i},{showOnce(o,s=1500){t&&window.clearTimeout(t),i.value=!0,e.value=o,t=window.setTimeout(()=>{i.value=!1,e.value=null},s)}})},render(){return de(Xr,{name:"fade-in-transition"},{default:()=>this.show?de("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}});function Rl(n){return Array.isArray(n)?n:[n]}const Qa={STOP:"STOP"};function ou(n,e){const t=e(n);n.children!==void 0&&t!==Qa.STOP&&n.children.forEach(i=>ou(i,e))}function af(n,e={}){const{preserveGroup:t=!1}=e,i=[],r=t?s=>{s.isLeaf||(i.push(s.key),o(s.children))}:s=>{s.isLeaf||(s.isGroup||i.push(s.key),o(s.children))};function o(s){s.forEach(r)}return o(n),i}function sf(n,e){const{isLeaf:t}=n;return t!==void 0?t:!e(n)}function lf(n){return n.children}function cf(n){return n.key}function uf(){return!1}function df(n,e){const{isLeaf:t}=n;return!(t===!1&&!Array.isArray(e(n)))}function ff(n){return n.disabled===!0}function hf(n,e){return n.isLeaf===!1&&!Array.isArray(e(n))}function ma(n){var e;return n==null?[]:Array.isArray(n)?n:(e=n.checkedKeys)!==null&&e!==void 0?e:[]}function ga(n){var e;return n==null||Array.isArray(n)?[]:(e=n.indeterminateKeys)!==null&&e!==void 0?e:[]}function pf(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function mf(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function gf(n){return(n==null?void 0:n.type)==="group"}function xf(n){const e=new Map;return n.forEach((t,i)=>{e.set(t.key,i)}),t=>{var i;return(i=e.get(t))!==null&&i!==void 0?i:null}}class au extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function vf(n,e,t,i){return Go(e.concat(n),t,i,!1)}function _f(n,e){const t=new Set;return n.forEach(i=>{const r=e.treeNodeMap.get(i);if(r!==void 0){let o=r.parent;for(;o!==null&&!(o.disabled||t.has(o.key));)t.add(o.key),o=o.parent}}),t}function bf(n,e,t,i){const r=Go(e,t,i,!1),o=Go(n,t,i,!0),s=_f(n,t),l=[];return r.forEach(c=>{(o.has(c)||s.has(c))&&l.push(c)}),l.forEach(c=>r.delete(c)),r}function xa(n,e){const{checkedKeys:t,keysToCheck:i,keysToUncheck:r,indeterminateKeys:o,cascade:s,leafOnly:l,checkStrategy:c,allowNotLoaded:a}=n;if(!s)return i!==void 0?{checkedKeys:pf(t,i),indeterminateKeys:Array.from(o)}:r!==void 0?{checkedKeys:mf(t,r),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:u}=e;let d;r!==void 0?d=bf(r,t,e,a):i!==void 0?d=vf(i,t,e,a):d=Go(t,e,a,!1);const m=c==="parent",p=c==="child"||l,g=d,v=new Set,h=Math.max.apply(null,Array.from(u.keys()));for(let f=h;f>=0;f-=1){const b=f===0,y=u.get(f);for(const _ of y){if(_.isLeaf)continue;const{key:A,shallowLoaded:T}=_;if(p&&T&&_.children.forEach(E=>{!E.disabled&&!E.isLeaf&&E.shallowLoaded&&g.has(E.key)&&g.delete(E.key)}),_.disabled||!T)continue;let C=!0,D=!1,S=!0;for(const E of _.children){const w=E.key;if(!E.disabled){if(S&&(S=!1),g.has(w))D=!0;else if(v.has(w)){D=!0,C=!1;break}else if(C=!1,D)break}}C&&!S?(m&&_.children.forEach(E=>{!E.disabled&&g.has(E.key)&&g.delete(E.key)}),g.add(A)):D&&v.add(A),b&&p&&g.has(A)&&g.delete(A)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(v)}}function Go(n,e,t,i){const{treeNodeMap:r,getChildren:o}=e,s=new Set,l=new Set(n);return n.forEach(c=>{const a=r.get(c);a!==void 0&&ou(a,u=>{if(u.disabled)return Qa.STOP;const{key:d}=u;if(!s.has(d)&&(s.add(d),l.add(d),hf(u.rawNode,o))){if(i)return Qa.STOP;if(!t)throw new au}})}),l}function yf(n,{includeGroup:e=!1,includeSelf:t=!0},i){var r;const o=i.treeNodeMap;let s=n==null?null:(r=o.get(n))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return l.treeNode=null,l;for(;s;)!s.ignored&&(e||!s.isGroup)&&l.treeNodePath.push(s),s=s.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(c=>c.key),l}function Ef(n){if(n.length===0)return null;const e=n[0];return e.isGroup||e.ignored||e.disabled?e.getNext():e}function Sf(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r+1)%i]:r===t.length-1?null:t[r+1]}function wl(n,e,{loop:t=!1,includeDisabled:i=!1}={}){const r=e==="prev"?Tf:Sf,o={reverse:e==="prev"};let s=!1,l=null;function c(a){if(a!==null){if(a===n){if(!s)s=!0;else if(!n.disabled&&!n.isGroup){l=n;return}}else if((!a.disabled||i)&&!a.ignored&&!a.isGroup){l=a;return}if(a.isGroup){const u=Zs(a,o);u!==null?l=u:c(r(a,t))}else{const u=r(a,!1);if(u!==null)c(u);else{const d=Mf(a);d!=null&&d.isGroup?c(r(d,t)):t&&c(r(a,!0))}}}}return c(n),l}function Tf(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r-1+i)%i]:r===0?null:t[r-1]}function Mf(n){return n.parent}function Zs(n,e={}){const{reverse:t=!1}=e,{children:i}=n;if(i){const{length:r}=i,o=t?r-1:0,s=t?-1:r,l=t?-1:1;for(let c=o;c!==s;c+=l){const a=i[c];if(!a.disabled&&!a.ignored)if(a.isGroup){const u=Zs(a,e);if(u!==null)return u}else return a}}return null}const Af={getChild(){return this.ignored?null:Zs(this)},getParent(){const{parent:n}=this;return n!=null&&n.isGroup?n.getParent():n},getNext(n={}){return wl(this,"next",n)},getPrev(n={}){return wl(this,"prev",n)}};function Rf(n,e){const t=e?new Set(e):void 0,i=[];function r(o){o.forEach(s=>{i.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||t===void 0||t.has(s.key))&&r(s.children)})}return r(n),i}function wf(n,e){const t=n.key;for(;e;){if(e.key===t)return!0;e=e.parent}return!1}function su(n,e,t,i,r,o=null,s=0){const l=[];return n.forEach((c,a)=>{var u;const d=Object.create(i);if(d.rawNode=c,d.siblings=l,d.level=s,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===n.length,d.parent=o,!d.ignored){const m=r(c);Array.isArray(m)&&(d.children=su(m,e,t,i,r,d,s+1))}l.push(d),e.set(d.key,d),t.has(s)||t.set(s,[]),(u=t.get(s))===null||u===void 0||u.push(d)}),l}function lu(n,e={}){var t;const i=new Map,r=new Map,{getDisabled:o=ff,getIgnored:s=uf,getIsGroup:l=gf,getKey:c=cf}=e,a=(t=e.getChildren)!==null&&t!==void 0?t:lf,u=e.ignoreEmptyChildren?_=>{const A=a(_);return Array.isArray(A)?A.length?A:null:A}:a,d=Object.assign({get key(){return c(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return sf(this.rawNode,u)},get shallowLoaded(){return df(this.rawNode,u)},get ignored(){return s(this.rawNode)},contains(_){return wf(this,_)}},Af),m=su(n,i,r,d,u);function p(_){if(_==null)return null;const A=i.get(_);return A&&!A.isGroup&&!A.ignored?A:null}function g(_){if(_==null)return null;const A=i.get(_);return A&&!A.ignored?A:null}function v(_,A){const T=g(_);return T?T.getPrev(A):null}function h(_,A){const T=g(_);return T?T.getNext(A):null}function f(_){const A=g(_);return A?A.getParent():null}function b(_){const A=g(_);return A?A.getChild():null}const y={treeNodes:m,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(_){return Rf(m,_)},getNode:p,getPrev:v,getNext:h,getParent:f,getChild:b,getFirstAvailableNode(){return Ef(m)},getPath(_,A={}){return yf(_,A,y)},getCheckedKeys(_,A={}){const{cascade:T=!0,leafOnly:C=!1,checkStrategy:D="all",allowNotLoaded:S=!1}=A;return xa({checkedKeys:ma(_),indeterminateKeys:ga(_),cascade:T,leafOnly:C,checkStrategy:D,allowNotLoaded:S},y)},check(_,A,T={}){const{cascade:C=!0,leafOnly:D=!1,checkStrategy:S="all",allowNotLoaded:E=!1}=T;return xa({checkedKeys:ma(A),indeterminateKeys:ga(A),keysToCheck:_==null?[]:Rl(_),cascade:C,leafOnly:D,checkStrategy:S,allowNotLoaded:E},y)},uncheck(_,A,T={}){const{cascade:C=!0,leafOnly:D=!1,checkStrategy:S="all",allowNotLoaded:E=!1}=T;return xa({checkedKeys:ma(A),indeterminateKeys:ga(A),keysToUncheck:_==null?[]:Rl(_),cascade:C,leafOnly:D,checkStrategy:S,allowNotLoaded:E},y)},getNonLeafKeys(_={}){return af(m,_)}};return y}const Cf=He("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[$e("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[lt("+",[$e("description",`
 margin-top: 8px;
 `)])]),$e("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),$e("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Pf=Object.assign(Object.assign({},Kt.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),cu=xt({name:"Empty",props:Pf,slots:Object,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedComponentPropsRef:i}=On(n),r=Kt("Empty","-empty",Cf,Ed,n,e),{localeRef:o}=Hc("Empty"),s=ze(()=>{var u,d,m;return(u=n.description)!==null&&u!==void 0?u:(m=(d=i==null?void 0:i.value)===null||d===void 0?void 0:d.Empty)===null||m===void 0?void 0:m.description}),l=ze(()=>{var u,d;return((d=(u=i==null?void 0:i.value)===null||u===void 0?void 0:u.Empty)===null||d===void 0?void 0:d.renderIcon)||(()=>de(ef,null))}),c=ze(()=>{const{size:u}=n,{common:{cubicBezierEaseInOut:d},self:{[Zt("iconSize",u)]:m,[Zt("fontSize",u)]:p,textColor:g,iconColor:v,extraTextColor:h}}=r.value;return{"--n-icon-size":m,"--n-font-size":p,"--n-bezier":d,"--n-text-color":g,"--n-icon-color":v,"--n-extra-text-color":h}}),a=t?pi("empty",ze(()=>{let u="";const{size:d}=n;return u+=d[0],u}),c,n):void 0;return{mergedClsPrefix:e,mergedRenderIcon:l,localizedDescription:ze(()=>s.value||o.value.description),cssVars:t?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),de("div",{class:[`${e}-empty`,this.themeClass],style:this.cssVars},this.showIcon?de("div",{class:`${e}-empty__icon`},n.icon?n.icon():de(or,{clsPrefix:e},{default:this.mergedRenderIcon})):null,this.showDescription?de("div",{class:`${e}-empty__description`},n.default?n.default():this.localizedDescription):null,n.extra?de("div",{class:`${e}-empty__extra`},n.extra()):null)}}),Cl=xt({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t,nodePropsRef:i}=$n(js);return{labelField:t,nodeProps:i,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,nodeProps:i,tmNode:{rawNode:r}}=this,o=i==null?void 0:i(r),s=e?e(r,!1):Zi(r[this.labelField],r,!1),l=de("div",Object.assign({},o,{class:[`${n}-base-select-group-header`,o==null?void 0:o.class]}),s);return r.render?r.render({node:l,option:r}):t?t({node:l,option:r,selected:!1}):l}});function Lf(n,e){return de(Xr,{name:"fade-in-scale-up-transition"},{default:()=>n?de(or,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>de(iu)}):null})}const Pl=xt({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:l,valueFieldRef:c,showCheckmarkRef:a,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:m}=$n(js),p=$t(()=>{const{value:f}=t;return f?n.tmNode.key===f.key:!1});function g(f){const{tmNode:b}=n;b.disabled||d(f,b)}function v(f){const{tmNode:b}=n;b.disabled||m(f,b)}function h(f){const{tmNode:b}=n,{value:y}=p;b.disabled||y||m(f,b)}return{multiple:i,isGrouped:$t(()=>{const{tmNode:f}=n,{parent:b}=f;return b&&b.rawNode.type==="group"}),showCheckmark:a,nodeProps:u,isPending:p,isSelected:$t(()=>{const{value:f}=e,{value:b}=i;if(f===null)return!1;const y=n.tmNode.rawNode[c.value];if(b){const{value:_}=r;return _.has(y)}else return f===y}),labelField:l,renderLabel:o,renderOption:s,handleMouseMove:h,handleMouseEnter:v,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,nodeProps:s,renderOption:l,renderLabel:c,handleClick:a,handleMouseEnter:u,handleMouseMove:d}=this,m=Lf(t,n),p=c?[c(e,t),o&&m]:[Zi(e[this.labelField],e,t),o&&m],g=s==null?void 0:s(e),v=de("div",Object.assign({},g,{class:[`${n}-base-select-option`,e.class,g==null?void 0:g.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:[(g==null?void 0:g.style)||"",e.style||""],onClick:pa([a,g==null?void 0:g.onClick]),onMouseenter:pa([u,g==null?void 0:g.onMouseenter]),onMousemove:pa([d,g==null?void 0:g.onMousemove])}),de("div",{class:`${n}-base-select-option__content`},p));return e.render?e.render({node:v,option:e,selected:t}):l?l({node:v,option:e,selected:t}):v}}),If=He("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[He("scrollbar",`
 max-height: var(--n-height);
 `),He("virtual-list",`
 max-height: var(--n-height);
 `),He("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[$e("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),He("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),He("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),$e("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),$e("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),$e("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$e("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),He("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),He("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[rt("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),lt("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),lt("&:active",`
 color: var(--n-option-text-color-pressed);
 `),rt("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),rt("pending",[lt("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),rt("selected",`
 color: var(--n-option-text-color-active);
 `,[lt("&::before",`
 background-color: var(--n-option-color-active);
 `),rt("pending",[lt("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),rt("disabled",`
 cursor: not-allowed;
 `,[ar("selected",`
 color: var(--n-option-text-color-disabled);
 `),rt("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),$e("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Za({enterScale:"0.5"})])])]),Nf=xt({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Kt.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=On(n),i=jr("InternalSelectMenu",t,e),r=Kt("InternalSelectMenu","-internal-select-menu",If,Sd,n,ft(n,"clsPrefix")),o=Ye(null),s=Ye(null),l=Ye(null),c=ze(()=>n.treeMate.getFlattenedNodes()),a=ze(()=>xf(c.value)),u=Ye(null);function d(){const{treeMate:ne}=n;let ie=null;const{value:Ee}=n;Ee===null?ie=ne.getFirstAvailableNode():(n.multiple?ie=ne.getNode((Ee||[])[(Ee||[]).length-1]):ie=ne.getNode(Ee),(!ie||ie.disabled)&&(ie=ne.getFirstAvailableNode())),I(ie||null)}function m(){const{value:ne}=u;ne&&!n.treeMate.getNode(ne.key)&&(u.value=null)}let p;rn(()=>n.show,ne=>{ne?p=rn(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?d():m(),Ko(z)):m()},{immediate:!0}):p==null||p()},{immediate:!0}),Ks(()=>{p==null||p()});const g=ze(()=>si(r.value.self[Zt("optionHeight",n.size)])),v=ze(()=>wr(r.value.self[Zt("padding",n.size)])),h=ze(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),f=ze(()=>{const ne=c.value;return ne&&ne.length===0});function b(ne){const{onToggle:ie}=n;ie&&ie(ne)}function y(ne){const{onScroll:ie}=n;ie&&ie(ne)}function _(ne){var ie;(ie=l.value)===null||ie===void 0||ie.sync(),y(ne)}function A(){var ne;(ne=l.value)===null||ne===void 0||ne.sync()}function T(){const{value:ne}=u;return ne||null}function C(ne,ie){ie.disabled||I(ie,!1)}function D(ne,ie){ie.disabled||b(ie)}function S(ne){var ie;Or(ne,"action")||(ie=n.onKeyup)===null||ie===void 0||ie.call(n,ne)}function E(ne){var ie;Or(ne,"action")||(ie=n.onKeydown)===null||ie===void 0||ie.call(n,ne)}function w(ne){var ie;(ie=n.onMousedown)===null||ie===void 0||ie.call(n,ne),!n.focusable&&ne.preventDefault()}function L(){const{value:ne}=u;ne&&I(ne.getNext({loop:!0}),!0)}function P(){const{value:ne}=u;ne&&I(ne.getPrev({loop:!0}),!0)}function I(ne,ie=!1){u.value=ne,ie&&z()}function z(){var ne,ie;const Ee=u.value;if(!Ee)return;const ee=a.value(Ee.key);ee!==null&&(n.virtualScroll?(ne=s.value)===null||ne===void 0||ne.scrollTo({index:ee}):(ie=l.value)===null||ie===void 0||ie.scrollTo({index:ee,elSize:g.value}))}function G(ne){var ie,Ee;!((ie=o.value)===null||ie===void 0)&&ie.contains(ne.target)&&((Ee=n.onFocus)===null||Ee===void 0||Ee.call(n,ne))}function j(ne){var ie,Ee;!((ie=o.value)===null||ie===void 0)&&ie.contains(ne.relatedTarget)||(Ee=n.onBlur)===null||Ee===void 0||Ee.call(n,ne)}rr(js,{handleOptionMouseEnter:C,handleOptionClick:D,valueSetRef:h,pendingTmNodeRef:u,nodePropsRef:ft(n,"nodeProps"),showCheckmarkRef:ft(n,"showCheckmark"),multipleRef:ft(n,"multiple"),valueRef:ft(n,"value"),renderLabelRef:ft(n,"renderLabel"),renderOptionRef:ft(n,"renderOption"),labelFieldRef:ft(n,"labelField"),valueFieldRef:ft(n,"valueField")}),rr(cd,o),hr(()=>{const{value:ne}=l;ne&&ne.sync()});const W=ze(()=>{const{size:ne}=n,{common:{cubicBezierEaseInOut:ie},self:{height:Ee,borderRadius:ee,color:k,groupHeaderTextColor:B,actionDividerColor:K,optionTextColorPressed:Y,optionTextColor:re,optionTextColorDisabled:pe,optionTextColorActive:_e,optionOpacityDisabled:Pe,optionCheckColor:Xe,actionTextColor:V,optionColorPending:Ne,optionColorActive:Q,loadingColor:he,loadingSize:te,optionColorActivePending:Se,[Zt("optionFontSize",ne)]:Te,[Zt("optionHeight",ne)]:ke,[Zt("optionPadding",ne)]:M}}=r.value;return{"--n-height":Ee,"--n-action-divider-color":K,"--n-action-text-color":V,"--n-bezier":ie,"--n-border-radius":ee,"--n-color":k,"--n-option-font-size":Te,"--n-group-header-text-color":B,"--n-option-check-color":Xe,"--n-option-color-pending":Ne,"--n-option-color-active":Q,"--n-option-color-active-pending":Se,"--n-option-height":ke,"--n-option-opacity-disabled":Pe,"--n-option-text-color":re,"--n-option-text-color-active":_e,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":Y,"--n-option-padding":M,"--n-option-padding-left":wr(M,"left"),"--n-option-padding-right":wr(M,"right"),"--n-loading-color":he,"--n-loading-size":te}}),{inlineThemeDisabled:J}=n,se=J?pi("internal-select-menu",ze(()=>n.size[0]),W,n):void 0,xe={selfRef:o,next:L,prev:P,getPendingTmNode:T};return $s(o,n.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:e,rtlEnabled:i,virtualListRef:s,scrollbarRef:l,itemSize:g,padding:v,flattenedNodes:c,empty:f,virtualListContainer(){const{value:ne}=s;return ne==null?void 0:ne.listElRef},virtualListContent(){const{value:ne}=s;return ne==null?void 0:ne.itemsElRef},doScroll:y,handleFocusin:G,handleFocusout:j,handleKeyUp:S,handleKeyDown:E,handleMouseDown:w,handleVirtualListResize:A,handleVirtualListScroll:_,cssVars:J?void 0:W,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender},xe)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),de("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Nr(n.header,s=>s&&de("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},s)),this.loading?de("div",{class:`${t}-base-select-menu__loading`},de(Ys,{clsPrefix:t,strokeWidth:20})):this.empty?de("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Wr(n.empty,()=>[de(cu,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):de(Wc,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?de(nu,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?de(Cl,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:de(Pl,{clsPrefix:t,key:s.key,tmNode:s})}):de("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?de(Cl,{key:s.key,clsPrefix:t,tmNode:s}):de(Pl,{clsPrefix:t,key:s.key,tmNode:s})))}),Nr(n.action,s=>s&&[de("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),de(ru,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Of=xt({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return de(Ys,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?de(nf,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>de(or,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Wr(e.default,()=>[de(Zd,null)])})}):null})}}}),Df=lt([He("base-selection",`
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
 `,[He("base-loading",`
 color: var(--n-loading-color);
 `),He("base-selection-tags","min-height: var(--n-height);"),$e("border, state-border",`
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
 `),$e("state-border",`
 z-index: 1;
 border-color: #0000;
 `),He("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[$e("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),He("base-selection-overlay",`
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
 `,[$e("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),He("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[$e("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),He("base-selection-tags",`
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
 `),He("base-selection-label",`
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
 `,[He("base-selection-input",`
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
 `,[$e("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),$e("render-label",`
 color: var(--n-text-color);
 `)]),ar("disabled",[lt("&:hover",[$e("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),rt("focus",[$e("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),rt("active",[$e("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),He("base-selection-label","background-color: var(--n-color-active);"),He("base-selection-tags","background-color: var(--n-color-active);")])]),rt("disabled","cursor: not-allowed;",[$e("arrow",`
 color: var(--n-arrow-color-disabled);
 `),He("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[He("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),$e("render-label",`
 color: var(--n-text-color-disabled);
 `)]),He("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),He("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),He("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[$e("input",`
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
 `),$e("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>rt(`${n}-status`,[$e("state-border",`border: var(--n-border-${n});`),ar("disabled",[lt("&:hover",[$e("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),rt("active",[$e("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),He("base-selection-label",`background-color: var(--n-color-active-${n});`),He("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),rt("focus",[$e("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),He("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),He("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[lt("&:last-child","padding-right: 0;"),He("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[$e("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ff=xt({name:"InternalSelection",props:Object.assign(Object.assign({},Kt.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=On(n),i=jr("InternalSelection",t,e),r=Ye(null),o=Ye(null),s=Ye(null),l=Ye(null),c=Ye(null),a=Ye(null),u=Ye(null),d=Ye(null),m=Ye(null),p=Ye(null),g=Ye(!1),v=Ye(!1),h=Ye(!1),f=Kt("InternalSelection","-internal-selection",Df,Td,n,ft(n,"clsPrefix")),b=ze(()=>n.clearable&&!n.disabled&&(h.value||n.active)),y=ze(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Zi(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),_=ze(()=>{const x=n.selectedOption;if(x)return x[n.labelField]}),A=ze(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function T(){var x;const{value:R}=r;if(R){const{value:F}=o;F&&(F.style.width=`${R.offsetWidth}px`,n.maxTagCount!=="responsive"&&((x=m.value)===null||x===void 0||x.sync({showAllItemsBeforeCalculate:!1})))}}function C(){const{value:x}=p;x&&(x.style.display="none")}function D(){const{value:x}=p;x&&(x.style.display="inline-block")}rn(ft(n,"active"),x=>{x||C()}),rn(ft(n,"pattern"),()=>{n.multiple&&Ko(T)});function S(x){const{onFocus:R}=n;R&&R(x)}function E(x){const{onBlur:R}=n;R&&R(x)}function w(x){const{onDeleteOption:R}=n;R&&R(x)}function L(x){const{onClear:R}=n;R&&R(x)}function P(x){const{onPatternInput:R}=n;R&&R(x)}function I(x){var R;(!x.relatedTarget||!(!((R=s.value)===null||R===void 0)&&R.contains(x.relatedTarget)))&&S(x)}function z(x){var R;!((R=s.value)===null||R===void 0)&&R.contains(x.relatedTarget)||E(x)}function G(x){L(x)}function j(){h.value=!0}function W(){h.value=!1}function J(x){!n.active||!n.filterable||x.target!==o.value&&x.preventDefault()}function se(x){w(x)}const xe=Ye(!1);function ne(x){if(x.key==="Backspace"&&!xe.value&&!n.pattern.length){const{selectedOptions:R}=n;R!=null&&R.length&&se(R[R.length-1])}}let ie=null;function Ee(x){const{value:R}=r;if(R){const F=x.target.value;R.textContent=F,T()}n.ignoreComposition&&xe.value?ie=x:P(x)}function ee(){xe.value=!0}function k(){xe.value=!1,n.ignoreComposition&&P(ie),ie=null}function B(x){var R;v.value=!0,(R=n.onPatternFocus)===null||R===void 0||R.call(n,x)}function K(x){var R;v.value=!1,(R=n.onPatternBlur)===null||R===void 0||R.call(n,x)}function Y(){var x,R;if(n.filterable)v.value=!1,(x=a.value)===null||x===void 0||x.blur(),(R=o.value)===null||R===void 0||R.blur();else if(n.multiple){const{value:F}=l;F==null||F.blur()}else{const{value:F}=c;F==null||F.blur()}}function re(){var x,R,F;n.filterable?(v.value=!1,(x=a.value)===null||x===void 0||x.focus()):n.multiple?(R=l.value)===null||R===void 0||R.focus():(F=c.value)===null||F===void 0||F.focus()}function pe(){const{value:x}=o;x&&(D(),x.focus())}function _e(){const{value:x}=o;x&&x.blur()}function Pe(x){const{value:R}=u;R&&R.setTextContent(`+${x}`)}function Xe(){const{value:x}=d;return x}function V(){return o.value}let Ne=null;function Q(){Ne!==null&&window.clearTimeout(Ne)}function he(){n.active||(Q(),Ne=window.setTimeout(()=>{A.value&&(g.value=!0)},100))}function te(){Q()}function Se(x){x||(Q(),g.value=!1)}rn(A,x=>{x||(g.value=!1)}),hr(()=>{Md(()=>{const x=a.value;x&&(n.disabled?x.removeAttribute("tabindex"):x.tabIndex=v.value?-1:0)})}),$s(s,n.onResize);const{inlineThemeDisabled:Te}=n,ke=ze(()=>{const{size:x}=n,{common:{cubicBezierEaseInOut:R},self:{fontWeight:F,borderRadius:O,color:U,placeholderColor:$,textColor:q,paddingSingle:ce,paddingMultiple:fe,caretColor:oe,colorDisabled:ve,textColorDisabled:Ue,placeholderColorDisabled:Ve,colorActive:Le,boxShadowFocus:Fe,boxShadowActive:H,boxShadowHover:we,border:Ae,borderFocus:ye,borderHover:X,borderActive:Z,arrowColor:be,arrowColorDisabled:Oe,loadingColor:Ce,colorActiveWarning:Me,boxShadowFocusWarning:Re,boxShadowActiveWarning:Ie,boxShadowHoverWarning:De,borderWarning:Ke,borderFocusWarning:ht,borderHoverWarning:Nt,borderActiveWarning:Vt,colorActiveError:Rn,boxShadowFocusError:Li,boxShadowActiveError:Zn,boxShadowHoverError:eo,borderError:Ii,borderFocusError:to,borderHoverError:no,borderActiveError:oa,clearColor:aa,clearColorHover:sa,clearColorPressed:la,clearSize:ca,arrowSize:ua,[Zt("height",x)]:N,[Zt("fontSize",x)]:le}}=f.value,me=wr(ce),ge=wr(fe);return{"--n-bezier":R,"--n-border":Ae,"--n-border-active":Z,"--n-border-focus":ye,"--n-border-hover":X,"--n-border-radius":O,"--n-box-shadow-active":H,"--n-box-shadow-focus":Fe,"--n-box-shadow-hover":we,"--n-caret-color":oe,"--n-color":U,"--n-color-active":Le,"--n-color-disabled":ve,"--n-font-size":le,"--n-height":N,"--n-padding-single-top":me.top,"--n-padding-multiple-top":ge.top,"--n-padding-single-right":me.right,"--n-padding-multiple-right":ge.right,"--n-padding-single-left":me.left,"--n-padding-multiple-left":ge.left,"--n-padding-single-bottom":me.bottom,"--n-padding-multiple-bottom":ge.bottom,"--n-placeholder-color":$,"--n-placeholder-color-disabled":Ve,"--n-text-color":q,"--n-text-color-disabled":Ue,"--n-arrow-color":be,"--n-arrow-color-disabled":Oe,"--n-loading-color":Ce,"--n-color-active-warning":Me,"--n-box-shadow-focus-warning":Re,"--n-box-shadow-active-warning":Ie,"--n-box-shadow-hover-warning":De,"--n-border-warning":Ke,"--n-border-focus-warning":ht,"--n-border-hover-warning":Nt,"--n-border-active-warning":Vt,"--n-color-active-error":Rn,"--n-box-shadow-focus-error":Li,"--n-box-shadow-active-error":Zn,"--n-box-shadow-hover-error":eo,"--n-border-error":Ii,"--n-border-focus-error":to,"--n-border-hover-error":no,"--n-border-active-error":oa,"--n-clear-size":ca,"--n-clear-color":aa,"--n-clear-color-hover":sa,"--n-clear-color-pressed":la,"--n-arrow-size":ua,"--n-font-weight":F}}),M=Te?pi("internal-selection",ze(()=>n.size[0]),ke,n):void 0;return{mergedTheme:f,mergedClearable:b,mergedClsPrefix:e,rtlEnabled:i,patternInputFocused:v,filterablePlaceholder:y,label:_,selected:A,showTagsPanel:g,isComposing:xe,counterRef:u,counterWrapperRef:d,patternInputMirrorRef:r,patternInputRef:o,selfRef:s,multipleElRef:l,singleElRef:c,patternInputWrapperRef:a,overflowRef:m,inputTagElRef:p,handleMouseDown:J,handleFocusin:I,handleClear:G,handleMouseEnter:j,handleMouseLeave:W,handleDeleteOption:se,handlePatternKeyDown:ne,handlePatternInputInput:Ee,handlePatternInputBlur:K,handlePatternInputFocus:B,handleMouseEnterCounter:he,handleMouseLeaveCounter:te,handleFocusout:z,handleCompositionEnd:k,handleCompositionStart:ee,onPopoverUpdateShow:Se,focus:re,focusInput:pe,blur:Y,blurInput:_e,updateCounter:Pe,getCounter:Xe,getTail:V,renderLabel:n.renderLabel,cssVars:Te?void 0:ke,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:l,ellipsisTagPopoverProps:c,onRender:a,renderTag:u,renderLabel:d}=this;a==null||a();const m=o==="responsive",p=typeof o=="number",g=m||p,v=de(ud,null,{default:()=>de(Of,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var f,b;return(b=(f=this.$slots).arrow)===null||b===void 0?void 0:b.call(f)}})});let h;if(e){const{labelField:f}=this,b=P=>de("div",{class:`${l}-base-selection-tag-wrapper`,key:P.value},u?u({option:P,handleClose:()=>{this.handleDeleteOption(P)}}):de(Do,{size:t,closable:!P.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(P)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>d?d(P,!0):Zi(P[f],P,!0)})),y=()=>(p?this.selectedOptions.slice(0,o):this.selectedOptions).map(b),_=r?de("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},de("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),de("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,A=m?()=>de("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},de(Do,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let T;if(p){const P=this.selectedOptions.length-o;P>0&&(T=de("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},de(Do,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${P}`})))}const C=m?r?de(Ml,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:A,tail:()=>_}):de(Ml,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:y,counter:A}):p&&T?y().concat(T):y(),D=g?()=>de("div",{class:`${l}-base-selection-popover`},m?y():this.selectedOptions.map(b)):void 0,S=g?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},c):null,w=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?de("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},de("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,L=r?de("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},C,m?null:_,v):de("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},C,v);h=de(Cr,null,g?de(dd,Object.assign({},S,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>L,default:D}):L,w)}else if(r){const f=this.pattern||this.isComposing,b=this.active?!f:!this.selected,y=this.active?!1:this.selected;h=de("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:Al(this.label)},de("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?de("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},de("div",{class:`${l}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Zi(this.label,this.selectedOption,!0))):null,b?de("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},de("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else h=de("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?de("div",{class:`${l}-base-selection-input`,title:Al(this.label),key:"input"},de("div",{class:`${l}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Zi(this.label,this.selectedOption,!0))):de("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},de("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),v);return de("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,n&&`${l}-base-selection--${n}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},h,s?de("div",{class:`${l}-base-selection__border`}):null,s?de("div",{class:`${l}-base-selection__state-border`}):null)}});function Ll(n){return n.type==="group"}function kf(n){return n.type==="ignored"}function Uf(n,e){return{getIsGroup:Ll,getIgnored:kf,getKey(i){return Ll(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}const uu=qs("n-checkbox-group"),Bf={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},zf=xt({name:"CheckboxGroup",props:Bf,setup(n){const{mergedClsPrefixRef:e}=On(n),t=Kr(n),{mergedSizeRef:i,mergedDisabledRef:r}=t,o=Ye(n.defaultValue),s=ze(()=>n.value),l=ir(s,o),c=ze(()=>{var d;return((d=l.value)===null||d===void 0?void 0:d.length)||0}),a=ze(()=>Array.isArray(l.value)?new Set(l.value):new Set);function u(d,m){const{nTriggerFormInput:p,nTriggerFormChange:g}=t,{onChange:v,"onUpdate:value":h,onUpdateValue:f}=n;if(Array.isArray(l.value)){const b=Array.from(l.value),y=b.findIndex(_=>_===m);d?~y||(b.push(m),f&&Et(f,b,{actionType:"check",value:m}),h&&Et(h,b,{actionType:"check",value:m}),p(),g(),o.value=b,v&&Et(v,b)):~y&&(b.splice(y,1),f&&Et(f,b,{actionType:"uncheck",value:m}),h&&Et(h,b,{actionType:"uncheck",value:m}),v&&Et(v,b),o.value=b,p(),g())}else d?(f&&Et(f,[m],{actionType:"check",value:m}),h&&Et(h,[m],{actionType:"check",value:m}),v&&Et(v,[m]),o.value=[m],p(),g()):(f&&Et(f,[],{actionType:"uncheck",value:m}),h&&Et(h,[],{actionType:"uncheck",value:m}),v&&Et(v,[]),o.value=[],p(),g())}return rr(uu,{checkedCountRef:c,maxRef:ft(n,"max"),minRef:ft(n,"min"),valueSetRef:a,disabledRef:r,mergedSizeRef:i,toggleCheckbox:u}),{mergedClsPrefix:e}},render(){return de("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Vf=()=>de("svg",{viewBox:"0 0 64 64",class:"check-icon"},de("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Gf=()=>de("svg",{viewBox:"0 0 100 100",class:"line-icon"},de("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Hf=lt([He("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[rt("show-label","line-height: var(--n-label-line-height);"),lt("&:hover",[He("checkbox-box",[$e("border","border: var(--n-border-checked);")])]),lt("&:focus:not(:active)",[He("checkbox-box",[$e("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),rt("inside-table",[He("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),rt("checked",[He("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[He("checkbox-icon",[lt(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),rt("indeterminate",[He("checkbox-box",[He("checkbox-icon",[lt(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),lt(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),rt("checked, indeterminate",[lt("&:focus:not(:active)",[He("checkbox-box",[$e("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),He("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[$e("border",{border:"var(--n-border-checked)"})])]),rt("disabled",{cursor:"not-allowed"},[rt("checked",[He("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[$e("border",{border:"var(--n-border-disabled-checked)"}),He("checkbox-icon",[lt(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),He("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[$e("border",`
 border: var(--n-border-disabled);
 `),He("checkbox-icon",[lt(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),$e("label",`
 color: var(--n-text-color-disabled);
 `)]),He("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),He("checkbox-box",`
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
 `,[$e("border",`
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
 `),He("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[lt(".check-icon, .line-icon",`
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
 `),qc({left:"1px",top:"1px"})])]),$e("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[lt("&:empty",{display:"none"})])]),Ad(He("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Rd(He("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Wf=Object.assign(Object.assign({},Kt.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),du=xt({name:"Checkbox",props:Wf,setup(n){const e=$n(uu,null),t=Ye(null),{mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:o}=On(n),s=Ye(n.defaultChecked),l=ft(n,"checked"),c=ir(l,s),a=$t(()=>{if(e){const T=e.valueSetRef.value;return T&&n.value!==void 0?T.has(n.value):!1}else return c.value===n.checkedValue}),u=Kr(n,{mergedSize(T){const{size:C}=n;if(C!==void 0)return C;if(e){const{value:D}=e.mergedSizeRef;if(D!==void 0)return D}if(T){const{mergedSize:D}=T;if(D!==void 0)return D.value}return"medium"},mergedDisabled(T){const{disabled:C}=n;if(C!==void 0)return C;if(e){if(e.disabledRef.value)return!0;const{maxRef:{value:D},checkedCountRef:S}=e;if(D!==void 0&&S.value>=D&&!a.value)return!0;const{minRef:{value:E}}=e;if(E!==void 0&&S.value<=E&&a.value)return!0}return T?T.disabled.value:!1}}),{mergedDisabledRef:d,mergedSizeRef:m}=u,p=Kt("Checkbox","-checkbox",Hf,wd,n,i);function g(T){if(e&&n.value!==void 0)e.toggleCheckbox(!a.value,n.value);else{const{onChange:C,"onUpdate:checked":D,onUpdateChecked:S}=n,{nTriggerFormInput:E,nTriggerFormChange:w}=u,L=a.value?n.uncheckedValue:n.checkedValue;D&&Et(D,L,T),S&&Et(S,L,T),C&&Et(C,L,T),E(),w(),s.value=L}}function v(T){d.value||g(T)}function h(T){if(!d.value)switch(T.key){case" ":case"Enter":g(T)}}function f(T){switch(T.key){case" ":T.preventDefault()}}const b={focus:()=>{var T;(T=t.value)===null||T===void 0||T.focus()},blur:()=>{var T;(T=t.value)===null||T===void 0||T.blur()}},y=jr("Checkbox",o,i),_=ze(()=>{const{value:T}=m,{common:{cubicBezierEaseInOut:C},self:{borderRadius:D,color:S,colorChecked:E,colorDisabled:w,colorTableHeader:L,colorTableHeaderModal:P,colorTableHeaderPopover:I,checkMarkColor:z,checkMarkColorDisabled:G,border:j,borderFocus:W,borderDisabled:J,borderChecked:se,boxShadowFocus:xe,textColor:ne,textColorDisabled:ie,checkMarkColorDisabledChecked:Ee,colorDisabledChecked:ee,borderDisabledChecked:k,labelPadding:B,labelLineHeight:K,labelFontWeight:Y,[Zt("fontSize",T)]:re,[Zt("size",T)]:pe}}=p.value;return{"--n-label-line-height":K,"--n-label-font-weight":Y,"--n-size":pe,"--n-bezier":C,"--n-border-radius":D,"--n-border":j,"--n-border-checked":se,"--n-border-focus":W,"--n-border-disabled":J,"--n-border-disabled-checked":k,"--n-box-shadow-focus":xe,"--n-color":S,"--n-color-checked":E,"--n-color-table":L,"--n-color-table-modal":P,"--n-color-table-popover":I,"--n-color-disabled":w,"--n-color-disabled-checked":ee,"--n-text-color":ne,"--n-text-color-disabled":ie,"--n-check-mark-color":z,"--n-check-mark-color-disabled":G,"--n-check-mark-color-disabled-checked":Ee,"--n-font-size":re,"--n-label-padding":B}}),A=r?pi("checkbox",ze(()=>m.value[0]),_,n):void 0;return Object.assign(u,b,{rtlEnabled:y,selfRef:t,mergedClsPrefix:i,mergedDisabled:d,renderedChecked:a,mergedTheme:p,labelId:hd(),handleClick:v,handleKeyUp:h,handleKeyDown:f,cssVars:r?void 0:_,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender})},render(){var n;const{$slots:e,renderedChecked:t,mergedDisabled:i,indeterminate:r,privateInsideTable:o,cssVars:s,labelId:l,label:c,mergedClsPrefix:a,focusable:u,handleKeyUp:d,handleKeyDown:m,handleClick:p}=this;(n=this.onRender)===null||n===void 0||n.call(this);const g=Nr(e.default,v=>c||v?de("span",{class:`${a}-checkbox__label`,id:l},c||v):null);return de("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,t&&`${a}-checkbox--checked`,i&&`${a}-checkbox--disabled`,r&&`${a}-checkbox--indeterminate`,o&&`${a}-checkbox--inside-table`,g&&`${a}-checkbox--show-label`],tabindex:i||!u?void 0:0,role:"checkbox","aria-checked":r?"mixed":t,"aria-labelledby":l,style:s,onKeyup:d,onKeydown:m,onClick:p,onMousedown:()=>{fd("selectstart",window,v=>{v.preventDefault()},{once:!0})}},de("div",{class:`${a}-checkbox-box-wrapper`}," ",de("div",{class:`${a}-checkbox-box`},de($c,null,{default:()=>this.indeterminate?de("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Gf()):de("div",{key:"check",class:`${a}-checkbox-icon`},Vf())}),de("div",{class:`${a}-checkbox-box__border`}))),g)}}),Yr=qs("n-cascader"),Il=xt({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(n){const{expandTriggerRef:e,remoteRef:t,multipleRef:i,mergedValueRef:r,checkedKeysRef:o,indeterminateKeysRef:s,hoverKeyPathRef:l,keyboardKeyRef:c,loadingKeySetRef:a,cascadeRef:u,mergedCheckStrategyRef:d,onLoadRef:m,mergedClsPrefixRef:p,mergedThemeRef:g,labelFieldRef:v,showCheckboxRef:h,renderPrefixRef:f,renderSuffixRef:b,updateHoverKey:y,updateKeyboardKey:_,addLoadingKey:A,deleteLoadingKey:T,closeMenu:C,doCheck:D,doUncheck:S,renderLabelRef:E}=$n(Yr),w=ze(()=>n.tmNode.key),L=ze(()=>{const{value:Y}=e,{value:re}=t;return!re&&Y==="hover"}),P=ze(()=>{if(L.value)return ee}),I=ze(()=>{if(L.value)return k}),z=$t(()=>{const{value:Y}=i;return Y?o.value.includes(w.value):r.value===w.value}),G=$t(()=>i.value?s.value.includes(w.value):!1),j=$t(()=>l.value.includes(w.value)),W=$t(()=>{const{value:Y}=c;return Y===null?!1:Y===w.value}),J=$t(()=>t.value?a.value.has(w.value):!1),se=ze(()=>n.tmNode.isLeaf),xe=ze(()=>n.tmNode.disabled),ne=ze(()=>n.tmNode.rawNode[v.value]),ie=ze(()=>n.tmNode.shallowLoaded);function Ee(Y){if(xe.value)return;const{value:re}=t,{value:pe}=a,{value:_e}=m,{value:Pe}=w,{value:Xe}=se,{value:V}=ie;Or(Y,"checkbox")||(re&&!V&&!pe.has(Pe)&&_e&&(A(Pe),_e(n.tmNode.rawNode).then(()=>{T(Pe)}).catch(()=>{T(Pe)})),y(Pe),_(Pe)),Xe&&K()}function ee(){if(!L.value||xe.value)return;const{value:Y}=w;y(Y),_(Y)}function k(){L.value&&ee()}function B(){const{value:Y}=se;Y||K()}function K(){const{value:Y}=i,{value:re}=w;Y?G.value||z.value?S(re):D(re):(D(re),C(!0))}return{checkStrategy:d,multiple:i,cascade:u,checked:z,indeterminate:G,hoverPending:j,keyboardPending:W,isLoading:J,showCheckbox:h,isLeaf:se,disabled:xe,label:ne,mergedClsPrefix:p,mergedTheme:g,handleClick:Ee,handleCheckboxUpdateValue:B,mergedHandleMouseEnter:P,mergedHandleMouseMove:I,renderLabel:E,renderPrefix:f,renderSuffix:b}},render(){const{mergedClsPrefix:n,showCheckbox:e,renderLabel:t,renderPrefix:i,renderSuffix:r}=this;let o=null;if(e||i){const c=this.showCheckbox?de(du,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue}):null;o=de("div",{class:`${n}-cascader-option__prefix`},i?i({option:this.tmNode.rawNode,checked:this.checked,node:c}):c)}let s=null;const l=de("div",{class:`${n}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?de(Xr,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?de(or,{clsPrefix:n,class:`${n}-cascader-option-icon ${n}-cascader-option-icon--checkmark`},{default:()=>de(iu,null)}):null}):null:de(Ys,{clsPrefix:n,scale:.85,strokeWidth:24,show:this.isLoading,class:`${n}-cascader-option-icon`},{default:()=>de(or,{clsPrefix:n,key:"arrow",class:`${n}-cascader-option-icon ${n}-cascader-option-icon--arrow`},{default:()=>de(Jd,null)})}));return s=de("div",{class:`${n}-cascader-option__suffix`},r?r({option:this.tmNode.rawNode,checked:this.checked,node:l}):l),de("div",{class:[`${n}-cascader-option`,this.keyboardPending||this.hoverPending&&`${n}-cascader-option--pending`,this.disabled&&`${n}-cascader-option--disabled`,this.showCheckbox&&`${n}-cascader-option--show-prefix`],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},o,de("span",{class:`${n}-cascader-option__label`},t?t(this.tmNode.rawNode,this.checked):this.label),s)}}),Xf=xt({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:n,mergedClsPrefixRef:e,mergedThemeRef:t,optionHeightRef:i}=$n(Yr),r=Ye(null),o=Ye(null),s={scroll(l,c){var a,u;n.value?(a=o.value)===null||a===void 0||a.scrollTo({index:l}):(u=r.value)===null||u===void 0||u.scrollTo({index:l,elSize:c})}};return Object.assign({mergedClsPrefix:e,mergedTheme:t,scrollbarInstRef:r,vlInstRef:o,virtualScroll:n,itemSize:ze(()=>si(i.value)),handleVlScroll:()=>{var l;(l=r.value)===null||l===void 0||l.sync()},getVlContainer:()=>{var l;return(l=o.value)===null||l===void 0?void 0:l.listElRef},getVlContent:()=>{var l;return(l=o.value)===null||l===void 0?void 0:l.itemsElRef}},s)},render(){const{mergedClsPrefix:n,mergedTheme:e,virtualScroll:t}=this;return de("div",{class:[t&&`${n}-cascader-submenu--virtual`,`${n}-cascader-submenu`]},de(Wc,{ref:"scrollbarInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:t?this.getVlContainer:void 0,content:t?this.getVlContent:void 0},{default:()=>t?de(nu,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:i})=>de(Il,{key:i.key,tmNode:i})}):this.tmNodes.map(i=>de(Il,{key:i.key,tmNode:i}))}))}}),jf=xt({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(n){const{localeRef:e,isMountedRef:t,mergedClsPrefixRef:i,syncCascaderMenuPosition:r,handleCascaderMenuClickOutside:o,mergedThemeRef:s,getColumnStyleRef:l}=$n(Yr),c=[],a=Ye(null),u=Ye(null);function d(){r()}$s(u,d);function m(f){var b;const{value:{loadingRequiredMessage:y}}=e;(b=a.value)===null||b===void 0||b.showOnce(y(f))}function p(f){o(f)}function g(f){const{value:b}=u;b&&(b.contains(f.relatedTarget)||n.onFocus(f))}function v(f){const{value:b}=u;b&&(b.contains(f.relatedTarget)||n.onBlur(f))}return Object.assign({isMounted:t,mergedClsPrefix:i,selfElRef:u,submenuInstRefs:c,maskInstRef:a,mergedTheme:s,getColumnStyle:l,handleFocusin:g,handleFocusout:v,handleClickOutside:p},{scroll(f,b,y){const _=c[f];_&&_.scroll(b,y)},showErrorMessage:m})},render(){const{submenuInstRefs:n,mergedClsPrefix:e,mergedTheme:t}=this;return de(Xr,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Jc(de("div",{tabindex:"0",ref:"selfElRef",class:`${e}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?de("div",{class:`${e}-cascader-submenu-wrapper`},this.menuModel.map((i,r)=>{var o;return de(Xf,{style:(o=this.getColumnStyle)===null||o===void 0?void 0:o.call(this,{level:r}),ref:s=>{s&&(n[r]=s)},key:r,tmNodes:i,depth:r+1})}),de(of,{clsPrefix:e,ref:"maskInstRef"})):de("div",{class:`${e}-cascader-menu__empty`},Wr(this.$slots.empty,()=>[de(cu,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),Nr(this.$slots.action,i=>i&&de("div",{class:`${e}-cascader-menu-action`,"data-action":!0},i)),de(ru,{onFocus:this.onTabout})),[[Xc,this.handleClickOutside,void 0,{capture:!0}]]):null})}});function ro(n){return n?n.map(e=>e.rawNode):null}function Kf(n,e,t,i){const r=[],o=[];function s(l){for(const c of l){if(c.disabled)continue;const{rawNode:a}=c;o.push(a),(c.isLeaf||!e)&&r.push({label:es(c,i,t),value:c.key,rawNode:c.rawNode,path:Array.from(o)}),!c.isLeaf&&c.children&&s(c.children),o.pop()}}return s(n),r}function es(n,e,t){const i=[];for(;n;)i.push(n.rawNode[t]),n=n.parent;return i.reverse().join(e)}const Yf=xt({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(n){const{isMountedRef:e,mergedValueRef:t,mergedClsPrefixRef:i,mergedThemeRef:r,mergedCheckStrategyRef:o,slots:s,syncSelectMenuPosition:l,closeMenu:c,handleSelectMenuClickOutside:a,doUncheck:u,doCheck:d,clearPattern:m}=$n(Yr),p=Ye(null),g=ze(()=>Kf(n.tmNodes,o.value==="child",n.labelField,n.separator)),v=ze(()=>{const{filter:E}=n;if(E)return E;const{labelField:w}=n;return(L,P,I)=>I.some(z=>z[w]&&~z[w].toLowerCase().indexOf(L.toLowerCase()))}),h=ze(()=>{const{pattern:E}=n,{value:w}=v;return(E?g.value.filter(L=>w(E,L.rawNode,L.path)):g.value).map(L=>({value:L.value,label:L.label}))}),f=ze(()=>lu(h.value,Uf("value","children")));function b(){l()}function y(E){_(E)}function _(E){if(n.multiple){const{value:w}=t;Array.isArray(w)?w.includes(E.key)?u(E.key):d(E.key):w===null&&d(E.key),m()}else d(E.key),c(!0)}function A(){var E;(E=p.value)===null||E===void 0||E.prev()}function T(){var E;(E=p.value)===null||E===void 0||E.next()}function C(){var E;if(p){const w=(E=p.value)===null||E===void 0?void 0:E.getPendingTmNode();return w&&_(w),!0}return!1}function D(E){a(E)}return Object.assign({isMounted:e,mergedTheme:r,mergedClsPrefix:i,menuInstRef:p,selectTreeMate:f,handleResize:b,handleToggle:y,handleClickOutside:D,cascaderSlots:s},{prev:A,next:T,enter:C})},render(){const{mergedClsPrefix:n,isMounted:e,mergedTheme:t,cascaderSlots:i}=this;return de(Xr,{name:"fade-in-scale-up-transition",appear:e},{default:()=>this.show?Jc(de(Nf,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:n,class:`${n}-cascader-menu`,autoPending:!0,themeOverrides:t.peerOverrides.InternalSelectMenu,theme:t.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle},{empty:()=>Wr(i["not-found"],()=>[])}),[[Xc,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),qf=lt([He("cascader-menu",`
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,[Za({transformOrigin:"inherit",duration:"0.2s"}),$e("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),He("scrollbar",`
 width: 100%;
 `),He("base-menu-mask",`
 background-color: var(--n-menu-mask-color);
 `),He("base-loading",`
 color: var(--n-loading-color);
 `),He("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),He("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[rt("virtual",`
 width: var(--n-column-width);
 `),He("scrollbar-content",`
 position: relative;
 `),lt("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),lt("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),lt("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),He("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),He("cascader-option",`
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,[rt("show-prefix",`
 padding-left: 0;
 `),$e("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),$e("prefix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),$e("suffix",`
 min-width: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
 `),He("cascader-option-icon-placeholder",`
 line-height: 0;
 position: relative;
 width: 16px;
 height: 16px;
 font-size: 16px;
 `,[He("cascader-option-icon",[rt("checkmark",`
 color: var(--n-option-check-mark-color);
 `,[Za({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),rt("arrow",`
 color: var(--n-option-arrow-color);
 `)])]),rt("selected",`
 color: var(--n-option-text-color-active);
 `),rt("active",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-hover);
 `),rt("pending",`
 background-color: var(--n-option-color-hover);
 `),lt("&:hover",`
 background-color: var(--n-option-color-hover);
 `),rt("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[He("cascader-option-icon",[rt("arrow",`
 color: var(--n-option-text-color-disabled);
 `)])])])]),He("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),$f=Object.assign(Object.assign({},Kt.props),{allowCheckingNotLoaded:Boolean,to:Oo.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,getColumnStyle:Function,renderPrefix:Function,renderSuffix:Function,onChange:[Function,Array]}),Zf=xt({name:"Cascader",props:$f,slots:Object,setup(n,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:i,namespaceRef:r,inlineThemeDisabled:o}=On(n),s=Kt("Cascader","-cascader",qf,Ld,n,i),{localeRef:l}=Hc("Cascader"),c=Ye(n.defaultValue),a=ze(()=>n.value),u=ir(a,c),d=ze(()=>n.leafOnly?"child":n.checkStrategy),m=Ye(""),p=Kr(n),{mergedSizeRef:g,mergedDisabledRef:v,mergedStatusRef:h}=p,f=Ye(null),b=Ye(null),y=Ye(null),_=Ye(null),A=Ye(null),T=Ye(new Set),C=Ye(null),D=Ye(null),S=Oo(n),E=Ye(!1),w=X=>{T.value.add(X)},L=X=>{T.value.delete(X)},P=ze(()=>{const{valueField:X,childrenField:Z,disabledField:be}=n;return lu(n.options,{getDisabled(Oe){return Oe[be]},getKey(Oe){return Oe[X]},getChildren(Oe){return Oe[Z]}})}),I=ze(()=>{const{cascade:X,multiple:Z}=n;return Z&&Array.isArray(u.value)?P.value.getCheckedKeys(u.value,{cascade:X,allowNotLoaded:n.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),z=ze(()=>I.value.checkedKeys),G=ze(()=>I.value.indeterminateKeys),j=ze(()=>{const{treeNodePath:X,treeNode:Z}=P.value.getPath(A.value);let be;return Z===null?be=[P.value.treeNodes]:(be=X.map(Oe=>Oe.siblings),!Z.isLeaf&&!T.value.has(Z.key)&&Z.children&&be.push(Z.children)),be}),W=ze(()=>{const{keyPath:X}=P.value.getPath(A.value);return X}),J=ze(()=>s.value.self.optionHeight);Cd(n.options)&&rn(n.options,(X,Z)=>{X!==Z&&(A.value=null,_.value=null)});const se=Ye(!1);function xe(X){const{onUpdateShow:Z,"onUpdate:show":be}=n;Z&&Et(Z,X),be&&Et(be,X),se.value=X}function ne(X,Z,be){const{onUpdateValue:Oe,"onUpdate:value":Ce,onChange:Me}=n,{nTriggerFormInput:Re,nTriggerFormChange:Ie}=p;Oe&&Et(Oe,X,Z,be),Ce&&Et(Ce,X,Z,be),Me&&Et(Me,X,Z,be),c.value=X,Re(),Ie()}function ie(X){_.value=X}function Ee(X){A.value=X}function ee(X){const{value:{getNode:Z}}=P;return X.map(be=>{var Oe;return((Oe=Z(be))===null||Oe===void 0?void 0:Oe.rawNode)||null})}function k(X){var Z;const{cascade:be,multiple:Oe,filterable:Ce}=n,{value:{check:Me,getNode:Re,getPath:Ie}}=P;if(Oe)try{const{checkedKeys:De}=Me(X,I.value.checkedKeys,{cascade:be,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});ne(De,ee(De),De.map(Ke=>{var ht;return ro((ht=Ie(Ke))===null||ht===void 0?void 0:ht.treeNodePath)})),Ce&&Ne(),_.value=X,A.value=X}catch(De){if(De instanceof au){if(f.value){const Ke=Re(X);Ke!==null&&f.value.showErrorMessage(Ke.rawNode[n.labelField])}}else throw De}else if(d.value==="child"){const De=Re(X);if(De!=null&&De.isLeaf)ne(X,De.rawNode,ro(Ie(X).treeNodePath));else return!1}else{const De=Re(X);ne(X,(De==null?void 0:De.rawNode)||null,ro((Z=Ie(X))===null||Z===void 0?void 0:Z.treeNodePath))}return!0}function B(X){const{cascade:Z,multiple:be}=n;if(be){const{value:{uncheck:Oe,getNode:Ce,getPath:Me}}=P,{checkedKeys:Re}=Oe(X,I.value.checkedKeys,{cascade:Z,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded});ne(Re,Re.map(Ie=>{var De;return((De=Ce(Ie))===null||De===void 0?void 0:De.rawNode)||null}),Re.map(Ie=>{var De;return ro((De=Me(Ie))===null||De===void 0?void 0:De.treeNodePath)})),_.value=X,A.value=X}}const K=ze(()=>{if(n.multiple){const{showPath:X,separator:Z,labelField:be,cascade:Oe}=n,{getCheckedKeys:Ce,getNode:Me}=P.value;return Ce(z.value,{cascade:Oe,checkStrategy:d.value,allowNotLoaded:n.allowCheckingNotLoaded}).checkedKeys.map(Ie=>{const De=Me(Ie);return De===null?{label:String(Ie),value:Ie}:{label:X?es(De,Z,be):De.rawNode[be],value:De.key}})}else return[]}),Y=ze(()=>{const{multiple:X,showPath:Z,separator:be,labelField:Oe}=n,{value:Ce}=u;if(!X&&!Array.isArray(Ce)){const{getNode:Me}=P.value;if(Ce===null)return null;const Re=Me(Ce);return Re===null?{label:String(Ce),value:Ce}:{label:Z?es(Re,be,Oe):Re.rawNode[Oe],value:Re.key}}else return null}),re=ft(n,"show"),pe=ir(re,se),_e=ze(()=>{const{placeholder:X}=n;return X!==void 0?X:l.value.placeholder}),Pe=ze(()=>!!(n.filterable&&m.value));rn(pe,X=>{if(!X||n.multiple)return;const{value:Z}=u;!Array.isArray(Z)&&Z!==null?(_.value=Z,A.value=Z,Ko(()=>{var be;if(!pe.value)return;const{value:Oe}=A;if(u.value!==null){const Ce=P.value.getNode(Oe);Ce&&((be=f.value)===null||be===void 0||be.scroll(Ce.level,Ce.index,si(J.value)))}})):(_.value=null,A.value=null)},{immediate:!0});function Xe(X){const{onBlur:Z}=n,{nTriggerFormBlur:be}=p;Z&&Et(Z,X),be()}function V(X){const{onFocus:Z}=n,{nTriggerFormFocus:be}=p;Z&&Et(Z,X),be()}function Ne(){var X;(X=y.value)===null||X===void 0||X.focusInput()}function Q(){var X;(X=y.value)===null||X===void 0||X.focus()}function he(){v.value||(m.value="",xe(!0),n.filterable&&Ne())}function te(X=!1){X&&Q(),xe(!1),m.value=""}function Se(X){var Z;Pe.value||pe.value&&(!((Z=y.value)===null||Z===void 0)&&Z.$el.contains(gd(X))||te())}function Te(X){Pe.value&&Se(X)}function ke(){n.clearFilterAfterSelect&&(m.value="")}function M(X){var Z,be,Oe;const{value:Ce}=_,{value:Me}=P;switch(X){case"prev":if(Ce!==null){const Re=Me.getPrev(Ce,{loop:!0});Re!==null&&(ie(Re.key),(Z=f.value)===null||Z===void 0||Z.scroll(Re.level,Re.index,si(J.value)))}break;case"next":if(Ce===null){const Re=Me.getFirstAvailableNode();Re!==null&&(ie(Re.key),(be=f.value)===null||be===void 0||be.scroll(Re.level,Re.index,si(J.value)))}else{const Re=Me.getNext(Ce,{loop:!0});Re!==null&&(ie(Re.key),(Oe=f.value)===null||Oe===void 0||Oe.scroll(Re.level,Re.index,si(J.value)))}break;case"child":if(Ce!==null){const Re=Me.getNode(Ce);if(Re!==null)if(Re.shallowLoaded){const Ie=Me.getChild(Ce);Ie!==null&&(Ee(Ce),ie(Ie.key))}else{const{value:Ie}=T;if(!Ie.has(Ce)){w(Ce),Ee(Ce);const{onLoad:De}=n;De&&De(Re.rawNode).then(()=>{L(Ce)}).catch(()=>{L(Ce)})}}}break;case"parent":if(Ce!==null){const Re=Me.getParent(Ce);if(Re!==null){ie(Re.key);const Ie=Re.getParent();Ee(Ie===null?null:Ie.key)}}break}}function x(X){var Z,be;switch(X.key){case" ":case"ArrowDown":case"ArrowUp":if(n.filterable&&pe.value)break;X.preventDefault();break}if(!Or(X,"action"))switch(X.key){case" ":if(n.filterable)return;case"Enter":if(!pe.value)he();else{const{value:Oe}=Pe,{value:Ce}=_;if(Oe)b.value&&b.value.enter()&&ke();else if(Ce!==null)if(z.value.includes(Ce)||G.value.includes(Ce))B(Ce);else{const Me=k(Ce);!n.multiple&&Me&&te(!0)}}break;case"ArrowUp":X.preventDefault(),pe.value&&(Pe.value?(Z=b.value)===null||Z===void 0||Z.prev():M("prev"));break;case"ArrowDown":X.preventDefault(),pe.value?Pe.value?(be=b.value)===null||be===void 0||be.next():M("next"):he();break;case"ArrowLeft":X.preventDefault(),pe.value&&!Pe.value&&M("parent");break;case"ArrowRight":X.preventDefault(),pe.value&&!Pe.value&&M("child");break;case"Escape":pe.value&&($d(X),te(!0))}}function R(X){x(X)}function F(X){X.stopPropagation(),n.multiple?ne([],[],[]):ne(null,null,null)}function O(X){var Z;!((Z=f.value)===null||Z===void 0)&&Z.$el.contains(X.relatedTarget)||(E.value=!0,V(X))}function U(X){var Z;!((Z=f.value)===null||Z===void 0)&&Z.$el.contains(X.relatedTarget)||(E.value=!1,Xe(X),te())}function $(X){var Z;!((Z=y.value)===null||Z===void 0)&&Z.$el.contains(X.relatedTarget)||(E.value=!0,V(X))}function q(X){var Z;!((Z=y.value)===null||Z===void 0)&&Z.$el.contains(X.relatedTarget)||(E.value=!1,Xe(X))}function ce(X){Or(X,"action")||n.multiple&&n.filter&&(X.preventDefault(),Ne())}function fe(){te(!0)}function oe(){n.filterable?he():pe.value?te(!0):he()}function ve(X){m.value=X.target.value}function Ue(X){const{multiple:Z}=n,{value:be}=u;Z&&Array.isArray(be)&&X.value!==void 0?B(X.value):ne(null,null,null)}function Ve(){var X;(X=C.value)===null||X===void 0||X.syncPosition()}function Le(){var X;(X=D.value)===null||X===void 0||X.syncPosition()}function Fe(){pe.value&&(Pe.value?Ve():Le())}const H=ze(()=>!!(n.multiple&&n.cascade||d.value!=="child"));rr(Yr,{slots:e,mergedClsPrefixRef:i,mergedThemeRef:s,mergedValueRef:u,checkedKeysRef:z,indeterminateKeysRef:G,hoverKeyPathRef:W,mergedCheckStrategyRef:d,showCheckboxRef:H,cascadeRef:ft(n,"cascade"),multipleRef:ft(n,"multiple"),keyboardKeyRef:_,hoverKeyRef:A,remoteRef:ft(n,"remote"),loadingKeySetRef:T,expandTriggerRef:ft(n,"expandTrigger"),isMountedRef:Pd(),onLoadRef:ft(n,"onLoad"),virtualScrollRef:ft(n,"virtualScroll"),optionHeightRef:J,localeRef:l,labelFieldRef:ft(n,"labelField"),renderLabelRef:ft(n,"renderLabel"),getColumnStyleRef:ft(n,"getColumnStyle"),renderPrefixRef:ft(n,"renderPrefix"),renderSuffixRef:ft(n,"renderSuffix"),syncCascaderMenuPosition:Le,syncSelectMenuPosition:Ve,updateKeyboardKey:ie,updateHoverKey:Ee,addLoadingKey:w,deleteLoadingKey:L,doCheck:k,doUncheck:B,closeMenu:te,handleSelectMenuClickOutside:Te,handleCascaderMenuClickOutside:Se,clearPattern:ke});const we={focus:()=>{var X;(X=y.value)===null||X===void 0||X.focus()},blur:()=>{var X;(X=y.value)===null||X===void 0||X.blur()},getCheckedData:()=>{if(H.value){const X=z.value;return{keys:X,options:ee(X)}}return{keys:[],options:[]}},getIndeterminateData:()=>{if(H.value){const X=G.value;return{keys:X,options:ee(X)}}return{keys:[],options:[]}}},Ae=ze(()=>{const{self:{optionArrowColor:X,optionTextColor:Z,optionTextColorActive:be,optionTextColorDisabled:Oe,optionCheckMarkColor:Ce,menuColor:Me,menuBoxShadow:Re,menuDividerColor:Ie,menuBorderRadius:De,menuHeight:Ke,optionColorHover:ht,optionHeight:Nt,optionFontSize:Vt,loadingColor:Rn,columnWidth:Li},common:{cubicBezierEaseInOut:Zn}}=s.value;return{"--n-bezier":Zn,"--n-menu-border-radius":De,"--n-menu-box-shadow":Re,"--n-menu-height":Ke,"--n-column-width":Li,"--n-menu-color":Me,"--n-menu-divider-color":Ie,"--n-option-height":Nt,"--n-option-font-size":Vt,"--n-option-text-color":Z,"--n-option-text-color-disabled":Oe,"--n-option-text-color-active":be,"--n-option-color-hover":ht,"--n-option-check-mark-color":Ce,"--n-option-arrow-color":X,"--n-menu-mask-color":Ja(Me,{alpha:.75}),"--n-loading-color":Rn}}),ye=o?pi("cascader",void 0,Ae,n):void 0;return Object.assign(Object.assign({},we),{handleTriggerResize:Fe,mergedStatus:h,selectMenuFollowerRef:C,cascaderMenuFollowerRef:D,triggerInstRef:y,selectMenuInstRef:b,cascaderMenuInstRef:f,mergedBordered:t,mergedClsPrefix:i,namespace:r,mergedValue:u,mergedShow:pe,showSelectMenu:Pe,pattern:m,treeMate:P,mergedSize:g,mergedDisabled:v,localizedPlaceholder:_e,selectedOption:Y,selectedOptions:K,adjustedTo:S,menuModel:j,handleMenuTabout:fe,handleMenuFocus:$,handleMenuBlur:q,handleMenuKeydown:R,handleMenuMousedown:ce,handleTriggerFocus:O,handleTriggerBlur:U,handleTriggerClick:oe,handleClear:F,handleDeleteOption:Ue,handlePatternInput:ve,handleKeydown:x,focused:E,optionHeight:J,mergedTheme:s,cssVars:o?void 0:Ae,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){const{mergedClsPrefix:n}=this;return de("div",{class:`${n}-cascader`},de(pd,null,{default:()=>[de(md,null,{default:()=>de(Ff,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:n,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var e,t;return(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)}})}),de(vl,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===Oo.tdkey,to:this.adjustedTo},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{menuProps:t}=this;return de(jf,Object.assign({},t,{ref:"cascaderMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,t==null?void 0:t.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var i,r;return(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)},empty:()=>{var i,r;return(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)}})}}),de(vl,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Oo.tdkey},{default:()=>{var e;(e=this.onRender)===null||e===void 0||e.call(this);const{filterMenuProps:t}=this;return de(Yf,Object.assign({},t,{ref:"selectMenuInstRef",class:[this.themeClass,t==null?void 0:t.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,t==null?void 0:t.style]}))}})]}))}});function Jf(n){const{borderColor:e,primaryColor:t,baseColor:i,textColorDisabled:r,inputColorDisabled:o,textColor2:s,opacityDisabled:l,borderRadius:c,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:d,heightSmall:m,heightMedium:p,heightLarge:g,lineHeight:v}=n;return Object.assign(Object.assign({},Nd),{labelLineHeight:v,buttonHeightSmall:m,buttonHeightMedium:p,buttonHeightLarge:g,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${Ja(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:i,colorDisabled:o,colorActive:"#0000",textColor:s,textColorDisabled:r,dotColorActive:t,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:t,buttonBorderColorHover:e,buttonColor:i,buttonColorActive:i,buttonTextColor:s,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${Ja(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:c})}const fu={common:Id,self:Jf},Qf=He("radio",`
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
`,[rt("checked",[$e("dot",`
 background-color: var(--n-color-active);
 `)]),$e("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),He("radio-input",`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),$e("dot",`
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
 `,[lt("&::before",`
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
 `),rt("checked",{boxShadow:"var(--n-box-shadow-active)"},[lt("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),$e("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),ar("disabled",`
 cursor: pointer;
 `,[lt("&:hover",[$e("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),rt("focus",[lt("&:not(:active)",[$e("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),rt("disabled",`
 cursor: not-allowed;
 `,[$e("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[lt("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),rt("checked",`
 opacity: 1;
 `)]),$e("label",{color:"var(--n-text-color-disabled)"}),He("radio-input",`
 cursor: not-allowed;
 `)])]),eh={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},hu=qs("n-radio-group");function th(n){const e=$n(hu,null),t=Kr(n,{mergedSize(b){const{size:y}=n;if(y!==void 0)return y;if(e){const{mergedSizeRef:{value:_}}=e;if(_!==void 0)return _}return b?b.mergedSize.value:"medium"},mergedDisabled(b){return!!(n.disabled||e!=null&&e.disabledRef.value||b!=null&&b.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:r}=t,o=Ye(null),s=Ye(null),l=Ye(n.defaultChecked),c=ft(n,"checked"),a=ir(c,l),u=$t(()=>e?e.valueRef.value===n.value:a.value),d=$t(()=>{const{name:b}=n;if(b!==void 0)return b;if(e)return e.nameRef.value}),m=Ye(!1);function p(){if(e){const{doUpdateValue:b}=e,{value:y}=n;Et(b,y)}else{const{onUpdateChecked:b,"onUpdate:checked":y}=n,{nTriggerFormInput:_,nTriggerFormChange:A}=t;b&&Et(b,!0),y&&Et(y,!0),_(),A(),l.value=!0}}function g(){r.value||u.value||p()}function v(){g(),o.value&&(o.value.checked=u.value)}function h(){m.value=!1}function f(){m.value=!0}return{mergedClsPrefix:e?e.mergedClsPrefixRef:On(n).mergedClsPrefixRef,inputRef:o,labelRef:s,mergedName:d,mergedDisabled:r,renderSafeChecked:u,focus:m,mergedSize:i,handleRadioInputChange:v,handleRadioInputBlur:h,handleRadioInputFocus:f}}const nh=Object.assign(Object.assign({},Kt.props),eh),ih=xt({name:"Radio",props:nh,setup(n){const e=th(n),t=Kt("Radio","-radio",Qf,fu,n,e.mergedClsPrefix),i=ze(()=>{const{mergedSize:{value:a}}=e,{common:{cubicBezierEaseInOut:u},self:{boxShadow:d,boxShadowActive:m,boxShadowDisabled:p,boxShadowFocus:g,boxShadowHover:v,color:h,colorDisabled:f,colorActive:b,textColor:y,textColorDisabled:_,dotColorActive:A,dotColorDisabled:T,labelPadding:C,labelLineHeight:D,labelFontWeight:S,[Zt("fontSize",a)]:E,[Zt("radioSize",a)]:w}}=t.value;return{"--n-bezier":u,"--n-label-line-height":D,"--n-label-font-weight":S,"--n-box-shadow":d,"--n-box-shadow-active":m,"--n-box-shadow-disabled":p,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-color":h,"--n-color-active":b,"--n-color-disabled":f,"--n-dot-color-active":A,"--n-dot-color-disabled":T,"--n-font-size":E,"--n-radio-size":w,"--n-text-color":y,"--n-text-color-disabled":_,"--n-label-padding":C}}),{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:s}=On(n),l=jr("Radio",s,o),c=r?pi("radio",ze(()=>e.mergedSize.value[0]),i,n):void 0;return Object.assign(e,{rtlEnabled:l,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{$slots:n,mergedClsPrefix:e,onRender:t,label:i}=this;return t==null||t(),de("label",{class:[`${e}-radio`,this.themeClass,this.rtlEnabled&&`${e}-radio--rtl`,this.mergedDisabled&&`${e}-radio--disabled`,this.renderSafeChecked&&`${e}-radio--checked`,this.focus&&`${e}-radio--focus`],style:this.cssVars},de("div",{class:`${e}-radio__dot-wrapper`}," ",de("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]}),de("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),Nr(n.default,r=>!r&&!i?null:de("div",{ref:"labelRef",class:`${e}-radio__label`},r||i)))}}),rh=He("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[$e("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[rt("checked",{backgroundColor:"var(--n-button-border-color-active)"}),rt("disabled",{opacity:"var(--n-opacity-disabled)"})]),rt("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[He("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),$e("splitor",{height:"var(--n-height)"})]),He("radio-button",`
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
 `,[He("radio-input",`
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
 `),$e("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),lt("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[$e("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),lt("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[$e("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),ar("disabled",`
 cursor: pointer;
 `,[lt("&:hover",[$e("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),ar("checked",{color:"var(--n-button-text-color-hover)"})]),rt("focus",[lt("&:not(:active)",[$e("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),rt("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),rt("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function oh(n,e,t){var i;const r=[];let o=!1;for(let s=0;s<n.length;++s){const l=n[s],c=(i=l.type)===null||i===void 0?void 0:i.name;c==="RadioButton"&&(o=!0);const a=l.props;if(c!=="RadioButton"){r.push(l);continue}if(s===0)r.push(l);else{const u=r[r.length-1].props,d=e===u.value,m=u.disabled,p=e===a.value,g=a.disabled,v=(d?2:0)+(m?0:1),h=(p?2:0)+(g?0:1),f={[`${t}-radio-group__splitor--disabled`]:m,[`${t}-radio-group__splitor--checked`]:d},b={[`${t}-radio-group__splitor--disabled`]:g,[`${t}-radio-group__splitor--checked`]:p},y=v<h?b:f;r.push(de("div",{class:[`${t}-radio-group__splitor`,y]}),l)}}return{children:r,isButtonGroup:o}}const ah=Object.assign(Object.assign({},Kt.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),sh=xt({name:"RadioGroup",props:ah,setup(n){const e=Ye(null),{mergedSizeRef:t,mergedDisabledRef:i,nTriggerFormChange:r,nTriggerFormInput:o,nTriggerFormBlur:s,nTriggerFormFocus:l}=Kr(n),{mergedClsPrefixRef:c,inlineThemeDisabled:a,mergedRtlRef:u}=On(n),d=Kt("Radio","-radio-group",rh,fu,n,c),m=Ye(n.defaultValue),p=ft(n,"value"),g=ir(p,m);function v(A){const{onUpdateValue:T,"onUpdate:value":C}=n;T&&Et(T,A),C&&Et(C,A),m.value=A,r(),o()}function h(A){const{value:T}=e;T&&(T.contains(A.relatedTarget)||l())}function f(A){const{value:T}=e;T&&(T.contains(A.relatedTarget)||s())}rr(hu,{mergedClsPrefixRef:c,nameRef:ft(n,"name"),valueRef:g,disabledRef:i,mergedSizeRef:t,doUpdateValue:v});const b=jr("Radio",u,c),y=ze(()=>{const{value:A}=t,{common:{cubicBezierEaseInOut:T},self:{buttonBorderColor:C,buttonBorderColorActive:D,buttonBorderRadius:S,buttonBoxShadow:E,buttonBoxShadowFocus:w,buttonBoxShadowHover:L,buttonColor:P,buttonColorActive:I,buttonTextColor:z,buttonTextColorActive:G,buttonTextColorHover:j,opacityDisabled:W,[Zt("buttonHeight",A)]:J,[Zt("fontSize",A)]:se}}=d.value;return{"--n-font-size":se,"--n-bezier":T,"--n-button-border-color":C,"--n-button-border-color-active":D,"--n-button-border-radius":S,"--n-button-box-shadow":E,"--n-button-box-shadow-focus":w,"--n-button-box-shadow-hover":L,"--n-button-color":P,"--n-button-color-active":I,"--n-button-text-color":z,"--n-button-text-color-hover":j,"--n-button-text-color-active":G,"--n-height":J,"--n-opacity-disabled":W}}),_=a?pi("radio-group",ze(()=>t.value[0]),y,n):void 0;return{selfElRef:e,rtlEnabled:b,mergedClsPrefix:c,mergedValue:g,handleFocusout:f,handleFocusin:h,cssVars:a?void 0:y,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var n;const{mergedValue:e,mergedClsPrefix:t,handleFocusin:i,handleFocusout:r}=this,{children:o,isButtonGroup:s}=oh(Od(Dd(this)),e,t);return(n=this.onRender)===null||n===void 0||n.call(this),de("div",{onFocusin:i,onFocusout:r,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,s&&`${t}-radio-group--button-group`],style:this.cssVars},o)}}),lh=He("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[rt("color-transition",{transition:"color .3s var(--n-bezier)"}),rt("depth",{color:"var(--n-color)"},[lt("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),lt("svg",{height:"1em",width:"1em"})]),ch=Object.assign(Object.assign({},Kt.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),uh=xt({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ch,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=On(n),i=Kt("Icon","-icon",lh,kd,n,e),r=ze(()=>{const{depth:s}=n,{common:{cubicBezierEaseInOut:l},self:c}=i.value;if(s!==void 0){const{color:a,[`opacity${s}Depth`]:u}=c;return{"--n-bezier":l,"--n-color":a,"--n-opacity":u}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),o=t?pi("icon",ze(()=>`${n.depth||"d"}`),r,n):void 0;return{mergedClsPrefix:e,mergedStyle:ze(()=>{const{size:s,color:l}=n;return{fontSize:xd(s),color:l}}),cssVars:t?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{$parent:e,depth:t,mergedClsPrefix:i,component:r,onRender:o,themeClass:s}=this;return!((n=e==null?void 0:e.$options)===null||n===void 0)&&n._n_icon__&&Fd("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),de("i",jc(this.$attrs,{role:"img",class:[`${i}-icon`,s,{[`${i}-icon--depth`]:t,[`${i}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?de(r):this.$slots)}}),dh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},fh=xt({name:"ArrowMove20Regular",render:function(e,t){return Wt(),Pn("svg",dh,t[0]||(t[0]=[Jt("g",{fill:"none"},[Jt("path",{d:"M7.146 4.354a.5.5 0 0 0 .708 0L9.5 2.707V6.5a.5.5 0 0 0 1 0V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm-2.792 3.5a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L2.707 10.5H6.5a.5.5 0 0 0 0-1H2.707l1.647-1.646zm11.292 0a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H13.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646zm-7.792 7.792a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 17.293V13.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647z",fill:"currentColor"})],-1)]))}}),hh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ph=xt({name:"ArrowMoveInward20Regular",render:function(e,t){return Wt(),Pn("svg",hh,t[0]||(t[0]=[Jt("g",{fill:"none"},[Jt("path",{d:"M7.146 16.354a.5.5 0 0 0 .708 0L9.5 14.707V18.5a.5.5 0 0 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708zm9.208-8.5a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L14.707 10.5H18.5a.5.5 0 0 0 0-1h-3.793l1.647-1.646zm-12.708 0a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L5.293 10.5H1.5a.5.5 0 0 1 0-1h3.793L3.646 7.854zm4.208-4.208a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L10.5 5.293V1.5a.5.5 0 0 0-1 0v3.793L7.854 3.646z",fill:"currentColor"})],-1)]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="181",er={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mh=0,Nl=1,gh=2,pu=1,xh=2,Hn=3,Yn=0,Xt=1,Tn=2,jn=0,tr=1,Ol=2,Dl=3,Fl=4,vh=5,Si=100,_h=101,bh=102,yh=103,Eh=104,Sh=200,Th=201,Mh=202,Ah=203,ts=204,ns=205,Rh=206,wh=207,Ch=208,Ph=209,Lh=210,Ih=211,Nh=212,Oh=213,Dh=214,is=0,rs=1,os=2,sr=3,as=4,ss=5,ls=6,cs=7,Qs=0,Fh=1,kh=2,di=0,Uh=1,Bh=2,zh=3,Vh=4,Gh=5,Hh=6,Wh=7,mu=300,lr=301,cr=302,us=303,ds=304,Yo=306,li=1e3,un=1001,fs=1002,dn=1003,Xh=1004,oo=1005,gn=1006,va=1007,Mi=1008,Nn=1009,gu=1010,xu=1011,Dr=1012,el=1013,Ai=1014,Xn=1015,pr=1016,tl=1017,nl=1018,Fr=1020,vu=35902,_u=35899,bu=1021,yu=1022,xn=1023,kr=1026,Ur=1027,Eu=1028,il=1029,rl=1030,ol=1031,al=1033,Fo=33776,ko=33777,Uo=33778,Bo=33779,hs=35840,ps=35841,ms=35842,gs=35843,xs=36196,vs=37492,_s=37496,bs=37808,ys=37809,Es=37810,Ss=37811,Ts=37812,Ms=37813,As=37814,Rs=37815,ws=37816,Cs=37817,Ps=37818,Ls=37819,Is=37820,Ns=37821,Os=36492,Ds=36494,Fs=36495,ks=36283,Us=36284,Bs=36285,zs=36286,jh=3200,Kh=3201,sl=0,Yh=1,ai="",Pt="srgb",ur="srgb-linear",Ho="linear",_t="srgb",Oi=7680,kl=519,qh=512,$h=513,Zh=514,Su=515,Jh=516,Qh=517,ep=518,tp=519,Ul=35044,Bl="300 es",In=2e3,Wo=2001;function Tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function np(){const n=Br("canvas");return n.style.display="block",n}const zl={};function Vl(...n){const e="THREE."+n.shift();console.log(e,...n)}function nt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function It(...n){const e="THREE."+n.shift();console.error(e,...n)}function zr(...n){const e=n.join(" ");e in zl||(zl[e]=!0,nt(...n))}function ip(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Vs=180/Math.PI;function qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function rp(n,e){return(n%e+e)%e}function _a(n,e,t){return(1-t)*n+t*e}function _r(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:zo};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,l){let c=i[r+0],a=i[r+1],u=i[r+2],d=i[r+3],m=o[s+0],p=o[s+1],g=o[s+2],v=o[s+3];if(l<=0){e[t+0]=c,e[t+1]=a,e[t+2]=u,e[t+3]=d;return}if(l>=1){e[t+0]=m,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==m||a!==p||u!==g){let h=c*m+a*p+u*g+d*v;h<0&&(m=-m,p=-p,g=-g,v=-v,h=-h);let f=1-l;if(h<.9995){const b=Math.acos(h),y=Math.sin(b);f=Math.sin(f*b)/y,l=Math.sin(l*b)/y,c=c*f+m*l,a=a*f+p*l,u=u*f+g*l,d=d*f+v*l}else{c=c*f+m*l,a=a*f+p*l,u=u*f+g*l,d=d*f+v*l;const b=1/Math.sqrt(c*c+a*a+u*u+d*d);c*=b,a*=b,u*=b,d*=b}}e[t]=c,e[t+1]=a,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const l=i[r],c=i[r+1],a=i[r+2],u=i[r+3],d=o[s],m=o[s+1],p=o[s+2],g=o[s+3];return e[t]=l*g+u*d+c*p-a*m,e[t+1]=c*g+u*m+a*d-l*p,e[t+2]=a*g+u*p+l*m-c*d,e[t+3]=u*g-l*d-c*m-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,l=Math.cos,c=Math.sin,a=l(i/2),u=l(r/2),d=l(o/2),m=c(i/2),p=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=m*u*d+a*p*g,this._y=a*p*d-m*u*g,this._z=a*u*g+m*p*d,this._w=a*u*d-m*p*g;break;case"YXZ":this._x=m*u*d+a*p*g,this._y=a*p*d-m*u*g,this._z=a*u*g-m*p*d,this._w=a*u*d+m*p*g;break;case"ZXY":this._x=m*u*d-a*p*g,this._y=a*p*d+m*u*g,this._z=a*u*g+m*p*d,this._w=a*u*d-m*p*g;break;case"ZYX":this._x=m*u*d-a*p*g,this._y=a*p*d+m*u*g,this._z=a*u*g-m*p*d,this._w=a*u*d+m*p*g;break;case"YZX":this._x=m*u*d+a*p*g,this._y=a*p*d+m*u*g,this._z=a*u*g-m*p*d,this._w=a*u*d-m*p*g;break;case"XZY":this._x=m*u*d-a*p*g,this._y=a*p*d-m*u*g,this._z=a*u*g+m*p*d,this._w=a*u*d+m*p*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],l=t[5],c=t[9],a=t[2],u=t[6],d=t[10],m=i+l+d;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-a)*p,this._z=(s-r)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+a)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(o-a)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(s-r)/p,this._x=(o+a)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,l=t._x,c=t._y,a=t._z,u=t._w;return this._x=i*u+s*l+r*a-o*c,this._y=r*u+s*c+o*l-i*a,this._z=o*u+s*a+i*c-r*l,this._w=s*u-i*l-r*c-o*a,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,o=e._z,s=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,o=-o,s=-s,l=-l);let c=1-t;if(l<.9995){const a=Math.acos(l),u=Math.sin(a);c=Math.sin(c*a)/u,t=Math.sin(t*a)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,l=e.z,c=e.w,a=2*(s*r-l*i),u=2*(l*t-o*r),d=2*(o*i-s*t);return this.x=t+c*a+s*d-l*u,this.y=i+c*u+l*a-o*d,this.z=r+c*d+o*u-s*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,l=t.y,c=t.z;return this.x=r*c-o*l,this.y=o*s-i*c,this.z=i*l-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new ae,Gl=new hi;class at{constructor(e,t,i,r,o,s,l,c,a){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,l,c,a)}set(e,t,i,r,o,s,l,c,a){const u=this.elements;return u[0]=e,u[1]=r,u[2]=l,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],l=i[3],c=i[6],a=i[1],u=i[4],d=i[7],m=i[2],p=i[5],g=i[8],v=r[0],h=r[3],f=r[6],b=r[1],y=r[4],_=r[7],A=r[2],T=r[5],C=r[8];return o[0]=s*v+l*b+c*A,o[3]=s*h+l*y+c*T,o[6]=s*f+l*_+c*C,o[1]=a*v+u*b+d*A,o[4]=a*h+u*y+d*T,o[7]=a*f+u*_+d*C,o[2]=m*v+p*b+g*A,o[5]=m*h+p*y+g*T,o[8]=m*f+p*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],u=e[8];return t*s*u-t*l*a-i*o*u+i*l*c+r*o*a-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],u=e[8],d=u*s-l*a,m=l*c-u*o,p=a*o-s*c,g=t*d+i*m+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*a-u*i)*v,e[2]=(l*i-r*s)*v,e[3]=m*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-l*t)*v,e[6]=p*v,e[7]=(i*c-a*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,l){const c=Math.cos(o),a=Math.sin(o);return this.set(i*c,i*a,-i*(c*s+a*l)+s+e,-r*a,r*c,-r*(-a*s+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new at,Hl=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===_t&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Ho:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:Ho,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}const pt=ap();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class sp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=Br("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Kn(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,l=r.length;s<l;s++)r[s].isDataTexture?o.push(Ea(r[s].image)):o.push(Ea(r[s]))}else o=Ea(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let cp=0;const Sa=new ae;class jt extends Ci{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=un,r=un,o=gn,s=Mi,l=xn,c=Nn,a=jt.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=qr(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=mu;jt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,a=c[0],u=c[4],d=c[8],m=c[1],p=c[5],g=c[9],v=c[2],h=c[6],f=c[10];if(Math.abs(u-m)<.01&&Math.abs(d-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+v)<.1&&Math.abs(g+h)<.1&&Math.abs(a+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(a+1)/2,_=(p+1)/2,A=(f+1)/2,T=(u+m)/4,C=(d+v)/4,D=(g+h)/4;return y>_&&y>A?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=T/i,o=C/i):_>A?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=T/r,o=D/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=C/o,r=D/o),this.set(i,r,o,t),this}let b=Math.sqrt((h-g)*(h-g)+(d-v)*(d-v)+(m-u)*(m-u));return Math.abs(b)<.001&&(b=1),this.x=(h-g)/b,this.y=(d-v)/b,this.z=(m-u)/b,this.w=Math.acos((a+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class up extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},o=new jt(r);this.textures=[];const s=i.count;for(let l=0;l<s;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends up{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mu extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dp extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=o.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,_n):_n.fromBufferAttribute(o,s),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),so.subVectors(this.max,br),Fi.subVectors(e.a,br),ki.subVectors(e.b,br),Ui.subVectors(e.c,br),Jn.subVectors(ki,Fi),Qn.subVectors(Ui,ki),xi.subVectors(Fi,Ui);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-xi.z,xi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,xi.z,0,-xi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-xi.y,xi.x,0];return!Ta(t,Fi,ki,Ui,so)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Fi,ki,Ui,so))?!1:(lo.crossVectors(Jn,Qn),t=[lo.x,lo.y,lo.z],Ta(t,Fi,ki,Ui,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],_n=new ae,ao=new fi,Fi=new ae,ki=new ae,Ui=new ae,Jn=new ae,Qn=new ae,xi=new ae,br=new ae,so=new ae,lo=new ae,vi=new ae;function Ta(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){vi.fromArray(n,o);const l=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),a=t.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(c,a,u),Math.min(c,a,u))>l)return!1}return!0}const fp=new fi,yr=new ae,Ma=new ae;class $r{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Ma)),this.expandByPoint(yr.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new ae,Aa=new ae,co=new ae,ei=new ae,Ra=new ae,uo=new ae,wa=new ae;class qo{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Aa.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Aa);const o=e.distanceTo(t)*.5,s=-this.direction.dot(co),l=ei.dot(this.direction),c=-ei.dot(co),a=ei.lengthSq(),u=Math.abs(1-s*s);let d,m,p,g;if(u>0)if(d=s*c-l,m=s*l-c,g=o*u,d>=0)if(m>=-g)if(m<=g){const v=1/u;d*=v,m*=v,p=d*(d+s*m+2*l)+m*(s*d+m+2*c)+a}else m=o,d=Math.max(0,-(s*m+l)),p=-d*d+m*(m+2*c)+a;else m=-o,d=Math.max(0,-(s*m+l)),p=-d*d+m*(m+2*c)+a;else m<=-g?(d=Math.max(0,-(-s*o+l)),m=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+m*(m+2*c)+a):m<=g?(d=0,m=Math.min(Math.max(-o,-c),o),p=m*(m+2*c)+a):(d=Math.max(0,-(s*o+l)),m=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+m*(m+2*c)+a);else m=s>0?-o:o,d=Math.max(0,-(s*m+l)),p=-d*d+m*(m+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Aa).addScaledVector(co,m),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),l=i-s,c=i+s;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,l,c;const a=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return a>=0?(i=(e.min.x-m.x)*a,r=(e.max.x-m.x)*a):(i=(e.max.x-m.x)*a,r=(e.min.x-m.x)*a),u>=0?(o=(e.min.y-m.y)*u,s=(e.max.y-m.y)*u):(o=(e.max.y-m.y)*u,s=(e.min.y-m.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(l=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(l=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,o){Ra.subVectors(t,e),uo.subVectors(i,e),wa.crossVectors(Ra,uo);let s=this.direction.dot(wa),l;if(s>0){if(r)return null;l=1}else if(s<0)l=-1,s=-s;else return null;ei.subVectors(this.origin,e);const c=l*this.direction.dot(uo.crossVectors(ei,uo));if(c<0)return null;const a=l*this.direction.dot(Ra.cross(ei));if(a<0||c+a>s)return null;const u=-l*ei.dot(wa);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,o,s,l,c,a,u,d,m,p,g,v,h){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,l,c,a,u,d,m,p,g,v,h)}set(e,t,i,r,o,s,l,c,a,u,d,m,p,g,v,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=l,f[13]=c,f[2]=a,f[6]=u,f[10]=d,f[14]=m,f[3]=p,f[7]=g,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),o=1/Bi.setFromMatrixColumn(e,1).length(),s=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),l=Math.sin(i),c=Math.cos(r),a=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const m=s*u,p=s*d,g=l*u,v=l*d;t[0]=c*u,t[4]=-c*d,t[8]=a,t[1]=p+g*a,t[5]=m-v*a,t[9]=-l*c,t[2]=v-m*a,t[6]=g+p*a,t[10]=s*c}else if(e.order==="YXZ"){const m=c*u,p=c*d,g=a*u,v=a*d;t[0]=m+v*l,t[4]=g*l-p,t[8]=s*a,t[1]=s*d,t[5]=s*u,t[9]=-l,t[2]=p*l-g,t[6]=v+m*l,t[10]=s*c}else if(e.order==="ZXY"){const m=c*u,p=c*d,g=a*u,v=a*d;t[0]=m-v*l,t[4]=-s*d,t[8]=g+p*l,t[1]=p+g*l,t[5]=s*u,t[9]=v-m*l,t[2]=-s*a,t[6]=l,t[10]=s*c}else if(e.order==="ZYX"){const m=s*u,p=s*d,g=l*u,v=l*d;t[0]=c*u,t[4]=g*a-p,t[8]=m*a+v,t[1]=c*d,t[5]=v*a+m,t[9]=p*a-g,t[2]=-a,t[6]=l*c,t[10]=s*c}else if(e.order==="YZX"){const m=s*c,p=s*a,g=l*c,v=l*a;t[0]=c*u,t[4]=v-m*d,t[8]=g*d+p,t[1]=d,t[5]=s*u,t[9]=-l*u,t[2]=-a*u,t[6]=p*d+g,t[10]=m-v*d}else if(e.order==="XZY"){const m=s*c,p=s*a,g=l*c,v=l*a;t[0]=c*u,t[4]=-d,t[8]=a*u,t[1]=m*d+v,t[5]=s*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=l*u,t[10]=v*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hp,e,pp)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ti.crossVectors(i,ln),ti.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ti.crossVectors(i,ln)),ti.normalize(),fo.crossVectors(ln,ti),r[0]=ti.x,r[4]=fo.x,r[8]=ln.x,r[1]=ti.y,r[5]=fo.y,r[9]=ln.y,r[2]=ti.z,r[6]=fo.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],l=i[4],c=i[8],a=i[12],u=i[1],d=i[5],m=i[9],p=i[13],g=i[2],v=i[6],h=i[10],f=i[14],b=i[3],y=i[7],_=i[11],A=i[15],T=r[0],C=r[4],D=r[8],S=r[12],E=r[1],w=r[5],L=r[9],P=r[13],I=r[2],z=r[6],G=r[10],j=r[14],W=r[3],J=r[7],se=r[11],xe=r[15];return o[0]=s*T+l*E+c*I+a*W,o[4]=s*C+l*w+c*z+a*J,o[8]=s*D+l*L+c*G+a*se,o[12]=s*S+l*P+c*j+a*xe,o[1]=u*T+d*E+m*I+p*W,o[5]=u*C+d*w+m*z+p*J,o[9]=u*D+d*L+m*G+p*se,o[13]=u*S+d*P+m*j+p*xe,o[2]=g*T+v*E+h*I+f*W,o[6]=g*C+v*w+h*z+f*J,o[10]=g*D+v*L+h*G+f*se,o[14]=g*S+v*P+h*j+f*xe,o[3]=b*T+y*E+_*I+A*W,o[7]=b*C+y*w+_*z+A*J,o[11]=b*D+y*L+_*G+A*se,o[15]=b*S+y*P+_*j+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],l=e[5],c=e[9],a=e[13],u=e[2],d=e[6],m=e[10],p=e[14],g=e[3],v=e[7],h=e[11],f=e[15];return g*(+o*c*d-r*a*d-o*l*m+i*a*m+r*l*p-i*c*p)+v*(+t*c*p-t*a*m+o*s*m-r*s*p+r*a*u-o*c*u)+h*(+t*a*d-t*l*p-o*s*d+i*s*p+o*l*u-i*a*u)+f*(-r*l*u-t*c*d+t*l*m+r*s*d-i*s*m+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],l=e[5],c=e[6],a=e[7],u=e[8],d=e[9],m=e[10],p=e[11],g=e[12],v=e[13],h=e[14],f=e[15],b=d*h*a-v*m*a+v*c*p-l*h*p-d*c*f+l*m*f,y=g*m*a-u*h*a-g*c*p+s*h*p+u*c*f-s*m*f,_=u*v*a-g*d*a+g*l*p-s*v*p-u*l*f+s*d*f,A=g*d*c-u*v*c-g*l*m+s*v*m+u*l*h-s*d*h,T=t*b+i*y+r*_+o*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=b*C,e[1]=(v*m*o-d*h*o-v*r*p+i*h*p+d*r*f-i*m*f)*C,e[2]=(l*h*o-v*c*o+v*r*a-i*h*a-l*r*f+i*c*f)*C,e[3]=(d*c*o-l*m*o-d*r*a+i*m*a+l*r*p-i*c*p)*C,e[4]=y*C,e[5]=(u*h*o-g*m*o+g*r*p-t*h*p-u*r*f+t*m*f)*C,e[6]=(g*c*o-s*h*o-g*r*a+t*h*a+s*r*f-t*c*f)*C,e[7]=(s*m*o-u*c*o+u*r*a-t*m*a-s*r*p+t*c*p)*C,e[8]=_*C,e[9]=(g*d*o-u*v*o-g*i*p+t*v*p+u*i*f-t*d*f)*C,e[10]=(s*v*o-g*l*o+g*i*a-t*v*a-s*i*f+t*l*f)*C,e[11]=(u*l*o-s*d*o-u*i*a+t*d*a+s*i*p-t*l*p)*C,e[12]=A*C,e[13]=(u*v*r-g*d*r+g*i*m-t*v*m-u*i*h+t*d*h)*C,e[14]=(g*l*r-s*v*r-g*i*c+t*v*c+s*i*h-t*l*h)*C,e[15]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*m+t*l*m)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,l=e.y,c=e.z,a=o*s,u=o*l;return this.set(a*s+i,a*l-r*c,a*c+r*l,0,a*l+r*c,u*l+i,u*c-r*s,0,a*c-r*l,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,l=t._z,c=t._w,a=o+o,u=s+s,d=l+l,m=o*a,p=o*u,g=o*d,v=s*u,h=s*d,f=l*d,b=c*a,y=c*u,_=c*d,A=i.x,T=i.y,C=i.z;return r[0]=(1-(v+f))*A,r[1]=(p+_)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-_)*T,r[5]=(1-(m+f))*T,r[6]=(h+b)*T,r[7]=0,r[8]=(g+y)*C,r[9]=(h-b)*C,r[10]=(1-(m+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Bi.set(r[0],r[1],r[2]).length();const s=Bi.set(r[4],r[5],r[6]).length(),l=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const a=1/o,u=1/s,d=1/l;return bn.elements[0]*=a,bn.elements[1]*=a,bn.elements[2]*=a,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=o,i.y=s,i.z=l,this}makePerspective(e,t,i,r,o,s,l=In,c=!1){const a=this.elements,u=2*o/(t-e),d=2*o/(i-r),m=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(c)g=o/(s-o),v=s*o/(s-o);else if(l===In)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(l===Wo)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=d,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s,l=In,c=!1){const a=this.elements,u=2/(t-e),d=2/(i-r),m=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(c)g=1/(s-o),v=s/(s-o);else if(l===In)g=-2/(s-o),v=-(s+o)/(s-o);else if(l===Wo)g=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=0,a[12]=m,a[1]=0,a[5]=d,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=g,a[14]=v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new ae,bn=new At,hp=new ae(0,0,0),pp=new ae(1,1,1),ti=new ae,fo=new ae,ln=new ae,Xl=new At,jl=new hi;class An{constructor(e=0,t=0,i=0,r=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],l=r[8],c=r[1],a=r[5],u=r[9],d=r[2],m=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(m,a),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ut(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,a));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,a),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Kl=new ae,zi=new hi,Un=new At,ho=new ae,Er=new ae,gp=new ae,xp=new hi,Yl=new ae(1,0,0),ql=new ae(0,1,0),$l=new ae(0,0,1),Zl={type:"added"},vp={type:"removed"},Vi={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Rt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new ae,t=new An,i=new hi,r=new ae(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new at}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Er,ho,this.up):Un.lookAt(ho,Er,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Un),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let a=0,u=c.length;a<u;a++){const d=c[a];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(o(e.materials,this.material[c]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(e.animations,c))}}if(t){const l=s(e.geometries),c=s(e.materials),a=s(e.textures),u=s(e.images),d=s(e.shapes),m=s(e.skeletons),p=s(e.animations),g=s(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(l){const c=[];for(const a in l){const u=l[a];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new ae(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new ae,Bn=new ae,Pa=new ae,zn=new ae,Gi=new ae,Hi=new ae,Jl=new ae,La=new ae,Ia=new ae,Na=new ae,Oa=new Lt,Da=new Lt,Fa=new Lt;class Mn{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){yn.subVectors(r,t),Bn.subVectors(i,t),Pa.subVectors(e,t);const s=yn.dot(yn),l=yn.dot(Bn),c=yn.dot(Pa),a=Bn.dot(Bn),u=Bn.dot(Pa),d=s*a-l*l;if(d===0)return o.set(0,0,0),null;const m=1/d,p=(a*c-l*u)*m,g=(s*u-l*c)*m;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,o,s,l,c){return this.getBarycoord(e,t,i,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,zn.x),c.addScaledVector(s,zn.y),c.addScaledVector(l,zn.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return Oa.setScalar(0),Da.setScalar(0),Fa.setScalar(0),Oa.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,i),Fa.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Oa,o.x),s.addScaledVector(Da,o.y),s.addScaledVector(Fa,o.z),s}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Bn.subVectors(e,t),yn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),yn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,l;Gi.subVectors(r,i),Hi.subVectors(o,i),La.subVectors(e,i);const c=Gi.dot(La),a=Hi.dot(La);if(c<=0&&a<=0)return t.copy(i);Ia.subVectors(e,r);const u=Gi.dot(Ia),d=Hi.dot(Ia);if(u>=0&&d<=u)return t.copy(r);const m=c*d-u*a;if(m<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Gi,s);Na.subVectors(e,o);const p=Gi.dot(Na),g=Hi.dot(Na);if(g>=0&&p<=g)return t.copy(o);const v=p*a-c*g;if(v<=0&&a>=0&&g<=0)return l=a/(a-g),t.copy(i).addScaledVector(Hi,l);const h=u*g-p*d;if(h<=0&&d-u>=0&&p-g>=0)return Jl.subVectors(o,r),l=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Jl,l);const f=1/(h+v+m);return s=v*f,l=m*f,t.copy(i).addScaledVector(Gi,s).addScaledVector(Hi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},po={h:0,s:0,l:0};function ka(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=rp(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=ka(s,o,e+1/3),this.g=ka(s,o,e),this.b=ka(s,o,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function i(o){o!==void 0&&parseFloat(o)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],l=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Ru[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return pt.workingToColorSpace(Ht.copy(this),e),Math.round(ut(Ht.r*255,0,255))*65536+Math.round(ut(Ht.g*255,0,255))*256+Math.round(ut(Ht.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),l=Math.min(i,r,o);let c,a;const u=(l+s)/2;if(l===s)c=0,a=0;else{const d=s-l;switch(a=u<=.5?d/(s+l):d/(2-s-l),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=a,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Pt){pt.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(po);const i=_a(ni.h,po.h,t),r=_a(ni.s,po.s,t),o=_a(ni.l,po.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new it;it.NAMES=Ru;let _p=0;class mi extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=tr,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ts,this.blendDst=ns,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ts&&(i.blendSrc=this.blendSrc),this.blendDst!==ns&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const l in o){const c=o[l];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new ae,mo=new Je;let bp=0;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_r(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),o=tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}}class wu extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cu extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yp=0;const pn=new At,Ua=new Rt,Wi=new ae,cn=new fi,Sr=new fi,Bt=new ae;class Dt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Cu:wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new at().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const l=t[o];Sr.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(cn.min,Sr.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,Sr.max),cn.expandByPoint(Bt)):(cn.expandByPoint(Sr.min),cn.expandByPoint(Sr.max))}cn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let o=0,s=t.length;o<s;o++){const l=t[o],c=this.morphTargetsRelative;for(let a=0,u=l.count;a<u;a++)Bt.fromBufferAttribute(l,a),c&&(Wi.fromBufferAttribute(e,a),Bt.add(Wi)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),l=[],c=[];for(let D=0;D<i.count;D++)l[D]=new ae,c[D]=new ae;const a=new ae,u=new ae,d=new ae,m=new Je,p=new Je,g=new Je,v=new ae,h=new ae;function f(D,S,E){a.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),m.fromBufferAttribute(o,D),p.fromBufferAttribute(o,S),g.fromBufferAttribute(o,E),u.sub(a),d.sub(a),p.sub(m),g.sub(m);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),h.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),l[D].add(v),l[S].add(v),l[E].add(v),c[D].add(h),c[S].add(h),c[E].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){const E=b[D],w=E.start,L=E.count;for(let P=w,I=w+L;P<I;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new ae,_=new ae,A=new ae,T=new ae;function C(D){A.fromBufferAttribute(r,D),T.copy(A);const S=l[D];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(T,S);const w=_.dot(c[D])<0?-1:1;s.setXYZW(D,y.x,y.y,y.z,w)}for(let D=0,S=b.length;D<S;++D){const E=b[D],w=E.start,L=E.count;for(let P=w,I=w+L;P<I;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const r=new ae,o=new ae,s=new ae,l=new ae,c=new ae,a=new ae,u=new ae,d=new ae;if(e)for(let m=0,p=e.count;m<p;m+=3){const g=e.getX(m+0),v=e.getX(m+1),h=e.getX(m+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,h),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),a.fromBufferAttribute(i,h),l.add(u),c.add(u),a.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(h,a.x,a.y,a.z)}else for(let m=0,p=t.count;m<p;m+=3)r.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),s.fromBufferAttribute(t,m+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,c){const a=l.array,u=l.itemSize,d=l.normalized,m=new a.constructor(c.length*u);let p=0,g=0;for(let v=0,h=c.length;v<h;v++){l.isInterleavedBufferAttribute?p=c[v]*l.data.stride+l.offset:p=c[v]*u;for(let f=0;f<u;f++)m[g++]=a[p++]}return new on(m,u,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],a=e(c,i);t.setAttribute(l,a)}const o=this.morphAttributes;for(const l in o){const c=[],a=o[l];for(let u=0,d=a.length;u<d;u++){const m=a[u],p=e(m,i);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,c=s.length;l<c;l++){const a=s[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const a=i[c];e.data.attributes[c]=a.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const a=this.morphAttributes[c],u=[];for(let d=0,m=a.length;d<m;d++){const p=a[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const a in r){const u=r[a];this.setAttribute(a,u.clone(t))}const o=e.morphAttributes;for(const a in o){const u=[],d=o[a];for(let m=0,p=d.length;m<p;m++)u.push(d[m].clone(t));this.morphAttributes[a]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let a=0,u=s.length;a<u;a++){const d=s[a];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new At,_i=new qo,go=new $r,ec=new ae,xo=new ae,vo=new ae,_o=new ae,Ba=new ae,bo=new ae,tc=new ae,yo=new ae;class zt extends Rt{constructor(e=new Dt,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){bo.set(0,0,0);for(let c=0,a=o.length;c<a;c++){const u=l[c],d=o[c];u!==0&&(Ba.fromBufferAttribute(d,e),s?bo.addScaledVector(Ba,u):bo.addScaledVector(Ba.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(o),_i.copy(e.ray).recast(e.near),!(go.containsPoint(_i.origin)===!1&&(_i.intersectSphere(go,ec)===null||_i.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(o).invert(),_i.copy(e.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,l=o.index,c=o.attributes.position,a=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,m=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(s))for(let g=0,v=m.length;g<v;g++){const h=m[g],f=s[h.materialIndex],b=Math.max(h.start,p.start),y=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let _=b,A=y;_<A;_+=3){const T=l.getX(_),C=l.getX(_+1),D=l.getX(_+2);r=Eo(this,f,e,i,a,u,d,T,C,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let h=g,f=v;h<f;h+=3){const b=l.getX(h),y=l.getX(h+1),_=l.getX(h+2);r=Eo(this,s,e,i,a,u,d,b,y,_),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=m.length;g<v;g++){const h=m[g],f=s[h.materialIndex],b=Math.max(h.start,p.start),y=Math.min(c.count,Math.min(h.start+h.count,p.start+p.count));for(let _=b,A=y;_<A;_+=3){const T=_,C=_+1,D=_+2;r=Eo(this,f,e,i,a,u,d,T,C,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let h=g,f=v;h<f;h+=3){const b=h,y=h+1,_=h+2;r=Eo(this,s,e,i,a,u,d,b,y,_),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Ep(n,e,t,i,r,o,s,l){let c;if(e.side===Xt?c=i.intersectTriangle(s,o,r,!0,l):c=i.intersectTriangle(r,o,s,e.side===Yn,l),c===null)return null;yo.copy(l),yo.applyMatrix4(n.matrixWorld);const a=t.ray.origin.distanceTo(yo);return a<t.near||a>t.far?null:{distance:a,point:yo.clone(),object:n}}function Eo(n,e,t,i,r,o,s,l,c,a){n.getVertexPosition(l,xo),n.getVertexPosition(c,vo),n.getVertexPosition(a,_o);const u=Ep(n,e,t,i,xo,vo,_o,tc);if(u){const d=new ae;Mn.getBarycoord(tc,xo,vo,_o,d),r&&(u.uv=Mn.getInterpolatedAttribute(r,l,c,a,d,new Je)),o&&(u.uv1=Mn.getInterpolatedAttribute(o,l,c,a,d,new Je)),s&&(u.normal=Mn.getInterpolatedAttribute(s,l,c,a,d,new ae),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a:l,b:c,c:a,normal:new ae,materialIndex:0};Mn.getNormal(xo,vo,_o,m.normal),u.face=m,u.barycoord=d}return u}class mr extends Dt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const l=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],a=[],u=[],d=[];let m=0,p=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function g(v,h,f,b,y,_,A,T,C,D,S){const E=_/C,w=A/D,L=_/2,P=A/2,I=T/2,z=C+1,G=D+1;let j=0,W=0;const J=new ae;for(let se=0;se<G;se++){const xe=se*w-P;for(let ne=0;ne<z;ne++){const ie=ne*E-L;J[v]=ie*b,J[h]=xe*y,J[f]=I,a.push(J.x,J.y,J.z),J[v]=0,J[h]=0,J[f]=T>0?1:-1,u.push(J.x,J.y,J.z),d.push(ne/C),d.push(1-se/D),j+=1}}for(let se=0;se<D;se++)for(let xe=0;xe<C;xe++){const ne=m+xe+z*se,ie=m+xe+z*(se+1),Ee=m+(xe+1)+z*(se+1),ee=m+(xe+1)+z*se;c.push(ne,ie,ee),c.push(ie,Ee,ee),W+=6}l.addGroup(p,W,S),p+=W,m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const r in i)e[r]=i[r]}return e}function Sp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Tp={clone:dr,merge:qt};var Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lu extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new ae,nc=new Je,ic=new Je;class mn extends Lu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,a=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/a,r*=s.width/c,i*=s.height/a}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,ji=1;class Rp extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Xi,ji,e,t);r.layers=this.layers,this.add(r);const o=new mn(Xi,ji,e,t);o.layers=this.layers,this.add(o);const s=new mn(Xi,ji,e,t);s.layers=this.layers,this.add(s);const l=new mn(Xi,ji,e,t);l.layers=this.layers,this.add(l);const c=new mn(Xi,ji,e,t);c.layers=this.layers,this.add(c);const a=new mn(Xi,ji,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,l,c]=t;for(const a of t)this.remove(a);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,l,c,a,u]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,a),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,m,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Iu extends jt{constructor(e=[],t=lr,i,r,o,s,l,c,a,u){super(e,t,i,r,o,s,l,c,a,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Iu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mr(5,5,5),o=new qn({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:jn});o.uniforms.tEquirect.value=t;const s=new zt(r,o),l=t.minFilter;return t.minFilter===Mi&&(t.minFilter=gn),new Rp(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}class ci extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cp={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){s=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,i),f=this._getHandJoint(a,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],m=u.position.distanceTo(d.position),p=.02,g=.005;a.inputState.pinching&&m>p+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&m<=p-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),a!==null&&(a.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nu extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cl extends jt{constructor(e=null,t=1,i=1,r,o,s,l,c,a=dn,u=dn,d,m){super(null,s,l,c,a,u,r,o,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new ae,Pp=new ae,Lp=new at;class ri{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Va.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new $r,Ip=new Je(.5,.5),So=new ae;class ul{constructor(e=new ri,t=new ri,i=new ri,r=new ri,o=new ri,s=new ri){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(o),l[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const r=this.planes,o=e.elements,s=o[0],l=o[1],c=o[2],a=o[3],u=o[4],d=o[5],m=o[6],p=o[7],g=o[8],v=o[9],h=o[10],f=o[11],b=o[12],y=o[13],_=o[14],A=o[15];if(r[0].setComponents(a-s,p-u,f-g,A-b).normalize(),r[1].setComponents(a+s,p+u,f+g,A+b).normalize(),r[2].setComponents(a+l,p+d,f+v,A+y).normalize(),r[3].setComponents(a-l,p-d,f-v,A-y).normalize(),i)r[4].setComponents(c,m,h,_).normalize(),r[5].setComponents(a-c,p-m,f-h,A-_).normalize();else if(r[4].setComponents(a-c,p-m,f-h,A-_).normalize(),t===In)r[5].setComponents(a+c,p+m,f+h,A+_).normalize();else if(t===Wo)r[5].setComponents(c,m,h,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Ip.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ou extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new ae,jo=new ae,rc=new At,Tr=new qo,To=new $r,Ga=new ae,oc=new ae;class Np extends Rt{constructor(e=new Dt,t=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Xo.fromBufferAttribute(t,r-1),jo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xo.distanceTo(jo);e.setAttribute("lineDistance",new ct(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=o,e.ray.intersectsSphere(To)===!1)return;rc.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(rc);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=p,h=g-1;v<h;v+=a){const f=u.getX(v),b=u.getX(v+1),y=Mo(this,e,Tr,c,f,b,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),h=u.getX(p),f=Mo(this,e,Tr,c,v,h,g-1);f&&t.push(f)}}else{const p=Math.max(0,s.start),g=Math.min(m.count,s.start+s.count);for(let v=p,h=g-1;v<h;v+=a){const f=Mo(this,e,Tr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Mo(this,e,Tr,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Mo(n,e,t,i,r,o,s){const l=n.geometry.attributes.position;if(Xo.fromBufferAttribute(l,r),jo.fromBufferAttribute(l,o),t.distanceSqToSegment(Xo,jo,Ga,oc)>i)return;Ga.applyMatrix4(n.matrixWorld);const a=e.ray.origin.distanceTo(Ga);if(!(a<e.near||a>e.far))return{distance:a,point:oc.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ac=new ae,sc=new ae;class Op extends Np{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)ac.fromBufferAttribute(t,r),sc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ac.distanceTo(sc);e.setAttribute("lineDistance",new ct(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Du extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new At,Gs=new qo,Ao=new $r,Ro=new ae;class Dp extends Rt{constructor(e=new Dt,t=new Du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=o,e.ray.intersectsSphere(Ao)===!1)return;lc.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(lc);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=i.index,d=i.attributes.position;if(a!==null){const m=Math.max(0,s.start),p=Math.min(a.count,s.start+s.count);for(let g=m,v=p;g<v;g++){const h=a.getX(g);Ro.fromBufferAttribute(d,h),cc(Ro,h,c,r,e,t,this)}}else{const m=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let g=m,v=p;g<v;g++)Ro.fromBufferAttribute(d,g),cc(Ro,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function cc(n,e,t,i,r,o,s){const l=Gs.distanceSqToPoint(n);if(l<t){const c=new ae;Gs.closestPointToPoint(n,c),c.applyMatrix4(i);const a=r.ray.origin.distanceTo(c);if(a<r.near||a>r.far)return;o.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Fu extends jt{constructor(e,t,i=Ai,r,o,s,l=dn,c=dn,a,u=kr,d=1){if(u!==kr&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,r,o,s,l,c,u,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ku extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends Dt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:l,thetaLength:c};const a=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],m=[],p=[];let g=0;const v=[],h=i/2;let f=0;b(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(p,2));function b(){const _=new ae,A=new ae;let T=0;const C=(t-e)/i;for(let D=0;D<=o;D++){const S=[],E=D/o,w=E*(t-e)+e;for(let L=0;L<=r;L++){const P=L/r,I=P*c+l,z=Math.sin(I),G=Math.cos(I);A.x=w*z,A.y=-E*i+h,A.z=w*G,d.push(A.x,A.y,A.z),_.set(z,C,G).normalize(),m.push(_.x,_.y,_.z),p.push(P,1-E),S.push(g++)}v.push(S)}for(let D=0;D<r;D++)for(let S=0;S<o;S++){const E=v[S][D],w=v[S+1][D],L=v[S+1][D+1],P=v[S][D+1];(e>0||S!==0)&&(u.push(E,w,P),T+=3),(t>0||S!==o-1)&&(u.push(w,L,P),T+=3)}a.addGroup(f,T,0),f+=T}function y(_){const A=g,T=new Je,C=new ae;let D=0;const S=_===!0?e:t,E=_===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,h*E,0),m.push(0,E,0),p.push(.5,.5),g++;const w=g;for(let L=0;L<=r;L++){const I=L/r*c+l,z=Math.cos(I),G=Math.sin(I);C.x=S*G,C.y=h*E,C.z=S*z,d.push(C.x,C.y,C.z),m.push(0,E,0),T.x=z*.5+.5,T.y=G*.5*E+.5,p.push(T.x,T.y),g++}for(let L=0;L<r;L++){const P=A+L,I=w+L;_===!0?u.push(I,I+1,P):u.push(I+1,I,P),D+=3}a.addGroup(f,D,_===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dl extends $o{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,l=Math.PI*2){super(0,e,t,i,r,o,s,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:l}}static fromJSON(e){return new dl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function Fp(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=Uu(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let l,c,a;if(i&&(o=Vp(n,e,o,t)),n.length>80*t){l=n[0],c=n[1];let u=l,d=c;for(let m=t;m<r;m+=t){const p=n[m],g=n[m+1];p<l&&(l=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}a=Math.max(u-l,d-c),a=a!==0?32767/a:0}return Vr(o,s,t,l,c,a,0),s}function Uu(n,e,t,i,r){let o;if(r===Jp(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=uc(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=uc(s/i|0,n[s],n[s+1],o);return o&&fr(o,o.next)&&(Hr(o),o=o.next),o}function wi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fr(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vr(n,e,t,i,r,o,s){if(!n)return;!s&&o&&jp(n,i,r,o);let l=n;for(;n.prev!==n.next;){const c=n.prev,a=n.next;if(o?Up(n,i,r,o):kp(n)){e.push(c.i,n.i,a.i),Hr(n),n=a.next,l=a.next;continue}if(n=a,n===l){s?s===1?(n=Bp(wi(n),e),Vr(n,e,t,i,r,o,2)):s===2&&zp(n,e,t,i,r,o):Vr(wi(n),e,t,i,r,o,1);break}}}function kp(n){const e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,l=e.y,c=t.y,a=i.y,u=Math.min(r,o,s),d=Math.min(l,c,a),m=Math.max(r,o,s),p=Math.max(l,c,a);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=m&&g.y>=d&&g.y<=p&&Ar(r,l,o,c,s,a,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Up(n,e,t,i){const r=n.prev,o=n,s=n.next;if(Mt(r,o,s)>=0)return!1;const l=r.x,c=o.x,a=s.x,u=r.y,d=o.y,m=s.y,p=Math.min(l,c,a),g=Math.min(u,d,m),v=Math.max(l,c,a),h=Math.max(u,d,m),f=Hs(p,g,e,t,i),b=Hs(v,h,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=f&&_&&_.z<=b;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=h&&y!==r&&y!==s&&Ar(l,u,c,d,a,m,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=h&&_!==r&&_!==s&&Ar(l,u,c,d,a,m,_.x,_.y)&&Mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=h&&y!==r&&y!==s&&Ar(l,u,c,d,a,m,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=h&&_!==r&&_!==s&&Ar(l,u,c,d,a,m,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Bp(n,e){let t=n;do{const i=t.prev,r=t.next.next;!fr(i,r)&&zu(i,t,t.next,r)&&Gr(i,r)&&Gr(r,i)&&(e.push(i.i,t.i,r.i),Hr(t),Hr(t.next),t=n=r),t=t.next}while(t!==n);return wi(t)}function zp(n,e,t,i,r,o){let s=n;do{let l=s.next.next;for(;l!==s.prev;){if(s.i!==l.i&&qp(s,l)){let c=Vu(s,l);s=wi(s,s.next),c=wi(c,c.next),Vr(s,e,t,i,r,o,0),Vr(c,e,t,i,r,o,0);return}l=l.next}s=s.next}while(s!==n)}function Vp(n,e,t,i){const r=[];for(let o=0,s=e.length;o<s;o++){const l=e[o]*i,c=o<s-1?e[o+1]*i:n.length,a=Uu(n,l,c,i,!1);a===a.next&&(a.steiner=!0),r.push(Yp(a))}r.sort(Gp);for(let o=0;o<r.length;o++)t=Hp(r[o],t);return t}function Gp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Hp(n,e){const t=Wp(n,e);if(!t)return e;const i=Vu(t,n);return wi(i,i.next),wi(t,t.next)}function Wp(n,e){let t=e;const i=n.x,r=n.y;let o=-1/0,s;if(fr(n,t))return t;do{if(fr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>o&&(o=d,s=t.x<t.next.x?t:t.next,d===i))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,c=s.x,a=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Bu(r<a?i:o,r,c,a,r<a?o:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);Gr(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Xp(s,t)))&&(s=t,u=d)}t=t.next}while(t!==l);return s}function Xp(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function jp(n,e,t,i){let r=n;do r.z===0&&(r.z=Hs(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Kp(r)}function Kp(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,l=0;for(let a=0;a<t&&(l++,s=s.nextZ,!!s);a++);let c=t;for(;l>0||c>0&&s;)l!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Hs(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Yp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bu(n,e,t,i,r,o,s,l){return(r-s)*(e-l)>=(n-s)*(o-l)&&(n-s)*(i-l)>=(t-s)*(e-l)&&(t-s)*(o-l)>=(r-s)*(i-l)}function Ar(n,e,t,i,r,o,s,l){return!(n===s&&e===l)&&Bu(n,e,t,i,r,o,s,l)}function qp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$p(n,e)&&(Gr(n,e)&&Gr(e,n)&&Zp(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||fr(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fr(n,e){return n.x===e.x&&n.y===e.y}function zu(n,e,t,i){const r=Co(Mt(n,e,t)),o=Co(Mt(n,e,i)),s=Co(Mt(t,i,n)),l=Co(Mt(t,i,e));return!!(r!==o&&s!==l||r===0&&wo(n,t,e)||o===0&&wo(n,i,e)||s===0&&wo(t,n,i)||l===0&&wo(t,e,i))}function wo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Co(n){return n>0?1:n<0?-1:0}function $p(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gr(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function Zp(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vu(n,e){const t=Ws(n.i,n.x,n.y),i=Ws(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function uc(n,e,t,i){const r=Ws(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ws(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class Qp{static triangulate(e,t,i=2){return Fp(e,t,i)}}class fl{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return fl.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];dc(e),fc(i,e);let s=e.length;t.forEach(dc);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,fc(i,t[c]);const l=Qp.triangulate(i,r);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function dc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Zo extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,l=Math.floor(i),c=Math.floor(r),a=l+1,u=c+1,d=e/l,m=t/c,p=[],g=[],v=[],h=[];for(let f=0;f<u;f++){const b=f*m-s;for(let y=0;y<a;y++){const _=y*d-o;g.push(_,-b,0),v.push(0,0,1),h.push(y/l),h.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<l;b++){const y=b+a*f,_=b+a*(f+1),A=b+1+a*(f+1),T=b+1+a*f;p.push(y,_,T),p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pr extends Dt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+l,Math.PI);let a=0;const u=[],d=new ae,m=new ae,p=[],g=[],v=[],h=[];for(let f=0;f<=i;f++){const b=[],y=f/i;let _=0;f===0&&s===0?_=.5/t:f===i&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(r+T*o)*Math.sin(s+y*l),d.y=e*Math.cos(s+y*l),d.z=e*Math.sin(r+T*o)*Math.sin(s+y*l),g.push(d.x,d.y,d.z),m.copy(d).normalize(),v.push(m.x,m.y,m.z),h.push(T+_,1-y),b.push(a++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){const y=u[f][b+1],_=u[f][b],A=u[f+1][b],T=u[f+1][b+1];(f!==0||s>0)&&p.push(y,_,T),(f!==i-1||c<Math.PI)&&p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class em extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tm extends mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nm extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class im extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class rm{constructor(e,t,i){const r=this;let o=!1,s=0,l=0,c;const a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,l),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,l),s===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return a.push(u,d),this},this.removeHandler=function(u){const d=a.indexOf(u);return d!==-1&&a.splice(d,2),this},this.getHandler=function(u){for(let d=0,m=a.length;d<m;d+=2){const p=a[d],g=a[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const om=new rm;class Ln{constructor(e){this.manager=e!==void 0?e:om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ln.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class am extends Error{constructor(e,t){super(e),this.response=t}}class Gu extends Ln{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Lr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:i,onError:r});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,c=this.responseType;fetch(s).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;const u=Vn[e],d=a.body.getReader(),m=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),p=m?parseInt(m):0,g=p!==0;let v=0;const h=new ReadableStream({start(f){b();function b(){d.read().then(({done:y,value:_})=>{if(y)f.close();else{v+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let T=0,C=u.length;T<C;T++){const D=u[T];D.onProgress&&D.onProgress(A)}f.enqueue(_),b()}},y=>{f.error(y)})}}});return new Response(h)}else throw new am(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(c){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return a.json();default:if(l==="")return a.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),m=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(m);return a.arrayBuffer().then(g=>p.decode(g))}}}).then(a=>{Lr.add(`file:${e}`,a);const u=Vn[e];delete Vn[e];for(let d=0,m=u.length;d<m;d++){const p=u[d];p.onLoad&&p.onLoad(a)}}).catch(a=>{const u=Vn[e];if(u===void 0)throw this.manager.itemError(e),a;delete Vn[e];for(let d=0,m=u.length;d<m;d++){const p=u[d];p.onError&&p.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ki=new WeakMap;class sm extends Ln{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Lr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=Ki.get(s);d===void 0&&(d=[],Ki.set(s,d)),d.push({onLoad:t,onError:r})}return s}const l=Br("img");function c(){u(),t&&t(this);const d=Ki.get(this)||[];for(let m=0;m<d.length;m++){const p=d[m];p.onLoad&&p.onLoad(this)}Ki.delete(this),o.manager.itemEnd(e)}function a(d){u(),r&&r(d),Lr.remove(`image:${e}`);const m=Ki.get(this)||[];for(let p=0;p<m.length;p++){const g=m[p];g.onError&&g.onError(d)}Ki.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",a,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Lr.add(`image:${e}`,l),o.manager.itemStart(e),l.src=e,l}}class lm extends Ln{constructor(e){super(e)}load(e,t,i,r){const o=new jt,s=new sm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Hu extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ha=new At,hc=new ae,pc=new ae;class cm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wu extends Lu{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=a*this.view.offsetX,s=o+a*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class um extends cm{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wa extends Hu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dm extends Hu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fm{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hm extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pm extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gc(n,e,t,i){const r=mm(i);switch(t){case bu:return n*e;case Eu:return n*e/r.components*r.byteLength;case il:return n*e/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case yu:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case al:return n*e*4/r.components*r.byteLength;case Fo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ps:case gs:return Math.max(n,16)*Math.max(e,8)/4;case hs:case ms:return Math.max(n,8)*Math.max(e,8)/2;case xs:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Es:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ms:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case As:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ws:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ls:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Is:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Os:case Ds:case Fs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ks:case Us:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bs:case zs:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(n){switch(n){case Nn:case gu:return{byteLength:1,components:1};case Dr:case xu:case pr:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Ai:case el:case Xn:return{byteLength:4,components:1};case vu:case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xu(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function gm(n){const e=new WeakMap;function t(l,c){const a=l.array,u=l.usage,d=a.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,a,u),l.onUploadCallback();let p;if(a instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=n.SHORT;else if(a instanceof Uint32Array)p=n.UNSIGNED_INT;else if(a instanceof Int32Array)p=n.INT;else if(a instanceof Int8Array)p=n.BYTE;else if(a instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:m,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,a){const u=c.array,d=c.updateRanges;if(n.bindBuffer(a,l),d.length===0)n.bufferSubData(a,0,u);else{d.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<d.length;p++){const g=d[m],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++m,d[m]=v)}d.length=m+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(a,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function s(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:r,remove:o,update:s}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`uniform sampler2D dfgLUT;
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
}`,g0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Ug=`#define PHONG
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
}`,Bg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Yg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:xm,alphahash_pars_fragment:vm,alphamap_fragment:_m,alphamap_pars_fragment:bm,alphatest_fragment:ym,alphatest_pars_fragment:Em,aomap_fragment:Sm,aomap_pars_fragment:Tm,batching_pars_vertex:Mm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:wm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Dm,color_fragment:Fm,color_pars_fragment:km,color_pars_vertex:Um,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:jm,colorspace_fragment:Km,colorspace_pars_fragment:Ym,envmap_fragment:qm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:c0,envmap_vertex:Qm,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:s0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:h0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:x0,lights_fragment_end:v0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:E0,map_fragment:S0,map_pars_fragment:T0,map_particle_fragment:M0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:w0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:I0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:D0,normal_pars_fragment:F0,normal_pars_vertex:k0,normal_vertex:U0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:j0,project_vertex:K0,dithering_fragment:Y0,dithering_pars_fragment:q0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:sg,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:hg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:xg,backgroundCube_vert:vg,backgroundCube_frag:_g,cube_vert:bg,cube_frag:yg,depth_vert:Eg,depth_frag:Sg,distanceRGBA_vert:Tg,distanceRGBA_frag:Mg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:wg,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Ig,meshlambert_frag:Ng,meshmatcap_vert:Og,meshmatcap_frag:Dg,meshnormal_vert:Fg,meshnormal_frag:kg,meshphong_vert:Ug,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Hg,points_vert:Wg,points_frag:Xg,shadow_vert:jg,shadow_frag:Kg,sprite_vert:Yg,sprite_frag:qg},Ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Cn={basic:{uniforms:qt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:qt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:qt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:qt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:qt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new it(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:qt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:qt([Ge.points,Ge.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:qt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:qt([Ge.common,Ge.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:qt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:qt([Ge.sprite,Ge.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:qt([Ge.common,Ge.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:qt([Ge.lights,Ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Cn.physical={uniforms:qt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Po={r:0,b:0,g:0},yi=new An,$g=new At;function Zg(n,e,t,i,r,o,s){const l=new it(0);let c=o===!0?0:1,a,u,d=null,m=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const A=g(y);A===null?f(l,c):A&&A.isColor&&(f(A,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(y,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Yo)?(u===void 0&&(u=new zt(new mr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:dr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(_.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(yi)),u.material.toneMapped=pt.getTransfer(A.colorSpace)!==_t,(d!==A||m!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,m=A.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(a===void 0&&(a=new zt(new Zo(2,2),new qn({name:"BackgroundMaterial",uniforms:dr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=A,a.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,a.material.toneMapped=pt.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),a.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||m!==A.version||p!==n.toneMapping)&&(a.material.needsUpdate=!0,d=A,m=A.version,p=n.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null))}function f(y,_){y.getRGB(Po,Pu(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,_,s)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(y,_=1){l.set(y),c=_,f(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(l,c)},render:v,addToRenderList:h,dispose:b}}function Jg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let o=r,s=!1;function l(E,w,L,P,I){let z=!1;const G=d(P,L,w);o!==G&&(o=G,a(o.object)),z=p(E,P,L,I),z&&g(E,P,L,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,_(E,w,L,P),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function a(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,w,L){const P=L.wireframe===!0;let I=i[E.id];I===void 0&&(I={},i[E.id]=I);let z=I[w.id];z===void 0&&(z={},I[w.id]=z);let G=z[P];return G===void 0&&(G=m(c()),z[P]=G),G}function m(E){const w=[],L=[],P=[];for(let I=0;I<t;I++)w[I]=0,L[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:P,object:E,attributes:{},index:null}}function p(E,w,L,P){const I=o.attributes,z=w.attributes;let G=0;const j=L.getAttributes();for(const W in j)if(j[W].location>=0){const se=I[W];let xe=z[W];if(xe===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;G++}return o.attributesNum!==G||o.index!==P}function g(E,w,L,P){const I={},z=w.attributes;let G=0;const j=L.getAttributes();for(const W in j)if(j[W].location>=0){let se=z[W];se===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),I[W]=xe,G++}o.attributes=I,o.attributesNum=G,o.index=P}function v(){const E=o.newAttributes;for(let w=0,L=E.length;w<L;w++)E[w]=0}function h(E){f(E,0)}function f(E,w){const L=o.newAttributes,P=o.enabledAttributes,I=o.attributeDivisors;L[E]=1,P[E]===0&&(n.enableVertexAttribArray(E),P[E]=1),I[E]!==w&&(n.vertexAttribDivisor(E,w),I[E]=w)}function b(){const E=o.newAttributes,w=o.enabledAttributes;for(let L=0,P=w.length;L<P;L++)w[L]!==E[L]&&(n.disableVertexAttribArray(L),w[L]=0)}function y(E,w,L,P,I,z,G){G===!0?n.vertexAttribIPointer(E,w,L,I,z):n.vertexAttribPointer(E,w,L,P,I,z)}function _(E,w,L,P){v();const I=P.attributes,z=L.getAttributes(),G=w.defaultAttributeValues;for(const j in z){const W=z[j];if(W.location>=0){let J=I[j];if(J===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){const se=J.normalized,xe=J.itemSize,ne=e.get(J);if(ne===void 0)continue;const ie=ne.buffer,Ee=ne.type,ee=ne.bytesPerElement,k=Ee===n.INT||Ee===n.UNSIGNED_INT||J.gpuType===el;if(J.isInterleavedBufferAttribute){const B=J.data,K=B.stride,Y=J.offset;if(B.isInstancedInterleavedBuffer){for(let re=0;re<W.locationSize;re++)f(W.location+re,B.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let re=0;re<W.locationSize;re++)h(W.location+re);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let re=0;re<W.locationSize;re++)y(W.location+re,xe/W.locationSize,Ee,se,K*ee,(Y+xe/W.locationSize*re)*ee,k)}else{if(J.isInstancedBufferAttribute){for(let B=0;B<W.locationSize;B++)f(W.location+B,J.meshPerAttribute);E.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let B=0;B<W.locationSize;B++)h(W.location+B);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let B=0;B<W.locationSize;B++)y(W.location+B,xe/W.locationSize,Ee,se,xe*ee,xe/W.locationSize*B*ee,k)}}else if(G!==void 0){const se=G[j];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(W.location,se);break;case 3:n.vertexAttrib3fv(W.location,se);break;case 4:n.vertexAttrib4fv(W.location,se);break;default:n.vertexAttrib1fv(W.location,se)}}}}b()}function A(){D();for(const E in i){const w=i[E];for(const L in w){const P=w[L];for(const I in P)u(P[I].object),delete P[I];delete w[L]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const w=i[E.id];for(const L in w){const P=w[L];for(const I in P)u(P[I].object),delete P[I];delete w[L]}delete i[E.id]}function C(E){for(const w in i){const L=i[w];if(L[E.id]===void 0)continue;const P=L[E.id];for(const I in P)u(P[I].object),delete P[I];delete L[E.id]}}function D(){S(),s=!0,o!==r&&(o=r,a(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:h,disableUnusedAttributes:b}}function Qg(n,e,t){let i;function r(a){i=a}function o(a,u){n.drawArrays(i,a,u),t.update(u,i,1)}function s(a,u,d){d!==0&&(n.drawArraysInstanced(i,a,u,d),t.update(u,i,d))}function l(a,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(a,u,d,m){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<a.length;g++)s(a[g],u[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(i,a,0,u,0,m,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*m[v];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function ex(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const D=C===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const u=c(a);u!==a&&(nt("WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function tx(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new ri,l=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const p=d.length!==0||m||i!==0||r;return r=m,i=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,m){t=u(d,m,0)},this.setState=function(d,m,p){const g=d.clippingPlanes,v=d.clipIntersection,h=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||o&&!h)o?u(null):a();else{const b=o?0:i,y=b*4;let _=f.clippingState||null;c.value=_,_=u(g,m,y,p);for(let A=0;A!==y;++A)_[A]=t[A];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,m,p,g){const v=d!==null?d.length:0;let h=null;if(v!==0){if(h=c.value,g!==!0||h===null){const f=p+v*4,b=m.matrixWorldInverse;l.getNormalMatrix(b),(h===null||h.length<f)&&(h=new Float32Array(f));for(let y=0,_=p;y!==v;++y,_+=4)s.copy(d[y]).applyMatrix4(b,l),s.normal.toArray(h,_),h[_+3]=s.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function nx(n){let e=new WeakMap;function t(s,l){return l===us?s.mapping=lr:l===ds&&(s.mapping=cr),s}function i(s){if(s&&s.isTexture){const l=s.mapping;if(l===us||l===ds)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const a=new wp(c.height);return a.fromEquirectangularTexture(n,s),e.set(s,a),s.addEventListener("dispose",r),t(a.texture,s.mapping)}else return null}}return s}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const ui=4,xc=[.125,.215,.35,.446,.526,.582],Ti=20,ix=256,Mr=new Wu,vc=new it;let Xa=null,ja=0,Ka=0,Ya=!1;const rx=new ae;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:s=256,position:l=rx}=o;Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,ja,Ka),this._renderer.xr.enabled=Ya,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:pr,format:xn,colorSpace:ur,depthBuffer:!1},r=bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ox(o)),this._blurMaterial=sx(o,e,t)}return r}_compileMaterial(e){const t=new zt(new Dt,e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,i,r,o){const c=new mn(90,1,t,i),a=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,p=d.toneMapping;d.getClearColor(vc),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new mr,new Qi({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,h=v.material;let f=!1;const b=e.background;b?b.isColor&&(h.color.copy(b),e.background=null,f=!0):(h.color.copy(vc),f=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,a[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[y],o.y,o.z)):_===1?(c.up.set(0,0,a[y]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[y],o.z)):(c.up.set(0,a[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[y]));const A=this._cubeSize;Yi(r,_*A,y>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;Yi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Mr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget;if(this._ggxMaterial===null){const b=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=ax(this._lodMax,b,y)}const s=this._ggxMaterial,l=this._lodMeshes[i];l.material=s;const c=s.uniforms,a=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(a*a-u*u),m=.05+a*.95,p=d*m,{_lodMax:g}=this,v=this._sizeLods[i],h=3*v*(i>g-ui?i-g+ui:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Yi(o,h,f,3*v,2*v),r.setRenderTarget(o),r.render(l,Mr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,Yi(e,h,f,3*v,2*v),r.setRenderTarget(e),r.render(l,Mr)}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,l){const c=this._renderer,a=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=a;const m=a.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),v=o/g,h=isFinite(o)?1+Math.floor(u*v):Ti;h>Ti&&nt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ti}`);const f=[];let b=0;for(let C=0;C<Ti;++C){const D=C/v,S=Math.exp(-D*D/2);f.push(S),C===0?b+=S:C<h&&(b+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;m.envMap.value=e.texture,m.samples.value=h,m.weights.value=f,m.latitudinal.value=s==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:y}=this;m.dTheta.value=g,m.mipInt.value=y-i;const _=this._sizeLods[r],A=3*_*(r>y-ui?r-y+ui:0),T=4*(this._cubeSize-_);Yi(t,A,T,3*_,2*_),c.setRenderTarget(t),c.render(d,Mr)}}function ox(n){const e=[],t=[],i=[];let r=n;const o=n-ui+1+xc.length;for(let s=0;s<o;s++){const l=Math.pow(2,r);e.push(l);let c=1/l;s>n-ui?c=xc[s-n+ui-1]:s===0&&(c=0),t.push(c);const a=1/(l-2),u=-a,d=1+a,m=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,h=2,f=1,b=new Float32Array(v*g*p),y=new Float32Array(h*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,D=T>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(S,v*g*T),y.set(m,h*g*T);const E=[T,T,T,T,T,T];_.set(E,f*g*T)}const A=new Dt;A.setAttribute("position",new on(b,v)),A.setAttribute("uv",new on(y,h)),A.setAttribute("faceIndex",new on(_,f)),i.push(new zt(A,null)),r>ui&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function bc(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ax(n,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function sx(n,e,t){const i=new Float32Array(Ti),r=new ae(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function yc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ec(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function lx(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,a=c===us||c===ds,u=c===lr||c===cr;if(a||u){let d=e.get(l);const m=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new _c(n)),d=a?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const p=l.image;return a&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new _c(n)),d=a?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",o),d.texture):null}}}return l}function r(l){let c=0;const a=6;for(let u=0;u<a;u++)l[u]!==void 0&&c++;return c===a}function o(l){const c=l.target;c.removeEventListener("dispose",o);const a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zr("WebGLRenderer: "+i+" extension not supported."),r}}}function ux(n,e,t,i){const r={},o=new WeakMap;function s(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",s),delete r[m.id];const p=o.get(m);p&&(e.remove(p),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(d,m){return r[m.id]===!0||(m.addEventListener("dispose",s),r[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const p in m)e.update(m[p],n.ARRAY_BUFFER)}function a(d){const m=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let y=0,_=b.length;y<_;y+=3){const A=b[y+0],T=b[y+1],C=b[y+2];m.push(A,T,T,C,C,A)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const A=y+0,T=y+1,C=y+2;m.push(A,T,T,C,C,A)}}else return;const h=new(Tu(m)?Cu:wu)(m,1);h.version=v;const f=o.get(d);f&&e.remove(f),o.set(d,h)}function u(d){const m=o.get(d);if(m){const p=d.index;p!==null&&m.version<p.version&&a(d)}else a(d);return o.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function dx(n,e,t){let i;function r(m){i=m}let o,s;function l(m){o=m.type,s=m.bytesPerElement}function c(m,p){n.drawElements(i,p,o,m*s),t.update(p,i,1)}function a(m,p,g){g!==0&&(n.drawElementsInstanced(i,p,o,m*s,g),t.update(p,i,g))}function u(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,m,0,g);let h=0;for(let f=0;f<g;f++)h+=p[f];t.update(h,i,1)}function d(m,p,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<m.length;f++)a(m[f]/s,p[f],v[f]);else{h.multiDrawElementsInstancedWEBGL(i,p,0,o,m,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*v[b];t.update(f,i,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,l){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=l*(o/3);break;case n.LINES:t.lines+=l*(o/2);break;case n.LINE_STRIP:t.lines+=l*(o-1);break;case n.LINE_LOOP:t.lines+=l*o;break;case n.POINTS:t.points+=l*o;break;default:It("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hx(n,e,t){const i=new WeakMap,r=new Lt;function o(s,l,c){const a=s.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let m=i.get(l);if(m===void 0||m.count!==d){let S=function(){C.dispose(),i.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();const p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=l.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*A*4*d),C=new Mu(T,_,A,d);C.type=Xn,C.needsUpdate=!0;const D=y*4;for(let E=0;E<d;E++){const w=h[E],L=f[E],P=b[E],I=_*A*4*E;for(let z=0;z<w.count;z++){const G=z*D;p===!0&&(r.fromBufferAttribute(w,z),T[I+G+0]=r.x,T[I+G+1]=r.y,T[I+G+2]=r.z,T[I+G+3]=0),g===!0&&(r.fromBufferAttribute(L,z),T[I+G+4]=r.x,T[I+G+5]=r.y,T[I+G+6]=r.z,T[I+G+7]=0),v===!0&&(r.fromBufferAttribute(P,z),T[I+G+8]=r.x,T[I+G+9]=r.y,T[I+G+10]=r.z,T[I+G+11]=P.itemSize===4?r.w:1)}}m={count:d,texture:C,size:new Je(_,A)},i.set(l,m),l.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let v=0;v<a.length;v++)p+=a[v];const g=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:o}}function px(n,e,t,i){let r=new WeakMap;function o(c){const a=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==a&&(e.update(d),r.set(d,a)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==a&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,a))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==a&&(m.update(),r.set(m,a))}return d}function s(){r=new WeakMap}function l(c){const a=c.target;a.removeEventListener("dispose",l),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:o,dispose:s}}const ju=new jt,Sc=new Fu(1,1),Ku=new Mu,Yu=new dp,qu=new Iu,Tc=[],Mc=[],Ac=new Float32Array(16),Rc=new Float32Array(9),wc=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Tc[r];if(o===void 0&&(o=new Float32Array(r),Tc[r]=o),e!==0){i.toArray(o,0);for(let s=1,l=0;s!==e;++s)l+=t,n[s].toArray(o,l)}return o}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),Ut(t,i)}}function bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),Ut(t,i)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;Ac.set(i),n.uniformMatrix4fv(this.addr,!1,Ac),Ut(t,i)}}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=Su,o=Sc):o=ju,t.setTexture2D(e||o,r)}function Lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yu,r)}function Ix(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qu,r)}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ku,r)}function Ox(n){switch(n){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return vx;case 35674:return _x;case 35675:return bx;case 35676:return yx;case 5124:case 35670:return Ex;case 35667:case 35671:return Sx;case 35668:case 35672:return Tx;case 35669:case 35673:return Mx;case 5125:return Ax;case 36294:return Rx;case 36295:return wx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Nx}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Fx(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function kx(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ux(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Bx(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zx(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vx(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gx(n,e){n.uniform1iv(this.addr,e)}function Hx(n,e){n.uniform2iv(this.addr,e)}function Wx(n,e){n.uniform3iv(this.addr,e)}function Xx(n,e){n.uniform4iv(this.addr,e)}function jx(n,e){n.uniform1uiv(this.addr,e)}function Kx(n,e){n.uniform2uiv(this.addr,e)}function Yx(n,e){n.uniform3uiv(this.addr,e)}function qx(n,e){n.uniform4uiv(this.addr,e)}function $x(n,e,t){const i=this.cache,r=e.length,o=Qo(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||ju,o[s])}function Zx(n,e,t){const i=this.cache,r=e.length,o=Qo(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Yu,o[s])}function Jx(n,e,t){const i=this.cache,r=e.length,o=Qo(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||qu,o[s])}function Qx(n,e,t){const i=this.cache,r=e.length,o=Qo(t,r);kt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ku,o[s])}function ev(n){switch(n){case 5126:return Dx;case 35664:return Fx;case 35665:return kx;case 35666:return Ux;case 35674:return Bx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Hx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return jx;case 36294:return Kx;case 36295:return Yx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Qx}}class tv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ox(t.type)}}class nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ev(t.type)}}class iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const l=r[o];l.setValue(e,t[l.id],i)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function rv(n,e,t){const i=n.name,r=i.length;for(qa.lastIndex=0;;){const o=qa.exec(i),s=qa.lastIndex;let l=o[1];const c=o[2]==="]",a=o[3];if(c&&(l=l|0),a===void 0||a==="["&&s+2===r){Cc(t,a===void 0?new tv(l,n,e):new nv(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new iv(l),Cc(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);rv(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const l=t[o],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ov=37297;let av=0;function sv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const l=s+1;i.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return i.join(`
`)}const Lc=new at;function lv(n){pt._getMatrix(Lc,pt.workingColorSpace,n);const e=`mat3( ${Lc.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Ho:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ic(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+sv(n.getShaderSource(e),l)}else return o}function cv(n,e){const t=lv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uv(n,e){let t;switch(e){case Uh:t="Linear";break;case Bh:t="Reinhard";break;case zh:t="Cineon";break;case Vh:t="ACESFilmic";break;case Hh:t="AgX";break;case Wh:t="Neutral";break;case Gh:t="Custom";break;default:nt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lo=new ae;function dv(){pt.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function hv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:l}}return t}function Rr(n){return n!==""}function Nc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(n){return n.replace(mv,xv)}const gv=new Map;function xv(n,e){let t=st[e];if(t===void 0){const i=gv.get(e);if(i!==void 0)t=st[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xs(t)}const vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(n){return n.replace(vv,_v)}function _v(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Fc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function yv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Sv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qs:e="ENVMAP_BLENDING_MULTIPLY";break;case Fh:e="ENVMAP_BLENDING_MIX";break;case kh:e="ENVMAP_BLENDING_ADD";break}return e}function Tv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mv(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,l=t.fragmentShader;const c=bv(t),a=yv(t),u=Ev(t),d=Sv(t),m=Tv(t),p=fv(t),g=hv(o),v=r.createProgram();let h,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(h=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?st.tonemapping_pars_fragment:"",t.toneMapping!==di?uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,cv("linearToOutputTexel",t.outputColorSpace),dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),s=Xs(s),s=Nc(s,t),s=Oc(s,t),l=Xs(l),l=Nc(l,t),l=Oc(l,t),s=Dc(s),l=Dc(l),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+h+s,_=b+f+l,A=Pc(r,r.VERTEX_SHADER,y),T=Pc(r,r.FRAGMENT_SHADER,_);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(A)||"",I=r.getShaderInfoLog(T)||"",z=L.trim(),G=P.trim(),j=I.trim();let W=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const se=Ic(r,A,"vertex"),xe=Ic(r,T,"fragment");It("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+se+`
`+xe)}else z!==""?nt("WebGLProgram: Program Info Log:",z):(G===""||j==="")&&(J=!1);J&&(w.diagnostics={runnable:W,programLog:z,vertexShader:{log:G,prefix:h},fragmentShader:{log:j,prefix:f}})}r.deleteShader(A),r.deleteShader(T),D=new Vo(r,v),S=pv(r,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,ov)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let Av=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wv(e),t.set(e,i)),i}}class wv{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}}function Cv(n,e,t,i,r,o,s){const l=new Au,c=new Rv,a=new Set,u=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return a.add(S),S===0?"uv":`uv${S}`}function h(S,E,w,L,P){const I=L.fog,z=P.geometry,G=S.isMeshStandardMaterial?L.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),W=j&&j.mapping===Yo?j.image.height:null,J=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&nt("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=se!==void 0?se.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let ie,Ee,ee,k;if(J){const Me=Cn[J];ie=Me.vertexShader,Ee=Me.fragmentShader}else ie=S.vertexShader,Ee=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),k=c.getFragmentShaderID(S);const B=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),Y=P.isInstancedMesh===!0,re=P.isBatchedMesh===!0,pe=!!S.map,_e=!!S.matcap,Pe=!!j,Xe=!!S.aoMap,V=!!S.lightMap,Ne=!!S.bumpMap,Q=!!S.normalMap,he=!!S.displacementMap,te=!!S.emissiveMap,Se=!!S.metalnessMap,Te=!!S.roughnessMap,ke=S.anisotropy>0,M=S.clearcoat>0,x=S.dispersion>0,R=S.iridescence>0,F=S.sheen>0,O=S.transmission>0,U=ke&&!!S.anisotropyMap,$=M&&!!S.clearcoatMap,q=M&&!!S.clearcoatNormalMap,ce=M&&!!S.clearcoatRoughnessMap,fe=R&&!!S.iridescenceMap,oe=R&&!!S.iridescenceThicknessMap,ve=F&&!!S.sheenColorMap,Ue=F&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,Le=!!S.specularColorMap,Fe=!!S.specularIntensityMap,H=O&&!!S.transmissionMap,we=O&&!!S.thicknessMap,Ae=!!S.gradientMap,ye=!!S.alphaMap,X=S.alphaTest>0,Z=!!S.alphaHash,be=!!S.extensions;let Oe=di;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Ce={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:Ee,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:re,batchingColor:re&&P._colorsTexture!==null,instancing:Y,instancingColor:Y&&P.instanceColor!==null,instancingMorph:Y&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ur,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:_e,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:W,aoMap:Xe,lightMap:V,bumpMap:Ne,normalMap:Q,displacementMap:m&&he,emissiveMap:te,normalMapObjectSpace:Q&&S.normalMapType===Yh,normalMapTangentSpace:Q&&S.normalMapType===sl,metalnessMap:Se,roughnessMap:Te,anisotropy:ke,anisotropyMap:U,clearcoat:M,clearcoatMap:$,clearcoatNormalMap:q,clearcoatRoughnessMap:ce,dispersion:x,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:ve,sheenRoughnessMap:Ue,specularMap:Ve,specularColorMap:Le,specularIntensityMap:Fe,transmission:O,transmissionMap:H,thicknessMap:we,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===tr&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:X,alphaHash:Z,combine:S.combine,mapUv:pe&&v(S.map.channel),aoMapUv:Xe&&v(S.aoMap.channel),lightMapUv:V&&v(S.lightMap.channel),bumpMapUv:Ne&&v(S.bumpMap.channel),normalMapUv:Q&&v(S.normalMap.channel),displacementMapUv:he&&v(S.displacementMap.channel),emissiveMapUv:te&&v(S.emissiveMap.channel),metalnessMapUv:Se&&v(S.metalnessMap.channel),roughnessMapUv:Te&&v(S.roughnessMap.channel),anisotropyMapUv:U&&v(S.anisotropyMap.channel),clearcoatMapUv:$&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:q&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(S.sheenRoughnessMap.channel),specularMapUv:Ve&&v(S.specularMap.channel),specularColorMapUv:Le&&v(S.specularColorMap.channel),specularIntensityMapUv:Fe&&v(S.specularIntensityMap.channel),transmissionMapUv:H&&v(S.transmissionMap.channel),thicknessMapUv:we&&v(S.thicknessMap.channel),alphaMapUv:ye&&v(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(pe||ye),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=a.has(1),Ce.vertexUv2s=a.has(2),Ce.vertexUv3s=a.has(3),a.clear(),Ce}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)E.push(w),E.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(b(E,S),y(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function b(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),E.gradientMap&&l.enable(22),S.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reversedDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),S.push(l.mask)}function _(S){const E=g[S.type];let w;if(E){const L=Cn[E];w=Tp.clone(L.uniforms)}else w=S.uniforms;return w}function A(S,E){let w;for(let L=0,P=u.length;L<P;L++){const I=u[L];if(I.cacheKey===E){w=I,++w.usedTimes;break}}return w===void 0&&(w=new Mv(n,E,S,o),u.push(w)),w}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:D}}function Pv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let l=n.get(s);return l===void 0&&(l={},n.set(s,l)),l}function i(s){n.delete(s)}function r(s,l,c){n.get(s)[l]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function Lv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uc(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,m,p,g,v,h){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:m,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:h},n[e]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=h),e++,f}function l(d,m,p,g,v,h){const f=s(d,m,p,g,v,h);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,m,p,g,v,h){const f=s(d,m,p,g,v,h);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function a(d,m){t.length>1&&t.sort(d||Lv),i.length>1&&i.sort(m||kc),r.length>1&&r.sort(m||kc)}function u(){for(let d=e,m=n.length;d<m;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:u,sort:a}}function Iv(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Uc,n.set(i,[s])):r>=o.length?(s=new Uc,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new it};break;case"SpotLight":t={position:new ae,direction:new ae,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function Ov(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dv=0;function Fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kv(n){const e=new Nv,t=Ov(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new ae);const r=new ae,o=new At,s=new At;function l(a){let u=0,d=0,m=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,h=0,f=0,b=0,y=0,_=0,A=0,T=0,C=0;a.sort(Fv);for(let S=0,E=a.length;S<E;S++){const w=a[S],L=w.color,P=w.intensity,I=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*P,d+=L.g*P,m+=L.b*P;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],P);C++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=w.shadow.matrix,b++}i.directional[p]=G,p++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(L).multiplyScalar(P),G.distance=I,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[v]=G;const j=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,j.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[v]=j.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=z,_++}v++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(L).multiplyScalar(P),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[h]=G,h++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const j=w.shadow,W=t.get(w);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=w.shadow.matrix,y++}i.point[g]=G,g++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(P),G.groundColor.copy(w.groundColor).multiplyScalar(P),i.hemi[f]=G,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==h||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=h,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=h,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=C,i.version=Dv++)}function c(a,u){let d=0,m=0,p=0,g=0,v=0;const h=u.matrixWorldInverse;for(let f=0,b=a.length;f<b;f++){const y=a[f];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(h),d++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(h),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(h),p++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(h),s.identity(),o.copy(y.matrixWorld),o.premultiply(h),s.extractRotation(o),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const _=i.point[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(h),v++}}}return{setup:l,setupView:c,state:i}}function Bc(n){const e=new kv(n),t=[],i=[];function r(u){a.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function l(){e.setup(t)}function c(u){e.setupView(t,u)}const a={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Uv(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let l;return s===void 0?(l=new Bc(n),e.set(r,[l])):o>=s.length?(l=new Bc(n),s.push(l)):l=s[o],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
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
}`;function Vv(n,e,t){let i=new ul;const r=new Je,o=new Je,s=new Lt,l=new nm({depthPacking:Kh}),c=new im,a={},u=t.maxTextureSize,d={[Yn]:Xt,[Xt]:Yn,[Tn]:Tn},m=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zt(g,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let f=this.type;this.render=function(T,C,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),L=n.state;L.setBlending(jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=f!==Hn&&this.type===Hn,I=f===Hn&&this.type!==Hn;for(let z=0,G=T.length;z<G;z++){const j=T[z],W=j.shadow;if(W===void 0){nt("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const J=W.getFrameExtents();if(r.multiply(J),o.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/J.x),r.x=o.x*J.x,W.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/J.y),r.y=o.y*J.y,W.mapSize.y=o.y)),W.map===null||P===!0||I===!0){const xe=this.type!==Hn?{minFilter:dn,magFilter:dn}:{};W.map!==null&&W.map.dispose(),W.map=new Ri(r.x,r.y,xe),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const se=W.getViewportCount();for(let xe=0;xe<se;xe++){const ne=W.getViewport(xe);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),L.viewport(s),W.updateMatrices(j,xe),i=W.getFrustum(),_(C,D,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&b(W,D),W.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(S,E,w)};function b(T,C){const D=e.update(v);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ri(r.x,r.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,D,m,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,D,p,v,null)}function y(T,C,D,S){let E=null;const w=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)E=w;else if(E=D.isPointLight===!0?c:l,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=E.uuid,P=C.uuid;let I=a[L];I===void 0&&(I={},a[L]=I);let z=I[P];z===void 0&&(z=E.clone(),I[P]=z,C.addEventListener("dispose",A)),E=z}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Hn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=n.properties.get(E);L.light=D}return E}function _(T,C,D,S,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Hn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const P=e.update(T),I=T.material;if(Array.isArray(I)){const z=P.groups;for(let G=0,j=z.length;G<j;G++){const W=z[G],J=I[W.materialIndex];if(J&&J.visible){const se=y(T,J,S,E);T.onBeforeShadow(n,T,C,D,P,se,W),n.renderBufferDirect(D,null,P,se,T,W),T.onAfterShadow(n,T,C,D,P,se,W)}}}else if(I.visible){const z=y(T,I,S,E);T.onBeforeShadow(n,T,C,D,P,z,null),n.renderBufferDirect(D,null,P,z,T,null),T.onAfterShadow(n,T,C,D,P,z,null)}}const L=T.children;for(let P=0,I=L.length;P<I;P++)_(L[P],C,D,S,E)}function A(T){T.target.removeEventListener("dispose",A);for(const D in a){const S=a[D],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Gv={[is]:rs,[os]:ls,[as]:cs,[sr]:ss,[rs]:is,[ls]:os,[cs]:as,[ss]:sr};function Hv(n,e){function t(){let H=!1;const we=new Lt;let Ae=null;const ye=new Lt(0,0,0,0);return{setMask:function(X){Ae!==X&&!H&&(n.colorMask(X,X,X,X),Ae=X)},setLocked:function(X){H=X},setClear:function(X,Z,be,Oe,Ce){Ce===!0&&(X*=Oe,Z*=Oe,be*=Oe),we.set(X,Z,be,Oe),ye.equals(we)===!1&&(n.clearColor(X,Z,be,Oe),ye.copy(we))},reset:function(){H=!1,Ae=null,ye.set(-1,0,0,0)}}}function i(){let H=!1,we=!1,Ae=null,ye=null,X=null;return{setReversed:function(Z){if(we!==Z){const be=e.get("EXT_clip_control");Z?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),we=Z;const Oe=X;X=null,this.setClear(Oe)}},getReversed:function(){return we},setTest:function(Z){Z?B(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(Z){Ae!==Z&&!H&&(n.depthMask(Z),Ae=Z)},setFunc:function(Z){if(we&&(Z=Gv[Z]),ye!==Z){switch(Z){case is:n.depthFunc(n.NEVER);break;case rs:n.depthFunc(n.ALWAYS);break;case os:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case as:n.depthFunc(n.EQUAL);break;case ss:n.depthFunc(n.GEQUAL);break;case ls:n.depthFunc(n.GREATER);break;case cs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=Z}},setLocked:function(Z){H=Z},setClear:function(Z){X!==Z&&(we&&(Z=1-Z),n.clearDepth(Z),X=Z)},reset:function(){H=!1,Ae=null,ye=null,X=null,we=!1}}}function r(){let H=!1,we=null,Ae=null,ye=null,X=null,Z=null,be=null,Oe=null,Ce=null;return{setTest:function(Me){H||(Me?B(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(Me){we!==Me&&!H&&(n.stencilMask(Me),we=Me)},setFunc:function(Me,Re,Ie){(Ae!==Me||ye!==Re||X!==Ie)&&(n.stencilFunc(Me,Re,Ie),Ae=Me,ye=Re,X=Ie)},setOp:function(Me,Re,Ie){(Z!==Me||be!==Re||Oe!==Ie)&&(n.stencilOp(Me,Re,Ie),Z=Me,be=Re,Oe=Ie)},setLocked:function(Me){H=Me},setClear:function(Me){Ce!==Me&&(n.clearStencil(Me),Ce=Me)},reset:function(){H=!1,we=null,Ae=null,ye=null,X=null,Z=null,be=null,Oe=null,Ce=null}}}const o=new t,s=new i,l=new r,c=new WeakMap,a=new WeakMap;let u={},d={},m=new WeakMap,p=[],g=null,v=!1,h=null,f=null,b=null,y=null,_=null,A=null,T=null,C=new it(0,0,0),D=0,S=!1,E=null,w=null,L=null,P=null,I=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let J=null,se={};const xe=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),ie=new Lt().fromArray(xe),Ee=new Lt().fromArray(ne);function ee(H,we,Ae,ye){const X=new Uint8Array(4),Z=n.createTexture();n.bindTexture(H,Z),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<Ae;be++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,X):n.texImage2D(we+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,X);return Z}const k={};k[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),l.setClear(0),B(n.DEPTH_TEST),s.setFunc(sr),Ne(!1),Q(Nl),B(n.CULL_FACE),Xe(jn);function B(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function K(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Y(H,we){return d[H]!==we?(n.bindFramebuffer(H,we),d[H]=we,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=we),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=we),!0):!1}function re(H,we){let Ae=p,ye=!1;if(H){Ae=m.get(we),Ae===void 0&&(Ae=[],m.set(we,Ae));const X=H.textures;if(Ae.length!==X.length||Ae[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,be=X.length;Z<be;Z++)Ae[Z]=n.COLOR_ATTACHMENT0+Z;Ae.length=X.length,ye=!0}}else Ae[0]!==n.BACK&&(Ae[0]=n.BACK,ye=!0);ye&&n.drawBuffers(Ae)}function pe(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const _e={[Si]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[bh]:n.FUNC_REVERSE_SUBTRACT};_e[yh]=n.MIN,_e[Eh]=n.MAX;const Pe={[Sh]:n.ZERO,[Th]:n.ONE,[Mh]:n.SRC_COLOR,[ts]:n.SRC_ALPHA,[Lh]:n.SRC_ALPHA_SATURATE,[Ch]:n.DST_COLOR,[Rh]:n.DST_ALPHA,[Ah]:n.ONE_MINUS_SRC_COLOR,[ns]:n.ONE_MINUS_SRC_ALPHA,[Ph]:n.ONE_MINUS_DST_COLOR,[wh]:n.ONE_MINUS_DST_ALPHA,[Ih]:n.CONSTANT_COLOR,[Nh]:n.ONE_MINUS_CONSTANT_COLOR,[Oh]:n.CONSTANT_ALPHA,[Dh]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(H,we,Ae,ye,X,Z,be,Oe,Ce,Me){if(H===jn){v===!0&&(K(n.BLEND),v=!1);return}if(v===!1&&(B(n.BLEND),v=!0),H!==vh){if(H!==h||Me!==S){if((f!==Si||_!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,_=Si),Me)switch(H){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",H);break}else switch(H){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dl:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",H);break}b=null,y=null,A=null,T=null,C.set(0,0,0),D=0,h=H,S=Me}return}X=X||we,Z=Z||Ae,be=be||ye,(we!==f||X!==_)&&(n.blendEquationSeparate(_e[we],_e[X]),f=we,_=X),(Ae!==b||ye!==y||Z!==A||be!==T)&&(n.blendFuncSeparate(Pe[Ae],Pe[ye],Pe[Z],Pe[be]),b=Ae,y=ye,A=Z,T=be),(Oe.equals(C)===!1||Ce!==D)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Ce),C.copy(Oe),D=Ce),h=H,S=!1}function V(H,we){H.side===Tn?K(n.CULL_FACE):B(n.CULL_FACE);let Ae=H.side===Xt;we&&(Ae=!Ae),Ne(Ae),H.blending===tr&&H.transparent===!1?Xe(jn):Xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),o.setMask(H.colorWrite);const ye=H.stencilWrite;l.setTest(ye),ye&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){E!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),E=H)}function Q(H){H!==mh?(B(n.CULL_FACE),H!==w&&(H===Nl?n.cullFace(n.BACK):H===gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),w=H}function he(H){H!==L&&(G&&n.lineWidth(H),L=H)}function te(H,we,Ae){H?(B(n.POLYGON_OFFSET_FILL),(P!==we||I!==Ae)&&(n.polygonOffset(we,Ae),P=we,I=Ae)):K(n.POLYGON_OFFSET_FILL)}function Se(H){H?B(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function Te(H){H===void 0&&(H=n.TEXTURE0+z-1),J!==H&&(n.activeTexture(H),J=H)}function ke(H,we,Ae){Ae===void 0&&(J===null?Ae=n.TEXTURE0+z-1:Ae=J);let ye=se[Ae];ye===void 0&&(ye={type:void 0,texture:void 0},se[Ae]=ye),(ye.type!==H||ye.texture!==we)&&(J!==Ae&&(n.activeTexture(Ae),J=Ae),n.bindTexture(H,we||k[H]),ye.type=H,ye.texture=we)}function M(){const H=se[J];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function F(){try{n.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function O(){try{n.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function U(){try{n.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function q(){try{n.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ce(){try{n.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function fe(){try{n.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function oe(){try{n.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ve(H){ie.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function Ue(H){Ee.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ee.copy(H))}function Ve(H,we){let Ae=a.get(we);Ae===void 0&&(Ae=new WeakMap,a.set(we,Ae));let ye=Ae.get(H);ye===void 0&&(ye=n.getUniformBlockIndex(we,H.name),Ae.set(H,ye))}function Le(H,we){const ye=a.get(we).get(H);c.get(we)!==ye&&(n.uniformBlockBinding(we,ye,H.__bindingPointIndex),c.set(we,ye))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,se={},d={},m=new WeakMap,p=[],g=null,v=!1,h=null,f=null,b=null,y=null,_=null,A=null,T=null,C=new it(0,0,0),D=0,S=!1,E=null,w=null,L=null,P=null,I=null,ie.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),l.reset()}return{buffers:{color:o,depth:s,stencil:l},enable:B,disable:K,bindFramebuffer:Y,drawBuffers:re,useProgram:pe,setBlending:Xe,setMaterial:V,setFlipSided:Ne,setCullFace:Q,setLineWidth:he,setPolygonOffset:te,setScissorTest:Se,activeTexture:Te,bindTexture:ke,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:fe,texImage3D:oe,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:q,texStorage3D:ce,texSubImage2D:F,texSubImage3D:O,compressedTexSubImage2D:U,compressedTexSubImage3D:$,scissor:ve,viewport:Ue,reset:Fe}}function Wv(n,e,t,i,r,o,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Je,u=new WeakMap;let d;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return p?new OffscreenCanvas(M,x):Br("canvas")}function v(M,x,R){let F=1;const O=ke(M);if((O.width>R||O.height>R)&&(F=R/Math.max(O.width,O.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const U=Math.floor(F*O.width),$=Math.floor(F*O.height);d===void 0&&(d=g(U,$));const q=x?g(U,$):d;return q.width=U,q.height=$,q.getContext("2d").drawImage(M,0,0,U,$),nt("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+U+"x"+$+")."),q}else return"data"in M&&nt("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),M;return M}function h(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,x,R,F,O=!1){if(M!==null){if(n[M]!==void 0)return n[M];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let U=x;if(x===n.RED&&(R===n.FLOAT&&(U=n.R32F),R===n.HALF_FLOAT&&(U=n.R16F),R===n.UNSIGNED_BYTE&&(U=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.R8UI),R===n.UNSIGNED_SHORT&&(U=n.R16UI),R===n.UNSIGNED_INT&&(U=n.R32UI),R===n.BYTE&&(U=n.R8I),R===n.SHORT&&(U=n.R16I),R===n.INT&&(U=n.R32I)),x===n.RG&&(R===n.FLOAT&&(U=n.RG32F),R===n.HALF_FLOAT&&(U=n.RG16F),R===n.UNSIGNED_BYTE&&(U=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RG8UI),R===n.UNSIGNED_SHORT&&(U=n.RG16UI),R===n.UNSIGNED_INT&&(U=n.RG32UI),R===n.BYTE&&(U=n.RG8I),R===n.SHORT&&(U=n.RG16I),R===n.INT&&(U=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RGB8UI),R===n.UNSIGNED_SHORT&&(U=n.RGB16UI),R===n.UNSIGNED_INT&&(U=n.RGB32UI),R===n.BYTE&&(U=n.RGB8I),R===n.SHORT&&(U=n.RGB16I),R===n.INT&&(U=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),R===n.UNSIGNED_INT&&(U=n.RGBA32UI),R===n.BYTE&&(U=n.RGBA8I),R===n.SHORT&&(U=n.RGBA16I),R===n.INT&&(U=n.RGBA32I)),x===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(U=n.R11F_G11F_B10F)),x===n.RGBA){const $=O?Ho:pt.getTransfer(F);R===n.FLOAT&&(U=n.RGBA32F),R===n.HALF_FLOAT&&(U=n.RGBA16F),R===n.UNSIGNED_BYTE&&(U=$===_t?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function _(M,x){let R;return M?x===null||x===Ai||x===Fr?R=n.DEPTH24_STENCIL8:x===Xn?R=n.DEPTH32F_STENCIL8:x===Dr&&(R=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===Fr?R=n.DEPTH_COMPONENT24:x===Xn?R=n.DEPTH_COMPONENT32F:x===Dr&&(R=n.DEPTH_COMPONENT16),R}function A(M,x){return h(M)===!0||M.isFramebufferTexture&&M.minFilter!==dn&&M.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function T(M){const x=M.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function C(M){const x=M.target;x.removeEventListener("dispose",C),E(x)}function D(M){const x=i.get(M);if(x.__webglInit===void 0)return;const R=M.source,F=m.get(R);if(F){const O=F[x.__cacheKey];O.usedTimes--,O.usedTimes===0&&S(M),Object.keys(F).length===0&&m.delete(R)}i.remove(M)}function S(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const R=M.source,F=m.get(R);delete F[x.__cacheKey],s.memory.textures--}function E(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let O=0;O<x.__webglFramebuffer[F].length;O++)n.deleteFramebuffer(x.__webglFramebuffer[F][O]);else n.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)n.deleteFramebuffer(x.__webglFramebuffer[F]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const R=M.textures;for(let F=0,O=R.length;F<O;F++){const U=i.get(R[F]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),s.memory.textures--),i.remove(R[F])}i.remove(M)}let w=0;function L(){w=0}function P(){const M=w;return M>=r.maxTextures&&nt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),w+=1,M}function I(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function z(M,x){const R=i.get(M);if(M.isVideoTexture&&Se(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&R.__version!==M.version){const F=M.image;if(F===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{k(R,M,x);return}}else M.isExternalTexture&&(R.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function G(M,x){const R=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){k(R,M,x);return}else M.isExternalTexture&&(R.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function j(M,x){const R=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){k(R,M,x);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function W(M,x){const R=i.get(M);if(M.version>0&&R.__version!==M.version){B(R,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}const J={[li]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[fs]:n.MIRRORED_REPEAT},se={[dn]:n.NEAREST,[Xh]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},xe={[qh]:n.NEVER,[tp]:n.ALWAYS,[$h]:n.LESS,[Su]:n.LEQUAL,[Zh]:n.EQUAL,[ep]:n.GEQUAL,[Jh]:n.GREATER,[Qh]:n.NOTEQUAL};function ne(M,x){if(x.type===Xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===va||x.magFilter===oo||x.magFilter===Mi||x.minFilter===gn||x.minFilter===va||x.minFilter===oo||x.minFilter===Mi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,J[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,se[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,se[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==oo&&x.minFilter!==Mi||x.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ie(M,x){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",T));const F=x.source;let O=m.get(F);O===void 0&&(O={},m.set(F,O));const U=I(x);if(U!==M.__cacheKey){O[U]===void 0&&(O[U]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,R=!0),O[U].usedTimes++;const $=O[M.__cacheKey];$!==void 0&&(O[M.__cacheKey].usedTimes--,$.usedTimes===0&&S(x)),M.__cacheKey=U,M.__webglTexture=O[U].texture}return R}function Ee(M,x,R){return Math.floor(Math.floor(M/R)/x)}function ee(M,x,R,F){const U=M.updateRanges;if(U.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,R,F,x.data);else{U.sort((oe,ve)=>oe.start-ve.start);let $=0;for(let oe=1;oe<U.length;oe++){const ve=U[$],Ue=U[oe],Ve=ve.start+ve.count,Le=Ee(Ue.start,x.width,4),Fe=Ee(ve.start,x.width,4);Ue.start<=Ve+1&&Le===Fe&&Ee(Ue.start+Ue.count-1,x.width,4)===Le?ve.count=Math.max(ve.count,Ue.start+Ue.count-ve.start):(++$,U[$]=Ue)}U.length=$+1;const q=n.getParameter(n.UNPACK_ROW_LENGTH),ce=n.getParameter(n.UNPACK_SKIP_PIXELS),fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let oe=0,ve=U.length;oe<ve;oe++){const Ue=U[oe],Ve=Math.floor(Ue.start/4),Le=Math.ceil(Ue.count/4),Fe=Ve%x.width,H=Math.floor(Ve/x.width),we=Le,Ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Fe,H,we,Ae,R,F,x.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,q),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function k(M,x,R){let F=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=n.TEXTURE_3D);const O=ie(M,x),U=x.source;t.bindTexture(F,M.__webglTexture,n.TEXTURE0+R);const $=i.get(U);if(U.version!==$.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const q=pt.getPrimaries(pt.workingColorSpace),ce=x.colorSpace===ai?null:pt.getPrimaries(x.colorSpace),fe=x.colorSpace===ai||q===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let oe=v(x.image,!1,r.maxTextureSize);oe=Te(x,oe);const ve=o.convert(x.format,x.colorSpace),Ue=o.convert(x.type);let Ve=y(x.internalFormat,ve,Ue,x.colorSpace,x.isVideoTexture);ne(F,x);let Le;const Fe=x.mipmaps,H=x.isVideoTexture!==!0,we=$.__version===void 0||O===!0,Ae=U.dataReady,ye=A(x,oe);if(x.isDepthTexture)Ve=_(x.format===Ur,x.type),we&&(H?t.texStorage2D(n.TEXTURE_2D,1,Ve,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,ve,Ue,null));else if(x.isDataTexture)if(Fe.length>0){H&&we&&t.texStorage2D(n.TEXTURE_2D,ye,Ve,Fe[0].width,Fe[0].height);for(let X=0,Z=Fe.length;X<Z;X++)Le=Fe[X],H?Ae&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Le.width,Le.height,ve,Ue,Le.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Le.width,Le.height,0,ve,Ue,Le.data);x.generateMipmaps=!1}else H?(we&&t.texStorage2D(n.TEXTURE_2D,ye,Ve,oe.width,oe.height),Ae&&ee(x,oe,ve,Ue)):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,ve,Ue,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ve,Fe[0].width,Fe[0].height,oe.depth);for(let X=0,Z=Fe.length;X<Z;X++)if(Le=Fe[X],x.format!==xn)if(ve!==null)if(H){if(Ae)if(x.layerUpdates.size>0){const be=gc(Le.width,Le.height,x.format,x.type);for(const Oe of x.layerUpdates){const Ce=Le.data.subarray(Oe*be/Le.data.BYTES_PER_ELEMENT,(Oe+1)*be/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,Oe,Le.width,Le.height,1,ve,Ce)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Le.width,Le.height,oe.depth,ve,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Le.width,Le.height,oe.depth,0,Le.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Le.width,Le.height,oe.depth,ve,Ue,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Le.width,Le.height,oe.depth,0,ve,Ue,Le.data)}else{H&&we&&t.texStorage2D(n.TEXTURE_2D,ye,Ve,Fe[0].width,Fe[0].height);for(let X=0,Z=Fe.length;X<Z;X++)Le=Fe[X],x.format!==xn?ve!==null?H?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ve,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ae&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Le.width,Le.height,ve,Ue,Le.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Le.width,Le.height,0,ve,Ue,Le.data)}else if(x.isDataArrayTexture)if(H){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ve,oe.width,oe.height,oe.depth),Ae)if(x.layerUpdates.size>0){const X=gc(oe.width,oe.height,x.format,x.type);for(const Z of x.layerUpdates){const be=oe.data.subarray(Z*X/oe.data.BYTES_PER_ELEMENT,(Z+1)*X/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,ve,Ue,be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ue,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,oe.width,oe.height,oe.depth,0,ve,Ue,oe.data);else if(x.isData3DTexture)H?(we&&t.texStorage3D(n.TEXTURE_3D,ye,Ve,oe.width,oe.height,oe.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,oe.width,oe.height,oe.depth,0,ve,Ue,oe.data);else if(x.isFramebufferTexture){if(we)if(H)t.texStorage2D(n.TEXTURE_2D,ye,Ve,oe.width,oe.height);else{let X=oe.width,Z=oe.height;for(let be=0;be<ye;be++)t.texImage2D(n.TEXTURE_2D,be,Ve,X,Z,0,ve,Ue,null),X>>=1,Z>>=1}}else if(Fe.length>0){if(H&&we){const X=ke(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ve,X.width,X.height)}for(let X=0,Z=Fe.length;X<Z;X++)Le=Fe[X],H?Ae&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve,Ue,Le):t.texImage2D(n.TEXTURE_2D,X,Ve,ve,Ue,Le);x.generateMipmaps=!1}else if(H){if(we){const X=ke(oe);t.texStorage2D(n.TEXTURE_2D,ye,Ve,X.width,X.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ue,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,ve,Ue,oe);h(x)&&f(F),$.__version=U.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function B(M,x,R){if(x.image.length!==6)return;const F=ie(M,x),O=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+R);const U=i.get(O);if(O.version!==U.__version||F===!0){t.activeTexture(n.TEXTURE0+R);const $=pt.getPrimaries(pt.workingColorSpace),q=x.colorSpace===ai?null:pt.getPrimaries(x.colorSpace),ce=x.colorSpace===ai||$===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!fe&&!oe?ve[Z]=v(x.image[Z],!0,r.maxCubemapSize):ve[Z]=oe?x.image[Z].image:x.image[Z],ve[Z]=Te(x,ve[Z]);const Ue=ve[0],Ve=o.convert(x.format,x.colorSpace),Le=o.convert(x.type),Fe=y(x.internalFormat,Ve,Le,x.colorSpace),H=x.isVideoTexture!==!0,we=U.__version===void 0||F===!0,Ae=O.dataReady;let ye=A(x,Ue);ne(n.TEXTURE_CUBE_MAP,x);let X;if(fe){H&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Fe,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){X=ve[Z].mipmaps;for(let be=0;be<X.length;be++){const Oe=X[be];x.format!==xn?Ve!==null?H?Ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Oe.width,Oe.height,Ve,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Fe,Oe.width,Oe.height,0,Oe.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Oe.width,Oe.height,Ve,Le,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Fe,Oe.width,Oe.height,0,Ve,Le,Oe.data)}}}else{if(X=x.mipmaps,H&&we){X.length>0&&ye++;const Z=ke(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){H?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Ve,Le,ve[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,ve[Z].width,ve[Z].height,0,Ve,Le,ve[Z].data);for(let be=0;be<X.length;be++){const Ce=X[be].image[Z].image;H?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Ce.width,Ce.height,Ve,Le,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Fe,Ce.width,Ce.height,0,Ve,Le,Ce.data)}}else{H?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ve,Le,ve[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Ve,Le,ve[Z]);for(let be=0;be<X.length;be++){const Oe=X[be];H?Ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Ve,Le,Oe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Fe,Ve,Le,Oe.image[Z])}}}h(x)&&f(n.TEXTURE_CUBE_MAP),U.__version=O.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function K(M,x,R,F,O,U){const $=o.convert(R.format,R.colorSpace),q=o.convert(R.type),ce=y(R.internalFormat,$,q,R.colorSpace),fe=i.get(x),oe=i.get(R);if(oe.__renderTarget=x,!fe.__hasExternalTextures){const ve=Math.max(1,x.width>>U),Ue=Math.max(1,x.height>>U);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,U,ce,ve,Ue,x.depth,0,$,q,null):t.texImage2D(O,U,ce,ve,Ue,0,$,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),te(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,O,oe.__webglTexture,0,he(x)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,O,oe.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(M,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const F=x.depthTexture,O=F&&F.isDepthTexture?F.type:null,U=_(x.stencilBuffer,O),$=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=he(x);te(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,U,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,U,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,U,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,M)}else{const F=x.textures;for(let O=0;O<F.length;O++){const U=F[O],$=o.convert(U.format,U.colorSpace),q=o.convert(U.type),ce=y(U.internalFormat,$,q,U.colorSpace),fe=he(x);R&&te(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ce,x.width,x.height):te(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=i.get(x.depthTexture);F.__renderTarget=x,(!F.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const O=F.__webglTexture,U=he(x);if(x.depthTexture.format===kr)te(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(x.depthTexture.format===Ur)te(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function pe(M){const x=i.get(M),R=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const F=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),F){const O=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,F.removeEventListener("dispose",O)};F.addEventListener("dispose",O),x.__depthDisposeCallback=O}x.__boundDepthTexture=F}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");const F=M.texture.mipmaps;F&&F.length>0?re(x.__webglFramebuffer[0],M):re(x.__webglFramebuffer,M)}else if(R){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]===void 0)x.__webglDepthbuffer[F]=n.createRenderbuffer(),Y(x.__webglDepthbuffer[F],M,!1);else{const O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,U)}}else{const F=M.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Y(x.__webglDepthbuffer,M,!1);else{const O=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,U)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(M,x,R){const F=i.get(M);x!==void 0&&K(F.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&pe(M)}function Pe(M){const x=M.texture,R=i.get(M),F=i.get(x);M.addEventListener("dispose",C);const O=M.textures,U=M.isWebGLCubeRenderTarget===!0,$=O.length>1;if($||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=x.version,s.memory.textures++),U){R.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[q]=[];for(let ce=0;ce<x.mipmaps.length;ce++)R.__webglFramebuffer[q][ce]=n.createFramebuffer()}else R.__webglFramebuffer[q]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)R.__webglFramebuffer[q]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if($)for(let q=0,ce=O.length;q<ce;q++){const fe=i.get(O[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),s.memory.textures++)}if(M.samples>0&&te(M)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let q=0;q<O.length;q++){const ce=O[q];R.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[q]);const fe=o.convert(ce.format,ce.colorSpace),oe=o.convert(ce.type),ve=y(ce.internalFormat,fe,oe,ce.colorSpace,M.isXRRenderTarget===!0),Ue=he(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ve,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,R.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)K(R.__webglFramebuffer[q][ce],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce);else K(R.__webglFramebuffer[q],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let q=0,ce=O.length;q<ce;q++){const fe=O[q],oe=i.get(fe);let ve=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),ne(ve,fe),K(R.__webglFramebuffer,M,fe,n.COLOR_ATTACHMENT0+q,ve,0),h(fe)&&f(ve)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(q=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,F.__webglTexture),ne(q,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)K(R.__webglFramebuffer[ce],M,x,n.COLOR_ATTACHMENT0,q,ce);else K(R.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,q,0);h(x)&&f(q),t.unbindTexture()}M.depthBuffer&&pe(M)}function Xe(M){const x=M.textures;for(let R=0,F=x.length;R<F;R++){const O=x[R];if(h(O)){const U=b(M),$=i.get(O).__webglTexture;t.bindTexture(U,$),f(U),t.unbindTexture()}}}const V=[],Ne=[];function Q(M){if(M.samples>0){if(te(M)===!1){const x=M.textures,R=M.width,F=M.height;let O=n.COLOR_BUFFER_BIT;const U=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(M),q=x.length>1;if(q)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const ce=M.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const oe=i.get(x[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,R,F,0,0,R,F,O,n.NEAREST),c===!0&&(V.length=0,Ne.length=0,V.push(n.COLOR_ATTACHMENT0+fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(V.push(U),Ne.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const oe=i.get(x[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function he(M){return Math.min(r.maxSamples,M.samples)}function te(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(M){const x=s.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function Te(M,x){const R=M.colorSpace,F=M.format,O=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||R!==ur&&R!==ai&&(pt.getTransfer(R)===_t?(F!==xn||O!==Nn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",R)),x}function ke(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(a.width=M.naturalWidth||M.width,a.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(a.width=M.displayWidth,a.height=M.displayHeight):(a.width=M.width,a.height=M.height),a}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=_e,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=te}function Xv(n,e){function t(i,r=ai){let o;const s=pt.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return n.BYTE;if(i===xu)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===pr)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===yu)return n.RGB;if(i===xn)return n.RGBA;if(i===kr)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===Eu)return n.RED;if(i===il)return n.RED_INTEGER;if(i===rl)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===al)return n.RGBA_INTEGER;if(i===Fo||i===ko||i===Uo||i===Bo)if(s===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hs||i===ps||i===ms||i===gs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===hs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ps)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ms)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xs||i===vs||i===_s)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xs||i===vs)return s===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===_s)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bs||i===ys||i===Es||i===Ss||i===Ts||i===Ms||i===As||i===Rs||i===ws||i===Cs||i===Ps||i===Ls||i===Is||i===Ns)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===bs)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ys)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Es)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ss)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ts)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ms)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===As)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rs)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ws)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cs)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ps)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ls)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Is)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ns)return s===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os||i===Ds||i===Fs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Os)return s===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ds)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fs)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ks||i===Us||i===Bs||i===zs)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ks)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Us)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zs)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:jv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qv extends Ci{constructor(e,t){super();const i=this;let r=null,o=1,s=null,l="local-floor",c=1,a=null,u=null,d=null,m=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",h=new Yv,f={},b=t.getContextAttributes();let y=null,_=null;const A=[],T=[],C=new Je;let D=null;const S=new mn;S.viewport=new Lt;const E=new mn;E.viewport=new Lt;const w=[S,E],L=new hm;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=A[k];return B===void 0&&(B=new za,A[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=A[k];return B===void 0&&(B=new za,A[k]=B),B.getGripSpace()},this.getHand=function(k){let B=A[k];return B===void 0&&(B=new za,A[k]=B),B.getHandSpace()};function z(k){const B=T.indexOf(k.inputSource);if(B===-1)return;const K=A[B];K!==void 0&&(K.update(k.inputSource,k.frame,a||s),K.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let k=0;k<A.length;k++){const B=T[k];B!==null&&(T[k]=null,A[k].disconnect(B))}P=null,I=null,h.reset();for(const k in f)delete f[k];e.setRenderTarget(y),p=null,m=null,d=null,r=null,_=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){l=k,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||s},this.setReferenceSpace=function(k){a=k},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,Y=null,re=null;b.depth&&(re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=b.stencil?Ur:kr,Y=b.stencil?Fr:Ai);const pe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:o};d=this.getBinding(),m=d.createProjectionLayer(pe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),_=new Ri(m.textureWidth,m.textureHeight,{format:xn,type:Nn,depthTexture:new Fu(m.textureWidth,m.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const K={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ri(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),a=null,s=await r.requestReferenceSpace(l),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(k){for(let B=0;B<k.removed.length;B++){const K=k.removed[B],Y=T.indexOf(K);Y>=0&&(T[Y]=null,A[Y].disconnect(K))}for(let B=0;B<k.added.length;B++){const K=k.added[B];let Y=T.indexOf(K);if(Y===-1){for(let pe=0;pe<A.length;pe++)if(pe>=T.length){T.push(K),Y=pe;break}else if(T[pe]===null){T[pe]=K,Y=pe;break}if(Y===-1)break}const re=A[Y];re&&re.connect(K)}}const W=new ae,J=new ae;function se(k,B,K){W.setFromMatrixPosition(B.matrixWorld),J.setFromMatrixPosition(K.matrixWorld);const Y=W.distanceTo(J),re=B.projectionMatrix.elements,pe=K.projectionMatrix.elements,_e=re[14]/(re[10]-1),Pe=re[14]/(re[10]+1),Xe=(re[9]+1)/re[5],V=(re[9]-1)/re[5],Ne=(re[8]-1)/re[0],Q=(pe[8]+1)/pe[0],he=_e*Ne,te=_e*Q,Se=Y/(-Ne+Q),Te=Se*-Ne;if(B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Te),k.translateZ(Se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),re[10]===-1)k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const ke=_e+Se,M=Pe+Se,x=he-Te,R=te+(Y-Te),F=Xe*Pe/M*ke,O=V*Pe/M*ke;k.projectionMatrix.makePerspective(x,R,F,O,ke,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function xe(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let B=k.near,K=k.far;h.texture!==null&&(h.depthNear>0&&(B=h.depthNear),h.depthFar>0&&(K=h.depthFar)),L.near=E.near=S.near=B,L.far=E.far=S.far=K,(P!==L.near||I!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,I=L.far),L.layers.mask=k.layers.mask|6,S.layers.mask=L.layers.mask&3,E.layers.mask=L.layers.mask&5;const Y=k.parent,re=L.cameras;xe(L,Y);for(let pe=0;pe<re.length;pe++)xe(re[pe],Y);re.length===2?se(L,S,E):L.projectionMatrix.copy(S.projectionMatrix),ne(k,L,Y)};function ne(k,B,K){K===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(K.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Vs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(m===null&&p===null))return c},this.setFoveation=function(k){c=k,m!==null&&(m.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(L)},this.getCameraTexture=function(k){return f[k]};let ie=null;function Ee(k,B){if(u=B.getViewerPose(a||s),g=B,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Y=!1;K.length!==L.cameras.length&&(L.cameras.length=0,Y=!0);for(let Pe=0;Pe<K.length;Pe++){const Xe=K[Pe];let V=null;if(p!==null)V=p.getViewport(Xe);else{const Q=d.getViewSubImage(m,Xe);V=Q.viewport,Pe===0&&(e.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(_))}let Ne=w[Pe];Ne===void 0&&(Ne=new mn,Ne.layers.enable(Pe),Ne.viewport=new Lt,w[Pe]=Ne),Ne.matrix.fromArray(Xe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Xe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(V.x,V.y,V.width,V.height),Pe===0&&(L.matrix.copy(Ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Y===!0&&L.cameras.push(Ne)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Pe=d.getDepthInformation(K[0]);Pe&&Pe.isValid&&Pe.texture&&h.init(Pe,r.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Pe=0;Pe<K.length;Pe++){const Xe=K[Pe].camera;if(Xe){let V=f[Xe];V||(V=new ku,f[Xe]=V);const Ne=d.getCameraImage(Xe);V.sourceTexture=Ne}}}}for(let K=0;K<A.length;K++){const Y=T[K],re=A[K];Y!==null&&re!==void 0&&re.update(Y,B,a||s)}ie&&ie(k,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const ee=new Xu;ee.setAnimationLoop(Ee),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}const Ei=new An,$v=new At;function Zv(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,Pu(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,b,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(h,f):f.isMeshToonMaterial?(o(h,f),d(h,f)):f.isMeshPhongMaterial?(o(h,f),u(h,f)):f.isMeshStandardMaterial?(o(h,f),m(h,f),f.isMeshPhysicalMaterial&&p(h,f,_)):f.isMeshMatcapMaterial?(o(h,f),g(h,f)):f.isMeshDepthMaterial?o(h,f):f.isMeshDistanceMaterial?(o(h,f),v(h,f)):f.isMeshNormalMaterial?o(h,f):f.isLineBasicMaterial?(s(h,f),f.isLineDashedMaterial&&l(h,f)):f.isPointsMaterial?c(h,f,b,y):f.isSpriteMaterial?a(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===Xt&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===Xt&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const b=e.get(f),y=b.envMap,_=b.envMapRotation;y&&(h.envMap.value=y,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(Ei)),h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function s(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function l(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function c(h,f,b,y){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*b,h.scale.value=y*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function d(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function m(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function p(h,f,b){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=b.texture,h.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const b=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(b.matrixWorld),h.nearDistance.value=b.shadow.camera.near,h.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jv(n,e,t,i){let r={},o={},s=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const _=y.program;i.uniformBlockBinding(b,_)}function a(b,y){let _=r[b.id];_===void 0&&(g(b),_=u(b),r[b.id]=_,b.addEventListener("dispose",h));const A=y.program;i.updateUBOMapping(b,A);const T=e.render.frame;o[b.id]!==T&&(m(b),o[b.id]=T)}function u(b){const y=d();b.__bindingPointIndex=y;const _=n.createBuffer(),A=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let b=0;b<l;b++)if(s.indexOf(b)===-1)return s.push(b),b;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const y=r[b.id],_=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,C=_.length;T<C;T++){const D=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,E=D.length;S<E;S++){const w=D[S];if(p(w,T,S,A)===!0){const L=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let z=0;z<P.length;z++){const G=P[z],j=v(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,L+I,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,I),I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,y,_,A){const T=b.value,C=y+"_"+_;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const D=A[C];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[C]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(b){const y=b.uniforms;let _=0;const A=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,w=S.length;E<w;E++){const L=S[E],P=Array.isArray(L.value)?L.value:[L.value];for(let I=0,z=P.length;I<z;I++){const G=P[I],j=v(G),W=_%A,J=W%j.boundary,se=W+J;_+=J,se!==0&&A-se<j.storage&&(_+=A-se),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=j.storage}}}const T=_%A;return T>0&&(_+=A-T),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",b),y}function h(b){const y=b.target;y.removeEventListener("dispose",h);const _=s.indexOf(y.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:a,dispose:f}}const Qv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Gn=null;function e_(){return Gn===null&&(Gn=new cl(Qv,32,32,rl,pr),Gn.minFilter=gn,Gn.magFilter=gn,Gn.wrapS=un,Gn.wrapT=un,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class t_{constructor(e={}){const{canvas:t=np(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Set([al,ol,il]),v=new Set([Nn,Ai,Dr,Fr,tl,nl]),h=new Uint32Array(4),f=new Int32Array(4);let b=null,y=null;const _=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=Pt;let D=0,S=0,E=null,w=-1,L=null;const P=new Lt,I=new Lt;let z=null;const G=new it(0);let j=0,W=t.width,J=t.height,se=1,xe=null,ne=null;const ie=new Lt(0,0,W,J),Ee=new Lt(0,0,W,J);let ee=!1;const k=new ul;let B=!1,K=!1;const Y=new At,re=new ae,pe=new Lt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Xe(){return E===null?se:1}let V=i;function Ne(N,le){return t.getContext(N,le)}try{const N={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",be,!1),V===null){const le="webgl2";if(V=Ne(le,N),V===null)throw Ne(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N("WebGLRenderer: "+N.message),N}let Q,he,te,Se,Te,ke,M,x,R,F,O,U,$,q,ce,fe,oe,ve,Ue,Ve,Le,Fe,H,we;function Ae(){Q=new cx(V),Q.init(),Fe=new Xv(V,Q),he=new ex(V,Q,e,Fe),te=new Hv(V,Q),he.reversedDepthBuffer&&m&&te.buffers.depth.setReversed(!0),Se=new fx(V),Te=new Pv,ke=new Wv(V,Q,te,Te,he,Fe,Se),M=new nx(T),x=new lx(T),R=new gm(V),H=new Jg(V,R),F=new ux(V,R,Se,H),O=new px(V,F,R,Se),Ue=new hx(V,he,ke),fe=new tx(Te),U=new Cv(T,M,x,Q,he,H,fe),$=new Zv(T,Te),q=new Iv,ce=new Uv(Q),ve=new Zg(T,M,x,te,O,p,c),oe=new Vv(T,O,he),we=new Jv(V,Se,he,te),Ve=new Qg(V,Q,Se),Le=new dx(V,Q,Se),Se.programs=U.programs,T.capabilities=he,T.extensions=Q,T.properties=Te,T.renderLists=q,T.shadowMap=oe,T.state=te,T.info=Se}Ae();const ye=new qv(T,V);this.xr=ye,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=Q.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Q.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(N){N!==void 0&&(se=N,this.setSize(W,J,!1))},this.getSize=function(N){return N.set(W,J)},this.setSize=function(N,le,me=!0){if(ye.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=N,J=le,t.width=Math.floor(N*se),t.height=Math.floor(le*se),me===!0&&(t.style.width=N+"px",t.style.height=le+"px"),this.setViewport(0,0,N,le)},this.getDrawingBufferSize=function(N){return N.set(W*se,J*se).floor()},this.setDrawingBufferSize=function(N,le,me){W=N,J=le,se=me,t.width=Math.floor(N*me),t.height=Math.floor(le*me),this.setViewport(0,0,N,le)},this.getCurrentViewport=function(N){return N.copy(P)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,le,me,ge){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,le,me,ge),te.viewport(P.copy(ie).multiplyScalar(se).round())},this.getScissor=function(N){return N.copy(Ee)},this.setScissor=function(N,le,me,ge){N.isVector4?Ee.set(N.x,N.y,N.z,N.w):Ee.set(N,le,me,ge),te.scissor(I.copy(Ee).multiplyScalar(se).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(N){te.setScissorTest(ee=N)},this.setOpaqueSort=function(N){xe=N},this.setTransparentSort=function(N){ne=N},this.getClearColor=function(N){return N.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(N=!0,le=!0,me=!0){let ge=0;if(N){let ue=!1;if(E!==null){const Be=E.texture.format;ue=g.has(Be)}if(ue){const Be=E.texture.type,We=v.has(Be),qe=ve.getClearColor(),je=ve.getClearAlpha(),et=qe.r,tt=qe.g,Ze=qe.b;We?(h[0]=et,h[1]=tt,h[2]=Ze,h[3]=je,V.clearBufferuiv(V.COLOR,0,h)):(f[0]=et,f[1]=tt,f[2]=Ze,f[3]=je,V.clearBufferiv(V.COLOR,0,f))}else ge|=V.COLOR_BUFFER_BIT}le&&(ge|=V.DEPTH_BUFFER_BIT),me&&(ge|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ve.dispose(),q.dispose(),ce.dispose(),Te.dispose(),M.dispose(),x.dispose(),O.dispose(),H.dispose(),we.dispose(),U.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ke),ye.removeEventListener("sessionend",ht),Nt.stop()};function X(N){N.preventDefault(),Vl("WebGLRenderer: Context Lost."),C=!0}function Z(){Vl("WebGLRenderer: Context Restored."),C=!1;const N=Se.autoReset,le=oe.enabled,me=oe.autoUpdate,ge=oe.needsUpdate,ue=oe.type;Ae(),Se.autoReset=N,oe.enabled=le,oe.autoUpdate=me,oe.needsUpdate=ge,oe.type=ue}function be(N){It("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Oe(N){const le=N.target;le.removeEventListener("dispose",Oe),Ce(le)}function Ce(N){Me(N),Te.remove(N)}function Me(N){const le=Te.get(N).programs;le!==void 0&&(le.forEach(function(me){U.releaseProgram(me)}),N.isShaderMaterial&&U.releaseShaderCache(N))}this.renderBufferDirect=function(N,le,me,ge,ue,Be){le===null&&(le=_e);const We=ue.isMesh&&ue.matrixWorld.determinant()<0,qe=oa(N,le,me,ge,ue);te.setMaterial(ge,We);let je=me.index,et=1;if(ge.wireframe===!0){if(je=F.getWireframeAttribute(me),je===void 0)return;et=2}const tt=me.drawRange,Ze=me.attributes.position;let dt=tt.start*et,vt=(tt.start+tt.count)*et;Be!==null&&(dt=Math.max(dt,Be.start*et),vt=Math.min(vt,(Be.start+Be.count)*et)),je!==null?(dt=Math.max(dt,0),vt=Math.min(vt,je.count)):Ze!=null&&(dt=Math.max(dt,0),vt=Math.min(vt,Ze.count));const wt=vt-dt;if(wt<0||wt===1/0)return;H.setup(ue,ge,qe,me,je);let Ct,yt=Ve;if(je!==null&&(Ct=R.get(je),yt=Le,yt.setIndex(Ct)),ue.isMesh)ge.wireframe===!0?(te.setLineWidth(ge.wireframeLinewidth*Xe()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(ue.isLine){let Qe=ge.linewidth;Qe===void 0&&(Qe=1),te.setLineWidth(Qe*Xe()),ue.isLineSegments?yt.setMode(V.LINES):ue.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else ue.isPoints?yt.setMode(V.POINTS):ue.isSprite&&yt.setMode(V.TRIANGLES);if(ue.isBatchedMesh)if(ue._multiDrawInstances!==null)zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount,ue._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))yt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Qe=ue._multiDrawStarts,St=ue._multiDrawCounts,mt=ue._multiDrawCount,an=je?R.get(je).bytesPerElement:1,Ni=Te.get(ge).currentProgram.getUniforms();for(let sn=0;sn<mt;sn++)Ni.setValue(V,"_gl_DrawID",sn),yt.render(Qe[sn]/an,St[sn])}else if(ue.isInstancedMesh)yt.renderInstances(dt,wt,ue.count);else if(me.isInstancedBufferGeometry){const Qe=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,St=Math.min(me.instanceCount,Qe);yt.renderInstances(dt,wt,St)}else yt.render(dt,wt)};function Re(N,le,me){N.transparent===!0&&N.side===Tn&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,Ii(N,le,me),N.side=Yn,N.needsUpdate=!0,Ii(N,le,me),N.side=Tn):Ii(N,le,me)}this.compile=function(N,le,me=null){me===null&&(me=N),y=ce.get(me),y.init(le),A.push(y),me.traverseVisible(function(ue){ue.isLight&&ue.layers.test(le.layers)&&(y.pushLight(ue),ue.castShadow&&y.pushShadow(ue))}),N!==me&&N.traverseVisible(function(ue){ue.isLight&&ue.layers.test(le.layers)&&(y.pushLight(ue),ue.castShadow&&y.pushShadow(ue))}),y.setupLights();const ge=new Set;return N.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Be=ue.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){const qe=Be[We];Re(qe,me,ue),ge.add(qe)}else Re(Be,me,ue),ge.add(Be)}),y=A.pop(),ge},this.compileAsync=function(N,le,me=null){const ge=this.compile(N,le,me);return new Promise(ue=>{function Be(){if(ge.forEach(function(We){Te.get(We).currentProgram.isReady()&&ge.delete(We)}),ge.size===0){ue(N);return}setTimeout(Be,10)}Q.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ie=null;function De(N){Ie&&Ie(N)}function Ke(){Nt.stop()}function ht(){Nt.start()}const Nt=new Xu;Nt.setAnimationLoop(De),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(N){Ie=N,ye.setAnimationLoop(N),N===null?Nt.stop():Nt.start()},ye.addEventListener("sessionstart",Ke),ye.addEventListener("sessionend",ht),this.render=function(N,le){if(le!==void 0&&le.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(le),le=ye.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,le,E),y=ce.get(N,A.length),y.init(le),A.push(y),Y.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),k.setFromProjectionMatrix(Y,In,le.reversedDepth),K=this.localClippingEnabled,B=fe.init(this.clippingPlanes,K),b=q.get(N,_.length),b.init(),_.push(b),ye.enabled===!0&&ye.isPresenting===!0){const Be=T.xr.getDepthSensingMesh();Be!==null&&Vt(Be,le,-1/0,T.sortObjects)}Vt(N,le,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(xe,ne),Pe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Pe&&ve.addToRenderList(b,N),this.info.render.frame++,B===!0&&fe.beginShadows();const me=y.state.shadowsArray;oe.render(me,N,le),B===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ge=b.opaque,ue=b.transmissive;if(y.setupLights(),le.isArrayCamera){const Be=le.cameras;if(ue.length>0)for(let We=0,qe=Be.length;We<qe;We++){const je=Be[We];Li(ge,ue,N,je)}Pe&&ve.render(N);for(let We=0,qe=Be.length;We<qe;We++){const je=Be[We];Rn(b,N,je,je.viewport)}}else ue.length>0&&Li(ge,ue,N,le),Pe&&ve.render(N),Rn(b,N,le);E!==null&&S===0&&(ke.updateMultisampleRenderTarget(E),ke.updateRenderTargetMipmap(E)),N.isScene===!0&&N.onAfterRender(T,N,le),H.resetDefaultState(),w=-1,L=null,A.pop(),A.length>0?(y=A[A.length-1],B===!0&&fe.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Vt(N,le,me,ge){if(N.visible===!1)return;if(N.layers.test(le.layers)){if(N.isGroup)me=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(le);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||k.intersectsSprite(N)){ge&&pe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Y);const We=O.update(N),qe=N.material;qe.visible&&b.push(N,We,qe,me,pe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||k.intersectsObject(N))){const We=O.update(N),qe=N.material;if(ge&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),pe.copy(N.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),pe.copy(We.boundingSphere.center)),pe.applyMatrix4(N.matrixWorld).applyMatrix4(Y)),Array.isArray(qe)){const je=We.groups;for(let et=0,tt=je.length;et<tt;et++){const Ze=je[et],dt=qe[Ze.materialIndex];dt&&dt.visible&&b.push(N,We,dt,me,pe.z,Ze)}}else qe.visible&&b.push(N,We,qe,me,pe.z,null)}}const Be=N.children;for(let We=0,qe=Be.length;We<qe;We++)Vt(Be[We],le,me,ge)}function Rn(N,le,me,ge){const{opaque:ue,transmissive:Be,transparent:We}=N;y.setupLightsView(me),B===!0&&fe.setGlobalState(T.clippingPlanes,me),ge&&te.viewport(P.copy(ge)),ue.length>0&&Zn(ue,le,me),Be.length>0&&Zn(Be,le,me),We.length>0&&Zn(We,le,me),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Li(N,le,me,ge){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ge.id]===void 0&&(y.state.transmissionRenderTarget[ge.id]=new Ri(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?pr:Nn,minFilter:Mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const Be=y.state.transmissionRenderTarget[ge.id],We=ge.viewport||P;Be.setSize(We.z*T.transmissionResolutionScale,We.w*T.transmissionResolutionScale);const qe=T.getRenderTarget(),je=T.getActiveCubeFace(),et=T.getActiveMipmapLevel();T.setRenderTarget(Be),T.getClearColor(G),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Pe&&ve.render(me);const tt=T.toneMapping;T.toneMapping=di;const Ze=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),y.setupLightsView(ge),B===!0&&fe.setGlobalState(T.clippingPlanes,ge),Zn(N,me,ge),ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be),Q.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let vt=0,wt=le.length;vt<wt;vt++){const Ct=le[vt],{object:yt,geometry:Qe,material:St,group:mt}=Ct;if(St.side===Tn&&yt.layers.test(ge.layers)){const an=St.side;St.side=Xt,St.needsUpdate=!0,eo(yt,me,ge,Qe,St,mt),St.side=an,St.needsUpdate=!0,dt=!0}}dt===!0&&(ke.updateMultisampleRenderTarget(Be),ke.updateRenderTargetMipmap(Be))}T.setRenderTarget(qe,je,et),T.setClearColor(G,j),Ze!==void 0&&(ge.viewport=Ze),T.toneMapping=tt}function Zn(N,le,me){const ge=le.isScene===!0?le.overrideMaterial:null;for(let ue=0,Be=N.length;ue<Be;ue++){const We=N[ue],{object:qe,geometry:je,group:et}=We;let tt=We.material;tt.allowOverride===!0&&ge!==null&&(tt=ge),qe.layers.test(me.layers)&&eo(qe,le,me,je,tt,et)}}function eo(N,le,me,ge,ue,Be){N.onBeforeRender(T,le,me,ge,ue,Be),N.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ue.onBeforeRender(T,le,me,ge,N,Be),ue.transparent===!0&&ue.side===Tn&&ue.forceSinglePass===!1?(ue.side=Xt,ue.needsUpdate=!0,T.renderBufferDirect(me,le,ge,ue,N,Be),ue.side=Yn,ue.needsUpdate=!0,T.renderBufferDirect(me,le,ge,ue,N,Be),ue.side=Tn):T.renderBufferDirect(me,le,ge,ue,N,Be),N.onAfterRender(T,le,me,ge,ue,Be)}function Ii(N,le,me){le.isScene!==!0&&(le=_e);const ge=Te.get(N),ue=y.state.lights,Be=y.state.shadowsArray,We=ue.state.version,qe=U.getParameters(N,ue.state,Be,le,me),je=U.getProgramCacheKey(qe);let et=ge.programs;ge.environment=N.isMeshStandardMaterial?le.environment:null,ge.fog=le.fog,ge.envMap=(N.isMeshStandardMaterial?x:M).get(N.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&N.envMap===null?le.environmentRotation:N.envMapRotation,et===void 0&&(N.addEventListener("dispose",Oe),et=new Map,ge.programs=et);let tt=et.get(je);if(tt!==void 0){if(ge.currentProgram===tt&&ge.lightsStateVersion===We)return no(N,qe),tt}else qe.uniforms=U.getUniforms(N),N.onBeforeCompile(qe,T),tt=U.acquireProgram(qe,je),et.set(je,tt),ge.uniforms=qe.uniforms;const Ze=ge.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=fe.uniform),no(N,qe),ge.needsLights=sa(N),ge.lightsStateVersion=We,ge.needsLights&&(Ze.ambientLightColor.value=ue.state.ambient,Ze.lightProbe.value=ue.state.probe,Ze.directionalLights.value=ue.state.directional,Ze.directionalLightShadows.value=ue.state.directionalShadow,Ze.spotLights.value=ue.state.spot,Ze.spotLightShadows.value=ue.state.spotShadow,Ze.rectAreaLights.value=ue.state.rectArea,Ze.ltc_1.value=ue.state.rectAreaLTC1,Ze.ltc_2.value=ue.state.rectAreaLTC2,Ze.pointLights.value=ue.state.point,Ze.pointLightShadows.value=ue.state.pointShadow,Ze.hemisphereLights.value=ue.state.hemi,Ze.directionalShadowMap.value=ue.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Ze.spotShadowMap.value=ue.state.spotShadowMap,Ze.spotLightMatrix.value=ue.state.spotLightMatrix,Ze.spotLightMap.value=ue.state.spotLightMap,Ze.pointShadowMap.value=ue.state.pointShadowMap,Ze.pointShadowMatrix.value=ue.state.pointShadowMatrix),ge.currentProgram=tt,ge.uniformsList=null,tt}function to(N){if(N.uniformsList===null){const le=N.currentProgram.getUniforms();N.uniformsList=Vo.seqWithValue(le.seq,N.uniforms)}return N.uniformsList}function no(N,le){const me=Te.get(N);me.outputColorSpace=le.outputColorSpace,me.batching=le.batching,me.batchingColor=le.batchingColor,me.instancing=le.instancing,me.instancingColor=le.instancingColor,me.instancingMorph=le.instancingMorph,me.skinning=le.skinning,me.morphTargets=le.morphTargets,me.morphNormals=le.morphNormals,me.morphColors=le.morphColors,me.morphTargetsCount=le.morphTargetsCount,me.numClippingPlanes=le.numClippingPlanes,me.numIntersection=le.numClipIntersection,me.vertexAlphas=le.vertexAlphas,me.vertexTangents=le.vertexTangents,me.toneMapping=le.toneMapping}function oa(N,le,me,ge,ue){le.isScene!==!0&&(le=_e),ke.resetTextureUnits();const Be=le.fog,We=ge.isMeshStandardMaterial?le.environment:null,qe=E===null?T.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ur,je=(ge.isMeshStandardMaterial?x:M).get(ge.envMap||We),et=ge.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,tt=!!me.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Ze=!!me.morphAttributes.position,dt=!!me.morphAttributes.normal,vt=!!me.morphAttributes.color;let wt=di;ge.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(wt=T.toneMapping);const Ct=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,yt=Ct!==void 0?Ct.length:0,Qe=Te.get(ge),St=y.state.lights;if(B===!0&&(K===!0||N!==L)){const Yt=N===L&&ge.id===w;fe.setState(ge,N,Yt)}let mt=!1;ge.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==St.state.version||Qe.outputColorSpace!==qe||ue.isBatchedMesh&&Qe.batching===!1||!ue.isBatchedMesh&&Qe.batching===!0||ue.isBatchedMesh&&Qe.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&Qe.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&Qe.instancing===!1||!ue.isInstancedMesh&&Qe.instancing===!0||ue.isSkinnedMesh&&Qe.skinning===!1||!ue.isSkinnedMesh&&Qe.skinning===!0||ue.isInstancedMesh&&Qe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Qe.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Qe.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Qe.instancingMorph===!1&&ue.morphTexture!==null||Qe.envMap!==je||ge.fog===!0&&Qe.fog!==Be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==fe.numPlanes||Qe.numIntersection!==fe.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==dt||Qe.morphColors!==vt||Qe.toneMapping!==wt||Qe.morphTargetsCount!==yt)&&(mt=!0):(mt=!0,Qe.__version=ge.version);let an=Qe.currentProgram;mt===!0&&(an=Ii(ge,le,ue));let Ni=!1,sn=!1,xr=!1;const Tt=an.getUniforms(),Qt=Qe.uniforms;if(te.useProgram(an.program)&&(Ni=!0,sn=!0,xr=!0),ge.id!==w&&(w=ge.id,sn=!0),Ni||L!==N){te.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Tt.setValue(V,"projectionMatrix",N.projectionMatrix),Tt.setValue(V,"viewMatrix",N.matrixWorldInverse);const en=Tt.map.cameraPosition;en!==void 0&&en.setValue(V,re.setFromMatrixPosition(N.matrixWorld)),he.logarithmicDepthBuffer&&Tt.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&Tt.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,sn=!0,xr=!0)}if(ue.isSkinnedMesh){Tt.setOptional(V,ue,"bindMatrix"),Tt.setOptional(V,ue,"bindMatrixInverse");const Yt=ue.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Tt.setValue(V,"boneTexture",Yt.boneTexture,ke))}ue.isBatchedMesh&&(Tt.setOptional(V,ue,"batchingTexture"),Tt.setValue(V,"batchingTexture",ue._matricesTexture,ke),Tt.setOptional(V,ue,"batchingIdTexture"),Tt.setValue(V,"batchingIdTexture",ue._indirectTexture,ke),Tt.setOptional(V,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Tt.setValue(V,"batchingColorTexture",ue._colorsTexture,ke));const hn=me.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ue.update(ue,me,an),(sn||Qe.receiveShadow!==ue.receiveShadow)&&(Qe.receiveShadow=ue.receiveShadow,Tt.setValue(V,"receiveShadow",ue.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(Qt.envMap.value=je,Qt.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&le.environment!==null&&(Qt.envMapIntensity.value=le.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=e_()),sn&&(Tt.setValue(V,"toneMappingExposure",T.toneMappingExposure),Qe.needsLights&&aa(Qt,xr),Be&&ge.fog===!0&&$.refreshFogUniforms(Qt,Be),$.refreshMaterialUniforms(Qt,ge,se,J,y.state.transmissionRenderTarget[N.id]),Vo.upload(V,to(Qe),Qt,ke)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(Vo.upload(V,to(Qe),Qt,ke),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&Tt.setValue(V,"center",ue.center),Tt.setValue(V,"modelViewMatrix",ue.modelViewMatrix),Tt.setValue(V,"normalMatrix",ue.normalMatrix),Tt.setValue(V,"modelMatrix",ue.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const Yt=ge.uniformsGroups;for(let en=0,da=Yt.length;en<da;en++){const gi=Yt[en];we.update(gi,an),we.bind(gi,an)}}return an}function aa(N,le){N.ambientLightColor.needsUpdate=le,N.lightProbe.needsUpdate=le,N.directionalLights.needsUpdate=le,N.directionalLightShadows.needsUpdate=le,N.pointLights.needsUpdate=le,N.pointLightShadows.needsUpdate=le,N.spotLights.needsUpdate=le,N.spotLightShadows.needsUpdate=le,N.rectAreaLights.needsUpdate=le,N.hemisphereLights.needsUpdate=le}function sa(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(N,le,me){const ge=Te.get(N);ge.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),Te.get(N.texture).__webglTexture=le,Te.get(N.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:me,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,le){const me=Te.get(N);me.__webglFramebuffer=le,me.__useDefaultFramebuffer=le===void 0};const la=V.createFramebuffer();this.setRenderTarget=function(N,le=0,me=0){E=N,D=le,S=me;let ge=!0,ue=null,Be=!1,We=!1;if(N){const je=Te.get(N);if(je.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(V.FRAMEBUFFER,null),ge=!1;else if(je.__webglFramebuffer===void 0)ke.setupRenderTarget(N);else if(je.__hasExternalTextures)ke.rebindTextures(N,Te.get(N.texture).__webglTexture,Te.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ze=N.depthTexture;if(je.__boundDepthTexture!==Ze){if(Ze!==null&&Te.has(Ze)&&(N.width!==Ze.image.width||N.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(N)}}const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);const tt=Te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(tt[le])?ue=tt[le][me]:ue=tt[le],Be=!0):N.samples>0&&ke.useMultisampledRTT(N)===!1?ue=Te.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?ue=tt[me]:ue=tt,P.copy(N.viewport),I.copy(N.scissor),z=N.scissorTest}else P.copy(ie).multiplyScalar(se).floor(),I.copy(Ee).multiplyScalar(se).floor(),z=ee;if(me!==0&&(ue=la),te.bindFramebuffer(V.FRAMEBUFFER,ue)&&ge&&te.drawBuffers(N,ue),te.viewport(P),te.scissor(I),te.setScissorTest(z),Be){const je=Te.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+le,je.__webglTexture,me)}else if(We){const je=le;for(let et=0;et<N.textures.length;et++){const tt=Te.get(N.textures[et]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+et,tt.__webglTexture,me,je)}}else if(N!==null&&me!==0){const je=Te.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,je.__webglTexture,me)}w=-1},this.readRenderTargetPixels=function(N,le,me,ge,ue,Be,We,qe=0){if(!(N&&N.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){te.bindFramebuffer(V.FRAMEBUFFER,je);try{const et=N.textures[qe],tt=et.format,Ze=et.type;if(!he.textureFormatReadable(tt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ze)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=N.width-ge&&me>=0&&me<=N.height-ue&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(le,me,ge,ue,Fe.convert(tt),Fe.convert(Ze),Be))}finally{const et=E!==null?Te.get(E).__webglFramebuffer:null;te.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(N,le,me,ge,ue,Be,We,qe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je)if(le>=0&&le<=N.width-ge&&me>=0&&me<=N.height-ue){te.bindFramebuffer(V.FRAMEBUFFER,je);const et=N.textures[qe],tt=et.format,Ze=et.type;if(!he.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.bufferData(V.PIXEL_PACK_BUFFER,Be.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qe),V.readPixels(le,me,ge,ue,Fe.convert(tt),Fe.convert(Ze),0);const vt=E!==null?Te.get(E).__webglFramebuffer:null;te.bindFramebuffer(V.FRAMEBUFFER,vt);const wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ip(V,wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Be),V.deleteBuffer(dt),V.deleteSync(wt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,le=null,me=0){const ge=Math.pow(2,-me),ue=Math.floor(N.image.width*ge),Be=Math.floor(N.image.height*ge),We=le!==null?le.x:0,qe=le!==null?le.y:0;ke.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,me,0,0,We,qe,ue,Be),te.unbindTexture()};const ca=V.createFramebuffer(),ua=V.createFramebuffer();this.copyTextureToTexture=function(N,le,me=null,ge=null,ue=0,Be=null){Be===null&&(ue!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=ue,ue=0):Be=0);let We,qe,je,et,tt,Ze,dt,vt,wt;const Ct=N.isCompressedTexture?N.mipmaps[Be]:N.image;if(me!==null)We=me.max.x-me.min.x,qe=me.max.y-me.min.y,je=me.isBox3?me.max.z-me.min.z:1,et=me.min.x,tt=me.min.y,Ze=me.isBox3?me.min.z:0;else{const hn=Math.pow(2,-ue);We=Math.floor(Ct.width*hn),qe=Math.floor(Ct.height*hn),N.isDataArrayTexture?je=Ct.depth:N.isData3DTexture?je=Math.floor(Ct.depth*hn):je=1,et=0,tt=0,Ze=0}ge!==null?(dt=ge.x,vt=ge.y,wt=ge.z):(dt=0,vt=0,wt=0);const yt=Fe.convert(le.format),Qe=Fe.convert(le.type);let St;le.isData3DTexture?(ke.setTexture3D(le,0),St=V.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(ke.setTexture2DArray(le,0),St=V.TEXTURE_2D_ARRAY):(ke.setTexture2D(le,0),St=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,le.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,le.unpackAlignment);const mt=V.getParameter(V.UNPACK_ROW_LENGTH),an=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ni=V.getParameter(V.UNPACK_SKIP_PIXELS),sn=V.getParameter(V.UNPACK_SKIP_ROWS),xr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ct.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ct.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,et),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const Tt=N.isDataArrayTexture||N.isData3DTexture,Qt=le.isDataArrayTexture||le.isData3DTexture;if(N.isDepthTexture){const hn=Te.get(N),Yt=Te.get(le),en=Te.get(hn.__renderTarget),da=Te.get(Yt.__renderTarget);te.bindFramebuffer(V.READ_FRAMEBUFFER,en.__webglFramebuffer),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let gi=0;gi<je;gi++)Tt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,ue,Ze+gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.get(le).__webglTexture,Be,wt+gi)),V.blitFramebuffer(et,tt,We,qe,dt,vt,We,qe,V.DEPTH_BUFFER_BIT,V.NEAREST);te.bindFramebuffer(V.READ_FRAMEBUFFER,null),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ue!==0||N.isRenderTargetTexture||Te.has(N)){const hn=Te.get(N),Yt=Te.get(le);te.bindFramebuffer(V.READ_FRAMEBUFFER,ca),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,ua);for(let en=0;en<je;en++)Tt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,ue,Ze+en):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,ue),Qt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.__webglTexture,Be,wt+en):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Yt.__webglTexture,Be),ue!==0?V.blitFramebuffer(et,tt,We,qe,dt,vt,We,qe,V.COLOR_BUFFER_BIT,V.NEAREST):Qt?V.copyTexSubImage3D(St,Be,dt,vt,wt+en,et,tt,We,qe):V.copyTexSubImage2D(St,Be,dt,vt,et,tt,We,qe);te.bindFramebuffer(V.READ_FRAMEBUFFER,null),te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Qt?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(St,Be,dt,vt,wt,We,qe,je,yt,Qe,Ct.data):le.isCompressedArrayTexture?V.compressedTexSubImage3D(St,Be,dt,vt,wt,We,qe,je,yt,Ct.data):V.texSubImage3D(St,Be,dt,vt,wt,We,qe,je,yt,Qe,Ct):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Be,dt,vt,We,qe,yt,Qe,Ct.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Be,dt,vt,Ct.width,Ct.height,yt,Ct.data):V.texSubImage2D(V.TEXTURE_2D,Be,dt,vt,We,qe,yt,Qe,Ct);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,an),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ni),V.pixelStorei(V.UNPACK_SKIP_ROWS,sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xr),Be===0&&le.generateMipmaps&&V.generateMipmap(St),te.unbindTexture()},this.initRenderTarget=function(N){Te.get(N).__webglFramebuffer===void 0&&ke.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ke.setTextureCube(N,0):N.isData3DTexture?ke.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ke.setTexture2DArray(N,0):ke.setTexture2D(N,0),te.unbindTexture()},this.resetState=function(){D=0,S=0,E=null,te.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const zc={type:"change"},hl={type:"start"},$u={type:"end"},Io=new qo,Vc=new ri,n_=Math.cos(70*op.DEG2RAD),Ft=new ae,nn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$a=1e-6;class i_ extends pm{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new ae,this.cursor=new ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ae,this._lastQuaternion=new hi,this._lastTargetPosition=new ae,this._quat=new hi().setFromUnitVectors(e.up,new ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mc,this._sphericalDelta=new mc,this._scale=1,this._panOffset=new ae,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new ae,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=r_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=h_.bind(this),this._onMouseWheel=c_.bind(this),this._onKeyDown=u_.bind(this),this._onTouchStart=d_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=s_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=p_.bind(this),this._interceptControlUp=m_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zc),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const l=Ft.length();s=this._clampDistance(l*this._scale);const c=l-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const l=new ae(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const a=new ae(this._mouse.x,this._mouse.y,0);a.unproject(this.object),this.object.position.sub(a).add(l),this.object.updateMatrixWorld(),s=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<n_?this.object.lookAt(this.target):(Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(Vc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>$a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$a||this._lastTargetPosition.distanceToSquared(this.target)>$a?(this.dispatchEvent(zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let o=Ft.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,s=i.width,l=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(s,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function r_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function o_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function a_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function s_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(hl)}function l_(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function c_(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($u))}function u_(n){this.enabled!==!1&&this._handleKeyDown(n)}function d_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(hl)}function f_(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function h_(n){this.enabled!==!1&&n.preventDefault()}function p_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class g_ extends Ln{constructor(e){super(e)}load(e,t,i,r){const o=this,s=new Gu(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{t(o.parse(l))}catch(c){r?r(c):console.error(c),o.manager.itemError(e)}},i,r)}parse(e){function t(a){const u=new DataView(a),d=32/8*3+32/8*3*3+16/8,m=u.getUint32(80,!0);if(80+32/8+m*d===u.byteLength)return!0;const g=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(g,u,v))return!1;return!0}function i(a,u,d){for(let m=0,p=a.length;m<p;m++)if(a[m]!==u.getUint8(d+m))return!1;return!0}function r(a){const u=new DataView(a),d=u.getUint32(80,!0);let m,p,g,v=!1,h,f,b,y,_;for(let w=0;w<70;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(v=!0,h=new Float32Array(d*3*3),f=u.getUint8(w+6)/255,b=u.getUint8(w+7)/255,y=u.getUint8(w+8)/255,_=u.getUint8(w+9)/255);const A=84,T=12*4+2,C=new Dt,D=new Float32Array(d*3*3),S=new Float32Array(d*3*3),E=new it;for(let w=0;w<d;w++){const L=A+w*T,P=u.getFloat32(L,!0),I=u.getFloat32(L+4,!0),z=u.getFloat32(L+8,!0);if(v){const G=u.getUint16(L+48,!0);G&32768?(m=f,p=b,g=y):(m=(G&31)/31,p=(G>>5&31)/31,g=(G>>10&31)/31)}for(let G=1;G<=3;G++){const j=L+G*12,W=w*3*3+(G-1)*3;D[W]=u.getFloat32(j,!0),D[W+1]=u.getFloat32(j+4,!0),D[W+2]=u.getFloat32(j+8,!0),S[W]=P,S[W+1]=I,S[W+2]=z,v&&(E.setRGB(m,p,g,Pt),h[W]=E.r,h[W+1]=E.g,h[W+2]=E.b)}}return C.setAttribute("position",new on(D,3)),C.setAttribute("normal",new on(S,3)),v&&(C.setAttribute("color",new on(h,3)),C.hasColors=!0,C.alpha=_),C}function o(a){const u=new Dt,d=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,h=new RegExp("vertex"+v+v+v,"g"),f=new RegExp("normal"+v+v+v,"g"),b=[],y=[],_=[],A=new ae;let T,C=0,D=0,S=0;for(;(T=d.exec(a))!==null;){D=S;const E=T[0],w=(T=p.exec(E))!==null?T[1]:"";for(_.push(w);(T=m.exec(E))!==null;){let I=0,z=0;const G=T[0];for(;(T=f.exec(G))!==null;)A.x=parseFloat(T[1]),A.y=parseFloat(T[2]),A.z=parseFloat(T[3]),z++;for(;(T=h.exec(G))!==null;)b.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),y.push(A.x,A.y,A.z),I++,S++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const L=D,P=S-D;u.userData.groupNames=_,u.addGroup(L,P,C),C++}return u.setAttribute("position",new ct(b,3)),u.setAttribute("normal",new ct(y,3)),u}function s(a){return typeof a!="string"?new TextDecoder().decode(a):a}function l(a){if(typeof a=="string"){const u=new Uint8Array(a.length);for(let d=0;d<a.length;d++)u[d]=a.charCodeAt(d)&255;return u.buffer||u}else return a}const c=l(e);return t(c)?r(c):o(s(e))}}/*! chevrotain - v9.0.1 */var ot=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Zu=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),gt=ot((n,e)=>{var t=n&&n.__spreadArray||function(Q,he){for(var te=0,Se=he.length,Te=Q.length;te<Se;te++,Te++)Q[Te]=he[te];return Q};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(Q){return Q&&Q.length===0}n.isEmpty=i;function r(Q){return Q==null?[]:Object.keys(Q)}n.keys=r;function o(Q){for(var he=[],te=Object.keys(Q),Se=0;Se<te.length;Se++)he.push(Q[te[Se]]);return he}n.values=o;function s(Q,he){for(var te=[],Se=r(Q),Te=0;Te<Se.length;Te++){var ke=Se[Te];te.push(he.call(null,Q[ke],ke))}return te}n.mapValues=s;function l(Q,he){for(var te=[],Se=0;Se<Q.length;Se++)te.push(he.call(null,Q[Se],Se));return te}n.map=l;function c(Q){for(var he=[],te=0;te<Q.length;te++){var Se=Q[te];Array.isArray(Se)?he=he.concat(c(Se)):he.push(Se)}return he}n.flatten=c;function a(Q){return i(Q)?void 0:Q[0]}n.first=a;function u(Q){var he=Q&&Q.length;return he?Q[he-1]:void 0}n.last=u;function d(Q,he){if(Array.isArray(Q))for(var te=0;te<Q.length;te++)he.call(null,Q[te],te);else if(G(Q))for(var Se=r(Q),te=0;te<Se.length;te++){var Te=Se[te],ke=Q[Te];he.call(null,ke,Te)}else throw Error("non exhaustive match")}n.forEach=d;function m(Q){return typeof Q=="string"}n.isString=m;function p(Q){return Q===void 0}n.isUndefined=p;function g(Q){return Q instanceof Function}n.isFunction=g;function v(Q,he){return he===void 0&&(he=1),Q.slice(he,Q.length)}n.drop=v;function h(Q,he){return he===void 0&&(he=1),Q.slice(0,Q.length-he)}n.dropRight=h;function f(Q,he){var te=[];if(Array.isArray(Q))for(var Se=0;Se<Q.length;Se++){var Te=Q[Se];he.call(null,Te)&&te.push(Te)}return te}n.filter=f;function b(Q,he){return f(Q,function(te){return!he(te)})}n.reject=b;function y(Q,he){for(var te=Object.keys(Q),Se={},Te=0;Te<te.length;Te++){var ke=te[Te],M=Q[ke];he(M)&&(Se[ke]=M)}return Se}n.pick=y;function _(Q,he){return G(Q)?Q.hasOwnProperty(he):!1}n.has=_;function A(Q,he){return D(Q,function(te){return te===he})!==void 0}n.contains=A;function T(Q){for(var he=[],te=0;te<Q.length;te++)he.push(Q[te]);return he}n.cloneArr=T;function C(Q){var he={};for(var te in Q)Object.prototype.hasOwnProperty.call(Q,te)&&(he[te]=Q[te]);return he}n.cloneObj=C;function D(Q,he){for(var te=0;te<Q.length;te++){var Se=Q[te];if(he.call(null,Se))return Se}}n.find=D;function S(Q,he){for(var te=[],Se=0;Se<Q.length;Se++){var Te=Q[Se];he.call(null,Te)&&te.push(Te)}return te}n.findAll=S;function E(Q,he,te){for(var Se=Array.isArray(Q),Te=Se?Q:o(Q),ke=Se?[]:r(Q),M=te,x=0;x<Te.length;x++)M=he.call(null,M,Te[x],Se?x:ke[x]);return M}n.reduce=E;function w(Q){return b(Q,function(he){return he==null})}n.compact=w;function L(Q,he){he===void 0&&(he=function(Se){return Se});var te=[];return E(Q,function(Se,Te){var ke=he(Te);return A(te,ke)?Se:(te.push(ke),Se.concat(Te))},[])}n.uniq=L;function P(Q){for(var he=[],te=1;te<arguments.length;te++)he[te-1]=arguments[te];var Se=[null],Te=Se.concat(he);return Function.bind.apply(Q,Te)}n.partial=P;function I(Q){return Array.isArray(Q)}n.isArray=I;function z(Q){return Q instanceof RegExp}n.isRegExp=z;function G(Q){return Q instanceof Object}n.isObject=G;function j(Q,he){for(var te=0;te<Q.length;te++)if(!he(Q[te],te))return!1;return!0}n.every=j;function W(Q,he){return b(Q,function(te){return A(he,te)})}n.difference=W;function J(Q,he){for(var te=0;te<Q.length;te++)if(he(Q[te]))return!0;return!1}n.some=J;function se(Q,he){for(var te=0;te<Q.length;te++)if(Q[te]===he)return te;return-1}n.indexOf=se;function xe(Q,he){var te=T(Q);return te.sort(function(Se,Te){return he(Se)-he(Te)}),te}n.sortBy=xe;function ne(Q,he){if(Q.length!==he.length)throw Error("can't zipObject with different number of keys and values!");for(var te={},Se=0;Se<Q.length;Se++)te[Q[Se]]=he[Se];return te}n.zipObject=ne;function ie(Q){for(var he=[],te=1;te<arguments.length;te++)he[te-1]=arguments[te];for(var Se=0;Se<he.length;Se++)for(var Te=he[Se],ke=r(Te),M=0;M<ke.length;M++){var x=ke[M];Q[x]=Te[x]}return Q}n.assign=ie;function Ee(Q){for(var he=[],te=1;te<arguments.length;te++)he[te-1]=arguments[te];for(var Se=0;Se<he.length;Se++)for(var Te=he[Se],ke=r(Te),M=0;M<ke.length;M++){var x=ke[M];_(Q,x)||(Q[x]=Te[x])}return Q}n.assignNoOverwrite=Ee;function ee(){for(var Q=[],he=0;he<arguments.length;he++)Q[he]=arguments[he];return Ee.apply(void 0,t([{}],Q))}n.defaults=ee;function k(Q,he){var te={};return d(Q,function(Se){var Te=he(Se),ke=te[Te];ke?ke.push(Se):te[Te]=[Se]}),te}n.groupBy=k;function B(Q,he){for(var te=C(Q),Se=r(he),Te=0;Te<Se.length;Te++){var ke=Se[Te],M=he[ke];te[ke]=M}return te}n.merge=B;function K(){}n.NOOP=K;function Y(Q){return Q}n.IDENTITY=Y;function re(Q){for(var he=[],te=0;te<Q.length;te++){var Se=Q[te];he.push(Se!==void 0?Se:void 0)}return he}n.packArray=re;function pe(Q){console&&console.error&&console.error("Error: "+Q)}n.PRINT_ERROR=pe;function _e(Q){console&&console.warn&&console.warn("Warning: "+Q)}n.PRINT_WARNING=_e;function Pe(){return typeof Map=="function"}n.isES2015MapSupported=Pe;function Xe(Q){return Q[Q.length-1]}n.peek=Xe;function V(Q){var he=new Date().getTime(),te=Q(),Se=new Date().getTime(),Te=Se-he;return{time:Te,value:te}}n.timer=V;function Ne(Q){function he(){}he.prototype=Q;var te=new he;function Se(){return typeof te.bar}return Se(),Se(),Q}n.toFastProperties=Ne}),pl=ot((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(h){this.idx=h.idx,this.input=h.input,this.groupIdx=h.groupIdx},t.prototype.pattern=function(h){this.idx=0,this.input=h,this.groupIdx=0,this.consumeChar("/");var f=this.disjunction();this.consumeChar("/");for(var b={type:"Flags",loc:{begin:this.idx,end:h.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":c(b,"global");break;case"i":c(b,"ignoreCase");break;case"m":c(b,"multiLine");break;case"u":c(b,"unicode");break;case"y":c(b,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:b,value:f,loc:this.loc(0)}},t.prototype.disjunction=function(){var h=[],f=this.idx;for(h.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),h.push(this.alternative());return{type:"Disjunction",value:h,loc:this.loc(f)}},t.prototype.alternative=function(){for(var h=[],f=this.idx;this.isTerm();)h.push(this.term());return{type:"Alternative",value:h,loc:this.loc(f)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var h=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(h)};case"$":return{type:"EndAnchor",loc:this.loc(h)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(h)};case"B":return{type:"NonWordBoundary",loc:this.loc(h)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var f;switch(this.popChar()){case"=":f="Lookahead";break;case"!":f="NegativeLookahead";break}a(f);var b=this.disjunction();return this.consumeChar(")"),{type:f,value:b,loc:this.loc(h)}}u()},t.prototype.quantifier=function(h){var f,b=this.idx;switch(this.popChar()){case"*":f={atLeast:0,atMost:1/0};break;case"+":f={atLeast:1,atMost:1/0};break;case"?":f={atLeast:0,atMost:1};break;case"{":var y=this.integerIncludingZero();switch(this.popChar()){case"}":f={atLeast:y,atMost:y};break;case",":var _;this.isDigit()?(_=this.integerIncludingZero(),f={atLeast:y,atMost:_}):f={atLeast:y,atMost:1/0},this.consumeChar("}");break}if(h===!0&&f===void 0)return;a(f);break}if(!(h===!0&&f===void 0))return a(f),this.peekChar(0)==="?"?(this.consumeChar("?"),f.greedy=!1):f.greedy=!0,f.type="Quantifier",f.loc=this.loc(b),f},t.prototype.atom=function(){var h,f=this.idx;switch(this.peekChar()){case".":h=this.dotAll();break;case"\\":h=this.atomEscape();break;case"[":h=this.characterClass();break;case"(":h=this.group();break}return h===void 0&&this.isPatternCharacter()&&(h=this.patternCharacter()),a(h),h.loc=this.loc(f),this.isQuantifier()&&(h.quantifier=this.quantifier()),h},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var h=this.positiveInteger();return{type:"GroupBackReference",value:h}},t.prototype.characterClassEscape=function(){var h,f=!1;switch(this.popChar()){case"d":h=m;break;case"D":h=m,f=!0;break;case"s":h=g;break;case"S":h=g,f=!0;break;case"w":h=p;break;case"W":h=p,f=!0;break}return a(h),{type:"Set",value:h,complement:f}},t.prototype.controlEscapeAtom=function(){var h;switch(this.popChar()){case"f":h=s("\f");break;case"n":h=s(`
`);break;case"r":h=s("\r");break;case"t":h=s("	");break;case"v":h=s("\v");break}return a(h),{type:"Character",value:h}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var h=this.popChar();if(/[a-zA-Z]/.test(h)===!1)throw Error("Invalid ");var f=h.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:f}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var h=this.popChar();return{type:"Character",value:s(h)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var h=this.popChar();return{type:"Character",value:s(h)}}},t.prototype.characterClass=function(){var h=[],f=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),f=!0);this.isClassAtom();){var b=this.classAtom(),y=b.type==="Character";if(y&&this.isRangeDash()){this.consumeChar("-");var _=this.classAtom(),A=_.type==="Character";if(A){if(_.value<b.value)throw Error("Range out of order in character class");h.push({from:b.value,to:_.value})}else l(b.value,h),h.push(s("-")),l(_.value,h)}else l(b.value,h)}return this.consumeChar("]"),{type:"Set",complement:f,value:h}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var h=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),h=!1;break;default:this.groupIdx++;break}var f=this.disjunction();this.consumeChar(")");var b={type:"Group",capturing:h,value:f};return h&&(b.idx=this.groupIdx),b},t.prototype.positiveInteger=function(){var h=this.popChar();if(o.test(h)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.integerIncludingZero=function(){var h=this.popChar();if(r.test(h)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)h+=this.popChar();return parseInt(h,10)},t.prototype.patternCharacter=function(){var h=this.popChar();switch(h){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(h)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(h){switch(h===void 0&&(h=0),this.peekChar(h)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var h=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(h)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(h){for(var f="",b=0;b<h;b++){var y=this.popChar();if(i.test(y)===!1)throw Error("Expecting a HexDecimal digits");f+=y}var _=parseInt(f,16);return{type:"Character",value:_}},t.prototype.peekChar=function(h){return h===void 0&&(h=0),this.input[this.idx+h]},t.prototype.popChar=function(){var h=this.peekChar(0);return this.consumeChar(),h},t.prototype.consumeChar=function(h){if(h!==void 0&&this.input[this.idx]!==h)throw Error("Expected: '"+h+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(h){return{begin:h,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(h){return h.charCodeAt(0)}function l(h,f){h.length!==void 0?h.forEach(function(b){f.push(b)}):f.push(h)}function c(h,f){if(h[f]===!0)throw"duplicate flag "+f;h[f]=!0}function a(h){if(h===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var d,m=[];for(d=s("0");d<=s("9");d++)m.push(d);var p=[s("_")].concat(m);for(d=s("a");d<=s("z");d++)p.push(d);for(d=s("A");d<=s("Z");d++)p.push(d);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function v(){}return v.prototype.visitChildren=function(h){for(var f in h){var b=h[f];h.hasOwnProperty(f)&&(b.type!==void 0?this.visit(b):Array.isArray(b)&&b.forEach(function(y){this.visit(y)},this))}},v.prototype.visit=function(h){switch(h.type){case"Pattern":this.visitPattern(h);break;case"Flags":this.visitFlags(h);break;case"Disjunction":this.visitDisjunction(h);break;case"Alternative":this.visitAlternative(h);break;case"StartAnchor":this.visitStartAnchor(h);break;case"EndAnchor":this.visitEndAnchor(h);break;case"WordBoundary":this.visitWordBoundary(h);break;case"NonWordBoundary":this.visitNonWordBoundary(h);break;case"Lookahead":this.visitLookahead(h);break;case"NegativeLookahead":this.visitNegativeLookahead(h);break;case"Character":this.visitCharacter(h);break;case"Set":this.visitSet(h);break;case"Group":this.visitGroup(h);break;case"GroupBackReference":this.visitGroupBackReference(h);break;case"Quantifier":this.visitQuantifier(h);break}this.visitChildren(h)},v.prototype.visitPattern=function(h){},v.prototype.visitFlags=function(h){},v.prototype.visitDisjunction=function(h){},v.prototype.visitAlternative=function(h){},v.prototype.visitStartAnchor=function(h){},v.prototype.visitEndAnchor=function(h){},v.prototype.visitWordBoundary=function(h){},v.prototype.visitNonWordBoundary=function(h){},v.prototype.visitLookahead=function(h){},v.prototype.visitNegativeLookahead=function(h){},v.prototype.visitCharacter=function(h){},v.prototype.visitSet=function(h){},v.prototype.visitGroup=function(h){},v.prototype.visitGroupBackReference=function(h){},v.prototype.visitQuantifier=function(h){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})}),ml=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=pl(),t={},i=new e.RegExpParser;function r(s){var l=s.toString();if(t.hasOwnProperty(l))return t[l];var c=i.pattern(l);return t[l]=c,c}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),x_=ot(n=>{var e=n&&n.__extends||function(){var v=function(h,f){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,y){b.__proto__=y}||function(b,y){for(var _ in y)Object.prototype.hasOwnProperty.call(y,_)&&(b[_]=y[_])},v(h,f)};return function(h,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");v(h,f);function b(){this.constructor=h}h.prototype=f===null?Object.create(f):(b.prototype=f.prototype,new b)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=pl(),i=gt(),r=ml(),o=Ju(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function l(v,h){h===void 0&&(h=!1);try{var f=r.getRegExpAst(v),b=c(f.value,{},f.flags.ignoreCase);return b}catch(_){if(_.message===s)h&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+v.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var y="";h&&(y=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+v.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+y)}}return[]}n.getOptimizedStartCodesIndices=l;function c(v,h,f){switch(v.type){case"Disjunction":for(var b=0;b<v.value.length;b++)c(v.value[b],h,f);break;case"Alternative":for(var y=v.value,b=0;b<y.length;b++){var _=y[b];switch(_.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var A=_;switch(A.type){case"Character":a(A.value,h,f);break;case"Set":if(A.complement===!0)throw Error(s);i.forEach(A.value,function(D){if(typeof D=="number")a(D,h,f);else{var S=D;if(f===!0)for(var E=S.from;E<=S.to;E++)a(E,h,f);else{for(var E=S.from;E<=S.to&&E<o.minOptimizationVal;E++)a(E,h,f);if(S.to>=o.minOptimizationVal)for(var w=S.from>=o.minOptimizationVal?S.from:o.minOptimizationVal,L=S.to,P=o.charCodeToOptimizedIndex(w),I=o.charCodeToOptimizedIndex(L),z=P;z<=I;z++)h[z]=z}}});break;case"Group":c(A.value,h,f);break;default:throw Error("Non Exhaustive Match")}var T=A.quantifier!==void 0&&A.quantifier.atLeast===0;if(A.type==="Group"&&m(A)===!1||A.type!=="Group"&&T===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(h)}n.firstCharOptimizedIndices=c;function a(v,h,f){var b=o.charCodeToOptimizedIndex(v);h[b]=b,f===!0&&u(v,h)}function u(v,h){var f=String.fromCharCode(v),b=f.toUpperCase();if(b!==f){var y=o.charCodeToOptimizedIndex(b.charCodeAt(0));h[y]=y}else{var _=f.toLowerCase();if(_!==f){var y=o.charCodeToOptimizedIndex(_.charCodeAt(0));h[y]=y}}}function d(v,h){return i.find(v.value,function(f){if(typeof f=="number")return i.contains(h,f);var b=f;return i.find(h,function(y){return b.from<=y&&y<=b.to})!==void 0})}function m(v){return v.quantifier&&v.quantifier.atLeast===0?!0:v.value?i.isArray(v.value)?i.every(v.value,m):m(v.value):!1}var p=function(v){e(h,v);function h(f){var b=v.call(this)||this;return b.targetCharCodes=f,b.found=!1,b}return h.prototype.visitChildren=function(f){if(this.found!==!0){switch(f.type){case"Lookahead":this.visitLookahead(f);return;case"NegativeLookahead":this.visitNegativeLookahead(f);return}v.prototype.visitChildren.call(this,f)}},h.prototype.visitCharacter=function(f){i.contains(this.targetCharCodes,f.value)&&(this.found=!0)},h.prototype.visitSet=function(f){f.complement?d(f,this.targetCharCodes)===void 0&&(this.found=!0):d(f,this.targetCharCodes)!==void 0&&(this.found=!0)},h}(t.BaseRegExpVisitor);function g(v,h){if(h instanceof RegExp){var f=r.getRegExpAst(h),b=new p(v);return b.visit(f),b.found}else return i.find(h,function(y){return i.contains(v,y.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),Ju=ot(n=>{var e=n&&n.__extends||function(){var ee=function(k,B){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(K,Y){K.__proto__=Y}||function(K,Y){for(var re in Y)Object.prototype.hasOwnProperty.call(Y,re)&&(K[re]=Y[re])},ee(k,B)};return function(k,B){if(typeof B!="function"&&B!==null)throw new TypeError("Class extends value "+String(B)+" is not a constructor or null");ee(k,B);function K(){this.constructor=k}k.prototype=B===null?Object.create(B):(K.prototype=B.prototype,new K)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=pl(),i=ea(),r=gt(),o=x_(),s=ml(),l="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function c(){n.SUPPORT_STICKY=!1}n.disableSticky=c;function a(){n.SUPPORT_STICKY=!0}n.enableSticky=a;function u(ee,k){k=r.defaults(k,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(M,x){return x()}});var B=k.tracer;B("initCharCodeToOptimizedIndexMap",function(){Ee()});var K;B("Reject Lexer.NA",function(){K=r.reject(ee,function(M){return M[l]===i.Lexer.NA})});var Y=!1,re;B("Transform Patterns",function(){Y=!1,re=r.map(K,function(M){var x=M[l];if(r.isRegExp(x)){var R=x.source;return R.length===1&&R!=="^"&&R!=="$"&&R!=="."&&!x.ignoreCase?R:R.length===2&&R[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],R[1])?R[1]:k.useSticky?L(x):w(x)}else{if(r.isFunction(x))return Y=!0,{exec:x};if(r.has(x,"exec"))return Y=!0,x;if(typeof x=="string"){if(x.length===1)return x;var F=x.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),O=new RegExp(F);return k.useSticky?L(O):w(O)}else throw Error("non exhaustive match")}})});var pe,_e,Pe,Xe,V;B("misc mapping",function(){pe=r.map(K,function(M){return M.tokenTypeIdx}),_e=r.map(K,function(M){var x=M.GROUP;if(x!==i.Lexer.SKIPPED){if(r.isString(x))return x;if(r.isUndefined(x))return!1;throw Error("non exhaustive match")}}),Pe=r.map(K,function(M){var x=M.LONGER_ALT;if(x){var R=r.indexOf(K,x);return R}}),Xe=r.map(K,function(M){return M.PUSH_MODE}),V=r.map(K,function(M){return r.has(M,"POP_MODE")})});var Ne;B("Line Terminator Handling",function(){var M=se(k.lineTerminatorCharacters);Ne=r.map(K,function(x){return!1}),k.positionTracking!=="onlyOffset"&&(Ne=r.map(K,function(x){if(r.has(x,"LINE_BREAKS"))return x.LINE_BREAKS;if(W(x,M)===!1)return o.canMatchCharCode(M,x.PATTERN)}))});var Q,he,te,Se;B("Misc Mapping #2",function(){Q=r.map(K,G),he=r.map(re,j),te=r.reduce(K,function(M,x){var R=x.GROUP;return r.isString(R)&&R!==i.Lexer.SKIPPED&&(M[R]=[]),M},{}),Se=r.map(re,function(M,x){return{pattern:re[x],longerAlt:Pe[x],canLineTerminator:Ne[x],isCustom:Q[x],short:he[x],group:_e[x],push:Xe[x],pop:V[x],tokenTypeIdx:pe[x],tokenType:K[x]}})});var Te=!0,ke=[];return k.safeMode||B("First Char Optimization",function(){ke=r.reduce(K,function(M,x,R){if(typeof x.PATTERN=="string"){var F=x.PATTERN.charCodeAt(0),O=ie(F);xe(M,O,Se[R])}else if(r.isArray(x.START_CHARS_HINT)){var U;r.forEach(x.START_CHARS_HINT,function(q){var ce=typeof q=="string"?q.charCodeAt(0):q,fe=ie(ce);U!==fe&&(U=fe,xe(M,fe,Se[R]))})}else if(r.isRegExp(x.PATTERN))if(x.PATTERN.unicode)Te=!1,k.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+x.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var $=o.getOptimizedStartCodesIndices(x.PATTERN,k.ensureOptimizations);r.isEmpty($)&&(Te=!1),r.forEach($,function(q){xe(M,q,Se[R])})}else k.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+x.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Te=!1;return M},[])}),B("ArrayPacking",function(){ke=r.packArray(ke)}),{emptyGroups:te,patternIdxToConfig:Se,charCodeToPatternIdxToConfig:ke,hasCustom:Y,canBeOptimized:Te}}n.analyzeTokenTypes=u;function d(ee,k){var B=[],K=p(ee);B=B.concat(K.errors);var Y=g(K.valid),re=Y.valid;return B=B.concat(Y.errors),B=B.concat(m(re)),B=B.concat(T(re)),B=B.concat(C(re,k)),B=B.concat(D(re)),B}n.validatePatterns=d;function m(ee){var k=[],B=r.filter(ee,function(K){return r.isRegExp(K[l])});return k=k.concat(h(B)),k=k.concat(y(B)),k=k.concat(_(B)),k=k.concat(A(B)),k=k.concat(f(B)),k}function p(ee){var k=r.filter(ee,function(Y){return!r.has(Y,l)}),B=r.map(k,function(Y){return{message:"Token Type: ->"+Y.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[Y]}}),K=r.difference(ee,k);return{errors:B,valid:K}}n.findMissingPatterns=p;function g(ee){var k=r.filter(ee,function(Y){var re=Y[l];return!r.isRegExp(re)&&!r.isFunction(re)&&!r.has(re,"exec")&&!r.isString(re)}),B=r.map(k,function(Y){return{message:"Token Type: ->"+Y.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[Y]}}),K=r.difference(ee,k);return{errors:B,valid:K}}n.findInvalidPatterns=g;var v=/[^\\][\$]/;function h(ee){var k=function(Y){e(re,Y);function re(){var pe=Y!==null&&Y.apply(this,arguments)||this;return pe.found=!1,pe}return re.prototype.visitEndAnchor=function(pe){this.found=!0},re}(t.BaseRegExpVisitor),B=r.filter(ee,function(Y){var re=Y[l];try{var pe=s.getRegExpAst(re),_e=new k;return _e.visit(pe),_e.found}catch{return v.test(re.source)}}),K=r.map(B,function(Y){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+Y.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[Y]}});return K}n.findEndOfInputAnchor=h;function f(ee){var k=r.filter(ee,function(K){var Y=K[l];return Y.test("")}),B=r.map(k,function(K){return{message:"Token Type: ->"+K.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[K]}});return B}n.findEmptyMatchRegExps=f;var b=/[^\\[][\^]|^\^/;function y(ee){var k=function(Y){e(re,Y);function re(){var pe=Y!==null&&Y.apply(this,arguments)||this;return pe.found=!1,pe}return re.prototype.visitStartAnchor=function(pe){this.found=!0},re}(t.BaseRegExpVisitor),B=r.filter(ee,function(Y){var re=Y[l];try{var pe=s.getRegExpAst(re),_e=new k;return _e.visit(pe),_e.found}catch{return b.test(re.source)}}),K=r.map(B,function(Y){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+Y.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[Y]}});return K}n.findStartOfInputAnchor=y;function _(ee){var k=r.filter(ee,function(K){var Y=K[l];return Y instanceof RegExp&&(Y.multiline||Y.global)}),B=r.map(k,function(K){return{message:"Token Type: ->"+K.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[K]}});return B}n.findUnsupportedFlags=_;function A(ee){var k=[],B=r.map(ee,function(re){return r.reduce(ee,function(pe,_e){return re.PATTERN.source===_e.PATTERN.source&&!r.contains(k,_e)&&_e.PATTERN!==i.Lexer.NA&&(k.push(_e),pe.push(_e)),pe},[])});B=r.compact(B);var K=r.filter(B,function(re){return re.length>1}),Y=r.map(K,function(re){var pe=r.map(re,function(Pe){return Pe.name}),_e=r.first(re).PATTERN;return{message:"The same RegExp pattern ->"+_e+"<-"+("has been used in all of the following Token Types: "+pe.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:re}});return Y}n.findDuplicatePatterns=A;function T(ee){var k=r.filter(ee,function(K){if(!r.has(K,"GROUP"))return!1;var Y=K.GROUP;return Y!==i.Lexer.SKIPPED&&Y!==i.Lexer.NA&&!r.isString(Y)}),B=r.map(k,function(K){return{message:"Token Type: ->"+K.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[K]}});return B}n.findInvalidGroupType=T;function C(ee,k){var B=r.filter(ee,function(Y){return Y.PUSH_MODE!==void 0&&!r.contains(k,Y.PUSH_MODE)}),K=r.map(B,function(Y){var re="Token Type: ->"+Y.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+Y.PUSH_MODE+"<-which does not exist";return{message:re,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[Y]}});return K}n.findModesThatDoNotExist=C;function D(ee){var k=[],B=r.reduce(ee,function(K,Y,re){var pe=Y.PATTERN;return pe===i.Lexer.NA||(r.isString(pe)?K.push({str:pe,idx:re,tokenType:Y}):r.isRegExp(pe)&&E(pe)&&K.push({str:pe.source,idx:re,tokenType:Y})),K},[]);return r.forEach(ee,function(K,Y){r.forEach(B,function(re){var pe=re.str,_e=re.idx,Pe=re.tokenType;if(Y<_e&&S(pe,K.PATTERN)){var Xe="Token: ->"+Pe.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+K.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;k.push({message:Xe,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[K,Pe]})}})}),k}n.findUnreachablePatterns=D;function S(ee,k){if(r.isRegExp(k)){var B=k.exec(ee);return B!==null&&B.index===0}else{if(r.isFunction(k))return k(ee,0,[],{});if(r.has(k,"exec"))return k.exec(ee,0,[],{});if(typeof k=="string")return k===ee;throw Error("non exhaustive match")}}function E(ee){var k=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(k,function(B){return ee.source.indexOf(B)!==-1})===void 0}function w(ee){var k=ee.ignoreCase?"i":"";return new RegExp("^(?:"+ee.source+")",k)}n.addStartOfInput=w;function L(ee){var k=ee.ignoreCase?"iy":"y";return new RegExp(""+ee.source,k)}n.addStickyFlag=L;function P(ee,k,B){var K=[];return r.has(ee,n.DEFAULT_MODE)||K.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(ee,n.MODES)||K.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(ee,n.MODES)&&r.has(ee,n.DEFAULT_MODE)&&!r.has(ee.modes,ee.defaultMode)&&K.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+ee.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(ee,n.MODES)&&r.forEach(ee.modes,function(Y,re){r.forEach(Y,function(pe,_e){r.isUndefined(pe)&&K.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+re+"> at index: <"+_e+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),K}n.performRuntimeChecks=P;function I(ee,k,B){var K=[],Y=!1,re=r.compact(r.flatten(r.mapValues(ee.modes,function(Pe){return Pe}))),pe=r.reject(re,function(Pe){return Pe[l]===i.Lexer.NA}),_e=se(B);return k&&r.forEach(pe,function(Pe){var Xe=W(Pe,_e);if(Xe!==!1){var V=J(Pe,Xe),Ne={message:V,type:Xe.issue,tokenType:Pe};K.push(Ne)}else r.has(Pe,"LINE_BREAKS")?Pe.LINE_BREAKS===!0&&(Y=!0):o.canMatchCharCode(_e,Pe.PATTERN)&&(Y=!0)}),k&&!Y&&K.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),K}n.performWarningRuntimeChecks=I;function z(ee){var k={},B=r.keys(ee);return r.forEach(B,function(K){var Y=ee[K];if(r.isArray(Y))k[K]=[];else throw Error("non exhaustive match")}),k}n.cloneEmptyGroups=z;function G(ee){var k=ee.PATTERN;if(r.isRegExp(k))return!1;if(r.isFunction(k)||r.has(k,"exec"))return!0;if(r.isString(k))return!1;throw Error("non exhaustive match")}n.isCustomPattern=G;function j(ee){return r.isString(ee)&&ee.length===1?ee.charCodeAt(0):!1}n.isShortPattern=j,n.LineTerminatorOptimizedTester={test:function(ee){for(var k=ee.length,B=this.lastIndex;B<k;B++){var K=ee.charCodeAt(B);if(K===10)return this.lastIndex=B+1,!0;if(K===13)return ee.charCodeAt(B+1)===10?this.lastIndex=B+2:this.lastIndex=B+1,!0}return!1},lastIndex:0};function W(ee,k){if(r.has(ee,"LINE_BREAKS"))return!1;if(r.isRegExp(ee.PATTERN)){try{o.canMatchCharCode(k,ee.PATTERN)}catch(B){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:B.message}}return!1}else{if(r.isString(ee.PATTERN))return!1;if(G(ee))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function J(ee,k){if(k.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+ee.name+`> Token Type
`)+("	 Root cause: "+k.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(k.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+ee.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=J;function se(ee){var k=r.map(ee,function(B){return r.isString(B)&&B.length>0?B.charCodeAt(0):B});return k}function xe(ee,k,B){ee[k]===void 0?ee[k]=[B]:ee[k].push(B)}n.minOptimizationVal=256;var ne=[];function ie(ee){return ee<n.minOptimizationVal?ee:ne[ee]}n.charCodeToOptimizedIndex=ie;function Ee(){if(r.isEmpty(ne)){ne=new Array(65536);for(var ee=0;ee<65536;ee++)ne[ee]=ee>255?255+~~(ee/255):ee}}}),Zr=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=gt();function t(v,h){var f=v.tokenTypeIdx;return f===h.tokenTypeIdx?!0:h.isParent===!0&&h.categoryMatchesMap[f]===!0}n.tokenStructuredMatcher=t;function i(v,h){return v.tokenTypeIdx===h.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(v){var h=o(v);s(h),c(h),l(h),e.forEach(h,function(f){f.isParent=f.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(v){for(var h=e.cloneArr(v),f=v,b=!0;b;){f=e.compact(e.flatten(e.map(f,function(_){return _.CATEGORIES})));var y=e.difference(f,h);h=h.concat(y),e.isEmpty(y)?b=!1:f=y}return h}n.expandCategories=o;function s(v){e.forEach(v,function(h){u(h)||(n.tokenIdxToClass[n.tokenShortNameIdx]=h,h.tokenTypeIdx=n.tokenShortNameIdx++),d(h)&&!e.isArray(h.CATEGORIES)&&(h.CATEGORIES=[h.CATEGORIES]),d(h)||(h.CATEGORIES=[]),m(h)||(h.categoryMatches=[]),p(h)||(h.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function l(v){e.forEach(v,function(h){h.categoryMatches=[],e.forEach(h.categoryMatchesMap,function(f,b){h.categoryMatches.push(n.tokenIdxToClass[b].tokenTypeIdx)})})}n.assignCategoriesTokensProp=l;function c(v){e.forEach(v,function(h){a([],h)})}n.assignCategoriesMapProp=c;function a(v,h){e.forEach(v,function(f){h.categoryMatchesMap[f.tokenTypeIdx]=!0}),e.forEach(h.CATEGORIES,function(f){var b=v.concat(h);e.contains(b,f)||a(b,f)})}n.singleAssignCategoriesToksMap=a;function u(v){return e.has(v,"tokenTypeIdx")}n.hasShortKeyProperty=u;function d(v){return e.has(v,"CATEGORIES")}n.hasCategoriesProperty=d;function m(v){return e.has(v,"categoryMatches")}n.hasExtendingTokensTypesProperty=m;function p(v){return e.has(v,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=p;function g(v){return e.has(v,"tokenTypeIdx")}n.isTokenType=g}),Qu=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),ea=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=Ju(),t=gt(),i=Zr(),r=Qu(),o=ml();(function(c){c[c.MISSING_PATTERN=0]="MISSING_PATTERN",c[c.INVALID_PATTERN=1]="INVALID_PATTERN",c[c.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",c[c.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",c[c.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",c[c.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",c[c.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",c[c.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",c[c.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",c[c.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",c[c.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",c[c.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",c[c.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",c[c.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",c[c.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",c[c.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",c[c.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var l=function(){function c(a,u){var d=this;if(u===void 0&&(u=s),this.lexerDefinition=a,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof u=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,u);var m=this.config.traceInitPerf;m===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof m=="number"&&(this.traceInitMaxIdent=m,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var p,g=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===s.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(u.safeMode&&u.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(a)?(p={modes:{}},p.modes[e.DEFAULT_MODE]=t.cloneArr(a),p[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,p=t.cloneObj(a))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(p,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(p,d.trackStartLines,d.config.lineTerminatorCharacters))})),p.modes=p.modes?p.modes:{},t.forEach(p.modes,function(b,y){p.modes[y]=t.reject(b,function(_){return t.isUndefined(_)})});var v=t.keys(p.modes);if(t.forEach(p.modes,function(b,y){d.TRACE_INIT("Mode: <"+y+"> processing",function(){if(d.modes.push(y),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(b,v))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(b);var _;d.TRACE_INIT("analyzeTokenTypes",function(){_=e.analyzeTokenTypes(b,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:u.positionTracking,ensureOptimizations:u.ensureOptimizations,safeMode:u.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[y]=_.patternIdxToConfig,d.charCodeToPatternIdxToConfig[y]=_.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,_.emptyGroups),d.hasCustom=_.hasCustom||d.hasCustom,d.canModeBeOptimized[y]=_.canBeOptimized}})}),d.defaultMode=p.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var h=t.map(d.lexerDefinitionErrors,function(b){return b.message}),f=h.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+f)}t.forEach(d.lexerDefinitionWarning,function(b){t.PRINT_WARNING(b.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),g&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var b=t.reduce(d.canModeBeOptimized,function(y,_,A){return _===!1&&y.push(A),y},[]);if(u.ensureOptimizations&&!t.isEmpty(b))throw Error("Lexer Modes: < "+b.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return c.prototype.tokenize=function(a,u){if(u===void 0&&(u=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(g){return g.message}),m=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+m)}var p=this.tokenizeInternal(a,u);return p},c.prototype.tokenizeInternal=function(a,u){var d=this,m,p,g,v,h,f,b,y,_,A,T,C,D,S,E=a,w=E.length,L=0,P=0,I=this.hasCustom?0:Math.floor(a.length/10),z=new Array(I),G=[],j=this.trackStartLines?1:void 0,W=this.trackStartLines?1:void 0,J=e.cloneEmptyGroups(this.emptyGroups),se=this.trackStartLines,xe=this.config.lineTerminatorsPattern,ne=0,ie=[],Ee=[],ee=[],k=[];Object.freeze(k);var B=void 0;function K(){return ie}function Y(U){var $=e.charCodeToOptimizedIndex(U),q=Ee[$];return q===void 0?k:q}var re=function(U){if(ee.length===1&&U.tokenType.PUSH_MODE===void 0){var $=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(U);G.push({offset:U.startOffset,line:U.startLine!==void 0?U.startLine:void 0,column:U.startColumn!==void 0?U.startColumn:void 0,length:U.image.length,message:$})}else{ee.pop();var q=t.last(ee);ie=d.patternIdxToConfig[q],Ee=d.charCodeToPatternIdxToConfig[q],ne=ie.length;var ce=d.canModeBeOptimized[q]&&d.config.safeMode===!1;Ee&&ce?B=Y:B=K}};function pe(U){ee.push(U),Ee=this.charCodeToPatternIdxToConfig[U],ie=this.patternIdxToConfig[U],ne=ie.length,ne=ie.length;var $=this.canModeBeOptimized[U]&&this.config.safeMode===!1;Ee&&$?B=Y:B=K}pe.call(this,u);for(var _e;L<w;){h=null;var Pe=E.charCodeAt(L),Xe=B(Pe),V=Xe.length;for(m=0;m<V;m++){_e=Xe[m];var Ne=_e.pattern;f=null;var Q=_e.short;if(Q!==!1?Pe===Q&&(h=Ne):_e.isCustom===!0?(S=Ne.exec(E,L,z,J),S!==null?(h=S[0],S.payload!==void 0&&(f=S.payload)):h=null):(this.updateLastIndex(Ne,L),h=this.match(Ne,a,L)),h!==null){if(v=_e.longerAlt,v!==void 0){var he=ie[v],te=he.pattern;b=null,he.isCustom===!0?(S=te.exec(E,L,z,J),S!==null?(g=S[0],S.payload!==void 0&&(b=S.payload)):g=null):(this.updateLastIndex(te,L),g=this.match(te,a,L)),g&&g.length>h.length&&(h=g,f=b,_e=he)}break}}if(h!==null){if(y=h.length,_=_e.group,_!==void 0&&(A=_e.tokenTypeIdx,T=this.createTokenInstance(h,L,A,_e.tokenType,j,W,y),this.handlePayload(T,f),_===!1?P=this.addToken(z,P,T):J[_].push(T)),a=this.chopInput(a,y),L=L+y,W=this.computeNewColumn(W,y),se===!0&&_e.canLineTerminator===!0){var Se=0,Te=void 0,ke=void 0;xe.lastIndex=0;do Te=xe.test(h),Te===!0&&(ke=xe.lastIndex-1,Se++);while(Te===!0);Se!==0&&(j=j+Se,W=y-ke,this.updateTokenEndLineColumnLocation(T,_,ke,Se,j,W,y))}this.handleModes(_e,re,pe,T)}else{for(var M=L,x=j,R=W,F=!1;!F&&L<w;)for(E.charCodeAt(L),a=this.chopInput(a,1),L++,p=0;p<ne;p++){var O=ie[p],Ne=O.pattern,Q=O.short;if(Q!==!1?E.charCodeAt(L)===Q&&(F=!0):O.isCustom===!0?F=Ne.exec(E,L,z,J)!==null:(this.updateLastIndex(Ne,L),F=Ne.exec(a)!==null),F===!0)break}C=L-M,D=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E,M,C,x,R),G.push({offset:M,line:x,column:R,length:C,message:D})}}return this.hasCustom||(z.length=P),{tokens:z,groups:J,errors:G}},c.prototype.handleModes=function(a,u,d,m){if(a.pop===!0){var p=a.push;u(m),p!==void 0&&d.call(this,p)}else a.push!==void 0&&d.call(this,a.push)},c.prototype.chopInput=function(a,u){return a.substring(u)},c.prototype.updateLastIndex=function(a,u){a.lastIndex=u},c.prototype.updateTokenEndLineColumnLocation=function(a,u,d,m,p,g,v){var h,f;u!==void 0&&(h=d===v-1,f=h?-1:0,m===1&&h===!0||(a.endLine=p+f,a.endColumn=g-1+-f))},c.prototype.computeNewColumn=function(a,u){return a+u},c.prototype.createTokenInstance=function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return null},c.prototype.createOffsetOnlyToken=function(a,u,d,m){return{image:a,startOffset:u,tokenTypeIdx:d,tokenType:m}},c.prototype.createStartOnlyToken=function(a,u,d,m,p,g){return{image:a,startOffset:u,startLine:p,startColumn:g,tokenTypeIdx:d,tokenType:m}},c.prototype.createFullToken=function(a,u,d,m,p,g,v){return{image:a,startOffset:u,endOffset:u+v-1,startLine:p,endLine:p,startColumn:g,endColumn:g+v-1,tokenTypeIdx:d,tokenType:m}},c.prototype.addToken=function(a,u,d){return 666},c.prototype.addTokenUsingPush=function(a,u,d){return a.push(d),u},c.prototype.addTokenUsingMemberAccess=function(a,u,d){return a[u]=d,u++,u},c.prototype.handlePayload=function(a,u){},c.prototype.handlePayloadNoCustom=function(a,u){},c.prototype.handlePayloadWithCustom=function(a,u){u!==null&&(a.payload=u)},c.prototype.match=function(a,u,d){return null},c.prototype.matchWithTest=function(a,u,d){var m=a.test(u);return m===!0?u.substring(d,a.lastIndex):null},c.prototype.matchWithExec=function(a,u){var d=a.exec(u);return d!==null?d[0]:d},c.prototype.TRACE_INIT=function(a,u){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+a+">");var m=t.timer(u),p=m.time,g=m.value,v=p>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&v(d+"<-- <"+a+"> time: "+p+"ms"),this.traceInitIndent--,g}else return u()},c.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",c.NA=/NOT_APPLICABLE/,c}();n.Lexer=l}),Pi=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=gt(),t=ea(),i=Zr();function r(_){return s(_)?_.LABEL:_.name}n.tokenLabel=r;function o(_){return _.name}n.tokenName=o;function s(_){return e.isString(_.LABEL)&&_.LABEL!==""}n.hasTokenLabel=s;var l="parent",c="categories",a="label",u="group",d="push_mode",m="pop_mode",p="longer_alt",g="line_breaks",v="start_chars_hint";function h(_){return f(_)}n.createToken=h;function f(_){var A=_.pattern,T={};if(T.name=_.name,e.isUndefined(A)||(T.PATTERN=A),e.has(_,l))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(_,c)&&(T.CATEGORIES=_[c]),i.augmentTokenTypes([T]),e.has(_,a)&&(T.LABEL=_[a]),e.has(_,u)&&(T.GROUP=_[u]),e.has(_,m)&&(T.POP_MODE=_[m]),e.has(_,d)&&(T.PUSH_MODE=_[d]),e.has(_,p)&&(T.LONGER_ALT=_[p]),e.has(_,g)&&(T.LINE_BREAKS=_[g]),e.has(_,v)&&(T.START_CHARS_HINT=_[v]),T}n.EOF=h({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function b(_,A,T,C,D,S,E,w){return{image:A,startOffset:T,endOffset:C,startLine:D,endLine:S,startColumn:E,endColumn:w,tokenTypeIdx:_.tokenTypeIdx,tokenType:_}}n.createTokenInstance=b;function y(_,A){return i.tokenStructuredMatcher(_,A)}n.tokenMatcher=y}),fn=ot(n=>{var e=n&&n.__extends||function(){var f=function(b,y){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,A){_.__proto__=A}||function(_,A){for(var T in A)Object.prototype.hasOwnProperty.call(A,T)&&(_[T]=A[T])},f(b,y)};return function(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");f(b,y);function _(){this.constructor=b}b.prototype=y===null?Object.create(y):(_.prototype=y.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=gt(),i=Pi(),r=function(){function f(b){this._definition=b}return Object.defineProperty(f.prototype,"definition",{get:function(){return this._definition},set:function(b){this._definition=b},enumerable:!1,configurable:!0}),f.prototype.accept=function(b){b.visit(this),t.forEach(this.definition,function(y){y.accept(b)})},f}();n.AbstractProduction=r;var o=function(f){e(b,f);function b(y){var _=f.call(this,[])||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return Object.defineProperty(b.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(y){},enumerable:!1,configurable:!0}),b.prototype.accept=function(y){y.visit(this)},b}(r);n.NonTerminal=o;var s=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.orgText="",t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.Rule=s;var l=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.ignoreAmbiguities=!1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.Alternative=l;var c=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.Option=c;var a=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.RepetitionMandatory=a;var u=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.RepetitionMandatoryWithSeparator=u;var d=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.Repetition=d;var m=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return b}(r);n.RepetitionWithSeparator=m;var p=function(f){e(b,f);function b(y){var _=f.call(this,y.definition)||this;return _.idx=1,_.ignoreAmbiguities=!1,_.hasPredicates=!1,t.assign(_,t.pick(y,function(A){return A!==void 0})),_}return Object.defineProperty(b.prototype,"definition",{get:function(){return this._definition},set:function(y){this._definition=y},enumerable:!1,configurable:!0}),b}(r);n.Alternation=p;var g=function(){function f(b){this.idx=1,t.assign(this,t.pick(b,function(y){return y!==void 0}))}return f.prototype.accept=function(b){b.visit(this)},f}();n.Terminal=g;function v(f){return t.map(f,h)}n.serializeGrammar=v;function h(f){function b(A){return t.map(A,h)}if(f instanceof o)return{type:"NonTerminal",name:f.nonTerminalName,idx:f.idx};if(f instanceof l)return{type:"Alternative",definition:b(f.definition)};if(f instanceof c)return{type:"Option",idx:f.idx,definition:b(f.definition)};if(f instanceof a)return{type:"RepetitionMandatory",idx:f.idx,definition:b(f.definition)};if(f instanceof u)return{type:"RepetitionMandatoryWithSeparator",idx:f.idx,separator:h(new g({terminalType:f.separator})),definition:b(f.definition)};if(f instanceof m)return{type:"RepetitionWithSeparator",idx:f.idx,separator:h(new g({terminalType:f.separator})),definition:b(f.definition)};if(f instanceof d)return{type:"Repetition",idx:f.idx,definition:b(f.definition)};if(f instanceof p)return{type:"Alternation",idx:f.idx,definition:b(f.definition)};if(f instanceof g){var y={type:"Terminal",name:f.terminalType.name,label:i.tokenLabel(f.terminalType),idx:f.idx},_=f.terminalType.PATTERN;return f.terminalType.PATTERN&&(y.pattern=t.isRegExp(_)?_.source:_),y}else{if(f instanceof s)return{type:"Rule",name:f.name,orgText:f.orgText,definition:b(f.definition)};throw Error("non exhaustive match")}}n.serializeProduction=h}),gl=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=gt(),t=fn(),i=function(){function o(){}return o.prototype.walk=function(s,l){var c=this;l===void 0&&(l=[]),e.forEach(s.definition,function(a,u){var d=e.drop(s.definition,u+1);if(a instanceof t.NonTerminal)c.walkProdRef(a,d,l);else if(a instanceof t.Terminal)c.walkTerminal(a,d,l);else if(a instanceof t.Alternative)c.walkFlat(a,d,l);else if(a instanceof t.Option)c.walkOption(a,d,l);else if(a instanceof t.RepetitionMandatory)c.walkAtLeastOne(a,d,l);else if(a instanceof t.RepetitionMandatoryWithSeparator)c.walkAtLeastOneSep(a,d,l);else if(a instanceof t.RepetitionWithSeparator)c.walkManySep(a,d,l);else if(a instanceof t.Repetition)c.walkMany(a,d,l);else if(a instanceof t.Alternation)c.walkOr(a,d,l);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,l,c){},o.prototype.walkProdRef=function(s,l,c){},o.prototype.walkFlat=function(s,l,c){var a=l.concat(c);this.walk(s,a)},o.prototype.walkOption=function(s,l,c){var a=l.concat(c);this.walk(s,a)},o.prototype.walkAtLeastOne=function(s,l,c){var a=[new t.Option({definition:s.definition})].concat(l,c);this.walk(s,a)},o.prototype.walkAtLeastOneSep=function(s,l,c){var a=r(s,l,c);this.walk(s,a)},o.prototype.walkMany=function(s,l,c){var a=[new t.Option({definition:s.definition})].concat(l,c);this.walk(s,a)},o.prototype.walkManySep=function(s,l,c){var a=r(s,l,c);this.walk(s,a)},o.prototype.walkOr=function(s,l,c){var a=this,u=l.concat(c);e.forEach(s.definition,function(d){var m=new t.Alternative({definition:[d]});a.walk(m,u)})},o}();n.RestWalker=i;function r(o,s,l){var c=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],a=c.concat(s,l);return a}}),Jr=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=fn(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),ta=ot(n=>{var e=n&&n.__extends||function(){var m=function(p,g){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,h){v.__proto__=h}||function(v,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(v[f]=h[f])},m(p,g)};return function(p,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");m(p,g);function v(){this.constructor=p}p.prototype=g===null?Object.create(g):(v.prototype=g.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=gt(),i=fn(),r=Jr();function o(m){return m instanceof i.Alternative||m instanceof i.Option||m instanceof i.Repetition||m instanceof i.RepetitionMandatory||m instanceof i.RepetitionMandatoryWithSeparator||m instanceof i.RepetitionWithSeparator||m instanceof i.Terminal||m instanceof i.Rule}n.isSequenceProd=o;function s(m,p){p===void 0&&(p=[]);var g=m instanceof i.Option||m instanceof i.Repetition||m instanceof i.RepetitionWithSeparator;return g?!0:m instanceof i.Alternation?t.some(m.definition,function(v){return s(v,p)}):m instanceof i.NonTerminal&&t.contains(p,m)?!1:m instanceof i.AbstractProduction?(m instanceof i.NonTerminal&&p.push(m),t.every(m.definition,function(v){return s(v,p)})):!1}n.isOptionalProd=s;function l(m){return m instanceof i.Alternation}n.isBranchingProd=l;function c(m){if(m instanceof i.NonTerminal)return"SUBRULE";if(m instanceof i.Option)return"OPTION";if(m instanceof i.Alternation)return"OR";if(m instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(m instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(m instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(m instanceof i.Repetition)return"MANY";if(m instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=c;var a=function(m){e(p,m);function p(){var g=m!==null&&m.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return p.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},p.prototype.visitTerminal=function(g){var v=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},p.prototype.visitNonTerminal=function(g){var v=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,v)||(this.dslMethods[v]=[]),this.dslMethods[v].push(g)},p.prototype.visitOption=function(g){this.dslMethods.option.push(g)},p.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},p.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},p.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},p.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},p.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},p}(r.GAstVisitor);n.DslMethodsCollectorVisitor=a;var u=new a;function d(m){u.reset(),m.accept(u);var p=u.dslMethods;return u.reset(),p}n.collectMethods=d}),ed=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=gt(),t=fn(),i=ta();function r(c){if(c instanceof t.NonTerminal)return r(c.referencedRule);if(c instanceof t.Terminal)return l(c);if(i.isSequenceProd(c))return o(c);if(i.isBranchingProd(c))return s(c);throw Error("non exhaustive match")}n.first=r;function o(c){for(var a=[],u=c.definition,d=0,m=u.length>d,p,g=!0;m&&g;)p=u[d],g=i.isOptionalProd(p),a=a.concat(r(p)),d=d+1,m=u.length>d;return e.uniq(a)}n.firstForSequence=o;function s(c){var a=e.map(c.definition,function(u){return r(u)});return e.uniq(e.flatten(a))}n.firstForBranching=s;function l(c){return[c.terminalType]}n.firstForTerminal=l}),td=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),v_=ot(n=>{var e=n&&n.__extends||function(){var d=function(m,p){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,v){g.__proto__=v}||function(g,v){for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(g[h]=v[h])},d(m,p)};return function(m,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");d(m,p);function g(){this.constructor=m}m.prototype=p===null?Object.create(p):(g.prototype=p.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=gl(),i=ed(),r=gt(),o=td(),s=fn(),l=function(d){e(m,d);function m(p){var g=d.call(this)||this;return g.topProd=p,g.follows={},g}return m.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},m.prototype.walkTerminal=function(p,g,v){},m.prototype.walkProdRef=function(p,g,v){var h=a(p.referencedRule,p.idx)+this.topProd.name,f=g.concat(v),b=new s.Alternative({definition:f}),y=i.first(b);this.follows[h]=y},m}(t.RestWalker);n.ResyncFollowsWalker=l;function c(d){var m={};return r.forEach(d,function(p){var g=new l(p).startWalking();r.assign(m,g)}),m}n.computeAllProdsFollows=c;function a(d,m){return d.name+m+o.IN}n.buildBetweenProdsFollowPrefix=a;function u(d){var m=d.terminalType.name;return m+d.idx+o.IN}n.buildInProdFollowPrefix=u}),na=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Pi(),t=gt(),i=gt(),r=fn(),o=ta();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var l=s.expected,c=s.actual;s.previous,s.ruleName;var a=e.hasTokenLabel(l),u=a?"--> "+e.tokenLabel(l)+" <--":"token of type --> "+l.name+" <--",d="Expecting "+u+" but found --> '"+c.image+"' <--";return d},buildNotAllInputParsedMessage:function(s){var l=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+l.image},buildNoViableAltMessage:function(s){var l=s.expectedPathsPerAlt,c=s.actual;s.previous;var a=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,m=`
but found: '`+d+"'";if(a)return u+a+m;var p=i.reduce(l,function(f,b){return f.concat(b)},[]),g=i.map(p,function(f){return"["+i.map(f,function(b){return e.tokenLabel(b)}).join(", ")+"]"}),v=i.map(g,function(f,b){return"  "+(b+1)+". "+f}),h=`one of these possible Token sequences:
`+v.join(`
`);return u+h+m},buildEarlyExitMessage:function(s){var l=s.expectedIterationPaths,c=s.actual,a=s.customUserDescription;s.ruleName;var u="Expecting: ",d=i.first(c).image,m=`
but found: '`+d+"'";if(a)return u+a+m;var p=i.map(l,function(v){return"["+i.map(v,function(h){return e.tokenLabel(h)}).join(",")+"]"}),g=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+p.join(" ,")+">");return u+g+m}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(s,l){var c="Invalid grammar, reference to a rule which is not defined: ->"+l.nonTerminalName+`<-
inside top level rule: ->`+s.name+"<-";return c}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(s,l){function c(h){return h instanceof r.Terminal?h.terminalType.name:h instanceof r.NonTerminal?h.nonTerminalName:""}var a=s.name,u=i.first(l),d=u.idx,m=o.getProductionDslName(u),p=c(u),g=d>0,v="->"+m+(g?d:"")+"<- "+(p?"with argument: ->"+p+"<-":"")+`
                  appears more than once (`+l.length+" times) in the top level rule: ->"+a+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return v=v.replace(/[ \t]+/g," "),v=v.replace(/\s\s+/g,`
`),v},buildNamespaceConflictError:function(s){var l=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+s.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return l},buildAlternationPrefixAmbiguityError:function(s){var l=i.map(s.prefixPath,function(u){return e.tokenLabel(u)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous alternatives: <"+s.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+c+"> inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return a},buildAlternationAmbiguityError:function(s){var l=i.map(s.prefixPath,function(u){return e.tokenLabel(u)}).join(", "),c=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous Alternatives Detected: <"+s.ambiguityIndices.join(" ,")+"> in <OR"+c+">"+(" inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+l+`> may appears as a prefix path in all these alternatives.
`);return a=a+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,a},buildEmptyRepetitionError:function(s){var l=o.getProductionDslName(s.repetition);s.repetition.idx!==0&&(l+=s.repetition.idx);var c="The repetition <"+l+"> within Rule <"+s.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return c},buildTokenNameError:function(s){return"deprecated"},buildEmptyAlternationError:function(s){var l="Ambiguous empty alternative: <"+(s.emptyChoiceIdx+1)+">"+(" in <OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return l},buildTooManyAlternativesError:function(s){var l=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
 has `+(s.alternation.definition.length+1)+" alternatives.");return l},buildLeftRecursionError:function(s){var l=s.topLevelRule.name,c=t.map(s.leftRecursionPath,function(d){return d.name}),a=l+" --> "+c.concat([l]).join(" --> "),u=`Left Recursion found in grammar.
`+("rule: <"+l+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+a+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return u},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var l;s.topLevelRule instanceof r.Rule?l=s.topLevelRule.name:l=s.topLevelRule;var c="Duplicate definition, rule: ->"+l+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return c}}}),__=ot(n=>{var e=n&&n.__extends||function(){var l=function(c,a){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(u[m]=d[m])},l(c,a)};return function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");l(c,a);function u(){this.constructor=c}c.prototype=a===null?Object.create(a):(u.prototype=a.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=vn(),i=gt(),r=Jr();function o(l,c){var a=new s(l,c);return a.resolveRefs(),a.errors}n.resolveGrammar=o;var s=function(l){e(c,l);function c(a,u){var d=l.call(this)||this;return d.nameToTopRule=a,d.errMsgProvider=u,d.errors=[],d}return c.prototype.resolveRefs=function(){var a=this;i.forEach(i.values(this.nameToTopRule),function(u){a.currTopLevel=u,u.accept(a)})},c.prototype.visitNonTerminal=function(a){var u=this.nameToTopRule[a.nonTerminalName];if(u)a.referencedRule=u;else{var d=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,a);this.errors.push({message:d,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:a.nonTerminalName})}},c}(r.GAstVisitor);n.GastRefResolverVisitor=s}),ia=ot(n=>{var e=n&&n.__extends||function(){var h=function(f,b){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,_){y.__proto__=_}||function(y,_){for(var A in _)Object.prototype.hasOwnProperty.call(_,A)&&(y[A]=_[A])},h(f,b)};return function(f,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");h(f,b);function y(){this.constructor=f}f.prototype=b===null?Object.create(b):(y.prototype=b.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=gl(),i=gt(),r=ed(),o=fn(),s=function(h){e(f,h);function f(b,y){var _=h.call(this)||this;return _.topProd=b,_.path=y,_.possibleTokTypes=[],_.nextProductionName="",_.nextProductionOccurrence=0,_.found=!1,_.isAtEndOfPath=!1,_}return f.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},f.prototype.walk=function(b,y){y===void 0&&(y=[]),this.found||h.prototype.walk.call(this,b,y)},f.prototype.walkProdRef=function(b,y,_){if(b.referencedRule.name===this.nextProductionName&&b.idx===this.nextProductionOccurrence){var A=y.concat(_);this.updateExpectedNext(),this.walk(b.referencedRule,A)}},f.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},f}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var l=function(h){e(f,h);function f(b,y){var _=h.call(this,b,y)||this;return _.path=y,_.nextTerminalName="",_.nextTerminalOccurrence=0,_.nextTerminalName=_.path.lastTok.name,_.nextTerminalOccurrence=_.path.lastTokOccurrence,_}return f.prototype.walkTerminal=function(b,y,_){if(this.isAtEndOfPath&&b.terminalType.name===this.nextTerminalName&&b.idx===this.nextTerminalOccurrence&&!this.found){var A=y.concat(_),T=new o.Alternative({definition:A});this.possibleTokTypes=r.first(T),this.found=!0}},f}(s);n.NextAfterTokenWalker=l;var c=function(h){e(f,h);function f(b,y){var _=h.call(this)||this;return _.topRule=b,_.occurrence=y,_.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},_}return f.prototype.startWalking=function(){return this.walk(this.topRule),this.result},f}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=c;var a=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkMany=function(b,y,_){if(b.idx===this.occurrence){var A=i.first(y.concat(_));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkMany.call(this,b,y,_)},f}(c);n.NextTerminalAfterManyWalker=a;var u=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkManySep=function(b,y,_){if(b.idx===this.occurrence){var A=i.first(y.concat(_));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkManySep.call(this,b,y,_)},f}(c);n.NextTerminalAfterManySepWalker=u;var d=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkAtLeastOne=function(b,y,_){if(b.idx===this.occurrence){var A=i.first(y.concat(_));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkAtLeastOne.call(this,b,y,_)},f}(c);n.NextTerminalAfterAtLeastOneWalker=d;var m=function(h){e(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return f.prototype.walkAtLeastOneSep=function(b,y,_){if(b.idx===this.occurrence){var A=i.first(y.concat(_));this.result.isEndOfRule=A===void 0,A instanceof o.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else h.prototype.walkAtLeastOneSep.call(this,b,y,_)},f}(c);n.NextTerminalAfterAtLeastOneSepWalker=m;function p(h,f,b){b===void 0&&(b=[]),b=i.cloneArr(b);var y=[],_=0;function A(S){return S.concat(i.drop(h,_+1))}function T(S){var E=p(A(S),f,b);return y.concat(E)}for(;b.length<f&&_<h.length;){var C=h[_];if(C instanceof o.Alternative||C instanceof o.NonTerminal)return T(C.definition);if(C instanceof o.Option)y=T(C.definition);else if(C instanceof o.RepetitionMandatory){var D=C.definition.concat([new o.Repetition({definition:C.definition})]);return T(D)}else if(C instanceof o.RepetitionMandatoryWithSeparator){var D=[new o.Alternative({definition:C.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})];return T(D)}else if(C instanceof o.RepetitionWithSeparator){var D=C.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:C.separator})].concat(C.definition)})]);y=T(D)}else if(C instanceof o.Repetition){var D=C.definition.concat([new o.Repetition({definition:C.definition})]);y=T(D)}else{if(C instanceof o.Alternation)return i.forEach(C.definition,function(S){i.isEmpty(S.definition)===!1&&(y=T(S.definition))}),y;if(C instanceof o.Terminal)b.push(C.terminalType);else throw Error("non exhaustive match")}_++}return y.push({partialPath:b,suffixDef:i.drop(h,_)}),y}n.possiblePathsFrom=p;function g(h,f,b,y){var _="EXIT_NONE_TERMINAL",A=[_],T="EXIT_ALTERNATIVE",C=!1,D=f.length,S=D-y-1,E=[],w=[];for(w.push({idx:-1,def:h,ruleStack:[],occurrenceStack:[]});!i.isEmpty(w);){var L=w.pop();if(L===T){C&&i.last(w).idx<=S&&w.pop();continue}var P=L.def,I=L.idx,z=L.ruleStack,G=L.occurrenceStack;if(!i.isEmpty(P)){var j=P[0];if(j===_){var W={idx:I,def:i.drop(P),ruleStack:i.dropRight(z),occurrenceStack:i.dropRight(G)};w.push(W)}else if(j instanceof o.Terminal)if(I<D-1){var J=I+1,se=f[J];if(b(se,j.terminalType)){var W={idx:J,def:i.drop(P),ruleStack:z,occurrenceStack:G};w.push(W)}}else if(I===D-1)E.push({nextTokenType:j.terminalType,nextTokenOccurrence:j.idx,ruleStack:z,occurrenceStack:G}),C=!0;else throw Error("non exhaustive match");else if(j instanceof o.NonTerminal){var xe=i.cloneArr(z);xe.push(j.nonTerminalName);var ne=i.cloneArr(G);ne.push(j.idx);var W={idx:I,def:j.definition.concat(A,i.drop(P)),ruleStack:xe,occurrenceStack:ne};w.push(W)}else if(j instanceof o.Option){var ie={idx:I,def:i.drop(P),ruleStack:z,occurrenceStack:G};w.push(ie),w.push(T);var Ee={idx:I,def:j.definition.concat(i.drop(P)),ruleStack:z,occurrenceStack:G};w.push(Ee)}else if(j instanceof o.RepetitionMandatory){var ee=new o.Repetition({definition:j.definition,idx:j.idx}),k=j.definition.concat([ee],i.drop(P)),W={idx:I,def:k,ruleStack:z,occurrenceStack:G};w.push(W)}else if(j instanceof o.RepetitionMandatoryWithSeparator){var B=new o.Terminal({terminalType:j.separator}),ee=new o.Repetition({definition:[B].concat(j.definition),idx:j.idx}),k=j.definition.concat([ee],i.drop(P)),W={idx:I,def:k,ruleStack:z,occurrenceStack:G};w.push(W)}else if(j instanceof o.RepetitionWithSeparator){var ie={idx:I,def:i.drop(P),ruleStack:z,occurrenceStack:G};w.push(ie),w.push(T);var B=new o.Terminal({terminalType:j.separator}),K=new o.Repetition({definition:[B].concat(j.definition),idx:j.idx}),k=j.definition.concat([K],i.drop(P)),Ee={idx:I,def:k,ruleStack:z,occurrenceStack:G};w.push(Ee)}else if(j instanceof o.Repetition){var ie={idx:I,def:i.drop(P),ruleStack:z,occurrenceStack:G};w.push(ie),w.push(T);var K=new o.Repetition({definition:j.definition,idx:j.idx}),k=j.definition.concat([K],i.drop(P)),Ee={idx:I,def:k,ruleStack:z,occurrenceStack:G};w.push(Ee)}else if(j instanceof o.Alternation)for(var Y=j.definition.length-1;Y>=0;Y--){var re=j.definition[Y],pe={idx:I,def:re.definition.concat(i.drop(P)),ruleStack:z,occurrenceStack:G};w.push(pe),w.push(T)}else if(j instanceof o.Alternative)w.push({idx:I,def:j.definition.concat(i.drop(P)),ruleStack:z,occurrenceStack:G});else if(j instanceof o.Rule)w.push(v(j,I,z,G));else throw Error("non exhaustive match")}}return E}n.nextPossibleTokensAfter=g;function v(h,f,b,y){var _=i.cloneArr(b);_.push(h.name);var A=i.cloneArr(y);return A.push(1),{idx:f,def:h.definition,ruleStack:_,occurrenceStack:A}}}),ra=ot(n=>{var e=n&&n.__extends||function(){var S=function(E,w){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(L,P){L.__proto__=P}||function(L,P){for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(L[I]=P[I])},S(E,w)};return function(E,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");S(E,w);function L(){this.constructor=E}E.prototype=w===null?Object.create(w):(L.prototype=w.prototype,new L)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=gt(),i=ia(),r=gl(),o=Zr(),s=fn(),l=Jr(),c;(function(S){S[S.OPTION=0]="OPTION",S[S.REPETITION=1]="REPETITION",S[S.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",S[S.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",S[S.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",S[S.ALTERNATION=5]="ALTERNATION"})(c=n.PROD_TYPE||(n.PROD_TYPE={}));function a(S){if(S instanceof s.Option)return c.OPTION;if(S instanceof s.Repetition)return c.REPETITION;if(S instanceof s.RepetitionMandatory)return c.REPETITION_MANDATORY;if(S instanceof s.RepetitionMandatoryWithSeparator)return c.REPETITION_MANDATORY_WITH_SEPARATOR;if(S instanceof s.RepetitionWithSeparator)return c.REPETITION_WITH_SEPARATOR;if(S instanceof s.Alternation)return c.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=a;function u(S,E,w,L,P,I){var z=_(S,E,w),G=D(z)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return I(z,L,G,P)}n.buildLookaheadFuncForOr=u;function d(S,E,w,L,P,I){var z=A(S,E,P,w),G=D(z)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return I(z[0],G,L)}n.buildLookaheadFuncForOptionalProd=d;function m(S,E,w,L){var P=S.length,I=t.every(S,function(j){return t.every(j,function(W){return W.length===1})});if(E)return function(j){for(var W=t.map(j,function(K){return K.GATE}),J=0;J<P;J++){var se=S[J],xe=se.length,ne=W[J];if(!(ne!==void 0&&ne.call(this)===!1))e:for(var ie=0;ie<xe;ie++){for(var Ee=se[ie],ee=Ee.length,k=0;k<ee;k++){var B=this.LA(k+1);if(w(B,Ee[k])===!1)continue e}return J}}};if(I&&!L){var z=t.map(S,function(j){return t.flatten(j)}),G=t.reduce(z,function(j,W,J){return t.forEach(W,function(se){t.has(j,se.tokenTypeIdx)||(j[se.tokenTypeIdx]=J),t.forEach(se.categoryMatches,function(xe){t.has(j,xe)||(j[xe]=J)})}),j},[]);return function(){var j=this.LA(1);return G[j.tokenTypeIdx]}}else return function(){for(var j=0;j<P;j++){var W=S[j],J=W.length;e:for(var se=0;se<J;se++){for(var xe=W[se],ne=xe.length,ie=0;ie<ne;ie++){var Ee=this.LA(ie+1);if(w(Ee,xe[ie])===!1)continue e}return j}}}}n.buildAlternativesLookAheadFunc=m;function p(S,E,w){var L=t.every(S,function(W){return W.length===1}),P=S.length;if(L&&!w){var I=t.flatten(S);if(I.length===1&&t.isEmpty(I[0].categoryMatches)){var z=I[0],G=z.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===G}}else{var j=t.reduce(I,function(W,J,se){return W[J.tokenTypeIdx]=!0,t.forEach(J.categoryMatches,function(xe){W[xe]=!0}),W},[]);return function(){var W=this.LA(1);return j[W.tokenTypeIdx]===!0}}}else return function(){e:for(var W=0;W<P;W++){for(var J=S[W],se=J.length,xe=0;xe<se;xe++){var ne=this.LA(xe+1);if(E(ne,J[xe])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=p;var g=function(S){e(E,S);function E(w,L,P){var I=S.call(this)||this;return I.topProd=w,I.targetOccurrence=L,I.targetProdType=P,I}return E.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},E.prototype.checkIsTarget=function(w,L,P,I){return w.idx===this.targetOccurrence&&this.targetProdType===L?(this.restDef=P.concat(I),!0):!1},E.prototype.walkOption=function(w,L,P){this.checkIsTarget(w,c.OPTION,L,P)||S.prototype.walkOption.call(this,w,L,P)},E.prototype.walkAtLeastOne=function(w,L,P){this.checkIsTarget(w,c.REPETITION_MANDATORY,L,P)||S.prototype.walkOption.call(this,w,L,P)},E.prototype.walkAtLeastOneSep=function(w,L,P){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR,L,P)||S.prototype.walkOption.call(this,w,L,P)},E.prototype.walkMany=function(w,L,P){this.checkIsTarget(w,c.REPETITION,L,P)||S.prototype.walkOption.call(this,w,L,P)},E.prototype.walkManySep=function(w,L,P){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR,L,P)||S.prototype.walkOption.call(this,w,L,P)},E}(r.RestWalker),v=function(S){e(E,S);function E(w,L,P){var I=S.call(this)||this;return I.targetOccurrence=w,I.targetProdType=L,I.targetRef=P,I.result=[],I}return E.prototype.checkIsTarget=function(w,L){w.idx===this.targetOccurrence&&this.targetProdType===L&&(this.targetRef===void 0||w===this.targetRef)&&(this.result=w.definition)},E.prototype.visitOption=function(w){this.checkIsTarget(w,c.OPTION)},E.prototype.visitRepetition=function(w){this.checkIsTarget(w,c.REPETITION)},E.prototype.visitRepetitionMandatory=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY)},E.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_MANDATORY_WITH_SEPARATOR)},E.prototype.visitRepetitionWithSeparator=function(w){this.checkIsTarget(w,c.REPETITION_WITH_SEPARATOR)},E.prototype.visitAlternation=function(w){this.checkIsTarget(w,c.ALTERNATION)},E}(l.GAstVisitor);function h(S){for(var E=new Array(S),w=0;w<S;w++)E[w]=[];return E}function f(S){for(var E=[""],w=0;w<S.length;w++){for(var L=S[w],P=[],I=0;I<E.length;I++){var z=E[I];P.push(z+"_"+L.tokenTypeIdx);for(var G=0;G<L.categoryMatches.length;G++){var j="_"+L.categoryMatches[G];P.push(z+j)}}E=P}return E}function b(S,E,w){for(var L=0;L<S.length;L++)if(L!==w)for(var P=S[L],I=0;I<E.length;I++){var z=E[I];if(P[z]===!0)return!1}return!0}function y(S,E){for(var w=t.map(S,function(J){return i.possiblePathsFrom([J],1)}),L=h(w.length),P=t.map(w,function(J){var se={};return t.forEach(J,function(xe){var ne=f(xe.partialPath);t.forEach(ne,function(ie){se[ie]=!0})}),se}),I=w,z=1;z<=E;z++){var G=I;I=h(G.length);for(var j=function(J){for(var se=G[J],xe=0;xe<se.length;xe++){var ne=se[xe].partialPath,ie=se[xe].suffixDef,Ee=f(ne),ee=b(P,Ee,J);if(ee||t.isEmpty(ie)||ne.length===E){var k=L[J];if(T(k,ne)===!1){k.push(ne);for(var B=0;B<Ee.length;B++){var K=Ee[B];P[J][K]=!0}}}else{var Y=i.possiblePathsFrom(ie,z+1,ne);I[J]=I[J].concat(Y),t.forEach(Y,function(re){var pe=f(re.partialPath);t.forEach(pe,function(_e){P[J][_e]=!0})})}}},W=0;W<G.length;W++)j(W)}return L}n.lookAheadSequenceFromAlternatives=y;function _(S,E,w,L){var P=new v(S,c.ALTERNATION,L);return E.accept(P),y(P.result,w)}n.getLookaheadPathsForOr=_;function A(S,E,w,L){var P=new v(S,w);E.accept(P);var I=P.result,z=new g(E,S,w),G=z.startWalking(),j=new s.Alternative({definition:I}),W=new s.Alternative({definition:G});return y([j,W],L)}n.getLookaheadPathsForOptionalProd=A;function T(S,E){e:for(var w=0;w<S.length;w++){var L=S[w];if(L.length===E.length){for(var P=0;P<L.length;P++){var I=E[P],z=L[P],G=I===z||z.categoryMatchesMap[I.tokenTypeIdx]!==void 0;if(G===!1)continue e}return!0}}return!1}n.containsPath=T;function C(S,E){return S.length<E.length&&t.every(S,function(w,L){var P=E[L];return w===P||P.categoryMatchesMap[w.tokenTypeIdx]})}n.isStrictPrefixOfPath=C;function D(S){return t.every(S,function(E){return t.every(E,function(w){return t.every(w,function(L){return t.isEmpty(L.categoryMatches)})})})}n.areTokenCategoriesNotUsed=D}),nd=ot(n=>{var e=n&&n.__extends||function(){var L=function(P,I){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(z,G){z.__proto__=G}||function(z,G){for(var j in G)Object.prototype.hasOwnProperty.call(G,j)&&(z[j]=G[j])},L(P,I)};return function(P,I){if(typeof I!="function"&&I!==null)throw new TypeError("Class extends value "+String(I)+" is not a constructor or null");L(P,I);function z(){this.constructor=P}P.prototype=I===null?Object.create(I):(z.prototype=I.prototype,new z)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=gt(),i=gt(),r=vn(),o=ta(),s=ra(),l=ia(),c=fn(),a=Jr();function u(L,P,I,z,G){var j=t.map(L,function(ee){return d(ee,z)}),W=t.map(L,function(ee){return f(ee,ee,z)}),J=[],se=[],xe=[];i.every(W,i.isEmpty)&&(J=i.map(L,function(ee){return _(ee,z)}),se=i.map(L,function(ee){return A(ee,P,z)}),xe=D(L,P,z));var ne=w(L,I,z),ie=i.map(L,function(ee){return C(ee,z)}),Ee=i.map(L,function(ee){return v(ee,L,G,z)});return t.flatten(j.concat(xe,W,J,se,ne,ie,Ee))}n.validateGrammar=u;function d(L,P){var I=new g;L.accept(I);var z=I.allProductions,G=t.groupBy(z,m),j=t.pick(G,function(J){return J.length>1}),W=t.map(t.values(j),function(J){var se=t.first(J),xe=P.buildDuplicateFoundError(L,J),ne=o.getProductionDslName(se),ie={message:xe,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:L.name,dslName:ne,occurrence:se.idx},Ee=p(se);return Ee&&(ie.parameter=Ee),ie});return W}function m(L){return o.getProductionDslName(L)+"_#_"+L.idx+"_#_"+p(L)}n.identifyProductionForDuplicates=m;function p(L){return L instanceof c.Terminal?L.terminalType.name:L instanceof c.NonTerminal?L.nonTerminalName:""}var g=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.allProductions=[],I}return P.prototype.visitNonTerminal=function(I){this.allProductions.push(I)},P.prototype.visitOption=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatory=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatoryWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetition=function(I){this.allProductions.push(I)},P.prototype.visitAlternation=function(I){this.allProductions.push(I)},P.prototype.visitTerminal=function(I){this.allProductions.push(I)},P}(a.GAstVisitor);n.OccurrenceValidationCollector=g;function v(L,P,I,z){var G=[],j=i.reduce(P,function(J,se){return se.name===L.name?J+1:J},0);if(j>1){var W=z.buildDuplicateRuleNameError({topLevelRule:L,grammarName:I});G.push({message:W,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:L.name})}return G}n.validateRuleDoesNotAlreadyExist=v;function h(L,P,I){var z=[],G;return t.contains(P,L)||(G="Invalid rule override, rule: ->"+L+"<- cannot be overridden in the grammar: ->"+I+"<-as it is not defined in any of the super grammars ",z.push({message:G,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:L})),z}n.validateRuleIsOverridden=h;function f(L,P,I,z){z===void 0&&(z=[]);var G=[],j=b(P.definition);if(t.isEmpty(j))return[];var W=L.name,J=t.contains(j,L);J&&G.push({message:I.buildLeftRecursionError({topLevelRule:L,leftRecursionPath:z}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:W});var se=t.difference(j,z.concat([L])),xe=t.map(se,function(ne){var ie=t.cloneArr(z);return ie.push(ne),f(L,ne,I,ie)});return G.concat(t.flatten(xe))}n.validateNoLeftRecursion=f;function b(L){var P=[];if(t.isEmpty(L))return P;var I=t.first(L);if(I instanceof c.NonTerminal)P.push(I.referencedRule);else if(I instanceof c.Alternative||I instanceof c.Option||I instanceof c.RepetitionMandatory||I instanceof c.RepetitionMandatoryWithSeparator||I instanceof c.RepetitionWithSeparator||I instanceof c.Repetition)P=P.concat(b(I.definition));else if(I instanceof c.Alternation)P=t.flatten(t.map(I.definition,function(W){return b(W.definition)}));else if(!(I instanceof c.Terminal))throw Error("non exhaustive match");var z=o.isOptionalProd(I),G=L.length>1;if(z&&G){var j=t.drop(L);return P.concat(b(j))}else return P}n.getFirstNoneTerminal=b;var y=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.alternations=[],I}return P.prototype.visitAlternation=function(I){this.alternations.push(I)},P}(a.GAstVisitor);function _(L,P){var I=new y;L.accept(I);var z=I.alternations,G=t.reduce(z,function(j,W){var J=t.dropRight(W.definition),se=t.map(J,function(xe,ne){var ie=l.nextPossibleTokensAfter([xe],[],null,1);return t.isEmpty(ie)?{message:P.buildEmptyAlternationError({topLevelRule:L,alternation:W,emptyChoiceIdx:ne}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:L.name,occurrence:W.idx,alternative:ne+1}:null});return j.concat(t.compact(se))},[]);return G}n.validateEmptyOrAlternative=_;function A(L,P,I){var z=new y;L.accept(z);var G=z.alternations;G=i.reject(G,function(W){return W.ignoreAmbiguities===!0});var j=t.reduce(G,function(W,J){var se=J.idx,xe=J.maxLookahead||P,ne=s.getLookaheadPathsForOr(se,L,xe,J),ie=S(ne,J,L,I),Ee=E(ne,J,L,I);return W.concat(ie,Ee)},[]);return j}n.validateAmbiguousAlternationAlternatives=A;var T=function(L){e(P,L);function P(){var I=L!==null&&L.apply(this,arguments)||this;return I.allProductions=[],I}return P.prototype.visitRepetitionWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatory=function(I){this.allProductions.push(I)},P.prototype.visitRepetitionMandatoryWithSeparator=function(I){this.allProductions.push(I)},P.prototype.visitRepetition=function(I){this.allProductions.push(I)},P}(a.GAstVisitor);n.RepetionCollector=T;function C(L,P){var I=new y;L.accept(I);var z=I.alternations,G=t.reduce(z,function(j,W){return W.definition.length>255&&j.push({message:P.buildTooManyAlternativesError({topLevelRule:L,alternation:W}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:L.name,occurrence:W.idx}),j},[]);return G}n.validateTooManyAlts=C;function D(L,P,I){var z=[];return i.forEach(L,function(G){var j=new T;G.accept(j);var W=j.allProductions;i.forEach(W,function(J){var se=s.getProdType(J),xe=J.maxLookahead||P,ne=J.idx,ie=s.getLookaheadPathsForOptionalProd(ne,G,se,xe),Ee=ie[0];if(i.isEmpty(i.flatten(Ee))){var ee=I.buildEmptyRepetitionError({topLevelRule:G,repetition:J});z.push({message:ee,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:G.name})}})}),z}n.validateSomeNonEmptyLookaheadPath=D;function S(L,P,I,z){var G=[],j=i.reduce(L,function(J,se,xe){return P.definition[xe].ignoreAmbiguities===!0||i.forEach(se,function(ne){var ie=[xe];i.forEach(L,function(Ee,ee){xe!==ee&&s.containsPath(Ee,ne)&&P.definition[ee].ignoreAmbiguities!==!0&&ie.push(ee)}),ie.length>1&&!s.containsPath(G,ne)&&(G.push(ne),J.push({alts:ie,path:ne}))}),J},[]),W=t.map(j,function(J){var se=i.map(J.alts,function(ne){return ne+1}),xe=z.buildAlternationAmbiguityError({topLevelRule:I,alternation:P,ambiguityIndices:se,prefixPath:J.path});return{message:xe,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:I.name,occurrence:P.idx,alternatives:[J.alts]}});return W}function E(L,P,I,z){var G=[],j=i.reduce(L,function(W,J,se){var xe=i.map(J,function(ne){return{idx:se,path:ne}});return W.concat(xe)},[]);return i.forEach(j,function(W){var J=P.definition[W.idx];if(J.ignoreAmbiguities!==!0){var se=W.idx,xe=W.path,ne=i.findAll(j,function(Ee){return P.definition[Ee.idx].ignoreAmbiguities!==!0&&Ee.idx<se&&s.isStrictPrefixOfPath(Ee.path,xe)}),ie=i.map(ne,function(Ee){var ee=[Ee.idx+1,se+1],k=P.idx===0?"":P.idx,B=z.buildAlternationPrefixAmbiguityError({topLevelRule:I,alternation:P,ambiguityIndices:ee,prefixPath:Ee.path});return{message:B,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:I.name,occurrence:k,alternatives:ee}});G=G.concat(ie)}}),G}n.checkPrefixAlternativesAmbiguities=E;function w(L,P,I){var z=[],G=i.map(P,function(j){return j.name});return i.forEach(L,function(j){var W=j.name;if(i.contains(G,W)){var J=I.buildNamespaceConflictError(j);z.push({message:J,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:W})}}),z}}),b_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=gt(),t=__(),i=nd(),r=na();function o(l){l=e.defaults(l,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var c={};return e.forEach(l.rules,function(a){c[a.name]=a}),t.resolveGrammar(c,l.errMsgProvider)}n.resolveGrammar=o;function s(l){return l=e.defaults(l,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(l.rules,l.maxLookahead,l.tokenTypes,l.errMsgProvider,l.grammarName)}n.validateGrammar=s}),Qr=ot(n=>{var e=n&&n.__extends||function(){var g=function(v,h){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,b){f.__proto__=b}||function(f,b){for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(f[y]=b[y])},g(v,h)};return function(v,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");g(v,h);function f(){this.constructor=v}v.prototype=h===null?Object.create(h):(f.prototype=h.prototype,new f)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=gt(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",l=[i,r,o,s];Object.freeze(l);function c(g){return t.contains(l,g.name)}n.isRecognitionException=c;var a=function(g){e(v,g);function v(h,f){var b=this.constructor,y=g.call(this,h)||this;return y.token=f,y.resyncedTokens=[],Object.setPrototypeOf(y,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(y,y.constructor),y}return v}(Error),u=function(g){e(v,g);function v(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=i,y}return v}(a);n.MismatchedTokenException=u;var d=function(g){e(v,g);function v(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=r,y}return v}(a);n.NoViableAltException=d;var m=function(g){e(v,g);function v(h,f){var b=g.call(this,h,f)||this;return b.name=s,b}return v}(a);n.NotAllInputParsedException=m;var p=function(g){e(v,g);function v(h,f,b){var y=g.call(this,h,f)||this;return y.previousToken=b,y.name=o,y}return v}(a);n.EarlyExitException=p}),id=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Pi(),t=gt(),i=Qr(),r=td(),o=vn();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(a){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=a}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var l=function(){function a(){}return a.prototype.initRecoverable=function(u){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(u,"recoveryEnabled")?u.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=c)},a.prototype.getTokenToInsert=function(u){var d=e.createTokenInstance(u,"",NaN,NaN,NaN,NaN,NaN,NaN);return d.isInsertedInRecovery=!0,d},a.prototype.canTokenTypeBeInsertedInRecovery=function(u){return!0},a.prototype.tryInRepetitionRecovery=function(u,d,m,p){for(var g=this,v=this.findReSyncTokenType(),h=this.exportLexerState(),f=[],b=!1,y=this.LA(1),_=this.LA(1),A=function(){var T=g.LA(0),C=g.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:y,previous:T,ruleName:g.getCurrRuleFullName()}),D=new i.MismatchedTokenException(C,y,g.LA(0));D.resyncedTokens=t.dropRight(f),g.SAVE_ERROR(D)};!b;)if(this.tokenMatcher(_,p)){A();return}else if(m.call(this)){A(),u.apply(this,d);return}else this.tokenMatcher(_,v)?b=!0:(_=this.SKIP_TOKEN(),this.addToResyncTokens(_,f));this.importLexerState(h)},a.prototype.shouldInRepetitionRecoveryBeTried=function(u,d,m){return!(m===!1||u===void 0||d===void 0||this.tokenMatcher(this.LA(1),u)||this.isBackTracking()||this.canPerformInRuleRecovery(u,this.getFollowsForInRuleRecovery(u,d)))},a.prototype.getFollowsForInRuleRecovery=function(u,d){var m=this.getCurrentGrammarPath(u,d),p=this.getNextPossibleTokenTypes(m);return p},a.prototype.tryInRuleRecovery=function(u,d){if(this.canRecoverWithSingleTokenInsertion(u,d)){var m=this.getTokenToInsert(u);return m}if(this.canRecoverWithSingleTokenDeletion(u)){var p=this.SKIP_TOKEN();return this.consumeToken(),p}throw new s("sad sad panda")},a.prototype.canPerformInRuleRecovery=function(u,d){return this.canRecoverWithSingleTokenInsertion(u,d)||this.canRecoverWithSingleTokenDeletion(u)},a.prototype.canRecoverWithSingleTokenInsertion=function(u,d){var m=this;if(!this.canTokenTypeBeInsertedInRecovery(u)||t.isEmpty(d))return!1;var p=this.LA(1),g=t.find(d,function(v){return m.tokenMatcher(p,v)})!==void 0;return g},a.prototype.canRecoverWithSingleTokenDeletion=function(u){var d=this.tokenMatcher(this.LA(2),u);return d},a.prototype.isInCurrentRuleReSyncSet=function(u){var d=this.getCurrFollowKey(),m=this.getFollowSetFromFollowKey(d);return t.contains(m,u)},a.prototype.findReSyncTokenType=function(){for(var u=this.flattenFollowSet(),d=this.LA(1),m=2;;){var p=d.tokenType;if(t.contains(u,p))return p;d=this.LA(m),m++}},a.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var u=this.getLastExplicitRuleShortName(),d=this.getLastExplicitRuleOccurrenceIndex(),m=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(u),idxInCallingRule:d,inRule:this.shortRuleNameToFullName(m)}},a.prototype.buildFullFollowKeyStack=function(){var u=this,d=this.RULE_STACK,m=this.RULE_OCCURRENCE_STACK;return t.map(d,function(p,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:u.shortRuleNameToFullName(p),idxInCallingRule:m[g],inRule:u.shortRuleNameToFullName(d[g-1])}})},a.prototype.flattenFollowSet=function(){var u=this,d=t.map(this.buildFullFollowKeyStack(),function(m){return u.getFollowSetFromFollowKey(m)});return t.flatten(d)},a.prototype.getFollowSetFromFollowKey=function(u){if(u===n.EOF_FOLLOW_KEY)return[e.EOF];var d=u.ruleName+u.idxInCallingRule+r.IN+u.inRule;return this.resyncFollows[d]},a.prototype.addToResyncTokens=function(u,d){return this.tokenMatcher(u,e.EOF)||d.push(u),d},a.prototype.reSyncTo=function(u){for(var d=[],m=this.LA(1);this.tokenMatcher(m,u)===!1;)m=this.SKIP_TOKEN(),this.addToResyncTokens(m,d);return t.dropRight(d)},a.prototype.attemptInRepetitionRecovery=function(u,d,m,p,g,v,h){},a.prototype.getCurrentGrammarPath=function(u,d){var m=this.getHumanReadableRuleStack(),p=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:m,occurrenceStack:p,lastTok:u,lastTokOccurrence:d};return g},a.prototype.getHumanReadableRuleStack=function(){var u=this;return t.map(this.RULE_STACK,function(d){return u.shortRuleNameToFullName(d)})},a}();n.Recoverable=l;function c(a,u,d,m,p,g,v){var h=this.getKeyForAutomaticLookahead(m,p),f=this.firstAfterRepMap[h];if(f===void 0){var b=this.getCurrRuleFullName(),y=this.getGAstProductions()[b],_=new g(y,p);f=_.startWalking(),this.firstAfterRepMap[h]=f}var A=f.token,T=f.occurrence,C=f.isEndOfRule;this.RULE_STACK.length===1&&C&&A===void 0&&(A=e.EOF,T=1),this.shouldInRepetitionRecoveryBeTried(A,T,v)&&this.tryInRepetitionRecovery(a,u,d,A)}n.attemptInRepetitionRecovery=c}),xl=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),y_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=ra(),t=gt(),i=vn(),r=xl(),o=ta(),s=function(){function l(){}return l.prototype.initLooksAhead=function(c){this.dynamicTokensEnabled=t.has(c,"dynamicTokensEnabled")?c.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(c,"maxLookahead")?c.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},l.prototype.preComputeLookaheadFunctions=function(c){var a=this;t.forEach(c,function(u){a.TRACE_INIT(u.name+" Rule Lookahead",function(){var d=o.collectMethods(u),m=d.alternation,p=d.repetition,g=d.option,v=d.repetitionMandatory,h=d.repetitionMandatoryWithSeparator,f=d.repetitionWithSeparator;t.forEach(m,function(b){var y=b.idx===0?"":b.idx;a.TRACE_INIT(""+o.getProductionDslName(b)+y,function(){var _=e.buildLookaheadFuncForOr(b.idx,u,b.maxLookahead||a.maxLookahead,b.hasPredicates,a.dynamicTokensEnabled,a.lookAheadBuilderForAlternatives),A=r.getKeyForAutomaticLookahead(a.fullRuleNameToShort[u.name],r.OR_IDX,b.idx);a.setLaFuncCache(A,_)})}),t.forEach(p,function(b){a.computeLookaheadFunc(u,b.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(g,function(b){a.computeLookaheadFunc(u,b.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(v,function(b){a.computeLookaheadFunc(u,b.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(h,function(b){a.computeLookaheadFunc(u,b.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,b.maxLookahead,o.getProductionDslName(b))}),t.forEach(f,function(b){a.computeLookaheadFunc(u,b.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,b.maxLookahead,o.getProductionDslName(b))})})})},l.prototype.computeLookaheadFunc=function(c,a,u,d,m,p){var g=this;this.TRACE_INIT(""+p+(a===0?"":a),function(){var v=e.buildLookaheadFuncForOptionalProd(a,c,m||g.maxLookahead,g.dynamicTokensEnabled,d,g.lookAheadBuilderForOptional),h=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[c.name],u,a);g.setLaFuncCache(h,v)})},l.prototype.lookAheadBuilderForOptional=function(c,a,u){return e.buildSingleAlternativeLookaheadFunction(c,a,u)},l.prototype.lookAheadBuilderForAlternatives=function(c,a,u,d){return e.buildAlternativesLookAheadFunc(c,a,u,d)},l.prototype.getKeyForAutomaticLookahead=function(c,a){var u=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(u,c,a)},l.prototype.getLaFuncFromCache=function(c){},l.prototype.getLaFuncFromMap=function(c){return this.lookAheadFuncsCache.get(c)},l.prototype.getLaFuncFromObj=function(c){return this.lookAheadFuncsCache[c]},l.prototype.setLaFuncCache=function(c,a){},l.prototype.setLaFuncCacheUsingMap=function(c,a){this.lookAheadFuncsCache.set(c,a)},l.prototype.setLaFuncUsingObj=function(c,a){this.lookAheadFuncsCache[c]=a},l}();n.LooksAhead=s}),E_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,l){o.children[l]===void 0?o.children[l]=[s]:o.children[l].push(s)}n.addTerminalToCst=i;function r(o,s,l){o.children[s]===void 0?o.children[s]=[l]:o.children[s].push(l)}n.addNoneTerminalToCst=r}),rd=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=gt();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var l=s.name;return l||"anonymous"}n.functionName=r;function o(s,l){var c=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(c)||c.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:l}),!0):!1}n.defineNameProp=o}),S_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=gt(),t=rd();function i(d,m){for(var p=e.keys(d),g=p.length,v=0;v<g;v++)for(var h=p[v],f=d[h],b=f.length,y=0;y<b;y++){var _=f[y];_.tokenTypeIdx===void 0&&this[_.name](_.children,m)}}n.defaultVisit=i;function r(d,m){var p=function(){};t.defineNameProp(p,d+"BaseSemantics");var g={visit:function(v,h){if(e.isArray(v)&&(v=v[0]),!e.isUndefined(v))return this[v.name](v.children,h)},validateVisitor:function(){var v=l(this,m);if(!e.isEmpty(v)){var h=e.map(v,function(f){return f.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+h.join(`

`).replace(/\n/g,`
	`)))}}};return p.prototype=g,p.prototype.constructor=p,p._RULE_NAMES=m,p}n.createBaseSemanticVisitorConstructor=r;function o(d,m,p){var g=function(){};t.defineNameProp(g,d+"BaseSemanticsWithDefaults");var v=Object.create(p.prototype);return e.forEach(m,function(h){v[h]=i}),g.prototype=v,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(d){d[d.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",d[d.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function l(d,m){var p=c(d,m),g=u(d,m);return p.concat(g)}n.validateVisitor=l;function c(d,m){var p=e.map(m,function(g){if(!e.isFunction(d[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(d.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(p)}n.validateMissingCstMethods=c;var a=["constructor","visit","validateVisitor"];function u(d,m){var p=[];for(var g in d)e.isFunction(d[g])&&!e.contains(a,g)&&!e.contains(m,g)&&p.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(d.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return p}n.validateRedundantMethods=u}),T_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=E_(),t=gt(),i=S_(),r=vn(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(l){if(this.CST_STACK=[],this.outputCst=l.outputCst,this.nodeLocationTracking=t.has(l,"nodeLocationTracking")?l.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+l.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(l){l.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(l){l.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(l){l.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(l){var c=this.LA(1);l.location={startOffset:c.startOffset,startLine:c.startLine,startColumn:c.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(l,c){var a={name:l,children:{}};this.setInitialNodeLocation(a),this.CST_STACK.push(a)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(l){var c=this.LA(0),a=l.location;a.startOffset<=c.startOffset?(a.endOffset=c.endOffset,a.endLine=c.endLine,a.endColumn=c.endColumn):(a.startOffset=NaN,a.startLine=NaN,a.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(l){var c=this.LA(0),a=l.location;a.startOffset<=c.startOffset?a.endOffset=c.endOffset:a.startOffset=NaN},s.prototype.cstPostTerminal=function(l,c){var a=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(a,c,l),this.setNodeLocationFromToken(a.location,c)},s.prototype.cstPostNonTerminal=function(l,c){var a=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(a,c,l),this.setNodeLocationFromNode(a.location,l.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var l=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=l,l}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var l=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=l,l}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var l=this.RULE_STACK;return l[l.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var l=this.RULE_OCCURRENCE_STACK;return l[l.length-1]},s}();n.TreeBuilder=o}),M_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=vn(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),A_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=gt(),t=Qr(),i=vn(),r=na(),o=nd(),s=fn(),l=function(){function c(){}return c.prototype.ACTION=function(a){return a.call(this)},c.prototype.consume=function(a,u,d){return this.consumeInternal(u,a,d)},c.prototype.subrule=function(a,u,d){return this.subruleInternal(u,a,d)},c.prototype.option=function(a,u){return this.optionInternal(u,a)},c.prototype.or=function(a,u){return this.orInternal(u,a)},c.prototype.many=function(a,u){return this.manyInternal(a,u)},c.prototype.atLeastOne=function(a,u){return this.atLeastOneInternal(a,u)},c.prototype.CONSUME=function(a,u){return this.consumeInternal(a,0,u)},c.prototype.CONSUME1=function(a,u){return this.consumeInternal(a,1,u)},c.prototype.CONSUME2=function(a,u){return this.consumeInternal(a,2,u)},c.prototype.CONSUME3=function(a,u){return this.consumeInternal(a,3,u)},c.prototype.CONSUME4=function(a,u){return this.consumeInternal(a,4,u)},c.prototype.CONSUME5=function(a,u){return this.consumeInternal(a,5,u)},c.prototype.CONSUME6=function(a,u){return this.consumeInternal(a,6,u)},c.prototype.CONSUME7=function(a,u){return this.consumeInternal(a,7,u)},c.prototype.CONSUME8=function(a,u){return this.consumeInternal(a,8,u)},c.prototype.CONSUME9=function(a,u){return this.consumeInternal(a,9,u)},c.prototype.SUBRULE=function(a,u){return this.subruleInternal(a,0,u)},c.prototype.SUBRULE1=function(a,u){return this.subruleInternal(a,1,u)},c.prototype.SUBRULE2=function(a,u){return this.subruleInternal(a,2,u)},c.prototype.SUBRULE3=function(a,u){return this.subruleInternal(a,3,u)},c.prototype.SUBRULE4=function(a,u){return this.subruleInternal(a,4,u)},c.prototype.SUBRULE5=function(a,u){return this.subruleInternal(a,5,u)},c.prototype.SUBRULE6=function(a,u){return this.subruleInternal(a,6,u)},c.prototype.SUBRULE7=function(a,u){return this.subruleInternal(a,7,u)},c.prototype.SUBRULE8=function(a,u){return this.subruleInternal(a,8,u)},c.prototype.SUBRULE9=function(a,u){return this.subruleInternal(a,9,u)},c.prototype.OPTION=function(a){return this.optionInternal(a,0)},c.prototype.OPTION1=function(a){return this.optionInternal(a,1)},c.prototype.OPTION2=function(a){return this.optionInternal(a,2)},c.prototype.OPTION3=function(a){return this.optionInternal(a,3)},c.prototype.OPTION4=function(a){return this.optionInternal(a,4)},c.prototype.OPTION5=function(a){return this.optionInternal(a,5)},c.prototype.OPTION6=function(a){return this.optionInternal(a,6)},c.prototype.OPTION7=function(a){return this.optionInternal(a,7)},c.prototype.OPTION8=function(a){return this.optionInternal(a,8)},c.prototype.OPTION9=function(a){return this.optionInternal(a,9)},c.prototype.OR=function(a){return this.orInternal(a,0)},c.prototype.OR1=function(a){return this.orInternal(a,1)},c.prototype.OR2=function(a){return this.orInternal(a,2)},c.prototype.OR3=function(a){return this.orInternal(a,3)},c.prototype.OR4=function(a){return this.orInternal(a,4)},c.prototype.OR5=function(a){return this.orInternal(a,5)},c.prototype.OR6=function(a){return this.orInternal(a,6)},c.prototype.OR7=function(a){return this.orInternal(a,7)},c.prototype.OR8=function(a){return this.orInternal(a,8)},c.prototype.OR9=function(a){return this.orInternal(a,9)},c.prototype.MANY=function(a){this.manyInternal(0,a)},c.prototype.MANY1=function(a){this.manyInternal(1,a)},c.prototype.MANY2=function(a){this.manyInternal(2,a)},c.prototype.MANY3=function(a){this.manyInternal(3,a)},c.prototype.MANY4=function(a){this.manyInternal(4,a)},c.prototype.MANY5=function(a){this.manyInternal(5,a)},c.prototype.MANY6=function(a){this.manyInternal(6,a)},c.prototype.MANY7=function(a){this.manyInternal(7,a)},c.prototype.MANY8=function(a){this.manyInternal(8,a)},c.prototype.MANY9=function(a){this.manyInternal(9,a)},c.prototype.MANY_SEP=function(a){this.manySepFirstInternal(0,a)},c.prototype.MANY_SEP1=function(a){this.manySepFirstInternal(1,a)},c.prototype.MANY_SEP2=function(a){this.manySepFirstInternal(2,a)},c.prototype.MANY_SEP3=function(a){this.manySepFirstInternal(3,a)},c.prototype.MANY_SEP4=function(a){this.manySepFirstInternal(4,a)},c.prototype.MANY_SEP5=function(a){this.manySepFirstInternal(5,a)},c.prototype.MANY_SEP6=function(a){this.manySepFirstInternal(6,a)},c.prototype.MANY_SEP7=function(a){this.manySepFirstInternal(7,a)},c.prototype.MANY_SEP8=function(a){this.manySepFirstInternal(8,a)},c.prototype.MANY_SEP9=function(a){this.manySepFirstInternal(9,a)},c.prototype.AT_LEAST_ONE=function(a){this.atLeastOneInternal(0,a)},c.prototype.AT_LEAST_ONE1=function(a){return this.atLeastOneInternal(1,a)},c.prototype.AT_LEAST_ONE2=function(a){this.atLeastOneInternal(2,a)},c.prototype.AT_LEAST_ONE3=function(a){this.atLeastOneInternal(3,a)},c.prototype.AT_LEAST_ONE4=function(a){this.atLeastOneInternal(4,a)},c.prototype.AT_LEAST_ONE5=function(a){this.atLeastOneInternal(5,a)},c.prototype.AT_LEAST_ONE6=function(a){this.atLeastOneInternal(6,a)},c.prototype.AT_LEAST_ONE7=function(a){this.atLeastOneInternal(7,a)},c.prototype.AT_LEAST_ONE8=function(a){this.atLeastOneInternal(8,a)},c.prototype.AT_LEAST_ONE9=function(a){this.atLeastOneInternal(9,a)},c.prototype.AT_LEAST_ONE_SEP=function(a){this.atLeastOneSepFirstInternal(0,a)},c.prototype.AT_LEAST_ONE_SEP1=function(a){this.atLeastOneSepFirstInternal(1,a)},c.prototype.AT_LEAST_ONE_SEP2=function(a){this.atLeastOneSepFirstInternal(2,a)},c.prototype.AT_LEAST_ONE_SEP3=function(a){this.atLeastOneSepFirstInternal(3,a)},c.prototype.AT_LEAST_ONE_SEP4=function(a){this.atLeastOneSepFirstInternal(4,a)},c.prototype.AT_LEAST_ONE_SEP5=function(a){this.atLeastOneSepFirstInternal(5,a)},c.prototype.AT_LEAST_ONE_SEP6=function(a){this.atLeastOneSepFirstInternal(6,a)},c.prototype.AT_LEAST_ONE_SEP7=function(a){this.atLeastOneSepFirstInternal(7,a)},c.prototype.AT_LEAST_ONE_SEP8=function(a){this.atLeastOneSepFirstInternal(8,a)},c.prototype.AT_LEAST_ONE_SEP9=function(a){this.atLeastOneSepFirstInternal(9,a)},c.prototype.RULE=function(a,u,d){if(d===void 0&&(d=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,a)){var m=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:a,grammarName:this.className}),p={message:m,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:a};this.definitionErrors.push(p)}this.definedRulesNames.push(a);var g=this.defineRule(a,u,d);return this[a]=g,g},c.prototype.OVERRIDE_RULE=function(a,u,d){d===void 0&&(d=i.DEFAULT_RULE_CONFIG);var m=[];m=m.concat(o.validateRuleIsOverridden(a,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(m);var p=this.defineRule(a,u,d);return this[a]=p,p},c.prototype.BACKTRACK=function(a,u){return function(){this.isBackTrackingStack.push(1);var d=this.saveRecogState();try{return a.apply(this,u),!0}catch(m){if(t.isRecognitionException(m))return!1;throw m}finally{this.reloadRecogState(d),this.isBackTrackingStack.pop()}}},c.prototype.getGAstProductions=function(){return this.gastProductionsCache},c.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},c}();n.RecognizerApi=l}),R_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=gt(),t=xl(),i=Qr(),r=ra(),o=ia(),s=vn(),l=id(),c=Pi(),a=Zr(),u=rd(),d=function(){function m(){}return m.prototype.initRecognizerEngine=function(p,g){if(this.className=u.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=a.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(p)){if(e.isEmpty(p))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof p[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(p))this.tokensMap=e.reduce(p,function(b,y){return b[y.name]=y,b},{});else if(e.has(p,"modes")&&e.every(e.flatten(e.values(p.modes)),a.isTokenType)){var v=e.flatten(e.values(p.modes)),h=e.uniq(v);this.tokensMap=e.reduce(h,function(b,y){return b[y.name]=y,b},{})}else if(e.isObject(p))this.tokensMap=e.cloneObj(p);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=c.EOF;var f=e.every(e.values(p),function(b){return e.isEmpty(b.categoryMatches)});this.tokenMatcher=f?a.tokenStructuredMatcherNoCategories:a.tokenStructuredMatcher,a.augmentTokenTypes(e.values(this.tokensMap))},m.prototype.defineRule=function(p,g,v){if(this.selfAnalysisDone)throw Error("Grammar rule <"+p+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var h=e.has(v,"resyncEnabled")?v.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,f=e.has(v,"recoveryValueFunc")?v.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,b=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[b]=p,this.fullRuleNameToShort[p]=b;function y(T){try{if(this.outputCst===!0){g.apply(this,T);var C=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(C),C}else return g.apply(this,T)}catch(D){return this.invokeRuleCatch(D,h,f)}finally{this.ruleFinallyStateUpdate()}}var _=function(T,C){return T===void 0&&(T=0),this.ruleInvocationStateUpdate(b,p,T),y.call(this,C)},A="ruleName";return _[A]=p,_.originalGrammarAction=g,_},m.prototype.invokeRuleCatch=function(p,g,v){var h=this.RULE_STACK.length===1,f=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(p)){var b=p;if(f){var y=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(y))if(b.resyncedTokens=this.reSyncTo(y),this.outputCst){var _=this.CST_STACK[this.CST_STACK.length-1];return _.recoveredNode=!0,_}else return v();else{if(this.outputCst){var _=this.CST_STACK[this.CST_STACK.length-1];_.recoveredNode=!0,b.partialCstResult=_}throw b}}else{if(h)return this.moveToTerminatedState(),v();throw b}}else throw p},m.prototype.optionInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(p,g,v)},m.prototype.optionInternalLogic=function(p,g,v){var h=this,f=this.getLaFuncFromCache(v),b,y;if(p.DEF!==void 0){if(b=p.DEF,y=p.GATE,y!==void 0){var _=f;f=function(){return y.call(h)&&_.call(h)}}}else b=p;if(f.call(this)===!0)return b.call(this)},m.prototype.atLeastOneInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,p);return this.atLeastOneInternalLogic(p,g,v)},m.prototype.atLeastOneInternalLogic=function(p,g,v){var h=this,f=this.getLaFuncFromCache(v),b,y;if(g.DEF!==void 0){if(b=g.DEF,y=g.GATE,y!==void 0){var _=f;f=function(){return y.call(h)&&_.call(h)}}}else b=g;if(f.call(this)===!0)for(var A=this.doSingleRepetition(b);f.call(this)===!0&&A===!0;)A=this.doSingleRepetition(b);else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[p,g],f,t.AT_LEAST_ONE_IDX,p,o.NextTerminalAfterAtLeastOneWalker)},m.prototype.atLeastOneSepFirstInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,p);this.atLeastOneSepFirstInternalLogic(p,g,v)},m.prototype.atLeastOneSepFirstInternalLogic=function(p,g,v){var h=this,f=g.DEF,b=g.SEP,y=this.getLaFuncFromCache(v);if(y.call(this)===!0){f.call(this);for(var _=function(){return h.tokenMatcher(h.LA(1),b)};this.tokenMatcher(this.LA(1),b)===!0;)this.CONSUME(b),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,b,_,f,o.NextTerminalAfterAtLeastOneSepWalker],_,t.AT_LEAST_ONE_SEP_IDX,p,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},m.prototype.manyInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.MANY_IDX,p);return this.manyInternalLogic(p,g,v)},m.prototype.manyInternalLogic=function(p,g,v){var h=this,f=this.getLaFuncFromCache(v),b,y;if(g.DEF!==void 0){if(b=g.DEF,y=g.GATE,y!==void 0){var _=f;f=function(){return y.call(h)&&_.call(h)}}}else b=g;for(var A=!0;f.call(this)===!0&&A===!0;)A=this.doSingleRepetition(b);this.attemptInRepetitionRecovery(this.manyInternal,[p,g],f,t.MANY_IDX,p,o.NextTerminalAfterManyWalker,A)},m.prototype.manySepFirstInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,p);this.manySepFirstInternalLogic(p,g,v)},m.prototype.manySepFirstInternalLogic=function(p,g,v){var h=this,f=g.DEF,b=g.SEP,y=this.getLaFuncFromCache(v);if(y.call(this)===!0){f.call(this);for(var _=function(){return h.tokenMatcher(h.LA(1),b)};this.tokenMatcher(this.LA(1),b)===!0;)this.CONSUME(b),f.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,b,_,f,o.NextTerminalAfterManySepWalker],_,t.MANY_SEP_IDX,p,o.NextTerminalAfterManySepWalker)}},m.prototype.repetitionSepSecondInternal=function(p,g,v,h,f){for(;v();)this.CONSUME(g),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,g,v,h,f],v,t.AT_LEAST_ONE_SEP_IDX,p,f)},m.prototype.doSingleRepetition=function(p){var g=this.getLexerPosition();p.call(this);var v=this.getLexerPosition();return v>g},m.prototype.orInternal=function(p,g){var v=this.getKeyForAutomaticLookahead(t.OR_IDX,g),h=e.isArray(p)?p:p.DEF,f=this.getLaFuncFromCache(v),b=f.call(this,h);if(b!==void 0){var y=h[b];return y.ALT.call(this)}this.raiseNoAltException(g,p.ERR_MSG)},m.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var p=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:p,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,p))}},m.prototype.subruleInternal=function(p,g,v){var h;try{var f=v!==void 0?v.ARGS:void 0;return h=p.call(this,g,f),this.cstPostNonTerminal(h,v!==void 0&&v.LABEL!==void 0?v.LABEL:p.ruleName),h}catch(b){this.subruleInternalError(b,v,p.ruleName)}},m.prototype.subruleInternalError=function(p,g,v){throw i.isRecognitionException(p)&&p.partialCstResult!==void 0&&(this.cstPostNonTerminal(p.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:v),delete p.partialCstResult),p},m.prototype.consumeInternal=function(p,g,v){var h;try{var f=this.LA(1);this.tokenMatcher(f,p)===!0?(this.consumeToken(),h=f):this.consumeInternalError(p,f,v)}catch(b){h=this.consumeInternalRecovery(p,g,b)}return this.cstPostTerminal(v!==void 0&&v.LABEL!==void 0?v.LABEL:p.name,h),h},m.prototype.consumeInternalError=function(p,g,v){var h,f=this.LA(0);throw v!==void 0&&v.ERR_MSG?h=v.ERR_MSG:h=this.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:g,previous:f,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(h,g,f))},m.prototype.consumeInternalRecovery=function(p,g,v){if(this.recoveryEnabled&&v.name==="MismatchedTokenException"&&!this.isBackTracking()){var h=this.getFollowsForInRuleRecovery(p,g);try{return this.tryInRuleRecovery(p,h)}catch(f){throw f.name===l.IN_RULE_RECOVERY_EXCEPTION?v:f}}else throw v},m.prototype.saveRecogState=function(){var p=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:p,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},m.prototype.reloadRecogState=function(p){this.errors=p.errors,this.importLexerState(p.lexerState),this.RULE_STACK=p.RULE_STACK},m.prototype.ruleInvocationStateUpdate=function(p,g,v){this.RULE_OCCURRENCE_STACK.push(v),this.RULE_STACK.push(p),this.cstInvocationStateUpdate(g,p)},m.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},m.prototype.getCurrRuleFullName=function(){var p=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[p]},m.prototype.shortRuleNameToFullName=function(p){return this.shortRuleNameToFull[p]},m.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),c.EOF)},m.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},m}();n.RecognizerEngine=d}),w_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=Qr(),t=gt(),i=ra(),r=vn(),o=function(){function s(){}return s.prototype.initErrorHandler=function(l){this._errors=[],this.errorMessageProvider=t.has(l,"errorMessageProvider")?l.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(l){if(e.isRecognitionException(l))return l.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(l),l;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(l){this._errors=l},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(l,c,a){for(var u=this.getCurrRuleFullName(),d=this.getGAstProductions()[u],m=i.getLookaheadPathsForOptionalProd(l,d,c,this.maxLookahead),p=m[0],g=[],v=1;v<=this.maxLookahead;v++)g.push(this.LA(v));var h=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:p,actual:g,previous:this.LA(0),customUserDescription:a,ruleName:u});throw this.SAVE_ERROR(new e.EarlyExitException(h,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(l,c){for(var a=this.getCurrRuleFullName(),u=this.getGAstProductions()[a],d=i.getLookaheadPathsForOr(l,u,this.maxLookahead),m=[],p=1;p<=this.maxLookahead;p++)m.push(this.LA(p));var g=this.LA(0),v=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:d,actual:m,previous:g,customUserDescription:c,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(v,this.LA(1),g))},s}();n.ErrorHandler=o}),C_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=ia(),t=gt(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var l=this.gastProductionsCache[o];if(t.isUndefined(l))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([l],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),l=this.getGAstProductions(),c=l[s],a=new e.NextAfterTokenWalker(c,o).startWalking();return a},r}();n.ContentAssist=i}),P_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=gt(),t=fn(),i=ea(),r=Zr(),o=Pi(),s=vn(),l=xl(),c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(c);var a=!0,u=Math.pow(2,l.BITS_FOR_OCCURRENCE_IDX)-1,d=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([d]);var m=o.createTokenInstance(d,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(m);var p={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function y(){}return y.prototype.initGastRecorder=function(_){this.recordingProdStack=[],this.RECORDING_PHASE=!1},y.prototype.enableRecording=function(){var _=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var A=function(C){var D=C>0?C:"";_["CONSUME"+D]=function(S,E){return this.consumeInternalRecord(S,C,E)},_["SUBRULE"+D]=function(S,E){return this.subruleInternalRecord(S,C,E)},_["OPTION"+D]=function(S){return this.optionInternalRecord(S,C)},_["OR"+D]=function(S){return this.orInternalRecord(S,C)},_["MANY"+D]=function(S){this.manyInternalRecord(C,S)},_["MANY_SEP"+D]=function(S){this.manySepFirstInternalRecord(C,S)},_["AT_LEAST_ONE"+D]=function(S){this.atLeastOneInternalRecord(C,S)},_["AT_LEAST_ONE_SEP"+D]=function(S){this.atLeastOneSepFirstInternalRecord(C,S)}},T=0;T<10;T++)A(T);_.consume=function(C,D,S){return this.consumeInternalRecord(D,C,S)},_.subrule=function(C,D,S){return this.subruleInternalRecord(D,C,S)},_.option=function(C,D){return this.optionInternalRecord(D,C)},_.or=function(C,D){return this.orInternalRecord(D,C)},_.many=function(C,D){this.manyInternalRecord(C,D)},_.atLeastOne=function(C,D){this.atLeastOneInternalRecord(C,D)},_.ACTION=_.ACTION_RECORD,_.BACKTRACK=_.BACKTRACK_RECORD,_.LA=_.LA_RECORD})},y.prototype.disableRecording=function(){var _=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var A=0;A<10;A++){var T=A>0?A:"";delete _["CONSUME"+T],delete _["SUBRULE"+T],delete _["OPTION"+T],delete _["OR"+T],delete _["MANY"+T],delete _["MANY_SEP"+T],delete _["AT_LEAST_ONE"+T],delete _["AT_LEAST_ONE_SEP"+T]}delete _.consume,delete _.subrule,delete _.option,delete _.or,delete _.many,delete _.atLeastOne,delete _.ACTION,delete _.BACKTRACK,delete _.LA})},y.prototype.ACTION_RECORD=function(_){},y.prototype.BACKTRACK_RECORD=function(_,A){return function(){return!0}},y.prototype.LA_RECORD=function(_){return s.END_OF_FILE},y.prototype.topLevelRuleRecord=function(_,A){try{var T=new t.Rule({definition:[],name:_});return T.name=_,this.recordingProdStack.push(T),A.call(this),this.recordingProdStack.pop(),T}catch(C){if(C.KNOWN_RECORDER_ERROR!==!0)try{C.message=C.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw C}throw C}},y.prototype.optionInternalRecord=function(_,A){return v.call(this,t.Option,_,A)},y.prototype.atLeastOneInternalRecord=function(_,A){v.call(this,t.RepetitionMandatory,A,_)},y.prototype.atLeastOneSepFirstInternalRecord=function(_,A){v.call(this,t.RepetitionMandatoryWithSeparator,A,_,a)},y.prototype.manyInternalRecord=function(_,A){v.call(this,t.Repetition,A,_)},y.prototype.manySepFirstInternalRecord=function(_,A){v.call(this,t.RepetitionWithSeparator,A,_,a)},y.prototype.orInternalRecord=function(_,A){return h.call(this,_,A)},y.prototype.subruleInternalRecord=function(_,A,T){if(b(A),!_||e.has(_,"ruleName")===!1){var C=new Error("<SUBRULE"+f(A)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(_)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var D=e.peek(this.recordingProdStack),S=_.ruleName,E=new t.NonTerminal({idx:A,nonTerminalName:S,referencedRule:void 0});return D.definition.push(E),this.outputCst?p:c},y.prototype.consumeInternalRecord=function(_,A,T){if(b(A),!r.hasShortKeyProperty(_)){var C=new Error("<CONSUME"+f(A)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(_)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw C.KNOWN_RECORDER_ERROR=!0,C}var D=e.peek(this.recordingProdStack),S=new t.Terminal({idx:A,terminalType:_});return D.definition.push(S),m},y}();n.GastRecorder=g;function v(y,_,A,T){T===void 0&&(T=!1),b(A);var C=e.peek(this.recordingProdStack),D=e.isFunction(_)?_:_.DEF,S=new y({definition:[],idx:A});return T&&(S.separator=_.SEP),e.has(_,"MAX_LOOKAHEAD")&&(S.maxLookahead=_.MAX_LOOKAHEAD),this.recordingProdStack.push(S),D.call(this),C.definition.push(S),this.recordingProdStack.pop(),c}function h(y,_){var A=this;b(_);var T=e.peek(this.recordingProdStack),C=e.isArray(y)===!1,D=C===!1?y:y.DEF,S=new t.Alternation({definition:[],idx:_,ignoreAmbiguities:C&&y.IGNORE_AMBIGUITIES===!0});e.has(y,"MAX_LOOKAHEAD")&&(S.maxLookahead=y.MAX_LOOKAHEAD);var E=e.some(D,function(w){return e.isFunction(w.GATE)});return S.hasPredicates=E,T.definition.push(S),e.forEach(D,function(w){var L=new t.Alternative({definition:[]});S.definition.push(L),e.has(w,"IGNORE_AMBIGUITIES")?L.ignoreAmbiguities=w.IGNORE_AMBIGUITIES:e.has(w,"GATE")&&(L.ignoreAmbiguities=!0),A.recordingProdStack.push(L),w.ALT.call(A),A.recordingProdStack.pop()}),c}function f(y){return y===0?"":""+y}function b(y){if(y<0||y>u){var _=new Error("Invalid DSL Method idx value: <"+y+`>
	`+("Idx value must be a none negative value smaller than "+(u+1)));throw _.KNOWN_RECORDER_ERROR=!0,_}}}),L_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=gt(),t=vn(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,l=typeof s=="number";this.traceInitMaxIdent=l?s:1/0,this.traceInitPerf=l?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var l=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(l+"--> <"+o+">");var c=e.timer(s),a=c.time,u=c.value,d=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(l+"<-- <"+o+"> time: "+a+"ms"),this.traceInitIndent--,u}else return s()},r}();n.PerformanceTracer=i}),I_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var l=Object.getOwnPropertyDescriptor(o,s);l&&(l.get||l.set)?Object.defineProperty(t.prototype,s,l):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),vn=ot(n=>{var e=n&&n.__extends||function(){var T=function(C,D){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(S,E){S.__proto__=E}||function(S,E){for(var w in E)Object.prototype.hasOwnProperty.call(E,w)&&(S[w]=E[w])},T(C,D)};return function(C,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");T(C,D);function S(){this.constructor=C}C.prototype=D===null?Object.create(D):(S.prototype=D.prototype,new S)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=gt(),i=v_(),r=Pi(),o=na(),s=b_(),l=id(),c=y_(),a=T_(),u=M_(),d=A_(),m=R_(),p=w_(),g=C_(),v=P_(),h=L_(),f=I_();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(T){T[T.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",T[T.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",T[T.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",T[T.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",T[T.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",T[T.LEFT_RECURSION=5]="LEFT_RECURSION",T[T.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",T[T.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",T[T.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",T[T.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",T[T.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",T[T.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",T[T.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function b(T){return T===void 0&&(T=void 0),function(){return T}}n.EMPTY_ALT=b;var y=function(){function T(C,D){this.definitionErrors=[],this.selfAnalysisDone=!1;var S=this;if(S.initErrorHandler(D),S.initLexerAdapter(),S.initLooksAhead(D),S.initRecognizerEngine(C,D),S.initRecoverable(D),S.initTreeBuilder(D),S.initContentAssist(),S.initGastRecorder(D),S.initPerformanceTracer(D),t.has(D,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(D,"skipValidations")?D.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return T.performSelfAnalysis=function(C){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},T.prototype.performSelfAnalysis=function(){var C=this;this.TRACE_INIT("performSelfAnalysis",function(){var D;C.selfAnalysisDone=!0;var S=C.className;C.TRACE_INIT("toFastProps",function(){t.toFastProperties(C)}),C.TRACE_INIT("Grammar Recording",function(){try{C.enableRecording(),t.forEach(C.definedRulesNames,function(w){var L=C[w],P=L.originalGrammarAction,I=void 0;C.TRACE_INIT(w+" Rule",function(){I=C.topLevelRuleRecord(w,P)}),C.gastProductionsCache[w]=I})}finally{C.disableRecording()}});var E=[];if(C.TRACE_INIT("Grammar Resolving",function(){E=s.resolveGrammar({rules:t.values(C.gastProductionsCache)}),C.definitionErrors=C.definitionErrors.concat(E)}),C.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(E)&&C.skipValidations===!1){var w=s.validateGrammar({rules:t.values(C.gastProductionsCache),maxLookahead:C.maxLookahead,tokenTypes:t.values(C.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:S});C.definitionErrors=C.definitionErrors.concat(w)}}),t.isEmpty(C.definitionErrors)&&(C.recoveryEnabled&&C.TRACE_INIT("computeAllProdsFollows",function(){var w=i.computeAllProdsFollows(t.values(C.gastProductionsCache));C.resyncFollows=w}),C.TRACE_INIT("ComputeLookaheadFunctions",function(){C.preComputeLookaheadFunctions(t.values(C.gastProductionsCache))})),!T.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(C.definitionErrors))throw D=t.map(C.definitionErrors,function(w){return w.message}),new Error(`Parser Definition Errors detected:
 `+D.join(`
-------------------------------
`))})},T.DEFER_DEFINITION_ERRORS_HANDLING=!1,T}();n.Parser=y,f.applyMixins(y,[l.Recoverable,c.LooksAhead,a.TreeBuilder,u.LexerAdapter,m.RecognizerEngine,d.RecognizerApi,p.ErrorHandler,g.ContentAssist,v.GastRecorder,h.PerformanceTracer]);var _=function(T){e(C,T);function C(D,S){S===void 0&&(S=n.DEFAULT_PARSER_CONFIG);var E=this,w=t.cloneObj(S);return w.outputCst=!0,E=T.call(this,D,w)||this,E}return C}(y);n.CstParser=_;var A=function(T){e(C,T);function C(D,S){S===void 0&&(S=n.DEFAULT_PARSER_CONFIG);var E=this,w=t.cloneObj(S);return w.outputCst=!1,E=T.call(this,D,w)||this,E}return C}(y);n.EmbeddedActionsParser=A}),N_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Zu();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,l=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,c=o.css,a=c===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":c,u=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,d=`
<link rel='stylesheet' href='`+a+`'>
`,m=`
<script src='`+l+`vendor/railroad-diagrams.js'><\/script>
<script src='`+l+`src/diagrams_builder.js'><\/script>
<script src='`+l+`src/diagrams_behavior.js'><\/script>
<script src='`+l+`src/main.js'><\/script>
`,p=`
<div id="diagrams" align="center"></div>
`,g=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,v=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return u+d+m+p+g+v}n.createSyntaxDiagramsCode=t}),O_=ot(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Zu();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=vn();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=ea();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Pi();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=na();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=Qr();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var l=Qu();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return l.defaultLexerErrorProvider}});var c=fn();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return c.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return c.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return c.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return c.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return c.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return c.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return c.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return c.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return c.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return c.Terminal}});var a=fn();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return a.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return a.serializeProduction}});var u=Jr();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return u.GAstVisitor}});function d(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=d;var m=N_();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return m.createSyntaxDiagramsCode}});var p=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=p});const Ir=O_();class D_ extends Ln{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?fm.extractUrlBase(e):o.path,l=new Gu(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(e,function(c){try{t(o.parse(c,s))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(M){const x=o(),R=new F_(x.tokens),F=new U_(x.tokenVocabulary),O=s(F.getBaseCstVisitorConstructor()),U=R.lex(M);F.input=U.tokens;const $=F.vrml();if(F.errors.length>0)throw console.error(F.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return O.visit($)}function o(){const M=Ir.createToken,x=M({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),R=M({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:x}),F=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],O=M({name:"Version",pattern:/#VRML.*/,longer_alt:R}),U=M({name:"NodeName",pattern:new RegExp(F.join("|")),longer_alt:R}),$=M({name:"DEF",pattern:/DEF/,longer_alt:R}),q=M({name:"USE",pattern:/USE/,longer_alt:R}),ce=M({name:"ROUTE",pattern:/ROUTE/,longer_alt:R}),fe=M({name:"TO",pattern:/TO/,longer_alt:R}),oe=M({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),ve=M({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),Ue=M({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),Ve=M({name:"TrueLiteral",pattern:/TRUE/}),Le=M({name:"FalseLiteral",pattern:/FALSE/}),Fe=M({name:"NullLiteral",pattern:/NULL/}),H=M({name:"LSquare",pattern:/\[/}),we=M({name:"RSquare",pattern:/]/}),Ae=M({name:"LCurly",pattern:/{/}),ye=M({name:"RCurly",pattern:/}/}),X=M({name:"Comment",pattern:/#.*/,group:Ir.Lexer.SKIPPED}),be=[M({name:"WhiteSpace",pattern:/[ ,\s]/,group:Ir.Lexer.SKIPPED}),U,$,q,ce,fe,Ve,Le,Fe,O,R,x,oe,ve,Ue,H,we,Ae,ye,X],Oe={};for(let Ce=0,Me=be.length;Ce<Me;Ce++){const Re=be[Ce];Oe[Re.name]=Re}return{tokens:be,tokenVocabulary:Oe}}function s(M){class x extends M{constructor(){super(),this.validateVisitor()}vrml(O){const U={version:this.visit(O.version),nodes:[],routes:[]};for(let $=0,q=O.node.length;$<q;$++){const ce=O.node[$];U.nodes.push(this.visit(ce))}if(O.route)for(let $=0,q=O.route.length;$<q;$++){const ce=O.route[$];U.routes.push(this.visit(ce))}return U}version(O){return O.Version[0].image}node(O){const U={name:O.NodeName[0].image,fields:[]};if(O.field)for(let $=0,q=O.field.length;$<q;$++){const ce=O.field[$];U.fields.push(this.visit(ce))}return O.def&&(U.DEF=this.visit(O.def[0])),U}field(O){const U={name:O.Identifier[0].image,type:null,values:null};let $;return O.singleFieldValue&&($=this.visit(O.singleFieldValue[0])),O.multiFieldValue&&($=this.visit(O.multiFieldValue[0])),U.type=$.type,U.values=$.values,U}def(O){return(O.Identifier||O.NodeName)[0].image}use(O){return{USE:(O.Identifier||O.NodeName)[0].image}}singleFieldValue(O){return R(this,O)}multiFieldValue(O){return R(this,O)}route(O){return{FROM:O.RouteIdentifier[0].image,TO:O.RouteIdentifier[1].image}}}function R(F,O){const U={type:null,values:[]};if(O.node){U.type="node";for(let $=0,q=O.node.length;$<q;$++){const ce=O.node[$];U.values.push(F.visit(ce))}}if(O.use){U.type="use";for(let $=0,q=O.use.length;$<q;$++){const ce=O.use[$];U.values.push(F.visit(ce))}}if(O.StringLiteral){U.type="string";for(let $=0,q=O.StringLiteral.length;$<q;$++){const ce=O.StringLiteral[$];U.values.push(ce.image.replace(/'|"/g,""))}}if(O.NumberLiteral){U.type="number";for(let $=0,q=O.NumberLiteral.length;$<q;$++){const ce=O.NumberLiteral[$];U.values.push(parseFloat(ce.image))}}if(O.HexLiteral){U.type="hex";for(let $=0,q=O.HexLiteral.length;$<q;$++){const ce=O.HexLiteral[$];U.values.push(ce.image)}}if(O.TrueLiteral){U.type="boolean";for(let $=0,q=O.TrueLiteral.length;$<q;$++)O.TrueLiteral[$].image==="TRUE"&&U.values.push(!0)}if(O.FalseLiteral){U.type="boolean";for(let $=0,q=O.FalseLiteral.length;$<q;$++)O.FalseLiteral[$].image==="FALSE"&&U.values.push(!1)}return O.NullLiteral&&(U.type="null",O.NullLiteral.forEach(function(){U.values.push(null)})),U}return new x}function l(M){const x=M.nodes,R=new Nu;for(let F=0,O=x.length;F<O;F++){const U=x[F];c(U)}for(let F=0,O=x.length;F<O;F++){const U=x[F],$=a(U);$ instanceof Rt&&R.add($),U.name==="WorldInfo"&&(R.userData.worldInfo=$)}return R}function c(M){M.DEF&&(i[M.DEF]=M);const x=M.fields;for(let R=0,F=x.length;R<F;R++){const O=x[R];if(O.type==="node"){const U=O.values;for(let $=0,q=U.length;$<q;$++)c(U[$])}}}function a(M){return M.USE?G(M.USE):(M.build!==void 0||(M.build=u(M)),M.build)}function u(M){const x=M.name;let R;switch(x){case"Anchor":case"Group":case"Transform":case"Collision":R=d(M);break;case"Background":R=m(M);break;case"Shape":R=p(M);break;case"Appearance":R=g(M);break;case"Material":R=v(M);break;case"ImageTexture":R=y(M);break;case"PixelTexture":R=b(M);break;case"TextureTransform":R=_(M);break;case"IndexedFaceSet":R=C(M);break;case"IndexedLineSet":R=D(M);break;case"PointSet":R=S(M);break;case"Box":R=E(M);break;case"Cone":R=w(M);break;case"Cylinder":R=L(M);break;case"Sphere":R=P(M);break;case"ElevationGrid":R=I(M);break;case"Extrusion":R=z(M);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":R=A(M);break;case"WorldInfo":R=T(M);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",x);break}return R!==void 0&&M.DEF!==void 0&&R.hasOwnProperty("name")===!0&&(R.name=M.DEF),R}function d(M){const x=new ci,R=M.fields;for(let F=0,O=R.length;F<O;F++){const U=R[F],$=U.name,q=U.values;switch($){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":j(q,x);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const ce=new ae(q[0],q[1],q[2]).normalize(),fe=q[3];x.quaternion.setFromAxisAngle(ce,fe);break;case"scale":x.scale.set(q[0],q[1],q[2]);break;case"scaleOrientation":break;case"translation":x.position.set(q[0],q[1],q[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function m(M){const x=new ci;let R,F,O,U;const $=M.fields;for(let ce=0,fe=$.length;ce<fe;ce++){const oe=$[ce],ve=oe.name,Ue=oe.values;switch(ve){case"groundAngle":R=Ue;break;case"groundColor":F=Ue;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":O=Ue;break;case"skyColor":U=Ue;break;default:console.warn("THREE.VRMLLoader: Unknown field:",ve);break}}const q=1e4;if(U){const ce=new Pr(q,32,16),fe=new Qi({fog:!1,side:Xt,depthWrite:!1,depthTest:!1});U.length>3?(te(ce,q,O,Q(U),!0),fe.vertexColors=!0):fe.color.setRGB(U[0],U[1],U[2],Pt);const oe=new zt(ce,fe);x.add(oe)}if(F&&F.length>0){const ce=new Pr(q,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),fe=new Qi({fog:!1,side:Xt,vertexColors:!0,depthWrite:!1,depthTest:!1});te(ce,q,R,Q(F),!1);const oe=new zt(ce,fe);x.add(oe)}return x.renderOrder=-1/0,x}function p(M){const x=M.fields;let R=new Qi({name:Ln.DEFAULT_MATERIAL_NAME,color:0}),F;for(let U=0,$=x.length;U<$;U++){const q=x[U],ce=q.name,fe=q.values;switch(ce){case"appearance":fe[0]!==null&&(R=a(fe[0]));break;case"geometry":fe[0]!==null&&(F=a(fe[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ce);break}}let O;if(F&&F.attributes.position){const U=F._type;if(U==="points"){const $=new Du({name:Ln.DEFAULT_MATERIAL_NAME,color:16777215,opacity:R.opacity,transparent:R.transparent});F.attributes.color!==void 0?$.vertexColors=!0:R.isMeshPhongMaterial&&$.color.copy(R.emissive),O=new Dp(F,$)}else if(U==="line"){const $=new Ou({name:Ln.DEFAULT_MATERIAL_NAME,color:16777215,opacity:R.opacity,transparent:R.transparent});F.attributes.color!==void 0?$.vertexColors=!0:R.isMeshPhongMaterial&&$.color.copy(R.emissive),O=new Op(F,$)}else F._solid!==void 0&&(R.side=F._solid?Yn:Tn),F.attributes.color!==void 0&&(R.vertexColors=!0),O=new zt(F,R)}else O=new Rt,O.visible=!1;return O}function g(M){let x=new tm,R;const F=M.fields;for(let O=0,U=F.length;O<U;O++){const $=F[O],q=$.name,ce=$.values;switch(q){case"material":if(ce[0]!==null){const oe=a(ce[0]);oe.diffuseColor&&x.color.copy(oe.diffuseColor),oe.emissiveColor&&x.emissive.copy(oe.emissiveColor),oe.shininess&&(x.shininess=oe.shininess),oe.specularColor&&x.specular.copy(oe.specularColor),oe.transparency&&(x.opacity=1-oe.transparency),oe.transparency>0&&(x.transparent=!0)}else x=new Qi({name:Ln.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const fe=ce[0];fe!==null&&(fe.name==="ImageTexture"||fe.name==="PixelTexture")&&(x.map=a(fe));break;case"textureTransform":ce[0]!==null&&(R=a(ce[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}if(x.map){if(x.map.__type){switch(x.map.__type){case En.INTENSITY_ALPHA:x.opacity=1;break;case En.RGB:x.color.set(16777215);break;case En.RGBA:x.color.set(16777215),x.opacity=1;break}delete x.map.__type}R&&(x.map.center.copy(R.center),x.map.rotation=R.rotation,x.map.repeat.copy(R.scale),x.map.offset.copy(R.translation))}return x}function v(M){const x={},R=M.fields;for(let F=0,O=R.length;F<O;F++){const U=R[F],$=U.name,q=U.values;switch($){case"ambientIntensity":break;case"diffuseColor":x.diffuseColor=new it().setRGB(q[0],q[1],q[2],Pt);break;case"emissiveColor":x.emissiveColor=new it().setRGB(q[0],q[1],q[2],Pt);break;case"shininess":x.shininess=q[0];break;case"specularColor":x.specularColor=new it().setRGB(q[0],q[1],q[2],Pt);break;case"transparency":x.transparency=q[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function h(M,x,R){let F;switch(x){case En.INTENSITY:F=parseInt(M),R.r=F,R.g=F,R.b=F,R.a=1;break;case En.INTENSITY_ALPHA:F=parseInt("0x"+M.substring(2,4)),R.r=F,R.g=F,R.b=F,R.a=parseInt("0x"+M.substring(4,6));break;case En.RGB:R.r=parseInt("0x"+M.substring(2,4)),R.g=parseInt("0x"+M.substring(4,6)),R.b=parseInt("0x"+M.substring(6,8)),R.a=1;break;case En.RGBA:R.r=parseInt("0x"+M.substring(2,4)),R.g=parseInt("0x"+M.substring(4,6)),R.b=parseInt("0x"+M.substring(6,8)),R.a=parseInt("0x"+M.substring(8,10));break}}function f(M){let x;switch(M){case 1:x=En.INTENSITY;break;case 2:x=En.INTENSITY_ALPHA;break;case 3:x=En.RGB;break;case 4:x=En.RGBA;break}return x}function b(M){let x,R=li,F=li;const O=M.fields;for(let U=0,$=O.length;U<$;U++){const q=O[U],ce=q.name,fe=q.values;switch(ce){case"image":const oe=fe[0],ve=fe[1],Ue=fe[2],Ve=f(Ue),Le=new Uint8Array(4*oe*ve),Fe={r:0,g:0,b:0,a:0};for(let H=3,we=0,Ae=fe.length;H<Ae;H++,we++){h(fe[H],Ve,Fe);const ye=we*4;Le[ye+0]=Fe.r,Le[ye+1]=Fe.g,Le[ye+2]=Fe.b,Le[ye+3]=Fe.a}x=new cl(Le,oe,ve),x.colorSpace=Pt,x.needsUpdate=!0,x.__type=Ve;break;case"repeatS":fe[0]===!1&&(R=un);break;case"repeatT":fe[0]===!1&&(F=un);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ce);break}}return x&&(x.wrapS=R,x.wrapT=F),x}function y(M){let x,R=li,F=li;const O=M.fields;for(let U=0,$=O.length;U<$;U++){const q=O[U],ce=q.name,fe=q.values;switch(ce){case"url":const oe=fe[0];oe&&(x=Se.load(oe));break;case"repeatS":fe[0]===!1&&(R=un);break;case"repeatT":fe[0]===!1&&(F=un);break;default:console.warn("THREE.VRMLLoader: Unknown field:",ce);break}}return x&&(x.wrapS=R,x.wrapT=F,x.colorSpace=Pt),x}function _(M){const x={center:new Je,rotation:new Je,scale:new Je,translation:new Je},R=M.fields;for(let F=0,O=R.length;F<O;F++){const U=R[F],$=U.name,q=U.values;switch($){case"center":x.center.set(q[0],q[1]);break;case"rotation":x.rotation=q[0];break;case"scale":x.scale.set(q[0],q[1]);break;case"translation":x.translation.set(q[0],q[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function A(M){return M.fields[0].values}function T(M){const x={},R=M.fields;for(let F=0,O=R.length;F<O;F++){const U=R[F],$=U.name,q=U.values;switch($){case"title":x.title=q[0];break;case"info":x.info=q;break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}return x}function C(M){let x,R,F,O,U=!0,$=!0,q=0,ce,fe,oe,ve,Ue=!0,Ve=!0;const Le=M.fields;for(let Z=0,be=Le.length;Z<be;Z++){const Oe=Le[Z],Ce=Oe.name,Me=Oe.values;switch(Ce){case"color":const Re=Me[0];Re!==null&&(x=a(Re));break;case"coord":const Ie=Me[0];Ie!==null&&(R=a(Ie));break;case"normal":const De=Me[0];De!==null&&(F=a(De));break;case"texCoord":const Ke=Me[0];Ke!==null&&(O=a(Ke));break;case"ccw":U=Me[0];break;case"colorIndex":ce=Me;break;case"colorPerVertex":Ue=Me[0];break;case"convex":break;case"coordIndex":fe=Me;break;case"creaseAngle":q=Me[0];break;case"normalIndex":oe=Me;break;case"normalPerVertex":Ve=Me[0];break;case"solid":$=Me[0];break;case"texCoordIndex":ve=Me;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ce);break}}if(fe===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new Dt;const Fe=W(fe,U);let H,we,Ae;if(x){if(Ue===!0)if(ce&&ce.length>0){const Z=W(ce,U);H=Y(Fe,Z,x,3)}else H=_e(Fe,new ct(x,3));else if(ce&&ce.length>0){const Z=se(x,ce),be=J(Z,fe);H=re(Fe,be)}else{const Z=J(x,fe);H=re(Fe,Z)}he(H)}if(F)if(Ve===!0)if(oe&&oe.length>0){const Z=W(oe,U);we=Y(Fe,Z,F,3)}else we=_e(Fe,new ct(F,3));else if(oe&&oe.length>0){const Z=se(F,oe),be=J(Z,fe);we=re(Fe,be)}else{const Z=J(F,fe);we=re(Fe,Z)}else we=V(Fe,R,q);if(O)if(ve&&ve.length>0){const Z=W(ve,U);Ae=Y(Fe,Z,O,2)}else Ae=_e(Fe,new ct(O,2));const ye=new Dt,X=_e(Fe,new ct(R,3));return ye.setAttribute("position",X),ye.setAttribute("normal",we),H&&ye.setAttribute("color",H),Ae&&ye.setAttribute("uv",Ae),ye._solid=$,ye._type="mesh",ye}function D(M){let x,R,F,O,U=!0;const $=M.fields;for(let ve=0,Ue=$.length;ve<Ue;ve++){const Ve=$[ve],Le=Ve.name,Fe=Ve.values;switch(Le){case"color":const H=Fe[0];H!==null&&(x=a(H));break;case"coord":const we=Fe[0];we!==null&&(R=a(we));break;case"colorIndex":F=Fe;break;case"colorPerVertex":U=Fe[0];break;case"coordIndex":O=Fe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Le);break}}let q;const ce=xe(O);if(x){if(U===!0)if(F.length>0){const ve=xe(F);q=Y(ce,ve,x,3)}else q=_e(ce,new ct(x,3));else if(F.length>0){const ve=se(x,F),Ue=ne(ve,O);q=pe(ce,Ue)}else{const ve=ne(x,O);q=pe(ce,ve)}he(q)}const fe=new Dt,oe=_e(ce,new ct(R,3));return fe.setAttribute("position",oe),q&&fe.setAttribute("color",q),fe._type="line",fe}function S(M){let x,R;const F=M.fields;for(let U=0,$=F.length;U<$;U++){const q=F[U],ce=q.name,fe=q.values;switch(ce){case"color":const oe=fe[0];oe!==null&&(x=a(oe));break;case"coord":const ve=fe[0];ve!==null&&(R=a(ve));break;default:console.warn("THREE.VRMLLoader: Unknown field:",ce);break}}const O=new Dt;if(O.setAttribute("position",new ct(R,3)),x){const U=new ct(x,3);he(U),O.setAttribute("color",U)}return O._type="points",O}function E(M){const x=new ae(2,2,2),R=M.fields;for(let O=0,U=R.length;O<U;O++){const $=R[O],q=$.name,ce=$.values;switch(q){case"size":x.x=ce[0],x.y=ce[1],x.z=ce[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new mr(x.x,x.y,x.z)}function w(M){let x=1,R=2,F=!1;const O=M.fields;for(let $=0,q=O.length;$<q;$++){const ce=O[$],fe=ce.name,oe=ce.values;switch(fe){case"bottom":F=!oe[0];break;case"bottomRadius":x=oe[0];break;case"height":R=oe[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",fe);break}}return new dl(x,R,16,1,F)}function L(M){let x=1,R=2;const F=M.fields;for(let U=0,$=F.length;U<$;U++){const q=F[U],ce=q.name,fe=q.values;switch(ce){case"bottom":break;case"radius":x=fe[0];break;case"height":R=fe[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",ce);break}}return new $o(x,x,R,16,1)}function P(M){let x=1;const R=M.fields;for(let O=0,U=R.length;O<U;O++){const $=R[O],q=$.name,ce=$.values;switch(q){case"radius":x=ce[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new Pr(x,16,16)}function I(M){let x,R,F,O,U=!0,$=!0,q=!0,ce=!0,fe=0,oe=2,ve=2,Ue=1,Ve=1;const Le=M.fields;for(let Me=0,Re=Le.length;Me<Re;Me++){const Ie=Le[Me],De=Ie.name,Ke=Ie.values;switch(De){case"color":const ht=Ke[0];ht!==null&&(x=a(ht));break;case"normal":const Nt=Ke[0];Nt!==null&&(R=a(Nt));break;case"texCoord":const Vt=Ke[0];Vt!==null&&(F=a(Vt));break;case"height":O=Ke;break;case"ccw":ce=Ke[0];break;case"colorPerVertex":U=Ke[0];break;case"creaseAngle":fe=Ke[0];break;case"normalPerVertex":$=Ke[0];break;case"solid":q=Ke[0];break;case"xDimension":oe=Ke[0];break;case"xSpacing":Ue=Ke[0];break;case"zDimension":ve=Ke[0];break;case"zSpacing":Ve=Ke[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",De);break}}const Fe=[],H=[],we=[],Ae=[];for(let Me=0;Me<ve;Me++)for(let Re=0;Re<oe;Re++){const Ie=Me*oe+Re,De=Ue*Me,Ke=O[Ie],ht=Ve*Re;if(Fe.push(De,Ke,ht),x&&U===!0){const Nt=x[Ie*3+0],Vt=x[Ie*3+1],Rn=x[Ie*3+2];we.push(Nt,Vt,Rn)}if(R&&$===!0){const Nt=R[Ie*3+0],Vt=R[Ie*3+1],Rn=R[Ie*3+2];H.push(Nt,Vt,Rn)}if(F){const Nt=F[Ie*2+0],Vt=F[Ie*2+1];Ae.push(Nt,Vt)}else Ae.push(Me/(oe-1),Re/(ve-1))}const ye=[];for(let Me=0;Me<oe-1;Me++)for(let Re=0;Re<ve-1;Re++){const Ie=Me+Re*oe,De=Me+(Re+1)*oe,Ke=Me+1+(Re+1)*oe,ht=Me+1+Re*oe;ce===!0?(ye.push(Ie,Ke,De),ye.push(Ke,Ie,ht)):(ye.push(Ie,De,Ke),ye.push(Ke,ht,Ie))}const X=_e(ye,new ct(Fe,3)),Z=_e(ye,new ct(Ae,2));let be,Oe;if(x){if(U===!1){for(let Me=0;Me<oe-1;Me++)for(let Re=0;Re<ve-1;Re++){const Ie=Me+Re*(oe-1),De=x[Ie*3+0],Ke=x[Ie*3+1],ht=x[Ie*3+2];we.push(De,Ke,ht),we.push(De,Ke,ht),we.push(De,Ke,ht),we.push(De,Ke,ht),we.push(De,Ke,ht),we.push(De,Ke,ht)}be=new ct(we,3)}else be=_e(ye,new ct(we,3));he(be)}if(R)if($===!1){for(let Me=0;Me<oe-1;Me++)for(let Re=0;Re<ve-1;Re++){const Ie=Me+Re*(oe-1),De=R[Ie*3+0],Ke=R[Ie*3+1],ht=R[Ie*3+2];H.push(De,Ke,ht),H.push(De,Ke,ht),H.push(De,Ke,ht),H.push(De,Ke,ht),H.push(De,Ke,ht),H.push(De,Ke,ht)}Oe=new ct(H,3)}else Oe=_e(ye,new ct(H,3));else Oe=V(ye,Fe,fe);const Ce=new Dt;return Ce.setAttribute("position",X),Ce.setAttribute("normal",Oe),Ce.setAttribute("uv",Z),be&&Ce.setAttribute("color",be),Ce._solid=q,Ce._type="mesh",Ce}function z(M){let x=[1,1,1,-1,-1,-1,-1,1,1,1],R=[0,0,0,0,1,0],F,O,U=!0,$=!0,q=0,ce=!0,fe=!0;const oe=M.fields;for(let Ce=0,Me=oe.length;Ce<Me;Ce++){const Re=oe[Ce],Ie=Re.name,De=Re.values;switch(Ie){case"beginCap":U=De[0];break;case"ccw":$=De[0];break;case"convex":break;case"creaseAngle":q=De[0];break;case"crossSection":x=De;break;case"endCap":ce=De[0];break;case"orientation":O=De;break;case"scale":F=De;break;case"solid":fe=De[0];break;case"spine":R=De;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ie);break}}const ve=x[0]===x[x.length-2]&&x[1]===x[x.length-1],Ue=[],Ve=new ae,Le=new ae,Fe=new ae,H=new ae,we=new hi;for(let Ce=0,Me=0,Re=0,Ie=R.length;Ce<Ie;Ce+=3,Me+=2,Re+=4){Ve.fromArray(R,Ce),Le.x=F?F[Me+0]:1,Le.y=1,Le.z=F?F[Me+1]:1,Fe.x=O?O[Re+0]:0,Fe.y=O?O[Re+1]:0,Fe.z=O?O[Re+2]:1;const De=O?O[Re+3]:0;for(let Ke=0,ht=x.length;Ke<ht;Ke+=2)H.x=x[Ke+0],H.y=0,H.z=x[Ke+1],H.multiply(Le),we.setFromAxisAngle(Fe,De),H.applyQuaternion(we),H.add(Ve),Ue.push(H.x,H.y,H.z)}const Ae=[],ye=R.length/3,X=x.length/2;for(let Ce=0;Ce<ye-1;Ce++)for(let Me=0;Me<X-1;Me++){const Re=Me+Ce*X;let Ie=Me+1+Ce*X;const De=Me+(Ce+1)*X;let Ke=Me+1+(Ce+1)*X;Me===X-2&&ve===!0&&(Ie=Ce*X,Ke=(Ce+1)*X),$===!0?(Ae.push(Re,Ie,De),Ae.push(De,Ie,Ke)):(Ae.push(Re,De,Ie),Ae.push(De,Ke,Ie))}if(U===!0||ce===!0){const Ce=[];for(let Ie=0,De=x.length;Ie<De;Ie+=2)Ce.push(new Je(x[Ie],x[Ie+1]));const Me=fl.triangulateShape(Ce,[]),Re=[];for(let Ie=0,De=Me.length;Ie<De;Ie++){const Ke=Me[Ie];Re.push(Ke[0],Ke[1],Ke[2])}if(U===!0)for(let Ie=0,De=Re.length;Ie<De;Ie+=3)$===!0?Ae.push(Re[Ie+0],Re[Ie+1],Re[Ie+2]):Ae.push(Re[Ie+0],Re[Ie+2],Re[Ie+1]);if(ce===!0){const Ie=X*(ye-1);for(let De=0,Ke=Re.length;De<Ke;De+=3)$===!0?Ae.push(Ie+Re[De+0],Ie+Re[De+2],Ie+Re[De+1]):Ae.push(Ie+Re[De+0],Ie+Re[De+1],Ie+Re[De+2])}}const Z=_e(Ae,new ct(Ue,3)),be=V(Ae,Ue,q),Oe=new Dt;return Oe.setAttribute("position",Z),Oe.setAttribute("normal",be),Oe._solid=fe,Oe._type="mesh",Oe}function G(M){const x=i[M],R=a(x);return R.isObject3D||R.isMaterial?R.clone():R}function j(M,x){for(let R=0,F=M.length;R<F;R++){const O=a(M[R]);O instanceof Rt&&x.add(O)}}function W(M,x){const R=[];let F=0;for(let O=0,U=M.length;O<U;O++){const $=M[F],q=M[O+(x?1:2)],ce=M[O+(x?2:1)];R.push($,q,ce),(M[O+3]===-1||O+3>=U)&&(O+=3,F=O+1)}return R}function J(M,x){const R=[];let F=0;for(let O=0,U=x.length;O<U;O++){const $=F*3,q=M[$],ce=M[$+1],fe=M[$+2];R.push(q,ce,fe),(x[O+3]===-1||O+3>=U)&&(O+=3,F++)}return R}function se(M,x){const R=[];for(let F=0,O=x.length;F<O;F++){const $=x[F]*3,q=M[$],ce=M[$+1],fe=M[$+2];R.push(q,ce,fe)}return R}function xe(M){const x=[];for(let R=0,F=M.length;R<F;R++){const O=M[R],U=M[R+1];x.push(O,U),(M[R+2]===-1||R+2>=F)&&(R+=2)}return x}function ne(M,x){const R=[];let F=0;for(let O=0,U=x.length;O<U;O++){const $=F*3,q=M[$],ce=M[$+1],fe=M[$+2];R.push(q,ce,fe),(x[O+2]===-1||O+2>=U)&&(O+=2,F++)}return R}const ie=new ae,Ee=new ae,ee=new ae,k=new Je,B=new Je,K=new Je;function Y(M,x,R,F){const O=[];for(let U=0,$=M.length;U<$;U+=3){const q=x[U],ce=x[U+1],fe=x[U+2];F===2?(k.fromArray(R,q*F),B.fromArray(R,ce*F),K.fromArray(R,fe*F),O.push(k.x,k.y),O.push(B.x,B.y),O.push(K.x,K.y)):(ie.fromArray(R,q*F),Ee.fromArray(R,ce*F),ee.fromArray(R,fe*F),O.push(ie.x,ie.y,ie.z),O.push(Ee.x,Ee.y,Ee.z),O.push(ee.x,ee.y,ee.z))}return new ct(O,F)}function re(M,x){const R=[];for(let F=0,O=0,U=M.length;F<U;F+=3,O++)ie.fromArray(x,O*3),R.push(ie.x,ie.y,ie.z),R.push(ie.x,ie.y,ie.z),R.push(ie.x,ie.y,ie.z);return new ct(R,3)}function pe(M,x){const R=[];for(let F=0,O=0,U=M.length;F<U;F+=2,O++)ie.fromArray(x,O*3),R.push(ie.x,ie.y,ie.z),R.push(ie.x,ie.y,ie.z);return new ct(R,3)}function _e(M,x){const R=x.array,F=x.itemSize,O=new R.constructor(M.length*F);let U=0,$=0;for(let q=0,ce=M.length;q<ce;q++){U=M[q]*F;for(let fe=0;fe<F;fe++)O[$++]=R[U++]}return new ct(O,F)}const Pe=new ae,Xe=new ae;function V(M,x,R){const F=[],O={};for(let $=0,q=M.length;$<q;$+=3){const ce=M[$],fe=M[$+1],oe=M[$+2],ve=new B_(ce,fe,oe);ie.fromArray(x,ce*3),Ee.fromArray(x,fe*3),ee.fromArray(x,oe*3),Xe.subVectors(ee,Ee),Pe.subVectors(ie,Ee),Xe.cross(Pe),Xe.normalize(),ve.normal.copy(Xe),O[ce]===void 0&&(O[ce]=[]),O[fe]===void 0&&(O[fe]=[]),O[oe]===void 0&&(O[oe]=[]),O[ce].push(ve.normal),O[fe].push(ve.normal),O[oe].push(ve.normal),F.push(ve)}const U=[];for(let $=0,q=F.length;$<q;$++){const ce=F[$],fe=Ne(O[ce.a],ce.normal,R),oe=Ne(O[ce.b],ce.normal,R),ve=Ne(O[ce.c],ce.normal,R);ie.fromArray(x,ce.a*3),Ee.fromArray(x,ce.b*3),ee.fromArray(x,ce.c*3),U.push(fe.x,fe.y,fe.z),U.push(oe.x,oe.y,oe.z),U.push(ve.x,ve.y,ve.z)}return new ct(U,3)}function Ne(M,x,R){const F=new ae;if(R===0)F.copy(x);else for(let O=0,U=M.length;O<U;O++)M[O].angleTo(x)<R&&F.add(M[O]);return F.normalize()}function Q(M){const x=[];for(let R=0,F=M.length;R<F;R+=3)x.push(new it(M[R],M[R+1],M[R+2]));return x}function he(M){const x=new it;for(let R=0;R<M.count;R++)x.fromBufferAttribute(M,R),pt.colorSpaceToWorking(x,Pt),M.setXYZ(R,x.r,x.g,x.b)}function te(M,x,R,F,O){const U=[],$=O===!0?0:Math.PI;for(let Ue=0,Ve=F.length;Ue<Ve;Ue++){let Le=Ue===0?0:R[Ue-1];Le=O===!0?Le:$-Le;const Fe=new ae;Fe.setFromSphericalCoords(x,Le,0),U.push(Fe)}const q=M.index,ce=M.attributes.position,fe=new on(new Float32Array(M.attributes.position.count*3),3),oe=new ae,ve=new it;for(let Ue=0;Ue<q.count;Ue++){const Ve=q.getX(Ue);oe.fromBufferAttribute(ce,Ve);let Le,Fe,H=1;for(let ye=1;ye<U.length;ye++){Le=ye-1,Fe=ye;const X=U[Le],Z=U[Fe];if(O===!0){if(oe.y<=X.y&&oe.y>Z.y){H=Math.abs(X.y-oe.y)/Math.abs(X.y-Z.y);break}}else if(oe.y>=X.y&&oe.y<Z.y){H=Math.abs(X.y-oe.y)/Math.abs(X.y-Z.y);break}}const we=F[Le],Ae=F[Fe];ve.copy(we).lerp(Ae,H),pt.colorSpaceToWorking(ve,Pt),fe.setXYZ(Ve,ve.r,ve.g,ve.b)}M.setAttribute("color",fe)}const Se=new lm(this.manager);if(Se.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const Te=r(e);return l(Te)}}class F_{constructor(e){this.lexer=new Ir.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const k_=Ir.CstParser;class U_ extends k_{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,l=e.RSquare,c=e.Identifier,a=e.RouteIdentifier,u=e.StringLiteral,d=e.HexLiteral,m=e.NumberLiteral,p=e.TrueLiteral,g=e.FalseLiteral,v=e.NullLiteral,h=e.DEF,f=e.USE,b=e.ROUTE,y=e.TO,_=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(_),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(c),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(_)}}])}),t.RULE("use",function(){t.CONSUME(f),t.OR([{ALT:function(){t.CONSUME(c)}},{ALT:function(){t.CONSUME(_)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(v)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(u)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(v)}}])}),t.CONSUME(l)}),t.RULE("route",function(){t.CONSUME(b),t.CONSUME(a),t.CONSUME(y),t.CONSUME2(a)}),this.performSelfAnalysis()}}class B_{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new ae}}const En={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},od=n=>(Bd("data-v-079aafc6"),n=n(),zd(),n),z_={class:"options-div"},V_={class:"select-div"},G_={key:0,class:"radio-list"},H_=od(()=>Jt("label",{class:"label"},[Jt("strong",null,"Version:")],-1)),W_={class:"radio-grid"},X_={key:1,class:"checkbox-list"},j_=od(()=>Jt("label",{class:"label"},[Jt("strong",null,"Parts:")],-1)),K_={class:"checkbox-grid"},Y_=xt({__name:"ModelViewer",props:{models:{},backgroundColor:{}},setup(n){const e=n,t=Ye(null);let i,r,o,s,l=null;const c=new g_,a=new D_,u=Ye(null),d=Ye(null),m=Ye(null),p=Ye([]),g=Ye(null);let v=null;const h=Ye(!1);let f=new Map,b=new Map,y=new Map,_=1,A=new Map;const T=ze(()=>{const k=[],B=K=>{(K||[]).forEach(Y=>{Y.src&&k.push(Y),Y.children&&Array.isArray(Y.children)&&B(Y.children)})};return e.models.forEach(K=>{B(K.children||[])}),k}),C=ze(()=>(A.clear(),e.models.map(B=>(A.set(B.key,B),{label:B.label,value:B.key,children:(B.children||[]).map(K=>(A.set(K.key,K),{label:K.label,value:K.key}))})))),D=ze(()=>{const k={versionOptions:[],isGroup:!1,children:[],filePaths:[]};if(!u.value||u.value.length<2)return k;const[B,K]=u.value,Y=A.get(B);if(!Y||!Y.children)return k;const re=Y.children.find(Ne=>Ne.key===K);if(!re||!re.children)return k;const pe=re.children.map(Ne=>{const Q=!!Ne.children&&Ne.children.length>0,he=Ne.isGroup||Q?Ne.key||Ne.src:Ne.src||Ne.key;return{label:Ne.label,value:he,isGroup:Q,children:Ne.children,src:Ne.src,colorHex:Ne.colorHex,opacity:Ne.opacity}}),_e=pe.find(Ne=>Ne.value===g.value),Pe=!!(_e&&_e.children&&_e.children.length>0);let Xe=[],V=[];return g.value&&(g.value.includes("/")?V=[g.value]:_e&&(Pe&&_e.children?(Xe=_e.children.map(Ne=>({src:Ne.src,label:Ne.label})),V=p.value.length>0?p.value:[]):_e.src&&(V=[_e.src]))),{versionOptions:pe,isGroup:Pe,children:Xe,filePaths:V}}),S=ze(()=>D.value.versionOptions),E=ze(()=>D.value.isGroup),w=ze(()=>D.value.children),L=ze(()=>D.value.filePaths);rn(()=>e.models,()=>{if(u.value)return;const k=e.models;if(!k||k.length===0)return;C.value;const B=k[0],K=B.children&&B.children[0];B&&K&&(u.value=[B.key,K.key],m.value=K.key)},{immediate:!0}),rn(m,k=>{if(!k){u.value=null;return}const B=Array.isArray(k)?k[0]:k;for(const K of e.models)if(K.children&&K.children.find(Y=>Y.key===B)){u.value=[K.key,B];return}}),rn(u,k=>{if(!k||k.length<2)return;const[B,K]=k,Y=A.get(B);if(!Y||!Y.children){g.value=null,p.value=[],I();return}const re=Y.children.find(V=>V.key===K);if(!re||!re.children||re.children.length===0){g.value=null,p.value=[],I();return}const pe=re.children,_e=pe[pe.length-1],Pe=!!(_e.children&&_e.children.length>0),Xe=Pe?_e.key||_e.src:_e.src||_e.key;g.value=Xe,Pe&&_e.children?p.value=_e.children.map(V=>V.src):p.value=[],I()},{immediate:!0}),rn(g,k=>{if(!k||!u.value||u.value.length<2){I();return}const[B,K]=u.value,Y=A.get(B);if(!Y||!Y.children){I();return}const re=Y.children.find(_e=>_e.key===K);if(!re||!re.children){I();return}const pe=re.children.find(_e=>(!!(_e.children&&_e.children.length>0)?_e.key||_e.src:_e.src||_e.key)===k);pe&&pe.children&&(p.value=pe.children.map(_e=>_e.src)),I()},{immediate:!0}),rn(p,()=>{if(!E.value||!l){I();return}const k=new Set(p.value);l.children.forEach(B=>{if(B instanceof zt||B instanceof Rt&&B.children.length>0){const K=B.userData.src;B.visible=k.has(K)}}),h.value&&ne()},{deep:!0}),rn(E,k=>{!k&&h.value&&(h.value=!1,Ee())}),hr(()=>{P(),I(),J()});function P(){i=new Nu,i.background=new it(e.backgroundColor||0);const k=t.value.clientWidth,B=500;r=new mn(45,k/B,.01,1e4),r.position.set(0,0,100),o=new t_({antialias:!0}),o.setSize(k,B),o.setPixelRatio(window.devicePixelRatio),o.outputColorSpace=Pt,t.value.appendChild(o.domElement),s=new i_(r,o.domElement),s.enableDamping=!0,s.dampingFactor=.05;const K=new dm(16777215,.6);i.add(K);const Y=new Wa(16777215,.8);Y.position.set(5,5,5),i.add(Y);const re=new Wa(16777215,.4);re.position.set(-5,0,-5),i.add(re);const pe=new Wa(16777215,.3);pe.position.set(0,-5,-5),i.add(pe)}async function I(){if(!L.value.length)return;const k=JSON.stringify(d.value)!==JSON.stringify(u.value);d.value=u.value?[...u.value]:null;const B=g.value!==v;l&&i.remove(l),l=new ci;const K=[];for(const Y of L.value)if(Y.toLowerCase().endsWith(".wrl")||Y.toLowerCase().endsWith(".vrml")){const pe=await G(Y);pe.userData.src=Y,K.push(pe),l.add(pe)}else{const pe=await z(Y),_e=j(pe,Y);_e.position.set(0,0,0),_e.userData.src=Y,K.push(_e),l.add(_e)}if(i.add(l),B){v=g.value??null;const Y=S.value.find(re=>re.value===g.value);if(Y&&Y.isGroup&&Y.children){const re=K.filter(pe=>!(pe instanceof Rt&&pe.children.length>0));if(re.length>0){const pe=new ci;re.forEach(_e=>pe.add(_e.clone())),pe.updateMatrixWorld(!0),ie(re,pe,Y.children)}k&&W(l)}else k&&W(l)}else s.update();l.children.forEach(Y=>{if(!(Y instanceof zt))return;const re=Y.userData.src;f.has(re)||f.set(re,Y.position.clone())}),h.value&&ne()}function z(k){return new Promise((B,K)=>{c.load(k,B,void 0,K)})}function G(k){return new Promise((B,K)=>{a.load(k,B,void 0,K)})}function j(k,B){k.computeVertexNormals();const K=B.toLowerCase().split("/").pop(),Y=T.value.find(Ne=>K.includes(Ne.src.split("/").pop().toLowerCase())),re=(Y==null?void 0:Y.colorHex)??"0xffffff",pe=(Y==null?void 0:Y.opacity)??1,_e=128,Pe=new Uint8Array(_e*_e*4);for(let Ne=0;Ne<Pe.length;Ne++)Pe[Ne]=128+Math.random()*40;const Xe=new cl(Pe,_e,_e,xn);Xe.wrapS=Xe.wrapT=li,Xe.repeat.set(10,10),Xe.needsUpdate=!0;const V=new em({color:parseInt(re.replace("#",""),16),transparent:pe<1,opacity:pe,roughness:.6,metalness:.05,emissive:1118481,normalMap:Xe,normalScale:new Je(.2,.2),side:Tn});return V.onBeforeCompile=Ne=>{Ne.fragmentShader=Ne.fragmentShader.replace("#include <dithering_fragment>",`
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `)},new zt(k,V)}function W(k){const B=k??l;if(!B)return;const K=new fi().setFromObject(B),Y=K.getSize(new ae).length(),re=K.getCenter(new ae);s.target.copy(re),r.position.copy(re).addScalar(Y*.8),r.lookAt(re)}function J(){requestAnimationFrame(J),s.update(),o.render(i,r)}function se(){l&&(h.value?Ee():xe(),h.value=!h.value)}function xe(){if(!l)return;f.clear();const k=_*.25;l.children.forEach(B=>{if(!(B instanceof zt))return;const K=B.userData.src;f.set(K,B.position.clone());const Y=y.get(K);let re;if(Y)re=B.position.clone().add(new ae(Y.x,Y.y,Y.z));else{const pe=b.get(K);if(!pe)return;re=B.position.clone().add(pe.clone().multiplyScalar(k))}ee(B,re)})}function ne(){const k=_*.25;l.children.forEach(B=>{if(!(B instanceof zt))return;const K=B.userData.src,Y=y.get(K);let re;if(Y)re=f.get(K).clone().add(new ae(Y.x,Y.y,Y.z));else{const pe=b.get(K);if(!pe)return;re=B.position.clone().add(pe.clone().multiplyScalar(k))}B.position.copy(re)})}function ie(k,B,K){b.clear(),y.clear();const Y=new fi().setFromObject(B),re=Y.getCenter(new ae),pe=B.worldToLocal(re.clone());_=Y.getSize(new ae).length();for(const _e of k){const Xe=new fi().setFromObject(_e).getCenter(new ae),Ne=B.worldToLocal(Xe.clone()).clone().sub(pe);if(Ne.length()<1e-4?Ne.set(0,0,0):Ne.normalize(),b.set(_e.userData.src,Ne),K){const Q=K.find(he=>he.src===_e.userData.src);Q!=null&&Q.explodeOffset&&y.set(_e.userData.src,Q.explodeOffset)}}}function Ee(){l&&l.children.forEach(k=>{if(!(k instanceof zt))return;const B=f.get(k.userData.src);B&&ee(k,B)})}function ee(k,B){const K=k.position.clone(),Y=.35,re=performance.now();function pe(){const _e=(performance.now()-re)/1e3,Pe=Math.min(_e/Y,1);k.position.lerpVectors(K,B,Pe),Pe<1&&requestAnimationFrame(pe)}requestAnimationFrame(pe)}return(k,B)=>{const K=Zf,Y=uh,re=Ud,pe=ih,_e=sh,Pe=du,Xe=zf;return Wt(),Pn(Cr,null,[Jt("div",z_,[Jt("div",V_,[wn(K,{class:"select-model",value:m.value,"onUpdate:value":B[0]||(B[0]=V=>m.value=V),options:C.value,"show-path":!0,"check-strategy":"child"},null,8,["value","options"]),E.value?(Wt(),qi(re,{key:0,class:"select-button",onClick:se,tertiary:""},{icon:Sn(()=>[wn(Y,null,{default:Sn(()=>[h.value?(Wt(),qi(bl(ph),{key:0})):oi("",!0),h.value?oi("",!0):(Wt(),qi(bl(fh),{key:1}))]),_:1})]),_:1})):oi("",!0)]),S.value.length>0&&!E.value?(Wt(),Pn("div",G_,[H_,wn(_e,{value:g.value,"onUpdate:value":B[1]||(B[1]=V=>g.value=V)},{default:Sn(()=>[Jt("div",W_,[(Wt(!0),Pn(Cr,null,yl(S.value,V=>(Wt(),qi(pe,{key:V.value,value:V.value},{default:Sn(()=>[Wn($i(V.label),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):oi("",!0),E.value?(Wt(),Pn("div",X_,[j_,wn(Xe,{value:p.value,"onUpdate:value":B[2]||(B[2]=V=>p.value=V)},{default:Sn(()=>[Jt("div",K_,[(Wt(!0),Pn(Cr,null,yl(w.value,V=>(Wt(),qi(Pe,{key:V.src,value:V.src},{default:Sn(()=>[Wn($i(V.name??V.label??"Unnamed Part"),1)]),_:2},1032,["value"]))),128))])]),_:1},8,["value"])])):oi("",!0)]),Jt("div",{ref_key:"viewerContainer",ref:t,class:"viewer"},null,512)],64)}}}),q_=Qc(Y_,[["__scopeId","data-v-079aafc6"]]),$_={class:"project-view"},Z_={class:"subtitle"},J_={key:1,class:"carousel-wrapper"},Q_=xt({__name:"ProjectTemplate",props:{id:{},media:{default:()=>[]},models:{default:()=>[]}},setup(n){const e=n,t=ze(()=>ad(e.id)),i=ze(()=>{var a;return(a=t.value)==null?void 0:a.name}),r=ze(()=>{var a;return(a=t.value)==null?void 0:a.date}),o=ze(()=>{var a;return(a=t.value)==null?void 0:a.status}),s=ze(()=>{var a;return(a=t.value)==null?void 0:a.description}),l=ze(()=>sd(r.value??"")),c=ze(()=>{switch(o.value){case"Completed":return"success";case"Prototype":return"warning";case"Ongoing":default:return"info"}});return(a,u)=>{const d=Vd,m=Gd,p=Do,g=Wd;return Wt(),Pn("div",$_,[wn(d,null,{default:Sn(()=>[Wn($i(i.value),1)]),_:1}),Jt("div",Z_,[wn(m,{class:"squid-highlight"},{default:Sn(()=>[Wn($i(l.value),1)]),_:1}),wn(p,{size:"small",type:c.value,bordered:!1},{default:Sn(()=>[Wn($i(o.value),1)]),_:1},8,["type"])]),s.value?(Wt(),qi(g,{key:0},{default:Sn(()=>[Wn($i(s.value),1)]),_:1})):oi("",!0),a.media&&a.media.length>0?(Wt(),Pn("div",J_,[wn(vd,{media:a.media},null,8,["media"])])):oi("",!0),Yc(a.$slots,"default",{},void 0,!0),a.models&&a.models.length>0?(Wt(),Pn(Cr,{key:2},[wn(m,null,{default:Sn(()=>[Wn("3D Model Viewer")]),_:1}),Jt("div",null,[wn(q_,{ref:"viewer",models:a.models},null,8,["models"])])],64)):oi("",!0)])}}}),ob=Qc(Q_,[["__scopeId","data-v-72e1ccf7"]]);export{ob as P};
