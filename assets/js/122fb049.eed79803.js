"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16349],{62155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"useController()"},l=void 0,s={unversionedId:"api/useController",id:"version-6.1/api/useController",title:"useController()",description:"useController() - Imperative Controls for Rest Hooks",source:"@site/versioned_docs/version-6.1/api/useController.md",sourceDirName:"api",slug:"/api/useController",permalink:"/docs/6.1/api/useController",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useController.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"useController()"},sidebar:"version-6.1/docs",previous:{title:"useResource()",permalink:"/docs/6.1/api/useresource"},next:{title:"useCache()",permalink:"/docs/6.1/api/useCache"}},i={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"useController() - Imperative Controls for Rest Hooks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useController(): Controller;\n")),(0,o.kt)("p",null,"Provides access to ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.1/api/Controller"},"Controller")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nfunction MyComponent({ id }) {\n  const { fetch, invalidate, resetEntireStore } = useController();\n\n  const handleRefresh = useCallback(\n    async e => {\n      await fetch(MyResource.detail(), { id });\n    },\n    [fetch, id],\n  );\n\n  const handleSuspend = useCallback(\n    async e => {\n      await invalidate(MyResource.detail(), { id });\n    },\n    [invalidate, id],\n  );\n\n  const handleLogout = useCallback(\n    async e => {\n      resetEntireStore();\n    },\n    [resetEntireStore],\n  );\n}\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);