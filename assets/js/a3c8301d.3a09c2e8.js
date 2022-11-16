/*! For license information please see a3c8301d.3a09c2e8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73954],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var v=b.prototype=new k;v.constructor=b,g(v,y.prototype),v.isPureReactComponent=!0;var w=Array.isArray,P=Object.prototype.hasOwnProperty,N={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,o)&&!R.hasOwnProperty(o)&&(s[o]=t[o]);var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===s[o]&&(s[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:i,props:s,_owner:N.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var A=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===s?"."+j(l,0):s,w(a)?(o="",null!=e&&(o=e.replace(A,"$&/")+"/"),E(a,t,o,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+e)),t.push(a)),1;if(l=0,s=""===s?".":s+":",w(e))for(var c=0;c<e.length;c++){var u=s+j(i=e[c],c);l+=E(i,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=E(i=i.value,t,o,u=s+j(i,c++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function S(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},T={transition:null}},27378:(e,t,n)=>{n(41535)},92154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(27378),n(3905));const s={title:"Pagination"},a=void 0,i={unversionedId:"guides/pagination",id:"guides/pagination",title:"Pagination",description:"Paginating REST data",source:"@site/../docs/rest/guides/pagination.md",sourceDirName:"guides",slug:"/guides/pagination",permalink:"/rest/guides/pagination",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/pagination.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668625138,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Usage",permalink:"/rest/"},next:{title:"Authentication",permalink:"/rest/guides/auth"}},l={},c=[{value:"Infinite Scrolling",id:"infinite-scrolling",level:2},{value:"Tokens in Body",id:"tokens-in-body",level:2},{value:"Tokens in HTTP Headers",id:"tokens-in-http-headers",level:2},{value:"Code organization",id:"code-organization",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Paginating REST data")),(0,o.kt)("h2",{id:"infinite-scrolling"},"Infinite Scrolling"),(0,o.kt)("p",null,"In case you want to append results to your existing list, rather than move to another page\n",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#paginated"},"RestEndpoint.paginated()")," can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/News.ts"',title:'"api/News.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class News extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title = '';\n  readonly url = '';\n  readonly previewImage = '';\n\n  pk() {\n    return this.id;\n  }\n}\nconst BaseNewsResource = createResource({\n  path: '/news/:id',\n  schema: News,\n});\n// custom schema\nconst getList = BaseNewsResource.getList.extend({\n  schema: { results: [News], cursor: '' },\n});\n// this creates a pagination endpoint that will extend the getList endpoint\nconst getNextPage = getList.paginated(\n  ({ cursor, ...rest }: { cursor: string | number }) =>\n    (Object.keys(rest).length ? [rest] : []) as any,\n);\nexport const NewsResource = {\n  ...BaseNewsResource,\n  getList,\n  getNextPage,\n};\n")),(0,o.kt)("p",null,"Since UI behaviors vary widely, and implementations vary from platform (react-native or web),\nwe'll just assume a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pagination")," component is built, that uses a callback to trigger next\npage fetching. On web, it is recommended to use something based on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense, useController } from '@rest-hooks/react';\nimport { NewsResource } from 'api/News';\n\nfunction NewsList() {\n  const { results, cursor } = useSuspense(NewsResource.getList);\n  const controller = useController();\n\n  return (\n    <Pagination\n      onPaginate={() => controller.fetch(NewsResource.getNextPage, { cursor })}\n    >\n      <NewsList data={results} />\n    </Pagination>\n  );\n}\n")),(0,o.kt)("h2",{id:"tokens-in-body"},"Tokens in Body"),(0,o.kt)("p",null,"A common way APIs deal with pagination is the list view will return an object with both pagination information\nand the Array of results as another member."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GET http://test.com/article/?page=abcd"',title:'"GET',"http://test.com/article/?page":'abcd"'},'{\n  "nextPage": null,\n  "prevPage": "http://test.com/article/?page=aedcba",\n  "results": [\n    {\n      "id": 5,\n      "content": "have a merry christmas",\n      "author": 2,\n      "contributors": []\n    },\n    {\n      "id": 532,\n      "content": "never again",\n      "author": 23,\n      "contributors": [5]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"To deal with our specific endpoint, we'll need to customize the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," of lists to\nunderstand how to normalize the results (via schema). Be sure to provide defaults in your schema for any members\nthat aren't entities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport { User } from 'api';\n\nexport class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nconst BaseArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  getList: BaseArticleResource.getList.extend({\n    schema: { results: [Article], nextPage: '', prevPage: '' },\n  }),\n};\n")),(0,o.kt)("p",null,"Now we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," to get not only the articles, but also our ",(0,o.kt)("inlineCode",{parentName:"p"},"nextPage"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"prevPage")," values. We can use those tokens to define our pagination buttons."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.tsx"',title:'"ArticleList.tsx"'},"import { useSuspense } from '@rest-hooks/react';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList() {\n  const {\n    results: articles,\n    nextPage,\n    prevPage,\n  } = useSuspense(ArticleResource.getList);\n  return (\n    <>\n      <div>\n        {articles.map(article => (\n          <Article key={article.pk()} article={article} />\n        ))}\n      </div>\n      {prevPage && <Link to={prevPage}>\u2039 Prev</Link>}\n      {nextPage && <Link to={nextPage}>Next \u203a</Link>}\n    </>\n  );\n}\n")),(0,o.kt)("h2",{id:"tokens-in-http-headers"},"Tokens in HTTP Headers"),(0,o.kt)("p",null,"In some cases the pagination tokens will be embeded in HTTP headers, rather than part of the payload. In this\ncase you'll need to customize the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#parseResponse"},"parseResponse()")," function\nfor ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#getlist"},"getList")," so the pagination headers are included fetch object."),(0,o.kt)("p",null,"We show the custom ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," below. All other parts of the above example remain the same."),(0,o.kt)("p",null,"Pagination token is stored in the header ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," for this example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  getList: BaseArticleResource.getList.extend({\n    schema: { results: [Article], link: '' },\n    async parseResponse(response: Response) {\n      const results = await BaseArticleResource.getList.parseResponse(response);\n      if (\n        (response.headers && response.headers.has('link')) ||\n        Array.isArray(results)\n      ) {\n        return {\n          link: response.headers.get('link'),\n          results,\n        };\n      }\n      return results;\n    },\n  }),\n};\n")),(0,o.kt)("h2",{id:"code-organization"},"Code organization"),(0,o.kt)("p",null,"If much of your API share a similar pagination, you might\ntry a custom Endpoint class that shares this logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/PagingEndpoint.ts"',title:'"api/PagingEndpoint.ts"'},"import { RestEndpoint, type RestGenerics } from '@rest-hooks/rest';\n\nexport class PagingEndpoint<\n  O extends RestGenerics = any,\n> extends RestEndpoint<O> {\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/My.ts"',title:'"api/My.ts"'},"import { createResource, Entity } from '@rest-hooks/rest';\n\nimport { PagingEndpoint } from './PagingEndpoint';\n\nexport const MyResource = createResource({\n  path: '/stuff/:id',\n  schema: MyEntity,\n  Endpoint: PagingEndpoint,\n});\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);