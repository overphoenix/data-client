"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19058],{56593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Endpoint"},o=void 0,s={unversionedId:"api/Endpoint",id:"version-4.2/api/Endpoint",title:"Endpoint",description:"Endpoint defines a standard interface that describes the nature of an networking endpoint.",source:"@site/versioned_docs/version-4.2/api/Endpoint.md",sourceDirName:"api",slug:"/api/Endpoint",permalink:"/docs/4.2/api/Endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Endpoint.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Endpoint"}},l={},p=[{value:"Endpoint Members",id:"endpoint-members",level:2},{value:"key: (params) =&gt; string",id:"key-params--string",level:3},{value:"sideEffect: true | undefined",id:"sideeffect-true--undefined",level:3},{value:"schema: Schema",id:"schema-schema",level:3},{value:"extend(EndpointOptions): Endpoint",id:"extendendpointoptions-endpoint",level:3},{value:"EndpointExtraOptions",id:"endpointextraoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength-number",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength-number",level:4},{value:"pollFrequency: number",id:"pollfrequency-number",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale-boolean",level:4},{value:"optimisticUpdate: (params, body) =&gt; fakePayload",id:"optimisticupdate-params-body--fakepayload",level:4},{value:"Examples",id:"examples",level:2},{value:"Additional",id:"additional",level:3},{value:"Motivation",id:"motivation",level:2},{value:"What&#39;s in an Endpoint",id:"whats-in-an-endpoint",level:3},{value:"See also",id:"see-also",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Endpoint defines a standard interface that describes the nature of an networking endpoint.\nIt is both strongly typed, and encapsulates runtime-relevant information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EndpointInterface extends EndpointExtraOptions   {\n  (params?: any, body?: any): Promise<any>;\n  key(parmas?: any): string;\n  schema?: Readonly<S>;\n  sideEffects?: true;\n  // other optionals like 'optimistic'\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class Endpoint<F extends (...args: any) => Promise<any>> implements EndpointInterface {\n  constructor(fetchFunction: F, options: EndpointOptions);\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect?: true;\n\n  readonly schema?: Schema;\n\n  fetch: F;\n\n  extend(options: EndpointOptions): Endpoint;\n}\n\nexport interface EndpointOptions extends EndpointExtraOptions {\n  key?: (params: any) => string;\n  sideEffect?: true | undefined;\n  schema?: Schema;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointExtraOptions {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  readonly optimisticUpdate?: (\n    params: Readonly<object>,\n    body: Readonly<object | string> | void,\n  ) => any;\n  /** User-land extra data to send */\n  readonly extra?: any;\n}\n")),(0,i.kt)("p",null,"Package: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")),(0,i.kt)("h2",{id:"endpoint-members"},"Endpoint Members"),(0,i.kt)("p",null,"Members double as options (second constructor arg). While none are required, the first few\nhave defaults."),(0,i.kt)("h3",{id:"key-params--string"},"key: (params) => string"),(0,i.kt)("p",null,"Serializes the parameters. This is used to build a lookup key in global stores."),(0,i.kt)("p",null,"Default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"`${this.fetch.name} ${JSON.stringify(params)}`;\n")),(0,i.kt)("h3",{id:"sideeffect-true--undefined"},"sideEffect: true | undefined"),(0,i.kt)("p",null,"Used to indicate endpoint might have side-effects (non-idempotent). This restricts it\nfrom being used with ",(0,i.kt)("a",{parentName:"p",href:"./useresource"},"useResource()")," or ",(0,i.kt)("a",{parentName:"p",href:"useRetrieve"},"useRetrieve()")," as those can hit the\nendpoint an unpredictable number of times."),(0,i.kt)("h3",{id:"schema-schema"},"schema: Schema"),(0,i.kt)("p",null,"Declarative definition of how to ",(0,i.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,i.kt)("a",{parentName:"li",href:"./Entity"},"Entities")),(0,i.kt)("li",{parentName:"ul"},"Classes to ",(0,i.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,i.kt)("p",null,"Not providing this option means no entities will be extracted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Entity } from '@rest-hooks/normalizr';\nimport { Endpoint } from '@rest-hooks/endpoint';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id;}\n}\n\nconst UserDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`/users/${id}`),\n    { schema: User }\n);\n")),(0,i.kt)("h3",{id:"extendendpointoptions-endpoint"},"extend(EndpointOptions): Endpoint"),(0,i.kt)("p",null,"Can be used to further customize the endpoint definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const UserDetail = new Endpoint(({ id }) \u21d2 fetch(`/users/${id}`));\n\n\nconst UserDetailNormalized = UserDetail.extend({ schema: User });\n")),(0,i.kt)("p",null,"In addition to the members, ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," can be sent to override the fetch function."),(0,i.kt)("h3",{id:"endpointextraoptions"},"EndpointExtraOptions"),(0,i.kt)("h4",{id:"dataexpirylength-number"},"dataExpiryLength?: number"),(0,i.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,i.kt)("h4",{id:"errorexpirylength-number"},"errorExpiryLength?: number"),(0,i.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,i.kt)("h4",{id:"pollfrequency-number"},"pollFrequency: number"),(0,i.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,i.kt)("h4",{id:"invalidifstale-boolean"},"invalidIfStale: boolean"),(0,i.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useResource() will suspend when data is stale even if it already exists in cache."),(0,i.kt)("h4",{id:"optimisticupdate-params-body--fakepayload"},"optimisticUpdate: (params, body) => fakePayload"),(0,i.kt)("p",null,"When provided, any fetches with this endpoint will behave as though the ",(0,i.kt)("inlineCode",{parentName:"p"},"fakePayload")," return value\nfrom this function was a succesful network response. When the actual fetch completes (regardless\nof failure or success), the optimistic update will be replaced with the actual network response."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json())\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json()),\n  { schema: User }\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserList = new Endpoint(\n  () \u21d2 fetch(`/users/`).then(res => res.json()),\n  { schema: [User] }\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function UserProfile() {\n  const user = useResource(UserDetail, { id });\n  const updateUser = useFetcher(UserDetail);\n\n  return <UserForm user={user} onSubmit={updateUser} />;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await UserDetail({ id: '5' });\nconsole.log(user);\n")),(0,i.kt)("h3",{id:"additional"},"Additional"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/extending-endpoints"},"Custom endpoints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/pagination"},"Pagination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/mocking-unfinished"},"Mocking unfinished endpoints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../guides/optimistic-updates"},"Optimistic updates"))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"There is a distinction between"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are networking API is",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"How to make a request, expected response fields, etc."))),(0,i.kt)("li",{parentName:"ul"},"How it is used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Binding data, polling, triggering imperative fetch, etc.")))),(0,i.kt)("p",null,"Thus, there are many benefits to creating a distinct seperation of concerns between\nthese two concepts."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript Standard Endpoints"),", we define a standard for declaring in\nTypeScript the definition of a networking API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allows API authors to publish npm packages containing their API interfaces"),(0,i.kt)("li",{parentName:"ul"},"Definitions can be consumed by any supporting library, allowing easy consumption across libraries like Vue, React, Angular"),(0,i.kt)("li",{parentName:"ul"},"Writing codegen pipelines becomes much easier as the output is minimal"),(0,i.kt)("li",{parentName:"ul"},"Product developers can use the definitions in a multitude of contexts where behaviors vary"),(0,i.kt)("li",{parentName:"ul"},"Product developers can easily share code across platforms with distinct behaviors needs like React Native and React Web")),(0,i.kt)("h3",{id:"whats-in-an-endpoint"},"What's in an Endpoint"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A function that resolves the results"),(0,i.kt)("li",{parentName:"ul"},"A function to uniquely store those results"),(0,i.kt)("li",{parentName:"ul"},"Optional: information about how to store the data in a normalized cache"),(0,i.kt)("li",{parentName:"ul"},"Optional: whether the request could have side effects - to prevent repeat calls")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Index"},"Index"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);