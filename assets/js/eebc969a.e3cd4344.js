/*! For license information please see eebc969a.e3cd4344.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35212],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function y(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,h(b,y.prototype),b.isPureReactComponent=!0;var E=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var a,i={},s=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,a)&&!N.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:n,type:e,key:s,ref:o,props:i,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,a,i,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===i?"."+C(l,0):i,E(s)?(a="",null!=e&&(a=e.replace(O,"$&/")+"/"),R(s,t,a,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(l=0,i=""===i?".":i+":",E(e))for(var p=0;p<e.length;p++){var u=i+C(o=e[p],p);l+=R(o,t,a,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(o=e.next()).done;)l+=R(o=o.value,t,a,u=i+C(o,p++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function U(e,t,n){if(null==e)return e;var r=[],a=0;return R(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},F={transition:null}},27378:(e,t,n)=>{n(41535)},3225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(27378),n(3905)),i=n(65559),s=n(30433),o=n(45889),l=n(54410);const p={title:"Endpoint"},u=void 0,d={unversionedId:"api/Endpoint",id:"api/Endpoint",title:"Endpoint",description:"Endpoint - Strongly typed API definitions",source:"@site/../docs/rest/api/Endpoint.md",sourceDirName:"api",slug:"/api/Endpoint",permalink:"/rest/api/Endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Endpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667764772,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{title:"Endpoint"},sidebar:"docs",previous:{title:"RestEndpoint",permalink:"/rest/api/RestEndpoint"},next:{title:"createResource",permalink:"/rest/api/createResource"}},c={},m=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Success",id:"success",level:3},{value:"Error",id:"error",level:3},{value:"Endpoint Members",id:"endpoint-members",level:2},{value:"key: (params) =&gt; string",id:"key",level:3},{value:"sideEffect: true | undefined",id:"sideeffect",level:3},{value:"schema: Schema",id:"schema",level:3},{value:"extend(EndpointOptions): Endpoint",id:"extend",level:3},{value:"EndpointExtraOptions",id:"endpointextraoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength",level:4},{value:"errorPolicy?: (error: any) =&gt; &#39;soft&#39; | undefined",id:"errorpolicy",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale",level:4},{value:"pollFrequency: number",id:"pollfrequency",level:4},{value:"getOptimisticResponse: (snap, ...args) =&gt; fakePayload",id:"getoptimisticresponse",level:4},{value:"optimisticUpdate: (...args) =&gt; fakePayload",id:"optimisticupdate",level:4},{value:"update(normalizedResponseOfThis, ...args) =&gt; ({ endpointKey: (normalizedResponseOfEndpointToUpdate) =&gt; updatedNormalizedResponse) })",id:"update",level:4},{value:"Examples",id:"examples",level:2},{value:"Additional",id:"additional",level:3},{value:"Motivation",id:"motivation",level:2},{value:"What&#39;s in an Endpoint",id:"whats-in-an-endpoint",level:3},{value:"See also",id:"see-also",level:2}],f={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Endpoint - Strongly typed API definitions")),(0,a.kt)("p",null,"Endpoint defines a standard interface that describes the nature of an networking endpoint.\nIt is both strongly typed, and encapsulates runtime-relevant information."),(0,a.kt)(i.Z,{defaultValue:"Interface",values:[{label:"Interface",value:"Interface"},{label:"Class",value:"Class"},{label:"EndpointExtraOptions",value:"EndpointExtraOptions"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Interface",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointExtraOptions<F> {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n"))),(0,a.kt)(s.Z,{value:"Class",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Endpoint<F extends (...args: any) => Promise<any>>\n  implements EndpointInterface\n{\n  constructor(fetchFunction: F, options: EndpointOptions);\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect?: true;\n\n  readonly schema?: Schema;\n\n  fetch: F;\n\n  extend(options: EndpointOptions): Endpoint;\n}\n\nexport interface EndpointOptions extends EndpointExtraOptions {\n  key?: (params: any) => string;\n  sideEffect?: true | undefined;\n  schema?: Schema;\n}\n"))),(0,a.kt)(s.Z,{value:"EndpointExtraOptions",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  readonly getOptimisticResponse?: (\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ) => ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  readonly errorPolicy?: (error: any) => 'soft' | undefined;\n  /** User-land extra data to send */\n  readonly extra?: any;\n  /** Enables optimistic updates for this request - uses return value as assumed network response\n   * @deprecated use https://resthooks.io./Endpoint.md#getoptimisticresponse instead\n   */\n  readonly optimisticUpdate?: (...args: Parameters<F>) => ResolveType<F>;\n}\n")))),(0,a.kt)("p",null,"Package: ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Endpoint is a protocol independent class. Try using the protocol specific patterns\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"REST"),", ",(0,a.kt)("a",{parentName:"p",href:"/graphql/api/GQLEndpoint"},"GraphQL"),",\nor ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/img-media#just-images"},"getImage")," instead.")),(0,a.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,a.kt)("h3",{id:"success"},"Success"),(0,a.kt)(o.ZP,{mdxType:"SuccessLifecycle"}),(0,a.kt)("h3",{id:"error"},"Error"),(0,a.kt)(l.ZP,{mdxType:"ErrorLifecycle"}),(0,a.kt)("h2",{id:"endpoint-members"},"Endpoint Members"),(0,a.kt)("p",null,"Members double as options (second constructor arg). While none are required, the first few\nhave defaults."),(0,a.kt)("h3",{id:"key"},"key: (params) => string"),(0,a.kt)("p",null,"Serializes the parameters. This is used to build a lookup key in global stores."),(0,a.kt)("p",null,"Default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"`${this.fetch.name} ${JSON.stringify(params)}`;\n")),(0,a.kt)("h3",{id:"sideeffect"},"sideEffect: true | undefined"),(0,a.kt)("p",null,"Used to indicate endpoint might have side-effects (non-idempotent). This restricts it\nfrom being used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useFetch"},"useFetch()")," as those can hit the\nendpoint an unpredictable number of times."),(0,a.kt)("h3",{id:"schema"},"schema: Schema"),(0,a.kt)("p",null,"Declarative definition of how to ",(0,a.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,a.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entities")),(0,a.kt)("li",{parentName:"ul"},"Classes to ",(0,a.kt)("a",{parentName:"li",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,a.kt)("p",null,"Not providing this option means no entities will be extracted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Entity } from '@rest-hooks/normalizr';\nimport { Endpoint } from '@rest-hooks/endpoint';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id;}\n}\n\nconst UserDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`/users/${id}`),\n    { schema: User }\n);\n")),(0,a.kt)("h3",{id:"extend"},"extend(EndpointOptions): Endpoint"),(0,a.kt)("p",null,"Can be used to further customize the endpoint definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const UserDetail = new Endpoint(({ id }) \u21d2 fetch(`/users/${id}`));\n\n\nconst UserDetailNormalized = UserDetail.extend({ schema: User });\n")),(0,a.kt)("p",null,"In addition to the members, ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," can be sent to override the fetch function."),(0,a.kt)("h3",{id:"endpointextraoptions"},"EndpointExtraOptions"),(0,a.kt)("h4",{id:"dataexpirylength"},"dataExpiryLength?: number"),(0,a.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#expiry-time"},"Learn more about expiry time")),(0,a.kt)("h4",{id:"errorexpirylength"},"errorExpiryLength?: number"),(0,a.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,a.kt)("h4",{id:"errorpolicy"},"errorPolicy?: (error: any) => 'soft' | undefined"),(0,a.kt)("p",null,"'soft' will use stale data (if exists) in case of error; undefined or not providing option will result\nin error."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#error-policy"},"Learn more about errorPolicy")),(0,a.kt)("h4",{id:"invalidifstale"},"invalidIfStale: boolean"),(0,a.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useSuspense() will suspend when data is stale even if it already exists in cache."),(0,a.kt)("h4",{id:"pollfrequency"},"pollFrequency: number"),(0,a.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,a.kt)("h4",{id:"getoptimisticresponse"},"getOptimisticResponse: (snap, ...args) => fakePayload"),(0,a.kt)("p",null,"When provided, any fetches with this endpoint will behave as though the ",(0,a.kt)("inlineCode",{parentName:"p"},"fakePayload")," return value\nfrom this function was a succesful network response. When the actual fetch completes (regardless\nof failure or success), the optimistic update will be replaced with the actual network response."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/optimistic-updates"},"Optimistic update guide")),(0,a.kt)("h4",{id:"optimisticupdate"},"optimisticUpdate: (...args) => fakePayload"),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"#getOptimisticResponse"},"endpoint.getOptimisticResponse")," instead.")),(0,a.kt)("h4",{id:"update"},"update(normalizedResponseOfThis, ...args) => ({ ","[endpointKey]",": (normalizedResponseOfEndpointToUpdate) => updatedNormalizedResponse) })"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="UpdateType.ts"',title:'"UpdateType.ts"'},"type UpdateFunction<\n  Source extends EndpointInterface,\n  Updaters extends Record<string, any> = Record<string, any>,\n> = (\n  source: ResultEntry<Source>,\n  ...args: Parameters<Source>\n) => { [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K] };\n")),(0,a.kt)("p",null,"Simplest case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,a.kt)("p",null,"More updates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,a.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,a.kt)("p",null,"See usage with ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#update"},"Resource or RestEndpoint")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{defaultValue:"Basic",values:[{label:"Basic",value:"Basic"},{label:"With Schema",value:"With Schema"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Basic",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json())\n);\n"))),(0,a.kt)(s.Z,{value:"With Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json()),\n  { schema: User }\n);\n"))),(0,a.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserList = new Endpoint(\n  () \u21d2 fetch(`/users/`).then(res => res.json()),\n  { schema: [User] }\n);\n")))),(0,a.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"JS/Node Schema",value:"JS/Node"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function UserProfile() {\n  const user = useSuspense(UserDetail, { id });\n  const { fetch } = useController();\n\n  return <UserForm user={user} onSubmit={() => fetch(UserDetail)} />;\n}\n"))),(0,a.kt)(s.Z,{value:"JS/Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await UserDetail({ id: '5' });\nconsole.log(user);\n")))),(0,a.kt)("h3",{id:"additional"},"Additional"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/guides/pagination"},"Pagination")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/guides/mocking-unfinished"},"Mocking unfinished endpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/guides/optimistic-updates"},"Optimistic updates"))),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"There is a distinction between"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What are networking API is",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How to make a request, expected response fields, etc."))),(0,a.kt)("li",{parentName:"ul"},"How it is used",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Binding data, polling, triggering imperative fetch, etc.")))),(0,a.kt)("p",null,"Thus, there are many benefits to creating a distinct seperation of concerns between\nthese two concepts."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript Standard Endpoints"),", we define a standard for declaring in\nTypeScript the definition of a networking API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows API authors to publish npm packages containing their API interfaces"),(0,a.kt)("li",{parentName:"ul"},"Definitions can be consumed by any supporting library, allowing easy consumption across libraries like Vue, React, Angular"),(0,a.kt)("li",{parentName:"ul"},"Writing codegen pipelines becomes much easier as the output is minimal"),(0,a.kt)("li",{parentName:"ul"},"Product developers can use the definitions in a multitude of contexts where behaviors vary"),(0,a.kt)("li",{parentName:"ul"},"Product developers can easily share code across platforms with distinct behaviors needs like React Native and React Web")),(0,a.kt)("h3",{id:"whats-in-an-endpoint"},"What's in an Endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A function that resolves the results"),(0,a.kt)("li",{parentName:"ul"},"A function to uniquely store those results"),(0,a.kt)("li",{parentName:"ul"},"Optional: information about how to store the data in a normalized cache"),(0,a.kt)("li",{parentName:"ul"},"Optional: whether the request could have side effects - to prevent repeat calls")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/Index"},"Index"))))}h.isMDXComponent=!0},54410:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(27378),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("mermaid",{value:'flowchart LR\n  subgraph Controller.fetch\n    direction TB\n    key("Endpoint.key(...args)")---\x3edispatch("dispatch(FETCH)")\n  end\n  subgraph managers\n    NetworkManager--\x3eendpoint("endpoint(...args)")\n    endpoint--rejects--\x3eController.resolve\n    Controller.resolve("Controller.resolve(error)")--\x3edispatchR("dispatch(RECEIVE)")\n  end\n  managers--FETCH--\x3ereducer:FETCH\n  Controller.fetch--FETCH--\x3emanagers\n  subgraph reducer:FETCH\n    optimistic("Endpoint.?getOptimisticResponse()")--\x3eRECIEVE\n    subgraph RECIEVE\n      normalize(normalize)--\x3eupdate("Endpoint.update()")\n    end\n  end\n  subgraph reducer:reduceError\n    direction LR\n    filterOptimistic(filterOptimistic)--\x3eerrorPolicy("Endpoint.errorPolicy()")\n  end\n  managers--RECEIVE:error--\x3ereducer:reduceError\n  click key "/rest/api/Endpoint#key"\n  click optimistic "/rest/api/Endpoint#getoptimisticresponse"\n  click update "/rest/api/Endpoint#update"\n  click errorPolicy "/rest/api/Endpoint#errorpolicy"\n  click NetworkManager "/docs/api/NetworkManager"'}))}s.isMDXComponent=!0},45889:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(27378),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("mermaid",{value:'flowchart LR\n  subgraph Controller.fetch\n    direction TB\n    key("Endpoint.key(...args)")---\x3edispatch("dispatch(FETCH)")\n  end\n  subgraph managers\n    NetworkManager--\x3eendpoint("endpoint(...args)")\n    endpoint--resolves--\x3eController.resolve\n    Controller.resolve("Controller.resolve(response)")--\x3edispatchR("dispatch(RECEIVE)")\n  end\n  managers--FETCH--\x3ereducer:FETCH\n  Controller.fetch--FETCH--\x3emanagers\n  subgraph reducer:FETCH\n    optimistic("Endpoint.?getOptimisticResponse()")--\x3eRECIEVE\n    subgraph RECIEVE\n      normalize(normalize)--\x3eupdate("Endpoint.update()")\n    end\n  end\n  subgraph reducer:RECEIVE\n    direction LR\n    normalize2(normalize)--\x3eupdate2("Endpoint.update()")\n  end\n  managers--RECEIVE--\x3ereducer:RECEIVE\n  click key "/rest/api/Endpoint#key"\n  click NetworkManager "/docs/api/NetworkManager"\n  click optimistic "/rest/api/Endpoint#getoptimisticresponse"\n  click update "/rest/api/Endpoint#update"\n  click update2 "/rest/api/Endpoint#update"'}))}s.isMDXComponent=!0},30433:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),i=n(86010),s=n(5730),o=n(20636),l=n(76602),p=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:f,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,l.U)(),[x,w]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=f){const e=b[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==x&&(T(t),w(r),null!=f&&E(f,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:S},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);