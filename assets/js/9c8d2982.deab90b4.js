"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47768],{30433:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),l=n(5730),i=n(20636),o=n(76602),u=n(63735),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[S,w]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=b[f];null!=e&&e!==S&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==S&&(P(t),w(a),null!=f&&N(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(65559),r=n(30433),s=n(67294);function l(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(r.Z,{value:"simple"},t[0]),s.createElement(r.Z,{value:"generics"},t[1]))}},57489:(e,t,n)=>{var a=n(67294),r=n(72887);const s={React:a,...a,...r};t.Z=s},12649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(88705),l=n(54429);const i={title:"useSuspense()"},o=void 0,u={unversionedId:"api/useSuspense",id:"version-6.3/api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/versioned_docs/version-6.3/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/6.3/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/6.3/api/Snapshot"},next:{title:"useController()",permalink:"/docs/6.3/api/useController"}},p={},c=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useSuspense() - Data fetching with Suspense")),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,r.kt)("p",null,"Excellent for retrieving the data you need."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,r.kt)("p",null,"Cache policy is ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/getting-started/expiry-policy"},"configurable"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or parameters change"),(0,r.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,r.kt)("li",{parentName:"ul"},"or imperative ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")," triggered"))),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throws error to be ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,r.kt)("li",{parentName:"ul"},"While Loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useSuspense(PostResource.list());\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"sequential"},"Sequential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,r.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(PaginatedPostResource.list(), { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,r.kt)(l.ZP,{mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detail()"),(0,r.kt)("li",{parentName:"ul"},"list()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," as well."))}m.isMDXComponent=!0},54429:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905)),s=n(13743);const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(s.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}i.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);