/*! For license information please see 83fb382e.c769a068.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[27109],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var y=b.prototype=new k;y.constructor=b,h(y,g.prototype),y.isPureReactComponent=!0;var E=Array.isArray,N=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var a,o={},s=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===o?"."+O(i,0):o,E(s)?(a="",null!=e&&(a=e.replace(T,"$&/")+"/"),P(s,t,a,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",E(e))for(var u=0;u<e.length;u++){var p=o+O(l=e[u],u);i+=P(l,t,a,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)i+=P(l=l.value,t,a,p=o+O(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function R(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},j={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),l=n(67392),i=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:f,groupId:m,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,l.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,i.U)(),[N,w]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==N&&(x(t),w(r),null!=m&&E(m,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:T,onFocus:C,onClick:C},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},18508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),o=(n(70523),n(65488)),s=n(85162);const l={title:"Controller"},i=void 0,u={unversionedId:"api/Controller",id:"api/Controller",title:"Controller",description:"Controller - Imperative Controls for Rest Hooks",source:"@site/../docs/core/api/Controller.md",sourceDirName:"api",slug:"/api/Controller",permalink:"/docs/api/Controller",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Controller.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662248478,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"Controller"},sidebar:"docs",previous:{title:"TypeScript Types",permalink:"/docs/api/types"},next:{title:"Snapshot",permalink:"/docs/api/Snapshot"}},p={},c=[{value:"fetch(endpoint, ...args)",id:"fetch",level:2},{value:"Endpoint.sideEffect",id:"endpointsideeffect",level:3},{value:"true",id:"true",level:4},{value:"undefined",id:"undefined",level:4},{value:"useFetchInit()",id:"usefetchinit",level:3},{value:"invalidate(endpoint, ...args)",id:"invalidate",level:2},{value:"resetEntireStore()",id:"resetEntireStore",level:2},{value:"receive(endpoint, ...args, response)",id:"receive",level:2},{value:"receiveError(endpoint, ...args, error)",id:"receiveError",level:2},{value:"resolve(endpoint, { args, response, fetchedAt, error })",id:"resolve",level:2},{value:"subscribe(endpoint, ...args)",id:"subscribe",level:2},{value:"unsubscribe(endpoint, ...args)",id:"unsubscribe",level:2},{value:"getResponse(endpoint, ...args, state)",id:"getResponse",level:2},{value:"data",id:"data",level:3},{value:"expiryStatus",id:"expirystatus",level:3},{value:"Valid",id:"valid",level:4},{value:"InvalidIfStale",id:"invalidifstale",level:4},{value:"Invalid",id:"invalid",level:4},{value:"expiresAt",id:"expiresat",level:3},{value:"Example",id:"example",level:3},{value:"getError(endpoint, ...args, state)",id:"getError",level:2},{value:"snapshot(state, fetchedAt)",id:"snapshot",level:2}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Controller - Imperative Controls for Rest Hooks")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Controller {\n  /*************** Action Dispatchers ***************/\n  fetch(endpoint, ...args) => ReturnType<E>;\n  invalidate(endpoint, ...args) => Promise<void>;\n  resetEntireStore: () => Promise<void>;\n  receive(endpoint, ...args, response) => Promise<void>;\n  receiveError(endpoint, ...args, error) => Promise<void>;\n  resolve(endpoint, { args, response, fetchedAt, error }) => Promise<void>;\n  subscribe(endpoint, ...args) => Promise<void>;\n  unsubscribe(endpoint, ...args) => Promise<void>;\n  /*************** Data Access ***************/\n  getResponse(endpoint, ...args, state)\u200b => { data, expiryStatus, expiresAt };\n  getError(endpoint, ...args, state)\u200b => ErrorTypes | undefined;\n  snapshot(state: State<unknown>, fetchedAt?: number): SnapshotInterface;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useController"},"useController()")," provides access in React components"),(0,a.kt)("h2",{id:"fetch"},"fetch(endpoint, ...args)"),(0,a.kt)("p",null,"Fetches the endpoint with given args, updating the Rest Hooks cache with\nthe response or error upon completion."),(0,a.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e => fetch(PostResource.create(), {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const { fetch } = useController();\n\n  return (\n    <form\n      onSubmit={e =>\n        fetch(PostResource.update(), { id }, new FormData(e.target))\n      }\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,a.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const { fetch } = useController();\n\n  const handleDelete = useCallback(\n    async e => {\n      await fetch(PostResource.delete(), { id: post.id });\n      history.push('/');\n    },\n    [fetch, id],\n  );\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={handleDelete}>X</button>\n    </div>\n  );\n}\n")))),(0,a.kt)("h3",{id:"endpointsideeffect"},"Endpoint.sideEffect"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#sideeffect"},"sideEffect")," changes the behavior"),(0,a.kt)("h4",{id:"true"},"true"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"before")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Each call will always cause a new fetch.")),(0,a.kt)("h4",{id:"undefined"},"undefined"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolves ",(0,a.kt)("em",{parentName:"li"},"after")," committing Rest Hooks cache updates."),(0,a.kt)("li",{parentName:"ul"},"Identical requests are deduplicated globally; allowing only one inflight request at a time.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To ensure a ",(0,a.kt)("em",{parentName:"li"},"new")," request is started, make sure to abort any existing inflight requests.")))),(0,a.kt)("h3",{id:"usefetchinit"},"useFetchInit()"),(0,a.kt)("p",null,"Overriding ",(0,a.kt)("a",{parentName:"p",href:"./rest/api/resource#useFetchInit"},"Resource.useFetchInit()")," makes it necessary to hoist all endpoint calls\nto the function render."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.create() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.create();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,a.kt)("h2",{id:"invalidate"},"invalidate(endpoint, ...args)"),(0,a.kt)("p",null,"Forces refetching and suspense on ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")," with the same Endpoint\nand parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const { invalidate } = useController();\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidate(ArticleResource.detail(), { id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To refresh while continuing to display stale data - ",(0,a.kt)("a",{parentName:"p",href:"#fetch"},"Controller.fetch")," instead.")),(0,a.kt)("admonition",{title:"Invalidate many endpoints at once",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"schema.Delete")," to invalidate every endpoint that contains a given entity.")),(0,a.kt)("h2",{id:"resetEntireStore"},"resetEntireStore()"),(0,a.kt)("p",null,"Resets the entire Rest Hooks cache. All inflight requests will not resolve."),(0,a.kt)("p",null,"This is typically used when logging out or changing authenticated users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const USER_NUMBER_ONE: string = "1111";\n\nfunction UserName() {\n  const user = useSuspense(CurrentUserResource.detail(), { });\n  const { resetEntireStore } = useController();\n\n  const becomeAdmin = useCallback(() => {\n    // Changes the current user\n    impersonateUser(USER_NUMBER_ONE);\n    // highlight-next-line\n    resetEntireStore();\n  }, []);\n  return (\n    <div>\n      <h1>{user.name}<h1>\n      <button onClick={becomeAdmin}>Be Number One</button>\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"receive"},"receive(endpoint, ...args, response)"),(0,a.kt)("p",null,"Stores ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache for given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args."),(0,a.kt)("p",null,"Any components suspending for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args will resolve."),(0,a.kt)("p",null,"If data already exists for the given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args, it will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { receive } = useController();\n\nuseEffect(() => {\n  const websocket = new Websocket(url);\n\n  websocket.onmessage = event =>\n    receive(EndpointLookup[event.endpoint], ...event.args, event.data);\n\n  return () => websocket.close();\n});\n")),(0,a.kt)("h2",{id:"receiveError"},"receiveError(endpoint, ...args, error)"),(0,a.kt)("p",null,"Stores the result of ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," and args as the error provided."),(0,a.kt)("h2",{id:"resolve"},"resolve(endpoint, { args, response, fetchedAt, error })"),(0,a.kt)("p",null,"Resolves a specific fetch, storing the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," in cache."),(0,a.kt)("p",null,"This is similar to receive, except it triggers resolution of an inflight fetch.\nThis means the corresponding optimistic update will no longer be applies."),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/NetworkManager"},"NetworkManager"),", and should be used when\nprocessing fetch requests."),(0,a.kt)("h2",{id:"subscribe"},"subscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks a new subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should increment the subscription."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription")," calls this on mount."),(0,a.kt)("p",null,"This might be useful for custom hooks to sub/unsub based on other factors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const controller = useController();\nconst key = endpoint.key(...args);\n\nuseEffect(() => {\n  controller.subscribe(endpoint, ...args);\n  return () => controller.unsubscribe(endpoint, ...args);\n}, [controller, key]);\n")),(0,a.kt)("h2",{id:"unsubscribe"},"unsubscribe(endpoint, ...args)"),(0,a.kt)("p",null,"Marks completion of subscription to a given ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),". This should\ndecrement the subscription and if the count reaches 0, more updates won't be received automatically."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription")," calls this on unmount."),(0,a.kt)("h2",{id:"getResponse"},"getResponse(endpoint, ...args, state)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="returns"',title:'"returns"'},"{\n  data: DenormalizeNullable<E['schema']>;\n  expiryStatus: ExpiryStatus;\n  expiresAt: number;\n}\n")),(0,a.kt)("p",null,"Gets the (globally referentially stable) response for a given endpoint/args pair from state given."),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"The denormalize response data. Guarantees global referential stability for all members."),(0,a.kt)("h3",{id:"expirystatus"},"expiryStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ExpiryStatus {\n  Invalid = 1,\n  InvalidIfStale,\n  Valid,\n}\n")),(0,a.kt)("h4",{id:"valid"},"Valid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will never suspend."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalidifstale"},"InvalidIfStale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will suspend if data is stale."),(0,a.kt)("li",{parentName:"ul"},"Might fetch if data is stale")),(0,a.kt)("h4",{id:"invalid"},"Invalid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Will always suspend"),(0,a.kt)("li",{parentName:"ul"},"Will always fetch")),(0,a.kt)("h3",{id:"expiresat"},"expiresAt"),(0,a.kt)("p",null,"A number representing time when it expires. Compare to Date.now()."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"This is used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"useCache"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")," and can be used in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Managers")," to lookup a response with the state provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useCache.ts"',title:'"useCache.ts"'},"import {\n  useController,\n  StateContext,\n  EndpointInterface,\n} from '@rest-hooks/core';\n\n/** Oversimplified useCache */\nfunction useCache<E extends EntityInterface>(\n  endpoint: E,\n  ...args: readonly [...Parameters<E>]\n) {\n  const state = useContext(StateContext);\n  const controller = useController();\n  return controller.getResponse(endpoint, ...args, state).data;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyManager.ts"',title:'"MyManager.ts"'},"import type { Manager, Middleware, actionTypes } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class MyManager implements Manager {\n  protected declare middleware: Middleware;\n  constructor() {\n    this.middleware = ({ controller, getState }) => {\n      return next => async action => {\n        if (action.type === actionTypes.FETCH_TYPE) {\n          console.log('The existing response of the requested fetch');\n          console.log(\n            controller.getResponse(\n              action.endpoint,\n              ...(action.meta.args as Parameters<typeof action.endpoint>),\n              getState(),\n            ).data,\n          );\n        }\n        next(action);\n      };\n    };\n  }\n\n  cleanup() {\n    this.websocket.close();\n  }\n\n  getMiddleware<T extends StreamManager>(this: T) {\n    return this.middleware;\n  }\n}\n")),(0,a.kt)("h2",{id:"getError"},"getError(endpoint, ...args, state)"),(0,a.kt)("p",null,"Gets the error, if any, for a given endpoint. Returns undefined for no errors."),(0,a.kt)("h2",{id:"snapshot"},"snapshot(state, fetchedAt)"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Snapshot"},"Snapshot"),"."))}f.isMDXComponent=!0}}]);