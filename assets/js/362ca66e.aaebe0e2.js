/*! For license information please see 362ca66e.aaebe0e2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50110],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=v.prototype=new b;k.constructor=v,g(k,h.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,Z={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,a={},l=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,o)&&!x.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:l,ref:i,props:a,_owner:Z.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===a?"."+S(s,0):a,E(l)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),R(l,t,o,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+e)),t.push(l)),1;if(s=0,a=""===a?".":a+":",E(e))for(var c=0;c<e.length;c++){var u=a+S(i=e[c],c);s+=R(i,t,o,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)s+=R(i=i.value,t,o,u=a+S(i,c++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},I={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(27378),n(3905)),a=n(107);const l={title:"Mocking unfinished endpoints"},i=void 0,s={unversionedId:"guides/mocking-unfinished",id:"guides/mocking-unfinished",title:"Mocking unfinished endpoints",description:"You have agreed to an API schema with a backend engineer who will implement it;",source:"@site/../docs/rest/guides/mocking-unfinished.md",sourceDirName:"guides",slug:"/guides/mocking-unfinished",permalink:"/rest/guides/mocking-unfinished",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/mocking-unfinished.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"Mocking unfinished endpoints"},sidebar:"docs",previous:{title:"Transforming data on fetch",permalink:"/rest/guides/network-transform"},next:{title:"Aborting Fetch",permalink:"/rest/guides/abort"}},c={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have agreed to an API schema with a backend engineer who will implement it;\nbut they are starting to code the same time as you. It would be nice to easily\nmock the endpoint and use it in a way such that when the endpoint is done\nyou won't need to make major changes to your code."),(0,o.kt)(a.Z,{mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Rating.ts"',title:'"api/Rating.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nclass Rating extends Entity {\n  readonly id: string = '';\n  readonly rating: number = 4.6;\n  readonly author: string = '';\n  readonly date: Date = new Date(0);\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    date: Date,\n  };\n}\n\nconst BaseRatingResource = createResource({\n  path: '/ratings/:id',\n  schema: Rating,\n});\n\nconst RatingResource = {\n  ...BaseRatingResource,\n  getList: BaseRatingResource.getList.extend({\n    dataExpiryLength: 10 * 60 * 1000, // 10 minutes\n    fetch() {\n      return Promise.resolve(\n        ['Morningstar', 'Seekingalpha', 'Morningstar', 'CNBC'].map(author => ({\n          id: `${Math.random()}`,\n          rating: randomFloatInRange(2, 5).toFixed(1),\n          author,\n          date: '1990-01-01T00:00:00Z',\n        })),\n      );\n    },\n  }),\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Demo.tsx" collapsed',title:'"Demo.tsx"',collapsed:!0},"function Demo() {\n  const ratings = useSuspense(RatingResource.getList);\n  return (\n    <div>\n      {ratings.map(rating => (\n        <div>\n          {rating.author}:{' '}\n          {rating.rating}{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              rating.date,\n            )}\n          </time>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<Demo />);\n"))),(0,o.kt)("p",null,"By mocking the\n",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," we can easily fake the data the server will return. Doing\nthis allows free use of the strongly typed RatingResource as normal throughout the codebase."),(0,o.kt)("p",null,"Once the API is implemented you can simply remove the custom fetch (and the entire list()\noverride if that's all it's doing)."),(0,o.kt)("p",null,"In this example we also set the dataExpiryLength to a longer time so the random values generated\npersist longer. This makes for a more realistic demo."))}p.isMDXComponent=!0},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(67294),o=n(87462),a=n(49544),l=n(86010),i=n(95999),s=n(52263),c=n(66412),u=n(84195),d=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(p);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g=n(60975),y=n(51523),h=n(1556);const b=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function k(e){let{children:t}=e;return r.createElement(g.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:d.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,a?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:g,...y}=e;const{liveCodeBlock:{playgroundPosition:h}}=(0,s.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,l.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,o.Z)({theme:b},y),r.createElement(Z,{reverse:"top"===h,row:p,fixtures:f,includeEndpoints:g,groupId:i,defaultOpen:u},t)))}function Z(e){let{reverse:t,children:n,row:o,fixtures:l,includeEndpoints:i,groupId:s,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,p]=(0,r.useReducer)(_,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>u.map(((e,t)=>e=>p({i:t,code:e})))),[u.length]),[f,g]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),v=d.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!o&&l}),o&&u.length>1?r.createElement(R,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(S,{onClick:()=>g((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(C,{key:t,onChange:m[t],code:d[t]}))}))),r.createElement(h.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:i,groupId:s,defaultOpen:c,row:o,fixtures:l}))},r.createElement(b,{code:v,includeEndpoints:i,groupId:s,defaultOpen:c,row:o,fixtures:l})))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function _(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const O=(0,r.memo)(a.uz);function C(e){let{onChange:t,code:n}=e;return r.createElement(O,{className:d.Z.playgroundEditor,onChange:t,code:n})}function S(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(g.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),o)}function R(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(g.Z,{className:(0,l.Z)({[d.Z.small]:i,[d.Z.subtabs]:i},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const P=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:l=!1,fixtures:i}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:l,hidden:o,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};P.defaultProps={defaultOpen:"n",fixtures:[]};var N=(0,r.memo)(P)},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010),a=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,l?a.Z.clickable:null),onClick:l},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),o=n(95999),a=n(27093),l=n(26127),i=n(82038),s=n(83611),c=n(39714),u=n(86010),d=n(7094),p=n(12466),m=n(45440),f=n(32041),g=n(97723),y=n(92949);function h(e){let{value:t}=e;const n="dark"===(0,y.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?r.createElement(x,null):null)}var w=(0,r.memo)(E);function Z(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(h,{value:t})}const x=(0,r.memo)(Z);var _=n(1556);function O(e){let{groupId:t,defaultOpen:n,row:o,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:y}=(0,d.U)(),[h,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==h&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),y(t,"y"===h?"n":"y")}),[v,t,h,y]),E=(0,r.useMemo)((()=>[new s.Z,new a.Z(l.Z)]),[]),Z=!("n"===h||!o);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:Z})},r.createElement(_.Z,{fallback:r.createElement(S,null)},r.createElement(R,null))),r.createElement(w,{selectedValue:h,toggle:k})))}var C=(0,r.memo)(O);function S(){return r.createElement("div",null,"Loading...")}const R=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var P=n(60975);function N(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}var j=(0,r.memo)(N)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);