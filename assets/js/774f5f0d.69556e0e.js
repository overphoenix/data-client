(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[72796],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),s=n(67392),i=n(7094),c=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[E,N]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=v[f];null!=e&&e!==E&&y.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==E&&(T(t),N(r),null!=f&&w(f,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var r=n(67294),a=n(67601),o=n(43329),l=n(65612),s=n(37814),i=n(9546),c=n(51111),d=n(70794),u=n(32257),p=n(66856);class m extends p.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return n.updatedAt<=r.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:h})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:g,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new u.Z(this),getOptimisticResponse:y})}}f.urlRoot="/api/todos";const h=(e,t,n)=>({id:t.id,...e.getResponse(f.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),g=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),y=(e,t)=>({...t,updatedAt:e.fetchedAt});var b=n(87462),k=n(10407),v=n(86010),w=n(95999),E=n(52263),N=n(72389),x=n(66412),T=n(55423),S=n(84195),D=n(33625),Z=n(85109),C=n(83477),O=n(33799),I=n(7094),R=n(12466),P=n(91262);const A="playgroundContainer_sLUA",F="row_YGZs",j="hidden_Hh8i",B="playgroundHeader_Zx4K",L="playgroundEditor_lYwu",_="playgroundPreview_rk9R",U="playgroundError_sRnA",M="playgroundResult_tefG",V="debugToggle_zlro",q="tabControls_trxh",$="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var X=n(78914),Y=n(97723),H=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,H.I)(),a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return r.createElement(Y.L,{shouldExpandNode:J,data:t,valueRenderer:Q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"}})}function J(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const W="undefined"!=typeof Intl;function Q(e,t){const n=arguments.length<=2?void 0:arguments[2];return W&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V,onClick:t},"Store"),"y"===n?r.createElement(re,null):null)}const te=(0,r.memo)(ee);function ne(){const e=(0,r.useContext)(X.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return r.createElement(K,{value:t})}const re=(0,r.memo)(ne);function ae(e){let{groupId:t,defaultOpen:n,row:a}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,I.U)(),[s,i]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,R.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&i(e)}const d=(0,r.useCallback)((e=>{c(e.currentTarget),i((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),u=(0,r.useMemo)((()=>[new O.Z,new D.Z(Z.Z)]),[]),p=!("n"===s||!a);return r.createElement(C.nq,{managers:u},r.createElement("div",{className:(0,v.Z)(_,{[j]:p})},r.createElement(P.Z,{fallback:r.createElement(le,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(le,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:U}))))),r.createElement(te,{selectedValue:s,toggle:d}))}const oe=(0,r.memo)(ae);function le(){return r.createElement("div",null,"Loading...")}function se(e){let{children:t,className:n}=e;return r.createElement("div",{className:(0,v.Z)(B,n)},t)}function ie(e){let{groupId:t,defaultOpen:n,row:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(se,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:M},r.createElement(oe,{groupId:t,defaultOpen:n,row:a})))}function ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(S.Z);return r.createElement("div",{className:$,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,v.Z)(z,{[G]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function de(e){let{children:t}=e;return r.createElement(se,{className:q},r.createElement("div",null,t),r.createElement(ce,null))}function ue(e){let{title:t}=e;const{values:n}=(0,r.useContext)(S.Z),a=n.length>0,o=(0,N.Z)();return r.createElement("div",null,a?r.createElement(de,null,t):r.createElement(se,null,t),r.createElement(k.uz,{key:o,className:L}))}function pe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:o,row:l,hidden:s=!1,...i}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:c}}}}=(0,E.Z)(),d=(0,x.p)();i.scope;return r.createElement("div",{className:(0,v.Z)(A,{[F]:l,[j]:s})},r.createElement(k.nu,(0,b.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:d},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(ie,{groupId:a,defaultOpen:o,row:l}),r.createElement(ue,null)):r.createElement(r.Fragment,null,r.createElement(ue,null),r.createElement(ie,{groupId:a,defaultOpen:o,row:l}))))}ue.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(32430),fe=n(23212);class he extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}he.schema={updatedAt:Date};const ge=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:he});const ye={...o,...s,...c,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d.Z,lastUpdated:ge,TimedEntity:he,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:o}=(0,me.Z)();return r.createElement(fe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:U},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),a((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends f{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},be=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o="n",row:l=!1}=e;return r.createElement(pe,{scope:ye,noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:a},"string"==typeof t?t:t.props.children.props.children)},ke=(0,r.memo)(be)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},87:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162),s=n(70523),i=n(9790);const c={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},d=void 0,u={unversionedId:"getting-started/data-dependency",id:"version-6.2/getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useSuspense()",source:"@site/versioned_docs/version-6.2/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/6.2/getting-started/data-dependency",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/6.2/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/6.2/getting-started/entity"}},p={},m=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",level:2},{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Live Crypto Price Example",id:"live-crypto-price-example",level:3}],f={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nin components where we display/use their data directly."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useSuspense(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useSuspense(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// todo could be undefined if id is undefined\nconst todo = useSuspense(todoDetail, id ? { id } : null);\n"))),(0,a.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,a.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,a.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,a.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,a.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data.")),(0,a.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,a.kt)("h3",{id:"stateful"},"Stateful"),(0,a.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," package includes\na hook that uses stateful loading and errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useStatefulResource(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"../guides/no-suspense"},"useStatefulResource")),(0,a.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"When data is likely to change due to external factor; ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useSuspense(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,"Subscriptions are orchestrated by ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,a.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,a.kt)(i.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<{ currency: string }>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useSuspense(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}h.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);