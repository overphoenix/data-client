/*! For license information please see 67390e55.3eec3c32.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[71728],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var g=b.prototype=new y;g.constructor=b,h(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,x={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var o,a={},s=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,o)&&!R.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:s,ref:l,props:a,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===a?"."+j(i,0):a,w(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),_(s,t,o,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(i=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+j(l=e[u],u);i+=_(l,t,o,c,s)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(l=e.next()).done;)i+=_(l=l.value,t,o,c=a+j(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function H(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},Z={transition:null}},27378:(e,t,n)=>{n(41535)},58215:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),o=n(67294),a=n(72389),s=n(51548),l=n(86010);const i="tabItem_LplD";function u(e){var t,n;const{lazy:a,block:u,defaultValue:c,values:p,groupId:d,className:m}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,s.lx)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=f[0])?void 0:n.props.value);if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.UB)(),[g,w]=(0,o.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=d){const e=y[d];null!=e&&e!==g&&h.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==g&&(x(t),w(r),null!=d&&b(d,r))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},m)},h.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:R,onClick:R},a,{className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":g===t})}),n??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,a.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9877),o=n(58215),a=n(67294),s=n(95652);function l(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(15814);const a={React:r,...r,...o}},93037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(27378),n(3905)),a=n(96497),s=n(9877),l=n(58215);const i={title:"Unit testing hooks"},u=void 0,c={unversionedId:"guides/unit-testing-hooks",id:"guides/unit-testing-hooks",title:"Unit testing hooks",description:"Hooks allow you to pull complex behaviors out of your components into succinct,",source:"@site/../docs/guides/unit-testing-hooks.md",sourceDirName:"guides",slug:"/guides/unit-testing-hooks",permalink:"/docs/guides/unit-testing-hooks",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/unit-testing-hooks.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Unit testing hooks"},sidebar:"docs",previous:{title:"Mocking data for Storybook",permalink:"/docs/guides/storybook"},next:{title:"Unit testing components",permalink:"/docs/guides/unit-testing-components"}},p={},d=[{value:"Polyfill fetch in node",id:"polyfill-fetch-in-node",level:3},{value:"Example:",id:"example",level:3}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks allow you to pull complex behaviors out of your components into succinct,\ncomposable functions. This makes testing component behavior potentially much\neasier. But how does this work if you want to use hooks from ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"?"),(0,o.kt)("p",null,"We have provided some simple utilities to reduce boilerplate for unit tests\nthat are wrappers around ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()"),"."),(0,o.kt)("p",null,"We want a ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," function that renders in the context of both\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," boundary."),(0,o.kt)("p",null,"To support both providers, you must choose among two provider-generators to\nsend as args to the ",(0,o.kt)("a",{parentName:"p",href:"../api/makeRenderRestHook#renderresthook"},"renderRestHook()")," generator."),(0,o.kt)("p",null,"These will generally be done during test setup. It's important to call cleanup\nupon test completion."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state."))),(0,o.kt)("h3",{id:"polyfill-fetch-in-node"},"Polyfill fetch in node"),(0,o.kt)("p",null,"Node doesn't come with fetch out of the box, so we need to be sure to polyfill it."),(0,o.kt)(a.Z,{pkgs:"whatwg-fetch",dev:!0,mdxType:"PkgTabs"}),(0,o.kt)(s.Z,{defaultValue:"jest",values:[{label:"jest",value:"jest"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"jest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // other things\n  setupFiles: ['./testSetup.js'],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// testSetup.js\nrequire('whatwg-fetch');\n")))),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)(s.Z,{defaultValue:"CacheProvider",values:[{label:"CacheProvider",value:"CacheProvider"},{label:"ExternalCacheProvider",value:"ExternalCacheProvider"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"CacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n"))),(0,o.kt)(l.Z,{value:"ExternalCacheProvider",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import nock from 'nock';\nimport { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';\n\ndescribe('useSuspense()', () => {\n  let renderRestHook: ReturnType<typeof makeRenderRestHook>;\n\n  beforeEach(() => {\n    nock(/.*/)\n      .persist()\n      .defaultReplyHeaders({\n        'Access-Control-Allow-Origin': '*',\n        'Content-Type': 'application/json',\n      })\n      .options(/.*/)\n      .reply(200)\n      .get(`/article/0`)\n      .reply(403, {});\n    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);\n  });\n\n  afterEach(() => {\n    nock.cleanAll();\n  });\n\n  it('should throw errors on bad network', async () => {\n    const { result, waitForNextUpdate } = renderRestHook(() => {\n      return useSuspense(ArticleResource.detail(), {\n        title: '0',\n      });\n    });\n    expect(result.current).toBeUndefined();\n    await waitForNextUpdate();\n    expect(result.error).toBeDefined();\n    expect((result.error as any).status).toBe(403);\n  });\n});\n")))))}f.isMDXComponent=!0}}]);