"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82548],{40368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Optimistic Updates"},s=void 0,o={unversionedId:"guides/optimistic-updates",id:"version-4.0/guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.",source:"@site/versioned_docs/version-4.0/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/docs/4.0/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/optimistic-updates.md",tags:[],version:"4.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Optimistic Updates"}},l={},c=[{value:"Partial updates",id:"partial-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets",level:3},{value:"PublishButton.tsx",id:"publishbuttontsx",level:3},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"ArticleResource.ts",id:"articleresourcets-1",level:3},{value:"CreateArticle.tsx",id:"createarticletsx",level:3},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("h3",{id:"articleresourcets"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  MutateEndpoint,\n  SchemaDetail,\n  AbstractInstanceType,\n} from 'rest-hooks';\nimport { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static partialUpdate<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.partialUpdate().extend({\n      optimisticUpdate: (params: any, body: any) => ({\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      }),\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"publishbuttontsx"},"PublishButton.tsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'ArticleResource';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const update = useFetcher(ArticleResource.partialUpdate());\n\n  return (\n    <button onClick={() => update({ id }, { published: true })}>Publish</button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("h3",{id:"articleresourcets-1"},"ArticleResource.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  MutateEndpoint,\n  AbstractInstanceType,\n} from 'rest-hooks';\nimport { SchemaDetail, Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<\n    (p: Readonly<object>, b: Partial<AbstractInstanceType<T>>) => Promise<any>,\n    SchemaDetail<Readonly<AbstractInstanceType<T>>>\n  > {\n    return super.create().extend({\n      optimisticUpdate: (\n        params: Readonly<object>,\n        body: Readonly<object | string> | void,\n      ) => body,\n    });\n  }\n}\n\nexport const appendUpdater = (\n  newArticleID: string,\n  articleIDs: string[] | undefined,\n) => [...(articleIDs || []), newArticleID];\n")),(0,i.kt)("h3",{id:"createarticletsx"},"CreateArticle.tsx"),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useFetcher } from 'rest-hooks';\nimport uuid from 'uuid/v4';\nimport ArticleResource from 'ArticleResource';\n\nexport default function CreateArticle() {\n  const create = useFetcher(ArticleResource.create());\n  const submitHandler = useCallback(\n    data =>\n      // note the fake id we create.\n      create({}, { id: uuid(), ...data }, [\n        [ArticleResource.list(), {}, appendUpdater],\n      ]),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"./immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint#optimisticupdate-params-body--fakepayload"},"optimisticUpdate"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Resource, SimpleResource } from '@rest-hooks/rest';\nimport { MutateEndpoint } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n\n  static delete<T extends typeof Resource>(\n    this: T,\n  ): MutateEndpoint<(p: Readonly<object>) => Promise<any>, schemas.Delete<T>> {\n    return super.delete().extend({\n      optimisticUpdate: (params: any, body: any) => params,\n    });\n  }\n}\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);