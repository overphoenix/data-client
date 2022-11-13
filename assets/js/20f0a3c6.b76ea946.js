"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18638],{52777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"NetworkManager",sidebar_label:"NetworkManager"},l=void 0,i={unversionedId:"api/NetworkManager",id:"version-6.5/api/NetworkManager",title:"NetworkManager",description:"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests",source:"@site/versioned_docs/version-6.5/api/NetworkManager.md",sourceDirName:"api",slug:"/api/NetworkManager",permalink:"/docs/6.5/api/NetworkManager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/NetworkManager.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"NetworkManager",sidebar_label:"NetworkManager"},sidebar:"docs",previous:{title:"Manager",permalink:"/docs/6.5/api/Manager"},next:{title:"useResource()",permalink:"/docs/6.5/api/useresource"}},s={},c=[{value:"constructor(dataExpiryLength = 60000, errorExpiryLength = 1000)",id:"constructor",level:2},{value:"Consumed Actions",id:"consumed-actions",level:2},{value:"Processed Actions",id:"processed-actions",level:2},{value:"Dispatched Actions",id:"dispatched-actions",level:2},{value:"Protected members",id:"protected-members",level:2},{value:"handleFetch(fetchAction, dispatch, controller)",id:"handlefetchfetchaction-dispatch-controller",level:3},{value:"handleReceive(receiveAction)",id:"handlereceivereceiveaction",level:3},{value:"throttle(key, fetch)",id:"throttlekey-fetch",level:3},{value:"getLastReset(): number",id:"getlastreset-number",level:3},{value:"clear(key)",id:"clearkey",level:3},{value:"clearAll()",id:"clearall",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkManager orchestrates asynchronous fetches. By keeping track of all in-flight requests\nit is able to dedupe identical requests if they are made using the throttle flag."),(0,a.kt)("admonition",{title:"implements",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"NetworkManager")," implements ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.5/api/Manager"},"Manager"))),(0,a.kt)("h2",{id:"constructor"},"constructor(dataExpiryLength = 60000, errorExpiryLength = 1000)"),(0,a.kt)("p",null,"Arguments represent the default time (in miliseconds) before a resource is considered 'stale'."),(0,a.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/fetch'")),(0,a.kt)("p",null,"Will initiate network request and then dispatch upon completion."),(0,a.kt)("h2",{id:"processed-actions"},"Processed Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")),(0,a.kt)("p",null,"Marks request as complete."),(0,a.kt)("h2",{id:"dispatched-actions"},"Dispatched Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/purge'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/rpc'"),(0,a.kt)("li",{parentName:"ul"},"'rest-hooks/receive'")),(0,a.kt)("h2",{id:"protected-members"},"Protected members"),(0,a.kt)("h3",{id:"handlefetchfetchaction-dispatch-controller"},"handleFetch(fetchAction, dispatch, controller)"),(0,a.kt)("p",null,"Called when middleware intercepts 'rest-hooks/fetch' action."),(0,a.kt)("p",null,"Will then start a promise for a key and potentially start the network\nfetch."),(0,a.kt)("p",null,"Uses throttle only when instructed by action meta. This is valuable\nfor ensures mutation requests always go through."),(0,a.kt)("h3",{id:"handlereceivereceiveaction"},"handleReceive(receiveAction)"),(0,a.kt)("p",null,"Called when middleware intercepts a receive action."),(0,a.kt)("p",null,"Will resolve the promise associated with receive key."),(0,a.kt)("h3",{id:"throttlekey-fetch"},"throttle(key, fetch)"),(0,a.kt)("p",null,"Ensures only one request for a given key is in flight at any time"),(0,a.kt)("p",null,"Uses key to either retrieve in-flight promise, or if not\ncreate a new promise and call fetch."),(0,a.kt)("h3",{id:"getlastreset-number"},"getLastReset(): number"),(0,a.kt)("p",null,"Timestamp when entire store was last reset"),(0,a.kt)("h3",{id:"clearkey"},"clear(key)"),(0,a.kt)("p",null,"Clear promise state for a given key"),(0,a.kt)("h3",{id:"clearall"},"clearAll()"),(0,a.kt)("p",null,"Ensures all promises are completed by rejecting remaining"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);