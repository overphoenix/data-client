"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28831],{30433:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},65559:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),o=a(86010),s=a(5730),l=a(20636),i=a(76602),p=a(63735),u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:m,groupId:h,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,i.U)(),[w,E]=(0,n.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),r=f[a].value;r!==w&&(O(t),E(r),null!=h&&b(h,String(r)))},j=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:j,onClick:T},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},45633:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(65559),n=a(30433),o=a(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},o.createElement(n.Z,{value:"before"},t[0]),o.createElement(n.Z,{value:"after"},t[1]))}},52393:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(65559),n=a(30433),o=a(67294),s=a(13743);function l(e){let{pkgs:t,dev:a=!1}=e;return o.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(n.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),o.createElement(n.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},57489:(e,t,a)=>{var r=a(67294),n=a(38970);const o={React:r,...r,...n};t.Z=o},15447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(45633),s=a(52393);const l={title:"Upgrading from 5 to 6"},i=void 0,p={unversionedId:"upgrade/upgrading-to-6",id:"version-6.5/upgrade/upgrading-to-6",title:"Upgrading from 5 to 6",description:"Highlights",source:"@site/versioned_docs/version-6.5/upgrade/upgrading-to-6.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-6",permalink:"/docs/6.5/upgrade/upgrading-to-6",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-6.md",tags:[],version:"6.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668319314,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Upgrading from 5 to 6"},sidebar:"docs",previous:{title:"useResetter()",permalink:"/docs/6.5/api/useResetter"},next:{title:"Upgrading from 4 to 5",permalink:"/docs/6.5/upgrade/upgrading-to-5"}},u={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Package compatibility",id:"package-compatibility",level:3},{value:"Exports moved to @rest-hooks/legacy.",id:"exports-moved-to-rest-hookslegacy",level:3},{value:"Importing directly from hidden files is no longer supported",id:"importing-directly-from-hidden-files-is-no-longer-supported",level:3},{value:"Store state internals",id:"store-state-internals",level:3},{value:"@rest-hooks/endpoint changes",id:"rest-hooksendpoint-changes",level:3},{value:"@rest-hooks/rest changes from 2 -&gt; 3",id:"rest-hooksrest-changes-from-2---3",level:3},{value:"Full list of changes",id:"full-list-of-changes",level:2},{value:"Node &gt;=12",id:"node-12",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:3},{value:"Entity",id:"entity",level:4},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:3},{value:"@rest-hooks/core",id:"rest-hookscore",level:3},{value:"rest-hooks",id:"rest-hooks",level:3},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{pkgs:"rest-hooks@6 @rest-hooks/rest@3",upgrade:!0,mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"package-compatibility"},"Package compatibility"),(0,n.kt)("p",null,"Be sure to upgrade these packages prior to upgrading Rest Hooks itself. They maintain compatibility\nwith rest hooks 5."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/test"},"@rest-hooks/test")," >= 6.2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy")," >= 2.3.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")," >= 1.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," >= 0.4.0")),(0,n.kt)("p",null,"Upgrade at the same time:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," 3.0 drops compatibility with\nolder versions, so this will have to be upgraded in unison. All breaking changes ",(0,n.kt)("a",{parentName:"p",href:"#rest-hooksrest-changes-from-2---3"},"are listed below")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Due to a bug in npm 7, it might install multiple peerDeps (@rest-hooks/normalizr). If\nthis happens, you can fix by completely uninstalling rest hooks packages and then reininstalling:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall rest-hooks @rest-hooks/rest\nnpm install --save rest-hooks@6 @rest-hooks/rest@3\n"))),(0,n.kt)("h3",{id:"exports-moved-to-rest-hookslegacy"},"Exports moved to ",(0,n.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"."),(0,n.kt)("p",null,"FlatEntity, SimpleRecord, NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("p",null,"These are still supported! They are simply moved to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),". This allows smooth incremental migrations."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"yarn add @rest-hooks/legacy@2.2.0")),(0,n.kt)("p",{parentName:"li"},"has all of these, and is compatible with both ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks")," 5 and 6.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks")," to 6 & ",(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," to 3.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"Gradually migrate")," to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")))),(0,n.kt)("h3",{id:"importing-directly-from-hidden-files-is-no-longer-supported"},"Importing directly from hidden files is no longer supported"),(0,n.kt)("p",null,"All packages now use ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/package-exports/"},"package exports"),", which if\nsupported disallow importing directly from any sub path like ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks/lib/react-integration/hooks/useSuspense")),(0,n.kt)("p",null,"Doing this was never supported as file locations would change without announcement. However, now\nwith tooling that supports package exports, it will not work at all."),(0,n.kt)("h3",{id:"store-state-internals"},"Store state internals"),(0,n.kt)("p",null,"Entities no longer normalize to their class. Class construction is now done during denormalization step.\nThis means the internal state of Rest Hooks is a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plain_old_Java_object"},"POJO"),". This\nimproves serialization. However, it does mean relying on the internal state in a ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Manager"},"Manager"),"\nto be a class will break. Additionally the expected serialization of Rest Hooks store will be slightly different, which\ncould affect snapshot tests or persistance efforts like using IndexedDB."),(0,n.kt)("h3",{id:"rest-hooksendpoint-changes"},"@rest-hooks/endpoint changes"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"SimpleRecord -> Object"),(0,n.kt)("p",null,"SimpleRecord was removed (though available in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),")"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Object"},"Object")," can be used instead"),(0,n.kt)(o.Z,{mdxType:"BeforeAfterTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export class Address extends SimpleRecord {\n  readonly street: string = '';\n  readonly suite: string = '';\n  readonly city: string = '';\n  readonly zipcode: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export const Address = {\n  street: '',\n  suite: '',\n  city: '',\n  zipcode: '',\n  date: Date,\n};\n")))),(0,n.kt)("h3",{id:"rest-hooksrest-changes-from-2---3"},"@rest-hooks/rest changes from 2 -> 3"),(0,n.kt)("p",null,"These add on to the ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"existing changes")," of @rest-hooks/rest from @rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource.fromJS()")," was used to customize normalization process, use ",(0,n.kt)("inlineCode",{parentName:"p"},"process()")," instead."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"}," class MyResource extends Resource {\n   static process(input: any, parent: any, key: string | undefined): any {\n     return {\n       ...input,\n       extraThing: 5,\n     };\n   }\n }\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New default ",(0,n.kt)("a",{parentName:"p",href:"#rest-hookscore"},"error behavior")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="To keep existing"',title:'"To',keep:!0,'existing"':!0},"class MyResource extends Resource {\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error => 'soft' as const,\n    };\n  }\n}\n")))),(0,n.kt)("h2",{id:"full-list-of-changes"},"Full list of changes"),(0,n.kt)("h3",{id:"node-12"},"Node >=12"),(0,n.kt)("p",null,"Node 12 is now the minimum version required. This only applies if Rest Hooks\nis actually used within node. (SSR or testing are likely cases.)"),(0,n.kt)("h3",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,n.kt)("h4",{id:"entity"},"Entity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fromJS() -> process() to customize init"),(0,n.kt)("li",{parentName:"ul"},"normalize results in POJO rather than instances",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is only meaningful for those inspecting the rest hooks state directly"))),(0,n.kt)("li",{parentName:"ul"},"FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)")),(0,n.kt)("h3",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("h3",{id:"rest-hookscore"},"@rest-hooks/core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"buildInferredResult -> inferResults")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Error behavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"useError() will no longer create synthetic errors for missing entities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("details",null,(0,n.kt)("summary",null,"useError() errorPolicy"),(0,n.kt)("h4",{parentName:"li",id:"endpointextraoptions"},"EndpointExtraOptions"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface EndpointExtraOptions {\n  //...rest\n  errorPolicy?: (error: any) => 'soft' | undefined;\n}\n")),(0,n.kt)("h4",{parentName:"li",id:"soft-vs-undefined"},"'soft' vs ",(0,n.kt)("inlineCode",{parentName:"h4"},"undefined")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"'soft' avoids errors if existing results are still available (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," (hard error) means any error always falls")),(0,n.kt)("h4",{parentName:"li",id:"rest-hooksrest-1"},"@rest-hooks/rest"),(0,n.kt)("p",{parentName:"li"},"New default policy: 5xx are soft, else hard."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," is where errors have 'status' members. This concept does not exist in base Endpoints."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return;\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")),(0,n.kt)("h4",{parentName:"li",id:"pollingsubscription"},"PollingSubscription"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"          // never break when data already exists\n          errorPolicy: () => 'soft' as const,\n")),(0,n.kt)("h4",{parentName:"li",id:"rest-hookslegacy---resource"},"@rest-hooks/legacy - Resource"),(0,n.kt)("p",{parentName:"li"},"Existing policy was to always be 'soft' no matter what. This maintains that behavior."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  /** @deprecated */\n  /** Get the request options for this SimpleResource  */\n  static getFetchOptions(): FetchOptions | undefined {\n    return {\n      errorPolicy: () => 'soft' as const,\n    };\n  }\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/971"},"https://github.com/coinbase/rest-hooks/pull/971")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"polled fetch errors are always 'soft'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5xx: 'soft'"),(0,n.kt)("li",{parentName:"ul"},"4xx, 3xx, etc: 'hard'"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"peerDep @rest-hooks/endpoint > 2"))),(0,n.kt)("h3",{id:"rest-hooks"},"rest-hooks"),(0,n.kt)("p",null,"Removed exports from 'rest-hooks': NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"use @rest-hooks/legacy, or @rest-hooks/rest instead")),(0,n.kt)("h3",{id:"rest-hookslegacy"},"@rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%406.0.0"},"Full Release notes")))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);