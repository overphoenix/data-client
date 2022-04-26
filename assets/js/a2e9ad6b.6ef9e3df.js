/*! For license information please see a2e9ad6b.6ef9e3df.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[59513],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function h(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var k=g.prototype=new h;k.constructor=g,v(k,b.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];o.children=i}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var L=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return l=l(u=e),e=""===o?"."+x(u,0):o,E(l)?(a="",null!=e&&(a=e.replace(L,"$&/")+"/"),j(l,t,a,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(L,"$&/")+"/")+e)),t.push(l)),1;if(u=0,o=""===o?".":o+":",E(e))for(var i=0;i<e.length;i++){var c=o+x(s=e[i],i);u+=j(s,t,a,c,l)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),i=0;!(s=e.next()).done;)u+=j(s=s.value,t,a,c=o+x(s,i++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,r){if(null==e)return e;var n=[],a=0;return j(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(87462),a=r(67294),o=r(72389),l=r(51548),s=r(86010);const u="tabItem_LplD";function i(e){var t,r;const{lazy:o,block:i,defaultValue:c,values:p,groupId:d,className:f}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??m.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,l.lx)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=m[0])?void 0:r.props.value);if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,l.UB)(),[k,E]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=d){const e=h[d];null!=e&&e!==k&&v.some((t=>t.value===e))&&E(e)}const _=e=>{const t=e.currentTarget,r=w.indexOf(t),n=v[r].value;n!==k&&(S(t),E(n),null!=d&&g(d,n))},D=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]||w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:_,onClick:_},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":k===t})}),r??t)}))),o?(0,a.cloneElement)(m.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function c(e){const t=(0,o.Z)();return a.createElement(i,(0,n.Z)({key:String(t)},e))}},11048:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9877),a=r(58215),o=r(67294);function l(e){let{children:t}=e;return o.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},t[0]),o.createElement(a.Z,{value:"generics"},t[1]))}},96497:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9877),a=r(58215),o=r(67294),l=r(95652);function s(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(l.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(l.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(15814);const o={React:n,...n,...a}},40008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(27378),r(3905)),o=(r(96497),r(11048));const l={title:"useDLE()"},s=void 0,u={unversionedId:"api/useDLE",id:"api/useDLE",title:"useDLE()",description:"In case you cannot use suspense, useDLE() is just like useSuspense() but returns [D]ata [L]oading [E]rror values.",source:"@site/../docs/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/api/useDLE",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/api/useFetch"},next:{title:"useMeta()",permalink:"/docs/api/useMeta"}},i={},c=[{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): { data: Denormalize<typeof endpoint.schema>, loading: boolean, error: Error | undefined };\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): { data: DenormalizeNullable<typeof endpoint.schema>, loading: boolean, error: Error | undefined };\n"))),(0,a.kt)("p",null,"In case you cannot use suspense, useDLE() is just like useSuspense() but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"resources/ProfileResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n"))),(0,a.kt)("h4",{id:"profilelisttsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDLE } from 'rest-hooks';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useDLE(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")))}d.isMDXComponent=!0}}]);