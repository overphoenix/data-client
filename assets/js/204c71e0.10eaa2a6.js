(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[36350],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11923:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(54514);const s={title:"schema.Delete"},o=void 0,i={unversionedId:"api/Delete",id:"version-5.1/api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/rest_versioned_docs/version-5.1/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/rest/5.1/api/Delete",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Delete.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"schema.Delete"},sidebar:"docs",previous:{title:"schema.Values",permalink:"/rest/5.1/api/Values"},next:{title:"validateRequired",permalink:"/rest/5.1/api/validateRequired"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Batch Deletes",id:"batch-deletes",level:3},{value:"Impact on useSuspense()",id:"impact-on-usesuspense",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,a.kt)("p",null,"Describes entities to be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <a\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </a>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,a.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,a.kt)("p",null,"Constructing an article response using the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useSuspense(MyResource.list());\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"impact-on-usesuspense"},"Impact on useSuspense()"),(0,a.kt)("p",null,"When entities are deleted in a result currently being presented in React, useSuspense()\nwill consider them invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,a.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}p.isMDXComponent=!0},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Be});var r=n(67294),a=n(4391),l=n(12171),s=n(56265),o=n(78357),i=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends s.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),E=n(49544),b=n(86010),k=n(95999),x=n(52263),w=n(72389),C=n(66412),D=n(55423),N=n(84195);const O="playgroundContainer_sLUA",T="row_YGZs",Z="hidden_Hh8i",P="playgroundHeader_Zx4K",S="small_xksL",A="clickable_YHiX",I="noupper_WDCF",R="subtabs_XtJb",_="playgroundEditor_lYwu",U="arrow_tivA",M="vertical_OMeC",F="right_vs_C",j="left_iDcB",L="down_oRky",B="playgroundPreview_rk9R",V="playgroundError_sRnA",H="playgroundResult_tefG",q="debugToggle_zlro",z="tabControls_trxh",$="title_poUY",X="tabs_m54V",G="tab_bTGw",J="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(K,{fixture:e})))))}const W=(0,r.memo)(Y);function K(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,b.Z)(P,n,a?A:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),le=n(7094),se=n(12466),oe=n(91262),ie=n(32041),ce=n(97723),ue=n(92949);function de(e){let{value:t}=e;const n="dark"===(0,ue.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:l,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?F:j;return r.createElement(r.Fragment,null,r.createElement("div",{className:q,onClick:t},"Store",r.createElement("span",{className:(0,b.Z)(U,l,M)},"\u25b6")),a?r.createElement(ve,null):null)}const ge=(0,r.memo)(he);function ye(){const e=(0,r.useContext)(ie.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(de,{value:t})}const ve=(0,r.memo)(ye);function Ee(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:s,setTabGroupChoices:o}=(0,le.U)(),[i,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,se.o5)();if(null!=t){const e=s[t];null!=e&&e!==i&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),o(t,"y"===i?"n":"y")}),[u,t,i,o]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===i||!a);return r.createElement(ne.nq,{managers:p},r.createElement(ae.Z,{fixtures:l,silenceMissing:!0},r.createElement("div",{className:(0,b.Z)(B,{[Z]:m})},r.createElement(oe.Z,{fallback:r.createElement(ke,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ke,null)},r.createElement(E.i5,null),r.createElement(E.IF,{className:V}))))),r.createElement(ge,{selectedValue:i,toggle:d})))}const be=(0,r.memo)(Ee);function ke(){return r.createElement("div",null,"Loading...")}function xe(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:H},r.createElement(be,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}const we=(0,r.memo)(xe);function Ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(N.Z);return r.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,b.Z)(G,{[J]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function De(e){let{children:t}=e;return r.createElement(Q,{className:z},r.createElement("div",{className:$},t),r.createElement(Ce,null))}function Ne(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(N.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:S},"Fixtures"),r.createElement(W,{fixtures:n})):null,l?r.createElement(De,null,t):null)}function Oe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:s,hidden:o,fixtures:i,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,x.Z)().siteConfig.themeConfig,d=(0,C.p)(),p=(0,w.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,D.transpileModule)(e,{compilerOptions:{module:D.ModuleKind.ESNext,target:D.ScriptTarget.ES2017,jsx:D.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,g]=(0,r.useReducer)(Ze,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[k,N]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,b.Z)(O,{[T]:s,[Z]:o})},r.createElement(E.nu,(0,v.Z)({theme:d},c),r.createElement(Te,{reverse:"top"===u},r.createElement("div",null,r.createElement(Ne,{fixtures:i}),s&&f.length>1?r.createElement(Ae,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>N((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!s&&n?r.createElement(Se,{onClick:()=>N((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,k[t]?null:r.createElement(Pe,{key:`${p}-${t}`,className:_,onChange:y[t],code:h[t]}))}))),r.createElement(E.nu,(0,v.Z)({code:h.join("\n"),transformCode:m},c),r.createElement(we,{groupId:a,defaultOpen:l,row:s,fixtures:i})))))}function Te(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ze(e,t){const n=[...e];return n[t.i]=t.code,n}Ne.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Oe.defaultProps={row:!1,hidden:!1},Te.defaultProps={reverse:!1};const Pe=(0,r.memo)(E.uz);function Se(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(Q,{className:S,onClick:t},r.createElement("span",{className:(0,b.Z)(U,n?F:L)},"\u25b6"),a)}function Ae(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(N.Z),s=l.length>0;return r.createElement(Q,{className:(0,b.Z)({[S]:s,[R]:s},I,z)},r.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,b.Z)(G,{[J]:!n[t]})},e)))))}var Ie=n(64146),Re=n(82026);class _e extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}_e.schema={updatedAt:Date};const Ue=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:_e});const Me={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Fe={...l,...o,...c,...i,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:Ue,TimedEntity:_e,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,Ie.Z)();return r.createElement(Re.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:V},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},je={...Fe,Todo:f,TodoResource:Me,TodoEndpoint:h},Le=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:s,row:o=!1,fixtures:i}=e;return r.createElement(Oe,{scope:n||Array.isArray(t)?Fe:je,noInline:!0,groupId:a,defaultOpen:s,row:o,hidden:l,fixtures:i},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};Le.defaultProps={defaultOpen:"n",fixtures:[]};const Be=(0,r.memo)(Le)},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);