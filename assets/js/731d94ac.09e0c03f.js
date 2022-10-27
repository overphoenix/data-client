(self.webpackChunk=self.webpackChunk||[]).push([[51059],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},68299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(52565);const a={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},l=void 0,i={unversionedId:"guides/nested-response",id:"version-5.0/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/rest_versioned_docs/version-5.0/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/5.0/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"docs",previous:{title:"Mocking unfinished endpoints",permalink:"/rest/5.0/guides/mocking-unfinished"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/5.0/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useSuspense(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema: { [k: string]: Schema } = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},84195:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},52565:(e,t,r)=>{"use strict";r.d(t,{Z:()=>A});var n=r(67294),o=r(87462),s=r(49544),a=r(86010),l=r(95999),i=r(52263),c=r(66412),u=r(84195),d=r(45440),p=r(73722);function m(e){let{fixtures:t}=e;return n.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},n.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),n.createElement(g,{fixture:e})))))}var f=(0,n.memo)(m);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":n.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var h=r(60975),y=r(51523),b=r(1556),v=r(76226),k=r(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const n=k.Z.init();n.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const o=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o))return o.endsWith(".")||o.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([n,Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.t.bind(r,70637,23)),Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.t.bind(r,7712,23)),Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.t.bind(r,93716,23)),Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const o=r.value,[s,a,l,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;"),o.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${i} }`),c.forEach(((t,r)=>{const n=e[r];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===n&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.javascriptDefaults.setEagerModelSync(!0),o}))}}const x=(0,n.memo)(v.ZP);function w(e){let{onChange:t,code:r,path:o}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx");const[s,a]=(0,n.useState)(50),l=(0,n.useCallback)((e=>{const t=e.getDomNode(),r=t.getElementsByClassName("view-lines")[0];let n=0;const o=19*e.getModel().getLineCount()+10;t.style.height=o+"px",a(o),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const s=19*r.childElementCount+10;n=r.childElementCount,t.style.height=s+"px",a(o),e.layout()}),0)}))}),[]);return n.createElement(x,{path:o,defaultLanguage:"typescript",onChange:t,value:r,options:Z,theme:"prism",onMount:l,height:s})}const Z={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1};var C;function R(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(u.Z);return n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:s}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},s)})))}function N(e){let{children:t}=e;return n.createElement(h.Z,{className:d.Z.tabControls},n.createElement("div",{className:d.Z.title},t),n.createElement(R,null))}function O(e){let{title:t,fixtures:r}=e;const{values:o}=(0,n.useContext)(u.Z),s=o.length>0;return n.createElement(n.Fragment,null,r.length?n.createElement(n.Fragment,null,n.createElement(h.Z,{className:d.Z.small},"Fixtures"),n.createElement(f,{fixtures:r})):null,s?n.createElement(N,null,t):null)}function P(e){let{children:t,transformCode:r,groupId:l,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:g,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,b=(0,c.p)();return n.createElement("div",{className:(0,a.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},n.createElement(s.nu,(0,o.Z)({theme:b},h),n.createElement(_,{reverse:"top"===y,row:p,fixtures:f,includeEndpoints:g,groupId:l,defaultOpen:u},t)))}function _(e){let{reverse:t,children:r,row:o,fixtures:l,includeEndpoints:i,groupId:c,defaultOpen:u}=e;const p=(0,n.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,n.useMemo)((()=>"string"==typeof r?[{code:r.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(r)?r:[r]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:o}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:o}}))),[r]),[f,g]=(0,n.useReducer)(I,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),h=(0,n.useMemo)((()=>m.map(((e,t)=>e=>g({i:t,code:e})))),[m.length]),[v,k]=(0,n.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=f.join("\n");return n.createElement(D,{reverse:t},n.createElement("div",null,n.createElement(O,{fixtures:!o&&l}),o&&m.length>1?n.createElement(M,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>k((t=>t.map(((t,r)=>r!==e))))}):null,m.map(((e,t)=>{let{title:r,path:s}=e;return n.createElement(n.Fragment,{key:t},!o&&r?n.createElement(L,{onClick:()=>k((e=>{const r=[...e];return r[t]=!r[t],r})),closed:v[t],title:r}):null,n.createElement("div",{key:t,className:(0,a.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:v[t]})},n.createElement(w,{key:t,onChange:h[t],code:f[t],path:"/"+p+"/"+(s||r||"default.tsx")})))}))),n.createElement(b.Z,{fallback:n.createElement(s.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(y.Z,{key:"preview",includeEndpoints:i,groupId:c,defaultOpen:u,row:o,fixtures:l}))},n.createElement(T,{code:E,includeEndpoints:i,groupId:c,defaultOpen:u,row:o,fixtures:l})))}O.defaultProps={title:n.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},P.defaultProps={row:!1,hidden:!1};const S="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(C=navigator)?void 0:C.userAgent),T=(0,n.lazy)((()=>S?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,47550))));function D(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}function I(e,t){const r=[...e];return r[t.i]=t.code,r}function L(e){let{onClick:t,closed:r,title:o}=e;return n.createElement(h.Z,{className:d.Z.small,onClick:t},n.createElement("span",{className:(0,a.Z)(d.Z.arrow,r?d.Z.right:d.Z.down)},"\u25b6"),o)}function M(e){let{titles:t,closedList:r,onClick:o}=e;const{values:s}=(0,n.useContext)(u.Z),l=s.length>0;return n.createElement(h.Z,{className:(0,a.Z)({[d.Z.small]:l,[d.Z.subtabs]:l},d.Z.noupper,d.Z.tabControls)},n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>n.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,a.Z)(d.Z.tab,{[d.Z.selected]:!r[t]})},e)))))}D.defaultProps={reverse:!1};const j=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:s,row:a=!1,fixtures:l}=e;return n.createElement(P,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:s,row:a,hidden:o,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};j.defaultProps={defaultOpen:"n",fixtures:[]};var A=(0,n.memo)(j)},1556:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(91262),o=r(67294);function s(e){let{fallback:t,children:r}=e;return o.createElement(n.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},r)))}},60975:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),o=r(86010),s=r(45440);function a(e){let{children:t,className:r,onClick:a}=e;return n.createElement("div",{className:(0,o.Z)(s.Z.playgroundHeader,r,a?s.Z.clickable:null),onClick:a},t)}},51523:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(67294),o=r(95999),s=r(27093),a=r(26127),l=r(82038),i=r(83611),c=r(39714),u=r(86010),d=r(7094),p=r(12466),m=r(45440),f=r(32041),g=r(97723),h=r(92949);function y(e){let{value:t}=e;const r="dark"===(0,h.I)().colorMode,o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[r,o]);return n.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:s,hideRoot:!0})}function b(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const r=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:r}=e;const o="y"===r,s=o?m.Z.right:m.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,u.Z)(m.Z.arrow,s,m.Z.vertical)},"\u25b6")),o?n.createElement(Z,null):null)}var x=(0,n.memo)(E);function w(){const e=(0,n.useContext)(f.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(y,{value:t})}const Z=(0,n.memo)(w);var C=r(1556);function R(e){let{groupId:t,defaultOpen:r,row:o,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,d.U)(),[y,b]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,n.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),E=(0,n.useMemo)((()=>[new i.Z,new s.Z(a.Z)]),[]),w=!("n"===y||!o);return n.createElement(l.nq,{managers:E},n.createElement(c.Z,{fixtures:f,silenceMissing:!0},n.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},n.createElement(C.Z,{fallback:n.createElement(O,null)},n.createElement(P,null))),n.createElement(x,{selectedValue:y,toggle:k})))}var N=(0,n.memo)(R);function O(){return n.createElement("div",null,"Loading...")}const P=(0,n.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,64511))));var _=r(60975);function S(e){let{groupId:t,defaultOpen:r,row:s,fixtures:a}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(_.Z,null,n.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:m.Z.playgroundResult},n.createElement(N,{groupId:t,defaultOpen:r,row:s,fixtures:a})))}var T=(0,n.memo)(S)},56922:(e,t,r)=>{"use strict";var n=r(67294),o=r(72887);const s={React:n,...n,...o};t.Z=s},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r.t(o,23)))}o.keys=()=>Object.keys(n),o.id=73795,e.exports=o}}]);