/*! For license information please see 1d5285a0.92aed852.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28049],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var k=y.prototype=new v;k.constructor=y,m(k,b.prototype),k.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,a)&&!A.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:O.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+S(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),F(i,t,a,"",(function(e){return e}))):null!=i&&(I(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+S(l=e[u],u);s+=F(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=F(l=l.value,t,a,c=o+S(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function C(e,t,n){if(null==e)return e;var r=[],a=0;return F(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},j={transition:null}},27378:(e,t,n)=>{n(41535)},30433:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86010),i=n(5730),l=n(20636),s=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:h,className:m}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=f??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[E,O]=(0,a.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==E&&b.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=A.indexOf(t),r=b[n].value;r!==E&&(x(t),O(r),null!=h&&w(h,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;n=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;n=A[t]??A[A.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>A.push(e),onKeyDown:N,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function f(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},51776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(27378),n(3905)),o=n(65559),i=n(30433);const l={title:"Debugging and Inspection",sidebar_label:"Debugging"},s=void 0,u={unversionedId:"guides/debugging",id:"guides/debugging",title:"Debugging and Inspection",description:"By default CacheProvider includes the DevToolsManager,",source:"@site/../docs/core/guides/debugging.md",sourceDirName:"guides",slug:"/guides/debugging",permalink:"/docs/guides/debugging",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/debugging.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662248478,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"Debugging and Inspection",sidebar_label:"Debugging"},sidebar:"docs",previous:{title:"Validation",permalink:"/docs/getting-started/validation"},next:{title:"Mocking data for Storybook",permalink:"/docs/guides/storybook"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install browser extension",id:"install-browser-extension",level:3},{value:"Ensure Manager is installed",id:"ensure-manager-is-installed",level:3},{value:"Open dev tools",id:"open-dev-tools",level:3},{value:"Understanding Rest Hooks Cache",id:"understanding-rest-hooks-cache",level:2},{value:"Normalized Cache",id:"normalized-cache",level:3}],d={toc:p};function f(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default ",(0,a.kt)("a",{parentName:"p",href:"../api/CacheProvider"},"CacheProvider")," includes the ",(0,a.kt)("a",{parentName:"p",href:"../api/DevToolsManager"},"DevToolsManager"),",\nwhich means in development mode (",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),") it will send state and actions\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"install-browser-extension"},"Install browser extension"),(0,a.kt)("p",null,"Add the browser extension for\n",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"chrome extension"),"\nor\n",(0,a.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"firefox extension")),(0,a.kt)("h3",{id:"ensure-manager-is-installed"},"Ensure Manager is installed"),(0,a.kt)("p",null,"By default this is enabled in dev mode. If using your own set of managers, add ",(0,a.kt)("a",{parentName:"p",href:"../api/DevToolsManager"},"DevToolsManager"),"\nto the beginning of the list."),(0,a.kt)("h3",{id:"open-dev-tools"},"Open dev tools"),(0,a.kt)("p",null,"After installing and running your site, a new icon should appear in your location bar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redux-devtools button",src:n(56535).Z,width:"197",height:"59"})),(0,a.kt)("p",null,"Clicking that will open the inspector, which allows you to observe dispatched actions,\ntheir effect on the cache state as well as current cache state."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redux-devtools",src:n(24928).Z,width:"1609",height:"1215"})),(0,a.kt)("h2",{id:"understanding-rest-hooks-cache"},"Understanding Rest Hooks Cache"),(0,a.kt)("p",null,"Rest Hooks uses the flux architecture to make it easy to understand and debug. This also\nhas the benefit of making Rest Hooks concurrent mode compatible."),(0,a.kt)("p",null,"The same ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/core-concepts"},"core principals of redux")," apply\nto this store's design."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"flux",src:n(16462).Z,width:"1508",height:"484"})),(0,a.kt)("p",null,"Here we see the data flow."),(0,a.kt)("p",null,"For example, when a useSuspense() hook is first mounted it might"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start by dispatching a fetch action"),(0,a.kt)("li",{parentName:"ul"},"If no identical fetches are in-flight, the central store will then start the network call over HTTP"),(0,a.kt)("li",{parentName:"ul"},"When the network call resolves, a receive action is sent to the store's reducer, updating the state."),(0,a.kt)("li",{parentName:"ul"},"The component is re-rendered with the updated state, resolving the suspense.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../api/Manager#control-flow"},"More about control flow"))),(0,a.kt)("h3",{id:"normalized-cache"},"Normalized Cache"),(0,a.kt)("p",null,"If ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/schema"},"schema"),"s are used, API responses are split into two pieces - entities, and results.\nThis ensures consistency and alows allows for automatic as well as novel performances optimizations, especially\nkey if the data ever changes or is repeated."),(0,a.kt)(o.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"State",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Entities cache",src:n(31923).Z,width:"1600",height:"596"}))),(0,a.kt)(i.Z,{value:"Response",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {"id": 1, "title": "this is an entity"},\n  {"id": 2, "title": "this is the second entity"}\n]\n'))),(0,a.kt)(i.Z,{value:"Endpoint",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,a.kt)(i.Z,{value:"Entity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useSuspense(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,a.kt)("p",null,"Once normalized, these entities and results are merged with the larger cache. Click on the 'state'\ntab in devtools to see the entire state. This can be useful to determine exactly where data is. There is\nalso a 'meta' section of the cache for information like when the request took place (useful for TTL)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dev tools state inspector",src:n(9450).Z,width:"1611",height:"1213"})),(0,a.kt)("p",null,"For monitoring a particular fetch response, it might be more useful to see how the cache state updates.\nClick on the 'Diff' tab to see what changed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dev tools diff inspector",src:n(24928).Z,width:"1609",height:"1215"})),(0,a.kt)("p",null,"Here we can see that an entity was inserted as well as new results."))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31923:(e,t,n)=>{t.Z=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"},16462:(e,t,n)=>{t.Z=n.p+"assets/images/flux-a3453b56f949a8a6b15ef20e17a4be71.png"},24928:(e,t,n)=>{t.Z=n.p+"assets/images/redux-devtool-diff-734bc565843f889f92ab41ba61081407.png"},9450:(e,t,n)=>{t.Z=n.p+"assets/images/redux-devtools-state-225963a3c73504dbc889f4b5562d4c7a.png"},56535:(e,t)=>{t.Z="data:image/png;base64,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"}}]);