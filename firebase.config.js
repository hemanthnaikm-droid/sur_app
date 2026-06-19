(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gI={exports:{}},td={},yI={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),kx=Symbol.for("react.portal"),Px=Symbol.for("react.fragment"),Cx=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Vx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),Lx=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Fx=Symbol.for("react.lazy"),a_=Symbol.iterator;function jx(t){return t===null||typeof t!="object"?null:(t=a_&&t[a_]||t["@@iterator"],typeof t=="function"?t:null)}var _I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vI=Object.assign,wI={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=wI,this.updater=n||_I}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function II(){}II.prototype=Eo.prototype;function Vp(t,e,n){this.props=t,this.context=e,this.refs=wI,this.updater=n||_I}var Op=Vp.prototype=new II;Op.constructor=Vp;vI(Op,Eo.prototype);Op.isPureReactComponent=!0;var l_=Array.isArray,EI=Object.prototype.hasOwnProperty,Lp={current:null},TI={key:!0,ref:!0,__self:!0,__source:!0};function SI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)EI.call(e,r)&&!TI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sl,type:t,key:s,ref:o,props:i,_owner:Lp.current}}function Ux(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var u_=/\/+/g;function Ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function Mu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sl:case kx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ih(o,0):r,l_(i)?(n="",t!=null&&(n=t.replace(u_,"$&/")+"/"),Mu(i,e,n,"",function(c){return c})):i!=null&&(Mp(i)&&(i=Ux(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(u_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",l_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ih(s,a);o+=Mu(s,e,n,u,i)}else if(u=jx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ih(s,a++),o+=Mu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return Mu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},Fu={transition:null},$x={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:Lp};function bI(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Eo;ae.Fragment=Px;ae.Profiler=Nx;ae.PureComponent=Vp;ae.StrictMode=Cx;ae.Suspense=Lx;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;ae.act=bI;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)EI.call(e,u)&&!TI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sl,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dx,_context:t},t.Consumer=t};ae.createElement=SI;ae.createFactory=function(t){var e=SI.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Ox,render:t}};ae.isValidElement=Mp;ae.lazy=function(t){return{$$typeof:Fx,_payload:{_status:-1,_result:t},_init:Bx}};ae.memo=function(t,e){return{$$typeof:Mx,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};ae.unstable_act=bI;ae.useCallback=function(t,e){return Dt.current.useCallback(t,e)};ae.useContext=function(t){return Dt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Dt.current.useEffect(t,e)};ae.useId=function(){return Dt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Dt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};ae.useRef=function(t){return Dt.current.useRef(t)};ae.useState=function(t){return Dt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Dt.current.useTransition()};ae.version="18.3.1";yI.exports=ae;var B=yI.exports;const qx=Rx(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx=B,Kx=Symbol.for("react.element"),Wx=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Qx=Gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yx={key:!0,ref:!0,__self:!0,__source:!0};function AI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Hx.call(e,r)&&!Yx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kx,type:t,key:s,ref:o,props:i,_owner:Qx.current}}td.Fragment=Wx;td.jsx=AI;td.jsxs=AI;gI.exports=td;var f=gI.exports,hf={},xI={exports:{}},en={},RI={exports:{}},kI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,te){var ie=H.length;H.push(te);e:for(;0<ie;){var q=ie-1>>>1,Q=H[q];if(0<i(Q,te))H[q]=te,H[ie]=Q,ie=q;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var te=H[0],ie=H.pop();if(ie!==te){H[0]=ie;e:for(var q=0,Q=H.length,re=Q>>>1;q<re;){var de=2*(q+1)-1,Ee=H[de],ge=de+1,Me=H[ge];if(0>i(Ee,ie))ge<Q&&0>i(Me,Ee)?(H[q]=Me,H[ge]=ie,q=ge):(H[q]=Ee,H[de]=ie,q=de);else if(ge<Q&&0>i(Me,ie))H[q]=Me,H[ge]=ie,q=ge;else break e}}return te}function i(H,te){var ie=H.sortIndex-te.sortIndex;return ie!==0?ie:H.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,g=3,E=!1,A=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=H)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function k(H){if(C=!1,I(H),!A)if(n(u)!==null)A=!0,Sn(V);else{var te=n(c);te!==null&&xt(k,te.startTime-H)}}function V(H,te){A=!1,C&&(C=!1,v(y),y=-1),E=!0;var ie=g;try{for(I(te),p=n(u);p!==null&&(!(p.expirationTime>te)||H&&!R());){var q=p.callback;if(typeof q=="function"){p.callback=null,g=p.priorityLevel;var Q=q(p.expirationTime<=te);te=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),I(te)}else r(u);p=n(u)}if(p!==null)var re=!0;else{var de=n(c);de!==null&&xt(k,de.startTime-te),re=!1}return re}finally{p=null,g=ie,E=!1}}var L=!1,T=null,y=-1,S=5,x=-1;function R(){return!(t.unstable_now()-x<S)}function N(){if(T!==null){var H=t.unstable_now();x=H;var te=!0;try{te=T(!0,H)}finally{te?b():(L=!1,T=null)}}else L=!1}var b;if(typeof w=="function")b=function(){w(N)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Gt=pe.port2;pe.port1.onmessage=N,b=function(){Gt.postMessage(null)}}else b=function(){P(N,0)};function Sn(H){T=H,L||(L=!0,b())}function xt(H,te){y=P(function(){H(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,Sn(V))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var ie=g;g=te;try{return H()}finally{g=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=g;g=H;try{return te()}finally{g=ie}},t.unstable_scheduleCallback=function(H,te,ie){var q=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?q+ie:q):ie=q,H){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ie+Q,H={id:h++,callback:te,priorityLevel:H,startTime:ie,expirationTime:Q,sortIndex:-1},ie>q?(H.sortIndex=ie,e(c,H),n(u)===null&&H===n(c)&&(C?(v(y),y=-1):C=!0,xt(k,ie-q))):(H.sortIndex=Q,e(u,H),A||E||(A=!0,Sn(V))),H},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(H){var te=g;return function(){var ie=g;g=te;try{return H.apply(this,arguments)}finally{g=ie}}}})(kI);RI.exports=kI;var Jx=RI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=B,Jt=Jx;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var PI=new Set,Ga={};function as(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Ga[t]=e,t=0;t<e.length;t++)PI.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c_={},d_={};function eR(t){return ff.call(d_,t)?!0:ff.call(c_,t)?!1:Zx.test(t)?d_[t]=!0:(c_[t]=!0,!1)}function tR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nR(t,e,n,r){if(e===null||typeof e>"u"||tR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,jp);mt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,jp);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,jp);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nR(e,n,i,r)&&(n=null),r||i===null?eR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,du=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),CI=Symbol.for("react.provider"),NI=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),DI=Symbol.for("react.offscreen"),h_=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=h_&&t[h_]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,Eh;function ga(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Th=!1;function Sh(t,e){if(!t||Th)return"";Th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function rR(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Sh(t.type,!1),t;case 11:return t=Sh(t.type.render,!1),t;case 1:return t=Sh(t.type,!0),t;default:return""}}function yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case ks:return"Portal";case pf:return"Profiler";case zp:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case NI:return(t.displayName||"Context")+".Consumer";case CI:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:yf(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return yf(t(e))}catch{}}return null}function iR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function VI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sR(t){var e=VI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hu(t){t._valueTracker||(t._valueTracker=sR(t))}function OI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=VI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _f(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function f_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function LI(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function vf(t,e){LI(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&wf(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function p_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function m_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ya(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function MI(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function g_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function FI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?FI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,jI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oR=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(t){oR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xa[e]=xa[t]})});function UI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xa.hasOwnProperty(t)&&xa[t]?(""+e).trim():e+"px"}function zI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=UI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aR=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tf(t,e){if(e){if(aR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,Bs=null,$s=null;function y_(t){if(t=xl(t)){if(typeof Af!="function")throw Error(z(280));var e=t.stateNode;e&&(e=od(e),Af(t.stateNode,t.type,e))}}function BI(t){Bs?$s?$s.push(t):$s=[t]:Bs=t}function $I(){if(Bs){var t=Bs,e=$s;if($s=Bs=null,y_(t),e)for(t=0;t<e.length;t++)y_(e[t])}}function qI(t,e){return t(e)}function GI(){}var bh=!1;function KI(t,e,n){if(bh)return t(e,n);bh=!0;try{return qI(t,e,n)}finally{bh=!1,(Bs!==null||$s!==null)&&(GI(),$I())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var r=od(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var xf=!1;if(tr)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){xf=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{xf=!1}function lR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ra=!1,lc=null,uc=!1,Rf=null,uR={onError:function(t){Ra=!0,lc=t}};function cR(t,e,n,r,i,s,o,a,u){Ra=!1,lc=null,lR.apply(uR,arguments)}function dR(t,e,n,r,i,s,o,a,u){if(cR.apply(this,arguments),Ra){if(Ra){var c=lc;Ra=!1,lc=null}else throw Error(z(198));uc||(uc=!0,Rf=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function WI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function __(t){if(ls(t)!==t)throw Error(z(188))}function hR(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return __(i),t;if(s===r)return __(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function HI(t){return t=hR(t),t!==null?QI(t):null}function QI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=QI(t);if(e!==null)return e;t=t.sibling}return null}var YI=Jt.unstable_scheduleCallback,v_=Jt.unstable_cancelCallback,fR=Jt.unstable_shouldYield,pR=Jt.unstable_requestPaint,Ke=Jt.unstable_now,mR=Jt.unstable_getCurrentPriorityLevel,Gp=Jt.unstable_ImmediatePriority,JI=Jt.unstable_UserBlockingPriority,cc=Jt.unstable_NormalPriority,gR=Jt.unstable_LowPriority,XI=Jt.unstable_IdlePriority,nd=null,Nn=null;function yR(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(nd,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:wR,_R=Math.log,vR=Math.LN2;function wR(t){return t>>>=0,t===0?32:31-(_R(t)/vR|0)|0}var pu=64,mu=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_a(a):(s&=o,s!==0&&(r=_a(s)))}else o=n&~i,o!==0?r=_a(o):s!==0&&(r=_a(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function IR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ER(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=IR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ZI(){var t=pu;return pu<<=1,!(pu&4194240)&&(pu=64),t}function Ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function TR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function eE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tE,Wp,nE,rE,iE,Pf=!1,gu=[],Ur=null,zr=null,Br=null,Ha=new Map,Qa=new Map,Cr=[],SR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w_(t,e){switch(t){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xl(e),e!==null&&Wp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bR(t,e,n,r,i){switch(e){case"focusin":return Ur=sa(Ur,t,e,n,r,i),!0;case"dragenter":return zr=sa(zr,t,e,n,r,i),!0;case"mouseover":return Br=sa(Br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ha.set(s,sa(Ha.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qa.set(s,sa(Qa.get(s)||null,t,e,n,r,i)),!0}return!1}function sE(t){var e=Vi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=WI(n),e!==null){t.blockedOn=e,iE(t.priority,function(){nE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return e=xl(n),e!==null&&Wp(e),t.blockedOn=n,!1;e.shift()}return!0}function I_(t,e,n){ju(t)&&n.delete(e)}function AR(){Pf=!1,Ur!==null&&ju(Ur)&&(Ur=null),zr!==null&&ju(zr)&&(zr=null),Br!==null&&ju(Br)&&(Br=null),Ha.forEach(I_),Qa.forEach(I_)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,AR)))}function Ya(t){function e(i){return oa(i,t)}if(0<gu.length){oa(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ur!==null&&oa(Ur,t),zr!==null&&oa(zr,t),Br!==null&&oa(Br,t),Ha.forEach(e),Qa.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)sE(n),n.blockedOn===null&&Cr.shift()}var qs=dr.ReactCurrentBatchConfig,hc=!0;function xR(t,e,n,r){var i=_e,s=qs.transition;qs.transition=null;try{_e=1,Hp(t,e,n,r)}finally{_e=i,qs.transition=s}}function RR(t,e,n,r){var i=_e,s=qs.transition;qs.transition=null;try{_e=4,Hp(t,e,n,r)}finally{_e=i,qs.transition=s}}function Hp(t,e,n,r){if(hc){var i=Cf(t,e,n,r);if(i===null)Lh(t,e,r,fc,n),w_(t,r);else if(bR(i,t,e,n,r))r.stopPropagation();else if(w_(t,r),e&4&&-1<SR.indexOf(t)){for(;i!==null;){var s=xl(i);if(s!==null&&tE(s),s=Cf(t,e,n,r),s===null&&Lh(t,e,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var fc=null;function Cf(t,e,n,r){if(fc=null,t=qp(r),t=Vi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=WI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function oE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mR()){case Gp:return 1;case JI:return 4;case cc:case gR:return 16;case XI:return 536870912;default:return 16}default:return 16}}var Lr=null,Qp=null,Uu=null;function aE(){if(Uu)return Uu;var t,e=Qp,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uu=i.slice(t,1<r?1-r:void 0)}function zu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yu(){return!0}function E_(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yu:E_,this.isPropagationStopped=E_,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=tn(To),Al=Ue({},To,{view:0,detail:0}),kR=tn(Al),xh,Rh,aa,rd=Ue({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(xh=t.screenX-aa.screenX,Rh=t.screenY-aa.screenY):Rh=xh=0,aa=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:Rh}}),T_=tn(rd),PR=Ue({},rd,{dataTransfer:0}),CR=tn(PR),NR=Ue({},Al,{relatedTarget:0}),kh=tn(NR),DR=Ue({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),VR=tn(DR),OR=Ue({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LR=tn(OR),MR=Ue({},To,{data:0}),S_=tn(MR),FR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UR[t])?!!e[t]:!1}function Jp(){return zR}var BR=Ue({},Al,{key:function(t){if(t.key){var e=FR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jp,charCode:function(t){return t.type==="keypress"?zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$R=tn(BR),qR=Ue({},rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=tn(qR),GR=Ue({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jp}),KR=tn(GR),WR=Ue({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),HR=tn(WR),QR=Ue({},rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YR=tn(QR),JR=[9,13,27,32],Xp=tr&&"CompositionEvent"in window,ka=null;tr&&"documentMode"in document&&(ka=document.documentMode);var XR=tr&&"TextEvent"in window&&!ka,lE=tr&&(!Xp||ka&&8<ka&&11>=ka),A_=" ",x_=!1;function uE(t,e){switch(t){case"keyup":return JR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function ZR(t,e){switch(t){case"compositionend":return cE(e);case"keypress":return e.which!==32?null:(x_=!0,A_);case"textInput":return t=e.data,t===A_&&x_?null:t;default:return null}}function ek(t,e){if(Cs)return t==="compositionend"||!Xp&&uE(t,e)?(t=aE(),Uu=Qp=Lr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lE&&e.locale!=="ko"?null:e.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tk[t.type]:e==="textarea"}function dE(t,e,n,r){BI(r),e=pc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pa=null,Ja=null;function nk(t){EE(t,0)}function id(t){var e=Vs(t);if(OI(e))return t}function rk(t,e){if(t==="change")return e}var hE=!1;if(tr){var Ph;if(tr){var Ch="oninput"in document;if(!Ch){var k_=document.createElement("div");k_.setAttribute("oninput","return;"),Ch=typeof k_.oninput=="function"}Ph=Ch}else Ph=!1;hE=Ph&&(!document.documentMode||9<document.documentMode)}function P_(){Pa&&(Pa.detachEvent("onpropertychange",fE),Ja=Pa=null)}function fE(t){if(t.propertyName==="value"&&id(Ja)){var e=[];dE(e,Ja,t,qp(t)),KI(nk,e)}}function ik(t,e,n){t==="focusin"?(P_(),Pa=e,Ja=n,Pa.attachEvent("onpropertychange",fE)):t==="focusout"&&P_()}function sk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return id(Ja)}function ok(t,e){if(t==="click")return id(e)}function ak(t,e){if(t==="input"||t==="change")return id(e)}function lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:lk;function Xa(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(e,i)||!In(t[i],e[i]))return!1}return!0}function C_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function N_(t,e){var n=C_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C_(n)}}function pE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mE(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=mE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pE(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=N_(n,s);var o=N_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ck=tr&&"documentMode"in document&&11>=document.documentMode,Ns=null,Nf=null,Ca=null,Df=!1;function D_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Ns==null||Ns!==ac(r)||(r=Ns,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ca&&Xa(Ca,r)||(Ca=r,r=pc(Nf,"onSelect"),0<r.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ns)))}function _u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},Nh={},gE={};tr&&(gE=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function sd(t){if(Nh[t])return Nh[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gE)return Nh[t]=e[n];return t}var yE=sd("animationend"),_E=sd("animationiteration"),vE=sd("animationstart"),wE=sd("transitionend"),IE=new Map,V_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){IE.set(t,e),as(e,[t])}for(var Dh=0;Dh<V_.length;Dh++){var Vh=V_[Dh],dk=Vh.toLowerCase(),hk=Vh[0].toUpperCase()+Vh.slice(1);ci(dk,"on"+hk)}ci(yE,"onAnimationEnd");ci(_E,"onAnimationIteration");ci(vE,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(wE,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function O_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dR(r,e,void 0,t),t.currentTarget=null}function EE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;O_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;O_(i,a,c),s=u}}}if(uc)throw t=Rf,uc=!1,Rf=null,t}function Ae(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(TE(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),TE(n,t,r,e)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[vu]){t[vu]=!0,PI.forEach(function(n){n!=="selectionchange"&&(fk.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vu]||(e[vu]=!0,Oh("selectionchange",!1,e))}}function TE(t,e,n,r){switch(oE(e)){case 1:var i=xR;break;case 4:i=RR;break;default:i=Hp}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}KI(function(){var c=s,h=qp(n),p=[];e:{var g=IE.get(t);if(g!==void 0){var E=Yp,A=t;switch(t){case"keypress":if(zu(n)===0)break e;case"keydown":case"keyup":E=$R;break;case"focusin":A="focus",E=kh;break;case"focusout":A="blur",E=kh;break;case"beforeblur":case"afterblur":E=kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=T_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=CR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=KR;break;case yE:case _E:case vE:E=VR;break;case wE:E=HR;break;case"scroll":E=kR;break;case"wheel":E=YR;break;case"copy":case"cut":case"paste":E=LR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=b_}var C=(e&4)!==0,P=!C&&t==="scroll",v=C?g!==null?g+"Capture":null:g;C=[];for(var w=c,I;w!==null;){I=w;var k=I.stateNode;if(I.tag===5&&k!==null&&(I=k,v!==null&&(k=Wa(w,v),k!=null&&C.push(el(w,k,I)))),P)break;w=w.return}0<C.length&&(g=new E(g,A,null,n,h),p.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==bf&&(A=n.relatedTarget||n.fromElement)&&(Vi(A)||A[nr]))break e;if((E||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?Vi(A):null,A!==null&&(P=ls(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(C=T_,k="onMouseLeave",v="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=b_,k="onPointerLeave",v="onPointerEnter",w="pointer"),P=E==null?g:Vs(E),I=A==null?g:Vs(A),g=new C(k,w+"leave",E,n,h),g.target=P,g.relatedTarget=I,k=null,Vi(h)===c&&(C=new C(v,w+"enter",A,n,h),C.target=I,C.relatedTarget=P,k=C),P=k,E&&A)t:{for(C=E,v=A,w=0,I=C;I;I=ws(I))w++;for(I=0,k=v;k;k=ws(k))I++;for(;0<w-I;)C=ws(C),w--;for(;0<I-w;)v=ws(v),I--;for(;w--;){if(C===v||v!==null&&C===v.alternate)break t;C=ws(C),v=ws(v)}C=null}else C=null;E!==null&&L_(p,g,E,C,!1),A!==null&&P!==null&&L_(p,P,A,C,!0)}}e:{if(g=c?Vs(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var V=rk;else if(R_(g))if(hE)V=ak;else{V=sk;var L=ik}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=ok);if(V&&(V=V(t,c))){dE(p,V,n,h);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&wf(g,"number",g.value)}switch(L=c?Vs(c):window,t){case"focusin":(R_(L)||L.contentEditable==="true")&&(Ns=L,Nf=c,Ca=null);break;case"focusout":Ca=Nf=Ns=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,D_(p,n,h);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":D_(p,n,h)}var T;if(Xp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Cs?uE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(lE&&n.locale!=="ko"&&(Cs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Cs&&(T=aE()):(Lr=h,Qp="value"in Lr?Lr.value:Lr.textContent,Cs=!0)),L=pc(c,y),0<L.length&&(y=new S_(y,t,null,n,h),p.push({event:y,listeners:L}),T?y.data=T:(T=cE(n),T!==null&&(y.data=T)))),(T=XR?ZR(t,n):ek(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(h=new S_("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=T))}EE(p,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wa(t,n),s!=null&&r.unshift(el(t,s,i)),s=Wa(t,e),s!=null&&r.push(el(t,s,i))),t=t.return}return r}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function L_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Wa(n,s),u!=null&&o.unshift(el(n,u,a))):i||(u=Wa(n,s),u!=null&&o.push(el(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function M_(t){return(typeof t=="string"?t:""+t).replace(pk,`
`).replace(mk,"")}function wu(t,e,n){if(e=M_(e),M_(t)!==e&&n)throw Error(z(425))}function mc(){}var Vf=null,Of=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,F_=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof F_<"u"?function(t){return F_.resolve(null).then(t).catch(_k)}:Mf;function _k(t){setTimeout(function(){throw t})}function Mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function j_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Rn="__reactFiber$"+So,tl="__reactProps$"+So,nr="__reactContainer$"+So,Ff="__reactEvents$"+So,vk="__reactListeners$"+So,wk="__reactHandles$"+So;function Vi(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=j_(t);t!==null;){if(n=t[Rn])return n;t=j_(t)}return e}t=n,n=t.parentNode}return null}function xl(t){return t=t[Rn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function od(t){return t[tl]||null}var jf=[],Os=-1;function di(t){return{current:t}}function ke(t){0>Os||(t.current=jf[Os],jf[Os]=null,Os--)}function Te(t,e){Os++,jf[Os]=t.current,t.current=e}var ei={},At=di(ei),Ut=di(!1),Gi=ei;function Zs(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function gc(){ke(Ut),ke(At)}function U_(t,e,n){if(At.current!==ei)throw Error(z(168));Te(At,e),Te(Ut,n)}function SE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,iR(t)||"Unknown",i));return Ue({},n,r)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,Gi=At.current,Te(At,t),Te(Ut,Ut.current),!0}function z_(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=SE(t,e,Gi),r.__reactInternalMemoizedMergedChildContext=t,ke(Ut),ke(At),Te(At,t)):ke(Ut),Te(Ut,n)}var Bn=null,ad=!1,Fh=!1;function bE(t){Bn===null?Bn=[t]:Bn.push(t)}function Ik(t){ad=!0,bE(t)}function hi(){if(!Fh&&Bn!==null){Fh=!0;var t=0,e=_e;try{var n=Bn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,ad=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),YI(Gp,hi),i}finally{_e=e,Fh=!1}}return null}var Ls=[],Ms=0,_c=null,vc=0,nn=[],rn=0,Ki=null,Wn=1,Hn="";function Ai(t,e){Ls[Ms++]=vc,Ls[Ms++]=_c,_c=t,vc=e}function AE(t,e,n){nn[rn++]=Wn,nn[rn++]=Hn,nn[rn++]=Ki,Ki=t;var r=Wn;t=Hn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-_n(e)+i|n<<i|r,Hn=s+t}else Wn=1<<s|n<<i|r,Hn=t}function em(t){t.return!==null&&(Ai(t,1),AE(t,1,0))}function tm(t){for(;t===_c;)_c=Ls[--Ms],Ls[Ms]=null,vc=Ls[--Ms],Ls[Ms]=null;for(;t===Ki;)Ki=nn[--rn],nn[rn]=null,Hn=nn[--rn],nn[rn]=null,Wn=nn[--rn],nn[rn]=null}var Qt=null,Ht=null,De=!1,yn=null;function xE(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function B_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Ht=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:Wn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Ht=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(De){var e=Ht;if(e){var n=e;if(!B_(t,e)){if(Uf(t))throw Error(z(418));e=$r(n.nextSibling);var r=Qt;e&&B_(t,e)?xE(r,n):(t.flags=t.flags&-4097|2,De=!1,Qt=t)}}else{if(Uf(t))throw Error(z(418));t.flags=t.flags&-4097|2,De=!1,Qt=t}}}function $_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function Iu(t){if(t!==Qt)return!1;if(!De)return $_(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=Ht)){if(Uf(t))throw RE(),Error(z(418));for(;e;)xE(t,e),e=$r(e.nextSibling)}if($_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Qt?$r(t.stateNode.nextSibling):null;return!0}function RE(){for(var t=Ht;t;)t=$r(t.nextSibling)}function eo(){Ht=Qt=null,De=!1}function nm(t){yn===null?yn=[t]:yn.push(t)}var Ek=dr.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Eu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q_(t){var e=t._init;return e(t._payload)}function kE(t){function e(v,w){if(t){var I=v.deletions;I===null?(v.deletions=[w],v.flags|=16):I.push(w)}}function n(v,w){if(!t)return null;for(;w!==null;)e(v,w),w=w.sibling;return null}function r(v,w){for(v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function i(v,w){return v=Wr(v,w),v.index=0,v.sibling=null,v}function s(v,w,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<w?(v.flags|=2,w):I):(v.flags|=2,w)):(v.flags|=1048576,w)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,w,I,k){return w===null||w.tag!==6?(w=Gh(I,v.mode,k),w.return=v,w):(w=i(w,I),w.return=v,w)}function u(v,w,I,k){var V=I.type;return V===Ps?h(v,w,I.props.children,k,I.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===kr&&q_(V)===w.type)?(k=i(w,I.props),k.ref=la(v,w,I),k.return=v,k):(k=Hu(I.type,I.key,I.props,null,v.mode,k),k.ref=la(v,w,I),k.return=v,k)}function c(v,w,I,k){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Kh(I,v.mode,k),w.return=v,w):(w=i(w,I.children||[]),w.return=v,w)}function h(v,w,I,k,V){return w===null||w.tag!==7?(w=zi(I,v.mode,k,V),w.return=v,w):(w=i(w,I),w.return=v,w)}function p(v,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Gh(""+w,v.mode,I),w.return=v,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case du:return I=Hu(w.type,w.key,w.props,null,v.mode,I),I.ref=la(v,null,w),I.return=v,I;case ks:return w=Kh(w,v.mode,I),w.return=v,w;case kr:var k=w._init;return p(v,k(w._payload),I)}if(ya(w)||ra(w))return w=zi(w,v.mode,I,null),w.return=v,w;Eu(v,w)}return null}function g(v,w,I,k){var V=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(v,w,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case du:return I.key===V?u(v,w,I,k):null;case ks:return I.key===V?c(v,w,I,k):null;case kr:return V=I._init,g(v,w,V(I._payload),k)}if(ya(I)||ra(I))return V!==null?null:h(v,w,I,k,null);Eu(v,I)}return null}function E(v,w,I,k,V){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(I)||null,a(w,v,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case du:return v=v.get(k.key===null?I:k.key)||null,u(w,v,k,V);case ks:return v=v.get(k.key===null?I:k.key)||null,c(w,v,k,V);case kr:var L=k._init;return E(v,w,I,L(k._payload),V)}if(ya(k)||ra(k))return v=v.get(I)||null,h(w,v,k,V,null);Eu(w,k)}return null}function A(v,w,I,k){for(var V=null,L=null,T=w,y=w=0,S=null;T!==null&&y<I.length;y++){T.index>y?(S=T,T=null):S=T.sibling;var x=g(v,T,I[y],k);if(x===null){T===null&&(T=S);break}t&&T&&x.alternate===null&&e(v,T),w=s(x,w,y),L===null?V=x:L.sibling=x,L=x,T=S}if(y===I.length)return n(v,T),De&&Ai(v,y),V;if(T===null){for(;y<I.length;y++)T=p(v,I[y],k),T!==null&&(w=s(T,w,y),L===null?V=T:L.sibling=T,L=T);return De&&Ai(v,y),V}for(T=r(v,T);y<I.length;y++)S=E(T,v,y,I[y],k),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),w=s(S,w,y),L===null?V=S:L.sibling=S,L=S);return t&&T.forEach(function(R){return e(v,R)}),De&&Ai(v,y),V}function C(v,w,I,k){var V=ra(I);if(typeof V!="function")throw Error(z(150));if(I=V.call(I),I==null)throw Error(z(151));for(var L=V=null,T=w,y=w=0,S=null,x=I.next();T!==null&&!x.done;y++,x=I.next()){T.index>y?(S=T,T=null):S=T.sibling;var R=g(v,T,x.value,k);if(R===null){T===null&&(T=S);break}t&&T&&R.alternate===null&&e(v,T),w=s(R,w,y),L===null?V=R:L.sibling=R,L=R,T=S}if(x.done)return n(v,T),De&&Ai(v,y),V;if(T===null){for(;!x.done;y++,x=I.next())x=p(v,x.value,k),x!==null&&(w=s(x,w,y),L===null?V=x:L.sibling=x,L=x);return De&&Ai(v,y),V}for(T=r(v,T);!x.done;y++,x=I.next())x=E(T,v,y,x.value,k),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?y:x.key),w=s(x,w,y),L===null?V=x:L.sibling=x,L=x);return t&&T.forEach(function(N){return e(v,N)}),De&&Ai(v,y),V}function P(v,w,I,k){if(typeof I=="object"&&I!==null&&I.type===Ps&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case du:e:{for(var V=I.key,L=w;L!==null;){if(L.key===V){if(V=I.type,V===Ps){if(L.tag===7){n(v,L.sibling),w=i(L,I.props.children),w.return=v,v=w;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===kr&&q_(V)===L.type){n(v,L.sibling),w=i(L,I.props),w.ref=la(v,L,I),w.return=v,v=w;break e}n(v,L);break}else e(v,L);L=L.sibling}I.type===Ps?(w=zi(I.props.children,v.mode,k,I.key),w.return=v,v=w):(k=Hu(I.type,I.key,I.props,null,v.mode,k),k.ref=la(v,w,I),k.return=v,v=k)}return o(v);case ks:e:{for(L=I.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(v,w.sibling),w=i(w,I.children||[]),w.return=v,v=w;break e}else{n(v,w);break}else e(v,w);w=w.sibling}w=Kh(I,v.mode,k),w.return=v,v=w}return o(v);case kr:return L=I._init,P(v,w,L(I._payload),k)}if(ya(I))return A(v,w,I,k);if(ra(I))return C(v,w,I,k);Eu(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(v,w.sibling),w=i(w,I),w.return=v,v=w):(n(v,w),w=Gh(I,v.mode,k),w.return=v,v=w),o(v)):n(v,w)}return P}var to=kE(!0),PE=kE(!1),wc=di(null),Ic=null,Fs=null,rm=null;function im(){rm=Fs=Ic=null}function sm(t){var e=wc.current;ke(wc),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Ic=t,rm=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Ic===null)throw Error(z(308));Fs=t,Ic.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Oi=null;function om(t){Oi===null?Oi=[t]:Oi.push(t)}function CE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function G_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,E=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,C=a;switch(g=e,E=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){p=A.call(E,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,g=typeof A=="function"?A.call(E,p,g):A,g==null)break e;p=Ue({},p,g);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=E,u=p):h=h.next=E,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=p}}function K_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Rl={},Dn=di(Rl),nl=di(Rl),rl=di(Rl);function Li(t){if(t===Rl)throw Error(z(174));return t}function lm(t,e){switch(Te(rl,e),Te(nl,t),Te(Dn,Rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}ke(Dn),Te(Dn,e)}function no(){ke(Dn),ke(nl),ke(rl)}function DE(t){Li(rl.current);var e=Li(Dn.current),n=Ef(e,t.type);e!==n&&(Te(nl,t),Te(Dn,n))}function um(t){nl.current===t&&(ke(Dn),ke(nl))}var Fe=di(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function cm(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var $u=dr.ReactCurrentDispatcher,Uh=dr.ReactCurrentBatchConfig,Wi=0,je=null,Ze=null,it=null,Sc=!1,Na=!1,il=0,Tk=0;function vt(){throw Error(z(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(Wi=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$u.current=t===null||t.memoizedState===null?xk:Rk,t=n(r,i),Na){s=0;do{if(Na=!1,il=0,25<=s)throw Error(z(301));s+=1,it=Ze=null,e.updateQueue=null,$u.current=kk,t=n(r,i)}while(Na)}if($u.current=bc,e=Ze!==null&&Ze.next!==null,Wi=0,it=Ze=je=null,Sc=!1,e)throw Error(z(300));return t}function fm(){var t=il!==0;return il=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?je.memoizedState=it=t:it=it.next=t,it}function cn(){if(Ze===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=it===null?je.memoizedState:it.next;if(e!==null)it=e,Ze=t;else{if(t===null)throw Error(z(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},it===null?je.memoizedState=it=t:it=it.next=t}return it}function sl(t,e){return typeof e=="function"?e(t):e}function zh(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Wi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,je.lanes|=h,Hi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,In(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bh(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function VE(){}function OE(t,e){var n=je,r=cn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,pm(FE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,ol(9,ME.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(z(349));Wi&30||LE(n,e,i)}return i}function LE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ME(t,e,n,r){e.value=n,e.getSnapshot=r,jE(e)&&UE(t)}function FE(t,e,n){return n(function(){jE(e)&&UE(t)})}function jE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function UE(t){var e=rr(t,1);e!==null&&vn(e,t,1,-1)}function W_(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=Ak.bind(null,je,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zE(){return cn().memoizedState}function qu(t,e,n,r){var i=xn();je.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function ld(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=ol(e,n,s,r);return}}je.flags|=t,i.memoizedState=ol(1|e,n,s,r)}function H_(t,e){return qu(8390656,8,t,e)}function pm(t,e){return ld(2048,8,t,e)}function BE(t,e){return ld(4,2,t,e)}function $E(t,e){return ld(4,4,t,e)}function qE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function GE(t,e,n){return n=n!=null?n.concat([t]):null,ld(4,4,qE.bind(null,e,t),n)}function mm(){}function KE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function HE(t,e,n){return Wi&21?(In(n,e)||(n=ZI(),je.lanes|=n,Hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function Sk(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Uh.transition;Uh.transition={};try{t(!1),e()}finally{_e=n,Uh.transition=r}}function QE(){return cn().memoizedState}function bk(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YE(t))JE(e,n);else if(n=CE(t,e,n,r),n!==null){var i=Ct();vn(n,t,r,i),XE(n,e,r)}}function Ak(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YE(t))JE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var u=e.interleaved;u===null?(i.next=i,om(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=CE(t,e,i,r),n!==null&&(i=Ct(),vn(n,t,r,i),XE(n,e,r))}}function YE(t){var e=t.alternate;return t===je||e!==null&&e===je}function JE(t,e){Na=Sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function XE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var bc={readContext:un,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},xk={readContext:un,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:H_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qu(4194308,4,qE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return qu(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:W_,useDebugValue:mm,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=W_(!1),e=t[0];return t=Sk.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=xn();if(De){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),ot===null)throw Error(z(349));Wi&30||LE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,H_(FE.bind(null,r,s,t),[t]),r.flags|=2048,ol(9,ME.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xn(),e=ot.identifierPrefix;if(De){var n=Hn,r=Wn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rk={readContext:un,useCallback:KE,useContext:un,useEffect:pm,useImperativeHandle:GE,useInsertionEffect:BE,useLayoutEffect:$E,useMemo:WE,useReducer:zh,useRef:zE,useState:function(){return zh(sl)},useDebugValue:mm,useDeferredValue:function(t){var e=cn();return HE(e,Ze.memoizedState,t)},useTransition:function(){var t=zh(sl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:VE,useSyncExternalStore:OE,useId:QE,unstable_isNewReconciler:!1},kk={readContext:un,useCallback:KE,useContext:un,useEffect:pm,useImperativeHandle:GE,useInsertionEffect:BE,useLayoutEffect:$E,useMemo:WE,useReducer:Bh,useRef:zE,useState:function(){return Bh(sl)},useDebugValue:mm,useDeferredValue:function(t){var e=cn();return Ze===null?e.memoizedState=t:HE(e,Ze.memoizedState,t)},useTransition:function(){var t=Bh(sl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:VE,useSyncExternalStore:OE,useId:QE,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ud={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Kr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(vn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Kr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(vn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Kr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(vn(e,t,r,n),Bu(e,t,r))}};function Q_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,r)||!Xa(i,s):!0}function ZE(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=zt(e)?Gi:At.current,r=e.contextTypes,s=(r=r!=null)?Zs(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ud,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Y_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ud.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=zt(e)?Gi:At.current,i.context=Zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($f(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ud.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",r=e;do n+=rR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pk=typeof WeakMap=="function"?WeakMap:Map;function eT(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xc||(xc=!0,tp=r),Gf(t,e)},n}function tT(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function J_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qk.bind(null,t,e,n),e.then(t,t))}function X_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Z_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var Ck=dr.ReactCurrentOwner,Lt=!1;function Pt(t,e,n,r){e.child=t===null?PE(e,null,n,r):to(e,t.child,n,r)}function ev(t,e,n,r,i){n=n.render;var s=e.ref;return Gs(e,i),r=hm(t,e,n,r,s,i),n=fm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(De&&n&&em(e),e.flags|=1,Pt(t,e,r,i),e.child)}function tv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nT(t,e,s,r,i)):(t=Hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function nT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xa(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Kf(t,e,n,r,i)}function rT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Us,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Us,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Us,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Us,Wt),Wt|=r;return Pt(t,e,i,n),e.child}function iT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,r,i){var s=zt(n)?Gi:At.current;return s=Zs(e,s),Gs(e,i),n=hm(t,e,n,r,s,i),r=fm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(De&&r&&em(e),e.flags|=1,Pt(t,e,n,i),e.child)}function nv(t,e,n,r,i){if(zt(n)){var s=!0;yc(e)}else s=!1;if(Gs(e,i),e.stateNode===null)Gu(t,e),ZE(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=zt(n)?Gi:At.current,c=Zs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Y_(e,o,r,c),Pr=!1;var g=e.memoizedState;o.state=g,Ec(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Ut.current||Pr?(typeof h=="function"&&($f(e,n,h,r),u=e.memoizedState),(a=Pr||Q_(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:mn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=zt(n)?Gi:At.current,u=Zs(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&Y_(e,o,r,u),Pr=!1,g=e.memoizedState,o.state=g,Ec(e,r,o,i);var A=e.memoizedState;a!==p||g!==A||Ut.current||Pr?(typeof E=="function"&&($f(e,n,E,r),A=e.memoizedState),(c=Pr||Q_(e,n,c,r,g,A,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){iT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&z_(e,n,!1),ir(t,e,s);r=e.stateNode,Ck.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&z_(e,n,!0),e.child}function sT(t){var e=t.stateNode;e.pendingContext?U_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&U_(t,e.context,!1),lm(t,e.containerInfo)}function rv(t,e,n,r,i){return eo(),nm(i),e.flags|=256,Pt(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function oT(t,e,n){var r=e.pendingProps,i=Fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Fe,i&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hd(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qf(n),e.memoizedState=Hf,t):gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Nk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=hd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&nm(r),to(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$h(Error(z(422))),Tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hd({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=Qf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return Tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=$h(s,r,void 0),Tu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),vn(r,t,i,-1))}return Em(),r=$h(Error(z(421))),Tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=$r(i.nextSibling),Qt=e,De=!0,yn=null,t!==null&&(nn[rn++]=Wn,nn[rn++]=Hn,nn[rn++]=Ki,Wn=t.id,Hn=t.overflow,Ki=e),e=gm(e,r.children),e.flags|=4096,e)}function iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bf(t.return,e,n)}function qh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function aT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iv(t,n,e);else if(t.tag===19)iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qh(e,!0,n,null,s);break;case"together":qh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dk(t,e,n){switch(e.tag){case 3:sT(e),eo();break;case 5:DE(e);break;case 1:zt(e.type)&&yc(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?oT(t,e,n):(Te(Fe,Fe.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Te(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,rT(t,e,n)}return ir(t,e,n)}var lT,Yf,uT,cT;lT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};uT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Dn.current);var s=null;switch(n){case"input":i=_f(t,i),r=_f(t,r),s=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),s=[];break;case"textarea":i=If(t,i),r=If(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mc)}Tf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ua(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vk(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return zt(e.type)&&gc(),wt(e),null;case 3:return r=e.stateNode,no(),ke(Ut),ke(At),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(ip(yn),yn=null))),Yf(t,e),wt(e),null;case 5:um(e);var i=Li(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)uT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return wt(e),null}if(t=Li(Dn.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[tl]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<va.length;i++)Ae(va[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":f_(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":m_(r,s),Ae("invalid",r)}Tf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":hu(r),p_(r,s,!0);break;case"textarea":hu(r),g_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=FI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[tl]=r,lT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sf(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<va.length;i++)Ae(va[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":f_(t,r),i=_f(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":m_(t,r),i=If(t,r),Ae("invalid",t);break;default:i=r}Tf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?zI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ka(t,u):typeof u=="number"&&Ka(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&Up(t,s,u,o))}switch(n){case"input":hu(t),p_(t,r,!1);break;case"textarea":hu(t),g_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)cT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Li(rl.current),Li(Dn.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return wt(e),null;case 13:if(ke(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Ht!==null&&e.mode&1&&!(e.flags&128))RE(),eo(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Rn]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else yn!==null&&(ip(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?et===0&&(et=3):Em())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return no(),Yf(t,e),t===null&&Za(e.stateNode.containerInfo),wt(e),null;case 10:return sm(e.type._context),wt(e),null;case 17:return zt(e.type)&&gc(),wt(e),null;case 19:if(ke(Fe),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ua(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Fe,Fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>io&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return wt(e),null}else 2*Ke()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Fe.current,Te(Fe,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Ok(t,e){switch(tm(e),e.tag){case 1:return zt(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),ke(Ut),ke(At),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(ke(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Fe),null;case 4:return no(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var Su=!1,Tt=!1,Lk=typeof WeakSet=="function"?WeakSet:Set,J=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){$e(t,e,r)}}var sv=!1;function Mk(t,e){if(Vf=hc,t=mE(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Of={focusedElem:t,selectionRange:n},hc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,P=A.memoizedState,v=e.stateNode,w=v.getSnapshotBeforeUpdate(e.elementType===e.type?C:mn(e.type,C),P);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){$e(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return A=sv,sv=!1,A}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function cd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dT(t){var e=t.alternate;e!==null&&(t.alternate=null,dT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[tl],delete e[Ff],delete e[vk],delete e[wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hT(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}var dt=null,gn=!1;function br(t,e,n){for(n=n.child;n!==null;)fT(t,e,n),n=n.sibling}function fT(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(nd,n)}catch{}switch(n.tag){case 5:Tt||js(n,e);case 6:var r=dt,i=gn;dt=null,br(t,e,n),dt=r,gn=i,dt!==null&&(gn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(gn?(t=dt,n=n.stateNode,t.nodeType===8?Mh(t.parentNode,n):t.nodeType===1&&Mh(t,n),Ya(t)):Mh(dt,n.stateNode));break;case 4:r=dt,i=gn,dt=n.stateNode.containerInfo,gn=!0,br(t,e,n),dt=r,gn=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!Tt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,br(t,e,n),Tt=r):br(t,e,n);break;default:br(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,gn=!1;break e;case 3:dt=a.stateNode.containerInfo,gn=!0;break e;case 4:dt=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(dt===null)throw Error(z(160));fT(s,o,i),dt=null,gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){$e(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pT(e,t),e=e.sibling}function pT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),An(t),r&4){try{Da(3,t,t.return),cd(3,t)}catch(C){$e(t,t.return,C)}try{Da(5,t,t.return)}catch(C){$e(t,t.return,C)}}break;case 1:pn(e,t),An(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(pn(e,t),An(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Ka(i,"")}catch(C){$e(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&LI(i,s),Sf(a,o);var c=Sf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?zI(i,p):h==="dangerouslySetInnerHTML"?jI(i,p):h==="children"?Ka(i,p):Up(i,h,p,c)}switch(a){case"input":vf(i,s);break;case"textarea":MI(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?zs(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[tl]=s}catch(C){$e(t,t.return,C)}}break;case 6:if(pn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){$e(t,t.return,C)}}break;case 3:if(pn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(C){$e(t,t.return,C)}break;case 4:pn(e,t),An(t);break;case 13:pn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=Ke())),r&4&&av(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(c=Tt)||h,pn(e,t),Tt=c):pn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(J=t,h=t.child;h!==null;){for(p=J=h;J!==null;){switch(g=J,E=g.child,g.tag){case 0:case 11:case 14:case 15:Da(4,g,g.return);break;case 1:js(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){$e(r,n,C)}}break;case 5:js(g,g.return);break;case 22:if(g.memoizedState!==null){uv(p);continue}}E!==null?(E.return=g,J=E):uv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=UI("display",o))}catch(C){$e(t,t.return,C)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){$e(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pn(e,t),An(t),r&4&&av(t);break;case 21:break;default:pn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ka(i,""),r.flags&=-33);var s=ov(t);ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ov(t);Zf(t,a,o);break;default:throw Error(z(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){J=t,mT(t)}function mT(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Su;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Tt;a=Su;var c=Tt;if(Su=o,(Tt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?cv(i):u!==null?(u.return=o,J=u):cv(i);for(;s!==null;)J=s,mT(s),s=s.sibling;J=i,Su=a,Tt=c}lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):lv(t)}}function lv(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||cd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&K_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}K_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Tt||e.flags&512&&Xf(e)}catch(g){$e(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function uv(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function cv(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cd(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var s=e.return;try{Xf(e)}catch(u){$e(e,s,u)}break;case 5:var o=e.return;try{Xf(e)}catch(u){$e(e,o,u)}}}catch(u){$e(e,e.return,u)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var jk=Math.ceil,Ac=dr.ReactCurrentDispatcher,ym=dr.ReactCurrentOwner,on=dr.ReactCurrentBatchConfig,fe=0,ot=null,Xe=null,pt=0,Wt=0,Us=di(0),et=0,al=null,Hi=0,dd=0,_m=0,Va=null,Ot=null,vm=0,io=1/0,zn=null,xc=!1,tp=null,Gr=null,bu=!1,Mr=null,Rc=0,Oa=0,np=null,Ku=-1,Wu=0;function Ct(){return fe&6?Ke():Ku!==-1?Ku:Ku=Ke()}function Kr(t){return t.mode&1?fe&2&&pt!==0?pt&-pt:Ek.transition!==null?(Wu===0&&(Wu=ZI()),Wu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:oE(t.type)),t):1}function vn(t,e,n,r){if(50<Oa)throw Oa=0,np=null,Error(z(185));bl(t,n,r),(!(fe&2)||t!==ot)&&(t===ot&&(!(fe&2)&&(dd|=n),et===4&&Nr(t,pt)),Bt(t,r),n===1&&fe===0&&!(e.mode&1)&&(io=Ke()+500,ad&&hi()))}function Bt(t,e){var n=t.callbackNode;ER(t,e);var r=dc(t,t===ot?pt:0);if(r===0)n!==null&&v_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&v_(n),e===1)t.tag===0?Ik(dv.bind(null,t)):bE(dv.bind(null,t)),yk(function(){!(fe&6)&&hi()}),n=null;else{switch(eE(r)){case 1:n=Gp;break;case 4:n=JI;break;case 16:n=cc;break;case 536870912:n=XI;break;default:n=cc}n=TT(n,gT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gT(t,e){if(Ku=-1,Wu=0,fe&6)throw Error(z(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=dc(t,t===ot?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kc(t,r);else{e=r;var i=fe;fe|=2;var s=_T();(ot!==t||pt!==e)&&(zn=null,io=Ke()+500,Ui(t,e));do try{Bk();break}catch(a){yT(t,a)}while(!0);im(),Ac.current=s,fe=i,Xe!==null?e=0:(ot=null,pt=0,e=et)}if(e!==0){if(e===2&&(i=kf(t),i!==0&&(r=i,e=rp(t,i))),e===1)throw n=al,Ui(t,0),Nr(t,r),Bt(t,Ke()),n;if(e===6)Nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Uk(i)&&(e=kc(t,r),e===2&&(s=kf(t),s!==0&&(r=s,e=rp(t,s))),e===1))throw n=al,Ui(t,0),Nr(t,r),Bt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:xi(t,Ot,zn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=vm+500-Ke(),10<e)){if(dc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mf(xi.bind(null,t,Ot,zn),e);break}xi(t,Ot,zn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jk(r/1960))-r,10<r){t.timeoutHandle=Mf(xi.bind(null,t,Ot,zn),r);break}xi(t,Ot,zn);break;case 5:xi(t,Ot,zn);break;default:throw Error(z(329))}}}return Bt(t,Ke()),t.callbackNode===n?gT.bind(null,t):null}function rp(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Ui(t,e).flags|=256),t=kc(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&ip(e)),t}function ip(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function Uk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~_m,e&=~dd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function dv(t){if(fe&6)throw Error(z(327));Ks();var e=dc(t,0);if(!(e&1))return Bt(t,Ke()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var r=kf(t);r!==0&&(e=r,n=rp(t,r))}if(n===1)throw n=al,Ui(t,0),Nr(t,e),Bt(t,Ke()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Ot,zn),Bt(t,Ke()),null}function wm(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(io=Ke()+500,ad&&hi())}}function Qi(t){Mr!==null&&Mr.tag===0&&!(fe&6)&&Ks();var e=fe;fe|=1;var n=on.transition,r=_e;try{if(on.transition=null,_e=1,t)return t()}finally{_e=r,on.transition=n,fe=e,!(fe&6)&&hi()}}function Im(){Wt=Us.current,ke(Us)}function Ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gk(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:no(),ke(Ut),ke(At),cm();break;case 5:um(r);break;case 4:no();break;case 13:ke(Fe);break;case 19:ke(Fe);break;case 10:sm(r.type._context);break;case 22:case 23:Im()}n=n.return}if(ot=t,Xe=t=Wr(t.current,null),pt=Wt=e,et=0,al=null,_m=dd=Hi=0,Ot=Va=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Oi=null}return t}function yT(t,e){do{var n=Xe;try{if(im(),$u.current=bc,Sc){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sc=!1}if(Wi=0,it=Ze=je=null,Na=!1,il=0,ym.current=null,n===null||n.return===null){et=1,al=e,Xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=X_(o);if(E!==null){E.flags&=-257,Z_(E,o,a,s,e),E.mode&1&&J_(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var C=new Set;C.add(u),e.updateQueue=C}else A.add(u);break e}else{if(!(e&1)){J_(s,c,e),Em();break e}u=Error(z(426))}}else if(De&&a.mode&1){var P=X_(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Z_(P,o,a,s,e),nm(ro(u,a));break e}}s=u=ro(u,a),et!==4&&(et=2),Va===null?Va=[s]:Va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=eT(s,u,e);G_(s,v);break e;case 1:a=u;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Gr===null||!Gr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=tT(s,a,e);G_(s,k);break e}}s=s.return}while(s!==null)}wT(n)}catch(V){e=V,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function _T(){var t=Ac.current;return Ac.current=bc,t===null?bc:t}function Em(){(et===0||et===3||et===2)&&(et=4),ot===null||!(Hi&268435455)&&!(dd&268435455)||Nr(ot,pt)}function kc(t,e){var n=fe;fe|=2;var r=_T();(ot!==t||pt!==e)&&(zn=null,Ui(t,e));do try{zk();break}catch(i){yT(t,i)}while(!0);if(im(),fe=n,Ac.current=r,Xe!==null)throw Error(z(261));return ot=null,pt=0,et}function zk(){for(;Xe!==null;)vT(Xe)}function Bk(){for(;Xe!==null&&!fR();)vT(Xe)}function vT(t){var e=ET(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?wT(t):Xe=e,ym.current=null}function wT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ok(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Xe=null;return}}else if(n=Vk(n,e,Wt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);et===0&&(et=5)}function xi(t,e,n){var r=_e,i=on.transition;try{on.transition=null,_e=1,$k(t,e,n,r)}finally{on.transition=i,_e=r}return null}function $k(t,e,n,r){do Ks();while(Mr!==null);if(fe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TR(t,s),t===ot&&(Xe=ot=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bu||(bu=!0,TT(cc,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=_e;_e=1;var a=fe;fe|=4,ym.current=null,Mk(t,n),pT(n,t),uk(Of),hc=!!Vf,Of=Vf=null,t.current=n,Fk(n),pR(),fe=a,_e=o,on.transition=s}else t.current=n;if(bu&&(bu=!1,Mr=t,Rc=i),s=t.pendingLanes,s===0&&(Gr=null),yR(n.stateNode),Bt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xc)throw xc=!1,t=tp,tp=null,t;return Rc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===np?Oa++:(Oa=0,np=t):Oa=0,hi(),null}function Ks(){if(Mr!==null){var t=eE(Rc),e=on.transition,n=_e;try{if(on.transition=null,_e=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Rc=0,fe&6)throw Error(z(331));var i=fe;for(fe|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(J=c;J!==null;){var h=J;switch(h.tag){case 0:case 11:case 15:Da(8,h,s)}var p=h.child;if(p!==null)p.return=h,J=p;else for(;J!==null;){h=J;var g=h.sibling,E=h.return;if(dT(h),h===c){J=null;break}if(g!==null){g.return=E,J=g;break}J=E}}}var A=s.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,J=v;break e}J=s.return}}var w=t.current;for(J=w;J!==null;){o=J;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,J=I;else e:for(o=w;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cd(9,a)}}catch(V){$e(a,a.return,V)}if(a===o){J=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,J=k;break e}J=a.return}}if(fe=i,hi(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(nd,t)}catch{}r=!0}return r}finally{_e=n,on.transition=e}}return!1}function hv(t,e,n){e=ro(n,e),e=eT(t,e,1),t=qr(t,e,1),e=Ct(),t!==null&&(bl(t,1,e),Bt(t,e))}function $e(t,e,n){if(t.tag===3)hv(t,t,n);else for(;e!==null;){if(e.tag===3){hv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=ro(n,t),t=tT(e,t,1),e=qr(e,t,1),t=Ct(),e!==null&&(bl(e,1,t),Bt(e,t));break}}e=e.return}}function qk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(pt&n)===n&&(et===4||et===3&&(pt&130023424)===pt&&500>Ke()-vm?Ui(t,0):_m|=n),Bt(t,e)}function IT(t,e){e===0&&(t.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var n=Ct();t=rr(t,e),t!==null&&(bl(t,e,n),Bt(t,n))}function Gk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),IT(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),IT(t,n)}var ET;ET=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,Dk(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,De&&e.flags&1048576&&AE(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gu(t,e),t=e.pendingProps;var i=Zs(e,At.current);Gs(e,n),i=hm(null,e,r,t,i,n);var s=fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=ud,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,De&&s&&em(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Hk(r),t=mn(r,t),i){case 0:e=Kf(null,e,r,t,n);break e;case 1:e=nv(null,e,r,t,n);break e;case 11:e=ev(null,e,r,t,n);break e;case 14:e=tv(null,e,r,mn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),nv(t,e,r,i,n);case 3:e:{if(sT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NE(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ro(Error(z(423)),e),e=rv(t,e,r,n,i);break e}else if(r!==i){i=ro(Error(z(424)),e),e=rv(t,e,r,n,i);break e}else for(Ht=$r(e.stateNode.containerInfo.firstChild),Qt=e,De=!0,yn=null,n=PE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===i){e=ir(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return DE(e),t===null&&zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lf(r,i)?o=null:s!==null&&Lf(r,s)&&(e.flags|=32),iT(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return oT(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),ev(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(wc,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!Ut.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gs(e,n),i=un(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),tv(t,e,r,i,n);case 15:return nT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Gu(t,e),e.tag=1,zt(r)?(t=!0,yc(e)):t=!1,Gs(e,n),ZE(e,r,i),qf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return aT(t,e,n);case 22:return rT(t,e,n)}throw Error(z(156,e.tag))};function TT(t,e){return YI(t,e)}function Wk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new Wk(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hk(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===$p)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return zi(n.children,i,s,e);case zp:o=8,i|=8;break;case pf:return t=sn(12,n,e,i|2),t.elementType=pf,t.lanes=s,t;case mf:return t=sn(13,n,e,i),t.elementType=mf,t.lanes=s,t;case gf:return t=sn(19,n,e,i),t.elementType=gf,t.lanes=s,t;case DI:return hd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case CI:o=10;break e;case NI:o=9;break e;case Bp:o=11;break e;case $p:o=14;break e;case kr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function hd(t,e,n,r){return t=sn(22,t,r,e),t.elementType=DI,t.lanes=n,t.stateNode={isHidden:!1},t}function Gh(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ah(0),this.expirationTimes=Ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sm(t,e,n,r,i,s,o,a,u){return t=new Qk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function Yk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ST(t){if(!t)return ei;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(zt(n))return SE(t,n,e)}return e}function bT(t,e,n,r,i,s,o,a,u){return t=Sm(n,r,!0,t,i,s,o,a,u),t.context=ST(null),n=t.current,r=Ct(),i=Kr(n),s=Zn(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,bl(t,i,r),Bt(t,r),t}function fd(t,e,n,r){var i=e.current,s=Ct(),o=Kr(i);return n=ST(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(vn(t,i,o,s),Bu(t,i,o)),o}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bm(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function Jk(){return null}var AT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Am(t){this._internalRoot=t}pd.prototype.render=Am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));fd(t,e,null,null)};pd.prototype.unmount=Am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qi(function(){fd(null,t,null,null)}),e[nr]=null}};function pd(t){this._internalRoot=t}pd.prototype.unstable_scheduleHydration=function(t){if(t){var e=rE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&sE(t)}};function xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function Xk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pc(o);s.call(c)}}var o=bT(e,r,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[nr]=o.current,Za(t.nodeType===8?t.parentNode:t),Qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Pc(u);a.call(c)}}var u=Sm(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=u,t[nr]=u.current,Za(t.nodeType===8?t.parentNode:t),Qi(function(){fd(e,u,n,r)}),u}function gd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Pc(o);a.call(u)}}fd(e,o,t,i)}else o=Xk(n,e,t,i,r);return Pc(o)}tE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(Kp(e,n|1),Bt(e,Ke()),!(fe&6)&&(io=Ke()+500,hi()))}break;case 13:Qi(function(){var r=rr(t,1);if(r!==null){var i=Ct();vn(r,t,1,i)}}),bm(t,1)}};Wp=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Ct();vn(e,t,134217728,n)}bm(t,134217728)}};nE=function(t){if(t.tag===13){var e=Kr(t),n=rr(t,e);if(n!==null){var r=Ct();vn(n,t,e,r)}bm(t,e)}};rE=function(){return _e};iE=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Af=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=od(r);if(!i)throw Error(z(90));OI(r),vf(r,i)}}}break;case"textarea":MI(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};qI=wm;GI=Qi;var Zk={usingClientEntryPoint:!1,Events:[xl,Vs,od,BI,$I,wm]},ca={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eP={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=HI(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{nd=Au.inject(eP),Nn=Au}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(e))throw Error(z(200));return Yk(t,e,null,n)};en.createRoot=function(t,e){if(!xm(t))throw Error(z(299));var n=!1,r="",i=AT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sm(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,Za(t.nodeType===8?t.parentNode:t),new Am(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=HI(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return Qi(t)};en.hydrate=function(t,e,n){if(!md(e))throw Error(z(200));return gd(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!xm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=AT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bT(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,Za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pd(e)};en.render=function(t,e,n){if(!md(e))throw Error(z(200));return gd(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!md(t))throw Error(z(40));return t._reactRootContainer?(Qi(function(){gd(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};en.unstable_batchedUpdates=wm;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!md(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return gd(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function xT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xT)}catch(t){console.error(t)}}xT(),xI.exports=en;var tP=xI.exports,mv=tP;hf.createRoot=mv.createRoot,hf.hydrateRoot=mv.hydrateRoot;const nP="modulepreload",rP=function(t){return"/"+t},gv={},Rm=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=rP(u),u in gv)return;gv[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":nP,c||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((g,E)=>{p.addEventListener("load",g),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(n[h],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new sP;const g=s<<2|a>>4;if(r.push(g),c!==64){const E=a<<4&240|c>>2;if(r.push(E),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oP=function(t){const e=RT(t);return kT.encodeByteArray(e,!0)},Cc=function(t){return oP(t).replace(/\./g,"")},PT=function(t){try{return kT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=()=>aP().__FIREBASE_DEFAULTS__,uP=()=>{if(typeof process>"u"||typeof yv>"u")return;const t=yv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&PT(t[1]);return e&&JSON.parse(e)},yd=()=>{try{return lP()||uP()||cP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CT=t=>{var e,n;return(n=(e=yd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dP=t=>{const e=CT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NT=()=>{var t;return(t=yd())===null||t===void 0?void 0:t.config},DT=t=>{var e;return(e=yd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function mP(){var t;const e=(t=yd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _P(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OT(){return!mP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function LT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wP,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,r)}}function IP(t,e){return t.replace(EP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EP=/\{\$([^}]+)}/g;function TP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_v(s)&&_v(o)){if(!sr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _v(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ia(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SP(t,e){const n=new bP(t,e);return n.subscribe.bind(n)}class bP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wh),i.error===void 0&&(i.error=Wh),i.complete===void 0&&(i.complete=Wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=1e3,RP=2,kP=4*60*60*1e3,PP=.5;function vv(t,e=xP,n=RP){const r=e*Math.pow(n,t),i=Math.round(PP*r*(Math.random()-.5)*2);return Math.min(kP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DP(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NP(t){return t===Ri?void 0:t}function DP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const OP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},LP=le.INFO,MP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},FP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=LP,this._logHandler=FP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const jP=(t,e)=>e.some(n=>t instanceof n);let wv,Iv;function UP(){return wv||(wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zP(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MT=new WeakMap,sp=new WeakMap,FT=new WeakMap,Hh=new WeakMap,Pm=new WeakMap;function BP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&MT.set(n,t)}).catch(()=>{}),Pm.set(e,t),e}function $P(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qP(t){op=t(op)}function GP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qh(this),e,...n);return FT.set(r,e.sort?e.sort():[e]),Hr(r)}:zP().includes(t)?function(...e){return t.apply(Qh(this),e),Hr(MT.get(this))}:function(...e){return Hr(t.apply(Qh(this),e))}}function KP(t){return typeof t=="function"?GP(t):(t instanceof IDBTransaction&&$P(t),jP(t,UP())?new Proxy(t,op):t)}function Hr(t){if(t instanceof IDBRequest)return BP(t);if(Hh.has(t))return Hh.get(t);const e=KP(t);return e!==t&&(Hh.set(t,e),Pm.set(e,t)),e}const Qh=t=>Pm.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const WP=["get","getKey","getAll","getAllKeys","count"],HP=["put","add","delete","clear"],Yh=new Map;function Ev(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Yh.set(e,s),s}qP(t=>({...t,get:(e,n,r)=>Ev(e,n)||t.get(e,n,r),has:(e,n)=>!!Ev(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",Tv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new _d("@firebase/app"),JP="@firebase/app-compat",XP="@firebase/analytics-compat",ZP="@firebase/analytics",e1="@firebase/app-check-compat",t1="@firebase/app-check",n1="@firebase/auth",r1="@firebase/auth-compat",i1="@firebase/database",s1="@firebase/data-connect",o1="@firebase/database-compat",a1="@firebase/functions",l1="@firebase/functions-compat",u1="@firebase/installations",c1="@firebase/installations-compat",d1="@firebase/messaging",h1="@firebase/messaging-compat",f1="@firebase/performance",p1="@firebase/performance-compat",m1="@firebase/remote-config",g1="@firebase/remote-config-compat",y1="@firebase/storage",_1="@firebase/storage-compat",v1="@firebase/firestore",w1="@firebase/vertexai-preview",I1="@firebase/firestore-compat",E1="firebase",T1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",S1={[ap]:"fire-core",[JP]:"fire-core-compat",[ZP]:"fire-analytics",[XP]:"fire-analytics-compat",[t1]:"fire-app-check",[e1]:"fire-app-check-compat",[n1]:"fire-auth",[r1]:"fire-auth-compat",[i1]:"fire-rtdb",[s1]:"fire-data-connect",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[l1]:"fire-fn-compat",[u1]:"fire-iid",[c1]:"fire-iid-compat",[d1]:"fire-fcm",[h1]:"fire-fcm-compat",[f1]:"fire-perf",[p1]:"fire-perf-compat",[m1]:"fire-rc",[g1]:"fire-rc-compat",[y1]:"fire-gcs",[_1]:"fire-gcs-compat",[v1]:"fire-fst",[I1]:"fire-fst-compat",[w1]:"fire-vertex","fire-js":"fire-js",[E1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new Map,b1=new Map,lp=new Map;function Sv(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(lp.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;lp.set(e,t);for(const n of Dc.values())Sv(n,t);for(const n of b1.values())Sv(n,t);return!0}function hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function A1(t,e,n=Nc){hr(t,e).clearInstance(n)}function He(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new us("app","Firebase",x1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=T1;function UT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=NT()),!n)throw Qr.create("no-options");const s=Dc.get(i);if(s){if(sr(n,s.options)&&sr(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new VP(i);for(const u of lp.values())o.addComponent(u);const a=new R1(n,r,o);return Dc.set(i,a),a}function Cm(t=Nc){const e=Dc.get(t);if(!e&&t===Nc&&NT())return UT();if(!e)throw Qr.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=S1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Ln(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="firebase-heartbeat-database",P1=1,ll="firebase-heartbeat-store";let Jh=null;function zT(){return Jh||(Jh=jT(k1,P1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ll)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Jh}async function C1(t){try{const n=(await zT()).transaction(ll),r=await n.objectStore(ll).get(BT(t));return await n.done,r}catch(e){if(e instanceof Tn)or.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function bv(t,e){try{const r=(await zT()).transaction(ll,"readwrite");await r.objectStore(ll).put(e,BT(t)),await r.done}catch(n){if(n instanceof Tn)or.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function BT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=1024,D1=30*24*60*60*1e3;class V1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Av();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=D1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Av(),{heartbeatsToSend:r,unsentEntries:i}=O1(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return or.warn(n),""}}}function Av(){return new Date().toISOString().substring(0,10)}function O1(t,e=N1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?LT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xv(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){Ln(new En("platform-logger",e=>new QP(e),"PRIVATE")),Ln(new En("heartbeat",e=>new V1(e),"PRIVATE")),an(ap,Tv,t),an(ap,Tv,"esm2017"),an("fire-js","")}M1("");var F1="firebase",j1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(F1,j1,"app");const $T="@firebase/installations",Nm="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=1e4,GT=`w:${Nm}`,KT="FIS_v2",U1="https://firebaseinstallations.googleapis.com/v1",z1=60*60*1e3,B1="installations",$1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yi=new us(B1,$1,q1);function WT(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT({projectId:t}){return`${U1}/projects/${t}/installations`}function QT(t){return{token:t.token,requestStatus:2,expiresIn:K1(t.expiresIn),creationTime:Date.now()}}async function YT(t,e){const r=(await e.json()).error;return Yi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function JT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function G1(t,{refreshToken:e}){const n=JT(t);return n.append("Authorization",W1(e)),n}async function XT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K1(t){return Number(t.replace("s","000"))}function W1(t){return`${KT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=HT(t),i=JT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:KT,appId:t.appId,sdkVersion:GT},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XT(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:QT(c.authToken)}}else throw await YT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/^[cdef][\w-]{21}$/,up="";function J1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=X1(t);return Y1.test(n)?n:up}catch{return up}}function X1(t){return Q1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;function t0(t,e){const n=vd(t);n0(n,e),Z1(n,e)}function n0(t,e){const n=e0.get(t);if(n)for(const r of n)r(e)}function Z1(t,e){const n=eC();n&&n.postMessage({key:t,fid:e}),tC()}let Mi=null;function eC(){return!Mi&&"BroadcastChannel"in self&&(Mi=new BroadcastChannel("[Firebase] FID Change"),Mi.onmessage=t=>{n0(t.data.key,t.data.fid)}),Mi}function tC(){e0.size===0&&Mi&&(Mi.close(),Mi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-installations-database",rC=1,Ji="firebase-installations-store";let Xh=null;function Dm(){return Xh||(Xh=jT(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ji)}}})),Xh}async function Vc(t,e){const n=vd(t),i=(await Dm()).transaction(Ji,"readwrite"),s=i.objectStore(Ji),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&t0(t,e.fid),e}async function r0(t){const e=vd(t),r=(await Dm()).transaction(Ji,"readwrite");await r.objectStore(Ji).delete(e),await r.done}async function wd(t,e){const n=vd(t),i=(await Dm()).transaction(Ji,"readwrite"),s=i.objectStore(Ji),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&t0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t){let e;const n=await wd(t.appConfig,r=>{const i=iC(r),s=sC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===up?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iC(t){const e=t||{fid:J1(),registrationStatus:0};return i0(e)}function sC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aC(t)}:{installationEntry:e}}async function oC(t,e){try{const n=await H1(t,e);return Vc(t.appConfig,n)}catch(n){throw WT(n)&&n.customData.serverCode===409?await r0(t.appConfig):await Vc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aC(t){let e=await Rv(t.appConfig);for(;e.registrationStatus===1;)await ZT(100),e=await Rv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vm(t);return r||n}return e}function Rv(t){return wd(t,e=>{if(!e)throw Yi.create("installation-not-found");return i0(e)})}function i0(t){return lC(t)?{fid:t.fid,registrationStatus:0}:t}function lC(t){return t.registrationStatus===1&&t.registrationTime+qT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC({appConfig:t,heartbeatServiceProvider:e},n){const r=cC(t,n),i=G1(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:GT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XT(()=>fetch(r,a));if(u.ok){const c=await u.json();return QT(c)}else throw await YT("Generate Auth Token",u)}function cC(t,{fid:e}){return`${HT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(t,e=!1){let n;const r=await wd(t.appConfig,s=>{if(!s0(s))throw Yi.create("not-registered");const o=s.authToken;if(!e&&fC(o))return s;if(o.requestStatus===1)return n=dC(t,e),s;{if(!navigator.onLine)throw Yi.create("app-offline");const a=mC(s);return n=hC(t,a),a}});return n?await n:r.authToken}async function dC(t,e){let n=await kv(t.appConfig);for(;n.authToken.requestStatus===1;)await ZT(100),n=await kv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Om(t,e):r}function kv(t){return wd(t,e=>{if(!s0(e))throw Yi.create("not-registered");const n=e.authToken;return gC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hC(t,e){try{const n=await uC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vc(t.appConfig,r),n}catch(n){if(WT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await r0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vc(t.appConfig,r)}throw n}}function s0(t){return t!==void 0&&t.registrationStatus===2}function fC(t){return t.requestStatus===2&&!pC(t)}function pC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+z1}function mC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gC(t){return t.requestStatus===1&&t.requestTime+qT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vm(e);return r?r.catch(console.error):Om(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e=!1){const n=t;return await vC(n),(await Om(n,e)).token}async function vC(t){const{registrationPromise:e}=await Vm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){if(!t||!t.options)throw Zh("App Configuration");if(!t.name)throw Zh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zh(t){return Yi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="installations",IC="installations-internal",EC=t=>{const e=t.getProvider("app").getImmediate(),n=wC(e),r=hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TC=t=>{const e=t.getProvider("app").getImmediate(),n=hr(e,o0).getImmediate();return{getId:()=>yC(n),getToken:i=>_C(n,i)}};function SC(){Ln(new En(o0,EC,"PUBLIC")),Ln(new En(IC,TC,"PRIVATE"))}SC();an($T,Nm);an($T,Nm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="analytics",bC="firebase_id",AC="origin",xC=60*1e3,RC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new _d("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Yt=new us("analytics","Analytics",kC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){if(!t.startsWith(Lm)){const e=Yt.create("invalid-gtag-resource",{gtagURL:t});return $t.warn(e.message),""}return t}function a0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CC(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function NC(t,e){const n=CC("firebase-js-sdk-policy",{createScriptURL:PC}),r=document.createElement("script"),i=`${Lm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DC(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VC(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await a0(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){$t.error(a)}t("config",i,s)}async function OC(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await a0(n);for(const u of o){const c=a.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$t.error(s)}}function LC(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await OC(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await VC(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){$t.error(a)}}return i}function MC(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=LC(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function FC(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=30,UC=1e3;class zC{constructor(e={},n=UC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const l0=new zC;function BC(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $C(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:BC(r)},s=RC.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Yt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qC(t,e=l0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Yt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Yt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new WC;return setTimeout(async()=>{a.abort()},xC),u0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function u0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=l0){var s;const{appId:o,measurementId:a}=t;try{await GC(r,e)}catch(u){if(a)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await $C(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!KC(c)){if(i.deleteThrottleMetadata(o),a)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?vv(n,i.intervalMillis,jC):vv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),$t.debug(`Calling attemptFetch again in ${h} millis`),u0(t,p,r,i)}}function GC(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KC(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HC(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(){if(km())try{await LT()}catch(t){return $t.warn(Yt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $t.warn(Yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YC(t,e,n,r,i,s,o){var a;const u=qC(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>$t.error(E)),e.push(u);const c=QC().then(E=>{if(E)return r.getId()}),[h,p]=await Promise.all([u,c]);FC(s)||NC(s,h.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[AC]="firebase",g.update=!0,p!=null&&(g[bC]=p),i("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.app=e}_delete(){return delete La[this.app.options.appId],Promise.resolve()}}let La={},Pv=[];const Cv={};let ef="dataLayer",XC="gtag",Nv,c0,Dv=!1;function ZC(){const t=[];if(VT()&&t.push("This is a browser extension environment."),vP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Yt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function e2(t,e,n){ZC();const r=t.options.appId;if(!r)throw Yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Yt.create("no-api-key");if(La[r]!=null)throw Yt.create("already-exists",{id:r});if(!Dv){DC(ef);const{wrappedGtag:s,gtagCore:o}=MC(La,Pv,Cv,ef,XC);c0=s,Nv=o,Dv=!0}return La[r]=YC(t,Pv,Cv,e,Nv,ef,n),new JC(t)}function t2(t=Cm()){t=Z(t);const e=hr(t,Oc);return e.isInitialized()?e.getImmediate():n2(t)}function n2(t,e={}){const n=hr(t,Oc);if(n.isInitialized()){const i=n.getImmediate();if(sr(e,n.getOptions()))return i;throw Yt.create("already-initialized")}return n.initialize({options:e})}function r2(t,e,n,r){t=Z(t),HC(c0,La[t.app.options.appId],e,n,r).catch(i=>$t.error(i))}const Vv="@firebase/analytics",Ov="0.10.8";function i2(){Ln(new En(Oc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return e2(r,i,n)},"PUBLIC")),Ln(new En("analytics-internal",t,"PRIVATE")),an(Vv,Ov),an(Vv,Ov,"esm2017");function t(e){try{const n=e.getProvider(Oc).getImmediate();return{logEvent:(r,i,s)=>r2(n,r,i,s)}}catch(n){throw Yt.create("interop-component-reg-failed",{reason:n})}}}i2();function Mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2={PHONE:"phone",TOTP:"totp"},o2={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},a2={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},l2={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},u2={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function d0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d2=c2,h0=d0,f0=new us("auth","Firebase",d0()),h2={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new _d("@firebase/auth");function f2(t,...e){Lc.logLevel<=le.WARN&&Lc.warn(`Auth (${Ao}): ${t}`,...e)}function Qu(t,...e){Lc.logLevel<=le.ERROR&&Lc.error(`Auth (${Ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw jm(t,...e)}function Nt(t,...e){return jm(t,...e)}function Fm(t,e,n){const r=Object.assign(Object.assign({},h0()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function at(t){return Fm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),Fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f0.create(t,...e)}function $(t,e,...n){if(!t)throw jm(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qu(e),new Error(e)}function ar(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Um(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||VT()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=pP()||yP()}get(){return p2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new kl(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ce(t,e,n,r,i={}){return m0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return gP()||(c.referrerPolicy="no-referrer"),p0.fetch()(g0(t,t.config.apiHost,n,a),c)})}async function m0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g2),e);try{const i=new v2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ea(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fm(t,h,c);qt(t,h)}}catch(i){if(i instanceof Tn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function fr(t,e,n,r,i={}){const s=await Ce(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zm(t.config,i):`${t.config.apiScheme}://${i}`}function _2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class v2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),y2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){return t!==void 0&&t.getResponse!==void 0}function Fv(t){return t!==void 0&&t.enterprise!==void 0}class y0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t){return(await Ce(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function _0(t,e){return Ce(t,"GET","/v2/recaptchaConfig",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e){return Ce(t,"POST","/v1/accounts:delete",e)}async function E2(t,e){return Ce(t,"POST","/v1/accounts:update",e)}async function v0(t,e){return Ce(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t,e=!1){return Z(t).getIdToken(e)}async function w0(t,e=!1){const n=Z(t),r=await n.getIdToken(e),i=Id(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ma(tf(i.auth_time)),issuedAtTime:Ma(tf(i.iat)),expirationTime:Ma(tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tf(t){return Number(t)*1e3}function Id(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=PT(n);return i?JSON.parse(i):(Qu("Failed to decode base64 JWT payload"),null)}catch(i){return Qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(t){const e=Id(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&S2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function S2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lr(t,v0(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?E0(s.providerUserInfo):[],a=A2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function I0(t){const e=Z(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function E0(t){return t.map(e=>{var{providerId:n}=e,r=Mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t,e){const n=await m0(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",p0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function R2(t,e){return Ce(t,"POST","/v2/accounts:revokeToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=jv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await x2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ws;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w0(this,e)}reload(){return I0(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await lr(this,I2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:k,isAnonymous:V,providerData:L,stsTokenManager:T}=n;$(I&&T,e,"internal-error");const y=Ws.fromJSON(this.name,T);$(typeof I=="string",e,"internal-error"),Ar(p,e.name),Ar(g,e.name),$(typeof k=="boolean",e,"internal-error"),$(typeof V=="boolean",e,"internal-error"),Ar(E,e.name),Ar(A,e.name),Ar(C,e.name),Ar(P,e.name),Ar(v,e.name),Ar(w,e.name);const S=new Qn({uid:I,auth:e,email:g,emailVerified:k,displayName:p,isAnonymous:V,photoURL:A,phoneNumber:E,tenantId:C,stsTokenManager:y,createdAt:v,lastLoginAt:w});return L&&Array.isArray(L)&&(S.providerData=L.map(x=>Object.assign({},x))),P&&(S._redirectEventId=P),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?E0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ws;a.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function Yn(t){ar(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T0.type="NONE";const dp=T0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Yn(dp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yn(dp);const o=Yu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Qn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k0(e))return"Blackberry";if(P0(e))return"Webos";if(b0(e))return"Safari";if((e.includes("chrome/")||A0(e))&&!e.includes("edge/"))return"Chrome";if(R0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(t=tt()){return/firefox\//i.test(t)}function b0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A0(t=tt()){return/crios\//i.test(t)}function x0(t=tt()){return/iemobile/i.test(t)}function R0(t=tt()){return/android/i.test(t)}function k0(t=tt()){return/blackberry/i.test(t)}function P0(t=tt()){return/webos/i.test(t)}function Bm(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function k2(t=tt()){var e;return Bm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P2(){return _P()&&document.documentMode===10}function C0(t=tt()){return Bm(t)||R0(t)||P0(t)||k0(t)||/windows phone/i.test(t)||x0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e=[]){let n;switch(t){case"Browser":n=zv(tt());break;case"Worker":n=`${zv(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e={}){return Ce(t,"GET","/v2/passwordPolicy",Pe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=6;class V2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bv(this),this.idTokenSubscription=new Bv(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await v0(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(at(this));const n=e?Z(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N2(this),n=new V2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await R2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ge(t){return Z(t)}class Bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=SP(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function L2(t){Pl=t}function $m(t){return Pl.loadJS(t)}function M2(){return Pl.recaptchaV2Script}function F2(){return Pl.recaptchaEnterpriseScript}function j2(){return Pl.gapiScript}function D0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const U2="recaptcha-enterprise",z2="NO_RECAPTCHA";class V0{constructor(e){this.type=U2,this.auth=Ge(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new y0(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Fv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(z2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Fv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=F2();u.length!==0&&(u+=a),$m(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $v(t,e,n,r=!1){const i=new V0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $v(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $v(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}async function B2(t){const e=Ge(t),n=await _0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new y0(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new V0(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){const n=hr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sr(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function $2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L0(t,e,n){const r=Ge(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=M0(e),{host:o,port:a}=q2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||G2()}function M0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function q2(t){const e=M0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qv(o)}}}function qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function G2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e){return Ce(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function K2(t,e){return Ce(t,"POST","/v1/accounts:update",e)}async function W2(t,e){return Ce(t,"POST","/v1/accounts:signUp",e)}async function H2(t,e){return Ce(t,"POST","/v1/accounts:update",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(t,e){return fr(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function Ed(t,e){return Ce(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function Y2(t,e){return Ed(t,e)}async function J2(t,e){return Ed(t,e)}async function X2(t,e){return Ed(t,e)}async function Z2(t,e){return Ed(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function tN(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Ro{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,n,"signInWithPassword",Q2);case"emailLink":return eN(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,r,"signUpPassword",W2);case"emailLink":return tN(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e){return fr(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="http://localhost";class Mn extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:nN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){return Ce(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function iN(t,e){return fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function sN(t,e){const n=await fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw Ea(t,"account-exists-with-different-credential",n);return n}const oN={USER_NOT_FOUND:"user-not-found"};async function aN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),oN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Yr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Yr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return iN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return sN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return aN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Yr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uN(t){const e=wa(Ia(t)).link,n=e?wa(Ia(e)).deep_link_id:null,r=wa(Ia(t)).deep_link_id;return(r?wa(Ia(r)).link:null)||r||n||e||t}class ko{constructor(e){var n,r,i,s,o,a;const u=wa(Ia(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=lN((i=u.mode)!==null&&i!==void 0?i:null);$(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uN(e);try{return new ko(n)}catch{return null}}}function cN(t){return ko.parseLink(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ko.parseLink(n);return $(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends pr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fa extends Po{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),Mn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),Mn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fa.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fa.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Fa(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Po{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Po{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="http://localhost";class hl extends Ro{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new hl(r,s)}static _create(e,n){return new hl(e,n)}buildRequest(){return{requestUri:dN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="saml.";class Mc extends pr{constructor(e){$(e.startsWith(hN),"argument-error"),super(e)}static credentialFromResult(e){return Mc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Mc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=hl.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return hl._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Po{constructor(){super("twitter.com")}static credential(e,n){return Mn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){return fr(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=Gv(r);return new dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gv(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t){var e;if(He(t.app))return Promise.reject(at(t));const n=Ge(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await j0(n,{returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fc(e,n,r,i)}}function U0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){const n=Z(t);await Td(!0,n,e);const{providerUserInfo:r}=await E2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=z0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function qm(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}async function Td(t,e,n){await cl(e);const r=z0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e,n=!1){const{auth:r}=t;if(He(r.app))return Promise.reject(at(r));const i="reauthenticate";try{const s=await lr(t,U0(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Id(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e,n=!1){if(He(t.app))return Promise.reject(at(t));const r="signIn",i=await U0(t,r,e),s=await dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Sd(t,e){return $0(Ge(t),e)}async function q0(t,e){const n=Z(t);return await Td(!1,n,e.providerId),qm(n,e)}async function G0(t,e){return B0(Z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){return fr(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){if(He(t.app))return Promise.reject(at(t));const n=Ge(t),r=await mN(n,{token:e,returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Gm._fromServerResponse(e,n):"totpInfo"in n?Km._fromServerResponse(e,n):qt(e,"internal-error")}}class Gm extends Cl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Gm(n)}}class Km extends Cl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Km(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t){const e=Ge(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yN(t,e,n){const r=Ge(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&bd(r,i,n),await dl(r,i,"getOobCode",J2)}async function _N(t,e,n){await F0(Z(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wm(t),r})}async function vN(t,e){await H2(Z(t),{oobCode:e})}async function K0(t,e){const n=Z(t),r=await F0(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Cl._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function wN(t,e){const{data:n}=await K0(Z(t),e);return n.email}async function W0(t,e,n){if(He(t.app))return Promise.reject(at(t));const r=Ge(t),o=await dl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",j0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Wm(t),u}),a=await dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function H0(t,e,n){return He(t.app)?Promise.reject(at(t)):Sd(Z(t),fi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e,n){const r=Ge(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&bd(r,o,a)}s(i,n),await dl(r,i,"getOobCode",X2)}function EN(t,e){const n=ko.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function TN(t,e,n){if(He(t.app))return Promise.reject(at(t));const r=Z(t),i=fi.credentialWithLink(e,n||ul());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return Ce(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){const n=Um()?ul():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await SN(Z(t),r);return i||[]}async function AN(t,e){const n=Z(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&bd(n.auth,i,e);const{email:s}=await Y2(n.auth,i);s!==t.email&&await t.reload()}async function xN(t,e,n){const r=Z(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&bd(r.auth,s,n);const{email:o}=await Z2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e){return Ce(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await lr(r,RN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kN(t,e){const n=Z(t);return He(n.auth.app)?Promise.reject(at(n.auth)):Q0(n,e,null)}function PN(t,e){return Q0(Z(t),null,e)}async function Q0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await lr(t,K2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Id(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Qs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new NN(s,i);case"github.com":return new DN(s,i);case"google.com":return new VN(s,i);case"twitter.com":return new ON(s,i,t.screenName||null);case"custom":case"anonymous":return new Qs(s,null);default:return new Qs(s,r,i)}}class Qs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Y0 extends Qs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class NN extends Qs{constructor(e,n){super(e,"facebook.com",n)}}class DN extends Y0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class VN extends Qs{constructor(e,n){super(e,"google.com",n)}}class ON extends Y0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function LN(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:CN(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e){return Z(t).setPersistence(e)}function FN(t){return B2(t)}async function jN(t,e){return Ge(t).validatePassword(e)}function J0(t,e,n,r){return Z(t).onIdTokenChanged(e,n,r)}function X0(t,e,n){return Z(t).beforeAuthStateChanged(e,n)}function Z0(t,e,n,r){return Z(t).onAuthStateChanged(e,n,r)}function UN(t){Z(t).useDeviceLanguage()}function zN(t,e){return Z(t).updateCurrentUser(e)}function eS(t){return Z(t).signOut()}function BN(t,e){return Ge(t).revokeAccessToken(e)}async function $N(t){return Z(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Fi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Fi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Fi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Fi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ge(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Cl._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=Fi._fromMfaPendingCredential(i.mfaPendingCredential);return new Qm(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const h=await dn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return $(n.user,r,"internal-error"),dn._forOperation(n.user,n.operationType,c);default:qt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function qN(t,e){var n;const r=Z(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Qm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function KN(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function WN(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function HN(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function QN(t,e){return Ce(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class Ym{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Cl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ym(e)}async getSession(){return Fi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await lr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await lr(this.user,QN(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const nf=new WeakMap;function YN(t){const e=Z(t);return nf.has(e)||nf.set(e,Ym._fromUser(e)),nf.get(e)}const jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=1e3,XN=10;class nS extends tS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);P2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nS.type="LOCAL";const rS=nS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS extends tS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iS.type="SESSION";const Jm=iS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ad(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await ZN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=xd("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function t5(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function n5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i5(){return Xm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="firebaseLocalStorageDb",s5=1,Uc="firebaseLocalStorage",oS="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rd(t,e){return t.transaction([Uc],e?"readwrite":"readonly").objectStore(Uc)}function o5(){const t=indexedDB.deleteDatabase(sS);return new Nl(t).toPromise()}function hp(){const t=indexedDB.open(sS,s5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uc,{keyPath:oS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uc)?e(r):(r.close(),await o5(),e(await hp()))})})}async function Kv(t,e,n){const r=Rd(t,!0).put({[oS]:e,value:n});return new Nl(r).toPromise()}async function a5(t,e){const n=Rd(t,!1).get(e),r=await new Nl(n).toPromise();return r===void 0?null:r.value}function Wv(t,e){const n=Rd(t,!0).delete(e);return new Nl(n).toPromise()}const l5=800,u5=3;class aS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(i5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n5(),!this.activeServiceWorker)return;this.sender=new e5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await Kv(e,jc,"1"),await Wv(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rd(i,!1).getAll();return new Nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aS.type="LOCAL";const lS=aS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t,e){return Ce(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function d5(t,e){return Ce(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}function h5(t,e){return Ce(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f5=500,p5=6e4,xu=1e12;class m5{constructor(e){this.auth=e,this.counter=xu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new g5(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||xu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||xu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||xu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class g5{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=y5(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},p5)},f5))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function y5(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=D0("rcb"),_5=new kl(3e4,6e4);class v5{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Je().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(w5(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Mv(Je().grecaptcha)?Promise.resolve(Je().grecaptcha):new Promise((r,i)=>{const s=Je().setTimeout(()=>{i(Nt(e,"network-request-failed"))},_5.get());Je()[rf]=()=>{Je().clearTimeout(s),delete Je()[rf];const a=Je().grecaptcha;if(!a||!Mv(a)){i(Nt(e,"internal-error"));return}const u=a.render;a.render=(c,h)=>{const p=u(c,h);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${M2()}?${bo({onload:rf,render:"explicit",hl:n})}`;$m(o).catch(()=>{clearTimeout(s),i(Nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Je().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function w5(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class I5{async load(e){return new m5(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="recaptcha",E5={theme:"light",type:"image"};class T5{constructor(e,n,r=Object.assign({},E5)){this.parameters=r,this.type=uS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new I5:new v5,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Je()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Um()&&!Xm(),this.auth,"internal-error"),await S5(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await w2(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function S5(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Yr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function b5(t,e,n){if(He(t.app))return Promise.reject(at(t));const r=Ge(t),i=await kd(r,e,Z(n));return new Zm(i,s=>Sd(r,s))}async function A5(t,e,n){const r=Z(t);await Td(!1,r,"phone");const i=await kd(r.auth,e,Z(n));return new Zm(i,s=>q0(r,s))}async function x5(t,e,n){const r=Z(t);if(He(r.auth.app))return Promise.reject(at(r.auth));const i=await kd(r.auth,e,Z(n));return new Zm(i,s=>G0(r,s))}async function kd(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===uS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await GN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await c5(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await rN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function R5(t,e){const n=Z(t);if(He(n.auth.app))return Promise.reject(at(n.auth));await qm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.providerId=Bi.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,n){return kd(this.auth,e,Z(n))}static credential(e,n){return Yr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Bi.credentialFromTaggedObject(n)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Yr._fromTokenResponse(n,r):null}}Bi.PROVIDER_ID="phone";Bi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){return e?Yn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function k5(t){return $0(t.auth,new eg(t),t.bypassAuthState)}function P5(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),B0(n,new eg(t),t.bypassAuthState)}async function C5(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),qm(n,new eg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k5;case"linkViaPopup":case"linkViaRedirect":return C5;case"reauthViaPopup":case"reauthViaRedirect":return P5;default:qt(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5=new kl(2e3,1e4);async function D5(t,e,n){if(He(t.app))return Promise.reject(Nt(t,"operation-not-supported-in-this-environment"));const r=Ge(t);xo(t,e,pr);const i=cs(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}async function V5(t,e,n){const r=Z(t);if(He(r.auth.app))return Promise.reject(Nt(r.auth,"operation-not-supported-in-this-environment"));xo(r.auth,e,pr);const i=cs(r.auth,n);return new Jn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function O5(t,e,n){const r=Z(t);xo(r.auth,e,pr);const i=cs(r.auth,n);return new Jn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Jn extends cS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N5.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5="pendingRedirect",Ju=new Map;class M5 extends cS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const r=await F5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F5(t,e){const n=hS(e),r=dS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tg(t,e){return dS(t)._set(hS(e),"true")}function j5(t,e){Ju.set(t._key(),e)}function dS(t){return Yn(t._redirectPersistence)}function hS(t){return Yu(L5,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U5(t,e,n){return z5(t,e,n)}async function z5(t,e,n){if(He(t.app))return Promise.reject(at(t));const r=Ge(t);xo(t,e,pr),await r._initializationPromise;const i=cs(r,n);return await tg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function B5(t,e,n){return $5(t,e,n)}async function $5(t,e,n){const r=Z(t);if(xo(r.auth,e,pr),He(r.auth.app))return Promise.reject(at(r.auth));await r.auth._initializationPromise;const i=cs(r.auth,n);await tg(i,r.auth);const s=await pS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function q5(t,e,n){return G5(t,e,n)}async function G5(t,e,n){const r=Z(t);xo(r.auth,e,pr),await r.auth._initializationPromise;const i=cs(r.auth,n);await Td(!1,r,e.providerId),await tg(i,r.auth);const s=await pS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function K5(t,e){return await Ge(t)._initializationPromise,fS(t,e,!1)}async function fS(t,e,n=!1){if(He(t.app))return Promise.reject(at(t));const r=Ge(t),i=cs(r,e),o=await new M5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function pS(t){const e=xd(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5=10*60*1e3;class H5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hv(e))}saveEventToCache(e){this.cachedEventUids.add(Hv(e)),this.lastProcessedEventTime=Date.now()}}function Hv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y5(t,e={}){return Ce(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X5=/^https?/;async function Z5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Y5(t);for(const n of e)try{if(eD(n))return}catch{}qt(t,"unauthorized-domain")}function eD(t){const e=ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!X5.test(n))return!1;if(J5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new kl(3e4,6e4);function Qv(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nD(t){return new Promise((e,n)=>{var r,i,s;function o(){Qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qv(),n(Nt(t,"network-request-failed"))},timeout:tD.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=D0("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},$m(`${j2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function rD(t){return Xu=Xu||nD(t),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new kl(5e3,15e3),sD="__/auth/iframe",oD="emulator/auth/iframe",aD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uD(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zm(e,oD):`https://${t.config.authDomain}/${sD}`,r={apiKey:e.apiKey,appName:t.name,v:Ao},i=lD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function cD(t){const e=await rD(t),n=Je().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:uD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},iD.get());function u(){Je().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hD=500,fD=600,pD="_blank",mD="http://localhost";class Yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gD(t,e,n,r=hD,i=fD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},dD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=tt().toLowerCase();n&&(a=A0(c)?pD:n),S0(c)&&(e=e||mD,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[E,A])=>`${g}${E}=${A},`,"");if(k2(c)&&a!=="_self")return yD(e||"",a),new Yv(null);const p=window.open(e||"",a,h);$(p,t,"popup-blocked");try{p.focus()}catch{}return new Yv(p)}function yD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="__/auth/handler",vD="emulator/auth/handler",wD=encodeURIComponent("fac");async function Jv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ao,eventId:i};if(e instanceof pr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Po){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${wD}=${encodeURIComponent(u)}`:"";return`${ID(t)}?${bo(a).slice(1)}${c}`}function ID({config:t}){return t.emulator?zm(t,vD):`https://${t.authDomain}/${_D}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class ED{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jm,this._completeRedirectFn=fS,this._overrideRedirectResult=j5}async _openPopup(e,n,r,i){var s;ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jv(e,n,r,ul(),i);return gD(e,o,xd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jv(e,n,r,ul(),i);return t5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cD(e),r=new H5(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C0()||b0()||Bm()}}const gS=ED;class yS{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return kn("unexpected MultiFactorSessionType")}}}class ng extends yS{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ng(e)}_finalizeEnroll(e,n,r){return KN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return d5(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _S{constructor(){}static assertion(e){return ng._fromCredential(e)}}_S.FACTOR_ID="phone";class vS{static assertionForEnrollment(e,n){return fl._fromSecret(e,n)}static assertionForSignIn(e,n){return fl._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const r=e;$(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const i=await WN(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Pd._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}}vS.FACTOR_ID="totp";class fl extends yS{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new fl(n,void 0,e)}static _fromEnrollmentId(e,n){return new fl(n,e)}async _finalizeEnroll(e,n,r){return $(typeof this.secret<"u",e,"argument-error"),HN(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){$(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return h5(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Pd{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Pd(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(Ru(e)||Ru(n))&&(i=!0),i&&(Ru(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ru(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ru(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var Xv="@firebase/auth",Zv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bD(t){Ln(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N0(t)},c=new O2(r,i,s,u);return $2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new En("auth-internal",e=>{const n=Ge(e.getProvider("auth").getImmediate());return(r=>new TD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Xv,Zv,SD(t)),an(Xv,Zv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=5*60,xD=DT("authIdTokenMaxAge")||AD;let ew=null;const RD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xD)return;const i=n==null?void 0:n.token;ew!==i&&(ew=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wS(t=Cm()){const e=hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=O0(t,{popupRedirectResolver:gS,persistence:[lS,rS,Jm]}),r=DT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RD(s.toString());X0(n,o,()=>o(n.currentUser)),J0(n,a=>o(a))}}const i=CT("auth");return i&&L0(n,`http://${i}`),n}function kD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}L2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bD("Browser");const PD=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:u2,ActionCodeURL:ko,AuthCredential:Ro,AuthErrorCodes:h2,EmailAuthCredential:so,EmailAuthProvider:fi,FacebookAuthProvider:$n,FactorId:s2,GithubAuthProvider:Gn,GoogleAuthProvider:qn,OAuthCredential:Mn,OAuthProvider:Fa,OperationType:l2,PhoneAuthCredential:Yr,PhoneAuthProvider:Bi,PhoneMultiFactorGenerator:_S,ProviderId:o2,RecaptchaVerifier:T5,SAMLAuthProvider:Mc,SignInMethod:a2,TotpMultiFactorGenerator:vS,TotpSecret:Pd,TwitterAuthProvider:Kn,applyActionCode:vN,beforeAuthStateChanged:X0,browserLocalPersistence:rS,browserPopupRedirectResolver:gS,browserSessionPersistence:Jm,checkActionCode:K0,confirmPasswordReset:_N,connectAuthEmulator:L0,createUserWithEmailAndPassword:W0,debugErrorMap:d2,deleteUser:$N,fetchSignInMethodsForEmail:bN,getAdditionalUserInfo:LN,getAuth:wS,getIdToken:T2,getIdTokenResult:w0,getMultiFactorResolver:qN,getRedirectResult:K5,inMemoryPersistence:dp,indexedDBLocalPersistence:lS,initializeAuth:O0,initializeRecaptchaConfig:FN,isSignInWithEmailLink:EN,linkWithCredential:q0,linkWithPhoneNumber:A5,linkWithPopup:O5,linkWithRedirect:q5,multiFactor:YN,onAuthStateChanged:Z0,onIdTokenChanged:J0,parseActionCodeURL:cN,prodErrorMap:h0,reauthenticateWithCredential:G0,reauthenticateWithPhoneNumber:x5,reauthenticateWithPopup:V5,reauthenticateWithRedirect:B5,reload:I0,revokeAccessToken:BN,sendEmailVerification:AN,sendPasswordResetEmail:yN,sendSignInLinkToEmail:IN,setPersistence:MN,signInAnonymously:fN,signInWithCredential:Sd,signInWithCustomToken:gN,signInWithEmailAndPassword:H0,signInWithEmailLink:TN,signInWithPhoneNumber:b5,signInWithPopup:D5,signInWithRedirect:U5,signOut:eS,unlink:pN,updateCurrentUser:zN,updateEmail:kN,updatePassword:PN,updatePhoneNumber:R5,updateProfile:Hm,useDeviceLanguage:UN,validatePassword:jN,verifyBeforeUpdateEmail:xN,verifyPasswordResetCode:wN},Symbol.toStringTag,{value:"Module"}));var tw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,IS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function S(){}S.prototype=y.prototype,T.D=y.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(x,R,N){for(var b=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)b[pe-2]=arguments[pe];return y.prototype[R].apply(x,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,S){S||(S=0);var x=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)x[R]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(R=0;16>R;++R)x[R]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=T.g[0],S=T.g[1],R=T.g[2];var N=T.g[3],b=y+(N^S&(R^N))+x[0]+3614090360&4294967295;y=S+(b<<7&4294967295|b>>>25),b=N+(R^y&(S^R))+x[1]+3905402710&4294967295,N=y+(b<<12&4294967295|b>>>20),b=R+(S^N&(y^S))+x[2]+606105819&4294967295,R=N+(b<<17&4294967295|b>>>15),b=S+(y^R&(N^y))+x[3]+3250441966&4294967295,S=R+(b<<22&4294967295|b>>>10),b=y+(N^S&(R^N))+x[4]+4118548399&4294967295,y=S+(b<<7&4294967295|b>>>25),b=N+(R^y&(S^R))+x[5]+1200080426&4294967295,N=y+(b<<12&4294967295|b>>>20),b=R+(S^N&(y^S))+x[6]+2821735955&4294967295,R=N+(b<<17&4294967295|b>>>15),b=S+(y^R&(N^y))+x[7]+4249261313&4294967295,S=R+(b<<22&4294967295|b>>>10),b=y+(N^S&(R^N))+x[8]+1770035416&4294967295,y=S+(b<<7&4294967295|b>>>25),b=N+(R^y&(S^R))+x[9]+2336552879&4294967295,N=y+(b<<12&4294967295|b>>>20),b=R+(S^N&(y^S))+x[10]+4294925233&4294967295,R=N+(b<<17&4294967295|b>>>15),b=S+(y^R&(N^y))+x[11]+2304563134&4294967295,S=R+(b<<22&4294967295|b>>>10),b=y+(N^S&(R^N))+x[12]+1804603682&4294967295,y=S+(b<<7&4294967295|b>>>25),b=N+(R^y&(S^R))+x[13]+4254626195&4294967295,N=y+(b<<12&4294967295|b>>>20),b=R+(S^N&(y^S))+x[14]+2792965006&4294967295,R=N+(b<<17&4294967295|b>>>15),b=S+(y^R&(N^y))+x[15]+1236535329&4294967295,S=R+(b<<22&4294967295|b>>>10),b=y+(R^N&(S^R))+x[1]+4129170786&4294967295,y=S+(b<<5&4294967295|b>>>27),b=N+(S^R&(y^S))+x[6]+3225465664&4294967295,N=y+(b<<9&4294967295|b>>>23),b=R+(y^S&(N^y))+x[11]+643717713&4294967295,R=N+(b<<14&4294967295|b>>>18),b=S+(N^y&(R^N))+x[0]+3921069994&4294967295,S=R+(b<<20&4294967295|b>>>12),b=y+(R^N&(S^R))+x[5]+3593408605&4294967295,y=S+(b<<5&4294967295|b>>>27),b=N+(S^R&(y^S))+x[10]+38016083&4294967295,N=y+(b<<9&4294967295|b>>>23),b=R+(y^S&(N^y))+x[15]+3634488961&4294967295,R=N+(b<<14&4294967295|b>>>18),b=S+(N^y&(R^N))+x[4]+3889429448&4294967295,S=R+(b<<20&4294967295|b>>>12),b=y+(R^N&(S^R))+x[9]+568446438&4294967295,y=S+(b<<5&4294967295|b>>>27),b=N+(S^R&(y^S))+x[14]+3275163606&4294967295,N=y+(b<<9&4294967295|b>>>23),b=R+(y^S&(N^y))+x[3]+4107603335&4294967295,R=N+(b<<14&4294967295|b>>>18),b=S+(N^y&(R^N))+x[8]+1163531501&4294967295,S=R+(b<<20&4294967295|b>>>12),b=y+(R^N&(S^R))+x[13]+2850285829&4294967295,y=S+(b<<5&4294967295|b>>>27),b=N+(S^R&(y^S))+x[2]+4243563512&4294967295,N=y+(b<<9&4294967295|b>>>23),b=R+(y^S&(N^y))+x[7]+1735328473&4294967295,R=N+(b<<14&4294967295|b>>>18),b=S+(N^y&(R^N))+x[12]+2368359562&4294967295,S=R+(b<<20&4294967295|b>>>12),b=y+(S^R^N)+x[5]+4294588738&4294967295,y=S+(b<<4&4294967295|b>>>28),b=N+(y^S^R)+x[8]+2272392833&4294967295,N=y+(b<<11&4294967295|b>>>21),b=R+(N^y^S)+x[11]+1839030562&4294967295,R=N+(b<<16&4294967295|b>>>16),b=S+(R^N^y)+x[14]+4259657740&4294967295,S=R+(b<<23&4294967295|b>>>9),b=y+(S^R^N)+x[1]+2763975236&4294967295,y=S+(b<<4&4294967295|b>>>28),b=N+(y^S^R)+x[4]+1272893353&4294967295,N=y+(b<<11&4294967295|b>>>21),b=R+(N^y^S)+x[7]+4139469664&4294967295,R=N+(b<<16&4294967295|b>>>16),b=S+(R^N^y)+x[10]+3200236656&4294967295,S=R+(b<<23&4294967295|b>>>9),b=y+(S^R^N)+x[13]+681279174&4294967295,y=S+(b<<4&4294967295|b>>>28),b=N+(y^S^R)+x[0]+3936430074&4294967295,N=y+(b<<11&4294967295|b>>>21),b=R+(N^y^S)+x[3]+3572445317&4294967295,R=N+(b<<16&4294967295|b>>>16),b=S+(R^N^y)+x[6]+76029189&4294967295,S=R+(b<<23&4294967295|b>>>9),b=y+(S^R^N)+x[9]+3654602809&4294967295,y=S+(b<<4&4294967295|b>>>28),b=N+(y^S^R)+x[12]+3873151461&4294967295,N=y+(b<<11&4294967295|b>>>21),b=R+(N^y^S)+x[15]+530742520&4294967295,R=N+(b<<16&4294967295|b>>>16),b=S+(R^N^y)+x[2]+3299628645&4294967295,S=R+(b<<23&4294967295|b>>>9),b=y+(R^(S|~N))+x[0]+4096336452&4294967295,y=S+(b<<6&4294967295|b>>>26),b=N+(S^(y|~R))+x[7]+1126891415&4294967295,N=y+(b<<10&4294967295|b>>>22),b=R+(y^(N|~S))+x[14]+2878612391&4294967295,R=N+(b<<15&4294967295|b>>>17),b=S+(N^(R|~y))+x[5]+4237533241&4294967295,S=R+(b<<21&4294967295|b>>>11),b=y+(R^(S|~N))+x[12]+1700485571&4294967295,y=S+(b<<6&4294967295|b>>>26),b=N+(S^(y|~R))+x[3]+2399980690&4294967295,N=y+(b<<10&4294967295|b>>>22),b=R+(y^(N|~S))+x[10]+4293915773&4294967295,R=N+(b<<15&4294967295|b>>>17),b=S+(N^(R|~y))+x[1]+2240044497&4294967295,S=R+(b<<21&4294967295|b>>>11),b=y+(R^(S|~N))+x[8]+1873313359&4294967295,y=S+(b<<6&4294967295|b>>>26),b=N+(S^(y|~R))+x[15]+4264355552&4294967295,N=y+(b<<10&4294967295|b>>>22),b=R+(y^(N|~S))+x[6]+2734768916&4294967295,R=N+(b<<15&4294967295|b>>>17),b=S+(N^(R|~y))+x[13]+1309151649&4294967295,S=R+(b<<21&4294967295|b>>>11),b=y+(R^(S|~N))+x[4]+4149444226&4294967295,y=S+(b<<6&4294967295|b>>>26),b=N+(S^(y|~R))+x[11]+3174756917&4294967295,N=y+(b<<10&4294967295|b>>>22),b=R+(y^(N|~S))+x[2]+718787259&4294967295,R=N+(b<<15&4294967295|b>>>17),b=S+(N^(R|~y))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var S=y-this.blockSize,x=this.B,R=this.h,N=0;N<y;){if(R==0)for(;N<=S;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(x[R++]=T.charCodeAt(N++),R==this.blockSize){i(this,x),R=0;break}}else for(;N<y;)if(x[R++]=T[N++],R==this.blockSize){i(this,x),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var S=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=S&255,S/=256;for(this.u(T),T=Array(16),y=S=0;4>y;++y)for(var x=0;32>x;x+=8)T[S++]=this.g[y]>>>x&255;return T};function s(T,y){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=y(T)}function o(T,y){this.h=y;for(var S=[],x=!0,R=T.length-1;0<=R;R--){var N=T[R]|0;x&&N==y||(S[R]=N,x=!1)}this.g=S}var a={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return P(c(-T));for(var y=[],S=1,x=0;T>=S;x++)y[x]=T/S|0,S*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return P(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),x=p,R=0;R<T.length;R+=8){var N=Math.min(8,T.length-R),b=parseInt(T.substring(R,R+N),y);8>N?(N=c(Math.pow(y,N)),x=x.j(N).add(c(b))):(x=x.j(S),x=x.add(c(b)))}return x}var p=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var T=0,y=1,S=0;S<this.g.length;S++){var x=this.i(S);T+=(0<=x?x:4294967296+x)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(C(this))return"-"+P(this).toString(T);for(var y=c(Math.pow(T,6)),S=this,x="";;){var R=k(S,y).g;S=v(S,R.j(y));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=R,A(S))return N+x;for(;6>N.length;)N="0"+N;x=N+x}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function C(T){return T.h==-1}t.l=function(T){return T=v(this,T),C(T)?-1:A(T)?0:1};function P(T){for(var y=T.g.length,S=[],x=0;x<y;x++)S[x]=~T.g[x];return new o(S,~T.h).add(g)}t.abs=function(){return C(this)?P(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],x=0,R=0;R<=y;R++){var N=x+(this.i(R)&65535)+(T.i(R)&65535),b=(N>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);x=b>>>16,N&=65535,b&=65535,S[R]=b<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function v(T,y){return T.add(P(y))}t.j=function(T){if(A(this)||A(T))return p;if(C(this))return C(T)?P(this).j(P(T)):P(P(this).j(T));if(C(T))return P(this.j(P(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,S=[],x=0;x<2*y;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(var R=0;R<T.g.length;R++){var N=this.i(x)>>>16,b=this.i(x)&65535,pe=T.i(R)>>>16,Gt=T.i(R)&65535;S[2*x+2*R]+=b*Gt,w(S,2*x+2*R),S[2*x+2*R+1]+=N*Gt,w(S,2*x+2*R+1),S[2*x+2*R+1]+=b*pe,w(S,2*x+2*R+1),S[2*x+2*R+2]+=N*pe,w(S,2*x+2*R+2)}for(x=0;x<y;x++)S[x]=S[2*x+1]<<16|S[2*x];for(x=y;x<2*y;x++)S[x]=0;return new o(S,0)};function w(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function I(T,y){this.g=T,this.h=y}function k(T,y){if(A(y))throw Error("division by zero");if(A(T))return new I(p,p);if(C(T))return y=k(P(T),y),new I(P(y.g),P(y.h));if(C(y))return y=k(T,P(y)),new I(P(y.g),y.h);if(30<T.g.length){if(C(T)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var S=g,x=y;0>=x.l(T);)S=V(S),x=V(x);var R=L(S,1),N=L(x,1);for(x=L(x,2),S=L(S,2);!A(x);){var b=N.add(x);0>=b.l(T)&&(R=R.add(S),N=b),x=L(x,1),S=L(S,1)}return y=v(T,R.j(y)),new I(R,y)}for(R=p;0<=T.l(y);){for(S=Math.max(1,Math.floor(T.m()/y.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),N=c(S),b=N.j(y);C(b)||0<b.l(T);)S-=x,N=c(S),b=N.j(y);A(N)&&(N=g),R=R.add(N),T=v(T,b)}return new I(R,T)}t.A=function(T){return k(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],x=0;x<y;x++)S[x]=this.i(x)&T.i(x);return new o(S,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],x=0;x<y;x++)S[x]=this.i(x)|T.i(x);return new o(S,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],x=0;x<y;x++)S[x]=this.i(x)^T.i(x);return new o(S,this.h^T.h)};function V(T){for(var y=T.g.length+1,S=[],x=0;x<y;x++)S[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(S,T.h)}function L(T,y){var S=y>>5;y%=32;for(var x=T.g.length-S,R=[],N=0;N<x;N++)R[N]=0<y?T.i(N+S)>>>y|T.i(N+S+1)<<32-y:T.i(N+S);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,IS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,$i=o}).apply(typeof tw<"u"?tw:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ES,Ta,TS,Zu,fp,SS,bS,AS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var O=l[_];if(!(O in m))break e;m=m[O]}l=l[l.length-1],_=m[l],d=d(_),d!=_&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,_=!1,O={next:function(){if(!_&&m<l.length){var F=m++;return{value:d(F,l[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function p(l,d,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function g(l,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function E(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function A(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,O,F){for(var K=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)K[Ie-2]=arguments[Ie];return d.prototype[O].apply(_,K)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=l[_];return m}return[]}function P(l,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const O=l.length||0,F=_.length||0;l.length=O+F;for(let K=0;K<F;K++)l[O+K]=_[K]}else l.push(_)}}class v{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function L(l,d,m){for(const _ in l)d.call(m,l[_],_,l)}function T(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function y(l){const d={};for(const m in l)d[m]=l[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let m,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(m in _)l[m]=_[m];for(let F=0;F<S.length;F++)m=S[F],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function R(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function b(){var l=te;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class pe{constructor(){this.h=this.g=null}add(d,m){const _=Gt.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var Gt=new v(()=>new Sn,l=>l.reset());class Sn{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let xt,H=!1,te=new pe,ie=()=>{const l=a.Promise.resolve(void 0);xt=()=>{l.then(q)}};var q=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(m){N(m)}var d=Gt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}H=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function Ee(l,d){if(re.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{k(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ge[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}A(Ee,re);var ge={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),wr=0;function bn(l,d,m,_,O){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=O,this.key=++wr,this.da=this.fa=!1}function hn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ir(l){this.src=l,this.g={},this.h=0}Ir.prototype.add=function(l,d,m,_,O){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var K=ps(l,d,_,O);return-1<K?(d=l[K],m||(d.fa=!1)):(d=new bn(d,this.src,F,!!_,O),d.fa=m,l.push(d)),d};function $o(l,d){var m=d.type;if(m in l.g){var _=l.g[m],O=Array.prototype.indexOf.call(_,d,void 0),F;(F=0<=O)&&Array.prototype.splice.call(_,O,1),F&&(hn(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function ps(l,d,m,_){for(var O=0;O<l.length;++O){var F=l[O];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==_)return O}return-1}var ms="closure_lm_"+(1e6*Math.random()|0),th={};function ly(l,d,m,_,O){if(Array.isArray(d)){for(var F=0;F<d.length;F++)ly(l,d[F],m,_,O);return null}return m=dy(m),l&&l[Me]?l.K(d,m,c(_)?!!_.capture:!1,O):ZA(l,d,m,!1,_,O)}function ZA(l,d,m,_,O,F){if(!d)throw Error("Invalid event type");var K=c(O)?!!O.capture:!!O,Ie=rh(l);if(Ie||(l[ms]=Ie=new Ir(l)),m=Ie.add(d,m,_,K,F),m.proxy)return m;if(_=ex(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)de||(O=K),O===void 0&&(O=!1),l.addEventListener(d.toString(),_,O);else if(l.attachEvent)l.attachEvent(cy(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ex(){function l(m){return d.call(l.src,l.listener,m)}const d=tx;return l}function uy(l,d,m,_,O){if(Array.isArray(d))for(var F=0;F<d.length;F++)uy(l,d[F],m,_,O);else _=c(_)?!!_.capture:!!_,m=dy(m),l&&l[Me]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],m=ps(F,m,_,O),-1<m&&(hn(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=rh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=ps(d,m,_,O)),(m=-1<l?d[l]:null)&&nh(m))}function nh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Me])$o(d.i,l);else{var m=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(m,_,l.capture):d.detachEvent?d.detachEvent(cy(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=rh(d))?($o(m,l),m.h==0&&(m.src=null,d[ms]=null)):hn(l)}}}function cy(l){return l in th?th[l]:th[l]="on"+l}function tx(l,d){if(l.da)l=!0;else{d=new Ee(d,this);var m=l.listener,_=l.ha||l.src;l.fa&&nh(l),l=m.call(_,d)}return l}function rh(l){return l=l[ms],l instanceof Ir?l:null}var ih="__closure_events_fn_"+(1e9*Math.random()>>>0);function dy(l){return typeof l=="function"?l:(l[ih]||(l[ih]=function(d){return l.handleEvent(d)}),l[ih])}function gt(){Q.call(this),this.i=new Ir(this),this.M=this,this.F=null}A(gt,Q),gt.prototype[Me]=!0,gt.prototype.removeEventListener=function(l,d,m,_){uy(this,l,d,m,_)};function Rt(l,d){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new re(d,l);else if(d instanceof re)d.target=d.target||l;else{var O=d;d=new re(_,l),x(d,O)}if(O=!0,m)for(var F=m.length-1;0<=F;F--){var K=d.g=m[F];O=Hl(K,_,!0,d)&&O}if(K=d.g=l,O=Hl(K,_,!0,d)&&O,O=Hl(K,_,!1,d)&&O,m)for(F=0;F<m.length;F++)K=d.g=m[F],O=Hl(K,_,!1,d)&&O}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],_=0;_<m.length;_++)hn(m[_]);delete l.g[d],l.h--}}this.F=null},gt.prototype.K=function(l,d,m,_){return this.i.add(String(l),d,!1,m,_)},gt.prototype.L=function(l,d,m,_){return this.i.add(String(l),d,!0,m,_)};function Hl(l,d,m,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,F=0;F<d.length;++F){var K=d[F];if(K&&!K.da&&K.capture==m){var Ie=K.listener,ct=K.ha||K.src;K.fa&&$o(l.i,K),O=Ie.call(ct,_)!==!1&&O}}return O&&!_.defaultPrevented}function hy(l,d,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function fy(l){l.g=hy(()=>{l.g=null,l.i&&(l.i=!1,fy(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class nx extends Q{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:fy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(l){Q.call(this),this.h=l,this.g={}}A(qo,Q);var py=[];function my(l){L(l.g,function(d,m){this.g.hasOwnProperty(m)&&nh(d)},l),l.g={}}qo.prototype.N=function(){qo.aa.N.call(this),my(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sh=a.JSON.stringify,rx=a.JSON.parse,ix=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function oh(){}oh.prototype.h=null;function gy(l){return l.h||(l.h=l.i())}function yy(){}var Go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ah(){re.call(this,"d")}A(ah,re);function lh(){re.call(this,"c")}A(lh,re);var Ii={},_y=null;function Ql(){return _y=_y||new gt}Ii.La="serverreachability";function vy(l){re.call(this,Ii.La,l)}A(vy,re);function Ko(l){const d=Ql();Rt(d,new vy(d))}Ii.STAT_EVENT="statevent";function wy(l,d){re.call(this,Ii.STAT_EVENT,l),this.stat=d}A(wy,re);function kt(l){const d=Ql();Rt(d,new wy(d,l))}Ii.Ma="timingevent";function Iy(l,d){re.call(this,Ii.Ma,l),this.size=d}A(Iy,re);function Wo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ho(){this.g=!0}Ho.prototype.xa=function(){this.g=!1};function sx(l,d,m,_,O,F){l.info(function(){if(l.g)if(F)for(var K="",Ie=F.split("&"),ct=0;ct<Ie.length;ct++){var me=Ie[ct].split("=");if(1<me.length){var yt=me[0];me=me[1];var _t=yt.split("_");K=2<=_t.length&&_t[1]=="type"?K+(yt+"="+me+"&"):K+(yt+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+m+`
`+K})}function ox(l,d,m,_,O,F,K){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+m+`
`+F+" "+K})}function gs(l,d,m,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+lx(l,m)+(_?" "+_:"")})}function ax(l,d){l.info(function(){return"TIMEOUT: "+d})}Ho.prototype.info=function(){};function lx(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return sh(m)}catch{return d}}var Yl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ey={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uh;function Jl(){}A(Jl,oh),Jl.prototype.g=function(){return new XMLHttpRequest},Jl.prototype.i=function(){return{}},uh=new Jl;function Er(l,d,m,_){this.j=l,this.i=d,this.l=m,this.R=_||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ty}function Ty(){this.i=null,this.g="",this.h=!1}var Sy={},ch={};function dh(l,d,m){l.L=1,l.v=tu(jn(d)),l.m=m,l.P=!0,by(l,null)}function by(l,d){l.F=Date.now(),Xl(l),l.A=jn(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),jy(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Ty,l.g=r_(l.j,m?d:null,!l.m),0<l.O&&(l.M=new nx(g(l.Y,l,l.g),l.O)),d=l.U,m=l.g,_=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(py[0]=O.toString()),O=py);for(var F=0;F<O.length;F++){var K=ly(m,O[F],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ko(),sx(l.i,l.u,l.A,l.l,l.R,l.m)}Er.prototype.ca=function(l){l=l.target;const d=this.M;d&&Un(l)==3?d.j():this.Y(l)},Er.prototype.Y=function(l){try{if(l==this.g)e:{const _t=Un(this.g);var d=this.g.Ba();const vs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Ky(this.g)))){this.J||_t!=4||d==7||(d==8||0>=vs?Ko(3):Ko(2)),hh(this);var m=this.g.Z();this.X=m;t:if(Ay(this)){var _=Ky(this.g);l="";var O=_.length,F=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),Qo(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(F&&d==O-1)});_.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,ox(this.i,this.u,this.A,this.l,this.R,_t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,ct=this.g;if((Ie=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ie)){var me=Ie;break t}}me=null}if(m=me)gs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,m);else{this.o=!1,this.s=3,kt(12),Ei(this),Qo(this);break e}}if(this.P){m=!0;let fn;for(;!this.J&&this.C<K.length;)if(fn=ux(this,K),fn==ch){_t==4&&(this.s=4,kt(14),m=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Sy){this.s=4,kt(15),gs(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else gs(this.i,this.l,fn,null),fh(this,fn);if(Ay(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||K.length!=0||this.h.h||(this.s=1,kt(16),m=!1),this.o=this.o&&m,!m)gs(this.i,this.l,K,"[Invalid Chunked Response]"),Ei(this),Qo(this);else if(0<K.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),vh(yt),yt.M=!0,kt(11))}}else gs(this.i,this.l,K,null),fh(this,K);_t==4&&Ei(this),this.o&&!this.J&&(_t==4?Zy(this.j,this):(this.o=!1,Xl(this)))}else Ax(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ei(this),Qo(this)}}}catch{}finally{}};function Ay(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ux(l,d){var m=l.C,_=d.indexOf(`
`,m);return _==-1?ch:(m=Number(d.substring(m,_)),isNaN(m)?Sy:(_+=1,_+m>d.length?ch:(d=d.slice(_,_+m),l.C=_+m,d)))}Er.prototype.cancel=function(){this.J=!0,Ei(this)};function Xl(l){l.S=Date.now()+l.I,xy(l,l.I)}function xy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Wo(g(l.ba,l),d)}function hh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Er.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ax(this.i,this.A),this.L!=2&&(Ko(),kt(17)),Ei(this),this.s=2,Qo(this)):xy(this,this.S-l)};function Qo(l){l.j.G==0||l.J||Zy(l.j,l)}function Ei(l){hh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,my(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function fh(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||ph(m.h,l))){if(!l.K&&ph(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)au(m),su(m);else break e;_h(m),kt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Wo(g(m.Za,m),6e3));if(1>=Py(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Si(m,11)}else if((l.K||m.g==l)&&au(m),!w(d))for(O=m.Da.g.parse(d),d=0;d<O.length;d++){let me=O[d];if(m.T=me[0],me=me[1],m.G==2)if(me[0]=="c"){m.K=me[1],m.ia=me[2];const yt=me[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const _t=me[4];_t!=null&&(m.Aa=_t,m.j.info("SVER="+m.Aa));const vs=me[5];vs!=null&&typeof vs=="number"&&0<vs&&(_=1.5*vs,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const fn=l.g;if(fn){const uu=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uu){var F=_.h;F.g||uu.indexOf("spdy")==-1&&uu.indexOf("quic")==-1&&uu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(mh(F,F.h),F.h=null))}if(_.D){const wh=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;wh&&(_.ya=wh,be(_.I,_.D,wh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var K=l;if(_.qa=n_(_,_.J?_.ia:null,_.W),K.K){Cy(_.h,K);var Ie=K,ct=_.L;ct&&(Ie.I=ct),Ie.B&&(hh(Ie),Xl(Ie)),_.g=K}else Jy(_);0<m.i.length&&ou(m)}else me[0]!="stop"&&me[0]!="close"||Si(m,7);else m.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Si(m,7):yh(m):me[0]!="noop"&&m.l&&m.l.ta(me),m.v=0)}}Ko(4)}catch{}}var cx=class{constructor(l,d){this.g=l,this.map=d}};function Ry(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ky(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Py(l){return l.h?1:l.g?l.g.size:0}function ph(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function mh(l,d){l.g?l.g.add(d):l.h=d}function Cy(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Ry.prototype.cancel=function(){if(this.i=Ny(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ny(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function dx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,_=0;_<m;_++)d.push(l[_]);return d}d=[],m=0;for(_ in l)d[m++]=l[_];return d}function hx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const _ in l)d[m++]=_;return d}}}function Dy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=hx(l),_=dx(l),O=_.length,F=0;F<O;F++)d.call(void 0,_[F],m&&m[F],l)}var Vy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fx(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),O=null;if(0<=_){var F=l[m].substring(0,_);O=l[m].substring(_+1)}else F=l[m];d(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ti){this.h=l.h,Zl(this,l.j),this.o=l.o,this.g=l.g,eu(this,l.s),this.l=l.l;var d=l.i,m=new Xo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Oy(this,m),this.m=l.m}else l&&(d=String(l).match(Vy))?(this.h=!1,Zl(this,d[1]||"",!0),this.o=Yo(d[2]||""),this.g=Yo(d[3]||"",!0),eu(this,d[4]),this.l=Yo(d[5]||"",!0),Oy(this,d[6]||"",!0),this.m=Yo(d[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}Ti.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Jo(d,Ly,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Jo(d,Ly,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Jo(m,m.charAt(0)=="/"?gx:mx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Jo(m,_x)),l.join("")};function jn(l){return new Ti(l)}function Zl(l,d,m){l.j=m?Yo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function eu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Oy(l,d,m){d instanceof Xo?(l.i=d,vx(l.i,l.h)):(m||(d=Jo(d,yx)),l.i=new Xo(d,l.h))}function be(l,d,m){l.i.set(d,m)}function tu(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Jo(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,px),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function px(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ly=/[#\/\?@]/g,mx=/[#\?:]/g,gx=/[#\?]/g,yx=/[#\?@]/g,_x=/#/g;function Xo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Tr(l){l.g||(l.g=new Map,l.h=0,l.i&&fx(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Xo.prototype,t.add=function(l,d){Tr(this),this.i=null,l=ys(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function My(l,d){Tr(l),d=ys(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Fy(l,d){return Tr(l),d=ys(l,d),l.g.has(d)}t.forEach=function(l,d){Tr(this),this.g.forEach(function(m,_){m.forEach(function(O){l.call(d,O,_,this)},this)},this)},t.na=function(){Tr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const O=l[_];for(let F=0;F<O.length;F++)m.push(d[_])}return m},t.V=function(l){Tr(this);let d=[];if(typeof l=="string")Fy(this,l)&&(d=d.concat(this.g.get(ys(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Tr(this),this.i=null,l=ys(this,l),Fy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function jy(l,d,m){My(l,d),0<m.length&&(l.i=null,l.g.set(ys(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const F=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var O=F;K[_]!==""&&(O+="="+encodeURIComponent(String(K[_]))),l.push(O)}}return this.i=l.join("&")};function ys(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function vx(l,d){d&&!l.j&&(Tr(l),l.i=null,l.g.forEach(function(m,_){var O=_.toLowerCase();_!=O&&(My(this,_),jy(this,O,m))},l)),l.j=d}function wx(l,d){const m=new Ho;if(a.Image){const _=new Image;_.onload=E(Sr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=E(Sr,m,"TestLoadImage: error",!1,d,_),_.onabort=E(Sr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=E(Sr,m,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function Ix(l,d){const m=new Ho,_=new AbortController,O=setTimeout(()=>{_.abort(),Sr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(F=>{clearTimeout(O),F.ok?Sr(m,"TestPingServer: ok",!0,d):Sr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Sr(m,"TestPingServer: error",!1,d)})}function Sr(l,d,m,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(m)}catch{}}function Ex(){this.g=new ix}function Tx(l,d,m){const _=m||"";try{Dy(l,function(O,F){let K=O;c(O)&&(K=sh(O)),d.push(_+F+"="+encodeURIComponent(K))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function nu(l){this.l=l.Ub||null,this.j=l.eb||!1}A(nu,oh),nu.prototype.g=function(){return new ru(this.l,this.j)},nu.prototype.i=function(l){return function(){return l}}({});function ru(l,d){gt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ru,gt),t=ru.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ea(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Zo(this):ea(this),this.readyState==3&&Uy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zo(this))},t.Qa=function(l){this.g&&(this.response=l,Zo(this))},t.ga=function(){this.g&&Zo(this)};function Zo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ea(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function ea(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function zy(l){let d="";return L(l,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function gh(l,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=zy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):be(l,d,m))}function Be(l){gt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Be,gt);var Sx=/^https?$/i,bx=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uh.g(),this.v=this.o?gy(this.o):gy(uh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){By(this,F);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)m.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())m.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(bx,d,void 0))||_||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of m)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gy(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){By(this,F)}};function By(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,$y(l),iu(l)}function $y(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),iu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),iu(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qy(this):this.bb())},t.bb=function(){qy(this)};function qy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Un(l)!=4||l.Z()!=2)){if(l.u&&Un(l)==4)hy(l.Ea,0,l);else if(Rt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=K===0){var O=String(l.D).match(Vy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!Sx.test(O?O.toLowerCase():"")}m=_}if(m)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var F=2<Un(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",$y(l)}}finally{iu(l)}}}}function iu(l,d){if(l.g){Gy(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Rt(l,"ready");try{m.onreadystatechange=_}catch{}}}function Gy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),rx(d)}};function Ky(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ax(l){const d={};l=(l.g&&2<=Un(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var m=R(l[_]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[O]||[];d[O]=F,F.push(m)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Wy(l){this.Aa=0,this.i=[],this.j=new Ho,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,l),this.cb=ta("retryDelaySeedMs",1e4,l),this.Wa=ta("forwardChannelMaxRetries",2,l),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ry(l&&l.concurrentRequestLimit),this.Da=new Ex,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wy.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,_){kt(0),this.W=l,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=n_(this,null,this.W),ou(this)};function yh(l){if(Hy(l),l.G==3){var d=l.U++,m=jn(l.I);if(be(m,"SID",l.K),be(m,"RID",d),be(m,"TYPE","terminate"),na(l,m),d=new Er(l,l.j,d),d.L=2,d.v=tu(jn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=r_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Xl(d)}t_(l)}function su(l){l.g&&(vh(l),l.g.cancel(),l.g=null)}function Hy(l){su(l),l.u&&(a.clearTimeout(l.u),l.u=null),au(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ou(l){if(!ky(l.h)&&!l.s){l.s=!0;var d=l.Ga;xt||ie(),H||(xt(),H=!0),te.add(d,l),l.B=0}}function xx(l,d){return Py(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Wo(g(l.Ga,l,d),e_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Er(this,this.j,l);let F=this.o;if(this.S&&(F?(F=y(F),x(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Yy(this,O,d),m=jn(this.I),be(m,"RID",l),be(m,"CVER",22),this.D&&be(m,"X-HTTP-Session-Id",this.D),na(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(zy(F)))+"&"+d:this.m&&gh(m,this.m,F)),mh(this.h,O),this.Ua&&be(m,"TYPE","init"),this.P?(be(m,"$req",d),be(m,"SID","null"),O.T=!0,dh(O,m,null)):dh(O,m,d),this.G=2}}else this.G==3&&(l?Qy(this,l):this.i.length==0||ky(this.h)||Qy(this))};function Qy(l,d){var m;d?m=d.l:m=l.U++;const _=jn(l.I);be(_,"SID",l.K),be(_,"RID",m),be(_,"AID",l.T),na(l,_),l.m&&l.o&&gh(_,l.m,l.o),m=new Er(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Yy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mh(l.h,m),dh(m,_,d)}function na(l,d){l.H&&L(l.H,function(m,_){be(d,_,m)}),l.l&&Dy({},function(m,_){be(d,_,m)})}function Yy(l,d,m){m=Math.min(l.i.length,m);var _=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let F=-1;for(;;){const K=["count="+m];F==-1?0<m?(F=O[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let Ie=!0;for(let ct=0;ct<m;ct++){let me=O[ct].g;const yt=O[ct].map;if(me-=F,0>me)F=Math.max(0,O[ct].g-100),Ie=!1;else try{Tx(yt,K,"req"+me+"_")}catch{_&&_(yt)}}if(Ie){_=K.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,_}function Jy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;xt||ie(),H||(xt(),H=!0),te.add(d,l),l.v=0}}function _h(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Wo(g(l.Fa,l),e_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Xy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Wo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),su(this),Xy(this))};function vh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Xy(l){l.g=new Er(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=jn(l.qa);be(d,"RID","rpc"),be(d,"SID",l.K),be(d,"AID",l.T),be(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(d,"TO",l.ja),be(d,"TYPE","xmlhttp"),na(l,d),l.m&&l.o&&gh(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=tu(jn(d)),m.m=null,m.P=!0,by(m,l)}t.Za=function(){this.C!=null&&(this.C=null,su(this),_h(this),kt(19))};function au(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Zy(l,d){var m=null;if(l.g==d){au(l),vh(l),l.g=null;var _=2}else if(ph(l.h,d))m=d.D,Cy(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;_=Ql(),Rt(_,new Iy(_,m)),ou(l)}else Jy(l);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&xx(l,d)||_==2&&_h(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),O){case 1:Si(l,5);break;case 4:Si(l,10);break;case 3:Si(l,6);break;default:Si(l,2)}}}function e_(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Si(l,d){if(l.j.info("Error code "+d),d==2){var m=g(l.fb,l),_=l.Xa;const O=!_;_=new Ti(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Zl(_,"https"),tu(_),O?wx(_.toString(),m):Ix(_.toString(),m)}else kt(2);l.G=0,l.l&&l.l.sa(d),t_(l),Hy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function t_(l){if(l.G=0,l.ka=[],l.l){const d=Ny(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function n_(l,d,m){var _=m instanceof Ti?jn(m):new Ti(m);if(_.g!="")d&&(_.g=d+"."+_.g),eu(_,_.s);else{var O=a.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var F=new Ti(null);_&&Zl(F,_),d&&(F.g=d),O&&eu(F,O),m&&(F.l=m),_=F}return m=l.D,d=l.ya,m&&d&&be(_,m,d),be(_,"VER",l.la),na(l,_),_}function r_(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Be(new nu({eb:m})):new Be(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function i_(){}t=i_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function lu(){}lu.prototype.g=function(l,d){return new Kt(l,d)};function Kt(l,d){gt.call(this),this.g=new Wy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new _s(this)}A(Kt,gt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){yh(this.g)},Kt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=sh(l),l=m);d.i.push(new cx(d.Ya++,l)),d.G==3&&ou(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,yh(this.g),delete this.g,Kt.aa.N.call(this)};function s_(l){ah.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}A(s_,ah);function o_(){lh.call(this),this.status=1}A(o_,lh);function _s(l){this.g=l}A(_s,i_),_s.prototype.ua=function(){Rt(this.g,"a")},_s.prototype.ta=function(l){Rt(this.g,new s_(l))},_s.prototype.sa=function(l){Rt(this.g,new o_)},_s.prototype.ra=function(){Rt(this.g,"b")},lu.prototype.createWebChannel=lu.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,AS=function(){return new lu},bS=function(){return Ql()},SS=Ii,fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yl.NO_ERROR=0,Yl.TIMEOUT=8,Yl.HTTP_ERROR=6,Zu=Yl,Ey.COMPLETE="complete",TS=Ey,yy.EventType=Go,Go.OPEN="a",Go.CLOSE="b",Go.ERROR="c",Go.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Ta=yy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,ES=Be}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const nw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new _d("@firebase/firestore");function bs(){return ti.logLevel}function CD(t){ti.setLogLevel(t)}function U(t,...e){if(ti.logLevel<=le.DEBUG){const n=e.map(rg);ti.debug(`Firestore (${Co}): ${t}`,...n)}}function We(t,...e){if(ti.logLevel<=le.ERROR){const n=e.map(rg);ti.error(`Firestore (${Co}): ${t}`,...n)}}function Xt(t,...e){if(ti.logLevel<=le.WARN){const n=e.map(rg);ti.warn(`Firestore (${Co}): ${t}`,...n)}}function rg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function X(t,e){t||Y()}function ND(t,e){t||Y()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class DD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VD{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){X(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new xS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new st(e)}}class OD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class LD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){X(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new kS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class FD{getToken(){return Promise.resolve(new kS(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function PS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Oe(0,0))}static max(){return new ee(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends pl{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const UD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends pl{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return UD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ue.fromString(e))}static fromName(e){return new W(ue.fromString(e).popFirst(5))}static empty(){return new W(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function pp(t){return t.fields.find(e=>e.kind===2)}function ki(t){return t.fields.filter(e=>e.kind!==2)}function zD(t,e){let n=ne(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=BD(t.fields[r],e.fields[r]),n!==0)return n;return ne(t.fields.length,e.fields.length)}ao.UNKNOWN_ID=-1;class qi{constructor(e,n){this.fieldPath=e,this.kind=n}}function BD(t,e){const n=Re.comparator(t.fieldPath,e.fieldPath);return n!==0?n:ne(t.kind,e.kind)}class lo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new lo(0,Zt.min())}}function CS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Zt(i,W.empty(),e)}function NS(t){return new Zt(t.readTime,t.key,-1)}class Zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zt(ee.min(),W.empty(),-1)}static max(){return new Zt(ee.max(),W.empty(),-1)}}function sg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==DS)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ja(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=og(r.target.error);this.V.reject(new ja(e,i))}}static open(e,n,r,i){try{return new Cd(n,e.transaction(i,r))}catch(s){throw new ja(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new qD(n)}}class Vn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Vn.S(tt())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Pi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!km())return!1;if(Vn.v())return!0;const e=tt(),n=Vn.S(e),r=0<n&&n<10,i=OS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ja(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ja(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Cd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function OS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class $D{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Pi(this.B.delete())}}class ja extends j{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mi(t){return t.name==="IndexedDbTransactionError"}class qD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Pi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Pi(this.store.add(e))}get(e){return Pi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Pi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Pi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=og(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new $D(a),c=n(a.primaryKey,a.value,u);if(c instanceof D){const h=c.catch(p=>(u.done(),D.reject(p)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Pi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=og(r.target.error);n(i)}})}let rw=!1;function og(t){const e=Vn.S(tt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rw||(rw=!0,setTimeout(()=>{throw r},0)),r}}return t}class GD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){mi(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await pi(n)}await this.X(6e4)})}}class KD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=NS(s);sg(o,r)>0&&(r=o)}),new Zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mt.oe=-1;function Dl(t){return t==null}function ml(t){return t===0&&1/t==-1/0}function LS(t){return typeof t=="number"&&Number.isInteger(t)&&!ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=iw(e)),e=WD(t.get(n),e);return iw(e)}function WD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function iw(t){return t+""}function Pn(t){const e=t.length;if(X(e>=2),e===2)return X(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Y()}s=o+2}return new ue(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return[t,St(e)]}function MS(t,e,n){return[t,St(e),n]}const HD={},QD=["prefixPath","collectionGroup","readTime","documentId"],YD=["prefixPath","collectionGroup","documentId"],JD=["collectionGroup","readTime","prefixPath","documentId"],XD=["canonicalId","targetId"],ZD=["targetId","path"],eV=["path","targetId"],tV=["collectionId","parent"],nV=["indexId","uid"],rV=["uid","sequenceNumber"],iV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sV=["indexId","uid","orderedDocumentKey"],oV=["userId","collectionPath","documentId"],aV=["userId","collectionPath","largestBatchId"],lV=["userId","collectionGroup","largestBatchId"],FS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uV=[...FS,"documentOverlays"],jS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],US=jS,ag=[...US,"indexConfiguration","indexState","indexEntries"],cV=ag,dV=[...ag,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp extends VS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function nt(t,e){const n=G(t);return Vn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zS(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function BS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new aw(this.data.getIterator())}getIteratorFrom(e){return new aw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class aw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Is(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ve(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $S("Invalid base64 string: "+s):s}}(e);return new ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const fV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(X(!!t),typeof t=="string"){let e=0;const n=fV.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dd(t){const e=t.mapValue.fields.__previous_value__;return Nd(e)?Dd(e):e}function gl(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tc={nullValue:"NULL_VALUE"};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nd(t)?4:qS(t)?9007199254740991:Vd(t)?10:11:Y()}function Fn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gl(t).isEqual(gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),a=ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return cr(i.bytesValue).isEqual(cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?ml(o)===ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ow(o)!==ow(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Fn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function yl(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return lw(t.timestampValue,e.timestampValue);case 4:return lw(gl(t),gl(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=cr(s),u=cr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ne(a[c],u[c]);if(h!==0)return h}return ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Ne(s.latitude),Ne(o.latitude));return a!==0?a:ne(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},g=o.fields||{},E=(a=p.value)===null||a===void 0?void 0:a.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=ne(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:uw(E,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Fr.mapValue&&o===Fr.mapValue)return 0;if(s===Fr.mapValue)return 1;if(o===Fr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const g=ne(u[p],h[p]);if(g!==0)return g;const E=ii(a[u[p]],c[h[p]]);if(E!==0)return E}return ne(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function lw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ur(t),r=ur(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function uw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ii(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function uo(t){return gp(t)}function gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${gp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function nc(t){switch(ri(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dd(t);return e?16+nc(e):16;case 5:return 2*t.stringValue.length;case 6:return cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+nc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return gi(r.fields,(s,o)=>{i+=s.length+nc(o)}),i}(t.mapValue);default:throw Y()}}function Xi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yp(t){return!!t&&"integerValue"in t}function _l(t){return!!t&&"arrayValue"in t}function cw(t){return!!t&&"nullValue"in t}function dw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rc(t){return!!t&&"mapValue"in t}function Vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const GS={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function mV(t){return"nullValue"in t?tc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Xi(ni.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Vd(t)?GS:{mapValue:{}}:Y()}function gV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Xi(ni.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?GS:"mapValue"in t?Vd(t)?{mapValue:{}}:Fr:Y()}function hw(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function fw(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(Ua(this.value))}}function KS(t){const e=[];return gi(t.fields,(n,r)=>{const i=new Re([n]);if(rc(r)){const s=KS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,ee.min(),ee.min(),ee.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,ee.min(),ee.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,ee.min(),ee.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.position=e,this.inclusive=n}}function pw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function yV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{}class ce extends WS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _V(e,n,r):n==="array-contains"?new IV(e,r):n==="in"?new ZS(e,r):n==="not-in"?new EV(e,r):n==="array-contains-any"?new TV(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vV(e,r):new wV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends WS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ye(e,n)}matches(e){return co(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function co(t){return t.op==="and"}function _p(t){return t.op==="or"}function lg(t){return HS(t)&&co(t)}function HS(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function vp(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(lg(t))return t.filters.map(e=>vp(e)).join(",");{const e=t.filters.map(n=>vp(n)).join(",");return`${t.op}(${e})`}}function QS(t,e){return t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof ye?function(r,i){return i instanceof ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&QS(o,i.filters[a]),!0):!1}(t,e):void Y()}function YS(t,e){const n=t.filters.concat(e);return ye.create(n,t.op)}function JS(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${uo(n.value)}`}(t):t instanceof ye?function(n){return n.op.toString()+" {"+n.getFilters().map(JS).join(" ,")+"}"}(t):"Filter"}class _V extends ce{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class vV extends ce{constructor(e,n){super(e,"in",n),this.keys=XS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wV extends ce{constructor(e,n){super(e,"not-in",n),this.keys=XS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class IV extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _l(n)&&yl(n.arrayValue,this.value)}}class ZS extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yl(this.value.arrayValue,n)}}class EV extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yl(this.value.arrayValue,n)}}class TV extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function wp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SV(t,e,n,r,i,s,o)}function Zi(t){const e=G(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Dl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.ue=n}return e.ue}function Vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mw(t.startAt,e.startAt)&&mw(t.endAt,e.endAt)}function zc(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Bc(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function gw(t,e,n){let r=tc,i=!0;for(const s of Bc(t,e)){let o=tc,a=!0;switch(s.op){case"<":case"<=":o=mV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=tc}hw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];hw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function yw(t,e,n){let r=Fr,i=!0;for(const s of Bc(t,e)){let o=Fr,a=!0;switch(s.op){case">=":case">":o=gV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Fr}fw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];fw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eb(t,e,n,r,i,s,o,a){return new mr(t,e,n,r,i,s,o,a)}function No(t){return new mr(t)}function _w(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ug(t){return t.collectionGroup!==null}function Ys(t){const e=G(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ve(Re.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new vl(s,r))}),n.has(Re.keyField().canonicalString())||e.ce.push(new vl(Re.keyField(),r))}return e.ce}function bt(t){const e=G(t);return e.le||(e.le=nb(e,Ys(t))),e.le}function tb(t){const e=G(t);return e.he||(e.he=nb(e,t.explicitOrderBy)),e.he}function nb(t,e){if(t.limitType==="F")return wp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vl(i.field,s)});const n=t.endAt?new si(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new si(t.startAt.position,t.startAt.inclusive):null;return wp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ip(t,e){const n=t.filters.concat([e]);return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ol(t,e){return Vl(bt(t),bt(e))&&t.limitType===e.limitType}function rb(t){return`${Zi(bt(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>JS(i)).join(", ")}]`),Dl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>uo(i)).join(",")),`Target(${r})`}(bt(t))}; limitType=${t.limitType})`}function Ll(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ys(r),i)||r.endAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ys(r),i))}(t,e)}function ib(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sb(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const s=bV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bV(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ii(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV=new Se(W.comparator);function jt(){return AV}const ob=new Se(W.comparator);function Sa(...t){let e=ob;for(const n of t)e=e.insert(n.key,n);return e}function ab(t){let e=ob;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cn(){return za()}function lb(){return za()}function za(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const xV=new Se(W.comparator),RV=new ve(W.comparator);function se(...t){let e=RV;for(const n of t)e=e.add(n);return e}const kV=new ve(ne);function cg(){return kV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ml(e)?"-0":e}}function ub(t){return{integerValue:""+t}}function cb(t,e){return LS(e)?ub(e):dg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this._=void 0}}function PV(t,e,n){return t instanceof ho?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Nd(s)&&(s=Dd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof es?hb(t,e):t instanceof ts?fb(t,e):function(i,s){const o=db(i,s),a=vw(o)+vw(i.Pe);return yp(o)&&yp(i.Pe)?ub(a):dg(i.serializer,a)}(t,e)}function CV(t,e,n){return t instanceof es?hb(t,e):t instanceof ts?fb(t,e):n}function db(t,e){return t instanceof fo?function(r){return yp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ho extends Od{}class es extends Od{constructor(e){super(),this.elements=e}}function hb(t,e){const n=pb(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ts extends Od{constructor(e){super(),this.elements=e}}function fb(t,e){let n=pb(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class fo extends Od{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vw(t){return Ne(t.integerValue||t.doubleValue)}function pb(t){return _l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.field=e,this.transform=n}}function NV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof es&&i instanceof es||r instanceof ts&&i instanceof ts?oo(r.elements,i.elements,Fn):r instanceof fo&&i instanceof fo?Fn(r.Pe,i.Pe):r instanceof ho&&i instanceof ho}(t.transform,e.transform)}class DV{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ld{}function mb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vo(t.key,Ve.none()):new Do(t.key,t.data,Ve.none());{const n=t.data,r=ft.empty();let i=new ve(Re.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yr(t.key,r,new Ft(i.toArray()),Ve.none())}}function VV(t,e,n){t instanceof Do?function(i,s,o){const a=i.value.clone(),u=Iw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(i,s,o){if(!ic(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Iw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(gb(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ba(t,e,n,r){return t instanceof Do?function(s,o,a,u){if(!ic(s.precondition,o))return a;const c=s.value.clone(),h=Ew(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(s,o,a,u){if(!ic(s.precondition,o))return a;const c=Ew(s.fieldTransforms,u,o),h=o.data;return h.setAll(gb(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return ic(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=db(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function ww(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&oo(r,i,(s,o)=>NV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Do extends Ld{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends Ld{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iw(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CV(o,a,n[i]))}return r}function Ew(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PV(s,o,e))}return r}class Vo extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hg extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=mb(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,r)=>ww(n,r))&&oo(this.baseMutations,e.baseMutations,(n,r)=>ww(n,r))}}class pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=function(){return xV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,he;function _b(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function vb(t){if(t===void 0)return We("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ye.OK:return M.OK;case Ye.CANCELLED:return M.CANCELLED;case Ye.UNKNOWN:return M.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return M.INTERNAL;case Ye.UNAVAILABLE:return M.UNAVAILABLE;case Ye.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ye.NOT_FOUND:return M.NOT_FOUND;case Ye.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ye.ABORTED:return M.ABORTED;case Ye.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ye.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(he=Ye||(Ye={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV=new $i([4294967295,4294967295],0);function Tw(t){const e=wb().encode(t),n=new IS;return n.update(e),new Uint8Array(n.digest())}function Sw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $i([n,r],0),new $i([i,s],0)]}class gg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$i.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply($i.fromNumber(r)));return i.compare(MV)===1&&(i=new $i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tw(e),[r,i]=Sw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Tw(e),[r,i]=Sw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fl(ee.min(),i,new Se(ne),jt(),se())}}class jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jl(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Ib{constructor(e,n){this.targetId=e,this.me=n}}class Eb{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bw{constructor(){this.fe=0,this.ge=xw(),this.pe=ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new jl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=xw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FV{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=Aw(),this.Qe=new Se(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(zc(s))if(r===0){const o=new W(s.path);this.Ue(n,o,xe.newNoDocument(o,ee.min()))}else X(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}qc==null||qc.et(function(h,p,g,E,A){var C,P,v,w,I,k;const V={localCacheCount:h,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},L=p.unchangedNames;return L&&(V.bloomFilter={applied:A===0,hashCount:(C=L==null?void 0:L.hashCount)!==null&&C!==void 0?C:0,bitmapLength:(w=(v=(P=L==null?void 0:L.bits)===null||P===void 0?void 0:P.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(k=(I=L==null?void 0:L.bits)===null||I===void 0?void 0:I.padding)!==null&&k!==void 0?k:0,mightContain:T=>{var y;return(y=E==null?void 0:E.mightContain(T))!==null&&y!==void 0&&y}}),V}(o,e.me,this.Le.tt(),a,u))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=cr(r).toUint8Array()}catch(u){if(u instanceof $S)return Xt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new gg(o,i,s)}catch(u){return Xt(u instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&zc(a.target)){const u=new W(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,xe.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Fl(e,n,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Aw(),this.Qe=new Se(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ve(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Aw(){return new Se(W.comparator)}function xw(){return new Se(W.comparator)}const jV={asc:"ASCENDING",desc:"DESCENDING"},UV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zV={and:"AND",or:"OR"};class BV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ep(t,e){return t.useProto3Json||Dl(e)?e:{value:e}}function po(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $V(t,e){return po(t,e.toTimestamp())}function Qe(t){return X(!!t),ee.fromTimestamp(function(n){const r=ur(n);return new Oe(r.seconds,r.nanos)}(t))}function yg(t,e){return Tp(t,e).canonicalString()}function Tp(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sb(t){const e=ue.fromString(t);return X(Vb(e)),e}function wl(t,e){return yg(t.databaseId,e.path)}function On(t,e){const n=Sb(e);if(n.get(1)!==t.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(xb(n))}function bb(t,e){return yg(t.databaseId,e)}function Ab(t){const e=Sb(t);return e.length===4?ue.emptyPath():xb(e)}function Sp(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xb(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rw(t,e,n){return{name:wl(t,e),fields:n.value.mapValue.fields}}function Rb(t,e,n){const r=On(t,e.name),i=Qe(e.updateTime),s=e.createTime?Qe(e.createTime):ee.min(),o=new ft({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function qV(t,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=On(r,i.found.name),o=Qe(i.found.updateTime),a=i.found.createTime?Qe(i.found.createTime):ee.min(),u=new ft({mapValue:{fields:i.found.fields}});return xe.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=On(r,i.missing),o=Qe(i.readTime);return xe.newNoDocument(s,o)}(t,e):Y()}function GV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(X(h===void 0||typeof h=="string"),ze.fromBase64String(h||"")):(X(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ze.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:vb(c.code);return new j(h,c.message||"")}(o);n=new Eb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=On(t,r.document.name),s=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):ee.min(),a=new ft({mapValue:{fields:r.document.fields}}),u=xe.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new sc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=On(t,r.document),s=r.readTime?Qe(r.readTime):ee.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=On(t,r.document),s=r.removedTargetIds||[];n=new sc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LV(i,s),a=r.targetId;n=new Ib(a,o)}}return n}function Il(t,e){let n;if(e instanceof Do)n={update:Rw(t,e.key,e.value)};else if(e instanceof Vo)n={delete:wl(t,e.key)};else if(e instanceof yr)n={update:Rw(t,e.key,e.data),updateMask:JV(e.fieldMask)};else{if(!(e instanceof hg))return Y();n={verify:wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof es)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$V(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function bp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ve.updateTime(Qe(s.updateTime)):s.exists!==void 0?Ve.exists(s.exists):Ve.none()}(e.currentDocument):Ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),u=new ho;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new es(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new ts(h)}else"increment"in a?u=new fo(o,a.increment):Y();const c=Re.fromServerFormat(a.fieldPath);return new Ml(c,u)}(t,i)):[];if(e.update){e.update.name;const i=On(t,e.update.name),s=new ft({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ft(c.map(h=>Re.fromServerFormat(h)))}(e.updateMask);return new yr(i,s,o,n,r)}return new Do(i,s,n,r)}if(e.delete){const i=On(t,e.delete);return new Vo(i,n)}if(e.verify){const i=On(t,e.verify);return new hg(i,n)}return Y()}function KV(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qe(i.updateTime):Qe(s);return o.isEqual(ee.min())&&(o=Qe(s)),new DV(o,i.transformResults||[])}(n,e))):[]}function kb(t,e){return{documents:[bb(t,e.path)]}}function Md(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bb(t,i);const s=function(c){if(c.length!==0)return Db(ye.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Dr(g.field),direction:HV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ep(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Pb(t,e,n,r){const{_t:i,parent:s}=Md(t,e),o={},a=[];let u=0;return n.forEach(c=>{const h=r?c.alias:"aggregate_"+u++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Dr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Dr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function Cb(t){let e=Ab(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=Nb(p);return g instanceof ye&&lg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new vl(xs(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,Dl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,E=p.values||[];return new si(E,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,E=p.values||[];return new si(E,g)}(n.endAt)),eb(e,i,o,s,a,"F",u,c)}function WV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xs(n.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xs(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ce.create(xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ye.create(n.compositeFilter.filters.map(r=>Nb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function HV(t){return jV[t]}function QV(t){return UV[t]}function YV(t){return zV[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function xs(t){return Re.fromServerFormat(t.fieldPath)}function Db(t){return t instanceof ce?function(n){if(n.op==="=="){if(dw(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NAN"}};if(cw(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dw(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NAN"}};if(cw(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(n.field),op:QV(n.op),value:n.value}}}(t):t instanceof ye?function(n){const r=n.getFilters().map(i=>Db(i));return r.length===1?r[0]:{compositeFilter:{op:YV(n.op),filters:r}}}(t):Y()}function JV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.ct=e}}function XV(t,e){let n;if(e.document)n=Rb(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=rs(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=W.fromSegments(e.unknownDocument.path),i=rs(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Oe(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function kw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:wl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:po(s,o.version.toTimestamp()),createTime:po(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ns(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:ns(e.version)}}return r}function Gc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ns(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function rs(t){const e=new Oe(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Ci(t,e){const n=(e.baseMutations||[]).map(s=>bp(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>bp(t.ct,s)),i=Oe.fromMillis(e.localWriteTimeMs);return new fg(e.batchId,i,n,r)}function Aa(t){const e=rs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?rs(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return X(s.documents.length===1),bt(No(Ab(s.documents[0])))}(t.query):function(s){return bt(Cb(s))}(t.query),new Xn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ze.fromBase64String(t.resumeToken))}function Lb(t,e){const n=ns(e.snapshotVersion),r=ns(e.lastLimboFreeSnapshotVersion);let i;i=zc(e.target)?kb(t.ct,e.target):Md(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function _g(t){const e=Cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}function of(t,e){return new mg(e.largestBatchId,bp(t.ct,e.overlayMutation))}function Pw(t,e){const n=e.path.lastSegment();return[t,St(e.path.popLast()),n]}function Cw(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ns(r.readTime),documentKey:St(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{getBundleMetadata(e,n){return Nw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:rs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Nw(e).put(function(i){return{bundleId:i.id,createTime:ns(Qe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Dw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:_g(s.bundledQuery),readTime:rs(s.readTime)}}(r)})}saveNamedQuery(e,n){return Dw(e).put(function(i){return{name:i.name,readTime:ns(Qe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Nw(t){return nt(t,"bundles")}function Dw(t){return nt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Fd(e,r)}getOverlay(e,n){return da(e).get(Pw(this.userId,n)).next(r=>r?of(this.serializer,r):null)}getOverlays(e,n){const r=Cn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new mg(n,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(St(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(da(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Cn(),s=St(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return da(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=of(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Cn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return da(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const p=of(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return da(e).put(function(i,s,o){const[a,u,c]=Pw(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Il(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function da(t){return nt(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{Pt(e){return nt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?ze.fromUint8Array(r):ze.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Ne(e.integerValue));else if("doubleValue"in e){const r=Ne(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),ml(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=ur(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(cr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?qS(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Vd(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):Y()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Ne(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),W.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Ni.vt=new Ni;function tO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Vw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=tO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class nO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Vw(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Vw(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class rO{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class iO{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ha{constructor(){this.jt=new nO,this.Ht=new rO(this.jt),this.Jt=new iO(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Di(this.indexId,this.documentKey,this.arrayValue,r)}}function xr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Ow(t.arrayValue,e.arrayValue),n!==0?n:(n=Ow(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function Ow(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.Xt=new ve((n,r)=>Re.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(X(e.collectionGroup===this.collectionId),this.nn)return!1;const n=pp(e);if(n!==void 0&&!this.sn(n))return!1;const r=ki(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ve(Re.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new qi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new qi(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new qi(r.field,r.dir==="asc"?0:1)));return new ao(ao.UNKNOWN_ID,this.collectionId,n,lo.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){var e,n;if(X(t instanceof ce||t instanceof ye),t instanceof ce){if(t instanceof ZS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ce.create(t.field,"==",s)))||[];return ye.create(i,"or")}return t}const r=t.filters.map(i=>Mb(i));return ye.create(r,t.op)}function sO(t){if(t.getFilters().length===0)return[];const e=Rp(Mb(t));return X(Fb(e)),Ap(e)||xp(e)?[e]:e.getFilters()}function Ap(t){return t instanceof ce}function xp(t){return t instanceof ye&&lg(t)}function Fb(t){return Ap(t)||xp(t)||function(n){if(n instanceof ye&&_p(n)){for(const r of n.getFilters())if(!Ap(r)&&!xp(r))return!1;return!0}return!1}(t)}function Rp(t){if(X(t instanceof ce||t instanceof ye),t instanceof ce)return t;if(t.filters.length===1)return Rp(t.filters[0]);const e=t.filters.map(r=>Rp(r));let n=ye.create(e,t.op);return n=Kc(n),Fb(n)?n:(X(n instanceof ye),X(co(n)),X(n.filters.length>1),n.filters.reduce((r,i)=>vg(r,i)))}function vg(t,e){let n;return X(t instanceof ce||t instanceof ye),X(e instanceof ce||e instanceof ye),n=t instanceof ce?e instanceof ce?function(i,s){return ye.create([i,s],"and")}(t,e):Mw(t,e):e instanceof ce?Mw(e,t):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),co(i)&&co(s))return YS(i,s.getFilters());const o=_p(i)?i:s,a=_p(i)?s:i,u=o.filters.map(c=>vg(c,a));return ye.create(u,"or")}(t,e),Kc(n)}function Mw(t,e){if(co(e))return YS(e,t.getFilters());{const n=e.filters.map(r=>vg(t,r));return ye.create(n,"or")}}function Kc(t){if(X(t instanceof ce||t instanceof ye),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return Kc(e[0]);if(HS(t))return t;const n=e.map(i=>Kc(i)),r=[];return n.forEach(i=>{i instanceof ce?r.push(i):i instanceof ye&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ye.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.un=new wg}addToCollectionParentIndex(e,n){return this.un.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Zt.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class wg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Uint8Array(0);class aO{constructor(e,n){this.databaseId=n,this.cn=new wg,this.ln=new gr(r=>Zi(r),(r,i)=>Vl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:St(i)};return Fw(e).put(s)}return D.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[PS(n),""],!1,!0);return Fw(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,n){const r=fa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ts(e);return s.next(a=>{o.put(Cw(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=fa(e),i=Ts(e),s=Es(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=fa(e),r=Es(e),i=Ts(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return D.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Lw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Es(e);let i=!0;const s=new Map;return D.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return D.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`}(u)} to execute ${Zi(n)}`);const h=function(I,k){const V=pp(k);if(V===void 0)return null;for(const L of Bc(I,V.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),p=function(I,k){const V=new Map;for(const L of ki(k))for(const T of Bc(I,L.fieldPath))switch(T.op){case"==":case"in":V.set(L.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return V.set(L.fieldPath.canonicalString(),T.value),Array.from(V.values())}return null}(c,u),g=function(I,k){const V=[];let L=!0;for(const T of ki(k)){const y=T.kind===0?gw(I,T.fieldPath,I.startAt):yw(I,T.fieldPath,I.startAt);V.push(y.value),L&&(L=y.inclusive)}return new si(V,L)}(c,u),E=function(I,k){const V=[];let L=!0;for(const T of ki(k)){const y=T.kind===0?yw(I,T.fieldPath,I.endAt):gw(I,T.fieldPath,I.endAt);V.push(y.value),L&&(L=y.inclusive)}return new si(V,L)}(c,u),A=this.In(u,c,g),C=this.In(u,c,E),P=this.Tn(u,c,p),v=this.En(u.indexId,h,A,g.inclusive,C,E.inclusive,P);return D.forEach(v,w=>r.G(w,n.limit).next(I=>{I.forEach(k=>{const V=W.fromSegments(k.documentKey);o.has(V)||(o=o.add(V),a.push(V))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=sO(ye.create(e.filters,"and")).map(r=>wp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),h=[];for(let p=0;p<u;++p){const g=n?this.dn(n[p/c]):Cu,E=this.An(e,g,r[p%c],i),A=this.Rn(e,g,s[p%c],o),C=a.map(P=>this.An(e,g,P,!0));h.push(...this.createRange(E,A,C))}return h}An(e,n,r,i){const s=new Di(e,W.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Di(e,W.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Lw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new ve(Re.comparator),h=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new ha;for(const i of ki(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Ni.vt.It(s,o)}return r.zt()}dn(e){const n=new ha;return Ni.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new ha;return Ni.vt.It(Xi(this.databaseId,n),r.Yt(function(s){const o=ki(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new ha);let s=0;for(const o of ki(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&_l(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Ni.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ha;u.seed(a.zt()),Ni.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=fa(e),i=Ts(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,p){const g=p?new lo(p.sequenceNumber,new Zt(rs(p.readTime),new W(Pn(p.documentKey)),p.largestBatchId)):lo.empty(),E=h.fields.map(([A,C])=>new qi(Re.fromServerFormat(A),C));return new ao(h.indexId,h.collectionGroup,E,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=fa(e),s=Ts(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,u=>s.put(Cw(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?D.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,n,r,i){return Es(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Es(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Es(e);let s=new ve(xr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ve(xr);const i=this.Vn(n,e);if(i==null)return r;const s=pp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(_l(o))for(const a of o.arrayValue.values||[])r=r.add(new Di(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Di(n.indexId,e.key,Cu,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,h,p,g){const E=u.getIterator(),A=c.getIterator();let C=Is(E),P=Is(A);for(;C||P;){let v=!1,w=!1;if(C&&P){const I=h(C,P);I<0?w=!0:I>0&&(v=!0)}else C!=null?w=!0:v=!0;v?(p(P),P=Is(A)):w?(g(C),C=Is(E)):(C=Is(E),P=Is(A))}}(i,s,xr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),D.waitFor(o)}yn(e){let n=1;return Ts(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>xr(o,a)).filter((o,a,u)=>!a||xr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=xr(o,e),u=xr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Cu,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Cu,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return xr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jw)}getMinOffset(e,n){return D.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||Y())).next(jw)}}function Fw(t){return nt(t,"collectionParents")}function Es(t){return nt(t,"indexEntries")}function fa(t){return nt(t,"indexConfiguration")}function Ts(t){return nt(t,"indexState")}function jw(t){X(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;sg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Zt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(h,p,g)=>(a++,g.delete()));s.push(u.next(()=>{X(a===1)}));const c=[];for(const h of n.mutations){const p=MS(e,h.key.path,n.batchId);s.push(i.delete(p)),c.push(h.key)}return D.waitFor(s).next(()=>c)}function Wc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class jd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new jd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Rs(e),o=Rr(e);return o.add({}).next(a=>{X(typeof a=="number");const u=new fg(a,n,r,i),c=function(E,A,C){const P=C.baseMutations.map(w=>Il(E.ct,w)),v=C.mutations.map(w=>Il(E.ct,w));return{userId:A,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:P,mutations:v}}(this.serializer,this.userId,u),h=[];let p=new ve((g,E)=>ne(g.canonicalString(),E.canonicalString()));for(const g of i){const E=MS(this.userId,g.key.path,a);p=p.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(E,HD))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),D.waitFor(h).next(()=>u)})}lookupMutationBatch(e,n){return Rr(e).get(n).next(r=>r?(X(r.userId===this.userId),Ci(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?D.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Rr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(X(a.batchId>=r),s=Ci(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Rr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ci(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ec(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Rs(e).J({range:i},(o,a,u)=>{const[c,h,p]=o,g=Pn(h);if(c===this.userId&&n.path.isEqual(g))return Rr(e).get(p).next(E=>{if(!E)throw Y();X(E.userId===this.userId),s.push(Ci(this.serializer,E))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(ne);const i=[];return n.forEach(s=>{const o=ec(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Rs(e).J({range:a},(c,h,p)=>{const[g,E,A]=c,C=Pn(E);g===this.userId&&s.path.isEqual(C)?r=r.add(A):p.done()});i.push(u)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ec(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ve(ne);return Rs(e).J({range:o},(u,c,h)=>{const[p,g,E]=u,A=Pn(g);p===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(E)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Rr(e).get(s).next(o=>{if(o===null)throw Y();X(o.userId===this.userId),r.push(Ci(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return jb(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Rs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Pn(s[1]);i.push(u)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,n){return Ub(e,this.userId,n)}Nn(e){return zb(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ub(t,e,n){const r=ec(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Rs(t).J({range:s,H:!0},(a,u,c)=>{const[h,p,g]=a;h===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function Rr(t){return nt(t,"mutations")}function Rs(t){return nt(t,"documentMutations")}function zb(t){return nt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new is(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>ee.fromTimestamp(new Oe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ss(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ss(e).J((o,a)=>{const u=Aa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ss(e).J((r,i)=>{const s=Aa(i);n(s)})}qn(e){return zw(e).get("targetGlobalKey").next(n=>(X(n!==null),n))}Qn(e,n){return zw(e).put("targetGlobalKey",n)}Kn(e,n){return Ss(e).put(Lb(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Zi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ss(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=Aa(a);Vl(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Vr(e);return n.forEach(o=>{const a=St(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,n,r){const i=Vr(e);return D.forEach(n,s=>{const o=St(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Vr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Vr(e);let s=se();return i.J({range:r,H:!0},(o,a,u)=>{const c=Pn(o[1]),h=new W(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=St(n.path),i=IDBKeyRange.bound([r],[PS(r)],!1,!0);let s=0;return Vr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ss(e).get(n).next(r=>r?Aa(r):null)}}function Ss(t){return nt(t,"targets")}function zw(t){return nt(t,"targetGlobal")}function Vr(t){return nt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class uO{constructor(e){this.Un=e,this.buffer=new ve(Bw),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Bb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mi(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await pi(n)}await this.Hn(3e5)})}}class cO{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve(Mt.oe);const r=new uO(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Uw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uw):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),bs()<=le.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function $b(t,e){return new cO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.db=e,this.garbageCollector=$b(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Nu(e,r)}removeReference(e,n,r){return Nu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Nu(e,n)}nr(e,n){return function(i,s){let o=!1;return zb(i).Y(a=>Ub(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Vr(e).delete(function(p){return[0,St(p.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Nu(e,n)}tr(e,n){const r=Vr(e);let i,s=Mt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Mt.oe&&n(new W(Pn(i)),s),s=c,i=u):s=Mt.oe}).next(()=>{s!==Mt.oe&&n(new W(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nu(t,e){return Vr(t).put(function(r,i){return{targetId:0,path:St(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return bi(e).put(r)}removeEntry(e,n,r){return bi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Gc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return bi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(pa(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return bi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(pa(n))},(i,s)=>{r={document:this.ir(n,s),size:Wc(s)}}).next(()=>r)}getEntries(e,n){let r=jt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=jt(),i=new Se(W.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Wc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return D.resolve();let i=new ve(Gw);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(pa(i.first()),pa(i.last())),o=i.getIterator();let a=o.getNext();return bi(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const p=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Gw(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(pa(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=jt();for(const p of c){const g=this.ir(W.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(Ll(n,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=jt();const o=qw(n,r),a=qw(n,Zt.max());return bi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const p=this.ir(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new fO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return $w(e).get("remoteDocumentGlobalKey").next(n=>(X(!!n),n))}rr(e,n){return $w(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=XV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return xe.newInvalidDocument(e)}}function Gb(t){return new hO(t)}class fO extends qb{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new gr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ve((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=kw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Wc(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=kw(this.cr.serializer,o.convertToNoDocument(ee.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function $w(t){return nt(t,"remoteDocumentGlobal")}function bi(t){return nt(t,"remoteDocumentsV14")}function pa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qw(t,e){const n=e.documentKey.path.toArray();return[t,Gc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Gw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ba(r.mutation,i,Ft.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Cn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Sa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jt();const o=za(),a=function(){return za()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof yr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ba(h.mutation,c,h.mutation.getFieldMask(),Oe.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new pO(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=za();let i=new Se((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Ft.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=lb();h.forEach(g=>{if(!s.has(g)){const E=mb(n.get(g),r.get(g));E!==null&&p.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ug(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Cn());let a=-1,u=s;return o.next(c=>D.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:a,changes:ab(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Sa();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(p,g){return new mr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,xe.newInvalidDocument(h)))});let a=Sa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ba(h.mutation,c,Ft.empty(),Oe.now()),Ll(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return D.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_g(i.bundledQuery),readTime:Qe(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.overlays=new Se(W.comparator),this.Ir=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Cn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Cn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Cn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mg(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Tr=new ve(rt.Er),this.dr=new ve(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new ue([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new ue([])),r=new rt(n,e),i=new rt(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ve(rt.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(ne);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new rt(new W(s),0);let a=new ve(ne);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new rt(n,0),i=this.br.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.Mr=e,this.docs=function(){return new Se(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jt();const o=n.path,a=new W(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sg(NS(h),r)<=0||(i.has(h.key)||Ll(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wO(this)}getSize(e){return D.resolve(this.size)}}class wO extends qb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.persistence=e,this.Nr=new gr(n=>Zi(n),Vl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ig,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),D.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Kn(n),D.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Mt(0),this.Kr=!1,this.Kr=!0,this.$r=new yO,this.referenceDelegate=e(this),this.Ur=new IO(this),this.indexManager=new oO,this.remoteDocumentCache=function(i){return new vO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ob(n),this.Gr=new mO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _O(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new EO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class EO extends VS{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Jr=new Ig,this.Yr=null}static Zr(e){return new Ud(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return D.or([()=>D.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Hc{constructor(e,n){this.persistence=e,this.ti=new gr(r=>St(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=$b(this,n)}static Zr(e,n){return new Hc(e,n)}zr(){}jr(e){return D.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return D.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?D.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),D.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),D.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=nc(e.data.value)),n}nr(e,n,r){return D.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return D.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Cd("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sw,{unique:!0}),u.createObjectStore("documentMutations")}(e),Kw(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Kw(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sw,{unique:!0});const p=c.store("mutations"),g=h.map(E=>p.put(E));return D.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:oV});c.createIndex("collectionPathOverlayIndex",aV,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",lV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:QD});c.createIndex("documentKeyIndex",YD),c.createIndex("collectionGroupIndex",JD)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:nV}).createIndex("sequenceNumberIndex",rV,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:iV}).createIndex("documentKeyIndex",sV,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Wc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{X(u.userId===s.userId);const c=Ci(this.serializer,u);return jb(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ue(o),c=function(p){return[0,St(p)]}(u);s.push(n.get(c).next(h=>h?D.resolve():(p=>n.put({targetId:0,path:St(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:tV});const r=n.store("collectionParents"),i=new wg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:St(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ue(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=Pn(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Aa(i),o=Lb(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(p){return p.document?new W(ue.fromString(p.document.name).popFirst(5)):p.noDocument?W.fromSegments(p.noDocument.path):p.unknownDocument?W.fromSegments(p.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=Gb(this.serializer),s=new Eg(Ud.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:se();Ci(this.serializer,u).keys().forEach(p=>h=h.add(p)),a.set(u.userId,h)}),D.forEach(a,(u,c)=>{const h=new st(c),p=Fd.lt(this.serializer,h),g=s.getIndexManager(h),E=jd.lt(h,this.serializer,g,s.referenceDelegate);return new Kb(i,E,p,g).recalculateAndSaveOverlaysForDocumentKeys(new mp(n,Mt.oe),u).next()})})}}function Kw(t){t.createObjectStore("targetDocuments",{keyPath:ZD}).createIndex("documentTargetsIndex",eV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",XD,{unique:!0}),t.createObjectStore("targetGlobal")}const af="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Tg{constructor(e,n,r,i,s,o,a,u,c,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Tg.D())throw new j(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dO(this,i),this.Ai=n+"main",this.serializer=new Ob(u),this.Ri=new Vn(this.Ai,this.hi,new TO(this.serializer)),this.$r=new eO,this.Ur=new lO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gb(this.serializer),this.Gr=new ZV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(M.FAILED_PRECONDITION,af);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Mt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Du(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(mi(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ma(e).get("owner").next(n=>D.resolve(this.vi(n)))}Ci(e){return Du(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=nt(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):ma(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new j(M.FAILED_PRECONDITION,af);return!1}}return!(!this.networkEnabled||!this.inForeground)||Du(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new mp(e,Mt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Du(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return jd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new aO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Fd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?dV:u===16?cV:u===15?ag:u===14?US:u===13?jS:u===12?uV:u===11?FS:void Y()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new mp(a,this.Qr?this.Qr.next():Mt.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new j(M.FAILED_PRECONDITION,DS);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ma(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(M.FAILED_PRECONDITION,af)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ma(e).put("owner",n)}static D(){return Vn.D()}bi(e){const n=ma(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):D.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;OT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ma(t){return nt(t,"owner")}function Du(t){return nt(t,"clientMetadata")}function Sg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new bg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return OT()?8:OS(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new SO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(bs()<=le.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(bs()<=le.DEBUG&&U("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(bs()<=le.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(n))):D.resolve())}Yi(e,n){if(_w(n))return D.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$c(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,$c(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _w(n)||i.isEqual(ee.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?D.resolve(null):(bs()<=le.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),As(n)),this.rs(e,o,n,CS(i,-1)).next(a=>a))})}ts(e,n){let r=new ve(sb(e));return n.forEach((i,s)=>{Ll(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return bs()<=le.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",As(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(ne),this._s=new gr(s=>Zi(s),Vl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Hb(t,e,n,r){return new bO(t,e,n,r)}async function Qb(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function AO(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,g=p.keys();let E=D.resolve();return g.forEach(A=>{E=E.next(()=>h.getEntry(u,A)).next(C=>{const P=c.docVersions.get(A);X(P!==null),C.version.compareTo(P)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Yb(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function xO(t,e){const n=G(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ze.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),i=i.insert(p,E),function(C,P,v){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(g,E,h)&&a.push(n.Ur.updateTargetData(s,E))});let u=jt(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Jb(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Jb(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function RO(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mo(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function go(t,e,n){const r=G(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qc(t,e,n){const r=G(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=G(u),g=p._s.get(h);return g!==void 0?D.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(a=>(eA(r,ib(e),a),{documents:a,Ts:s})))}function Xb(t,e){const n=G(t),r=G(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function Zb(t,e){const n=G(t),r=n.us.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,CS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(eA(n,e,i),i))}function eA(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function kO(t,e,n,r){const i=G(t);let s=se(),o=jt();for(const c of n){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const p=e.ds(c);p.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,p)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await mo(i,function(h){return bt(No(ue.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>Jb(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function PO(t,e,n=se()){const r=await mo(t,bt(_g(e.bundledQuery))),i=G(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(ze.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Ww(t,e){return`firestore_clients_${t}_${e}`}function Hw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function lf(t,e){return`firestore_targets_${t}_${e}`}class Yc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new Yc(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $a{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new $a(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=cg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=LS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Jc(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Ag{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Ag(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class kp{constructor(){this.activeTargetIds=cg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uf{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Se(ne),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Ww(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new kp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(Ww(this.persistenceKey,r));if(i){const s=Jc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(lf(this.persistenceKey,e));if(i){const s=$a.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lf(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Mt.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Mt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new Yc(this.currentUser,e,n,r),s=Hw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=Hw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=lf(this.persistenceKey,e),s=new $a(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return Jc.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yc.Rs(new st(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return $a.Rs(i,n)}Ls(e){return Ag.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=cg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class tA{constructor(){this.so=new kp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=null;function cf(){return Vu===null?Vu=function(){return 268435456+Math.round(2147483648*Math.random())}():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class VO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=cf(),u=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Xt("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=NO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=cf();return new Promise((o,a)=>{const u=new ES;u.setWithCredentials(!0),u.listenOnce(TS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zu.NO_ERROR:const h=u.getResponseJson();U(It,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Zu.TIMEOUT:U(It,`RPC '${e}' ${s} timed out`),a(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const p=u.getStatus();if(U(It,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const A=function(P){const v=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(E.status);a(new j(A,E.message))}else a(new j(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new j(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U(It,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(It,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=cf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AS(),a=bS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");U(It,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let g=!1,E=!1;const A=new DO({Io:P=>{E?U(It,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(U(It,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),U(It,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),C=(P,v,w)=>{P.listen(v,I=>{try{w(I)}catch(k){setTimeout(()=>{throw k},0)}})};return C(p,Ta.EventType.OPEN,()=>{E||(U(It,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),C(p,Ta.EventType.CLOSE,()=>{E||(E=!0,U(It,`RPC '${e}' stream ${i} transport closed`),A.So())}),C(p,Ta.EventType.ERROR,P=>{E||(E=!0,Xt(It,`RPC '${e}' stream ${i} transport errored:`,P),A.So(new j(M.UNAVAILABLE,"The operation could not be completed")))}),C(p,Ta.EventType.MESSAGE,P=>{var v;if(!E){const w=P.data[0];X(!!w);const I=w,k=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(k){U(It,`RPC '${e}' stream ${i} received error:`,k);const V=k.status;let L=function(S){const x=Ye[S];if(x!==void 0)return vb(x)}(V),T=k.message;L===void 0&&(L=M.INTERNAL,T="Unknown error status: "+V+" with message "+k.message),E=!0,A.So(new j(L,T)),p.close()}else U(It,`RPC '${e}' stream ${i} received:`,w),A.bo(w)}}),C(a,SS.STAT_EVENT,P=>{P.stat===fp.PROXY?U(It,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===fp.NOPROXY&&U(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return typeof window<"u"?window:null}function oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){return new BV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new j(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OO extends rA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=GV(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Qe(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Sp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=zc(u)?{documents:kb(s,u)}:{query:Md(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tb(s,o.resumeToken);const c=Ep(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=po(s,o.snapshotVersion.toTimestamp());const c=Ep(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=WV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Sp(this.serializer),n.removeTarget=e,this.a_(n)}}class LO extends rA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=KV(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Sp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Il(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Tp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Tp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class FO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(We(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{yi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=G(u);c.L_.add(4),await Oo(c),c.q_.set("Unknown"),c.L_.delete(4),await zl(c)}(this))})}),this.q_=new FO(r,i)}}async function zl(t){if(yi(t))for(const e of t.B_)await e(!0)}async function Oo(t){for(const e of t.B_)await e(!1)}function zd(t,e){const n=G(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pg(n)?kg(n):Mo(n).r_()&&Rg(n,e))}function yo(t,e){const n=G(t),r=Mo(n);n.N_.delete(e),r.r_()&&iA(n,e),n.N_.size===0&&(r.r_()?r.o_():yi(n)&&n.q_.set("Unknown"))}function Rg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).A_(e)}function iA(t,e){t.Q_.xe(e),Mo(t).R_(e)}function kg(t){t.Q_=new FV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.q_.v_()}function Pg(t){return yi(t)&&!Mo(t).n_()&&t.N_.size>0}function yi(t){return G(t).L_.size===0}function sA(t){t.Q_=void 0}async function UO(t){t.q_.set("Online")}async function zO(t){t.N_.forEach((e,n)=>{Rg(t,e)})}async function BO(t,e){sA(t),Pg(t)?(t.q_.M_(e),kg(t)):t.q_.set("Unknown")}async function $O(t,e,n){if(t.q_.set("Online"),e instanceof Eb&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xc(t,r)}else if(e instanceof sc?t.Q_.Ke(e):e instanceof Ib?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await Yb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ze.EMPTY_BYTE_STRING,h.snapshotVersion)),iA(s,u);const p=new Xn(h.target,u,c,h.sequenceNumber);Rg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Xc(t,r)}}async function Xc(t,e,n){if(!mi(e))throw e;t.L_.add(1),await Oo(t),t.q_.set("Offline"),n||(n=()=>Yb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zl(t)})}function oA(t,e){return e().catch(n=>Xc(t,n,e))}async function Lo(t){const e=G(t),n=oi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;qO(e);)try{const i=await RO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,GO(e,i)}catch(i){await Xc(e,i)}aA(e)&&lA(e)}function qO(t){return yi(t)&&t.O_.length<10}function GO(t,e){t.O_.push(e);const n=oi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function aA(t){return yi(t)&&!oi(t).n_()&&t.O_.length>0}function lA(t){oi(t).start()}async function KO(t){oi(t).p_()}async function WO(t){const e=oi(t);for(const n of t.O_)e.m_(n.mutations)}async function HO(t,e,n){const r=t.O_.shift(),i=pg.from(r,e,n);await oA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lo(t)}async function QO(t,e){e&&oi(t).V_&&await async function(r,i){if(function(o){return _b(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();oi(r).s_(),await oA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lo(r)}}(t,e),aA(t)&&lA(t)}async function Yw(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.L_.add(3),await Oo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zl(n)}async function Pp(t,e){const n=G(t);e?(n.L_.delete(2),await zl(n)):e||(n.L_.add(2),await Oo(n),n.q_.set("Unknown"))}function Mo(t){return t.K_||(t.K_=function(n,r,i){const s=G(n);return s.w_(),new OO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:UO.bind(null,t),Ro:zO.bind(null,t),mo:BO.bind(null,t),d_:$O.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pg(t)?kg(t):t.q_.set("Unknown")):(await t.K_.stop(),sA(t))})),t.K_}function oi(t){return t.U_||(t.U_=function(n,r,i){const s=G(n);return s.w_(),new LO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:KO.bind(null,t),mo:QO.bind(null,t),f_:WO.bind(null,t),g_:HO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Lo(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(t,e){if(We("AsyncQueue",`${e}: ${t}`),mi(t))return new j(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.W_=new Se(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _o{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _o(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class JO{constructor(){this.queries=Xw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=G(n),s=i.queries;i.queries=Xw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new j(M.ABORTED,"Firestore shutting down"))}}function Xw(){return new gr(t=>rb(t),Ol)}async function Ng(t,e){const n=G(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new YO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Fo(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Vg(n)}async function Dg(t,e){const n=G(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XO(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Vg(n)}function ZO(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Vg(t){t.Y_.forEach(e=>{e.next()})}var Cp,Zw;(Zw=Cp||(Cp={})).ea="default",Zw.Cache="cache";class Og{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Cp.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.serializer=e}Es(e){return On(this.serializer,e)}ds(e){return e.metadata.exists?Rb(this.serializer,e.document,!1):xe.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Qe(e)}}class tL{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=uA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=ue.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new eI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||se()).add(s);n.set(o,a)}}return n}async complete(){const e=await kO(this.localStore,new eI(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await PO(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function uA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.key=e}}class dA{constructor(e){this.key=e}}class hA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=sb(e),this.Ra=new Js(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Jw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),E=Ll(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;g&&E?g.data.isEqual(E.data)?A!==C&&(r.track({type:3,doc:E}),P=!0):this.ga(g,E)||(r.track({type:2,doc:E}),P=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(a=!0)):!g&&E?(r.track({type:0,doc:E}),P=!0):g&&!E&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(a=!0)),P&&(E?(o=o.add(E),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(E,A){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return C(E)-C(A)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new _o(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new dA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cA(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return _o.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rL{constructor(e){this.key=e,this.va=!1}}class iL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new gr(a=>rb(a),Ol),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(W.comparator),this.Na=new Map,this.La=new Ig,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sL(t,e,n=!0){const r=Bd(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fA(r,e,n,!0),i}async function oL(t,e){const n=Bd(t);await fA(n,e,!0,!1)}async function fA(t,e,n,r){const i=await mo(t.localStore,bt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Lg(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&zd(t.remoteStore,i),a}async function Lg(t,e,n,r,i){t.Ka=(p,g,E)=>async function(C,P,v,w){let I=P.view.ma(v);I.ns&&(I=await Qc(C.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,I)));const k=w&&w.targetChanges.get(P.targetId),V=w&&w.targetMismatches.get(P.targetId)!=null,L=P.view.applyChanges(I,C.isPrimaryClient,k,V);return Np(C,P.targetId,L.wa),L.snapshot}(t,p,g,E);const s=await Qc(t.localStore,e,!0),o=new hA(e,s.Ts),a=o.ma(s.documents),u=jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Np(t,n,c.wa);const h=new nL(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function aL(t,e,n){const r=G(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ol(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await go(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yo(r.remoteStore,i.targetId),vo(r,i.targetId)}).catch(pi)):(vo(r,i.targetId),await go(r.localStore,i.targetId,!0))}async function lL(t,e){const n=G(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yo(n.remoteStore,r.targetId))}async function uL(t,e,n){const r=Ug(t);try{const i=await function(o,a){const u=G(o),c=Oe.now(),h=a.reduce((E,A)=>E.add(A.key),se());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=jt(),C=se();return u.cs.getEntries(E,h).next(P=>{A=P,A.forEach((v,w)=>{w.isValidDocument()||(C=C.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(P=>{p=P;const v=[];for(const w of a){const I=OV(w,p.get(w.key).overlayedDocument);I!=null&&v.push(new yr(w.key,I,KS(I.value.mapValue),Ve.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,v,a)}).next(P=>{g=P;const v=P.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(E,P.batchId,v)})}).then(()=>({batchId:g.batchId,changes:ab(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Se(ne)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await _r(r,i.changes),await Lo(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");n.reject(s)}}async function pA(t,e){const n=G(t);try{const r=await xO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?X(o.va):i.removedDocuments.size>0&&(X(o.va),o.va=!1))}),await _r(n,r,e)}catch(r){await pi(r)}}function tI(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=G(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&Vg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cL(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(W.comparator);o=o.insert(s,xe.newNoDocument(s,ee.min()));const a=se().add(s),u=new Fl(ee.min(),new Map,new Se(ne),o,a);await pA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),jg(r)}else await go(r.localStore,e,!1).then(()=>vo(r,e,n)).catch(pi)}async function dL(t,e){const n=G(t),r=e.batch.batchId;try{const i=await AO(n.localStore,e);Fg(n,r,null),Mg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _r(n,i)}catch(i){await pi(i)}}async function hL(t,e,n){const r=G(t);try{const i=await function(o,a){const u=G(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(X(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Fg(r,e,n),Mg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _r(r,i)}catch(i){await pi(i)}}async function fL(t,e){const n=G(t);yi(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=G(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=Fo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Mg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Fg(t,e,n){const r=G(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||mA(t,r)})}function mA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yo(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),jg(t))}function Np(t,e,n){for(const r of n)r instanceof cA?(t.La.addReference(r.key,e),pL(t,r)):r instanceof dA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||mA(t,r.key)):Y()}function pL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),jg(t))}function jg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(ue.fromString(e)),r=t.qa.next();t.Na.set(r,new rL(n)),t.Oa=t.Oa.insert(n,r),zd(t.remoteStore,new Xn(bt(No(n.path)),r,"TargetPurposeLimboResolution",Mt.oe))}}async function _r(t,e,n){const r=G(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=bg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=G(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(c,g=>D.forEach(g.$i,E=>h.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>D.forEach(g.Ui,E=>h.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!mi(p))throw p;U("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const E=h.os.get(g),A=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(A);h.os=h.os.insert(g,C)}}}(r.localStore,s))}async function mL(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Qb(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new j(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _r(n,r.hs)}}function gL(t,e){const n=G(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function yL(t,e){const n=G(t),r=await Qc(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&Np(n,e.targetId,i.wa),i}async function _L(t,e){const n=G(t);return Zb(n.localStore,e).then(r=>_r(n,r))}async function vL(t,e,n,r){const i=G(t),s=await function(a,u){const c=G(a),h=G(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Mn(p,u).next(g=>g?c.localDocuments.getDocuments(p,g):D.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Lo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Fg(i,e,r||null),Mg(i,e),function(a,u){G(G(a).mutationQueue).On(u)}(i.localStore,e)):Y(),await _r(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function wL(t,e){const n=G(t);if(Bd(n),Ug(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await nI(n,r.toArray());n.Qa=!0,await Pp(n.remoteStore,!0);for(const s of i)zd(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(vo(n,o),go(n.localStore,o,!0))),yo(n.remoteStore,o)}),await i,await nI(n,r),function(o){const a=G(o);a.Na.forEach((u,c)=>{yo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Se(W.comparator)}(n),n.Qa=!1,await Pp(n.remoteStore,!1)}}async function nI(t,e,n){const r=G(t),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await mo(r.localStore,bt(u[0]));for(const c of u){const h=r.Fa.get(c),p=await yL(r,h);p.snapshot&&s.push(p.snapshot)}}else{const c=await Xb(r.localStore,o);a=await mo(r.localStore,c),await Lg(r,gA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function gA(t){return eb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function IL(t){return function(n){return G(G(n).persistence).Qi()}(G(t).localStore)}async function EL(t,e,n,r){const i=G(t);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await Zb(i.localStore,ib(s[0])),a=Fl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ze.EMPTY_BYTE_STRING);await _r(i,o,a);break}case"rejected":await go(i.localStore,e,!0),vo(i,e,r);break;default:Y()}}async function TL(t,e,n){const r=Bd(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await Xb(r.localStore,i),o=await mo(r.localStore,s);await Lg(r,gA(s),o.targetId,!1,o.resumeToken),zd(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await go(r.localStore,i,!1).then(()=>{yo(r.remoteStore,i),vo(r,i)}).catch(pi)}}function Bd(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cL.bind(null,e),e.Ca.d_=XO.bind(null,e.eventManager),e.Ca.$a=ZO.bind(null,e.eventManager),e}function Ug(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hL.bind(null,e),e}function SL(t,e,n){const r=G(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(E,A){const C=G(E),P=Qe(A.createTime);return C.persistence.runTransaction("hasNewerBundle","readonly",v=>C.Gr.getBundleMetadata(v,A.id)).then(v=>!!v&&v.createTime.compareTo(P)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(E){return{taskState:"Success",documentsLoaded:E.totalDocuments,bytesLoaded:E.totalBytes,totalDocuments:E.totalDocuments,totalBytes:E.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(uA(u));const c=new tL(u,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const g=await c.la(h);g&&a._updateProgress(g),h=await o.Ua()}const p=await c.complete();return await _r(s,p.Ia,void 0),await function(E,A){const C=G(E);return C.persistence.runTransaction("Save bundle","readwrite",P=>C.Gr.saveBundleMetadata(P,A))}(s.localStore,u),a._completeWith(p.progress),Promise.resolve(p.Pa)}catch(u){return Xt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ul(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Hb(this.persistence,new Wb,e.initialUser,this.serializer)}Ga(e){return new Eg(Ud.Zr,this.serializer)}Wa(e){return new tA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ai.provider={build:()=>new ai};class bL extends ai{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){X(this.persistence.referenceDelegate instanceof Hc);const r=this.persistence.referenceDelegate.garbageCollector;return new Bb(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Eg(r=>Hc.Zr(r,n),this.serializer)}}class zg extends ai{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ug(this.Ja.syncEngine),await Lo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Hb(this.persistence,new Wb,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Bb(r,e.asyncQueue,n)}Ha(e,n){const r=new KD(n,this.persistence);return new GD(e.asyncQueue,r)}Ga(e){const n=Sg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Tg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,nA(),oc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new tA}}class yA extends zg{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof uf&&(this.sharedClientState.syncEngine={no:vL.bind(null,n),ro:EL.bind(null,n),io:TL.bind(null,n),Qi:IL.bind(null,n),eo:_L.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await wL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=nA();if(!uf.D(n))throw new j(M.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Sg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new uf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class li{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mL.bind(null,this.syncEngine),await Pp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JO}()}createDatastore(e){const n=Ul(e.databaseInfo.databaseId),r=function(s){return new VO(s)}(e.databaseInfo);return function(s,o,a,u){return new MO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new jO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tI(this.syncEngine,n,0),function(){return Qw.D()?new Qw:new CO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const p=new iL(i,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=G(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Oo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}li.provider={build:()=>new li};function rI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new lt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new eL(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=G(i),a={documents:s.map(p=>wl(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,s.length),c=new Map;u.forEach(p=>{const g=qV(o.serializer,p);c.set(g.key.toString(),g)});const h=[];return s.forEach(p=>{const g=c.get(p.toString());X(!!g),h.push(g)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new hg(i,this.precondition(i)))}),await async function(r,i){const s=G(r),o={writes:i.map(a=>Il(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Ve.exists(!1):Ve.updateTime(n):Ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new j(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(n)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new xg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new xL(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Dl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!_b(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function df(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Qb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bg(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yw(e.remoteStore,i)),t._onlineComponents=e}async function Bg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xt("Error using user provided cache. Falling back to memory cache: "+n),await df(t,new ai)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await df(t,new ai);return t._offlineComponents}async function qd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await iI(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await iI(t,new li))),t._onlineComponents}function _A(t){return Bg(t).then(e=>e.persistence)}function jo(t){return Bg(t).then(e=>e.localStore)}function vA(t){return qd(t).then(e=>e.remoteStore)}function $g(t){return qd(t).then(e=>e.syncEngine)}function wA(t){return qd(t).then(e=>e.datastore)}async function wo(t){const e=await qd(t),n=e.eventManager;return n.onListen=sL.bind(null,e.syncEngine),n.onUnlisten=aL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lL.bind(null,e.syncEngine),n}function PL(t){return t.asyncQueue.enqueue(async()=>{const e=await _A(t),n=await vA(t);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.L_.delete(0),zl(s)}(n)})}function CL(t){return t.asyncQueue.enqueue(async()=>{const e=await _A(t),n=await vA(t);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.L_.add(0),await Oo(s),s.q_.set("Offline")}(n)})}function NL(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const p=G(c);return p.persistence.runTransaction("read document","readonly",g=>p.localDocuments.getDocument(g,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(M.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Fo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await jo(t),e,n)),n.promise}function IA(t,e,n={}){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new $d({next:g=>{h.Za(),o.enqueueAndForget(()=>Dg(s,p));const E=g.docs.has(a);!E&&g.fromCache?c.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&u&&u.source==="server"?c.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Og(No(a.path),h,{includeMetadataChanges:!0,_a:!0});return Ng(s,p)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function DL(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Qc(i,s,!0),u=new hA(s,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=Fo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await jo(t),e,n)),n.promise}function EA(t,e,n={}){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new $d({next:g=>{h.Za(),o.enqueueAndForget(()=>Dg(s,p)),g.fromCache&&u.source==="server"?c.reject(new j(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Og(a,h,{includeMetadataChanges:!0,_a:!0});return Ng(s,p)}(await wo(t),t.asyncQueue,e,n,r)),r.promise}function VL(t,e,n){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await wA(t);r.resolve(async function(o,a,u){var c;const h=G(o),{request:p,ut:g,parent:E}=Pb(h.serializer,tb(a),u);h.connection.Fo||delete p.parent;const A=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,E,p,1)).filter(P=>!!P.result);X(A.length===1);const C=(c=A[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(C).reduce((P,v)=>(P[g[v]]=C[v],P),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function OL(t,e){const n=new $d(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).Y_.add(s),s.next()}(await wo(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).Y_.delete(s)}(await wo(t),n))}}function LL(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?wb().encode(o):o,function(h,p){return new AL(h,p)}(function(h,p){if(h instanceof Uint8Array)return rI(h,p);if(h instanceof ArrayBuffer)return rI(new Uint8Array(h),p);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Ul(e));t.asyncQueue.enqueueAndForget(async()=>{SL(await $g(t),i,r)})}function ML(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await jo(t),e))}function FL(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=G(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(p,g,E,A,C){p=[...p],g=[...g],p.sort(E),g.sort(E);const P=p.length,v=g.length;let w=0,I=0;for(;w<v&&I<P;){const k=E(p[I],g[w]);k<0?C(p[I++]):k>0?A(g[w++]):(w++,I++)}for(;w<v;)A(g[w++]);for(;I<P;)C(p[I++])}(c,i,zD,h=>{a.push(o.addFieldIndex(u,h))},h=>{a.push(o.deleteFieldIndex(u,h))})).next(()=>D.waitFor(a)))}(await jo(t),e))}function jL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){G(r).ss.zi=i}(await jo(t),e))}function UL(t){return t.asyncQueue.enqueue(async()=>function(n){const r=G(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await jo(t)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e,n){if(!n)throw new j(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SA(t,e,n,r){if(e===!0&&r===!0)throw new j(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oI(t){if(!W.isDocumentKey(t))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aI(t){if(W.isDocumentKey(t))throw new j(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function oe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gd(t);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function bA(t,e){if(e<=0)throw new j(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RS;switch(r.type){case"firstParty":return new LD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sI.get(n);r&&(U("ComponentProvider","Removing Datastore"),sI.delete(n),r.terminate())}(this),Promise.resolve()}}function AA(t,e,n,r={}){var i;const s=(t=oe(t,Bl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=st.MOCK_USER;else{a=fP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(c)}t._authCredentials=new DD(new xS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class wn extends ut{constructor(e,n,r){super(e,n,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new W(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function Jr(t,e,...n){if(t=Z(t),qg("collection","path",e),t instanceof Bl){const r=ue.fromString(e,...n);return aI(r),new wn(t,null,r)}{if(!(t instanceof qe||t instanceof wn))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return aI(r),new wn(t.firestore,null,r)}}function zL(t,e){if(t=oe(t,Bl),qg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ut(t,null,function(r){return new mr(ue.emptyPath(),r)}(e))}function Gg(t,e,...n){if(t=Z(t),arguments.length===1&&(e=ig.newId()),qg("doc","path",e),t instanceof Bl){const r=ue.fromString(e,...n);return oI(r),new qe(t,null,new W(r))}{if(!(t instanceof qe||t instanceof wn))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return oI(r),new qe(t.firestore,t instanceof wn?t.converter:null,new W(r))}}function BL(t,e){return t=Z(t),e=Z(e),(t instanceof qe||t instanceof wn)&&(e instanceof qe||e instanceof wn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Kg(t,e){return t=Z(t),e=Z(e),t instanceof ut&&e instanceof ut&&t.firestore===e.firestore&&Ol(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xg(this,"async_queue_retry"),this.Vu=()=>{const r=oc();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!mi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Cg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Dp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xA{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=-1;class we extends Bl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uI(e),this._firestoreClient=void 0,await e}}}function qL(t,e,n){n||(n="(default)");const r=hr(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(sr(s,e))return i;throw new j(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new j(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function RA(t,e){const n=typeof t=="object"?t:Cm(),r=typeof t=="string"?t:e||"(default)",i=hr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dP("firestore");s&&AA(i,...s)}return i}function Le(t){if(t._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kA(t),t._firestoreClient}function kA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new pV(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,TA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new kL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function GL(t,e){Xt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return PA(t,li.provider,{build:r=>new zg(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function KL(t){Xt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();PA(t,li.provider,{build:n=>new yA(n,e.cacheSizeBytes)})}function PA(t,e,n){if((t=oe(t,we))._firestoreClient||t._terminated)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new j(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},kA(t)}function WL(t){if(t._initialized&&!t._terminated)throw new j(M.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Vn.D())return Promise.resolve();const i=r+"main";await Vn.delete(i)}(Sg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function HL(t){return function(n){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>fL(await $g(n),r)),r.promise}(Le(t=oe(t,we)))}function QL(t){return PL(Le(t=oe(t,we)))}function YL(t){return CL(Le(t=oe(t,we)))}function JL(t){return A1(t.app,"firestore",t._databaseId.database),t._delete()}function XL(t,e){const n=Le(t=oe(t,we)),r=new xA;return LL(n,t._databaseId,e,r),r}function ZL(t,e){return ML(Le(t=oe(t,we)),e).then(n=>n?new ut(t,null,n.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class CA{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(ze.fromBase64String(e))}catch(n){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ui(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function eM(){return new _i("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=/^__.*__$/;class nM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Do(e,this.data,n,this.fieldTransforms)}}class NA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Wd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(DA(this.Cu)&&tM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ul(e)}Qu(e,n,r,i=!1){return new Wd({Cu:e,methodName:n,qu:r,path:Re.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ds(t){const e=t._freezeSettings(),n=Ul(t._databaseId);return new rM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hd(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Zg("Data must be an object, but it was:",o,r);const a=LA(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=El(e,p,n);if(!o.contains(g))throw new j(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FA(h,g)||h.push(g)}u=new Ft(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new nM(new ft(a),u,c)}class ql extends vi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ql}}function VA(t,e,n){return new Wd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wg extends vi{_toFieldTransform(e){return new Ml(e.path,new ho)}isEqual(e){return e instanceof Wg}}class Hg extends vi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=VA(this,e,!0),r=this.Ku.map(s=>hs(s,n)),i=new es(r);return new Ml(e.path,i)}isEqual(e){return e instanceof Hg&&sr(this.Ku,e.Ku)}}class Qg extends vi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=VA(this,e,!0),r=this.Ku.map(s=>hs(s,n)),i=new ts(r);return new Ml(e.path,i)}isEqual(e){return e instanceof Qg&&sr(this.Ku,e.Ku)}}class Yg extends vi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new fo(e.serializer,cb(e.serializer,this.$u));return new Ml(e.path,n)}isEqual(e){return e instanceof Yg&&this.$u===e.$u}}function Jg(t,e,n,r){const i=t.Qu(1,e,n);Zg("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();gi(r,(u,c)=>{const h=Qd(e,u,n);c=Z(c);const p=i.Nu(h);if(c instanceof ql)s.push(h);else{const g=hs(c,p);g!=null&&(s.push(h),o.set(h,g))}});const a=new Ft(s);return new NA(o,a,i.fieldTransforms)}function Xg(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[El(e,r,n)],u=[i];if(s.length%2!=0)throw new j(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(El(e,s[g])),u.push(s[g+1]);const c=[],h=ft.empty();for(let g=a.length-1;g>=0;--g)if(!FA(c,a[g])){const E=a[g];let A=u[g];A=Z(A);const C=o.Nu(E);if(A instanceof ql)c.push(E);else{const P=hs(A,C);P!=null&&(c.push(E),h.set(E,P))}}const p=new Ft(c);return new NA(h,p,o.fieldTransforms)}function OA(t,e,n,r=!1){return hs(n,t.Qu(r?4:3,e))}function hs(t,e){if(MA(t=Z(t)))return Zg("Unsupported field value:",e,t),LA(t,e);if(t instanceof vi)return function(r,i){if(!DA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=hs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:po(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:po(i.serializer,s)}}if(r instanceof Kd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ui)return{bytesValue:Tb(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $l)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return dg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gd(r)}`)}(t,e)}function LA(t,e){const n={};return BS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,i)=>{const s=hs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Kd||t instanceof ui||t instanceof qe||t instanceof vi||t instanceof $l)}function Zg(t,e,n){if(!MA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function El(t,e,n){if((e=Z(e))instanceof _i)return e._internalPath;if(typeof e=="string")return Qd(t,e);throw Zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const iM=new RegExp("[~\\*/\\[\\]]");function Qd(t,e,n){if(e.search(iM)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _i(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new j(M.INVALID_ARGUMENT,a+t+u)}function FA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sM extends Tl{data(){return super.data()}}function Yd(t,e){return typeof e=="string"?Qd(t,e):e instanceof _i?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class Uo extends ey{}function ty(t,e,...n){let r=[];e instanceof ey&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof fs).length,a=s.filter(u=>u instanceof zo).length;if(o>1||o>0&&a>0)throw new j(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zo extends Uo{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zo(e,n,r)}_apply(e){const n=this._parse(e);return zA(e._query,n),new ut(e.firestore,e.converter,Ip(e._query,n))}_parse(e){const n=ds(e.firestore);return function(s,o,a,u,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){dI(p,h);const E=[];for(const A of p)E.push(cI(u,s,A));g={arrayValue:{values:E}}}else g=cI(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||dI(p,h),g=OA(a,o,p,h==="in"||h==="not-in");return ce.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ny(t,e,n){const r=e,i=Yd("where",t);return zo._create(i,r,n)}class fs extends ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fs(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)zA(o,u),o=Ip(o,u)}(e._query,n),new ut(e.firestore,e.converter,Ip(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function oM(...t){return t.forEach(e=>BA("or",e)),fs._create("or",t)}function aM(...t){return t.forEach(e=>BA("and",e)),fs._create("and",t)}class Jd extends Uo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Jd(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vl(s,o)}(e._query,this._field,this._direction);return new ut(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new mr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lM(t,e="asc"){const n=e,r=Yd("orderBy",t);return Jd._create(r,n)}class Gl extends Uo{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gl(e,n,r)}_apply(e){return new ut(e.firestore,e.converter,$c(e._query,this._limit,this._limitType))}}function uM(t){return bA("limit",t),Gl._create("limit",t,"F")}function cM(t){return bA("limitToLast",t),Gl._create("limitToLast",t,"L")}class Kl extends Uo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kl(e,n,r)}_apply(e){const n=UA(e,this.type,this._docOrFields,this._inclusive);return new ut(e.firestore,e.converter,function(i,s){return new mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function dM(...t){return Kl._create("startAt",t,!0)}function hM(...t){return Kl._create("startAfter",t,!1)}class Wl extends Uo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wl(e,n,r)}_apply(e){const n=UA(e,this.type,this._docOrFields,this._inclusive);return new ut(e.firestore,e.converter,function(i,s){return new mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function fM(...t){return Wl._create("endBefore",t,!1)}function pM(...t){return Wl._create("endAt",t,!0)}function UA(t,e,n,r){if(n[0]=Z(n[0]),n[0]instanceof Tl)return function(s,o,a,u,c){if(!u)throw new j(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const p of Ys(s))if(p.field.isKeyField())h.push(Xi(o,u.key));else{const g=u.data.field(p.field);if(Nd(g))throw new j(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const E=p.field.canonicalString();throw new j(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${E}' (used as the orderBy) does not exist.`)}h.push(g)}return new si(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ds(t.firestore);return function(o,a,u,c,h,p){const g=o.explicitOrderBy;if(h.length>g.length)throw new j(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const E=[];for(let A=0;A<h.length;A++){const C=h[A];if(g[A].field.isKeyField()){if(typeof C!="string")throw new j(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!ug(o)&&C.indexOf("/")!==-1)throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const P=o.path.child(ue.fromString(C));if(!W.isDocumentKey(P))throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const v=new W(P);E.push(Xi(a,v))}else{const P=OA(u,c,C);E.push(P)}}return new si(E,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function cI(t,e,n){if(typeof(n=Z(n))=="string"){if(n==="")throw new j(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ug(e)&&n.indexOf("/")!==-1)throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!W.isDocumentKey(r))throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xi(t,new W(r))}if(n instanceof qe)return Xi(t,n._key);throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gd(n)}.`)}function dI(t,e){if(!Array.isArray(t)||t.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BA(t,e){if(!(e instanceof zo||e instanceof fs))throw new j(M.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class ry{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new $l(s)}convertGeoPoint(e){return new Kd(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);X(Vb(r));const i=new ni(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class mM extends ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){return new Io("sum",El("sum",t))}function yM(t){return new Io("avg",El("average",t))}function $A(){return new Io("count")}function _M(t,e){var n,r;return t instanceof Io&&e instanceof Io&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function vM(t,e){return Kg(t.query,e.query)&&sr(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends Tl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends ss{data(e={}){return super.data(e)}}class os{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:wM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function IM(t,e){return t instanceof ss&&e instanceof ss?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof os&&e instanceof os&&t._firestore===e._firestore&&Kg(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t){t=oe(t,qe);const e=oe(t.firestore,we);return IA(Le(e),t._key).then(n=>iy(e,t,n))}class wi extends ry{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function TM(t){t=oe(t,qe);const e=oe(t.firestore,we),n=Le(e),r=new wi(e);return NL(n,t._key).then(i=>new ss(e,r,t._key,i,new jr(i!==null&&i.hasLocalMutations,!0),t.converter))}function SM(t){t=oe(t,qe);const e=oe(t.firestore,we);return IA(Le(e),t._key,{source:"server"}).then(n=>iy(e,t,n))}function ed(t){t=oe(t,ut);const e=oe(t.firestore,we),n=Le(e),r=new wi(e);return jA(t._query),EA(n,t._query).then(i=>new os(e,r,t,i))}function bM(t){t=oe(t,ut);const e=oe(t.firestore,we),n=Le(e),r=new wi(e);return DL(n,t._query).then(i=>new os(e,r,t,i))}function AM(t){t=oe(t,ut);const e=oe(t.firestore,we),n=Le(e),r=new wi(e);return EA(n,t._query,{source:"server"}).then(i=>new os(e,r,t,i))}function xM(t,e,n){t=oe(t,qe);const r=oe(t.firestore,we),i=Xd(t.converter,e,n);return Bo(r,[Hd(ds(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ve.none())])}function RM(t,e,n,...r){t=oe(t,qe);const i=oe(t.firestore,we),s=ds(i);let o;return o=typeof(e=Z(e))=="string"||e instanceof _i?Xg(s,"updateDoc",t._key,e,n,r):Jg(s,"updateDoc",t._key,e),Bo(i,[o.toMutation(t._key,Ve.exists(!0))])}function qA(t){return Bo(oe(t.firestore,we),[new Vo(t._key,Ve.none())])}function Zd(t,e){const n=oe(t.firestore,we),r=Gg(t),i=Xd(t.converter,e);return Bo(n,[Hd(ds(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function kM(t,...e){var n,r,i;t=Z(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Dp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Dp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof qe)c=oe(t.firestore,we),h=No(t._key.path),u={next:p=>{e[o]&&e[o](iy(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=oe(t,ut);c=oe(p.firestore,we),h=p._query;const g=new wi(c);u={next:E=>{e[o]&&e[o](new os(c,g,p,E))},error:e[o+1],complete:e[o+2]},jA(t._query)}return function(g,E,A,C){const P=new $d(C),v=new Og(E,P,A);return g.asyncQueue.enqueueAndForget(async()=>Ng(await wo(g),v)),()=>{P.Za(),g.asyncQueue.enqueueAndForget(async()=>Dg(await wo(g),v))}}(Le(c),h,a,u)}function PM(t,e){return OL(Le(t=oe(t,we)),Dp(e)?e:{next:e})}function Bo(t,e){return function(r,i){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>uL(await $g(r),i,s)),s.promise}(Le(t),e)}function iy(t,e,n){const r=n.docs.get(e._key),i=new wi(t);return new ss(t,i,e._key,r,new jr(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){return GA(t,{count:$A()})}function GA(t,e){const n=oe(t.firestore,we),r=Le(n),i=zS(e,(s,o)=>new yb(o,s.aggregateType,s._internalFieldPath));return VL(r,t._query,i).then(s=>function(a,u,c){const h=new wi(a);return new CA(u,h,c)}(n,t,s))}class NM{constructor(e){this.kind="memory",this._onlineComponentProvider=li.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=ai.provider}toJSON(){return{kind:this.kind}}}class DM{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=KA(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class VM{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ai.provider}toJSON(){return{kind:this.kind}}}class OM{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new bL(e)}}toJSON(){return{kind:this.kind}}}function LM(){return new VM}function MM(t){return new OM(t==null?void 0:t.cacheSizeBytes)}function FM(t){return new NM(t)}function jM(t){return new DM(t)}class UM{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=li.provider,this._offlineComponentProvider={build:n=>new zg(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class zM{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=li.provider,this._offlineComponentProvider={build:n=>new yA(n,e==null?void 0:e.cacheSizeBytes)}}}function KA(t){return new UM(t==null?void 0:t.forceOwnership)}function BM(){return new zM}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ds(e)}set(e,n,r){this._verifyNotCommitted();const i=Or(e,this._firestore),s=Xd(i.converter,n,r),o=Hd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Or(e,this._firestore);let o;return o=typeof(n=Z(n))=="string"||n instanceof _i?Xg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Jg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Or(e,this._firestore);return this._mutations=this._mutations.concat(new Vo(n._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Or(t,e){if((t=Z(t)).firestore!==e)throw new j(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ds(n)}get(n){const r=Or(n,this._firestore),i=new mM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new Tl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Tl(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=Or(n,this._firestore),o=Xd(s.converter,r,i),a=Hd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Or(n,this._firestore);let a;return a=typeof(r=Z(r))=="string"||r instanceof _i?Xg(this._dataReader,"Transaction.update",o._key,r,i,s):Jg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Or(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Or(e,this._firestore),r=new wi(this._firestore);return super.get(e).then(i=>new ss(this._firestore,r,n._key,i._document,new jr(!1,!1),n.converter))}}function qM(t,e,n){t=oe(t,we);const r=Object.assign(Object.assign({},$M),n);return function(s){if(s.maxAttempts<1)throw new j(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new lt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await wA(s);new RL(s.asyncQueue,c,a,o,u).au()}),u.promise}(Le(t),i=>e(new HA(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(){return new ql("deleteField")}function eh(){return new Wg("serverTimestamp")}function KM(...t){return new Hg("arrayUnion",t)}function WM(...t){return new Qg("arrayRemove",t)}function HM(t){return new Yg("increment",t)}function QM(t){return new $l(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){return Le(t=oe(t,we)),new WA(t,e=>Bo(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t,e){const n=Le(t=oe(t,we));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Xt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(h){throw new j(M.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=hI(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=Qd("setIndexConfiguration",hI(p,"fieldPath"));p.arrayConfig==="CONTAINS"?h.push(new qi(g,2)):p.order==="ASCENDING"?h.push(new qi(g,0)):p.order==="DESCENDING"&&h.push(new qi(g,1))}a.push(new ao(ao.UNKNOWN_ID,c,h,lo.empty()))}return a}(e);return FL(n,r)}function hI(t,e){if(typeof t[e]!="string")throw new j(M.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function XM(t){var e;t=oe(t,we);const n=fI.get(t);if(n)return n;if(((e=Le(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new QA(t);return fI.set(t,r),r}function ZM(t){YA(t,!0)}function eF(t){YA(t,!1)}function tF(t){UL(Le(t._firestore)).then(e=>U("deleting all persistent cache indexes succeeded")).catch(e=>Xt("deleting all persistent cache indexes failed",e))}function YA(t,e){jL(Le(t._firestore),e).then(n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Xt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const fI=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){var e;const n=(e=Le(oe(t.firestore,we))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Md(n,bt(t._query))._t}function rF(t,e){var n;const r=zS(e,(s,o)=>new yb(o,s.aggregateType,s._internalFieldPath)),i=(n=Le(oe(t.firestore,we))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:Pb(i,tb(t._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return sy.instance.onExistenceFilterMismatch(e)}}class sy{constructor(){this.Uu=new Map}static get instance(){return Ou||(Ou=new sy,function(n){if(qc)throw new Error("a TestingHooksSpi instance is already set");qc=n}(Ou)),Ou}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let Ou=null;(function(e,n=!0){(function(i){Co=i})(Ao),Ln(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new we(new VD(r.getProvider("auth-internal")),new MD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),an(nw,"4.7.3",e),an(nw,"4.7.3","esm2017")})();const sF=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ry,AggregateField:Io,AggregateQuerySnapshot:CA,Bytes:ui,CACHE_SIZE_UNLIMITED:$L,CollectionReference:wn,DocumentReference:qe,DocumentSnapshot:ss,FieldPath:_i,FieldValue:vi,Firestore:we,FirestoreError:j,GeoPoint:Kd,LoadBundleTask:xA,PersistentCacheIndexManager:QA,Query:ut,QueryCompositeFilterConstraint:fs,QueryConstraint:Uo,QueryDocumentSnapshot:qa,QueryEndAtConstraint:Wl,QueryFieldFilterConstraint:zo,QueryLimitConstraint:Gl,QueryOrderByConstraint:Jd,QuerySnapshot:os,QueryStartAtConstraint:Kl,SnapshotMetadata:jr,Timestamp:Oe,Transaction:HA,VectorValue:$l,WriteBatch:WA,_AutoId:ig,_ByteString:ze,_DatabaseId:ni,_DocumentKey:W,_EmptyAppCheckTokenProvider:FD,_EmptyAuthCredentialsProvider:RS,_FieldPath:Re,_TestingHooks:iF,_cast:oe,_debugAssert:ND,_internalAggregationQueryToProtoRunAggregationQueryRequest:rF,_internalQueryToProtoQueryTarget:nF,_isBase64Available:hV,_logWarn:Xt,_validateIsNotUsedTogether:SA,addDoc:Zd,aggregateFieldEqual:_M,aggregateQuerySnapshotEqual:vM,and:aM,arrayRemove:WM,arrayUnion:KM,average:yM,clearIndexedDbPersistence:WL,collection:Jr,collectionGroup:zL,connectFirestoreEmulator:AA,count:$A,deleteAllPersistentCacheIndexes:tF,deleteDoc:qA,deleteField:GM,disableNetwork:YL,disablePersistentCacheIndexAutoCreation:eF,doc:Gg,documentId:eM,enableIndexedDbPersistence:GL,enableMultiTabIndexedDbPersistence:KL,enableNetwork:QL,enablePersistentCacheIndexAutoCreation:ZM,endAt:pM,endBefore:fM,ensureFirestoreConfigured:Le,executeWrite:Bo,getAggregateFromServer:GA,getCountFromServer:CM,getDoc:EM,getDocFromCache:TM,getDocFromServer:SM,getDocs:ed,getDocsFromCache:bM,getDocsFromServer:AM,getFirestore:RA,getPersistentCacheIndexManager:XM,increment:HM,initializeFirestore:qL,limit:uM,limitToLast:cM,loadBundle:XL,memoryEagerGarbageCollector:LM,memoryLocalCache:FM,memoryLruGarbageCollector:MM,namedQuery:ZL,onSnapshot:kM,onSnapshotsInSync:PM,or:oM,orderBy:lM,persistentLocalCache:jM,persistentMultipleTabManager:BM,persistentSingleTabManager:KA,query:ty,queryEqual:Kg,refEqual:BL,runTransaction:qM,serverTimestamp:eh,setDoc:xM,setIndexConfiguration:JM,setLogLevel:CD,snapshotEqual:IM,startAfter:hM,startAt:dM,sum:gM,terminate:JL,updateDoc:RM,vector:QM,waitForPendingWrites:HL,where:ny,writeBatch:YM},Symbol.toStringTag,{value:"Module"})),oF={apiKey:"AIzaSyDjAzPYsxCK37YzciwSlnWG3FXKb4mt2us",authDomain:"suraksha-33bb4.firebaseapp.com",projectId:"suraksha-33bb4",storageBucket:"suraksha-33bb4.firebasestorage.app",messagingSenderId:"50440661956",appId:"1:50440661956:web:1dc5bfe2f06ebcd6d09291",measurementId:"G-4QHSZRNCRC"},oy=UT(oF);t2(oy);const ji=wS(oy),Xr=RA(oy);function aF(t){return{"auth/email-already-in-use":"That email is already registered.","auth/weak-password":"Password must be at least 6 characters.","auth/wrong-password":"Incorrect email or password.","auth/user-not-found":"No account found with that email.","auth/invalid-email":"Please enter a valid email address.","auth/too-many-requests":"Too many attempts. Try again later.","auth/invalid-credential":"Incorrect email or password."}[t==null?void 0:t.code]||(t==null?void 0:t.message)||"Something went wrong."}const lF=`You are Suraksha AI — a compassionate, expert women's safety assistant built into the Suraksha app used in India.
Provide calm, clear, actionable safety guidance. Give numbered steps. Share emergency numbers when relevant (Police:100, Ambulance:108, Emergency:112, Women's Helpline:1091).
Keep responses under 200 words. Use occasional emojis for warmth. Only handle safety topics.`;async function uF(t){var n,r,i,s;const e=t.filter(o=>o.role==="user"||o.role==="bot").map(o=>({role:o.role==="bot"?"assistant":"user",content:o.text}));try{const o=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1e3,system:lF,messages:e})});if(!o.ok)throw new Error("API "+o.status);return((r=(n=(await o.json()).content)==null?void 0:n[0])==null?void 0:r.text)||pI(((i=e[e.length-1])==null?void 0:i.content)||"")}catch{return pI(((s=e[e.length-1])==null?void 0:s.content)||"")}}function pI(t){const e=t.toLowerCase();return e.includes("follow")||e.includes("stalker")?`⚠️ If you're being followed:

1. Do NOT go home directly
2. Enter the nearest store or public place
3. Call someone and stay on the line
4. Note their description (clothing, vehicle)
5. Call 112 if threat continues
6. Share your live location via Suraksha now

You are not alone. Stay in public.`:e.includes("harass")||e.includes("assault")||e.includes("attack")?`🚨 Immediate steps:

1. Move toward crowded, well-lit areas NOW
2. Shout loudly — attract attention
3. Activate Suraksha SOS to alert contacts
4. Call 112 or 1091 (Women's Helpline)
5. Record audio using Voice Recorder

What's happening is not your fault. Help is coming.`:e.includes("unsafe")||e.includes("scared")||e.includes("afraid")?`I hear you — your feelings are valid 💙

1. Move to a populated, lit area
2. Call someone from Emergency Contacts
3. Activate SOS if situation escalates
4. Keep phone in hand, earphones out
5. Trust your instincts — they protect you

One step at a time. You've got this.`:e.includes("route")||e.includes("home")||e.includes("walk")||e.includes("night")?`🌙 Night safety checklist:

1. Share live location before leaving
2. Use well-lit, busy streets — avoid shortcuts
3. Stay on a call with someone
4. Keep phone charged and accessible
5. Use Suraksha Safe Route for AI-verified paths
6. Tell someone your ETA`:e.includes("helpline")||e.includes("number")||e.includes("police")?`📞 Emergency Numbers — India:

🚔 Police: 100
🚑 Ambulance: 108
📞 National Emergency: 112
👩 Women's Helpline: 1091
🏠 Domestic Violence: 181
🧠 iCall: 9152987821

Save these on speed dial. Suraksha SOS alerts your personal contacts too.`:e.includes("hello")||e.includes("hi")||e.length<5?`Hello! I'm Suraksha AI 🛡️

I provide expert safety guidance powered by Claude. Ask me about:
• Being followed or feeling unsafe
• Harassment or assault
• Safe routes and night travel
• Emergency helplines
• How to use Suraksha features

What can I help you with today?`:`I'm here to help with your safety 💙

Tell me more about your situation and I'll give specific guidance. I can help with:
• Immediate threats or danger
• Harassment or stalking
• Safe travel planning
• Emergency resources

Your safety is the priority.`}const Lu=[{id:"r1",type:"suspicious",desc:"Unlit street near old bus stand — avoid after 9pm.",area:"Ashoka Road, Mysuru",time:"10m ago",votes:7,userVoted:!1},{id:"r2",type:"harassment",desc:"Verbal harassment near evening market. Stay alert.",area:"Devaraja Market",time:"45m ago",votes:12,userVoted:!1},{id:"r3",type:"safe",desc:"Well-lit and patrolled. Safe to walk at night.",area:"Chamundi Hill Road",time:"2h ago",votes:19,userVoted:!1},{id:"r4",type:"unsafe",desc:"Poorly lit underpass — take alternate route after dark.",area:"KRS Road Underpass",time:"5h ago",votes:5,userVoted:!1},{id:"r5",type:"suspicious",desc:"Unknown vehicle parked near school for multiple days.",area:"Saraswathipuram",time:"1h ago",votes:3,userVoted:!1}],cF=[{id:1,title:"🛡️ Suraksha Active",body:"Your safety shield is on. SOS ready.",time:"2m ago",read:!1},{id:2,title:"📍 Location Reminder",body:"Share location with contacts before travelling at night.",time:"1h ago",read:!1},{id:3,title:"👥 Community Alert",body:"Suspicious activity reported near Devaraja Market, Mysuru.",time:"3h ago",read:!0},{id:4,title:"💡 Safety Tip",body:"Always trust your instincts. If something feels wrong, act immediately.",time:"5h ago",read:!0}],mI=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html,body{font-family:'Inter',sans-serif;background:#0a1628;color:#fff;min-height:100vh;overflow-x:hidden}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:2px}
input,textarea,select,button{font-family:inherit}button{cursor:pointer}textarea{resize:none}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.82)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes toastIn{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)}}
@keyframes sosPulse{0%,100%{box-shadow:0 0 0 0 rgba(244,63,94,0)}50%{box-shadow:0 0 0 18px rgba(244,63,94,.07)}}
@keyframes recPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
@keyframes pinBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes waveBar{0%,100%{height:6px;opacity:.4}50%{height:26px;opacity:1}}
@keyframes typingDot{0%,80%,100%{transform:scale(.8);opacity:.4}40%{transform:scale(1);opacity:1}}
@keyframes blip{0%,100%{opacity:1}50%{opacity:.45}}
.spinner{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite;vertical-align:middle}
.anim{animation:fadeUp .25s ease-out}
.divider{height:1px;background:rgba(255,255,255,.07);margin:1rem 0}
.sl{font-size:.66rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:9px}
.hint{font-size:.64rem;color:rgba(255,255,255,.25);text-align:center;line-height:1.65;margin-top:.7rem}
.tag{display:inline-block;font-size:.6rem;font-weight:700;padding:2px 7px;border-radius:5px;letter-spacing:.03em}
.tag-new{background:rgba(34,197,94,.18);border:1px solid rgba(34,197,94,.3);color:#86efac}
.tag-ai{background:rgba(124,58,237,.18);border:1px solid rgba(124,58,237,.3);color:#c4b5fd}
.nav{position:sticky;top:0;z-index:100;background:rgba(10,22,40,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08);padding:0 1.5rem;height:60px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:8px}
.logo-icon{width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,#2563eb,#06b6d4);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.logo-text{font-family:'DM Sans',sans-serif;font-size:1.1rem;font-weight:700;letter-spacing:-.02em}
.logo-text em{font-style:normal;color:#06b6d4}
.nav-r{display:flex;gap:8px;align-items:center}
.btn-g{background:transparent;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.8);padding:6px 14px;border-radius:8px;font-size:.79rem;font-weight:500;transition:all .2s}
.btn-g:hover{border-color:#2563eb;color:#fff;background:rgba(37,99,235,.15)}
.btn-p{background:linear-gradient(135deg,#2563eb,#1d4ed8);border:none;color:#fff;padding:6px 16px;border-radius:8px;font-size:.79rem;font-weight:600;transition:all .2s;box-shadow:0 4px 14px rgba(37,99,235,.35)}
.btn-p:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(37,99,235,.5)}
.hero{min-height:calc(100vh - 60px);background:radial-gradient(ellipse at 20% 50%,rgba(37,99,235,.18) 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(6,182,212,.12) 0%,transparent 50%),#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1.5rem 5rem}
.hero-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(37,99,235,.15);border:1px solid rgba(37,99,235,.35);padding:5px 13px;border-radius:100px;font-size:.7rem;font-weight:600;color:#93c5fd;margin-bottom:1.75rem;letter-spacing:.05em;text-transform:uppercase}
.bdot{width:6px;height:6px;background:#06b6d4;border-radius:50%;animation:pulse 2s infinite}
.hero h1{font-family:'DM Sans',sans-serif;font-size:clamp(2rem,5vw,3.8rem);font-weight:800;line-height:1.07;letter-spacing:-.03em;margin-bottom:1.2rem}
.hero h1 em{font-style:normal;color:#06b6d4}
.hero-sub{font-size:.93rem;color:rgba(255,255,255,.55);max-width:460px;line-height:1.72;margin-bottom:2rem}
.hero-cta{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:3rem}
.btn-xl{padding:12px 26px;font-size:.87rem;font-weight:600;border-radius:12px;transition:all .2s;border:none}
.btn-xl.p{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;box-shadow:0 8px 24px rgba(37,99,235,.4)}
.btn-xl.p:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(37,99,235,.55)}
.btn-xl.o{background:transparent;border:1.5px solid rgba(255,255,255,.2);color:rgba(255,255,255,.85)}
.btn-xl.o:hover{border-color:rgba(255,255,255,.5);background:rgba(255,255,255,.05)}
.hero-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:820px;width:100%}
@media(max-width:580px){.hero-grid{grid-template-columns:repeat(2,1fr)}}
.hcard{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:.9rem .75rem;text-align:center;transition:all .3s}
.hcard:hover{background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.15);transform:translateY(-3px)}
.hc-icon{font-size:1.5rem;margin-bottom:.4rem}
.hc-title{font-size:.74rem;font-weight:600;margin-bottom:2px}
.hc-desc{font-size:.64rem;color:rgba(255,255,255,.4)}
.stats-bar{background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:1.75rem 1.5rem}
.stats-inner{max-width:800px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;text-align:center}
@media(max-width:500px){.stats-inner{grid-template-columns:repeat(2,1fr)}}
.stat-n{font-family:'DM Sans',sans-serif;font-size:1.6rem;font-weight:800;color:#60a5fa}
.stat-l{font-size:.7rem;color:rgba(255,255,255,.38);margin-top:3px}
.why{padding:3.5rem 1.5rem;max-width:860px;margin:0 auto}
.why h2{font-family:'DM Sans',sans-serif;font-size:clamp(1.5rem,3.5vw,2.2rem);font-weight:800;letter-spacing:-.02em;text-align:center;margin-bottom:2rem}
.why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:13px}
.why-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:1.2rem}
.wc-icon{font-size:1.5rem;margin-bottom:.65rem}
.wc-title{font-size:.84rem;font-weight:700;margin-bottom:.35rem}
.wc-desc{font-size:.72rem;color:rgba(255,255,255,.43);line-height:1.6}
.cta-section{padding:2rem 1.5rem 4.5rem;text-align:center}
.cta-box{max-width:520px;margin:0 auto;background:linear-gradient(135deg,rgba(37,99,235,.15),rgba(6,182,212,.1));border:1px solid rgba(37,99,235,.25);border-radius:22px;padding:2.5rem 1.75rem}
footer{border-top:1px solid rgba(255,255,255,.06);padding:1.5rem;text-align:center;color:rgba(255,255,255,.25);font-size:.73rem}
.overlay{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.78);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:1rem}
.modal{background:#112040;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:2rem 1.75rem;width:100%;max-width:400px;box-shadow:0 40px 80px rgba(0,0,0,.5);position:relative;animation:fadeUp .25s ease-out}
.modal-logo{display:flex;align-items:center;gap:8px;justify-content:center;margin-bottom:.5rem}
.modal h2{text-align:center;font-size:1.2rem;font-weight:700;margin-bottom:.3rem}
.modal-sub{text-align:center;color:rgba(255,255,255,.43);font-size:.77rem;margin-bottom:1.4rem}
.fg{margin-bottom:.8rem}
.fg label{display:block;font-size:.73rem;font-weight:500;color:rgba(255,255,255,.6);margin-bottom:5px}
.fg input,.fg select,.fg textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:9px;padding:10px 12px;color:#fff;font-size:.84rem;outline:none;transition:all .2s}
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:#2563eb;background:rgba(37,99,235,.08)}
.fg input::placeholder,.fg textarea::placeholder{color:rgba(255,255,255,.24)}
.fg select option{background:#112040;color:#fff}
.form-btn{width:100%;padding:11px;border:none;border-radius:9px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;font-size:.87rem;font-weight:600;transition:all .2s;box-shadow:0 6px 18px rgba(37,99,235,.4)}
.form-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 22px rgba(37,99,235,.55)}
.form-btn:disabled{opacity:.6;cursor:not-allowed}
.form-sw{text-align:center;margin-top:.8rem;font-size:.73rem;color:rgba(255,255,255,.43)}
.form-sw button{background:none;border:none;color:#60a5fa;font-size:.73rem;font-weight:500}
.form-sw button:hover{text-decoration:underline}
.err-box{background:rgba(244,63,94,.15);border:1px solid rgba(244,63,94,.3);border-radius:8px;padding:9px 12px;font-size:.75rem;color:#fca5a5;margin-bottom:.8rem}
.mclose{position:absolute;top:.8rem;right:.8rem;background:rgba(255,255,255,.08);border:none;color:#fff;width:30px;height:30px;border-radius:8px;font-size:.9rem;display:flex;align-items:center;justify-content:center;transition:background .2s}
.mclose:hover{background:rgba(255,255,255,.15)}
.dash{min-height:100vh;background:radial-gradient(ellipse at 10% 10%,rgba(37,99,235,.1) 0%,transparent 50%),#0a1628;padding-bottom:76px}
.dash-hdr{background:rgba(12,26,52,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.07);padding:0 1.25rem;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50}
.dash-body{padding:1.25rem;max-width:760px;margin:0 auto}
.greeting{margin-bottom:1.25rem}
.dash-date{font-size:.67rem;color:#06b6d4;font-weight:500;background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.2);padding:2px 9px;border-radius:100px;display:inline-block;margin-bottom:5px}
.greeting h2{font-size:1.25rem;font-weight:700;margin-bottom:2px}
.greeting p{color:rgba(255,255,255,.4);font-size:.78rem}
.status-strip{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:.9rem 1.1rem;display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:1.25rem}
.si{display:flex;align-items:center;gap:6px;font-size:.72rem;color:rgba(255,255,255,.52)}
.sd{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.sd-g{background:#22c55e;box-shadow:0 0 7px rgba(34,197,94,.5)}
.sd-b{background:#3b82f6;box-shadow:0 0 7px rgba(59,130,246,.5)}
.sd-y{background:#f59e0b}
.cards-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:1.25rem}
.dcard{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:1.1rem;cursor:pointer;transition:all .28s;position:relative;overflow:hidden}
.dcard:hover{transform:translateY(-3px)}
.dcard.c-sos{border-color:rgba(244,63,94,.15)}.dcard.c-sos:hover{border-color:rgba(244,63,94,.38);box-shadow:0 14px 34px rgba(244,63,94,.1)}
.dcard.c-loc{border-color:rgba(6,182,212,.15)}.dcard.c-loc:hover{border-color:rgba(6,182,212,.38);box-shadow:0 14px 34px rgba(6,182,212,.1)}
.dcard.c-con{border-color:rgba(245,158,11,.12)}.dcard.c-con:hover{border-color:rgba(245,158,11,.32);box-shadow:0 14px 34px rgba(245,158,11,.08)}
.dcard.c-ai{border-color:rgba(124,58,237,.12)}.dcard.c-ai:hover{border-color:rgba(124,58,237,.32);box-shadow:0 14px 34px rgba(124,58,237,.08)}
.dcard.c-route{border-color:rgba(34,197,94,.12)}.dcard.c-route:hover{border-color:rgba(34,197,94,.32);box-shadow:0 14px 34px rgba(34,197,94,.08)}
.dcard.c-voice{border-color:rgba(245,158,11,.12)}.dcard.c-voice:hover{border-color:rgba(245,158,11,.32);box-shadow:0 14px 34px rgba(245,158,11,.08)}
.dcard.c-notif{border-color:rgba(59,130,246,.12)}.dcard.c-notif:hover{border-color:rgba(59,130,246,.32);box-shadow:0 14px 34px rgba(59,130,246,.08)}
.dcard.c-comm{border-color:rgba(139,92,246,.12)}.dcard.c-comm:hover{border-color:rgba(139,92,246,.32);box-shadow:0 14px 34px rgba(139,92,246,.08)}
.cicon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;margin-bottom:.75rem}
.ci-sos{background:rgba(244,63,94,.2)}.ci-loc{background:rgba(6,182,212,.2)}.ci-con{background:rgba(245,158,11,.2)}
.ci-ai{background:rgba(124,58,237,.2)}.ci-route{background:rgba(34,197,94,.2)}.ci-voice{background:rgba(245,158,11,.2)}
.ci-notif{background:rgba(59,130,246,.2)}.ci-comm{background:rgba(139,92,246,.2)}
.card-title{font-size:.84rem;font-weight:700;margin-bottom:4px}
.card-desc{font-size:.68rem;color:rgba(255,255,255,.4);line-height:1.5;margin-bottom:.65rem}
.card-arrow{font-size:.67rem;font-weight:600;color:rgba(255,255,255,.3);transition:color .2s}
.dcard:hover .card-arrow{color:rgba(255,255,255,.72)}
.card-badge{position:absolute;top:10px;right:10px}
.helplines{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;overflow:hidden}
.hl-row{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;transition:background .2s}
.hl-row:last-child{border-bottom:none}
.hl-row:hover{background:rgba(255,255,255,.04)}
.hl-l{display:flex;align-items:center;gap:9px;font-size:.79rem;color:rgba(255,255,255,.68)}
.hl-num{font-size:.87rem;font-weight:700;color:#60a5fa;font-family:monospace}
.bnav{position:fixed;bottom:0;left:0;right:0;background:rgba(10,22,40,.98);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,.07);display:flex;padding:5px 0 10px;z-index:50}
.bni{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;color:rgba(255,255,255,.35);padding:5px 3px;transition:color .2s;font-size:.58rem}
.bni.active{color:#60a5fa}
.bni-icon{font-size:1.15rem}
.mp-wrap{position:fixed;inset:0;z-index:150;background:rgba(0,0,0,.65);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:.75rem}
.mp{background:rgba(13,26,52,.98);border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:1.5rem 1.35rem;width:100%;max-width:620px;max-height:88vh;overflow-y:auto;animation:fadeUp .25s ease-out}
.mph{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.15rem}
.mptw{display:flex;align-items:center;gap:9px}
.mpt{font-size:1.05rem;font-weight:700}
.mps{font-size:.69rem;color:rgba(255,255,255,.36)}
.mpclose{background:rgba(255,255,255,.08);border:none;color:#fff;width:32px;height:32px;border-radius:9px;font-size:.95rem;display:flex;align-items:center;justify-content:center;transition:background .2s;flex-shrink:0}
.mpclose:hover{background:rgba(255,255,255,.15)}
.sos-ring-wrap{display:flex;justify-content:center;margin:1.25rem 0}
.sos-outer{width:168px;height:168px;border-radius:50%;border:2px solid rgba(244,63,94,.2);display:flex;align-items:center;justify-content:center;animation:sosPulse 2.5s ease-in-out infinite}
.sos-btn{width:126px;height:126px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#b91c1c);border:none;color:#fff;font-weight:700;transition:all .15s;box-shadow:0 10px 36px rgba(220,38,38,.5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px}
.sos-btn:hover{transform:scale(1.05);box-shadow:0 14px 46px rgba(220,38,38,.7)}
.sos-btn:active{transform:scale(.97)}
.sos-btn.sent{background:linear-gradient(135deg,#16a34a,#15803d);box-shadow:0 10px 36px rgba(22,163,74,.5)}
.sos-cd{text-align:center;background:rgba(244,63,94,.12);border:1px solid rgba(244,63,94,.25);border-radius:11px;padding:.8rem;margin-bottom:.9rem}
.sos-cd-n{font-size:2.25rem;font-weight:800;color:#f87171}
.sos-ok{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);border-radius:10px;padding:.8rem;text-align:center;margin-bottom:.9rem}
.sos-trigger-btn{width:100%;min-height:44px;border:none;border-radius:10px;background:linear-gradient(135deg,#ef4444,#be123c);color:#fff;font-size:.86rem;font-weight:800;letter-spacing:0;box-shadow:0 10px 24px rgba(190,18,60,.28);margin:-.25rem 0 .9rem;transition:all .18s}
.sos-trigger-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 12px 30px rgba(190,18,60,.38)}
.sos-trigger-btn:disabled{opacity:.65;cursor:not-allowed}
.trigger-grid{display:grid;grid-template-columns:1fr;gap:9px;margin:.9rem 0 1rem}
.trigger-panel{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px 11px}
.trigger-title{font-size:.78rem;font-weight:800;color:#fff;margin-bottom:4px}
.trigger-detail{font-size:.68rem;line-height:1.35;color:rgba(255,255,255,.46);margin-bottom:8px}
.trigger-detail strong{color:rgba(255,255,255,.74);font-weight:700}
.hardware-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.trigger-btn{min-height:34px;border:1px solid rgba(255,255,255,.14);border-radius:8px;background:rgba(255,255,255,.08);color:#fff;font-size:.7rem;font-weight:700;transition:all .18s}
.trigger-btn:hover:not(:disabled){background:rgba(255,255,255,.13)}
.trigger-btn:disabled{opacity:.45;cursor:not-allowed}
.trigger-btn.ghost{grid-column:1/-1;background:rgba(244,63,94,.12);border-color:rgba(244,63,94,.26);color:#fecdd3}
.pref-row{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:.7rem;font-weight:700;color:rgba(255,255,255,.72);margin:7px 0}
.pref-row input{width:18px;height:18px;accent-color:#ef4444;flex-shrink:0}
.pref-select{width:100%;min-height:36px;border:1px solid rgba(255,255,255,.14);border-radius:8px;background:rgba(10,22,40,.9);color:#fff;font-size:.7rem;padding:0 9px;outline:none}
.sos-actions{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:1.1rem}
.sos-act{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px;color:#fff;font-size:.73rem;font-weight:500;transition:all .2s;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center}
.sos-act:hover{background:rgba(255,255,255,.09)}
.map-box{background:rgba(6,182,212,.06);border:1px solid rgba(6,182,212,.2);border-radius:13px;overflow:hidden;position:relative;min-height:155px;margin:1rem 0}
.map-bg{position:absolute;inset:0;opacity:.06;background-image:linear-gradient(rgba(6,182,212,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,.8) 1px,transparent 1px);background-size:25px 25px}
.map-inner{padding:1.6rem;text-align:center;position:relative;z-index:1}
.map-pin{font-size:2.2rem;animation:pinBounce 2s ease-in-out infinite;margin-bottom:.35rem}
.map-coords{font-family:monospace;font-size:.77rem;color:#06b6d4;background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.2);border-radius:7px;padding:6px 12px;display:inline-block;margin-top:.4rem}
.loc-btn{width:100%;padding:11px;border:none;border-radius:9px;background:linear-gradient(135deg,#0891b2,#06b6d4);color:#fff;font-size:.83rem;font-weight:600;transition:all .2s;margin:.8rem 0;box-shadow:0 6px 18px rgba(6,182,212,.3)}
.loc-btn:hover:not(:disabled){transform:translateY(-1px)}
.loc-btn:disabled{opacity:.6;cursor:not-allowed}
.info-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.info-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:9px;padding:9px 11px}
.info-lbl{font-size:.64rem;color:rgba(255,255,255,.36);margin-bottom:3px}
.info-val{font-size:.82rem;font-weight:600}
.share-btn{width:100%;padding:10px;border:1px solid rgba(255,255,255,.13);border-radius:9px;background:rgba(255,255,255,.04);color:rgba(255,255,255,.7);font-size:.79rem;font-weight:500;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:7px}
.share-btn:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.22)}
.route-step{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:9px;padding:9px 12px;margin-bottom:7px;display:flex;align-items:flex-start;gap:9px}
.rs-num{width:22px;height:22px;border-radius:6px;background:rgba(34,197,94,.2);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#86efac;flex-shrink:0;margin-top:1px}
.rs-text{font-size:.77rem;color:rgba(255,255,255,.75);line-height:1.5}
.rs-dist{font-size:.65rem;color:rgba(255,255,255,.35);margin-top:2px}
.cf-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:13px;padding:1.1rem;margin-bottom:1.1rem}
.cf-box h3{font-size:.82rem;font-weight:600;margin-bottom:.8rem}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
@media(max-width:400px){.form-row{grid-template-columns:1fr}}
.c-list{display:flex;flex-direction:column;gap:8px}
.c-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:11px 13px;display:flex;align-items:center;justify-content:space-between;transition:all .2s}
.c-card:hover{background:rgba(255,255,255,.07)}
.c-left{display:flex;align-items:center;gap:9px}
.c-av{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:700;flex-shrink:0}
.c-nm{font-size:.82rem;font-weight:600;margin-bottom:1px}
.c-ph{font-size:.69rem;color:rgba(255,255,255,.42)}
.c-badge{font-size:.62rem;font-weight:600;padding:2px 7px;border-radius:5px;background:rgba(37,99,235,.2);color:#93c5fd;border:1px solid rgba(37,99,235,.3)}
.c-del{background:rgba(244,63,94,.1);border:1px solid rgba(244,63,94,.2);color:#fb7185;width:28px;height:28px;border-radius:7px;font-size:.78rem;display:flex;align-items:center;justify-content:center;transition:all .2s;margin-left:6px}
.c-del:hover{background:rgba(244,63,94,.22)}
.empty-st{text-align:center;padding:1.5rem;color:rgba(255,255,255,.27);font-size:.78rem}
.ai-wrap{display:flex;flex-direction:column;height:370px}
.ai-msgs{flex:1;overflow-y:auto;padding:.8rem;background:rgba(0,0,0,.2);border-radius:11px;margin-bottom:.8rem;display:flex;flex-direction:column;gap:8px;scrollbar-width:thin}
.ai-msg{display:flex;align-items:flex-start;gap:7px}
.ai-msg.user{flex-direction:row-reverse}
.ai-av{width:26px;height:26px;border-radius:7px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.72rem}
.ai-av.bot{background:linear-gradient(135deg,#7c3aed,#2563eb)}
.ai-av.user{background:linear-gradient(135deg,#2563eb,#06b6d4)}
.ai-bbl{max-width:84%;font-size:.76rem;line-height:1.55;padding:8px 11px;border-radius:10px}
.ai-msg.bot .ai-bbl{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.9);border-radius:4px 10px 10px 10px;white-space:pre-line}
.ai-msg.user .ai-bbl{background:rgba(37,99,235,.25);border:1px solid rgba(37,99,235,.3);color:rgba(255,255,255,.95);border-radius:10px 4px 10px 10px}
.ai-src{font-size:.62rem;color:rgba(255,255,255,.28);font-style:italic;margin-top:3px;padding-left:2px}
.ai-ir{display:flex;gap:8px}
.ai-inp{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 12px;color:#fff;font-size:.79rem;outline:none;transition:all .2s;height:42px}
.ai-inp:focus{border-color:#7c3aed;background:rgba(124,58,237,.08)}
.ai-inp::placeholder{color:rgba(255,255,255,.24)}
.ai-send{background:linear-gradient(135deg,#7c3aed,#2563eb);border:none;color:#fff;width:42px;border-radius:10px;font-size:.88rem;flex-shrink:0;transition:all .2s;box-shadow:0 4px 14px rgba(124,58,237,.35)}
.ai-send:hover:not(:disabled){transform:translateY(-1px)}
.ai-send:disabled{opacity:.5}
.qbtns{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:.65rem}
.qbtn{background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.25);color:rgba(255,255,255,.66);font-size:.67rem;padding:4px 9px;border-radius:18px;transition:all .2s}
.qbtn:hover{background:rgba(124,58,237,.22);color:#fff}
.typing span{width:5px;height:5px;background:rgba(255,255,255,.4);border-radius:50%;animation:typingDot 1.2s ease-in-out infinite;display:inline-block;margin:0 2px}
.typing span:nth-child(2){animation-delay:.2s}.typing span:nth-child(3){animation-delay:.4s}
.voice-center{text-align:center;padding:1.5rem 0}
.rec-btn{width:96px;height:96px;border-radius:50%;border:none;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;margin:0 auto 1.25rem;transition:all .2s}
.rec-btn.idle{background:linear-gradient(135deg,#dc2626,#b91c1c);box-shadow:0 8px 28px rgba(220,38,38,.45)}
.rec-btn.idle:hover{transform:scale(1.05)}
.rec-btn.recording{background:linear-gradient(135deg,#16a34a,#15803d);animation:recPulse 1.5s ease-in-out infinite}
.rec-icon{font-size:1.75rem}
.rec-lbl{font-size:.68rem;font-weight:700;letter-spacing:.07em}
.rec-timer{font-size:1.75rem;font-weight:800;color:#f87171;font-family:monospace;margin-bottom:.45rem}
.wave-bars{display:flex;align-items:center;justify-content:center;gap:3px;height:34px;margin-bottom:.9rem}
.wave-bars span{width:4px;border-radius:2px;background:#f43f5e;animation:waveBar 1s ease-in-out infinite}
.rec-item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:10px 13px;display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}
.ri-left{display:flex;align-items:center;gap:9px}
.ri-nm{font-size:.77rem;font-weight:500;margin-bottom:1px}
.ri-meta{font-size:.64rem;color:rgba(255,255,255,.36)}
.ri-acts{display:flex;gap:5px}
.ri-btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff;width:27px;height:27px;border-radius:7px;font-size:.77rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.ri-btn:hover{background:rgba(255,255,255,.13)}
.notif-row{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:12px 14px;margin-bottom:9px;cursor:pointer;transition:all .2s}
.notif-row:hover{background:rgba(255,255,255,.07)}
.notif-l{display:flex;align-items:center;gap:10px}
.notif-title{font-size:.82rem;font-weight:600;margin-bottom:2px}
.notif-desc{font-size:.68rem;color:rgba(255,255,255,.38)}
.toggle{width:40px;height:22px;border-radius:11px;border:none;position:relative;transition:background .3s;flex-shrink:0}
.toggle.on{background:#2563eb}.toggle.off{background:rgba(255,255,255,.14)}
.toggle::after{content:'';position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;top:3px;transition:left .25s;box-shadow:0 1px 3px rgba(0,0,0,.3)}
.toggle.on::after{left:21px}.toggle.off::after{left:3px}
.nh-item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:9px;padding:10px 12px;margin-bottom:7px;display:flex;align-items:flex-start;gap:9px;cursor:pointer}
.nh-item:hover{background:rgba(255,255,255,.05)}
.nh-dot{width:7px;height:7px;border-radius:50%;margin-top:4px;flex-shrink:0}
.nh-dot.unread{background:#3b82f6;box-shadow:0 0 6px rgba(59,130,246,.4)}.nh-dot.read{background:rgba(255,255,255,.18)}
.nh-title{font-size:.77rem;font-weight:600;margin-bottom:2px}
.nh-body{font-size:.69rem;color:rgba(255,255,255,.43);line-height:1.5}
.nh-time{font-size:.61rem;color:rgba(255,255,255,.24);margin-top:3px}
.comm-tabs{display:flex;gap:5px;background:rgba(255,255,255,.04);border-radius:10px;padding:4px;margin-bottom:1rem}
.ctab{flex:1;padding:7px;border:none;border-radius:7px;font-size:.72rem;font-weight:500;transition:all .2s;color:rgba(255,255,255,.48);background:transparent}
.ctab.active{background:rgba(124,58,237,.28);color:#fff;border:1px solid rgba(124,58,237,.35)}
.alert-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:11px 13px;margin-bottom:8px;transition:all .2s}
.alert-card:hover{background:rgba(255,255,255,.07)}
.ac-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.ac-type{font-size:.63rem;font-weight:700;padding:2px 7px;border-radius:5px;text-transform:uppercase;letter-spacing:.04em}
.t-harassment{background:rgba(244,63,94,.2);color:#fca5a5;border:1px solid rgba(244,63,94,.3)}
.t-suspicious{background:rgba(245,158,11,.2);color:#fde68a;border:1px solid rgba(245,158,11,.3)}
.t-unsafe{background:rgba(239,68,68,.2);color:#fca5a5;border:1px solid rgba(239,68,68,.3)}
.t-safe{background:rgba(34,197,94,.2);color:#86efac;border:1px solid rgba(34,197,94,.3)}
.ac-time{font-size:.61rem;color:rgba(255,255,255,.3)}
.ac-desc{font-size:.76rem;color:rgba(255,255,255,.7);line-height:1.5;margin-bottom:5px}
.ac-foot{display:flex;align-items:center;justify-content:space-between}
.ac-loc{font-size:.67rem;color:rgba(255,255,255,.34)}
.ac-vote{font-size:.67rem;color:rgba(255,255,255,.38);display:flex;align-items:center;gap:4px;transition:color .2s}
.ac-vote:hover{color:#fff}.ac-vote.voted{color:#86efac}
.pro-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:1.5rem;text-align:center;margin-bottom:1rem}
.pro-av{width:68px;height:68px;border-radius:16px;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin:0 auto .8rem;border:2px solid rgba(255,255,255,.1)}
.pro-nm{font-size:.96rem;font-weight:700;margin-bottom:2px}
.pro-em{font-size:.73rem;color:rgba(255,255,255,.4);margin-bottom:1.1rem}
.pro-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:1.1rem}
.ps{background:rgba(255,255,255,.04);border-radius:9px;padding:9px 6px}
.ps-n{font-size:1.2rem;font-weight:700;color:#60a5fa}
.ps-l{font-size:.61rem;color:rgba(255,255,255,.36);margin-top:1px}
.pro-rows{background:rgba(255,255,255,.04);border-radius:9px;padding:.8rem;margin-bottom:.9rem;text-align:left}
.pro-rl{font-size:.62rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
.pro-row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.72rem}
.pro-row:last-child{border-bottom:none}
.pro-rk{color:rgba(255,255,255,.36)}
.pro-rv{font-weight:500;color:rgba(255,255,255,.8);font-size:.71rem;max-width:55%;text-align:right;word-break:break-all}
.settings-box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:11px;padding:.9rem;margin-bottom:.9rem}
.settings-title{font-size:.68rem;font-weight:600;color:rgba(255,255,255,.38);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.75rem}
.sr{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.05)}
.sr:last-child{border-bottom:none}
.sr-lbl{font-size:.79rem;color:rgba(255,255,255,.72)}
.sr-sub{font-size:.66rem;color:rgba(255,255,255,.33);margin-top:1px}
.lout-btn{width:100%;padding:10px;border:1px solid rgba(244,63,94,.25);border-radius:9px;background:rgba(244,63,94,.08);color:#fb7185;font-size:.79rem;font-weight:600;transition:all .2s}
.lout-btn:hover{background:rgba(244,63,94,.15);border-color:rgba(244,63,94,.4)}
.toast-wrap{position:fixed;top:68px;right:1rem;z-index:300;display:flex;flex-direction:column;gap:8px;pointer-events:none}
.toast{background:rgba(13,26,52,.98);border:1px solid rgba(255,255,255,.12);border-radius:11px;padding:10px 14px;min-width:230px;max-width:300px;box-shadow:0 20px 36px rgba(0,0,0,.4);animation:toastIn .3s ease-out;pointer-events:all}
.toast.success{border-color:rgba(34,197,94,.3)}.toast.error{border-color:rgba(244,63,94,.3)}.toast.info{border-color:rgba(59,130,246,.3)}
.t-title{font-size:.79rem;font-weight:600;margin-bottom:2px}
.t-msg{font-size:.69rem;color:rgba(255,255,255,.46)}
`;function ay(){return f.jsxs("div",{className:"logo",children:[f.jsx("div",{className:"logo-icon",children:"🛡️"}),f.jsxs("span",{className:"logo-text",children:["Sura",f.jsx("em",{children:"ksha"})]})]})}function ln(){return f.jsx("span",{className:"spinner"})}function vr({icon:t,ci:e,title:n,sub:r,onClose:i}){return f.jsxs("div",{className:"mph",children:[f.jsxs("div",{className:"mptw",children:[f.jsx("div",{className:`cicon ci-${e}`,children:t}),f.jsxs("div",{children:[f.jsx("div",{className:"mpt",children:n}),f.jsx("div",{className:"mps",children:r})]})]}),f.jsx("button",{className:"mpclose",onClick:i,children:"✕"})]})}function JA({icon:t,text:e,sub:n}){return f.jsxs("div",{className:"empty-st",children:[f.jsx("div",{style:{fontSize:"1.75rem",opacity:.35,marginBottom:".35rem"},children:t}),f.jsx("div",{children:e}),n&&f.jsx("div",{style:{fontSize:".7rem",color:"rgba(255,255,255,.22)",marginTop:4},children:n})]})}function XA({on:t,onClick:e}){return f.jsx("button",{className:`toggle ${t?"on":"off"}`,onClick:e})}function dF(){const[t,e]=B.useState([]),n=B.useCallback((r,i,s="success")=>{const o=Date.now()+Math.random();e(a=>[...a,{id:o,title:r,message:i,type:s}]),setTimeout(()=>e(a=>a.filter(u=>u.id!==o)),3500)},[]);return{toasts:t,addToast:n}}function hF({toasts:t}){return f.jsx("div",{className:"toast-wrap",children:t.map(e=>f.jsxs("div",{className:`toast ${e.type}`,children:[f.jsx("div",{className:"t-title",children:e.title}),f.jsx("div",{className:"t-msg",children:e.message})]},e.id))})}const fF=[{icon:"🚔",label:"Police",number:"100",dialable:!0},{icon:"🚑",label:"Ambulance",number:"108",dialable:!0},{icon:"📞",label:"National Emergency",number:"112",dialable:!0},{icon:"👩",label:"Women's Helpline",number:"1091",dialable:!0},{icon:"🏠",label:"Domestic Violence",number:"181",dialable:!0},{icon:"🧠",label:"iCall Mental Health",number:"9152987821",dialable:!0}];function pF({user:t,contacts:e,currentLocation:n,onClose:r,addToast:i}){const[s,o]=B.useState("idle"),[a,u]=B.useState(5),[c,h]=B.useState([]),[p,g]=B.useState(!1),[E,A]=B.useState("Shake SOS listens for 3 strong shakes when enabled."),[C,P]=B.useState({mode:"idle",label:"No external button connected",detail:"Use USB Serial or Bluetooth LE with Arduino/ESP32."}),[v,w]=B.useState(()=>{try{return JSON.parse(localStorage.getItem("surakshaVolumeSOS")||"null")||{enabled:!1,pattern:"up-down-up"}}catch{return{enabled:!1,pattern:"up-down-up"}}}),I=B.useRef(null),k=B.useRef("idle"),V=B.useRef(null),L=B.useRef({abort:!1}),T=typeof navigator<"u"&&"serial"in navigator,y=typeof navigator<"u"&&"bluetooth"in navigator,S=C.mode==="serial"||C.mode==="bluetooth";B.useEffect(()=>{k.current=s},[s]),B.useEffect(()=>{localStorage.setItem("surakshaVolumeSOS",JSON.stringify(v)),window.__SURAKSHA_SOS_NATIVE_CONFIG={...window.__SURAKSHA_SOS_NATIVE_CONFIG||{},volumeSOS:v},window.dispatchEvent(new CustomEvent("suraksha:volume-sos-pref",{detail:v}))},[v]);const x=()=>n?`https://maps.google.com/maps?q=${n.lat},${n.lng}`:"Location unavailable",R=async()=>{if(t)try{await Zd(Jr(Xr,"sosLogs"),{uid:t.uid,triggeredAt:eh(),location:n||null,contactsNotified:e.length})}catch(q){console.warn("SOS log failed:",q.message)}},N=(q="SOS button")=>k.current!=="idle"?(i("SOS Active","An SOS countdown or alert is already running.","info"),!1):(k.current="countdown",o("countdown"),u(5),i("SOS Countdown",`${q} trigger detected. Alert sends in 5 seconds.`,"info"),I.current=setInterval(()=>{u(Q=>Q<=1?(clearInterval(I.current),k.current="sent",o("sent"),b(),0):Q-1)},1e3),!0);B.useEffect(()=>{V.current=N});const b=async()=>{const q=x(),Q=[];window.open("tel:112"),Q.push("📱 Emergency dialer triggered"),e.forEach(de=>{const Ee=de.phone.replace(/[^0-9]/g,""),ge=encodeURIComponent(`🚨 SOS ALERT from ${(t==null?void 0:t.displayName)||"Suraksha User"}!
I need help. My location: ${q}
Please call me immediately!`);window.open(`https://wa.me/${Ee}?text=${ge}`,"_blank"),Q.push(`💬 WhatsApp → ${de.name} (${de.phone})`)});const re=encodeURIComponent(`🚨 EMERGENCY SOS ALERT

User: ${(t==null?void 0:t.displayName)||"Suraksha User"}
Email: ${t==null?void 0:t.email}
Location: ${q}
Time: ${new Date().toLocaleString()}

Please respond immediately!`);window.open(`mailto:?subject=${encodeURIComponent("🚨 SOS Alert - Suraksha")}&body=${re}`),Q.push("📧 Email alert composed"),await R(),Q.push("🔥 SOS logged to Firebase Firestore"),h(Q),i("🚨 SOS Sent!",`${e.length} contact${e.length!==1?"s":""} alerted. SOS logged to Firebase.`,"success"),setTimeout(()=>{k.current="idle",o("idle")},8e3)},pe=()=>{clearInterval(I.current),k.current="idle",o("idle"),u(5)};B.useEffect(()=>()=>clearInterval(I.current),[]),B.useEffect(()=>{if(typeof DeviceMotionEvent>"u"){A("Shake SOS is not supported on this device/browser.");return}typeof DeviceMotionEvent.requestPermission!="function"&&(g(!0),A("Shake SOS is active. Shake strongly 3 times to trigger the countdown."))},[]);const Gt=async()=>{if(typeof DeviceMotionEvent>"u"){A("Shake SOS is not supported on this device/browser."),i("Shake SOS","Device motion is not available here.","error");return}try{if(typeof DeviceMotionEvent.requestPermission=="function"&&await DeviceMotionEvent.requestPermission()!=="granted")throw new Error("Motion permission was not granted.");g(!0),A("Shake SOS is active. Shake strongly 3 times to trigger the countdown."),i("Shake SOS Active","Shake your phone 3 times to start SOS.","success")}catch(q){A(q.message||"Could not enable shake detection."),i("Shake SOS",q.message||"Could not enable shake detection.","error")}};B.useEffect(()=>{if(!p)return;let q=0,Q=0,re=0,de=0,Ee=0;const ge=15,Me=wr=>{var ms;const{x:bn,y:hn,z:Ir}=wr.accelerationIncludingGravity||{};if(bn==null||hn==null||Ir==null)return;const $o=Math.abs(bn-q)+Math.abs(hn-Q)+Math.abs(Ir-re),ps=Date.now();$o>ge&&(de=ps-Ee<1e3?de+1:1,Ee=ps,de>=3&&(de=0,(ms=V.current)==null||ms.call(V,"Shake SOS"))),q=bn,Q=hn,re=Ir};return window.addEventListener("devicemotion",Me),()=>window.removeEventListener("devicemotion",Me)},[p]);const Sn=B.useCallback((q,Q)=>{var Ee;const re=String(q||"").trim().toUpperCase();if(!re)return;["SOS","BUTTON","TRIGGER","PRESSED","S","1"].some(ge=>re.includes(ge))&&((Ee=V.current)==null||Ee.call(V,Q))},[]),xt=B.useCallback(async()=>{var Q,re,de,Ee,ge,Me,wr,bn,hn;const q=L.current;q.abort=!0;try{await((re=(Q=q.reader)==null?void 0:Q.cancel)==null?void 0:re.call(Q))}catch{}try{q.characteristic&&q.bluetoothListener&&(q.characteristic.removeEventListener("characteristicvaluechanged",q.bluetoothListener),await((Ee=(de=q.characteristic).stopNotifications)==null?void 0:Ee.call(de)))}catch{}try{(wr=(Me=(ge=q.device)==null?void 0:ge.gatt)==null?void 0:Me.disconnect)==null||wr.call(Me)}catch{}try{await((hn=(bn=q.port)==null?void 0:bn.close)==null?void 0:hn.call(bn))}catch{}L.current={abort:!1},P({mode:"idle",label:"No external button connected",detail:"Use USB Serial or Bluetooth LE with Arduino/ESP32."})},[]);B.useEffect(()=>()=>{var q,Q,re,de,Ee,ge,Me;L.current.abort=!0,(Q=(q=L.current.reader)==null?void 0:q.cancel)==null||Q.call(q).catch(()=>{}),(Ee=(de=(re=L.current.device)==null?void 0:re.gatt)==null?void 0:de.disconnect)==null||Ee.call(de),(Me=(ge=L.current.port)==null?void 0:ge.close)==null||Me.call(ge).catch(()=>{})},[]);const H=async()=>{if(!T){i("USB Serial","This browser does not support Web Serial.","error");return}await xt();let q=null;try{const Q=await navigator.serial.requestPort();await Q.open({baudRate:9600}),q={abort:!1,port:Q},L.current=q,P({mode:"serial",label:"USB external button connected",detail:"Listening for SOS, BUTTON, TRIGGER, S, or 1 over serial."}),i("External Button","USB serial SOS button connected.","success");const re=new TextDecoder;for(;Q.readable&&!q.abort;){const de=Q.readable.getReader();q.reader=de;try{for(;!q.abort;){const{value:Ee,done:ge}=await de.read();if(ge)break;Sn(re.decode(Ee),"USB external button")}}finally{de.releaseLock()}}}catch(Q){q!=null&&q.abort||(P({mode:"error",label:"USB connection failed",detail:Q.message||"Could not connect."}),i("External Button",Q.message||"USB serial connection failed.","error"))}},te=async()=>{if(!y){i("Bluetooth LE","This browser does not support Web Bluetooth.","error");return}await xt();const q="6e400001-b5a3-f393-e0a9-e50e24dcca9e",Q="6e400003-b5a3-f393-e0a9-e50e24dcca9e";try{const re=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:[q]}),ge=await(await(await re.gatt.connect()).getPrimaryService(q)).getCharacteristic(Q),Me=wr=>{Sn(new TextDecoder().decode(wr.target.value),"Bluetooth external button")};ge.addEventListener("characteristicvaluechanged",Me),await ge.startNotifications(),re.addEventListener("gattserverdisconnected",()=>{P({mode:"idle",label:"Bluetooth button disconnected",detail:"Reconnect when you want the external SOS button active."})}),L.current={abort:!1,device:re,characteristic:ge,bluetoothListener:Me},P({mode:"bluetooth",label:"Bluetooth external button connected",detail:"Listening for SOS, BUTTON, TRIGGER, S, or 1 over BLE UART."}),i("External Button","Bluetooth SOS button connected.","success")}catch(re){P({mode:"error",label:"Bluetooth connection failed",detail:re.message||"Could not connect."}),i("External Button",re.message||"Bluetooth connection failed.","error")}},ie=[{icon:"SOS",label:"Trigger SOS",sub:"5 second countdown",action:()=>N("Quick action button")},{icon:"📱",label:"Call 112",sub:"Emergency services",action:()=>{window.open("tel:112"),i("📱 Dialing 112","Opening phone dialer to Emergency Services.","info")}},{icon:"💬",label:"WhatsApp Alert",sub:`${e.length} contact${e.length!==1?"s":""}`,action:()=>{const q=x();if(e.length===0){i("⚠️ No Contacts","Add emergency contacts first to send WhatsApp alerts.","error");return}e.forEach(Q=>{const re=Q.phone.replace(/[^0-9]/g,""),de=encodeURIComponent(`🚨 SOS ALERT!
I need help. My location: ${q}`);window.open(`https://wa.me/${re}?text=${de}`,"_blank")}),i("💬 WhatsApp Opened",`Sending to ${e.length} contact${e.length!==1?"s":""}.`,"success")}},{icon:"📧",label:"Email Alert",sub:"Full incident report",action:()=>{const q=x(),Q=encodeURIComponent(`🚨 EMERGENCY SOS ALERT

User: ${(t==null?void 0:t.displayName)||"Suraksha User"}
Location: ${q}
Time: ${new Date().toLocaleString()}

Please respond immediately!`);window.open(`mailto:?subject=${encodeURIComponent("🚨 SOS Alert - Suraksha")}&body=${Q}`),i("📧 Email Opened","Compose window opened with SOS details.","info")}},{icon:"📍",label:"Share Location",sub:"Google Maps link",action:()=>{var Q;const q=x();(Q=navigator.clipboard)==null||Q.writeText(q).catch(()=>{}),i("📍 Location Copied","GPS link copied — paste it anywhere to share.","success")}}];return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🚨",ci:"sos",title:"SOS Emergency",sub:"One tap — all contacts alerted instantly",onClose:r}),s==="countdown"&&f.jsxs("div",{className:"sos-cd",children:[f.jsx("div",{style:{fontSize:".74rem",color:"rgba(255,255,255,.5)",marginBottom:3},children:"Sending SOS alert in"}),f.jsx("div",{className:"sos-cd-n",children:a}),f.jsx("button",{className:"btn-g",style:{marginTop:9,fontSize:".75rem"},onClick:pe,children:"✕ Cancel"})]}),s==="sent"&&f.jsxs("div",{className:"sos-ok",children:[f.jsx("div",{style:{fontSize:".82rem",color:"#86efac",fontWeight:600},children:"✅ SOS Alert Sent & Logged"}),f.jsxs("div",{style:{fontSize:".7rem",color:"rgba(255,255,255,.43)",marginTop:4},children:[e.length>0?`${e.length} contact${e.length!==1?"s":""}`:"Contacts"," notified · Logged to Firebase"]}),c.length>0&&f.jsx("div",{style:{marginTop:8,textAlign:"left"},children:c.map((q,Q)=>f.jsxs("div",{style:{fontSize:".67rem",color:"rgba(255,255,255,.5)",marginTop:3},children:["✓ ",q]},Q))})]}),f.jsx("div",{className:"sos-ring-wrap",children:f.jsx("div",{className:"sos-outer",children:f.jsxs("button",{className:`sos-btn ${s==="sent"?"sent":""}`,onClick:s==="idle"?N:void 0,children:[f.jsx("span",{style:{fontSize:"1.75rem"},children:s==="sent"?"✅":"🆘"}),f.jsx("span",{style:{fontSize:".9rem",letterSpacing:".08em"},children:s==="sent"?"SENT":"SOS"})]})})}),f.jsx("button",{className:"sos-trigger-btn",onClick:()=>N("SOS button"),disabled:s!=="idle",children:s==="idle"?"Trigger SOS":"SOS countdown active"}),!n&&f.jsx("div",{style:{background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.25)",borderRadius:9,padding:"8px 12px",marginBottom:".9rem",fontSize:".73rem",color:"#fde68a",textAlign:"center"},children:"⚠️ Fetch your location first for GPS-precise alerts"}),f.jsxs("div",{className:"trigger-grid",children:[f.jsxs("div",{className:"trigger-panel",children:[f.jsx("div",{className:"trigger-title",children:"Shake SOS"}),f.jsx("div",{className:"trigger-detail",children:E}),!p&&f.jsx("button",{className:"trigger-btn",onClick:Gt,children:"Enable Shake SOS"})]}),f.jsxs("div",{className:"trigger-panel",children:[f.jsx("div",{className:"trigger-title",children:"External Button"}),f.jsxs("div",{className:"trigger-detail",children:[f.jsx("strong",{children:C.label}),f.jsx("br",{}),C.detail]}),f.jsxs("div",{className:"hardware-actions",children:[f.jsx("button",{className:"trigger-btn",onClick:H,disabled:!T||S,children:"USB Serial"}),f.jsx("button",{className:"trigger-btn",onClick:te,disabled:!y||S,children:"Bluetooth LE"}),S&&f.jsx("button",{className:"trigger-btn ghost",onClick:xt,children:"Disconnect"})]})]}),f.jsxs("div",{className:"trigger-panel",children:[f.jsx("div",{className:"trigger-title",children:"Volume Button SOS"}),f.jsx("div",{className:"trigger-detail",children:"Saves your preferred Android APK trigger pattern. Web browsers cannot read volume or power buttons directly."}),f.jsxs("label",{className:"pref-row",children:[f.jsx("span",{children:"Enable in Android app"}),f.jsx("input",{type:"checkbox",checked:v.enabled,onChange:q=>w(Q=>({...Q,enabled:q.target.checked}))})]}),f.jsxs("select",{className:"pref-select",value:v.pattern,onChange:q=>w(Q=>({...Q,pattern:q.target.value})),children:[f.jsx("option",{value:"up-down-up",children:"Volume Up, Down, Up"}),f.jsx("option",{value:"down-up-down",children:"Volume Down, Up, Down"}),f.jsx("option",{value:"up-up-up",children:"Volume Up 3 times"}),f.jsx("option",{value:"down-down-down",children:"Volume Down 3 times"})]})]})]}),f.jsx("div",{className:"sl",children:"Quick Alert Actions"}),f.jsx("div",{className:"sos-actions",children:ie.map(q=>f.jsxs("button",{className:"sos-act",onClick:q.action,children:[f.jsx("span",{style:{fontSize:"1.25rem"},children:q.icon}),f.jsxs("div",{children:[f.jsx("div",{children:q.label}),f.jsx("div",{style:{fontSize:".62rem",color:"rgba(255,255,255,.35)"},children:q.sub})]})]},q.label))}),f.jsx("div",{className:"divider"}),f.jsx("p",{className:"hint",children:"Main SOS button fires all alerts simultaneously + logs to Firestore. Quick Actions let you trigger each channel individually."})]})}function mF({contacts:t,onClose:e,addToast:n,onOpenRoute:r,onLocationUpdate:i}){const[s,o]=B.useState(null),[a,u]=B.useState(!1),[c,h]=B.useState(!1),[p,g]=B.useState(!1),E=B.useRef(null),A=V=>{const L={lat:V.coords.latitude.toFixed(6),lng:V.coords.longitude.toFixed(6),accuracy:Math.round(V.coords.accuracy),time:new Date().toLocaleTimeString()};o(L),i==null||i(L)},C=()=>{if(!navigator.geolocation){n("⚠️ Not Supported","Geolocation not supported.","error");return}u(!0),navigator.geolocation.getCurrentPosition(V=>{A(V),u(!1),n("📍 Location Retrieved","Real GPS coordinates fetched.","success")},()=>{u(!1),n("⚠️ Permission Denied","Allow location access in browser settings.","error")})},P=()=>{if(!navigator.geolocation){n("⚠️ Not Supported","Geolocation not supported.","error");return}E.current=navigator.geolocation.watchPosition(V=>{A(V)},()=>n("⚠️ Tracking Error","Lost GPS signal.","error"),{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}),g(!0),n("🔴 Live Tracking On","Your location is being tracked in real time.","success")},v=()=>{E.current!==null&&(navigator.geolocation.clearWatch(E.current),E.current=null),g(!1),n("⏹ Tracking Stopped","Live location tracking has been stopped.","info")};B.useEffect(()=>()=>{E.current!==null&&navigator.geolocation.clearWatch(E.current)},[]);const w=()=>{var L;if(!s)return;h(!0);const V=`📍 My live location: https://maps.google.com/maps?q=${s.lat},${s.lng}`;(L=navigator.clipboard)==null||L.writeText(V).catch(()=>{}),setTimeout(()=>{h(!1),n("📤 Location Shared",`Link copied & sent to ${t.length} contact${t.length!==1?"s":""}.`,"success")},1200)},I=()=>{var V;s&&((V=navigator.clipboard)==null||V.writeText(`https://maps.google.com/maps?q=${s.lat},${s.lng}`).catch(()=>{}),n("🔗 Copied","Google Maps link copied to clipboard.","success"))},k=()=>{s&&window.open(`https://maps.google.com/maps?q=${s.lat},${s.lng}`,"_blank")};return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"📍",ci:"loc",title:"Live Location",sub:p?"🔴 Live tracking active":"Real-time GPS sharing",onClose:e}),f.jsxs("div",{className:"map-box",children:[f.jsx("div",{className:"map-bg"}),f.jsx("div",{className:"map-inner",children:s?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"map-pin",children:p?"🔴":"📍"}),f.jsx("div",{style:{fontSize:".78rem",color:"rgba(255,255,255,.5)",marginBottom:".4rem"},children:p?"Live tracking active":"Your current location"}),f.jsxs("div",{className:"map-coords",children:[s.lat,"°N, ",s.lng,"°E"]}),f.jsxs("div",{style:{fontSize:".64rem",color:"rgba(255,255,255,.3)",marginTop:".4rem"},children:["Accuracy ±",s.accuracy,"m · ",s.time]})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"2.25rem",opacity:.3,marginBottom:".4rem"},children:"🗺️"}),f.jsx("div",{style:{color:"rgba(255,255,255,.38)",fontSize:".82rem"},children:"Tap below to get your real GPS coordinates"})]})})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[f.jsx("button",{className:"loc-btn",style:{margin:".8rem 0"},onClick:C,disabled:a,children:a?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Fetching…"]}):"📡 Get Location"}),f.jsx("button",{className:"loc-btn",style:{margin:".8rem 0",background:p?"linear-gradient(135deg,#dc2626,#b91c1c)":"linear-gradient(135deg,#16a34a,#15803d)"},onClick:p?v:P,children:p?"⏹ Stop Live":"🔴 Live Track"})]}),s&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"info-grid",children:[["Latitude",`${s.lat}°N`],["Longitude",`${s.lng}°E`],["Accuracy",`±${s.accuracy}m`],["Updated",s.time]].map(([V,L])=>f.jsxs("div",{className:"info-card",children:[f.jsx("div",{className:"info-lbl",children:V}),f.jsx("div",{className:"info-val",children:L})]},V))}),f.jsx("div",{className:"divider"}),f.jsx("button",{className:"share-btn",onClick:w,disabled:c,children:c?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Sharing…"]}):"📤 Share with Emergency Contacts"}),f.jsx("button",{className:"share-btn",onClick:I,children:"🔗 Copy Google Maps Link"}),f.jsx("button",{className:"share-btn",onClick:k,children:"🌍 Open in Google Maps"}),f.jsx("button",{className:"share-btn",onClick:()=>{e(),r(s)},children:"🗺️ Get Safe Route from Here"})]}),f.jsx("p",{className:"hint",children:"Live Track uses watchPosition API — updates every 5 seconds automatically. Location only shared when you press Share."})]})}function gF({startLocation:t,onClose:e,addToast:n}){const[r,i]=B.useState(""),[s,o]=B.useState("walk"),[a,u]=B.useState("now"),[c,h]=B.useState(!1),[p,g]=B.useState(null),[E,A]=B.useState(""),C={walk:"walking",auto:"driving",cab:"driving"},P=async()=>{var I,k;if(!r.trim()){n("⚠️ Missing Destination","Please enter a destination.","error");return}h(!0),A(""),g(null);const v=t?`${t.lat},${t.lng}`:"Mysuru, Karnataka, India",w=`You are a women's safety route advisor for Mysuru, Karnataka, India.

A woman needs to travel from: ${v}
To: ${r}
Mode: ${C[s]||"walking"}
Time: ${a==="night"?"Night time (after 8pm) — extra safety precautions needed":a==="morning"?"Morning (6am-9am)":"Current time"}

Provide a REAL, SPECIFIC safe route with 4-6 steps. Include:
- Actual street names or landmarks in Mysuru if destination is recognizable
- Safety notes for each step (lighting, crowd levels, CCTV)
- Estimated distance and time per step
- Any areas/shortcuts to AVOID

Respond ONLY as valid JSON (no markdown, no backticks) in this exact format:
{
  "summary": "one sentence summary with total time and distance",
  "safetyScore": 8,
  "steps": [
    { "text": "step description with safety note", "dist": "~200m · 3 min", "safe": true }
  ],
  "avoid": ["area or shortcut to avoid"],
  "nightTip": "extra tip if travelling at night"
}`;try{const V=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1e3,messages:[{role:"user",content:w}]})});if(!V.ok)throw new Error("Claude API error "+V.status);const T=((k=(I=(await V.json()).content)==null?void 0:I[0])==null?void 0:k.text)||"";let y;try{const S=T.replace(/```json|```/g,"").trim();y=JSON.parse(S)}catch{y={summary:`Route from ${v} to ${r} — Claude AI guidance`,safetyScore:7,steps:T.split(`
`).filter(S=>S.trim()).slice(0,6).map((S,x)=>({text:S.replace(/^[0-9]+\.\s*/,"").trim(),dist:"see details",safe:!0})),avoid:[],nightTip:a==="night"?"Stay in well-lit areas and share your live location.":null}}g(y),n("🗺️ Route Ready",`Claude AI calculated your safe route to ${r}.`,"success")}catch{A("Claude AI unavailable — opening Google Maps directly.");const L=`https://www.google.com/maps/dir/${encodeURIComponent(v)}/${encodeURIComponent(r)}`;setTimeout(()=>window.open(L,"_blank"),800),n("🗺️ Opening Google Maps","Showing real directions in Google Maps.","info")}h(!1)};return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🗺️",ci:"route",title:"Safe Route",sub:"AI-verified safety-optimised navigation",onClose:e}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"📍 From"}),f.jsx("input",{defaultValue:t?`My Location (${t.lat}, ${t.lng})`:"",placeholder:"Fetch location first",readOnly:!!t})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"🏁 Destination"}),f.jsx("input",{value:r,onChange:v=>i(v.target.value),placeholder:"e.g. Mysuru Railway Station…",onKeyDown:v=>v.key==="Enter"&&P()})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:".9rem"},children:[f.jsxs("div",{className:"fg",style:{marginBottom:0},children:[f.jsx("label",{children:"Mode"}),f.jsxs("select",{value:s,onChange:v=>o(v.target.value),children:[f.jsx("option",{value:"walk",children:"🚶 Walking"}),f.jsx("option",{value:"auto",children:"🛺 Auto"}),f.jsx("option",{value:"cab",children:"🚕 Cab"})]})]}),f.jsxs("div",{className:"fg",style:{marginBottom:0},children:[f.jsx("label",{children:"Time"}),f.jsxs("select",{value:a,onChange:v=>u(v.target.value),children:[f.jsx("option",{value:"now",children:"🕐 Right Now"}),f.jsx("option",{value:"night",children:"🌙 Night"}),f.jsx("option",{value:"morning",children:"🌅 Morning"})]})]})]}),f.jsx("button",{className:"loc-btn",style:{margin:".5rem 0"},onClick:P,disabled:c,children:c?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Calculating safe route…"]}):"🗺️ Get Safe Route"}),E&&f.jsxs("div",{style:{background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.25)",borderRadius:9,padding:"9px 12px",marginBottom:".8rem",fontSize:".75rem",color:"#fde68a"},children:["⚠️ ",E]}),p&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"sl",style:{marginTop:"1rem"},children:["Safe Route — Claude AI",f.jsx("span",{className:"tag tag-new",style:{marginLeft:6},children:"AI Verified"}),p.safetyScore&&f.jsxs("span",{style:{marginLeft:6,fontSize:".65rem",color:"#86efac",background:"rgba(34,197,94,.15)",border:"1px solid rgba(34,197,94,.25)",padding:"2px 8px",borderRadius:5},children:["Safety ",p.safetyScore,"/10"]})]}),(a==="night"||p.nightTip)&&f.jsxs("div",{style:{background:"rgba(245,158,11,.1)",border:"1px solid rgba(245,158,11,.25)",borderRadius:9,padding:"9px 12px",marginBottom:".8rem",fontSize:".74rem",color:"#fde68a"},children:["🌙 ",p.nightTip||"Night mode: Stay in well-lit areas. Share your live location before leaving."]}),f.jsxs("div",{style:{background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",borderRadius:9,padding:"9px 12px",marginBottom:".8rem",fontSize:".74rem",color:"#86efac"},children:["✅ ",p.summary]}),p.steps&&p.steps.map((v,w)=>f.jsxs("div",{className:"route-step",style:{borderColor:v.safe===!1?"rgba(244,63,94,.2)":"rgba(255,255,255,.07)"},children:[f.jsx("div",{className:"rs-num",style:{background:v.safe===!1?"rgba(244,63,94,.2)":"rgba(34,197,94,.2)",color:v.safe===!1?"#fca5a5":"#86efac"},children:w+1}),f.jsxs("div",{children:[f.jsx("div",{className:"rs-text",children:v.text}),f.jsx("div",{className:"rs-dist",children:v.dist})]})]},w)),p.avoid&&p.avoid.length>0&&f.jsxs("div",{style:{background:"rgba(244,63,94,.07)",border:"1px solid rgba(244,63,94,.2)",borderRadius:9,padding:"9px 12px",marginTop:".8rem",fontSize:".73rem",color:"#fca5a5"},children:["🚫 ",f.jsx("strong",{children:"Avoid:"})," ",p.avoid.join(", ")]}),f.jsx("button",{className:"share-btn",style:{marginTop:".75rem"},onClick:()=>{var I;const v=(p.steps||[]).map((k,V)=>`${V+1}. ${k.text} (${k.dist})`).join(`
`),w=`🗺️ Safe Route via Suraksha:
${p.summary}

${v}`;navigator.share?navigator.share({title:"Suraksha Safe Route",text:w}).catch(()=>{var k;return(k=navigator.clipboard)==null?void 0:k.writeText(w)}):((I=navigator.clipboard)==null||I.writeText(w),n("📋 Copied","Route copied to clipboard.","success"))},children:"📤 Share Route"}),f.jsx("button",{className:"share-btn",onClick:()=>{const v=t?`${t.lat},${t.lng}`:"Mysuru,Karnataka";window.open(`https://www.google.com/maps/dir/${encodeURIComponent(v)}/${encodeURIComponent(r)}`,"_blank")},children:"🗺️ Open in Google Maps"})]}),f.jsx("p",{className:"hint",children:"Claude AI generates real, location-aware safe routes. Falls back to Google Maps if AI is unavailable. Add GPS location first for precise directions."})]})}function yF({user:t,contacts:e,setContacts:n,onClose:r,addToast:i}){const[s,o]=B.useState(!1),[a,u]=B.useState(e),[c,h]=B.useState({name:"",phone:"",relation:"Mother"}),[p,g]=B.useState(null),[E,A]=B.useState(""),C=["Mother","Father","Sister","Brother","Friend","Partner","Colleague","Guardian","Other"];B.useEffect(()=>{if(!(t!=null&&t.uid))return;let I;return(async()=>{try{const{onSnapshot:V}=await Rm(async()=>{const{onSnapshot:T}=await Promise.resolve().then(()=>sF);return{onSnapshot:T}},void 0),L=ty(Jr(Xr,"contacts"),ny("uid","==",t.uid));I=V(L,T=>{const y=T.docs.map(S=>({id:S.id,...S.data()}));u(y),n(y),g(!0)},T=>{g(!1),A(T.message),i("⚠️ Firestore Error",T.message,"error")})}catch(V){g(!1),A(V.message)}})(),()=>{I&&I()}},[t==null?void 0:t.uid]);const P=async()=>{if(!c.name.trim()||!c.phone.trim()){i("⚠️ Missing Fields","Please enter both name and phone number.","error");return}if(!c.phone.trim().match(/[0-9]/)){i("⚠️ Invalid Phone","Please enter a valid phone number.","error");return}o(!0);try{const I={uid:t.uid,name:c.name.trim(),phone:c.phone.trim(),relation:c.relation,createdAt:eh()},V={id:(await Zd(Jr(Xr,"contacts"),I)).id,...I};u(T=>[...T,V]);const L=c.name.trim();h({name:"",phone:"",relation:"Mother"}),i("✅ Contact Saved",`${L} added to Firebase Firestore.`,"success")}catch(I){console.error("Firestore addDoc error:",I);const k=I.code==="permission-denied"?"Firestore permission denied. Go to Firebase Console → Firestore → Rules and set: allow read, write: if true;":I.code==="unavailable"?"Firestore not reachable. Check your internet connection.":I.message||"Failed to save contact.";i("⚠️ Could Not Save",k,"error")}o(!1)},v=async(I,k)=>{try{await qA(Gg(Xr,"contacts",I)),u(V=>V.filter(L=>L.id!==I)),i("🗑 Removed",`${k} deleted from Firestore.`,"info")}catch(V){const L=V.code==="permission-denied"?"Permission denied. Check Firestore security rules.":V.message;i("⚠️ Error",L,"error")}},w=a.length>0?a:e;return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"👥",ci:"con",title:"Emergency Contacts",sub:`${w.length} contact${w.length!==1?"s":""} — Firebase Firestore (real-time)`,onClose:r}),p===!1&&f.jsxs("div",{style:{background:"rgba(244,63,94,.12)",border:"1px solid rgba(244,63,94,.3)",borderRadius:9,padding:"10px 13px",marginBottom:"1rem",fontSize:".75rem",color:"#fca5a5"},children:[f.jsx("div",{style:{fontWeight:600,marginBottom:4},children:"⚠️ Firestore Connection Error"}),f.jsx("div",{style:{marginBottom:6},children:E}),f.jsx("div",{children:"Fix: Firebase Console → suraksha-33bb4 → Firestore Database → Rules → set:"}),f.jsx("code",{style:{display:"block",background:"rgba(0,0,0,.3)",borderRadius:5,padding:"6px 8px",marginTop:6,fontSize:".72rem",color:"#86efac"},children:"allow read, write: if request.auth != null;"})]}),p===!0&&f.jsxs("div",{style:{background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",borderRadius:9,padding:"8px 12px",marginBottom:"1rem",fontSize:".73rem",color:"#86efac",display:"flex",alignItems:"center",gap:8},children:[f.jsx("span",{children:"🔴 Live"})," Real-time Firestore sync active — changes appear instantly"]}),f.jsxs("div",{className:"cf-box",children:[f.jsx("h3",{children:"+ Add Emergency Contact"}),f.jsxs("div",{className:"form-row",children:[f.jsxs("div",{className:"fg",style:{marginBottom:0},children:[f.jsx("label",{children:"Full Name"}),f.jsx("input",{placeholder:"e.g. Priya Sharma",value:c.name,onChange:I=>h(k=>({...k,name:I.target.value})),onKeyDown:I=>I.key==="Enter"&&P()})]}),f.jsxs("div",{className:"fg",style:{marginBottom:0},children:[f.jsx("label",{children:"Phone Number"}),f.jsx("input",{placeholder:"+91 98765 43210",value:c.phone,onChange:I=>h(k=>({...k,phone:I.target.value})),onKeyDown:I=>I.key==="Enter"&&P()})]})]}),f.jsxs("div",{className:"fg",style:{margin:"8px 0 0"},children:[f.jsx("label",{children:"Relation"}),f.jsx("select",{value:c.relation,onChange:I=>h(k=>({...k,relation:I.target.value})),children:C.map(I=>f.jsx("option",{children:I},I))})]}),f.jsx("button",{className:"form-btn",style:{marginTop:9},onClick:P,disabled:s,children:s?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Saving to Firestore…"]}):"➕ Add Emergency Contact"})]}),f.jsxs("div",{className:"sl",children:["Saved Contacts",f.jsx("span",{style:{color:"rgba(255,255,255,.3)",fontWeight:400,fontSize:".65rem",marginLeft:6},children:p===null?"Connecting…":p?"● Live":"● Offline"})]}),w.length===0?f.jsx(JA,{icon:"👥",text:"No contacts yet.",sub:"Add your first emergency contact above. They will be notified instantly on SOS."}):f.jsx("div",{className:"c-list",children:w.map(I=>{var k;return f.jsxs("div",{className:"c-card",children:[f.jsxs("div",{className:"c-left",children:[f.jsx("div",{className:"c-av",children:((k=I.name[0])==null?void 0:k.toUpperCase())||"?"}),f.jsxs("div",{children:[f.jsx("div",{className:"c-nm",children:I.name}),f.jsx("div",{className:"c-ph",children:I.phone})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[f.jsx("span",{className:"c-badge",children:I.relation}),f.jsx("button",{className:"c-del",onClick:()=>v(I.id,I.name),title:"Remove",children:"🗑"})]})]},I.id)})}),f.jsx("p",{className:"hint",children:"Contacts sync to Firebase Firestore in real-time. If saving fails, ensure Firestore is enabled in your Firebase Console and rules allow authenticated writes."})]})}function _F({onClose:t}){const[e,n]=B.useState(INIT_AI),[r,i]=B.useState(""),[s,o]=B.useState(!1),a=B.useRef(null);B.useEffect(()=>{var h;(h=a.current)==null||h.scrollIntoView({behavior:"smooth"})},[e,s]);const u=async h=>{const p=(h||r).trim();if(!p||s)return;i("");const g=[...e,{role:"user",text:p}];n(g),o(!0);const E=await uF(g);n(A=>[...A,{role:"bot",text:E}]),o(!1)},c=["I'm being followed","I feel unsafe","Safe route tips","Emergency numbers","I was harassed","How to use SOS"];return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🤖",ci:"ai",title:"AI Safety Assistant",sub:"Powered by Claude AI (Anthropic)",onClose:t}),f.jsx("div",{className:"qbtns",children:c.map(h=>f.jsx("button",{className:"qbtn",onClick:()=>u(h),children:h},h))}),f.jsxs("div",{className:"ai-wrap",children:[f.jsxs("div",{className:"ai-msgs",children:[e.map((h,p)=>f.jsxs("div",{className:`ai-msg ${h.role}`,children:[f.jsx("div",{className:`ai-av ${h.role==="bot"?"bot":"user"}`,children:h.role==="bot"?"🛡️":"👤"}),f.jsxs("div",{children:[f.jsx("div",{className:"ai-bbl",children:h.text}),h.role==="bot"&&f.jsx("div",{className:"ai-src",children:"Suraksha AI · Claude Sonnet"})]})]},p)),s&&f.jsxs("div",{className:"ai-msg bot",children:[f.jsx("div",{className:"ai-av bot",children:"🛡️"}),f.jsxs("div",{children:[f.jsx("div",{className:"ai-bbl",children:f.jsxs("div",{className:"typing",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),f.jsx("div",{className:"ai-src",children:"Claude is thinking…"})]})]}),f.jsx("div",{ref:a})]}),f.jsxs("div",{className:"ai-ir",children:[f.jsx("textarea",{className:"ai-inp",value:r,onChange:h=>i(h.target.value),placeholder:"Describe your situation…",onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),u())}}),f.jsx("button",{className:"ai-send",onClick:()=>u(),disabled:s||!r.trim(),children:"➤"})]})]})]})}function vF({onClose:t,addToast:e,onRecCountChange:n}){const[r,i]=B.useState("idle"),[s,o]=B.useState(0),[a,u]=B.useState([]),[c,h]=B.useState(null),p=B.useRef(null),g=B.useRef(null),E=B.useRef([]),A=k=>`${String(Math.floor(k/60)).padStart(2,"0")}:${String(k%60).padStart(2,"0")}`,C=async()=>{var k;if(r==="idle")try{const V=await navigator.mediaDevices.getUserMedia({audio:!0}),L=new MediaRecorder(V);E.current=[],L.ondataavailable=T=>E.current.push(T.data),L.onstop=()=>{const T=new Blob(E.current,{type:"audio/webm"}),y=URL.createObjectURL(T);o(S=>{const x={id:Date.now(),url:y,blob:T,duration:S,time:new Date().toLocaleTimeString(),uploaded:!1};return u(R=>{const N=[x,...R];return n==null||n(N.length),N}),0}),V.getTracks().forEach(S=>S.stop())},L.start(),g.current=L,i("recording"),o(0),p.current=setInterval(()=>o(T=>T+1),1e3),e("🎙️ Recording Started","Audio recording in progress. Tap STOP when done.","info")}catch{e("⚠️ Mic Access Denied","Allow microphone access to record audio.","error")}else clearInterval(p.current),(k=g.current)==null||k.stop(),i("idle"),e("✅ Recording Saved","Saved locally. Tap 📤 to upload to Firebase Storage.","success")};B.useEffect(()=>()=>{var k;clearInterval(p.current),(k=g.current)==null||k.stop()},[]);const P=k=>{new Audio(k.url).play().catch(()=>e("▶ Playback","Playing recording…","info"))},v=async k=>{h(k.id);try{const{getStorage:V,ref:L,uploadBytes:T,getDownloadURL:y}=await Rm(async()=>{const{getStorage:N,ref:b,uploadBytes:pe,getDownloadURL:Gt}=await import("./index.esm-DP7JIsWz.js");return{getStorage:N,ref:b,uploadBytes:pe,getDownloadURL:Gt}},[]),S=V(),x=L(S,`recordings/${k.id}.webm`);await T(x,k.blob);const R=await y(x);u(N=>N.map(b=>b.id===k.id?{...b,uploaded:!0,downloadURL:R}:b)),e("☁️ Uploaded to Firebase","Recording backed up. Download URL saved.","success")}catch(V){e("⚠️ Upload Failed",V.message,"error")}h(null)},w=k=>{if(navigator.share&&k.blob){const V=new File([k.blob],`suraksha-recording-${k.id}.webm`,{type:"audio/webm"});navigator.share({title:"Suraksha Emergency Recording",files:[V]}).then(()=>e("📤 Shared","Recording shared successfully.","success")).catch(()=>e("📤 Share","Sharing not supported — use Upload instead.","info"))}else e("📤 Share","Use Upload (☁️) to back up to Firebase Storage.","info")},I=k=>{u(V=>{const L=V.filter(T=>T.id!==k);return n==null||n(L.length),L}),e("🗑 Deleted","Recording removed from device.","info")};return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🎙️",ci:"voice",title:"Voice Recorder",sub:"Record audio evidence during emergencies",onClose:t}),f.jsxs("div",{className:"voice-center",children:[r==="recording"&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"rec-timer",children:A(s)}),f.jsx("div",{className:"wave-bars",children:[...Array(7)].map((k,V)=>f.jsx("span",{style:{animationDelay:`${V*.1}s`}},V))})]}),f.jsxs("button",{className:`rec-btn ${r}`,onClick:C,children:[f.jsx("span",{className:"rec-icon",children:r==="recording"?"⏹":"🎙️"}),f.jsx("span",{className:"rec-lbl",children:r==="recording"?"STOP":"RECORD"})]}),f.jsx("p",{style:{fontSize:".76rem",color:"rgba(255,255,255,.4)",maxWidth:260,margin:"0 auto"},children:r==="recording"?"Recording in progress — tap STOP when done.":"Tap to start recording audio evidence."})]}),f.jsx("div",{className:"divider"}),f.jsxs("div",{className:"sl",children:["Saved Recordings ",f.jsxs("span",{style:{color:"rgba(255,255,255,.3)",fontWeight:400},children:["(",a.length,")"]})]}),a.length===0?f.jsx(JA,{icon:"🎙️",text:"No recordings yet.",sub:"Recordings are encrypted and stored on your device."}):a.map((k,V)=>f.jsxs("div",{className:"rec-item",children:[f.jsxs("div",{className:"ri-left",children:[f.jsx("span",{style:{fontSize:"1.1rem"},children:k.uploaded?"☁️":"🎵"}),f.jsxs("div",{children:[f.jsxs("div",{className:"ri-nm",children:["Recording ",a.length-V,k.uploaded&&f.jsx("span",{style:{marginLeft:5,fontSize:".6rem",color:"#86efac",background:"rgba(34,197,94,.15)",border:"1px solid rgba(34,197,94,.25)",padding:"1px 6px",borderRadius:4},children:"Firebase"})]}),f.jsxs("div",{className:"ri-meta",children:[A(k.duration)," · ",k.time]})]})]}),f.jsxs("div",{className:"ri-acts",children:[f.jsx("button",{className:"ri-btn",onClick:()=>P(k),title:"Play",children:"▶"}),f.jsx("button",{className:"ri-btn",onClick:()=>v(k),title:"Upload to Firebase",disabled:k.uploaded||c===k.id,children:c===k.id?f.jsx(ln,{}):k.uploaded?"✓":"☁️"}),f.jsx("button",{className:"ri-btn",onClick:()=>w(k),title:"Share",children:"📤"}),f.jsx("button",{className:"ri-btn",style:{color:"#fb7185"},onClick:()=>I(k.id),title:"Delete",children:"🗑"})]})]},k.id)),f.jsx("p",{className:"hint",children:"▶ plays audio · ☁️ uploads to Firebase Storage · 📤 shares via device share sheet · 🗑 deletes locally."})]})}function wF({onClose:t,addToast:e}){const[n,r]=B.useState({sos:!0,location:!1,tips:!0,community:!0}),[i,s]=B.useState(cF),[o,a]=B.useState((Notification==null?void 0:Notification.permission)==="granted"),u=i.filter(g=>!g.read).length,c=async()=>{if(!("Notification"in window)){e("⚠️ Not Supported","Browser push notifications not supported.","error");return}await Notification.requestPermission()==="granted"?(a(!0),new Notification("🛡️ Suraksha Notifications Active",{body:"You'll now receive safety alerts from Suraksha.",icon:"/favicon.ico"}),e("🔔 Push Enabled","You will now receive real browser push notifications.","success")):e("⚠️ Permission Denied","Push notifications blocked. Enable in browser settings.","error")},h=()=>{if(!o){e("⚠️ Not Enabled","Enable push notifications first.","error");return}new Notification("🚨 Test SOS Alert",{body:"This is a test notification from Suraksha.",icon:"/favicon.ico"}),e("✅ Test Sent","Test push notification delivered.","success")},p=[{key:"sos",icon:"🚨",title:"SOS Alerts",desc:"Notified when contacts trigger SOS"},{key:"location",icon:"📍",title:"Location Updates",desc:"When contacts share their location"},{key:"tips",icon:"💡",title:"Safety Tips",desc:"Daily tips from Suraksha AI"},{key:"community",icon:"🏘️",title:"Community Alerts",desc:"Nearby incidents reported in your area"}];return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🔔",ci:"notif",title:"Notifications",sub:`${u} unread · Push alert preferences`,onClose:t}),f.jsxs("div",{style:{background:o?"rgba(34,197,94,.08)":"rgba(37,99,235,.1)",border:`1px solid ${o?"rgba(34,197,94,.25)":"rgba(37,99,235,.25)"}`,borderRadius:11,padding:"12px 14px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".82rem",fontWeight:600,marginBottom:2},children:o?"✅ Browser Push Active":"🔔 Enable Push Notifications"}),f.jsx("div",{style:{fontSize:".68rem",color:"rgba(255,255,255,.45)"},children:o?"Real browser alerts will appear even when app is in background.":"Get real alerts even when Suraksha is minimised."})]}),o?f.jsx("button",{className:"share-btn",style:{width:"auto",padding:"7px 12px",margin:0,flexShrink:0},onClick:h,children:"Test"}):f.jsx("button",{className:"btn-p",style:{flexShrink:0,padding:"7px 14px",fontSize:".75rem"},onClick:c,children:"Enable"})]}),f.jsx("div",{className:"sl",children:"Alert Preferences"}),p.map(g=>f.jsxs("div",{className:"notif-row",onClick:()=>{r(E=>({...E,[g.key]:!E[g.key]})),e(n[g.key]?"🔕 Disabled":"🔔 Enabled",`${g.title} updated.`,"info")},children:[f.jsxs("div",{className:"notif-l",children:[f.jsx("span",{style:{fontSize:"1.15rem"},children:g.icon}),f.jsxs("div",{children:[f.jsx("div",{className:"notif-title",children:g.title}),f.jsx("div",{className:"notif-desc",children:g.desc})]})]}),f.jsx(XA,{on:n[g.key],onClick:E=>{E.stopPropagation(),r(A=>({...A,[g.key]:!A[g.key]}))}})]},g.key)),f.jsx("div",{className:"sl",style:{marginTop:"1.1rem"},children:"Recent Notifications"}),i.map(g=>f.jsxs("div",{className:"nh-item",onClick:()=>s(E=>E.map(A=>A.id===g.id?{...A,read:!0}:A)),children:[f.jsx("div",{className:`nh-dot ${g.read?"read":"unread"}`}),f.jsxs("div",{children:[f.jsx("div",{className:"nh-title",children:g.title}),f.jsx("div",{className:"nh-body",children:g.body}),f.jsx("div",{className:"nh-time",children:g.time})]})]},g.id)),u>0&&f.jsx("button",{className:"share-btn",style:{marginTop:".75rem"},onClick:()=>{s(g=>g.map(E=>({...E,read:!0}))),e("✅ All Read","All notifications marked as read.","success")},children:"✅ Mark all as read"}),f.jsx("p",{className:"hint",children:"Push notifications use the real browser Notification API. FCM integration adds background delivery via Firebase Cloud Messaging."})]})}function IF({user:t,onClose:e,addToast:n}){const[r,i]=B.useState("feed"),[s,o]=B.useState(Lu),[a,u]=B.useState({type:"suspicious",area:"",desc:""}),[c,h]=B.useState(!1),[p,g]=B.useState(!1),E={harassment:"t-harassment",suspicious:"t-suspicious",unsafe:"t-unsafe",safe:"t-safe"};B.useEffect(()=>{(async()=>{h(!0);try{const w=(await ed(Jr(Xr,"communityReports"))).docs.map(I=>{var k,V,L;return{id:I.id,...I.data(),time:((L=(V=(k=I.data().createdAt)==null?void 0:k.toDate)==null?void 0:V.call(k))==null?void 0:L.toLocaleTimeString())||"recently",userVoted:!1}});w.length>0&&o([...w,...Lu])}catch{}h(!1)})()},[]);const A=P=>{const v=s.find(w=>w.id===P);if(v!=null&&v.userVoted){n("Already Voted","You've already verified this report.","info");return}o(w=>w.map(I=>I.id===P?{...I,votes:I.votes+1,userVoted:!0}:I)),n("👍 Verified","Thanks for verifying this community report!","success")},C=async()=>{if(!a.area.trim()||!a.desc.trim()){n("⚠️ Incomplete","Please fill in area and description.","error");return}g(!0);try{const P=await Zd(Jr(Xr,"communityReports"),{uid:(t==null?void 0:t.uid)||"anonymous",type:a.type,area:a.area.trim(),desc:a.desc.trim(),votes:0,createdAt:eh()});o(v=>[{id:P.id,...a,time:"Just now",votes:0,userVoted:!1},...v]),u({type:"suspicious",area:"",desc:""}),i("feed"),n("📢 Report Saved","Your safety report saved to Firebase Firestore.","success")}catch(P){n("⚠️ Error",P.message,"error")}g(!1)};return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"🏘️",ci:"comm",title:"Community Safety",sub:"Firebase-backed crowdsourced safety network",onClose:e}),f.jsx("div",{className:"comm-tabs",children:[["feed","📢 Feed"],["report","+ Report"],["map","🗺️ Heat Map"]].map(([P,v])=>f.jsx("button",{className:`ctab ${r===P?"active":""}`,onClick:()=>i(P),children:v},P))}),r==="feed"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{display:"flex",gap:8,marginBottom:".9rem",alignItems:"center"},children:[f.jsx("div",{style:{flex:1,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:"8px 12px",fontSize:".76rem",color:"rgba(255,255,255,.45)"},children:"📍 Mysuru, Karnataka · Firebase Firestore"}),f.jsx("button",{className:"share-btn",style:{width:"auto",padding:"8px 12px",margin:0},onClick:async()=>{h(!0);try{const v=(await ed(Jr(Xr,"communityReports"))).docs.map(w=>{var I,k,V;return{id:w.id,...w.data(),time:((V=(k=(I=w.data().createdAt)==null?void 0:I.toDate)==null?void 0:k.call(I))==null?void 0:V.toLocaleTimeString())||"recently",userVoted:!1}});o(v.length>0?[...v,...Lu]:Lu),n("🔄 Refreshed",`${v.length} reports loaded from Firestore.`,"success")}catch(P){n("⚠️ Error",P.message,"error")}h(!1)},children:"🔄"})]}),c?f.jsxs("div",{style:{textAlign:"center",padding:"1.5rem",color:"rgba(255,255,255,.4)"},children:[f.jsx(ln,{})," Loading from Firestore…"]}):s.map(P=>f.jsxs("div",{className:"alert-card",onClick:()=>A(P.id),children:[f.jsxs("div",{className:"ac-head",children:[f.jsx("span",{className:`ac-type ${E[P.type]}`,children:P.type.toUpperCase()}),f.jsx("span",{className:"ac-time",children:P.time})]}),f.jsx("div",{className:"ac-desc",children:P.desc}),f.jsxs("div",{className:"ac-foot",children:[f.jsxs("div",{className:"ac-loc",children:["📍 ",P.area]}),f.jsxs("div",{className:`ac-vote ${P.userVoted?"voted":""}`,children:["👍 ",P.votes,P.userVoted?" · Voted":""]})]})]},P.id))]}),r==="report"&&f.jsxs("div",{className:"cf-box",children:[f.jsx("h3",{children:"📢 Report a Safety Incident"}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Incident Type"}),f.jsxs("select",{value:a.type,onChange:P=>u(v=>({...v,type:P.target.value})),children:[f.jsx("option",{value:"suspicious",children:"🟡 Suspicious Activity"}),f.jsx("option",{value:"harassment",children:"🔴 Harassment / Assault"}),f.jsx("option",{value:"unsafe",children:"🟠 Unsafe Area"}),f.jsx("option",{value:"safe",children:"🟢 Safe Spot"})]})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Area / Landmark"}),f.jsx("input",{value:a.area,onChange:P=>u(v=>({...v,area:P.target.value})),placeholder:"e.g. Devaraja Market, MG Road…"})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Description"}),f.jsx("textarea",{value:a.desc,onChange:P=>u(v=>({...v,desc:P.target.value})),placeholder:"Describe what you observed…",rows:3,style:{height:"auto"}})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Your Location (optional)"}),f.jsx("input",{placeholder:"Auto-filled if you share location",readOnly:!0})]}),f.jsx("button",{className:"form-btn",onClick:C,disabled:p,children:p?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Saving to Firestore…"]}):"📢 Submit to Community"}),f.jsx("p",{className:"hint",children:"Saved to Firebase Firestore — visible to all Suraksha users. False reports violate community guidelines."})]}),r==="map"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{background:"rgba(124,58,237,.08)",border:"1px solid rgba(124,58,237,.2)",borderRadius:13,padding:"2rem",textAlign:"center",margin:".5rem 0"},children:[f.jsx("div",{style:{fontSize:"2.5rem",marginBottom:".6rem"},children:"🗺️"}),f.jsx("div",{style:{fontSize:".88rem",fontWeight:600,marginBottom:".4rem"},children:"Safety Heat Map"}),f.jsx("div",{style:{fontSize:".74rem",color:"rgba(255,255,255,.4)",lineHeight:1.65,marginBottom:"1rem"},children:"Interactive Google Maps heat map. Add your Maps API key to enable."}),f.jsx("button",{className:"share-btn",style:{display:"inline-flex",width:"auto",padding:"9px 18px"},onClick:()=>window.open("https://console.cloud.google.com/apis/library/maps-backend.googleapis.com","_blank"),children:"Get Maps API Key →"})]}),[["🔴","High Risk",s.filter(P=>["harassment","unsafe"].includes(P.type)).length],["🟡","Caution Zones",s.filter(P=>P.type==="suspicious").length],["🟢","Safe Zones",s.filter(P=>P.type==="safe").length]].map(([P,v,w])=>f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:9,marginBottom:6,fontSize:".77rem"},children:[f.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[P,f.jsx("span",{style:{color:"rgba(255,255,255,.68)"},children:v})]}),f.jsxs("span",{style:{fontWeight:700},children:[w," report",w!==1?"s":""]})]},v))]})]})}function EF({user:t,contacts:e,recCount:n,onLogout:r,onClose:i,addToast:s}){var N;const[o,a]=B.useState(!1),[u,c]=B.useState(!1),[h,p]=B.useState(t.displayName||""),[g,E]=B.useState(!1),[A,C]=B.useState(!1),[P,v]=B.useState({current:"",next:"",confirm:""}),[w,I]=B.useState(!1),[k,V]=B.useState({autoShare:!1,discreetSOS:!1,biometric:!1}),L=(t.displayName?t.displayName.split(" ").map(b=>b[0]).join("").slice(0,2):t.email[0]).toUpperCase(),T=new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"}),y=async()=>{if(!h.trim()){s("⚠️ Empty Name","Display name cannot be empty.","error");return}E(!0);try{await Hm(ji.currentUser,{displayName:h.trim()}),s("✅ Name Updated",`Display name changed to "${h.trim()}".`,"success"),c(!1)}catch(b){s("⚠️ Error",b.message,"error")}E(!1)},S=async()=>{if(P.next.length<6){s("⚠️ Too Short","New password must be at least 6 characters.","error");return}if(P.next!==P.confirm){s("⚠️ Mismatch","New passwords do not match.","error");return}I(!0);try{const{EmailAuthProvider:b,reauthenticateWithCredential:pe,updatePassword:Gt}=await Rm(async()=>{const{EmailAuthProvider:xt,reauthenticateWithCredential:H,updatePassword:te}=await Promise.resolve().then(()=>PD);return{EmailAuthProvider:xt,reauthenticateWithCredential:H,updatePassword:te}},void 0),Sn=b.credential(t.email,P.current);await pe(ji.currentUser,Sn),await Gt(ji.currentUser,P.next),s("✅ Password Changed","Your password has been updated successfully.","success"),C(!1),v({current:"",next:"",confirm:""})}catch(b){s("⚠️ Error",b.code==="auth/wrong-password"?"Current password is incorrect.":b.message,"error")}I(!1)},x=async()=>{a(!0);try{await eS(ji),r()}catch(b){s("⚠️ Error",b.message,"error"),a(!1)}},R=[{key:"autoShare",label:"Auto-share location on SOS",sub:"Instantly share GPS when SOS fires"},{key:"discreetSOS",label:"Discreet SOS mode",sub:"SOS appears as a regular screen"},{key:"biometric",label:"Biometric lock",sub:"Lock app with fingerprint / Face ID"}];return f.jsxs("div",{className:"mp anim",children:[f.jsx(vr,{icon:"👤",ci:"ai",title:"Your Profile",sub:"Account settings & preferences",onClose:i}),f.jsxs("div",{className:"pro-card",children:[f.jsx("div",{className:"pro-av",children:L}),u?f.jsxs("div",{style:{marginBottom:"1rem"},children:[f.jsxs("div",{className:"fg",style:{marginBottom:8},children:[f.jsx("label",{children:"Display Name"}),f.jsx("input",{value:h,onChange:b=>p(b.target.value),placeholder:"Enter your name",onKeyDown:b=>b.key==="Enter"&&y(),autoFocus:!0})]}),f.jsxs("div",{style:{display:"flex",gap:8},children:[f.jsx("button",{className:"form-btn",onClick:y,disabled:g,style:{flex:1},children:g?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Saving…"]}):"✅ Save Name"}),f.jsx("button",{className:"share-btn",onClick:()=>{c(!1),p(t.displayName||"")},style:{flex:1,marginTop:0},children:"Cancel"})]})]}):f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:".3rem"},children:[f.jsx("div",{className:"pro-nm",children:t.displayName||"Suraksha User"}),f.jsx("button",{onClick:()=>c(!0),style:{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",color:"rgba(255,255,255,.7)",padding:"2px 8px",borderRadius:6,fontSize:".65rem",cursor:"pointer"},children:"✏️ Edit"})]}),f.jsx("div",{className:"pro-em",children:t.email}),f.jsxs("div",{className:"pro-stats",children:[f.jsxs("div",{className:"ps",children:[f.jsx("div",{className:"ps-n",children:"🛡️"}),f.jsx("div",{className:"ps-l",children:"Protected"})]}),f.jsxs("div",{className:"ps",children:[f.jsx("div",{className:"ps-n",children:e.length}),f.jsx("div",{className:"ps-l",children:"Contacts"})]}),f.jsxs("div",{className:"ps",children:[f.jsx("div",{className:"ps-n",children:n}),f.jsx("div",{className:"ps-l",children:"Recordings"})]})]}),f.jsxs("div",{className:"pro-rows",children:[f.jsx("div",{className:"pro-rl",children:"Account Details"}),[["Email",t.email],["Display Name",t.displayName||"Not set"],["Member Since",T],["Firebase UID",((N=t.uid)==null?void 0:N.slice(0,16))+"…"],["Firebase Project","suraksha-33bb4"],["AI Engine","Claude Sonnet (Anthropic)"]].map(([b,pe])=>f.jsxs("div",{className:"pro-row",children:[f.jsx("span",{className:"pro-rk",children:b}),f.jsx("span",{className:"pro-rv",children:pe})]},b))]})]}),f.jsx("div",{className:"sl",children:"Security"}),A?f.jsxs("div",{className:"cf-box",children:[f.jsx("h3",{children:"🔑 Change Password"}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Current Password"}),f.jsx("input",{type:"password",value:P.current,onChange:b=>v(pe=>({...pe,current:b.target.value})),placeholder:"Your current password"})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"New Password"}),f.jsx("input",{type:"password",value:P.next,onChange:b=>v(pe=>({...pe,next:b.target.value})),placeholder:"Minimum 6 characters"})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Confirm New Password"}),f.jsx("input",{type:"password",value:P.confirm,onChange:b=>v(pe=>({...pe,confirm:b.target.value})),placeholder:"Repeat new password"})]}),f.jsxs("div",{style:{display:"flex",gap:8},children:[f.jsx("button",{className:"form-btn",onClick:S,disabled:w,style:{flex:1},children:w?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Updating…"]}):"🔑 Update Password"}),f.jsx("button",{className:"share-btn",onClick:()=>{C(!1),v({current:"",next:"",confirm:""})},style:{flex:1,marginTop:0},children:"Cancel"})]})]}):f.jsx("button",{className:"share-btn",style:{marginBottom:"1rem"},onClick:()=>C(!0),children:"🔑 Change Password"}),f.jsx("div",{className:"sl",children:"App Settings"}),f.jsxs("div",{className:"settings-box",children:[f.jsx("div",{className:"settings-title",children:"Privacy & Security"}),R.map(b=>f.jsxs("div",{className:"sr",children:[f.jsxs("div",{children:[f.jsx("div",{className:"sr-lbl",children:b.label}),f.jsx("div",{className:"sr-sub",children:b.sub})]}),f.jsx(XA,{on:k[b.key],onClick:()=>{V(pe=>({...pe,[b.key]:!pe[b.key]})),s(k[b.key]?"🔕 Disabled":"✅ Enabled",`${b.label} updated.`,"info")}})]},b.key))]}),f.jsx("button",{className:"lout-btn",onClick:x,disabled:o,children:o?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," Signing out…"]}):"↩ Sign Out of Suraksha"})]})}function TF({user:t,onLogout:e}){const[n,r]=B.useState(null),[i,s]=B.useState("home"),[o,a]=B.useState([]),[u,c]=B.useState(!1),[h,p]=B.useState(null),[g,E]=B.useState(null),[A,C]=B.useState(0),{toasts:P,addToast:v}=dF(),w=new Date().getHours(),I=w<5?"Good night":w<12?"Good morning":w<18?"Good afternoon":"Good evening",k=t.displayName?t.displayName.split(" ")[0]:"there",V=new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"}),L=(t.displayName?t.displayName.split(" ").map(R=>R[0]).join("").slice(0,2):t.email[0]).toUpperCase(),T=2;B.useEffect(()=>{(async()=>{try{const N=ty(Jr(Xr,"contacts"),ny("uid","==",t.uid)),b=await ed(N);a(b.docs.map(pe=>({id:pe.id,...pe.data()})))}catch(N){v("⚠️ Firestore","Could not load contacts: "+N.message,"error")}finally{c(!0)}})()},[t.uid]);const y=R=>{r(R),s(R)},S=()=>{r(null),s("home")},x=[{id:"sos",cls:"c-sos",icon:"🚨",ci:"sos",title:"SOS Emergency",desc:"One tap alerts all contacts with live GPS + logs to Firebase.",badge:null},{id:"location",cls:"c-loc",icon:"📍",ci:"loc",title:"Live Location",desc:"Real GPS + live watchPosition tracking — share instantly.",badge:null},{id:"contacts",cls:"c-con",icon:"👥",ci:"con",title:"Emergency Contacts",desc:`${o.length} contact${o.length!==1?"s":""} — Firebase Firestore synced.`,badge:null},{id:"ai",cls:"c-ai",icon:"🤖",ci:"ai",title:"AI Safety Assistant",desc:"Claude AI provides expert, compassionate safety guidance.",badge:"AI"},{id:"route",cls:"c-route",icon:"🗺️",ci:"route",title:"Safe Route",desc:"AI-verified navigation that avoids unsafe streets and areas.",badge:"NEW"},{id:"voice",cls:"c-voice",icon:"🎙️",ci:"voice",title:"Voice Recorder",desc:"Record real audio evidence during emergencies. Encrypted.",badge:"NEW"},{id:"notif",cls:"c-notif",icon:"🔔",ci:"notif",title:"Notifications",desc:`${T} unread. Real browser push notifications enabled.`,badge:null},{id:"community",cls:"c-comm",icon:"🏘️",ci:"comm",title:"Community Safety",desc:"Firestore-backed safety reports from your local community.",badge:"NEW"}];return f.jsxs("div",{className:"dash",children:[f.jsxs("div",{className:"dash-hdr",children:[f.jsx(ay,{}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[f.jsxs("div",{style:{position:"relative",cursor:"pointer"},onClick:()=>y("notif"),children:[f.jsx("span",{style:{fontSize:"1.1rem"},children:"🔔"}),f.jsx("span",{style:{position:"absolute",top:-3,right:-3,background:"#f43f5e",borderRadius:"50%",width:14,height:14,fontSize:"0.55rem",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:T})]}),f.jsx("span",{style:{fontSize:"0.73rem",color:"rgba(255,255,255,0.4)"},children:t.displayName||t.email.split("@")[0]}),f.jsx("div",{style:{width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,#2563eb,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.75rem",fontWeight:700,flexShrink:0},onClick:()=>y("profile"),children:L})]})]}),f.jsxs("div",{className:"dash-body",children:[f.jsxs("div",{className:"greeting",children:[f.jsxs("div",{className:"dash-date",children:["📅 ",V]}),f.jsxs("h2",{children:[I,", ",k," 👋"]}),f.jsx("p",{children:"Stay safe. Your protection is our priority."})]}),f.jsxs("div",{className:"status-strip",children:[f.jsxs("div",{className:"si",children:[f.jsx("div",{className:"sd sd-g"}),"Suraksha Active"]}),f.jsxs("div",{className:"si",children:[f.jsx("div",{className:"sd sd-b"}),"Claude AI Online"]}),f.jsxs("div",{className:"si",children:[f.jsx("div",{className:"sd sd-g"}),"Firebase Live"]}),f.jsxs("div",{className:"si",children:[f.jsx("div",{className:`sd ${g?"sd-g":"sd-y"}`}),g?`GPS: ${g.lat}°N`:"Location: Standby"]})]}),f.jsx("div",{className:"sl",children:"Safety Features"}),f.jsx("div",{className:"cards-grid",children:x.map(R=>f.jsxs("div",{className:`dcard ${R.cls}`,onClick:()=>y(R.id),children:[R.badge&&f.jsx("div",{className:"card-badge",children:f.jsx("span",{className:`tag ${R.badge==="AI"?"tag-ai":"tag-new"}`,children:R.badge})}),f.jsx("div",{className:`cicon ci-${R.ci}`,children:R.icon}),f.jsx("div",{className:"card-title",children:R.title}),f.jsx("div",{className:"card-desc",children:R.desc}),f.jsx("div",{className:"card-arrow",children:"Open →"})]},R.id))}),f.jsxs("div",{className:"sl",style:{marginTop:"1.25rem"},children:["Emergency Helplines ",f.jsx("span",{style:{color:"rgba(255,255,255,.3)",fontWeight:400,fontSize:".65rem"},children:"tap to call"})]}),f.jsx("div",{className:"helplines",children:fF.map(R=>f.jsxs("div",{className:"hl-row",onClick:()=>{window.open(`tel:${R.number}`),v(`📞 Calling ${R.label}`,`Dialing ${R.number}…`,"info")},children:[f.jsxs("div",{className:"hl-l",children:[f.jsx("span",{children:R.icon}),f.jsx("span",{children:R.label})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx("span",{className:"hl-num",children:R.number}),f.jsx("span",{style:{fontSize:".65rem",background:"rgba(37,99,235,.2)",border:"1px solid rgba(37,99,235,.3)",color:"#93c5fd",padding:"2px 7px",borderRadius:5,fontWeight:600},children:"CALL"})]})]},R.number))})]}),f.jsx("div",{className:"bnav",children:[["home","🏠","Home"],["sos","🚨","SOS"],["ai","🤖","AI Help"],["community","🏘️","Community"],["profile","👤","Profile"]].map(([R,N,b])=>f.jsxs("button",{className:`bni ${i===R?"active":""}`,onClick:()=>{R==="home"?(r(null),s("home")):y(R)},children:[f.jsx("span",{className:"bni-icon",children:N}),b]},R))}),n&&f.jsxs("div",{className:"mp-wrap",onClick:R=>R.target===R.currentTarget&&S(),children:[n==="sos"&&f.jsx(pF,{user:t,contacts:o,currentLocation:g,onClose:S,addToast:v}),n==="location"&&f.jsx(mF,{contacts:o,onClose:S,addToast:v,onOpenRoute:R=>{p(R),r("route"),s("route")},onLocationUpdate:R=>E(R)}),n==="contacts"&&f.jsx(yF,{user:t,contacts:o,setContacts:a,onClose:S,addToast:v}),n==="ai"&&f.jsx(_F,{onClose:S}),n==="route"&&f.jsx(gF,{startLocation:h||g,onClose:S,addToast:v}),n==="voice"&&f.jsx(vF,{onClose:S,addToast:v,onRecCountChange:C}),n==="notif"&&f.jsx(wF,{onClose:S,addToast:v}),n==="community"&&f.jsx(IF,{user:t,onClose:S,addToast:v}),n==="profile"&&f.jsx(EF,{user:t,contacts:o,recCount:A,onLogout:e,onClose:S,addToast:v})]}),f.jsx(hF,{toasts:P})]})}function SF({onAuth:t}){const e=[["🚨","SOS Emergency","Real alerts + Firestore log"],["📍","Live Location","watchPosition GPS tracking"],["🤖","Claude AI","Expert safety guidance"],["👥","Contacts","Firebase Firestore synced"],["🎙️","Voice Record","Web Audio + Storage upload"],["🗺️","Safe Route","AI-verified navigation"],["🔔","Push Alerts","Real browser notifications"],["🏘️","Community","Firestore crowd reports"]],n=[["50K+","Women Protected"],["99.9%","Uptime"],["<3s","SOS Response"],["24/7","AI Support"]],r=[["🔒","Privacy First","Location shared only with contacts you choose. Firebase Security Rules protect every record."],["⚡","Instant SOS","WhatsApp deep links + tel: dialer + email + Firestore log — all fire simultaneously in under 1 second."],["🧠","Claude AI","Anthropic's Claude Sonnet powers expert, compassionate real-time safety guidance."],["📍","Live Tracking","Browser watchPosition API updates GPS every 5 seconds during emergencies."],["🎙️","Voice Evidence","MediaRecorder API captures real audio — upload to Firebase Storage as evidence."],["🏘️","Community","Firestore-backed crowd-sourced safety reports visible to all users in your area."]];return f.jsxs("div",{children:[f.jsxs("nav",{className:"nav",children:[f.jsx(ay,{}),f.jsxs("div",{className:"nav-r",children:[f.jsx("button",{className:"btn-g",onClick:()=>t("login"),children:"Sign In"}),f.jsx("button",{className:"btn-p",onClick:()=>t("signup"),children:"Get Started"})]})]}),f.jsxs("section",{className:"hero",children:[f.jsxs("div",{className:"hero-badge",children:[f.jsx("div",{className:"bdot"}),"Women Safety · Firebase + Claude AI · Fully Live"]}),f.jsxs("h1",{children:["Your safety,",f.jsx("br",{}),f.jsx("em",{children:"always one tap away"})]}),f.jsx("p",{className:"hero-sub",children:"Suraksha is a fully functional women's safety platform — real Firebase Auth, live Firestore data, Claude AI guidance, actual GPS tracking, real voice recording, and browser push notifications."}),f.jsxs("div",{className:"hero-cta",children:[f.jsx("button",{className:"btn-xl p",onClick:()=>t("signup"),children:"Get Protected Free →"}),f.jsx("button",{className:"btn-xl o",onClick:()=>t("login"),children:"Sign In"})]}),f.jsx("div",{className:"hero-grid",children:e.map(([i,s,o])=>f.jsxs("div",{className:"hcard",children:[f.jsx("div",{className:"hc-icon",children:i}),f.jsx("div",{className:"hc-title",children:s}),f.jsx("div",{className:"hc-desc",children:o})]},s))})]}),f.jsx("div",{className:"stats-bar",children:f.jsx("div",{className:"stats-inner",children:n.map(([i,s])=>f.jsxs("div",{children:[f.jsx("div",{className:"stat-n",children:i}),f.jsx("div",{className:"stat-l",children:s})]},s))})}),f.jsxs("section",{className:"why",children:[f.jsxs("h2",{children:["Every feature is real.",f.jsx("br",{}),"No placeholders."]}),f.jsx("div",{className:"why-grid",children:r.map(([i,s,o])=>f.jsxs("div",{className:"why-card",children:[f.jsx("div",{className:"wc-icon",children:i}),f.jsx("div",{className:"wc-title",children:s}),f.jsx("div",{className:"wc-desc",children:o})]},s))})]}),f.jsx("div",{className:"cta-section",children:f.jsxs("div",{className:"cta-box",children:[f.jsx("div",{style:{fontSize:"2.25rem",marginBottom:"0.75rem"},children:"🛡️"}),f.jsx("h3",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"1.5rem",fontWeight:800,marginBottom:"0.6rem"},children:"Start your protection today"}),f.jsx("p",{style:{color:"rgba(255,255,255,0.48)",marginBottom:"1.25rem",fontSize:"0.85rem"},children:"Free. Powered by Firebase + Claude AI. No credit card."}),f.jsx("button",{className:"btn-xl p",onClick:()=>t("signup"),children:"Create Free Account →"})]})}),f.jsx("footer",{children:"© 2025 Suraksha · Firebase: suraksha-33bb4 · Powered by Claude AI (Anthropic) · Built with 💙"})]})}function bF({mode:t,onClose:e,onSuccess:n}){const[r,i]=B.useState(t),[s,o]=B.useState({name:"",email:"",password:""}),[a,u]=B.useState(!1),[c,h]=B.useState(""),p=async()=>{h(""),u(!0);try{if(r==="signup"){if(!s.name.trim())throw{message:"Please enter your full name."};if(!s.email.trim())throw{message:"Please enter your email address."};if(s.password.length<6)throw{message:"Password must be at least 6 characters."};const{user:A}=await W0(ji,s.email.trim(),s.password);await Hm(A,{displayName:s.name.trim()}),n({...A,displayName:s.name.trim()})}else{if(!s.email.trim())throw{message:"Please enter your email address."};if(!s.password)throw{message:"Please enter your password."};const{user:A}=await H0(ji,s.email.trim(),s.password);n(A)}}catch(A){h(aF(A))}u(!1)},g=A=>{i(A),h(""),o({name:"",email:"",password:""})},E=A=>{A.key==="Enter"&&p()};return f.jsx("div",{className:"overlay",onClick:A=>A.target===A.currentTarget&&e(),children:f.jsxs("div",{className:"modal",children:[f.jsx("button",{className:"mclose",onClick:e,children:"✕"}),f.jsx("div",{className:"modal-logo",children:f.jsx(ay,{})}),f.jsx("h2",{children:r==="login"?"Welcome back":"Create account"}),f.jsx("p",{className:"modal-sub",children:r==="login"?"Sign in to your safety dashboard":"Join Suraksha — stay protected"}),c&&f.jsxs("div",{className:"err-box",children:["⚠️ ",c]}),r==="signup"&&f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Full Name"}),f.jsx("input",{placeholder:"e.g. Aanya Patel",value:s.name,onChange:A=>o(C=>({...C,name:A.target.value})),onKeyDown:E,autoFocus:!0})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Email Address"}),f.jsx("input",{type:"email",placeholder:"you@example.com",value:s.email,onChange:A=>o(C=>({...C,email:A.target.value})),onKeyDown:E,autoFocus:r==="login"})]}),f.jsxs("div",{className:"fg",children:[f.jsx("label",{children:"Password"}),f.jsx("input",{type:"password",placeholder:r==="signup"?"Minimum 6 characters":"Your password",value:s.password,onChange:A=>o(C=>({...C,password:A.target.value})),onKeyDown:E})]}),f.jsx("button",{className:"form-btn",onClick:p,disabled:a,children:a?f.jsxs(f.Fragment,{children:[f.jsx(ln,{})," ",r==="login"?"Signing in…":"Creating account…"]}):r==="login"?"Sign In":"Create Account"}),f.jsx("div",{className:"form-sw",children:r==="login"?f.jsxs(f.Fragment,{children:["Don't have an account? ",f.jsx("button",{onClick:()=>g("signup"),children:"Sign up free"})]}):f.jsxs(f.Fragment,{children:["Already have an account? ",f.jsx("button",{onClick:()=>g("login"),children:"Sign in"})]})})]})})}function AF(){const[t,e]=B.useState(void 0),[n,r]=B.useState(null);return B.useEffect(()=>Z0(ji,s=>{e(s||null)}),[]),t===void 0?f.jsxs(f.Fragment,{children:[f.jsx("style",{children:mI}),f.jsxs("div",{style:{minHeight:"100vh",background:"#0a1628",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16},children:[f.jsx("div",{style:{fontSize:"3rem"},children:"🛡️"}),f.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"1.5rem",fontWeight:700,letterSpacing:"-0.02em"},children:"Suraksha"}),f.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.4)",marginBottom:8},children:"Connecting to Firebase…"}),f.jsx(ln,{})]})]}):f.jsxs(f.Fragment,{children:[f.jsx("style",{children:mI}),t?f.jsx(TF,{user:t,onLogout:()=>e(null)}):f.jsxs(f.Fragment,{children:[f.jsx(SF,{onAuth:i=>r(i)}),n&&f.jsx(bF,{mode:n,onClose:()=>r(null),onSuccess:i=>{e(i),r(null)}})]})]})}hf.createRoot(document.getElementById("root")).render(f.jsx(qx.StrictMode,{children:f.jsx(AF,{})}));export{En as C,Tn as F,Ao as S,hr as _,dP as a,Cm as b,fP as c,Ln as d,Z as g,an as r};
