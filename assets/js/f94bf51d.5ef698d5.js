"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),c=n(12466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:f,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[w,x]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==w&&(Z(t),x(r),null!=f&&E(f,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:C,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(67294),a=n(87462),o=n(49544),l=n(86010),i=n(95999),s=n(52263),c=n(66412),d=n(84195),u=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(p);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g=n(60975),h=n(51523),y=n(1556);const b=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,l.Z)(u.Z.tab,{[u.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function k(e){let{children:t}=e;return r.createElement(g.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(d.Z),o=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:u.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,o?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:i,defaultOpen:d,row:p,hidden:m,fixtures:f,includeEndpoints:g,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,s.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,l.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(o.nu,(0,a.Z)({theme:b},h),r.createElement(x,{reverse:"top"===y,row:p,fixtures:f,includeEndpoints:g,groupId:i,defaultOpen:d},t)))}function x(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:i,groupId:s,defaultOpen:c}=e;const d=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[u,p]=(0,r.useReducer)(Z,void 0,(()=>d.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>d.map(((e,t)=>e=>p({i:t,code:e})))),[d.length]),[f,g]=(0,r.useState)((()=>d.map((e=>{let{collapsed:t}=e;return t})))),v=u.join("\n");return r.createElement(N,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!a&&l}),a&&d.length>1?r.createElement(D,{titles:d.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,n)=>n!==e))))}):null,d.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(S,{onClick:()=>g((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(C,{key:t,onChange:m[t],code:u[t]}))}))),r.createElement(y.Z,{fallback:r.createElement(o.nu,{key:"preview",code:'render(() => "loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:i,groupId:s,defaultOpen:c,row:a,fixtures:l}))},r.createElement(b,{code:v,includeEndpoints:i,groupId:s,defaultOpen:c,row:a,fixtures:l})))}function N(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Z(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},N.defaultProps={reverse:!1};const T=(0,r.memo)(o.uz);function C(e){let{onChange:t,code:n}=e;return r.createElement(T,{className:u.Z.playgroundEditor,onChange:t,code:n})}function S(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(g.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),a)}function D(e){let{titles:t,closedList:n,onClick:a}=e;const{values:o}=(0,r.useContext)(d.Z),i=o.length>0;return r.createElement(g.Z,{className:(0,l.Z)({[u.Z.small]:i,[u.Z.subtabs]:i},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,l.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}const R=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o,row:l=!1,fixtures:i}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:a,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};R.defaultProps={defaultOpen:"n",fixtures:[]};var O=(0,r.memo)(R)},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},1556:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(91262),a=n(67294);function o(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,n,l?o.Z.clickable:null),onClick:l},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(67294),a=n(95999),o=n(27093),l=n(26127),i=n(82038),s=n(83611),c=n(39714),d=n(86010),u=n(7094),p=n(12466),m=n(45440),f=n(32041),g=n(97723),h=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:o,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,o=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,o,m.Z.vertical)},"\u25b6")),a?r.createElement(N,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const N=(0,r.memo)(x);var Z=n(1556);function T(e){let{groupId:t,defaultOpen:n,row:a,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,u.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),E=(0,r.useMemo)((()=>[new s.Z,new o.Z(l.Z)]),[]),x=!("n"===y||!a);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(Z.Z,{fallback:r.createElement(S,null)},r.createElement(D,null))),r.createElement(w,{selectedValue:y,toggle:k})))}var C=(0,r.memo)(T);function S(){return r.createElement("div",null,"Loading...")}const D=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var R=n(60975);function O(e){let{groupId:t,defaultOpen:n,row:o,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(R.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(C,{groupId:t,defaultOpen:n,row:o,fixtures:l})))}var P=(0,r.memo)(O)},29297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162),i=n(70523),s=n(107);const c={title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},d=void 0,u={unversionedId:"getting-started/data-dependency",id:"version-6.1/getting-started/data-dependency",title:"Co-locate Data Dependencies",description:"Co-locating data dependencies means we only use data-binding hooks like useResource()",source:"@site/versioned_docs/version-6.1/getting-started/data-dependency.md",sourceDirName:"getting-started",slug:"/getting-started/data-dependency",permalink:"/docs/6.1/getting-started/data-dependency",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/data-dependency.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Co-locate Data Dependencies",sidebar_label:"Data Dependencies"},sidebar:"version-6.1/docs",previous:{title:"Endpoint",permalink:"/docs/6.1/getting-started/endpoint"},next:{title:"Entity",permalink:"/docs/6.1/getting-started/entity"}},p={},m=[{value:"Async Fallbacks (loading/error)",id:"async-fallbacks",level:2},{value:"Boundaries (Suspense/NetworkErrorBoundary)",id:"boundaries",level:3},{value:"Stateful",id:"stateful",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Live Crypto Price Example",id:"live-crypto-price-example",level:3}],f={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Co-locating data dependencies means we only use data-binding hooks like ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()"),"\nin components where we display/use their data directly."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  // highlight-next-line\n  const todo = useResource(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  // highlight-next-line\n  const todos = useResource(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"#boundaries"},"suspend")," until the the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// todo could be undefined if id is undefined\nconst todo = useResource(todoDetail, id ? { id } : null);\n"))),(0,a.kt)("h2",{id:"async-fallbacks"},"Async Fallbacks (loading/error)"),(0,a.kt)("p",null,"This works great if the client already has the data. But while it's waiting on a response from the server,\nwe need some kind of loading indication. Similarly if there is an error in the fetch, we should indicate such.\nThese are called 'fallbacks'."),(0,a.kt)("h3",{id:"boundaries"},"Boundaries (Suspense/NetworkErrorBoundary)"),(0,a.kt)("p",null,"In React 18, the best way to achieve this is with boundaries. (",(0,a.kt)("a",{parentName:"p",href:"#stateful"},"React 16.3+ supported"),", but less powerful.)\n",(0,a.kt)("inlineCode",{parentName:"p"},"<Suspense />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<NetworkErrorBoundary />"),"\nare wrapper components which show fallback ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/rendering-elements.html"},"elements"),"\nwhen any component rendered as a descendent is loading or errored while loading their data dependency."),(0,a.kt)(i.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,23-25}","{6,12,23-25}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\ninterface Props {\n  fallback: React.ReactElement;\n  children: React.ReactNode;\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,12,18-20}","{6,12,18-20}":!0},"import React, { Suspense } from 'react';\nimport { NetworkErrorBoundary } from 'rest-hooks';\n\nexport default function TodoPage({ id }: { id: number }) {\n  return (\n    <AsyncBoundary>\n      <section>\n        <TodoDetail id={1} />\n        <TodoDetail id={5} />\n        <TodoDetail id={10} />\n      </section>\n    </AsyncBoundary>\n  );\n}\n\nfunction AsyncBoundary({ children, fallback = 'loading' }: Props) {\n  return (\n    <Suspense fallback={fallback}>\n      <NetworkErrorBoundary>{children}</NetworkErrorBoundary>\n    </Suspense>\n  );\n}\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This greatly simplifies complex orchestrations of data dependencies by decoupling where to show fallbacks\nfrom the components using the data.")),(0,a.kt)("p",null,"For instance, here we have three different components requesting different todo data. These will all loading in\nparallel and only show one loading indicator instead of filling the screen with them. Although this case\nis obviously contrived; in practice this comes up quite often, especially when data dependencies end up deeply nesting."),(0,a.kt)("h3",{id:"stateful"},"Stateful"),(0,a.kt)("p",null,"You may find cases where it's still useful to use a stateful approach to fallbacks when using React 16 and 17.\nFor these cases, or compatibility with some component libraries, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," package includes\na hook that uses stateful loading and errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const {\n    loading,\n    error,\n    data: todo,\n  } = useStatefulResource(todoDetail, { id });\n  if (loading) return 'loading';\n  if (error) return error.status;\n  return <div>{todo.title}</div>;\n}\n")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"../guides/no-suspense"},"useStatefulResource")),(0,a.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"When data is likely to change due to external factor; ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/useSubscription"},"useSubscription()"),"\nensures continual updates while a component is mounted."),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n// local directory for API definitions\nimport { todoDetail } from 'endpoints/todo';\n\nexport default function TodoDetail({ id }: { id: number }) {\n  const todo = useResource(todoDetail, { id });\n  // highlight-next-line\n  useSubscription(todoDetail, { id });\n  return <div>{todo.title}</div>;\n}\n"))),(0,a.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n// local directory for API definitions\nimport { todoList } from 'endpoints/todo';\n\nexport default function TodoList() {\n  const todos = useResource(todoList, {});\n  // highlight-next-line\n  useSubscription(todoList, {});\n  return (\n    <section>\n      {todos.map(todo => (\n        <div key={todo.id}>{todo.title}</div>\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,"Subscriptions are orchestrated by ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Manager"},"Managers"),". Out of the box,\npolling based subscriptions can be used by adding ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Endpoint#pollfrequency-number"},"pollFrequency")," to an endpoint.\nFor pushed based networking protocols like websockets, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Manager#middleware-data-stream"},"example websocket stream manager"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const fetchTodoDetail = ({ id }) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>\n    res.json(),\n  );\nconst todoDetail = new Endpoint(\n  fetchTodoDetail,\n  // highlight-next-line\n  { pollFrequency: 1000 },\n);\n")),(0,a.kt)("h3",{id:"live-crypto-price-example"},"Live Crypto Price Example"),(0,a.kt)(s.Z,{defaultOpen:"n",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class ExchangeRatesResource extends Resource {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n\n  static urlRoot = 'https://www.coinbase.com/api/v2/exchange-rates';\n\n  static getEndpointExtra() {\n    return { pollFrequency: 5000 };\n  }\n\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<{ currency: string }>, { data: T }, undefined> {\n    return super.list().extend({\n      schema: { data: this },\n    });\n  }\n}\n\nfunction AssetPrice({ symbol }: { symbol: string }) {\n  const { data: price } = useResource(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  useSubscription(ExchangeRatesResource.list(), {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\n\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}g.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);