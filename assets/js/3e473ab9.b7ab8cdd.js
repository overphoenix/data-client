"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"Adding validation helpers for required field checks",authors:["ntucker"],tags:["rest-hooks","validation","data schemas"]},o=void 0,l={permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields",source:"@site/blog/2022-08-03-Adding-validation-helpers-for-required-fields.md",title:"Adding validation helpers for required field checks",description:"validateRequired() will validate that required fields",date:"2022-08-03T00:00:00.000Z",formattedDate:"August 3, 2022",tags:[{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"validation",permalink:"/blog/tags/validation"},{label:"data schemas",permalink:"/blog/tags/data-schemas"}],readingTime:1.56,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Adding validation helpers for required field checks",authors:["ntucker"],tags:["rest-hooks","validation","data schemas"]},prevItem:{title:"Rest v6",permalink:"/blog/2022/10/23/Announcing-Rest-6"},nextItem:{title:"Experimental useController()",permalink:"/blog/2021/08/29/Experimental-useController"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/rest/api/validateRequired"},"validateRequired()")," will validate that required fields\nare present; simplifying some common validation use cases.\n",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.io/rest/api/validateRequired"},"validateRequired()")," is available in @rest-hooks/@5.1.0 or greater."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomBaseEntity extends Entity {\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, this.defaults) || super.validate(processedEntity);\n  }\n}\n")))}u.isMDXComponent=!0}}]);