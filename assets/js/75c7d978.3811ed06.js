"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[86136],{58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(67294),r=a(72389),s=a(51548),i=a(86010);const o="tabItem_LplD";function d(e){var t,a;const{lazy:r,block:d,defaultValue:u,values:p,groupId:c,className:m}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.lx)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=v[0])?void 0:a.props.value);if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,s.UB)(),[y,E]=(0,l.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=c){const e=k[c];null!=e&&e!==y&&h.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==y&&(x(t),E(n),null!=c&&b(c,n))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},m)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:w,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":y===t})}),a??t)}))),r?(0,l.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},11048:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9877),l=a(58215),r=a(67294);function s(e){let{children:t}=e;return r.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},r.createElement(l.Z,{value:"simple"},t[0]),r.createElement(l.Z,{value:"generics"},t[1]))}},70523:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9877),l=a(58215),r=a(67294);function s(e){let{children:t}=e;return r.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(l.Z,{value:"ts"},t[0]),r.createElement(l.Z,{value:"js"},t[1]))}},56922:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(15814);const r={React:n,...n,...l}},12694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(70523),a(9877),a(58215);var r=a(95652),s=a(11048);const i={title:"Snapshot"},o=void 0,d={unversionedId:"api/Snapshot",id:"version-6.2/api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/versioned_docs/version-6.2/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/6.2/api/Snapshot",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/6.2/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/6.2/api/useSuspense"}},u={},p=[{value:"getResponse(endpoint, ...args)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"getError(endpoint, ...args)",id:"getError",level:2},{value:"fetchedAt",id:"fetchedat",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,l.kt)(s.Z,{mdxType:"GenericsTabs"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,l.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import type { DenormalizeNullable } from './normal.js';\nimport type { EndpointInterface } from './interface.js';\nimport type { ExpiryStatusInterface } from './Expiry.js';\nimport type { ErrorTypes } from './ErrorTypes.js';\n\nexport default interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Use ",(0,l.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot"))),(0,l.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,l.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,l.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,l.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,l.kt)("h4",{id:"valid"},"Valid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will never suspend."),(0,l.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,l.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,l.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,l.kt)("h4",{id:"invalid"},"Invalid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will always suspend"),(0,l.kt)("li",{parentName:"ul"},"Will always fetch")),(0,l.kt)("h3",{id:"expiresat"},"expiresAt"),(0,l.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,l.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,l.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,l.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,l.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}m.isMDXComponent=!0}}]);