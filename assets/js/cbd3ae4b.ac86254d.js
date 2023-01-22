/*! For license information please see cbd3ae4b.ac86254d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71783],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function k(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=b.prototype=new k;v.constructor=b,h(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return s=s(c=e),e=""===a?"."+x(c,0):a,w(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),_(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var l=a+x(i=e[u],u);c+=_(i,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=_(i=i.value,t,o,l=a+x(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function U(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null}},27378:(e,t,r)=>{r(41535)},16708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(27378),r(3905));const a={title:"Render as you Fetch"},s=void 0,i={unversionedId:"guides/render-as-you-fetch",id:"guides/render-as-you-fetch",title:"Render as you Fetch",description:"A core design feature of Rest Hooks is decoupling actual data retrieval from data",source:"@site/../docs/core/guides/render-as-you-fetch.md",sourceDirName:"guides",slug:"/guides/render-as-you-fetch",permalink:"/docs/guides/render-as-you-fetch",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/render-as-you-fetch.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1674225363,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"Render as you Fetch"},sidebar:"docs",previous:{title:"Custom Protocol",permalink:"/docs/guides/custom-protocol"},next:{title:"Aborting Fetch",permalink:"/docs/guides/abort"}},c={},u=[{value:"Routes that preload",id:"routes-that-preload",level:2},{value:"Components using data",id:"components-using-data",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A core design feature of Rest Hooks is decoupling actual data retrieval from data\nusage. This means hooks that want to ensure data availability like ",(0,o.kt)("a",{parentName:"p",href:"../api/useFetch"},"useFetch()"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," actually only dispatch the request to fetch. ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"\nthen uses its global awareness to determine whether to fetch. This means, for instance, that\nduplicate requests for data can be deduped into one fetch, with one promise to resolve."),(0,o.kt)("p",null,"Another interesting implication is that fetches started imperatively via ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()"),"\nwon't result in redundant fetches. This is known as 'fetch as you render,' and often results\nin an improved user experience."),(0,o.kt)("p",null,"These are some scenarios where this pattern is especially useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server Side Rendering"),(0,o.kt)("li",{parentName:"ul"},"Loading data in parallel with code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-reference.html#usetransition"},"useTransition()"))))),(0,o.kt)("p",null,"Fetch-as-you-render can be adopted incrementally. Components using data can ",(0,o.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()"),"\nand be assured they will get their data when it's ready. And when render-as-you-fetch optimizations\nare added later - ",(0,o.kt)("em",{parentName:"p"},"those components don't need to change"),". This makes data usage ",(0,o.kt)("em",{parentName:"p"},"tightly coupled"),",\nand fetch optimization ",(0,o.kt)("em",{parentName:"p"},"loosely coupled"),"."),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/ntucker/anansi/tree/master/examples/concurrent?embed=1&file=src/routing/routes.tsx&hidedevtools=1&view=preview&initialpath=%2Fuser%2F1&terminalHeight=1",width:"100%",height:"600"}),(0,o.kt)("h2",{id:"routes-that-preload"},"Routes that preload"),(0,o.kt)("p",null,"In most cases the best time to pre-fetch data is at the routing layer. Doing this\nmakes incorporating all of the above capabilities quite easy."),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," in the route event handler (before startTransition)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller } from '@rest-hooks/core';\nimport { lazy, Route } from '@anansi/router';\nimport { getImage } from '@rest-hooks/img';\n\nexport const routes: Route<Controller>[] = [\n  {\n    name: 'UserDetail',\n    component: lazyPage('UserDetail'),\n    resolveData: async (controller: Controller, match: { id: string }) => {\n      if (match) {\n        const fakeUser = UserResource.fromJS({\n          id: Number.parseInt(match.id, 10),\n        });\n        // don't block on posts but start fetching\n        controller.fetch(PostResource.getList, { userId: match.id });\n        await Promise.all([\n          controller.fetch(UserResource.get, match),\n          controller.fetch(getImage, {\n            src: fakeUser.profileImage,\n          }),\n          controller.fetch(getImage, {\n            src: fakeUser.coverImage,\n          }),\n          controller.fetch(getImage, {\n            src: fakeUser.coverImageFallback,\n          }),\n        ]);\n      }\n    },\n  },\n];\n")),(0,o.kt)("h3",{id:"components-using-data"},"Components using data"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/github/ntucker/anansi/tree/master/examples/concurrent?file=src%2Fpages%2FUserDetail%2Findex.tsx"},"UserDetail page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from '@rest-hooks/react';\nimport { Img } from '@rest-hooks/img';\nimport { Card, Avatar } from 'antd';\n\nimport { UserResource } from 'resources/Discuss';\nimport Boundary from 'Boundary';\nimport PostList from 'pages/Posts';\n\nexport type Props = { id: string };\nconst { Meta } = Card;\n\nexport default function UserDetail({ id }: Props) {\n  const user = useSuspense(UserResource.get, { id });\n  return (\n    <>\n      <Card cover={<Img src={user.coverImage} />}>\n        <Meta\n          avatar={<Img component={Avatar} src={user.profileImage} size={64} />}\n          title={user.name}\n          description={\n            <>\n              <div>{user.website}</div>\n              <div>{user.company.catchPhrase}</div>\n            </>\n          }\n        />\n      </Card>\n      <Boundary fallback={<CardLoading />}>\n        <PostList userId={user.pk()} />\n      </Boundary>\n    </>\n  );\n}\nexport function CardLoading() {\n  return <Card style={{ marginTop: 16 }} loading={true} />;\n}\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);