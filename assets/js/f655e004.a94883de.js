/*! For license information please see f655e004.a94883de.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[64705],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var k=v.prototype=new g;k.constructor=v,h(k,b.prototype),k.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,E={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,a){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=a;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:E.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case a:s=!0}}if(s)return i=i(s=e),e=""===o?"."+D(s,0):o,w(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+D(l=e[c],c);s+=_(l,t,r,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,r,u=o+D(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function x(e,t,n){if(null==e)return e;var a=[],r=0;return _(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(83117),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=f??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[j,E]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==j&&b.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==j&&(N(t),E(a),null!=m&&w(m,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function f(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(65488),r=n(85162),o=n(67294);function i(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},60998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(83117),r=(n(27378),n(3905)),o=(n(65488),n(85162),n(70523));const i={title:"Define API Endpoint",sidebar_label:"Endpoint"},l=void 0,s={unversionedId:"getting-started/endpoint",id:"getting-started/endpoint",title:"Define API Endpoint",description:"TypeScript Standard Endpoints",source:"@site/../docs/getting-started/endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/endpoint",permalink:"/docs/getting-started/endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/endpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1651518544,formattedLastUpdatedAt:"5/2/2022",frontMatter:{title:"Define API Endpoint",sidebar_label:"Endpoint"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Data Dependencies",permalink:"/docs/getting-started/data-dependency"}},c={},u=[{value:"More than just a function",id:"more-than-just-a-function",level:2},{value:"Members",id:"members",level:3},{value:"Endpoint.extend()",id:"endpointextend",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"TypeScript Standard Endpoints")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoints")," describe an asynchronous ",(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/"},"API"),". This includes both runtime behavior as well as (optionally) typing."),(0,r.kt)(o.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\ninterface Params {\n  id: number;\n}\n\nconst fetchTodoDetail = ({ id }: Params): Promise<Todo> =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\n\n// highlight-next-line\nconst todoDetail = new Endpoint(fetchTodoDetail);\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await todoDetail({ id: '1' }));\n")),(0,r.kt)("samp",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}\n')))),(0,r.kt)("p",null,"We will likely want to use this endpoint in many places with differing needs.\nBy defining a reusable function of ",(0,r.kt)("em",{parentName:"p"},"just")," the network definition, we empower\nits use in ",(0,r.kt)("em",{parentName:"p"},"any")," context."),(0,r.kt)("p",null,"This is especially useful when we start adding more information related to the\nendpoint. For instance, TypeScript definitions help us avoid common mistakes, typos\nand speed up development with autocomplete."),(0,r.kt)("p",null,"By ",(0,r.kt)("em",{parentName:"p"},"tightly coupling")," the interface definition, while ",(0,r.kt)("em",{parentName:"p"},"loosely coupling")," its usage,\nwe reduce boilerplate, complexity, and common mistakes, while increasing performance and\nenabling global application consistency and integrity even in the face of unreliable\nasynchronous data."),(0,r.kt)("h2",{id:"more-than-just-a-function"},"More than just a function"),(0,r.kt)("p",null,"In addition to an async function and (optional) types, ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s are objects,\nallowing them to provide any additional relevant information about the endpoint itself."),(0,r.kt)("p",null,"For instance, to allow integration into a cache as well as knowing when to recompute and/or refetch\nwhen parameters change, Endpoints have a ",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint#key-params--string"},"key()")," member that serializes\nthe endpoint and parameters to a unique string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(todoDetail.key({ id: \'1\' }));\n// fetchTodoDetail {"id":"1"}\n')),(0,r.kt)("h3",{id:"members"},"Members"),(0,r.kt)("p",null,"The second optional arg is an object to initialize the endpoint with. By avoiding arrow functions,\nwe can use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this"),"\nto access other members we defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const todoDetailWithCustomizedKey = new Endpoint(fetchTodoDetail, {\n  key({ id }) {\n    return `${this.endpointIdentifier}/${id}`;\n  },\n  endpointIdentifier: 'todoDetail',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(todoDetailWithCustomizedKey.key({ id: '1' }));\n// todoDetail/1\n")),(0,r.kt)("h3",{id:"endpointextend"},"Endpoint.extend()"),(0,r.kt)("p",null,"For convenience, ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Endpoint#extend"},"extend()")," allows type-correct\nprototypical inheritance extensions of an endpoint."),(0,r.kt)("p",null,"This is greatly reduces boilerplate when strong patterns are established for an API like\nauthentication."),(0,r.kt)("p",null,"Here we show the benefits of customizing ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"method")," member."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fetchTodoDetail = function ({ id }) {\n  return fetch(`${this.urlBase}/todos/${id}`, { method: this.method }).then(\n    res => res.json(),\n  );\n};\n\nconst todoDetail = new Endpoint(fetchTodoDetail, {\n  method: 'GET',\n  urlBase: 'https://jsonplaceholder.typicode.com',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const todoCreate = todoDetail.extend({ method: 'POST' });\nconst todoUpdate = todoDetail.extend({ method: 'PUT' });\n")))}d.isMDXComponent=!0}}]);