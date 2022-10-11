/*! For license information please see ab00e35b.0d0a9c1a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[30554],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=b.prototype=new v;k.constructor=b,h(k,y.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,l={},s=null,o=null;if(null!=t)for(a in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,a)&&!N.hasOwnProperty(a)&&(l[a]=t[a]);var i=arguments.length-2;if(1===i)l.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===l[a]&&(l[a]=i[a]);return{$$typeof:n,type:e,key:s,ref:o,props:l,_owner:x.current}}function Z(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function U(e,t,a,l,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===l?"."+C(i,0):l,E(s)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),U(s,t,a,"",(function(e){return e}))):null!=s&&(Z(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),t.push(s)),1;if(i=0,l=""===l?".":l+":",E(e))for(var u=0;u<e.length;u++){var c=l+C(o=e[u],u);i+=U(o,t,a,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)i+=U(o=o.value,t,a,c=l+C(o,u++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function T(e,t,n){if(null==e)return e;var r=[],a=0;return U(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},30402:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var r=n(87462),a=(n(27378),n(3905)),l=n(70523),s=n(65488),o=n(85162),i=n(96497),u=n(54514);const c={id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},p=void 0,d={unversionedId:"README",id:"README",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/../docs/graphql/README.md",sourceDirName:".",slug:"/",permalink:"/graphql/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Authentication",permalink:"/graphql/auth"}},m={},f=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],h={toc:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/api/Entity"},"Entity"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using GQLEntities is not required, but is important to achieve data consistency.")),(0,a.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,a.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"/graphql/api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"/graphql/api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"SWAPI Demo")),(0,a.kt)(u.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,a.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,a.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,a.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}g.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),s=n(72389),o=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,i.U)(),[w,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==w&&(S(t),x(r),null!=f&&E(f,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:_,onFocus:Z,onClick:Z},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Oe});var r=n(67294),a=n(4391),l=n(12171),s=n(56265),o=n(78357),i=n(56855),u=n(62451),c=n(70794),p=n(86429),d=n(67288);class m extends s.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends p.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=p.Z}=e;const a=(0,d.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),b=n(49544),k=n(86010),E=n(95999),w=n(52263),x=n(72389),N=n(66412),S=n(55423),Z=n(84195),_="playgroundContainer_sLUA",C="row_YGZs",U="hidden_Hh8i",T="playgroundHeader_Zx4K",q="small_xksL",A="clickable_YHiX",R="noupper_WDCF",I="subtabs_XtJb",L="playgroundEditor_lYwu",D="arrow_tivA",P="vertical_OMeC",F="right_vs_C",$="left_iDcB",G="down_oRky",O="playgroundPreview_rk9R",M="playgroundError_sRnA",j="playgroundResult_tefG",Q="debugToggle_zlro",V="tabControls_trxh",z="title_poUY",B="tabs_m54V",H="tab_bTGw",Y="selected_QXZk";function J(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(X,{fixture:e})))))}var W=(0,r.memo)(J);function X(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function K(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,k.Z)(T,n,a?A:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),le=n(7094),se=n(12466),oe=n(91262),ie=n(32041),ue=n(97723),ce=n(92949);function pe(e){let{value:t}=e;const n="dark"===(0,ce.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(ue.L,{shouldExpandNode:de,data:t,valueRenderer:fe,theme:l,hideRoot:!0})}function de(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?F:$;return r.createElement(r.Fragment,null,r.createElement("div",{className:Q,onClick:t},"Store",r.createElement("span",{className:(0,k.Z)(D,l,P)},"\u25b6")),a?r.createElement(ve,null):null)}var ge=(0,r.memo)(he);function ye(){const e=(0,r.useContext)(ie.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(pe,{value:t})}const ve=(0,r.memo)(ye);function be(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:s,setTabGroupChoices:o}=(0,le.U)(),[i,u]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:c}=(0,se.o5)();if(null!=t){const e=s[t];null!=e&&e!==i&&u(e)}const p=(0,r.useCallback)((e=>{c(e.currentTarget),u((e=>"y"===e?"n":"y")),o(t,"y"===i?"n":"y")}),[c,t,i,o]),d=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===i||!a);return r.createElement(ne.nq,{managers:d},r.createElement(ae.Z,{fixtures:l,silenceMissing:!0},r.createElement("div",{className:(0,k.Z)(O,{[U]:m})},r.createElement(oe.Z,{fallback:r.createElement(Ee,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(Ee,null)},r.createElement(b.i5,null),r.createElement(b.IF,{className:M}))))),r.createElement(ge,{selectedValue:i,toggle:p})))}var ke=(0,r.memo)(be);function Ee(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(K,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:j},r.createElement(ke,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}var xe=(0,r.memo)(we);function Ne(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(Z.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(H,{[Y]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function Se(e){let{children:t}=e;return r.createElement(K,{className:V},r.createElement("div",{className:z},t),r.createElement(Ne,null))}function Ze(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(Z.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(K,{className:q},"Fixtures"),r.createElement(W,{fixtures:n})):null,l?r.createElement(Se,null,t):null)}function _e(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:s,hidden:o,fixtures:i,...u}=e;const{liveCodeBlock:{playgroundPosition:c}}=(0,w.Z)().siteConfig.themeConfig,p=(0,N.p)(),d=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,S.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:S.ModuleKind.ESNext,target:S.ScriptTarget.ES2017,jsx:S.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,g]=(0,r.useReducer)(Ue,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[E,Z]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,k.Z)(_,{[C]:s,[U]:o})},r.createElement(b.nu,(0,v.Z)({theme:p},u),r.createElement(Ce,{reverse:"top"===c},r.createElement("div",null,r.createElement(Ze,{fixtures:!s&&i}),s&&f.length>1?r.createElement(Ae,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>Z((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(qe,{onClick:()=>Z((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:r.createElement(Te,{key:`${d}-${t}`,className:L,onChange:y[t],code:h[t]}))}))),r.createElement(b.nu,(0,v.Z)({code:h.join("\n"),transformCode:m},u),r.createElement(xe,{groupId:a,defaultOpen:l,row:s,fixtures:i})))))}function Ce(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ue(e,t){const n=[...e];return n[t.i]=t.code,n}Ze.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},_e.defaultProps={row:!1,hidden:!1},Ce.defaultProps={reverse:!1};const Te=(0,r.memo)(b.uz);function qe(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(K,{className:q,onClick:t},r.createElement("span",{className:(0,k.Z)(D,n?F:G)},"\u25b6"),a)}function Ae(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(Z.Z),s=l.length>0;return r.createElement(K,{className:(0,k.Z)({[q]:s,[I]:s},R,V)},r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,k.Z)(H,{[Y]:!n[t]})},e)))))}var Re=n(64146),Ie=n(82026);class Le extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Le.schema={updatedAt:Date};const De=new a.Z((e=>{let{id:t}=e;return new Promise((e=>{setTimeout((()=>e({id:t,updatedAt:(new Date).toISOString()})),150)}))}),{schema:Le});const Pe={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Fe={...l,...o,...u,...i,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:c.Z,lastUpdated:De,TimedEntity:Le,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,Re.Z)();return r.createElement(Ie.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:M},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},$e={...Fe,Todo:f,TodoResource:Pe,TodoEndpoint:h},Ge=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:s=!1,fixtures:o}=e;return r.createElement(_e,{scope:Array.isArray(t)?Fe:$e,noInline:!0,groupId:n,defaultOpen:l,row:s,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};Ge.defaultProps={defaultOpen:"n",fixtures:[]};var Oe=(0,r.memo)(Ge)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),l=n(67294);function s(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294),s=n(75690);function o(e){let{pkgs:t,dev:n=!1}=e;return l.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(a.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),l.createElement(a.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{"use strict";var r=n(67294),a=n(72887);const l={React:r,...r,...a};t.Z=l},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);