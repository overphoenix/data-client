"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[16734],{58215:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),s=a(67294),r=a(72389),o=a(51548),l=a(86010);const i="tabItem_LplD";function u(e){var t,a;const{lazy:r,block:u,defaultValue:p,values:d,groupId:m,className:c}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.lx)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,o.UB)(),[y,N]=(0,s.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,o.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,a=w.indexOf(t),n=g[a].value;n!==y&&(I(t),N(n),null!=m&&b(m,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]||w[w.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},c)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:T,onClick:T},r,{className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":y===t})}),a??t)}))),r?(0,s.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,r.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9877),s=a(58215),r=a(67294),o=a(95652);function l(e){let{pkgs:t,dev:a=!1}=e;return r.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(s.Z,{value:"yarn"},r.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),r.createElement(s.Z,{value:"npm"},r.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(15814);const r={React:n,...n,...s}},15876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),r=a(96497),o=a(9877),l=a(58215);const i={title:"Images and other Media"},u=void 0,p={unversionedId:"guides/img-media",id:"version-6.2/guides/img-media",title:"Images and other Media",description:"Using React Suspense with Images and other Media | Rest Hooks",source:"@site/versioned_docs/version-6.2/guides/img-media.md",sourceDirName:"guides",slug:"/guides/img-media",permalink:"/docs/6.2/guides/img-media",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/img-media.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Images and other Media"},sidebar:"docs",previous:{title:"Dealing with network errors",permalink:"/docs/6.2/concepts/network-errors"},next:{title:"Infinite Scrolling",permalink:"/docs/6.2/guides/infinite-scrolling-pagination"}},d={},m=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],c={toc:m};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Using React Suspense with Images and other Media | Rest Hooks")),(0,s.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,s.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,s.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," and ",(0,s.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,s.kt)(o.Z,{defaultValue:"useSuspense",values:[{label:"useSuspense",value:"useSuspense"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"useSuspense",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useSuspense(getPhoto, { userId });\n"))),(0,s.kt)(l.Z,{value:"useCache",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,s.kt)(l.Z,{value:"JS/Node",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,s.kt)("h2",{id:"just-images"},"Just Images"),(0,s.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,s.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,s.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,s.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(r.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("details",{open:!0},(0,s.kt)("summary",null,(0,s.kt)("b",null,"Profile.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,s.kt)("h4",{id:"prefetching"},"Prefetching"),(0,s.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,s.kt)("details",{open:!0},(0,s.kt)("summary",null,(0,s.kt)("b",null,"Profile.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense, useFetch } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useFetch(getImage, { src: imageSrc });\n  const user = useSuspense(UseResource.detail(), { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n"))),(0,s.kt)("p",null,"When using the ",(0,s.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,s.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#fetch"},"Controller.fetch()")," with the ",(0,s.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," to preload the image."))}h.isMDXComponent=!0}}]);