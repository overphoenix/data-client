"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74114],{30433:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),s=n(86010),o=n(5730),i=n(20636),l=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,l.U)(),[w,N]=(0,a.useState)(g),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==w&&(P(t),N(r),null!=b&&E(b,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:O},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(30433),a=n(65559),s=n(67294);function o(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(r.Z,{value:"simple"},t[0]),s.createElement(r.Z,{value:"generics"},t[1]))}},57489:(e,t,n)=>{var r=n(67294),a=n(64820);const s={React:r,...r,...a};t.Z=s},67517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=n(88705);n(8845);const o={title:"useSubscription()"},i=void 0,l={unversionedId:"api/useSubscription",id:"version-7.0/api/useSubscription",title:"useSubscription()",description:"useSubscription() - Fresh data for Rest Hooks",source:"@site/versioned_docs/version-7.0/api/useSubscription.md",sourceDirName:"api",slug:"/api/useSubscription",permalink:"/docs/7.0/api/useSubscription",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useSubscription.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"useSubscription()"},sidebar:"docs",previous:{title:"useCache()",permalink:"/docs/7.0/api/useCache"},next:{title:"useFetch()",permalink:"/docs/7.0/api/useFetch"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Only subscribe while element is visible",id:"only-subscribe-while-element-is-visible",level:2},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"useSubscription() - Fresh data for Rest Hooks")),(0,a.kt)(s.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): void;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSubscription<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(endpoint: E, ...args: Args): void;\n"))),(0,a.kt)("p",null,"Great for keeping resources up-to-date with frequent changes."),(0,a.kt)("p",null,"When using the default ",(0,a.kt)("a",{parentName:"p",href:"./PollingSubscription"},"polling subscriptions"),", frequency must be set in\n",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),", otherwise will have no effect."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Send ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to params to unsubscribe.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Price.ts"',title:'"api/Price.ts"'},"import { Resource, Entity } from '@rest-hooks/rest';\n\nexport class Price extends Entity {\n  readonly symbol: string | undefined = undefined;\n  readonly price: string = '0.0';\n  // ...\n\n  pk() {\n    return this.symbol;\n  }\n}\n\nexport const getPrice = new RestEndpont({\n  urlPrefix: 'http://test.com',\n  path: '/price/:symbol',\n  schema: Price,\n  pollFrequency: 5000,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MasterPrice.tsx"',title:'"MasterPrice.tsx"'},"import { useSuspense, useSubscription } from '@rest-hooks/react';\nimport { getPrice } from 'api/Price';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useSuspense(getPrice, { symbol });\n  useSubscription(getPrice, { symbol });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"only-subscribe-while-element-is-visible"},"Only subscribe while element is visible"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MasterPrice.tsx"',title:'"MasterPrice.tsx"'},"import { useRef } from 'react';\nimport { useSuspense, useSubscription } from '@rest-hooks/react';\nimport { getPrice } from 'api/Price';\n\nfunction MasterPrice({ symbol }: { symbol: string }) {\n  const price = useSuspense(getPrice, { symbol });\n  const ref = useRef();\n  const onScreen = useOnScreen(ref);\n  // null params means don't subscribe\n  useSubscription(getPrice, onScreen ? null : { symbol });\n\n  return (\n    <div ref={ref}>{price.value.toLocaleString('en', { currency: 'USD' })}</div>\n  );\n}\n")),(0,a.kt)("p",null,"Using the last argument ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," we control whether the subscription is active or not\nbased on whether the element rendered is ",(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"visible on screen"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://usehooks.com/useOnScreen/"},"useOnScreen()")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"IntersectionObserver"),", which is very performant."),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#members"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get"),(0,a.kt)("li",{parentName:"ul"},"getList")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," as well."))}d.isMDXComponent=!0},8845:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905)),s=n(13743);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(s.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}i.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);