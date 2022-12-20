/*! For license information please see 093956cf.0b51eb4d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79992],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var k=g.prototype=new v;k.constructor=g,y(k,h.prototype),k.isPureReactComponent=!0;var E=Array.isArray,T=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)T.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:n,type:e,key:l,ref:s,props:o,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return l=l(i=e),e=""===o?"."+x(i,0):o,E(l)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),N(l,t,a,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",E(e))for(var u=0;u<e.length;u++){var c=o+x(s=e[u],u);i+=N(s,t,a,c,l)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)i+=N(s=s.value,t,a,c=o+x(s,u++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var Z={current:null},D={transition:null}},27378:(e,t,n)=>{n(41535)},30433:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86010),l=n(5730),s=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:f,className:m}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[E,T]=(0,a.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==E&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==E&&(j(t),T(r),null!=f&&k(f,String(r)))},S=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:S,onClick:O},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function f(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(30433),a=n(65559),o=n(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},80896:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(76602),a=n(13743),o=n(67294);function l(e){let{pkgs:t,dev:n=!1}=e;const{tabGroupChoices:l}=(0,r.U)();return"yarn"===l["node-packages-program"]?o.createElement(a.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t):o.createElement(a.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)}},73558:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(30433),a=n(65559),o=n(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"rest",groupId:"protocol",values:[{label:"Rest",value:"rest"},{label:"GraphQL",value:"gql"}]},o.createElement(r.Z,{value:"rest"},t[0]),o.createElement(r.Z,{value:"gql"},t[1]))}},57489:(e,t,n)=>{var r=n(67294),a=n(64820);const o={React:r,...r,...a};t.Z=o},41512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(27378),n(3905)),o=(n(51402),n(47002),n(65559)),l=n(30433),s=(n(47885),n(73558),n(80896));const i={title:"Define API Endpoints",sidebar_label:"Define API"},u=void 0,c={unversionedId:"getting-started/endpoint",id:"getting-started/endpoint",title:"Define API Endpoints",description:"Define API for Rest Hooks",source:"@site/../docs/core/getting-started/endpoint.md",sourceDirName:"getting-started",slug:"/getting-started/endpoint",permalink:"/docs/getting-started/endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/endpoint.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1671529881,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Define API Endpoints",sidebar_label:"Define API"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Render Data",permalink:"/docs/getting-started/data-dependency"}},p={},d=[],f={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Define API for Rest Hooks")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Endpoints")," are the ",(0,a.kt)("em",{parentName:"p"},"methods")," of your data. ",(0,a.kt)("inlineCode",{parentName:"p"},"Schemas")," define the data model. ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," are\na collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoints")," around one ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"."),(0,a.kt)("p",null,"It's highly encouraged to design APIs with consistent patterns. Because of this,\nyou can extend our protocol specific helpers. After choosing your protocol, you can\nread up on the full docs for reach protocol ",(0,a.kt)("a",{parentName:"p",href:"/rest"},"REST"),", ",(0,a.kt)("a",{parentName:"p",href:"/graphql"},"GraphQL"),",\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/img-media"},"Image/binary"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager#middleware-data-stream"},"Websockets+SSE")),(0,a.kt)(o.Z,{defaultValue:"rest",groupId:"protocol",values:[{label:"Rest",value:"rest"},{label:"GraphQL",value:"gql"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"rest",mdxType:"TabItem"},(0,a.kt)(s.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgInstall"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"import { createResource, Entity } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = 0;\n  title = '';\n  completed = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n\nexport const TodoResource = new createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n"))),(0,a.kt)(l.Z,{value:"gql",mdxType:"TabItem"},(0,a.kt)(s.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgInstall"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"import { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint('/');\n\nexport class Todo extends GQLEntity {\n  readonly title: string = '';\n  readonly completed: boolean = false;\n}\n\nexport const todoList = gql.query(\n  `\n  query GetTodos {\n    todo {\n      id\n      title\n      completed\n    }\n  }\n`,\n  { todos: [Todo] },\n);\n\nexport const updateTodo = gql.mutation(\n  `mutation UpdateTodo($todo: Todo!) {\n    updateTodo(todo: $todo) {\n      id\n      title\n      completed\n    }\n  }`,\n  { updateTodo: Todo },\n);\n")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);