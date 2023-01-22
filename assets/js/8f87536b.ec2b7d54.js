(self.webpackChunk=self.webpackChunk||[]).push([[41887],{83389:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var r=n(87462),a=(n(67294),n(3905)),l=n(47885),s=n(65559),o=n(30433),i=n(52393),u=n(28423);const c={id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},d=void 0,p={unversionedId:"README",id:"version-0.2/README",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/graphql_versioned_docs/version-0.2/README.md",sourceDirName:".",slug:"/",permalink:"/graphql/0.2/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/README.md",tags:[],version:"0.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Authentication",permalink:"/graphql/0.2/auth"}},m={},g=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],f={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/0.2/api/Entity"},"Entity"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using GQLEntities is not required, but is important to achieve data consistency.")),(0,a.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,a.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"/graphql/0.2/api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"/graphql/0.2/api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"SWAPI Demo")),(0,a.kt)(u.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,a.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,a.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,a.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}h.isMDXComponent=!0},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),s=n(5730),o=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:m,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,i.U)(),[k,x]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==k&&h.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==k&&(Z(t),x(r),null!=m&&E(m,String(r)))},N=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:N,onClick:C},s,{className:(0,l.Z)("tabs__item",d,s?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),a=n(87462),l=n(99401),s=n(6832),o=n(86010),i=n(49544),u=n(45045);function c(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(c);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),f=n(45440);function h(e){let{children:t,transformCode:n,groupId:u,defaultOpen:c,row:p,hidden:m,fixtures:g,includeEndpoints:h,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,E=(0,l.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:E},b),r.createElement(y,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:u,defaultOpen:c},t))),r.createElement(d,null))}function y(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:s,groupId:o,defaultOpen:c}=e;const{handleCodeChange:d,codes:p,codeTabs:f}=(0,m.h)(n),h=p.join("\n");return r.createElement(E,{reverse:t},r.createElement(m.L,{fixtures:l,row:a,codeTabs:f,handleCodeChange:d,codes:p}),r.createElement(u.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:s,groupId:o,defaultOpen:c,row:a,fixtures:l}))},r.createElement(v,{code:h,includeEndpoints:s,groupId:o,defaultOpen:c,row:a,fixtures:l})))}h.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function E(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}E.defaultProps={reverse:!1};const k=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:s=!1,fixtures:o}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:s,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};k.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(k)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(30433),a=n(65559),l=n(67294);function s(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},52393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(13743),a=n(30433),l=n(65559),s=n(67294);function o(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(l.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(19666),a=n(67294);function l(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),l=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,s?l.Z.clickable:null),onClick:s},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>C,h:()=>N});var r=n(87462),a=n(11614),l=n(86010),s=n(67294),o=n(13743),i=n(45440);function u(e){let{fixtures:t}=e;return s.createElement("div",{className:i.Z.fixtureBlock},t.map((e=>s.createElement("div",{key:e.endpoint.key(...e.args),className:i.Z.fixtureItem},s.createElement("div",{className:i.Z.fixtureHeader},e.endpoint.key(...e.args)),s.createElement(d,{fixture:e})))))}var c=(0,s.memo)(u);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":s.createElement(o.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}var p=n(62974),m=n(49544);const g=(0,s.memo)(m.uz);var f=n(76226),h=n(87594),y=n.n(h),b=n(30573);let v;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!v){const r=b.Z.init();r.then((e=>{e&&(v=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[l,s,o,i,...u]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(l,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${s} }`),u.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const E=(0,s.memo)(f.ZP);const k={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},x={...k,fontSize:14,lineHeight:20};var w=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:l=!1,...o}=e;const i=l?x:k;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[u,c]=(0,s.useState)("100%"),d=(0,s.useCallback)((e=>{a&&e.focus();const t=Object.keys(o).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(y());if(t.length){let n=t[0][0],r=n;const a=[];t[0].forEach((e=>{e===r?r++:(a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(a)}const n=i.lineHeight,r=e.getDomNode(),l=r.getElementsByClassName("view-lines")[0];let s=0;const u=e.getModel().getLineCount()*n+10;return r.style.height=u+"px",c(u),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=(e.getModel()?.getLineCount?.()??l.childElementCount)*n+10;s=l.childElementCount,r.style.height=t+"px",c(t),e.layout()}),0)})),()=>e?.dispose()}),[]);return s.createElement(E,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:d,height:u,loading:s.createElement(m.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return s.createElement(g,{onChange:t,code:n})},Z=n(69762);function C(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:o,codes:u,large:c=!1,isPlayground:d=!0}=e;const p=(0,s.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,s.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return s.createElement("div",null,s.createElement(_,{fixtures:!n&&t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?s.createElement(T,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:f,path:h,code:y,collapsed:b,...v}=e;return s.createElement(s.Fragment,{key:d},!n&&f?s.createElement(S,{onClick:()=>g((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:f,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&c}):null,s.createElement("div",{key:d,className:(0,l.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},s.createElement(w,(0,r.Z)({key:d,onChange:o[d],code:u[d],path:"/"+p+"/"+(h||f||"default.tsx")},v,{large:c}))))})))}function N(e){const t=(0,s.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...l}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...l}}))),[e]),[n,r]=(0,s.useReducer)(L,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,s.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function L(e,t){const n=[...e];return n[t.i]=t.code,n}function S(e){let{onClick:t,closed:n,title:r,collapsible:a=!1,lastChild:o=!1}=e;return a?s.createElement(p.Z,{className:(0,l.Z)(i.Z.small,{[i.Z.lastChild]:o&&n}),onClick:t},s.createElement("span",{className:(0,l.Z)(i.Z.arrow,n?i.Z.right:i.Z.down)},"\u25b6"),r):s.createElement("div",{className:i.Z.codeHeader},r)}function T(e){let{titles:t,closedList:n,onClick:r,isPlayground:a=!0}=e;const{values:o}=(0,s.useContext)(Z.Z),u=o.length>0;return s.createElement(p.Z,{className:(0,l.Z)({[i.Z.small]:u||!a,[i.Z.subtabs]:u},i.Z.noupper,i.Z.tabControls)},s.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>s.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,l.Z)(i.Z.tab,{[i.Z.selected]:!n[t]})},e)))))}function P(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,s.useContext)(Z.Z);return s.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return s.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,l.Z)(i.Z.tab,{[i.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function D(e){let{children:t}=e;return s.createElement(p.Z,{className:i.Z.tabControls},s.createElement("div",{className:i.Z.title},t),s.createElement(P,null))}function _(e){let{title:t,fixtures:n}=e;const{values:r}=(0,s.useContext)(Z.Z),a=r.length>0;return s.createElement(s.Fragment,null,n.length?s.createElement(s.Fragment,null,s.createElement(p.Z,{className:i.Z.small},"Fixtures"),s.createElement(c,{fixtures:n})):null,a?s.createElement(D,null,t):null)}_.defaultProps={title:s.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(67294),a=n(11614),l=n(76602),s=n(63735),o=n(39714),i=n(86010),u=n(92785),c=n(92954),d=n(48256),p=n(3604),m=n(45045),g=n(29451),f=n(70524),h=n(287);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]),s=(0,r.useMemo)(b,[]);return r.createElement(h.L,{shouldExpandNodeInitially:s,data:t,valueRenderer:E,theme:l,hideRoot:!0})}const b=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},v="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var k=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?k.Z.right:k.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:k.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,i.Z)(k.Z.arrow,l,k.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var w=(0,r.memo)(x);function Z(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(Z);function N(e){let{groupId:t,defaultOpen:n,row:a,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,l.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,s.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const E=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),x=(0,r.useMemo)((()=>[new u.Z,new c.Z(d.Z)]),[]),Z=!("n"===y||!a);return r.createElement(p.Z,{managers:x},r.createElement(o.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,i.Z)(k.Z.playgroundPreview,{[k.Z.hidden]:Z})},r.createElement(m.Z,{fallback:r.createElement(S,null)},r.createElement(T,null))),r.createElement(w,{selectedValue:y,toggle:E})))}var L=(0,r.memo)(N);function S(){return r.createElement("div",null,"Loading...")}const T=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var P=n(62974);function D(e){let{groupId:t,defaultOpen:n,row:l,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:k.Z.playgroundResult},r.createElement(L,{groupId:t,defaultOpen:n,row:l,fixtures:s})))}var _=(0,r.memo)(D)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const l={React:r,...r,...a};t.Z=l},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);