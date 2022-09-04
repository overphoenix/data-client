"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[7045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),s=n(85162);const o={title:"Custom endpoints"},l=void 0,u={unversionedId:"guides/extending-endpoints",id:"version-5.0/guides/extending-endpoints",title:"Custom endpoints",description:"Previously we saw how we could use",source:"@site/rest_versioned_docs/version-5.0/guides/extending-endpoints.md",sourceDirName:"guides",slug:"/guides/extending-endpoints",permalink:"/rest/5.0/guides/extending-endpoints",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/extending-endpoints.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"Custom endpoints"},sidebar:"docs",previous:{title:"URL Patterns",permalink:"/rest/5.0/guides/url"},next:{title:"Typing REST Endpoints",permalink:"/rest/5.0/guides/rest-types"}},d={},p=[{value:"Overriding endpoints",id:"overriding-endpoints",level:2},{value:"Default schema",id:"default-schema",level:3},{value:"Example schema",id:"example-schema",level:3},{value:"Resource definition",id:"resource-definition",level:3},{value:"Additional endpoints",id:"additional-endpoints",level:2},{value:"RPC",id:"rpc",level:3},{value:"Custom GET",id:"custom-get",level:3},{value:"Usage",id:"usage",level:4},{value:"Custom List Endpoints",id:"custom-list-endpoints",level:3},{value:"Usage",id:"usage-1",level:4}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../usage#use-the-resource"},"Previously we saw how we could use"),"\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," hooks to read and mutate\ndata. The first argument of these hooks is known as a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint"),".\nEndpoints are the minimal definition of instructions needed to tell Rest Hooks how to handle\nthose types of requests."),(0,r.kt)("p",null,"Resource comes with a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#static-network-methods-and-properties"},"small handleful Endpoints"),"\nfor each of the typical ",(0,r.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"CRUD operations"),". This is often not enough."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"TypeScript does not infer ",(0,r.kt)("inlineCode",{parentName:"p"},"super")," properly. When overriding you can either include\nthe schema, or explicitly specify the ",(0,r.kt)("a",{parentName:"p",href:"./rest-types"},"return type")," of the endpoint.")),(0,r.kt)("h2",{id:"overriding-endpoints"},"Overriding endpoints"),(0,r.kt)("p",null,"By default the list() assumes an array of entities returned while detail() assumes\njust the entity returned."),(0,r.kt)("h3",{id:"default-schema"},"Default schema"),(0,r.kt)(i.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "postId": 1,\n  "id": 1,\n  "name": "id labore ex et quam laborum",\n  "email": "Eliseo@gardner.biz",\n  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  },\n  {\n    "postId": 1,\n    "id": 2,\n    "name": "quo vero reiciendis velit similique earum",\n    "email": "Jayne_Kuhic@sydney.com",\n    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n  },\n  {\n    "postId": 1,\n    "id": 3,\n    "name": "odio adipisci rerum aut animi",\n    "email": "Nikita@garfield.biz",\n    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n  }\n]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,r.kt)("h3",{id:"example-schema"},"Example schema"),(0,r.kt)("p",null,"However, often the data is not returned quite so simply. For instance, maybe it can be found in a 'data'\nkey of an object:"),(0,r.kt)(i.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "postId": 1,\n      "id": 1,\n      "name": "id labore ex et quam laborum",\n      "email": "Eliseo@gardner.biz",\n      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n    },\n    {\n      "postId": 1,\n      "id": 2,\n      "name": "quo vero reiciendis velit similique earum",\n      "email": "Jayne_Kuhic@sydney.com",\n      "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n    },\n    {\n      "postId": 1,\n      "id": 3,\n      "name": "odio adipisci rerum aut animi",\n      "email": "Nikita@garfield.biz",\n      "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,r.kt)("h3",{id:"resource-definition"},"Resource definition"),(0,r.kt)("p",null,"In this case, you'll need to override your detail() and list() definitions to reflect\nthe structure of your data. This is known as a 'schema' definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class CommentResource extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      schema: { data: this },\n    });\n  }\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { data: [this] },\n    });\n  }\n}\n")),(0,r.kt)("p",null,"Here we only overrode the 'schema' part of the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint")," - taking advantage\nof ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"},"super")," to keep\nthe other pieces the same. See ",(0,r.kt)("a",{parentName:"p",href:"./pagination"},"pagination"),", ",(0,r.kt)("a",{parentName:"p",href:"./nested-response"},"nested resources"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"./rpc"},"mutation side-effects")," guide for more examples of custom schemas and overriding\nendpoints."),(0,r.kt)("h2",{id:"additional-endpoints"},"Additional endpoints"),(0,r.kt)("p",null,"In many cases there are more means of interacting with a given resource than the basic CRUD\noperations. Often this means a custom RPC call, or even a custom retrieval endpoint. We'll demonstrate\na few examples here, but be sure to learn more about ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint"),"s to\ndefine exactly what your endpoint needs."),(0,r.kt)("h3",{id:"rpc"},"RPC"),(0,r.kt)("p",null,"In this example, we have an RPC endpoint located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/[id]/make_manager"),". This endpoint\ndoesn't expect any body, but is a POST request. Because it is so similar to a ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/resource#create"},"create()"),"\nwe'll be extended that schema definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  static makeManager<T extends typeof Resource>(this: T) {\n    const endpoint = this.create();\n    return endpoint.extend({\n      url({ id }: { id: number }) { return `/users/${id}/make_manager` },\n      fetch({ id }: { id: number }) {\n        return endpoint.fetch.call(this, { id });\n      }\n    });\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Params of { id: number }"),(0,r.kt)("li",{parentName:"ul"},"No Body"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h3",{id:"custom-get"},"Custom GET"),(0,r.kt)("p",null,"Normally we can look up user resources like any other - with their 'id'. However,\nhow do we get the currently logged in user? One way is to define a special url\njust for retrieving the current user. In this case - ",(0,r.kt)("inlineCode",{parentName:"p"},"/current_user/"),". Since there\nis only one - we won't need to send any params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static current<T extends typeof Resource>(this: T) {\n    const endpoint = this.detail();\n    return endpoint.extend({\n      fetch() { return endpoint.call(this); }\n      url() { return '/current_user/' },\n    })\n  }\n}\n")),(0,r.kt)("p",null,"We customized the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No params"))),(0,r.kt)("li",{parentName:"ul"},"Custom url")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nexport default function CurrentUserProfilePage() {\n  const loggedInUser = useSuspense(UserResource.current());\n\n  return <ProfileDetail user={loggedInUser} />;\n}\n")),(0,r.kt)("h3",{id:"custom-list-endpoints"},"Custom List Endpoints"),(0,r.kt)("p",null,"Sometimes we have endpoints that select particular results. We set the url\nin our custom ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint")," function,\nand ensure the data is normalized and typed\ncorrectly via the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint#schema"},"schema")," definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class BirthdayResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly name: string = '';\n  readonly image: string = '';\n  readonly source: string = '';\n  readonly date: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/api/birthdays/';\n\n  /** Lists all upcoming birthdays */\n  static upcoming<T extends typeof Resource>(this: T) {\n    const endpoint = this.list();\n    return this.list().extend({\n      fetch() { return endpoint.fetch.call(this); }\n      url() { return '/current_user/' },\n      schema: {\n        withinSevenDays: [this],\n        withinThirtyDays: [this],\n      },\n    });\n  }\n}\n")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport BirthdayResource from 'resources/user';\n\nexport default function UpcomingBirthdays() {\n  const { withinSevenDays, withinThirtyDays } = useSuspense(\n    BirthdayResource.upcoming(),\n    {},\n  );\n\n  return (\n    <div>\n      <h2>Next Seven</h2>\n      <div>\n        {withinSevenDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n      <h2>Next Thirty</h2>\n      <div>\n        {withinThirtyDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),i=n(86010),s=n(72389),o=n(67392),l=n(7094),u=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:c,groupId:h,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,l.U)(),[x,w]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&w(e)}const q=e=>{const t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==x&&(E(t),w(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:q,onClick:q},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);