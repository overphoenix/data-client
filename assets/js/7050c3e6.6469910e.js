"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[73125],{85162:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(67294),r=n(86010);const o="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,a),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(87462),r=n(67294),o=n(86010),a=n(72389),i=n(67392),l=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:a,defaultValue:d,values:m,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[S,E]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==S&&k.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,n=w.indexOf(t),s=k[n].value;s!==S&&(x(t),E(s),null!=b&&N(b,String(s)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>w.push(e),onKeyDown:R,onFocus:P,onClick:P},a,{className:(0,o.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,a.Z)();return r.createElement(d,(0,s.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(65488),r=n(85162),o=n(67294);function a(e){let{children:t}=e;return o.createElement(s.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},56922:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(67294),r=n(72887);const o={React:s,...s,...r}},98535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(87462),r=(n(67294),n(3905)),o=n(11048);n(56686);const a={title:"useSubscription()"},i=void 0,l={unversionedId:"api/useSubscription",id:"version-6.3/api/useSubscription",title:"useSubscription()",description:"useSubscription() - Fresh data for Rest Hooks",source:"@site/versioned_docs/version-6.3/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/6.3/api/useSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"useSubscription()"},sidebar:"docs",previous:{title:"useCache()",permalink:"/docs/6.3/api/useCache"},next:{title:"useFetch()",permalink:"/docs/6.3/api/useFetch"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useSubscription() - Fresh data for Rest Hooks")),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(endpoint: E, ...args: Args): void;\n"))),(0,r.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,r.kt)("p",null,"When using the default ",(0,r.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Send ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PriceResource.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class PriceResource extends Resource {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n  static urlRoot = 'http://test.com/price/';\n\n  /** Used as default options for every Endpoint */\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      pollFrequency: 5000, // every 5 seconds\n    };\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MasterPrice.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useSuspense(PriceResource.detail(), { symbol });\n  useSubscription(PriceResource.detail(), { symbol });\n  // ...\n}\n")),(0,r.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MasterPrice.tsx"',title:'"MasterPrice.tsx"'},"import { useRef } from 'react';\nimport { useSuspense, useSubscription } from 'rest-hooks';\nimport PriceResource from 'resources/PriceResource';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useSuspense(PriceResource.detail(), { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(PriceResource.detail(), onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,r.kt)("p",null,"Using the last argument ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,r.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"detail()"),(0,r.kt)("li",{parentName:"ul"},"list()")),(0,r.kt)("p",null,"Be sure to extend these ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),"s with a pollFrequency to set\nthe polling-rate."))}d.isMDXComponent=!0},56686:(e,t,n)=>{n.d(t,{ZP:()=>i});var s=n(87462),r=(n(67294),n(3905)),o=n(75690);const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,r.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}i.isMDXComponent=!0}}]);