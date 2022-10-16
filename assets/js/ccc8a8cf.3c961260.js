"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68884],{84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),i=n(87462),a=n(49544),s=n(86010),l=n(95999),o=n(52263),c=n(66412),d=n(84195),u=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(m,{fixture:e})))))}var h=(0,r.memo)(p);function m(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var f=n(60975),g=n(51523),y=n(1556);const v=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function b(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,s.Z)(u.Z.tab,{[u.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},a)})))}function k(e){let{children:t}=e;return r.createElement(f.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(b,null))}function E(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(d.Z),a=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:u.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:l,defaultOpen:d,row:p,hidden:h,fixtures:m,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,v=(0,c.p)();return r.createElement("div",{className:(0,s.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:h})},r.createElement(a.nu,(0,i.Z)({theme:v},g),r.createElement(Z,{reverse:"top"===y,row:p,fixtures:m,includeEndpoints:f,groupId:l,defaultOpen:d},t)))}function Z(e){let{reverse:t,children:n,row:i,fixtures:s,includeEndpoints:l,groupId:o,defaultOpen:c}=e;const d=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[u,p]=(0,r.useReducer)(A,void 0,(()=>d.map((e=>{let{code:t}=e;return t})))),h=(0,r.useMemo)((()=>d.map(((e,t)=>e=>p({i:t,code:e})))),[d.length]),[m,f]=(0,r.useState)((()=>d.map((e=>{let{collapsed:t}=e;return t})))),b=u.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!i&&s}),i&&d.length>1?r.createElement(N,{titles:d.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,d.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!i&&n?r.createElement(C,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:m[t],title:n}):null,m[t]?null:r.createElement(S,{key:t,onChange:h[t],code:u[t]}))}))),r.createElement(y.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:l,groupId:o,defaultOpen:c,row:i,fixtures:s}))},r.createElement(v,{code:b,includeEndpoints:l,groupId:o,defaultOpen:c,row:i,fixtures:s})))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function A(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const O=(0,r.memo)(a.uz);function S(e){let{onChange:t,code:n}=e;return r.createElement(O,{className:u.Z.playgroundEditor,onChange:t,code:n})}function C(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(f.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,s.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),i)}function N(e){let{titles:t,closedList:n,onClick:i}=e;const{values:a}=(0,r.useContext)(d.Z),l=a.length>0;return r.createElement(f.Z,{className:(0,s.Z)({[u.Z.small]:l,[u.Z.subtabs]:l},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,s.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}const P=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:a,row:s=!1,fixtures:l}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:s,hidden:i,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};P.defaultProps={defaultOpen:"n",fixtures:[]};var _=(0,r.memo)(P)},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),i=n(67294);function a(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),i=n(86010),a=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,i.Z)(a.Z.playgroundHeader,n,s?a.Z.clickable:null),onClick:s},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),i=n(95999),a=n(27093),s=n(26127),l=n(82038),o=n(83611),c=n(39714),d=n(86010),u=n(7094),p=n(12466),h=n(45440),m=n(32041),f=n(97723),g=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(f.L,{shouldExpandNode:v,data:t,valueRenderer:k,theme:a,hideRoot:!0})}function v(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,a=i?h.Z.right:h.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:h.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(h.Z.arrow,a,h.Z.vertical)},"\u25b6")),i?r.createElement(x,null):null)}var w=(0,r.memo)(E);function Z(){const e=(0,r.useContext)(m.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const x=(0,r.memo)(Z);var A=n(1556);function O(e){let{groupId:t,defaultOpen:n,row:i,fixtures:m}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,u.U)(),[y,v]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&v(e)}const k=(0,r.useCallback)((e=>{b(e.currentTarget),v((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[b,t,y,g]),E=(0,r.useMemo)((()=>[new o.Z,new a.Z(s.Z)]),[]),Z=!("n"===y||!i);return r.createElement(l.nq,{managers:E},r.createElement(c.Z,{fixtures:m,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(h.Z.playgroundPreview,{[h.Z.hidden]:Z})},r.createElement(A.Z,{fallback:r.createElement(C,null)},r.createElement(N,null))),r.createElement(w,{selectedValue:y,toggle:k})))}var S=(0,r.memo)(O);function C(){return r.createElement("div",null,"Loading...")}const N=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var P=n(60975);function _(e){let{groupId:t,defaultOpen:n,row:a,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:h.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:s})))}var j=(0,r.memo)(_)},79660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(27378),n(3905)),a=n(107),s=n(16187);const l={title:"Entity Validation",sidebar_label:"Validation"},o=void 0,c={unversionedId:"getting-started/validation",id:"getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/core/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665168155,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},d={},u=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(a.Z,{fixtures:[{endpoint:new s.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},'function ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id="2" />);\n'))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(a.Z,{fixtures:[{endpoint:new s.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},'function ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id="2" />);\n'))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(a.Z,{fixtures:[{endpoint:new s.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new s.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"function ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}h.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}},16187:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(70760),i=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let s=!1;try{Function()}catch(Z){s=!0}class l extends Function{constructor(e,t){let n;return s?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=this.fetch,a=this.key;return this.extend({fetch(){return i.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var o=n(92586);const c={};const d={};const u=Object.prototype,p=Object.getPrototypeOf;class h extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function m(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const f=e=>{let[t,,n]=e;return void 0!==t&&!n};const g=(e,t,n)=>{if(m(t))return function(e,t,n){let r=!0,i=!1;return[Object.keys(e).reduce(((t,a)=>{const s=`${a}`,[l,o,c]=n(t.get(s),e[s]);return o||(r=!1),c&&(i=!0),t.has(s)?t.set(s,l):t}),t),r,i]}(e,t,n);const r={...t};let i=!0,a=!1;return Object.keys(e).forEach((t=>{const[s,l,o]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=s),o&&(a=!0),l||(i=!1)})),[r,i,a]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,i,a){const s=this.inferSchema(e,t,n);if(!s)return e;const l=r(e,t,n,s,i,a);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(m(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:m(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,i,a){const s=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return s.map(((e,s)=>this.normalizeValue(e,t,n,r,i,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(f).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,i,a,s)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],o=i(t[n],t,n,r,a,s);null==o?delete l[n]:l[n]=o})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const i={};for(const a of Object.keys(e))i[a]=r(e[a],t,n);return i}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function v(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return{[e.key(...t(...a))]:e=>{const t=b(e,n),i=new Set(t),a=b(r,n).filter((e=>!i.has(e))),s=[...t,...a];return k(e,n,s)}}}}const b=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},k=(e,t,n)=>{if(0===t.length)return n;const r={...e};let i=r;for(let a=0;a<t.length-1;a++){const e=t[a];i=i[e]={...i[e]}}return i[t[t.length-1]]=n,r};var E=(0,i.Z)("hasBody");class w extends l{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(i),this.getRequestInit(a)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,o.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(d,e)||(d[e]=new Set((0,o.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),d[e]}(this.path),i={};return Object.keys(e).forEach((t=>{r.has(t)||(i[t]=e[t])})),Object.keys(i).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(i)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&p(n)===u;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new h(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:v(this,e)})}}}}]);