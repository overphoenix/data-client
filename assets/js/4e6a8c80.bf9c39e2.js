"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[70338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),i=n(86010),s=n(72389),l=n(67392),o=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:y}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[x,w]=(0,r.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==x&&(T(t),w(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},y)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:O,onClick:O},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),i=n(67294);function s(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},24805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),i=n(70523);const s={title:"Entity"},l=void 0,o={unversionedId:"api/Entity",id:"version-6.0/api/Entity",title:"Entity",description:"Entity is an abstract base class used to define data with some form of primary key (or pk for short).",source:"@site/versioned_docs/version-6.0/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/6.0/api/Entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Entity"},sidebar:"version-6.0/docs",previous:{title:"Quick Start",permalink:"/docs/6.0/api/schema"},next:{title:"Object",permalink:"/docs/6.0/api/Object"}},p={},u=[{value:"Methods",id:"methods",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",level:3},{value:"process(input, parent, key): processedEntity",id:"processinput-parent-key-processedentity",level:3},{value:"abstract pk: (parent?, key?): pk?",id:"pk",level:3},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Entities",id:"singleton-entities",level:4},{value:"static get key(): string",id:"key",level:3},{value:"static merge(existing, incoming): mergedValue",id:"merge",level:3},{value:"Example",id:"example",level:4},{value:"static validate(processedEntity): errorMessage?",id:"validate",level:3},{value:"static infer(args, indexes, recurse): pk?",id:"infer",level:3},{value:"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt",id:"expiresat",level:3},{value:"static indexes?: (keyof this)[]",id:"indexes",level:3},{value:"useResource()",id:"useresource",level:4},{value:"useCache()",id:"usecache",level:4},{value:"static schema: { k: keyof this: Schema }",id:"schema",level:3},{value:"Optional members",id:"optional-members",level:4}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,r.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,r.kt)("p",null,"By defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,r.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,r.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,r.kt)("h3",{id:"processinput-parent-key-processedentity"},"process(input, parent, key): processedEntity"),(0,r.kt)("p",null,"Run at the start of normalization for this entity. Return value is saved in store\nand sent to ",(0,r.kt)("a",{parentName:"p",href:"#pk"},"pk()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Defaults")," to simply copying the response (",(0,r.kt)("inlineCode",{parentName:"p"},"{...input}"),")"),(0,r.kt)("h3",{id:"pk"},"abstract pk: (parent?, key?): pk?"),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,r.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,r.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"key"},"static get key(): string"),(0,r.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,r.kt)("h3",{id:"merge"},"static merge(existing, incoming): mergedValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(existing: InstanceType<T>, incoming: InstanceType<T>) => InstanceType<T>\n")),(0,r.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,r.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static merge<T extends typeof SimpleRecord>(\n    existing: InstanceType<T>,\n    incoming: InstanceType<T>,\n  ) {\n    if (existing.timestamp > incoming.timestamp) return existing;\n    return incoming;\n  }\n}\n")),(0,r.kt)("h3",{id:"validate"},"static validate(processedEntity): errorMessage?"),(0,r.kt)("p",null,"Runs during both normalize and denormalize. Returning a string indicates an error (the string is the message)."),(0,r.kt)("p",null,"During normalization a validation failure will result in an error for that fetch."),(0,r.kt)("p",null,"During denormalization a validation failure will mark that result as 'invalid' and thus\nwill block on fetching a result."),(0,r.kt)("p",null,"By ",(0,r.kt)("strong",{parentName:"p"},"default")," does some basic field existance checks in development mode only. Override to\ndisable or customize."),(0,r.kt)("h3",{id:"infer"},"static infer(args, indexes, recurse): pk?"),(0,r.kt)("p",null,"Allows Rest Hooks to build a response without having to fetch if its entities can be found."),(0,r.kt)("p",null,"Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," will not infer this entity"),(0,r.kt)("p",null,"Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"pk")," string will attempt to lookup this entity and use in the response."),(0,r.kt)("p",null,"When inferring a response, this entity's expiresAt is used to compute the expiry policy."),(0,r.kt)("p",null,"By ",(0,r.kt)("strong",{parentName:"p"},"default")," uses the first argument to lookup in ",(0,r.kt)("a",{parentName:"p",href:"#pk"},"pk()")," and ",(0,r.kt)("a",{parentName:"p",href:"#indexes"},"indexes")),(0,r.kt)("h3",{id:"expiresat"},"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt"),(0,r.kt)("p",null,"This determines expiry time when entity is part of a result that is inferred."),(0,r.kt)("p",null,"Overriding can be used to change TTL policy specifically for inferred responses."),(0,r.kt)("h3",{id:"indexes"},"static indexes?: (keyof this)[]"),(0,r.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,r.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,r.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,r.kt)("h4",{id:"useresource"},"useResource()"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"./useResource"},"useResource()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useResource(UserResource.detail(), { username: 'bob' });\n")),(0,r.kt)("h4",{id:"usecache"},"useCache()"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"./useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,r.kt)("p",null,"Some top level component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useResource(AssetResource.list(), {});\n")),(0,r.kt)("p",null,"Nested below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,r.kt)("h3",{id:"schema"},"static schema: { ","[k: keyof this]",": Schema }"),(0,r.kt)("p",null,"Set this to ",(0,r.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,r.kt)("p",null,"Additionally can be used to ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,r.kt)("h4",{id:"optional-members"},"Optional members"),(0,r.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  }\n}\n")))}d.isMDXComponent=!0}}]);