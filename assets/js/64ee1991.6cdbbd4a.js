(self.webpackChunk=self.webpackChunk||[]).push([[71283],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},39141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(67294),a=n(87462),s=n(49544),o=n(86010),i=n(11614),l=n(6832),c=n(99401),d=n(69762),u=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:u.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:u.Z.fixtureItem},r.createElement("div",{className:u.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:u.Z.fixtureJson},JSON.stringify(t.response))}var h=n(62974),y=n(80086),b=n(45045),k=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a))return a.endsWith(".")||a.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[s,o,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.javascriptDefaults.setEagerModelSync(!0),a}))}}const w=(0,r.memo)(k.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1},C=(0,r.memo)(s.uz);var N,Z="undefined"==typeof window||/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent)?function(e){let{onChange:t,code:n,path:a}=e;return r.createElement(C,{onChange:t,code:n})}:function(e){let{onChange:t,code:n,path:a}=e;a.endsWith(".tsx")||a.endsWith(".ts")||(a+=".tsx");const[s,o]=(0,r.useState)(50),i=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const a=19*e.getModel().getLineCount()+10;t.style.height=a+"px",o(a),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const s=19*n.childElementCount+10;r=n.childElementCount,t.style.height=s+"px",o(a),e.layout()}),0)}))}),[]);return r.createElement(w,{path:a,defaultLanguage:"typescript",onChange:t,value:n,options:x,theme:"prism",onMount:i,height:s})};function R(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,o.Z)(u.Z.tab,{[u.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},s)})))}function T(e){let{children:t}=e;return r.createElement(h.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(R,null))}function P(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(d.Z),s=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:u.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,s?r.createElement(T,null,t):null)}function I(e){let{children:t,transformCode:n,groupId:i,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:f,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(s.nu,(0,a.Z)({theme:b},h),r.createElement(O,{reverse:"top"===y,row:p,fixtures:g,includeEndpoints:f,groupId:i,defaultOpen:d},t)))}function O(e){let{reverse:t,children:n,row:a,fixtures:i,includeEndpoints:l,groupId:c,defaultOpen:d}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a}}))),[n]),[g,f]=(0,r.useReducer)(_,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>m.map(((e,t)=>e=>f({i:t,code:e})))),[m.length]),[k,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=g.join("\n");return r.createElement(A,{reverse:t},r.createElement("div",null,r.createElement(P,{fixtures:!a&&i}),a&&m.length>1?r.createElement(M,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:s}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(D,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,o.Z)(u.Z.playgroundEditor,{[u.Z.hidden]:k[t]})},r.createElement(Z,{key:t,onChange:h[t],code:g[t],path:"/"+p+"/"+(s||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(s.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:d,row:a,fixtures:i}))},r.createElement(j,{code:E,includeEndpoints:l,groupId:c,defaultOpen:d,row:a,fixtures:i})))}P.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},I.defaultProps={row:!1,hidden:!1};const S="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(N=navigator)?void 0:N.userAgent),j=(0,r.lazy)((()=>S?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,37097))));function A(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function _(e,t){const n=[...e];return n[t.i]=t.code,n}function D(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(h.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),a)}function M(e){let{titles:t,closedList:n,onClick:a}=e;const{values:s}=(0,r.useContext)(d.Z),i=s.length>0;return r.createElement(h.Z,{className:(0,o.Z)({[u.Z.small]:i,[u.Z.subtabs]:i},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,o.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}A.defaultProps={reverse:!1};const L=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:s,row:o=!1,fixtures:i}=e;return r.createElement(I,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:s,row:o,hidden:a,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};L.defaultProps={defaultOpen:"n",fixtures:[]};var U=(0,r.memo)(L)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(19666),a=n(67294);function s(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),s=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,a.Z)(s.Z.playgroundHeader,n,o?s.Z.clickable:null),onClick:o},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(67294),a=n(11614),s=n(27093),o=n(26127),i=n(82038),l=n(83611),c=n(39714),d=n(86010),u=n(76602),p=n(63735),m=n(45440),g=n(32041),f=n(97723),h=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:s,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,s=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,s,m.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(x);var N=n(45045);function Z(e){let{groupId:t,defaultOpen:n,row:a,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,u.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[k,t,y,h]),E=(0,r.useMemo)((()=>[new l.Z,new s.Z(o.Z)]),[]),x=!("n"===y||!a);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(N.Z,{fallback:r.createElement(T,null)},r.createElement(P,null))),r.createElement(w,{selectedValue:y,toggle:v})))}var R=(0,r.memo)(Z);function T(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var I=n(62974);function O(e){let{groupId:t,defaultOpen:n,row:s,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(I.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(R,{groupId:t,defaultOpen:n,row:s,fixtures:o})))}var S=(0,r.memo)(O)},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(72887);const s={React:r,...r,...a};t.Z=s},20385:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),s=n(39141);const o={title:"Transforming data on fetch"},i=void 0,l={unversionedId:"guides/network-transform",id:"version-6.2/guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/versioned_docs/version-6.2/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/docs/6.2/guides/network-transform",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/network-transform.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Transforming data on fetch"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/6.2/guides/auth"},next:{title:"Mocking unfinished endpoints",permalink:"/docs/6.2/guides/mocking-unfinished"}},c={},d=[{value:"Snakes to camels",id:"snakes-to-camels",level:2},{value:"Deserializing fields",id:"deserializing-fields",level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",level:2},{value:"Using HTTP Headers",id:"using-http-headers",level:2},{value:"Name calling",id:"name-calling",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All network requests flow through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you retain control over the API design, generally it's preferred to\nupdate the data sent over the network. Keeping the client as ",(0,a.kt)("inlineCode",{parentName:"p"},"thin")," as possible\nis helpful to both performance and complexity."),(0,a.kt)("p",{parentName:"blockquote"},"That said, in many cases you want to consume APIs you don't have control over -\nbe they public APIs, or due to internal organizational structure.")),(0,a.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,a.kt)("p",null,"Commonly APIs are designed with keys using ",(0,a.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CamelResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { camelCase, snakeCase } from 'lodash';\nimport { Resource } from '@rest-hooks/rest';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: Record<string, any> = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\n// We can now extend CamelResource instead of Resource to build\n// all of our classes.\nabstract class CamelResource extends Resource {\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body) {\n      init.body = deeplyApplyKeyTransform(init.body, snakeCase);\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // do the conversion!\n    return deeplyApplyKeyTransform(jsonResponse, camelCase);\n  }\n}\n")),(0,a.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,a.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,a.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,a.kt)("p",null,"In this case, simply use the ",(0,a.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"static schema")," with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber")),(0,a.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const exchangeMock = ({ exchangePair }) =>\n  Promise.resolve({\n    exchangePair,\n    price: '32982389239823983298329832.238923982389328932893298',\n    updatedAt: new Date().toISOString(),\n  });\n\nclass ExchangePrice extends Entity {\n  readonly exchangePair = '';\n  readonly updatedAt = new Date(0);\n  readonly price = new BigNumber(0);\n  static schema = {\n    updatedAt: Date,\n    price: BigNumber,\n  };\n  pk() {\n    return this.exchangePair;\n  }\n}\nconst getPrice = new Endpoint(exchangeMock, {\n  schema: ExchangePrice,\n});\nfunction PricePage() {\n  const currentPrice = useSuspense(getPrice, { exchangePair: 'btc-usd' });\n  return (\n    <div>\n      {currentPrice.price.toPrecision(2)} as of{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          currentPrice.updatedAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PricePage />);\n"))),(0,a.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Id")),(0,a.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,a.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,a.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET https://mystreamsite.tv/ntucker/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StreamResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nabstract class StreamResource extends CamelResource {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n\n  static detail<T extends typeof Resource>(this: T) {\n    const superEndpoint = super.detail() as ReadEndpoint<FetchFunction, T>;\n    return superEndpoint.extend({\n      fetch: async (params: { username: string }) => {\n        const response = await superEndpoint.fetch.call(this, params);\n        response.username = params.username;\n        return response;\n      },\n      // calling super with generics is broken in TypeScript, so re-defining schema ensures correct typing\n      schema: this,\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,a.kt)("p",null,"HTTP ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,a.kt)("a",{parentName:"p",href:"../api/resource#static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse"},"Resource.fetchResponse()"),"\ncan be used to construct ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,a.kt)("p",null,"Sometimes this is used for cursor based ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(this: T) {\n    const instanceFetchResponse = this.fetchResponse.bind(this);\n\n    return super.list().extend({\n      fetch: async function (params: Readonly<Record<string, string | number>>) {\n        const response = await instanceFetchResponse(this.url(params), this.init);\n        return {\n          link: response.headers.get('link'),\n          results: await response.json().catch((error: any) => {\n            error.status = 400;\n            throw error;\n        };\n      },\n      schema: { results: [this], link: '' },\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"name-calling"},"Name calling"),(0,a.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ArticleResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// We're using camelCase now as well ;)\nclass ArticleResource extends CamelResource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly carrotsUsed: number = 0;\n\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body && 'carrotsUsed' in init.body) {\n      // caller should manage init & body, so we don't want to modify it\n      init = { ...init, body: { ...init.body } };\n      init.body.carrotsUsedIsThisNameTooLong = init.body.carrotsUsed;\n      delete init.body.carrotsUsed;\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // only replace the name if it exists. This also helps us ignore list responses.\n    if ('carrotsUsedIsThisNameTooLong' in jsonResponse) {\n      // ok to mutate jsonResponse since we control it\n      jsonResponse.carrotsUsed = jsonResponse.carrotsUsedIsThisNameTooLong;\n      delete jsonResponse.carrotsUsedIsThisNameTooLong;\n    }\n    return jsonResponse;\n  }\n}\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);