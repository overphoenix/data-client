"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79158],{29027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={title:"Manager",id:"Manager",original_id:"Manager"},o=void 0,s={unversionedId:"api/Manager",id:"version-4.3/api/Manager",title:"Manager",description:"Managers are singletons that orchestrate the complex asynchronous behavior of rest-hooks.",source:"@site/versioned_docs/version-4.3/api/Manager.md",sourceDirName:"api",slug:"/api/Manager",permalink:"/docs/4.3/api/Manager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Manager.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666916976,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"Manager",id:"Manager",original_id:"Manager"},sidebar:"version-4.3/docs",previous:{title:"<NetworkErrorBoundary />",permalink:"/docs/4.3/api/NetworkErrorBoundary"},next:{title:"NetworkManager",permalink:"/docs/4.3/api/NetworkManager"}},l={},d=[{value:"getMiddleware()",id:"getmiddleware",level:2},{value:"cleanup()",id:"cleanup",level:2},{value:"Provided managers:",id:"provided-managers",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managers are singletons that orchestrate the complex asynchronous behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),".\nSeveral managers are provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks")," and used by default; however there is nothing\nstopping other compatible managers to be built that expand the functionality. We encourage\nPRs or complimentary libraries!"),(0,a.kt)("p",null,"While managers often have complex internal state and methods - the exposed interface is quite simple.\nBecause of this, it is encouraged to keep any supporting state or methods marked at protected by\ntypescript. Managers have three exposed pieces - the constructor to build initial state and\ntake any parameters; a simple cleanup() method to tear down any dangling pieces like setIntervals()\nor unresolved Promises; and finally getMiddleware() - providing the mechanism to hook into\nthe flux data flow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Dispatch<R extends React.Reducer<any, any>> = (action: React.ReducerAction<R>) => Promise<void>;\n\ntype Middleware = <R extends React.Reducer<any, A>, A extends Actions>({\n  dispatch,\n}: MiddlewareAPI<R>) => (\n  next: Dispatch<R>,\n) => Dispatch<R>;\n\ninterface Manager {\n  getMiddleware<T extends Manager>(this: T): Middleware;\n  cleanup(): void;\n}\n")),(0,a.kt)("h2",{id:"getmiddleware"},"getMiddleware()"),(0,a.kt)("p",null,"getMiddleware() returns a function that very similar to a ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux middleware"),".\nThe only differences is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"next()")," function returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),". This promise resolves when the reducer update is\n",(0,a.kt)("a",{parentName:"p",href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/#general-algorithm"},"committed"),"\nwhen using <CacheProvider /",">",". This is necessary since the commit phase is asynchronously scheduled. This enables building\nmanagers that perform work after the DOM is updated and also with the newly computed state."),(0,a.kt)("p",null,"Since redux is fully synchronous, an adapter must be placed in front of Rest Hooks style middleware to\nensure they can consume a promise. Conversely, redux middleware must be changed to pass through promises."),(0,a.kt)("p",null,"Middlewares will intercept actions that are dispatched and then potentially dispatch their own actions as well.\nTo read more about middlewares, see the ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux documentation"),"."),(0,a.kt)("h2",{id:"cleanup"},"cleanup()"),(0,a.kt)("p",null,"Provides any cleanup of dangling resources after manager is no longer in use."),(0,a.kt)("h2",{id:"provided-managers"},"Provided managers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/4.3/api/NetworkManager"},"NetworkManager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/4.3/api/SubscriptionManager"},"SubscriptionManager"))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);