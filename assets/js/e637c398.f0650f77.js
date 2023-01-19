(self.webpackChunk=self.webpackChunk||[]).push([[84136],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(5730),s=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:m,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[E,x]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==E&&(w(t),x(r),null!=m&&v(m,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:Z},o,{className:(0,l.Z)("tabs__item",d,o?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},88705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(30433),a=n(65559),l=n(67294);function o(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(r.Z,{value:"simple"},t[0]),l.createElement(r.Z,{value:"generics"},t[1]))}},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),a=n(87462),l=n(99401),o=n(6832),s=n(86010),i=n(49544),u=n(45045);function c(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(c);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),f=n(80086),g=n(45440);function h(e){let{children:t,transformCode:n,groupId:u,defaultOpen:c,row:p,hidden:m,fixtures:f,includeEndpoints:h,...y}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,o.Z)().siteConfig.themeConfig,v=(0,l.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,s.Z)(g.Z.playgroundContainer,{[g.Z.row]:p,[g.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:v},y),r.createElement(b,{reverse:"top"===k,row:p,fixtures:f,includeEndpoints:h,groupId:u,defaultOpen:c},t))),r.createElement(d,null))}function b(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:o,groupId:s,defaultOpen:c}=e;const{handleCodeChange:d,codes:p,codeTabs:g}=(0,m.h)(n),h=p.join("\n");return r.createElement(v,{reverse:t},r.createElement(m.L,{fixtures:l,row:a,codeTabs:g,handleCodeChange:d,codes:p}),r.createElement(u.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(f.Z,{key:"preview",includeEndpoints:o,groupId:s,defaultOpen:c,row:a,fixtures:l}))},r.createElement(k,{code:h,includeEndpoints:o,groupId:s,defaultOpen:c,row:a,fixtures:l})))}h.defaultProps={row:!1,hidden:!1};const y="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),k=(0,r.lazy)((()=>y?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function v(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}v.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:o=!1,fixtures:s}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:o,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(19666),a=n(67294);function l(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,o?l.Z.clickable:null),onClick:o},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>Z,h:()=>C});var r=n(87462),a=n(11614),l=n(86010),o=n(67294),s=n(13743),i=n(45440);function u(e){let{fixtures:t}=e;return o.createElement("div",{className:i.Z.fixtureBlock},t.map((e=>o.createElement("div",{key:e.endpoint.key(...e.args),className:i.Z.fixtureItem},o.createElement("div",{className:i.Z.fixtureHeader},e.endpoint.key(...e.args)),o.createElement(d,{fixture:e})))))}var c=(0,o.memo)(u);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":o.createElement(s.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}var p=n(62974),m=n(49544);const f=(0,o.memo)(m.uz);var g=n(76226),h=n(87594),b=n.n(h),y=n(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const r=y.Z.init();r.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[l,o,s,i,...u]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(l,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${o} }`),u.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const v=(0,o.memo)(g.ZP);const E={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},x={...E,fontSize:14,lineHeight:20};var N=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:l=!1,...s}=e;const i=l?x:E;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[u,c]=(0,o.useState)("100%"),d=(0,o.useCallback)((e=>{a&&e.focus();const t=Object.keys(s).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let n=t[0][0],r=n;const a=[];t[0].forEach((e=>{e===r?r++:(a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(a)}const n=i.lineHeight,r=e.getDomNode(),l=r.getElementsByClassName("view-lines")[0];let o=0;const u=e.getModel().getLineCount()*n+10;return r.style.height=u+"px",c(u),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??l.childElementCount)*n+10;o=l.childElementCount,r.style.height=t+"px",c(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return o.createElement(v,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:d,height:u,loading:o.createElement(m.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return o.createElement(f,{onChange:t,code:n})},w=n(69762);function Z(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:s,codes:u,large:c=!1,isPlayground:d=!0}=e;const p=(0,o.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,f]=(0,o.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return o.createElement("div",null,o.createElement(O,{fixtures:!n&&t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?o.createElement(T,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>f((t=>t.map(((t,n)=>n!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:g,path:h,code:b,collapsed:y,...k}=e;return o.createElement(o.Fragment,{key:d},!n&&g?o.createElement(P,{onClick:()=>f((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:g,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&c}):null,o.createElement("div",{key:d,className:(0,l.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},o.createElement(N,(0,r.Z)({key:d,onChange:s[d],code:u[d],path:"/"+p+"/"+(h||g||"default.tsx")},k,{large:c}))))})))}function C(e){const t=(0,o.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...l}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...l}}))),[e]),[n,r]=(0,o.useReducer)(S,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,o.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function S(e,t){const n=[...e];return n[t.i]=t.code,n}function P(e){let{onClick:t,closed:n,title:r,collapsible:a=!1,lastChild:s=!1}=e;return a?o.createElement(p.Z,{className:(0,l.Z)(i.Z.small,{[i.Z.lastChild]:s&&n}),onClick:t},o.createElement("span",{className:(0,l.Z)(i.Z.arrow,n?i.Z.right:i.Z.down)},"\u25b6"),r):o.createElement("div",{className:i.Z.codeHeader},r)}function T(e){let{titles:t,closedList:n,onClick:r,isPlayground:a=!0}=e;const{values:s}=(0,o.useContext)(w.Z),u=s.length>0;return o.createElement(p.Z,{className:(0,l.Z)({[i.Z.small]:u||!a,[i.Z.subtabs]:u},i.Z.noupper,i.Z.tabControls)},o.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>o.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,l.Z)(i.Z.tab,{[i.Z.selected]:!n[t]})},e)))))}function L(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,o.useContext)(w.Z);return o.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return o.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,l.Z)(i.Z.tab,{[i.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function R(e){let{children:t}=e;return o.createElement(p.Z,{className:i.Z.tabControls},o.createElement("div",{className:i.Z.title},t),o.createElement(L,null))}function O(e){let{title:t,fixtures:n}=e;const{values:r}=(0,o.useContext)(w.Z),a=r.length>0;return o.createElement(o.Fragment,null,n.length?o.createElement(o.Fragment,null,o.createElement(p.Z,{className:i.Z.small},"Fixtures"),o.createElement(c,{fixtures:n})):null,a?o.createElement(R,null,t):null)}O.defaultProps={title:o.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(67294),a=n(11614),l=n(76602),o=n(63735),s=n(39714),i=n(86010),u=n(92785),c=n(92954),d=n(48256),p=n(3604),m=n(45045),f=n(29451),g=n(70524),h=n(287);function b(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]),o=(0,r.useMemo)(y,[]);return r.createElement(h.L,{shouldExpandNodeInitially:o,data:t,valueRenderer:v,theme:l,hideRoot:!0})}const y=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?E.Z.right:E.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,i.Z)(E.Z.arrow,l,E.Z.vertical)},"\u25b6")),a?r.createElement(Z,null):null)}var N=(0,r.memo)(x);function w(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(b,{value:t})}const Z=(0,r.memo)(w);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,l.U)(),[b,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,o.o5)();if(null!=t){const e=g[t];null!=e&&e!==b&&y(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===b?"n":"y")}),[k,t,b,h]),x=(0,r.useMemo)((()=>[new u.Z,new c.Z(d.Z)]),[]),w=!("n"===b||!a);return r.createElement(p.Z,{managers:x},r.createElement(s.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,i.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:w})},r.createElement(m.Z,{fallback:r.createElement(P,null)},r.createElement(T,null))),r.createElement(N,{selectedValue:b,toggle:v})))}var S=(0,r.memo)(C);function P(){return r.createElement("div",null,"Loading...")}const T=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var L=n(62974);function R(e){let{groupId:t,defaultOpen:n,row:l,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(L.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:E.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:l,fixtures:o})))}var O=(0,r.memo)(R)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const l={React:r,...r,...a};t.Z=l},30810:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(88705),o=n(74711),s=n(28423),i=n(86429);const u={title:"useSuspense()"},c=void 0,d={unversionedId:"api/useSuspense",id:"version-6.5/api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/versioned_docs/version-6.5/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/6.5/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/6.5/api/Snapshot"},next:{title:"useController()",permalink:"/docs/6.5/api/useController"}},p={},m=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],f={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"useSuspense() - Data fetching with Suspense"),(0,a.kt)("meta",{name:"docsearch:pagerank",content:"10"})),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,a.kt)("p",null,"Excellent for guaranteed data rendering."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,a.kt)("p",null,"Cache policy is ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.5/getting-started/expiry-policy"},"configurable"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"/docs/6.5/api/Controller#invalidate"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Throws error to be ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,a.kt)("li",{parentName:"ul"},"While Loading:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,a.kt)("a",{parentName:"li",href:"/docs/6.5/api/Controller#invalidate"},"invalidation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,a.kt)("h2",{id:"single"},"Single"),(0,a.kt)(s.Z,{fixtures:[{endpoint:new i.Z({path:"/profiles/:id"}),args:[{id:1}],response:{id:"1",fullName:"Einstein",bio:"Smart physicist"},delay:150},{endpoint:new i.Z({path:"/profiles/:id"}),args:[{id:2}],response:{id:"2",fullName:"Elon Musk",bio:"CEO of Tesla, SpaceX and owner of Twitter"},delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Profile.ts" collapsed',title:'"api/Profile.ts"',collapsed:!0},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Profile extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ProfileResource = createResource({\n  path: '/profiles/:id',\n  schema: Profile,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport { ProfileResource } from './api/Profile';\n\nfunction ProfileDetail(): JSX.Element {\n  const profile = useSuspense(ProfileResource.get, { id: 1 });\n  return (\n    <div>\n      <h4>{profile.fullName}</h4>\n      <p>{profile.bio}</p>\n    </div>\n  );\n}\nrender(<ProfileDetail />);\n"))),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)(s.Z,{fixtures:[{endpoint:new i.Z({path:"/profiles"}),args:[],response:[{id:"1",fullName:"Einstein",bio:"Smart physicist"},{id:"2",fullName:"Elon Musk",bio:"CEO of Tesla, SpaceX and owner of Twitter"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Profile.ts" collapsed',title:'"api/Profile.ts"',collapsed:!0},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Profile extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ProfileResource = createResource({\n  path: '/profiles/:id',\n  schema: Profile,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport { ProfileResource } from './api/Profile';\n\nfunction ProfileList(): JSX.Element {\n  const profiles = useSuspense(ProfileResource.getList);\n  return (\n    <div>\n      {profiles.map(profile => (\n        <div key={profile.pk()}>\n          <h4>{profile.fullName}</h4>\n          <p>{profile.bio}</p>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<ProfileList />);\n"))),(0,a.kt)("h2",{id:"sequential"},"Sequential"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.get, { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.get, {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,a.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,a.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPost extends Entity {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n\nexport const getPosts = new RestEndpoint({\n  path: '/post\\\\?page=:page',\n  schema: { results: [PaginatedPost], nextPage: '', lastPage: '' },\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(getPosts, { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,a.kt)(o.ZP,{mdxType:"ConditionalDependencies"}),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/createResource#get"},"get")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/rest/api/createResource#getlist"},"getList"))),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," as well."))}g.isMDXComponent=!0},74711:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(13743);const o={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(l.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}s.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);