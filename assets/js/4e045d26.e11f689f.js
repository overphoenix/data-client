(self.webpackChunk=self.webpackChunk||[]).push([[89155],{66640:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),a=(n(47885),n(39141)),i=n(26008);const o={title:"schema.Values"},l=void 0,c={unversionedId:"api/Values",id:"api/Values",title:"schema.Values",description:"schema.Values - Representing Objects with arbitrary keys | Rest Hooks",source:"@site/../docs/rest/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/rest/api/Values",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Values.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666916976,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"schema.Values"},sidebar:"docs",previous:{title:"schema.Union",permalink:"/rest/api/Union"},next:{title:"schema.Delete",permalink:"/rest/api/Delete"}},u={},d=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"schema.Values - Representing Objects with arbitrary keys | Rest Hooks")),(0,s.kt)("p",null,"Like ",(0,s.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,s.kt)("p",null,"Describes a map whose values follow the given schema."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,s.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,s.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,s.kt)("em",{parentName:"li"},"optional")," (required if ",(0,s.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,s.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,s.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,s.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/items"}),args:[],response:{firstThing:{id:1},secondThing:{id:2}},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ItemPage.tsx"',title:'"ItemPage.tsx"'},"export class Item extends Entity {\n  readonly id: number = 0;\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const getItems = new RestEndpoint({\n  path: '/items',\n  schema: new schema.Values(Item),\n});\nfunction ItemPage() {\n  const items = useSuspense(getItems);\n  return <pre>{JSON.stringify(items, undefined, 2)}</pre>;\n}\nrender(<ItemPage />);\n"))),(0,s.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,s.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,s.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,s.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.Values(\n    {\n      link: Link,\n      post: Post,\n    },\n    'type',\n  ),\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) => (\n        <div key={item.pk()}>\n          {key}:{' '}\n          {item.type === 'link' ? (\n            <LinkItem link={item} />\n          ) : (\n            <PostItem post={item} />\n          )}\n        </div>\n      ))}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <span>{post.content}</span>;\n}\nrender(<FeedList />);\n"))),(0,s.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,s.kt)("p",null,"The return values should match a key in the ",(0,s.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.Values(\n    {\n      links: Link,\n      posts: Post,\n    },\n    (input: Link | Post, parent: unknown, key: string) => `${input.type}s`,\n  ),\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) => (\n        <div key={item.pk()}>\n          {key}:{' '}\n          {item.type === 'link' ? (\n            <LinkItem link={item} />\n          ) : (\n            <PostItem post={item} />\n          )}\n        </div>\n      ))}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <span>{post.content}</span>;\n}\nrender(<FeedList />);\n"))))}m.isMDXComponent=!0},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,i),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),s=n(67294),a=n(86010),i=n(5730),o=n(20636),l=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:h,className:f}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,l.U)(),[x,w]=(0,s.useState)(k),Z=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=Z.indexOf(t),r=y[n].value;r!==x&&(N(t),w(r),null!=h&&E(h,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;n=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;n=Z[t]??Z[Z.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},f)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>Z.push(e),onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,s.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return s.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},39141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var r=n(67294),s=n(87462),a=n(49544),i=n(86010),o=n(11614),l=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var h=(0,r.memo)(m);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var g=n(62974),y=n(80086),b=n(45045),k=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s))return s.endsWith(".")||s.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[a,i,o,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;"),s.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${i} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.javascriptDefaults.setEagerModelSync(!0),s}))}}const x=(0,r.memo)(k.ZP);const w={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1},Z=(0,r.memo)(a.uz);var N,C="undefined"==typeof window||/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)?function(e){let{onChange:t,code:n,path:s}=e;return r.createElement(Z,{onChange:t,code:n})}:function(e){let{onChange:t,code:n,path:s}=e;s.endsWith(".tsx")||s.endsWith(".ts")||(s+=".tsx");const[a,i]=(0,r.useState)(50),o=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const s=19*e.getModel().getLineCount()+10;t.style.height=s+"px",i(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const a=19*n.childElementCount+10;r=n.childElementCount,t.style.height=a+"px",i(s),e.layout()}),0)}))}),[]);return r.createElement(x,{path:s,defaultLanguage:"typescript",onChange:t,value:n,options:w,theme:"prism",onMount:o,height:a})};function I(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},a)})))}function S(e){let{children:t}=e;return r.createElement(g.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(I,null))}function O(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),a=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(S,null,t):null)}function _(e){let{children:t,transformCode:n,groupId:o,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,i.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,s.Z)({theme:b},g),r.createElement(L,{reverse:"top"===y,row:p,fixtures:h,includeEndpoints:f,groupId:o,defaultOpen:u},t)))}function L(e){let{reverse:t,children:n,row:s,fixtures:o,includeEndpoints:l,groupId:c,defaultOpen:u}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s}}))),[n]),[h,f]=(0,r.useReducer)(A,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>m.map(((e,t)=>e=>f({i:t,code:e})))),[m.length]),[k,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=h.join("\n");return r.createElement(j,{reverse:t},r.createElement("div",null,r.createElement(O,{fixtures:!s&&o}),s&&m.length>1?r.createElement(D,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:a}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(F,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,i.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:k[t]})},r.createElement(C,{key:t,onChange:g[t],code:h[t],path:"/"+p+"/"+(a||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:o}))},r.createElement(T,{code:E,includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:o})))}O.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},_.defaultProps={row:!1,hidden:!1};const P="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(N=navigator)?void 0:N.userAgent),T=(0,r.lazy)((()=>P?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,37097))));function j(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function A(e,t){const n=[...e];return n[t.i]=t.code,n}function F(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(g.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function D(e){let{titles:t,closedList:n,onClick:s}=e;const{values:a}=(0,r.useContext)(u.Z),o=a.length>0;return r.createElement(g.Z,{className:(0,i.Z)({[d.Z.small]:o,[d.Z.subtabs]:o},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,i.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}j.defaultProps={reverse:!1};const R=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:i=!1,fixtures:o}=e;return r.createElement(_,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:i,hidden:s,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};R.defaultProps={defaultOpen:"n",fixtures:[]};var V=(0,r.memo)(R)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(65559),s=n(30433),a=n(67294);function i(e){let{children:t}=e;return a.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(s.Z,{value:"ts"},t[0]),a.createElement(s.Z,{value:"js"},t[1]))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(86010),a=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,i?a.Z.clickable:null),onClick:i},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(67294),s=n(11614),a=n(27093),i=n(26127),o=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),h=n(32041),f=n(97723),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,a=s?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),s?r.createElement(Z,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);var N=n(45045);function C(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),E=(0,r.useMemo)((()=>[new l.Z,new a.Z(i.Z)]),[]),w=!("n"===y||!s);return r.createElement(o.nq,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(N.Z,{fallback:r.createElement(S,null)},r.createElement(O,null))),r.createElement(x,{selectedValue:y,toggle:v})))}var I=(0,r.memo)(C);function S(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var _=n(62974);function L(e){let{groupId:t,defaultOpen:n,row:a,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(_.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(I,{groupId:t,defaultOpen:n,row:a,fixtures:i})))}var P=(0,r.memo)(L)},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(72887);const a={React:r,...r,...s};t.Z=a},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},26008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let i=!1;try{Function()}catch(w){i=!0}class o extends Function{constructor(e,t){let n;return i?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var l=n(92586);const c={};const u={};const d=Object.prototype,p=Object.getPrototypeOf;class m extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const i=`${a}`,[o,l,c]=n(t.get(i),e[i]);return l||(r=!1),c&&(s=!0),t.has(i)?t.set(i,o):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[i,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=i),l&&(a=!0),o||(s=!1)})),[r,s,a]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const i=this.inferSchema(e,t,n);if(!i)return e;const o=r(e,t,n,i,s,a);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const i=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return i.map(((e,i)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,i)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,a,i);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];return{[e.key(...t(...a))]:e=>{const t=k(e,n),s=new Set(t),a=k(r,n).filter((e=>!s.has(e))),i=[...t,...a];return v(e,n,i)}}}}const k=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},v=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var E=(0,s.Z)("hasBody");class x extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&p(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new m(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}}}]);