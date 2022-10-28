/*! For license information please see 46a04e2a.f3ef24bb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51410],{41535:(e,t)=>{var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,f={};function g(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=v.prototype=new y;b.constructor=v,k(b,g.prototype),b.isPureReactComponent=!0;var N=Array.isArray,w=Object.prototype.hasOwnProperty,E={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,a){var n,o={},s=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var p=Array(i),u=0;u<i;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:s,ref:l,props:o,_owner:E.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case a:i=!0}}if(i)return s=s(i=e),e=""===o?"."+T(i,0):o,N(s)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),_(s,t,n,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(j,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",N(e))for(var p=0;p<e.length;p++){var u=o+T(l=e[p],p);i+=_(l,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)i+=_(l=l.value,t,n,u=o+T(l,p++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function R(e,t,r){if(null==e)return e;var a=[],n=0;return _(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},C={transition:null}},27378:(e,t,r)=>{r(41535)},30433:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(87462),n=r(67294),o=r(86010),s=r(5730),l=r(20636),i=r(76602),p=r(63735),u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:h,groupId:m,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.U)(),[w,E]=(0,n.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&g.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,r=x.indexOf(t),a=g[r].value;a!==w&&(O(t),E(a),null!=m&&N(m,String(a)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},g.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:S,onClick:S},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,s.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},45633:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(65559),n=r(30433),o=r(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},o.createElement(n.Z,{value:"before"},t[0]),o.createElement(n.Z,{value:"after"},t[1]))}},52393:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(65559),n=r(30433),o=r(67294),s=r(13743);function l(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(n.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(n.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(72887);const o={React:a,...a,...n};t.Z=o},46979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(27378),r(3905)),o=r(45633),s=r(52393);const l={title:"Upgrading from 5 to 6"},i=void 0,p={unversionedId:"upgrade/upgrading-to-6",id:"upgrade/upgrading-to-6",title:"Upgrading from 5 to 6",description:"Highlights",source:"@site/../docs/core/upgrade/upgrading-to-6.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-6",permalink:"/docs/upgrade/upgrading-to-6",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-6.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Upgrading from 5 to 6"},sidebar:"docs",previous:{title:"useResetter()",permalink:"/docs/api/useResetter"},next:{title:"Upgrading from 4 to 5",permalink:"/docs/upgrade/upgrading-to-5"}},u={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Package compatibility",id:"package-compatibility",level:3},{value:"Exports moved to @rest-hooks/legacy.",id:"exports-moved-to-rest-hookslegacy",level:3},{value:"Importing directly from hidden files is no longer supported",id:"importing-directly-from-hidden-files-is-no-longer-supported",level:3},{value:"Store state internals",id:"store-state-internals",level:3},{value:"@rest-hooks/endpoint changes",id:"rest-hooksendpoint-changes",level:3},{value:"@rest-hooks/rest changes from 2 -&gt; 3",id:"rest-hooksrest-changes-from-2---3",level:3},{value:"Full list of changes",id:"full-list-of-changes",level:2},{value:"Node &gt;=12",id:"node-12",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:3},{value:"Entity",id:"entity",level:4},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:3},{value:"@rest-hooks/core",id:"rest-hookscore",level:3},{value:"rest-hooks",id:"rest-hooks",level:3},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:3}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{pkgs:"rest-hooks@6 @rest-hooks/rest@3",upgrade:!0,mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("h3",{id:"package-compatibility"},"Package compatibility"),(0,n.kt)("p",null,"Be sure to upgrade these packages prior to upgrading Rest Hooks itself. They maintain compatibility\nwith rest hooks 5."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/test"},"@rest-hooks/test")," >= 6.2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy")," >= 2.3.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")," >= 1.4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," >= 0.4.0")),(0,n.kt)("p",null,"Upgrade at the same time:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," 3.0 drops compatibility with\nolder versions, so this will have to be upgraded in unison. All breaking changes ",(0,n.kt)("a",{parentName:"p",href:"#rest-hooksrest-changes-from-2---3"},"are listed below")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Due to a bug in npm 7, it might install multiple peerDeps (@rest-hooks/normalizr). If\nthis happens, you can fix by completely uninstalling rest hooks packages and then reininstalling:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall rest-hooks @rest-hooks/rest\nnpm install --save rest-hooks@6 @rest-hooks/rest@3\n"))),(0,n.kt)("h3",{id:"exports-moved-to-rest-hookslegacy"},"Exports moved to ",(0,n.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"."),(0,n.kt)("p",null,"FlatEntity, SimpleRecord, NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("p",null,"These are still supported! They are simply moved to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),". This allows smooth incremental migrations."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"yarn add @rest-hooks/legacy@2.2.0")),(0,n.kt)("p",{parentName:"li"},"has all of these, and is compatible with both ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks")," 5 and 6.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks")," to 6 & ",(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," to 3.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"Gradually migrate")," to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")))),(0,n.kt)("h3",{id:"importing-directly-from-hidden-files-is-no-longer-supported"},"Importing directly from hidden files is no longer supported"),(0,n.kt)("p",null,"All packages now use ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/package-exports/"},"package exports"),", which if\nsupported disallow importing directly from any sub path like ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks/lib/react-integration/hooks/useSuspense")),(0,n.kt)("p",null,"Doing this was never supported as file locations would change without announcement. However, now\nwith tooling that supports package exports, it will not work at all."),(0,n.kt)("h3",{id:"store-state-internals"},"Store state internals"),(0,n.kt)("p",null,"Entities no longer normalize to their class. Class construction is now done during denormalization step.\nThis means the internal state of Rest Hooks is a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plain_old_Java_object"},"POJO"),". This\nimproves serialization. However, it does mean relying on the internal state in a ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Manager"},"Manager"),"\nto be a class will break. Additionally the expected serialization of Rest Hooks store will be slightly different, which\ncould affect snapshot tests or persistance efforts like using IndexedDB."),(0,n.kt)("h3",{id:"rest-hooksendpoint-changes"},"@rest-hooks/endpoint changes"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"SimpleRecord -> Object"),(0,n.kt)("p",null,"SimpleRecord was removed (though available in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),")"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Object"},"Object")," can be used instead"),(0,n.kt)(o.Z,{mdxType:"BeforeAfterTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export class Address extends SimpleRecord {\n  readonly street: string = '';\n  readonly suite: string = '';\n  readonly city: string = '';\n  readonly zipcode: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export const Address = {\n  street: '',\n  suite: '',\n  city: '',\n  zipcode: '',\n  date: Date,\n};\n")))),(0,n.kt)("h3",{id:"rest-hooksrest-changes-from-2---3"},"@rest-hooks/rest changes from 2 -> 3"),(0,n.kt)("p",null,"These add on to the ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"existing changes")," of @rest-hooks/rest from @rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource.fromJS()")," was used to customize normalization process, use ",(0,n.kt)("inlineCode",{parentName:"p"},"process()")," instead."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"}," class MyResource extends Resource {\n   static process(input: any, parent: any, key: string | undefined): any {\n     return {\n       ...input,\n       extraThing: 5,\n     };\n   }\n }\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New default ",(0,n.kt)("a",{parentName:"p",href:"#rest-hookscore"},"error behavior")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="To keep existing"',title:'"To',keep:!0,'existing"':!0},"class MyResource extends Resource {\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error => 'soft' as const,\n    };\n  }\n}\n")))),(0,n.kt)("h2",{id:"full-list-of-changes"},"Full list of changes"),(0,n.kt)("h3",{id:"node-12"},"Node >=12"),(0,n.kt)("p",null,"Node 12 is now the minimum version required. This only applies if Rest Hooks\nis actually used within node. (SSR or testing are likely cases.)"),(0,n.kt)("h3",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,n.kt)("h4",{id:"entity"},"Entity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fromJS() -> process() to customize init"),(0,n.kt)("li",{parentName:"ul"},"normalize results in POJO rather than instances",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is only meaningful for those inspecting the rest hooks state directly"))),(0,n.kt)("li",{parentName:"ul"},"FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)")),(0,n.kt)("h3",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("h3",{id:"rest-hookscore"},"@rest-hooks/core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"buildInferredResult -> inferResults")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Error behavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"useError() will no longer create synthetic errors for missing entities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("details",null,(0,n.kt)("summary",null,"useError() errorPolicy"),(0,n.kt)("h4",{parentName:"li",id:"endpointextraoptions"},"EndpointExtraOptions"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface EndpointExtraOptions {\n  //...rest\n  errorPolicy?: (error: any) => 'soft' | undefined;\n}\n")),(0,n.kt)("h4",{parentName:"li",id:"soft-vs-undefined"},"'soft' vs ",(0,n.kt)("inlineCode",{parentName:"h4"},"undefined")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"'soft' avoids errors if existing results are still available (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," (hard error) means any error always falls")),(0,n.kt)("h4",{parentName:"li",id:"rest-hooksrest-1"},"@rest-hooks/rest"),(0,n.kt)("p",{parentName:"li"},"New default policy: 5xx are soft, else hard."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," is where errors have 'status' members. This concept does not exist in base Endpoints."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return;\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")),(0,n.kt)("h4",{parentName:"li",id:"pollingsubscription"},"PollingSubscription"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"          // never break when data already exists\n          errorPolicy: () => 'soft' as const,\n")),(0,n.kt)("h4",{parentName:"li",id:"rest-hookslegacy---resource"},"@rest-hooks/legacy - Resource"),(0,n.kt)("p",{parentName:"li"},"Existing policy was to always be 'soft' no matter what. This maintains that behavior."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  /** @deprecated */\n  /** Get the request options for this SimpleResource  */\n  static getFetchOptions(): FetchOptions | undefined {\n    return {\n      errorPolicy: () => 'soft' as const,\n    };\n  }\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/971"},"https://github.com/coinbase/rest-hooks/pull/971")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"polled fetch errors are always 'soft'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5xx: 'soft'"),(0,n.kt)("li",{parentName:"ul"},"4xx, 3xx, etc: 'hard'"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"peerDep @rest-hooks/endpoint > 2"))),(0,n.kt)("h3",{id:"rest-hooks"},"rest-hooks"),(0,n.kt)("p",null,"Removed exports from 'rest-hooks': NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"use @rest-hooks/legacy, or @rest-hooks/rest instead")),(0,n.kt)("h3",{id:"rest-hookslegacy"},"@rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%406.0.0"},"Full Release notes")))}h.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);