(self.webpackChunk=self.webpackChunk||[]).push([[82931],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),i=n(86010),l=n(5730),s=n(20636),o=n(76602),u=n(63735),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:g,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,o.U)(),[x,w]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==x&&(Z(t),w(r),null!=g&&E(g,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},39141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(67294),a=n(87462),i=n(49544),l=n(86010),s=n(11614),o=n(6832),u=n(99401),c=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var h=n(62974),y=n(80086),k=n(45045),b=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a))return a.endsWith(".")||a.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[i,l,s,o,...u]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;"),a.languages.typescript.typescriptDefaults.addExtraLib(i,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${o} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${o} }`),u.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.javascriptDefaults.setEagerModelSync(!0),a}))}}const x=(0,r.memo)(b.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1},N=(0,r.memo)(i.uz);var Z,C="undefined"==typeof window||/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)?function(e){let{onChange:t,code:n,path:a}=e;return r.createElement(N,{onChange:t,code:n})}:function(e){let{onChange:t,code:n,path:a}=e;a.endsWith(".tsx")||a.endsWith(".ts")||(a+=".tsx");const[i,l]=(0,r.useState)(50),s=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const a=19*e.getModel().getLineCount()+10;t.style.height=a+"px",l(a),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const i=19*n.childElementCount+10;r=n.childElementCount,t.style.height=i+"px",l(a),e.layout()}),0)}))}),[]);return r.createElement(x,{path:a,defaultLanguage:"typescript",onChange:t,value:n,options:w,theme:"prism",onMount:s,height:i})};function T(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function S(e){let{children:t}=e;return r.createElement(h.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(T,null))}function O(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(c.Z),i=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:d.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,i?r.createElement(S,null,t):null)}function R(e){let{children:t,transformCode:n,groupId:s,defaultOpen:c,row:p,hidden:m,fixtures:g,includeEndpoints:f,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,k=(0,u.p)();return r.createElement("div",{className:(0,l.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:k},h),r.createElement(D,{reverse:"top"===y,row:p,fixtures:g,includeEndpoints:f,groupId:s,defaultOpen:c},t)))}function D(e){let{reverse:t,children:n,row:a,fixtures:s,includeEndpoints:o,groupId:u,defaultOpen:c}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a}}))),[n]),[g,f]=(0,r.useReducer)(A,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>m.map(((e,t)=>e=>f({i:t,code:e})))),[m.length]),[b,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=g.join("\n");return r.createElement(_,{reverse:t},r.createElement("div",null,r.createElement(O,{fixtures:!a&&s}),a&&m.length>1?r.createElement(j,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:b,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:i}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(L,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:b[t],title:n}):null,r.createElement("div",{key:t,className:(0,l.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:b[t]})},r.createElement(C,{key:t,onChange:h[t],code:g[t],path:"/"+p+"/"+(i||n||"default.tsx")})))}))),r.createElement(k.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:o,groupId:u,defaultOpen:c,row:a,fixtures:s}))},r.createElement(P,{code:E,includeEndpoints:o,groupId:u,defaultOpen:c,row:a,fixtures:s})))}O.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},R.defaultProps={row:!1,hidden:!1};const I="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(Z=navigator)?void 0:Z.userAgent),P=(0,r.lazy)((()=>I?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,37097))));function _(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function A(e,t){const n=[...e];return n[t.i]=t.code,n}function L(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(h.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),a)}function j(e){let{titles:t,closedList:n,onClick:a}=e;const{values:i}=(0,r.useContext)(c.Z),s=i.length>0;return r.createElement(h.Z,{className:(0,l.Z)({[d.Z.small]:s,[d.Z.subtabs]:s},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}_.defaultProps={reverse:!1};const M=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i,row:l=!1,fixtures:s}=e;return r.createElement(R,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:l,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};M.defaultProps={defaultOpen:"n",fixtures:[]};var U=(0,r.memo)(M)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(65559),a=n(30433),i=n(67294);function l(e){let{children:t}=e;return i.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(a.Z,{value:"ts"},t[0]),i.createElement(a.Z,{value:"js"},t[1]))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(19666),a=n(67294);function i(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),i=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,a.Z)(i.Z.playgroundHeader,n,l?i.Z.clickable:null),onClick:l},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(67294),a=n(11614),i=n(27093),l=n(26127),s=n(82038),o=n(83611),u=n(39714),c=n(86010),d=n(76602),p=n(63735),m=n(45440),g=n(32041),f=n(97723),h=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:k,data:t,valueRenderer:v,theme:i,hideRoot:!0})}function k(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,i=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,i,m.Z.vertical)},"\u25b6")),a?r.createElement(N,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const N=(0,r.memo)(w);var Z=n(45045);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,d.U)(),[y,k]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&k(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),k((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[b,t,y,h]),E=(0,r.useMemo)((()=>[new o.Z,new i.Z(l.Z)]),[]),w=!("n"===y||!a);return r.createElement(s.nq,{managers:E},r.createElement(u.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(Z.Z,{fallback:r.createElement(S,null)},r.createElement(O,null))),r.createElement(x,{selectedValue:y,toggle:v})))}var T=(0,r.memo)(C);function S(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var R=n(62974);function D(e){let{groupId:t,defaultOpen:n,row:i,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(R.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(T,{groupId:t,defaultOpen:n,row:i,fixtures:l})))}var I=(0,r.memo)(D)},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(72887);const i={React:r,...r,...a};t.Z=i},11958:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(39141),l=n(47885);const s={title:"Entity"},o=void 0,u={unversionedId:"api/Entity",id:"version-6.1/api/Entity",title:"Entity",description:"Entity - Declarative Data Normalization | Rest Hooks",source:"@site/versioned_docs/version-6.1/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/6.1/api/Entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Entity"},sidebar:"version-6.1/docs",previous:{title:"Schema",permalink:"/docs/6.1/api/schema"},next:{title:"schema.Object",permalink:"/docs/6.1/api/Object"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",level:3},{value:"process(input, parent, key): processedEntity",id:"processinput-parent-key-processedentity",level:3},{value:"abstract pk: (parent?, key?): pk?",id:"pk",level:3},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Entities",id:"singleton-entities",level:4},{value:"static get key(): string",id:"key",level:3},{value:"static merge(existing, incoming): mergedValue",id:"merge",level:3},{value:"Example",id:"example",level:4},{value:"static validate(processedEntity): errorMessage?",id:"validate",level:3},{value:"static infer(args, indexes, recurse): pk?",id:"infer",level:3},{value:"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt",id:"expiresat",level:3},{value:"static indexes?: (keyof this)[]",id:"indexes",level:3},{value:"useResource()",id:"useresource",level:4},{value:"useCache()",id:"usecache",level:4},{value:"static schema: { k: keyof this: Schema }",id:"schema",level:3},{value:"Optional members",id:"optional-members",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Entity - Declarative Data Normalization | Rest Hooks")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,a.kt)("p",null,"By defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,a.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,a.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,a.kt)("h3",{id:"processinput-parent-key-processedentity"},"process(input, parent, key): processedEntity"),(0,a.kt)("p",null,"Run at the start of normalization for this entity. Return value is saved in store\nand sent to ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defaults")," to simply copying the response (",(0,a.kt)("inlineCode",{parentName:"p"},"{...input}"),")"),(0,a.kt)("h3",{id:"pk"},"abstract pk: (parent?, key?): pk?"),(0,a.kt)("p",null,"PK stands for ",(0,a.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,a.kt)("h4",{id:"undefined-value"},"undefined value"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,a.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,a.kt)("h4",{id:"other-uses"},"Other uses"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,a.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,a.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,a.kt)("h3",{id:"key"},"static get key(): string"),(0,a.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,a.kt)("h3",{id:"merge"},"static merge(existing, incoming): mergedValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(existing: InstanceType<T>, incoming: InstanceType<T>) => InstanceType<T>\n")),(0,a.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,a.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static merge<T extends typeof SimpleRecord>(\n    existing: InstanceType<T>,\n    incoming: InstanceType<T>,\n  ) {\n    if (existing.timestamp > incoming.timestamp) return existing;\n    return incoming;\n  }\n}\n")),(0,a.kt)("h3",{id:"validate"},"static validate(processedEntity): errorMessage?"),(0,a.kt)("p",null,"Runs during both normalize and denormalize. Returning a string indicates an error (the string is the message)."),(0,a.kt)("p",null,"During normalization a validation failure will result in an error for that fetch."),(0,a.kt)("p",null,"During denormalization a validation failure will mark that result as 'invalid' and thus\nwill block on fetching a result."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," does some basic field existance checks in development mode only. Override to\ndisable or customize."),(0,a.kt)("h3",{id:"infer"},"static infer(args, indexes, recurse): pk?"),(0,a.kt)("p",null,"Allows Rest Hooks to build a response without having to fetch if its entities can be found."),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," will not infer this entity"),(0,a.kt)("p",null,"Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," string will attempt to lookup this entity and use in the response."),(0,a.kt)("p",null,"When inferring a response, this entity's expiresAt is used to compute the expiry policy."),(0,a.kt)("p",null,"By ",(0,a.kt)("strong",{parentName:"p"},"default")," uses the first argument to lookup in ",(0,a.kt)("a",{parentName:"p",href:"#pk"},"pk()")," and ",(0,a.kt)("a",{parentName:"p",href:"#indexes"},"indexes")),(0,a.kt)("h3",{id:"expiresat"},"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt"),(0,a.kt)("p",null,"This determines expiry time when entity is part of a result that is inferred."),(0,a.kt)("p",null,"Overriding can be used to change TTL policy specifically for inferred responses."),(0,a.kt)("h3",{id:"indexes"},"static indexes?: (keyof this)[]"),(0,a.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,a.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,a.kt)("h4",{id:"useresource"},"useResource()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useResource"},"useResource()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useResource(UserResource.detail(), { username: 'bob' });\n")),(0,a.kt)("h4",{id:"usecache"},"useCache()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,a.kt)("p",null,"Some top level component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useResource(AssetResource.list(), {});\n")),(0,a.kt)("p",null,"Nested below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,a.kt)("h3",{id:"schema"},"static schema: { ","[k: keyof this]",": Schema }"),(0,a.kt)("p",null,"Set this to ",(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,a.kt)("p",null,"Additionally can be used to ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,a.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const postSample = () =>\n  Promise.resolve({\n    id: '5',\n    author: { id: '123', name: 'Jim' },\n    content: 'Happy day',\n    createdAt: '2019-01-23T06:07:48.311Z',\n  });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nclass Post extends Entity {\n  readonly author: User = User.fromJS({});\n  readonly createdAt: Date = new Date(0);\n  static schema = {\n    author: User,\n    createdAt: Date,\n  };\n  pk() {\n    return this.id;\n  }\n}\nconst postDetail = new Endpoint(postSample, {\n  schema: Post,\n});\nfunction PostPage() {\n  const post = useResource(postDetail, { id: '123' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          post.createdAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,a.kt)("h4",{id:"optional-members"},"Optional members"),(0,a.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  };\n}\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);