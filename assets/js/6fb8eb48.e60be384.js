"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63594],{87390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"Infinite Scrolling",id:"infinite-scrolling-pagination",original_id:"infinite-scrolling-pagination"},i=void 0,o={unversionedId:"guides/infinite-scrolling-pagination",id:"version-4.1/guides/infinite-scrolling-pagination",title:"Infinite Scrolling",description:"Add Update Function matching network schema",source:"@site/versioned_docs/version-4.1/guides/infinite-scrolling-pagination.md",sourceDirName:"guides",slug:"/guides/infinite-scrolling-pagination",permalink:"/docs/4.1/guides/infinite-scrolling-pagination",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/infinite-scrolling-pagination.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Infinite Scrolling",id:"infinite-scrolling-pagination",original_id:"infinite-scrolling-pagination"},sidebar:"version-4.1/docs",previous:{title:"Custom cache lifetime",permalink:"/docs/4.1/guides/resource-lifetime"},next:{title:"Mocking data for Storybook",permalink:"/docs/4.1/guides/storybook"}},l={},c=[{value:"Add Update Function matching network schema",id:"add-update-function-matching-network-schema",level:2},{value:"Create pagination hook",id:"create-pagination-hook",level:2},{value:"NewsList example",id:"newslist-example",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-update-function-matching-network-schema"},"Add Update Function matching network schema"),(0,a.kt)("p",null,"If your API follows a common pattern, adding the ",(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher#updatefunction-sourceresults-destresults--destresults"},"update function"),"\nto a base class can make adding pagination behavior to any of your endpoints quite easy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class BaseResource extends Resource {\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.asSchema()], cursor: null as string | null },\n    };\n  }\n\n  static appendList(\n    newResults: { results: string[] },\n    existingResults: { results: string[] } | undefined,\n  ) {\n    // In case there are duplicates, Set will eliminate them.\n    const set = new Set([\n      ...(existingResults?.results ?? []),\n      ...newResults.results,\n    ]);\n    return {\n      ...newResults,\n      results: [...set.values()],\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"create-pagination-hook"},"Create pagination hook"),(0,a.kt)("p",null,"Here we'll define a helper hook for pagination that uses the BaseResource\n",(0,a.kt)("a",{parentName:"p",href:"../api/useFetcher#updatefunction-sourceresults-destresults--destresults"},"update function"),".\nThis can then be used for any Resources that conform to this schema. Most likely\nthat is the same as those extending from BaseResource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ReadShape, ParamsFromShape, useFetcher } from 'rest-hooks';\nimport BaseResource from 'resources/BaseResource';\n\nfunction usePaginator<\n  S extends ReadShape<any, any>,\n  P extends Omit<ParamsFromShape<S>, 'cursor'> | null\n>(fetchShape: Shape, params: Params) {\n  // the second argument here is really important - it indicates that requests should be deduped!\n  const getNextPage = useFetcher(fetchShape, true);\n\n  return useCallback(\n    (cursor: string) => {\n      return getNextPage({ ...params, cursor }, undefined, [\n        // this instructs Rest Hooks to update the cache results specified by the first two members\n        // with the merge algorithm of the third.\n        [fetchShape, params, BaseResource.appendList],\n      ]);\n      // \"params && fetchShape.getFetchKey(params)\" is a method to serialize params\n    },\n    [getNextPage, params && fetchShape.getFetchKey(params)],\n  );\n}\n")),(0,a.kt)("h2",{id:"newslist-example"},"NewsList example"),(0,a.kt)("p",null,"We'll extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseResource")," created above, to define the correct\nschema for listShape()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class NewsResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly title = '';\n  readonly url = '';\n  readonly previewImage = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/news';\n}\n")),(0,a.kt)("p",null,"Now we can declare our data depency to get list results with ",(0,a.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource"),",\nand get an imperative handler ",(0,a.kt)("inlineCode",{parentName:"p"},"getNextPage")," using our new hook."),(0,a.kt)("p",null,"Since UI behaviors vary widely, and implementations vary from platform (react-native or web),\nwe'll just assume a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pagination")," component is built, that uses a callback to trigger next\npage fetching. On web, it is recommended to use something based on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Pagination />")," is assumed to call its ",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate")," prop when a user scrolls and its\n",(0,a.kt)("inlineCode",{parentName:"p"},"nextCursor")," is not falsy. It will then pass the nextCursor prop as the sole argument to\n",(0,a.kt)("inlineCode",{parentName:"p"},"onPaginate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport NewsResource from 'resources/NewsResource';\nimport usePaginator from 'resources/basePaginator';\n\nfunction NewsList() {\n  const { results, cursor } = useResource(NewsResource.listShape(), {});\n  const getNextPage = usePaginator(NewsResource.listShape(), {});\n\n  return (\n    <Pagination onPaginate={getNextPage} nextCursor={cursor}>\n      <NewsList data={results} />\n    </Pagination>\n  );\n}\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);