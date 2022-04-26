/*! For license information please see 0ded2a28.6fcb66bd.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[98722],{41535:(e,t)=>{var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function y(e,t,a){this.props=e,this.context=t,this.refs=v,this.updater=a||m}function b(){}function k(e,t,a){this.props=e,this.context=t,this.refs=v,this.updater=a||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=k.prototype=new b;g.constructor=k,h(g,y.prototype),g.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,x={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,l={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,r)&&!w.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(1===i)l.children=n;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];l.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===l[r]&&(l[r]=i[r]);return{$$typeof:a,type:e,key:s,ref:o,props:l,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,r,l,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case n:i=!0}}if(i)return s=s(i=e),e=""===l?"."+I(i,0):l,S(s)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),j(s,t,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+e)),t.push(s)),1;if(i=0,l=""===l?".":l+":",S(e))for(var u=0;u<e.length;u++){var p=l+I(o=e[u],u);i+=j(o,t,r,p,s)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),u=0;!(o=e.next()).done;)i+=j(o=o.value,t,r,p=l+I(o,u++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function A(e,t,a){if(null==e)return e;var n=[],r=0;return j(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},R={transition:null}},27378:(e,t,a)=>{a(41535)},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),l=a(72389),s=a(51548),o=a(86010);const i="tabItem_LplD";function u(e){var t,a;const{lazy:l,block:u,defaultValue:p,values:c,groupId:d,className:f}=e,m=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??m.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=m[0])?void 0:a.props.value);if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,s.UB)(),[g,S]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=d){const e=b[d];null!=e&&e!==g&&h.some((t=>t.value===e))&&S(e)}const w=e=>{const t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==g&&(x(t),S(n),null!=d&&k(d,n))},N=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]||E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:w,onClick:w},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":g===t})}),a??t)}))),l?(0,r.cloneElement)(m.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function p(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},11048:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9877),r=a(58215),l=a(67294);function s(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(r.Z,{value:"simple"},t[0]),l.createElement(r.Z,{value:"generics"},t[1]))}},70523:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9877),r=a(58215),l=a(67294);function s(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},56922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(15814);const l={React:n,...n,...r}},50975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(27378),a(3905));a(70523),a(9877),a(58215);var l=a(95652),s=a(11048);const o={title:"Snapshot"},i=void 0,u={unversionedId:"api/Snapshot",id:"api/Snapshot",title:"Snapshot",description:"Snapshot - Safe data access for Rest Hooks",source:"@site/../docs/api/Snapshot.md",sourceDirName:"api",slug:"/api/Snapshot",permalink:"/docs/api/Snapshot",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Snapshot.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1643609655,formattedLastUpdatedAt:"1/31/2022",frontMatter:{title:"Snapshot"},sidebar:"docs",previous:{title:"Controller",permalink:"/docs/api/Controller"},next:{title:"useSuspense()",permalink:"/docs/api/useSuspense"}},p={},c=[{value:"getResponse(endpoint, ...args)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"getError(endpoint, ...args)",id:"getError",level:2},{value:"fetchedAt",id:"fetchedat",level:2}],d={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Snapshot - Safe data access for Rest Hooks")),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Snapshot {\n  getResponse(endpoint, ...args)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args)\u200b => ErrorTypes | undefined;\n  fetchedAt: number;\n}\n")),(0,r.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"import type { DenormalizeNullable } from './normal.js';\nimport type { EndpointInterface } from './interface.js';\nimport type { ExpiryStatusInterface } from './Expiry.js';\nimport type { ErrorTypes } from './ErrorTypes.js';\n\nexport default interface SnapshotInterface {\n  getResponse: <\n    E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => {\n    data: DenormalizeNullable<E['schema']>;\n    expiryStatus: ExpiryStatusInterface;\n    expiresAt: number;\n  };\n\n  getError: <\n    E extends Pick<EndpointInterface, 'key'>,\n    Args extends readonly [...Parameters<E['key']>],\n  >(\n    endpoint: E,\n    ...args: Args\n  ) => ErrorTypes | undefined;\n\n  readonly fetchedAt: number;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#snapshot"},"Controller.snapshot()")," to construct a snapshot"))),(0,r.kt)("p",null,"Snapshots passed to user-defined function that are used to compute state updates. These\nallow safe and performant access to the denormalized data based on the current state."),(0,r.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,r.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,r.kt)("h3",{id:"data"},"data"),(0,r.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,r.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,r.kt)("h4",{id:"valid"},"Valid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will never suspend."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,r.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,r.kt)("h4",{id:"invalid"},"Invalid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will always suspend"),(0,r.kt)("li",{parentName:"ul"},"Will always fetch")),(0,r.kt)("h3",{id:"expiresat"},"expiresAt"),(0,r.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,r.kt)("h2",{id:"getError"},"getError(endpoint, ...args)"),(0,r.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,r.kt)("h2",{id:"fetchedat"},"fetchedAt"),(0,r.kt)("p",null,"When the fetch was called that resulted in this snapshot."))}f.isMDXComponent=!0}}]);