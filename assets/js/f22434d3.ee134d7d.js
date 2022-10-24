"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},54442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Adding validation helpers for required field checks",authors:["ntucker"],tags:["rest-hooks","validation","data schemas"]},s=void 0,o={permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields",source:"@site/blog/2022-08-03-Adding-validation-helpers-for-required-fields.md",title:"Adding validation helpers for required field checks",description:"validateRequired() will validate that required fields",date:"2022-08-03T00:00:00.000Z",formattedDate:"August 3, 2022",tags:[{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"validation",permalink:"/blog/tags/validation"},{label:"data schemas",permalink:"/blog/tags/data-schemas"}],readingTime:1.56,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Adding validation helpers for required field checks",authors:["ntucker"],tags:["rest-hooks","validation","data schemas"]},prevItem:{title:"Rest v6 - url path templates and more",permalink:"/blog/2022/10/23/Announcing-Rest-6"},nextItem:{title:"Experimental useController()",permalink:"/blog/2021/08/29/Experimental-useController"}},l={authorsImageUrls:[void 0]},d=[{value:"Motivation",id:"motivation",level:3},{value:"Solution",id:"solution",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/rest/api/validateRequired"},"validateRequired()")," will validate that required fields\nare present; simplifying some common validation use cases.\n",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/rest/api/validateRequired"},"validateRequired()")," is available in @rest-hooks/@5.1.0 or greater."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomBaseEntity extends Entity {\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, this.defaults) || super.validate(processedEntity);\n  }\n}\n")),(0,n.kt)("h3",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"Currently the ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/getting-started/validation#partial-results"},"https://resthooks.io/docs/getting-started/validation#partial-results")," case is a rather cumbersome endeavor; requiring users to maintain custom validation methods for each Resource/Entity they define. Furthermore, in some systems like GraphQL having partial results is quite common."),(0,n.kt)("p",null,"What makes this more problematic is doing this incorrectly can lead to serious bugs, where data is missing when it is expected. For most cases the default fields provide information about which fields are expected. However, fields can be optional. Unfortunately in these cases, the default value isn't always something that is obvious like ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),". For instance ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues/492"},"here, a user had an API that sometimes had a Date field"),". However, the default case the date would be there so it made more sense to have an actual Date default."),(0,n.kt)("p",null,"While we have made it easier to 'opt-out' of these sorts of validations, it has become clear that doing this out of the box is not intuitive behavior."),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("p",null,"We can add a simple helper to make defining these easy. Even better - if someone does not have optional fields, the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaults")," static member can be used to add this to a base class. This is great because it still allows opt-out, while having the default behavior more protective. And since the user explicitly added this to the base class the behavior should not be as surprising."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomBaseEntity extends Entity {\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, this.defaults) || super.validate(processedEntity);\n  }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class FullAnalysis extends SummaryAnalysis {\n  readonly graph: number[] = null;\n  readonly lastRun?: Date = new Date(0);\n\n  static schema = {\n    lastRun: Date,\n  }\n\n  static validate(processedEntity) {\n    return validateRequired(processedEntity, exclude(this.defaults, ['lastRun']));\n  }\n}\n")))}c.isMDXComponent=!0}}]);