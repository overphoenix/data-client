"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47768],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(86010),l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),l=n(86010),r=n(72389),i=n(67392),o=n(7094),u=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:m,groupId:h,className:k}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[S,E]=(0,s.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==S&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==S&&(x(t),E(a),null!=h&&y(h,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:P,onClick:P},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,s.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,r.Z)();return s.createElement(c,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(65488),s=n(85162),l=n(67294);function r(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(s.Z,{value:"simple"},t[0]),l.createElement(s.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{var a=n(67294),s=n(72887);const l={React:a,...a,...s};t.Z=l},14239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),l=n(11048),r=n(56686);const i={title:"useSuspense()"},o=void 0,u={unversionedId:"api/useSuspense",id:"version-6.3/api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/versioned_docs/version-6.3/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/6.3/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/6.3/api/Snapshot"},next:{title:"useController()",permalink:"/docs/6.3/api/useController"}},p={},d=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"useSuspense() - Data fetching with Suspense")),(0,s.kt)(l.Z,{mdxType:"GenericsTabs"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,s.kt)("p",null,"Excellent for retrieving the data you need."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,s.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,s.kt)("p",null,"Cache policy is ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.3/getting-started/expiry-policy"},"configurable"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"On first-render",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"or parameters change"),(0,s.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,s.kt)("li",{parentName:"ul"},"or imperative ",(0,s.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")," triggered"))),(0,s.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,s.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,s.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Throws error to be ",(0,s.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,s.kt)("li",{parentName:"ul"},"While Loading:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,s.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,s.kt)("h2",{id:"single"},"Single"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,s.kt)("h2",{id:"list"},"List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useSuspense(PostResource.list());\n  // posts as PostResource[]\n}\n")),(0,s.kt)("h2",{id:"sequential"},"Sequential"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,s.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,s.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(PaginatedPostResource.list(), { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,s.kt)(r.ZP,{mdxType:"ConditionalDependencies"}),(0,s.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,s.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"detail()"),(0,s.kt)("li",{parentName:"ul"},"list()")),(0,s.kt)("p",null,"Feel free to add your own ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," as well."))}m.isMDXComponent=!0},56686:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),s=(n(67294),n(3905)),l=n(75690);const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,s.kt)(l.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}i.isMDXComponent=!0}}]);