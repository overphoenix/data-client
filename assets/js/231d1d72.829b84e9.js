/*! For license information please see 231d1d72.829b84e9.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[16731],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=k.prototype=new b;g.constructor=k,y(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,S={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:r,type:e,key:i,ref:l,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===o?"."+C(c,0):o,w(i)?(a="",null!=e&&(a=e.replace(E,"$&/")+"/"),_(i,t,a,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",w(e))for(var s=0;s<e.length;s++){var u=o+C(l=e[s],s);c+=_(l,t,a,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),s=0;!(l=e.next()).done;)c+=_(l=l.value,t,a,u=o+C(l,s++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(27378),r(3905));const o={title:"makeExternalCacheProvider()"},i=void 0,l={unversionedId:"api/makeExternalCacheProvider",id:"api/makeExternalCacheProvider",title:"makeExternalCacheProvider()",description:"Used to build a  for makeRenderRestHook()",source:"@site/../docs/api/makeExternalCacheProvider.md",sourceDirName:"api",slug:"/api/makeExternalCacheProvider",permalink:"/docs/api/makeExternalCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeExternalCacheProvider.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1632603076,formattedLastUpdatedAt:"9/25/2021",frontMatter:{title:"makeExternalCacheProvider()"},sidebar:"docs",previous:{title:"makeCacheProvider()",permalink:"/docs/api/makeCacheProvider"},next:{title:"mockInitialState()",permalink:"/docs/api/mockInitialState"}},c={},s=[{value:"Arguments",id:"arguments",level:2},{value:"managers",id:"managers",level:3},{value:"initialState",id:"initialstate",level:3},{value:"Returns",id:"returns",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeExternalCacheProvider: (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,a.kt)("p",null,"Used to build a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," for ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,a.kt)("p",null,"Internally constructs a redux store attaching the middlwares."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"managers"},"managers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Manager")),(0,a.kt)("h3",{id:"initialstate"},"initialState"),(0,a.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeExternalCacheProvider([manager, subscriptionManager]);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}p.isMDXComponent=!0}}]);