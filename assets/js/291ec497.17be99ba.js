/*! For license information please see 291ec497.17be99ba.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85281],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var k=g.prototype=new b;k.constructor=g,y(k,v.prototype),k.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var a,l={},o=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)E.call(t,a)&&!x.hasOwnProperty(a)&&(l[a]=t[a]);var i=arguments.length-2;if(1===i)l.children=n;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];l.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===l[a]&&(l[a]=i[a]);return{$$typeof:r,type:e,key:o,ref:s,props:l,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,l,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return o=o(i=e),e=""===l?"."+_(i,0):l,S(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(i=0,l=""===l?".":l+":",S(e))for(var u=0;u<e.length;u++){var p=l+_(s=e[u],u);i+=T(s,t,a,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)i+=T(s=s.value,t,a,p=l+_(s,u++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function I(e,t,r){if(null==e)return e;var n=[],a=0;return T(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},Z={transition:null}},27378:(e,t,r)=>{r(41535)},30433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),l=r(86010),o=r(5730),s=r(20636),i=r(76602),u=r(63735),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:f,groupId:m,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=f??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:S}=(0,i.U)(),[E,w]=(0,a.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&v.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=x.indexOf(t),n=v[r].value;n!==E&&(j(t),w(n),null!=m&&S(m,String(n)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},y)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function f(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},88705:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(65559),a=r(30433),l=r(67294);function o(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(a.Z,{value:"simple"},t[0]),l.createElement(a.Z,{value:"generics"},t[1]))}},47885:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(65559),a=r(30433),l=r(67294);function o(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},57489:(e,t,r)=>{var n=r(67294),a=r(72887);const l={React:n,...n,...a};t.Z=l},89718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(27378),r(3905)),l=(r(47885),r(65559),r(30433),r(13743)),o=r(88705);const s={title:"Snapshot"},i=void 0,u={unversionedId:"api/Snapshot",id:"api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/../docs/core/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/api/Snapshot",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/api/useSuspense"}},p={},c=[{value:"getResponse(endpoint, ...args)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"getError(endpoint, ...args)",id:"getError",level:2},{value:"fetchedAt",id:"fetchedat",level:2}],d={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,a.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import type { DenormalizeNullable } from './normal.js';\nimport type { EndpointInterface } from './interface.js';\nimport type { ErrorTypes } from './ErrorTypes.js';\n\nexport interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n\n// looser version to allow for cross-package version compatibility\nexport type ExpiryStatusInterface = 1 | 2 | 3;\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot")),(0,a.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,a.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,a.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,a.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,a.kt)("h4",{id:"valid"},"Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will never suspend."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalid"},"Invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will always suspend"),(0,a.kt)("li",{parentName:"ul"},"Will always fetch")),(0,a.kt)("h3",{id:"expiresat"},"expiresAt"),(0,a.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,a.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,a.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,a.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,a.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);