"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[15404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),s=n(72389),o=n(51548),l=n(86010);const i="tabItem_LplD";function c(e){var t,n;const{lazy:s,block:c,defaultValue:u,values:d,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,o.UB)(),[g,N]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=p){const e=k[p];null!=e&&e!==g&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==g&&(P(t),N(a),null!=p&&y(p,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:E,onFocus:x,onClick:x},s,{className:(0,l.Z)("tabs__item",i,null==s?void 0:s.className,{"tabs__item--active":g===t})}),n??t)}))),s?(0,r.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function u(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9877),r=n(58215),s=n(67294);function o(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(r.Z,{value:"simple"},t[0]),s.createElement(r.Z,{value:"generics"},t[1]))}},33753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),s=n(11048);const o={title:"useFetcher()"},l=void 0,i={unversionedId:"api/useFetcher",id:"version-6.1/api/useFetcher",title:"useFetcher()",description:"Use Controller.fetch() instead",source:"@site/versioned_docs/version-6.1/api/useFetcher.md",sourceDirName:"api",slug:"/api/useFetcher",permalink:"/docs/6.1/api/useFetcher",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetcher.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"useFetcher()"},sidebar:"version-6.1/docs",previous:{title:"DevToolsManager",permalink:"/docs/6.1/api/DevToolsManager"},next:{title:"useInvalidator()",permalink:"/docs/6.1/api/useInvalidator"}},c={},u=[{value:"throttle?: boolean = false",id:"throttle-boolean--false",level:2},{value:"Example",id:"example",level:2},{value:"updateParams: destEndpoint, destParams, updateFunction",id:"updateparams-destendpoint-destparams-updatefunction",level:2},{value:"updateFunction: (sourceResults, destResults) =&gt; destResults",id:"updatefunction-sourceresults-destresults--destresults",level:3},{value:"Example",id:"example-1",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Controller#fetch"},"Controller.fetch()")," instead"))),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher(\n  endpoint: Endpoint,\n  throttle?: boolean = false,\n): FetchFunction;\n\ntype FetchFunction = (\n  params: object,\n  body: object | void,\n  updateParams?: OptimisticUpdateParams[]\n) => Promise<any>;\n\ntype OptimisticUpdateParams = [\n  destShape: Endpoint,\n  destParams: object,\n  updateFunction: (sourceResults: object, destResults: object) => object,\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  endpoint: Endpoint<(p: Params, b: Body) => Promise<any>, S>,\n  throttle?: boolean = false,\n): <\n  UpdateParams extends OptimisticUpdateParams<\n    SchemaFromShape<Shape>,\n    FetchShape<any, any, any>\n  >[]\n>(\n  params: ParamsFromShape<Shape>,\n  body: BodyFromShape<Shape>,\n  updateParams?: UpdateParams | undefined,\n) => Promise<any>;\n\ntype OptimisticUpdateParams<\n  SourceSchema extends Schema,\n  DestShape extends FetchShape<any, any, any>\n> = [\n  DestShape,\n  ParamsFromShape<DestShape>,\n  UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>,\n];\n\ntype UpdateFunction<SourceSchema extends Schema, DestSchema extends Schema> = (\n  sourceResults: Normalize<SourceSchema>,\n  destResults: Normalize<DestSchema> | undefined,\n) => Normalize<DestSchema>;\n"))),(0,r.kt)("p",null,"Mostly useful for imperatively triggering mutation effects."),(0,r.kt)("p",null,"However, this hook is actually used by the retrieval hooks (useRetrieve(), useCache(), useResource()). Using\nit with a side-effect free ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"detail()")," can be done to force a refresh imperatively."),(0,r.kt)("h2",{id:"throttle-boolean--false"},"throttle?: boolean = false"),(0,r.kt)("p",null,"By default all calls force the fetch, however by calling with throttle=true identical\nin-flight requests will be deduped."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const create = useFetcher(PostResource.create());\n  // create as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => create({}, new FormData(e.target))}>{/* ... */}</form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const update = useFetcher(PostResource.update());\n  // update as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => update({ id }, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const del = useFetcher(PostResource.delete());\n  // del as (body: any, params: Readonly<object>) => Promise<any>\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={() => del({ id: post.id })}>X</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"updateparams-destendpoint-destparams-updatefunction"},"updateParams: ","[destEndpoint, destParams, updateFunction][]"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint#update"},"Endpoint.update")," instead"))),(0,r.kt)("p",null,"The optional third argument to the fetch function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher()")," is a\nlist of tuples that tell Rest Hooks additional updates that should take place."),(0,r.kt)("p",null,"The result cache will be updated based on the destEndpoint with destParams applied.\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"destEndpoint.key(destParams)")," would find the location in the cache.)"),(0,r.kt)("p",null,"The third argument is a function to run on that result cache."),(0,r.kt)("h3",{id:"updatefunction-sourceresults-destresults--destresults"},"updateFunction: (sourceResults, destResults) => destResults"),(0,r.kt)("p",null,"This function takes two arguments\nand returns the new result state to be placed in the destination. (Result state resembles\nthe shape of the actual response, except all entities are replaced with their primary keys.)\nThe first argument to the update function is the result of the resolved value of the given fetch call.\nThe second argument is the existing result state of the destination."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This will insert the newly created article id onto the end of the list endpoint with ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticleResource.list(),\n    {},\n    (newArticleID: string, articleIDs: string[] | undefined) => [\n      ...(articleIDs || []),\n      newArticleID,\n    ],\n  ],\n]);\n")),(0,r.kt)("p",null,"This shows the same concept, but for a custom list endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ArticlePaginatedResource extends Resource {\n  static list<T extends Resource>() {\n    return super.list().extend({\n      schema: { results: this[], nextPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticlePaginatedResource.list(),\n    {},\n    (newArticleID: string, articleIDs: { results: string[] } | undefined) => ({\n      ...articleIDs,\n      results: [...articleIDs?.results, newArticleID],\n    }),\n  ],\n]);\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create()"),(0,r.kt)("li",{parentName:"ul"},"update()"),(0,r.kt)("li",{parentName:"ul"},"partialUpdate()"),(0,r.kt)("li",{parentName:"ul"},"delete()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint"},"Endpoint")," as well."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"notes"},"Notes"),(0,r.kt)("p",{parentName:"blockquote"},"As this is the most basic hook to dispatch network requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," it will run through all normal fetch processing like updating\nthe normalized cache, etc.")))}p.isMDXComponent=!0}}]);