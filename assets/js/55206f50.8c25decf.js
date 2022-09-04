(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[39904],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59542:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(9790),s=n(70523);const l={title:"Entity"},o=void 0,u={unversionedId:"api/Entity",id:"version-5.0/api/Entity",title:"Entity",description:"Entity - Declarative Data Normalization | Rest Hooks",source:"@site/rest_versioned_docs/version-5.0/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/rest/5.0/api/Entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Entity.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{title:"Entity"},sidebar:"docs",previous:{title:"Schema",permalink:"/rest/5.0/api/schema"},next:{title:"schema.Object",permalink:"/rest/5.0/api/Object"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"fromJS",level:3},{value:"process(input, parent, key): processedEntity",id:"processinput-parent-key-processedentity",level:3},{value:"abstract pk: (parent?, key?): pk?",id:"pk",level:3},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Entities",id:"singleton-entities",level:4},{value:"static get key(): string",id:"key",level:3},{value:"static useIncoming(existingMeta, incomingMeta, existing, incoming): mergedValue",id:"useincoming",level:3},{value:"Example",id:"example",level:4},{value:"Preventing updates",id:"preventing-updates",level:4},{value:"static merge(existing, incoming): mergedValue",id:"merge",level:3},{value:"static validate(processedEntity): errorMessage?",id:"validate",level:3},{value:"static infer(args, indexes, recurse): pk?",id:"infer",level:3},{value:"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt",id:"expiresat",level:3},{value:"static indexes?: (keyof this)[]",id:"indexes",level:3},{value:"useSuspense()",id:"usesuspense",level:4},{value:"useCache()",id:"usecache",level:4},{value:"static schema: { k: keyof this: Schema }",id:"schema",level:3},{value:"Optional members",id:"optional-members",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Entity - Declarative Data Normalization | Rest Hooks")),(0,r.kt)(s.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/endpoint';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from '@rest-hooks/endpoint';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,r.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,r.kt)("p",null,"By defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource"},"Resource")," is recommended. However, for other cases\n",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"fromJS"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,r.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,r.kt)("h3",{id:"processinput-parent-key-processedentity"},"process(input, parent, key): processedEntity"),(0,r.kt)("p",null,"Run at the start of normalization for this entity. Return value is saved in store\nand sent to ",(0,r.kt)("a",{parentName:"p",href:"#pk"},"pk()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Defaults")," to simply copying the response (",(0,r.kt)("inlineCode",{parentName:"p"},"{...input}"),")"),(0,r.kt)("h3",{id:"pk"},"abstract pk: (parent?, key?): pk?"),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,r.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,r.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"key"},"static get key(): string"),(0,r.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,r.kt)("h3",{id:"useincoming"},"static useIncoming(existingMeta, incomingMeta, existing, incoming): mergedValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static useIncoming(\n  existingMeta: { date: number; fetchedAt: number },\n  incomingMeta: { date: number; fetchedAt: number },\n  existing: any,\n  incoming: any,\n) {\n  return existingMeta.fetchedAt <= incomingMeta.fetchedAt;\n}\n")),(0,r.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static useIncoming(\n    existingMeta: { date: number; fetchedAt: number },\n    incomingMeta: { date: number; fetchedAt: number },\n    existing: any,\n    incoming: any,\n  ) {\n    return existing.timestamp <= incoming.timestamp;\n  }\n}\n")),(0,r.kt)("h4",{id:"preventing-updates"},"Preventing updates"),(0,r.kt)("p",null,"useIncoming can also be used to short-circuit an entity update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import deepEqual from 'deep-equal';\n\nclass LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static useIncoming(\n    existingMeta: { date: number; fetchedAt: number },\n    incomingMeta: { date: number; fetchedAt: number },\n    existing: any,\n    incoming: any,\n  ) {\n    return !deepEqual(incoming, existing);\n  }\n}\n")),(0,r.kt)("h3",{id:"merge"},"static merge(existing, incoming): mergedValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(\n  existing: InstanceType<T>,\n  incoming: InstanceType<T>,\n  ) => InstanceType<T>\n")),(0,r.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,r.kt)("h3",{id:"validate"},"static validate(processedEntity): errorMessage?"),(0,r.kt)("p",null,"Runs during both normalize and denormalize. Returning a string indicates an error (the string is the message)."),(0,r.kt)("p",null,"During normalization a validation failure will result in an error for that fetch."),(0,r.kt)("p",null,"During denormalization a validation failure will mark that result as 'invalid' and thus\nwill block on fetching a result."),(0,r.kt)("p",null,"By ",(0,r.kt)("strong",{parentName:"p"},"default")," does some basic field existance checks in development mode only. Override to\ndisable or customize."),(0,r.kt)("h3",{id:"infer"},"static infer(args, indexes, recurse): pk?"),(0,r.kt)("p",null,"Allows Rest Hooks to build a response without having to fetch if its entities can be found."),(0,r.kt)("p",null,"Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," will not infer this entity"),(0,r.kt)("p",null,"Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"pk")," string will attempt to lookup this entity and use in the response."),(0,r.kt)("p",null,"When inferring a response, this entity's expiresAt is used to compute the expiry policy."),(0,r.kt)("p",null,"By ",(0,r.kt)("strong",{parentName:"p"},"default")," uses the first argument to lookup in ",(0,r.kt)("a",{parentName:"p",href:"#pk"},"pk()")," and ",(0,r.kt)("a",{parentName:"p",href:"#indexes"},"indexes")),(0,r.kt)("h3",{id:"expiresat"},"static expiresAt(meta: { expiresAt: number; date: number }, input: any): expiresAt"),(0,r.kt)("p",null,"This determines expiry time when entity is part of a result that is inferred."),(0,r.kt)("p",null,"Overriding can be used to change TTL policy specifically for inferred responses."),(0,r.kt)("h3",{id:"indexes"},"static indexes?: (keyof this)[]"),(0,r.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,r.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,r.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,r.kt)("h4",{id:"usesuspense"},"useSuspense()"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useSuspense(UserResource.detail(), { username: 'bob' });\n")),(0,r.kt)("h4",{id:"usecache"},"useCache()"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,r.kt)("p",null,"Some top level component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useSuspense(AssetResource.list());\n")),(0,r.kt)("p",null,"Nested below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,r.kt)("h3",{id:"schema"},"static schema: { ","[k: keyof this]",": Schema }"),(0,r.kt)("p",null,"Set this to ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"define entities nested")," inside this one."),(0,r.kt)("p",null,"Additionally can be used to ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const postSample = () =>\n  Promise.resolve({\n    id: '5',\n    author: { id: '123', name: 'Jim' },\n    content: 'Happy day',\n    createdAt: '2019-01-23T06:07:48.311Z',\n  });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nclass Post extends Entity {\n  readonly author: User = User.fromJS({});\n  readonly createdAt: Date = new Date(0);\n  static schema = {\n    author: User,\n    createdAt: Date,\n  };\n  pk() {\n    return this.id;\n  }\n}\nconst postDetail = new Endpoint(postSample, {\n  schema: Post,\n});\nfunction PostPage() {\n  const post = useSuspense(postDetail, { id: '123' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          post.createdAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,r.kt)("h4",{id:"optional-members"},"Optional members"),(0,r.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  };\n}\n")))}m.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),s=n(72389),l=n(67392),o=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:h,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,o.U)(),[x,N]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==x&&(T(t),N(a),null!=h&&E(h,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},g)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:A,onFocus:S,onClick:S},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},9790:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ve});var a=n(67294),r=n(67601),i=n(43329),s=n(65612),l=n(37814),o=n(9546),u=n(51111),c=n(70794),d=n(32257),p=n(66856);class m extends p.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,a){return n.updatedAt<=a.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,getOptimisticResponse:g})}static create(){const e=this.list().key({});return super.create().extend({schema:this,getOptimisticResponse:f,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new d.Z(this),getOptimisticResponse:y})}}h.urlRoot="/api/todos";const g=(e,t,n)=>({id:t.id,...e.getResponse(h.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),f=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),y=(e,t)=>({...t,updatedAt:e.fetchedAt});var k=n(87462),v=n(10407),b=n(86010),E=n(95999),x=n(52263),N=n(72389),w=n(66412),T=n(55423),S=n(84195),A=n(33625),C=n(85109),O=n(83477),I=n(33799),Z=n(7094),P=n(12466),D=n(91262);const R="playgroundContainer_sLUA",U="row_YGZs",M="hidden_Hh8i",j="playgroundHeader_Zx4K",_="playgroundEditor_lYwu",z="playgroundPreview_rk9R",F="playgroundError_sRnA",q="playgroundResult_tefG",L="debugToggle_zlro",V="tabControls_trxh",B="tabs_m54V",H="tab_bTGw",J="selected_QXZk";var $=n(78914),G=n(97723),W=n(92949);function K(e){let{value:t}=e;const{isDarkTheme:n}=(0,W.I)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(G.L,{shouldExpandNode:X,data:t,valueRenderer:Q,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function X(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const Y="undefined"!=typeof Intl;function Q(e,t){const n=arguments.length<=2?void 0:arguments[2];return Y&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ee(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:L,onClick:t},"Store"),"y"===n?a.createElement(ae,null):null)}const te=(0,a.memo)(ee);function ne(){const e=(0,a.useContext)($.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(K,{value:t})}const ae=(0,a.memo)(ne);function re(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:i,setTabGroupChoices:s}=(0,Z.U)(),[l,o]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,P.o5)();if(null!=t){const e=i[t];null!=e&&e!==l&&o(e)}const c=(0,a.useCallback)((e=>{u(e.currentTarget),o((e=>"y"===e?"n":"y")),s(t,"y"===l?"n":"y")}),[u,t,l,s]),d=(0,a.useMemo)((()=>[new I.Z,new A.Z(C.Z)]),[]),p=!("n"===l||!r);return a.createElement(O.nq,{managers:d},a.createElement("div",{className:(0,b.Z)(z,{[M]:p})},a.createElement(D.Z,{fallback:a.createElement(se,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(se,null)},a.createElement(v.i5,null),a.createElement(v.IF,{className:F}))))),a.createElement(te,{selectedValue:l,toggle:c}))}const ie=(0,a.memo)(re);function se(){return a.createElement("div",null,"Loading...")}function le(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,b.Z)(j,n)},t)}function oe(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},a.createElement(le,null,a.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:q},a.createElement(ie,{groupId:t,defaultOpen:n,row:r})))}function ue(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(S.Z);return a.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:i}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,b.Z)(H,{[J]:e===r}),onFocus:t,onClick:t,value:r},i)})))}function ce(e){let{children:t}=e;return a.createElement(le,{className:V},a.createElement("div",null,t),a.createElement(ue,null))}function de(e){let{title:t}=e;const{values:n}=(0,a.useContext)(S.Z),r=n.length>0,i=(0,N.Z)();return a.createElement("div",null,r?a.createElement(ce,null,t):a.createElement(le,null,t),a.createElement(v.uz,{key:i,className:_}))}function pe(e){let{children:t,transformCode:n,groupId:r,defaultOpen:i,row:s,hidden:l=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,x.Z)(),c=(0,w.p)();o.scope;return a.createElement("div",{className:(0,b.Z)(R,{[U]:s,[M]:l})},a.createElement(v.nu,(0,k.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>T.transpileModule(e,{compilerOptions:{module:T.ModuleKind.ESNext,target:T.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},o),"top"===u?a.createElement(a.Fragment,null,a.createElement(oe,{groupId:r,defaultOpen:i,row:s}),a.createElement(de,null)):a.createElement(a.Fragment,null,a.createElement(de,null),a.createElement(oe,{groupId:r,defaultOpen:i,row:s}))))}de.defaultProps={title:a.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},pe.defaultProps={row:!1};var me=n(32430),he=n(23212);class ge extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ge.schema={updatedAt:Date};const fe=new r.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ge});const ye={...i,...l,...u,...o,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:c.Z,lastUpdated:fe,TimedEntity:ge,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:i}=(0,me.Z)();return a.createElement(he.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:F},t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{i(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends h{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},ke=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:i="n",row:s=!1}=e;return a.createElement(pe,{scope:ye,noInline:!0,groupId:n,defaultOpen:i,row:s,hidden:r},"string"==typeof t?t:t.props.children.props.children)},ve=(0,a.memo)(ke)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),i=n(67294);function s(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);