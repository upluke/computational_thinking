(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=globalThis,De=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),Qe=new WeakMap;let Pt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(De&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Qe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Qe.set(t,e))}return e}toString(){return this.cssText}};const Ot=i=>new Pt(typeof i=="string"?i:i+"",void 0,je),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new Pt(t,i,je)},li=(i,e)=>{if(De)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=ae.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}},Xe=De?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ot(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ci,defineProperty:hi,getOwnPropertyDescriptor:di,getOwnPropertyNames:ui,getOwnPropertySymbols:pi,getPrototypeOf:gi}=Object,z=globalThis,Ye=z.trustedTypes,fi=Ye?Ye.emptyScript:"",Ae=z.reactiveElementPolyfillSupport,F=(i,e)=>i,de={toAttribute(i,e){switch(e){case Boolean:i=i?fi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ve=(i,e)=>!ci(i,e),Ze={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Ve};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);class U extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&hi(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:s}=di(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ze}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=gi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,r=[...ui(t),...pi(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Xe(n))}else e!==void 0&&t.push(Xe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return li(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var s;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:de).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:de;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Ve)(this[e],t))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$E_)==null||r.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$Ej()}catch(n){throw e=!1,this._$Ej(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[F("elementProperties")]=new Map,U[F("finalized")]=new Map,Ae==null||Ae({ReactiveElement:U}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,ue=q.trustedTypes,et=ue?ue.createPolicy("lit-html",{createHTML:i=>i}):void 0,zt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+P,mi=`<${Ct}>`,R=document,K=()=>R.createComment(""),G=i=>i===null||typeof i!="object"&&typeof i!="function",St=Array.isArray,vi=i=>St(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,it=/>/g,S=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,nt=/"/g,Mt=/^(?:script|style|textarea|title)$/i,_i=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=_i(1),k=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),st=new WeakMap,M=R.createTreeWalker(R,129);function Rt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}const bi=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",o=B;for(let c=0;c<t;c++){const a=i[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===B?h[1]==="!--"?o=tt:h[1]!==void 0?o=it:h[2]!==void 0?(Mt.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=S):h[3]!==void 0&&(o=S):o===S?h[0]===">"?(o=n??B,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?S:h[3]==='"'?nt:rt):o===nt||o===rt?o=S:o===tt||o===it?o=B:(o=S,n=void 0);const p=o===S&&i[c+1].startsWith("/>")?" ":"";s+=o===B?a+mi:d>=0?(r.push(l),a.slice(0,d)+zt+a.slice(d)+P+p):a+P+(d===-2?c:p)}return[Rt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class J{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=bi(e,t);if(this.el=J.createElement(l,r),M.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=M.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(zt)){const u=h[o++],p=n.getAttribute(d).split(P),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:C[2],strings:p,ctor:C[1]==="."?wi:C[1]==="?"?$i:C[1]==="@"?xi:we}),n.removeAttribute(d)}else d.startsWith(P)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(Mt.test(n.tagName)){const d=n.textContent.split(P),u=d.length-1;if(u>0){n.textContent=ue?ue.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],K()),M.nextNode(),a.push({type:2,index:++s});n.append(d[u],K())}}}else if(n.nodeType===8)if(n.data===Ct)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:s}),d+=P.length-1}s++}}static createElement(e,t){const r=R.createElement("template");return r.innerHTML=e,r}}function j(i,e,t=i,r){var o,c;if(e===k)return e;let n=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const s=G(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(i),n._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=j(i,n._$AS(i,e.values),n,r)),e}class yi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??R).importNode(t,!0);M.currentNode=n;let s=M.nextNode(),o=0,c=0,a=r[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new te(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new Ei(s,this,e)),this._$AV.push(l),a=r[++c]}o!==(a==null?void 0:a.index)&&(s=M.nextNode(),o++)}return M.currentNode=R,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),G(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):vi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&G(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=J.createElement(Rt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new yi(n,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=st.get(e.strings);return t===void 0&&st.set(e.strings,t=new J(e)),t}T(e){St(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new te(this.k(K()),this.k(K()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class we{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,n){const s=this.strings;let o=!1;if(s===void 0)e=j(this,e,t,0),o=!G(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=j(this,c[r+a],t,a),l===k&&(l=this._$AH[a]),o||(o=!G(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wi extends we{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class $i extends we{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class xi extends we{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){if((e=j(this,e,t,0)??g)===k)return;const r=this._$AH,n=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==g&&(r===g||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ei{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const Oe=q.litHtmlPolyfillSupport;Oe==null||Oe(J,te),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.1");const Ai=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new te(e.insertBefore(K(),s),s,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ai(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return k}};var At;m._$litElement$=!0,m.finalized=!0,(At=globalThis.litElementHydrateSupport)==null||At.call(globalThis,{LitElement:m});const ze=globalThis.litElementPolyfillSupport;ze==null||ze({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Ve},Oi=(i=Pi,e,t)=>{const{kind:r,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.C(o,void 0,i),c}}}if(r==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function v(i){return(e,t)=>typeof t=="object"?Oi(i,e,t):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(i){return v({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kt=class extends Event{constructor(e,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class{constructor(e,t,r,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=r,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new kt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ci=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},at=class extends zi{constructor(e,t,r){var n,s;super(t.context!==void 0?t.initialValue:r),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new kt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ci(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht({context:i}){return(e,t)=>{const r=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){r.set(this,new at(this,{context:i}))}),{get(){return e.get.call(this)},set(n){var s;return(s=r.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=r.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(o=>{r.set(o,new at(o,{context:i}))});const n=Object.getOwnPropertyDescriptor(e,t);let s;if(n===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){r.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=n.set;s={...n,set:function(c){r.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ie({context:i,subscribe:e}){return(t,r)=>{typeof r=="object"?r.addInitializer(function(){new ot(this,{context:i,callback:n=>{this[r.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new ot(n,{context:i,callback:s=>{n[r]=s},subscribe:e})})}}let Si=class extends m{constructor(e,t,r){super(),this.updateFn=e,this.getModel=t,this.setModel=r,this.addEventListener("mvu:message",n=>{const s=n.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){const t=this.updateFn(this.getModel(),e),r=t;typeof(r==null?void 0:r.then)=="function"?r.then(n=>{const s=n(this.getModel());console.log("Updating model in Promise:",s),this.setModel(s)}):(console.log("Updating model:",t),this.setModel(t))}},Mi=class extends m{dispatchMessage(e,t=this){const r=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(r)}};class Ri{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:r}=t,n=this._handlers.get(r);return n?n(t,e):e}}function ki(i){return e=>Object.assign({},e,i)}function Hi(i){return i}const Li=window.location.origin,Ti="/api",Se="JWT_AUTH_TOKEN",A=class A{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new A;return console.log("Deauthenticating",e,A._theUser),e===A._theUser&&(localStorage.removeItem(Se),A._theUser=t),t}};A._theUser=new A;let x=A;class Q extends x{constructor(e,t){super();const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(s);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const r=new Q(e,t);return x._theUser=r,localStorage.setItem(Se,e),r}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Se);return t?Q.authenticate(t,e):x._theUser}}class $e{constructor(e){this._base=Ti,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=x._theUser.authenticated,r={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${x._theUser.token}`};return e?{...r,...s}:s}else return e?{...r}:void 0}_url(e){return`${Li}${this._base}${e}`}}class lt extends $e{constructor(e){super(Object.fromEntries(e))}}class Lt extends $e{constructor(){super(void 0)}}var Ui=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Tt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Di(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Ui(e,t,n),n};const Ut="CTModel",ji={user:new x};class Dt extends Si{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=ji}}Tt([Ht({context:Ut}),V()],Dt.prototype,"model",2);class Ne extends Mi{getFromModel(e){if(this._model)return this._model[e]}}Tt([Ie({context:Ut,subscribe:!0}),v({attribute:!1})],Ne.prototype,"_model",2);const Vi=()=>new Ri,ie=ki,xe=Hi;var Ii=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Bi=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ni(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Ii(e,t,n),n};let Me=class extends m{render(){return f`
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
    `}};Me.styles=[b`
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
    `];Me=Bi([_("home-page")],Me);var Fi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Be=(i,e,t,r)=>{for(var n=r>1?void 0:r?qi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Fi(e,t,n),n};let X=class extends m{constructor(){super(...arguments),this.isMenuOpen=!1,this.subMenuOpen=""}toggleMenu(){console.log("click!!!!"),this.isMenuOpen=!this.isMenuOpen}toggleSubMenu(i){this.subMenuOpen!==i?this.subMenuOpen=i:this.subMenuOpen=""}render(){return f`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <!-- <h1>DS&ALGO page</h1>-->

        <div class="logo-details">
          <a href="/app"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name" @click="${this.toggleMenu}"
            >Data Structure & Algorithm</span
          >
        </div>
        <ul class="nav-links ${this.isMenuOpen?"showMenu":"hideMenu"}">
          <!-- Arrays  -->
          <li>
            <div class="icon-link">
              <a href="#" @click="${()=>this.toggleSubMenu("array")}">
                <i class="bx bx-grid"></i>
                <span class="link_name">Arrays</span>
              </a>
              <!-- <i class="bx bxs-chevron-down arrow"></i> -->
            </div>
            <ul
              class="sub-menu ${this.subMenuOpen=="array"?"showMenu":""}"
            >
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
    `}};X.styles=b`
    /* side menu */
    * {
      box-sizing: border-box;
    }
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
      display: block;
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

      /* max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease; */
    }
    .sidebar .nav-links li.showMenu .sub-menu {
      display: block;
      padding: 6px 6px 14px 80px;
      margin-top: -10px;
      /* max-height: 200px; */
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
    @media (max-width: 768px) {
      .sidebar .logo-details .logo-name {
        cursor: pointer;
      }
      .sidebar .nav-links.hideMenu {
        display: none;
      }
      .sidebar .nav-links li .sub-menu {
        display: none;
      }
      .sidebar .nav-links li .sub-menu.showMenu {
        display: block;
      }
    }
  `;Be([V()],X.prototype,"isMenuOpen",2);Be([V()],X.prototype,"subMenuOpen",2);X=Be([_("dsalgo-sidebar-component")],X);var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,re=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ki(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Wi(e,t,n),n};let Fe="auth",H=class extends m{constructor(){super(),this.secure=!1,this.loginStatus=0,this.registerStatus=0,this.user=Q.authenticateFromLocalStorage(()=>this._signOut()),this.addEventListener("secure",()=>{this.secure=!0,console.log("secure")})}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const i=f`
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
        <button @click=${this._closeDialog}>Close</button>
      </dialog>
    `;return f`
      ${this.isAuthenticated()||!this.secure?"":i}
      <slot></slot>
    `}_closeDialog(){console.log("close dialog"),this.secure=!1}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/login").then(n=>{if(n.status===200)return n.json();this.loginStatus=n.status}).then(n=>{if(n){console.log("Authentication:",n.token);const s=Q.authenticate(n.token,()=>this._signOut());this.user=s,this._toggleDialog(!1),this._dispatchUserLoggedIn(s),this.requestUpdate()}})}_dispatchUserLoggedIn(i){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:i}});this.dispatchEvent(e)}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/signup").then(n=>{if(n.status===200)return n.json();this.registerStatus=n.status}).then(n=>{console.log("Registration:",n)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=x.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};H.styles=b`
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
  `;re([v()],H.prototype,"secure",2);re([V()],H.prototype,"loginStatus",2);re([V()],H.prototype,"registerStatus",2);re([Ht({context:Fe}),V()],H.prototype,"user",2);H=re([_("auth-required")],H);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ji=i=>(...e)=>({_$litDirective$:i,values:e});class Qi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Re extends Qi{constructor(e){if(super(e),this.et=g,e.type!==Gi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.vt=void 0,this.et=e;if(e===k)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Re.directiveName="unsafeHTML",Re.resultType=1;const Xi=Ji(Re);var Yi=Object.defineProperty,Zi=Object.getOwnPropertyDescriptor,ne=(i,e,t,r)=>{for(var n=r>1?void 0:r?Zi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Yi(e,t,n),n};let L=class extends Ne{constructor(){super(...arguments),this.pageId="",this.isEditing=!1,this.user=new x}get page(){return this.getFromModel("page")}firstUpdated(){this.dispatchMessage({type:"PageViewerSelected",pageid:this.pageId})}render(){var i;return f`
      <div id="page-viewer-container">
        ${this.user.username==="admin"?f`
              <button @click=${this._handleEditClick}>
                ${this.isEditing?"Cancel":"Edit"}
              </button>
            `:""}
        ${Xi((i=this.page)==null?void 0:i.content)}
        ${this.user.username==="admin"&&this.isEditing?this._renderEditForm():""}
      </div>
    `}_handleEditClick(){this.isEditing=!this.isEditing}_renderEditForm(){var i;return f`
      <form @submit=${this._handleEditSubmit}>
        <textarea class="textarea" name="content">
${(i=this.page)==null?void 0:i.content}</textarea
        >
        <button type="submit">Save</button>
      </form>
    `}_handleEditSubmit(i){i.preventDefault();const t=new FormData(i.target).get("content");this.dispatchMessage({type:"PageViewerSaved",content:(t==null?void 0:t.toString())||"",pageid:this.pageId}),this.isEditing=!1}};L.styles=b`
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
  `;ne([v({attribute:"page-id"})],L.prototype,"pageId",2);ne([v({attribute:"is-editing"})],L.prototype,"isEditing",2);ne([v()],L.prototype,"page",1);ne([Ie({context:Fe,subscribe:!0}),v({attribute:!1})],L.prototype,"user",2);L=ne([_("page-viewer")],L);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,qe=(i,e,t,r)=>{for(var n=r>1?void 0:r?tr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&er(e,t,n),n};let Y=class extends Ne{get algo(){var i;return(i=this.location)==null?void 0:i.params.algo}render(){return f` <div id="dsalgo-container">
      <dsalgo-sidebar-component class="child1"></dsalgo-sidebar-component>

      <page-viewer class="child2" page-id="${this.algo}"></page-viewer>
    </div>`}};Y.styles=b`
    #dsalgo-container {
      display: flex;
      /* height: 100%; */
    }
    .child1 {
      flex-basis: 25%;
      /* height: 100%; */
    }

    .child2 {
      flex-basis: 75%;
      /* height: 100%; */
    }

    @media (max-width: 768px) {
      #dsalgo-container {
        display: block;
      }
    }
  `;qe([v({attribute:!1})],Y.prototype,"location",2);qe([v({reflect:!0})],Y.prototype,"algo",1);Y=qe([_("dsalgo-page")],Y);var ir=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,nr=(i,e,t,r)=>{for(var n=r>1?void 0:r?rr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ir(e,t,n),n};let ke=class extends m{render(){return f`
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
    `}};ke.styles=b`
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
  `;ke=nr([_("bigo-sidebar-component")],ke);var sr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,We=(i,e,t,r)=>{for(var n=r>1?void 0:r?or(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&sr(e,t,n),n};let Z=class extends m{get bigo(){var i;return(i=this.location)==null?void 0:i.params.bigo}render(){return f` <div id="bigo-container">
      <bigo-sidebar-component class="child1"></bigo-sidebar-component>

      <page-viewer class="child2" page-id="${this.bigo}"></page-viewer>
    </div>`}};Z.styles=b`
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
  `;We([v({attribute:!1})],Z.prototype,"location",2);We([v({reflect:!0})],Z.prototype,"bigo",1);Z=We([_("bigo-page")],Z);const ar=[{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/dsalgo-page",redirect:"/app/dsalgo-page/static_arrays"},{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/bigo-page/:bigo",component:"bigo-page"},{path:"/app/bigo-page",redirect:"/app/bigo-page/constant"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}];var lr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,jt=(i,e,t,r)=>{for(var n=r>1?void 0:r?cr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&lr(e,t,n),n};let pe=class extends m{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(i){const e=i.target,t=new Event(i.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};pe.styles=b`
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
  `;jt([v({reflect:!0,type:Boolean})],pe.prototype,"on",2);pe=jt([_("toggle-switch")],pe);var hr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,Vt=(i,e,t,r)=>{for(var n=r>1?void 0:r?dr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&hr(e,t,n),n};let ge=class extends m{constructor(){super(...arguments),this.user=new x}render(){return f`
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
          <button class="button" slot="login" @click=${this._signIn}>
            Log In
          </button>
        </li>
        <li>
          <button class="button" slot="logout" @click=${this._signOut}>
            Log Out
          </button>
        </li>
      </ul>
    `}_signOut(){console.log("Signout"),this.user.signOut()}_signIn(){console.log("SignIn",this);const i=new CustomEvent("secure",{bubbles:!0,composed:!0,detail:{}});this.dispatchEvent(i)}};ge.styles=b`
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
  `;Vt([Ie({context:Fe,subscribe:!0}),v({attribute:!1})],ge.prototype,"user",2);ge=Vt([_("user-panel")],ge);var ur=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,It=(i,e,t,r)=>{for(var n=r>1?void 0:r?pr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ur(e,t,n),n};let fe=class extends m{constructor(){super(...arguments),this.open=!1}render(){return f`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown"><slot>Menu</slot></label>
      <slot name="menu">No menu </slot>
    `}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};fe.styles=b`
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
  `;It([v({reflect:!0,type:Boolean})],fe.prototype,"open",2);fe=It([_("drop-down")],fe);var gr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Nt=(i,e,t,r)=>{for(var n=r>1?void 0:r?fr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&gr(e,t,n),n};let me=class extends m{constructor(){super(...arguments),this.open=!1}render(){return f`
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
    `}_toggleDarkMode(i){const e=i.target,t=document.body;console.log("Toggling Dark mode",i),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_handleBurgerClick(){let i=document.getElementById("myTopnav");console.log("&&&&&",i)}};me.styles=b`
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
  `;Nt([v({reflect:!0,type:Boolean})],me.prototype,"open",2);me=Nt([_("nav-bar")],me);const mr="*{box-sizing:border-box;margin:0;padding:0}ul,ol{list-style:none}a{text-decoration:none;color:inherit;cursor:pointer}img{max-width:100%}";var vr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,br=(i,e,t,r)=>{for(var n=r>1?void 0:r?_r(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&vr(e,t,n),n};let He=class extends m{render(){return f`
      <header>
        <nav-bar>Profile-a </nav-bar>
      </header>
    `}};He.styles=[Ot(mr),b`
      header {
        /* background-color: var(--background-color); */

        font-family: "Bebas Neue", sans-serif;

        height: 60px;

        padding-top: 10px;

        z-index: 1;
        display: flex;

        align-items: center;
      }
    `];He=br([_("ct-header")],He);function ve(i){return i=i||[],Array.isArray(i)?i:[i]}function $(i){return`[Vaadin.Router] ${i}`}function yr(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const _e="module",be="nomodule",Le=[_e,be];function ct(i){if(!i.match(/.+\.[m]?js$/))throw new Error($(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Bt(i){if(!i||!w(i.path))throw new Error($('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!T(i.action)&&!Array.isArray(i.children)&&!T(i.children)&&!ye(e)&&!t.some(r=>w(i[r])))throw new Error($(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))ct(e);else if(Le.some(r=>r in e))Le.forEach(r=>r in e&&ct(e[r]));else throw new Error($('Expected route bundle to include either "'+be+'" or "'+_e+'" keys, or both'));i.redirect&&["bundle","component"].forEach(r=>{r in i&&console.warn($(`Route config "${i.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function ht(i){ve(i).forEach(e=>Bt(e))}function dt(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===_e?t.setAttribute("type",_e):e===be&&t.setAttribute(be,""),t.async=!0),new Promise((r,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,r(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function wr(i){return w(i)?dt(i):Promise.race(Le.filter(e=>e in i).map(e=>dt(i[e],e)))}function W(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function ye(i){return typeof i=="object"&&!!i}function T(i){return typeof i=="function"}function w(i){return typeof i=="string"}function Ft(i){const e=new Error($(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const D=new class{};function $r(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function ut(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||$r(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;W("go",{pathname:n,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const xr={activate(){window.document.addEventListener("click",ut)},inactivate(){window.document.removeEventListener("click",ut)}},Er=/Trident/.test(navigator.userAgent);Er&&!T(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function pt(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;W("go",{pathname:e,search:t,hash:r})}const Ar={activate(){window.addEventListener("popstate",pt)},inactivate(){window.removeEventListener("popstate",pt)}};var I=Qt,Pr=Ke,Or=Mr,zr=Kt,Cr=Jt,qt="/",Wt="./",Sr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ke(i,e){for(var t=[],r=0,n=0,s="",o=e&&e.delimiter||qt,c=e&&e.delimiters||Wt,a=!1,l;(l=Sr.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=i.slice(n,u),n=u+h.length,d){s+=d[1],a=!0;continue}var p="",C=i[n],ii=l[2],ri=l[3],ni=l[4],se=l[5];if(!a&&s.length){var Ee=s.length-1;c.indexOf(s[Ee])>-1&&(p=s[Ee],s=s.slice(0,Ee))}s&&(t.push(s),s="",a=!1);var si=p!==""&&C!==void 0&&C!==p,oi=se==="+"||se==="*",ai=se==="?"||se==="*",Ge=p||o,Je=ri||ni;t.push({name:ii||r++,prefix:p,delimiter:Ge,optional:ai,repeat:oi,partial:si,pattern:Je?Rr(Je):"[^"+E(Ge)+"]+?"})}return(s||n<i.length)&&t.push(s+i.substr(n)),t}function Mr(i,e){return Kt(Ke(i,e))}function Kt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(r,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){s+=a;continue}var l=r?r[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function E(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Rr(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Gt(i){return i&&i.sensitive?"":"i"}function kr(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function Hr(i,e,t){for(var r=[],n=0;n<i.length;n++)r.push(Qt(i[n],e,t).source);return new RegExp("(?:"+r.join("|")+")",Gt(t))}function Lr(i,e,t){return Jt(Ke(i,t),e,t)}function Jt(i,e,t){t=t||{};for(var r=t.strict,n=t.start!==!1,s=t.end!==!1,o=E(t.delimiter||qt),c=t.delimiters||Wt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=n?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=E(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=E(u.prefix)+"("+p+")?":l+="(?:"+E(u.prefix)+"("+p+"))?":l+=E(u.prefix)+"("+p+")"}}return s?(r||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Gt(t))}function Qt(i,e,t){return i instanceof RegExp?kr(i,e):Array.isArray(i)?Hr(i,e,t):Lr(i,e,t)}I.parse=Pr;I.compile=Or;I.tokensToFunction=zr;I.tokensToRegExp=Cr;const{hasOwnProperty:Tr}=Object.prototype,Te=new Map;Te.set("|false",{keys:[],pattern:/(?:)/});function gt(i){try{return decodeURIComponent(i)}catch{return i}}function Ur(i,e,t,r,n){t=!!t;const s=`${i}|${t}`;let o=Te.get(s);if(!o){const l=[];o={keys:l,pattern:I(i,l,{end:t,strict:i===""})},Te.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!Tr.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(gt):[]:a[d]=u&&gt(u))}return{path:c[0],keys:(r||[]).concat(o.keys),params:a}}function Xt(i,e,t,r,n){let s,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!s&&(s=Ur(a,e,!h,r,n),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Xt(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Dr(i){if(T(i.route.action))return i.route.action(i)}function jr(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Vr(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ir(i,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const n={path:r,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(n)}}class ee{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Dr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ht(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return ht(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),r=Xt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||r.next(u),o=null,!l&&(s.done||!jr(h,s.value.route))?(o=s,Promise.resolve(D)):s.done?Promise.reject(Ft(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Ir(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==D?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Vr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}ee.pathToRegexp=I;const{pathToRegexp:ft}=ee,mt=new Map;function Yt(i,e,t){const r=e.name||e.component;if(r&&(i.has(r)?i.get(r).push(e):i.set(r,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,Yt(i,s,s.__children||s.children)}}function vt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function _t(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Nr(i,e={}){if(!(i instanceof ee))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,n)=>{let s=vt(t,r);if(!s&&(t.clear(),Yt(t,i.root,i.root.__children),s=vt(t,r),!s))throw new Error(`Route "${r}" not found`);let o=mt.get(s.fullPath);if(!o){let a=_t(s),l=s.parent;for(;l;){const p=_t(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=ft.parse(a),d=ft.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},mt.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=n[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let bt=[];function Br(i){bt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),bt=i}const Fr=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},qr=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function yt(i,e){return i.classList.add(e),new Promise(t=>{if(Fr(i)){const r=i.getBoundingClientRect(),n=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${n}`),qr(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Wr=256;function Ce(i){return i!=null}function Kr(i){const e=Object.assign({},i);return delete e.next,e}function y({pathname:i="",search:e="",hash:t="",chain:r=[],params:n={},redirectFrom:s,resolver:o},c){const a=r.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>ce(O.pathToRegexp.compile(Zt(a))(Object.assign({},n,l)),o)}}function wt(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function Gr(i,e){e.location=y(i);const t=i.chain.map(r=>r.route).indexOf(i.route);return i.chain[t].element=e,e}function le(i,e,t){if(T(i))return i.apply(t,e)}function $t(i,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return le(t[i],e,t)}}function Jr(i,e){if(!Array.isArray(i)&&!ye(i))throw new Error($(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=ve(i);for(let r=0;r<t.length;r++)Bt(t[r]),e.__children.push(t[r])}function oe(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function ce(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Zt(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends ee{constructor(e,t){const r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&ee.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();T(t.children)&&(r=r.then(()=>t.children(Kr(e))).then(s=>{!Ce(s)&&!T(t.children)&&(s=t.children),Jr(s,t)}));const n={redirect:s=>wt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return le(t.action,[e,n],t)}).then(s=>{if(Ce(s)&&(s instanceof HTMLElement||s.redirect||s===D))return s;if(w(t.redirect))return n.redirect(t.redirect);if(t.bundle)return wr(t.bundle).then(()=>{},()=>{throw new Error($(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Ce(s))return s;if(w(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(s),t&&this.__updateBrowserHistory(s,r===1),W("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),oe(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),W("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const s=r!==t?r:e,c=ce(Zt(r.chain),r.resolver)===r.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===D?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(r).then(l=>{if(l===null||l===D)throw Ft(s);return l&&l!==D&&l!==r?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Gr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error($(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>wt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,n.length)&&!(r[a].route!==n[a].route||r[a].path!==n[a].path&&r[a].element!==n[a].element||!this.__isReusableElement(r[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),r[a].element.location=y(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=y(e,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=y(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,n){const s=y(t);return e.then(o=>{if(this.__isLatestRender(t))return $t("onBeforeLeave",[s,r,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,r,n){const s=y(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return $t("onBeforeEnter",[s,r,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>Wr)throw new Error($(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError($(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===r)e.chain[n].element=s,r=s;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=r;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===r&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&oe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(oe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const n=t.chain[r].element;if(n)try{const s=y(e);le(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&oe(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},n=y(e,e.chain[t].route);le(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&r&&o){const c=ye(o)&&o.leave||"leaving",a=ye(o)&&o.enter||"entering";n.push(yt(t,c)),n.push(yt(r,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:n}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){Br(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Nr(this)),ce(this.__urlForName(e,t),this)}urlForPath(e,t){return ce(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:n}=w(e)?this.__createUrl(e,"http://a"):e;return W("go",{pathname:t,search:r,hash:n})}}const Qr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,he=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xr(){function i(){return!0}return ei(i)}function Yr(){try{return Zr()?!0:en()?he?!tn():!Xr():!1}catch{return!1}}function Zr(){return localStorage.getItem("vaadin.developmentmode.force")}function en(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function tn(){return!!(he&&Object.keys(he).map(e=>he[e]).filter(e=>e.productionMode).length>0)}function ei(i,e){if(typeof i!="function")return;const t=Qr.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const xt=function(i,e){if(window.Vaadin.developmentMode)return ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Yr());function rn(){}const nn=function(){if(typeof xt=="function")return xt(rn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});nn();O.NavigationTrigger={POPSTATE:Ar,CLICK:xr};var sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,ti=(i,e,t,r)=>{for(var n=r>1?void 0:r?on(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&sn(e,t,n),n};let Ue=class extends m{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};ti([v({attribute:!1})],Ue.prototype,"routes",2);Ue=ti([_("vaadin-router")],Ue);const N=Vi(),an=N.update;N.addMessage("UserLoggedIn",(i,e)=>{const{user:t}=i;return ie({user:t})(e)});N.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Lt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?ie({profile:t}):xe)});N.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new $e(t).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{r&&console.log("Profile:",r)}).then(r=>r?ie({profile:r}):xe)});N.addMessage("PageViewerSelected",i=>{const{pageid:e}=i;return new Lt().get(`/pages/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("PageViewer:",t),t}).then(t=>t?ie({page:t}):xe)});N.addMessage("PageViewerSaved",i=>{const{pageid:e,content:t}=i;return new $e({content:t}).put(`/pages/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{if(r)return console.log("PageViewer:",r),r}).then(r=>r?ie({page:r}):xe)});var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,hn=(i,e,t,r)=>{for(var n=r>1?void 0:r?cn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&ln(e,t,n),n};let Et=class extends Dt{constructor(){super(an),this.addEventListener("mvu:message",i=>{const e=i.detail;console.log("Got message:",e)})}render(){return f`
      <auth-required>
        <ct-header> </ct-header>
        <vaadin-router .routes=${ar}> </vaadin-router>
      </auth-required>
    `}};Et=hn([_("ct-app")],Et);
