"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83929],{70771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"useDebounce()"},s=void 0,c={unversionedId:"api/useDebounce",id:"version-6.5/api/useDebounce",title:"useDebounce()",description:"useDebounce() - Declarative value delays",source:"@site/versioned_docs/version-6.5/api/useDebounce.md",sourceDirName:"api",slug:"/api/useDebounce",permalink:"/docs/6.5/api/useDebounce",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDebounce.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"useDebounce()"},sidebar:"docs",previous:{title:"useRetrieve()",permalink:"/docs/6.5/api/useRetrieve"},next:{title:"useCancelling()",permalink:"/docs/6.5/api/useCancelling"}},i={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"useDebounce() - Declarative value delays")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDebounce<T>(value: T, delay: number, updatable?: boolean): T;\n")),(0,o.kt)("p",null,"Delays updating the parameters by ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/debouncing-throttling-explained-examples/"},"debouncing"),".\nUseful to avoid spamming network requests when parameters might change quickly (like a typeahead field)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useDebounce } from '@rest-hooks/hooks';\nimport { useSuspense } from 'rest-hooks';\n\nconst debouncedFilter = useDebounce(filter, 200);\nconst data = useSuspense(MyEndpoint, { filter: debouncedFilter });\n")),(0,o.kt)("p",null,"Part of ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);