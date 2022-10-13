/*! For license information please see ec26b5c7.d9147d2d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34973],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var E=v.prototype=new b;E.constructor=v,y(E,h.prototype),E.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,Z={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var l,a={},o=null,s=null;if(null!=t)for(l in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,l)&&!x.hasOwnProperty(l)&&(a[l]=t[l]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(l in i=e.defaultProps)void 0===a[l]&&(a[l]=i[l]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:Z.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,l,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return o=o(i=e),e=""===a?"."+S(i,0):a,k(o)?(l="",null!=e&&(l=e.replace(O,"$&/")+"/"),N(o,t,l,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,l+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(i=0,a=""===a?".":a+":",k(e))for(var c=0;c<e.length;c++){var u=a+S(s=e[c],c);i+=N(s,t,l,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=N(s=s.value,t,l,u=a+S(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function D(e,t,n){if(null==e)return e;var r=[],l=0;return N(e,r,"","",(function(e){return t.call(n,e,l++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},T={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(27378),n(3905)),a=n(107);const o={title:"schema.Delete"},s=void 0,i={unversionedId:"api/Delete",id:"api/Delete",title:"schema.Delete",description:"schema.Delete - Invalidating Entities | Rest Hooks",source:"@site/../docs/graphql/api/Delete.md",sourceDirName:"api",slug:"/api/Delete",permalink:"/graphql/api/Delete",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/api/Delete.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"schema.Delete"},sidebar:"docs",previous:{title:"schema.Values",permalink:"/graphql/api/Values"},next:{title:"validateRequired",permalink:"/graphql/api/validateRequired"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Batch Deletes",id:"batch-deletes",level:3},{value:"Impact on useSuspense()",id:"impact-on-usesuspense",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"schema.Delete - Invalidating Entities | Rest Hooks")),(0,l.kt)("p",null,"Describes entities to be marked as ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETED"),". This is a special symbol."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"entity")," which entity to delete. The input is used to compute the pk() for lookup.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(a.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: '123', name: 'Jim' },\n    { id: '456', name: 'Jane' },\n    { id: '555', name: 'Phone' },\n  ]);\nconst sampleDelete = ({ id }) => Promise.resolve({ id });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema: [User],\n});\nconst userDelete = new Endpoint(sampleDelete, {\n  schema: new schema.Delete(User),\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  const { fetch } = useController();\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>\n          {user.name}{' '}\n          <span\n            style={{ cursor: 'pointer' }}\n            onClick={() => fetch(userDelete, { id: user.id })}\n          >\n            \u274c\n          </span>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,l.kt)("h3",{id:"batch-deletes"},"Batch Deletes"),(0,l.kt)("p",null,"Here we add another endpoint for deleting many entities at a time. Here we\npass in a list of ids, and the response is an empty string."),(0,l.kt)("p",null,"Constructing an article response using the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," argument in fetch empowers\nthe normalized cache to know which entities to delete when the request is success,\nor if optimistic updates are used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, schema } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static deleteList<T extends typeof MyResource>(this: T) {\n    const init = this.getFetchInit({ method: 'DELETE' });\n    return new Endpoint(\n      (params: readonly string[]) =>\n        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),\n      {\n        ...this.getEndpointExtra(),\n        schema: [new schemas.Delete(this)],\n      },\n    );\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyTable() {\n  const { selectedIds } = useFields(TableForm);\n  const list = useSuspense(MyResource.list());\n  const { fetch } = useController();\n\n  return (\n    <div>\n      <header>\n        <span>My Table</span>\n        <button onClick={() => fetch(MyResource.deleteList(), selectedIds)}>\n          Delete\n        </button>\n      </header>\n      <TableBody data={list} form={TableForm} />\n    </div>\n  );\n}\n")),(0,l.kt)("h3",{id:"impact-on-usesuspense"},"Impact on useSuspense()"),(0,l.kt)("p",null,"When entities are deleted in a result currently being presented in React, useSuspense()\nwill consider them invalid"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For optional Entities, they are simply removed"),(0,l.kt)("li",{parentName:"ul"},"For required Entities, this invalidates the entire response re-triggering suspense.")))}p.isMDXComponent=!0},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(67294),l=n(87462),a=n(49544),o=n(86010),s=n(95999),i=n(52263),c=n(72389),u=n(66412),d=n(91262),p=n(84195),m=n(45440);function f(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(g,{fixture:e})))))}var y=(0,r.memo)(f);function g(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var h=n(60975),b=n(51523);const v=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function E(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(p.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:l,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===l?0:-1,"aria-selected":e===l,key:l,className:(0,o.Z)(m.Z.tab,{[m.Z.selected]:e===l}),onFocus:t,onClick:t,value:l},a)})))}function k(e){let{children:t}=e;return r.createElement(h.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(E,null))}function w(e){let{title:t,fixtures:n}=e;const{values:l}=(0,r.useContext)(p.Z),a=l.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:m.Z.small},"Fixtures"),r.createElement(y,{fixtures:n})):null,a?r.createElement(k,null,t):null)}function Z(e){let{children:t,transformCode:n,groupId:s,defaultOpen:p,row:f,hidden:y,fixtures:g,includeEndpoints:h,...E}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,i.Z)().siteConfig.themeConfig,Z=(0,u.p)(),N=(0,c.Z)(),D=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[P,j]=(0,r.useReducer)(C,void 0,(()=>D.map((e=>{let{code:t}=e;return t})))),T=(0,r.useMemo)((()=>D.map(((e,t)=>e=>j({i:t,code:e})))),[D.length]),[I,R]=(0,r.useState)((()=>D.map((e=>{let{collapsed:t}=e;return t})))),F=P.join("\n");return r.createElement("div",{className:(0,o.Z)(m.Z.playgroundContainer,{[m.Z.row]:f,[m.Z.hidden]:y})},r.createElement(a.nu,(0,l.Z)({theme:Z},E),r.createElement(x,{reverse:"top"===k},r.createElement("div",null,r.createElement(w,{fixtures:!f&&g}),f&&D.length>1?r.createElement(S,{titles:D.map((e=>{let{title:t}=e;return t})),closedList:I,onClick:e=>R((t=>t.map(((t,n)=>n!==e))))}):null,D.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!f&&n?r.createElement(O,{onClick:()=>R((e=>{const n=[...e];return n[t]=!n[t],n})),closed:I[t],title:n}):null,I[t]?null:r.createElement(_,{key:`${N}-${t}`,className:m.Z.playgroundEditor,onChange:T[t],code:P[t]}))}))),r.createElement(d.Z,{fallback:r.createElement(a.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(b.Z,{includeEndpoints:h,groupId:s,defaultOpen:p,row:f,fixtures:g}))},(()=>r.createElement(r.Suspense,{fallback:r.createElement(a.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(b.Z,{includeEndpoints:h,groupId:s,defaultOpen:p,row:f,fixtures:g}))},r.createElement(v,{code:F,includeEndpoints:h,groupId:s,defaultOpen:p,row:f,fixtures:g})))))))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function C(e,t){const n=[...e];return n[t.i]=t.code,n}w.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},Z.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const _=(0,r.memo)(a.uz);function O(e){let{onClick:t,closed:n,title:l}=e;return r.createElement(h.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),l)}function S(e){let{titles:t,closedList:n,onClick:l}=e;const{values:a}=(0,r.useContext)(p.Z),s=a.length>0;return r.createElement(h.Z,{className:(0,o.Z)({[m.Z.small]:s,[m.Z.subtabs]:s},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>l(t),className:(0,o.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}const N=e=>{let{children:t,groupId:n,hidden:l=!1,defaultOpen:a,row:o=!1,fixtures:s}=e;return r.createElement(Z,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:l,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};N.defaultProps={defaultOpen:"n",fixtures:[]};var D=(0,r.memo)(N)},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,l.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),l=n(95999),a=n(27093),o=n(26127),s=n(82038),i=n(83611),c=n(39714),u=n(49544),d=n(86010),p=n(7094),m=n(12466),f=n(91262),y=n(45440),g=n(32041),h=n(97723),b=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,b.I)().colorMode,l=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:l[t]}}},base0B:"rgb(191, 199, 213)"})),[n,l]);return r.createElement(h.L,{shouldExpandNode:E,data:t,valueRenderer:w,theme:a,hideRoot:!0})}function E(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function w(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function Z(e){let{toggle:t,selectedValue:n}=e;const l="y"===n,a=l?y.Z.right:y.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:y.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(y.Z.arrow,a,y.Z.vertical)},"\u25b6")),l?r.createElement(_,null):null)}var x=(0,r.memo)(Z);function C(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const _=(0,r.memo)(C);function O(e){let{groupId:t,defaultOpen:n,row:l,fixtures:g}=e;const{tabGroupChoices:h,setTabGroupChoices:b}=(0,p.U)(),[v,E]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,m.o5)();if(null!=t){const e=h[t];null!=e&&e!==v&&E(e)}const w=(0,r.useCallback)((e=>{k(e.currentTarget),E((e=>"y"===e?"n":"y")),b(t,"y"===v?"n":"y")}),[k,t,v,b]),Z=(0,r.useMemo)((()=>[new i.Z,new a.Z(o.Z)]),[]),C=!("n"===v||!l);return r.createElement(s.nq,{managers:Z},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(y.Z.playgroundPreview,{[y.Z.hidden]:C})},r.createElement(f.Z,{fallback:r.createElement(N,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(N,null)},r.createElement(u.i5,null),r.createElement(u.IF,{className:y.Z.playgroundError}))))),r.createElement(x,{selectedValue:v,toggle:w})))}var S=(0,r.memo)(O);function N(){return r.createElement("div",null,"Loading...")}var D=n(60975);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(D.Z,null,r.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:y.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var j=(0,r.memo)(P)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);