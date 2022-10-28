"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12870],{69190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Upgrading @rest-hooks/test to 7"},a=void 0,s={unversionedId:"upgrade/upgrading-test-to-seven",id:"version-6.2/upgrade/upgrading-test-to-seven",title:"Upgrading @rest-hooks/test to 7",description:"Importing directly from hidden files is no longer supported",source:"@site/versioned_docs/version-6.2/upgrade/upgrading-test-to-seven.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-seven",permalink:"/docs/6.2/upgrade/upgrading-test-to-seven",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-seven.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Upgrading @rest-hooks/test to 7"},sidebar:"docs",previous:{title:"Upgrading from 4 to 5",permalink:"/docs/6.2/upgrade/upgrading-to-5"},next:{title:"Upgrading @rest-hooks/test to 6",permalink:"/docs/6.2/upgrade/upgrading-test-to-six"}},p={},l=[{value:"Importing directly from hidden files is no longer supported",id:"importing-directly-from-hidden-files-is-no-longer-supported",level:3},{value:"Node &gt;= 12",id:"node--12",level:3}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"importing-directly-from-hidden-files-is-no-longer-supported"},"Importing directly from hidden files is no longer supported"),(0,o.kt)("p",null,"All packages now use ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/package-exports/"},"package exports"),", which if\nsupported disallow importing directly from any sub path like ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks/lib/MockResolver")),(0,o.kt)("p",null,"Doing this was never supported as file locations would change without announcement. However, now\nwith tooling that supports package exports, it will not work at all."),(0,o.kt)("h3",{id:"node--12"},"Node >= 12"),(0,o.kt)("p",null,"Node 10 support is dropped."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@7")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/test/CHANGELOG.md#700-2021-09-08"},"Release notes")))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,f=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);