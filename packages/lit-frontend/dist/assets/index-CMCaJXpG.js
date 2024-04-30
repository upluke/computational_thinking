(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,De=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Je=new WeakMap;let At=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Je.set(t,e))}return e}toString(){return this.cssText}};const Pt=r=>new At(typeof r=="string"?r:r+"",void 0,je),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new At(t,r,je)},ar=(r,e)=>{if(De)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=ne.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},Qe=De?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lr,defineProperty:cr,getOwnPropertyDescriptor:hr,getOwnPropertyNames:dr,getOwnPropertySymbols:ur,getPrototypeOf:pr}=Object,z=globalThis,Xe=z.trustedTypes,gr=Xe?Xe.emptyScript:"",Ee=z.reactiveElementPolyfillSupport,B=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?gr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ve=(r,e)=>!lr(r,e),Ye={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ve};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);class T extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&cr(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=hr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ye}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=pr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,i=[...dr(t),...ur(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Qe(n))}else e!==void 0&&t.push(Qe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ar(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:le).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:le;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ve)(this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$Ej()}catch(n){throw e=!1,this._$Ej(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[B("elementProperties")]=new Map,T[B("finalized")]=new Map,Ee==null||Ee({ReactiveElement:T}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,ce=F.trustedTypes,Ze=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ot="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,zt="?"+P,fr=`<${zt}>`,k=document,W=()=>k.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",Ct=Array.isArray,mr=r=>Ct(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,S=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,it=/"/g,St=/^(?:script|style|textarea|title)$/i,vr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=vr(1),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),nt=new WeakMap,R=k.createTreeWalker(k,129);function Rt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(e):e}const _r=(r,e)=>{const t=r.length-1,i=[];let n,s=e===2?"<svg>":"",o=I;for(let c=0;c<t;c++){const a=r[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===I?h[1]==="!--"?o=et:h[1]!==void 0?o=tt:h[2]!==void 0?(St.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=S):h[3]!==void 0&&(o=S):o===S?h[0]===">"?(o=n??I,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?S:h[3]==='"'?it:rt):o===it||o===rt?o=S:o===et||o===tt?o=I:(o=S,n=void 0);const p=o===S&&r[c+1].startsWith("/>")?" ":"";s+=o===I?a+fr:d>=0?(i.push(l),a.slice(0,d)+Ot+a.slice(d)+P+p):a+P+(d===-2?c:p)}return[Rt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class G{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=_r(e,t);if(this.el=G.createElement(l,i),R.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=R.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Ot)){const u=h[o++],p=n.getAttribute(d).split(P),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:C[2],strings:p,ctor:C[1]==="."?yr:C[1]==="?"?wr:C[1]==="@"?$r:_e}),n.removeAttribute(d)}else d.startsWith(P)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(St.test(n.tagName)){const d=n.textContent.split(P),u=d.length-1;if(u>0){n.textContent=ce?ce.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],W()),R.nextNode(),a.push({type:2,index:++s});n.append(d[u],W())}}}else if(n.nodeType===8)if(n.data===zt)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:s}),d+=P.length-1}s++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function D(r,e,t=r,i){var o,c;if(e===H)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=K(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=D(r,n._$AS(r,e.values),n,i)),e}class br{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??k).importNode(t,!0);R.currentNode=n;let s=R.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new Z(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new xr(s,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(s=R.nextNode(),o++)}return R.currentNode=k,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),K(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):mr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&K(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=G.createElement(Rt(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new br(n,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new G(e)),t}T(e){Ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new Z(this.k(W()),this.k(W()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class _e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=D(this,e,t,0),o=!K(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=D(this,c[i+a],t,a),l===H&&(l=this._$AH[a]),o||(o=!K(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class yr extends _e{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class wr extends _e{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class $r extends _e{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??g)===H)return;const i=this._$AH,n=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==g&&(i===g||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class xr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const Pe=F.litHtmlPolyfillSupport;Pe==null||Pe(G,Z),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.1.1");const Er=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new Z(e.insertBefore(W(),s),s,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Er(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}};var Et;m._$litElement$=!0,m.finalized=!0,(Et=globalThis.litElementHydrateSupport)==null||Et.call(globalThis,{LitElement:m});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ve},Pr=(r=Ar,e,t)=>{const{kind:i,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.C(o,void 0,r),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function v(r){return(e,t)=>typeof t=="object"?Pr(r,e,t):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(r){return v({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class{constructor(e,t,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new kt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Or{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},ot=class extends Or{constructor(e,t,i){var n,s;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new kt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new zr(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new ot(this,{context:r}))}),{get(){return e.get.call(this)},set(n){var s;return(s=i.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=i.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(o=>{i.set(o,new ot(o,{context:r}))});const n=Object.getOwnPropertyDescriptor(e,t);let s;if(n===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){i.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=n.set;s={...n,set:function(c){i.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ne({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new st(this,{context:r,callback:n=>{this[i.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new st(n,{context:r,callback:s=>{n[i]=s},subscribe:e})})}}let Cr=class extends m{constructor(e,t,i){super(),this.updateFn=e,this.getModel=t,this.setModel=i,this.addEventListener("mvu:message",n=>{const s=n.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){const t=this.updateFn(this.getModel(),e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(n=>{const s=n(this.getModel());console.log("Updating model in Promise:",s),this.setModel(s)}):(console.log("Updating model:",t),this.setModel(t))}},Sr=class extends m{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class Rr{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,n=this._handlers.get(i);return n?n(t,e):e}}function kr(r){return e=>Object.assign({},e,r)}function Hr(r){return r}const Mr=window.location.origin,Lr="/api",Ce="JWT_AUTH_TOKEN",A=class A{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new A;return console.log("Deauthenticating",e,A._theUser),e===A._theUser&&(localStorage.removeItem(Ce),A._theUser=t),t}};A._theUser=new A;let x=A;class J extends x{constructor(e,t){super();const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(s);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const i=new J(e,t);return x._theUser=i,localStorage.setItem(Ce,e),i}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ce);return t?J.authenticate(t,e):x._theUser}}class ye{constructor(e){this._base=Lr,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=x._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${x._theUser.token}`};return e?{...i,...s}:s}else return e?{...i}:void 0}_url(e){return`${Mr}${this._base}${e}`}}class at extends ye{constructor(e){super(Object.fromEntries(e))}}class Mt extends ye{constructor(){super(void 0)}}var Tr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Lt=(r,e,t,i)=>{for(var n=i>1?void 0:i?Ur(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Tr(e,t,n),n};const Tt="CTModel",Dr={user:new x};class Ut extends Cr{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Dr}}Lt([Ht({context:Tt}),be()],Ut.prototype,"model",2);class Ie extends Sr{getFromModel(e){if(this._model)return this._model[e]}}Lt([Ne({context:Tt,subscribe:!0}),v({attribute:!1})],Ie.prototype,"_model",2);const jr=()=>new Rr,ee=kr,we=Hr;var Vr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var n=i>1?void 0:i?Nr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Vr(e,t,n),n};let Se=class extends m{render(){return f`
      <main>
        <!-- Hero -->
        <div class="hero">
          <div class="container">
            <h1>Welcome to Computational Thinking</h1>
            <p>Here is the platform where we can share and learn together.</p>
          </div>
        </div>

        <!-- Contents -->
        <div class="content-container">
          <!-- Content1 -->
          <div class="content">
            <div>
              <h2>
                <a href="/app/dsalgo-page">Data Structure & Algorithm</a>
              </h2>
              <p>
                Data structures and algorithms are essential concepts in
                computer science. They involve organizing and processing data
                efficiently to solve problems and develop software applications.
              </p>
            </div>
            <a href="/app/dsalgo-page"
              ><button class="button" role="button">Check it out</button></a
            >
          </div>

          <!-- Content2 -->
          <div class="content">
          <div>
            <h2><a href="/app/bigo-page">Big-O Notation</a></h2>
            <p>
              Big O notation is a fundamental concept in computer science used
              to analyze the efficiency of algorithms. It provides a way to
              describe the upper bound or worst-case scenario of an algorithm's
              time or space complexity.
            </p>
            <a href="/app/bigo-page"
              ><button class="button" role="button">Check it out</button></a
            >
          </div>
        </div>
      </main>
    `}};Se.styles=[b`
      .hero {
        background-color: var(--primary-color);
        height: 42vh;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23747474' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
        background-position: bottom center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;

        margin-bottom: 20px;
        /* color: var(--background-color); */
        z-index: -2;
      }

      .hero h1 {
        font-size: 46px;
        margin: -20px 0 20px;
        color: var(--hero-text-color);
      }

      .hero p {
        font-size: 20px;
        letter-spacing: 1px;
        color: var(--hero-text-color);
      }

      .content-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .content {
        flex: 0 1 35%;
        margin: 3rem 1rem;

        padding: 2rem;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        text-align: center;
      }

      .content h2 a {
        color: var(--primary-color);
        font-size: 2rem;
        text-decoration: none;
        margin: 20px 0;
      }

      .content p {
        color: var(--general-text-color);
        line-height: 30px;
        letter-spacing: 1.2px;
      }

      .content button {
        background-color: var(--primary-color);
        border: none;
        color: var(--background-color);
        margin-top: 20px;
        text-align: center;
        padding: 20px;
        border-radius: var(--border-radius);
        display: inline-block;
        font-size: 16px;
      }

      .content button:hover {
        background-color: var(--secondary-color);
        transition: all var(--transition-duration) ease;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        .content {
          flex-basis: 70%;
        }
      }
    `];Se=Ir([_("home-page")],Se);var Br=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,qr=(r,e,t,i)=>{for(var n=i>1?void 0:i?Fr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Br(e,t,n),n};let Re=class extends m{render(){return f`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <!-- <h1>DS&ALGO page</h1>-->

        <div class="logo-details">
          <a href="/app"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name">Data Structure & Algorithm</span>
        </div>
        <ul class="nav-links">
          <!-- Arrays  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-grid"></i>
                <span class="link_name">Arrays</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul class="sub-menu">
              <li>
                <a href="./static_arrays" class="link_name">Static Arrays</a>
              </li>
              <li>
                <a href="./dynamic_arrays">Dynamic Arrays</a>
              </li>
              <li><a href="#">Stacks</a></li>
            </ul>
          </li>
          <!-- Linked Lists  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-git-commit"></i>
                <span class="link_name">Linked Lists</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul class="sub-menu">
              <li>
                <a href="./singly_linked_lists" class="link_name"
                  >Singly Linked Lists</a
                >
              </li>
              <li><a href="./doubly_linked_lists">Doubly Linked Lists</a></li>
              <li><a href="#">Queues</a></li>
            </ul>
          </li>
          <!-- Graphs  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-sitemap"></i>
                <span class="link_name">Graphs</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="./dijkstra_s" class="link_name">Dijkstra's</a></li>
              <li><a href="./prim_s" class="link_name">Prim's</a></li>
              <li><a href="#" class="link_name">Kruskal's</a></li>
            </ul>
          </li>

          <!-- Recursiion  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-reset"></i>
                <span class="link_name">Recursion</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">Direct Recursion</a></li>
              <li><a href="#">Indirect Recursion</a></li>
            </ul>
          </li>

          <!-- DP  -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-table"></i>
                <span class="link_name">DP</span>
              </a>
              <i class="arrow"></i>
            </div>
            <ul class="sub-menu">
              <li><a href="#" class="link_name">0/1 Knapsack</a></li>
              <li><a href="#">LCS</a></li>
              <li><a href="#">Unbounded Knapsack</a></li>
            </ul>
          </li>
        </ul>
      </div>
    `}};Re.styles=b`
    /* side menu */

    .sidebar {
      /* position: fixed; */
      padding-top: 30px;
      top: 0;
      left: 0;
      height: 100%;

      width: 100%;

      background: var(--primary-color);
      /* z-index: 100; */
      transition: all 0.5s ease;
    }

    .sidebar .logo-details {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .sidebar .logo-details i {
      font-size: 30px;
      color: var(--background-color);
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
    }
    .sidebar .logo-details i:hover {
      color: var(--side-bar-hover-fond-color);
    }
    .sidebar .logo-details .logo-name {
      color: var(--background-color);
      font-weight: bold;
    }

    .sidebar .logo-details a {
      cursor: pointer;
    }
    .sidebar .nav-links {
      height: 100%;
      //padding: 30px 0 150px 0;
      overflow: auto;
    }

    .sidebar .nav-links li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
    }
    .sidebar .nav-links li:hover {
      // color: var(--side-bar-hover-fond-color);
    }
    .sidebar .nav-links li .icon-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sidebar .nav-links li i {
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
      color: var(--background-color);
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .sidebar .nav-links li .sub-menu,
    .sidebar .nav-links li .arrow {
      display: block !important;
    }
    .sidebar .nav-links li a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .sidebar .nav-links li a .link_name {
      font-size: 18px;
      font-weight: 400;
      color: var(--background-color);
      transition: all 0.4s ease;
    }

    .sidebar .nav-links li .sub-menu {
      padding: 6px 6px 14px 80px;
      margin-top: -10px;
      /* background: var(--side-bar-background); */
      display: none;
    }
    .sidebar .nav-links li.showMenu .sub-menu {
      display: block;
    }
    .sidebar .nav-links li .sub-menu a {
      color: var(--background-color);
      font-size: 15px;
      padding: 5px 0;
      white-space: nowrap;
      opacity: 0.6;
      transition: all 0.3s ease;
    }
    .sidebar .nav-links li .sub-menu a:hover {
      opacity: 1;
      color: var(--side-bar-hover-fond-color);
    }

    /* side page */
    .side-page {
      position: fixed;
      padding-left: 20px;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 100;
      transition: all 0.5s ease;
    }

    #content {
      margin-left: 260px;
      transition: margin 0.5s ease;
    }

    iframe[name="contentFrame"] {
      width: 100%;
      height: 100vh;
      border: none;
    }
  `;Re=qr([_("dsalgo-sidebar-component")],Re);var Wr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,$e=(r,e,t,i)=>{for(var n=i>1?void 0:i?Kr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Wr(e,t,n),n};let Be="auth",j=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=J.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const r=f`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}
        >
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>${this.loginStatus?`Login failed: ${this.loginStatus}`:""}</p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${this.registerStatus=0}
        >
          <h2>New User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return f`
      ${this.isAuthenticated()?"":r}
      <slot></slot>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new at(t).base().post("/login").then(n=>{if(n.status===200)return n.json();this.loginStatus=n.status}).then(n=>{if(n){console.log("Authentication:",n.token);const s=J.authenticate(n.token,()=>this._signOut());this.user=s,this._toggleDialog(!1),this._dispatchUserLoggedIn(s),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new at(t).base().post("/signup").then(n=>{if(n.status===200)return n.json();this.registerStatus=n.status}).then(n=>{console.log("Registration:",n)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=x.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};j.styles=b`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;$e([be()],j.prototype,"loginStatus",2);$e([be()],j.prototype,"registerStatus",2);$e([Ht({context:Be}),be()],j.prototype,"user",2);j=$e([_("auth-required")],j);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jr=r=>(...e)=>({_$litDirective$:r,values:e});class Qr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ke extends Qr{constructor(e){if(super(e),this.et=g,e.type!==Gr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.vt=void 0,this.et=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ke.directiveName="unsafeHTML",ke.resultType=1;const Xr=Jr(ke);var Yr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,te=(r,e,t,i)=>{for(var n=i>1?void 0:i?Zr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Yr(e,t,n),n};let M=class extends Ie{constructor(){super(...arguments),this.pageId="",this.isEditing=!1,this.user=new x}get page(){return this.getFromModel("page")}firstUpdated(){this.dispatchMessage({type:"PageViewerSelected",pageid:this.pageId})}render(){var r;return f`
      <div id="page-viewer-container">
        ${this.user.username==="admin"?f`
              <button @click=${this._handleEditClick}>
                ${this.isEditing?"Cancel":"Edit"}
              </button>
            `:""}
        ${Xr((r=this.page)==null?void 0:r.content)}
        ${this.user.username==="admin"&&this.isEditing?this._renderEditForm():""}
      </div>
    `}_handleEditClick(){this.isEditing=!this.isEditing}_renderEditForm(){var r;return f`
      <form @submit=${this._handleEditSubmit}>
        <textarea class="textarea" name="content">
${(r=this.page)==null?void 0:r.content}</textarea
        >
        <button type="submit">Save</button>
      </form>
    `}_handleEditSubmit(r){r.preventDefault();const t=new FormData(r.target).get("content");this.dispatchMessage({type:"PageViewerSaved",content:(t==null?void 0:t.toString())||"",pageid:this.pageId}),this.isEditing=!1}};M.styles=b`
    #page-viewer-container {
      background-color: var(--hero-text-color);
      /* overflow:auto */
      margin: 0 auto;
      padding: 50px;
      width: 70%;
      height: 100vh;
      color: var(--general-text-color);
    }
    button {
      background-color: var(--primary-color);
      border: none;
      color: var(--background-color);
      margin-top: 10px;
      text-align: center;
      padding: 10px 30px;
      border-radius: var(--border-radius);
      display: inline-block;
      font-size: 16px;
    }
    button:hover {
      background-color: var(--secondary-color);
      transition: all var(--transition-duration) ease;
      cursor: pointer;
    }
    .textarea {
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: #333;
      width: 100%;
      min-height: 150px;
      resize: vertical;
      transition: border-color 0.3s ease;
    }

    .textarea:focus {
      outline: none;
      border-color: #66afe9;
    }

    .textarea::placeholder {
      color: #aaa;
    }

    // page content

    .container {
    }
    h1 {
      color: var(--general-text-color);
      text-align: center;
      margin-top: 20px;
    }
    h2 {
      color: #666;
    }
    p {
      color: var(--general-text-color);
    }
    .image-container {
      text-align: center;
      margin-top: 20px;
    }
    .complexity-image {
      max-width: 100%;
      height: auto;
    }
  `;te([v({attribute:"page-id"})],M.prototype,"pageId",2);te([v({attribute:"is-editing"})],M.prototype,"isEditing",2);te([v()],M.prototype,"page",1);te([Ne({context:Be,subscribe:!0}),v({attribute:!1})],M.prototype,"user",2);M=te([_("page-viewer")],M);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,Fe=(r,e,t,i)=>{for(var n=i>1?void 0:i?ti(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ei(e,t,n),n};let Q=class extends Ie{get algo(){var r;return(r=this.location)==null?void 0:r.params.algo}render(){return f` <div id="dsalgo-container">
      <dsalgo-sidebar-component class="child1"></dsalgo-sidebar-component>

      <page-viewer class="child2" page-id="${this.algo}"></page-viewer>
    </div>`}};Q.styles=b`
    #dsalgo-container {
      display: flex;
      /* height: 100%; */
    }
    .child1 {
      width: 25%;
      /* height: 100%; */
    }

    .child2 {
      width: 75%;
      /* height: 100%; */
    }
  `;Fe([v({attribute:!1})],Q.prototype,"location",2);Fe([v({reflect:!0})],Q.prototype,"algo",1);Q=Fe([_("dsalgo-page")],Q);var ri=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,ni=(r,e,t,i)=>{for(var n=i>1?void 0:i?ii(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ri(e,t,n),n};let He=class extends m{render(){return f`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <!-- <h1>Bigo page</h1>-->

        <div class="logo-details">
          <a href="/app"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name">Big O Notation</span>
        </div>
        <ul class="nav-links">
          <!-- BigO -->
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-package"></i>
                <span class="link_name">Big O(*)</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul class="sub-menu">
              <li>
                <a href="./constant" class="link_name">Constant</a>
              </li>
              <li>
                <a href="./linear">Linear</a>
              </li>
              <li><a href="./porabola">Parabola</a></li>
              <li><a href="./log">Log</a></li>
              <li><a href="./nlog">nlog</a></li>
              <li><a href="./exponential">Exeponential</a></li>
              <li><a href="./square_root">Square Root</a></li>
            </ul>
          </li>
        </ul>
      </div>
    `}};He.styles=b`
    /* side menu */

    .sidebar {
      /* position: fixed; */
      padding-top: 30px;
      top: 0;
      left: 0;

      width: 100%;

      background: var(--primary-color);
      /* z-index: 100; */
      transition: all 0.5s ease;
    }

    .sidebar .logo-details {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .sidebar .logo-details i {
      font-size: 30px;
      color: var(--background-color);
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
    }
    .sidebar .logo-details i:hover {
      color: var(--side-bar-hover-fond-color);
    }
    .sidebar .logo-details .logo-name {
      color: var(--background-color);
      font-weight: bold;
    }

    .sidebar .logo-details a {
      cursor: pointer;
    }
    .sidebar .nav-links {
      height: 100%;
      //padding: 30px 0 150px 0;
      overflow: auto;
    }

    .sidebar .nav-links li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
    }
    .sidebar .nav-links li:hover {
      // color: var(--side-bar-hover-fond-color);
    }
    .sidebar .nav-links li .icon-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sidebar .nav-links li i {
      height: 50px;
      min-width: 78px;
      text-align: center;
      line-height: 50px;
      color: var(--background-color);
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .sidebar .nav-links li .sub-menu,
    .sidebar .nav-links li .arrow {
      display: block !important;
    }
    .sidebar .nav-links li a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .sidebar .nav-links li a .link_name {
      font-size: 18px;
      font-weight: 400;
      color: var(--background-color);
      transition: all 0.4s ease;
    }

    .sidebar .nav-links li .sub-menu {
      padding: 6px 6px 14px 80px;
      margin-top: -10px;
      /* background: var(--side-bar-background); */
      display: none;
    }
    .sidebar .nav-links li.showMenu .sub-menu {
      display: block;
    }
    .sidebar .nav-links li .sub-menu a {
      color: var(--background-color);
      font-size: 15px;
      padding: 5px 0;
      white-space: nowrap;
      opacity: 0.6;
      transition: all 0.3s ease;
    }
    .sidebar .nav-links li .sub-menu a:hover {
      opacity: 1;
      color: var(--side-bar-hover-fond-color);
    }

    /* side page */
    .side-page {
      position: fixed;
      padding-left: 20px;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 100;
      transition: all 0.5s ease;
    }

    #content {
      margin-left: 260px;
      transition: margin 0.5s ease;
    }

    iframe[name="contentFrame"] {
      width: 100%;
      height: 100vh;
      border: none;
    }
  `;He=ni([_("bigo-sidebar-component")],He);var si=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,qe=(r,e,t,i)=>{for(var n=i>1?void 0:i?oi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&si(e,t,n),n};let X=class extends m{get bigo(){var r;return(r=this.location)==null?void 0:r.params.bigo}render(){return f` <div id="bigo-container">
      <bigo-sidebar-component class="child1"></bigo-sidebar-component>

      <page-viewer class="child2" page-id="${this.bigo}"></page-viewer>
    </div>`}};X.styles=b`
    #bigo-container {
      display: flex;
      /* margin-top: 5px; */
    }
    .child1 {
      width: 25%;
    }

    .child2 {
      width: 75%;
    }
  `;qe([v({attribute:!1})],X.prototype,"location",2);qe([v({reflect:!0})],X.prototype,"bigo",1);X=qe([_("bigo-page")],X);const ai=[{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/dsalgo-page",redirect:"/app/dsalgo-page/static_arrays"},{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/bigo-page/:bigo",component:"bigo-page"},{path:"/app/bigo-page",redirect:"/app/bigo-page/constant"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}];var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,Dt=(r,e,t,i)=>{for(var n=i>1?void 0:i?ci(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&li(e,t,n),n};let he=class extends m{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};he.styles=b`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
      cursor: pointer;
      color: var(--primary-color);
      margin-right: 1rem;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--primary-color);
      border-radius: 0.75em;
      background-color: var(--secondary-color);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color var(--background-color);
    }
    .slider:has(input:checked) {
      background-color: var(--secondary-color);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: white;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--transition-duration);
    }
    input:checked {
      left: 1em;
    }
  `;Dt([v({reflect:!0,type:Boolean})],he.prototype,"on",2);he=Dt([_("toggle-switch")],he);var hi=Object.defineProperty,di=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var n=i>1?void 0:i?di(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&hi(e,t,n),n};let de=class extends m{constructor(){super(...arguments),this.user=new x}render(){return f`
      <ul class="user-panel">
        <li>
          <slot name="avatar"></slot>
          <span id="user-name" class="user-name">${this.user.username}</span>
        </li>
        <slot></slot>
        <li><a class="user-link" href="/#">About</a></li>
        <li>
          <a class="user-link">Profile</a>
        </li>
        <li>
          <button class="button" slot="logout" @click=${this._signOut}>
            Log Out
          </button>
        </li>
      </ul>
    `}_signOut(){console.log("Signout"),this.user.signOut()}};de.styles=b`
    :host {
      display: block;
    }
    #user-name {
      color: var(--secondary-color);
    }
    .user-panel {
      padding: 0.5rem;
      margin: 0;
      background-color: var(--background-color);
      border: solid var(--primary-color);
      padding-right: 30px;
      border-radius: var(--border-radius);
    }

    .user-name {
      font-weight: bold;
      color: var(--primary-color);
    }

    .user-link {
      color: var(--primary-color);
      text-decoration: none;
      margin-bottom: 8px;

      display: block;
    }

    .sign-out {
      color: green;
      cursor: pointer;
      text-decoration: none;
      margin-top: 16px;
      display: block;
    }
    ul {
      list-style-type: none;
    }
    .button {
      background-color: var(--primary-color);
      border: none;
      color: var(--background-color);

      text-align: center;

      border-radius: var(--border-radius);
      display: inline-block;
    }
    button:hover {
      background-color: var(--secondary-color);
      transition: all var(--transition-duration) ease;
      cursor: pointer;
    }
  `;jt([Ne({context:Be,subscribe:!0}),v({attribute:!1})],de.prototype,"user",2);de=jt([_("user-panel")],de);var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Vt=(r,e,t,i)=>{for(var n=i>1?void 0:i?pi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ui(e,t,n),n};let ue=class extends m{constructor(){super(...arguments),this.open=!1}render(){return f`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown"><slot>Menu</slot></label>
      <slot name="menu">No menu </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ue.styles=b`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;

      margin-left: -3rem;
      background: var(--background-color);
      border-radius: 8px;
      width: max-content;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      //padding: 0.25em;

      list-style: none;
      white-space: nowrap;
    }
  `;Vt([v({reflect:!0,type:Boolean})],ue.prototype,"open",2);ue=Vt([_("drop-down")],ue);var gi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var n=i>1?void 0:i?fi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&gi(e,t,n),n};let pe=class extends m{constructor(){super(...arguments),this.open=!1}render(){return f`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <nav class="nav" id="myTopnav">
        <div class="nav-left">
          <h1 class="logo">
            <a href="/app">
              <svg class="icon">
                <use href="/icons/icons.svg#web-icon" />
              </svg>
            </a>
          </h1>
        </div>
        <div class="nav-mid">
          <ul>
            <li class="active"><a href="/app">Home</a></li>
            <li><a href="/app/dsalgo-page">Data Structure & Algorithm</a></li>
            <li><a href="/app/bigo-page">Big-O</a></li>
          </ul>
        </div>
        <div class="nav-right">
          <drop-down>
            <i class="bx bx-menu"></i>
            <user-panel slot="menu">
              <img
                slot="avatar"
                class="user-avatar"
                src="https://www.svgrepo.com/show/420351/avatar-boy-kid.svg"
                alt="User Avatar"
              />

              <li class="burger"><a href="/app">Home</a></li>
              <li class="burger">
                <a href="/app/dsalgo-page">Data Structure & Algorithm</a>
              </li>
              <li class="burger"><a href="/app/bigo-page">Big-O</a></li>

              <li>
                <toggle-switch @change=${this._toggleDarkMode}>
                  Dark Mode
                </toggle-switch>
              </li>
            </user-panel>
          </drop-down>
        </div>
      </nav>
    `}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_handleBurgerClick(){let r=document.getElementById("myTopnav");console.log("&&&&&",r)}};pe.styles=b`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :host {
      width: 100%;
      height: 85px;
      /* z-index: 99; */
    }
    .nav {
      position: fixed;
      width: 100%;
      background-color: var(--background-color);

      /* overflow: hidden; */
      /* margin: 0 auto; */
      display: flex;
      justify-content: space-between;
      z-index: 99;
      box-shadow: 0 0 8px 0 var(--secondary-color);
    }
    .nav-left {
      display: flex;
      /* padding-bottom: 10px; */
      /* background-color: yellow; */
    }
    .nav-mid {
      /* display: flex; */
      flex-grow: 1;
    }
    .nav-right {
      display: flex;
      align-items: center;
    }
    .logo a {
      color: var(--primary-color);
      text-decoration: none;
      font-size: xxx-large;
      margin-left: 20px;
    }

    svg.icon {
      padding-top: 10px;
      /* display: inline; */
      height: 1.6em;
      width: 1.6em;
      vertical-align: top;
      fill: currentColor;
    }
    .nav-mid ul {
      display: flex;
      list-style-type: none;
      padding-top: 8px;
    }
    .nav-mid li {
      margin: 20px;
    }

    .nav-mid li a {
      font-size: x-large;
    }
    li a {
      color: var(--primary-color);
      text-decoration: none;
    }

    li.active a {
      color: var(--secondary-color);
    }

    .nav a:hover {
      color: var(--secondary-color);
    }

    /* avatar */

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 12px;
      margin-right: 12px;
    }

    .user-info {
      /* display: flex; */
      /* align-items: center; */
      margin-bottom: 12px;
    }

    .nav-mid {
      display: none;
    }

    @media (min-width: 768px) {
      .nav-mid {
        display: block;
      }

      /* .nav-right {
        display: none;
      } */
      /* .nav {
        display: flex;
        justify-content: flex-end;
      } */
      .nav .burger {
        display: none;
      }
      /* .nav .burger {
        display: block;
      } */
    }
  `;Nt([v({reflect:!0,type:Boolean})],pe.prototype,"open",2);pe=Nt([_("nav-bar")],pe);const mi="*{box-sizing:border-box;margin:0;padding:0}ul,ol{list-style:none}a{text-decoration:none;color:inherit;cursor:pointer}img{max-width:100%}";var vi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,bi=(r,e,t,i)=>{for(var n=i>1?void 0:i?_i(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&vi(e,t,n),n};let Me=class extends m{render(){return f`
      <header>
        <nav-bar>Profile-a </nav-bar>
      </header>
    `}};Me.styles=[Pt(mi),b`
      header {
        /* background-color: var(--background-color); */

        font-family: "Bebas Neue", sans-serif;

        height: 60px;

        padding-top: 10px;

        z-index: 1;
        display: flex;

        align-items: center;
      }
    `];Me=bi([_("ct-header")],Me);function ge(r){return r=r||[],Array.isArray(r)?r:[r]}function $(r){return`[Vaadin.Router] ${r}`}function yi(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const fe="module",me="nomodule",Le=[fe,me];function lt(r){if(!r.match(/.+\.[m]?js$/))throw new Error($(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function It(r){if(!r||!w(r.path))throw new Error($('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!L(r.action)&&!Array.isArray(r.children)&&!L(r.children)&&!ve(e)&&!t.some(i=>w(r[i])))throw new Error($(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))lt(e);else if(Le.some(i=>i in e))Le.forEach(i=>i in e&&lt(e[i]));else throw new Error($('Expected route bundle to include either "'+me+'" or "'+fe+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn($(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function ct(r){ge(r).forEach(e=>It(e))}function ht(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===fe?t.setAttribute("type",fe):e===me&&t.setAttribute(me,""),t.async=!0),new Promise((i,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,i(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function wi(r){return w(r)?ht(r):Promise.race(Le.filter(e=>e in r).map(e=>ht(r[e],e)))}function q(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ve(r){return typeof r=="object"&&!!r}function L(r){return typeof r=="function"}function w(r){return typeof r=="string"}function Bt(r){const e=new Error($(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const U=new class{};function $i(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function dt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||$i(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;q("go",{pathname:n,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const xi={activate(){window.document.addEventListener("click",dt)},inactivate(){window.document.removeEventListener("click",dt)}},Ei=/Trident/.test(navigator.userAgent);Ei&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ut(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;q("go",{pathname:e,search:t,hash:i})}const Ai={activate(){window.addEventListener("popstate",ut)},inactivate(){window.removeEventListener("popstate",ut)}};var V=Jt,Pi=We,Oi=Ri,zi=Wt,Ci=Gt,Ft="/",qt="./",Si=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function We(r,e){for(var t=[],i=0,n=0,s="",o=e&&e.delimiter||Ft,c=e&&e.delimiters||qt,a=!1,l;(l=Si.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=r.slice(n,u),n=u+h.length,d){s+=d[1],a=!0;continue}var p="",C=r[n],tr=l[2],rr=l[3],ir=l[4],re=l[5];if(!a&&s.length){var xe=s.length-1;c.indexOf(s[xe])>-1&&(p=s[xe],s=s.slice(0,xe))}s&&(t.push(s),s="",a=!1);var nr=p!==""&&C!==void 0&&C!==p,sr=re==="+"||re==="*",or=re==="?"||re==="*",Ke=p||o,Ge=rr||ir;t.push({name:tr||i++,prefix:p,delimiter:Ke,optional:or,repeat:sr,partial:nr,pattern:Ge?ki(Ge):"[^"+E(Ke)+"]+?"})}return(s||n<r.length)&&t.push(s+r.substr(n)),t}function Ri(r,e){return Wt(We(r,e))}function Wt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){s+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function E(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ki(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Kt(r){return r&&r.sensitive?"":"i"}function Hi(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Mi(r,e,t){for(var i=[],n=0;n<r.length;n++)i.push(Jt(r[n],e,t).source);return new RegExp("(?:"+i.join("|")+")",Kt(t))}function Li(r,e,t){return Gt(We(r,t),e,t)}function Gt(r,e,t){t=t||{};for(var i=t.strict,n=t.start!==!1,s=t.end!==!1,o=E(t.delimiter||Ft),c=t.delimiters||qt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=n?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=E(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=E(u.prefix)+"("+p+")?":l+="(?:"+E(u.prefix)+"("+p+"))?":l+=E(u.prefix)+"("+p+")"}}return s?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Kt(t))}function Jt(r,e,t){return r instanceof RegExp?Hi(r,e):Array.isArray(r)?Mi(r,e,t):Li(r,e,t)}V.parse=Pi;V.compile=Oi;V.tokensToFunction=zi;V.tokensToRegExp=Ci;const{hasOwnProperty:Ti}=Object.prototype,Te=new Map;Te.set("|false",{keys:[],pattern:/(?:)/});function pt(r){try{return decodeURIComponent(r)}catch{return r}}function Ui(r,e,t,i,n){t=!!t;const s=`${r}|${t}`;let o=Te.get(s);if(!o){const l=[];o={keys:l,pattern:V(r,l,{end:t,strict:r===""})},Te.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!Ti.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(pt):[]:a[d]=u&&pt(u))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function Qt(r,e,t,i,n){let s,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=Ui(a,e,!h,i,n),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=r;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Qt(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Di(r){if(L(r.route.action))return r.route.action(r)}function ji(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Vi(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ni(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const n={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class Y{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Di,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ct(e);const t=[...ge(e)];this.root.__children=t}addRoutes(e){return ct(e),this.root.__children.push(...ge(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),i=Qt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||i.next(u),o=null,!l&&(s.done||!ji(h,s.value.route))?(o=s,Promise.resolve(U)):s.done?Promise.reject(Bt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Ni(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==U?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Vi(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}Y.pathToRegexp=V;const{pathToRegexp:gt}=Y,ft=new Map;function Xt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,Xt(r,s,s.__children||s.children)}}function mt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function vt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ii(r,e={}){if(!(r instanceof Y))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,n)=>{let s=mt(t,i);if(!s&&(t.clear(),Xt(t,r.root,r.root.__children),s=mt(t,i),!s))throw new Error(`Route "${i}" not found`);let o=ft.get(s.fullPath);if(!o){let a=vt(s),l=s.parent;for(;l;){const p=vt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=gt.parse(a),d=gt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},ft.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=n[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let _t=[];function Bi(r){_t.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),_t=r}const Fi=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},qi=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function bt(r,e){return r.classList.add(e),new Promise(t=>{if(Fi(r)){const i=r.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${n}`),qi(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Wi=256;function ze(r){return r!=null}function Ki(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:i=[],params:n={},redirectFrom:s,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>oe(O.pathToRegexp.compile(Yt(a))(Object.assign({},n,l)),o)}}function yt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Gi(r,e){e.location=y(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function se(r,e,t){if(L(r))return r.apply(t,e)}function wt(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return se(t[r],e,t)}}function Ji(r,e){if(!Array.isArray(r)&&!ve(r))throw new Error($(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ge(r);for(let i=0;i<t.length;i++)It(t[i]),e.__children.push(t[i])}function ie(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function oe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Yt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends Y{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&Y.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();L(t.children)&&(i=i.then(()=>t.children(Ki(e))).then(s=>{!ze(s)&&!L(t.children)&&(s=t.children),Ji(s,t)}));const n={redirect:s=>yt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return se(t.action,[e,n],t)}).then(s=>{if(ze(s)&&(s instanceof HTMLElement||s.redirect||s===U))return s;if(w(t.redirect))return n.redirect(t.redirect);if(t.bundle)return wi(t.bundle).then(()=>{},()=>{throw new Error($(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(ze(s))return s;if(w(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(s),t&&this.__updateBrowserHistory(s,i===1),q("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ie(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),q("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const s=i!==t?i:e,c=oe(Yt(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===U?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(i).then(l=>{if(l===null||l===U)throw Bt(s);return l&&l!==U&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Gi(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error($(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yi(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>yt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),i[a].element.location=y(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=y(e,i[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=y(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const s=y(t);return e.then(o=>{if(this.__isLatestRender(t))return wt("onBeforeLeave",[s,i,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,n){const s=y(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return wt("onBeforeEnter",[s,i,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Wi)throw new Error($(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError($(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===i)e.chain[n].element=s,i=s;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===i&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&ie(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ie(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const s=y(e);se(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ie(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=y(e,e.chain[t].route);se(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&i&&o){const c=ve(o)&&o.leave||"leaving",a=ve(o)&&o.enter||"entering";n.push(bt(t,c)),n.push(bt(i,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){Bi(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ii(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=w(e)?this.__createUrl(e,"http://a"):e;return q("go",{pathname:t,search:i,hash:n})}}const Qi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xi(){function r(){return!0}return Zt(r)}function Yi(){try{return Zi()?!0:en()?ae?!tn():!Xi():!1}catch{return!1}}function Zi(){return localStorage.getItem("vaadin.developmentmode.force")}function en(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function tn(){return!!(ae&&Object.keys(ae).map(e=>ae[e]).filter(e=>e.productionMode).length>0)}function Zt(r,e){if(typeof r!="function")return;const t=Qi.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const $t=function(r,e){if(window.Vaadin.developmentMode)return Zt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Yi());function rn(){}const nn=function(){if(typeof $t=="function")return $t(rn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});nn();O.NavigationTrigger={POPSTATE:Ai,CLICK:xi};var sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,er=(r,e,t,i)=>{for(var n=i>1?void 0:i?on(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&sn(e,t,n),n};let Ue=class extends m{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};er([v({attribute:!1})],Ue.prototype,"routes",2);Ue=er([_("vaadin-router")],Ue);const N=jr(),an=N.update;N.addMessage("UserLoggedIn",(r,e)=>{const{user:t}=r;return ee({user:t})(e)});N.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Mt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?ee({profile:t}):we)});N.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new ye(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?ee({profile:i}):we)});N.addMessage("PageViewerSelected",r=>{const{pageid:e}=r;return new Mt().get(`/pages/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("PageViewer:",t),t}).then(t=>t?ee({page:t}):we)});N.addMessage("PageViewerSaved",r=>{const{pageid:e,content:t}=r;return new ye({content:t}).put(`/pages/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{if(i)return console.log("PageViewer:",i),i}).then(i=>i?ee({page:i}):we)});var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,hn=(r,e,t,i)=>{for(var n=i>1?void 0:i?cn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ln(e,t,n),n};let xt=class extends Ut{constructor(){super(an),this.addEventListener("mvu:message",r=>{const e=r.detail;console.log("Got message:",e)})}render(){return f`
      <auth-required>
        <ct-header> </ct-header>
        <vaadin-router .routes=${ai}> </vaadin-router>
      </auth-required>
    `}};xt=hn([_("ct-app")],xt);
