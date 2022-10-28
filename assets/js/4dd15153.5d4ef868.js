"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44003],{7990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"makeExternalCacheProvider()"},i=void 0,l={unversionedId:"api/makeExternalCacheProvider",id:"version-6.2/api/makeExternalCacheProvider",title:"makeExternalCacheProvider()",description:"Used to build a  for makeRenderRestHook()",source:"@site/versioned_docs/version-6.2/api/makeExternalCacheProvider.md",sourceDirName:"api",slug:"/api/makeExternalCacheProvider",permalink:"/docs/6.2/api/makeExternalCacheProvider",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeExternalCacheProvider.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"makeExternalCacheProvider()"},sidebar:"docs",previous:{title:"makeCacheProvider()",permalink:"/docs/6.2/api/makeCacheProvider"},next:{title:"mockInitialState()",permalink:"/docs/6.2/api/mockInitialState"}},c={},s=[{value:"Arguments",id:"arguments",level:2},{value:"managers",id:"managers",level:3},{value:"initialState",id:"initialstate",level:3},{value:"Returns",id:"returns",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"declare const makeExternalCacheProvider: (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => ({ children }: { children: React.ReactNode }) => JSX.Element;\n")),(0,n.kt)("p",null,"Used to build a ",(0,n.kt)("a",{parentName:"p",href:"/docs/6.2/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," for ",(0,n.kt)("a",{parentName:"p",href:"/docs/6.2/api/makeRenderRestHook"},"makeRenderRestHook()")),(0,n.kt)("p",null,"Internally constructs a redux store attaching the middlwares."),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("h3",{id:"managers"},"managers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/6.2/api/Manager"},"Manager")),(0,n.kt)("h3",{id:"initialstate"},"initialState"),(0,n.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled."),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("p",null,"Simple wrapper component that only has child as prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const manager = new MockNetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst Provider = makeExternalCacheProvider([manager, subscriptionManager]);\n\nfunction renderRestHook<T>(callback: () => T) {\n  return renderHook(callback, {\n    wrapper: ({ children }) => <Provider>{children}</Provider>,\n  });\n}\n")))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);