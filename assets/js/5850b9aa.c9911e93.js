"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39064],{35200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Rest Hooks 4.1 Released",authors:["ntucker"],tags:["releases","rest-hooks"]},i=void 0,l={permalink:"/blog/2020/01/06/Rest-Hooks-4.1-Released",source:"@site/blog/2020-01-06-Rest-Hooks-4.1-Released.md",title:"Rest Hooks 4.1 Released",description:"4.1 comes with a more granular data definition hierarchy that will make it easier to",date:"2020-01-06T00:00:00.000Z",formattedDate:"January 6, 2020",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:.705,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest Hooks 4.1 Released",authors:["ntucker"],tags:["releases","rest-hooks"]},prevItem:{title:"Rest Hooks 4.2-4.5",permalink:"/blog/2020/02/18/Rest-Hooks-4.2-4.5"},nextItem:{title:"Rest Hooks 4.0 Released",permalink:"/blog/2019/12/24/Rest-Hooks-4.0-Released"}},s={authorsImageUrls:[void 0]},c=[{value:"Entity",id:"entity",level:3},{value:"New hierarchy:",id:"new-hierarchy",level:3},{value:"Deprecations:",id:"deprecations",level:3},{value:"Changes:",id:"changes",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4.1 comes with a more granular data definition hierarchy that will make it easier to\nwrite more API definitions. This marked by the introduction of a new member known\nas ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/api/Entity"},"Entity"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," only needs a ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get key()"),", as well\nas member declarations to integrate fully."),(0,a.kt)("h3",{id:"entity"},"Entity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Useful for nested entities that don't have endpoints like LatestPrice."),(0,a.kt)("li",{parentName:"ul"},"Useful for non-REST style APIs like GraphQL."),(0,a.kt)("li",{parentName:"ul"},"Simplifies defining nested entities.")),(0,a.kt)("h3",{id:"new-hierarchy"},"New hierarchy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," SimpleRecord\n      |\n   Entity\n      |\nSimpleResource\n      |\n   Resource\n")),(0,a.kt)("h3",{id:"deprecations"},"Deprecations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource.getKey() -> Resource.key"),(0,a.kt)("li",{parentName:"ul"},"Resource.getEntitySchema() -> Resource.asSchema()"),(0,a.kt)("li",{parentName:"ul"},"Entity.define() -> override Entity.schema")),(0,a.kt)("h3",{id:"changes"},"Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Normalizr: top level key sent to getId is undefined not null"),(0,a.kt)("li",{parentName:"ul"},"pk() now takes additional parent, and key optional args"),(0,a.kt)("li",{parentName:"ul"},"pk() no longer accepts number return value (run .toString())")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%404.1.0"},"Full set of 4.1 release commits")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);