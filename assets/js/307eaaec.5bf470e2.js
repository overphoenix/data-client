(self.webpackChunk=self.webpackChunk||[]).push([[60024],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Me});var r=n(67294),a=n(4391),i=n(12171),o=n(56265),l=n(78357),s=n(56855),d=n(99494),c=n(70794),u=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),v={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var y=n(87462),k=n(49544),E=n(86010),b=n(95999),x=n(52263),w=n(72389),N=n(66412),C=n(55423),T=n(84195),S="playgroundContainer_sLUA",R="row_YGZs",A="hidden_Hh8i",I="playgroundHeader_Zx4K",O="small_xksL",U="clickable_YHiX",P="noupper_WDCF",F="subtabs_XtJb",Z="playgroundEditor_lYwu",D="arrow_tivA",_="vertical_OMeC",L="right_vs_C",j="left_iDcB",H="down_oRky",M="playgroundPreview_rk9R",B="playgroundError_sRnA",K="playgroundResult_tefG",$="debugToggle_zlro",V="tabControls_trxh",z="title_poUY",G="tabs_m54V",X="tab_bTGw",q="selected_QXZk";function W(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(J,{fixture:e})))))}var Y=(0,r.memo)(W);function J(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,E.Z)(I,n,a?U:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),ie=n(7094),oe=n(12466),le=n(91262),se=n(32041),de=n(97723),ce=n(92949);function ue(e){let{value:t}=e;const n="dark"===(0,ce.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(de.L,{shouldExpandNode:pe,data:t,valueRenderer:he,theme:i,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function he(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function fe(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,i=a?L:j;return r.createElement(r.Fragment,null,r.createElement("div",{className:$,onClick:t},"Store",r.createElement("span",{className:(0,E.Z)(D,i,_)},"\u25b6")),a?r.createElement(ye,null):null)}var ge=(0,r.memo)(fe);function ve(){const e=(0,r.useContext)(se.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(ue,{value:t})}const ye=(0,r.memo)(ve);function ke(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,ie.U)(),[s,d]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,oe.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&d(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),d((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===s||!a);return r.createElement(ne.nq,{managers:p},r.createElement(ae.Z,{fixtures:i,silenceMissing:!0},r.createElement("div",{className:(0,E.Z)(M,{[A]:m})},r.createElement(le.Z,{fallback:r.createElement(be,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(be,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:B}))))),r.createElement(ge,{selectedValue:s,toggle:u})))}var Ee=(0,r.memo)(ke);function be(){return r.createElement("div",null,"Loading...")}function xe(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(b.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:K},r.createElement(Ee,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}var we=(0,r.memo)(xe);function Ne(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(T.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,E.Z)(X,{[q]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function Ce(e){let{children:t}=e;return r.createElement(Q,{className:V},r.createElement("div",{className:z},t),r.createElement(Ne,null))}function Te(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(T.Z),i=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:O},"Fixtures"),r.createElement(Y,{fixtures:n})):null,i?r.createElement(Ce,null,t):null)}function Se(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:o,hidden:l,fixtures:s,...d}=e;const{liveCodeBlock:{playgroundPosition:c}}=(0,x.Z)().siteConfig.themeConfig,u=(0,N.p)(),p=(0,w.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,C.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES2017,jsx:C.JsxEmit.React}}).outputText}(`${e};`))),[n]),h=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[f,g]=(0,r.useReducer)(Ae,void 0,(()=>h.map((e=>{let{code:t}=e;return t})))),v=(0,r.useMemo)((()=>h.map(((e,t)=>e=>g({i:t,code:e})))),[h.length]),[b,T]=(0,r.useState)((()=>h.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,E.Z)(S,{[R]:o,[A]:l})},r.createElement(k.nu,(0,y.Z)({theme:u},d),r.createElement(Re,{reverse:"top"===c},r.createElement("div",null,r.createElement(Te,{fixtures:s}),o&&h.length>1?r.createElement(Ue,{titles:h.map((e=>{let{title:t}=e;return t})),closedList:b,onClick:e=>T((t=>t.map(((t,n)=>n!==e))))}):null,h.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!o&&n?r.createElement(Oe,{onClick:()=>T((e=>{const n=[...e];return n[t]=!n[t],n})),closed:b[t],title:n}):null,b[t]?null:r.createElement(Ie,{key:`${p}-${t}`,className:Z,onChange:v[t],code:f[t]}))}))),r.createElement(k.nu,(0,y.Z)({code:f.join("\n"),transformCode:m},d),r.createElement(we,{groupId:a,defaultOpen:i,row:o,fixtures:s})))))}function Re(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ae(e,t){const n=[...e];return n[t.i]=t.code,n}Te.defaultProps={title:r.createElement(b.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Se.defaultProps={row:!1,hidden:!1},Re.defaultProps={reverse:!1};const Ie=(0,r.memo)(k.uz);function Oe(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(Q,{className:O,onClick:t},r.createElement("span",{className:(0,E.Z)(D,n?L:H)},"\u25b6"),a)}function Ue(e){let{titles:t,closedList:n,onClick:a}=e;const{values:i}=(0,r.useContext)(T.Z),o=i.length>0;return r.createElement(Q,{className:(0,E.Z)({[O]:o,[F]:o},P,V)},r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,E.Z)(X,{[q]:!n[t]})},e)))))}var Pe=n(64146),Fe=n(82026);class Ze extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ze.schema={updatedAt:Date};const De=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ze});const _e={...v,getList:v.getList.extend({process:e=>e.slice(0,7)})},Le={...i,...l,...d,...s,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:De,TimedEntity:Ze,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=(0,Pe.Z)();return r.createElement(Fe.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)}},je={...Le,Todo:h,TodoResource:_e,TodoEndpoint:f},He=e=>{let{children:t,endpointCode:n,groupId:a,hidden:i=!1,defaultOpen:o,row:l=!1,fixtures:s}=e;return r.createElement(Se,{scope:n||Array.isArray(t)?Le:je,noInline:!0,groupId:a,defaultOpen:o,row:l,hidden:i,fixtures:s},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};He.defaultProps={defaultOpen:"n",fixtures:[]};var Me=(0,r.memo)(He)},76681:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(54514);const o={title:"Expiry Policy",sidebar_label:"Expiry Policy"},l=void 0,s={unversionedId:"getting-started/expiry-policy",id:"version-6.3/getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/versioned_docs/version-6.3/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/6.3/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/6.3/getting-started/entity"},next:{title:"Validation",permalink:"/docs/6.3/getting-started/validation"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Endpoint.dataExpiryLength",id:"endpointdataexpirylength",level:3},{value:"Examples",id:"examples",level:2},{value:"Long cache lifetime",id:"long-cache-lifetime",level:3},{value:"Never retry on error",id:"never-retry-on-error",level:3},{value:"Endpoint.invalidIfStale",id:"endpointinvalidifstale",level:3},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3},{value:"Error policy",id:"error-policy",level:2},{value:"Soft",id:"soft",level:3},{value:"Hard",id:"hard",level:3},{value:"Policy for Resources",id:"policy-for-resources",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"class TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\nconst fetchLastUpdated = ({ id }) =>\n  fetch(`/api/currentTime/${id}`).then(res => res.json());\nconst lastUpdated = new Endpoint(mockLastUpdated, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("h3",{id:"endpointdataexpirylength"},"Endpoint.dataExpiryLength"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"@rest-hooks/rest")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To apply to all of a ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/resource#detail"},"Resource's endpoints"),", use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/resource#getEndpointExtra"},"getEndpointExtra")),(0,a.kt)("h3",{id:"long-cache-lifetime"},"Long cache lifetime"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LongLivingResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\n// We can now extend LongLivingResource to get a resource that will be cached for one hour\nabstract class LongLivingResource extends Resource {\n  static getEndpointExtra() {\n    return {\n      ...super.getEndpointExtra(),\n      dataExpiryLength: 60 * 60 * 1000, // one hour\n    };\n  }\n}\n")),(0,a.kt)("h3",{id:"never-retry-on-error"},"Never retry on error"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NoRetryResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\n// We can now extend NoRetryResource to get a resource that will never retry on network error\nabstract class NoRetryResource extends Resource {\n  static getEndpointExtra() {\n    return {\n      ...super.getEndpointExtra(),\n      errorExpiryLength: Infinity,\n    };\n  }\n}\n"))),(0,a.kt)("h3",{id:"endpointinvalidifstale"},"Endpoint.invalidIfStale"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#invalidifstale"},"Endpoint.invalidIfStale")," eliminates the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale")," status, making data\nthat expires immediately be considered 'invalid'."),(0,a.kt)("p",null,"This is demonstrated by the component suspending once its data goes stale. If the data is still\nwithin the expiry time it just continues to display it."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({\n  invalidIfStale: true,\n  dataExpiryLength: 5000,\n});\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(lastUpdated, { id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { invalidate } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidate(lastUpdated, { id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(deleteLastUpdated, { id: '1' })}>\n        Delete\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"error-policy"},"Error policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#errorpolicy"},"Endpoint.errorPolicy")," controls cache behavior upon a fetch rejection.\nIt uses the rejection error to determine whether it should be treated as 'soft' or 'hard' error."),(0,a.kt)("h3",{id:"soft"},"Soft"),(0,a.kt)("p",null,"Soft errors will not invalidate a response if it is already available. However, if there is currently\nno data available, it will mark that endpoint as rejected, causing ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense()")," to throw an\nerror. This can be caught with ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("h3",{id:"hard"},"Hard"),(0,a.kt)("p",null,"Hard errors always invalidate a response with the rejection - even when data has previously made available."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let FAKE_ERROR = undefined;\nconst superFetch = lastUpdated;\nconst mockFetch = (arg, error) =>\n  FAKE_ERROR !== undefined ? Promise.reject(FAKE_ERROR) : superFetch(arg);\n\nconst lastUpdated = lastUpdated.extend({\n  fetch: mockFetch,\n  errorPolicy: error =>\n    error.status >= 500 ? ('hard' as const) : ('soft' as const),\n});\nfunction createError(status) {\n  const error = new Error('fake error');\n  error.status = status;\n  return error;\n}\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch, invalidate } = useController();\n  React.useEffect(\n    () => () => {\n      FAKE_ERROR = undefined;\n    },\n    [updatedAt],\n  );\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <div>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Hard\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Hard\n        </button>\n      </div>\n    </div>\n  );\n}\n\nrender(\n  <ResetableErrorBoundary>\n    <ShowTime />\n  </ResetableErrorBoundary>,\n);\n"))),(0,a.kt)("h3",{id:"policy-for-resources"},"Policy for Resources"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),"s indicate a failure of the server, we want to use stale data\nif it exists. On the other hand, something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," indicates 'user error', which\nmeans the error indicates something about application flow - like if a record is deleted, resulting\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),". Keeping the record around would be inaccurate."),(0,a.kt)("p",null,"Since this is the typical behavior for REST APIs, this is the default policy in ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /** Get the request options for this SimpleResource */\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);