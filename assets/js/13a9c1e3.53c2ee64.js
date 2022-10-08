"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87811],{85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010),r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),s=n(72389),l=n(67392),i=n(7094),u=n(12466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:k,className:h}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[N,x]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:R}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==N&&(R(t),x(a),null!=k&&w(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},h)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:E,onClick:E},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(65488),o=n(85162),r=n(67294),s=n(75690);function l(e){let{pkgs:t,dev:n=!1}=e;return r.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(o.Z,{value:"yarn"},r.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),r.createElement(o.Z,{value:"npm"},r.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{var a=n(67294),o=n(72887);const r={React:a,...a,...o};t.Z=r},31502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(96497),s=n(65488),l=n(85162);const i={title:"Unit testing hooks"},u=void 0,d={unversionedId:"guides/unit-testing-hooks",id:"version-6.3/guides/unit-testing-hooks",title:"Unit testing hooks",description:"Do not use jest.mock on any rest-hooks library. This will likely result in hard-to trace",source:"@site/versioned_docs/version-6.3/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/6.3/guides/unit-testing-hooks",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Unit testing hooks"},sidebar:"docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/6.3/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/6.3/guides/unit-testing-components"}},c={},p=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",level:3},{value:"Example:",id:"example",level:3}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Do ",(0,o.kt)("em",{parentName:"p"},"not")," use jest.mock on any rest-hooks library. This will likely result in hard-to trace\nerrors like ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeError: Class extends value undefined is not a function or null"),".")),(0,o.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,o.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,o.kt)("p",null,"We want a ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,o.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,o.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state.")),(0,o.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,o.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,o.kt)(r.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,o.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"jest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,o.kt)(l.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}k.isMDXComponent=!0}}]);