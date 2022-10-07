/*! For license information please see 07fc686c.3fcdf7ce.js.LICENSE.txt */
(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[49661],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,h(k,y.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},l=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:l,ref:i,props:a,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,o,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===a?"."+N(s,0):a,E(l)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),A(l,t,o,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+e)),t.push(l)),1;if(s=0,a=""===a?".":a+":",E(e))for(var c=0;c<e.length;c++){var u=a+N(i=e[c],c);s+=A(i,t,o,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)s+=A(i=i.value,t,o,u=a+N(i,c++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},P={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90906:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(27378),n(3905)),a=n(54514);const l={title:"Aborting Fetch"},i=void 0,s={unversionedId:"guides/abort",id:"guides/abort",title:"Aborting Fetch",description:"AbortController provides a new way of cancelling",source:"@site/../docs/rest/guides/abort.md",sourceDirName:"guides",slug:"/guides/abort",permalink:"/rest/guides/abort",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/abort.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664852031,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Aborting Fetch"},sidebar:"docs",previous:{title:"Mocking unfinished endpoints",permalink:"/rest/guides/mocking-unfinished"},next:{title:"Nesting related data",permalink:"/rest/guides/nested-response"}},c={},u=[{value:"Cancelling on params change",id:"cancelling-on-params-change",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController")," provides a new way of cancelling\nfetches that are no longer considered relevant. This can be hooked into fetch via the second ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestInit")," parameter."),(0,o.kt)("h2",{id:"cancelling-on-params-change"},"Cancelling on params change"),(0,o.kt)("p",null,"Sometimes a user has the opportunity to fill out a field that is used to affect the results of a network call.\nIf this is a text input, they could potentially type quite quickly, thus creating a lot of network requests."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/hooks")," package with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/useCancelling"},"useCancelling()")," will automatically cancel in-flight requests if the parameters\nchange before the request is resolved."),(0,o.kt)(a.Z,{mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function AbortDemo() {\n  const [id, setId] = React.useState(1);\n  return (\n    <div>\n      <React.Suspense fallback=\"...\">\n        <TodoDetail id={id} />\n      </React.Suspense>\n      <div>\n        <button onClick={() => setId(id => id - 1)}>-</button>\n        {' '}<button onClick={() => setId(id => id + 1)}>+</button>\n        {' '}&nbsp;{id}\n      </div>\n    </div>\n  );\n}\nfunction TodoDetail({ id }) {\n  const todo = useSuspense(useCancelling(TodoResource.get, { id }), { id });\n  return <div>{todo.title}</div>;\n}\nrender(<AbortDemo />);\n"))),(0,o.kt)("p",null,"Try clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," very quickly. If you increment before it resolves the request will be cancelled and you should\nnot see results in the store."),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be careful when using this with many disjoint components fetching the same\narguments (Endpoint/params pair) to useSuspense(). This solution aborts fetches per-component,\nwhich means you might end up canceling a fetch that another component still cares about.")))}p.isMDXComponent=!0},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>qe});var r=n(67294),o=n(4391),a=n(12171),l=n(56265),i=n(78357),s=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends l.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const o=(0,p.Z)({path:t,schema:n,Endpoint:r}),a=o.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await o.partialUpdate.call(this,...t),id:t[0].id}}});return{...o,partialUpdate:a,create:o.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await o.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var b=n(87462),v=n(49544),k=n(86010),E=n(95999),w=n(52263),x=n(72389),C=n(66412),S=n(55423),O=n(84195);const _="playgroundContainer_sLUA",N="row_YGZs",A="hidden_Hh8i",T="playgroundHeader_Zx4K",Z="small_xksL",j="clickable_YHiX",P="noupper_WDCF",I="subtabs_XtJb",R="playgroundEditor_lYwu",D="arrow_tivA",U="vertical_OMeC",F="right_vs_C",M="left_iDcB",$="down_oRky",q="playgroundPreview_rk9R",L="playgroundError_sRnA",z="playgroundResult_tefG",B="debugToggle_zlro",V="tabControls_trxh",X="title_poUY",G="tabs_m54V",H="tab_bTGw",W="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(K,{fixture:e})))))}const J=(0,r.memo)(Y);function K(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,k.Z)(T,n,o?j:null),onClick:o},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),oe=n(39714),ae=n(7094),le=n(12466),ie=n(91262),se=n(32041),ce=n(97723),ue=n(92949);function de(e){let{value:t}=e;const n="dark"===(0,ue.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:a,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?F:M;return r.createElement(r.Fragment,null,r.createElement("div",{className:B,onClick:t},"Store",r.createElement("span",{className:(0,k.Z)(D,a,U)},"\u25b6")),o?r.createElement(be,null):null)}const ge=(0,r.memo)(he);function ye(){const e=(0,r.useContext)(se.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(de,{value:t})}const be=(0,r.memo)(ye);function ve(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;const{tabGroupChoices:l,setTabGroupChoices:i}=(0,ae.U)(),[s,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,le.o5)();if(null!=t){const e=l[t];null!=e&&e!==s&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),i(t,"y"===s?"n":"y")}),[u,t,s,i]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===s||!o);return r.createElement(ne.nq,{managers:p},r.createElement(oe.Z,{fixtures:a,silenceMissing:!0},r.createElement("div",{className:(0,k.Z)(q,{[A]:m})},r.createElement(ie.Z,{fallback:r.createElement(Ee,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(Ee,null)},r.createElement(v.i5,null),r.createElement(v.IF,{className:L}))))),r.createElement(ge,{selectedValue:s,toggle:d})))}const ke=(0,r.memo)(ve);function Ee(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:z},r.createElement(ke,{groupId:t,defaultOpen:n,row:o,fixtures:a})))}const xe=(0,r.memo)(we);function Ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(O.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,k.Z)(H,{[W]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function Se(e){let{children:t}=e;return r.createElement(Q,{className:V},r.createElement("div",{className:X},t),r.createElement(Ce,null))}function Oe(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(O.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:Z},"Fixtures"),r.createElement(J,{fixtures:n})):null,a?r.createElement(Se,null,t):null)}function _e(e){let{children:t,transformCode:n,groupId:o,defaultOpen:a,row:l,hidden:i,fixtures:s,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,w.Z)().siteConfig.themeConfig,d=(0,C.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,S.transpileModule)(e,{compilerOptions:{module:S.ModuleKind.ESNext,target:S.ScriptTarget.ES2017,jsx:S.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,g]=(0,r.useReducer)(Ae,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[E,O]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,k.Z)(_,{[N]:l,[A]:i})},r.createElement(v.nu,(0,b.Z)({theme:d},c),r.createElement(Ne,{reverse:"top"===u},r.createElement("div",null,r.createElement(Oe,{fixtures:s}),l&&f.length>1?r.createElement(je,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>O((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!l&&n?r.createElement(Ze,{onClick:()=>O((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:r.createElement(Te,{key:`${p}-${t}`,className:R,onChange:y[t],code:h[t]}))}))),r.createElement(v.nu,(0,b.Z)({code:h.join("\n"),transformCode:m},c),r.createElement(xe,{groupId:o,defaultOpen:a,row:l,fixtures:s})))))}function Ne(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ae(e,t){const n=[...e];return n[t.i]=t.code,n}Oe.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},_e.defaultProps={row:!1,hidden:!1},Ne.defaultProps={reverse:!1};const Te=(0,r.memo)(v.uz);function Ze(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(Q,{className:Z,onClick:t},r.createElement("span",{className:(0,k.Z)(D,n?F:$)},"\u25b6"),o)}function je(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(O.Z),l=a.length>0;return r.createElement(Q,{className:(0,k.Z)({[Z]:l,[I]:l},P,V)},r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,k.Z)(H,{[W]:!n[t]})},e)))))}var Pe=n(64146),Ie=n(82026);class Re extends l.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Re.schema={updatedAt:Date};const De=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Re});const Ue={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Fe={...a,...i,...c,...s,mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:De,TimedEntity:Re,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,o]=r.useState(0),{resetEntireStore:a}=(0,Pe.Z)();return r.createElement(Ie.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:L},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),o((e=>e+1))}},"Clear Error"))}},t)}},Me={...Fe,Todo:f,TodoResource:Ue,TodoEndpoint:h},$e=e=>{let{children:t,endpointCode:n,groupId:o,hidden:a=!1,defaultOpen:l,row:i=!1,fixtures:s}=e;return r.createElement(_e,{scope:n||Array.isArray(t)?Fe:Me,noInline:!0,groupId:o,defaultOpen:l,row:i,hidden:a,fixtures:s},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};$e.defaultProps={defaultOpen:"n",fixtures:[]};const qe=(0,r.memo)($e)},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);