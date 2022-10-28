"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72700],{82209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Render as you Fetch"},s=void 0,i={unversionedId:"guides/render-as-you-fetch",id:"version-6.2/guides/render-as-you-fetch",title:"Render as you Fetch",description:"A core design feature of Rest Hooks is decoupling actual data retrieval from data",source:"@site/versioned_docs/version-6.2/guides/render-as-you-fetch.md",sourceDirName:"guides",slug:"/guides/render-as-you-fetch",permalink:"/docs/6.2/guides/render-as-you-fetch",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/render-as-you-fetch.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Render as you Fetch"},sidebar:"docs",previous:{title:"Fetching multiple resources at once",permalink:"/docs/6.2/guides/fetch-multiple"},next:{title:"Immediate Mutation Updates",permalink:"/docs/6.2/guides/immediate-updates"}},l={},c=[{value:"Routes that preload",id:"routes-that-preload",level:2},{value:"Components using data",id:"components-using-data",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A core design feature of Rest Hooks is decoupling actual data retrieval from data\nusage. This means hooks that want to ensure data availability like ",(0,a.kt)("a",{parentName:"p",href:"../api/useFetch"},"useFetch()"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," actually only dispatch the request to fetch. ",(0,a.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"\nthen uses its global awareness to determine whether to fetch. This means, for instance, that\nduplicate requests for data can be deduped into one fetch, with one promise to resolve."),(0,a.kt)("p",null,"Another interesting implication is that fetches started imperatively via ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#fetch"},"Controller.fetch()"),"\nwon't result in redundant fetches. This is known as 'fetch as you render,' and often results\nin an improved user experience."),(0,a.kt)("p",null,"These are some scenarios where this pattern is especially useful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server Side Rendering"),(0,a.kt)("li",{parentName:"ul"},"Loading data in parallel with code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-reference.html#usetransition"},"useTransition()"))))),(0,a.kt)("p",null,"Fetch-as-you-render can be adopted incrementally. Components using data can ",(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nand be assured they will get their data when it's ready. And when render-as-you-fetch optimizations\nare added later - ",(0,a.kt)("em",{parentName:"p"},"those components don't need to change"),". This makes data usage ",(0,a.kt)("em",{parentName:"p"},"tightly coupled"),",\nand fetch optimization ",(0,a.kt)("em",{parentName:"p"},"loosely coupled"),"."),(0,a.kt)("iframe",{src:"https://stackblitz.com/github/ntucker/anansi/tree/master/examples/concurrent?embed=1&file=src/routing/routes.tsx&hidedevtools=1&view=preview&initialpath=%2Fuser%2F1",width:"100%",height:"600"}),(0,a.kt)("h2",{id:"routes-that-preload"},"Routes that preload"),(0,a.kt)("p",null,"In most cases the best time to pre-fetch data is at the routing layer. Doing this\nmakes incorporating all of the above capabilities quite easy."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," in the route event handler (before startTransition)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller } from '@rest-hooks/core';\nimport { lazy, Route } from '@anansi/router';\nimport { getImage } from '@rest-hooks/img';\n\nexport const routes: Route<Controller>[] = [\n  {\n    name: 'UserDetail',\n    component: lazyPage('UserDetail'),\n    resolveData: async (controller: Controller, match: { id: string }) => {\n      if (match) {\n        const fakeUser = UserResource.fromJS({\n          id: Number.parseInt(match.id, 10),\n        });\n        // don't block on posts but start fetching\n        controller.fetch(PostResource.list(), { userId: match.id });\n        await Promise.all([\n          controller.fetch(UserResource.detail(), match),\n          controller.fetch(getImage, {\n            src: fakeUser.profileImage,\n          }),\n          controller.fetch(getImage, {\n            src: fakeUser.coverImage,\n          }),\n          controller.fetch(getImage, {\n            src: fakeUser.coverImageFallback,\n          }),\n        ]);\n      }\n    },\n  },\n\n]\n")),(0,a.kt)("h3",{id:"components-using-data"},"Components using data"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/ntucker/anansi/tree/master/examples/concurrent?file=src%2Fpages%2FUserDetail%2Findex.tsx"},"UserDetail page")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\nimport { Card, Avatar } from 'antd';\n\nimport { UserResource } from 'resources/Discuss';\nimport Boundary from 'Boundary';\nimport PostList from 'pages/Posts';\n\nexport type Props = { id: string };\nconst { Meta } = Card;\n\nexport default function UserDetail({ id }: Props) {\n  const user = useSuspense(UserResource.detail(), { id });\n  return (\n    <>\n      <Card cover={<Img src={user.coverImage} />}>\n        <Meta\n          avatar={<Img component={Avatar} src={user.profileImage} size={64} />}\n          title={user.name}\n          description={\n            <>\n              <div>{user.website}</div>\n              <div>{user.company.catchPhrase}</div>\n            </>\n          }\n        />\n      </Card>\n      <Boundary fallback={<CardLoading />}>\n        <PostList userId={user.pk()} />\n      </Boundary>\n    </>\n  );\n}\nexport function CardLoading() {\n  return <Card style={{ marginTop: 16 }} loading={true} />;\n}\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);