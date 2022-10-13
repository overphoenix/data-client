"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47768],{91262:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(72389);function r(e){let{children:t,fallback:n}=e;return(0,s.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):n??null}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),s=n(86010),r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),r=n(86010),l=n(72389),o=n(67392),i=n(7094),u=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:g}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.U)(),[S,P]=(0,s.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==S&&y.some((t=>t.value===e))&&P(e)}const w=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==S&&(E(t),P(a),null!=h&&N(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:w,onClick:w},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,s.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return s.createElement(d,(0,a.Z)({key:String(t)},e))}},66412:(e,t,n)=>{n.d(t,{p:()=>r});var a=n(92949),s=n(86668);function r(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}},11048:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(65488),s=n(85162),r=n(67294);function l(e){let{children:t}=e;return r.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},r.createElement(s.Z,{value:"simple"},t[0]),r.createElement(s.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{var a=n(67294),s=n(72887);const r={React:a,...a,...s};t.Z=r},14239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),s=(n(67294),n(3905)),r=n(11048),l=n(56686);const o={title:"useSuspense()"},i=void 0,u={unversionedId:"api/useSuspense",id:"version-6.3/api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/versioned_docs/version-6.3/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/6.3/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/6.3/api/Snapshot"},next:{title:"useController()",permalink:"/docs/6.3/api/useController"}},p={},c=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"useSuspense() - Data fetching with Suspense")),(0,s.kt)(r.Z,{mdxType:"GenericsTabs"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,s.kt)("p",null,"Excellent for retrieving the data you need."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,s.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,s.kt)("p",null,"Cache policy is ",(0,s.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.3/getting-started/expiry-policy"},"configurable"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"On first-render",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"or parameters change"),(0,s.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,s.kt)("li",{parentName:"ul"},"or imperative ",(0,s.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")," triggered"))),(0,s.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,s.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,s.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Throws error to be ",(0,s.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,s.kt)("li",{parentName:"ul"},"While Loading:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,s.kt)("a",{parentName:"li",href:"/docs/6.3/api/Controller#invalidate"},"invalidation")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,s.kt)("h2",{id:"single"},"Single"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n}\n")),(0,s.kt)("h2",{id:"list"},"List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useSuspense(PostResource.list());\n  // posts as PostResource[]\n}\n")),(0,s.kt)("h2",{id:"sequential"},"Sequential"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.detail(), { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.detail(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,s.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,s.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPostResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  static urlRoot = 'http://test.com/post/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', lastPage: '' },\n    });\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(PaginatedPostResource.list(), { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,s.kt)(l.ZP,{mdxType:"ConditionalDependencies"}),(0,s.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,s.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"detail()"),(0,s.kt)("li",{parentName:"ul"},"list()")),(0,s.kt)("p",null,"Feel free to add your own ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," as well."))}m.isMDXComponent=!0},56686:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),s=(n(67294),n(3905)),r=n(75690);const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,s.kt)(r.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}o.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>l});var a=n(87410),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(67294),l={Prism:a.Z,theme:s};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},c=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),s=e.styles.reduce((function(e,n){var a=n.languages,s=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],s);e[t]=n})),e}),a);return s.root=n,s.plain=i({},n,{backgroundColor:null}),s};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),o(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),o(this,"getLineProps",(function(e){var n=e.key,a=e.className,s=e.style,r=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==s&&(r.style=void 0!==r.style?i({},r.style,s):s),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),o(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===s&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},o=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(o))}})),o(this,"getTokenProps",(function(e){var n=e.key,a=e.className,s=e.style,r=e.token,l=i({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(l.style=void 0!==l.style?i({},l.style,s):s),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),o(this,"tokenize",(function(e,t,n,a){var s={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,s=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],a=[0],s=[e.length],r=0,l=0,o=[],i=[o];l>-1;){for(;(r=a[l]++)<s[l];){var d=void 0,m=t[l],h=n[l][r];if("string"==typeof h?(m=l>0?m:["plain"],d=h):(m=c(m,h.type),h.alias&&(m=c(m,h.alias)),d=h.content),"string"==typeof d){var g=d.split(u),f=g.length;o.push({types:m,content:g[0]});for(var y=1;y<f;y++)p(o),i.push(o=[]),o.push({types:m,content:g[y]})}else l++,t.push(m),n.push(d),a.push(0),s.push(d.length)}l--,t.pop(),n.pop(),a.pop(),s.pop()}return p(o),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)}}]);