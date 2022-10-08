/*! For license information please see 4e045d26.d08a621d.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[89155],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=b.prototype=new v;k.constructor=b,h(k,g.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,l={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!N.hasOwnProperty(a)&&(l[a]=t[a]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,a,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===l?"."+_(s,0):l,E(o)?(a="",null!=e&&(a=e.replace(I,"$&/")+"/"),S(o,t,a,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(I,"$&/")+"/")+e)),t.push(o)),1;if(s=0,l=""===l?".":l+":",E(e))for(var u=0;u<e.length;u++){var c=l+_(i=e[u],u);s+=S(i,t,a,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=S(i=i.value,t,a,c=l+_(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},j={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31847:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),l=(n(70523),n(54514));const o={title:"schema.Values"},i=void 0,s={unversionedId:"api/Values",id:"api/Values",title:"schema.Values",description:"schema.Values - Representing Objects with arbitrary keys | Rest Hooks",source:"@site/../docs/rest/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/rest/api/Values",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Values.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662248478,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"schema.Values"},sidebar:"docs",previous:{title:"schema.Union",permalink:"/rest/api/Union"},next:{title:"schema.Delete",permalink:"/rest/api/Delete"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with arbitrary keys | Rest Hooks")),(0,a.kt)("p",null,"Like ",(0,a.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,a.kt)("p",null,"Describes a map whose values follow the given schema."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,a.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("em",{parentName:"li"},"optional")," (required if ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ firstThing: { id: 1 }, secondThing: { id: 2 } });\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() {\n    return `${this.id}`;\n  }\n}\nconst itemValues = new Endpoint(sampleData, {\n  schema: new schema.Values(Item),\n});\nfunction ItemPage() {\n  const items = useSuspense(itemValues, {});\n  return <pre>{JSON.stringify(items, undefined, 2)}</pre>;\n}\nrender(<ItemPage />);\n"))),(0,a.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,a.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,a.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,a.kt)("p",null,"The return values should match a key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        links: Link,\n        posts: Post,\n      },\n(input: any, parent: unknown, key: string) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:f,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[w,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==w&&(C(t),x(r),null!=f&&E(f,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$e});var r=n(67294),a=n(4391),l=n(12171),o=n(56265),i=n(78357),s=n(56855),u=n(99494),c=n(70794),d=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const y=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),g={...y,partialUpdate:y.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(y.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:y.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[y.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:y.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),b=n(49544),k=n(86010),E=n(95999),w=n(52263),x=n(72389),N=n(66412),C=n(55423),O=n(84195),I="playgroundContainer_sLUA",_="row_YGZs",S="hidden_Hh8i",T="playgroundHeader_Zx4K",Z="small_xksL",P="clickable_YHiX",j="noupper_WDCF",A="subtabs_XtJb",D="playgroundEditor_lYwu",L="arrow_tivA",F="vertical_OMeC",R="right_vs_C",U="left_iDcB",V="down_oRky",$="playgroundPreview_rk9R",M="playgroundError_sRnA",q="playgroundResult_tefG",z="debugToggle_zlro",H="tabControls_trxh",B="title_poUY",G="tabs_m54V",J="tab_bTGw",X="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(W,{fixture:e})))))}var K=(0,r.memo)(Y);function W(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,k.Z)(T,n,a?P:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),le=n(7094),oe=n(12466),ie=n(91262),se=n(32041),ue=n(97723),ce=n(92949);function de(e){let{value:t}=e;const n="dark"===(0,ce.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(ue.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:l,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?R:U;return r.createElement(r.Fragment,null,r.createElement("div",{className:z,onClick:t},"Store",r.createElement("span",{className:(0,k.Z)(L,l,F)},"\u25b6")),a?r.createElement(ve,null):null)}var ye=(0,r.memo)(he);function ge(){const e=(0,r.useContext)(se.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(de,{value:t})}const ve=(0,r.memo)(ge);function be(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:o,setTabGroupChoices:i}=(0,le.U)(),[s,u]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,oe.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&u(e)}const d=(0,r.useCallback)((e=>{c(e.currentTarget),u((e=>"y"===e?"n":"y")),i(t,"y"===s?"n":"y")}),[c,t,s,i]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===s||!a);return r.createElement(ne.nq,{managers:p},r.createElement(ae.Z,{fixtures:l,silenceMissing:!0},r.createElement("div",{className:(0,k.Z)($,{[S]:m})},r.createElement(ie.Z,{fallback:r.createElement(Ee,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(Ee,null)},r.createElement(b.i5,null),r.createElement(b.IF,{className:M}))))),r.createElement(ye,{selectedValue:s,toggle:d})))}var ke=(0,r.memo)(be);function Ee(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:q},r.createElement(ke,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}var xe=(0,r.memo)(we);function Ne(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(O.Z);return r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(J,{[X]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function Ce(e){let{children:t}=e;return r.createElement(Q,{className:H},r.createElement("div",{className:B},t),r.createElement(Ne,null))}function Oe(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(O.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:Z},"Fixtures"),r.createElement(K,{fixtures:n})):null,l?r.createElement(Ce,null,t):null)}function Ie(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:i,fixtures:s,...u}=e;const{liveCodeBlock:{playgroundPosition:c}}=(0,w.Z)().siteConfig.themeConfig,d=(0,N.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,C.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES2017,jsx:C.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,y]=(0,r.useReducer)(Se,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>f.map(((e,t)=>e=>y({i:t,code:e})))),[f.length]),[E,O]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,k.Z)(I,{[_]:o,[S]:i})},r.createElement(b.nu,(0,v.Z)({theme:d},u),r.createElement(_e,{reverse:"top"===c},r.createElement("div",null,r.createElement(Oe,{fixtures:s}),o&&f.length>1?r.createElement(Pe,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>O((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!o&&n?r.createElement(Ze,{onClick:()=>O((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:r.createElement(Te,{key:`${p}-${t}`,className:D,onChange:g[t],code:h[t]}))}))),r.createElement(b.nu,(0,v.Z)({code:h.join("\n"),transformCode:m},u),r.createElement(xe,{groupId:a,defaultOpen:l,row:o,fixtures:s})))))}function _e(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Se(e,t){const n=[...e];return n[t.i]=t.code,n}Oe.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Ie.defaultProps={row:!1,hidden:!1},_e.defaultProps={reverse:!1};const Te=(0,r.memo)(b.uz);function Ze(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(Q,{className:Z,onClick:t},r.createElement("span",{className:(0,k.Z)(L,n?R:V)},"\u25b6"),a)}function Pe(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(O.Z),o=l.length>0;return r.createElement(Q,{className:(0,k.Z)({[Z]:o,[A]:o},j,H)},r.createElement("div",{className:G,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,k.Z)(J,{[X]:!n[t]})},e)))))}var je=n(64146),Ae=n(82026);class De extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}De.schema={updatedAt:Date};const Le=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:De});const Fe={...g,getList:g.getList.extend({process:e=>e.slice(0,7)})},Re={...l,...i,...u,...s,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:Le,TimedEntity:De,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,je.Z)();return r.createElement(Ae.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:M},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},Ue={...Re,Todo:f,TodoResource:Fe,TodoEndpoint:h},Ve=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:o,row:i=!1,fixtures:s}=e;return r.createElement(Ie,{scope:n||Array.isArray(t)?Re:Ue,noInline:!0,groupId:a,defaultOpen:o,row:i,hidden:l,fixtures:s},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};Ve.defaultProps={defaultOpen:"n",fixtures:[]};var $e=(0,r.memo)(Ve)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);