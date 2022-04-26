"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Pagination"},a=void 0,s={unversionedId:"guides/pagination",id:"version-6.2/guides/pagination",title:"Pagination",description:"Tokens in Body",source:"@site/versioned_docs/version-6.2/guides/pagination.md",sourceDirName:"guides",slug:"/guides/pagination",permalink:"/docs/6.2/guides/pagination",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/pagination.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Typing REST Endpoints",permalink:"/docs/6.2/guides/rest-types"},next:{title:"Authentication",permalink:"/docs/6.2/guides/auth"}},l={},c=[{value:"Tokens in Body",id:"tokens-in-body",level:2},{value:"Tokens in HTTP Headers",id:"tokens-in-http-headers",level:2},{value:"Code organization",id:"code-organization",level:2},{value:"Infinite Scrolling",id:"infinite-scrolling",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tokens-in-body"},"Tokens in Body"),(0,i.kt)("p",null,"A common way APIs deal with pagination is the list view will return an object with both pagination information\nand the Array of results as another member."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET http://test.com/article/?page=abcd")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nextPage": null,\n  "prevPage": "http://test.com/article/?page=aedcba",\n  "results": [\n    {\n      "id": 5,\n      "content": "have a merry christmas",\n      "author": 2,\n      "contributors": []\n    },\n    {\n      "id": 532,\n      "content": "never again",\n      "author": 23,\n      "contributors": [5]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"To deal with our specific endpoint, we'll need to customize the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint")," of lists to\nunderstand how to normalize the results (via schema). Be sure to provide defaults in your schema for any members\nthat aren't entities."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"resources/ArticleResource.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, SchemaList, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', prevPage: '' },\n    });\n  }\n}\n")),(0,i.kt)("p",null,"Now we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"list()")," to get not only the articles, but also our ",(0,i.kt)("inlineCode",{parentName:"p"},"nextPage"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"prevPage")," values. We can use those tokens to define our pagination buttons."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ArticleList.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList() {\n  const { results: articles, nextPage, prevPage } = useSuspense(\n    ArticleResource.list(),\n    {},\n  );\n  return (\n    <>\n      <div>\n        {articles.map(article => (\n          <Article key={article.pk()} article={article} />\n        ))}\n      </div>\n      {prevPage && <Link to={prevPage}>\u2039 Prev</Link>}\n      {nextPage && <Link to={nextPage}>Next \u203a</Link>}\n    </>\n  );\n}\n")),(0,i.kt)("h2",{id:"tokens-in-http-headers"},"Tokens in HTTP Headers"),(0,i.kt)("p",null,"In some cases the pagination tokens will be embeded in HTTP headers, rather than part of the payload. In this\ncase you'll need to customize the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"fetch()")," function\nfor ",(0,i.kt)("a",{parentName:"p",href:"../api/resource#list-endpoint"},"list()")," so the pagination headers are included fetch object."),(0,i.kt)("p",null,"We show the custom list() below. All other parts of the above example remain the same."),(0,i.kt)("p",null,"Pagination token is stored in the header ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," for this example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(this: T) {\n    const instanceFetchResponse = this.fetchResponse.bind(this);\n\n    return super.list().extend({\n      fetch: async function (params: Readonly<Record<string, string | number>>) {\n        const response = await instanceFetchResponse(this.url(params), this.init);\n        return {\n          link: response.headers.get('link'),\n          results: await response.json().catch((error: any) => {\n            error.status = 400;\n            throw error;\n        };\n      },\n      schema: { results: [this], link: '' },\n    });\n  }\n}\n")),(0,i.kt)("h2",{id:"code-organization"},"Code organization"),(0,i.kt)("p",null,"If much of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar pagination, you might\ntry extending from a base class that defines such common customizations."),(0,i.kt)("h2",{id:"infinite-scrolling"},"Infinite Scrolling"),(0,i.kt)("p",null,"Sometimes pagination results are presented as an infinite scrolling list.\n",(0,i.kt)("a",{parentName:"p",href:"./infinite-scrolling-pagination"},"Infinite scrolling pagination")," guide explains more about this."))}u.isMDXComponent=!0}}]);