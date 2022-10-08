(self.webpackChunk=self.webpackChunk||[]).push([[21323],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>He});var r=n(67294),i=n(4391),a=n(12171),o=n(56265),s=n(78357),l=n(56855),c=n(62451),d=n(70794),u=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const i=(0,p.Z)({path:t,schema:n,Endpoint:r}),a=i.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.partialUpdate.call(this,...t),id:t[0].id}}});return{...i,partialUpdate:a,create:i.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var b=n(87462),k=n(49544),v=n(86010),w=n(95999),E=n(52263),x=n(72389),C=n(66412),N=n(55423),O=n(84195),A="playgroundContainer_sLUA",T="row_YGZs",R="hidden_Hh8i",S="playgroundHeader_Zx4K",P="small_xksL",I="clickable_YHiX",Z="noupper_WDCF",D="subtabs_XtJb",j="playgroundEditor_lYwu",M="arrow_tivA",U="vertical_OMeC",_="right_vs_C",F="left_iDcB",L="down_oRky",H="playgroundPreview_rk9R",B="playgroundError_sRnA",q="playgroundResult_tefG",z="debugToggle_zlro",$="tabControls_trxh",G="title_poUY",V="tabs_m54V",W="tab_bTGw",X="selected_QXZk";function J(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(K,{fixture:e})))))}var Y=(0,r.memo)(J);function K(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,v.Z)(S,n,i?I:null),onClick:i},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ie=n(39714),ae=n(7094),oe=n(12466),se=n(91262),le=n(32041),ce=n(97723),de=n(92949);function ue(e){let{value:t}=e;const n="dark"===(0,de.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:he,theme:a,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function he(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function fe(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,a=i?_:F;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store",r.createElement("span",{className:(0,v.Z)(M,a,U)},"\u25b6")),i?r.createElement(be,null):null)}var ge=(0,r.memo)(fe);function ye(){const e=(0,r.useContext)(le.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(ue,{value:t})}const be=(0,r.memo)(ye);function ke(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;const{tabGroupChoices:o,setTabGroupChoices:s}=(0,ae.U)(),[l,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,oe.o5)();if(null!=t){const e=o[t];null!=e&&e!==l&&c(e)}const u=(0,r.useCallback)((e=>{d(e.currentTarget),c((e=>"y"===e?"n":"y")),s(t,"y"===l?"n":"y")}),[d,t,l,s]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===l||!i);return r.createElement(ne.nq,{managers:p},r.createElement(ie.Z,{fixtures:a,silenceMissing:!0},r.createElement("div",{className:(0,v.Z)(H,{[R]:m})},r.createElement(se.Z,{fallback:r.createElement(we,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(we,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:B}))))),r.createElement(ge,{selectedValue:l,toggle:u})))}var ve=(0,r.memo)(ke);function we(){return r.createElement("div",null,"Loading...")}function Ee(e){let{groupId:t,defaultOpen:n,row:i,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:q},r.createElement(ve,{groupId:t,defaultOpen:n,row:i,fixtures:a})))}var xe=(0,r.memo)(Ee);function Ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(O.Z);return r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,v.Z)(W,{[X]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function Ne(e){let{children:t}=e;return r.createElement(Q,{className:$},r.createElement("div",{className:G},t),r.createElement(Ce,null))}function Oe(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(O.Z),a=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:P},"Fixtures"),r.createElement(Y,{fixtures:n})):null,a?r.createElement(Ne,null,t):null)}function Ae(e){let{children:t,transformCode:n,groupId:i,defaultOpen:a,row:o,hidden:s,fixtures:l,...c}=e;const{liveCodeBlock:{playgroundPosition:d}}=(0,E.Z)().siteConfig.themeConfig,u=(0,C.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,N.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:N.ModuleKind.ESNext,target:N.ScriptTarget.ES2017,jsx:N.JsxEmit.React}}).outputText}(`${e};`))),[n]),h=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[f,g]=(0,r.useReducer)(Re,void 0,(()=>h.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>h.map(((e,t)=>e=>g({i:t,code:e})))),[h.length]),[w,O]=(0,r.useState)((()=>h.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,v.Z)(A,{[T]:o,[R]:s})},r.createElement(k.nu,(0,b.Z)({theme:u},c),r.createElement(Te,{reverse:"top"===d},r.createElement("div",null,r.createElement(Oe,{fixtures:!o&&l}),o&&h.length>1?r.createElement(Ie,{titles:h.map((e=>{let{title:t}=e;return t})),closedList:w,onClick:e=>O((t=>t.map(((t,n)=>n!==e))))}):null,h.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(Pe,{onClick:()=>O((e=>{const n=[...e];return n[t]=!n[t],n})),closed:w[t],title:n}):null,w[t]?null:r.createElement(Se,{key:`${p}-${t}`,className:j,onChange:y[t],code:f[t]}))}))),r.createElement(k.nu,(0,b.Z)({code:f.join("\n"),transformCode:m},c),r.createElement(xe,{groupId:i,defaultOpen:a,row:o,fixtures:l})))))}function Te(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Re(e,t){const n=[...e];return n[t.i]=t.code,n}Oe.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Ae.defaultProps={row:!1,hidden:!1},Te.defaultProps={reverse:!1};const Se=(0,r.memo)(k.uz);function Pe(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(Q,{className:P,onClick:t},r.createElement("span",{className:(0,v.Z)(M,n?_:L)},"\u25b6"),i)}function Ie(e){let{titles:t,closedList:n,onClick:i}=e;const{values:a}=(0,r.useContext)(O.Z),o=a.length>0;return r.createElement(Q,{className:(0,v.Z)({[P]:o,[D]:o},Z,$)},r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,v.Z)(W,{[X]:!n[t]})},e)))))}var Ze=n(64146),De=n(82026);class je extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}je.schema={updatedAt:Date};const Me=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:je});const Ue={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},_e={...a,...s,...c,...l,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d.Z,lastUpdated:Me,TimedEntity:je,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:a}=(0,Ze.Z)();return r.createElement(De.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:B},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),i((e=>e+1))}},"Clear Error"))}},t)}},Fe={..._e,Todo:h,TodoResource:Ue,TodoEndpoint:f},Le=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a,row:o=!1,fixtures:s}=e;return r.createElement(Ae,{scope:Array.isArray(t)?_e:Fe,noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:i,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};Le.defaultProps={defaultOpen:"n",fixtures:[]};var He=(0,r.memo)(Le)},58855:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(54514);const o={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"version-6.2/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/versioned_docs/version-6.2/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/6.2/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Immediate Mutation Updates",permalink:"/docs/6.2/guides/immediate-updates"},next:{title:"Aborting Fetch",permalink:"/docs/6.2/guides/abort"}},c={},d=[{value:"Partial updates",id:"partial-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets",level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",level:3},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets-1",level:3},{value:"CreateArticle.tsx",id:"createarticletsx",level:3},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, SchemaDetail, AbstractInstanceType } from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      getOptimisticResponse: (snap, params, body) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <button\n      onClick={() =>\n        fetch(ArticleResource.partialUpdate(), { id }, { published: true })\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MutateEndpoint, AbstractInstanceType } from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.create().extend({\n      getOptimisticResponse: (snap, params, body) => body,\n    });\n  }\n}\n\nexport const appendUpdater = (\n  newArticleID: string,\n  articleIDs: string[] | undefined,\n) => [...(articleIDs || []), newArticleID];\n")),(0,i.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useController } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      fetch(ArticleResource.create(), {}, { id: uuid(), ...data }, [\n        [ArticleResource.list(), {}, appendUpdater],\n      ]),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      getOptimisticResponse: (snap, params, body) => params,\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,i.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,i.kt)("p",null,"Try removing ",(0,i.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,i.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,i.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,i.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,i.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,i.kt)(a.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nconst getCount = new Endpoint(\n  () => fetch('/api/count').then(res => res.json()),\n  {\n    name: 'get',\n    schema: CountEntity,\n  },\n);\nconst increment = new Endpoint(\n  async () => {\n    const body = JSON.stringify({ updatedAt: Date.now() });\n    return await (\n      await fetch('/api/count/increment', {\n        method: 'post',\n        body,\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n  },\n  {\n    name: 'increment',\n    schema: CountEntity,\n    sideEffect: true,\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      // server already has this optimistic computation then do nothing\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n\nfunction CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);