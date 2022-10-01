/*! For license information please see 7ce2beac.fe11bc92.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[71704],{41535:(e,t)=>{var a=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function v(e,t,a){this.props=e,this.context=t,this.refs=k,this.updater=a||f}function y(){}function b(e,t,a){this.props=e,this.context=t,this.refs=k,this.updater=a||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var g=b.prototype=new y;g.constructor=b,h(g,v.prototype),g.isPureReactComponent=!0;var N=Array.isArray,w=Object.prototype.hasOwnProperty,E={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:E.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case r:s=!0}}if(s)return l=l(s=e),e=""===o?"."+S(s,0):o,N(l)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),j(l,t,n,"",(function(e){return e}))):null!=l&&(T(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",N(e))for(var u=0;u<e.length;u++){var p=o+S(i=e[u],u);s+=j(i,t,n,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(i=e.next()).done;)s+=j(i=i.value,t,n,p=o+S(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,a){if(null==e)return e;var r=[],n=0;return j(e,r,"","",(function(e){return t.call(a,e,n++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},U={transition:null}},27378:(e,t,a)=>{a(41535)},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(27378),a(3905));a(70523);const o={id:"createResource",title:"createResource"},l=void 0,i={unversionedId:"api/createResource",id:"api/createResource",title:"createResource",description:"Resources are a collection of RestEndpoints that operate on a common",source:"@site/../docs/rest/api/createResource.md",sourceDirName:"api",slug:"/api/createResource",permalink:"/rest/api/createResource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/createResource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{id:"createResource",title:"createResource"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/rest/api/Endpoint"},next:{title:"hookifyResource",permalink:"/rest/api/hookifyResource"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"path",id:"path",level:3},{value:"schema",id:"schema",level:3},{value:"urlPrefix",id:"urlprefix",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Members",id:"members",level:2},{value:"get",id:"get",level:3},{value:"getList",id:"getlist",level:3},{value:"create",id:"create",level:3},{value:"update",id:"update",level:3},{value:"partialUpdate",id:"partialupdate",level:3},{value:"delete",id:"delete",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Resource"),"s are a collection of ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints")," that operate on a common\ndata by sharing a ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/schema"},"schema")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/TodoResource.ts"',title:'"api/TodoResource.ts"'},"export class Todo extends Entity {\n  id = '';\n  title = '';\n  completed = false;\n  pk() { return this.id }\n}\n\nconst TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { title: 'finish installing rest hooks' })\ncontroller.fetch(TodoResource.update, { id: '5' }, { ...todo, completed: true })\ncontroller.fetch(TodoResource.partialUpdate, { id: '5' }, { completed: true })\ncontroller.fetch(TodoResource.delete, { id: '5' })\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: string;\n  schema: Schema;\n  Endpoint?: typeof RestEndpoint;\n  urlPrefix?: string;\n} & EndpointExtraOptions\n")),(0,n.kt)("h3",{id:"path"},"path"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#path"},"RestEndpoint.path")),(0,n.kt)("h3",{id:"schema"},"schema"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#schema"},"RestEndpoint.schema")),(0,n.kt)("h3",{id:"urlprefix"},"urlPrefix"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#urlPrefix"},"RestEndpoint.urlPrefix")),(0,n.kt)("h3",{id:"endpoint"},"Endpoint"),(0,n.kt)("p",null,"Class used to construct the members."),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("p",null,"These provide the standard ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"endpoints"),"s common in ",(0,n.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("h3",{id:"getlist"},"getList"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"createResource({path: '/:first/:second'}).getList.path === '/:first'\n"))))),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"[schema]"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'POST'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"createResource({path: '/:first/:second'}).getList.path === '/:first'\n"))))),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'PUT'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"partialupdate"},"partialUpdate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'PATCH'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"delete"},"delete"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'DELETE'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"new schema.Delete(schema)")),(0,n.kt)("li",{parentName:"ul"},"process:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"(value, params) {\n  return value && Object.keys(value).length ? value : params;\n},\n")))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")))}c.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),o=a(86010),l=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:f,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[w,E]=(0,n.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==w&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),r=v[a].value;r!==w&&(R(t),E(r),null!=f&&N(f,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;a=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=C[t]??C[C.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},70523:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(65488),n=a(85162),o=a(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(n.Z,{value:"ts"},t[0]),o.createElement(n.Z,{value:"js"},t[1]))}}}]);