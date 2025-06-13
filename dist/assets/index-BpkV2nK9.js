(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Hd={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function Iw(){if(tv)return vl;tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return vl.Fragment=t,vl.jsx=n,vl.jsxs=n,vl}var ev;function Cw(){return ev||(ev=1,Hd.exports=Iw()),Hd.exports}var ht=Cw(),Fd={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function Dw(){if(nv)return wt;nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function R(D){return D===null||typeof D!="object"?null:(D=w&&D[w]||D["@@iterator"],typeof D=="function"?D:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,et={};function Z(D,X,it){this.props=D,this.context=X,this.refs=et,this.updater=it||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},Z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Tt(){}Tt.prototype=Z.prototype;function dt(D,X,it){this.props=D,this.context=X,this.refs=et,this.updater=it||q}var lt=dt.prototype=new Tt;lt.constructor=dt,$(lt,Z.prototype),lt.isPureReactComponent=!0;var Dt=Array.isArray,yt={H:null,A:null,T:null,S:null,V:null},It=Object.prototype.hasOwnProperty;function V(D,X,it,W,J,mt){return it=mt.ref,{$$typeof:r,type:D,key:X,ref:it!==void 0?it:null,props:mt}}function S(D,X){return V(D.type,X,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(it){return X[it]})}var M=/\/+/g;function P(D,X){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):X.toString(36)}function C(){}function Zt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ee(D,X,it,W,J){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var gt=!1;if(D===null)gt=!0;else switch(mt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(D.$$typeof){case r:case t:gt=!0;break;case E:return gt=D._init,ee(gt(D._payload),X,it,W,J)}}if(gt)return J=J(D),gt=W===""?"."+P(D,0):W,Dt(J)?(it="",gt!=null&&(it=gt.replace(M,"$&/")+"/"),ee(J,X,it,"",function(un){return un})):J!=null&&(I(J)&&(J=S(J,it+(J.key==null||D&&D.key===J.key?"":(""+J.key).replace(M,"$&/")+"/")+gt)),X.push(J)),1;gt=0;var ne=W===""?".":W+":";if(Dt(D))for(var Bt=0;Bt<D.length;Bt++)W=D[Bt],mt=ne+P(W,Bt),gt+=ee(W,X,it,mt,J);else if(Bt=R(D),typeof Bt=="function")for(D=Bt.call(D),Bt=0;!(W=D.next()).done;)W=W.value,mt=ne+P(W,Bt++),gt+=ee(W,X,it,mt,J);else if(mt==="object"){if(typeof D.then=="function")return ee(Zt(D),X,it,W,J);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return gt}function H(D,X,it){if(D==null)return D;var W=[],J=0;return ee(D,W,"","",function(mt){return X.call(it,mt,J++)}),W}function nt(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(it){(D._status===0||D._status===-1)&&(D._status=1,D._result=it)},function(it){(D._status===0||D._status===-1)&&(D._status=2,D._result=it)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function xt(){}return wt.Children={map:H,forEach:function(D,X,it){H(D,function(){X.apply(this,arguments)},it)},count:function(D){var X=0;return H(D,function(){X++}),X},toArray:function(D){return H(D,function(X){return X})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},wt.Component=Z,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=dt,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yt,wt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return yt.H.useMemoCache(D)}},wt.cache=function(D){return function(){return D.apply(null,arguments)}},wt.cloneElement=function(D,X,it){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=$({},D.props),J=D.key,mt=void 0;if(X!=null)for(gt in X.ref!==void 0&&(mt=void 0),X.key!==void 0&&(J=""+X.key),X)!It.call(X,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&X.ref===void 0||(W[gt]=X[gt]);var gt=arguments.length-2;if(gt===1)W.children=it;else if(1<gt){for(var ne=Array(gt),Bt=0;Bt<gt;Bt++)ne[Bt]=arguments[Bt+2];W.children=ne}return V(D.type,J,void 0,void 0,mt,W)},wt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},wt.createElement=function(D,X,it){var W,J={},mt=null;if(X!=null)for(W in X.key!==void 0&&(mt=""+X.key),X)It.call(X,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(J[W]=X[W]);var gt=arguments.length-2;if(gt===1)J.children=it;else if(1<gt){for(var ne=Array(gt),Bt=0;Bt<gt;Bt++)ne[Bt]=arguments[Bt+2];J.children=ne}if(D&&D.defaultProps)for(W in gt=D.defaultProps,gt)J[W]===void 0&&(J[W]=gt[W]);return V(D,mt,void 0,void 0,null,J)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(D){return{$$typeof:m,render:D}},wt.isValidElement=I,wt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:nt}},wt.memo=function(D,X){return{$$typeof:y,type:D,compare:X===void 0?null:X}},wt.startTransition=function(D){var X=yt.T,it={};yt.T=it;try{var W=D(),J=yt.S;J!==null&&J(it,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(xt,ot)}catch(mt){ot(mt)}finally{yt.T=X}},wt.unstable_useCacheRefresh=function(){return yt.H.useCacheRefresh()},wt.use=function(D){return yt.H.use(D)},wt.useActionState=function(D,X,it){return yt.H.useActionState(D,X,it)},wt.useCallback=function(D,X){return yt.H.useCallback(D,X)},wt.useContext=function(D){return yt.H.useContext(D)},wt.useDebugValue=function(){},wt.useDeferredValue=function(D,X){return yt.H.useDeferredValue(D,X)},wt.useEffect=function(D,X,it){var W=yt.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,X)},wt.useId=function(){return yt.H.useId()},wt.useImperativeHandle=function(D,X,it){return yt.H.useImperativeHandle(D,X,it)},wt.useInsertionEffect=function(D,X){return yt.H.useInsertionEffect(D,X)},wt.useLayoutEffect=function(D,X){return yt.H.useLayoutEffect(D,X)},wt.useMemo=function(D,X){return yt.H.useMemo(D,X)},wt.useOptimistic=function(D,X){return yt.H.useOptimistic(D,X)},wt.useReducer=function(D,X,it){return yt.H.useReducer(D,X,it)},wt.useRef=function(D){return yt.H.useRef(D)},wt.useState=function(D){return yt.H.useState(D)},wt.useSyncExternalStore=function(D,X,it){return yt.H.useSyncExternalStore(D,X,it)},wt.useTransition=function(){return yt.H.useTransition()},wt.version="19.1.0",wt}var iv;function xm(){return iv||(iv=1,Fd.exports=Dw()),Fd.exports}var ve=xm(),Gd={exports:{}},El={},Qd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function Ow(){return rv||(rv=1,function(r){function t(H,nt){var ot=H.length;H.push(nt);t:for(;0<ot;){var xt=ot-1>>>1,D=H[xt];if(0<o(D,nt))H[xt]=nt,H[ot]=D,ot=xt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var nt=H[0],ot=H.pop();if(ot!==nt){H[0]=ot;t:for(var xt=0,D=H.length,X=D>>>1;xt<X;){var it=2*(xt+1)-1,W=H[it],J=it+1,mt=H[J];if(0>o(W,ot))J<D&&0>o(mt,W)?(H[xt]=mt,H[J]=ot,xt=J):(H[xt]=W,H[it]=ot,xt=it);else if(J<D&&0>o(mt,ot))H[xt]=mt,H[J]=ot,xt=J;else break t}}return nt}function o(H,nt){var ot=H.sortIndex-nt.sortIndex;return ot!==0?ot:H.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,w=null,R=3,q=!1,$=!1,et=!1,Z=!1,Tt=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;function Dt(H){for(var nt=n(y);nt!==null;){if(nt.callback===null)s(y);else if(nt.startTime<=H)s(y),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(y)}}function yt(H){if(et=!1,Dt(H),!$)if(n(p)!==null)$=!0,It||(It=!0,P());else{var nt=n(y);nt!==null&&ee(yt,nt.startTime-H)}}var It=!1,V=-1,S=5,I=-1;function N(){return Z?!0:!(r.unstable_now()-I<S)}function M(){if(Z=!1,It){var H=r.unstable_now();I=H;var nt=!0;try{t:{$=!1,et&&(et=!1,dt(V),V=-1),q=!0;var ot=R;try{e:{for(Dt(H),w=n(p);w!==null&&!(w.expirationTime>H&&N());){var xt=w.callback;if(typeof xt=="function"){w.callback=null,R=w.priorityLevel;var D=xt(w.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){w.callback=D,Dt(H),nt=!0;break e}w===n(p)&&s(p),Dt(H)}else s(p);w=n(p)}if(w!==null)nt=!0;else{var X=n(y);X!==null&&ee(yt,X.startTime-H),nt=!1}}break t}finally{w=null,R=ot,q=!1}nt=void 0}}finally{nt?P():It=!1}}}var P;if(typeof lt=="function")P=function(){lt(M)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Zt=C.port2;C.port1.onmessage=M,P=function(){Zt.postMessage(null)}}else P=function(){Tt(M,0)};function ee(H,nt){V=Tt(function(){H(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(H){switch(R){case 1:case 2:case 3:var nt=3;break;default:nt=R}var ot=R;R=nt;try{return H()}finally{R=ot}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ot=R;R=H;try{return nt()}finally{R=ot}},r.unstable_scheduleCallback=function(H,nt,ot){var xt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?xt+ot:xt):ot=xt,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,H={id:E++,callback:nt,priorityLevel:H,startTime:ot,expirationTime:D,sortIndex:-1},ot>xt?(H.sortIndex=ot,t(y,H),n(p)===null&&H===n(y)&&(et?(dt(V),V=-1):et=!0,ee(yt,ot-xt))):(H.sortIndex=D,t(p,H),$||q||($=!0,It||(It=!0,P()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var nt=R;return function(){var ot=R;R=nt;try{return H.apply(this,arguments)}finally{R=ot}}}}(Kd)),Kd}var sv;function Nw(){return sv||(sv=1,Qd.exports=Ow()),Qd.exports}var Yd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function Vw(){if(av)return Qe;av=1;var r=xm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qe.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},Qe.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Qe.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Qe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Qe.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:R,fetchPriority:q}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:R,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Qe.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Qe.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Qe.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Qe.requestFormReset=function(p){s.d.r(p)},Qe.unstable_batchedUpdates=function(p,y){return p(y)},Qe.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.1.0",Qe}var ov;function Mw(){if(ov)return Yd.exports;ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Yd.exports=Vw(),Yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function Pw(){if(lv)return El;lv=1;var r=Nw(),t=xm(),n=Mw();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Tt=Symbol.for("react.provider"),dt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),Dt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function Zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case et:return"StrictMode";case yt:return"Suspense";case It:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case lt:return(e.displayName||"Context")+".Provider";case dt:return(e._context.displayName||"Context")+".Consumer";case Dt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:Zt(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Zt(e(i))}catch{}}return null}var ee=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},xt=[],D=-1;function X(e){return{current:e}}function it(e){0>D||(e.current=xt[D],xt[D]=null,D--)}function W(e,i){D++,xt[D]=e.current,e.current=i}var J=X(null),mt=X(null),gt=X(null),ne=X(null);function Bt(e,i){switch(W(gt,i),W(mt,e),W(J,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?C_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=C_(i),e=D_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(J),W(J,e)}function un(){it(J),it(mt),it(gt)}function Ji(e){e.memoizedState!==null&&W(ne,e);var i=J.current,a=D_(i,e.type);i!==a&&(W(mt,e),W(J,a))}function vi(e){mt.current===e&&(it(J),it(mt)),ne.current===e&&(it(ne),ml._currentValue=ot)}var Wr=Object.prototype.hasOwnProperty,Jr=r.unstable_scheduleCallback,ts=r.unstable_cancelCallback,co=r.unstable_shouldYield,ou=r.unstable_requestPaint,Sn=r.unstable_now,jh=r.unstable_getCurrentPriorityLevel,ho=r.unstable_ImmediatePriority,Zs=r.unstable_UserBlockingPriority,es=r.unstable_NormalPriority,Hh=r.unstable_LowPriority,Ws=r.unstable_IdlePriority,fo=r.log,lu=r.unstable_setDisableYieldValue,oe=null,Ft=null;function cn(e){if(typeof fo=="function"&&lu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(oe,e)}catch{}}var Fe=Math.clz32?Math.clz32:ns,uu=Math.log,Fh=Math.LN2;function ns(e){return e>>>=0,e===0?32:31-(uu(e)/Fh|0)|0}var is=256,rs=4194304;function Bn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Js(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Bn(l):(v&=T,v!==0?h=Bn(v):a||(a=T&~e,a!==0&&(h=Bn(a))))):(T=l&~d,T!==0?h=Bn(T):v!==0?h=Bn(v):a||(a=l&~e,a!==0&&(h=Bn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ss(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function mo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var e=is;return is<<=1,(is&4194048)===0&&(is=256),e}function po(){var e=rs;return rs<<=1,(rs&62914560)===0&&(rs=4194304),e}function Ei(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Fe(a),K=1<<F;T[F]=0,b[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}l!==0&&Wn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Wn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Fe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function _o(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Fe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ta(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function er(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:Y_(e.type))}function cu(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ie=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ie,ge="__reactProps$"+ie,wn="__reactContainer$"+ie,vo="__reactEvents$"+ie,Gh="__reactListeners$"+ie,nr="__reactHandles$"+ie,hu="__reactResources$"+ie,as="__reactMarker$"+ie;function ir(e){delete e[Ae],delete e[ge],delete e[vo],delete e[Gh],delete e[nr]}function Ai(e){var i=e[Ae];if(i)return i;for(var a=e.parentNode;a;){if(i=a[wn]||a[Ae]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[Ae])return a;e=M_(e)}return i}e=a,a=e.parentNode}return null}function Jn(e){if(e=e[Ae]||e[wn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ti(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function We(e){var i=e[hu];return i||(i=e[hu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[as]=!0}var Eo=new Set,ea={};function qn(e,i){Si(e,i),Si(e+"Capture",i)}function Si(e,i){for(ea[e]=i,e=0;e<i.length;e++)Eo.add(i[e])}var fu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),du={},os={};function mu(e){return Wr.call(os,e)?!0:Wr.call(du,e)?!1:fu.test(e)?os[e]=!0:(du[e]=!0,!1)}function rr(e,i,a){if(mu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ei(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ke(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var ls,gu;function wi(e){if(ls===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ls=i&&i[1]||"",gu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ls+e+gu}var na=!1;function ia(e,i){if(!e||na)return"";na=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var b=v.split(`
`),L=T.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===L.length)for(l=b.length-1,h=L.length-1;1<=l&&0<=h&&b[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==L[h]){var F=`
`+b[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{na=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wi(a):""}function To(e){switch(e.tag){case 26:case 27:case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 15:return ia(e.type,!1);case 11:return ia(e.type.render,!1);case 1:return ia(e.type,!0);case 31:return wi("Activity");default:return""}}function ra(e){try{var i="";do i+=To(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ao(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qh(e){var i=Ao(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function sa(e){e._valueTracker||(e._valueTracker=Qh(e))}function So(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Ao(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kh=/[\n"\\]/g;function pe(e){return e.replace(Kh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?sr(e,v,Je(i)):a!=null?sr(e,v,Je(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Je(T):e.removeAttribute("name")}function cs(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Je(a):"",i=i!=null?""+Je(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function sr(e,i,a){i==="number"&&us(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bi(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Je(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Je(a):""}function hs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ee(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Je(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function bn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var fs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||fs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function wo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&pu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&pu(e,d,i[d])}function bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function aa(e){return Xh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function Rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Ci=null;function Ro(e){var i=Jn(e);if(i&&(e=i.stateNode)){var a=e[ge]||null;t:switch(e=i.stateNode,i.type){case"input":if(hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[ge]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&So(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&bi(e,!!a.multiple,i,!1)}}}var ni=!1;function yu(e,i,a){if(ni)return e(i,a);ni=!0;try{var l=e(i);return l}finally{if(ni=!1,(Ii!==null||Ci!==null)&&(cc(),Ii&&(i=Ii,e=Ci,Ci=Ii=null,Ro(i),e)))for(i=0;i<e.length;i++)Ro(e[i])}}function ds(e,i){var a=e.stateNode;if(a===null)return null;var l=a[ge]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),In=!1;if(jn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){In=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{In=!1}var ii=null,ar=null,Di=null;function Io(){if(Di)return Di;var e,i=ar,a=i.length,l,h="value"in ii?ii.value:ii.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(e,1<l?1-l:void 0)}function ri(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Co(){return!1}function De(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?si:Co,this.isPropagationStopped=Co,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),i}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=De(Ht),gs=E({},Ht,{view:0,detail:0}),_u=De(gs),la,ua,ai,ps=E({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(la=e.screenX-ai.screenX,ua=e.screenY-ai.screenY):ua=la=0,ai=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Cn=De(ps),vu=E({},ps,{dataTransfer:0}),$h=De(vu),ys=E({},gs,{relatedTarget:0}),ca=De(ys),Do=E({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),ha=De(Do),Eu=E({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fa=De(Eu),Zh=E({},Ht,{data:0}),Oo=De(Zh),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function No(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Au[e])?!!i[e]:!1}function vs(){return No}var Su=E({},gs,{key:function(e){if(e.key){var i=_s[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),da=De(Su),wu=E({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=De(wu),Oi=E({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),bu=De(Oi),Ru=E({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iu=De(Ru),Cu=E({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ma=De(Cu),tn=E({},Ht,{newState:0,oldState:0}),Du=De(tn),Ou=[9,13,27,32],oi=jn&&"CompositionEvent"in window,c=null;jn&&"documentMode"in document&&(c=document.documentMode);var g=jn&&"TextEvent"in window&&!c,_=jn&&(!oi||c&&8<c&&11>=c),A=" ",k=!1;function j(e,i){switch(e){case"keyup":return Ou.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Se(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function Ut(e,i){if(kt)return e==="compositionend"||!oi&&j(e,i)?(e=Io(),Di=ar=ii=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Ni(e,i,a,l){Ii?Ci?Ci.push(l):Ci=[l]:Ii=l,i=pc(i,"onChange"),0<i.length&&(a=new oa("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Ue=null,li=null;function Mo(e){S_(e,0)}function Nu(e){var i=ti(e);if(So(i))return e}function Fg(e,i){if(e==="change")return i}var Gg=!1;if(jn){var Wh;if(jn){var Jh="oninput"in document;if(!Jh){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),Jh=typeof Qg.oninput=="function"}Wh=Jh}else Wh=!1;Gg=Wh&&(!document.documentMode||9<document.documentMode)}function Kg(){Ue&&(Ue.detachEvent("onpropertychange",Yg),li=Ue=null)}function Yg(e){if(e.propertyName==="value"&&Nu(li)){var i=[];Ni(i,li,e,Rn(e)),yu(Mo,i)}}function iS(e,i,a){e==="focusin"?(Kg(),Ue=i,li=a,Ue.attachEvent("onpropertychange",Yg)):e==="focusout"&&Kg()}function rS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(li)}function sS(e,i){if(e==="click")return Nu(i)}function aS(e,i){if(e==="input"||e==="change")return Nu(i)}function oS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:oS;function Po(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Wr.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function Xg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $g(e,i){var a=Xg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xg(a)}}function Zg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Zg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Wg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=us(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=us(e.document)}return i}function tf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var lS=jn&&"documentMode"in document&&11>=document.documentMode,ga=null,ef=null,xo=null,nf=!1;function Jg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nf||ga==null||ga!==us(l)||(l=ga,"selectionStart"in l&&tf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&Po(xo,l)||(xo=l,l=pc(ef,"onSelect"),0<l.length&&(i=new oa("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ga)))}function Es(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var pa={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionrun:Es("Transition","TransitionRun"),transitionstart:Es("Transition","TransitionStart"),transitioncancel:Es("Transition","TransitionCancel"),transitionend:Es("Transition","TransitionEnd")},rf={},tp={};jn&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Ts(e){if(rf[e])return rf[e];if(!pa[e])return e;var i=pa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in tp)return rf[e]=i[a];return e}var ep=Ts("animationend"),np=Ts("animationiteration"),ip=Ts("animationstart"),uS=Ts("transitionrun"),cS=Ts("transitionstart"),hS=Ts("transitioncancel"),rp=Ts("transitionend"),sp=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function Hn(e,i){sp.set(e,i),qn(i,[e])}var ap=new WeakMap;function Dn(e,i){if(typeof e=="object"&&e!==null){var a=ap.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ra(i)},ap.set(e,i),i)}return{value:e,source:i,stack:ra(i)}}var On=[],ya=0,af=0;function Vu(){for(var e=ya,i=af=ya=0;i<e;){var a=On[i];On[i++]=null;var l=On[i];On[i++]=null;var h=On[i];On[i++]=null;var d=On[i];if(On[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&op(a,h,d)}}function Mu(e,i,a,l){On[ya++]=e,On[ya++]=i,On[ya++]=a,On[ya++]=l,af|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function of(e,i,a,l){return Mu(e,i,a,l),Pu(e)}function _a(e,i){return Mu(e,null,null,i),Pu(e)}function op(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Fe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Pu(e){if(50<al)throw al=0,dd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var va={};function fS(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new fS(e,i,a,l)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function xu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")lf(e)&&(v=1);else if(typeof e=="string")v=mw(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=dn(31,a,i,h),e.elementType=I,e.lanes=d,e;case $:return As(a.children,h,d,i);case et:v=8,h|=24;break;case Z:return e=dn(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case yt:return e=dn(13,a,i,h),e.elementType=yt,e.lanes=d,e;case It:return e=dn(19,a,i,h),e.elementType=It,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tt:case lt:v=10;break t;case dt:v=9;break t;case Dt:v=11;break t;case V:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function As(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function uf(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function cf(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ea=[],Ta=0,ku=null,Uu=0,Nn=[],Vn=0,Ss=null,Mi=1,Pi="";function ws(e,i){Ea[Ta++]=Uu,Ea[Ta++]=ku,ku=e,Uu=i}function up(e,i,a){Nn[Vn++]=Mi,Nn[Vn++]=Pi,Nn[Vn++]=Ss,Ss=e;var l=Mi;e=Pi;var h=32-Fe(l)-1;l&=~(1<<h),a+=1;var d=32-Fe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Mi=1<<32-Fe(i)+h|a<<h|l,Pi=d+e}else Mi=1<<d|a<<h|l,Pi=e}function hf(e){e.return!==null&&(ws(e,1),up(e,1,0))}function ff(e){for(;e===ku;)ku=Ea[--Ta],Ea[Ta]=null,Uu=Ea[--Ta],Ea[Ta]=null;for(;e===Ss;)Ss=Nn[--Vn],Nn[Vn]=null,Pi=Nn[--Vn],Nn[Vn]=null,Mi=Nn[--Vn],Nn[Vn]=null}var en=null,le=null,jt=!1,bs=null,ui=!1,df=Error(s(519));function Rs(e){var i=Error(s(418,""));throw Lo(Dn(i,e)),df}function cp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ae]=e,i[ge]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<ll.length;a++)Nt(ll[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),cs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),sa(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),hs(i,l.value,l.defaultValue,l.children),sa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||I_(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=yc),i=!0):i=!1,i||Rs(e)}function hp(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:en=en.return}}function ko(e){if(e!==en)return!1;if(!jt)return hp(e),jt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Dd(e.type,e.memoizedProps)),a=!a),a&&le&&Rs(e),hp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=Gn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Ar(e.type)?(e=Md,Md=null,le=e):le=i):le=en?Gn(e.stateNode.nextSibling):null;return!0}function Uo(){le=en=null,jt=!1}function fp(){var e=bs;return e!==null&&(an===null?an=e:an.push.apply(an,e),bs=null),e}function Lo(e){bs===null?bs=[e]:bs.push(e)}var mf=X(null),Is=null,xi=null;function or(e,i,a){W(mf,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=mf.current,it(mf)}function gf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function pf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),gf(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),gf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function zo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===ne.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}h=h.return}e!==null&&pf(i,e,a,l),i.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){Is=e,xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return dp(Is,e)}function zu(e,i){return Is===null&&Cs(e),dp(e,i)}function dp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},xi===null){if(e===null)throw Error(s(308));xi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xi=xi.next=i;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},mS=r.unstable_scheduleCallback,gS=r.unstable_NormalPriority,be={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new dS,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&mS(gS,function(){e.controller.abort()})}var qo=null,_f=0,Aa=0,Sa=null;function pS(e,i){if(qo===null){var a=qo=[];_f=0,Aa=Ed(),Sa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return _f++,i.then(mp,mp),i}function mp(){if(--_f===0&&qo!==null){Sa!==null&&(Sa.status="fulfilled");var e=qo;qo=null,Aa=0,Sa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function yS(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var gp=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&pS(e,i),gp!==null&&gp(e,i)};var Ds=X(null);function vf(){var e=Ds.current;return e!==null?e:te.pooledCache}function Bu(e,i){i===null?W(Ds,Ds.current):W(Ds,i.pool)}function pp(){var e=vf();return e===null?null:{parent:be._currentValue,pool:e}}var jo=Error(s(460)),yp=Error(s(474)),qu=Error(s(542)),Ef={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(){}function vp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ju,ju),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Tp(e),e;default:if(typeof i.status=="string")i.then(ju,ju);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Tp(e),e}throw Ho=i,jo}}var Ho=null;function Ep(){if(Ho===null)throw Error(s(459));var e=Ho;return Ho=null,e}function Tp(e){if(e===jo||e===qu)throw Error(s(483))}var lr=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Af(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Pu(e),op(e,null,a),i}return Mu(e,l,i,a),Pu(e)}function Fo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,_o(e,a)}}function Sf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var wf=!1;function Go(){if(wf){var e=Sa;if(e!==null)throw e}}function Qo(e,i,a,l){wf=!1;var h=e.updateQueue;lr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,L=b.next;b.next=null,v===null?d=L:v.next=L,v=b;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==v&&(T===null?F.firstBaseUpdate=L:T.next=L,F.lastBaseUpdate=b))}if(d!==null){var K=h.baseState;v=0,F=L=b=null,T=d;do{var z=T.lane&-536870913,B=z!==T.lane;if(B?(Lt&z)===z:(l&z)===z){z!==0&&z===Aa&&(wf=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var At=e,pt=T;z=i;var $t=a;switch(pt.tag){case 1:if(At=pt.payload,typeof At=="function"){K=At.call($t,K,z);break t}K=At;break t;case 3:At.flags=At.flags&-65537|128;case 0:if(At=pt.payload,z=typeof At=="function"?At.call($t,K,z):At,z==null)break t;K=E({},K,z);break t;case 2:lr=!0}}z=T.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(L=F=B,b=K):F=F.next=B,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;B=T,T=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(b=K),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),_r|=v,e.lanes=v,e.memoizedState=K}}function Ap(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Sp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],i)}var wa=X(null),Hu=X(0);function wp(e,i){e=Hi,W(Hu,e),W(wa,i),Hi=e|i.baseLanes}function bf(){W(Hu,Hi),W(wa,wa.current)}function Rf(){Hi=Hu.current,it(wa),it(Hu)}var hr=0,bt=null,Yt=null,ye=null,Fu=!1,ba=!1,Os=!1,Gu=0,Ko=0,Ra=null,_S=0;function fe(){throw Error(s(321))}function If(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function Cf(e,i,a,l,h,d){return hr=d,bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?oy:ly,Os=!1,d=a(l,h),Os=!1,ba&&(d=Rp(i,a,l,h)),bp(e),d}function bp(e){H.H=Zu;var i=Yt!==null&&Yt.next!==null;if(hr=0,ye=Yt=bt=null,Fu=!1,Ko=0,Ra=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&Lu(e)&&(Ne=!0))}function Rp(e,i,a,l){bt=e;var h=0;do{if(ba&&(Ra=null),Ko=0,ba=!1,25<=h)throw Error(s(301));if(h+=1,ye=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=bS,d=i(a,l)}while(ba);return d}function vS(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Yo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(bt.flags|=1024),i}function Df(){var e=Gu!==0;return Gu=0,e}function Of(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Nf(e){if(Fu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Fu=!1}hr=0,ye=Yt=bt=null,ba=!1,Ko=Gu=0,Ra=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?bt.memoizedState=ye=e:ye=ye.next=e,ye}function _e(){if(Yt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=ye===null?bt.memoizedState:ye.next;if(i!==null)ye=i,Yt=e;else{if(e===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},ye===null?bt.memoizedState=ye=e:ye=ye.next=e}return ye}function Vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(e){var i=Ko;return Ko+=1,Ra===null&&(Ra=[]),e=vp(Ra,e,i),i=bt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?oy:ly),e}function Qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===lt)return Ge(e)}throw Error(s(438,String(e)))}function Mf(e){var i=null,a=bt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Vf(),bt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Ku(e){var i=_e();return Pf(i,Yt,e)}function Pf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,b=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Lt&K)===K:(hr&K)===K){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===Aa&&(F=!0);else if((hr&z)===z){L=L.next,z===Aa&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=K,v=d):b=b.next=K,bt.lanes|=z,_r|=z;K=L.action,Os&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=z,v=d):b=b.next=z,bt.lanes|=K,_r|=K;L=L.next}while(L!==null&&L!==i);if(b===null?v=d:b.next=T,!fn(d,e.memoizedState)&&(Ne=!0,F&&(a=Sa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xf(e){var i=_e(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Ip(e,i,a){var l=bt,h=_e(),d=jt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Ne=!0),h=h.queue;var T=Op.bind(null,l,h,e);if(Xo(2048,8,T,[e]),h.getSnapshot!==i||v||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,Ia(9,Yu(),Dp.bind(null,l,h,a,i),null),te===null)throw Error(s(349));d||(hr&124)!==0||Cp(l,i,a)}return a}function Cp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=bt.updateQueue,i===null?(i=Vf(),bt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Dp(e,i,a,l){i.value=a,i.getSnapshot=l,Np(i)&&Vp(e)}function Op(e,i,a){return a(function(){Np(i)&&Vp(e)})}function Np(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function Vp(e){var i=_a(e,2);i!==null&&_n(i,e,2)}function kf(e){var i=rn();if(typeof e=="function"){var a=e;if(e=a(),Os){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function Mp(e,i,a,l){return e.baseState=a,Pf(e,Yt,typeof l=="function"?l:Ui)}function ES(e,i,a,l,h){if($u(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Pp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Pp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var T=a(h,l),b=H.S;b!==null&&b(v,T),xp(e,i,T)}catch(L){Uf(e,i,L)}finally{H.T=d}}else try{d=a(h,l),xp(e,i,d)}catch(L){Uf(e,i,L)}}function xp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kp(e,i,l)},function(l){return Uf(e,i,l)}):kp(e,i,a)}function kp(e,i,a){i.status="fulfilled",i.value=a,Up(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Pp(e,a)))}function Uf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Up(i),i=i.next;while(i!==l)}e.action=null}function Up(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lp(e,i){return i}function zp(e,i){if(jt){var a=te.formState;if(a!==null){t:{var l=bt;if(jt){if(le){e:{for(var h=le,d=ui;h.nodeType!==8;){if(!d){h=null;break e}if(h=Gn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=Gn(h.nextSibling),l=h.data==="F!";break t}}Rs(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:i},a.queue=l,a=ry.bind(null,bt,l),l.dispatch=a,l=kf(!1),d=jf.bind(null,bt,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=ES.bind(null,bt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Bp(e){var i=_e();return qp(i,Yt,e)}function qp(e,i,a){if(i=Pf(e,i,Lp)[0],e=Ku(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Yo(i)}catch(v){throw v===jo?qu:v}else l=i;i=_e();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(bt.flags|=2048,Ia(9,Yu(),TS.bind(null,h,a),null)),[l,d,e]}function TS(e,i){e.action=i}function jp(e){var i=_e(),a=Yt;if(a!==null)return qp(i,a,e);_e(),i=i.memoizedState,a=_e();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ia(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=bt.updateQueue,i===null&&(i=Vf(),bt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Yu(){return{destroy:void 0,resource:void 0}}function Hp(){return _e().memoizedState}function Xu(e,i,a,l){var h=rn();l=l===void 0?null:l,bt.flags|=e,h.memoizedState=Ia(1|i,Yu(),a,l)}function Xo(e,i,a,l){var h=_e();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&If(l,Yt.memoizedState.deps)?h.memoizedState=Ia(i,d,a,l):(bt.flags|=e,h.memoizedState=Ia(1|i,d,a,l))}function Fp(e,i){Xu(8390656,8,e,i)}function Gp(e,i){Xo(2048,8,e,i)}function Qp(e,i){return Xo(4,2,e,i)}function Kp(e,i){return Xo(4,4,e,i)}function Yp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xp(e,i,a){a=a!=null?a.concat([e]):null,Xo(4,4,Yp.bind(null,i,e),a)}function Lf(){}function $p(e,i){var a=_e();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&If(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Zp(e,i){var a=_e();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&If(i,l[1]))return l[0];if(l=e(),Os){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function zf(e,i,a){return a===void 0||(hr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=t_(),bt.lanes|=e,_r|=e,a)}function Wp(e,i,a,l){return fn(a,i)?a:wa.current!==null?(e=zf(e,a,l),fn(e,i)||(Ne=!0),e):(hr&42)===0?(Ne=!0,e.memoizedState=a):(e=t_(),bt.lanes|=e,_r|=e,i)}function Jp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=H.T,T={};H.T=T,jf(e,!1,i,a);try{var b=h(),L=H.S;if(L!==null&&L(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var F=yS(b,l);$o(e,i,F,yn(e))}else $o(e,i,l,yn(e))}catch(K){$o(e,i,{then:function(){},status:"rejected",reason:K},yn())}finally{nt.p=d,H.T=v}}function AS(){}function Bf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=ty(e).queue;Jp(e,h,i,ot,a===null?AS:function(){return ey(e),a(l)})}function ty(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ey(e){var i=ty(e).next.queue;$o(e,i,{},yn())}function qf(){return Ge(ml)}function ny(){return _e().memoizedState}function iy(){return _e().memoizedState}function SS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=ur(a);var l=cr(i,e,a);l!==null&&(_n(l,i,a),Fo(l,i,a)),i={cache:yf()},e.payload=i;return}i=i.return}}function wS(e,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$u(e)?sy(i,a):(a=of(e,i,a,l),a!==null&&(_n(a,e,l),ay(a,i,l)))}function ry(e,i,a){var l=yn();$o(e,i,a,l)}function $o(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($u(e))sy(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,v))return Mu(e,i,h,0),te===null&&Vu(),!1}catch{}finally{}if(a=of(e,i,h,l),a!==null)return _n(a,e,l),ay(a,i,l),!0}return!1}function jf(e,i,a,l){if(l={lane:2,revertLane:Ed(),action:l,hasEagerState:!1,eagerState:null,next:null},$u(e)){if(i)throw Error(s(479))}else i=of(e,a,l,2),i!==null&&_n(i,e,2)}function $u(e){var i=e.alternate;return e===bt||i!==null&&i===bt}function sy(e,i){ba=Fu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function ay(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,_o(e,a)}}var Zu={readContext:Ge,use:Qu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},oy={readContext:Ge,use:Qu,useCallback:function(e,i){return rn().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:Fp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Xu(4194308,4,Yp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Xu(4194308,4,e,i)},useInsertionEffect:function(e,i){Xu(4,2,e,i)},useMemo:function(e,i){var a=rn();i=i===void 0?null:i;var l=e();if(Os){cn(!0);try{e()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=rn();if(a!==void 0){var h=a(i);if(Os){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=wS.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var i=rn();return e={current:e},i.memoizedState=e},useState:function(e){e=kf(e);var i=e.queue,a=ry.bind(null,bt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(e,i){var a=rn();return zf(a,e,i)},useTransition:function(){var e=kf(!1);return e=Jp.bind(null,bt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=bt,h=rn();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),te===null)throw Error(s(349));(Lt&124)!==0||Cp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Fp(Op.bind(null,l,d,e),[e]),l.flags|=2048,Ia(9,Yu(),Dp.bind(null,l,d,a,i),null),a},useId:function(){var e=rn(),i=te.identifierPrefix;if(jt){var a=Pi,l=Mi;a=(l&~(1<<32-Fe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Gu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=_S++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:qf,useFormState:zp,useActionState:zp,useOptimistic:function(e){var i=rn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=jf.bind(null,bt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Mf,useCacheRefresh:function(){return rn().memoizedState=SS.bind(null,bt)}},ly={readContext:Ge,use:Qu,useCallback:$p,useContext:Ge,useEffect:Gp,useImperativeHandle:Xp,useInsertionEffect:Qp,useLayoutEffect:Kp,useMemo:Zp,useReducer:Ku,useRef:Hp,useState:function(){return Ku(Ui)},useDebugValue:Lf,useDeferredValue:function(e,i){var a=_e();return Wp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Ku(Ui)[0],i=_e().memoizedState;return[typeof e=="boolean"?e:Yo(e),i]},useSyncExternalStore:Ip,useId:ny,useHostTransitionStatus:qf,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,i){var a=_e();return Mp(a,Yt,e,i)},useMemoCache:Mf,useCacheRefresh:iy},bS={readContext:Ge,use:Qu,useCallback:$p,useContext:Ge,useEffect:Gp,useImperativeHandle:Xp,useInsertionEffect:Qp,useLayoutEffect:Kp,useMemo:Zp,useReducer:xf,useRef:Hp,useState:function(){return xf(Ui)},useDebugValue:Lf,useDeferredValue:function(e,i){var a=_e();return Yt===null?zf(a,e,i):Wp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=xf(Ui)[0],i=_e().memoizedState;return[typeof e=="boolean"?e:Yo(e),i]},useSyncExternalStore:Ip,useId:ny,useHostTransitionStatus:qf,useFormState:jp,useActionState:jp,useOptimistic:function(e,i){var a=_e();return Yt!==null?Mp(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:iy},Ca=null,Zo=0;function Wu(e){var i=Zo;return Zo+=1,Ca===null&&(Ca=[]),vp(Ca,e,i)}function Wo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ju(e,i){throw i.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function uy(e){var i=e._init;return i(e._payload)}function cy(e){function i(x,O){if(e){var U=x.deletions;U===null?(x.deletions=[O],x.flags|=16):U.push(O)}}function a(x,O){if(!e)return null;for(;O!==null;)i(x,O),O=O.sibling;return null}function l(x){for(var O=new Map;x!==null;)x.key!==null?O.set(x.key,x):O.set(x.index,x),x=x.sibling;return O}function h(x,O){return x=Vi(x,O),x.index=0,x.sibling=null,x}function d(x,O,U){return x.index=U,e?(U=x.alternate,U!==null?(U=U.index,U<O?(x.flags|=67108866,O):U):(x.flags|=67108866,O)):(x.flags|=1048576,O)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function T(x,O,U,Q){return O===null||O.tag!==6?(O=uf(U,x.mode,Q),O.return=x,O):(O=h(O,U),O.return=x,O)}function b(x,O,U,Q){var at=U.type;return at===$?F(x,O,U.props.children,Q,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&uy(at)===O.type)?(O=h(O,U.props),Wo(O,U),O.return=x,O):(O=xu(U.type,U.key,U.props,null,x.mode,Q),Wo(O,U),O.return=x,O)}function L(x,O,U,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=cf(U,x.mode,Q),O.return=x,O):(O=h(O,U.children||[]),O.return=x,O)}function F(x,O,U,Q,at){return O===null||O.tag!==7?(O=As(U,x.mode,Q,at),O.return=x,O):(O=h(O,U),O.return=x,O)}function K(x,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=uf(""+O,x.mode,U),O.return=x,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return U=xu(O.type,O.key,O.props,null,x.mode,U),Wo(U,O),U.return=x,U;case q:return O=cf(O,x.mode,U),O.return=x,O;case S:var Q=O._init;return O=Q(O._payload),K(x,O,U)}if(ee(O)||P(O))return O=As(O,x.mode,U,null),O.return=x,O;if(typeof O.then=="function")return K(x,Wu(O),U);if(O.$$typeof===lt)return K(x,zu(x,O),U);Ju(x,O)}return null}function z(x,O,U,Q){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:T(x,O,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return U.key===at?b(x,O,U,Q):null;case q:return U.key===at?L(x,O,U,Q):null;case S:return at=U._init,U=at(U._payload),z(x,O,U,Q)}if(ee(U)||P(U))return at!==null?null:F(x,O,U,Q,null);if(typeof U.then=="function")return z(x,O,Wu(U),Q);if(U.$$typeof===lt)return z(x,O,zu(x,U),Q);Ju(x,U)}return null}function B(x,O,U,Q,at){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return x=x.get(U)||null,T(O,x,""+Q,at);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:return x=x.get(Q.key===null?U:Q.key)||null,b(O,x,Q,at);case q:return x=x.get(Q.key===null?U:Q.key)||null,L(O,x,Q,at);case S:var Ct=Q._init;return Q=Ct(Q._payload),B(x,O,U,Q,at)}if(ee(Q)||P(Q))return x=x.get(U)||null,F(O,x,Q,at,null);if(typeof Q.then=="function")return B(x,O,U,Wu(Q),at);if(Q.$$typeof===lt)return B(x,O,U,zu(O,Q),at);Ju(O,Q)}return null}function At(x,O,U,Q){for(var at=null,Ct=null,ut=O,_t=O=0,Me=null;ut!==null&&_t<U.length;_t++){ut.index>_t?(Me=ut,ut=null):Me=ut.sibling;var qt=z(x,ut,U[_t],Q);if(qt===null){ut===null&&(ut=Me);break}e&&ut&&qt.alternate===null&&i(x,ut),O=d(qt,O,_t),Ct===null?at=qt:Ct.sibling=qt,Ct=qt,ut=Me}if(_t===U.length)return a(x,ut),jt&&ws(x,_t),at;if(ut===null){for(;_t<U.length;_t++)ut=K(x,U[_t],Q),ut!==null&&(O=d(ut,O,_t),Ct===null?at=ut:Ct.sibling=ut,Ct=ut);return jt&&ws(x,_t),at}for(ut=l(ut);_t<U.length;_t++)Me=B(ut,x,_t,U[_t],Q),Me!==null&&(e&&Me.alternate!==null&&ut.delete(Me.key===null?_t:Me.key),O=d(Me,O,_t),Ct===null?at=Me:Ct.sibling=Me,Ct=Me);return e&&ut.forEach(function(Ir){return i(x,Ir)}),jt&&ws(x,_t),at}function pt(x,O,U,Q){if(U==null)throw Error(s(151));for(var at=null,Ct=null,ut=O,_t=O=0,Me=null,qt=U.next();ut!==null&&!qt.done;_t++,qt=U.next()){ut.index>_t?(Me=ut,ut=null):Me=ut.sibling;var Ir=z(x,ut,qt.value,Q);if(Ir===null){ut===null&&(ut=Me);break}e&&ut&&Ir.alternate===null&&i(x,ut),O=d(Ir,O,_t),Ct===null?at=Ir:Ct.sibling=Ir,Ct=Ir,ut=Me}if(qt.done)return a(x,ut),jt&&ws(x,_t),at;if(ut===null){for(;!qt.done;_t++,qt=U.next())qt=K(x,qt.value,Q),qt!==null&&(O=d(qt,O,_t),Ct===null?at=qt:Ct.sibling=qt,Ct=qt);return jt&&ws(x,_t),at}for(ut=l(ut);!qt.done;_t++,qt=U.next())qt=B(ut,x,_t,qt.value,Q),qt!==null&&(e&&qt.alternate!==null&&ut.delete(qt.key===null?_t:qt.key),O=d(qt,O,_t),Ct===null?at=qt:Ct.sibling=qt,Ct=qt);return e&&ut.forEach(function(Rw){return i(x,Rw)}),jt&&ws(x,_t),at}function $t(x,O,U,Q){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case R:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===$){if(O.tag===7){a(x,O.sibling),Q=h(O,U.props.children),Q.return=x,x=Q;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===S&&uy(at)===O.type){a(x,O.sibling),Q=h(O,U.props),Wo(Q,U),Q.return=x,x=Q;break t}a(x,O);break}else i(x,O);O=O.sibling}U.type===$?(Q=As(U.props.children,x.mode,Q,U.key),Q.return=x,x=Q):(Q=xu(U.type,U.key,U.props,null,x.mode,Q),Wo(Q,U),Q.return=x,x=Q)}return v(x);case q:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(x,O.sibling),Q=h(O,U.children||[]),Q.return=x,x=Q;break t}else{a(x,O);break}else i(x,O);O=O.sibling}Q=cf(U,x.mode,Q),Q.return=x,x=Q}return v(x);case S:return at=U._init,U=at(U._payload),$t(x,O,U,Q)}if(ee(U))return At(x,O,U,Q);if(P(U)){if(at=P(U),typeof at!="function")throw Error(s(150));return U=at.call(U),pt(x,O,U,Q)}if(typeof U.then=="function")return $t(x,O,Wu(U),Q);if(U.$$typeof===lt)return $t(x,O,zu(x,U),Q);Ju(x,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(x,O.sibling),Q=h(O,U),Q.return=x,x=Q):(a(x,O),Q=uf(U,x.mode,Q),Q.return=x,x=Q),v(x)):a(x,O)}return function(x,O,U,Q){try{Zo=0;var at=$t(x,O,U,Q);return Ca=null,at}catch(ut){if(ut===jo||ut===qu)throw ut;var Ct=dn(29,ut,null,x.mode);return Ct.lanes=Q,Ct.return=x,Ct}finally{}}}var Da=cy(!0),hy=cy(!1),Mn=X(null),ci=null;function fr(e){var i=e.alternate;W(Re,Re.current&1),W(Mn,e),ci===null&&(i===null||wa.current!==null||i.memoizedState!==null)&&(ci=e)}function fy(e){if(e.tag===22){if(W(Re,Re.current),W(Mn,e),ci===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ci=e)}}else dr()}function dr(){W(Re,Re.current),W(Mn,Mn.current)}function Li(e){it(Mn),ci===e&&(ci=null),it(Re)}var Re=X(0);function tc(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Vd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Hf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ff={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=yn(),h=ur(l);h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(_n(i,e,l),Fo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=yn(),h=ur(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,l),i!==null&&(_n(i,e,l),Fo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),l=ur(a);l.tag=2,i!=null&&(l.callback=i),i=cr(e,l,a),i!==null&&(_n(i,e,a),Fo(i,e,a))}};function dy(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Po(a,l)||!Po(h,d):!0}function my(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Ff.enqueueReplaceState(i,i.state,null)}function Ns(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var ec=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function gy(e){ec(e)}function py(e){console.error(e)}function yy(e){ec(e)}function nc(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _y(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Gf(e,i,a){return a=ur(a),a.tag=3,a.payload={element:null},a.callback=function(){nc(e,i)},a}function vy(e){return e=ur(e),e.tag=3,e}function Ey(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){_y(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){_y(i,a,l),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function RS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&zo(i,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return ci===null?gd():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Ef?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),yd(e,l,h)),!1;case 22:return a.flags|=65536,l===Ef?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),yd(e,l,h)),!1}throw Error(s(435,a.tag))}return yd(e,l,h),gd(),!1}if(jt)return i=Mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==df&&(e=Error(s(422),{cause:l}),Lo(Dn(e,a)))):(l!==df&&(i=Error(s(423),{cause:l}),Lo(Dn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Dn(l,a),h=Gf(e.stateNode,l,h),Sf(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=Dn(d,a),sl===null?sl=[d]:sl.push(d),ue!==4&&(ue=2),i===null)return!0;l=Dn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Gf(a.stateNode,l,e),Sf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=vy(h),Ey(h,e,a,l),Sf(a,h),!1}a=a.return}while(a!==null);return!1}var Ty=Error(s(461)),Ne=!1;function Le(e,i,a,l){i.child=e===null?hy(i,null,a,l):Da(i,e.child,a,l)}function Ay(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Cs(i),l=Cf(e,i,a,v,d,h),T=Df(),e!==null&&!Ne?(Of(e,i,h),zi(e,i,h)):(jt&&T&&hf(i),i.flags|=1,Le(e,i,l,h),i.child)}function Sy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!lf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,wy(e,i,d,l,h)):(e=xu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Jf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(v,l)&&e.ref===i.ref)return zi(e,i,h)}return i.flags|=1,e=Vi(d,l),e.ref=i.ref,e.return=i,i.child=e}function wy(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Po(d,l)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=l=d,Jf(e,h))(e.flags&131072)!==0&&(Ne=!0);else return i.lanes=e.lanes,zi(e,i,h)}return Qf(e,i,a,l,h)}function by(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Ry(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bu(i,d!==null?d.cachePool:null),d!==null?wp(i,d):bf(),fy(i);else return i.lanes=i.childLanes=536870912,Ry(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Bu(i,d.cachePool),wp(i,d),dr(),i.memoizedState=null):(e!==null&&Bu(i,null),bf(),dr());return Le(e,i,h,a),i.child}function Ry(e,i,a,l){var h=vf();return h=h===null?null:{parent:be._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Bu(i,null),bf(),fy(i),e!==null&&zo(e,i,l,!0),null}function ic(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Qf(e,i,a,l,h){return Cs(i),a=Cf(e,i,a,l,void 0,h),l=Df(),e!==null&&!Ne?(Of(e,i,h),zi(e,i,h)):(jt&&l&&hf(i),i.flags|=1,Le(e,i,a,h),i.child)}function Iy(e,i,a,l,h,d){return Cs(i),i.updateQueue=null,a=Rp(i,l,a,h),bp(e),l=Df(),e!==null&&!Ne?(Of(e,i,d),zi(e,i,d)):(jt&&l&&hf(i),i.flags|=1,Le(e,i,a,d),i.child)}function Cy(e,i,a,l,h){if(Cs(i),i.stateNode===null){var d=va,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ge(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ff,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Tf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ge(v):va,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Hf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Ff.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Go(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,b=Ns(a,T);d.props=b;var L=d.context,F=a.contextType;v=va,typeof F=="object"&&F!==null&&(v=Ge(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&my(i,d,l,v),lr=!1;var z=i.memoizedState;d.state=z,Qo(i,l,d,h),Go(),L=i.memoizedState,T||z!==L||lr?(typeof K=="function"&&(Hf(i,a,K,l),L=i.memoizedState),(b=lr||dy(i,a,b,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Af(e,i),v=i.memoizedProps,F=Ns(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,b=va,typeof L=="object"&&L!==null&&(b=Ge(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==b)&&my(i,d,l,b),lr=!1,z=i.memoizedState,d.state=z,Qo(i,l,d,h),Go();var B=i.memoizedState;v!==K||z!==B||lr||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof T=="function"&&(Hf(i,a,T,l),B=i.memoizedState),(F=lr||dy(i,a,F,l,z,B,b)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=b,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,ic(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Da(i,e.child,null,h),i.child=Da(i,null,a,h)):Le(e,i,a,h),i.memoizedState=d.state,e=i.child):e=zi(e,i,h),e}function Dy(e,i,a,l){return Uo(),i.flags|=256,Le(e,i,a,l),i.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:pp()}}function Xf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Pn),e}function Oy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(jt){if(h?fr(i):dr(),jt){var T=le,b;if(b=T){t:{for(b=T,T=ui;b.nodeType!==8;){if(!T){T=null;break t}if(b=Gn(b.nextSibling),b===null){T=null;break t}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ss!==null?{id:Mi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},b=dn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,en=i,le=null,b=!0):b=!1}b||Rs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Vd(T)?i.lanes=32:i.lanes=536870912,null;Li(i)}return T=l.children,l=l.fallback,h?(dr(),h=i.mode,T=rc({mode:"hidden",children:T},h),l=As(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Yf(a),h.childLanes=Xf(e,v,a),i.memoizedState=Kf,l):(fr(i),$f(i,T))}if(b=e.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(d)i.flags&256?(fr(i),i.flags&=-257,i=Zf(e,i,a)):i.memoizedState!==null?(dr(),i.child=e.child,i.flags|=128,i=null):(dr(),h=l.fallback,T=i.mode,l=rc({mode:"visible",children:l.children},T),h=As(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Da(i,e.child,null,a),l=i.child,l.memoizedState=Yf(a),l.childLanes=Xf(e,v,a),i.memoizedState=Kf,i=h);else if(fr(i),Vd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Lo({value:l,source:null,stack:null}),i=Zf(e,i,a)}else if(Ne||zo(e,i,a,!1),v=(a&e.childLanes)!==0,Ne||v){if(v=te,v!==null&&(l=a&-a,l=(l&42)!==0?1:tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,_a(e,l),_n(v,e,l),Ty;T.data==="$?"||gd(),i=Zf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,le=Gn(T.nextSibling),en=i,jt=!0,bs=null,ui=!1,e!==null&&(Nn[Vn++]=Mi,Nn[Vn++]=Pi,Nn[Vn++]=Ss,Mi=e.id,Pi=e.overflow,Ss=i),i=$f(i,l.children),i.flags|=4096);return i}return h?(dr(),h=l.fallback,T=i.mode,b=e.child,L=b.sibling,l=Vi(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=Vi(L,h):(h=As(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Yf(a):(b=T.cachePool,b!==null?(L=be._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=pp(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=Xf(e,v,a),i.memoizedState=Kf,l):(fr(i),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function $f(e,i){return i=rc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function rc(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zf(e,i,a){return Da(i,e.child,null,a),e=$f(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ny(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),gf(e.return,i,a)}function Wf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Vy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,i,l.children,a),l=Re.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ny(e,a,i);else if(e.tag===19)Ny(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Re,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&tc(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Wf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&tc(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Wf(i,!0,a,null,d);break;case"together":Wf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),_r|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(zo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Vi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function IS(e,i,a){switch(i.tag){case 3:Bt(i,i.stateNode.containerInfo),or(i,be,e.memoizedState.cache),Uo();break;case 27:case 5:Ji(i);break;case 4:Bt(i,i.stateNode.containerInfo);break;case 10:or(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Oy(e,i,a):(fr(i),e=zi(e,i,a),e!==null?e.sibling:null);fr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(zo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Vy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Re,Re.current),l)break;return null;case 22:case 23:return i.lanes=0,by(e,i,a);case 24:or(i,be,e.memoizedState.cache)}return zi(e,i,a)}function My(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!Jf(e,a)&&(i.flags&128)===0)return Ne=!1,IS(e,i,a);Ne=(e.flags&131072)!==0}else Ne=!1,jt&&(i.flags&1048576)!==0&&up(i,Uu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")lf(l)?(e=Ns(l,e),i.tag=1,i=Cy(null,i,l,e,a)):(i.tag=0,i=Qf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Dt){i.tag=11,i=Ay(null,i,l,e,a);break t}else if(h===V){i.tag=14,i=Sy(null,i,l,e,a);break t}}throw i=Zt(l)||l,Error(s(306,i,""))}}return i;case 0:return Qf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ns(l,i.pendingProps),Cy(e,i,l,h,a);case 3:t:{if(Bt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Af(e,i),Qo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,or(i,be,l),l!==d.cache&&pf(i,[be],a,!0),Go(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Dy(e,i,l,a);break t}else if(l!==h){h=Dn(Error(s(424)),i),Lo(h),i=Dy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=Gn(e.firstChild),en=i,jt=!0,bs=null,ui=!0,a=hy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Uo(),l===h){i=zi(e,i,a);break t}Le(e,i,l,a)}i=i.child}return i;case 26:return ic(e,i),e===null?(a=U_(i.type,null,i.pendingProps,null))?i.memoizedState=a:jt||(a=i.type,e=i.pendingProps,l=_c(gt.current).createElement(a),l[Ae]=i,l[ge]=e,Be(l,a,e),he(l),i.stateNode=l):i.memoizedState=U_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ji(i),e===null&&jt&&(l=i.stateNode=P_(i.type,i.pendingProps,gt.current),en=i,ui=!0,h=le,Ar(i.type)?(Md=h,le=Gn(l.firstChild)):le=h),Le(e,i,i.pendingProps.children,a),ic(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&jt&&((h=l=le)&&(l=ew(l,i.type,i.pendingProps,ui),l!==null?(i.stateNode=l,en=i,le=Gn(l.firstChild),ui=!1,h=!0):h=!1),h||Rs(i)),Ji(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Dd(h,d)?l=null:v!==null&&Dd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Cf(e,i,vS,null,null,a),ml._currentValue=h),ic(e,i),Le(e,i,l,a),i.child;case 6:return e===null&&jt&&((e=a=le)&&(a=nw(a,i.pendingProps,ui),a!==null?(i.stateNode=a,en=i,le=null,e=!0):e=!1),e||Rs(i)),null;case 13:return Oy(e,i,a);case 4:return Bt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Da(i,null,l,a):Le(e,i,l,a),i.child;case 11:return Ay(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,or(i,i.type,l.value),Le(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Cs(i),h=Ge(h),l=l(h),i.flags|=1,Le(e,i,l,a),i.child;case 14:return Sy(e,i,i.type,i.pendingProps,a);case 15:return wy(e,i,i.type,i.pendingProps,a);case 19:return Vy(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=rc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return by(e,i,a);case 24:return Cs(i),l=Ge(be),e===null?(h=vf(),h===null&&(h=te,d=yf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Tf(i),or(i,be,h)):((e.lanes&a)!==0&&(Af(e,i),Qo(i,null,null,a),Go()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),or(i,be,l)):(l=d.cache,or(i,be,l),l!==h.cache&&pf(i,[be],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Bi(e){e.flags|=4}function Py(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j_(i)){if(i=Mn.current,i!==null&&((Lt&4194048)===Lt?ci!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==ci))throw Ho=Ef,yp;e.flags|=8192}}function sc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?po():536870912,e.lanes|=i,Ma|=i)}function Jo(e,i){if(!jt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function CS(e,i,a){var l=i.pendingProps;switch(ff(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(i),null;case 1:return se(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ki(be),un(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ko(i)?Bi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fp())),se(i),null;case 26:return a=i.memoizedState,e===null?(Bi(i),a!==null?(se(i),Py(i,a)):(se(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Bi(i),se(i),Py(i,a)):(se(i),i.flags&=-16777217):(e.memoizedProps!==l&&Bi(i),se(i),i.flags&=-16777217),null;case 27:vi(i),a=gt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return se(i),null}e=J.current,ko(i)?cp(i):(e=P_(h,l,a),i.stateNode=e,Bi(i))}return se(i),null;case 5:if(vi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return se(i),null}if(e=J.current,ko(i))cp(i);else{switch(h=_c(gt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ae]=i,e[ge]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Be(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Bi(i)}}return se(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Bi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=gt.current,ko(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ae]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||I_(e.nodeValue,a)),e||Rs(i)}else e=_c(e).createTextNode(l),e[Ae]=i,i.stateNode=e}return se(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ko(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ae]=i}else Uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;se(i),h=!1}else h=fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Li(i),i):(Li(i),null)}if(Li(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),sc(i,i.updateQueue),se(i),null;case 4:return un(),e===null&&wd(i.stateNode.containerInfo),se(i),null;case 10:return ki(i.type),se(i),null;case 19:if(it(Re),h=i.memoizedState,h===null)return se(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Jo(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=tc(e),d!==null){for(i.flags|=128,Jo(h,!1),e=d.updateQueue,i.updateQueue=e,sc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)lp(a,e),a=a.sibling;return W(Re,Re.current&1|2),i.child}e=e.sibling}h.tail!==null&&Sn()>lc&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304)}else{if(!l)if(e=tc(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,sc(i,e),Jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!jt)return se(i),null}else 2*Sn()-h.renderingStartTime>lc&&a!==536870912&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Sn(),i.sibling=null,e=Re.current,W(Re,l?e&1|2:e&1),i):(se(i),null);case 22:case 23:return Li(i),Rf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(se(i),i.subtreeFlags&6&&(i.flags|=8192)):se(i),a=i.updateQueue,a!==null&&sc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(be),se(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function DS(e,i){switch(ff(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(be),un(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return vi(i),null;case 13:if(Li(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Uo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Re),null;case 4:return un(),null;case 10:return ki(i.type),null;case 22:case 23:return Li(i),Rf(),e!==null&&it(Ds),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(be),null;case 25:return null;default:return null}}function xy(e,i){switch(ff(i),i.tag){case 3:ki(be),un();break;case 26:case 27:case 5:vi(i);break;case 4:un();break;case 13:Li(i);break;case 19:it(Re);break;case 10:ki(i.type);break;case 22:case 23:Li(i),Rf(),e!==null&&it(Ds);break;case 24:ki(be)}}function tl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Wt(i,i.return,T)}}function mr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a,L=T;try{L()}catch(F){Wt(h,b,F)}}}l=l.next}while(l!==d)}}catch(F){Wt(i,i.return,F)}}function ky(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Sp(i,a)}catch(l){Wt(e,e.return,l)}}}function Uy(e,i,a){a.props=Ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function el(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function hi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function Ly(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function td(e,i,a){try{var l=e.stateNode;$S(l,e.type,a,i),l[ge]=i}catch(h){Wt(e,e.return,h)}}function zy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function ed(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nd(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yc));else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(nd(e,i,a),e=e.sibling;e!==null;)nd(e,i,a),e=e.sibling}function ac(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,i,a),e=e.sibling;e!==null;)ac(e,i,a),e=e.sibling}function By(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Be(i,l,a),i[Ae]=e,i[ge]=a}catch(d){Wt(e,e.return,d)}}var qi=!1,de=!1,id=!1,qy=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function OS(e,i){if(e=e.containerInfo,Id=wc,e=Wg(e),tf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,b=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(T=v+h),K!==d||l!==0&&K.nodeType!==3||(b=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++F===l&&(b=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cd={focusedElem:e,selectionRange:a},wc=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var At=Ns(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(At,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(pt){Wt(a,a.return,pt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Nd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function jy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:gr(e,a),l&4&&tl(5,a);break;case 1:if(gr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Ns(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&ky(a),l&512&&el(a,a.return);break;case 3:if(gr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Sp(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&By(a);case 26:case 5:gr(e,a),i===null&&l&4&&Ly(a),l&512&&el(a,a.return);break;case 12:gr(e,a);break;case 13:gr(e,a),l&4&&Gy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zS.bind(null,a),iw(e,a))));break;case 22:if(l=a.memoizedState!==null||qi,!l){i=i!==null&&i.memoizedState!==null||de,h=qi;var d=de;qi=l,(de=i)&&!d?pr(e,a,(a.subtreeFlags&8772)!==0):gr(e,a),qi=h,de=d}break;case 30:break;default:gr(e,a)}}function Hy(e){var i=e.alternate;i!==null&&(e.alternate=null,Hy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ir(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,sn=!1;function ji(e,i,a){for(a=a.child;a!==null;)Fy(e,i,a),a=a.sibling}function Fy(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:de||hi(a,i),ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||hi(a,i);var l=re,h=sn;Ar(a.type)&&(re=a.stateNode,sn=!1),ji(e,i,a),cl(a.stateNode),re=l,sn=h;break;case 5:de||hi(a,i);case 6:if(l=re,h=sn,re=null,ji(e,i,a),re=l,sn=h,re!==null)if(sn)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{re.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:re!==null&&(sn?(e=re,V_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):V_(re,a.stateNode));break;case 4:l=re,h=sn,re=a.stateNode.containerInfo,sn=!0,ji(e,i,a),re=l,sn=h;break;case 0:case 11:case 14:case 15:de||mr(2,a,i),de||mr(4,a,i),ji(e,i,a);break;case 1:de||(hi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Uy(a,i,l)),ji(e,i,a);break;case 21:ji(e,i,a);break;case 22:de=(l=de)||a.memoizedState!==null,ji(e,i,a),de=l;break;default:ji(e,i,a)}}function Gy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){Wt(i,i.return,a)}}function NS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new qy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new qy),i;default:throw Error(s(435,e.tag))}}function rd(e,i){var a=NS(e);i.forEach(function(l){var h=BS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ar(T.type)){re=T.stateNode,sn=!1;break t}break;case 5:re=T.stateNode,sn=!1;break t;case 3:case 4:re=T.stateNode.containerInfo,sn=!0;break t}T=T.return}if(re===null)throw Error(s(160));Fy(d,v,h),re=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Qy(i,e),i=i.sibling}var Fn=null;function Qy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),gn(e),l&4&&(mr(3,e,e.return),tl(3,e),mr(5,e,e.return));break;case 1:mn(i,e),gn(e),l&512&&(de||a===null||hi(a,a.return)),l&64&&qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Fn;if(mn(i,e),gn(e),l&512&&(de||a===null||hi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[as]||d[Ae]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Be(d,l,a),d[Ae]=e,he(d),l=d;break t;case"link":var v=B_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;case"meta":if(v=B_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ae]=e,he(d),l=d}e.stateNode=l}else q_(h,e.type,e.stateNode);else e.stateNode=z_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?q_(h,e.type,e.stateNode):z_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&td(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),gn(e),l&512&&(de||a===null||hi(a,a.return)),a!==null&&l&4&&td(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),gn(e),l&512&&(de||a===null||hi(a,a.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(B){Wt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,td(e,h,a!==null?a.memoizedProps:h)),l&1024&&(id=!0);break;case 6:if(mn(i,e),gn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Wt(e,e.return,B)}}break;case 3:if(Tc=null,h=Fn,Fn=vc(i.containerInfo),mn(i,e),Fn=h,gn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(i.containerInfo)}catch(B){Wt(e,e.return,B)}id&&(id=!1,Ky(e));break;case 4:l=Fn,Fn=vc(e.stateNode.containerInfo),mn(i,e),gn(e),Fn=l;break;case 12:mn(i,e),gn(e);break;case 13:mn(i,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cd=Sn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,rd(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=qi,F=de;if(qi=L||h,de=F||b,mn(i,e),de=F,qi=L,gn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||qi||de||Vs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=b.stateNode;var K=b.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Wt(b,b.return,B)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Wt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,rd(e,a))));break;case 19:mn(i,e),gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,rd(e,l)));break;case 30:break;case 21:break;default:mn(i,e),gn(e)}}function gn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(zy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=ed(e);ac(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(bn(v,""),a.flags&=-33);var T=ed(e);ac(e,T,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=ed(e);nd(e,L,b);break;default:throw Error(s(161))}}catch(F){Wt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ky(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ky(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function gr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)jy(e,i.alternate,i),i=i.sibling}function Vs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:mr(4,i,i.return),Vs(i);break;case 1:hi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Uy(i,i.return,a),Vs(i);break;case 27:cl(i.stateNode);case 26:case 5:hi(i,i.return),Vs(i);break;case 22:i.memoizedState===null&&Vs(i);break;case 30:Vs(i);break;default:Vs(i)}e=e.sibling}}function pr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:pr(h,d,a),tl(4,d);break;case 1:if(pr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Wt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Ap(b[h],T)}catch(L){Wt(l,l.return,L)}}a&&v&64&&ky(d),el(d,d.return);break;case 27:By(d);case 26:case 5:pr(h,d,a),a&&l===null&&v&4&&Ly(d),el(d,d.return);break;case 12:pr(h,d,a);break;case 13:pr(h,d,a),a&&v&4&&Gy(h,d);break;case 22:d.memoizedState===null&&pr(h,d,a),el(d,d.return);break;case 30:break;default:pr(h,d,a)}i=i.sibling}}function sd(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function ad(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e))}function fi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Yy(e,i,a,l),i=i.sibling}function Yy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:fi(e,i,a,l),h&2048&&tl(9,i);break;case 1:fi(e,i,a,l);break;case 3:fi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Bo(e)));break;case 12:if(h&2048){fi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Wt(i,i.return,b)}}else fi(e,i,a,l);break;case 13:fi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?fi(e,i,a,l):nl(e,i):d._visibility&2?fi(e,i,a,l):(d._visibility|=2,Oa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&sd(v,i);break;case 24:fi(e,i,a,l),h&2048&&ad(i.alternate,i);break;default:fi(e,i,a,l)}}function Oa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,b=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Oa(d,v,T,b,h),tl(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Oa(d,v,T,b,h):nl(d,v):(F._visibility|=2,Oa(d,v,T,b,h)),h&&L&2048&&sd(v.alternate,v);break;case 24:Oa(d,v,T,b,h),h&&L&2048&&ad(v.alternate,v);break;default:Oa(d,v,T,b,h)}i=i.sibling}}function nl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:nl(a,l),h&2048&&sd(l.alternate,l);break;case 24:nl(a,l),h&2048&&ad(l.alternate,l);break;default:nl(a,l)}i=i.sibling}}var il=8192;function Na(e){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Xy(e),e=e.sibling}function Xy(e){switch(e.tag){case 26:Na(e),e.flags&il&&e.memoizedState!==null&&pw(Fn,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var i=Fn;Fn=vc(e.stateNode.containerInfo),Na(e),Fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,Na(e),il=i):Na(e));break;default:Na(e)}}function $y(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function rl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Wy(l,e)}$y(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zy(e),e=e.sibling}function Zy(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&mr(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,oc(e)):rl(e);break;default:rl(e)}}function oc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,Wy(l,e)}$y(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:mr(8,i,i.return),oc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,oc(i));break;default:oc(i)}e=e.sibling}}function Wy(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(Hy(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var VS={getCacheForType:function(e){var i=Ge(be),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},MS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,te=null,Ot=null,Lt=0,Qt=0,pn=null,yr=!1,Va=!1,od=!1,Hi=0,ue=0,_r=0,Ms=0,ld=0,Pn=0,Ma=0,sl=null,an=null,ud=!1,cd=0,lc=1/0,uc=null,vr=null,ze=0,Er=null,Pa=null,xa=0,hd=0,fd=null,Jy=null,al=0,dd=null;function yn(){if((Gt&2)!==0&&Lt!==0)return Lt&-Lt;if(H.T!==null){var e=Aa;return e!==0?e:Ed()}return er()}function t_(){Pn===0&&(Pn=(Lt&536870912)===0||jt?go():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Pn}function _n(e,i,a){(e===te&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)&&(ka(e,0),Tr(e,Lt,Pn,!1)),Ti(e,a),((Gt&2)===0||e!==te)&&(e===te&&((Gt&2)===0&&(Ms|=a),ue===4&&Tr(e,Lt,Pn,!1)),di(e))}function e_(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||ss(e,i),h=l?kS(e,i):pd(e,i,!0),d=l;do{if(h===0){Va&&!l&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!PS(a)){h=pd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=sl;var b=T.current.memoizedState.isDehydrated;if(b&&(ka(T,v).flags|=256),v=pd(T,v,!1),v!==2){if(od&&!b){T.errorRecoveryDisabledLanes|=d,Ms|=d,h=4;break t}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){ka(e,0),Tr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(l,i,Pn,!yr);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=cd+300-Sn(),10<h)){if(Tr(l,i,Pn,!yr),Js(l,0,!0)!==0)break t;l.timeoutHandle=O_(n_.bind(null,l,a,an,uc,ud,i,Pn,Ms,Ma,yr,d,2,-0,0),h);break t}n_(l,a,an,uc,ud,i,Pn,Ms,Ma,yr,d,0,-0,0)}}break}while(!0);di(e)}function n_(e,i,a,l,h,d,v,T,b,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:gw},Xy(i),K=yw(),K!==null)){e.cancelPendingCommit=K(u_.bind(null,e,i,d,a,l,h,v,T,b,F,1,z,B)),Tr(e,d,v,!L);return}u_(e,i,d,a,l,h,v,T,b)}function PS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,l){i&=~ld,i&=~Ms,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Fe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Wn(e,a,i)}function cc(){return(Gt&6)===0?(ol(0),!1):!0}function md(){if(Ot!==null){if(Qt===0)var e=Ot.return;else e=Ot,xi=Is=null,Nf(e),Ca=null,Zo=0,e=Ot;for(;e!==null;)xy(e.alternate,e),e=e.return;Ot=null}}function ka(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,WS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),md(),te=e,Ot=a=Vi(e.current,null),Lt=i,Qt=0,pn=null,yr=!1,Va=ss(e,i),od=!1,Ma=Pn=ld=Ms=_r=ue=0,an=sl=null,ud=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Fe(l),d=1<<h;i|=e[h],l&=~d}return Hi=i,Vu(),a}function i_(e,i){bt=null,H.H=Zu,i===jo||i===qu?(i=Ep(),Qt=3):i===yp?(i=Ep(),Qt=4):Qt=i===Ty?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Ot===null&&(ue=1,nc(e,Dn(i,e.current)))}function r_(){var e=H.H;return H.H=Zu,e===null?Zu:e}function s_(){var e=H.A;return H.A=VS,e}function gd(){ue=4,yr||(Lt&4194048)!==Lt&&Mn.current!==null||(Va=!0),(_r&134217727)===0&&(Ms&134217727)===0||te===null||Tr(te,Lt,Pn,!1)}function pd(e,i,a){var l=Gt;Gt|=2;var h=r_(),d=s_();(te!==e||Lt!==i)&&(uc=null,ka(e,i)),i=!1;var v=ue;t:do try{if(Qt!==0&&Ot!==null){var T=Ot,b=pn;switch(Qt){case 8:md(),v=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(i=!0);var L=Qt;if(Qt=0,pn=null,Ua(e,T,b,L),a&&Va){v=0;break t}break;default:L=Qt,Qt=0,pn=null,Ua(e,T,b,L)}}xS(),v=ue;break}catch(F){i_(e,F)}while(!0);return i&&e.shellSuspendCounter++,xi=Is=null,Gt=l,H.H=h,H.A=d,Ot===null&&(te=null,Lt=0,Vu()),v}function xS(){for(;Ot!==null;)a_(Ot)}function kS(e,i){var a=Gt;Gt|=2;var l=r_(),h=s_();te!==e||Lt!==i?(uc=null,lc=Sn()+500,ka(e,i)):Va=ss(e,i);t:do try{if(Qt!==0&&Ot!==null){i=Ot;var d=pn;e:switch(Qt){case 1:Qt=0,pn=null,Ua(e,i,d,1);break;case 2:case 9:if(_p(d)){Qt=0,pn=null,o_(i);break}i=function(){Qt!==2&&Qt!==9||te!==e||(Qt=7),di(e)},d.then(i,i);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:_p(d)?(Qt=0,pn=null,o_(i)):(Qt=0,pn=null,Ua(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||j_(v)){Qt=0,pn=null;var b=T.sibling;if(b!==null)Ot=b;else{var L=T.return;L!==null?(Ot=L,hc(L)):Ot=null}break e}}Qt=0,pn=null,Ua(e,i,d,5);break;case 6:Qt=0,pn=null,Ua(e,i,d,6);break;case 8:md(),ue=6;break t;default:throw Error(s(462))}}US();break}catch(F){i_(e,F)}while(!0);return xi=Is=null,H.H=l,H.A=h,Gt=a,Ot!==null?0:(te=null,Lt=0,Vu(),ue)}function US(){for(;Ot!==null&&!co();)a_(Ot)}function a_(e){var i=My(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,i===null?hc(e):Ot=i}function o_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Iy(a,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=Iy(a,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:Nf(i);default:xy(a,i),i=Ot=lp(i,Hi),i=My(a,i,Hi)}e.memoizedProps=e.pendingProps,i===null?hc(e):Ot=i}function Ua(e,i,a,l){xi=Is=null,Nf(i),Ca=null,Zo=0;var h=i.return;try{if(RS(e,h,i,a,Lt)){ue=1,nc(e,Dn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;ue=1,nc(e,Dn(a,e.current)),Ot=null;return}i.flags&32768?(jt||l===1?e=!0:Va||(Lt&536870912)!==0?e=!1:(yr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),l_(i,e)):hc(i)}function hc(e){var i=e;do{if((i.flags&32768)!==0){l_(i,yr);return}e=i.return;var a=CS(i.alternate,i,Hi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function l_(e,i){do{var a=DS(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);ue=6,Ot=null}function u_(e,i,a,l,h,d,v,T,b){e.cancelPendingCommit=null;do fc();while(ze!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=af,yo(e,a,d,v,T,b),e===te&&(Ot=te=null,Lt=0),Pa=i,Er=e,xa=a,hd=d,fd=h,Jy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qS(es,function(){return m_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=nt.p,nt.p=2,v=Gt,Gt|=4;try{OS(e,i,a)}finally{Gt=v,nt.p=h,H.T=l}}ze=1,c_(),h_(),f_()}}function c_(){if(ze===1){ze=0;var e=Er,i=Pa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Qy(i,e);var d=Cd,v=Wg(e.containerInfo),T=d.focusedElem,b=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Zg(T.ownerDocument.documentElement,T)){if(b!==null&&tf(T)){var L=b.start,F=b.end;if(F===void 0&&(F=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(F,T.value.length);else{var K=T.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),At=T.textContent.length,pt=Math.min(b.start,At),$t=b.end===void 0?pt:Math.min(b.end,At);!B.extend&&pt>$t&&(v=$t,$t=pt,pt=v);var x=$g(T,pt),O=$g(T,$t);if(x&&O&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var U=K.createRange();U.setStart(x.node,x.offset),B.removeAllRanges(),pt>$t?(B.addRange(U),B.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),B.addRange(U))}}}}for(K=[],B=T;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var Q=K[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}wc=!!Id,Cd=Id=null}finally{Gt=h,nt.p=l,H.T=a}}e.current=i,ze=2}}function h_(){if(ze===2){ze=0;var e=Er,i=Pa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{jy(e,i.alternate,i)}finally{Gt=h,nt.p=l,H.T=a}}ze=3}}function f_(){if(ze===4||ze===3){ze=0,ou();var e=Er,i=Pa,a=xa,l=Jy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ze=5:(ze=0,Pa=Er=null,d_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(vr=null),ta(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=nt.p,nt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{H.T=i,nt.p=h}}(xa&3)!==0&&fc(),di(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===dd?al++:(al=0,dd=e):al=0,ol(0)}}function d_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Bo(i)))}function fc(e){return c_(),h_(),f_(),m_()}function m_(){if(ze!==5)return!1;var e=Er,i=hd;hd=0;var a=ta(xa),l=H.T,h=nt.p;try{nt.p=32>a?32:a,H.T=null,a=fd,fd=null;var d=Er,v=xa;if(ze=0,Pa=Er=null,xa=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,Zy(d.current),Yy(d,d.current,v,a),Gt=T,ol(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{nt.p=h,H.T=l,d_(e,i)}}function g_(e,i,a){i=Dn(a,i),i=Gf(e.stateNode,i,2),e=cr(e,i,2),e!==null&&(Ti(e,2),di(e))}function Wt(e,i,a){if(e.tag===3)g_(e,e,a);else for(;i!==null;){if(i.tag===3){g_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vr===null||!vr.has(l))){e=Dn(a,e),a=vy(2),l=cr(i,a,2),l!==null&&(Ey(a,l,i,e),Ti(l,2),di(l));break}}i=i.return}}function yd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new MS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(od=!0,h.add(a),e=LS.bind(null,e,i,a),i.then(e,e))}function LS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(Lt&a)===a&&(ue===4||ue===3&&(Lt&62914560)===Lt&&300>Sn()-cd?(Gt&2)===0&&ka(e,0):ld|=a,Ma===Lt&&(Ma=0)),di(e)}function p_(e,i){i===0&&(i=po()),e=_a(e,i),e!==null&&(Ti(e,i),di(e))}function zS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),p_(e,a)}function BS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),p_(e,a)}function qS(e,i){return Jr(e,i)}var dc=null,La=null,_d=!1,mc=!1,vd=!1,Ps=0;function di(e){e!==La&&e.next===null&&(La===null?dc=La=e:La=La.next=e),mc=!0,_d||(_d=!0,HS())}function ol(e,i){if(!vd&&mc){vd=!0;do for(var a=!1,l=dc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Fe(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,E_(l,d))}else d=Lt,d=Js(l,l===te?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ss(l,d)||(a=!0,E_(l,d));l=l.next}while(a);vd=!1}}function jS(){y_()}function y_(){mc=_d=!1;var e=0;Ps!==0&&(ZS()&&(e=Ps),Ps=0);for(var i=Sn(),a=null,l=dc;l!==null;){var h=l.next,d=__(l,i);d===0?(l.next=null,a===null?dc=h:a.next=h,h===null&&(La=a)):(a=l,(e!==0||(d&3)!==0)&&(mc=!0)),l=h}ol(e)}function __(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Fe(d),T=1<<v,b=h[v];b===-1?((T&a)===0||(T&l)!==0)&&(h[v]=mo(T,i)):b<=i&&(e.expiredLanes|=T),d&=~T}if(i=te,a=Lt,a=Js(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ts(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ss(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&ts(l),ta(a)){case 2:case 8:a=Zs;break;case 32:a=es;break;case 268435456:a=Ws;break;default:a=es}return l=v_.bind(null,e),a=Jr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&ts(l),e.callbackPriority=2,e.callbackNode=null,2}function v_(e,i){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fc()&&e.callbackNode!==a)return null;var l=Lt;return l=Js(e,e===te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(e_(e,l,i),__(e,Sn()),e.callbackNode!=null&&e.callbackNode===a?v_.bind(null,e):null)}function E_(e,i){if(fc())return null;e_(e,i,!0)}function HS(){JS(function(){(Gt&6)!==0?Jr(ho,jS):y_()})}function Ed(){return Ps===0&&(Ps=go()),Ps}function T_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:aa(""+e)}function A_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function FS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=T_((h[ge]||null).action),v=l.submitter;v&&(i=(i=v[ge]||null)?T_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new oa("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ps!==0){var b=v?A_(h,v):new FormData(h);Bf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(T.preventDefault(),b=v?A_(h,v):new FormData(h),Bf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var Td=0;Td<sf.length;Td++){var Ad=sf[Td],GS=Ad.toLowerCase(),QS=Ad[0].toUpperCase()+Ad.slice(1);Hn(GS,"on"+QS)}Hn(ep,"onAnimationEnd"),Hn(np,"onAnimationIteration"),Hn(ip,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(uS,"onTransitionRun"),Hn(cS,"onTransitionStart"),Hn(hS,"onTransitionCancel"),Hn(rp,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function S_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],b=T.instance,L=T.currentTarget;if(T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){ec(F)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(T=l[v],b=T.instance,L=T.currentTarget,T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){ec(F)}h.currentTarget=null,d=b}}}}function Nt(e,i){var a=i[vo];a===void 0&&(a=i[vo]=new Set);var l=e+"__bubble";a.has(l)||(w_(i,e,2,!1),a.add(l))}function Sd(e,i,a){var l=0;i&&(l|=4),w_(a,e,l,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function wd(e){if(!e[gc]){e[gc]=!0,Eo.forEach(function(a){a!=="selectionchange"&&(KS.has(a)||Sd(a,!1,e),Sd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[gc]||(i[gc]=!0,Sd("selectionchange",!1,i))}}function w_(e,i,a,l){switch(Y_(i)){case 2:var h=Ew;break;case 8:h=Tw;break;default:h=Ld}a=h.bind(null,i,a,e),h=void 0,!In||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function bd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ai(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}T=T.parentNode}}l=l.return}yu(function(){var L=d,F=Rn(a),K=[];t:{var z=sp.get(e);if(z!==void 0){var B=oa,At=e;switch(e){case"keypress":if(ri(a)===0)break t;case"keydown":case"keyup":B=da;break;case"focusin":At="focus",B=ca;break;case"focusout":At="blur",B=ca;break;case"beforeblur":case"afterblur":B=ca;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=bu;break;case ep:case np:case ip:B=ha;break;case rp:B=Iu;break;case"scroll":case"scrollend":B=_u;break;case"wheel":B=ma;break;case"copy":case"cut":case"paste":B=fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Vo;break;case"toggle":case"beforetoggle":B=Du}var pt=(i&4)!==0,$t=!pt&&(e==="scroll"||e==="scrollend"),x=pt?z!==null?z+"Capture":null:z;pt=[];for(var O=L,U;O!==null;){var Q=O;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||x===null||(Q=ds(O,x),Q!=null&&pt.push(ul(O,Q,U))),$t)break;O=O.return}0<pt.length&&(z=new B(z,At,null,a,F),K.push({event:z,listeners:pt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Ri&&(At=a.relatedTarget||a.fromElement)&&(Ai(At)||At[wn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(At=a.relatedTarget||a.toElement,B=L,At=At?Ai(At):null,At!==null&&($t=u(At),pt=At.tag,At!==$t||pt!==5&&pt!==27&&pt!==6)&&(At=null)):(B=null,At=L),B!==At)){if(pt=Cn,Q="onMouseLeave",x="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(pt=Vo,Q="onPointerLeave",x="onPointerEnter",O="pointer"),$t=B==null?z:ti(B),U=At==null?z:ti(At),z=new pt(Q,O+"leave",B,a,F),z.target=$t,z.relatedTarget=U,Q=null,Ai(F)===L&&(pt=new pt(x,O+"enter",At,a,F),pt.target=U,pt.relatedTarget=$t,Q=pt),$t=Q,B&&At)e:{for(pt=B,x=At,O=0,U=pt;U;U=za(U))O++;for(U=0,Q=x;Q;Q=za(Q))U++;for(;0<O-U;)pt=za(pt),O--;for(;0<U-O;)x=za(x),U--;for(;O--;){if(pt===x||x!==null&&pt===x.alternate)break e;pt=za(pt),x=za(x)}pt=null}else pt=null;B!==null&&b_(K,z,B,pt,!1),At!==null&&$t!==null&&b_(K,$t,At,pt,!0)}}t:{if(z=L?ti(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var at=Fg;else if(we(z))if(Gg)at=aS;else{at=rS;var Ct=iS}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&bo(L.elementType)&&(at=Fg):at=sS;if(at&&(at=at(e,L))){Ni(K,at,a,F);break t}Ct&&Ct(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&sr(z,"number",z.value)}switch(Ct=L?ti(L):window,e){case"focusin":(we(Ct)||Ct.contentEditable==="true")&&(ga=Ct,ef=L,xo=null);break;case"focusout":xo=ef=ga=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Jg(K,a,F);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":Jg(K,a,F)}var ut;if(oi)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else kt?j(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_&&a.locale!=="ko"&&(kt||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&kt&&(ut=Io()):(ii=F,ar="value"in ii?ii.value:ii.textContent,kt=!0)),Ct=pc(L,_t),0<Ct.length&&(_t=new Oo(_t,e,null,a,F),K.push({event:_t,listeners:Ct}),ut?_t.data=ut:(ut=tt(a),ut!==null&&(_t.data=ut)))),(ut=g?Se(e,a):Ut(e,a))&&(_t=pc(L,"onBeforeInput"),0<_t.length&&(Ct=new Oo("onBeforeInput","beforeinput",null,a,F),K.push({event:Ct,listeners:_t}),Ct.data=ut)),FS(K,e,L,a,F)}S_(K,i)})}function ul(e,i,a){return{instance:e,listener:i,currentTarget:a}}function pc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ds(e,a),h!=null&&l.unshift(ul(e,h,d)),h=ds(e,i),h!=null&&l.push(ul(e,h,d))),e.tag===3)return l;e=e.return}return[]}function za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,b=T.alternate,L=T.stateNode;if(T=T.tag,b!==null&&b===l)break;T!==5&&T!==26&&T!==27||L===null||(b=L,h?(L=ds(a,d),L!=null&&v.unshift(ul(a,L,b))):h||(L=ds(a,d),L!=null&&v.push(ul(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var YS=/\r\n?/g,XS=/\u0000|\uFFFD/g;function R_(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(XS,"")}function I_(e,i){return i=R_(i),R_(e)===i}function yc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||bn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&bn(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":wo(e,l,d);break;case"data":if(i!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=aa(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=aa(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=yc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=aa(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),rr(e,"popover",l);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yh.get(a)||a,rr(e,a,l))}}function Rd(e,i,a,l,h,d){switch(a){case"style":wo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?bn(e,l):(typeof l=="number"||typeof l=="bigint")&&bn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=yc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ea.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ge]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):rr(e,a,l)}}}function Be(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,b=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":b=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Xt(e,i,l,F,a,null)}}cs(e,d,T,b,L,v,h,!1),sa(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?bi(e,!!l,i,!1):a!=null&&bi(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}hs(e,l,h,d),sa(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,b,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<ll.length;l++)Nt(ll[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(bo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&Rd(e,i,F,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function $S(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,b=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=K;default:l.hasOwnProperty(B)||Xt(e,i,B,null,l,K)}}for(var z in l){var B=l[z];if(K=a[z],l.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Xt(e,i,z,B,l,K)}}hn(e,v,T,b,L,F,d,h);return;case"select":B=v=T=z=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":B=b;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==b&&Xt(e,i,h,d,l,b)}i=T,a=v,l=B,z!=null?bi(e,!!a,z,!1):!!l!=!!a&&(i!=null?bi(e,!!a,i,!0):bi(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Kt(e,z,B);return;case"option":for(var At in a)if(z=a[At],a.hasOwnProperty(At)&&z!=null&&!l.hasOwnProperty(At))switch(At){case"selected":e.selected=!1;break;default:Xt(e,i,At,null,l,z)}for(b in l)if(z=l[b],B=a[b],l.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,b,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)z=a[pt],a.hasOwnProperty(pt)&&z!=null&&!l.hasOwnProperty(pt)&&Xt(e,i,pt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,B)}return;default:if(bo(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&Rd(e,i,$t,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||Rd(e,i,F,z,l,B);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Xt(e,i,x,null,l,z);for(K in l)z=l[K],B=a[K],!l.hasOwnProperty(K)||z===B||z==null&&B==null||Xt(e,i,K,z,l,B)}var Id=null,Cd=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function C_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Dd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var O_=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,N_=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof N_<"u"?function(e){return N_.resolve(null).then(e).catch(tw)}:O_;function tw(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function V_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&cl(v.documentElement),a&2&&cl(v.body),a&4)for(a=v.head,cl(a),v=a.firstChild;v;){var T=v.nextSibling,b=v.nodeName;v[as]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),_l(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);_l(i)}function Nd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nd(a),ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ew(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[as])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function nw(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gn(e.nextSibling),e===null))return null;return e}function Vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function iw(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Md=null;function M_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function P_(e,i,a){switch(i=_c(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function cl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ir(e)}var xn=new Map,x_=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fi=nt.d;nt.d={f:rw,r:sw,D:aw,C:ow,L:lw,m:uw,X:hw,S:cw,M:fw};function rw(){var e=Fi.f(),i=cc();return e||i}function sw(e){var i=Jn(e);i!==null&&i.tag===5&&i.type==="form"?ey(i):Fi.r(e)}var Ba=typeof document>"u"?null:document;function k_(e,i,a){var l=Ba;if(l&&typeof i=="string"&&i){var h=pe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),x_.has(h)||(x_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Be(i,"link",e),he(i),l.head.appendChild(i)))}}function aw(e){Fi.D(e),k_("dns-prefetch",e,null)}function ow(e,i){Fi.C(e,i),k_("preconnect",e,i)}function lw(e,i,a){Fi.L(e,i,a);var l=Ba;if(l&&e&&i){var h='link[rel="preload"][as="'+pe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+pe(a.imageSizes)+'"]')):h+='[href="'+pe(e)+'"]';var d=h;switch(i){case"style":d=qa(e);break;case"script":d=ja(e)}xn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),xn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(hl(d))||i==="script"&&l.querySelector(fl(d))||(i=l.createElement("link"),Be(i,"link",e),he(i),l.head.appendChild(i)))}}function uw(e,i){Fi.m(e,i);var a=Ba;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+pe(l)+'"][href="'+pe(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ja(e)}if(!xn.has(d)&&(e=E({rel:"modulepreload",href:e},i),xn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(d)))return}l=a.createElement("link"),Be(l,"link",e),he(l),a.head.appendChild(l)}}}function cw(e,i,a){Fi.S(e,i,a);var l=Ba;if(l&&e){var h=We(l).hoistableStyles,d=qa(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(hl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=xn.get(d))&&Pd(e,a);var b=v=l.createElement("link");he(b),Be(b,"link",e),b._p=new Promise(function(L,F){b.onload=L,b.onerror=F}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ec(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function hw(e,i){Fi.X(e,i);var a=Ba;if(a&&e){var l=We(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(fl(h)),d||(e=E({src:e,async:!0},i),(i=xn.get(h))&&xd(e,i),d=a.createElement("script"),he(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function fw(e,i){Fi.M(e,i);var a=Ba;if(a&&e){var l=We(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(fl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=xn.get(h))&&xd(e,i),d=a.createElement("script"),he(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function U_(e,i,a,l){var h=(h=gt.current)?vc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=qa(a.href),a=We(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qa(a.href);var d=We(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(hl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),xn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xn.set(e,a),d||dw(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ja(a),a=We(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qa(e){return'href="'+pe(e)+'"'}function hl(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function dw(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Be(i,"link",a),he(i),e.head.appendChild(i))}function ja(e){return'[src="'+pe(e)+'"]'}function fl(e){return"script[async]"+e}function z_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(l)return i.instance=l,he(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),Be(l,"style",h),Ec(l,a.precedence,e),i.instance=l;case"stylesheet":h=qa(a.href);var d=e.querySelector(hl(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=L_(a),(h=xn.get(h))&&Pd(l,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Be(d,"link",l),i.state.loading|=4,Ec(d,a.precedence,e),i.instance=d;case"script":return d=ja(a.src),(h=e.querySelector(fl(d)))?(i.instance=h,he(h),h):(l=a,(h=xn.get(d))&&(l=E({},a),xd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),Be(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,a.precedence,e));return i.instance}function Ec(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Pd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function xd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Tc=null;function B_(e,i,a){if(Tc===null){var l=new Map,h=Tc=new Map;h.set(a,l)}else h=Tc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[as]||d[Ae]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function q_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function mw(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function j_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var dl=null;function gw(){}function pw(e,i,a){if(dl===null)throw Error(s(475));var l=dl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=qa(a.href),d=e.querySelector(hl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Ac.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=L_(a),(h=xn.get(h))&&Pd(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Be(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ac.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function yw(){if(dl===null)throw Error(s(475));var e=dl;return e.stylesheets&&e.count===0&&kd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&kd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ac(){if(this.count--,this.count===0){if(this.stylesheets)kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sc=null;function kd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sc=new Map,i.forEach(_w,e),Sc=null,Ac.call(e))}function _w(e,i){if(!(i.state.loading&4)){var a=Sc.get(e);if(a)var l=a.get(null);else{a=new Map,Sc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Ac.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ml={$$typeof:lt,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function vw(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function H_(e,i,a,l,h,d,v,T,b,L,F,K){return e=new vw(e,i,a,v,T,b,L,K),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=yf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Tf(d),e}function F_(e){return e?(e=va,e):va}function G_(e,i,a,l,h,d){h=F_(h),l.context===null?l.context=h:l.pendingContext=h,l=ur(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=cr(e,l,i),a!==null&&(_n(a,e,i),Fo(a,e,i))}function Q_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Ud(e,i){Q_(e,i),(e=e.alternate)&&Q_(e,i)}function K_(e){if(e.tag===13){var i=_a(e,67108864);i!==null&&_n(i,e,67108864),Ud(e,67108864)}}var wc=!0;function Ew(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=2,Ld(e,i,a,l)}finally{nt.p=d,H.T=h}}function Tw(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=8,Ld(e,i,a,l)}finally{nt.p=d,H.T=h}}function Ld(e,i,a,l){if(wc){var h=zd(l);if(h===null)bd(e,i,l,bc,a),X_(e,l);else if(Sw(h,e,i,a,l))l.stopPropagation();else if(X_(e,l),i&4&&-1<Aw.indexOf(e)){for(;h!==null;){var d=Jn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Bn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-Fe(v);T.entanglements[1]|=b,v&=~b}di(d),(Gt&6)===0&&(lc=Sn()+500,ol(0))}}break;case 13:T=_a(d,2),T!==null&&_n(T,d,2),cc(),Ud(d,2)}if(d=zd(l),d===null&&bd(e,i,l,bc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else bd(e,i,l,null,a)}}function zd(e){return e=Rn(e),Bd(e)}var bc=null;function Bd(e){if(bc=null,e=Ai(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return bc=e,null}function Y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jh()){case ho:return 2;case Zs:return 8;case es:case Hh:return 32;case Ws:return 268435456;default:return 32}default:return 32}}var qd=!1,Sr=null,wr=null,br=null,gl=new Map,pl=new Map,Rr=[],Aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X_(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(i.pointerId)}}function yl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Jn(i),i!==null&&K_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Sw(e,i,a,l,h){switch(i){case"focusin":return Sr=yl(Sr,e,i,a,l,h),!0;case"dragenter":return wr=yl(wr,e,i,a,l,h),!0;case"mouseover":return br=yl(br,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return gl.set(d,yl(gl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,pl.set(d,yl(pl.get(d)||null,e,i,a,l,h)),!0}return!1}function $_(e){var i=Ai(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,cu(e.priority,function(){if(a.tag===13){var l=yn();l=tr(l);var h=_a(a,l);h!==null&&_n(h,a,l),Ud(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=zd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ri=l,a.target.dispatchEvent(l),Ri=null}else return i=Jn(a),i!==null&&K_(i),e.blockedOn=a,!1;i.shift()}return!0}function Z_(e,i,a){Rc(e)&&a.delete(i)}function ww(){qd=!1,Sr!==null&&Rc(Sr)&&(Sr=null),wr!==null&&Rc(wr)&&(wr=null),br!==null&&Rc(br)&&(br=null),gl.forEach(Z_),pl.forEach(Z_)}function Ic(e,i){e.blockedOn===i&&(e.blockedOn=null,qd||(qd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ww)))}var Cc=null;function W_(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Bd(l||a)===null)continue;break}var d=Jn(a);d!==null&&(e.splice(i,3),i-=3,Bf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function _l(e){function i(b){return Ic(b,e)}Sr!==null&&Ic(Sr,e),wr!==null&&Ic(wr,e),br!==null&&Ic(br,e),gl.forEach(i),pl.forEach(i);for(var a=0;a<Rr.length;a++){var l=Rr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)$_(a),a.blockedOn===null&&Rr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ge]||null;if(typeof d=="function")v||W_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ge]||null)T=v.formAction;else if(Bd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),W_(a)}}}function jd(e){this._internalRoot=e}Dc.prototype.render=jd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();G_(a,l,e,i,null,null)},Dc.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;G_(e.current,2,null,e,null,null),cc(),i[wn]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=er();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,e),a===0&&$_(e)}};var J_=t.version;if(J_!=="19.1.0")throw Error(s(527,J_,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var bw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{oe=Oc.inject(bw),Ft=Oc}catch{}}return El.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=gy,d=py,v=yy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=H_(e,1,!1,null,null,a,l,h,d,v,T,null),e[wn]=i.current,wd(e),new jd(i)},El.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=gy,v=py,T=yy,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=H_(e,1,!0,i,a??null,l,h,d,v,T,b,L),i.context=F_(null),a=i.current,l=yn(),l=tr(l),h=ur(l),h.callback=null,cr(a,h,l),a=l,i.current.lanes=a,Ti(i,a),di(i),e[wn]=i.current,wd(e),new Dc(i)},El.version="19.1.0",El}var uv;function xw(){if(uv)return Gd.exports;uv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gd.exports=Pw(),Gd.exports}var kw=xw();const Uw=()=>{};var cv={};/**
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
 */const JE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Lw=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},tT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,q=y&63;p||(q=64,f||(R=64)),s.push(n[E],n[w],n[R],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(JE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Lw(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||w==null)throw new zw;const R=u<<2|m>>4;if(s.push(R),y!==64){const q=m<<4&240|y>>2;if(s.push(q),w!==64){const $=y<<6&192|w;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bw=function(r){const t=JE(r);return tT.encodeByteArray(t,!0)},Yc=function(r){return Bw(r).replace(/\./g,"")},eT=function(r){try{return tT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jw=()=>qw().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof cv>"u")return;const r=cv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Fw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&eT(r[1]);return t&&JSON.parse(t)},_h=()=>{try{return Uw()||jw()||Hw()||Fw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},nT=r=>{var t,n;return(n=(t=_h())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Gw=r=>{const t=nT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},iT=()=>{var r;return(r=_h())===null||r===void 0?void 0:r.config},rT=r=>{var t;return(t=_h())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class Qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(r){return r.endsWith(".cloudworkstations.dev")}async function sT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Kw(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Yc(JSON.stringify(n)),Yc(JSON.stringify(f)),""].join(".")}const Cl={};function Yw(){const r={prod:[],emulator:[]};for(const t of Object.keys(Cl))Cl[t]?r.emulator.push(t):r.prod.push(t);return r}function Xw(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let hv=!1;function aT(r,t){if(typeof window>"u"||typeof document>"u"||!Ql(window.location.host)||Cl[r]===t||Cl[r]||hv)return;Cl[r]=t;function n(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=Yw().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,q){R.setAttribute("width","24"),R.setAttribute("id",q),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function y(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{hv=!0,f()},R}function E(R,q){R.setAttribute("id",q),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=Xw(s),q=n("text"),$=document.getElementById(q)||document.createElement("span"),et=n("learnmore"),Z=document.getElementById(et)||document.createElement("a"),Tt=n("preprendIcon"),dt=document.getElementById(Tt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const lt=R.element;m(lt),E(Z,et);const Dt=y();p(dt,Tt),lt.append(dt,$,Z,Dt),document.body.appendChild(lt)}u?($.innerText="Preview backend disconnected.",dt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(dt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Zw(){var r;const t=(r=_h())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ww(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tb(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function eb(){return!Zw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lT(){try{return typeof indexedDB=="object"}catch{return!1}}function uT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function nb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ib="FirebaseError";class Zn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=ib,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?rb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Zn(o,m,s)}}function rb(r,t){return r.replace(sb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const sb=/\{\$([^}]+)}/g;function ab(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Lr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(fv(u)&&fv(f)){if(!Lr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function fv(r){return r!==null&&typeof r=="object"}/**
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
 */function Kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Al(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Sl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function ob(r,t){const n=new lb(r,t);return n.subscribe.bind(n)}class lb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ub(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Xd),o.error===void 0&&(o.error=Xd),o.complete===void 0&&(o.complete=Xd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Xd(){}/**
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
 */const cb=1e3,hb=2,fb=4*60*60*1e3,db=.5;function dv(r,t=cb,n=hb){const s=t*Math.pow(n,r),o=Math.round(db*s*(Math.random()-.5)*2);return Math.min(fb,s+o)}/**
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
 */function ce(r){return r&&r._delegate?r._delegate:r}class Xn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xs="[DEFAULT]";/**
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
 */class mb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Qw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pb(t))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=xs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xs){return this.instances.has(t)}getOptions(t=xs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=xs){return this.component?this.component.multipleInstances?t:xs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gb(r){return r===xs?void 0:r}function pb(r){return r.instantiationMode==="EAGER"}/**
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
 */class yb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const _b={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},vb=Vt.INFO,Eb={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},Tb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Eb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vh{constructor(t){this.name=t,this._logLevel=vb,this._logHandler=Tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const Ab=(r,t)=>t.some(n=>r instanceof n);let mv,gv;function Sb(){return mv||(mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return gv||(gv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cT=new WeakMap,um=new WeakMap,hT=new WeakMap,$d=new WeakMap,km=new WeakMap;function bb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Pr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&cT.set(n,r)}).catch(()=>{}),km.set(t,r),t}function Rb(r){if(um.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});um.set(r,t)}let cm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return um.get(r);if(t==="objectStoreNames")return r.objectStoreNames||hT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Ib(r){cm=r(cm)}function Cb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Zd(this),t,...n);return hT.set(s,t.sort?t.sort():[t]),Pr(s)}:wb().includes(r)?function(...t){return r.apply(Zd(this),t),Pr(cT.get(this))}:function(...t){return Pr(r.apply(Zd(this),t))}}function Db(r){return typeof r=="function"?Cb(r):(r instanceof IDBTransaction&&Rb(r),Ab(r,Sb())?new Proxy(r,cm):r)}function Pr(r){if(r instanceof IDBRequest)return bb(r);if($d.has(r))return $d.get(r);const t=Db(r);return t!==r&&($d.set(r,t),km.set(t,r)),t}const Zd=r=>km.get(r);function fT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Pr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Pr(f.result),p.oldVersion,p.newVersion,Pr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Ob=["get","getKey","getAll","getAllKeys","count"],Nb=["put","add","delete","clear"],Wd=new Map;function pv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Wd.get(t))return Wd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Nb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ob.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Wd.set(t,u),u}Ib(r=>({...r,get:(t,n,s)=>pv(t,n)||r.get(t,n,s),has:(t,n)=>!!pv(t,n)||r.has(t,n)}));/**
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
 */class Vb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mb(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hm="@firebase/app",yv="0.13.1";/**
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
 */const Xi=new vh("@firebase/app"),Pb="@firebase/app-compat",xb="@firebase/analytics-compat",kb="@firebase/analytics",Ub="@firebase/app-check-compat",Lb="@firebase/app-check",zb="@firebase/auth",Bb="@firebase/auth-compat",qb="@firebase/database",jb="@firebase/data-connect",Hb="@firebase/database-compat",Fb="@firebase/functions",Gb="@firebase/functions-compat",Qb="@firebase/installations",Kb="@firebase/installations-compat",Yb="@firebase/messaging",Xb="@firebase/messaging-compat",$b="@firebase/performance",Zb="@firebase/performance-compat",Wb="@firebase/remote-config",Jb="@firebase/remote-config-compat",t1="@firebase/storage",e1="@firebase/storage-compat",n1="@firebase/firestore",i1="@firebase/ai",r1="@firebase/firestore-compat",s1="firebase",a1="11.9.0";/**
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
 */const fm="[DEFAULT]",o1={[hm]:"fire-core",[Pb]:"fire-core-compat",[kb]:"fire-analytics",[xb]:"fire-analytics-compat",[Lb]:"fire-app-check",[Ub]:"fire-app-check-compat",[zb]:"fire-auth",[Bb]:"fire-auth-compat",[qb]:"fire-rtdb",[jb]:"fire-data-connect",[Hb]:"fire-rtdb-compat",[Fb]:"fire-fn",[Gb]:"fire-fn-compat",[Qb]:"fire-iid",[Kb]:"fire-iid-compat",[Yb]:"fire-fcm",[Xb]:"fire-fcm-compat",[$b]:"fire-perf",[Zb]:"fire-perf-compat",[Wb]:"fire-rc",[Jb]:"fire-rc-compat",[t1]:"fire-gcs",[e1]:"fire-gcs-compat",[n1]:"fire-fst",[r1]:"fire-fst-compat",[i1]:"fire-vertex","fire-js":"fire-js",[s1]:"fire-js-all"};/**
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
 */const Xc=new Map,l1=new Map,dm=new Map;function _v(r,t){try{r.container.addComponent(t)}catch(n){Xi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function yi(r){const t=r.name;if(dm.has(t))return Xi.debug(`There were multiple attempts to register component ${t}.`),!1;dm.set(t,r);for(const n of Xc.values())_v(n,r);for(const n of l1.values())_v(n,r);return!0}function Ys(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function vn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const u1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ks("app","Firebase",u1);/**
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
 */class c1{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const io=a1;function dT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:fm,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw xr.create("bad-app-name",{appName:String(o)});if(n||(n=iT()),!n)throw xr.create("no-options");const u=Xc.get(o);if(u){if(Lr(n,u.options)&&Lr(s,u.config))return u;throw xr.create("duplicate-app",{appName:o})}const f=new yb(o);for(const p of dm.values())f.addComponent(p);const m=new c1(n,s,f);return Xc.set(o,m),m}function Um(r=fm){const t=Xc.get(r);if(!t&&r===fm&&iT())return dT();if(!t)throw xr.create("no-app",{appName:r});return t}function Un(r,t,n){var s;let o=(s=o1[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xi.warn(m.join(" "));return}yi(new Xn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const h1="firebase-heartbeat-database",f1=1,kl="firebase-heartbeat-store";let Jd=null;function mT(){return Jd||(Jd=fT(h1,f1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(r=>{throw xr.create("idb-open",{originalErrorMessage:r.message})})),Jd}async function d1(r){try{const n=(await mT()).transaction(kl),s=await n.objectStore(kl).get(gT(r));return await n.done,s}catch(t){if(t instanceof Zn)Xi.warn(t.message);else{const n=xr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xi.warn(n.message)}}}async function vv(r,t){try{const s=(await mT()).transaction(kl,"readwrite");await s.objectStore(kl).put(t,gT(r)),await s.done}catch(n){if(n instanceof Zn)Xi.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xi.warn(s.message)}}}function gT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const m1=1024,g1=30;class p1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ev();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>g1){const f=v1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Xi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ev(),{heartbeatsToSend:s,unsentEntries:o}=y1(this._heartbeatsCache.heartbeats),u=Yc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Xi.warn(n),""}}}function Ev(){return new Date().toISOString().substring(0,10)}function y1(r,t=m1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Tv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Tv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lT()?uT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Tv(r){return Yc(JSON.stringify({version:2,heartbeats:r})).length}function v1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function E1(r){yi(new Xn("platform-logger",t=>new Vb(t),"PRIVATE")),yi(new Xn("heartbeat",t=>new p1(t),"PRIVATE")),Un(hm,yv,r),Un(hm,yv,"esm2017"),Un("fire-js","")}E1("");var T1="firebase",A1="11.9.0";/**
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
 */Un(T1,A1,"app");const pT="@firebase/installations",Lm="0.6.17";/**
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
 */const yT=1e4,_T=`w:${Lm}`,vT="FIS_v2",S1="https://firebaseinstallations.googleapis.com/v1",w1=60*60*1e3,b1="installations",R1="Installations";/**
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
 */const I1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zs=new Ks(b1,R1,I1);function ET(r){return r instanceof Zn&&r.code.includes("request-failed")}/**
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
 */function TT({projectId:r}){return`${S1}/projects/${r}/installations`}function AT(r){return{token:r.token,requestStatus:2,expiresIn:D1(r.expiresIn),creationTime:Date.now()}}async function ST(r,t){const s=(await t.json()).error;return zs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function wT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function C1(r,{refreshToken:t}){const n=wT(r);return n.append("Authorization",O1(t)),n}async function bT(r){const t=await r();return t.status>=500&&t.status<600?r():t}function D1(r){return Number(r.replace("s","000"))}function O1(r){return`${vT} ${r}`}/**
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
 */async function N1({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=TT(r),o=wT(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:vT,appId:r.appId,sdkVersion:_T},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await bT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:AT(y.authToken)}}else throw await ST("Create Installation",p)}/**
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
 */function RT(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function V1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const M1=/^[cdef][\w-]{21}$/,mm="";function P1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=x1(r);return M1.test(n)?n:mm}catch{return mm}}function x1(r){return V1(r).substr(0,22)}/**
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
 */function Eh(r){return`${r.appName}!${r.appId}`}/**
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
 */const IT=new Map;function CT(r,t){const n=Eh(r);DT(n,t),k1(n,t)}function DT(r,t){const n=IT.get(r);if(n)for(const s of n)s(t)}function k1(r,t){const n=U1();n&&n.postMessage({key:r,fid:t}),L1()}let ks=null;function U1(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=r=>{DT(r.data.key,r.data.fid)}),ks}function L1(){IT.size===0&&ks&&(ks.close(),ks=null)}/**
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
 */const z1="firebase-installations-database",B1=1,Bs="firebase-installations-store";let tm=null;function zm(){return tm||(tm=fT(z1,B1,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Bs)}}})),tm}async function $c(r,t){const n=Eh(r),o=(await zm()).transaction(Bs,"readwrite"),u=o.objectStore(Bs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&CT(r,t.fid),t}async function OT(r){const t=Eh(r),s=(await zm()).transaction(Bs,"readwrite");await s.objectStore(Bs).delete(t),await s.done}async function Th(r,t){const n=Eh(r),o=(await zm()).transaction(Bs,"readwrite"),u=o.objectStore(Bs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&CT(r,m.fid),m}/**
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
 */async function Bm(r){let t;const n=await Th(r.appConfig,s=>{const o=q1(s),u=j1(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===mm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function q1(r){const t=r||{fid:P1(),registrationStatus:0};return NT(t)}function j1(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(zs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=H1(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:F1(r)}:{installationEntry:t}}async function H1(r,t){try{const n=await N1(r,t);return $c(r.appConfig,n)}catch(n){throw ET(n)&&n.customData.serverCode===409?await OT(r.appConfig):await $c(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function F1(r){let t=await Av(r.appConfig);for(;t.registrationStatus===1;)await RT(100),t=await Av(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Bm(r);return s||n}return t}function Av(r){return Th(r,t=>{if(!t)throw zs.create("installation-not-found");return NT(t)})}function NT(r){return G1(r)?{fid:r.fid,registrationStatus:0}:r}function G1(r){return r.registrationStatus===1&&r.registrationTime+yT<Date.now()}/**
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
 */async function Q1({appConfig:r,heartbeatServiceProvider:t},n){const s=K1(r,n),o=C1(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:_T,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await bT(()=>fetch(s,m));if(p.ok){const y=await p.json();return AT(y)}else throw await ST("Generate Auth Token",p)}function K1(r,{fid:t}){return`${TT(r)}/${t}/authTokens:generate`}/**
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
 */async function qm(r,t=!1){let n;const s=await Th(r.appConfig,u=>{if(!VT(u))throw zs.create("not-registered");const f=u.authToken;if(!t&&$1(f))return u;if(f.requestStatus===1)return n=Y1(r,t),u;{if(!navigator.onLine)throw zs.create("app-offline");const m=W1(u);return n=X1(r,m),m}});return n?await n:s.authToken}async function Y1(r,t){let n=await Sv(r.appConfig);for(;n.authToken.requestStatus===1;)await RT(100),n=await Sv(r.appConfig);const s=n.authToken;return s.requestStatus===0?qm(r,t):s}function Sv(r){return Th(r,t=>{if(!VT(t))throw zs.create("not-registered");const n=t.authToken;return J1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function X1(r,t){try{const n=await Q1(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await $c(r.appConfig,s),n}catch(n){if(ET(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OT(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await $c(r.appConfig,s)}throw n}}function VT(r){return r!==void 0&&r.registrationStatus===2}function $1(r){return r.requestStatus===2&&!Z1(r)}function Z1(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+w1}function W1(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function J1(r){return r.requestStatus===1&&r.requestTime+yT<Date.now()}/**
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
 */async function tR(r){const t=r,{installationEntry:n,registrationPromise:s}=await Bm(t);return s?s.catch(console.error):qm(t).catch(console.error),n.fid}/**
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
 */async function eR(r,t=!1){const n=r;return await nR(n),(await qm(n,t)).token}async function nR(r){const{registrationPromise:t}=await Bm(r);t&&await t}/**
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
 */function iR(r){if(!r||!r.options)throw em("App Configuration");if(!r.name)throw em("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw em(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function em(r){return zs.create("missing-app-config-values",{valueName:r})}/**
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
 */const MT="installations",rR="installations-internal",sR=r=>{const t=r.getProvider("app").getImmediate(),n=iR(t),s=Ys(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},aR=r=>{const t=r.getProvider("app").getImmediate(),n=Ys(t,MT).getImmediate();return{getId:()=>tR(n),getToken:o=>eR(n,o)}};function oR(){yi(new Xn(MT,sR,"PUBLIC")),yi(new Xn(rR,aR,"PRIVATE"))}oR();Un(pT,Lm);Un(pT,Lm,"esm2017");/**
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
 */const Zc="analytics",lR="firebase_id",uR="origin",cR=60*1e3,hR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jm="https://www.googletagmanager.com/gtag/js";/**
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
 */const ln=new vh("@firebase/analytics");/**
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
 */const fR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tn=new Ks("analytics","Analytics",fR);/**
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
 */function dR(r){if(!r.startsWith(jm)){const t=Tn.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(t.message),""}return r}function PT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function mR(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function gR(r,t){const n=mR("firebase-js-sdk-policy",{createScriptURL:dR}),s=document.createElement("script"),o=`${jm}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function pR(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function yR(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await PT(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){ln.error(m)}r("config",o,u)}async function _R(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await PT(n);for(const p of f){const y=m.find(w=>w.measurementId===p),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){ln.error(u)}}function vR(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await _R(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await yR(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){ln.error(m)}}return o}function ER(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=vR(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function TR(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(jm)&&n.src.includes(r))return n;return null}/**
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
 */const AR=30,SR=1e3;class wR{constructor(t={},n=SR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const xT=new wR;function bR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function RR(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:bR(s)},u=hR.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw Tn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function IR(r,t=xT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw Tn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Tn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new OR;return setTimeout(async()=>{m.abort()},cR),kT({appId:s,apiKey:o,measurementId:u},f,m,t)}async function kT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=xT){var u;const{appId:f,measurementId:m}=r;try{await CR(s,t)}catch(p){if(m)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await RR(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!DR(y)){if(o.deleteThrottleMetadata(f),m)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?dv(n,o.intervalMillis,AR):dv(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),ln.debug(`Calling attemptFetch again in ${E} millis`),kT(r,w,s,o)}}function CR(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(Tn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function DR(r){if(!(r instanceof Zn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class OR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function NR(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
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
 */async function VR(){if(lT())try{await uT()}catch(r){return ln.warn(Tn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ln.warn(Tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function MR(r,t,n,s,o,u,f){var m;const p=IR(r);p.then(q=>{n[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>ln.error(q)),t.push(p);const y=VR().then(q=>{if(q)return s.getId()}),[E,w]=await Promise.all([p,y]);TR(u)||gR(u,E.measurementId),o("js",new Date);const R=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return R[uR]="firebase",R.update=!0,w!=null&&(R[lR]=w),o("config",E.measurementId,R),E.measurementId}/**
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
 */class PR{constructor(t){this.app=t}_delete(){return delete Dl[this.app.options.appId],Promise.resolve()}}let Dl={},wv=[];const bv={};let nm="dataLayer",xR="gtag",Rv,UT,Iv=!1;function kR(){const r=[];if(oT()&&r.push("This is a browser extension environment."),nb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Tn.create("invalid-analytics-context",{errorInfo:t});ln.warn(n.message)}}function UR(r,t,n){kR();const s=r.options.appId;if(!s)throw Tn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tn.create("no-api-key");if(Dl[s]!=null)throw Tn.create("already-exists",{id:s});if(!Iv){pR(nm);const{wrappedGtag:u,gtagCore:f}=ER(Dl,wv,bv,nm,xR);UT=u,Rv=f,Iv=!0}return Dl[s]=MR(r,wv,bv,t,Rv,nm,n),new PR(r)}function LR(r=Um()){r=ce(r);const t=Ys(r,Zc);return t.isInitialized()?t.getImmediate():zR(r)}function zR(r,t={}){const n=Ys(r,Zc);if(n.isInitialized()){const o=n.getImmediate();if(Lr(t,n.getOptions()))return o;throw Tn.create("already-initialized")}return n.initialize({options:t})}function BR(r,t,n,s){r=ce(r),NR(UT,Dl[r.app.options.appId],t,n,s).catch(o=>ln.error(o))}const Cv="@firebase/analytics",Dv="0.10.16";function qR(){yi(new Xn(Zc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return UR(s,o,n)},"PUBLIC")),yi(new Xn("analytics-internal",r,"PRIVATE")),Un(Cv,Dv),Un(Cv,Dv,"esm2017");function r(t){try{const n=t.getProvider(Zc).getImmediate();return{logEvent:(s,o,u)=>BR(n,s,o,u)}}catch(n){throw Tn.create("interop-component-reg-failed",{reason:n})}}}qR();function Hm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function LT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jR=LT,zT=new Ks("auth","Firebase",LT());/**
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
 */const Wc=new vh("@firebase/auth");function HR(r,...t){Wc.logLevel<=Vt.WARN&&Wc.warn(`Auth (${io}): ${r}`,...t)}function Lc(r,...t){Wc.logLevel<=Vt.ERROR&&Wc.error(`Auth (${io}): ${r}`,...t)}/**
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
 */function Ln(r,...t){throw Gm(r,...t)}function Kn(r,...t){return Gm(r,...t)}function Fm(r,t,n){const s=Object.assign(Object.assign({},jR()),{[t]:n});return new Ks("auth","Firebase",s).create(t,{appName:r.name})}function Yi(r){return Fm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FR(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ln(r,"argument-error"),Fm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return zT.create(r,...t)}function Et(r,t,...n){if(!r)throw Gm(t,...n)}function Qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Lc(t),new Error(t)}function $i(r,t){r||Qi(t)}/**
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
 */function gm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function GR(){return Ov()==="http:"||Ov()==="https:"}function Ov(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function QR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GR()||oT()||"connection"in navigator)?navigator.onLine:!0}function KR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Yl{constructor(t,n){this.shortDelay=t,this.longDelay=n,$i(n>t,"Short delay should be less than long delay!"),this.isMobile=$w()||Jw()}get(){return QR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qm(r,t){$i(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class BT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$R=new Yl(3e4,6e4);function Gr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Qr(r,t,n,s,o={}){return qT(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Kl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return Ww()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Ql(r.emulatorConfig.host)&&(y.credentials="include"),BT.fetch()(await jT(r,r.config.apiHost,n,m),y)})}async function qT(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},YR),t);try{const o=new WR(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Nc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Nc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Nc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Fm(r,E,y);Ln(r,E)}}catch(o){if(o instanceof Zn)throw o;Ln(r,"network-request-failed",{message:String(o)})}}async function Xl(r,t,n,s,o={}){const u=await Qr(r,t,n,s,o);return"mfaPendingCredential"in u&&Ln(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function jT(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Qm(r.config,o):`${r.config.apiScheme}://${o}`;return XR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function ZR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Kn(this.auth,"network-request-failed")),$R.get())})}}function Nc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Kn(r,t,s);return o.customData._tokenResponse=n,o}function Nv(r){return r!==void 0&&r.enterprise!==void 0}class JR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return ZR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tI(r,t){return Qr(r,"GET","/v2/recaptchaConfig",Gr(r,t))}/**
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
 */async function eI(r,t){return Qr(r,"POST","/v1/accounts:delete",t)}async function Jc(r,t){return Qr(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ol(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nI(r,t=!1){const n=ce(r),s=await n.getIdToken(t),o=Km(s);Et(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ol(im(o.auth_time)),issuedAtTime:Ol(im(o.iat)),expirationTime:Ol(im(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function im(r){return Number(r)*1e3}function Km(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=eT(n);return o?JSON.parse(o):(Lc("Failed to decode base64 JWT payload"),null)}catch(o){return Lc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Vv(r){const t=Km(r);return Et(t,"internal-error"),Et(typeof t.exp<"u","internal-error"),Et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ul(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Zn&&iI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function iI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class rI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ol(this.lastLoginAt),this.creationTime=Ol(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function th(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ul(r,Jc(n,{idToken:s}));Et(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?HT(u.providerUserInfo):[],m=aI(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new pm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,w)}async function sI(r){const t=ce(r);await th(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function aI(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function HT(r){return r.map(t=>{var{providerId:n}=t,s=Hm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function oI(r,t){const n=await qT(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await jT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",BT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lI(r,t){return Qr(r,"POST","/v2/accounts:revokeToken",Gr(r,t))}/**
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
 */class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Et(t.idToken,"internal-error"),Et(typeof t.idToken<"u","internal-error"),Et(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Et(t.length!==0,"internal-error");const n=Vv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await oI(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ka;return s&&(Et(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Et(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(Et(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return Qi("not implemented")}}/**
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
 */function Cr(r,t){Et(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Qn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Hm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ul(this,this.stsTokenManager.getToken(this.auth,t));return Et(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return nI(this,t)}reload(){return sI(this)}_assign(t){this!==t&&(Et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await th(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Yi(this.auth));const t=await this.getIdToken();return await Ul(this,eI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,p,y,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,R=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,et=(m=n.tenantId)!==null&&m!==void 0?m:void 0,Z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Tt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,dt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:lt,emailVerified:Dt,isAnonymous:yt,providerData:It,stsTokenManager:V}=n;Et(lt&&V,t,"internal-error");const S=Ka.fromJSON(this.name,V);Et(typeof lt=="string",t,"internal-error"),Cr(w,t.name),Cr(R,t.name),Et(typeof Dt=="boolean",t,"internal-error"),Et(typeof yt=="boolean",t,"internal-error"),Cr(q,t.name),Cr($,t.name),Cr(et,t.name),Cr(Z,t.name),Cr(Tt,t.name),Cr(dt,t.name);const I=new Qn({uid:lt,auth:t,email:R,emailVerified:Dt,displayName:w,isAnonymous:yt,photoURL:$,phoneNumber:q,tenantId:et,stsTokenManager:S,createdAt:Tt,lastLoginAt:dt});return It&&Array.isArray(It)&&(I.providerData=It.map(N=>Object.assign({},N))),Z&&(I._redirectEventId=Z),I}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ka;o.updateFromServerResponse(n);const u=new Qn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await th(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Et(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?HT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ka;m.updateFromIdToken(s);const p=new Qn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new pm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const Mv=new Map;function Ki(r){$i(r instanceof Function,"Expected a class definition");let t=Mv.get(r);return t?($i(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Mv.set(r,t),t)}/**
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
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}FT.type="NONE";const Pv=FT;/**
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
 */function zc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ya{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=zc(this.userKey,o.apiKey,u),this.fullPersistenceKey=zc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Jc(this.auth,{idToken:t}).catch(()=>{});return n?Qn._fromGetAccountInfoResponse(this.auth,n,t):null}return Qn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ya(Ki(Pv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ki(Pv);const f=zc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let w;if(typeof E=="string"){const R=await Jc(t,{idToken:E}).catch(()=>{});if(!R)break;w=await Qn._fromGetAccountInfoResponse(t,R,E)}else w=Qn._fromJSON(t,E);y!==u&&(m=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ya(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ya(u,t,s))}}/**
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
 */function xv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(GT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($T(t))return"Blackberry";if(ZT(t))return"Webos";if(QT(t))return"Safari";if((t.includes("chrome/")||KT(t))&&!t.includes("edge/"))return"Chrome";if(XT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function GT(r=Ze()){return/firefox\//i.test(r)}function QT(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function KT(r=Ze()){return/crios\//i.test(r)}function YT(r=Ze()){return/iemobile/i.test(r)}function XT(r=Ze()){return/android/i.test(r)}function $T(r=Ze()){return/blackberry/i.test(r)}function ZT(r=Ze()){return/webos/i.test(r)}function Ym(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function uI(r=Ze()){var t;return Ym(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function cI(){return tb()&&document.documentMode===10}function WT(r=Ze()){return Ym(r)||XT(r)||ZT(r)||$T(r)||/windows phone/i.test(r)||YT(r)}/**
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
 */function JT(r,t=[]){let n;switch(r){case"Browser":n=xv(Ze());break;case"Worker":n=`${xv(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${s}`}/**
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
 */class hI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function fI(r,t={}){return Qr(r,"GET","/v2/passwordPolicy",Gr(r,t))}/**
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
 */const dI=6;class mI{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:dI,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class gI{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kv(this),this.idTokenSubscription=new kv(this),this.beforeStateQueue=new hI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ya.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Jc(this,{idToken:t}),s=await Qn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(vn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await th(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=KR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(vn(this.app))return Promise.reject(Yi(this));const n=t?ce(t):null;return n&&Et(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return vn(this.app)?Promise.reject(Yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fI(this),n=new mI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ks("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await lI(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;Et(n,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Et(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=JT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&HR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kr(r){return ce(r)}class kv{constructor(t){this.auth=t,this.observer=null,this.addObserver=ob(n=>this.observer=n)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(r){Ah=r}function t0(r){return Ah.loadJS(r)}function yI(){return Ah.recaptchaEnterpriseScript}function _I(){return Ah.gapiScript}function vI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class EI{constructor(){this.enterprise=new TI}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class TI{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const AI="recaptcha-enterprise",e0="NO_RECAPTCHA";class SI{constructor(t){this.type=AI,this.auth=Kr(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{tI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new JR(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Nv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(e0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new EI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Nv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yI();p.length!==0&&(p+=m),t0(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Uv(r,t,n,s=!1,o=!1){const u=new SI(r);let f;if(o)f=e0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ym(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Uv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Uv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
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
 */function wI(r,t){const n=Ys(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Lr(u,t??{}))return o;Ln(o,"already-initialized")}return n.initialize({options:t})}function bI(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function RI(r,t,n){const s=Kr(r);Et(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=n0(t),{host:f,port:m}=II(t),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Et(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Et(Lr(y,s.config.emulator)&&Lr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ql(f)?(sT(`${u}//${f}${p}`),aT("Auth",!0)):CI()}function n0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function II(r){const t=n0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Lv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Lv(f)}}}function Lv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function CI(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Xm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qi("not implemented")}_getIdTokenResponse(t){return Qi("not implemented")}_linkToIdToken(t,n){return Qi("not implemented")}_getReauthenticationResolver(t){return Qi("not implemented")}}async function DI(r,t){return Qr(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function OI(r,t){return Xl(r,"POST","/v1/accounts:signInWithPassword",Gr(r,t))}/**
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
 */async function NI(r,t){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}async function VI(r,t){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}/**
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
 */class Ll extends Xm{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Ll(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Ll(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ym(t,n,"signInWithPassword",OI);case"emailLink":return NI(t,{email:this._email,oobCode:this._password});default:Ln(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ym(t,s,"signUpPassword",DI);case"emailLink":return VI(t,{idToken:n,email:this._email,oobCode:this._password});default:Ln(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Xa(r,t){return Xl(r,"POST","/v1/accounts:signInWithIdp",Gr(r,t))}/**
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
 */const MI="http://localhost";class qs extends Xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Hm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Xa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Xa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Xa(t,n)}buildRequest(){const t={requestUri:MI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Kl(n)}return t}}/**
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
 */function PI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xI(r){const t=Al(Sl(r)).link,n=t?Al(Sl(t)).deep_link_id:null,s=Al(Sl(r)).deep_link_id;return(s?Al(Sl(s)).link:null)||s||n||t||r}class $m{constructor(t){var n,s,o,u,f,m;const p=Al(Sl(t)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,w=PI((o=p.mode)!==null&&o!==void 0?o:null);Et(y&&E&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=xI(t);try{return new $m(n)}catch{return null}}}/**
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
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(t,n){return Ll._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=$m.parseLink(n);return Et(s,"argument-error"),Ll._fromEmailAndCode(t,s.code,s.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends Zm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends $l{constructor(){super("facebook.com")}static credential(t){return qs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Gi extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qs._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Gi.credentialFromTaggedObject(t)}static credentialFromError(t){return Gi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Gi.credential(n,s)}catch{return null}}}Gi.GOOGLE_SIGN_IN_METHOD="google.com";Gi.PROVIDER_ID="google.com";/**
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
 */class Or extends $l{constructor(){super("github.com")}static credential(t){return qs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class Nr extends $l{constructor(){super("twitter.com")}static credential(t,n){return qs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function kI(r,t){return Xl(r,"POST","/v1/accounts:signUp",Gr(r,t))}/**
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
 */class js{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Qn._fromIdTokenResponse(t,s,o),f=zv(s);return new js({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=zv(s);return new js({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function zv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class eh extends Zn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,eh.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new eh(t,n,s,o)}}function i0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?eh._fromErrorAndOperation(r,u,t,s):u})}async function UI(r,t,n=!1){const s=await Ul(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return js._forOperation(r,"link",s)}/**
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
 */async function LI(r,t,n=!1){const{auth:s}=r;if(vn(s.app))return Promise.reject(Yi(s));const o="reauthenticate";try{const u=await Ul(r,i0(s,o,t,r),n);Et(u.idToken,s,"internal-error");const f=Km(u.idToken);Et(f,s,"internal-error");const{sub:m}=f;return Et(r.uid===m,s,"user-mismatch"),js._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ln(s,"user-mismatch"),u}}/**
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
 */async function r0(r,t,n=!1){if(vn(r.app))return Promise.reject(Yi(r));const s="signIn",o=await i0(r,s,t),u=await js._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function zI(r,t){return r0(Kr(r),t)}/**
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
 */async function s0(r){const t=Kr(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function BI(r,t,n){if(vn(r.app))return Promise.reject(Yi(r));const s=Kr(r),f=await ym(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kI).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&s0(r),p}),m=await js._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function qI(r,t,n){return vn(r.app)?Promise.reject(Yi(r)):zI(ce(r),ro.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&s0(r),s})}function jI(r,t,n,s){return ce(r).onIdTokenChanged(t,n,s)}function HI(r,t,n){return ce(r).beforeAuthStateChanged(t,n)}function FI(r,t,n,s){return ce(r).onAuthStateChanged(t,n,s)}function GI(r){return ce(r).signOut()}const nh="__sak";/**
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
 */class a0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nh,"1"),this.storage.removeItem(nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QI=1e3,KI=10;class o0 extends a0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);cI()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,KI):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}o0.type="LOCAL";const YI=o0;/**
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
 */class l0 extends a0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}l0.type="SESSION";const u0=l0;/**
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
 */function XI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new Sh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await XI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
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
 */function Wm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class $I{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Wm("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const R=w;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function gi(){return window}function ZI(r){gi().location.href=r}/**
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
 */function c0(){return typeof gi().WorkerGlobalScope<"u"&&typeof gi().importScripts=="function"}async function WI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function tC(){return c0()?self:null}/**
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
 */const h0="firebaseLocalStorageDb",eC=1,ih="firebaseLocalStorage",f0="fbase_key";class Zl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wh(r,t){return r.transaction([ih],t?"readwrite":"readonly").objectStore(ih)}function nC(){const r=indexedDB.deleteDatabase(h0);return new Zl(r).toPromise()}function _m(){const r=indexedDB.open(h0,eC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ih,{keyPath:f0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ih)?t(s):(s.close(),await nC(),t(await _m()))})})}async function Bv(r,t,n){const s=wh(r,!0).put({[f0]:t,value:n});return new Zl(s).toPromise()}async function iC(r,t){const n=wh(r,!1).get(t),s=await new Zl(n).toPromise();return s===void 0?null:s.value}function qv(r,t){const n=wh(r,!0).delete(t);return new Zl(n).toPromise()}const rC=800,sC=3;class d0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _m(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>sC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(tC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await WI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||JI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _m();return await Bv(t,nh,"1"),await qv(t,nh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>iC(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=wh(o,!1).getAll();return new Zl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d0.type="LOCAL";const aC=d0;new Yl(3e4,6e4);/**
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
 */function m0(r,t){return t?Ki(t):(Et(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Jm extends Xm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Xa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Xa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function oC(r){return r0(r.auth,new Jm(r),r.bypassAuthState)}function lC(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),LI(n,new Jm(r),r.bypassAuthState)}async function uC(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),UI(n,new Jm(r),r.bypassAuthState)}/**
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
 */class g0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return lC;default:Ln(this.auth,"internal-error")}}resolve(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new Yl(2e3,1e4);async function hC(r,t,n){if(vn(r.app))return Promise.reject(Kn(r,"operation-not-supported-in-this-environment"));const s=Kr(r);FR(r,t,Zm);const o=m0(s,n);return new Us(s,"signInViaPopup",t,o).executeNotNull()}class Us extends g0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Et(t,this.auth,"internal-error"),t}async onExecution(){$i(this.filter.length===1,"Popup operations only handle one event");const t=Wm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cC.get())};t()}}Us.currentPopupAction=null;/**
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
 */const fC="pendingRedirect",Bc=new Map;class dC extends g0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Bc.get(this.auth._key());if(!t){try{const s=await mC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Bc.set(this.auth._key(),t)}return this.bypassAuthState||Bc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mC(r,t){const n=yC(t),s=pC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function gC(r,t){Bc.set(r._key(),t)}function pC(r){return Ki(r._redirectPersistence)}function yC(r){return zc(fC,r.config.apiKey,r.name)}async function _C(r,t,n=!1){if(vn(r.app))return Promise.reject(Yi(r));const s=Kr(r),o=m0(s,t),f=await new dC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const vC=10*60*1e3;class EC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!TC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!p0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vC&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(t))}saveEventToCache(t){this.cachedEventUids.add(jv(t)),this.lastProcessedEventTime=Date.now()}}function jv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function p0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function TC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p0(r);default:return!1}}/**
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
 */async function AC(r,t={}){return Qr(r,"GET","/v1/projects",t)}/**
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
 */const SC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wC=/^https?/;async function bC(r){if(r.config.emulator)return;const{authorizedDomains:t}=await AC(r);for(const n of t)try{if(RC(n))return}catch{}Ln(r,"unauthorized-domain")}function RC(r){const t=gm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!wC.test(n))return!1;if(SC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const IC=new Yl(3e4,6e4);function Hv(){const r=gi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function CC(r){return new Promise((t,n)=>{var s,o,u;function f(){Hv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hv(),n(Kn(r,"network-request-failed"))},timeout:IC.get()})}if(!((o=(s=gi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=gi().gapi)===null||u===void 0)&&u.load)f();else{const m=vI("iframefcb");return gi()[m]=()=>{gapi.load?f():n(Kn(r,"network-request-failed"))},t0(`${_I()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw qc=null,t})}let qc=null;function DC(r){return qc=qc||CC(r),qc}/**
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
 */const OC=new Yl(5e3,15e3),NC="__/auth/iframe",VC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xC(r){const t=r.config;Et(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Qm(t,VC):`https://${r.config.authDomain}/${NC}`,s={apiKey:t.apiKey,appName:r.name,v:io},o=PC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function kC(r){const t=await DC(r),n=gi().gapi;return Et(n,r,"internal-error"),t.open({where:document.body,url:xC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Kn(r,"network-request-failed"),m=gi().setTimeout(()=>{u(f)},OC.get());function p(){gi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,zC=600,BC="_blank",qC="http://localhost";class Fv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(r,t,n,s=LC,o=zC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},UC),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Ze().toLowerCase();n&&(m=KT(y)?BC:n),GT(y)&&(t=t||qC,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[q,$])=>`${R}${q}=${$},`,"");if(uI(y)&&m!=="_self")return HC(t||"",m),new Fv(null);const w=window.open(t||"",m,E);Et(w,r,"popup-blocked");try{w.focus()}catch{}return new Fv(w)}function HC(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FC="__/auth/handler",GC="emulator/auth/handler",QC=encodeURIComponent("fac");async function Gv(r,t,n,s,o,u){Et(r.config.authDomain,r,"auth-domain-config-required"),Et(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:io,eventId:o};if(t instanceof Zm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",ab(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(t instanceof $l){const E=t.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${QC}=${encodeURIComponent(p)}`:"";return`${KC(r)}?${Kl(m).slice(1)}${y}`}function KC({config:r}){return r.emulator?Qm(r,GC):`https://${r.authDomain}/${FC}`}/**
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
 */const rm="webStorageSupport";class YC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u0,this._completeRedirectFn=_C,this._overrideRedirectResult=gC}async _openPopup(t,n,s,o){var u;$i((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Gv(t,n,s,gm(),o);return jC(t,f,Wm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Gv(t,n,s,gm(),o);return ZI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):($i(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await kC(t),s=new EC(t);return n.register("authEvent",o=>(Et(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(rm,{type:rm},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[rm];f!==void 0&&n(!!f),Ln(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||QT()||Ym()}}const XC=YC;var Qv="@firebase/auth",Kv="1.10.6";/**
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
 */class $C{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WC(r){yi(new Xn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Et(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JT(r)},y=new gI(s,o,u,p);return bI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),yi(new Xn("auth-internal",t=>{const n=Kr(t.getProvider("auth").getImmediate());return(s=>new $C(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Qv,Kv,ZC(r)),Un(Qv,Kv,"esm2017")}/**
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
 */const JC=5*60,t2=rT("authIdTokenMaxAge")||JC;let Yv=null;const e2=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>t2)return;const o=n==null?void 0:n.token;Yv!==o&&(Yv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function n2(r=Um()){const t=Ys(r,"auth");if(t.isInitialized())return t.getImmediate();const n=wI(r,{popupRedirectResolver:XC,persistence:[aC,YI,u0]}),s=rT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=e2(u.toString());HI(n,f,()=>f(n.currentUser)),jI(n,m=>f(m))}}const o=nT("auth");return o&&RI(n,`http://${o}`),n}function i2(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}pI({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Kn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",i2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WC("Browser");var Xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,y0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,S){function I(){}I.prototype=S.prototype,V.D=S.prototype,V.prototype=new I,V.prototype.constructor=V,V.C=function(N,M,P){for(var C=Array(arguments.length-2),Zt=2;Zt<arguments.length;Zt++)C[Zt-2]=arguments[Zt];return S.prototype[M].apply(N,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,S,I){I||(I=0);var N=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)N[M]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(M=0;16>M;++M)N[M]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=V.g[0],I=V.g[1],M=V.g[2];var P=V.g[3],C=S+(P^I&(M^P))+N[0]+3614090360&4294967295;S=I+(C<<7&4294967295|C>>>25),C=P+(M^S&(I^M))+N[1]+3905402710&4294967295,P=S+(C<<12&4294967295|C>>>20),C=M+(I^P&(S^I))+N[2]+606105819&4294967295,M=P+(C<<17&4294967295|C>>>15),C=I+(S^M&(P^S))+N[3]+3250441966&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(P^I&(M^P))+N[4]+4118548399&4294967295,S=I+(C<<7&4294967295|C>>>25),C=P+(M^S&(I^M))+N[5]+1200080426&4294967295,P=S+(C<<12&4294967295|C>>>20),C=M+(I^P&(S^I))+N[6]+2821735955&4294967295,M=P+(C<<17&4294967295|C>>>15),C=I+(S^M&(P^S))+N[7]+4249261313&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(P^I&(M^P))+N[8]+1770035416&4294967295,S=I+(C<<7&4294967295|C>>>25),C=P+(M^S&(I^M))+N[9]+2336552879&4294967295,P=S+(C<<12&4294967295|C>>>20),C=M+(I^P&(S^I))+N[10]+4294925233&4294967295,M=P+(C<<17&4294967295|C>>>15),C=I+(S^M&(P^S))+N[11]+2304563134&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(P^I&(M^P))+N[12]+1804603682&4294967295,S=I+(C<<7&4294967295|C>>>25),C=P+(M^S&(I^M))+N[13]+4254626195&4294967295,P=S+(C<<12&4294967295|C>>>20),C=M+(I^P&(S^I))+N[14]+2792965006&4294967295,M=P+(C<<17&4294967295|C>>>15),C=I+(S^M&(P^S))+N[15]+1236535329&4294967295,I=M+(C<<22&4294967295|C>>>10),C=S+(M^P&(I^M))+N[1]+4129170786&4294967295,S=I+(C<<5&4294967295|C>>>27),C=P+(I^M&(S^I))+N[6]+3225465664&4294967295,P=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(P^S))+N[11]+643717713&4294967295,M=P+(C<<14&4294967295|C>>>18),C=I+(P^S&(M^P))+N[0]+3921069994&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^P&(I^M))+N[5]+3593408605&4294967295,S=I+(C<<5&4294967295|C>>>27),C=P+(I^M&(S^I))+N[10]+38016083&4294967295,P=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(P^S))+N[15]+3634488961&4294967295,M=P+(C<<14&4294967295|C>>>18),C=I+(P^S&(M^P))+N[4]+3889429448&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^P&(I^M))+N[9]+568446438&4294967295,S=I+(C<<5&4294967295|C>>>27),C=P+(I^M&(S^I))+N[14]+3275163606&4294967295,P=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(P^S))+N[3]+4107603335&4294967295,M=P+(C<<14&4294967295|C>>>18),C=I+(P^S&(M^P))+N[8]+1163531501&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(M^P&(I^M))+N[13]+2850285829&4294967295,S=I+(C<<5&4294967295|C>>>27),C=P+(I^M&(S^I))+N[2]+4243563512&4294967295,P=S+(C<<9&4294967295|C>>>23),C=M+(S^I&(P^S))+N[7]+1735328473&4294967295,M=P+(C<<14&4294967295|C>>>18),C=I+(P^S&(M^P))+N[12]+2368359562&4294967295,I=M+(C<<20&4294967295|C>>>12),C=S+(I^M^P)+N[5]+4294588738&4294967295,S=I+(C<<4&4294967295|C>>>28),C=P+(S^I^M)+N[8]+2272392833&4294967295,P=S+(C<<11&4294967295|C>>>21),C=M+(P^S^I)+N[11]+1839030562&4294967295,M=P+(C<<16&4294967295|C>>>16),C=I+(M^P^S)+N[14]+4259657740&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^P)+N[1]+2763975236&4294967295,S=I+(C<<4&4294967295|C>>>28),C=P+(S^I^M)+N[4]+1272893353&4294967295,P=S+(C<<11&4294967295|C>>>21),C=M+(P^S^I)+N[7]+4139469664&4294967295,M=P+(C<<16&4294967295|C>>>16),C=I+(M^P^S)+N[10]+3200236656&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^P)+N[13]+681279174&4294967295,S=I+(C<<4&4294967295|C>>>28),C=P+(S^I^M)+N[0]+3936430074&4294967295,P=S+(C<<11&4294967295|C>>>21),C=M+(P^S^I)+N[3]+3572445317&4294967295,M=P+(C<<16&4294967295|C>>>16),C=I+(M^P^S)+N[6]+76029189&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(I^M^P)+N[9]+3654602809&4294967295,S=I+(C<<4&4294967295|C>>>28),C=P+(S^I^M)+N[12]+3873151461&4294967295,P=S+(C<<11&4294967295|C>>>21),C=M+(P^S^I)+N[15]+530742520&4294967295,M=P+(C<<16&4294967295|C>>>16),C=I+(M^P^S)+N[2]+3299628645&4294967295,I=M+(C<<23&4294967295|C>>>9),C=S+(M^(I|~P))+N[0]+4096336452&4294967295,S=I+(C<<6&4294967295|C>>>26),C=P+(I^(S|~M))+N[7]+1126891415&4294967295,P=S+(C<<10&4294967295|C>>>22),C=M+(S^(P|~I))+N[14]+2878612391&4294967295,M=P+(C<<15&4294967295|C>>>17),C=I+(P^(M|~S))+N[5]+4237533241&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~P))+N[12]+1700485571&4294967295,S=I+(C<<6&4294967295|C>>>26),C=P+(I^(S|~M))+N[3]+2399980690&4294967295,P=S+(C<<10&4294967295|C>>>22),C=M+(S^(P|~I))+N[10]+4293915773&4294967295,M=P+(C<<15&4294967295|C>>>17),C=I+(P^(M|~S))+N[1]+2240044497&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~P))+N[8]+1873313359&4294967295,S=I+(C<<6&4294967295|C>>>26),C=P+(I^(S|~M))+N[15]+4264355552&4294967295,P=S+(C<<10&4294967295|C>>>22),C=M+(S^(P|~I))+N[6]+2734768916&4294967295,M=P+(C<<15&4294967295|C>>>17),C=I+(P^(M|~S))+N[13]+1309151649&4294967295,I=M+(C<<21&4294967295|C>>>11),C=S+(M^(I|~P))+N[4]+4149444226&4294967295,S=I+(C<<6&4294967295|C>>>26),C=P+(I^(S|~M))+N[11]+3174756917&4294967295,P=S+(C<<10&4294967295|C>>>22),C=M+(S^(P|~I))+N[2]+718787259&4294967295,M=P+(C<<15&4294967295|C>>>17),C=I+(P^(M|~S))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+P&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var I=S-this.blockSize,N=this.B,M=this.h,P=0;P<S;){if(M==0)for(;P<=I;)o(this,V,P),P+=this.blockSize;if(typeof V=="string"){for(;P<S;)if(N[M++]=V.charCodeAt(P++),M==this.blockSize){o(this,N),M=0;break}}else for(;P<S;)if(N[M++]=V[P++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var I=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=I&255,I/=256;for(this.u(V),V=Array(16),S=I=0;4>S;++S)for(var N=0;32>N;N+=8)V[I++]=this.g[S]>>>N&255;return V};function u(V,S){var I=m;return Object.prototype.hasOwnProperty.call(I,V)?I[V]:I[V]=S(V)}function f(V,S){this.h=S;for(var I=[],N=!0,M=V.length-1;0<=M;M--){var P=V[M]|0;N&&P==S||(I[M]=P,N=!1)}this.g=I}var m={};function p(V){return-128<=V&&128>V?u(V,function(S){return new f([S|0],0>S?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return w;if(0>V)return Z(y(-V));for(var S=[],I=1,N=0;V>=I;N++)S[N]=V/I|0,I*=4294967296;return new f(S,0)}function E(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return Z(E(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(S,8)),N=w,M=0;M<V.length;M+=8){var P=Math.min(8,V.length-M),C=parseInt(V.substring(M,M+P),S);8>P?(P=y(Math.pow(S,P)),N=N.j(P).add(y(C))):(N=N.j(I),N=N.add(y(C)))}return N}var w=p(0),R=p(1),q=p(16777216);r=f.prototype,r.m=function(){if(et(this))return-Z(this).m();for(var V=0,S=1,I=0;I<this.g.length;I++){var N=this.i(I);V+=(0<=N?N:4294967296+N)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(et(this))return"-"+Z(this).toString(V);for(var S=y(Math.pow(V,6)),I=this,N="";;){var M=Dt(I,S).g;I=Tt(I,M.j(S));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(V);if(I=M,$(I))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function et(V){return V.h==-1}r.l=function(V){return V=Tt(this,V),et(V)?-1:$(V)?0:1};function Z(V){for(var S=V.g.length,I=[],N=0;N<S;N++)I[N]=~V.g[N];return new f(I,~V.h).add(R)}r.abs=function(){return et(this)?Z(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0,M=0;M<=S;M++){var P=N+(this.i(M)&65535)+(V.i(M)&65535),C=(P>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=C>>>16,P&=65535,C&=65535,I[M]=C<<16|P}return new f(I,I[I.length-1]&-2147483648?-1:0)};function Tt(V,S){return V.add(Z(S))}r.j=function(V){if($(this)||$(V))return w;if(et(this))return et(V)?Z(this).j(Z(V)):Z(Z(this).j(V));if(et(V))return Z(this.j(Z(V)));if(0>this.l(q)&&0>V.l(q))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,I=[],N=0;N<2*S;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var P=this.i(N)>>>16,C=this.i(N)&65535,Zt=V.i(M)>>>16,ee=V.i(M)&65535;I[2*N+2*M]+=C*ee,dt(I,2*N+2*M),I[2*N+2*M+1]+=P*ee,dt(I,2*N+2*M+1),I[2*N+2*M+1]+=C*Zt,dt(I,2*N+2*M+1),I[2*N+2*M+2]+=P*Zt,dt(I,2*N+2*M+2)}for(N=0;N<S;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=S;N<2*S;N++)I[N]=0;return new f(I,0)};function dt(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function lt(V,S){this.g=V,this.h=S}function Dt(V,S){if($(S))throw Error("division by zero");if($(V))return new lt(w,w);if(et(V))return S=Dt(Z(V),S),new lt(Z(S.g),Z(S.h));if(et(S))return S=Dt(V,Z(S)),new lt(Z(S.g),S.h);if(30<V.g.length){if(et(V)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var I=R,N=S;0>=N.l(V);)I=yt(I),N=yt(N);var M=It(I,1),P=It(N,1);for(N=It(N,2),I=It(I,2);!$(N);){var C=P.add(N);0>=C.l(V)&&(M=M.add(I),P=C),N=It(N,1),I=It(I,1)}return S=Tt(V,M.j(S)),new lt(M,S)}for(M=w;0<=V.l(S);){for(I=Math.max(1,Math.floor(V.m()/S.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=y(I),C=P.j(S);et(C)||0<C.l(V);)I-=N,P=y(I),C=P.j(S);$(P)&&(P=R),M=M.add(P),V=Tt(V,C)}return new lt(M,V)}r.A=function(V){return Dt(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)&V.i(N);return new f(I,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)|V.i(N);return new f(I,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],N=0;N<S;N++)I[N]=this.i(N)^V.i(N);return new f(I,this.h^V.h)};function yt(V){for(var S=V.g.length+1,I=[],N=0;N<S;N++)I[N]=V.i(N)<<1|V.i(N-1)>>>31;return new f(I,V.h)}function It(V,S){var I=S>>5;S%=32;for(var N=V.g.length-I,M=[],P=0;P<N;P++)M[P]=0<S?V.i(P+I)>>>S|V.i(P+I+1)<<32-S:V.i(P+I);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,y0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,kr=f}).apply(typeof Xv<"u"?Xv:typeof self<"u"?self:typeof window<"u"?window:{});var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _0,wl,v0,jc,vm,E0,T0,A0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vc=="object"&&Vc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var j=_++;return{value:g(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function R(c,g,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,R.apply(null,arguments)}function q(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function $(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,j){for(var tt=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)tt[kt-2]=arguments[kt];return g.prototype[k].apply(A,tt)}}function et(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function Z(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const k=c.length||0,j=A.length||0;c.length=k+j;for(let tt=0;tt<j;tt++)c[k+tt]=A[tt]}else c.push(A)}}class Tt{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function dt(c){return/^[\s\xa0]*$/.test(c)}function lt(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Dt(c){return Dt[" "](c),c}Dt[" "]=function(){};var yt=lt().indexOf("Gecko")!=-1&&!(lt().toLowerCase().indexOf("webkit")!=-1&&lt().indexOf("Edge")==-1)&&!(lt().indexOf("Trident")!=-1||lt().indexOf("MSIE")!=-1)&&lt().indexOf("Edge")==-1;function It(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function V(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let j=0;j<I.length;j++)_=I[j],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function M(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function P(c){m.setTimeout(()=>{throw c},0)}function C(){var c=xt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Zt{constructor(){this.h=this.g=null}add(g,_){const A=ee.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ee=new Tt(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ot=!1,xt=new Zt,D=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(X)}};var X=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){P(_)}var g=ee;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ot=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function mt(c,g){if(W.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(yt){t:{try{Dt(g.nodeName);var k=!0;break t}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:gt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&mt.aa.h.call(this)}}$(mt,W);var gt={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),Bt=0;function un(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++Bt,this.da=this.fa=!1}function Ji(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function vi(c){this.src=c,this.g={},this.h=0}vi.prototype.add=function(c,g,_,A,k){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var tt=Jr(c,g,A,k);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new un(g,this.src,j,!!A,k),g.fa=_,c.push(g)),g};function Wr(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),j;(j=0<=k)&&Array.prototype.splice.call(A,k,1),j&&(Ji(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Jr(c,g,_,A){for(var k=0;k<c.length;++k){var j=c[k];if(!j.da&&j.listener==g&&j.capture==!!_&&j.ha==A)return k}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),co={};function ou(c,g,_,A,k){if(Array.isArray(g)){for(var j=0;j<g.length;j++)ou(c,g[j],_,A,k);return null}return _=lu(_),c&&c[ne]?c.K(g,_,y(A)?!!A.capture:!1,k):Sn(c,g,_,!1,A,k)}function Sn(c,g,_,A,k,j){if(!g)throw Error("Invalid event type");var tt=y(k)?!!k.capture:!!k,kt=Ws(c);if(kt||(c[ts]=kt=new vi(c)),_=kt.add(g,_,A,tt,j),_.proxy)return _;if(A=jh(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)J||(k=tt),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(es(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function jh(){function c(_){return g.call(c.src,c.listener,_)}const g=Hh;return c}function ho(c,g,_,A,k){if(Array.isArray(g))for(var j=0;j<g.length;j++)ho(c,g[j],_,A,k);else A=y(A)?!!A.capture:!!A,_=lu(_),c&&c[ne]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],_=Jr(j,_,A,k),-1<_&&(Ji(j[_]),Array.prototype.splice.call(j,_,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ws(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Jr(g,_,A,k)),(_=-1<c?g[c]:null)&&Zs(_))}function Zs(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ne])Wr(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(es(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Ws(g))?(Wr(_,c),_.h==0&&(_.src=null,g[ts]=null)):Ji(c)}}}function es(c){return c in co?co[c]:co[c]="on"+c}function Hh(c,g){if(c.da)c=!0;else{g=new mt(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Zs(c),c=_.call(A,g)}return c}function Ws(c){return c=c[ts],c instanceof vi?c:null}var fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(c){return typeof c=="function"?c:(c[fo]||(c[fo]=function(g){return c.handleEvent(g)}),c[fo])}function oe(){it.call(this),this.i=new vi(this),this.M=this,this.F=null}$(oe,it),oe.prototype[ne]=!0,oe.prototype.removeEventListener=function(c,g,_,A){ho(this,c,g,_,A)};function Ft(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new W(g,c);else if(g instanceof W)g.target=g.target||c;else{var k=g;g=new W(A,c),N(g,k)}if(k=!0,_)for(var j=_.length-1;0<=j;j--){var tt=g.g=_[j];k=cn(tt,A,!0,g)&&k}if(tt=g.g=c,k=cn(tt,A,!0,g)&&k,k=cn(tt,A,!1,g)&&k,_)for(j=0;j<_.length;j++)tt=g.g=_[j],k=cn(tt,A,!1,g)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ji(_[A]);delete c.g[g],c.h--}}this.F=null},oe.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},oe.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function cn(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,j=0;j<g.length;++j){var tt=g[j];if(tt&&!tt.da&&tt.capture==_){var kt=tt.listener,Se=tt.ha||tt.src;tt.fa&&Wr(c.i,tt),k=kt.call(Se,A)!==!1&&k}}return k&&!A.defaultPrevented}function Fe(c,g,_){if(typeof c=="function")_&&(c=R(c,_));else if(c&&typeof c.handleEvent=="function")c=R(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function uu(c){c.g=Fe(()=>{c.g=null,c.i&&(c.i=!1,uu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Fh extends it{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:uu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(c){it.call(this),this.h=c,this.g={}}$(ns,it);var is=[];function rs(c){It(c.g,function(g,_){this.g.hasOwnProperty(_)&&Zs(g)},c),c.g={}}ns.prototype.N=function(){ns.aa.N.call(this),rs(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=m.JSON.stringify,Js=m.JSON.parse,ss=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function mo(){}mo.prototype.h=null;function go(c){return c.h||(c.h=c.i())}function po(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){W.call(this,"d")}$(Ti,W);function yo(){W.call(this,"c")}$(yo,W);var Wn={},_o=null;function tr(){return _o=_o||new oe}Wn.La="serverreachability";function ta(c){W.call(this,Wn.La,c)}$(ta,W);function er(c){const g=tr();Ft(g,new ta(g))}Wn.STAT_EVENT="statevent";function cu(c,g){W.call(this,Wn.STAT_EVENT,c),this.stat=g}$(cu,W);function ie(c){const g=tr();Ft(g,new cu(g,c))}Wn.Ma="timingevent";function Ae(c,g){W.call(this,Wn.Ma,c),this.size=g}$(Ae,W);function ge(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function vo(c,g,_,A,k,j){c.info(function(){if(c.g)if(j)for(var tt="",kt=j.split("&"),Se=0;Se<kt.length;Se++){var Ut=kt[Se].split("=");if(1<Ut.length){var Oe=Ut[0];Ut=Ut[1];var we=Oe.split("_");tt=2<=we.length&&we[1]=="type"?tt+(Oe+"="+Ut+"&"):tt+(Oe+"=redacted&")}}else tt=null;else tt=j;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+tt})}function Gh(c,g,_,A,k,j,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+j+" "+tt})}function nr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+as(c,_)+(A?" "+A:"")})}function hu(c,g){c.info(function(){return"TIMEOUT: "+g})}wn.prototype.info=function(){};function as(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var j=k[0];if(j!="noop"&&j!="stop"&&j!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return Bn(_)}catch{return g}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jn;function ti(){}$(ti,mo),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},Jn=new ti;function We(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var Eo={},ea={};function qn(c,g,_){c.L=1,c.v=hs(hn(g)),c.m=_,c.P=!0,Si(c,null)}function Si(c,g){c.F=Date.now(),os(c),c.A=hn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Ro(_.i,"t",A),c.C=0,_=c.j.J,c.h=new he,c.g=Iu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Fh(R(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(is[0]=k.toString()),k=is);for(var j=0;j<k.length;j++){var tt=ou(_,k[j],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),er(),vo(c.i,c.u,c.A,c.l,c.R,c.m)}We.prototype.ca=function(c){c=c.target;const g=this.M;g&&Cn(c)==3?g.j():this.Y(c)},We.prototype.Y=function(c){try{if(c==this.g)t:{const we=Cn(this.g);var g=this.g.Ba();const Ni=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||vu(this.g)))){this.J||we!=4||g==7||(g==8||0>=Ni?er(3):er(2)),rr(this);var _=this.g.Z();this.X=_;e:if(fu(this)){var A=vu(this.g);c="";var k=A.length,j=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),ei(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(j&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Gh(this.i,this.u,this.A,this.l,this.R,we,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Se=this.g;if((kt=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(kt)){var Ut=kt;break e}}Ut=null}if(_=Ut)nr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ls(this,_);else{this.o=!1,this.s=3,ie(12),ke(this),ei(this);break t}}if(this.P){_=!0;let Ue;for(;!this.J&&this.C<tt.length;)if(Ue=du(this,tt),Ue==ea){we==4&&(this.s=4,ie(14),_=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Eo){this.s=4,ie(15),nr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else nr(this.i,this.l,Ue,null),ls(this,Ue);if(fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||tt.length!=0||this.h.h||(this.s=1,ie(16),_=!1),this.o=this.o&&_,!_)nr(this.i,this.l,tt,"[Invalid Chunked Response]"),ke(this),ei(this);else if(0<tt.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),vs(Oe),Oe.M=!0,ie(11))}}else nr(this.i,this.l,tt,null),ls(this,tt);we==4&&ke(this),this.o&&!this.J&&(we==4?wu(this.j,this):(this.o=!1,os(this)))}else $h(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),ke(this),ei(this)}}}catch{}finally{}};function fu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function du(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?ea:(_=Number(g.substring(_,A)),isNaN(_)?Eo:(A+=1,A+_>g.length?ea:(g=g.slice(A,A+_),c.C=A+_,g)))}We.prototype.cancel=function(){this.J=!0,ke(this)};function os(c){c.S=Date.now()+c.I,mu(c,c.I)}function mu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ge(R(c.ba,c),g)}function rr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}We.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hu(this.i,this.A),this.L!=2&&(er(),ie(17)),ke(this),this.s=2,ei(this)):mu(this,this.S-c)};function ei(c){c.j.G==0||c.J||wu(c.j,c)}function ke(c){rr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,rs(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function ls(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||To(_.h,c))){if(!c.K&&To(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)da(_),ha(_);else break t;No(_),ie(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=ge(R(_.Za,_),6e3));if(1>=ia(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((c.K||_.g==c)&&da(_),!dt(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let Ut=k[g];if(_.T=Ut[0],Ut=Ut[1],_.G==2)if(Ut[0]=="c"){_.K=Ut[1],_.ia=Ut[2];const Oe=Ut[3];Oe!=null&&(_.la=Oe,_.j.info("VER="+_.la));const we=Ut[4];we!=null&&(_.Aa=we,_.j.info("SVER="+_.Aa));const Ni=Ut[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ue=c.g;if(Ue){const li=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(li){var j=A.h;j.g||li.indexOf("spdy")==-1&&li.indexOf("quic")==-1&&li.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ra(j,j.h),j.h=null))}if(A.D){const Mo=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(A.ya=Mo,Kt(A.I,A.D,Mo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=Ru(A,A.J?A.ia:null,A.W),tt.K){Je(A.h,tt);var kt=tt,Se=A.L;Se&&(kt.I=Se),kt.B&&(rr(kt),os(kt)),A.g=tt}else Au(A);0<_.i.length&&fa(_)}else Ut[0]!="stop"&&Ut[0]!="close"||Oi(_,7);else _.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Oi(_,7):Do(_):Ut[0]!="noop"&&_.l&&_.l.ta(Ut),_.v=0)}}er(4)}catch{}}var gu=class{constructor(c,g){this.g=c,this.map=g}};function wi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function na(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ia(c){return c.h?1:c.g?c.g.size:0}function To(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ra(c,g){c.g?c.g.add(g):c.h=g}function Je(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}wi.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ao(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return et(c.i)}function Qh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function sa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function So(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=sa(c),A=Qh(c),k=A.length,j=0;j<k;j++)g.call(void 0,A[j],_&&_[j],c)}var us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var j=c[_].substring(0,A);k=c[_].substring(A+1)}else j=c[_];g(j,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function pe(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof pe){this.h=c.h,cs(this,c.j),this.o=c.o,this.g=c.g,sr(this,c.s),this.l=c.l;var g=c.i,_=new Ri;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),bi(this,_),this.m=c.m}else c&&(g=String(c).match(us))?(this.h=!1,cs(this,g[1]||"",!0),this.o=bn(g[2]||""),this.g=bn(g[3]||"",!0),sr(this,g[4]),this.l=bn(g[5]||"",!0),bi(this,g[6]||"",!0),this.m=bn(g[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}pe.prototype.toString=function(){var c=[],g=this.j;g&&c.push(fs(g,wo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(fs(g,wo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(fs(_,_.charAt(0)=="/"?Yh:bo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",fs(_,aa)),c.join("")};function hn(c){return new pe(c)}function cs(c,g,_){c.j=_?bn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function sr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function bi(c,g,_){g instanceof Ri?(c.i=g,yu(c.i,c.h)):(_||(g=fs(g,Xh)),c.i=new Ri(g,c.h))}function Kt(c,g,_){c.i.set(g,_)}function hs(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function bn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function fs(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,pu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function pu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,bo=/[#\?:]/g,Yh=/[#\?]/g,Xh=/[#\?@]/g,aa=/#/g;function Ri(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Rn(c){c.g||(c.g=new Map,c.h=0,c.i&&Kh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Ri.prototype,r.add=function(c,g){Rn(this),this.i=null,c=ni(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Ii(c,g){Rn(c),g=ni(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ci(c,g){return Rn(c),g=ni(c,g),c.g.has(g)}r.forEach=function(c,g){Rn(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){Rn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let j=0;j<k.length;j++)_.push(g[A])}return _},r.V=function(c){Rn(this);let g=[];if(typeof c=="string")Ci(this,c)&&(g=g.concat(this.g.get(ni(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Rn(this),this.i=null,c=ni(this,c),Ci(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ro(c,g,_){Ii(c,g),0<_.length&&(c.i=null,c.g.set(ni(c,g),et(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const j=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=j;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function ni(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function yu(c,g){g&&!c.j&&(Rn(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Ii(this,A),Ro(this,k,_))},c)),c.j=g}function ds(c,g){const _=new wn;if(m.Image){const A=new Image;A.onload=q(In,_,"TestLoadImage: loaded",!0,g,A),A.onerror=q(In,_,"TestLoadImage: error",!1,g,A),A.onabort=q(In,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=q(In,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function jn(c,g){const _=new wn,A=new AbortController,k=setTimeout(()=>{A.abort(),In(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(k),j.ok?In(_,"TestPingServer: ok",!0,g):In(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),In(_,"TestPingServer: error",!1,g)})}function In(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function ms(){this.g=new ss}function ii(c,g,_){const A=_||"";try{So(c,function(k,j){let tt=k;y(k)&&(tt=Bn(k)),g.push(A+j+"="+encodeURIComponent(tt))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function ar(c){this.l=c.Ub||null,this.j=c.eb||!1}$(ar,mo),ar.prototype.g=function(){return new Di(this.l,this.j)},ar.prototype.i=function(c){return function(){return c}}({});function Di(c,g){oe.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Di,oe),r=Di.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,si(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ri(this):si(this),this.readyState==3&&Io(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ri(this))},r.Qa=function(c){this.g&&(this.response=c,ri(this))},r.ga=function(){this.g&&ri(this)};function ri(c){c.readyState=4,c.l=null,c.j=null,c.v=null,si(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function si(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Co(c){let g="";return It(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function De(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Co(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Kt(c,g,_))}function Ht(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ht,oe);var oa=/^https?$/i,gs=["POST","PUT"];r=Ht.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jn.g(),this.v=this.o?go(this.o):go(Jn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){_u(this,j);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())_.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(gs,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,tt]of _)this.g.setRequestHeader(j,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){_u(this,j)}};function _u(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,la(c),ai(c)}function la(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ai(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),Ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},r.bb=function(){ua(this)};function ua(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Cn(c)!=4||c.Z()!=2)){if(c.u&&Cn(c)==4)Fe(c.Ea,0,c);else if(Ft(c,"readystatechange"),Cn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var k=String(c.D).match(us)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!oa.test(k?k.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var j=2<Cn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",la(c)}}finally{ai(c)}}}}function ai(c,g){if(c.g){ps(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function ps(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Cn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Js(g)}};function vu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function $h(c){const g={};c=(c.g&&2<=Cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(dt(c[A]))continue;var _=M(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=g[k]||[];g[k]=j,j.push(_)}V(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function ca(c){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ys("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ys("baseRetryDelayMs",5e3,c),this.cb=ys("retryDelaySeedMs",1e4,c),this.Wa=ys("forwardChannelMaxRetries",2,c),this.wa=ys("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wi(c&&c.concurrentRequestLimit),this.Da=new ms,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ca.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ie(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Ru(this,null,this.W),fa(this)};function Do(c){if(Eu(c),c.G==3){var g=c.U++,_=hn(c.I);if(Kt(_,"SID",c.K),Kt(_,"RID",g),Kt(_,"TYPE","terminate"),_s(c,_),g=new We(c,c.j,g),g.L=2,g.v=hs(hn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Iu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),os(g)}bu(c)}function ha(c){c.g&&(vs(c),c.g.cancel(),c.g=null)}function Eu(c){ha(c),c.u&&(m.clearTimeout(c.u),c.u=null),da(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function fa(c){if(!na(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||D(),ot||(nt(),ot=!0),xt.add(g,c),c.B=0}}function Zh(c,g){return ia(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ge(R(c.Ga,c,g),Vo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new We(this,this.j,c);let j=this.o;if(this.S&&(j?(j=S(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(k.H=j,j=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=Tu(this,k,g),_=hn(this.I),Kt(_,"RID",c),Kt(_,"CVER",22),this.D&&Kt(_,"X-HTTP-Session-Id",this.D),_s(this,_),j&&(this.O?g="headers="+encodeURIComponent(String(Co(j)))+"&"+g:this.m&&De(_,this.m,j)),ra(this.h,k),this.Ua&&Kt(_,"TYPE","init"),this.P?(Kt(_,"$req",g),Kt(_,"SID","null"),k.T=!0,qn(k,_,null)):qn(k,_,g),this.G=2}}else this.G==3&&(c?Oo(this,c):this.i.length==0||na(this.h)||Oo(this))};function Oo(c,g){var _;g?_=g.l:_=c.U++;const A=hn(c.I);Kt(A,"SID",c.K),Kt(A,"RID",_),Kt(A,"AID",c.T),_s(c,A),c.m&&c.o&&De(A,c.m,c.o),_=new We(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Tu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ra(c.h,_),qn(_,A,g)}function _s(c,g){c.H&&It(c.H,function(_,A){Kt(g,A,_)}),c.l&&So({},function(_,A){Kt(g,A,_)})}function Tu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?R(c.l.Na,c.l,c):null;t:{var k=c.i;let j=-1;for(;;){const tt=["count="+_];j==-1?0<_?(j=k[0].g,tt.push("ofs="+j)):j=0:tt.push("ofs="+j);let kt=!0;for(let Se=0;Se<_;Se++){let Ut=k[Se].g;const Oe=k[Se].map;if(Ut-=j,0>Ut)j=Math.max(0,k[Se].g-100),kt=!1;else try{ii(Oe,tt,"req"+Ut+"_")}catch{A&&A(Oe)}}if(kt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function Au(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||D(),ot||(nt(),ot=!0),xt.add(g,c),c.v=0}}function No(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ge(R(c.Fa,c),Vo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ge(R(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),ha(this),Su(this))};function vs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Su(c){c.g=new We(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=hn(c.qa);Kt(g,"RID","rpc"),Kt(g,"SID",c.K),Kt(g,"AID",c.T),Kt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(g,"TO",c.ja),Kt(g,"TYPE","xmlhttp"),_s(c,g),c.m&&c.o&&De(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=hs(hn(g)),_.m=null,_.P=!0,Si(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ha(this),No(this),ie(19))};function da(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function wu(c,g){var _=null;if(c.g==g){da(c),vs(c),c.g=null;var A=2}else if(To(c.h,g))_=g.D,Je(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=tr(),Ft(A,new Ae(A,_)),fa(c)}else Au(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&Zh(c,g)||A==2&&No(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Vo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Oi(c,g){if(c.j.info("Error code "+g),g==2){var _=R(c.fb,c),A=c.Xa;const k=!A;A=new pe(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||cs(A,"https"),hs(A),k?ds(A.toString(),_):jn(A.toString(),_)}else ie(2);c.G=0,c.l&&c.l.sa(g),bu(c),Eu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function bu(c){if(c.G=0,c.ka=[],c.l){const g=Ao(c.h);(g.length!=0||c.i.length!=0)&&(Z(c.ka,g),Z(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function Ru(c,g,_){var A=_ instanceof pe?hn(_):new pe(_);if(A.g!="")g&&(A.g=g+"."+A.g),sr(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var j=new pe(null);A&&cs(j,A),g&&(j.g=g),k&&sr(j,k),_&&(j.l=_),A=j}return _=c.D,g=c.ya,_&&g&&Kt(A,_,g),Kt(A,"VER",c.la),_s(c,A),A}function Iu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Ht(new ar({eb:_})):new Ht(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}r=Cu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ma(){}ma.prototype.g=function(c,g){return new tn(c,g)};function tn(c,g){oe.call(this),this.g=new ca(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!dt(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!dt(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new oi(this)}$(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Do(this.g)},tn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Bn(c),c=_);g.i.push(new gu(g.Ya++,c)),g.G==3&&fa(g)},tn.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,tn.aa.N.call(this)};function Du(c){Ti.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}$(Du,Ti);function Ou(){yo.call(this),this.status=1}$(Ou,yo);function oi(c){this.g=c}$(oi,Cu),oi.prototype.ua=function(){Ft(this.g,"a")},oi.prototype.ta=function(c){Ft(this.g,new Du(c))},oi.prototype.sa=function(c){Ft(this.g,new Ou)},oi.prototype.ra=function(){Ft(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,A0=function(){return new ma},T0=function(){return tr()},E0=Wn,vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,jc=ir,Ai.COMPLETE="complete",v0=Ai,po.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",oe.prototype.listen=oe.prototype.K,wl=po,Ht.prototype.listenOnce=Ht.prototype.L,Ht.prototype.getLastError=Ht.prototype.Ka,Ht.prototype.getLastErrorCode=Ht.prototype.Ba,Ht.prototype.getStatus=Ht.prototype.Z,Ht.prototype.getResponseJson=Ht.prototype.Oa,Ht.prototype.getResponseText=Ht.prototype.oa,Ht.prototype.send=Ht.prototype.ea,Ht.prototype.setWithCredentials=Ht.prototype.Ha,_0=Ht}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});const $v="@firebase/firestore",Zv="4.7.17";/**
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
 */class Ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let so="11.9.0";/**
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
 */const Hs=new vh("@firebase/firestore");function Ha(){return Hs.logLevel}function st(r,...t){if(Hs.logLevel<=Vt.DEBUG){const n=t.map(tg);Hs.debug(`Firestore (${so}): ${r}`,...n)}}function Zi(r,...t){if(Hs.logLevel<=Vt.ERROR){const n=t.map(tg);Hs.error(`Firestore (${so}): ${r}`,...n)}}function Za(r,...t){if(Hs.logLevel<=Vt.WARN){const n=t.map(tg);Hs.warn(`Firestore (${so}): ${r}`,...n)}}function tg(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function ft(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,S0(r,s,n)}function S0(r,t,n){let s=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Zi(s),new Error(s)}function Pt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||S0(t,o,s)}function St(r,t){return r}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends Zn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class w0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class r2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class s2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a2{constructor(t){this.t=t,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Pt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Yn,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Yn)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pt(typeof s.accessToken=="string",31837,{l:s}),new w0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Pt(t===null||typeof t=="string",2055,{h:t}),new Ye(t)}}class o2{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class l2{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new o2(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u2{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Pt(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Pt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function c2(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function b0(){return new TextEncoder}/**
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
 */class R0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=c2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Rt(r,t){return r<t?-1:r>t?1:0}function Em(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Rt(s,o);{const u=b0(),f=h2(u.encode(Jv(r,n)),u.encode(Jv(t,n)));return f!==0?f:Rt(s,o)}}n+=s>65535?2:1}return Rt(r.length,t.length)}function Jv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function h2(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Rt(r[n],t[n]);return Rt(r.length,t.length)}function Wa(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
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
 */const tE=-62135596800,eE=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(t){return Ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*eE);return new Ie(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<tE)throw new rt(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eE}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-tE;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class vt{static fromTimestamp(t){return new vt(t)}static min(){return new vt(new Ie(0,0))}static max(){return new vt(new Ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const nE="__name__";class mi{constructor(t,n,s){n===void 0?n=0:n>t.length&&ft(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&ft(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return mi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof mi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=mi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Rt(t.length,n.length)}static compareSegments(t,n){const s=mi.isNumericId(t),o=mi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?mi.extractNumericId(t).compare(mi.extractNumericId(n)):Em(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return kr.fromString(t.substring(4,t.length-2))}}class Jt extends mi{construct(t,n,s){return new Jt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new rt(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Jt(n)}static emptyPath(){return new Jt([])}}const f2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends mi{construct(t,n,s){return new je(t,n,s)}static isValidIdentifier(t){return f2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nE}static keyField(){return new je([nE])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new rt(G.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new rt(G.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new rt(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new rt(G.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(Jt.fromString(t))}static fromName(t){return new ct(Jt.fromString(t).popFirst(5))}static empty(){return new ct(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Jt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new Jt(t.slice()))}}/**
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
 */const zl=-1;function d2(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=vt.fromTimestamp(s===1e9?new Ie(n+1,0):new Ie(n,s));return new zr(o,ct.empty(),t)}function m2(r){return new zr(r.readTime,r.key,zl)}class zr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new zr(vt.min(),ct.empty(),zl)}static max(){return new zr(vt.max(),ct.empty(),zl)}}function g2(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(r.documentKey,t.documentKey),n!==0?n:Rt(r.largestBatchId,t.largestBatchId))}/**
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
 */const p2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ao(r){if(r.code!==G.FAILED_PRECONDITION||r.message!==p2)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ft(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new Y((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function _2(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class bh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}bh.le=-1;/**
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
 */const eg=-1;function Wl(r){return r==null}function rh(r){return r===0&&1/r==-1/0}function v2(r){return typeof r=="number"&&Number.isInteger(r)&&!rh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const I0="";function E2(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=iE(t)),t=T2(r.get(n),t);return iE(t)}function T2(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case I0:n+="";break;default:n+=u}}return n}function iE(r){return r+I0+""}/**
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
 */function rE(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Yr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function A2(r,t){const n=[];for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&n.push(t(r[s],s,r));return n}function C0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ae{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new ae(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new ae(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mc(this.root,t,this.comparator,!0)}}class Mc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ft(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ft(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ft(27949);return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ft(57766)}get value(){throw ft(16141)}get color(){throw ft(16727)}get left(){throw ft(29726)}get right(){throw ft(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(t){this.comparator=t,this.data=new ae(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sE(this.data.getIterator())}getIteratorFrom(t){return new sE(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class sE{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new En([])}unionWith(t){let n=new Ce(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new En(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wa(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class D0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new D0("Invalid base64 string: "+u):u}}(t);return new He(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const S2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(Pt(!!r,39018),typeof r=="string"){let t=0;const n=S2.exec(r);if(Pt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qr(r){return typeof r=="string"?He.fromBase64String(r):He.fromUint8Array(r)}/**
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
 */const O0="server_timestamp",N0="__type__",V0="__previous_value__",M0="__local_write_time__";function ng(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[N0])===null||n===void 0?void 0:n.stringValue)===O0}function Rh(r){const t=r.mapValue.fields[V0];return ng(t)?Rh(t):t}function Bl(r){const t=Br(r.mapValue.fields[M0].timestampValue);return new Ie(t.seconds,t.nanos)}/**
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
 */class w2{constructor(t,n,s,o,u,f,m,p,y,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=E}}const sh="(default)";class ql{constructor(t,n){this.projectId=t,this.database=n||sh}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database===sh}isEqual(t){return t instanceof ql&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const P0="__type__",b2="__max__",Pc={mapValue:{}},x0="__vector__",ah="value";function jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ng(r)?4:I2(r)?9007199254740991:R2(r)?10:11:ft(28295,{value:r})}function _i(r,t){if(r===t)return!0;const n=jr(r);if(n!==jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Bl(r).isEqual(Bl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Br(o.timestampValue),m=Br(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return qr(o.bytesValue).isEqual(qr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return me(o.geoPointValue.latitude)===me(u.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return me(o.integerValue)===me(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=me(o.doubleValue),m=me(u.doubleValue);return f===m?rh(f)===rh(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Wa(r.arrayValue.values||[],t.arrayValue.values||[],_i);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(rE(f)!==rE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!_i(f[p],m[p])))return!1;return!0}(r,t);default:return ft(52216,{left:r})}}function jl(r,t){return(r.values||[]).find(n=>_i(n,t))!==void 0}function Ja(r,t){if(r===t)return 0;const n=jr(r),s=jr(t);if(n!==s)return Rt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=me(u.integerValue||u.doubleValue),p=me(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return aE(r.timestampValue,t.timestampValue);case 4:return aE(Bl(r),Bl(t));case 5:return Em(r.stringValue,t.stringValue);case 6:return function(u,f){const m=qr(u),p=qr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Rt(m[y],p[y]);if(E!==0)return E}return Rt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=Rt(me(u.latitude),me(f.latitude));return m!==0?m:Rt(me(u.longitude),me(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return oE(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,p,y,E;const w=u.fields||{},R=f.fields||{},q=(m=w[ah])===null||m===void 0?void 0:m.arrayValue,$=(p=R[ah])===null||p===void 0?void 0:p.arrayValue,et=Rt(((y=q==null?void 0:q.values)===null||y===void 0?void 0:y.length)||0,((E=$==null?void 0:$.values)===null||E===void 0?void 0:E.length)||0);return et!==0?et:oE(q,$)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Pc.mapValue&&f===Pc.mapValue)return 0;if(u===Pc.mapValue)return 1;if(f===Pc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const R=Em(p[w],E[w]);if(R!==0)return R;const q=Ja(m[p[w]],y[E[w]]);if(q!==0)return q}return Rt(p.length,E.length)}(r.mapValue,t.mapValue);default:throw ft(23264,{Pe:n})}}function aE(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Rt(r,t);const n=Br(r),s=Br(t),o=Rt(n.seconds,s.seconds);return o!==0?o:Rt(n.nanos,s.nanos)}function oE(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ja(n[o],s[o]);if(u)return u}return Rt(n.length,s.length)}function to(r){return Tm(r)}function Tm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return qr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ct.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Tm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Tm(n.fields[f])}`;return o+"}"}(r.mapValue):ft(61005,{value:r})}function Hc(r){switch(jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Rh(r);return t?16+Hc(t):16;case 5:return 2*r.stringValue.length;case 6:return qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Hc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Yr(s.fields,(u,f)=>{o+=u.length+Hc(f)}),o}(r.mapValue);default:throw ft(13486,{value:r})}}function lE(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Am(r){return!!r&&"integerValue"in r}function ig(r){return!!r&&"arrayValue"in r}function uE(r){return!!r&&"nullValue"in r}function cE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fc(r){return!!r&&"mapValue"in r}function R2(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[P0])===null||n===void 0?void 0:n.stringValue)===x0}function Nl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Yr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Nl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function I2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===b2}/**
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
 */class nn{constructor(t){this.value=t}static empty(){return new nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Fc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nl(n)}setAll(t){let n=je.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Nl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _i(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Fc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Yr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new nn(Nl(this.value))}}function k0(r){const t=[];return Yr(r.fields,(n,s)=>{const o=new je([n]);if(Fc(s)){const u=k0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new En(t)}/**
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
 */class xe{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new xe(t,0,vt.min(),vt.min(),vt.min(),nn.empty(),0)}static newFoundDocument(t,n,s,o){return new xe(t,1,n,vt.min(),s,o,0)}static newNoDocument(t,n){return new xe(t,2,n,vt.min(),vt.min(),nn.empty(),0)}static newUnknownDocument(t,n){return new xe(t,3,n,vt.min(),vt.min(),nn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(vt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oh{constructor(t,n){this.position=t,this.inclusive=n}}function hE(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ct.comparator(ct.fromName(f.referenceValue),n.key):s=Ja(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function fE(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!_i(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Hl{constructor(t,n="asc"){this.field=t,this.dir=n}}function C2(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class U0{}class Te extends U0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new O2(t,n,s):n==="array-contains"?new M2(t,s):n==="in"?new P2(t,s):n==="not-in"?new x2(t,s):n==="array-contains-any"?new k2(t,s):new Te(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new N2(t,s):new V2(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ja(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Ja(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ft(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends U0{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new $n(t,n)}matches(t){return L0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function L0(r){return r.op==="and"}function z0(r){return D2(r)&&L0(r)}function D2(r){for(const t of r.filters)if(t instanceof $n)return!1;return!0}function Sm(r){if(r instanceof Te)return r.field.canonicalString()+r.op.toString()+to(r.value);if(z0(r))return r.filters.map(t=>Sm(t)).join(",");{const t=r.filters.map(n=>Sm(n)).join(",");return`${r.op}(${t})`}}function B0(r,t){return r instanceof Te?function(s,o){return o instanceof Te&&s.op===o.op&&s.field.isEqual(o.field)&&_i(s.value,o.value)}(r,t):r instanceof $n?function(s,o){return o instanceof $n&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&B0(f,o.filters[m]),!0):!1}(r,t):void ft(19439)}function q0(r){return r instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(r):r instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(q0).join(" ,")+"}"}(r):"Filter"}class O2 extends Te{constructor(t,n,s){super(t,n,s),this.key=ct.fromName(s.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class N2 extends Te{constructor(t,n){super(t,"in",n),this.keys=j0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class V2 extends Te{constructor(t,n){super(t,"not-in",n),this.keys=j0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function j0(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ct.fromName(s.referenceValue))}class M2 extends Te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ig(n)&&jl(n.arrayValue,this.value)}}class P2 extends Te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&jl(this.value.arrayValue,n)}}class x2 extends Te{constructor(t,n){super(t,"not-in",n)}matches(t){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jl(this.value.arrayValue,n)}}class k2 extends Te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ig(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>jl(this.value.arrayValue,s))}}/**
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
 */class U2{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Ie=null}}function dE(r,t=null,n=[],s=[],o=null,u=null,f=null){return new U2(r,t,n,s,o,u,f)}function rg(r){const t=St(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Sm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Wl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>to(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>to(s)).join(",")),t.Ie=n}return t.Ie}function sg(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!C2(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!B0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!fE(r.startAt,t.startAt)&&fE(r.endAt,t.endAt)}function wm(r){return ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class lo{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function L2(r,t,n,s,o,u,f,m){return new lo(r,t,n,s,o,u,f,m)}function ag(r){return new lo(r)}function mE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function H0(r){return r.collectionGroup!==null}function Vl(r){const t=St(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ce(je.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Hl(u,s))}),n.has(je.keyField().canonicalString())||t.Ee.push(new Hl(je.keyField(),s))}return t.Ee}function pi(r){const t=St(r);return t.de||(t.de=F0(t,Vl(r))),t.de}function z2(r){const t=St(r);return t.Ae||(t.Ae=F0(t,r.explicitOrderBy)),t.Ae}function F0(r,t){if(r.limitType==="F")return dE(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hl(o.field,u)});const n=r.endAt?new oh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new oh(r.startAt.position,r.startAt.inclusive):null;return dE(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function bm(r,t){const n=r.filters.concat([t]);return new lo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function lh(r,t,n){return new lo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Ih(r,t){return sg(pi(r),pi(t))&&r.limitType===t.limitType}function G0(r){return`${rg(pi(r))}|lt:${r.limitType}`}function Fa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>q0(o)).join(", ")}]`),Wl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>to(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>to(o)).join(",")),`Target(${s})`}(pi(r))}; limitType=${r.limitType})`}function Ch(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ct.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Vl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=hE(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Vl(s),o)||s.endAt&&!function(f,m,p){const y=hE(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Vl(s),o))}(r,t)}function B2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q0(r){return(t,n)=>{let s=!1;for(const o of Vl(r)){const u=q2(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function q2(r,t,n){const s=r.field.isKeyField()?ct.comparator(t.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Ja(p,y):ft(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ft(19790,{direction:r.dir})}}/**
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
 */class Xs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Yr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
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
 */const j2=new ae(ct.comparator);function Wi(){return j2}const K0=new ae(ct.comparator);function bl(...r){let t=K0;for(const n of r)t=t.insert(n.key,n);return t}function Y0(r){let t=K0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ls(){return Ml()}function X0(){return Ml()}function Ml(){return new Xs(r=>r.toString(),(r,t)=>r.isEqual(t))}const H2=new ae(ct.comparator),F2=new Ce(ct.comparator);function Mt(...r){let t=F2;for(const n of r)t=t.add(n);return t}const G2=new Ce(Rt);function Q2(){return G2}/**
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
 */function og(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rh(t)?"-0":t}}function $0(r){return{integerValue:""+r}}function K2(r,t){return v2(t)?$0(t):og(r,t)}/**
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
 */class Dh{constructor(){this._=void 0}}function Y2(r,t,n){return r instanceof uh?function(o,u){const f={fields:{[N0]:{stringValue:O0},[M0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ng(u)&&(u=Rh(u)),u&&(f.fields[V0]=u),{mapValue:f}}(n,t):r instanceof Fl?W0(r,t):r instanceof Gl?J0(r,t):function(o,u){const f=Z0(o,u),m=gE(f)+gE(o.Re);return Am(f)&&Am(o.Re)?$0(m):og(o.serializer,m)}(r,t)}function X2(r,t,n){return r instanceof Fl?W0(r,t):r instanceof Gl?J0(r,t):n}function Z0(r,t){return r instanceof ch?function(s){return Am(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class uh extends Dh{}class Fl extends Dh{constructor(t){super(),this.elements=t}}function W0(r,t){const n=tA(t);for(const s of r.elements)n.some(o=>_i(o,s))||n.push(s);return{arrayValue:{values:n}}}class Gl extends Dh{constructor(t){super(),this.elements=t}}function J0(r,t){let n=tA(t);for(const s of r.elements)n=n.filter(o=>!_i(o,s));return{arrayValue:{values:n}}}class ch extends Dh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function gE(r){return me(r.integerValue||r.doubleValue)}function tA(r){return ig(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function $2(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Fl&&o instanceof Fl||s instanceof Gl&&o instanceof Gl?Wa(s.elements,o.elements,_i):s instanceof ch&&o instanceof ch?_i(s.Re,o.Re):s instanceof uh&&o instanceof uh}(r.transform,t.transform)}class Z2{constructor(t,n){this.version=t,this.transformResults=n}}class Xe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Xe}static exists(t){return new Xe(void 0,t)}static updateTime(t){return new Xe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Oh{}function eA(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new lg(r.key,Xe.none()):new Jl(r.key,r.data,Xe.none());{const n=r.data,s=nn.empty();let o=new Ce(je.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Xr(r.key,s,new En(o.toArray()),Xe.none())}}function W2(r,t,n){r instanceof Jl?function(o,u,f){const m=o.value.clone(),p=yE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Xr?function(o,u,f){if(!Gc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=yE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(nA(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Pl(r,t,n,s){return r instanceof Jl?function(u,f,m,p){if(!Gc(u.precondition,f))return m;const y=u.value.clone(),E=_E(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Xr?function(u,f,m,p){if(!Gc(u.precondition,f))return m;const y=_E(u.fieldTransforms,p,f),E=f.data;return E.setAll(nA(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,t,n,s):function(u,f,m){return Gc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function J2(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=Z0(s.transform,o||null);u!=null&&(n===null&&(n=nn.empty()),n.set(s.field,u))}return n||null}function pE(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Wa(s,o,(u,f)=>$2(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Jl extends Oh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xr extends Oh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function nA(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function yE(r,t,n){const s=new Map;Pt(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,X2(f,m,n[o]))}return s}function _E(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,Y2(u,f,t))}return s}class lg extends Oh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iA extends Oh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tD{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&W2(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Pl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Pl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=X0();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=eA(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(vt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Mt())}isEqual(t){return this.batchId===t.batchId&&Wa(this.mutations,t.mutations,(n,s)=>pE(n,s))&&Wa(this.baseMutations,t.baseMutations,(n,s)=>pE(n,s))}}class ug{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Pt(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return H2}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new ug(t,n,s,o)}}/**
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
 */class eD{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class nD{constructor(t,n,s){this.alias=t,this.aggregateType=n,this.fieldPath=s}}/**
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
 */class iD{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ee,zt;function rA(r){switch(r){case G.OK:return ft(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ft(15467,{code:r})}}function sA(r){if(r===void 0)return Zi("GRPC error has no .code"),G.UNKNOWN;switch(r){case Ee.OK:return G.OK;case Ee.CANCELLED:return G.CANCELLED;case Ee.UNKNOWN:return G.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return G.INTERNAL;case Ee.UNAVAILABLE:return G.UNAVAILABLE;case Ee.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Ee.NOT_FOUND:return G.NOT_FOUND;case Ee.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Ee.ABORTED:return G.ABORTED;case Ee.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Ee.DATA_LOSS:return G.DATA_LOSS;default:return ft(39323,{code:r})}}(zt=Ee||(Ee={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rD=new kr([4294967295,4294967295],0);function vE(r){const t=b0().encode(r),n=new y0;return n.update(t),new Uint8Array(n.digest())}function EE(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new kr([n,s],0),new kr([o,u],0)]}class cg{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(s<0)throw new Rl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=kr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(kr.fromNumber(s)));return o.compare(rD)===1&&(o=new kr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=vE(t),[s,o]=EE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new cg(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.pe===0)return;const n=vE(t),[s,o]=EE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,tu.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Nh(vt.min(),o,new ae(Rt),Wi(),Mt())}}class tu{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new tu(s,n,Mt(),Mt(),Mt())}}/**
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
 */class Qc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class aA{constructor(t,n){this.targetId=t,this.Ce=n}}class oA{constructor(t,n,s=He.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class TE{constructor(){this.Fe=0,this.Me=AE(),this.xe=He.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Mt(),n=Mt(),s=Mt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ft(38017,{changeType:u})}}),new tu(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=AE()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Pt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class sD{constructor(t){this.ze=t,this.je=new Map,this.He=Wi(),this.Je=xc(),this.Ye=xc(),this.Ze=new ae(Rt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:ft(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(wm(u))if(s===0){const f=new ct(u.path);this.tt(n,f,xe.newNoDocument(f,vt.min()))}else Pt(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const m=this.ct(t),p=m?this.lt(m,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=qr(s).toUint8Array()}catch(p){if(p instanceof D0)return Za("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new cg(f,o,u)}catch(p){return Za(p instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const m=this._t(f);if(m){if(u.current&&wm(m.target)){const p=new ct(m.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,xe.newNoDocument(p,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Mt();this.Ye.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new Nh(t,n,this.Ze,this.He,s);return this.He=Wi(),this.Je=xc(),this.Ye=xc(),this.Ze=new ae(Rt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new TE,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Ce(Rt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Ce(Rt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new TE),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function xc(){return new ae(ct.comparator)}function AE(){return new ae(ct.comparator)}const aD={asc:"ASCENDING",desc:"DESCENDING"},oD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lD={and:"AND",or:"OR"};class uD{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Rm(r,t){return r.useProto3Json||Wl(t)?t:{value:t}}function hh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lA(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function cD(r,t){return hh(r,t.toTimestamp())}function An(r){return Pt(!!r,49232),vt.fromTimestamp(function(n){const s=Br(n);return new Ie(s.seconds,s.nanos)}(r))}function hg(r,t){return Im(r,t).canonicalString()}function Im(r,t){const n=function(o){return new Jt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function uA(r){const t=Jt.fromString(r);return Pt(pA(t),10190,{key:t.toString()}),t}function fh(r,t){return hg(r.databaseId,t.path)}function xl(r,t){const n=uA(t);if(n.get(1)!==r.databaseId.projectId)throw new rt(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new rt(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ct(hA(n))}function cA(r,t){return hg(r.databaseId,t)}function hD(r){const t=uA(r);return t.length===4?Jt.emptyPath():hA(t)}function Cm(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function hA(r){return Pt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function SE(r,t,n){return{name:fh(r,t),fields:n.value.mapValue.fields}}function fD(r,t){return"found"in t?function(s,o){Pt(!!o.found,43571),o.found.name,o.found.updateTime;const u=xl(s,o.found.name),f=An(o.found.updateTime),m=o.found.createTime?An(o.found.createTime):vt.min(),p=new nn({mapValue:{fields:o.found.fields}});return xe.newFoundDocument(u,f,m,p)}(r,t):"missing"in t?function(s,o){Pt(!!o.missing,3894),Pt(!!o.readTime,22933);const u=xl(s,o.missing),f=An(o.readTime);return xe.newNoDocument(u,f)}(r,t):ft(7234,{result:t})}function dD(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ft(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Pt(E===void 0||typeof E=="string",58123),He.fromBase64String(E||"")):(Pt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),He.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const E=y.code===void 0?G.UNKNOWN:sA(y.code);return new rt(E,y.message||"")}(f);n=new oA(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=xl(r,s.document.name),u=An(s.document.updateTime),f=s.document.createTime?An(s.document.createTime):vt.min(),m=new nn({mapValue:{fields:s.document.fields}}),p=xe.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Qc(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=xl(r,s.document),u=s.readTime?An(s.readTime):vt.min(),f=xe.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Qc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=xl(r,s.document),u=s.removedTargetIds||[];n=new Qc([],u,o,null)}else{if(!("filter"in t))return ft(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new iD(o,u),m=s.targetId;n=new aA(m,f)}}return n}function fA(r,t){let n;if(t instanceof Jl)n={update:SE(r,t.key,t.value)};else if(t instanceof lg)n={delete:fh(r,t.key)};else if(t instanceof Xr)n={update:SE(r,t.key,t.data),updateMask:AD(t.fieldMask)};else{if(!(t instanceof iA))return ft(16599,{ft:t.type});n={verify:fh(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof uh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Gl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ch)return{fieldPath:f.field.canonicalString(),increment:m.Re};throw ft(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:cD(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ft(27497)}(r,t.precondition)),n}function mD(r,t){return r&&r.length>0?(Pt(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?An(o.updateTime):An(u);return f.isEqual(vt.min())&&(f=An(u)),new Z2(f,o.transformResults||[])}(n,t))):[]}function gD(r,t){return{documents:[cA(r,t.path)]}}function dA(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=cA(r,o);const u=function(y){if(y.length!==0)return gA($n.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(R){return{field:Vr(R.field),direction:vD(R.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Rm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function pD(r,t,n,s){const{gt:o,parent:u}=dA(r,t),f={},m=[];let p=0;return n.forEach(y=>{const E="aggregate_"+p++;f[E]=y.alias,y.aggregateType==="count"?m.push({alias:E,count:{}}):y.aggregateType==="avg"?m.push({alias:E,avg:{field:Vr(y.fieldPath)}}):y.aggregateType==="sum"&&m.push({alias:E,sum:{field:Vr(y.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:m,structuredQuery:o.structuredQuery},parent:o.parent},yt:f,parent:u}}function yD(r){let t=hD(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Pt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(w){const R=mA(w);return R instanceof $n&&z0(R)?R.getFilters():[R]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(R=>function($){return new Hl(Ga($.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(R))}(n.orderBy));let m=null;n.limit&&(m=function(w){let R;return R=typeof w=="object"?w.value:w,Wl(R)?null:R}(n.limit));let p=null;n.startAt&&(p=function(w){const R=!!w.before,q=w.values||[];return new oh(q,R)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const R=!w.before,q=w.values||[];return new oh(q,R)}(n.endAt)),L2(t,o,f,u,m,"F",p,y)}function _D(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ft(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function mA(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Te.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Te.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Te.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ft(61313);default:return ft(60726)}}(r):r.fieldFilter!==void 0?function(n){return Te.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ft(58110);default:return ft(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(s=>mA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ft(1026)}}(n.compositeFilter.op))}(r):ft(30097,{filter:r})}function vD(r){return aD[r]}function ED(r){return oD[r]}function TD(r){return lD[r]}function Vr(r){return{fieldPath:r.canonicalString()}}function Ga(r){return je.fromServerFormat(r.fieldPath)}function gA(r){return r instanceof Te?function(n){if(n.op==="=="){if(cE(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(uE(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cE(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(uE(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:ED(n.op),value:n.value}}}(r):r instanceof $n?function(n){const s=n.getFilters().map(o=>gA(o));return s.length===1?s[0]:{compositeFilter:{op:TD(n.op),filters:s}}}(r):ft(54877,{filter:r})}function AD(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function pA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Mr{constructor(t,n,s,o,u=vt.min(),f=vt.min(),m=He.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Mr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class SD{constructor(t){this.wt=t}}function wD(r){const t=yD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?lh(t,t.limit,"L"):t}/**
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
 */class bD{constructor(){this.Cn=new RD}addToCollectionParentIndex(t,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(zr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(zr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class RD{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce(Jt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce(Jt.comparator)).toArray()}}/**
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
 */const wE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yA=41943040;class on{static withCacheSize(t){return new on(t,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(yA,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class eo{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new eo(0)}static lr(){return new eo(-1)}}/**
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
 */const bE="LruGarbageCollector",ID=1048576;function RE([r,t],[n,s]){const o=Rt(r,n);return o===0?Rt(t,s):o}class CD{constructor(t){this.Er=t,this.buffer=new Ce(RE),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();RE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){st(bE,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oo(n)?st(bE,"Ignoring IndexedDB error during garbage collection: ",n):await ao(n)}await this.mr(3e5)})}}class OD{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(bh.le);const s=new CD(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(wE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wE):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(t,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(w=>(y=Date.now(),Ha()<=Vt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function ND(r,t){return new OD(r,t)}/**
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
 */class VD{constructor(){this.changes=new Xs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,xe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class MD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class PD{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Pl(s.mutation,o,En.empty(),Ie.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Mt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Mt()){const o=Ls();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=bl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Ls();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Mt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Wi();const f=Ml(),m=function(){return Ml()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Xr)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Pl(E.mutation,y,E.mutation.getFieldMask(),Ie.now())):f.set(y.key,En.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var w;return m.set(y,new MD(E,(w=f.get(y))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Ml();let o=new ae((f,m)=>f-m),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||En.empty();E=m.applyToLocalView(y,E),s.set(p,E);const w=(o.get(m.batchId)||Mt()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,w=X0();E.forEach(R=>{if(!u.has(R)){const q=eA(n.get(R),s.get(R));q!==null&&w.set(R,q),u=u.add(R)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,w))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):H0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Ls());let m=zl,p=u;return f.next(y=>Y.forEach(y,(E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?Y.resolve():this.remoteDocumentCache.getEntry(t,E).next(R=>{p=p.insert(E,R)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Mt())).next(E=>({batchId:m,changes:Y0(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next(s=>{let o=bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=bl();return this.indexManager.getCollectionParents(t,u).next(m=>Y.forEach(m,p=>{const y=function(w,R){return new lo(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((w,R)=>{f=f.insert(w,R)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,xe.newInvalidDocument(E)))});let m=bl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Pl(E.mutation,y,En.empty(),Ie.now()),Ch(n,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class xD{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return Y.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:An(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:wD(o.bundledQuery),readTime:An(o.readTime)}}(n)),Y.resolve()}}/**
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
 */class kD{constructor(){this.overlays=new ae(ct.comparator),this.Qr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ls();return Y.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.St(t,n,u)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Ls(),u=n.length+1,f=new ct(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ae((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Ls(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Ls(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return Y.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new eD(n,s));let u=this.Qr.get(n);u===void 0&&(u=Mt(),this.Qr.set(n,u)),this.Qr.set(n,u.add(s.key))}}/**
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
 */class UD{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
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
 */class fg{constructor(){this.$r=new Ce(Pe.Ur),this.Kr=new Ce(Pe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new Pe(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new Pe(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new ct(new Jt([])),s=new Pe(n,t),o=new Pe(n,t+1),u=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),u.push(f.key)}),u}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new ct(new Jt([])),s=new Pe(n,t),o=new Pe(n,t+1);let u=Mt();return this.Kr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Pe(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Pe{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return ct.comparator(t.key,n.key)||Rt(t.Zr,n.Zr)}static Wr(t,n){return Rt(t.Zr,n.Zr)||ct.comparator(t.key,n.key)}}/**
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
 */class LD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Ce(Pe.Ur)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new tD(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Xr=this.Xr.add(new Pe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?eg:this.nr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Pe(n,0),o=new Pe(n,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],f=>{const m=this.ei(f.Zr);u.push(m)}),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(Rt);return n.forEach(o=>{const u=new Pe(o,0),f=new Pe(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,f],m=>{s=s.add(m.Zr)})}),Y.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ct.isDocumentKey(u)||(u=u.child(""));const f=new Pe(new ct(u),0);let m=new Ce(Rt);return this.Xr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Zr)),!0)},f),Y.resolve(this.ni(m))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Pt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return Y.forEach(n.mutations,o=>{const u=new Pe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new Pe(n,0),o=this.Xr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zD{constructor(t){this.ii=t,this.docs=function(){return new ae(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(t,n){let s=Wi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():xe.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Wi();const f=n.path,m=new ct(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||g2(m2(E),s)<=0||(o.has(E.key)||Ch(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){ft(9500)}si(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new BD(this)}getSize(t){return Y.resolve(this.size)}}class BD extends VD{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
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
 */class qD{constructor(t){this.persistence=t,this.oi=new Xs(n=>rg(n),sg),this.lastRemoteSnapshotVersion=vt.min(),this.highestTargetId=0,this._i=0,this.ai=new fg,this.targetCount=0,this.ui=eo.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),Y.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new eo(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.Tr(n),Y.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.oi.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.oi.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),Y.waitFor(u).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.ai.containsKey(n))}}/**
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
 */class _A{constructor(t,n){this.ci={},this.overlays={},this.li=new bh(0),this.hi=!1,this.hi=!0,this.Pi=new UD,this.referenceDelegate=t(this),this.Ti=new qD(this),this.indexManager=new bD,this.remoteDocumentCache=function(o){return new zD(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new SD(n),this.Ei=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new kD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new LD(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new jD(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(t,n){return Y.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class jD extends y2{constructor(t){super(),this.currentSequenceNumber=t}}class dg{constructor(t){this.persistence=t,this.Vi=new fg,this.mi=null}static fi(t){return new dg(t)}get gi(){if(this.mi)return this.mi;throw ft(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.gi,s=>{const o=ct.fromPath(s);return this.pi(t,o).next(u=>{u||n.removeEntry(o,vt.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return Y.or([()=>Y.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class dh{constructor(t,n){this.persistence=t,this.yi=new Xs(s=>E2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=ND(this,n)}static fi(t,n){return new dh(t,n)}di(){}Ai(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}br(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return Y.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(u=>u?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,vt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),Y.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Hc(t.data.value)),n}Dr(t,n,s){return Y.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class mg{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new mg(t,n.fromCache,s,o)}}/**
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
 */class HD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class FD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return eb()?8:_2(Ze())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ws(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.bs(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new HD;return this.Ss(t,n,f).next(m=>{if(u.result=m,this.fs)return this.Ds(t,n,f,m.size)})}).next(()=>u.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(Ha()<=Vt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Fa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Y.resolve()):(Ha()<=Vt.DEBUG&&st("QueryEngine","Query:",Fa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Ha()<=Vt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Fa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pi(n))):Y.resolve())}ws(t,n){if(mE(n))return Y.resolve(null);let s=pi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=lh(n,null,"F"),s=pi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Mt(...u);return this.ys.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.vs(n,m);return this.Cs(n,y,f,p.readTime)?this.ws(t,lh(n,null,"F")):this.Fs(t,y,n,p)}))})))}bs(t,n,s,o){return mE(n)||o.isEqual(vt.min())?Y.resolve(null):this.ys.getDocuments(t,s).next(u=>{const f=this.vs(n,u);return this.Cs(n,f,s,o)?Y.resolve(null):(Ha()<=Vt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Fa(n)),this.Fs(t,f,n,d2(o,zl)).next(m=>m))})}vs(t,n){let s=new Ce(Q0(t));return n.forEach((o,u)=>{Ch(t,u)&&(s=s.add(u))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Ha()<=Vt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Fa(n)),this.ys.getDocumentsMatchingQuery(t,n,zr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const gg="LocalStore",GD=3e8;class QD{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new ae(Rt),this.Os=new Xs(u=>rg(u),sg),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new PD(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function KD(r,t,n,s){return new QD(r,t,n,s)}async function vA(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Mt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:m}))})})}function YD(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const w=y.batch,R=w.keys();let q=Y.resolve();return R.forEach($=>{q=q.next(()=>E.getEntry(p,$)).next(et=>{const Z=y.docVersions.get($);Pt(Z!==null,48541),et.version.compareTo(Z)<0&&(w.applyToRemoteDocument(et,y),et.isValidDocument()&&(et.setReadTime(y.commitVersion),E.addEntry(et)))})}),q.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Mt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function EA(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function XD(r,t){const n=St(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const m=[];t.targetChanges.forEach((E,w)=>{const R=o.get(w);if(!R)return;m.push(n.Ti.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Ti.addMatchingKeys(u,E.addedDocuments,w)));let q=R.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?q=q.withResumeToken(He.EMPTY_BYTE_STRING,vt.min()).withLastLimboFreeSnapshotVersion(vt.min()):E.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(E.resumeToken,s)),o=o.insert(w,q),function(et,Z,Tt){return et.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=GD?!0:Tt.addedDocuments.size+Tt.modifiedDocuments.size+Tt.removedDocuments.size>0}(R,q,E)&&m.push(n.Ti.updateTargetData(u,q))});let p=Wi(),y=Mt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push($D(u,f,t.documentUpdates).next(E=>{p=E.qs,y=E.Qs})),!s.isEqual(vt.min())){const E=n.Ti.getLastRemoteSnapshotVersion(u).next(w=>n.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Y.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.xs=o,u))}function $D(r,t,n){let s=Mt(),o=Mt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Wi();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(vt.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):st(gg,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{qs:f,Qs:o}})}function ZD(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=eg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function WD(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(u=>u?(o=u,Y.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Mr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function Dm(r,t,n){const s=St(r),o=s.xs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!oo(f))throw f;st(gg,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function IE(r,t,n){const s=St(r);let o=vt.min(),u=Mt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const w=St(p),R=w.Os.get(E);return R!==void 0?Y.resolve(w.xs.get(R)):w.Ti.getTargetData(y,E)}(s,f,pi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:vt.min(),n?u:Mt())).next(m=>(JD(s,B2(t),m),{documents:m,$s:u})))}function JD(r,t,n){let s=r.Ns.get(t)||vt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Ns.set(t,s)}class CE{constructor(){this.activeTargetIds=Q2()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tO{constructor(){this.xo=new CE,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new CE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class eO{No(t){}shutdown(){}}/**
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
 */const DE="ConnectivityMonitor";class OE{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){st(DE,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){st(DE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function Om(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
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
 */const sm="RestConnection",nO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iO{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===sh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,u){const f=Om(),m=this.jo(t,n.toUriEncodedString());st(sm,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,u);const{host:y}=new URL(m),E=Ql(y);return this.Jo(t,m,p,s,E).then(w=>(st(sm,`Received RPC '${t}' ${f}: `,w),w),w=>{throw Za(sm,`RPC '${t}' ${f} failed with error: `,w,"url: ",m,"request:",s),w})}Yo(t,n,s,o,u,f){return this.zo(t,n,s,o,u)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+so}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}jo(t,n){const s=nO[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
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
 */class rO{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Ke="WebChannelConnection";class sO extends iO{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=Om();return new Promise((m,p)=>{const y=new _0;y.setWithCredentials(!0),y.listenOnce(v0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case jc.NO_ERROR:const w=y.getResponseJson();st(Ke,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),m(w);break;case jc.TIMEOUT:st(Ke,`RPC '${t}' ${f} timed out`),p(new rt(G.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const R=y.getStatus();if(st(Ke,`RPC '${t}' ${f} failed with status:`,R,"response text:",y.getResponseText()),R>0){let q=y.getResponseJson();Array.isArray(q)&&(q=q[0]);const $=q==null?void 0:q.error;if($&&$.status&&$.message){const et=function(Tt){const dt=Tt.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(dt)>=0?dt:G.UNKNOWN}($.status);p(new rt(et,$.message))}else p(new rt(G.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new rt(G.UNAVAILABLE,"Connection failed."));break;default:ft(9055,{h_:t,streamId:f,P_:y.getLastErrorCode(),T_:y.getLastError()})}}finally{st(Ke,`RPC '${t}' ${f} completed.`)}});const E=JSON.stringify(o);st(Ke,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}I_(t,n,s){const o=Om(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=A0(),m=T0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");st(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);this.E_(w);let R=!1,q=!1;const $=new rO({Zo:Z=>{q?st(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,Z):(R||(st(Ke,`Opening RPC '${t}' stream ${o} transport.`),w.open(),R=!0),st(Ke,`RPC '${t}' stream ${o} sending:`,Z),w.send(Z))},Xo:()=>w.close()}),et=(Z,Tt,dt)=>{Z.listen(Tt,lt=>{try{dt(lt)}catch(Dt){setTimeout(()=>{throw Dt},0)}})};return et(w,wl.EventType.OPEN,()=>{q||(st(Ke,`RPC '${t}' stream ${o} transport opened.`),$.__())}),et(w,wl.EventType.CLOSE,()=>{q||(q=!0,st(Ke,`RPC '${t}' stream ${o} transport closed`),$.u_(),this.d_(w))}),et(w,wl.EventType.ERROR,Z=>{q||(q=!0,Za(Ke,`RPC '${t}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),$.u_(new rt(G.UNAVAILABLE,"The operation could not be completed")))}),et(w,wl.EventType.MESSAGE,Z=>{var Tt;if(!q){const dt=Z.data[0];Pt(!!dt,16349);const lt=dt,Dt=(lt==null?void 0:lt.error)||((Tt=lt[0])===null||Tt===void 0?void 0:Tt.error);if(Dt){st(Ke,`RPC '${t}' stream ${o} received error:`,Dt);const yt=Dt.status;let It=function(I){const N=Ee[I];if(N!==void 0)return sA(N)}(yt),V=Dt.message;It===void 0&&(It=G.INTERNAL,V="Unknown error status: "+yt+" with message "+Dt.message),q=!0,$.u_(new rt(It,V)),w.close()}else st(Ke,`RPC '${t}' stream ${o} received:`,dt),$.c_(dt)}}),et(m,E0.STAT_EVENT,Z=>{Z.stat===vm.PROXY?st(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):Z.stat===vm.NOPROXY&&st(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.a_()},0),$}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(n=>n===t)}}function am(){return typeof document<"u"?document:null}/**
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
 */function Vh(r){return new uD(r,!0)}/**
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
 */class pg{constructor(t,n,s=1e3,o=1.5,u=6e4){this.xi=t,this.timerId=n,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const NE="PersistentStream";class TA{constructor(t,n,s,o,u,f,m,p){this.xi=t,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new pg(t,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(Zi(n.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===n&&this.z_(s,o)},s=>{t(()=>{const o=new rt(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(t,n){const s=this.G_(this.v_);this.stream=this.H_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return st(NE,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return n=>{this.xi.enqueueAndForget(()=>this.v_===t?n():(st(NE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aO extends TA{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}H_(t,n){return this.connection.I_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const n=dD(this.serializer,t),s=function(u){if(!("targetChange"in u))return vt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?vt.min():f.readTime?An(f.readTime):vt.min()}(t);return this.listener.Y_(n,s)}Z_(t){const n={};n.database=Cm(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=wm(p)?{documents:gD(u,p)}:{query:dA(u,p).gt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=lA(u,f.resumeToken);const y=Rm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(vt.min())>0){m.readTime=hh(u,f.snapshotVersion.toTimestamp());const y=Rm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=_D(this.serializer,t);s&&(n.labels=s),this.Q_(n)}X_(t){const n={};n.database=Cm(this.serializer),n.removeTarget=t,this.Q_(n)}}class oO extends TA{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,n){return this.connection.I_("Write",t,n)}J_(t){return Pt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Pt(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){Pt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const n=mD(t.writeResults,t.commitTime),s=An(t.commitTime);return this.listener.ra(s,n)}ia(){const t={};t.database=Cm(this.serializer),this.Q_(t)}ta(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>fA(this.serializer,s))};this.Q_(n)}}/**
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
 */class lO{}class uO extends lO{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new rt(G.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.zo(t,Im(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new rt(G.UNKNOWN,u.toString())})}Yo(t,n,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Yo(t,Im(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new rt(G.UNKNOWN,f.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class cO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Zi(n),this.ua=!1):st("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Fs="RemoteStore";class hO{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(f=>{s.enqueueAndForget(async()=>{$s(this)&&(st(Fs,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.da.add(4),await eu(y),y.Va.set("Unknown"),y.da.delete(4),await Mh(y)}(this))})}),this.Va=new cO(s,o)}}async function Mh(r){if($s(r))for(const t of r.Aa)await t(!0)}async function eu(r){for(const t of r.Aa)await t(!1)}function AA(r,t){const n=St(r);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),Eg(n)?vg(n):uo(n).N_()&&_g(n,t))}function yg(r,t){const n=St(r),s=uo(n);n.Ea.delete(t),s.N_()&&SA(n,t),n.Ea.size===0&&(s.N_()?s.k_():$s(n)&&n.Va.set("Unknown"))}function _g(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(vt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}uo(r).Z_(t)}function SA(r,t){r.ma.Ke(t),uo(r).X_(t)}function vg(r){r.ma=new sD({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),uo(r).start(),r.Va.ca()}function Eg(r){return $s(r)&&!uo(r).O_()&&r.Ea.size>0}function $s(r){return St(r).da.size===0}function wA(r){r.ma=void 0}async function fO(r){r.Va.set("Online")}async function dO(r){r.Ea.forEach((t,n)=>{_g(r,t)})}async function mO(r,t){wA(r),Eg(r)?(r.Va.Pa(t),vg(r)):r.Va.set("Unknown")}async function gO(r,t,n){if(r.Va.set("Online"),t instanceof oA&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ea.delete(m),o.ma.removeTarget(m))}(r,t)}catch(s){st(Fs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await mh(r,s)}else if(t instanceof Qc?r.ma.Xe(t):t instanceof aA?r.ma.ot(t):r.ma.nt(t),!n.isEqual(vt.min()))try{const s=await EA(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.ma.It(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ea.get(y);E&&u.Ea.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.Ea.get(p);if(!E)return;u.Ea.set(p,E.withResumeToken(He.EMPTY_BYTE_STRING,E.snapshotVersion)),SA(u,p);const w=new Mr(E.target,p,y,E.sequenceNumber);_g(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){st(Fs,"Failed to raise snapshot:",s),await mh(r,s)}}async function mh(r,t,n){if(!oo(t))throw t;r.da.add(1),await eu(r),r.Va.set("Offline"),n||(n=()=>EA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(Fs,"Retrying IndexedDB access"),await n(),r.da.delete(1),await Mh(r)})}function bA(r,t){return t().catch(n=>mh(r,n,t))}async function Ph(r){const t=St(r),n=Hr(t);let s=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:eg;for(;pO(t);)try{const o=await ZD(t.localStore,s);if(o===null){t.Ia.length===0&&n.k_();break}s=o.batchId,yO(t,o)}catch(o){await mh(t,o)}RA(t)&&IA(t)}function pO(r){return $s(r)&&r.Ia.length<10}function yO(r,t){r.Ia.push(t);const n=Hr(r);n.N_()&&n.ea&&n.ta(t.mutations)}function RA(r){return $s(r)&&!Hr(r).O_()&&r.Ia.length>0}function IA(r){Hr(r).start()}async function _O(r){Hr(r).ia()}async function vO(r){const t=Hr(r);for(const n of r.Ia)t.ta(n.mutations)}async function EO(r,t,n){const s=r.Ia.shift(),o=ug.from(s,t,n);await bA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Ph(r)}async function TO(r,t){t&&Hr(r).ea&&await async function(s,o){if(function(f){return rA(f)&&f!==G.ABORTED}(o.code)){const u=s.Ia.shift();Hr(s).L_(),await bA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ph(s)}}(r,t),RA(r)&&IA(r)}async function VE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),st(Fs,"RemoteStore received new credentials");const s=$s(n);n.da.add(3),await eu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await Mh(n)}async function AO(r,t){const n=St(r);t?(n.da.delete(2),await Mh(n)):t||(n.da.add(2),await eu(n),n.Va.set("Unknown"))}function uo(r){return r.fa||(r.fa=function(n,s,o){const u=St(n);return u.oa(),new aO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:fO.bind(null,r),n_:dO.bind(null,r),i_:mO.bind(null,r),Y_:gO.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),Eg(r)?vg(r):r.Va.set("Unknown")):(await r.fa.stop(),wA(r))})),r.fa}function Hr(r){return r.ga||(r.ga=function(n,s,o){const u=St(n);return u.oa(),new oO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:_O.bind(null,r),i_:TO.bind(null,r),na:vO.bind(null,r),ra:EO.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await Ph(r)):(await r.ga.stop(),r.Ia.length>0&&(st(Fs,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
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
 */class Tg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new Tg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(G.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ag(r,t){if(Zi("AsyncQueue",`${t}: ${r}`),oo(r))return new rt(G.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class $a{static emptySet(t){return new $a(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ct.comparator(n.key,s.key):(n,s)=>ct.comparator(n.key,s.key),this.keyedMap=bl(),this.sortedSet=new ae(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof $a)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new $a;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class ME{constructor(){this.pa=new ae(ct.comparator)}track(t){const n=t.doc.key,s=this.pa.get(n);s?t.type!==0&&s.type===3?this.pa=this.pa.insert(n,t):t.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pa=this.pa.remove(n):t.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:t.doc}):ft(63341,{Vt:t,ya:s}):this.pa=this.pa.insert(n,t)}wa(){const t=[];return this.pa.inorderTraversal((n,s)=>{t.push(s)}),t}}class no{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new no(t,n,$a.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ih(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class SO{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class wO{constructor(){this.queries=PE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=PE(),u.forEach((f,m)=>{for(const p of m.Sa)p.onError(s)})})(this,new rt(G.ABORTED,"Firestore shutting down"))}}function PE(){return new Xs(r=>G0(r),Ih)}async function CA(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Da()&&t.va()&&(s=2):(u=new SO,s=t.va()?0:1);try{switch(s){case 0:u.ba=await n.onListen(o,!0);break;case 1:u.ba=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Ag(f,`Initialization of query '${Fa(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.Fa(n.onlineState),u.ba&&t.Ma(u.ba)&&Sg(n)}async function DA(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.va()?0:1:!u.Da()&&t.va()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function bO(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Ma(o)&&(s=!0);f.ba=o}}s&&Sg(n)}function RO(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function Sg(r){r.Ca.forEach(t=>{t.next()})}var Nm,xE;(xE=Nm||(Nm={})).xa="default",xE.Cache="cache";class OA{constructor(t,n,s){this.query=t,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new no(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Na?this.La(t)&&(this.Oa.next(t),n=!0):this.ka(t,this.onlineState)&&(this.qa(t),n=!0),this.Ba=t,n}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),n=!0),n}ka(t,n){if(!t.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}La(t){if(t.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(t){t=no.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Nm.Cache}}/**
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
 */class NA{constructor(t){this.key=t}}class VA{constructor(t){this.key=t}}class IO{constructor(t,n){this.query=t,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Mt(),this.mutatedKeys=Mt(),this.Za=Q0(t),this.Xa=new $a(this.Za)}get eu(){return this.Ha}tu(t,n){const s=n?n.nu:new ME,o=n?n.Xa:this.Xa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,w)=>{const R=o.get(E),q=Ch(this.query,w)?w:null,$=!!R&&this.mutatedKeys.has(R.key),et=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let Z=!1;R&&q?R.data.isEqual(q.data)?$!==et&&(s.track({type:3,doc:q}),Z=!0):this.ru(R,q)||(s.track({type:2,doc:q}),Z=!0,(p&&this.Za(q,p)>0||y&&this.Za(q,y)<0)&&(m=!0)):!R&&q?(s.track({type:0,doc:q}),Z=!0):R&&!q&&(s.track({type:1,doc:R}),Z=!0,(p||y)&&(m=!0)),Z&&(q?(f=f.add(q),u=et?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Xa:f,nu:s,Cs:m,mutatedKeys:u}}ru(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const f=t.nu.wa();f.sort((E,w)=>function(q,$){const et=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ft(20277,{Vt:Z})}};return et(q)-et($)}(E.type,w.type)||this.Za(E.doc,w.doc)),this.iu(s),o=o!=null&&o;const m=n&&!o?this.su():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Ja;return this.Ja=p,f.length!==0||y?{snapshot:new no(this.query,t.Xa,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ME,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Mt(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return t.forEach(s=>{this.Ya.has(s)||n.push(new VA(s))}),this.Ya.forEach(s=>{t.has(s)||n.push(new NA(s))}),n}au(t){this.Ha=t.$s,this.Ya=Mt();const n=this.tu(t.documents);return this.applyChanges(n,!0)}uu(){return no.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const wg="SyncEngine";class CO{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class DO{constructor(t){this.key=t,this.cu=!1}}class OO{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.lu={},this.hu=new Xs(m=>G0(m),Ih),this.Pu=new Map,this.Tu=new Set,this.Iu=new ae(ct.comparator),this.Eu=new Map,this.du=new fg,this.Au={},this.Ru=new Map,this.Vu=eo.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function NO(r,t,n=!0){const s=LA(r);let o;const u=s.hu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await MA(s,t,n,!0),o}async function VO(r,t){const n=LA(r);await MA(n,t,!0,!1)}async function MA(r,t,n,s){const o=await WD(r.localStore,pi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await MO(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&AA(r.remoteStore,o),m}async function MO(r,t,n,s,o){r.fu=(w,R,q)=>async function(et,Z,Tt,dt){let lt=Z.view.tu(Tt);lt.Cs&&(lt=await IE(et.localStore,Z.query,!1).then(({documents:V})=>Z.view.tu(V,lt)));const Dt=dt&&dt.targetChanges.get(Z.targetId),yt=dt&&dt.targetMismatches.get(Z.targetId)!=null,It=Z.view.applyChanges(lt,et.isPrimaryClient,Dt,yt);return UE(et,Z.targetId,It.ou),It.snapshot}(r,w,R,q);const u=await IE(r.localStore,t,!0),f=new IO(t,u.$s),m=f.tu(u.documents),p=tu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);UE(r,n,y.ou);const E=new CO(t,n,f);return r.hu.set(t,E),r.Pu.has(n)?r.Pu.get(n).push(t):r.Pu.set(n,[t]),y.snapshot}async function PO(r,t,n){const s=St(r),o=s.hu.get(t),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(f=>!Ih(f,t))),void s.hu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Dm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&yg(s.remoteStore,o.targetId),Vm(s,o.targetId)}).catch(ao)):(Vm(s,o.targetId),await Dm(s.localStore,o.targetId,!0))}async function xO(r,t){const n=St(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),yg(n.remoteStore,s.targetId))}async function kO(r,t,n){const s=HO(r);try{const o=await function(f,m){const p=St(f),y=Ie.now(),E=m.reduce((q,$)=>q.add($.key),Mt());let w,R;return p.persistence.runTransaction("Locally write mutations","readwrite",q=>{let $=Wi(),et=Mt();return p.Bs.getEntries(q,E).next(Z=>{$=Z,$.forEach((Tt,dt)=>{dt.isValidDocument()||(et=et.add(Tt))})}).next(()=>p.localDocuments.getOverlayedDocuments(q,$)).next(Z=>{w=Z;const Tt=[];for(const dt of m){const lt=J2(dt,w.get(dt.key).overlayedDocument);lt!=null&&Tt.push(new Xr(dt.key,lt,k0(lt.value.mapValue),Xe.exists(!0)))}return p.mutationQueue.addMutationBatch(q,y,Tt,m)}).next(Z=>{R=Z;const Tt=Z.applyToLocalDocumentSet(w,et);return p.documentOverlayCache.saveOverlays(q,Z.batchId,Tt)})}).then(()=>({batchId:R.batchId,changes:Y0(w)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Au[f.currentUser.toKey()];y||(y=new ae(Rt)),y=y.insert(m,p),f.Au[f.currentUser.toKey()]=y}(s,o.batchId,n),await nu(s,o.changes),await Ph(s.remoteStore)}catch(o){const u=Ag(o,"Failed to persist write");n.reject(u)}}async function PA(r,t){const n=St(r);try{const s=await XD(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(Pt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.cu=!0:o.modifiedDocuments.size>0?Pt(f.cu,14607):o.removedDocuments.size>0&&(Pt(f.cu,42227),f.cu=!1))}),await nu(n,s,t)}catch(s){await ao(s)}}function kE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.hu.forEach((u,f)=>{const m=f.view.Fa(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=St(f);p.onlineState=m;let y=!1;p.queries.forEach((E,w)=>{for(const R of w.Sa)R.Fa(m)&&(y=!0)}),y&&Sg(p)}(s.eventManager,t),o.length&&s.lu.Y_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function UO(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Eu.get(t),u=o&&o.key;if(u){let f=new ae(ct.comparator);f=f.insert(u,xe.newNoDocument(u,vt.min()));const m=Mt().add(u),p=new Nh(vt.min(),new Map,new ae(Rt),f,m);await PA(s,p),s.Iu=s.Iu.remove(u),s.Eu.delete(t),bg(s)}else await Dm(s.localStore,t,!1).then(()=>Vm(s,t,n)).catch(ao)}async function LO(r,t){const n=St(r),s=t.batch.batchId;try{const o=await YD(n.localStore,t);kA(n,s,null),xA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nu(n,o)}catch(o){await ao(o)}}async function zO(r,t,n){const s=St(r);try{const o=await function(f,m){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(w=>(Pt(w!==null,37113),E=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,t);kA(s,t,n),xA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await nu(s,o)}catch(o){await ao(o)}}function xA(r,t){(r.Ru.get(t)||[]).forEach(n=>{n.resolve()}),r.Ru.delete(t)}function kA(r,t,n){const s=St(r);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Au[s.currentUser.toKey()]=o}}function Vm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Pu.get(t))r.hu.delete(s),n&&r.lu.gu(s,n);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(s=>{r.du.containsKey(s)||UA(r,s)})}function UA(r,t){r.Tu.delete(t.path.canonicalString());const n=r.Iu.get(t);n!==null&&(yg(r.remoteStore,n),r.Iu=r.Iu.remove(t),r.Eu.delete(n),bg(r))}function UE(r,t,n){for(const s of n)s instanceof NA?(r.du.addReference(s.key,t),BO(r,s)):s instanceof VA?(st(wg,"Document no longer in limbo: "+s.key),r.du.removeReference(s.key,t),r.du.containsKey(s.key)||UA(r,s.key)):ft(19791,{pu:s})}function BO(r,t){const n=t.key,s=n.path.canonicalString();r.Iu.get(n)||r.Tu.has(s)||(st(wg,"New document in limbo: "+n),r.Tu.add(s),bg(r))}function bg(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const n=new ct(Jt.fromString(t)),s=r.Vu.next();r.Eu.set(s,new DO(n)),r.Iu=r.Iu.insert(n,s),AA(r.remoteStore,new Mr(pi(ag(n.path)),s,"TargetPurposeLimboResolution",bh.le))}}async function nu(r,t,n){const s=St(r),o=[],u=[],f=[];s.hu.isEmpty()||(s.hu.forEach((m,p)=>{f.push(s.fu(p,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=mg.Rs(p.targetId,y);u.push(w)}}))}),await Promise.all(f),s.lu.Y_(o),await async function(p,y){const E=St(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>Y.forEach(y,R=>Y.forEach(R.ds,q=>E.persistence.referenceDelegate.addReference(w,R.targetId,q)).next(()=>Y.forEach(R.As,q=>E.persistence.referenceDelegate.removeReference(w,R.targetId,q)))))}catch(w){if(!oo(w))throw w;st(gg,"Failed to update sequence numbers: "+w)}for(const w of y){const R=w.targetId;if(!w.fromCache){const q=E.xs.get(R),$=q.snapshotVersion,et=q.withLastLimboFreeSnapshotVersion($);E.xs=E.xs.insert(R,et)}}}(s.localStore,u))}async function qO(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){st(wg,"User change. New user:",t.toKey());const s=await vA(n.localStore,t);n.currentUser=t,function(u,f){u.Ru.forEach(m=>{m.forEach(p=>{p.reject(new rt(G.CANCELLED,f))})}),u.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await nu(n,s.ks)}}function jO(r,t){const n=St(r),s=n.Eu.get(t);if(s&&s.cu)return Mt().add(s.key);{let o=Mt();const u=n.Pu.get(t);if(!u)return o;for(const f of u){const m=n.hu.get(f);o=o.unionWith(m.view.eu)}return o}}function LA(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=PA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=UO.bind(null,t),t.lu.Y_=bO.bind(null,t.eventManager),t.lu.gu=RO.bind(null,t.eventManager),t}function HO(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zO.bind(null,t),t}class gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vh(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,n){return null}Cu(t,n){return null}Du(t){return KD(this.persistence,new FD,t.initialUser,this.serializer)}Su(t){return new _A(dg.fi,this.serializer)}bu(t){return new tO}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gh.provider={build:()=>new gh};class FO extends gh{constructor(t){super(),this.cacheSizeBytes=t}vu(t,n){Pt(this.persistence.referenceDelegate instanceof dh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new DD(s,t.asyncQueue,n)}Su(t){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new _A(s=>dh.fi(s,n),this.serializer)}}class Mm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qO.bind(null,this.syncEngine),await AO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wO}()}createDatastore(t){const n=Vh(t.databaseInfo.databaseId),s=function(u){return new sO(u)}(t.databaseInfo);return function(u,f,m,p){return new uO(u,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new hO(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>kE(this.syncEngine,n,0),function(){return OE.C()?new OE:new eO}())}createSyncEngine(t,n){return function(o,u,f,m,p,y,E){const w=new OO(o,u,f,m,p,y);return E&&(w.mu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);st(Fs,"RemoteStore shutting down."),u.da.add(5),await eu(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mm.provider={build:()=>new Mm};/**
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
 */class zA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Zi("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class GO{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new rt(G.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(o,u){const f=St(o),m={documents:u.map(w=>fh(f.serializer,w))},p=await f.Yo("BatchGetDocuments",f.serializer.databaseId,Jt.emptyPath(),m,u.length),y=new Map;p.forEach(w=>{const R=fD(f.serializer,w);y.set(R.key.toString(),R)});const E=[];return u.forEach(w=>{const R=y.get(w.toString());Pt(!!R,55234,{key:w}),E.push(R)}),E}(this.datastore,t);return n.forEach(s=>this.recordVersion(s)),n}set(t,n){this.write(n.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,n){try{this.write(n.toMutation(t,this.preconditionForUpdate(t)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(t.toString())}delete(t){this.write(new lg(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(n=>{t.delete(n.key.toString())}),t.forEach((n,s)=>{const o=ct.fromPath(s);this.mutations.push(new iA(o,this.precondition(o)))}),await async function(s,o){const u=St(s),f={writes:o.map(m=>fA(u.serializer,m))};await u.zo("Commit",u.serializer.databaseId,Jt.emptyPath(),f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let n;if(t.isFoundDocument())n=t.version;else{if(!t.isNoDocument())throw ft(50498,{Uu:t.constructor.name});n=vt.min()}const s=this.readVersions.get(t.key.toString());if(s){if(!n.isEqual(s))throw new rt(G.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),n)}precondition(t){const n=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&n?n.isEqual(vt.min())?Xe.exists(!1):Xe.updateTime(n):Xe.none()}preconditionForUpdate(t){const n=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&n){if(n.isEqual(vt.min()))throw new rt(G.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Xe.updateTime(n)}return Xe.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class QO{constructor(t,n,s,o,u){this.asyncQueue=t,this.datastore=n,this.options=s,this.updateFunction=o,this.deferred=u,this.Ku=s.maxAttempts,this.x_=new pg(this.asyncQueue,"transaction_retry")}Wu(){this.Ku-=1,this.Gu()}Gu(){this.x_.y_(async()=>{const t=new GO(this.datastore),n=this.zu(t);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(s)}).catch(o=>{this.ju(o)}))}).catch(s=>{this.ju(s)})})}zu(t){try{const n=this.updateFunction(t);return!Wl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ju(t){this.Ku>0&&this.Hu(t)?(this.Ku-=1,this.asyncQueue.enqueueAndForget(()=>(this.Gu(),Promise.resolve()))):this.deferred.reject(t)}Hu(t){if(t.name==="FirebaseError"){const n=t.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!rA(n)}return!1}}/**
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
 */const Fr="FirestoreClient";class KO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ye.UNAUTHENTICATED,this.clientId=R0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(Fr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(Fr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ag(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function om(r,t){r.asyncQueue.verifyOperationInProgress(),st(Fr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await vA(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function LE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await YO(r);st(Fr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>VE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>VE(t.remoteStore,o)),r._onlineComponents=t}async function YO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(Fr,"Using user provided OfflineComponentProvider");try{await om(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Za("Error using user provided cache. Falling back to memory cache: "+n),await om(r,new gh)}}else st(Fr,"Using default OfflineComponentProvider"),await om(r,new FO(void 0));return r._offlineComponents}async function Rg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(Fr,"Using user provided OnlineComponentProvider"),await LE(r,r._uninitializedComponentsProvider._online)):(st(Fr,"Using default OnlineComponentProvider"),await LE(r,new Mm))),r._onlineComponents}function XO(r){return Rg(r).then(t=>t.syncEngine)}function BA(r){return Rg(r).then(t=>t.datastore)}async function qA(r){const t=await Rg(r),n=t.eventManager;return n.onListen=NO.bind(null,t.syncEngine),n.onUnlisten=PO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=VO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=xO.bind(null,t.syncEngine),n}function $O(r,t,n={}){const s=new Yn;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new zA({next:R=>{E.xu(),f.enqueueAndForget(()=>DA(u,w));const q=R.docs.has(m);!q&&R.fromCache?y.reject(new rt(G.UNAVAILABLE,"Failed to get document because the client is offline.")):q&&R.fromCache&&p&&p.source==="server"?y.reject(new rt(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(R)},error:R=>y.reject(R)}),w=new OA(ag(m.path),E,{includeMetadataChanges:!0,Qa:!0});return CA(u,w)}(await qA(r),r.asyncQueue,t,n,s)),s.promise}function ZO(r,t,n={}){const s=new Yn;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new zA({next:R=>{E.xu(),f.enqueueAndForget(()=>DA(u,w)),R.fromCache&&p.source==="server"?y.reject(new rt(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),w=new OA(m,E,{includeMetadataChanges:!0,Qa:!0});return CA(u,w)}(await qA(r),r.asyncQueue,t,n,s)),s.promise}function WO(r,t,n){const s=new Yn;return r.asyncQueue.enqueueAndForget(async()=>{try{const o=await BA(r);s.resolve(async function(f,m,p){var y;const E=St(f),{request:w,yt:R,parent:q}=pD(E.serializer,z2(m),p);E.connection.Uo||delete w.parent;const $=(await E.Yo("RunAggregationQuery",E.serializer.databaseId,q,w,1)).filter(Z=>!!Z.result);Pt($.length===1,64727);const et=(y=$[0].result)===null||y===void 0?void 0:y.aggregateFields;return Object.keys(et).reduce((Z,Tt)=>(Z[R[Tt]]=et[Tt],Z),{})}(o,t,n))}catch(o){s.reject(o)}}),s.promise}/**
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
 */function jA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const zE=new Map;/**
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
 */function HA(r,t,n){if(!n)throw new rt(G.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function JO(r,t,n,s){if(t===!0&&s===!0)throw new rt(G.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function BE(r){if(!ct.isDocumentKey(r))throw new rt(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function qE(r){if(ct.isDocumentKey(r))throw new rt(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function xh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":ft(12329,{type:typeof r})}function zn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new rt(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xh(r);throw new rt(G.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}function tN(r,t){if(t<=0)throw new rt(G.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */const FA="firestore.googleapis.com",jE=!0;class HE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=FA,this.ssl=jE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:jE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=yA;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ID)throw new rt(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}JO("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new rt(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new rt(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new rt(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new HE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rt(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new rt(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new HE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new r2;switch(s.type){case"firstParty":return new l2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new rt(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=zE.get(n);s&&(st("ComponentProvider","Removing Datastore"),zE.delete(n),s.terminate())}(this),Promise.resolve()}}function eN(r,t,n,s={}){var o;r=zn(r,kh);const u=Ql(t),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${n}`;u&&(sT(`https://${p}`),aT("Firestore",!0)),f.host!==FA&&f.host!==p&&Za("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:u,emulatorOptions:s});if(!Lr(y,m)&&(r._setSettings(y),s.mockUserToken)){let E,w;if(typeof s.mockUserToken=="string")E=s.mockUserToken,w=Ye.MOCK_USER;else{E=Kw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new rt(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ye(R)}r._authCredentials=new s2(new w0(E,w))}}/**
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
 */class $r{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $r(this.firestore,t,this._query)}}class $e{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $e(this.firestore,t,this._key)}}class Ur extends $r{constructor(t,n,s){super(t,n,ag(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $e(this.firestore,null,new ct(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function Uc(r,t,...n){if(r=ce(r),HA("collection","path",t),r instanceof kh){const s=Jt.fromString(t,...n);return qE(s),new Ur(r,null,s)}{if(!(r instanceof $e||r instanceof Ur))throw new rt(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return qE(s),new Ur(r.firestore,null,s)}}function Gs(r,t,...n){if(r=ce(r),arguments.length===1&&(t=R0.newId()),HA("doc","path",t),r instanceof kh){const s=Jt.fromString(t,...n);return BE(s),new $e(r,null,new ct(s))}{if(!(r instanceof $e||r instanceof Ur))throw new rt(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...n));return BE(s),new $e(r.firestore,r instanceof Ur?r.converter:null,new ct(s))}}/**
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
 */const FE="AsyncQueue";class GE{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new pg(this,"async_queue_retry"),this.rc=()=>{const s=am();s&&st(FE,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=t;const n=am();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const n=am();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Yn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!oo(t))throw t;st(FE,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const n=this.sc.then(()=>(this.ec=!0,t().catch(s=>{throw this.Xu=s,this.ec=!1,Zi("INTERNAL UNHANDLED ERROR: ",QE(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(t,n,s){this.oc(),this.nc.indexOf(t)>-1&&(n=0);const o=Tg.createAndSchedule(this,t,n,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&ft(47125,{cc:QE(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const n of this.Zu)if(n.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const n=this.Zu.indexOf(t);this.Zu.splice(n,1)}}function QE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Zr extends kh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new GE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new GE(t),this._firestoreClient=void 0,await t}}}function nN(r,t){const n=typeof r=="object"?r:Um(),s=typeof r=="string"?r:sh,o=Ys(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Gw("firestore");u&&eN(o,...u)}return o}function iu(r){if(r._terminated)throw new rt(G.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iN(r),r._firestoreClient}function iN(r){var t,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new w2(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,jA(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new KO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class rN{constructor(t="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=t}}class sN{constructor(t,n,s){this._userDataWriter=n,this._data=s,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Qs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qs(He.fromBase64String(t))}catch(n){throw new rt(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qs(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ru{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ig{constructor(t){this._methodName=t}}/**
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
 */class Cg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Rt(this._lat,t._lat)||Rt(this._long,t._long)}}/**
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
 */class Dg{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const aN=/^__.*__$/;class oN{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(t,this.data,n,this.fieldTransforms)}}class GA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function QA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ft(40011,{Ic:r})}}class Og{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new Og(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Vc(t),o}mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return ph(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(QA(this.Ic)&&aN.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class lN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Vh(t)}bc(t,n,s,o=!1){return new Og({Ic:t,methodName:n,wc:s,path:je.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(r){const t=r._freezeSettings(),n=Vh(r._databaseId);return new lN(r._databaseId,!!t.ignoreUndefinedProperties,n)}function Ng(r,t,n,s,o,u={}){const f=r.bc(u.merge||u.mergeFields?2:0,t,n,o);Vg("Data must be an object, but it was:",f,s);const m=XA(s,f);let p,y;if(u.merge)p=new En(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const R=Pm(t,w,n);if(!f.contains(R))throw new rt(G.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ZA(E,R)||E.push(R)}p=new En(E),y=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=f.fieldTransforms;return new oN(new nn(m),p,y)}class Uh extends Ig{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Uh}}function KA(r,t,n,s){const o=r.bc(1,t,n);Vg("Data must be an object, but it was:",o,s);const u=[],f=nn.empty();Yr(s,(p,y)=>{const E=Mg(t,p,n);y=ce(y);const w=o.mc(E);if(y instanceof Uh)u.push(E);else{const R=au(y,w);R!=null&&(u.push(E),f.set(E,R))}});const m=new En(u);return new GA(f,m,o.fieldTransforms)}function YA(r,t,n,s,o,u){const f=r.bc(1,t,n),m=[Pm(t,s,n)],p=[o];if(u.length%2!=0)throw new rt(G.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push(Pm(t,u[R])),p.push(u[R+1]);const y=[],E=nn.empty();for(let R=m.length-1;R>=0;--R)if(!ZA(y,m[R])){const q=m[R];let $=p[R];$=ce($);const et=f.mc(q);if($ instanceof Uh)y.push(q);else{const Z=au($,et);Z!=null&&(y.push(q),E.set(q,Z))}}const w=new En(y);return new GA(E,w,f.fieldTransforms)}function uN(r,t,n,s=!1){return au(n,r.bc(s?4:3,t))}function au(r,t){if($A(r=ce(r)))return Vg("Unsupported field value:",t,r),XA(r,t);if(r instanceof Ig)return function(s,o){if(!QA(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=au(m,o.fc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=ce(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return K2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ie.fromDate(s);return{timestampValue:hh(o.serializer,u)}}if(s instanceof Ie){const u=new Ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hh(o.serializer,u)}}if(s instanceof Cg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qs)return{bytesValue:lA(o.serializer,s._byteString)};if(s instanceof $e){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.gc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:hg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Dg)return function(f,m){return{mapValue:{fields:{[P0]:{stringValue:x0},[ah]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.gc("VectorValues must only contain numeric values.");return og(m.serializer,y)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${xh(s)}`)}(r,t)}function XA(r,t){const n={};return C0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yr(r,(s,o)=>{const u=au(o,t.Ac(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function $A(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ie||r instanceof Cg||r instanceof Qs||r instanceof $e||r instanceof Ig||r instanceof Dg)}function Vg(r,t,n){if(!$A(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=xh(n);throw s==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+s)}}function Pm(r,t,n){if((t=ce(t))instanceof ru)return t._internalPath;if(typeof t=="string")return Mg(r,t);throw ph("Field path arguments must be of type string or ",r,!1,void 0,n)}const cN=new RegExp("[~\\*/\\[\\]]");function Mg(r,t,n){if(t.search(cN)>=0)throw ph(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new ru(...t.split("."))._internalPath}catch{throw ph(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ph(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new rt(G.INVALID_ARGUMENT,m+r+p)}function ZA(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */class yh{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Lh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hN extends yh{data(){return super.data()}}function Lh(r,t){return typeof t=="string"?Mg(r,t):t instanceof ru?t._internalPath:t._delegate._internalPath}/**
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
 */function fN(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new rt(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pg{}class xg extends Pg{}function lm(r,t,...n){let s=[];t instanceof Pg&&s.push(t),s=s.concat(n),function(u){const f=u.filter(p=>p instanceof kg).length,m=u.filter(p=>p instanceof zh).length;if(f>1||f>0&&m>0)throw new rt(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class zh extends xg{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new zh(t,n,s)}_apply(t){const n=this._parse(t);return WA(t._query,n),new $r(t.firestore,t.converter,bm(t._query,n))}_parse(t){const n=su(t.firestore);return function(u,f,m,p,y,E,w){let R;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new rt(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){ZE(w,E);const $=[];for(const et of w)$.push($E(p,u,et));R={arrayValue:{values:$}}}else R=$E(p,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||ZE(w,E),R=uN(m,f,w,E==="in"||E==="not-in");return Te.create(y,E,R)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function KE(r,t,n){const s=t,o=Lh("where",r);return zh._create(o,s,n)}class kg extends Pg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new kg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)WA(f,p),f=bm(f,p)}(t._query,n),new $r(t.firestore,t.converter,bm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ug extends xg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Ug(t,n)}_apply(t){const n=function(o,u,f){if(o.startAt!==null)throw new rt(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new rt(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hl(u,f)}(t._query,this._field,this._direction);return new $r(t.firestore,t.converter,function(o,u){const f=o.explicitOrderBy.concat([u]);return new lo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(t._query,n))}}function YE(r,t="asc"){const n=t,s=Lh("orderBy",r);return Ug._create(s,n)}class Lg extends xg{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new Lg(t,n,s)}_apply(t){return new $r(t.firestore,t.converter,lh(t._query,this._limit,this._limitType))}}function XE(r){return tN("limit",r),Lg._create("limit",r,"F")}function $E(r,t,n){if(typeof(n=ce(n))=="string"){if(n==="")throw new rt(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H0(t)&&n.indexOf("/")!==-1)throw new rt(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Jt.fromString(n));if(!ct.isDocumentKey(s))throw new rt(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return lE(r,new ct(s))}if(n instanceof $e)return lE(r,n._key);throw new rt(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xh(n)}.`)}function ZE(r,t){if(!Array.isArray(r)||r.length===0)throw new rt(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function WA(r,t){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new rt(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class JA{convertValue(t,n="none"){switch(jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw ft(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Yr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[ah].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>me(f.doubleValue));return new Dg(u)}convertGeoPoint(t){return new Cg(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Rh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bl(t));default:return null}}convertTimestamp(t){const n=Br(t);return new Ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Jt.fromString(t);Pt(pA(s),9688,{name:t});const o=new ql(s.get(1),s.get(3)),u=new ct(s.popFirst(5));return o.isEqual(n)||Zi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function zg(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class dN extends JA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qs(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function mN(){return new rN("count")}/**
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
 */class Qa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bg extends yh{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Lh("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Kc extends Bg{data(t={}){return super.data(t)}}class gN{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Qa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Kc(this._firestore,this._userDataWriter,s.key,s,new Qa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Qa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Qa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:pN(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ft(61501,{type:r})}}/**
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
 */function qg(r){r=zn(r,$e);const t=zn(r.firestore,Zr);return $O(iu(t),r._key).then(n=>vN(t,r,n))}class Bh extends JA{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qs(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function WE(r){r=zn(r,$r);const t=zn(r.firestore,Zr),n=iu(t),s=new Bh(t);return fN(r._query),ZO(n,r._query).then(o=>new gN(t,s,r,o))}function yN(r,t,n){r=zn(r,$e);const s=zn(r.firestore,Zr),o=zg(r.converter,t,n);return jg(s,[Ng(su(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Xe.none())])}function tS(r,t,n,...s){r=zn(r,$e);const o=zn(r.firestore,Zr),u=su(o);let f;return f=typeof(t=ce(t))=="string"||t instanceof ru?YA(u,"updateDoc",r._key,t,n,s):KA(u,"updateDoc",r._key,t),jg(o,[f.toMutation(r._key,Xe.exists(!0))])}function _N(r,t){const n=zn(r.firestore,Zr),s=Gs(r),o=zg(r.converter,t);return jg(n,[Ng(su(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Xe.exists(!1))]).then(()=>s)}function jg(r,t){return function(s,o){const u=new Yn;return s.asyncQueue.enqueueAndForget(async()=>kO(await XO(s),o,u)),u.promise}(iu(r),t)}function vN(r,t,n){const s=n.docs.get(t._key),o=new Bh(r);return new Bg(r,o,t._key,s,new Qa(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */function EN(r){return TN(r,{count:mN()})}function TN(r,t){const n=zn(r.firestore,Zr),s=iu(n),o=A2(t,(u,f)=>new nD(f,u.aggregateType,u._internalFieldPath));return WO(s,r._query,o).then(u=>function(m,p,y){const E=new Bh(m);return new sN(p,E,y)}(n,r,u))}/**
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
 */const AN={maxAttempts:5};function Il(r,t){if((r=ce(r)).firestore!==t)throw new rt(G.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class SN{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=su(t)}get(t){const n=Il(t,this._firestore),s=new dN(this._firestore);return this._transaction.lookup([n._key]).then(o=>{if(!o||o.length!==1)return ft(24041);const u=o[0];if(u.isFoundDocument())return new yh(this._firestore,s,u.key,u,n.converter);if(u.isNoDocument())return new yh(this._firestore,s,n._key,null,n.converter);throw ft(18433,{doc:u})})}set(t,n,s){const o=Il(t,this._firestore),u=zg(o.converter,n,s),f=Ng(this._dataReader,"Transaction.set",o._key,u,o.converter!==null,s);return this._transaction.set(o._key,f),this}update(t,n,s,...o){const u=Il(t,this._firestore);let f;return f=typeof(n=ce(n))=="string"||n instanceof ru?YA(this._dataReader,"Transaction.update",u._key,n,s,o):KA(this._dataReader,"Transaction.update",u._key,n),this._transaction.update(u._key,f),this}delete(t){const n=Il(t,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class wN extends SN{constructor(t,n){super(t,n),this._firestore=t}get(t){const n=Il(t,this._firestore),s=new Bh(this._firestore);return super.get(t).then(o=>new Bg(this._firestore,s,n._key,o._document,new Qa(!1,!1),n.converter))}}function eS(r,t,n){r=zn(r,Zr);const s=Object.assign(Object.assign({},AN),n);return function(u){if(u.maxAttempts<1)throw new rt(G.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(u,f,m){const p=new Yn;return u.asyncQueue.enqueueAndForget(async()=>{const y=await BA(u);new QO(u.asyncQueue,y,m,f,p).Wu()}),p.promise}(iu(r),o=>t(new wN(r,o)),s)}(function(t,n=!0){(function(o){so=o})(io),yi(new Xn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Zr(new a2(s.getProvider("auth-internal")),new u2(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new rt(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Un($v,Zv,t),Un($v,Zv,"esm2017")})();const bN={apiKey:"AIzaSyCrBbn-wkQDxVa7acewAGjm8L3bxd4m5Rc",authDomain:"tapchallengegame-6255f.firebaseapp.com",projectId:"tapchallengegame-6255f",storageBucket:"tapchallengegame-6255f.appspot.com",messagingSenderId:"21650027511",appId:"1:21650027511:web:10b0ad43dcc47b6f3df4f2",measurementId:"G-TDLDQDZRSR"},Hg=dT(bN);LR(Hg);const Tl=n2(Hg),RN=new Gi,kn=nN(Hg),qh="users";async function nS(r){const t=Gs(kn,qh,r),n=await qg(t);if(!n.exists())return await yN(t,{coins:10}),10;const s=n.data();return s.coins===void 0?(await tS(t,{coins:10}),10):s.coins}async function IN(r){const t=Gs(kn,qh,r),n=await qg(t);return!n.exists()||n.data().coins===void 0?nS(r):n.data().coins}async function CN(r,t){const n=Gs(kn,qh,r);return eS(kn,async s=>{const o=await s.get(n),u=o.exists()&&o.data().coins!=null?o.data().coins:await nS(r);if(u<t)throw new Error("Not enough coins");return s.update(n,{coins:u-t}),u-t})}async function DN(r,t){const n=Gs(kn,qh,r);return eS(kn,async s=>{const o=await s.get(n),f=(o.exists()&&o.data().coins!=null?o.data().coins:0)+t;return o.exists()?s.update(n,{coins:f}):s.set(n,{coins:f}),f})}function ON(){const[t,n]=ve.useState(null),[s,o]=ve.useState(!1),[u,f]=ve.useState(""),[m,p]=ve.useState(""),[y,E]=ve.useState(0),[w,R]=ve.useState(0),[q,$]=ve.useState(""),[et,Z]=ve.useState(!1),[Tt,dt]=ve.useState(""),[lt,Dt]=ve.useState(""),[yt,It]=ve.useState(!1);ve.useEffect(()=>FI(Tl,async J=>{if(n(J),!J){o(!1),f(""),E(0),R(0);return}const mt=await IN(J.uid);R(mt);const gt=Gs(kn,"users",J.uid),ne=await qg(gt);ne.exists()&&ne.data().username&&f(ne.data().username);const Bt=lm(Uc(kn,"scores"),KE("uid","==",J.uid),YE("score","desc"),XE(1)),un=await WE(Bt);E(un.empty?0:un.docs[0].data().score),o(!0)}),[]);const V=async()=>{try{yt?await BI(Tl,Tt,lt):await qI(Tl,Tt,lt)}catch(J){alert(J.message)}},S=()=>hC(Tl,RN).catch(J=>alert(J.message)),I=()=>GI(Tl).catch(J=>alert(J.message)),N=async()=>{const J=parseInt(q,10);if(isNaN(J)||J<=0){alert("Enter a valid INR amount");return}Z(!0);try{const mt=J*2,gt=await DN(t.uid,mt);R(gt),$("")}catch(mt){alert(mt.message)}finally{Z(!1)}},M=async()=>{m.trim()&&(await tS(Gs(kn,"users",t.uid),{username:m.trim()}),f(m.trim()))},[P,C]=ve.useState(!1),[Zt,ee]=ve.useState(15),[H,nt]=ve.useState(0);ve.useEffect(()=>{if(!P||Zt<=0)return;const J=setTimeout(()=>ee(mt=>mt-1),1e3);return()=>clearTimeout(J)},[P,Zt]);const[ot,xt]=ve.useState([]),[D,X]=ve.useState(null);ve.useEffect(()=>{Zt===0&&(async()=>{await _N(Uc(kn,"scores"),{uid:t.uid,username:u,score:H,timestamp:Date.now()}),E(Bt=>Math.max(Bt,H));const J=lm(Uc(kn,"scores"),YE("score","desc"),XE(5)),mt=await WE(J);xt(mt.docs.map(Bt=>Bt.data()));const gt=lm(Uc(kn,"scores"),KE("score",">",H)),ne=await EN(gt);X(ne.data().count+1)})()},[Zt,H]);const it=()=>{P||C(!0),Zt>0&&nt(J=>J+1)},W=()=>{C(!1),ee(15),nt(0),xt([]),X(null)};return t?s?u?ht.jsxs("div",{className:"flex flex-col items-center min-h-screen p-4 bg-gray-100",children:[ht.jsxs("div",{className:"w-full flex justify-between mb-4",children:[ht.jsxs("span",{className:"font-medium",children:["Hello, ",u,"! 🪙 ",w]}),ht.jsx("button",{onClick:I,className:"text-sm text-gray-600 hover:underline",children:"Sign out"})]}),ht.jsxs("div",{className:"w-full max-w-md bg-white p-4 rounded shadow mb-6",children:[ht.jsx("h3",{className:"text-lg font-semibold mb-2",children:"💰 Buy Coins"}),ht.jsxs("div",{className:"flex space-x-2",children:[ht.jsx("input",{type:"number",min:"1",value:q,onChange:J=>$(J.target.value),placeholder:"INR",className:"flex-1 border p-2 rounded"}),ht.jsx("button",{onClick:N,disabled:et,className:`px-4 py-2 rounded text-white ${et?"bg-gray-400":"bg-blue-600 hover:bg-blue-700"}`,children:et?"Processing…":"Buy Coins"})]}),ht.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["You’ll receive ",ht.jsx("b",{children:q?q*2:0})," coins."]})]}),ht.jsxs("div",{className:"mb-4",children:["Best: ",ht.jsx("b",{children:y})," | Current: ",ht.jsx("b",{children:H})]}),ht.jsx("div",{className:"w-full flex justify-center mb-6",style:{height:80},children:P?Zt===0?ht.jsxs("div",{className:"text-center",children:[ht.jsx("h2",{className:"text-2xl font-bold text-green-600",children:"🎉 Time’s Up! 🎉"}),ht.jsxs("p",{children:["You tapped ",ht.jsx("b",{children:H})," times."]}),D&&ht.jsxs("p",{children:["Your Rank: ",D]})]}):ht.jsx("div",{}):ht.jsxs("div",{className:"text-center",children:[ht.jsx("h2",{className:"text-2xl font-bold",children:"🎮 15-Second Tap Challenge"}),ht.jsx("p",{className:"text-gray-700",children:"Tap as fast as you can once you hit “Tap Me!”"})]})}),ht.jsxs("div",{className:"text-2xl font-semibold mb-4",children:["Time Left:"," ",ht.jsxs("b",{className:Zt<=5?"text-red-600":"text-red-500",children:[P?Zt:15,"s"]})]}),Zt===0?ht.jsxs("div",{className:"flex flex-col items-center space-y-2 mb-6",children:[ht.jsx("button",{onClick:async()=>{try{const J=await CN(t.uid,20);R(J),nt(mt=>mt*2)}catch(J){alert(J.message)}},disabled:w<20,className:`px-6 py-2 rounded ${w<20?"bg-gray-400 cursor-not-allowed":"bg-yellow-500 hover:bg-yellow-600"} text-white`,children:"🪙 20 Double My Score"}),ht.jsx("button",{onClick:W,className:"bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded",children:"Restart"})]}):ht.jsx("button",{onClick:it,className:"bg-blue-600 hover:bg-blue-700 active:scale-95 transform transition duration-100 ease-out text-xl px-8 py-3 rounded mb-6",children:"Tap Me!"}),ot.length>0&&ht.jsxs("div",{className:"w-full max-w-md bg-white p-4 rounded shadow",children:[ht.jsx("h3",{className:"text-lg font-semibold mb-2",children:"🏆 Top 5 Leaderboard"}),ht.jsx("ol",{className:"list-decimal list-inside",children:ot.map((J,mt)=>ht.jsxs("li",{className:"flex justify-between",children:[ht.jsx("span",{children:J.username}),ht.jsx("span",{children:ht.jsx("b",{children:J.score})})]},mt))})]})]}):ht.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",children:[ht.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Choose a Username"}),ht.jsx("input",{type:"text",placeholder:"Username",value:m,onChange:J=>p(J.target.value),className:"border p-2 rounded mb-4"}),ht.jsx("button",{onClick:M,disabled:!m.trim(),className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50",children:"Save"})]}):ht.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading…"}):ht.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-4",children:[ht.jsxs("div",{className:"space-x-2",children:[ht.jsx("button",{onClick:()=>It(!1),className:`px-4 py-2 rounded ${yt?"bg-gray-200":"bg-blue-600 text-white"}`,children:"Sign In"}),ht.jsx("button",{onClick:()=>It(!0),className:`px-4 py-2 rounded ${yt?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Register"})]}),ht.jsx("input",{type:"email",placeholder:"Email",value:Tt,onChange:J=>dt(J.target.value),className:"border p-2 rounded w-64"}),ht.jsx("input",{type:"password",placeholder:"Password",value:lt,onChange:J=>Dt(J.target.value),className:"border p-2 rounded w-64"}),ht.jsx("button",{onClick:V,className:"bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded",children:yt?"Create Account":"Sign In"}),ht.jsx("div",{className:"mt-4 text-gray-500",children:"Or"}),ht.jsx("button",{onClick:S,className:"bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded",children:"Continue with Google"})]})}kw.createRoot(document.getElementById("root")).render(ht.jsx(ve.StrictMode,{children:ht.jsx(ON,{})}));
