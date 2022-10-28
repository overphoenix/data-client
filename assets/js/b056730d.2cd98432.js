"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66154],{93760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const o={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)",id:"nested-response",original_id:"nested-response"},i=void 0,c={unversionedId:"guides/nested-response",id:"version-2.2/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-2.2/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/2.2/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)",id:"nested-response",original_id:"nested-response"},sidebar:"version-2.2/docs",previous:{title:"Multi-column primary key",permalink:"/docs/2.2/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/2.2/guides/rpc"}},a={},u=[{value:"getEntitySchema",id:"getentityschema",level:2},{value:"<code>resources/ArticleResource.ts</code>",id:"resourcesarticleresourcets",level:4},{value:"<code>ArticleList.tsx</code>",id:"articlelisttsx",level:4},{value:"Circular dependencies",id:"circular-dependencies",level:2},{value:"<code>resources/ArticleResource.ts</code>",id:"resourcesarticleresourcets-1",level:4},{value:"<code>resources/UserResource.ts</code>",id:"resourcesuserresourcets",level:4}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,s.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource"},"Resource")," defintion.\nThese should be the primary keys of the entities we care about."),(0,s.kt)("p",null,"Next we'll need to extend the schema definition provided by ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource#static-getentityschema-schemaentity-https-githubcom-paularmstrong-normalizr-blob-master-docs-apimd-entitykey-definition-options"},"getEntitySchema()"),"."),(0,s.kt)("h2",{id:"getentityschema"},"getEntitySchema"),(0,s.kt)("h4",{id:"resourcesarticleresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ArticleResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Resource } from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  // operative method!\n  static getEntitySchema<T extends typeof Resource>(this: T) {\n    const schema = super.getEntitySchema();\n    schema.define({\n      author: UserResource.getEntitySchema(),\n      contributors: [UserResource.getEntitySchema()],\n    });\n    return schema;\n  }\n}\n")),(0,s.kt)("p",null,"Upon fetching the nested items will end up in the cache so they can be retrieved with ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/useCache"},"useCache()")),(0,s.kt)("h4",{id:"articlelisttsx"},(0,s.kt)("inlineCode",{parentName:"h4"},"ArticleList.tsx")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList({ id }: { id: number }) {\n  const articles = useResource(ArticleResource.listShape(), { id });\n\n  return (\n    <React.Fragment>\n      {articles.map(article => (\n        <ArticleInline key={article.pk()} article={article} />\n      ))}\n    </React.Fragment>\n  );\n}\n\nfunction ArticleInline({ article }: { article: ArticleResource }) {\n  const author = useCache(UserResource.detailShape(), { id: article.author });\n  // some jsx here\n}\n")),(0,s.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,s.kt)("p",null,"If two or more ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource#static-getentityschema-schemaentity-https-githubcom-paularmstrong-normalizr-blob-master-docs-apimd-entitykey-definition-options"},"getEntitySchema()")," to avoid circular imports."),(0,s.kt)("h4",{id:"resourcesarticleresourcets-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/ArticleResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  // operative method!\n  static getEntitySchema<T extends typeof Resource>(this: T) {\n    const schema = super.getEntitySchema();\n    schema.define({\n      author: UserResource.getEntitySchema(),\n      contributors: [UserResource.getEntitySchema()],\n    });\n    return schema;\n  }\n}\n\nUserResource.getEntitySchema = function <T extends typeof Resource>(this: T) {\n  // can't use 'super' here :(\n  const schema = Resource.getEntitySchema();\n  schema.define({\n    posts: [ArticleResource.getEntitySchema()],\n  });\n  return schema;\n}\n")),(0,s.kt)("h4",{id:"resourcesuserresourcets"},(0,s.kt)("inlineCode",{parentName:"h4"},"resources/UserResource.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n// no need to import ArticleResource as the getEntitySchema() override happens there.\n\nexport default class UserResource extends Resource {\n  readonly id: number | null = null;\n  readonly name: string = '';\n  readonly posts: number[] = [];\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/user/';\n\n}\n")))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,h=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);