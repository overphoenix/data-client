/*! For license information please see 7ce2beac.68778ce0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71704],{41535:(e,t)=>{var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function v(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var g=b.prototype=new y;g.constructor=b,h(g,v.prototype),g.isPureReactComponent=!0;var N=Array.isArray,E=Object.prototype.hasOwnProperty,w={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,a){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)E.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=a;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:i,props:o,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,o,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case a:s=!0}}if(s)return l=l(s=e),e=""===o?"."+T(s,0):o,N(l)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),j(l,t,n,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",N(e))for(var u=0;u<e.length;u++){var p=o+T(i=e[u],u);s+=j(i,t,n,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(i=e.next()).done;)s+=j(i=i.value,t,n,p=o+T(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,r){if(null==e)return e;var a=[],n=0;return j(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},U={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(27378),r(3905));r(70523);const o={id:"createResource",title:"createResource"},l=void 0,i={unversionedId:"api/createResource",id:"api/createResource",title:"createResource",description:"createResource() - Collection of CRUD Endpoints",source:"@site/../docs/rest/api/createResource.md",sourceDirName:"api",slug:"/api/createResource",permalink:"/rest/api/createResource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/createResource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665887417,formattedLastUpdatedAt:"Oct 16, 2022",frontMatter:{id:"createResource",title:"createResource"},sidebar:"docs",previous:{title:"Endpoint",permalink:"/rest/api/Endpoint"},next:{title:"hookifyResource",permalink:"/rest/api/hookifyResource"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"path",id:"path",level:3},{value:"schema",id:"schema",level:3},{value:"urlPrefix",id:"urlprefix",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"EndpointExtraOptions",id:"endpointextraoptions",level:3},{value:"Members",id:"members",level:2},{value:"get",id:"get",level:3},{value:"getList",id:"getlist",level:3},{value:"create",id:"create",level:3},{value:"update",id:"update",level:3},{value:"partialUpdate",id:"partialupdate",level:3},{value:"delete",id:"delete",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"createResource() - Collection of CRUD Endpoints")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Resources")," are a collection of ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints")," that operate on a common\ndata by sharing a ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/schema"},"schema")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/TodoResource.ts"',title:'"api/TodoResource.ts"'},"export class Todo extends Entity {\n  id = '';\n  title = '';\n  completed = false;\n  pk() { return this.id }\n}\n\nconst TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { title: 'finish installing rest hooks' })\ncontroller.fetch(TodoResource.update, { id: '5' }, { ...todo, completed: true })\ncontroller.fetch(TodoResource.partialUpdate, { id: '5' }, { completed: true })\ncontroller.fetch(TodoResource.delete, { id: '5' })\n")),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: string;\n  schema: Schema;\n  Endpoint?: typeof RestEndpoint;\n  urlPrefix?: string;\n} & EndpointExtraOptions\n")),(0,n.kt)("h3",{id:"path"},"path"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#path"},"RestEndpoint.path")),(0,n.kt)("h3",{id:"schema"},"schema"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#schema"},"RestEndpoint.schema")),(0,n.kt)("h3",{id:"urlprefix"},"urlPrefix"),(0,n.kt)("p",null,"Passed to ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#urlPrefix"},"RestEndpoint.urlPrefix")),(0,n.kt)("h3",{id:"endpoint"},"Endpoint"),(0,n.kt)("p",null,"Class used to construct the members."),(0,n.kt)("h3",{id:"endpointextraoptions"},(0,n.kt)("a",{parentName:"h3",href:"/rest/api/RestEndpoint#endpoint-life-cycles"},"EndpointExtraOptions")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("p",null,"These provide the standard ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"endpoints"),"s common in ",(0,n.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("h3",{id:"getlist"},"getList"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"createResource({path: '/:first/:second'}).getList.path === '/:first'\ncreateResource({path: '/:first'}).getList.path === '/'\n"))))),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"[schema]"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'POST'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"createResource({path: '/:first/:second'}).getList.path === '/:first'\ncreateResource({path: '/:first'}).create.path === '/'\n"))))),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'PUT'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"partialupdate"},"partialUpdate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'PATCH'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"schema"))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,n.kt)("h3",{id:"delete"},"delete"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"method: 'DELETE'"),(0,n.kt)("li",{parentName:"ul"},"path: ",(0,n.kt)("inlineCode",{parentName:"li"},"path")),(0,n.kt)("li",{parentName:"ul"},"schema: ",(0,n.kt)("inlineCode",{parentName:"li"},"new schema.Delete(schema)")),(0,n.kt)("li",{parentName:"ul"},"process:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"(value, params) {\n  return value && Object.keys(value).length ? value : params;\n},\n")))),(0,n.kt)("p",null,"Commonly used with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")))}c.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),u=r(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:f,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[E,w]=(0,n.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==E&&v.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=C.indexOf(t),a=v[r].value;a!==E&&(R(t),w(a),null!=f&&N(f,String(a)))},S=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;r=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=C[t]??C[C.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>C.push(e),onKeyDown:S,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,n.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},70523:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(65488),n=r(85162),o=r(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(n.Z,{value:"ts"},t[0]),o.createElement(n.Z,{value:"js"},t[1]))}}}]);