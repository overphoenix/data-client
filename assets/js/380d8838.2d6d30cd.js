(self.webpackChunk=self.webpackChunk||[]).push([[86558],{85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),s=n(67392),i=n(7094),d=n(12466),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,i.U)(),[x,w]=(0,r.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=f){const e=v[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==x&&(T(t),w(a),null!=f&&E(f,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:D,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=a},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ve});var a=n(67294),r=n(4391),o=n(12171),l=n(56265),s=n(78357),i=n(56855),d=n(62451),c=n(70794),u=n(86429),p=n(67288);class m extends l.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,a){return void 0===n.updatedAt||n.updatedAt<=a.updatedAt}}class h extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:a=u.Z}=e;const r=(0,p.Z)({path:t,schema:n,Endpoint:a}),o=r.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await r.partialUpdate.call(this,...t),id:t[0].id}}});return{...r,partialUpdate:o,create:r.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await r.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var k=n(87462),b=n(49544),v=n(86010),E=n(95999),x=n(52263),w=n(72389),N=n(66412),T=n(55423),S=n(84195),D="playgroundContainer_sLUA",Z="row_YGZs",C="hidden_Hh8i",A="playgroundHeader_Zx4K",R="small_xksL",I="clickable_YHiX",L="noupper_WDCF",_="subtabs_XtJb",P="playgroundEditor_lYwu",F="arrow_tivA",B="vertical_OMeC",U="right_vs_C",M="left_iDcB",O="down_oRky",V="playgroundPreview_rk9R",$="playgroundError_sRnA",j="playgroundResult_tefG",q="debugToggle_zlro",z="tabControls_trxh",G="title_poUY",X="tabs_m54V",Y="tab_bTGw",J="selected_QXZk";function H(e){let{fixtures:t}=e;return a.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>a.createElement("div",{key:e.endpoint.key(...e.args)},a.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",a.createElement(W,{fixture:e})))))}var K=(0,a.memo)(H);function W(e){let{fixture:t}=e;return a.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:r}=e;return a.createElement("div",{className:(0,v.Z)(A,n,r?I:null),onClick:r},t)}var ee=n(27093),te=n(26127),ne=n(82038),ae=n(83611),re=n(39714),oe=n(7094),le=n(12466),se=n(91262),ie=n(32041),de=n(97723),ce=n(92949);function ue(e){let{value:t}=e;const n="dark"===(0,ce.I)().colorMode,r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,a.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"})),[n,r]);return a.createElement(de.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:o,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const r="y"===n,o=r?U:M;return a.createElement(a.Fragment,null,a.createElement("div",{className:q,onClick:t},"Store",a.createElement("span",{className:(0,v.Z)(F,o,B)},"\u25b6")),r?a.createElement(ke,null):null)}var ge=(0,a.memo)(he);function ye(){const e=(0,a.useContext)(ie.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return a.createElement(ue,{value:t})}const ke=(0,a.memo)(ye);function be(e){let{groupId:t,defaultOpen:n,row:r,fixtures:o}=e;const{tabGroupChoices:l,setTabGroupChoices:s}=(0,oe.U)(),[i,d]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,le.o5)();if(null!=t){const e=l[t];null!=e&&e!==i&&d(e)}const u=(0,a.useCallback)((e=>{c(e.currentTarget),d((e=>"y"===e?"n":"y")),s(t,"y"===i?"n":"y")}),[c,t,i,s]),p=(0,a.useMemo)((()=>[new ae.Z,new ee.Z(te.Z)]),[]),m=!("n"===i||!r);return a.createElement(ne.nq,{managers:p},a.createElement(re.Z,{fixtures:o,silenceMissing:!0},a.createElement("div",{className:(0,v.Z)(V,{[C]:m})},a.createElement(se.Z,{fallback:a.createElement(Ee,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(Ee,null)},a.createElement(b.i5,null),a.createElement(b.IF,{className:$}))))),a.createElement(ge,{selectedValue:i,toggle:u})))}var ve=(0,a.memo)(be);function Ee(){return a.createElement("div",null,"Loading...")}function xe(e){let{groupId:t,defaultOpen:n,row:r,fixtures:o}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(Q,null,a.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),a.createElement("div",{className:j},a.createElement(ve,{groupId:t,defaultOpen:n,row:r,fixtures:o})))}var we=(0,a.memo)(xe);function Ne(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(S.Z);return a.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:o}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,v.Z)(Y,{[J]:e===r}),onFocus:t,onClick:t,value:r},o)})))}function Te(e){let{children:t}=e;return a.createElement(Q,{className:z},a.createElement("div",{className:G},t),a.createElement(Ne,null))}function Se(e){let{title:t,fixtures:n}=e;const{values:r}=(0,a.useContext)(S.Z),o=r.length>0;return a.createElement(a.Fragment,null,n.length?a.createElement(a.Fragment,null,a.createElement(Q,{className:R},"Fixtures"),a.createElement(K,{fixtures:n})):null,o?a.createElement(Te,null,t):null)}function De(e){let{children:t,transformCode:n,groupId:r,defaultOpen:o,row:l,hidden:s,fixtures:i,...d}=e;const{liveCodeBlock:{playgroundPosition:c}}=(0,x.Z)().siteConfig.themeConfig,u=(0,N.p)(),p=(0,w.Z)(),m=(0,a.useMemo)((()=>n||(e=>function(e){return(0,T.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES2017,jsx:T.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,a.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:a=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:a}}))),[t]),[h,g]=(0,a.useReducer)(Ce,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,a.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[E,S]=(0,a.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return a.createElement("div",{className:(0,v.Z)(D,{[Z]:l,[C]:s})},a.createElement(b.nu,(0,k.Z)({theme:u},d),a.createElement(Ze,{reverse:"top"===c},a.createElement("div",null,a.createElement(Se,{fixtures:!l&&i}),l&&f.length>1?a.createElement(Ie,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>S((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return a.createElement(a.Fragment,{key:t},!l&&n?a.createElement(Re,{onClick:()=>S((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:a.createElement(Ae,{key:`${p}-${t}`,className:P,onChange:y[t],code:h[t]}))}))),a.createElement(b.nu,(0,k.Z)({code:h.join("\n"),transformCode:m},d),a.createElement(we,{groupId:r,defaultOpen:o,row:l,fixtures:i})))))}function Ze(e){let{children:t,reverse:n}=e;const a=[...t];return a.reverse(),n?a:t}function Ce(e,t){const n=[...e];return n[t.i]=t.code,n}Se.defaultProps={title:a.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},De.defaultProps={row:!1,hidden:!1},Ze.defaultProps={reverse:!1};const Ae=(0,a.memo)(b.uz);function Re(e){let{onClick:t,closed:n,title:r}=e;return a.createElement(Q,{className:R,onClick:t},a.createElement("span",{className:(0,v.Z)(F,n?U:O)},"\u25b6"),r)}function Ie(e){let{titles:t,closedList:n,onClick:r}=e;const{values:o}=(0,a.useContext)(S.Z),l=o.length>0;return a.createElement(Q,{className:(0,v.Z)({[R]:l,[_]:l},L,z)},a.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>a.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,v.Z)(Y,{[J]:!n[t]})},e)))))}var Le=n(64146),_e=n(82026);class Pe extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Pe.schema={updatedAt:Date};const Fe=new r.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Pe});const Be={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Ue={...o,...s,...d,...i,randomFloatInRange:function(e,t,n){const a=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(a)},mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:c.Z,lastUpdated:Fe,TimedEntity:Pe,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:o}=(0,Le.Z)();return a.createElement(_e.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:$},t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{o(),r((e=>e+1))}},"Clear Error"))}},t)}},Me={...Ue,Todo:f,TodoResource:Be,TodoEndpoint:h},Oe=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:o,row:l=!1,fixtures:s}=e;return a.createElement(De,{scope:Array.isArray(t)?Ue:Me,noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:r,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};Oe.defaultProps={defaultOpen:"n",fixtures:[]};var Ve=(0,a.memo)(Oe)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(65488),r=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},56922:(e,t,n)=>{"use strict";var a=n(67294),r=n(72887);const o={React:a,...a,...r};t.Z=o},93040:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162),s=n(70523),i=n(54514),d=n(56686);const c={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},u=void 0,p={unversionedId:"getting-started/data-dependency",id:"version-6.3/getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useSuspense()",source:"@site/versioned_docs/version-6.3/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/6.3/getting-started/data-dependency",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/docs/6.3/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/6.3/getting-started/entity"}},m={},f=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",level:2},{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Live Crypto Price Example",id:"live-crypto-price-example",level:3}],h={toc:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nin components where we display/use their data directly."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useSuspense(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useSuspense(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/Endpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)(d.ZP,{mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,r.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,r.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,r.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,r.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,r.kt)(s.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data.")),(0,r.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,r.kt)("h3",{id:"stateful"},"Stateful"),(0,r.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/useDLE"},"useDLE()")," is provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDLE } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useDLE(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"When data is likely to change due to external factor; ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,r.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useSuspense(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,"Subscriptions are orchestrated by ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.3/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,r.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,r.kt)(i.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<[{ currency: string }]>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useSuspense(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}g.isMDXComponent=!0},56686:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(75690);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}s.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);