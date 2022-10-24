"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),o=n(87462),a=n(49544),l=n(86010),s=n(95999),i=n(52263),c=n(66412),u=n(84195),p=n(45440),d=n(75690);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:p.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:p.Z.fixtureItem},r.createElement("div",{className:p.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(h,{fixture:e})))))}var g=(0,r.memo)(m);function h(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(d.Z,{language:"json",className:p.Z.fixtureJson},JSON.stringify(t.response))}var f,k=n(60975),y=n(51523),b=n(1556);function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,l.Z)(p.Z.tab,{[p.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function x(e){let{children:t}=e;return r.createElement(k.Z,{className:p.Z.tabControls},r.createElement("div",{className:p.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(k.Z,{className:p.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,a?r.createElement(x,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:s,defaultOpen:u,row:d,hidden:m,fixtures:g,includeEndpoints:h,...f}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,i.Z)().siteConfig.themeConfig,y=(0,c.p)();return r.createElement("div",{className:(0,l.Z)(p.Z.playgroundContainer,{[p.Z.row]:d,[p.Z.hidden]:m})},r.createElement(a.nu,(0,o.Z)({theme:y},f),r.createElement(N,{reverse:"top"===k,row:d,fixtures:g,includeEndpoints:h,groupId:s,defaultOpen:u},t)))}function N(e){let{reverse:t,children:n,row:o,fixtures:l,includeEndpoints:s,groupId:i,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[p,d]=(0,r.useReducer)(C,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>u.map(((e,t)=>e=>d({i:t,code:e})))),[u.length]),[g,h]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),f=p.join("\n");return r.createElement(Z,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!o&&l}),o&&u.length>1?r.createElement(I,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:g,onClick:e=>h((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(A,{onClick:()=>h((e=>{const n=[...e];return n[t]=!n[t],n})),closed:g[t],title:n}):null,g[t]?null:r.createElement(P,{key:t,onChange:m[t],code:p[t]}))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:s,groupId:i,defaultOpen:c,row:o,fixtures:l}))},r.createElement(T,{code:f,includeEndpoints:s,groupId:i,defaultOpen:c,row:o,fixtures:l})))}E.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1};const R="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(f=navigator)?void 0:f.userAgent),T=(0,r.lazy)((()=>R?Promise.resolve({default:e=>null}):Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function Z(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function C(e,t){const n=[...e];return n[t.i]=t.code,n}Z.defaultProps={reverse:!1};const O=(0,r.memo)(a.uz);function P(e){let{onChange:t,code:n}=e;return r.createElement(O,{className:p.Z.playgroundEditor,onChange:t,code:n})}function A(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(k.Z,{className:p.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(p.Z.arrow,n?p.Z.right:p.Z.down)},"\u25b6"),o)}function I(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(u.Z),s=a.length>0;return r.createElement(k.Z,{className:(0,l.Z)({[p.Z.small]:s,[p.Z.subtabs]:s},p.Z.noupper,p.Z.tabControls)},r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,l.Z)(p.Z.tab,{[p.Z.selected]:!n[t]})},e)))))}const S=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:l=!1,fixtures:s}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:l,hidden:o,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};S.defaultProps={defaultOpen:"n",fixtures:[]};var _=(0,r.memo)(S)},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010),a=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,l?a.Z.clickable:null),onClick:l},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(67294),o=n(95999),a=n(27093),l=n(26127),s=n(82038),i=n(83611),c=n(39714),u=n(86010),p=n(7094),d=n(12466),m=n(45440),g=n(32041),h=n(97723),f=n(92949);function k(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(h.L,{shouldExpandNode:y,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function x(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?r.createElement(N,null):null)}var E=(0,r.memo)(x);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(k,{value:t})}const N=(0,r.memo)(w);var R=n(1556);function T(e){let{groupId:t,defaultOpen:n,row:o,fixtures:g}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,p.U)(),[k,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,d.o5)();if(null!=t){const e=h[t];null!=e&&e!==k&&y(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),y((e=>"y"===e?"n":"y")),f(t,"y"===k?"n":"y")}),[b,t,k,f]),x=(0,r.useMemo)((()=>[new i.Z,new a.Z(l.Z)]),[]),w=!("n"===k||!o);return r.createElement(s.nq,{managers:x},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(R.Z,{fallback:r.createElement(C,null)},r.createElement(O,null))),r.createElement(E,{selectedValue:k,toggle:v})))}var Z=(0,r.memo)(T);function C(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>Promise.all([n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var P=n(60975);function A(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(Z,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}var I=(0,r.memo)(A)},56922:(e,t,n)=>{var r=n(67294),o=n(72887);const a={React:r,...r,...o};t.Z=a},14951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(107);const l={title:"Rest v6 - url path templates and more",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},s=void 0,i={permalink:"/blog/2022/10/23/Announcing-Rest-6",source:"@site/blog/2022-10-23-Announcing-Rest-6.md",title:"Rest v6 - url path templates and more",description:"@rest-hooks/rest@6 - TypeScript HTTP endpoints from url path templates.",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"rest",permalink:"/blog/tags/rest"},{label:"http",permalink:"/blog/tags/http"},{label:"path-to-regex",permalink:"/blog/tags/path-to-regex"},{label:"resource",permalink:"/blog/tags/resource"},{label:"endpoint",permalink:"/blog/tags/endpoint"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:4.485,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest v6 - url path templates and more",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},nextItem:{title:"Adding validation helpers for required field checks",permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields"}},c={authorsImageUrls:[void 0]},u=[{value:"RestEndpoint",id:"restendpoint",level:2},{value:"createResource",id:"createresource",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Problems",id:"problems",level:3},{value:"Custom Networking",id:"custom-networking",level:2},{value:"Base overrides for lifecycles",id:"base-overrides-for-lifecycles",level:3},{value:"Default values",id:"default-values",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Hook context for fetch construction",id:"hook-context-for-fetch-construction",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"@rest-hooks/rest@6 - TypeScript HTTP endpoints from url path templates.")),(0,o.kt)("p",null,"Today we're releasing ",(0,o.kt)("a",{parentName:"p",href:"/rest/usage"},"@rest-hooks/rest")," version 6. While this is a pretty\nradical departure from previous versions, there is no need to upgrade if previous versions are\nworking as they will continue to work with the current 6.4 release of Rest Hooks as well as many\nfuture versions."),(0,o.kt)("p",null,"First, we have completely decoupled the ",(0,o.kt)("em",{parentName:"p"},"networking lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"\nfrom the ",(0,o.kt)("em",{parentName:"p"},"data lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema"),". Collections of Endpoints that operate on the same\ndata can be consgtructed by calling ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"."),(0,o.kt)("h2",{id:"restendpoint"},"RestEndpoint"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/getTodo.ts"',title:'"api/getTodo.ts"'},"const getTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(getTodo, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," optimizes configuration based around HTTP\nnetworking. Urls are constructed based on simple named parameters, which are ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#typing"},"enforced with\nstrict TypeScript automatically"),"."),(0,o.kt)("h2",{id:"createresource"},"createResource"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"class Todo extends Entity {\n  id = 0;\n  userId = 0;\n  title = '';\n  completed = false;\n  pk() {\n    return this.id;\n  }\n}\nconst TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"function TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(TodoResource.get, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource")," creates a simple collection of ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),".\nThese can be easily overidden, removed as appropriate - or not used altogether. ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"\nis intended as a quick start point and as a guide to best practices for API interface ergonomics. It is expected\nto extend or replace createResource based on the common patterns for your own API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { content: 'ntucker' });\ncontroller.fetch(TodoResource.update, { id: '5' }, { content: 'ntucker' });\ncontroller.fetch(\n  TodoResource.partialUpdate,\n  { id: '5' },\n  { content: 'ntucker' },\n);\ncontroller.fetch(TodoResource.delete, { id: '5' });\n")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Previously, ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource"},"Resource")," ",(0,o.kt)("em",{parentName:"p"},"was")," an ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/Entity"},"Entity"),". Endpoints are defined as ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#detail"},"static members"),"."),(0,o.kt)("p",null,"The motivation is for brevity: This allows one import to both define the expected type as well as access the endpoints to send as hook 'subjects'."),(0,o.kt)("h3",{id:"problems"},"Problems"),(0,o.kt)("p",null,"However, this lead to some problems. Originally it was thought many of these would be eliminated by improvements\nin related technologies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Class static side is not well supported by TypeScript. This leads to the somewhat confusing but also limiting ",(0,o.kt)("a",{parentName:"li",href:"https://resthooks.io/rest/guides/rest-types"},"generic workaround"),"."),(0,o.kt)("li",{parentName:"ol"},"Inheritance does not work well for providing out-of-the-box endpoint definitions. Overrides are better",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's a struggle between general types that allow overrides or precise types that help developers."),(0,o.kt)("li",{parentName:"ul"},"Hacks like \u2018SchemaDetail\u2019 are an attempt around this but are confusing, expensive for typescript to compute and likely break in certain configurations."))),(0,o.kt)("li",{parentName:"ol"},"Union Resources are awkward to define as their expected schema ends up not being the Entity.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In general, custom schemas are often shared by multiple endpoints, making it desirable to not require them to be just an Entity"))),(0,o.kt)("li",{parentName:"ol"},"Endpoints themselves don't maintain referential equality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This results in hacks in our hooks that violate expectations (ignoring referential changes to endpoints). There are legit reasons one might want to create a endpoint that changes and have that trigger fetches.")))),(0,o.kt)("p",null,"Probably most of all is that sharing data lifecycles with networking lifecycles made them quite a bit confusing in\nmany ways."),(0,o.kt)("h2",{id:"custom-networking"},"Custom Networking"),(0,o.kt)("p",null,"Customizations can be done easily with both ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#inheritance"},"RestEndpoint inheritance"),"\nas well as ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#extend"},"RestEndpoint.extend()"),". Explore the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#fetch-lifecycle"},"fetch lifecycle"),"\nto understand how these customizations affect fetch."),(0,o.kt)("h3",{id:"base-overrides-for-lifecycles"},"Base overrides for lifecycles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class GithubEndpoint<\n  O extends RestGenerics = any,\n> extends RestEndpoint<O> {\n  getRequestInit(body: any): RequestInit {\n    if (body) {\n      return super.getRequestInit(deeplyApplyKeyTransform(body, snakeCase));\n    }\n    return super.getRequestInit();\n  }\n\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n\n  process(value: any, ...args: any) {\n    return deeplyApplyKeyTransform(value, camelCase);\n  }\n}\n")),(0,o.kt)("h3",{id:"default-values"},"Default values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class IssueEndpoint<O extends RestGenerics=any> extends GithubEndpoint<O> {\n  pollFrequency = 60000;\n}\n")),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/guides/pagination#infinite-scrolling"},"Infinite scrolling pagination")," can be achieved by creating a new pagination endpoint\nfor from any list endpoints ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#paginated"},"RestEndpoint.paginated()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MyResource.getNextPage = MyResource.getList.paginated(\n  ({\n    cursor,\n    ...rest\n  }: {\n    cursor: string | number;\n    group: string | number;\n  }) => [rest],\n);\n")),(0,o.kt)("h2",{id:"hook-context-for-fetch-construction"},"Hook context for fetch construction"),(0,o.kt)("p",null,"In cases where React context is needed to perform networking requests, we can construct hook\nendpoint generators with an augmentation function ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/hookifyResource"},"hookifyResource")),(0,o.kt)("p",null,"This utilizes the new key+string rewriting magic of TypeScript 4.2+. This means it won't be\nas strongly typed when using previous versions of TypeScript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ContextAuthdArticleResourceBase = createResource({\n  path: 'http\\\\://test.com/article/:id',\n  schema: Article,\n});\nexport const ContextAuthdArticleResource = hookifyResource(\n  {\n    ...ContextAuthdArticleResourceBase,\n    getListWithUser: ContextAuthdArticleResourceBase.getList.extend({\n      url: () =>\n        (ContextAuthdArticleResourceBase.getList.url as any)({\n          includeUser: true,\n        }),\n    }),\n  },\n  function useInit() {\n    const accessToken = useContext(AuthContext);\n    return {\n      headers: {\n        'Access-Token': accessToken,\n      },\n    };\n  },\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const article = useSuspense(ContextAuthdArticleResource.useGet(), { id });\nconst updateArticle = ContextAuthdArticleResource.useUpdate()\nconst onSubmit = () => controller.fetch(updateArticle, { id }, body);\n\nreturn <Form onSubmit={onSubmit} initialValues={article} />\n")),(0,o.kt)("h1",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Explore common patterns with this implementation using the GitHub API."),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/github-app?embed=1&file=src%2Fresources%2FIssue.tsx&hideNavigation=1&hideDevTools=1&view=editor",width:"738",height:"700",style:{width:"100%"}}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"full documentation for @rest-hooks/rest@6")," for more detailed guides that cover all the functionality."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/2187"},"The PR for RestEndpoint, createResource, and hookifyResource")))}d.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}}}]);