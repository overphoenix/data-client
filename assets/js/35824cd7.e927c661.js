"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53519],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),s=a(72389),o=a(67392),i=a(7094),u=a(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:m,groupId:h,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),g=(0,o.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,i.U)(),[R,x]=(0,n.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==R&&y.some((t=>t.value===e))&&x(e)}const A=e=>{const t=e.currentTarget,a=w.indexOf(t),r=y[a].value;r!==R&&(T(t),x(r),null!=h&&N(h,String(r)))},F=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},y.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>w.push(e),onKeyDown:F,onFocus:A,onClick:A},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":R===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function m(e){const t=(0,s.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},70523:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(65488),n=a(85162),l=a(67294);function s(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(n.Z,{value:"ts"},t[0]),l.createElement(n.Z,{value:"js"},t[1]))}},96497:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(65488),n=a(85162),l=a(67294),s=a(75690);function o(e){let{pkgs:t,dev:a=!1}=e;return l.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{var r=a(67294),n=a(72887);const l={React:r,...r,...n};t.Z=l},4692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(70523),s=a(65488),o=a(85162),i=a(96497);const u={id:"usage",title:"Usage"},c=void 0,d={unversionedId:"rest/usage",id:"version-5.0/rest/usage",title:"Usage",description:"Define a Resource",source:"@site/versioned_docs/version-5.0/rest/usage.md",sourceDirName:"rest",slug:"/rest/usage",permalink:"/docs/5.0/rest/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/usage.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"Sep 8, 2021",frontMatter:{id:"usage",title:"Usage"},sidebar:"version-5.0/docs",previous:{title:"Expiry Policy",permalink:"/docs/5.0/getting-started/expiry-policy"},next:{title:"Resource types",permalink:"/docs/5.0/guides/resource-types"}},p={},m=[{value:"Define a Resource",id:"define-a-resource",level:2},{value:"<code>resources/article.ts</code>",id:"resourcesarticlets",level:4},{value:"Use the Resource",id:"use-the-resource",level:2},{value:"Dispatch mutation",id:"dispatch-mutation",level:2},{value:"<code>article.tsx</code>",id:"articletsx",level:4}],h={toc:m};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"define-a-resource"},"Define a Resource"),(0,n.kt)("h4",{id:"resourcesarticlets"},(0,n.kt)("inlineCode",{parentName:"h4"},"resources/article.ts")),(0,n.kt)(l.Z,{mdxType:"LanguageTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource"),"s are immutable. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,n.kt)("p",null,"Default values ensure simpler types, which means less conditionals in your components."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"pk()")," is essential to tell Rest Hooks how to normalize the data. This ensures consistency\nand the best performance characteristics possible."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"static urlRoot")," is used as the basis of common ",(0,n.kt)("a",{parentName:"p",href:"../guides/url"},"url patterns")),(0,n.kt)("p",null,"APIs quickly get much more complicated! ",(0,n.kt)("a",{parentName:"p",href:"../guides/resource-types"},"Customizing Resources to fit your API")),(0,n.kt)("h2",{id:"use-the-resource"},"Use the Resource"),(0,n.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,n.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ sortBy }: { sortBy: string }) {\n  const articles = useResource(ArticleResource.list(), { sortBy });\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,n.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,n.kt)("a",{parentName:"p",href:"../guides/loading-state"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,n.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,n.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,n.kt)("h2",{id:"dispatch-mutation"},(0,n.kt)("a",{parentName:"h2",href:"/docs/5.0/api/useFetcher"},"Dispatch mutation")),(0,n.kt)("h4",{id:"articletsx"},(0,n.kt)("inlineCode",{parentName:"h4"},"article.tsx")),(0,n.kt)(s.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Create",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function NewArticleForm() {\n  const create = useFetcher(ArticleResource.create());\n  // create as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form onSubmit={e => create({}, new FormData(e.target))}>\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"create()")," then takes any ",(0,n.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,n.kt)(o.Z,{value:"Update",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useFetcher } from \'rest-hooks\';\nimport ArticleResource from \'resources/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useResource(ArticleResource.detail(), { id });\n  const update = useFetcher(ArticleResource.update());\n  // update as (body: Readonly<Partial<ArticleResource>>, params?: Readonly<object>) => Promise<any>\n  return (\n    <Form\n      onSubmit={e => update({ id }, new FormData(e.target))}\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"update()")," then takes any ",(0,n.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,n.kt)(o.Z,{value:"Delete",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useFetcher } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function ArticleWithDelete({ article }: { article: ArticleResource }) {\n  const del = useFetcher(ArticleResource.delete());\n  // del as (body: any, params?: Readonly<object>) => Promise<any>\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button onClick={() => del({ id: article.id })}>Delete</button>\n    </article>\n  );\n}\n")))),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,n.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}k.isMDXComponent=!0}}]);