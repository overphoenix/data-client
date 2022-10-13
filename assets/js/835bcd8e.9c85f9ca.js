"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=(n(65488),n(85162),n(70523),n(107));const i={title:"schema.Array"},o=void 0,s={unversionedId:"api/Array",id:"version-5.0/api/Array",title:"schema.Array",description:"schema.Array - Representing Arrays | Rest Hooks",source:"@site/rest_versioned_docs/version-5.0/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/rest/5.0/api/Array",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Array.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"schema.Array"},sidebar:"docs",previous:{title:"schema.Object",permalink:"/rest/5.0/api/Object"},next:{title:"schema.Union",permalink:"/rest/5.0/api/Union"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Array - Representing Arrays | Rest Hooks")),(0,a.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," instead of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"'s values."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,a.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("em",{parentName:"li"},"optional")," (required if ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,a.kt)("em",{parentName:"li"}," ",(0,a.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,a.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n  { id: '123', name: 'Jim' },\n  { id: '456', name: 'Jane' },\n]);\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(User),\n  ,\n});\nfunction UsersPage() {\n  const users = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,a.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,a.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,a.kt)("p",null,"The return values should match a key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Array(\n      {\n        links: Link,\n        posts: Post,\n      },\n      (input, parent, key) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:f,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[Z,w]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==Z&&g.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==Z&&(x(t),w(r),null!=f&&E(f,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},y)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":Z===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),a=n(87462),l=n(49544),i=n(86010),o=n(95999),s=n(52263),u=n(72389),c=n(66412),d=n(91262),p=n(84195),m=n(45440);function f(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(h,{fixture:e})))))}var y=(0,r.memo)(f);function h(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g=n(60975),v=n(51523);const b=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function k(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(p.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function E(e){let{children:t}=e;return r.createElement(g.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(k,null))}function Z(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(p.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:m.Z.small},"Fixtures"),r.createElement(y,{fixtures:n})):null,l?r.createElement(E,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:o,defaultOpen:p,row:f,hidden:y,fixtures:h,includeEndpoints:g,...k}=e;const{liveCodeBlock:{playgroundPosition:E}}=(0,s.Z)().siteConfig.themeConfig,w=(0,c.p)(),P=(0,u.Z)(),T=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[A,_]=(0,r.useReducer)(x,void 0,(()=>T.map((e=>{let{code:t}=e;return t})))),j=(0,r.useMemo)((()=>T.map(((e,t)=>e=>_({i:t,code:e})))),[T.length]),[S,L]=(0,r.useState)((()=>T.map((e=>{let{collapsed:t}=e;return t})))),D=A.join("\n");return r.createElement("div",{className:(0,i.Z)(m.Z.playgroundContainer,{[m.Z.row]:f,[m.Z.hidden]:y})},r.createElement(l.nu,(0,a.Z)({theme:w},k),r.createElement(N,{reverse:"top"===E},r.createElement("div",null,r.createElement(Z,{fixtures:!f&&h}),f&&T.length>1?r.createElement(O,{titles:T.map((e=>{let{title:t}=e;return t})),closedList:S,onClick:e=>L((t=>t.map(((t,n)=>n!==e))))}):null,T.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!f&&n?r.createElement(I,{onClick:()=>L((e=>{const n=[...e];return n[t]=!n[t],n})),closed:S[t],title:n}):null,S[t]?null:r.createElement(C,{key:`${P}-${t}`,className:m.Z.playgroundEditor,onChange:j[t],code:A[t]}))}))),r.createElement(d.Z,{fallback:r.createElement(l.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(v.Z,{includeEndpoints:g,groupId:o,defaultOpen:p,row:f,fixtures:h}))},(()=>r.createElement(r.Suspense,{fallback:r.createElement(l.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(v.Z,{includeEndpoints:g,groupId:o,defaultOpen:p,row:f,fixtures:h}))},r.createElement(b,{code:D,includeEndpoints:g,groupId:o,defaultOpen:p,row:f,fixtures:h})))))))}function N(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function x(e,t){const n=[...e];return n[t.i]=t.code,n}Z.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},N.defaultProps={reverse:!1};const C=(0,r.memo)(l.uz);function I(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(g.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),a)}function O(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(p.Z),o=l.length>0;return r.createElement(g.Z,{className:(0,i.Z)({[m.Z.small]:o,[m.Z.subtabs]:o},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}const P=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:i=!1,fixtures:o}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:i,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};P.defaultProps={defaultOpen:"n",fixtures:[]};var T=(0,r.memo)(P)},70523:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(65488),a=n(85162),l=n(67294);function i(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},60975:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),l=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,i?l.Z.clickable:null),onClick:i},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),a=n(95999),l=n(27093),i=n(26127),o=n(82038),s=n(83611),u=n(39714),c=n(49544),d=n(86010),p=n(7094),m=n(12466),f=n(91262),y=n(45440),h=n(32041),g=n(97723),v=n(92949);function b(e){let{value:t}=e;const n="dark"===(0,v.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(g.L,{shouldExpandNode:k,data:t,valueRenderer:Z,theme:l,hideRoot:!0})}function k(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const E="undefined"!=typeof Intl;function Z(e,t){const n=arguments.length<=2?void 0:arguments[2];return E&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function w(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?y.Z.right:y.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:y.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(y.Z.arrow,l,y.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var N=(0,r.memo)(w);function x(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(b,{value:t})}const C=(0,r.memo)(x);function I(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:g,setTabGroupChoices:v}=(0,p.U)(),[b,k]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:E}=(0,m.o5)();if(null!=t){const e=g[t];null!=e&&e!==b&&k(e)}const Z=(0,r.useCallback)((e=>{E(e.currentTarget),k((e=>"y"===e?"n":"y")),v(t,"y"===b?"n":"y")}),[E,t,b,v]),w=(0,r.useMemo)((()=>[new s.Z,new l.Z(i.Z)]),[]),x=!("n"===b||!a);return r.createElement(o.nq,{managers:w},r.createElement(u.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(y.Z.playgroundPreview,{[y.Z.hidden]:x})},r.createElement(f.Z,{fallback:r.createElement(P,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(P,null)},r.createElement(c.i5,null),r.createElement(c.IF,{className:y.Z.playgroundError}))))),r.createElement(N,{selectedValue:b,toggle:Z})))}var O=(0,r.memo)(I);function P(){return r.createElement("div",null,"Loading...")}var T=n(60975);function A(e){let{groupId:t,defaultOpen:n,row:l,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(T.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:y.Z.playgroundResult},r.createElement(O,{groupId:t,defaultOpen:n,row:l,fixtures:i})))}var _=(0,r.memo)(A)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);