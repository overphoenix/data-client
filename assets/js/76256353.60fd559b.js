"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[42679],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(v,i(i({ref:r},p),{},{components:t})):a.createElement(v,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87682:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const o={title:"makeCacheProvider()",id:"makeCacheProvider",original_id:"makeCacheProvider"},i=void 0,c={unversionedId:"api/makeCacheProvider",id:"version-4.1/api/makeCacheProvider",title:"makeCacheProvider()",description:"Used to build a \\ for makeRenderRestHook()",source:"@site/versioned_docs/version-4.1/api/makeCacheProvider.md",sourceDirName:"api",slug:"/api/makeCacheProvider",permalink:"/docs/4.1/api/makeCacheProvider",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeCacheProvider.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"makeCacheProvider()",id:"makeCacheProvider",original_id:"makeCacheProvider"},sidebar:"version-4.1/docs",previous:{title:"makeRenderRestHook()",permalink:"/docs/4.1/api/makeRenderRestHook"},next:{title:"makeExternalCacheProvider()",permalink:"/docs/4.1/api/makeExternalCacheProvider"}},l={},s=[{value:"Arguments",id:"arguments",level:2},{value:"managers",id:"managers",level:3},{value:"initialState",id:"initialstate",level:3},{value:"Returns",id:"returns",level:2}],p=(d="CacheProvider",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const u={toc:s};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeCacheProvider: (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,n.kt)("p",null,"Used to build a ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.1/api/CacheProvider"},"\\",(0,n.kt)(p,{mdxType:"CacheProvider"}))," for ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.1/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("h3",{id:"managers"},"managers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/4.1/api/Manager"},"Manager")),(0,n.kt)("h3",{id:"initialstate"},"initialState"),(0,n.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeCacheProvider([manager, subscriptionManager]);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}m.isMDXComponent=!0}}]);