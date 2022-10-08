"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"useDebounce()"},c=void 0,s={unversionedId:"api/useDebounce",id:"version-4.0/api/useDebounce",title:"useDebounce()",description:"Delays updating the parameters by debouncing.",source:"@site/versioned_docs/version-4.0/api/useDebounce.md",sourceDirName:"api",slug:"/api/useDebounce",permalink:"/docs/4.0/api/useDebounce",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDebounce.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"useDebounce()"}},i={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDebounce<T>(value: T, delay: number, updatable?: boolean): T;\n")),(0,o.kt)("p",null,"Delays updating the parameters by ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/debouncing-throttling-explained-examples/"},"debouncing"),".\nUseful to avoid spamming network requests when parameters might change quickly (like a typeahead field)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useDebounce } from '@rest-hooks/hooks';\nimport { useResource } from 'rest-hooks';\n\nconst debouncedFilter = useDebounce(filter, 200);\nconst data = useResource(MyEndpoint, { filter: debouncedFilter });\n")),(0,o.kt)("p",null,"Part of ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")))}l.isMDXComponent=!0}}]);