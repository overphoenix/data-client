"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1578],{46754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Immediate Mutation Updates"},o=void 0,s={unversionedId:"guides/immediate-updates",id:"version-2.2/guides/immediate-updates",title:"Immediate Mutation Updates",description:"When a user causes mutations like creating, updating, or deleting resources, it's important",source:"@site/versioned_docs/version-2.2/guides/immediate-updates.md",sourceDirName:"guides",slug:"/guides/immediate-updates",permalink:"/docs/2.2/guides/immediate-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/immediate-updates.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Immediate Mutation Updates"}},d={},p=[{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Create",id:"create",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a user causes mutations like creating, updating, or deleting resources, it's important\nto have those changed be reflected in the application. A simple publish cache\nthat has no underlying knowledge of the data structures would require a refetch of any endpoints\nthat are changed. This would reduce performance and put extra burden on the backend."),(0,r.kt)("p",null,"However, like many other cases, a normalized cache - one with underlying knowledge of the relationships\nbetween resources - is capable of keeping all data consistent and fresh without\nany refetches."),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"Rest Hooks uses your schema definitions to understand how to normalize response data into\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"entity table")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"result table"),". Of course, this means that there is only ever one copy\nof a given ",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),". Aside from providing consistency when using different response endpoints,\nthis means that by providing an accurate schema definition, Rest Hooks can automatically keep\nall data uses consistent and fresh. The default update endpoints ",(0,r.kt)("a",{parentName:"p",href:"../api/resource#update-endpoint"},"Resource.update()")," and\n",(0,r.kt)("a",{parentName:"p",href:"../api/resource#partialupdate-endpoint"},"Resource.partialUpdate()")," both do this automatically. ",(0,r.kt)("a",{parentName:"p",href:"./rpc"},"Read more about defining other\nupdate endpoints")),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Rest Hooks automatically deletes entity entries when any ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"\nof type ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," is resolved. ",(0,r.kt)("a",{parentName:"p",href:"../api/resource#delete-endpoint"},"Resource.delete()"),"\nprovides such an endpoint."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"Like updates, created entities are automatically added to the entities table. This means\nany components useResource() for just that item will be able to access it immediately and\nnot have to wait for an additional retrieval request. However, often new items are created\nwhen viewing an entire list of items, and the create should result in that list - any maybe others -\ndisplaying the newly created entry."),(0,r.kt)("p",null,"In the case list views are expected to include newly created items, a third argument to\nthe fetch function ",(0,r.kt)("a",{parentName:"p",href:"../api/useFetcher#updateparams-destshape-destparams-updatefunction"},"updateParams"),"\ncan be added."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../api/useFetcher#updateparams-destshape-destparams-updatefunction"},"updateParams")," for more information,\nbut it essentially specifies which lists to update."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);