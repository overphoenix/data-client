/*! For license information please see ab00e35b.81fb2b32.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30554],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=b.prototype=new v;k.constructor=b,g(k,y.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,Z={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var a,l={},o=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!x.hasOwnProperty(a)&&(l[a]=t[a]);var i=arguments.length-2;if(1===i)l.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===l[a]&&(l[a]=i[a]);return{$$typeof:n,type:e,key:o,ref:s,props:l,_owner:Z.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function q(e,t,a,l,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return o=o(i=e),e=""===l?"."+C(i,0):l,E(o)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),q(o,t,a,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(i=0,l=""===l?".":l+":",E(e))for(var u=0;u<e.length;u++){var c=l+C(s=e[u],u);i+=q(s,t,a,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)i+=q(s=s.value,t,a,c=l+C(s,u++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function U(e,t,n){if(null==e)return e;var r=[],a=0;return q(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null}},27378:(e,t,n)=>{n(41535)},30402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var r=n(87462),a=(n(27378),n(3905)),l=n(70523),o=n(65488),s=n(85162),i=n(96497),u=n(107);const c={id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},p=void 0,d={unversionedId:"README",id:"README",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/../docs/graphql/README.md",sourceDirName:".",slug:"/",permalink:"/graphql/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{id:"README",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Authentication",permalink:"/graphql/auth"}},m={},f=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],g={toc:f};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/graphql/api/Entity"},"Entity"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using GQLEntities is not required, but is important to achieve data consistency.")),(0,a.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,a.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"/graphql/api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"/graphql/api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"SWAPI Demo")),(0,a.kt)(u.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,a.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,a.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,a.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),s=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:f,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,i.U)(),[w,Z]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&Z(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==w&&(N(t),Z(r),null!=f&&E(f,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:_,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(67294),a=n(87462),l=n(49544),o=n(86010),s=n(95999),i=n(52263),u=n(66412),c=n(84195),p=n(45440);function d(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(d);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g=n(60975),h=n(51523),y=n(1556);const v=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function b(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,o.Z)(p.Z.tab,{[p.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function k(e){let{children:t}=e;return r.createElement(g.Z,{className:p.Z.tabControls},r.createElement("div",{className:p.Z.title},t),r.createElement(b,null))}function E(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(c.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(g.Z,{className:p.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,l?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:s,defaultOpen:c,row:d,hidden:m,fixtures:f,includeEndpoints:g,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,v=(0,u.p)();return r.createElement("div",{className:(0,o.Z)(p.Z.playgroundContainer,{[p.Z.row]:d,[p.Z.hidden]:m})},r.createElement(l.nu,(0,a.Z)({theme:v},h),r.createElement(Z,{reverse:"top"===y,row:d,fixtures:f,includeEndpoints:g,groupId:s,defaultOpen:c},t)))}function Z(e){let{reverse:t,children:n,row:a,fixtures:o,includeEndpoints:s,groupId:i,defaultOpen:u}=e;const c=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[p,d]=(0,r.useReducer)(N,void 0,(()=>c.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>c.map(((e,t)=>e=>d({i:t,code:e})))),[c.length]),[f,g]=(0,r.useState)((()=>c.map((e=>{let{collapsed:t}=e;return t})))),b=p.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!a&&o}),a&&c.length>1?r.createElement(q,{titles:c.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,n)=>n!==e))))}):null,c.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(C,{onClick:()=>g((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(_,{key:t,onChange:m[t],code:p[t]}))}))),r.createElement(y.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:s,groupId:i,defaultOpen:u,row:a,fixtures:o}))},r.createElement(v,{code:b,includeEndpoints:s,groupId:i,defaultOpen:u,row:a,fixtures:o})))}function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1},x.defaultProps={reverse:!1};const S=(0,r.memo)(l.uz);function _(e){let{onChange:t,code:n}=e;return r.createElement(S,{className:p.Z.playgroundEditor,onChange:t,code:n})}function C(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(g.Z,{className:p.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(p.Z.arrow,n?p.Z.right:p.Z.down)},"\u25b6"),a)}function q(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(c.Z),s=l.length>0;return r.createElement(g.Z,{className:(0,o.Z)({[p.Z.small]:s,[p.Z.subtabs]:s},p.Z.noupper,p.Z.tabControls)},r.createElement("div",{className:p.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,o.Z)(p.Z.tab,{[p.Z.selected]:!n[t]})},e)))))}const U=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:o=!1,fixtures:s}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:o,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};U.defaultProps={defaultOpen:"n",fixtures:[]};var L=(0,r.memo)(U)},70523:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),l=n(67294),o=n(75690);function s(e){let{pkgs:t,dev:n=!1}=e;return l.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(a.Z,{value:"yarn"},l.createElement(o.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),l.createElement(a.Z,{value:"npm"},l.createElement(o.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},1556:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(91262),a=n(67294);function l(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),l=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,o?l.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(67294),a=n(95999),l=n(27093),o=n(26127),s=n(82038),i=n(83611),u=n(39714),c=n(86010),p=n(7094),d=n(12466),m=n(45440),f=n(32041),g=n(97723),h=n(92949);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(g.L,{shouldExpandNode:v,data:t,valueRenderer:k,theme:l,hideRoot:!0})}function v(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,l,m.Z.vertical)},"\u25b6")),a?r.createElement(x,null):null)}var w=(0,r.memo)(E);function Z(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const x=(0,r.memo)(Z);var N=n(1556);function S(e){let{groupId:t,defaultOpen:n,row:a,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,p.U)(),[y,v]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,d.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&v(e)}const k=(0,r.useCallback)((e=>{b(e.currentTarget),v((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[b,t,y,h]),E=(0,r.useMemo)((()=>[new i.Z,new l.Z(o.Z)]),[]),Z=!("n"===y||!a);return r.createElement(s.nq,{managers:E},r.createElement(u.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:Z})},r.createElement(N.Z,{fallback:r.createElement(C,null)},r.createElement(q,null))),r.createElement(w,{selectedValue:y,toggle:k})))}var _=(0,r.memo)(S);function C(){return r.createElement("div",null,"Loading...")}const q=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var U=n(60975);function L(e){let{groupId:t,defaultOpen:n,row:l,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(U.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(_,{groupId:t,defaultOpen:n,row:l,fixtures:o})))}var P=(0,r.memo)(L)},56922:(e,t,n)=>{var r=n(67294),a=n(72887);const l={React:r,...r,...a};t.Z=l},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);