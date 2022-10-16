/*! For license information please see 2dfa56e8.a504d1b1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11627],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var v=b.prototype=new y;v.constructor=b,f(v,k.prototype),v.isPureReactComponent=!0;var N=Array.isArray,E=Object.prototype.hasOwnProperty,R={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,a){var r,s={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&!w.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=a;else if(1<l){for(var p=Array(l),d=0;d<l;d++)p[d]=arguments[d+2];s.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:n,type:e,key:o,ref:i,props:s,_owner:R.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case a:l=!0}}if(l)return o=o(l=e),e=""===s?"."+I(l,0):s,N(o)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),S(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(l=0,s=""===s?".":s+":",N(e))for(var p=0;p<e.length;p++){var d=s+I(i=e[p],p);l+=S(i,t,r,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),p=0;!(i=e.next()).done;)l+=S(i=i.value,t,r,d=s+I(i,p++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function C(e,t,n){if(null==e)return e;var a=[],r=0;return S(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},j={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(27378),n(3905)),s=n(65488),o=n(85162);const i={title:"RestEndpoint",description:"Strongly typed path-based API definitions."},l=void 0,p={unversionedId:"api/RestEndpoint",id:"api/RestEndpoint",title:"RestEndpoint",description:"Strongly typed path-based API definitions.",source:"@site/../docs/rest/api/RestEndpoint.md",sourceDirName:"api",slug:"/api/RestEndpoint",permalink:"/rest/api/RestEndpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/RestEndpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665887417,formattedLastUpdatedAt:"Oct 16, 2022",frontMatter:{title:"RestEndpoint",description:"Strongly typed path-based API definitions."},sidebar:"docs",previous:{title:"Summary List Endpoints",permalink:"/rest/guides/summary-list"},next:{title:"Endpoint",permalink:"/rest/api/Endpoint"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Simplest retrieval",id:"simplest-retrieval",level:3},{value:"Managing state",id:"managing-state",level:3},{value:"Typing",id:"typing",level:3},{value:"Resolution/Return",id:"resolutionreturn",level:4},{value:"Function Parameters",id:"function-parameters",level:4},{value:"Fetch Lifecycle",id:"fetch-lifecycle",level:2},{value:"Prepare Fetch",id:"prepare-fetch",level:2},{value:"path: string",id:"path",level:3},{value:"urlPrefix: string = &#39;&#39;",id:"urlPrefix",level:3},{value:"method: string = &#39;GET&#39;",id:"method",level:3},{value:"getRequestInit(body): RequestInit",id:"getRequestInit",level:3},{value:"getHeaders(headers: HeadersInit): HeadersInit",id:"getHeaders",level:3},{value:"Handle fetch",id:"handle-fetch",level:2},{value:"fetchResponse(input, init): Promise",id:"fetchResponse",level:3},{value:"parseResponse(response): Promise",id:"parseResponse",level:3},{value:"process(value, ...args): any",id:"process",level:3},{value:"schema?: Schema",id:"schema",level:2},{value:"Endpoint Life-Cycles",id:"endpoint-life-cycles",level:2},{value:"dataExpiryLength?: number",id:"dataexpirylength",level:3},{value:"errorExpiryLength?: number",id:"errorexpirylength",level:3},{value:"errorPolicy?: (error: any) =&gt; &#39;soft&#39; | undefined",id:"errorpolicy",level:3},{value:"invalidIfStale: boolean",id:"invalidifstale",level:3},{value:"pollFrequency: number",id:"pollfrequency",level:3},{value:"getOptimisticResponse: (snap, ...args) =&gt; fakePayload",id:"getoptimisticresponse",level:3},{value:"update(normalizedResponseOfThis, ...args) =&gt; ({ endpointKey: (normalizedResponseOfEndpointToUpdate) =&gt; updatedNormalizedResponse) })",id:"update",level:3},{value:"extend(options): Endpoint",id:"extend",level:2},{value:"paginated(removeCursor): args",id:"paginated",level:2},{value:"Inheritance",id:"inheritance",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"RestEndpoint - Strongly typed path-based API definitions"),(0,r.kt)("meta",{"data-rh":"true",name:"docsearch:pagerank",content:"10"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RestEndpoints")," are for ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP"},"HTTP")," based protocols like REST."),(0,r.kt)(s.Z,{defaultValue:"RestEndpoint",values:[{label:"RestEndpoint",value:"RestEndpoint"},{label:"Endpoint",value:"Endpoint"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"RestEndpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RestGenerics {\n  readonly path: string;\n  readonly schema?: Schema | undefined;\n  readonly method?: string;\n  readonly body?: any;\n}\n\nexport class RestEndpoint<O extends RestGenerics = any> extends Endpoint {\n  /* Prepare fetch */\n  readonly path: string;\n  readonly urlPrefix: string;\n  readonly requestInit: RequestInit;\n  readonly method: string;\n  readonly signal: AbortSignal | undefined;\n  url(...args: Parameters<F>): string;\n  getRequestInit(\n    this: any,\n    body?: RequestInit['body'] | Record<string, unknown>,\n  ): RequestInit;\n  getHeaders(headers: HeadersInit): HeadersInit;\n\n  /* Perform/process fetch */\n  fetchResponse(input: RequestInfo, init: RequestInit): Promise<Response>;\n  parseResponse(response: Response): Promise<any>;\n  process(value: any, ...args: Parameters<F>): any;\n}\n"))),(0,r.kt)(o.Z,{value:"Endpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Endpoint<F extends (...args: any) => Promise<any>> {\n  constructor(fetchFunction: F, options: EndpointOptions);\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect?: true;\n\n  readonly schema?: Schema;\n\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  readonly getOptimisticResponse?: (\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ) => ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  readonly errorPolicy?: (error: any) => 'soft' | undefined;\n}\n")))),(0,r.kt)("admonition",{title:"extends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"RestEndpoint")," extends ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"All options are supported as arguments to the constructor, ",(0,r.kt)("a",{parentName:"p",href:"#extend"},"extend"),", and as overrides when using ",(0,r.kt)("a",{parentName:"p",href:"#inheritance"},"inheritance")),(0,r.kt)("h3",{id:"simplest-retrieval"},"Simplest retrieval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodo = new RestEndpoint({\n  path: 'https\\\\://jsonplaceholder.typicode.com/todos/:id',\n});\n")),(0,r.kt)("h3",{id:"managing-state"},"Managing state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class Todo extends Entity {\n  id = '';\n  title = '';\n  completed = false;\n  pk() { return this.id }\n}\n\nconst getTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com'\n  path: '/todos/:id',\n  schema: Todo,\n});\nconst updateTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  method: 'PUT',\n  schema: Todo,\n})\n")),(0,r.kt)("p",null,"Using a ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema")," enables automatic data consistency without the need to hurt performance with refetching."),(0,r.kt)("h3",{id:"typing"},"Typing"),(0,r.kt)("h4",{id:"resolutionreturn"},"Resolution/Return"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#schema"},"schema")," determines the return value when used with data-binding hooks like ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useDLE"},"useDLE")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"useCache")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const get = new RestEndpoint({ path: '/', schema: Todo });\n// todo is Todo\nconst todo = useSuspense(get);\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#process"},"process")," determines the resolution value when the endpoint is called directly or\nwhen use with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch"),". Otherwise this will be 'any' to\nensure compatibility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface TodoInterface {\n  title: string;\n  completed: boolean;\n}\nconst get = new RestEndpoint({\n  path: '/',\n  process(value): TodoInterface {\n    return value;\n  },\n});\n// todo is TodoInterface\nconst todo = await get();\nconst todo2 = await controller.fetch(get);\n")),(0,r.kt)("h4",{id:"function-parameters"},"Function Parameters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#path"},"path")," used to construct the url determines the type of the first argument. If it has no patterns,\nthen the 'first' argument is skipped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const get = new RestEndpoint({ path: '/' });\nget();\nconst getById = new RestEndpoint({ path: '/:id' });\n// both number and string types work as they are serialized into strings to construct the url\ngetById({ id: 5 });\ngetById({ id: '5' });\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#method"},"method")," determines whether there is a second argument to be sent as the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#body"},"body"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const update = new RestEndpoint({ path: '/:id', method: 'PUT' });\nupdate({ id: 5 }, { title: 'updated', completed: true });\n")),(0,r.kt)("p",null,"However, this is typed as 'any' so it won't catch typos."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"body")," can be used to type the argument after the url parameters. It is only used for typing so the\nvalue sent does not matter. ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," value can be used to 'disable' the second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const update = new RestEndpoint({\n  path: '/:id',\n  method: 'PUT',\n  body: {} as TodoInterface,\n});\nupdate({ id: 5 }, { title: 'updated', completed: true });\n// `undefined` disables 'body' argument\nconst rpc = new RestEndpoint({\n  path: '/:id',\n  method: 'PUT',\n  body: undefined,\n});\nrpc({ id: 5 });\n")),(0,r.kt)("h2",{id:"fetch-lifecycle"},"Fetch Lifecycle"),(0,r.kt)("p",null,"RestEndpoint adds to Endpoint by providing customizations for a provided fetch method."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Prepare fetch"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"url()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#urlPrefix"},"urlPrefix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#path"},"path")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#getRequestInit"},"getRequestInit()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getHeaders"},"getHeaders()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#method"},"method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal"},"signal")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Perform fetch"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fetchResponse"},"fetchResponse()")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#parseResponse"},"parseResponse()")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#process"},"process()"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="fetch implementation for RestEndpoint"',title:'"fetch',implementation:!0,for:!0,'RestEndpoint"':!0},"function fetch(...args) {\n  const urlParams = this.#hasBody && args.length < 2 ? {} : args[0] || {};\n  const body = this.#hasBody ? args[args.length - 1] : undefined;\n  return this.fetchResponse(this.url(urlParams), this.getRequestInit(body))\n    .then(this.parseResponse)\n    .then(res => this.process(res, ...args));\n}\n")),(0,r.kt)("h2",{id:"prepare-fetch"},"Prepare Fetch"),(0,r.kt)("p",null,"Members double as options (second constructor arg). While none are required, the first few\nhave defaults."),(0,r.kt)("h3",{id:"path"},"path: string"),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pillarjs/path-to-regexp#compile-reverse-path-to-regexp"},"path-to-regex")," to build\nurls using the parameters passed. This also informs the types so they are properly enforced."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},":")," prefixed words are key names. Both strings and numbers are accepted as options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getThing = new RestEndpoint({ path: '/:group/things/:id' });\ngetThing({ group: 'first', id: 77 });\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"?")," to indicate optional parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const optional = new RestEndpoint({ path: '/:group/things/:number?' });\noptional({ group: 'first' });\noptional({ group: 'first', number: 'fifty' });\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," to escape special characters like ",(0,r.kt)("inlineCode",{parentName:"p"},":")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getSite = new RestEndpoint({ path: 'https\\\\://site.com/:slug' });\ngetSite({ slug: 'first' });\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Types are inferred automatically from ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"body")," can be used to set a second argument for mutation endpoints. The actual value is not\nused in any way so it does not matter."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const updateSite = new RestEndpoint({\n  path: 'https\\\\://site.com/:slug',\n  // highlight-next-line\n  body: {} as { url: string },\n});\n\nupdateSite({ slug: 'cool' }, { url: 'https://resthooks.io/' });\n"))),(0,r.kt)("h3",{id:"urlPrefix"},"urlPrefix: string = ''"),(0,r.kt)("p",null,"Prepends this to the compiled ",(0,r.kt)("a",{parentName:"p",href:"#path"},"path")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a dynamic prefix, try overriding the url() method:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodo = new RestEndpoint({\n  path: '/todo/:id',\n  url(...args) {\n    return dynamicPrefix() + super.url(...args);\n  },\n});\n"))),(0,r.kt)("h3",{id:"method"},"method: string = 'GET'"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/method"},"Method")," is part of the HTTP protocol.\nREST protocols use these to indicate the type of operation. Because of this RestEndpoint uses this\nto inform ",(0,r.kt)("inlineCode",{parentName:"p"},"sideEffect")," and whether the endpoint should use a ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," payload."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET")," is 'readonly', other methods imply sideEffects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," both default to no ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),"."),(0,r.kt)("admonition",{title:"How method affects function Parameters",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"method")," only influences parameters in the RestEndpoint constructor and ",(0,r.kt)("em",{parentName:"p"},"not")," ",(0,r.kt)("a",{parentName:"p",href:"#extend"},".extend()"),".\nThis allows non-standard method-body combinations."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"body")," will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),". You can always set body explicitly to take full control. ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used\nto indicate there is no body."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const standardCreate = new RestEndpoint({\n  path: '/:id',\n  method: 'POST',\n});\nstandardCreate({ id }, myPayload);\nconst nonStandardEndpoint = new RestEndpoint({\n  path: '/:id',\n  method: 'POST',\n  body: undefined,\n});\n// no second 'body' argument, because body was set to 'undefined'\nnonStandardEndpoint({ id });\n"))),(0,r.kt)("h3",{id:"getRequestInit"},"getRequestInit(body): RequestInit"),(0,r.kt)("p",null,"Prepares ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," used in fetch.\nThis is sent to ",(0,r.kt)("a",{parentName:"p",href:"#fetchResponse"},"fetchResponse")),(0,r.kt)("h3",{id:"getHeaders"},"getHeaders(headers: HeadersInit): HeadersInit"),(0,r.kt)("p",null,"Called by ",(0,r.kt)("a",{parentName:"p",href:"#getRequestInit"},"getRequestInit")," to determine ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/headers"},"HTTP Headers")),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't use hooks here.")),(0,r.kt)("h2",{id:"handle-fetch"},"Handle fetch"),(0,r.kt)("h3",{id:"fetchResponse"},"fetchResponse(input, init): Promise"),(0,r.kt)("p",null,"Performs the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," call"),(0,r.kt)("h3",{id:"parseResponse"},"parseResponse(response): Promise"),(0,r.kt)("p",null,"Takes the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response")," and parses via .text() or .json()"),(0,r.kt)("h3",{id:"process"},"process(value, ...args): any"),(0,r.kt)("p",null,"Perform any transforms with the parsed result. Defaults to identity function."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The return type of process can be used to set the return type of the endpoint fetch:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getTodo = new RestEndpoint({\n  path: '/todos/:id',\n  // The identity function is the default value; so we aren't changing any runtime behavior\n  // highlight-next-line\n  process(value): TodoInterface {\n    return value;\n  },\n});\n\ninterface TodoInterface {\n  id: string;\n  title: string;\n  completed: boolean;\n}\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// title is string\nconst title = (await getTodo({ id })).title;\n"))),(0,r.kt)("h2",{id:"schema"},"schema?: Schema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Declarative data lifecycle")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global data consistency and performance with ",(0,r.kt)("a",{parentName:"li",href:"https://www.plutora.com/blog/understanding-the-dry-dont-repeat-yourself-principle"},"DRY")," state: ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity#useincoming"},"Race condition handling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity#validate"},"Validation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/Entity#expiresat"},"Expiry"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Entity, RestEndpoint } from '@rest-hooks/rest';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst getUser = new RestEndpoint({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,r.kt)("h2",{id:"endpoint-life-cycles"},"Endpoint Life-Cycles"),(0,r.kt)("h3",{id:"dataexpirylength"},"dataExpiryLength?: number"),(0,r.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#expiry-time"},"Learn more about expiry time")),(0,r.kt)("h3",{id:"errorexpirylength"},"errorExpiryLength?: number"),(0,r.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h3",{id:"errorpolicy"},"errorPolicy?: (error: any) => 'soft' | undefined"),(0,r.kt)("p",null,"'soft' will use stale data (if exists) in case of error; undefined or not providing option will result\nin error."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#error-policy"},"Learn more about errorPolicy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"errorPolicy(error) {\n  return error.status >= 500 ? 'soft' : undefined;\n}\n")),(0,r.kt)("h3",{id:"invalidifstale"},"invalidIfStale: boolean"),(0,r.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useSuspense() will suspend when data is stale even if it already exists in cache."),(0,r.kt)("h3",{id:"pollfrequency"},"pollFrequency: number"),(0,r.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,r.kt)("h3",{id:"getoptimisticresponse"},"getOptimisticResponse: (snap, ...args) => fakePayload"),(0,r.kt)("p",null,"When provided, any fetches with this endpoint will behave as though the ",(0,r.kt)("inlineCode",{parentName:"p"},"fakePayload")," return value\nfrom this function was a succesful network response. When the actual fetch completes (regardless\nof failure or success), the optimistic update will be replaced with the actual network response."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/guides/optimistic-updates"},"Optimistic update guide")),(0,r.kt)("h3",{id:"update"},"update(normalizedResponseOfThis, ...args) => ({ ","[endpointKey]",": (normalizedResponseOfEndpointToUpdate) => updatedNormalizedResponse) })"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="UpdateType.ts"',title:'"UpdateType.ts"'},"type UpdateFunction<\n  Source extends EndpointInterface,\n  Updaters extends Record<string, any> = Record<string, any>,\n> = (\n  source: ResultEntry<Source>,\n  ...args: Parameters<Source>\n) => { [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K] };\n")),(0,r.kt)("p",null,"Simplest case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new RestEndpoint({\n  path: '/user',\n  method: 'POST',\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,r.kt)("p",null,"More updates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,r.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new RestEndpoint({\n  path: '/user',\n  method: 'POST',\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,r.kt)("p",null,"This is usage with a ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\n// We declare BaseTodoResource before TodoResource to prevent recursive type definitions\nconst BaseTodoResource = createResource({\n  path: 'https://jsonplaceholder.typicode.com/todos/:id',\n  schema: Todo,\n});\nexport const TodoResource = {\n  ...BaseTodoResource,\n  create: BaseTodoResource.create.extend({\n    // highlight-start\n    update: (newResourceId: string) => ({\n      [todoList.key({})]: (resourceIds: string[] = []) => [\n        ...resourceIds,\n        newResourceId,\n      ],\n    }),\n    // highlight-end\n  }),\n};\n")),(0,r.kt)("h2",{id:"extend"},"extend(options): Endpoint"),(0,r.kt)("p",null,"Can be used to further customize the endpoint definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const getUser = new RestEndpoint({ path: '/users/:id' });\n\nconst UserDetailNormalized = getUser.extend({\n  schema: User,\n  getHeaders(headers: HeadersInit): HeadersInit {\n    return {\n      ...headers,\n      'Access-Token': getAuth(),\n    };\n  },\n});\n")),(0,r.kt)("h2",{id:"paginated"},"paginated(removeCursor): args"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function paginated<E, A extends any[]>(\n  this: E,\n  removeCursor: (...args: A) => readonly [...Parameters<E>],\n): PaginationEndpoint<E, A>;\n")),(0,r.kt)("p",null,"Extends an endpoint whose schema contains an Array and creates a new endpoint that\nwill append the items it finds into the list from the first endpoint. See ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/pagination#infinite-scrolling"},"Infinite Scrolling Pagination")," for more info."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const getNextPage = getList.paginated(\n  ({ cursor, ...rest }: { cursor: string | number }) =>\n    (Object.keys(rest).length ? [rest] : []) as any,\n);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"removeCusor")," is a function that takes the arguments sent in fetch of ",(0,r.kt)("inlineCode",{parentName:"p"},"getNextPage")," and returns\nthe arguments to update ",(0,r.kt)("inlineCode",{parentName:"p"},"getList"),"."),(0,r.kt)("h2",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"Make sure you use ",(0,r.kt)("inlineCode",{parentName:"p"},"RestGenerics")," to keep types working."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RestEndpoint, RestGenerics } from '@rest-hooks/rest';\n\nclass GithubEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  urlPrefix = 'https://api.github.com';\n\n  getHeaders(headers: HeadersInit): HeadersInit {\n    return {\n      ...headers,\n      'Access-Token': getAuth(),\n    };\n  }\n}\n")))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),o=n(72389),i=n(67392),l=n(7094),p=n(12466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:m,groupId:h,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[E,R]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==E&&k.some((t=>t.value===e))&&R(e)}const P=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==E&&(T(t),R(a),null!=h&&N(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);