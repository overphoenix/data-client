/*! For license information please see 5ff8bf5b.6d8ec814.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[99831],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var b=k.prototype=new v;b.constructor=k,h(b,g.prototype),b.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!S.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var d=Array(s),c=0;c<s;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+C(s,0):i,E(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),A(o,t,a,"",(function(e){return e}))):null!=o&&(R(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",E(e))for(var d=0;d<e.length;d++){var c=i+C(l=e[d],d);s+=A(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),d=0;!(l=e.next()).done;)s+=A(l=l.value,t,a,c=i+C(l,d++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],a=0;return A(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$e});var r=n(67294),a=n(4391),i=n(12171),o=n(56265),l=n(78357),s=n(56855),d=n(62451),c=n(70794),u=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const y=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),g={...y,partialUpdate:y.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(y.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:y.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[y.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:y.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),k=n(49544),b=n(86010),E=n(95999),w=n(52263),x=n(72389),S=n(66412),T=n(55423),R=n(84195),N="playgroundContainer_sLUA",C="row_YGZs",A="hidden_Hh8i",O="playgroundHeader_Zx4K",_="small_xksL",P="clickable_YHiX",I="noupper_WDCF",U="subtabs_XtJb",F="playgroundEditor_lYwu",j="arrow_tivA",Z="vertical_OMeC",L="right_vs_C",D="left_iDcB",M="down_oRky",$="playgroundPreview_rk9R",H="playgroundError_sRnA",B="playgroundResult_tefG",K="debugToggle_zlro",G="tabControls_trxh",q="title_poUY",V="tabs_m54V",z="tab_bTGw",X="selected_QXZk";function W(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(J,{fixture:e})))))}var Y=(0,r.memo)(W);function J(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,b.Z)(O,n,a?P:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),ie=n(7094),oe=n(12466),le=n(91262),se=n(32041),de=n(97723),ce=n(92949);function ue(e){let{value:t}=e;const n="dark"===(0,ce.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(de.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:i,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,i=a?L:D;return r.createElement(r.Fragment,null,r.createElement("div",{className:K,onClick:t},"Store",r.createElement("span",{className:(0,b.Z)(j,i,Z)},"\u25b6")),a?r.createElement(ve,null):null)}var ye=(0,r.memo)(he);function ge(){const e=(0,r.useContext)(se.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(ue,{value:t})}const ve=(0,r.memo)(ge);function ke(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;const{tabGroupChoices:o,setTabGroupChoices:l}=(0,ie.U)(),[s,d]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,oe.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&d(e)}const u=(0,r.useCallback)((e=>{c(e.currentTarget),d((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[c,t,s,l]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===s||!a);return r.createElement(ne.nq,{managers:p},r.createElement(ae.Z,{fixtures:i,silenceMissing:!0},r.createElement("div",{className:(0,b.Z)($,{[A]:m})},r.createElement(le.Z,{fallback:r.createElement(Ee,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(Ee,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:H}))))),r.createElement(ye,{selectedValue:s,toggle:u})))}var be=(0,r.memo)(ke);function Ee(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:B},r.createElement(be,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}var xe=(0,r.memo)(we);function Se(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(R.Z);return r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,b.Z)(z,{[X]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function Te(e){let{children:t}=e;return r.createElement(Q,{className:G},r.createElement("div",{className:q},t),r.createElement(Se,null))}function Re(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(R.Z),i=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:_},"Fixtures"),r.createElement(Y,{fixtures:n})):null,i?r.createElement(Te,null,t):null)}function Ne(e){let{children:t,transformCode:n,groupId:a,defaultOpen:i,row:o,hidden:l,fixtures:s,...d}=e;const{liveCodeBlock:{playgroundPosition:c}}=(0,w.Z)().siteConfig.themeConfig,u=(0,S.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,T.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES2017,jsx:T.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,y]=(0,r.useReducer)(Ae,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>f.map(((e,t)=>e=>y({i:t,code:e})))),[f.length]),[E,R]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,b.Z)(N,{[C]:o,[A]:l})},r.createElement(k.nu,(0,v.Z)({theme:u},d),r.createElement(Ce,{reverse:"top"===c},r.createElement("div",null,r.createElement(Re,{fixtures:!o&&s}),o&&f.length>1?r.createElement(Pe,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>R((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(_e,{onClick:()=>R((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:r.createElement(Oe,{key:`${p}-${t}`,className:F,onChange:g[t],code:h[t]}))}))),r.createElement(k.nu,(0,v.Z)({code:h.join("\n"),transformCode:m},d),r.createElement(xe,{groupId:a,defaultOpen:i,row:o,fixtures:s})))))}function Ce(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ae(e,t){const n=[...e];return n[t.i]=t.code,n}Re.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},Ne.defaultProps={row:!1,hidden:!1},Ce.defaultProps={reverse:!1};const Oe=(0,r.memo)(k.uz);function _e(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(Q,{className:_,onClick:t},r.createElement("span",{className:(0,b.Z)(j,n?L:M)},"\u25b6"),a)}function Pe(e){let{titles:t,closedList:n,onClick:a}=e;const{values:i}=(0,r.useContext)(R.Z),o=i.length>0;return r.createElement(Q,{className:(0,b.Z)({[_]:o,[U]:o},I,G)},r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,b.Z)(z,{[X]:!n[t]})},e)))))}var Ie=n(64146),Ue=n(82026);class Fe extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Fe.schema={updatedAt:Date};const je=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Fe});const Ze={...g,getList:g.getList.extend({process:e=>e.slice(0,7)})},Le={...i,...l,...d,...s,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:je,TimedEntity:Fe,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:i}=(0,Ie.Z)();return r.createElement(Ue.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:H},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{i(),a((e=>e+1))}},"Clear Error"))}},t)}},De={...Le,Todo:f,TodoResource:Ze,TodoEndpoint:h},Me=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i,row:o=!1,fixtures:l}=e;return r.createElement(Ne,{scope:Array.isArray(t)?Le:De,noInline:!0,groupId:n,defaultOpen:i,row:o,hidden:a,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};Me.defaultProps={defaultOpen:"n",fixtures:[]};var $e=(0,r.memo)(Me)},58680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),i=n(54514);const o={title:"Expiry Policy",sidebar_label:"Expiry Policy"},l=void 0,s={unversionedId:"getting-started/expiry-policy",id:"getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/../docs/core/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665168155,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/getting-started/entity"},next:{title:"Validation",permalink:"/docs/getting-started/validation"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Endpoint.dataExpiryLength",id:"endpointdataexpirylength",level:3},{value:"Examples",id:"examples",level:2},{value:"Long cache lifetime",id:"long-cache-lifetime",level:3},{value:"Never retry on error",id:"never-retry-on-error",level:3},{value:"Endpoint.invalidIfStale",id:"endpointinvalidifstale",level:3},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3},{value:"Error policy",id:"error-policy",level:2},{value:"Soft",id:"soft",level:3},{value:"Hard",id:"hard",level:3},{value:"Policy for RestEndpoint",id:"policy-for-restendpoint",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"class TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\nconst fetchLastUpdated = ({ id }) =>\n  fetch(`/api/currentTime/${id}`).then(res => res.json());\nconst lastUpdated = new Endpoint(mockLastUpdated, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("h3",{id:"endpointdataexpirylength"},"Endpoint.dataExpiryLength"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TimePage.tsx"',title:'"TimePage.tsx"'},"lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"@rest-hooks/rest")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To apply to all of a ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource's endpoints"),", use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#getEndpointExtra"},"getEndpointExtra")),(0,a.kt)("h3",{id:"long-cache-lifetime"},"Long cache lifetime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LongLivingResource.ts"',title:'"LongLivingResource.ts"'},"import { RestEndpoint, RestGenerics, createResource } from '@rest-hooks/rest';\n\n// We can now use LongLivingEndpoint to create endpoints that will be cached for one hour\nclass LongLivingEndpoint<O extends RestGenerics> extends RestEndpoint<O> {\n  dataExpiryLength = 60 * 60 * 1000; // one hour\n}\n\nconst LongLivingResource = createResource({\n  path: '/:id',\n  Endpoint: LongLivingEndpoint,\n});\n")),(0,a.kt)("h3",{id:"never-retry-on-error"},"Never retry on error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="NoRetryResource.ts"',title:'"NoRetryResource.ts"'},"import { RestEndpoint, RestGenerics, createResource } from '@rest-hooks/rest';\n\n// We can now use NoRetryEndpoint to create endpoints that will be cached for one hour\nclass NoRetryEndpoint<O extends RestGenerics> extends RestEndpoint<O> {\n  errorExpiryLength = Infinity;\n}\n\nconst NoRetryResource = createResource({\n  path: '/:id',\n  Endpoint: NoRetryEndpoint,\n});\n"))),(0,a.kt)("h3",{id:"endpointinvalidifstale"},"Endpoint.invalidIfStale"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#invalidifstale"},"Endpoint.invalidIfStale")," eliminates the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale")," status, making data\nthat expires immediately be considered 'invalid'."),(0,a.kt)("p",null,"This is demonstrated by the component suspending once its data goes stale. If the data is still\nwithin the expiry time it just continues to display it."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TimePage.tsx"',title:'"TimePage.tsx"'},"lastUpdated = lastUpdated.extend({\n  invalidIfStale: true,\n  dataExpiryLength: 5000,\n});\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(lastUpdated, { id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { invalidate } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidate(lastUpdated, { id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(deleteLastUpdated, { id: '1' })}>\n        Delete\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"error-policy"},"Error policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#errorpolicy"},"Endpoint.errorPolicy")," controls cache behavior upon a fetch rejection.\nIt uses the rejection error to determine whether it should be treated as 'soft' or 'hard' error."),(0,a.kt)("h3",{id:"soft"},"Soft"),(0,a.kt)("p",null,"Soft errors will not invalidate a response if it is already available. However, if there is currently\nno data available, it will mark that endpoint as rejected, causing ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," to throw an\nerror. This can be caught with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("h3",{id:"hard"},"Hard"),(0,a.kt)("p",null,"Hard errors always invalidate a response with the rejection - even when data has previously made available."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"let FAKE_ERROR = undefined;\nconst superFetch = lastUpdated;\nmockFetch = (arg, error) =>\n  FAKE_ERROR !== undefined ? Promise.reject(FAKE_ERROR) : superFetch(arg);\n\nlastUpdated = lastUpdated.extend({\n  fetch: mockFetch,\n  errorPolicy: error =>\n    error.status >= 500 ? ('hard' as const) : ('soft' as const),\n});\nfunction createError(status) {\n  const error = new Error('fake error');\n  error.status = status;\n  return error;\n}\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch, invalidate } = useController();\n  React.useEffect(\n    () => () => {\n      FAKE_ERROR = undefined;\n    },\n    [updatedAt],\n  );\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <div>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Hard\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Hard\n        </button>\n      </div>\n    </div>\n  );\n}\n\nrender(\n  <ResetableErrorBoundary>\n    <ShowTime />\n  </ResetableErrorBoundary>,\n);\n"))),(0,a.kt)("h3",{id:"policy-for-restendpoint"},"Policy for RestEndpoint"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),"s indicate a failure of the server, we want to use stale data\nif it exists. On the other hand, something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," indicates 'user error', which\nmeans the error indicates something about application flow - like if a record is deleted, resulting\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),". Keeping the record around would be inaccurate."),(0,a.kt)("p",null,"Since this is the typical behavior for REST APIs, this is the default policy in ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"errorPolicy(error) {\n  return error.status >= 500 ? 'soft' : undefined;\n}\n")))}p.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);