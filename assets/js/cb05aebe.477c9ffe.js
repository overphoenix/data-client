"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39736],{91262:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(72389);function a(e){let{children:t,fallback:n}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,null==t?void 0:t()):n??null}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294),r=n(86010),a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(86010),s=n(72389),l=n(67392),i=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:R}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),o=v[n].value;o!==N&&(R(t),T(o),null!=h&&w(h,String(o)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},k)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:E,onClick:E},s,{className:(0,a.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}},66412:(e,t,n)=>{n.d(t,{p:()=>a});var o=n(92949),r=n(86668);function a(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(65488),r=n(85162),a=n(67294),s=n(75690);function l(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(r.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{var o=n(67294),r=n(72887);const a={React:o,...o,...r};t.Z=a},10018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(96497),s=n(65488),l=n(85162);const i={title:"Unit testing hooks"},c=void 0,u={unversionedId:"guides/unit-testing-hooks",id:"version-6.1/guides/unit-testing-hooks",title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/versioned_docs/version-6.1/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/6.1/guides/unit-testing-hooks",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Unit testing hooks"},sidebar:"version-6.1/docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/6.1/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/6.1/guides/unit-testing-components"}},p={},d=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",level:3},{value:"Example:",id:"example",level:3}],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,r.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,r.kt)("p",null,"We want a ",(0,r.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,r.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,r.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,r.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state.")),(0,r.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,r.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,r.kt)(a.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,r.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"jest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useResource()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useResource(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}h.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>s});var o=n(87410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(67294),s={Prism:o.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?i({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=i({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,l=[],i=[l];s>-1;){for(;(a=o[s]++)<r[s];){var d=void 0,m=t[s],h=n[s][a];if("string"==typeof h?(m=s>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var k=d.split(c),y=k.length;l.push({types:m,content:k[0]});for(var v=1;v<y;v++)u(l),i.push(l=[]),l.push({types:m,content:k[v]})}else s++,t.push(m),n.push(d),o.push(0),r.push(d.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return u(l),i}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);