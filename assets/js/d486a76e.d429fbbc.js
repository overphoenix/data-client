"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17898],{99711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(27378),n(3905)),i=(n(70523),n(107)),s=n(16187);const l={title:"schema.Union"},o=void 0,c={unversionedId:"api/Union",id:"api/Union",title:"schema.Union",description:"schema.Union - Representing a Union of possible types | Rest Hooks",source:"@site/../docs/rest/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/rest/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Union.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666027293,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"schema.Union"},sidebar:"docs",previous:{title:"schema.Array",permalink:"/rest/api/Array"},next:{title:"schema.Values",permalink:"/rest/api/Values"}},u={},d=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Union - Representing a Union of possible types | Rest Hooks")),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)(i.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new s.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new RestEndpoint({\n  path: '/feed',\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx"',title:'"FeedList.tsx"'},"function FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),i=n(86010),s=n(72389),l=n(67392),o=n(7094),c=n(12466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:p,groupId:h,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,o.U)(),[w,Z]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&Z(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==w&&(N(t),Z(r),null!=h&&E(h,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:C,onClick:C},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),a=n(87462),i=n(49544),s=n(86010),l=n(95999),o=n(52263),c=n(66412),u=n(84195),d=n(45440);function m(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(h,{fixture:e})))))}var p=(0,r.memo)(m);function h(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var f=n(60975),g=n(51523),y=n(1556);const b=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function k(e){let{children:t}=e;return r.createElement(f.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:d.Z.small},"Fixtures"),r.createElement(p,{fixtures:n})):null,i?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:l,defaultOpen:u,row:m,hidden:p,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,s.Z)(d.Z.playgroundContainer,{[d.Z.row]:m,[d.Z.hidden]:p})},r.createElement(i.nu,(0,a.Z)({theme:b},g),r.createElement(Z,{reverse:"top"===y,row:m,fixtures:h,includeEndpoints:f,groupId:l,defaultOpen:u},t)))}function Z(e){let{reverse:t,children:n,row:a,fixtures:s,includeEndpoints:l,groupId:o,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,m]=(0,r.useReducer)(N,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),p=(0,r.useMemo)((()=>u.map(((e,t)=>e=>m({i:t,code:e})))),[u.length]),[h,f]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),v=d.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!a&&s}),a&&u.length>1?r.createElement(_,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:h,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(S,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:h[t],title:n}):null,h[t]?null:r.createElement(O,{key:t,onChange:p[t],code:d[t]}))}))),r.createElement(y.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:l,groupId:o,defaultOpen:c,row:a,fixtures:s}))},r.createElement(b,{code:v,includeEndpoints:l,groupId:o,defaultOpen:c,row:a,fixtures:s})))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const C=(0,r.memo)(i.uz);function O(e){let{onChange:t,code:n}=e;return r.createElement(C,{className:d.Z.playgroundEditor,onChange:t,code:n})}function S(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(f.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,s.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),a)}function _(e){let{titles:t,closedList:n,onClick:a}=e;const{values:i}=(0,r.useContext)(u.Z),l=i.length>0;return r.createElement(f.Z,{className:(0,s.Z)({[d.Z.small]:l,[d.Z.subtabs]:l},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const I=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i,row:s=!1,fixtures:l}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:s,hidden:a,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};I.defaultProps={defaultOpen:"n",fixtures:[]};var T=(0,r.memo)(I)},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),i=n(67294);function s(e){let{children:t}=e;return i.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(a.Z,{value:"ts"},t[0]),i.createElement(a.Z,{value:"js"},t[1]))}},1556:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(91262),a=n(67294);function i(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),i=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,a.Z)(i.Z.playgroundHeader,n,s?i.Z.clickable:null),onClick:s},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),a=n(95999),i=n(27093),s=n(26127),l=n(82038),o=n(83611),c=n(39714),u=n(86010),d=n(7094),m=n(12466),p=n(45440),h=n(32041),f=n(97723),g=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:i,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,i=a?p.Z.right:p.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:p.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(p.Z.arrow,i,p.Z.vertical)},"\u25b6")),a?r.createElement(x,null):null)}var w=(0,r.memo)(E);function Z(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const x=(0,r.memo)(Z);var N=n(1556);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,m.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[v,t,y,g]),E=(0,r.useMemo)((()=>[new o.Z,new i.Z(s.Z)]),[]),Z=!("n"===y||!a);return r.createElement(l.nq,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(p.Z.playgroundPreview,{[p.Z.hidden]:Z})},r.createElement(N.Z,{fallback:r.createElement(S,null)},r.createElement(_,null))),r.createElement(w,{selectedValue:y,toggle:k})))}var O=(0,r.memo)(C);function S(){return r.createElement("div",null,"Loading...")}const _=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var I=n(60975);function T(e){let{groupId:t,defaultOpen:n,row:i,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(I.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:p.Z.playgroundResult},r.createElement(O,{groupId:t,defaultOpen:n,row:i,fixtures:s})))}var A=(0,r.memo)(T)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}},16187:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(70760),a=n(11857);function i(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let s=!1;try{Function()}catch(Z){s=!0}class l extends Function{constructor(e,t){let n;return s?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),i(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.fetch,i=this.key;return this.extend({fetch(){return a.apply(null!=e?e:this,n)},key(){return i.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return i(n,{...this.options,...e}),n}}var o=n(92586);const c={};const u={};const d=Object.prototype,m=Object.getPrototypeOf;class p extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,a=!1;return[Object.keys(e).reduce(((t,i)=>{const s=`${i}`,[l,o,c]=n(t.get(s),e[s]);return o||(r=!1),c&&(a=!0),t.has(s)?t.set(s,l):t}),t),r,a]}(e,t,n);const r={...t};let a=!0,i=!1;return Object.keys(e).forEach((t=>{const[s,l,o]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=s),o&&(i=!0),l||(a=!1)})),[r,a,i]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,a,i){const s=this.inferSchema(e,t,n);if(!s)return e;const l=r(e,t,n,s,a,i);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,a,i){const s=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return s.map(((e,s)=>this.normalizeValue(e,t,n,r,a,i))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,a,i,s)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],o=a(t[n],t,n,r,i,s);null==o?delete l[n]:l[n]=o})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const a={};for(const i of Object.keys(e))a[i]=r(e[i],t,n);return a}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];return{[e.key(...t(...i))]:e=>{const t=v(e,n),a=new Set(t),i=v(r,n).filter((e=>!a.has(e))),s=[...t,...i];return k(e,n,s)}}}}const v=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},k=(e,t,n)=>{if(0===t.length)return n;const r={...e};let a=r;for(let i=0;i<t.length-1;i++){const e=t[i];a=a[e]={...a[e]}}return a[t[t.length-1]]=n,r};var E=(0,a.Z)("hasBody");class w extends l{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const a=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},i=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(a),this.getRequestInit(i)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,o.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,o.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),a={};return Object.keys(e).forEach((t=>{r.has(t)||(a[t]=e[t])})),Object.keys(a).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(a)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&m(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new p(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}}}]);