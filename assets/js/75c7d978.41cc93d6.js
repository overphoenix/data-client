"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86136],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),s=a(72389),i=a(67392),o=a(7094),u=a(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:a,block:s,defaultValue:c,values:m,groupId:h,className:v}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,o.U)(),[S,x]=(0,l.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==S&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=N.indexOf(t),n=k[a].value;n!==S&&(I(t),x(n),null!=h&&E(h,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:T,onClick:T},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,l.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,s.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},11048:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(65488),l=a(85162),r=a(67294);function s(e){let{children:t}=e;return r.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},r.createElement(l.Z,{value:"simple"},t[0]),r.createElement(l.Z,{value:"generics"},t[1]))}},70523:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(65488),l=a(85162),r=a(67294);function s(e){let{children:t}=e;return r.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(l.Z,{value:"ts"},t[0]),r.createElement(l.Z,{value:"js"},t[1]))}},56922:(e,t,a)=>{var n=a(67294),l=a(72887);const r={React:n,...n,...l};t.Z=r},14159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=(a(70523),a(65488),a(85162),a(31922)),s=a(75690),i=a(11048);const o={title:"Snapshot"},u=void 0,p={unversionedId:"api/Snapshot",id:"version-6.2/api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/versioned_docs/version-6.2/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/6.2/api/Snapshot",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/6.2/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/6.2/api/useSuspense"}},d={},c=[{value:"getResponse(endpoint, ...args)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"getError(endpoint, ...args)",id:"getError",level:2},{value:"fetchedAt",id:"fetchedat",level:2}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,l.kt)(i.Z,{mdxType:"GenericsTabs"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,l.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},r.Z)),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Use ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot")),(0,l.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,l.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,l.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,l.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,l.kt)("h4",{id:"valid"},"Valid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will never suspend."),(0,l.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,l.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,l.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,l.kt)("h4",{id:"invalid"},"Invalid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will always suspend"),(0,l.kt)("li",{parentName:"ul"},"Will always fetch")),(0,l.kt)("h3",{id:"expiresat"},"expiresAt"),(0,l.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,l.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,l.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,l.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,l.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}h.isMDXComponent=!0},31922:(e,t)=>{t.Z="import type { DenormalizeNullable } from './normal.js';\nimport type { EndpointInterface } from './interface.js';\nimport type { ErrorTypes } from './ErrorTypes.js';\n\nexport interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n\n// looser version to allow for cross-package version compatibility\nexport type ExpiryStatusInterface = 1 | 2 | 3;\n"}}]);