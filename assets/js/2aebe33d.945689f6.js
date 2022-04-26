"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[84705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),i=n(67294),r=n(72389),s=n(51548),o=n(86010);const l="tabItem_LplD";function u(e){var t,n;const{lazy:r,block:u,defaultValue:d,values:p,groupId:m,className:c}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.UB)(),[b,N]=(0,i.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=m){const e=g[m];null!=e&&e!==b&&f.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==b&&(w(t),N(a),null!=m&&k(m,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},c)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":b===t})}),n??t)}))),r?(0,i.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},87422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(9877),s=n(58215);const o={title:"Custom endpoints"},l=void 0,u={unversionedId:"guides/extending-endpoints",id:"version-6.2/guides/extending-endpoints",title:"Custom endpoints",description:"Previously we saw how we could use",source:"@site/versioned_docs/version-6.2/guides/extending-endpoints.md",sourceDirName:"guides",slug:"/guides/extending-endpoints",permalink:"/docs/6.2/guides/extending-endpoints",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/extending-endpoints.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Custom endpoints"},sidebar:"docs",previous:{title:"URL Patterns",permalink:"/docs/6.2/guides/url"},next:{title:"Typing REST Endpoints",permalink:"/docs/6.2/guides/rest-types"}},d={},p=[{value:"Overriding endpoints",id:"overriding-endpoints",level:2},{value:"Default schema",id:"default-schema",level:3},{value:"Example schema",id:"example-schema",level:3},{value:"Resource definition",id:"resource-definition",level:3},{value:"Additional endpoints",id:"additional-endpoints",level:2},{value:"RPC",id:"rpc",level:3},{value:"Custom GET",id:"custom-get",level:3},{value:"Usage",id:"usage",level:4},{value:"Custom List Endpoints",id:"custom-list-endpoints",level:3},{value:"Usage",id:"usage-1",level:4}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../rest/usage#use-the-resource"},"Previously we saw how we could use"),"\nthe ",(0,i.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#fetch"},"Controller.fetch()")," hooks to read and mutate\ndata. The first argument of these hooks is known as a ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),".\nEndpoints are the minimal definition of instructions needed to tell Rest Hooks how to handle\nthose types of requests."),(0,i.kt)("p",null,"Resource comes with a ",(0,i.kt)("a",{parentName:"p",href:"../api/resource#static-network-methods-and-properties"},"small handleful Endpoints"),"\nfor each of the typical ",(0,i.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"CRUD operations"),". This is often not enough."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"TypeScript does not infer ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," properly. When overriding you can either include\nthe schema, or explicitly specify the ",(0,i.kt)("a",{parentName:"p",href:"./rest-types"},"return type")," of the endpoint."))),(0,i.kt)("h2",{id:"overriding-endpoints"},"Overriding endpoints"),(0,i.kt)("p",null,"By default the list() assumes an array of entities returned while detail() assumes\njust the entity returned."),(0,i.kt)("h3",{id:"default-schema"},"Default schema"),(0,i.kt)(r.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "postId": 1,\n  "id": 1,\n  "name": "id labore ex et quam laborum",\n  "email": "Eliseo@gardner.biz",\n  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,i.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  },\n  {\n    "postId": 1,\n    "id": 2,\n    "name": "quo vero reiciendis velit similique earum",\n    "email": "Jayne_Kuhic@sydney.com",\n    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n  },\n  {\n    "postId": 1,\n    "id": 3,\n    "name": "odio adipisci rerum aut animi",\n    "email": "Nikita@garfield.biz",\n    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n  }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,i.kt)("h3",{id:"example-schema"},"Example schema"),(0,i.kt)("p",null,"However, often the data is not returned quite so simply. For instance, maybe it can be found in a 'data'\nkey of an object:"),(0,i.kt)(r.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments/1"))),(0,i.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "postId": 1,\n      "id": 1,\n      "name": "id labore ex et quam laborum",\n      "email": "Eliseo@gardner.biz",\n      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n    },\n    {\n      "postId": 1,\n      "id": 2,\n      "name": "quo vero reiciendis velit similique earum",\n      "email": "Jayne_Kuhic@sydney.com",\n      "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n    },\n    {\n      "postId": 1,\n      "id": 3,\n      "name": "odio adipisci rerum aut animi",\n      "email": "Nikita@garfield.biz",\n      "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments")))),(0,i.kt)("h3",{id:"resource-definition"},"Resource definition"),(0,i.kt)("p",null,"In this case, you'll need to override your detail() and list() definitions to reflect\nthe structure of your data. This is known as a 'schema' definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class CommentResource extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      schema: { data: this },\n    });\n  }\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { data: [this] },\n    });\n  }\n}\n")),(0,i.kt)("p",null,"Here we only overrode the 'schema' part of the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," - taking advantage\nof ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"},"super")," to keep\nthe other pieces the same. See ",(0,i.kt)("a",{parentName:"p",href:"./pagination"},"pagination"),", ",(0,i.kt)("a",{parentName:"p",href:"./nested-response"},"nested resources"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"./rpc"},"mutation side-effects")," guide for more examples of custom schemas and overriding\nendpoints."),(0,i.kt)("h2",{id:"additional-endpoints"},"Additional endpoints"),(0,i.kt)("p",null,"In many cases there are more means of interacting with a given resource than the basic CRUD\noperations. Often this means a custom RPC call, or even a custom retrieval endpoint. We'll demonstrate\na few examples here, but be sure to learn more about ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s to\ndefine exactly what your endpoint needs."),(0,i.kt)("h3",{id:"rpc"},"RPC"),(0,i.kt)("p",null,"In this example, we have an RPC endpoint located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/[id]/make_manager"),". This endpoint\ndoesn't expect any body, but is a POST request. Because it is so similar to a ",(0,i.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create()"),"\nwe'll be extended that schema definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  static makeManager<T extends typeof Resource>(this: T) {\n    const endpoint = this.create();\n    return endpoint.extend({\n      url({ id }: { id: number }) { return `/users/${id}/make_manager` },\n      fetch({ id }: { id: number }) {\n        return endpoint.fetch.call(this, { id });\n      }\n    });\n  }\n}\n")),(0,i.kt)("p",null,"We customized the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Params of { id: number }"),(0,i.kt)("li",{parentName:"ul"},"No Body"))),(0,i.kt)("li",{parentName:"ul"},"Custom url")),(0,i.kt)("h3",{id:"custom-get"},"Custom GET"),(0,i.kt)("p",null,"Normally we can look up user resources like any other - with their 'id'. However,\nhow do we get the currently logged in user? One way is to define a special url\njust for retrieving the current user. In this case - ",(0,i.kt)("inlineCode",{parentName:"p"},"/current_user/"),". Since there\nis only one - we won't need to send any params."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static current<T extends typeof Resource>(this: T) {\n    const endpoint = this.detail();\n    return endpoint.extend({\n      fetch() { return endpoint(this); }\n      url() { return '/current_user/' },\n    })\n  }\n}\n")),(0,i.kt)("p",null,"We customized the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No params"))),(0,i.kt)("li",{parentName:"ul"},"Custom url")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nexport default function CurrentUserProfilePage() {\n  const loggedInUser = useSuspense(UserResource.current(), {});\n\n  return <ProfileDetail user={loggedInUser} />;\n}\n")),(0,i.kt)("h3",{id:"custom-list-endpoints"},"Custom List Endpoints"),(0,i.kt)("p",null,"Sometimes we have endpoints that select particular results. We set the url\nin our custom ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," function,\nand ensure the data is normalized and typed\ncorrectly via the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint#schema-schema"},"schema")," definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class BirthdayResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly name: string = '';\n  readonly image: string = '';\n  readonly source: string = '';\n  readonly date: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/api/birthdays/';\n\n  /** Lists all upcoming birthdays */\n  static upcoming<T extends typeof Resource>(this: T) {\n    const endpoint = this.list();\n    return this.list().extend({\n      fetch() { return endpoint.fetch.call(this); }\n      url() { return '/current_user/' },\n      schema: {\n        withinSevenDays: [this],\n        withinThirtyDays: [this],\n      },\n    });\n  }\n}\n")),(0,i.kt)("h4",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport BirthdayResource from 'resources/user';\n\nexport default function UpcomingBirthdays() {\n  const { withinSevenDays, withinThirtyDays } = useSuspense(\n    BirthdayResource.upcoming(),\n    {},\n  );\n\n  return (\n    <div>\n      <h2>Next Seven</h2>\n      <div>\n        {withinSevenDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n      <h2>Next Thirty</h2>\n      <div>\n        {withinThirtyDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);