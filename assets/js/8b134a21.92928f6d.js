(self.webpackChunk=self.webpackChunk||[]).push([[81324],{43221:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),o=n(41191),a=n(90008);const i={title:"Query",slug:"Query"},l=void 0,c={unversionedId:"api/Query",id:"api/Query",title:"Query",description:"Query - Programmatic performant store access",source:"@site/../docs/rest/api/Query.md",sourceDirName:"api",slug:"/api/Query",permalink:"/rest/api/Query",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Query.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669082172,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"Query",slug:"Query"},sidebar:"docs",previous:{title:"hookifyResource",permalink:"/rest/api/hookifyResource"},next:{title:"Index",permalink:"/rest/api/Index"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Simplest",id:"simplest",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Client side joins",id:"client-side-joins",level:3},{value:"Query members",id:"query-members",level:2},{value:"schema",id:"schema",level:3},{value:"process(entries, ...args)",id:"process",level:3},{value:"key(...args)",id:"key",level:3}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Query - Programmatic performant store access"),(0,s.kt)("meta",{name:"docsearch:pagerank",content:"30"})),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Query")," provides programmatic access to the Rest Hooks cache while maintaining\nthe same high performance and referential equality guarantees expected of Rest Hooks."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Query<S extends SchemaSimple, P extends any[] = []> {\n  constructor(\n    schema: S,\n    process?: (entries: Denormalize<S>, ...args: P) => Denormalize<S>,\n  );\n\n  schema: S;\n  key(...args: P): string;\n\n  process: (entries: Denormalize<S>, ...args: P) => Denormalize<S>;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Query")," implements the ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"EndpointInterface")," but without the fetch function, which\nmeans it can only be passed to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"data binding hook useCache()")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"simplest"},"Simplest"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new o.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx" {4}',title:'"UsersPage.tsx"',"{4}":!0},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\nconst allUsers = new Query(new schema.All(User));\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const users = useCache(allUsers);\n  if (!users) return <div>No users in cache yet</div>;\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"sorting"},"Sorting"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new o.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"},{id:"777",name:"Albatras",isAdmin:!0}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx"',title:'"UsersPage.tsx"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\nconst sortedUsers = new Query(\n  new schema.All(User),\n  (entries, { asc } = { asc: false }) => {\n    const sorted = [...entries].sort((a, b) => a.name.localeCompare(b.name));\n    if (asc) return sorted;\n    return sorted.reverse();\n  },\n);\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const users = useCache(sortedUsers, { asc: true });\n  if (!users) return <div>No users in cache yet</div>;\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"filtering"},"Filtering"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new o.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"},{id:"777",name:"Albatras",isAdmin:!0}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = '';\n  name = '';\n  isAdmin = false;\n  pk() {\n    return this.id;\n  }\n}\nexport const UserResource = createResource({\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="UsersPage.tsx"',title:'"UsersPage.tsx"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { UserResource, User } from './api/User';\n\nconst usersByAdmin = new Query(\n  new schema.All(User),\n  (entries, { isAdmin }: { isAdmin?: boolean } = {}) => {\n    if (isAdmin === undefined) return entries;\n    return entries.filter(user => user.isAdmin === isAdmin);\n  },\n);\n\nfunction UsersPage() {\n  useFetch(UserResource.getList);\n  const users = useCache(usersByAdmin, { isAdmin: true });\n  if (!users) return <div>No users in cache yet</div>;\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,s.kt)("h3",{id:"client-side-joins"},"Client side joins"),(0,s.kt)("p",null,"Even if the network responses don't nest data, we can perform client-side joins by specifying\nthe relationship in ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"Entity.schema")),(0,s.kt)(a.Z,{mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"export class User extends Entity {\n  id = 0;\n  name = '';\n  email = '';\n  website = '';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const UserResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/users/:id',\n  schema: User,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Todo.ts" collapsed',title:'"api/Todo.ts"',collapsed:!0},"import { User } from './User';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = User.fromJS({});\n  title = '';\n  completed = false;\n  pk() {\n    return `${this.id}`;\n  }\n  static schema = {\n    userId: User,\n  };\n}\nexport const TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoJoined.tsx"',title:'"TodoJoined.tsx"'},"import { Query, schema } from '@rest-hooks/rest';\nimport { TodoResource, Todo } from './api/Todo';\nimport { UserResource, User } from './api/User';\n\nconst todosWithUser = new Query(\n  new schema.All(Todo),\n  (entries, { userId = 0 }) => {\n    return entries.filter(todo => todo.userId?.id === userId);\n  },\n);\n\nfunction TodosPage() {\n  useFetch(UserResource.getList);\n  useFetch(TodoResource.getList);\n  const todos = useCache(todosWithUser, { userId: 1 });\n  if (!todos) return <div>No Todos in cache yet</div>;\n  return (\n    <div>\n      {todos.map(todo => (\n        <div key={todo.pk()}>\n          {todo.title} by {todo.userId.name}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<TodosPage />);\n"))),(0,s.kt)("h2",{id:"query-members"},"Query members"),(0,s.kt)("h3",{id:"schema"},"schema"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema")," used to retrieve/denormalize data from the Rest Hooks cache.\nMost cases will use ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/All"},"schema.All"),", which retrieves all entities of a given type found\nin the cache."),(0,s.kt)("h3",{id:"process"},"process(entries, ...args)"),(0,s.kt)("p",null,"Takes the (denormalized) response as entries and arguments and returns the new\nresponse for use with ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"useCache")),(0,s.kt)("h3",{id:"key"},"key(...args)"),(0,s.kt)("p",null,"Implements ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#key"},"Endpoint.key")," Used to determine recomputation of memoized values."))}p.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var r=n(67294),s=n(87462),o=n(99401),a=n(11614),i=n(6832),l=n(86010),c=n(49544),u=n(69762),d=n(45045),m=n(13743),p=n(45440);function h(e){let{fixtures:t}=e;return r.createElement("div",{className:p.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:p.Z.fixtureItem},r.createElement("div",{className:p.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(h);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(m.Z,{language:"json",className:p.Z.fixtureJson},JSON.stringify(t.response))}var y=n(62974);function k(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:v},type:"application/javascript"}))}var b=(0,r.memo)(k);const v=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var x=n(76226),E=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=E.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s)){if(s.endsWith(".")||s.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[o,a,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.typescriptDefaults.setEagerModelSync(!0),s}))}}const Z=(0,r.memo)(x.ZP);const C={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const N=(0,r.memo)(c.uz);var S=n(3495).Z?function(e){let{onChange:t,code:n,path:s,autoFocus:o=!1,...a}=e;s.endsWith(".tsx")||s.endsWith(".ts")||(s+=".tsx"),function(e,t){const n=function(e){const t=(0,x.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${s}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,s]);const[i,l]=(0,r.useState)("100%"),u=(0,r.useCallback)((e=>{o&&e.focus();const t=Object.keys(a).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let s=0;const i=19*e.getModel().getLineCount()+10;n.style.height=i+"px",l(i),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;s=r.childElementCount,n.style.height=t+"px",l(i),e.layout()}),0)}))}),[]);return r.createElement(Z,{path:s,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:C,theme:"prism",onMount:u,height:i,loading:r.createElement(c.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(N,{onChange:t,code:n})},U=n(80086);function P(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,l.Z)(p.Z.tab,{[p.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},o)})))}function R(e){let{children:t}=e;return r.createElement(y.Z,{className:p.Z.tabControls},r.createElement("div",{className:p.Z.title},t),r.createElement(P,null))}function j(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),o=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:p.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,o?r.createElement(R,null,t):null)}function A(e){let{children:t,transformCode:n,groupId:a,defaultOpen:u,row:d,hidden:m,fixtures:h,includeEndpoints:g,...f}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,k=(0,o.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.Z)(p.Z.playgroundContainer,{[p.Z.row]:d,[p.Z.hidden]:m})},r.createElement(c.nu,(0,s.Z)({theme:k},f),r.createElement(T,{reverse:"top"===y,row:d,fixtures:h,includeEndpoints:g,groupId:a,defaultOpen:u},t))),r.createElement(b,null))}function T(e){let{reverse:t,children:n,row:o,fixtures:a,includeEndpoints:i,groupId:u,defaultOpen:m}=e;const h=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s,...o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s,...o}}))),[n]),[f,y]=(0,r.useReducer)(L,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),k=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{y({i:t,code:e})}))),[g.length]),[b,v]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),x=f.join("\n");return r.createElement(I,{reverse:t},r.createElement("div",null,r.createElement(j,{fixtures:!o&&a}),o&&g.length>1?r.createElement(D,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:b,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:a,code:i,collapsed:c,...u}=e;return r.createElement(r.Fragment,{key:t},!o&&n?r.createElement(M,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:b[t],title:n}):null,r.createElement("div",{key:t,className:(0,l.Z)(p.Z.playgroundEditor,{[p.Z.hidden]:b[t]})},r.createElement(S,(0,s.Z)({key:t,onChange:k[t],code:f[t],path:"/"+h+"/"+(a||n||"default.tsx")},u))))}))),r.createElement(d.Z,{fallback:r.createElement(c.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(U.Z,{key:"preview",includeEndpoints:i,groupId:u,defaultOpen:m,row:o,fixtures:a}))},r.createElement(_,{code:x,includeEndpoints:i,groupId:u,defaultOpen:m,row:o,fixtures:a})))}j.defaultProps={title:r.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},A.defaultProps={row:!1,hidden:!1};const O="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),_=(0,r.lazy)((()=>O?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function I(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function L(e,t){const n=[...e];return n[t.i]=t.code,n}function M(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(y.Z,{className:p.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(p.Z.arrow,n?p.Z.right:p.Z.down)},"\u25b6"),s)}function D(e){let{titles:t,closedList:n,onClick:s}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(y.Z,{className:(0,l.Z)({[p.Z.small]:a,[p.Z.subtabs]:a},p.Z.noupper,p.Z.tabControls)},r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,l.Z)(p.Z.tab,{[p.Z.selected]:!n[t]})},e)))))}I.defaultProps={reverse:!1};const F=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:o,row:a=!1,fixtures:i}=e;return r.createElement(A,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:a,hidden:s,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};F.defaultProps={defaultOpen:"n",fixtures:[]};var $=(0,r.memo)(F)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),s=n(67294);function o(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),s=n(86010),o=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,s.Z)(o.Z.playgroundHeader,n,a?o.Z.clickable:null),onClick:a},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(67294),s=n(11614),o=n(92785),a=n(92954),i=n(48256),l=n(3604),c=n(39714),u=n(86010),d=n(76602),m=n(63735),p=n(45440),h=n(29451),g=n(50634),f=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(g.L,{shouldExpandNode:k,data:t,valueRenderer:v,theme:o,hideRoot:!0})}function k(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function x(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,o=s?p.Z.right:p.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:p.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(p.Z.arrow,o,p.Z.vertical)},"\u25b6")),s?r.createElement(Z,null):null)}var E=(0,r.memo)(x);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);var C=n(45045);function N(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:g,setTabGroupChoices:f}=(0,d.U)(),[y,k]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,m.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&k(e)}const v=(0,r.useCallback)((e=>{b(e.currentTarget),k((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[b,t,y,f]),x=(0,r.useMemo)((()=>[new o.Z,new a.Z(i.Z)]),[]),w=!("n"===y||!s);return r.createElement(l.Z,{managers:x},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(p.Z.playgroundPreview,{[p.Z.hidden]:w})},r.createElement(C.Z,{fallback:r.createElement(U,null)},r.createElement(P,null))),r.createElement(E,{selectedValue:y,toggle:v})))}var S=(0,r.memo)(N);function U(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var R=n(62974);function j(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(R.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:p.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:o,fixtures:a})))}var A=(0,r.memo)(j)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(64820);const o={React:r,...r,...s};t.Z=o},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(70760),s=n(11857);function o(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let a=!1;try{Function()}catch(w){a=!0}class i extends Function{constructor(e,t){let n;return a?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),o(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,o=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return o.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return o(n,{...this.options,...e}),n}}class l extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function c(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const d=(e,t,n)=>{if(c(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,o)=>{const a=`${o}`,[i,l,c]=n(t.get(a),e[a]);return l||(r=!1),c&&(s=!0),t.has(a)?t.set(a,i):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,o=!1;return Object.keys(e).forEach((t=>{const[a,i,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),l&&(o=!0),i||(s=!1)})),[r,s,o]};function m(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,o){const a=this.inferSchema(e,t,n);if(!a)return e;const i=r(e,t,n,a,s,o);return this.isSingleSchema||null==i?i:{id:i,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(c(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:c(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,o){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,s,o))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,o,a)=>{const i={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,o,a);null==l?delete i[n]:i[n]=l})),i})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,s){const o={};for(const a of Object.keys(e))o[a]=r(e[a],t,n,s);return o}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=m(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function p(e,t){const n=m(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];return{[e.key(...t(...o))]:e=>{const t=h(e,n),s=new Set(t),o=h(r,n).filter((e=>!s.has(e))),a=[...t,...o];return g(e,n,a)}}}}const h=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},g=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let o=0;o<t.length-1;o++){const e=t[o];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var f=n(92586);const y={};const k={};const b=Object.prototype,v=Object.getPrototypeOf;var x=(0,s.Z)("hasBody");class E extends i{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,x)[x]&&t.length<2?{}:t[0]||{},o=(0,r.Z)(this,x)[x]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(o)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,x,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,x)[x]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,x)[x]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,f.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(k,e)||(k[e]=new Set((0,f.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),k[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&v(n)===b;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new l(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new l(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:p(this,e)})}}}}]);