/*! For license information please see e1b51238.8d0e3deb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79222],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var k=g.prototype=new v;k.constructor=g,y(k,h.prototype),k.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var o,a={},s=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!A.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:s,ref:l,props:a,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return s=s(i=e),e=""===a?"."+j(i,0):a,x(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),_(s,t,o,"",(function(e){return e}))):null!=s&&(N(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(i=0,a=""===a?".":a+":",x(e))for(var u=0;u<e.length;u++){var c=a+j(l=e[u],u);i+=_(l,t,o,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)i+=_(l=l.value,t,o,c=a+j(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function E(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010),a="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),o=r(67294),a=r(86010),s=r(72389),l=r(67392),i=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:f,groupId:m,className:y}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[w,S]=(0,o.useState)(g),A=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&S(e)}const N=e=>{const t=e.currentTarget,r=A.indexOf(t),n=h[r].value;n!==w&&(R(t),S(n),null!=m&&x(m,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;r=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;r=A[t]??A[A.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},y)},h.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>A.push(e),onKeyDown:O,onFocus:N,onClick:N},s,{className:(0,a.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,s.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},82250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(27378),r(3905)),a=r(65488),s=r(85162);const l={title:"Mocking data for Storybook"},i=void 0,u={unversionedId:"guides/storybook",id:"guides/storybook",title:"Mocking data for Storybook",description:"Storybook is a great utility to do isolated development and",source:"@site/../docs/core/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/guides/storybook",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/storybook.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Mocking data for Storybook"},sidebar:"docs",previous:{title:"Debugging",permalink:"/docs/guides/debugging"},next:{title:"Unit testing hooks",permalink:"/docs/guides/unit-testing-hooks"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"Fixtures",id:"fixtures",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Story",id:"story",level:2}],d={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is a great utility to do isolated development and\ntesting, potentially speeding up development time greatly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/MockResolver"},"<MockResolver /",">")," enables easy loading of fixtures to see what\ndifferent network responses might look like. It can be layered, composed, and even used\nfor ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"imperative fetches")," usually used with side-effect endpoints like ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#create"},"create")," and ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"update"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{defaultValue:"ArticleResource.ts",values:[{label:"Resource",value:"ArticleResource.ts"},{label:"Component",value:"ArticleList.tsx"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ArticleResource.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"export class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n\nexport let ArticleFixtures: Record<string, FixtureEndpoint> = {};\n"))),(0,o.kt)(s.Z,{value:"ArticleList.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.tsx"',title:'"ArticleList.tsx"'},"import { ArticleResource } from 'resources/ArticleResource';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList({ maxResults }: { maxResults: number }) {\n  const articles = useSuspense(ArticleResource.getList, { maxResults });\n  return (\n    <div>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </div>\n  );\n}\n")))),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"We'll test three cases: some interesting results in the list, an empty list, and data not\nexisting so loading fallback is shown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"// leave out in production so we don't bloat the bundle\nif (process.env.NODE_ENV !== 'production') {\n  ArticleFixtures = {\n    full: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: [\n          {\n            id: 5,\n            content: 'have a merry christmas',\n            author: 2,\n            contributors: [],\n          },\n          {\n            id: 532,\n            content: 'never again',\n            author: 23,\n            contributors: [5],\n          },\n        ],\n      },\n      {\n        endpoint: ArticleResource.update,\n        args: [{ id: 532 }] as const,\n        response: {\n          id: 532,\n          content: 'updated \"never again\"',\n          author: 23,\n          contributors: [5],\n        },\n      },\n    ],\n    empty: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: [],\n      },\n    ],\n    error: [\n      {\n        endpoint: ArticleResource.getList,\n        args: [{ maxResults: 10 }] as const,\n        response: { message: 'Bad request', status: 400, name: 'Not Found' },\n        error: true,\n      },\n    ],\n    loading: [],\n  };\n}\n")),(0,o.kt)("h2",{id:"decorators"},"Decorators"),(0,o.kt)("p",null,"You'll need to add the appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators"},"global decorators")," to establish the correct context."),(0,o.kt)("p",null,"This should resemble what you have added in ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#add-provider-at-top-level-component"},"initial setup")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title=".storybook/preview.tsx"',title:'".storybook/preview.tsx"'},"import { Suspense } from 'react';\nimport { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';\n\nexport const decorators = [\n  Story => (\n    <CacheProvider>\n      <Suspense fallback=\"loading\">\n        <NetworkErrorBoundary>\n          <Story />\n        </NetworkErrorBoundary>\n      </Suspense>\n    </CacheProvider>\n  ),\n];\n")),(0,o.kt)("h2",{id:"story"},"Story"),(0,o.kt)("p",null,"Wrapping our component with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/MockResolver"},"<MockResolver /",">")," enables us to declaratively\ncontrol how Rest Hooks' fetches are resolved."),(0,o.kt)("p",null,"Here we select which fixtures should be used by ",(0,o.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"storybook controls"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleList.stories.tsx"',title:'"ArticleList.stories.tsx"'},"import { MockResolver } from '@rest-hooks/test';\nimport type { Fixture } from '@rest-hooks/test';\nimport { Story } from '@storybook/react/types-6-0';\n\nimport ArticleList from 'ArticleList';\nimport { ArticleFixtures } from 'resources/ArticleResource';\n\nexport default {\n  title: 'Pages/ArticleList',\n  component: ArticleList,\n  argTypes: {\n    result: {\n      description: 'Results',\n      defaultValue: 'full',\n      control: {\n        type: 'select',\n        options: Object.keys(ArticleFixtures),\n      },\n    },\n  },\n};\n\nconst Template: Story<{ result: keyof typeof options }> = ({ result }) => (\n  // highlight-next-line\n  <MockResolver fixtures={options[result]}>\n    <ArticleList maxResults={10} />\n    // highlight-next-line\n  </MockResolver>\n);\n\nexport const FullArticleList = Template.bind({});\n\nFullArticleList.args = {\n  result: 'full',\n};\n")))}f.isMDXComponent=!0}}]);