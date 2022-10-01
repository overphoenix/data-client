"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[34691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"FetchShape",id:"FetchShape",original_id:"FetchShape"},i=void 0,l={unversionedId:"api/FetchShape",id:"version-4.2/api/FetchShape",title:"FetchShape",description:"FetchShape is the most basic interface sent to hooks telling rest-hooks how to",source:"@site/versioned_docs/version-4.2/api/FetchShape.md",sourceDirName:"api",slug:"/api/FetchShape",permalink:"/docs/4.2/api/FetchShape",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/FetchShape.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"FetchShape",id:"FetchShape",original_id:"FetchShape"},sidebar:"version-4.2/docs",previous:{title:"SimpleRecord",permalink:"/docs/4.2/api/SimpleRecord"},next:{title:"useResource()",permalink:"/docs/4.2/api/useresource"}},s={},p=[{value:"type: &#39;read&#39; | &#39;mutate&#39; | &#39;delete&#39;",id:"type-read--mutate--delete",level:2},{value:"&#39;read&#39;",id:"read",level:3},{value:"&#39;mutate&#39;",id:"mutate",level:3},{value:"&#39;delete&#39;",id:"delete",level:3},{value:"fetch(params: Param, body: Payload): Promise&lt;any&gt;",id:"fetchparams-param-body-payload-promiseany",level:2},{value:"getFetchKey(params: Param): string",id:"getfetchkeyparams-param-string",level:2},{value:"schema: Schema",id:"schema-schema",level:2},{value:"options?: FetchOptions",id:"options-fetchoptions",level:2},{value:"FetchOptions",id:"fetchoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength-number",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength-number",level:4},{value:"pollFrequency: number",id:"pollfrequency-number",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale-boolean",level:4},{value:"Examples",id:"examples",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FetchShape")," is the most basic interface sent to hooks telling rest-hooks how to\nhandle the request. Several methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," return ",(0,r.kt)("inlineCode",{parentName:"p"},"FetchShapes"),", which offers a bridge between\nboth APIs. In fact, using ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is not even needed to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheProvider")," and\nsimply operates as a convenience to organize schemas."),(0,r.kt)("p",null,"Because of the different capabilities of each shape, some shapes won't be usable with\ncertain hooks and their interaction is not well defined. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache()"),"\nonly works with ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadShape"),"s because this is the only shape that specifies the\nspecific results needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FetchShape {\n  readonly type: 'read' | 'mutate' | 'delete';\n  fetch(params: Readonly<object>, body: Readonly<object> | void): Promise<any>;\n  getFetchKey(params: Readonly<object>): string;\n  readonly schema: Schema;\n  readonly options?: FetchOptions;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FetchShape<\n  S extends Schema,\n  Params extends Readonly<object> = Readonly<object>,\n  Body extends Readonly<object | string> | void = Readonly<object> | undefined\n> {\n  readonly type: 'read' | 'mutate' | 'delete';\n  fetch(params: Params, body: Body): Promise<any>;\n  getFetchKey(params: Params): string;\n  readonly schema: S;\n  readonly options?: FetchOptions;\n}\n")),(0,r.kt)("h2",{id:"type-read--mutate--delete"},"type: 'read' | 'mutate' | 'delete'"),(0,r.kt)("p",null,"Defines the type of the shape, informing how it should be used."),(0,r.kt)("h3",{id:"read"},"'read'"),(0,r.kt)("p",null,"This uses the response body to update which results are returned by a particular url."),(0,r.kt)("h3",{id:"mutate"},"'mutate'"),(0,r.kt)("p",null,"Mutate will look at the response for updated entities to update the normalized\ncache from. This is useful to ensure that whatever entities are changed by the\nmutation update properly in the cache without having to do another request."),(0,r.kt)("h3",{id:"delete"},"'delete'"),(0,r.kt)("p",null,"It sends a request and represents a success response to mean that entity is deleted.\nUpon success it will purge that entity from the cache."),(0,r.kt)("h2",{id:"fetchparams-param-body-payload-promiseany"},"fetch(params: Param, body: Payload): Promise\\<any",">"),(0,r.kt)("p",null,"Handles performing an actual network request. This usually just proxies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"\nfetch method with a defined ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),"."),(0,r.kt)("h2",{id:"getfetchkeyparams-param-string"},"getFetchKey(params: Param): string"),(0,r.kt)("p",null,"Serializes the params into a globally unique key. This is used to index into the ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"\ntable in the normalized cache."),(0,r.kt)("h2",{id:"schema-schema"},"schema: Schema"),(0,r.kt)("p",null,"Schemas define the shape of the response data and are used to parse and update\nthe normalized cache. Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ntucker/normalizr/blob/master/docs/api.md#schema"},"schemas at the normalizr documentation"),"."),(0,r.kt)("h2",{id:"options-fetchoptions"},"options?: FetchOptions"),(0,r.kt)("h3",{id:"fetchoptions"},"FetchOptions"),(0,r.kt)("p",null,"Additional optional request options passed on to network manager and reducer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FetchOptions {\n  readonly dataExpiryLength?: number;\n  readonly errorExpiryLength?: number;\n  readonly pollFrequency?: number;\n  readonly invalidIfStale?: boolean;\n}\n")),(0,r.kt)("h4",{id:"dataexpirylength-number"},"dataExpiryLength?: number"),(0,r.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"errorexpirylength-number"},"errorExpiryLength?: number"),(0,r.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"pollfrequency-number"},"pollFrequency: number"),(0,r.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,r.kt)("h4",{id:"invalidifstale-boolean"},"invalidIfStale: boolean"),(0,r.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useResource() will suspend when data is stale even if it already exists in cache."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/endpoints"},"Custom endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../guides/mocking-unfinished"},"Mocking unfinished endpoints"))))}c.isMDXComponent=!0}}]);