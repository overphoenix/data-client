"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15924],{40268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={title:"Infinite Scrolling"},i=void 0,o={unversionedId:"guides/infinite-scrolling-pagination",id:"version-6.1/guides/infinite-scrolling-pagination",title:"Infinite Scrolling",description:"Add Update Function matching network schema",source:"@site/versioned_docs/version-6.1/guides/infinite-scrolling-pagination.md",sourceDirName:"guides",slug:"/guides/infinite-scrolling-pagination",permalink:"/docs/6.1/guides/infinite-scrolling-pagination",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/infinite-scrolling-pagination.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635345848,formattedLastUpdatedAt:"Oct 27, 2021",frontMatter:{title:"Infinite Scrolling"},sidebar:"version-6.1/docs",previous:{title:"Images and other Media",permalink:"/docs/6.1/guides/img-media"},next:{title:"Fetching multiple resources at once",permalink:"/docs/6.1/guides/fetch-multiple"}},l={},c=[{value:"Add Update Function matching network schema",id:"add-update-function-matching-network-schema",level:2},{value:"Create pagination hook",id:"create-pagination-hook",level:2},{value:"NewsList example",id:"newslist-example",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-update-function-matching-network-schema"},"Add Update Function matching network schema"),(0,a.kt)("p",null,"If your API follows a common pattern, adding the ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),"\nto a base class can make adding pagination behavior to any of your endpoints quite easy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type Params = { cursor: string; [k: string]: any };\nabstract class BaseResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    FetchFunction<Params>,\n    { results: T[]; cursor: string | null },\n    undefined\n  > {\n    return super.list().extend({\n      schema: { results: [this], cursor: null },\n      update: (newResults: any, { cursor, ...rest }: Params) => ({\n        [this.list().key({ ...rest })]: BaseResource.appendList.bind(\n          BaseResource,\n          newResults,\n        ),\n      }),\n    });\n  }\n\n  static appendList(\n    newResults: { results: string[] },\n    existingResults: { results: string[] } | undefined,\n  ) {\n    const existingList = existingResults?.results ?? [];\n    const existingSet: Set<string> = new Set(existingList);\n    const addedList = newResults.results.filter(\n      (pk: string) => !existingSet.has(pk),\n    );\n    const mergedResults: string[] = [...existingList, ...addedList];\n    return {\n      ...newResults,\n      results: mergedResults,\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"create-pagination-hook"},"Create pagination hook"),(0,a.kt)("p",null,"Here we'll define a helper hook for pagination that uses the BaseResource\n",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#update"},"Endpoint.update"),".\nThis can then be used for any Resources that conform to this schema. Most likely\nthat is the same as those extending from BaseResource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useMemo } from 'react';\nimport { ReadEndpoint, useController } from 'rest-hooks';\n\nfunction usePaginator<\n  E extends ReadEndpoint<(params: any) => Promise<any>, any>,\n>(endpoint: E, params: Omit<Parameters<E>[0], 'cursor'> | null) {\n  const { fetch } = useController();\n\n  return useMemo(\n    () => {\n      if (!params) return null;\n      return (cursor: string) => {\n        const p: Parameters<E> = [{ ...params, cursor }] as any;\n        return fetch(endpoint, ...p);\n      };\n    },\n    // \"params && endpoint.key(params)\" is a method to serialize params\n    [fetch, params && endpoint.key(params)],\n  );\n}\n")),(0,a.kt)("h2",{id:"newslist-example"},"NewsList example"),(0,a.kt)("p",null,"We'll extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseResource")," created above, to define the correct\nschema for list()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import BaseResource from 'resources/BaseResource';\n\nclass NewsResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly title = '';\n  readonly url = '';\n  readonly previewImage = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/news';\n}\n")),(0,a.kt)("p",null,"Now we can declare our data depency to get list results with ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource"),",\nand get an imperative handler ",(0,a.kt)("inlineCode",{parentName:"p"},"getNextPage")," using our new hook."),(0,a.kt)("p",null,"Since UI behaviors vary widely, and implementations vary from platform (react-native or web),\nwe'll just assume a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pagination")," component is built, that uses a callback to trigger next\npage fetching. On web, it is recommended to use something based on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Pagination />")," is assumed to call its ",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate")," prop when a user scrolls and its\n",(0,a.kt)("inlineCode",{parentName:"p"},"nextCursor")," is not falsy. It will then pass the nextCursor prop as the sole argument to\n",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport NewsResource from 'resources/NewsResource';\nimport usePaginator from 'resources/basePaginator';\n\nfunction NewsList() {\n  const { results, cursor } = useResource(NewsResource.list(), {});\n  const getNextPage = usePaginator(NewsResource.list(), {});\n\n  return (\n    <Pagination onPaginate={getNextPage} nextCursor={cursor}>\n      <NewsList data={results} />\n    </Pagination>\n  );\n}\n")))}p.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);