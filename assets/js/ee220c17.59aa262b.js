"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22774],{76217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.2 Released"},s=void 0,i={permalink:"/blog/2019/10/28/Rest-Hooks-2.2-Released",source:"@site/blog/2019-10-28-Rest-Hooks-2.2-Released.md",title:"Rest Hooks 2.2 Released",description:"2.2 comes with the eagerly awaited programmable optimistic updates. This enables two very important use cases:",date:"2019-10-28T00:00:00.000Z",formattedDate:"October 28, 2019",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:3.965,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.2 Released"},prevItem:{title:"Rest Hooks 4.0 Released",permalink:"/blog/2019/12/24/Rest-Hooks-4.0-Released"},nextItem:{title:"Rest Hooks 2.1 Released",permalink:"/blog/2019/08/07/Rest-Hooks-2.1-Released"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2.2 comes with the eagerly awaited programmable optimistic updates. This enables two very important use cases:\noptimistic update on create and infinite pagination."),(0,o.kt)("p",null,"The bigger part of this release is introducing two new hooks that enable an incremental migration path to\n3.0 planned changes. ",(0,o.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useCacheNew"},"useCacheNew()")," and ",(0,o.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useresourcenew"},"useResourceNew()")," are added in this release, allowing incremental adoption of the new selection logic\nthat will become the default in 3.0. More details below."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);