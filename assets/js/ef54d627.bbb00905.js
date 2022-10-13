/*! For license information please see ef54d627.bbb00905.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18294],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function k(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var b=v.prototype=new k;b.constructor=v,h(b,g.prototype),b.isPureReactComponent=!0;var N=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,a){var r,o={},s=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:w.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return s=s(i=e),e=""===o?"."+x(i,0):o,N(s)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),R(s,t,r,"",(function(e){return e}))):null!=s&&(T(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",N(e))for(var u=0;u<e.length;u++){var p=o+x(l=e[u],u);i+=R(l,t,r,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)i+=R(l=l.value,t,r,p=o+x(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function j(e,t,n){if(null==e)return e;var a=[],r=0;return R(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},O={transition:null}},27378:(e,t,n)=>{n(41535)},91262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(72389);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):n??null}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),l=n(67392),i=n(7094),u=n(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:f,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.U)(),[S,w]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=m){const e=b[m];null!=e&&e!==S&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=g[n].value;a!==S&&(E(t),w(a),null!=m&&N(m,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>P.push(e),onKeyDown:_,onFocus:T,onClick:T},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function f(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},66412:(e,t,n)=>{n.d(t,{p:()=>o});var a=n(92949),r=n(86668);function o(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{var a=n(67294),r=n(72887);const o={React:a,...a,...r};t.Z=o},21918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(27378),n(3905)),o=n(11048),s=n(85761);const l={title:"useSuspense()"},i=void 0,u={unversionedId:"api/useSuspense",id:"api/useSuspense",title:"useSuspense()",description:"useSuspense() - Data fetching with Suspense",source:"@site/../docs/core/api/useSuspense.md",sourceDirName:"api",slug:"/api/useSuspense",permalink:"/docs/api/useSuspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSuspense.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{title:"useSuspense()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/api/Snapshot"},next:{title:"useController()",permalink:"/docs/api/useController"}},p={},c=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Paginated data",id:"paginated-data",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useSuspense() - Data fetching with Suspense")),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSuspense<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,r.kt)("p",null,"Excellent for guaranteed data rendering."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSuspense()")," ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/data-dependency#async-fallbacks"},"suspends")," rendering until the data is available. This is much like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),"ing an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async")," function. That is to say, the lines after the function won't be run until resolution (data is available)."),(0,r.kt)("p",null,"Cache policy is ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy"},"configurable"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On first-render",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or parameters change"),(0,r.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,r.kt)("li",{parentName:"ul"},"or imperative ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/Controller#invalidate"},"invalidation")," triggered"))),(0,r.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,r.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,r.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throws error to be ",(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,r.kt)("li",{parentName:"ul"},"While Loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"except in case of delete or ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/Controller#invalidate"},"invalidation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"Suspend rendering")," otherwise")))),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useSuspense(PostResource.get, { id });\n  // post as PostResource\n}\n")),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useSuspense(PostResource.getList);\n  // posts as PostResource[]\n}\n")),(0,r.kt)("h2",{id:"sequential"},"Sequential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useSuspense(PostResource.get, { id });\n  // post as PostResource\n  const author = useSuspense(UserResource.get, {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,r.kt)("h2",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPost extends Entity {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() { return this.id }\n}\n\nexport const getPosts = new RestEndpoint({\n  path: '/post\\\\?page=:page',\n  schema: { results: [PaginatedPost], nextPage: '', lastPage: '' },\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const {\n    results: posts,\n    nextPage,\n    lastPage,\n  } = useSuspense(getPosts, { page });\n  // posts as PaginatedPostResource[]\n}\n")),(0,r.kt)(s.ZP,{mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/createResource#get"},"get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/createResource#getlist"},"getList"))),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," as well."))}f.isMDXComponent=!0},85761:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(27378),n(3905)),o=n(75690);const s={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}l.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>m,lG:()=>s});var a=n(87410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(67294),s={Prism:a.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},c=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=a[s]++)<r[s];){var d=void 0,f=t[s],m=n[s][o];if("string"==typeof m?(f=s>0?f:["plain"],d=m):(f=c(f,m.type),m.alias&&(f=c(f,m.alias)),d=m.content),"string"==typeof d){var h=d.split(u),y=h.length;l.push({types:f,content:h[0]});for(var g=1;g<y;g++)p(l),i.push(l=[]),l.push({types:f,content:h[g]})}else s++,t.push(f),n.push(d),a.push(0),r.push(d.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return p(l),i}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)}}]);