/*! For license information please see 6a84809e.450e8343.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29387],{41535:(e,t)=>{var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,t,a){this.props=e,this.context=t,this.refs=y,this.updater=a||f}function k(){}function v(e,t,a){this.props=e,this.context=t,this.refs=y,this.updater=a||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var g=v.prototype=new k;g.constructor=v,h(g,b.prototype),g.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,A={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,l={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(1===i)l.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===l[r]&&(l[r]=i[r]);return{$$typeof:a,type:e,key:o,ref:s,props:l,_owner:A.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,l,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case n:i=!0}}if(i)return o=o(i=e),e=""===l?"."+T(i,0):l,w(o)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),_(o,t,r,"",(function(e){return e}))):null!=o&&(N(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),t.push(o)),1;if(i=0,l=""===l?".":l+":",w(e))for(var u=0;u<e.length;u++){var c=l+T(s=e[u],u);i+=_(s,t,r,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)i+=_(s=s.value,t,r,c=l+T(s,u++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Z(e,t,a){if(null==e)return e;var n=[],r=0;return _(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null}},27378:(e,t,a)=>{a(41535)},70819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(27378),a(3905)),l=a(70523),o=a(65488),s=a(85162),i=a(96497);const u={id:"README",title:"REST Usage",sidebar_label:"Usage"},c=void 0,p={unversionedId:"README",id:"README",title:"REST Usage",description:"Using REST APIs with Rest Hooks",source:"@site/../docs/rest/README.md",sourceDirName:".",slug:"/",permalink:"/rest/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665377429,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{id:"README",title:"REST Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Pagination",permalink:"/rest/guides/pagination"}},d={},m=[{value:"Define the API",id:"define-the-api",level:2},{value:"Bind the data with Suspense",id:"bind-the-data-with-suspense",level:2},{value:"Mutate the data",id:"mutate-the-data",level:2}],f={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Using REST APIs with Rest Hooks")),(0,r.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"define-the-api"},"Define the API"),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  id: number | undefined = undefined;\n  title = '';\n  content = '';\n  author: number | null = null;\n  tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="api/Article.js"',title:'"api/Article.js"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n"))),(0,r.kt)("p",null,"Our definitions are composed of two pieces. Our data model defined by ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema")," and the\nnetworking endpoints defined by ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"."),(0,r.kt)("h2",{id:"bind-the-data-with-suspense"},"Bind the data with Suspense"),(0,r.kt)(o.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport { ArticleResource } from 'api/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,r.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport { ArticleResource } from 'api/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList() {\n  const articles = useSuspense(ArticleResource.getList);\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#dataexpirylength"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#async-fallbacks"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,r.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,r.kt)("a",{parentName:"li",href:"/rest/api/RestEndpoint"},"endpoints"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,r.kt)("h2",{id:"mutate-the-data"},"Mutate the data"),(0,r.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport { ArticleResource } from \'api/article\';\n\nexport default function NewArticleForm() {\n  const controller = useController();\n  return (\n    <Form\n      onSubmit={e =>\n        controller.fetch(ArticleResource.create, new FormData(e.target))\n      }\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/createResource#create"},"create")," then takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,r.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'rest-hooks\';\nimport { ArticleResource } from \'api/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  const controller = useController();\n  return (\n    <Form\n      onSubmit={e =>\n        controller.fetch(ArticleResource.update, { id }, new FormData(e.target))\n      }\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"update")," then takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nthen takes any ",(0,r.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,r.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},"import { useController } from 'rest-hooks';\nimport { Article, ArticleResource } from 'api/article';\n\nexport default function ArticleWithDelete({ article }: { article: Article }) {\n  const controller = useController();\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button\n        onClick={() =>\n          controller.fetch(ArticleResource.delete, { id: article.id })\n        }\n      >\n        Delete\n      </button>\n    </article>\n  );\n}\n")))),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,r.kt)("p",null,"Mutations automatically update the normalized cache, resulting in consistent and fresh data."))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[S,A]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==S&&b.some((t=>t.value===e))&&A(e)}const N=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==S&&(E(t),A(n),null!=f&&w(f,String(n)))},R=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>x.push(e),onKeyDown:R,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70523:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(65488),r=a(85162),l=a(67294);function o(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}},96497:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(65488),r=a(85162),l=a(67294),o=a(75690);function s(e){let{pkgs:t,dev:a=!1}=e;return l.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(r.Z,{value:"yarn"},l.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),l.createElement(r.Z,{value:"npm"},l.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{var n=a(67294),r=a(72887);const l={React:n,...n,...r};t.Z=l}}]);