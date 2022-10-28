"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4381],{73487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(47885);const s={title:"HookableResource"},i=void 0,o={unversionedId:"api/HookableResource",id:"version-5.0/api/HookableResource",title:"HookableResource",description:"HookableResource is just like Resource but its endpoints are hooks.",source:"@site/rest_versioned_docs/version-5.0/api/HookableResource.md",sourceDirName:"api",slug:"/api/HookableResource",permalink:"/rest/5.0/api/HookableResource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/HookableResource.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"HookableResource"},sidebar:"docs",previous:{title:"BaseResource",permalink:"/rest/5.0/api/BaseResource"},next:{title:"Endpoint",permalink:"/rest/5.0/api/Endpoint"}},p={},u=[{value:"Static network methods and properties",id:"static-network-methods-and-properties",level:2},{value:"static useFetchInit(init: RequestInit): RequestInit",id:"useFetchInit",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"useDetail(): Endpoint",id:"detail",level:3},{value:"Implementation:",id:"implementation",level:4},{value:"useList(): Endpoint",id:"list",level:3},{value:"Implementation:",id:"implementation-1",level:4},{value:"useCreate(): Endpoint",id:"create",level:3},{value:"Implementation:",id:"implementation-2",level:4},{value:"useUpdate(): Endpoint",id:"update",level:3},{value:"Implementation:",id:"implementation-3",level:4},{value:"usePartialUpdate(): Endpoint",id:"partialUpdate",level:3},{value:"Implementation:",id:"implementation-4",level:4},{value:"useDelete(): Endpoint",id:"delete",level:3},{value:"Implementation:",id:"implementation-5",level:4}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HookableResource")," is just like ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resource")," but its endpoints are hooks."),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HookableResource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends HookableResource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { HookableResource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends HookableResource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,r.kt)("admonition",{title:"extends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resource")," for more information")),(0,r.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,r.kt)("p",null,"These are the basic building blocks used to compile the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint")," below."),(0,r.kt)("h3",{id:"useFetchInit"},"static useFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called in endpoint methods (",(0,r.kt)("a",{parentName:"p",href:"#list"},"list()"),", ",(0,r.kt)("a",{parentName:"p",href:"#detail"},"detail()"),"), which allows for hooks that\nuse React context."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"These provide the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"endpoints"),"s common in ",(0,r.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,r.kt)("h3",{id:"detail"},"useDetail(): Endpoint"),(0,r.kt)("p",null,"A GET request using standard ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"/rest/5.0/api/BaseResource#url"},"url()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useDetail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"list"},"useList(): Endpoint"),(0,r.kt)("p",null,"A GET request using ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"/rest/5.0/api/BaseResource#listUrl"},"listUrl()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useList<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"create"},"useCreate(): Endpoint"),(0,r.kt)("p",null,"A POST request sending a payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource#listUrl"},"listUrl()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useCreate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"update"},"useUpdate(): Endpoint"),(0,r.kt)("p",null,"A PUT request sending a payload to a ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"partialUpdate"},"usePartialUpdate(): Endpoint"),(0,r.kt)("p",null,"A PATCH request sending a partial payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static usePartialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"delete"},"useDelete(): Endpoint"),(0,r.kt)("p",null,"A DELETE request sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useDelete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}d.isMDXComponent=!0},30433:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),s=n(5730),i=n(20636),o=n(76602),p=n(63735),u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,o.U)(),[T,w]=(0,r.useState)(y),R=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==T&&b.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=R.indexOf(t),a=b[n].value;a!==T&&(E(t),w(a),null!=h&&g(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;n=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;n=R[t]??R[R.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>R.push(e),onKeyDown:x,onFocus:S,onClick:S},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65559),r=n(30433),l=n(67294);function s(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);