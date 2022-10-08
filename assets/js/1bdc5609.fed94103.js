/*! For license information please see 1bdc5609.fed94103.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95532],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=b.prototype=new k;v.constructor=b,h(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,E={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var r,o={},l=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)N.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=a;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];o.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:n,type:e,key:l,ref:s,props:o,_owner:E.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case a:u=!0}}if(u)return l=l(u=e),e=""===o?"."+S(u,0):o,w(l)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),R(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(x,"$&/")+"/")+e)),t.push(l)),1;if(u=0,o=""===o?".":o+":",w(e))for(var i=0;i<e.length;i++){var c=o+S(s=e[i],i);u+=R(s,t,r,c,l)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),i=0;!(s=e.next()).done;)u+=R(s=s.value,t,r,c=o+S(s,i++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,n){if(null==e)return e;var a=[],r=0;return R(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},$={transition:null}},27378:(e,t,n)=>{n(41535)},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),s=n(67392),u=n(7094),i=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:f,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,u.U)(),[N,E]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:_}=(0,i.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==N&&(_(t),E(a),null!=m&&w(m,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(65488),r=n(85162),o=n(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{var a=n(67294),r=n(72887);const o={React:a,...a,...r};t.Z=o},10723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(27378),n(3905)),o=n(11048),l=n(85761);const s={title:"useCache()"},u=void 0,i={unversionedId:"api/useCache",id:"api/useCache",title:"useCache()",description:"useCache() - Accessing Rest Hooks data without fetching",source:"@site/../docs/core/api/useCache.md",sourceDirName:"api",slug:"/api/useCache",permalink:"/docs/api/useCache",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useCache.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665168155,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"useCache()"},sidebar:"docs",previous:{title:"useController()",permalink:"/docs/api/useController"},next:{title:"useSubscription()",permalink:"/docs/api/useSubscription"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Using a type guard to deal with null",id:"using-a-type-guard-to-deal-with-null",level:3},{value:"Paginated data",id:"paginated-data",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useCache() - Accessing Rest Hooks data without fetching")),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCache(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema> | null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCache<\n  E extends Pick<\n    EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n    'key' | 'schema' | 'invalidIfStale'\n  >,\n  Args extends readonly [...Parameters<E['key']>] | readonly [null],\n>(endpoint: E, ...args: Args): DenormalizeNullable<E['schema']>;\n"))),(0,r.kt)("p",null,"Excellent to use data in the normalized cache without fetching."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},"null otherwise"))),(0,r.kt)("li",{parentName:"ul"},"While loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},"null otherwise")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"using-a-type-guard-to-deal-with-null"},"Using a type guard to deal with null"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useCache(PostResource.get, { id });\n  // post as PostResource | null\n  if (!post) return null;\n  // post as PostResource (typeguarded)\n  // ...render stuff here\n}\n")),(0,r.kt)("h3",{id:"paginated-data"},"Paginated data"),(0,r.kt)("p",null,"When entities are stored in nested structures, that structure will remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class PaginatedPost extends Entity {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n\nexport const getPosts = new RestEndpoint({\n  path: '/post\\\\?page=:page',\n  schema: { results: [PaginatedPost], nextPage: '', lastPage: '' },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleList({ page }: { page: string }) {\n  const { results: posts, nextPage, lastPage } = useCache(getPosts, { page });\n  // posts as PaginatedPost[] | null\n  if (!posts) return null;\n  // posts as PaginatedPost[] (typeguarded)\n  // ...render stuff here\n}\n")),(0,r.kt)(l.ZP,{hook:"useCache",mdxType:"ConditionalDependencies"}),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/createResource#get"},"get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/api/createResource#getlist"},"getList"))),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," as well."))}f.isMDXComponent=!0},85761:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(27378),n(3905)),o=n(75690);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}s.isMDXComponent=!0}}]);