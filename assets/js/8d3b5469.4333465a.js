"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[4687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(67294),o=n(72389),s=n(51548),i=n(86010);const l="tabItem_LplD";function u(e){var t,n;const{lazy:o,block:u,defaultValue:c,values:p,groupId:d,className:m}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.lx)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=b[0])?void 0:n.props.value);if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.UB)(),[g,E]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=d){const e=y[d];null!=e&&e!==g&&f.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),r=f[n].value;r!==g&&(N(t),E(r),null!=d&&k(d,r))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>w.push(e),onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":g===t})}),n??t)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9877),a=n(58215),o=n(67294);function s(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},t[0]),o.createElement(a.Z,{value:"generics"},t[1]))}},11981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(11048);const s={title:"useSubscription()"},i=void 0,l={unversionedId:"api/useSubscription",id:"version-5.0/api/useSubscription",title:"useSubscription()",description:"Great for keeping resources up-to-date with frequent changes.",source:"@site/versioned_docs/version-5.0/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/5.0/api/useSubscription",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useSubscription()"},sidebar:"version-5.0/docs",previous:{title:"useCache()",permalink:"/docs/5.0/api/useCache"},next:{title:"useRetrieve()",permalink:"/docs/5.0/api/useRetrieve"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): void;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): void;\n"))),(0,a.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,a.kt)("p",null,"When using the default ",(0,a.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Send ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every Endpoint */\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  useSubscription(PriceResource.detail(), { symbol });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react';\nimport { useResource, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useResource(PriceResource.detail(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detail(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,a.kt)("p",null,"Using the last argument ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Be sure to extend these ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint"),"s with a pollFrequency to set\nthe polling-rate."))}d.isMDXComponent=!0}}]);