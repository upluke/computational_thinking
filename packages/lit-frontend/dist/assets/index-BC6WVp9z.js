(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,Ne=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),et=new WeakMap;let kt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ne&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&et.set(t,e))}return e}toString(){return this.cssText}};const Ct=i=>new kt(typeof i=="string"?i:i+"",void 0,Be),_=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new kt(t,i,Be)},ui=(i,e)=>{if(Ne)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=ce.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},tt=Ne?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ct(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pi,defineProperty:gi,getOwnPropertyDescriptor:fi,getOwnPropertyNames:vi,getOwnPropertySymbols:mi,getPrototypeOf:bi}=Object,z=globalThis,it=z.trustedTypes,_i=it?it.emptyScript:"",Se=z.reactiveElementPolyfillSupport,q=(i,e)=>i,pe={toAttribute(i,e){switch(e){case Boolean:i=i?_i:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Fe=(i,e)=>!pi(i,e),nt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Fe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);class D extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&gi(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:s}=fi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nt}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const e=bi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const t=this.properties,n=[...vi(t),...mi(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(tt(r))}else e!==void 0&&t.push(tt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ui(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){var s;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:pe).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:pe;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Fe)(this[e],t))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$E_)==null||n.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$Ej()}catch(r){throw e=!1,this._$Ej(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[q("elementProperties")]=new Map,D[q("finalized")]=new Map,Se==null||Se({ReactiveElement:D}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,ge=W.trustedTypes,rt=ge?ge.createPolicy("lit-html",{createHTML:i=>i}):void 0,Mt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+P,yi=`<${Rt}>`,R=document,G=()=>R.createComment(""),J=i=>i===null||typeof i!="object"&&typeof i!="function",Ht=Array.isArray,wi=i=>Ht(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ke=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,ot=/>/g,C=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,lt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,$i=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=$i(1),H=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ct=new WeakMap,M=R.createTreeWalker(R,129);function Tt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const xi=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=F;for(let c=0;c<t;c++){const a=i[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===F?h[1]==="!--"?o=st:h[1]!==void 0?o=ot:h[2]!==void 0?(Lt.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=C):h[3]!==void 0&&(o=C):o===C?h[0]===">"?(o=r??F,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?C:h[3]==='"'?lt:at):o===lt||o===at?o=C:o===st||o===ot?o=F:(o=C,r=void 0);const p=o===C&&i[c+1].startsWith("/>")?" ":"";s+=o===F?a+yi:d>=0?(n.push(l),a.slice(0,d)+Mt+a.slice(d)+P+p):a+P+(d===-2?c:p)}return[Tt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Q{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=xi(e,t);if(this.el=Q.createElement(l,n),M.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=M.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Mt)){const u=h[o++],p=r.getAttribute(d).split(P),k=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:k[2],strings:p,ctor:k[1]==="."?Ai:k[1]==="?"?Pi:k[1]==="@"?Oi:xe}),r.removeAttribute(d)}else d.startsWith(P)&&(a.push({type:6,index:s}),r.removeAttribute(d));if(Lt.test(r.tagName)){const d=r.textContent.split(P),u=d.length-1;if(u>0){r.textContent=ge?ge.emptyScript:"";for(let p=0;p<u;p++)r.append(d[p],G()),M.nextNode(),a.push({type:2,index:++s});r.append(d[u],G())}}}else if(r.nodeType===8)if(r.data===Rt)a.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:s}),d+=P.length-1}s++}}static createElement(e,t){const n=R.createElement("template");return n.innerHTML=e,n}}function V(i,e,t=i,n){var o,c;if(e===H)return e;let r=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const s=J(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=V(i,r._$AS(i,e.values),r,n)),e}class Ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??R).importNode(t,!0);M.currentNode=r;let s=M.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new ne(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new zi(s,this,e)),this._$AV.push(l),a=n[++c]}o!==(a==null?void 0:a.index)&&(s=M.nextNode(),o++)}return M.currentNode=R,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),J(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&J(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Q.createElement(Tt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const o=new Ei(r,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=ct.get(e.strings);return t===void 0&&ct.set(e.strings,t=new Q(e)),t}T(e){Ht(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ne(this.k(G()),this.k(G()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class xe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=V(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=V(this,c[n+a],t,a),l===H&&(l=this._$AH[a]),o||(o=!J(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.O(e)}O(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ai extends xe{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===f?void 0:e}}class Pi extends xe{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Oi extends xe{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??f)===H)return;const n=this._$AH,r=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==f&&(n===f||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class zi{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const Ce=W.litHtmlPolyfillSupport;Ce==null||Ce(Q,ne),(W.litHtmlVersions??(W.litHtmlVersions=[])).push("3.1.1");const Si=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new ne(e.insertBefore(G(),s),s,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Si(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}};var St;m._$litElement$=!0,m.finalized=!0,(St=globalThis.litElementHydrateSupport)==null||St.call(globalThis,{LitElement:m});const Me=globalThis.litElementPolyfillSupport;Me==null||Me({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Fe},Ci=(i=ki,e,t)=>{const{kind:n,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(t.name,i),n==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.C(o,void 0,i),c}}}if(n==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+n)};function v(i){return(e,t)=>typeof t=="object"?Ci(i,e,t):((n,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(r,s):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i){return v({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ut=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht=class{constructor(e,t,n,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ut(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ri=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},dt=class extends Mi{constructor(e,t,n){var r,s;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Ut(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(r=this.host).addController)==null||s.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ri(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt({context:i}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new dt(this,{context:i}))}),{get(){return e.get.call(this)},set(r){var s;return(s=n.get(this))==null||s.setValue(r),e.set.call(this,r)},init(r){var s;return(s=n.get(this))==null||s.setValue(r),r}};{e.constructor.addInitializer(o=>{n.set(o,new dt(o,{context:i}))});const r=Object.getOwnPropertyDescriptor(e,t);let s;if(r===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){n.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=r.set;s={...r,set:function(c){n.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe({context:i,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new ht(this,{context:i,callback:r=>{this[n.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new ht(r,{context:i,callback:s=>{r[n]=s},subscribe:e})})}}let Hi=class extends m{constructor(e,t,n){super(),this.updateFn=e,this.getModel=t,this.setModel=n,this.addEventListener("mvu:message",r=>{const s=r.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){const t=this.updateFn(this.getModel(),e),n=t;typeof(n==null?void 0:n.then)=="function"?n.then(r=>{const s=r(this.getModel());console.log("Updating model in Promise:",s),this.setModel(s)}):(console.log("Updating model:",t),this.setModel(t))}},Li=class extends m{dispatchMessage(e,t=this){const n=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(n)}};class Ti{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:n}=t,r=this._handlers.get(n);return r?r(t,e):e}}function Ui(i){return e=>Object.assign({},e,i)}function Di(i){return i}const ji=window.location.origin,Vi="/api",He="JWT_AUTH_TOKEN",A=class A{constructor(){this.authenticated=!1,this.username="Temp_user",this.signOut=()=>{}}static deauthenticate(e){const t=new A;return console.log("Deauthenticating",e,A._theUser),e===A._theUser&&(localStorage.removeItem(He),A._theUser=t),t}};A._theUser=new A;let x=A;class X extends x{constructor(e,t){super();const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(r).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(s);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const n=new X(e,t);return x._theUser=n,localStorage.setItem(He,e),n}static authenticateFromLocalStorage(e){const t=localStorage.getItem(He);return t?X.authenticate(t,e):x._theUser}}class Ee{constructor(e){this._base=Vi,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=x._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${x._theUser.token}`};return e?{...n,...s}:s}else return e?{...n}:void 0}_url(e){return`${ji}${this._base}${e}`}}class ut extends Ee{constructor(e){super(Object.fromEntries(e))}}class jt extends Ee{constructor(){super(void 0)}}var Ii=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Vt=(i,e,t,n)=>{for(var r=n>1?void 0:n?Ni(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Ii(e,t,r),r};const It="CTModel",Bi={user:new x};class Nt extends Hi{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Bi}}Vt([Dt({context:It}),S()],Nt.prototype,"model",2);class Ae extends Li{getFromModel(e){if(this._model)return this._model[e]}}Vt([qe({context:It,subscribe:!0}),v({attribute:!1})],Ae.prototype,"_model",2);const Fi=()=>new Ti,re=Ui,Pe=Di;var qi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Ki=(i,e,t,n)=>{for(var r=n>1?void 0:n?Wi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&qi(e,t,r),r};let Le=class extends m{render(){return g`
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
            <div class="content-inner">
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
            <div class="content-inner">
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
    `}};Le.styles=[_`
      .hero {
        background-color: var(--primary-color);
        height: 42vh;
        // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23747474' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .content-inner {
        flex-grow: 1;
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
    `];Le=Ki([b("home-page")],Le);var Gi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,We=(i,e,t,n)=>{for(var r=n>1?void 0:n?Ji(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Gi(e,t,r),r};let Y=class extends m{constructor(){super(...arguments),this.isMenuOpen=!1,this.subMenuOpen=""}toggleMenu(){console.log("click!!!!"),this.isMenuOpen=!this.isMenuOpen}toggleSubMenu(i){this.subMenuOpen!==i?this.subMenuOpen=i:this.subMenuOpen=""}render(){return g`
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
              <li>
                <a href="./stacks">Stacks</a>
              </li>
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
    `}};Y.styles=_`
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
  `;We([S()],Y.prototype,"isMenuOpen",2);We([S()],Y.prototype,"subMenuOpen",2);Y=We([b("dsalgo-sidebar-component")],Y);var Qi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,se=(i,e,t,n)=>{for(var r=n>1?void 0:n?Xi(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Qi(e,t,r),r};let Ke="auth",L=class extends m{constructor(){super(),this.secure=!1,this.loginStatus=0,this.registerStatus=0,this.user=X.authenticateFromLocalStorage(()=>this._signOut()),this.addEventListener("secure",()=>{this.secure=!0,console.log("secure")})}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const i=g`
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
    `;return g`
      ${this.isAuthenticated()||!this.secure?"":i}
      <slot></slot>
    `}_closeDialog(){console.log("close dialog"),this.secure=!1}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new ut(t).base().post("/login").then(r=>{if(r.status===200)return r.json();this.loginStatus=r.status}).then(r=>{if(r){console.log("Authentication:",r.token);const s=X.authenticate(r.token,()=>this._signOut());this.user=s,this._toggleDialog(!1),this._dispatchUserLoggedIn(s),this.requestUpdate()}})}_dispatchUserLoggedIn(i){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:i}});this.dispatchEvent(e)}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new ut(t).base().post("/signup").then(r=>{if(r.status===200)return r.json();this.registerStatus=r.status}).then(r=>{console.log("Registration:",r)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=x.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};L.styles=_`
    :host {
      display: contents;
    }
    dialog {
      margin-top: 5rem;
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
  `;se([v()],L.prototype,"secure",2);se([S()],L.prototype,"loginStatus",2);se([S()],L.prototype,"registerStatus",2);se([Dt({context:Ke}),S()],L.prototype,"user",2);L=se([b("auth-required")],L);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=i=>(...e)=>({_$litDirective$:i,values:e});class en{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Te extends en{constructor(e){if(super(e),this.et=f,e.type!==Yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this.vt=void 0,this.et=e;if(e===H)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Te.directiveName="unsafeHTML",Te.resultType=1;const tn=Zi(Te);var nn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,oe=(i,e,t,n)=>{for(var r=n>1?void 0:n?rn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&nn(e,t,r),r};let T=class extends Ae{constructor(){super(...arguments),this.pageId="",this.isEditing=!1,this.user=new x}get page(){return this.getFromModel("page")}firstUpdated(){this.dispatchMessage({type:"PageViewerSelected",pageid:this.pageId})}render(){var i;return g`
      <div id="page-viewer-container">
        ${this.user.username==="luke"?g`
              <button @click=${this._handleEditClick}>
                ${this.isEditing?"Cancel":"Edit"}
              </button>
            `:""}
        ${tn((i=this.page)==null?void 0:i.content)}
        ${this.user.username==="luke"&&this.isEditing?this._renderEditForm():""}
      </div>
    `}_handleEditClick(){this.isEditing=!this.isEditing}_renderEditForm(){var i;return g`
      <form @submit=${this._handleEditSubmit}>
        <textarea class="textarea" name="content">
${(i=this.page)==null?void 0:i.content}</textarea
        >
        <button type="submit">Save</button>
      </form>
    `}_handleEditSubmit(i){i.preventDefault();const t=new FormData(i.target).get("content");this.dispatchMessage({type:"PageViewerSaved",content:(t==null?void 0:t.toString())||"",pageid:this.pageId}),this.isEditing=!1}};T.styles=_`
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
  `;oe([v({attribute:"page-id"})],T.prototype,"pageId",2);oe([v({attribute:"is-editing"})],T.prototype,"isEditing",2);oe([v()],T.prototype,"page",1);oe([qe({context:Ke,subscribe:!0}),v({attribute:!1})],T.prototype,"user",2);T=oe([b("page-viewer")],T);var sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,Ge=(i,e,t,n)=>{for(var r=n>1?void 0:n?on(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&sn(e,t,r),r};let Z=class extends Ae{get algo(){var i;return(i=this.location)==null?void 0:i.params.algo}render(){return g` <div id="dsalgo-container">
      <dsalgo-sidebar-component class="child1"></dsalgo-sidebar-component>

      <page-viewer class="child2" page-id="${this.algo}"></page-viewer>
    </div>`}};Z.styles=_`
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
  `;Ge([v({attribute:!1})],Z.prototype,"location",2);Ge([v({reflect:!0})],Z.prototype,"algo",1);Z=Ge([b("dsalgo-page")],Z);var an=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,cn=(i,e,t,n)=>{for(var r=n>1?void 0:n?ln(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&an(e,t,r),r};let Ue=class extends m{render(){return g`
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
    `}};Ue.styles=_`
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
  `;Ue=cn([b("bigo-sidebar-component")],Ue);var hn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,Je=(i,e,t,n)=>{for(var r=n>1?void 0:n?dn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&hn(e,t,r),r};let ee=class extends m{get bigo(){var i;return(i=this.location)==null?void 0:i.params.bigo}render(){return g` <div id="bigo-container">
      <bigo-sidebar-component class="child1"></bigo-sidebar-component>

      <page-viewer class="child2" page-id="${this.bigo}"></page-viewer>
    </div>`}};ee.styles=_`
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
  `;Je([v({attribute:!1})],ee.prototype,"location",2);Je([v({reflect:!0})],ee.prototype,"bigo",1);ee=Je([b("bigo-page")],ee);var un=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Oe=(i,e,t,n)=>{for(var r=n>1?void 0:n?pn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&un(e,t,r),r};let I=class extends m{constructor(){super(...arguments),this.pageId="",this.isMenuOpen=!1,this.subMenuOpen=""}toggleMenu(){console.log("pl click!!!!"),this.isMenuOpen=!this.isMenuOpen}toggleSubMenu(i,e){i.stopPropagation(),i.preventDefault(),this.subMenuOpen=this.subMenuOpen===e?"":e}attributeChangedCallback(i,e,t){if(i==="page-id"&&e!==t&&t!==null){const[n]=t.split("_");this.subMenuOpen=n,this.isMenuOpen=!0}}render(){return g`
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div class="sidebar">
        <div class="logo-details">
          <a href="/app"><i class="bx bx-home-alt"></i></a>
          <span class="logo-name">Programming Languages </span>
        </div>
        <ul class="nav-links ${this.isMenuOpen?"showMenu":"hideMenu"}">
          <!-- Python -->
          <li>
            <div class="icon-link">
              <a @click="${i=>this.toggleSubMenu(i,"python")}">
                <i class="bx bx-grid"></i>
                <span class="link_name">Python</span>
              </a>
              <i
                class="bx bxs-chevron-down arrow"
                @click="${i=>this.toggleSubMenu(i,"python")}"
              ></i>
            </div>
            <ul
              class="sub-menu ${this.subMenuOpen==="python"?"showSubMenu":"hideSubMenu"}"
            >
              <li>
                <a href="./python_syntax">Syntax</a>
              </li>
              <li>
                <a href="./python_quick_hacks">Quick Hacks</a>
              </li>
            </ul>
          </li>

          <!-- Java  -->

          <li>
            <div class="icon-link">
              <a
                href="#"
                @click="${i=>this.toggleSubMenu(i,"java")}"
              >
                <i class="bx bx-grid"></i>
                <span class="link_name">Java</span>
              </a>
              <i
                class="bx bxs-chevron-down arrow"
                @click="${i=>this.toggleSubMenu(i,"java")}"
              ></i>
            </div>
            <ul
              class="sub-menu ${this.subMenuOpen==="java"?"showSubMenu":"hideSubMenu"}"
            >
              <li>
                <a href="./java_syntax">Syntax</a>
              </li>
              <li>
                <a href="./java_quick_hacks">Quick Hacks</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `}};I.styles=_`
    * {
      box-sizing: border-box;
    }
    .sidebar {
      padding-top: 30px;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--primary-color);
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

    .sidebar .logo-details .logo-name {
      color: var(--background-color);
      font-weight: bold;
      cursor: pointer;
    }

    .sidebar .nav-links {
      height: 100%;
      overflow: auto;
    }

    .sidebar .nav-links li {
      position: relative;
      list-style: none;
      transition: all 0.4s ease;
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
      display: none;
    }

    .sidebar .nav-links li .sub-menu.showSubMenu {
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

    @media (max-width: 768px) {
      .sidebar .nav-links.hideMenu {
        display: none;
      }
    }
  `;Oe([v({attribute:"page-id"})],I.prototype,"pageId",2);Oe([S()],I.prototype,"isMenuOpen",2);Oe([S()],I.prototype,"subMenuOpen",2);I=Oe([b("pl-sidebar-component")],I);var gn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Qe=(i,e,t,n)=>{for(var r=n>1?void 0:n?fn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&gn(e,t,r),r};let te=class extends Ae{get pl(){var i;return(i=this.location)==null?void 0:i.params.pl}render(){return g` <div id="dsalgo-container">
      <pl-sidebar-component
        page-id="${this.pl}"
        class="child1"
      ></pl-sidebar-component>

      <page-viewer class="child2" page-id="${this.pl}"></page-viewer>
    </div>`}};te.styles=_`
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
  `;Qe([v({attribute:!1})],te.prototype,"location",2);Qe([v({reflect:!0})],te.prototype,"pl",1);te=Qe([b("pl-page")],te);const vn=[{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/dsalgo-page",redirect:"/app/dsalgo-page/static_arrays"},{path:"/app/dsalgo-page/:algo",component:"dsalgo-page"},{path:"/app/bigo-page/:bigo",component:"bigo-page"},{path:"/app/bigo-page",redirect:"/app/bigo-page/constant"},{path:"/app/pl-page/:pl",component:"pl-page"},{path:"/app/pl-page",redirect:"/app/pl-page/python_syntax"},{path:"/app",component:"home-page"},{path:"(.*)",redirect:"/app"}];var mn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Bt=(i,e,t,n)=>{for(var r=n>1?void 0:n?bn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&mn(e,t,r),r};let fe=class extends m{constructor(){super(...arguments),this.on=!1}render(){return g`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(i){const e=i.target,t=new Event(i.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};fe.styles=_`
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
  `;Bt([v({reflect:!0,type:Boolean})],fe.prototype,"on",2);fe=Bt([b("toggle-switch")],fe);var _n=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,Ft=(i,e,t,n)=>{for(var r=n>1?void 0:n?yn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&_n(e,t,r),r};let ve=class extends m{constructor(){super(...arguments),this.user=new x}render(){return g`
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
        ${this.user.username!=="Temp_user"?g`
              <li>
                <button class="button" slot="logout" @click=${this._signOut}>
                  Log Out
                </button>
              </li>
            `:g`
              <li>
                <button class="button" slot="login" @click=${this._signIn}>
                  Log In
                </button>
              </li>
            `}
      </ul>
    `}_signOut(){console.log("Signout"),this.user.signOut()}_signIn(){console.log("SignIn",this);const i=new CustomEvent("secure",{bubbles:!0,composed:!0,detail:{}});this.dispatchEvent(i)}};ve.styles=_`
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
  `;Ft([qe({context:Ke,subscribe:!0}),v({attribute:!1})],ve.prototype,"user",2);ve=Ft([b("user-panel")],ve);var wn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,qt=(i,e,t,n)=>{for(var r=n>1?void 0:n?$n(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&wn(e,t,r),r};let me=class extends m{constructor(){super(...arguments),this.open=!1}render(){return g`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown"><slot>Menu</slot></label>
      <slot name="menu">No menu </slot>
    `}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};me.styles=_`
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
  `;qt([v({reflect:!0,type:Boolean})],me.prototype,"open",2);me=qt([b("drop-down")],me);var xn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,Wt=(i,e,t,n)=>{for(var r=n>1?void 0:n?En(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&xn(e,t,r),r};let be=class extends m{constructor(){super(...arguments),this.open=!1}render(){return g`
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
            <li><a href="/app/pl-page">Programming Languages</a></li>
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
    `}_toggleDarkMode(i){const e=i.target,t=document.body;console.log("Toggling Dark mode",i),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_handleBurgerClick(){let i=document.getElementById("myTopnav");console.log("&&&&&",i)}};be.styles=_`
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

    .bx-menu {
      font-size: 45px; /* Adjust the size as needed */
      color: var(--secondary-color); /* Change the color as needed */
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
  `;Wt([v({reflect:!0,type:Boolean})],be.prototype,"open",2);be=Wt([b("nav-bar")],be);const An="*{box-sizing:border-box;margin:0;padding:0}ul,ol{list-style:none}a{text-decoration:none;color:inherit;cursor:pointer}img{max-width:100%}";var Pn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,zn=(i,e,t,n)=>{for(var r=n>1?void 0:n?On(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&Pn(e,t,r),r};let De=class extends m{render(){return g`
      <header>
        <nav-bar>Profile-a </nav-bar>
      </header>
    `}};De.styles=[Ct(An),_`
      header {
        /* background-color: var(--background-color); */

        font-family: "Bebas Neue", sans-serif;

        height: 60px;

        padding-top: 10px;

        z-index: 1;
        display: flex;

        align-items: center;
      }
    `];De=zn([b("ct-header")],De);function _e(i){return i=i||[],Array.isArray(i)?i:[i]}function $(i){return`[Vaadin.Router] ${i}`}function Sn(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const ye="module",we="nomodule",je=[ye,we];function pt(i){if(!i.match(/.+\.[m]?js$/))throw new Error($(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Kt(i){if(!i||!w(i.path))throw new Error($('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!U(i.action)&&!Array.isArray(i.children)&&!U(i.children)&&!$e(e)&&!t.some(n=>w(i[n])))throw new Error($(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))pt(e);else if(je.some(n=>n in e))je.forEach(n=>n in e&&pt(e[n]));else throw new Error($('Expected route bundle to include either "'+we+'" or "'+ye+'" keys, or both'));i.redirect&&["bundle","component"].forEach(n=>{n in i&&console.warn($(`Route config "${i.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function gt(i){_e(i).forEach(e=>Kt(e))}function ft(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===ye?t.setAttribute("type",ye):e===we&&t.setAttribute(we,""),t.async=!0),new Promise((n,r)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),r(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function kn(i){return w(i)?ft(i):Promise.race(je.filter(e=>e in i).map(e=>ft(i[e],e)))}function K(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function $e(i){return typeof i=="object"&&!!i}function U(i){return typeof i=="function"}function w(i){return typeof i=="string"}function Gt(i){const e=new Error($(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const j=new class{};function Cn(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function vt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Cn(e))!==window.location.origin)return;const{pathname:r,search:s,hash:o}=e;K("go",{pathname:r,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const Mn={activate(){window.document.addEventListener("click",vt)},inactivate(){window.document.removeEventListener("click",vt)}},Rn=/Trident/.test(navigator.userAgent);Rn&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function mt(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;K("go",{pathname:e,search:t,hash:n})}const Hn={activate(){window.addEventListener("popstate",mt)},inactivate(){window.removeEventListener("popstate",mt)}};var N=ei,Ln=Xe,Tn=Vn,Un=Xt,Dn=Zt,Jt="/",Qt="./",jn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Xe(i,e){for(var t=[],n=0,r=0,s="",o=e&&e.delimiter||Jt,c=e&&e.delimiters||Qt,a=!1,l;(l=jn.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=i.slice(r,u),r=u+h.length,d){s+=d[1],a=!0;continue}var p="",k=i[r],oi=l[2],ai=l[3],li=l[4],ae=l[5];if(!a&&s.length){var ze=s.length-1;c.indexOf(s[ze])>-1&&(p=s[ze],s=s.slice(0,ze))}s&&(t.push(s),s="",a=!1);var ci=p!==""&&k!==void 0&&k!==p,hi=ae==="+"||ae==="*",di=ae==="?"||ae==="*",Ye=p||o,Ze=ai||li;t.push({name:oi||n++,prefix:p,delimiter:Ye,optional:di,repeat:hi,partial:ci,pattern:Ze?In(Ze):"[^"+E(Ye)+"]+?"})}return(s||r<i.length)&&t.push(s+i.substr(r)),t}function Vn(i,e){return Xt(Xe(i,e))}function Xt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(n,r){for(var s="",o=r&&r.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){s+=a;continue}var l=n?n[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function E(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function In(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Yt(i){return i&&i.sensitive?"":"i"}function Nn(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function Bn(i,e,t){for(var n=[],r=0;r<i.length;r++)n.push(ei(i[r],e,t).source);return new RegExp("(?:"+n.join("|")+")",Yt(t))}function Fn(i,e,t){return Zt(Xe(i,t),e,t)}function Zt(i,e,t){t=t||{};for(var n=t.strict,r=t.start!==!1,s=t.end!==!1,o=E(t.delimiter||Jt),c=t.delimiters||Qt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),l=r?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=E(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=E(u.prefix)+"("+p+")?":l+="(?:"+E(u.prefix)+"("+p+"))?":l+=E(u.prefix)+"("+p+")"}}return s?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Yt(t))}function ei(i,e,t){return i instanceof RegExp?Nn(i,e):Array.isArray(i)?Bn(i,e,t):Fn(i,e,t)}N.parse=Ln;N.compile=Tn;N.tokensToFunction=Un;N.tokensToRegExp=Dn;const{hasOwnProperty:qn}=Object.prototype,Ve=new Map;Ve.set("|false",{keys:[],pattern:/(?:)/});function bt(i){try{return decodeURIComponent(i)}catch{return i}}function Wn(i,e,t,n,r){t=!!t;const s=`${i}|${t}`;let o=Ve.get(s);if(!o){const l=[];o={keys:l,pattern:N(i,l,{end:t,strict:i===""})},Ve.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!qn.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(bt):[]:a[d]=u&&bt(u))}return{path:c[0],keys:(n||[]).concat(o.keys),params:a}}function ti(i,e,t,n,r){let s,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!s&&(s=Wn(a,e,!h,n,r),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=ti(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Kn(i){if(U(i.route.action))return i.route.action(i)}function Gn(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Jn(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Qn(i,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const r={path:n,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(r)}}class ie{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Kn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){gt(e);const t=[..._e(e)];this.root.__children=t}addRoutes(e){return gt(e),this.root.__children.push(..._e(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),n=ti(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||n.next(u),o=null,!l&&(s.done||!Gn(h,s.value.route))?(o=s,Promise.resolve(j)):s.done?Promise.reject(Gt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Qn(c,s.value),Promise.resolve(r(c)).then(p=>p!=null&&p!==j?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Jn(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}ie.pathToRegexp=N;const{pathToRegexp:_t}=ie,yt=new Map;function ii(i,e,t){const n=e.name||e.component;if(n&&(i.has(n)?i.get(n).push(e):i.set(n,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const s=t[r];s.parent=e,ii(i,s,s.__children||s.children)}}function wt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function $t(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Xn(i,e={}){if(!(i instanceof ie))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,r)=>{let s=wt(t,n);if(!s&&(t.clear(),ii(t,i.root,i.root.__children),s=wt(t,n),!s))throw new Error(`Route "${n}" not found`);let o=yt.get(s.fullPath);if(!o){let a=$t(s),l=s.parent;for(;l;){const p=$t(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=_t.parse(a),d=_t.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},yt.set(a,o),s.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=r[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let xt=[];function Yn(i){xt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),xt=i}const Zn=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},er=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function Et(i,e){return i.classList.add(e),new Promise(t=>{if(Zn(i)){const n=i.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;i.setAttribute("style",`position: absolute; ${r}`),er(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const tr=256;function Re(i){return i!=null}function ir(i){const e=Object.assign({},i);return delete e.next,e}function y({pathname:i="",search:e="",hash:t="",chain:n=[],params:r={},redirectFrom:s,resolver:o},c){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:s,getUrl:(l={})=>de(O.pathToRegexp.compile(ni(a))(Object.assign({},r,l)),o)}}function At(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function nr(i,e){e.location=y(i);const t=i.chain.map(n=>n.route).indexOf(i.route);return i.chain[t].element=e,e}function he(i,e,t){if(U(i))return i.apply(t,e)}function Pt(i,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return he(t[i],e,t)}}function rr(i,e){if(!Array.isArray(i)&&!$e(i))throw new Error($(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=_e(i);for(let n=0;n<t.length;n++)Kt(t[n]),e.__children.push(t[n])}function le(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function de(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function ni(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends ie{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&ie.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();U(t.children)&&(n=n.then(()=>t.children(ir(e))).then(s=>{!Re(s)&&!U(t.children)&&(s=t.children),rr(s,t)}));const r={redirect:s=>At(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return he(t.action,[e,r],t)}).then(s=>{if(Re(s)&&(s instanceof HTMLElement||s.redirect||s===j))return s;if(w(t.redirect))return r.redirect(t.redirect);if(t.bundle)return kn(t.bundle).then(()=>{},()=>{throw new Error($(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Re(s))return s;if(w(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(s),t&&this.__updateBrowserHistory(s,n===1),K("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),le(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(r,{resolver:this})),K("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,c=de(ni(n.chain),n.resolver)===n.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===j?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(n).then(l=>{if(l===null||l===j)throw Gt(s);return l&&l!==j&&l!==n?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(nr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error($(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Sn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>At(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,r.length)&&!(n[a].route!==r[a].route||n[a].path!==r[a].path&&n[a].element!==r[a].element||!this.__isReusableElement(n[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<r.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),n[a].element.location=y(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=y(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=y(e,r[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const s=y(t);return e.then(o=>{if(this.__isLatestRender(t))return Pt("onBeforeLeave",[s,n,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,r){const s=y(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Pt("onBeforeEnter",[s,n,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>tr)throw new Error($(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError($(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s)if(s.parentNode===n)e.chain[r].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&le(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(le(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const s=y(e);he(r.onAfterLeave,[s,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&le(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=y(e,e.chain[t].route);he(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&n&&o){const c=$e(o)&&o.leave||"leaving",a=$e(o)&&o.enter||"entering";r.push(Et(t,c)),r.push(Et(n,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Yn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Xn(this)),de(this.__urlForName(e,t),this)}urlForPath(e,t){return de(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=w(e)?this.__createUrl(e,"http://a"):e;return K("go",{pathname:t,search:n,hash:r})}}const sr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ue=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function or(){function i(){return!0}return ri(i)}function ar(){try{return lr()?!0:cr()?ue?!hr():!or():!1}catch{return!1}}function lr(){return localStorage.getItem("vaadin.developmentmode.force")}function cr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function hr(){return!!(ue&&Object.keys(ue).map(e=>ue[e]).filter(e=>e.productionMode).length>0)}function ri(i,e){if(typeof i!="function")return;const t=sr.exec(i.toString());if(t)try{i=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return i(e)}window.Vaadin=window.Vaadin||{};const Ot=function(i,e){if(window.Vaadin.developmentMode)return ri(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ar());function dr(){}const ur=function(){if(typeof Ot=="function")return Ot(dr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ur();O.NavigationTrigger={POPSTATE:Hn,CLICK:Mn};var pr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,si=(i,e,t,n)=>{for(var r=n>1?void 0:n?gr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&pr(e,t,r),r};let Ie=class extends m{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};si([v({attribute:!1})],Ie.prototype,"routes",2);Ie=si([b("vaadin-router")],Ie);const B=Fi(),fr=B.update;B.addMessage("UserLoggedIn",(i,e)=>{const{user:t}=i;return re({user:t})(e)});B.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new jt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?re({profile:t}):Pe)});B.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Ee(t).put(`/profiles/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{n&&console.log("Profile:",n)}).then(n=>n?re({profile:n}):Pe)});B.addMessage("PageViewerSelected",i=>{const{pageid:e}=i;return new jt().get(`/pages/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("PageViewer:",t),t}).then(t=>t?re({page:t}):Pe)});B.addMessage("PageViewerSaved",i=>{const{pageid:e,content:t}=i;return new Ee({content:t}).put(`/pages/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{if(n)return console.log("PageViewer:",n),n}).then(n=>n?re({page:n}):Pe)});var vr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,br=(i,e,t,n)=>{for(var r=n>1?void 0:n?mr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&vr(e,t,r),r};let zt=class extends Nt{constructor(){super(fr),this.addEventListener("mvu:message",i=>{const e=i.detail;console.log("Got message:",e)})}render(){return g`
      <auth-required>
        <ct-header> </ct-header>
        <vaadin-router .routes=${vn}> </vaadin-router>
      </auth-required>
    `}};zt=br([b("ct-app")],zt);
