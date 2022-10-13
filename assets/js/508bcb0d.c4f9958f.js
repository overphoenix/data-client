"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),s=n(107);const o={title:"Transforming data on fetch"},i=void 0,l={unversionedId:"guides/network-transform",id:"version-5.1/guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/rest_versioned_docs/version-5.1/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/rest/5.1/guides/network-transform",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/network-transform.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Transforming data on fetch"},sidebar:"docs",previous:{title:"Authentication",permalink:"/rest/5.1/guides/auth"},next:{title:"Mocking unfinished endpoints",permalink:"/rest/5.1/guides/mocking-unfinished"}},c={},u=[{value:"Snakes to camels",id:"snakes-to-camels",level:2},{value:"Deserializing fields",id:"deserializing-fields",level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",level:2},{value:"Using HTTP Headers",id:"using-http-headers",level:2},{value:"Name calling",id:"name-calling",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All network requests flow through the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you retain control over the API design, generally it's preferred to\nupdate the data sent over the network. Keeping the client as ",(0,a.kt)("inlineCode",{parentName:"p"},"thin")," as possible\nis helpful to both performance and complexity."),(0,a.kt)("p",{parentName:"blockquote"},"That said, in many cases you want to consume APIs you don't have control over -\nbe they public APIs, or due to internal organizational structure.")),(0,a.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,a.kt)("p",null,"Commonly APIs are designed with keys using ",(0,a.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CamelResource.ts"',title:'"CamelResource.ts"'},"import { camelCase, snakeCase } from 'lodash';\nimport { Resource } from '@rest-hooks/rest';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: Record<string, any> = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\n// We can now extend CamelResource instead of Resource to build\n// all of our classes.\nabstract class CamelResource extends Resource {\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body) {\n      init.body = deeplyApplyKeyTransform(init.body, snakeCase);\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // do the conversion!\n    return deeplyApplyKeyTransform(jsonResponse, camelCase);\n  }\n}\n")),(0,a.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,a.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,a.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,a.kt)("p",null,"In this case, simply use the ",(0,a.kt)("a",{parentName:"p",href:"/rest/5.1/api/Entity#schema"},"static schema")," with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber")),(0,a.kt)(s.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const exchangeMock = ({ exchangePair }) =>\n  Promise.resolve({\n    exchangePair,\n    price: '32982389239823983298329832.238923982389328932893298',\n    updatedAt: new Date().toISOString(),\n  });\n\nclass ExchangePrice extends Entity {\n  readonly exchangePair = '';\n  readonly updatedAt = new Date(0);\n  readonly price = new BigNumber(0);\n  static schema = {\n    updatedAt: Date,\n    price: BigNumber,\n  };\n  pk() {\n    return this.exchangePair;\n  }\n}\nconst getPrice = new Endpoint(exchangeMock, {\n  schema: ExchangePrice,\n});\nfunction PricePage() {\n  const currentPrice = useSuspense(getPrice, { exchangePair: 'btc-usd' });\n  return (\n    <div>\n      {currentPrice.price.toPrecision(2)} as of{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          currentPrice.updatedAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PricePage />);\n"))),(0,a.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Id")),(0,a.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,a.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,a.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GET https://mystreamsite.tv/ntucker/"',title:'"GET','https://mystreamsite.tv/ntucker/"':!0},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="StreamResource.ts"',title:'"StreamResource.ts"'},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nabstract class StreamResource extends CamelResource {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n\n  static detail<T extends typeof Resource>(this: T) {\n    const superEndpoint = super.detail() as ReadEndpoint<FetchFunction, T>;\n    return superEndpoint.extend({\n      fetch: async (params: { username: string }) => {\n        const response = await superEndpoint.fetch.call(this, params);\n        response.username = params.username;\n        return response;\n      },\n      // calling super with generics is broken in TypeScript, so re-defining schema ensures correct typing\n      schema: this,\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,a.kt)("p",null,"HTTP ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,a.kt)("a",{parentName:"p",href:"/rest/5.1/api/resource#fetchResponse"},"Resource.fetchResponse()"),"\ncan be used to construct ",(0,a.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint"),"."),(0,a.kt)("p",null,"Sometimes this is used for cursor based ",(0,a.kt)("a",{parentName:"p",href:"/rest/5.1/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(this: T) {\n    const instanceFetchResponse = this.fetchResponse.bind(this);\n\n    return super.list().extend({\n      fetch: async function (params: Readonly<Record<string, string | number>>) {\n        const response = await instanceFetchResponse(this.url(params), this.init);\n        return {\n          link: response.headers.get('link'),\n          results: await response.json().catch((error: any) => {\n            error.status = 400;\n            throw error;\n        };\n      },\n      schema: { results: [this], link: '' },\n    });\n  }\n}\n")),(0,a.kt)("h2",{id:"name-calling"},"Name calling"),(0,a.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"// We're using camelCase now as well ;)\nclass ArticleResource extends CamelResource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly carrotsUsed: number = 0;\n\n  static async fetch(input: RequestInfo, init: RequestInit) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (init.body && 'carrotsUsed' in init.body) {\n      // caller should manage init & body, so we don't want to modify it\n      init = { ...init, body: { ...init.body } };\n      init.body.carrotsUsedIsThisNameTooLong = init.body.carrotsUsed;\n      delete init.body.carrotsUsed;\n    }\n    // perform actual network request getting back json\n    const jsonResponse = await super.fetch(input, init);\n    // only replace the name if it exists. This also helps us ignore list responses.\n    if ('carrotsUsedIsThisNameTooLong' in jsonResponse) {\n      // ok to mutate jsonResponse since we control it\n      jsonResponse.carrotsUsed = jsonResponse.carrotsUsedIsThisNameTooLong;\n      delete jsonResponse.carrotsUsedIsThisNameTooLong;\n    }\n    return jsonResponse;\n  }\n}\n")))}p.isMDXComponent=!0},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(67294),a=n(87462),s=n(49544),o=n(86010),i=n(95999),l=n(52263),c=n(72389),u=n(66412),d=n(91262),p=n(84195),m=n(45440);function f(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(h,{fixture:e})))))}var g=(0,r.memo)(f);function h(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var y=n(60975),b=n(51523);const k=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function v(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(p.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,o.Z)(m.Z.tab,{[m.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},s)})))}function w(e){let{children:t}=e;return r.createElement(y.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(v,null))}function E(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(p.Z),s=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:m.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,s?r.createElement(w,null,t):null)}function x(e){let{children:t,transformCode:n,groupId:i,defaultOpen:p,row:f,hidden:g,fixtures:h,includeEndpoints:y,...v}=e;const{liveCodeBlock:{playgroundPosition:w}}=(0,l.Z)().siteConfig.themeConfig,x=(0,u.p)(),T=(0,c.Z)(),I=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[O,j]=(0,r.useReducer)(Z,void 0,(()=>I.map((e=>{let{code:t}=e;return t})))),A=(0,r.useMemo)((()=>I.map(((e,t)=>e=>j({i:t,code:e})))),[I.length]),[S,_]=(0,r.useState)((()=>I.map((e=>{let{collapsed:t}=e;return t})))),U=O.join("\n");return r.createElement("div",{className:(0,o.Z)(m.Z.playgroundContainer,{[m.Z.row]:f,[m.Z.hidden]:g})},r.createElement(s.nu,(0,a.Z)({theme:x},v),r.createElement(N,{reverse:"top"===w},r.createElement("div",null,r.createElement(E,{fixtures:!f&&h}),f&&I.length>1?r.createElement(P,{titles:I.map((e=>{let{title:t}=e;return t})),closedList:S,onClick:e=>_((t=>t.map(((t,n)=>n!==e))))}):null,I.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!f&&n?r.createElement(R,{onClick:()=>_((e=>{const n=[...e];return n[t]=!n[t],n})),closed:S[t],title:n}):null,S[t]?null:r.createElement(C,{key:`${T}-${t}`,className:m.Z.playgroundEditor,onChange:A[t],code:O[t]}))}))),r.createElement(d.Z,{fallback:r.createElement(s.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(b.Z,{includeEndpoints:y,groupId:i,defaultOpen:p,row:f,fixtures:h}))},(()=>r.createElement(r.Suspense,{fallback:r.createElement(s.nu,{code:'render(() => "loading...");',noInline:!0},r.createElement(b.Z,{includeEndpoints:y,groupId:i,defaultOpen:p,row:f,fixtures:h}))},r.createElement(k,{code:U,includeEndpoints:y,groupId:i,defaultOpen:p,row:f,fixtures:h})))))))}function N(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Z(e,t){const n=[...e];return n[t.i]=t.code,n}E.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},x.defaultProps={row:!1,hidden:!1},N.defaultProps={reverse:!1};const C=(0,r.memo)(s.uz);function R(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(y.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),a)}function P(e){let{titles:t,closedList:n,onClick:a}=e;const{values:s}=(0,r.useContext)(p.Z),i=s.length>0;return r.createElement(y.Z,{className:(0,o.Z)({[m.Z.small]:i,[m.Z.subtabs]:i},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,o.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}const T=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:s,row:o=!1,fixtures:i}=e;return r.createElement(x,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:s,row:o,hidden:a,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};T.defaultProps={defaultOpen:"n",fixtures:[]};var I=(0,r.memo)(T)},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),s=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,a.Z)(s.Z.playgroundHeader,n,o?s.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(95999),s=n(27093),o=n(26127),i=n(82038),l=n(83611),c=n(39714),u=n(49544),d=n(86010),p=n(7094),m=n(12466),f=n(91262),g=n(45440),h=n(32041),y=n(97723),b=n(92949);function k(e){let{value:t}=e;const n="dark"===(0,b.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(y.L,{shouldExpandNode:v,data:t,valueRenderer:E,theme:s,hideRoot:!0})}function v(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const w="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return w&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function x(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,s=a?g.Z.right:g.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:g.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(g.Z.arrow,s,g.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var N=(0,r.memo)(x);function Z(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(k,{value:t})}const C=(0,r.memo)(Z);function R(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:y,setTabGroupChoices:b}=(0,p.U)(),[k,v]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=t){const e=y[t];null!=e&&e!==k&&v(e)}const E=(0,r.useCallback)((e=>{w(e.currentTarget),v((e=>"y"===e?"n":"y")),b(t,"y"===k?"n":"y")}),[w,t,k,b]),x=(0,r.useMemo)((()=>[new l.Z,new s.Z(o.Z)]),[]),Z=!("n"===k||!a);return r.createElement(i.nq,{managers:x},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(g.Z.playgroundPreview,{[g.Z.hidden]:Z})},r.createElement(f.Z,{fallback:r.createElement(T,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(T,null)},r.createElement(u.i5,null),r.createElement(u.IF,{className:g.Z.playgroundError}))))),r.createElement(N,{selectedValue:k,toggle:E})))}var P=(0,r.memo)(R);function T(){return r.createElement("div",null,"Loading...")}var I=n(60975);function O(e){let{groupId:t,defaultOpen:n,row:s,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(I.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:g.Z.playgroundResult},r.createElement(P,{groupId:t,defaultOpen:n,row:s,fixtures:o})))}var j=(0,r.memo)(O)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);