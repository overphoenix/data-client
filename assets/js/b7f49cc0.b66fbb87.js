"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79031],{14038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"useInvalidator()",id:"useInvalidator",original_id:"useInvalidator"},o=void 0,s={unversionedId:"api/useInvalidator",id:"version-4.3/api/useInvalidator",title:"useInvalidator()",description:"Mostly useful for imperatively invalidating the cache, with a similar signature to",source:"@site/versioned_docs/version-4.3/api/useInvalidator.md",sourceDirName:"api",slug:"/api/useInvalidator",permalink:"/docs/4.3/api/useInvalidator",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useInvalidator.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"useInvalidator()",id:"useInvalidator",original_id:"useInvalidator"},sidebar:"version-4.3/docs",previous:{title:"useRetrieve()",permalink:"/docs/4.3/api/useRetrieve"},next:{title:"useResetter()",permalink:"/docs/4.3/api/useResetter"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator(\n  fetchShape: ReadShape,\n): (params: object | null) => void;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator<Params extends Readonly<object>, S extends Schema>(\n  fetchShape: ReadShape<S, Params>,\n): (params: Params | null) => void;\n")),(0,r.kt)("p",null,"Mostly useful for imperatively invalidating the cache, with a similar signature to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/useFetcher"},"useFetcher"),"."),(0,r.kt)("p",null,"Sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to params results in a no-op."),(0,r.kt)("p",null,"When used in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/FetchShape#invalidifstale-boolean"},"invalidIfStale"),"\nit can force a component to re-suspend even if it has already fetched the data. Normally\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/useresource"},"useResource")," will not suspend if the data is in the cache, even if it\nis stale. By pairing this option with ",(0,r.kt)("inlineCode",{parentName:"p"},"useInvalidator")," the component will act as though it\nhas never tried to fetch the resource before and trigger a fetch with suspense."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, FetchOptions } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string = null;\n  readonly title: string = '';\n  // ...\n\n  /** Used as default options for every FetchShape */\n  static getFetchOptions(): FetchOptions {\n    return {\n      invalidIfStale: true,\n    };\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Invalidate cache on unmount. When component is remounted it will re-fetch\nfunction useInvalidateOnUnmount<\n  Params extends Readonly<object>,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params>, params: Params | null) {\n  const invalidate = useInvalidator(fetchShape);\n\n  useEffect(() => {\n    return () => invalidate(params);\n  }, []);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const asset = useResource(ArticleResource.detailShape(), { id });\n  useInvalidateOnUnmount(ArticleResource.detailShape(), { id });\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);