"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[38061],{58215:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(87462),n=r(67294),o=r(72389),s=r(51548),i=r(86010);const l="tabItem_LplD";function d(e){var t,r;const{lazy:o,block:d,defaultValue:u,values:c,groupId:p,className:m}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,s.lx)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=h[0])?void 0:r.props.value);if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:f}=(0,s.UB)(),[b,x]=(0,n.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:M}=(0,s.o5)();if(null!=p){const e=w[p];null!=e&&e!==b&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,r=y.indexOf(t),a=g[r].value;a!==b&&(M(t),x(a),null!=p&&f(p,a))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;r=y[t]||y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;r=y[t]||y[y.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},m)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>y.push(e),onKeyDown:P,onFocus:N,onClick:N},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":b===t})}),r??t)}))),o?(0,n.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function u(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(9877),n=r(58215),o=r(67294),s=r(95652);function i(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(n.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(n.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(15814);const o={React:a,...a,...n}},44602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(96497),s=r(9877),i=r(58215);const l={id:"redux",title:"Redux integration"},d=void 0,u={unversionedId:"guides/redux",id:"version-5.0/guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-5.0/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/5.0/guides/redux",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"version-5.0/docs",previous:{title:"Aborting Fetch",permalink:"/docs/5.0/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/5.0/guides/class-components"}},c={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=m("ExternalCacheProvider"),g=m("CacheProvider"),v={toc:p};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,n.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,n.kt)("a",{parentName:"p",href:"/docs/5.0/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,n.kt)("p",null,"First make sure you have redux installed:"),(0,n.kt)(o.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,n.kt)("p",null,"Note: react-redux is ",(0,n.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,n.kt)("p",null,"Then you'll want to use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/5.0/api/ExternalCacheProvider"},"\\",(0,n.kt)(h,{mdxType:"ExternalCacheProvider"}))," instead of\n",(0,n.kt)("a",{parentName:"p",href:"/docs/5.0/api/CacheProvider"},"\\",(0,n.kt)(g,{mdxType:"CacheProvider"}))," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,n.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,n.kt)(s.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,n.kt)("h4",{id:"indextsx"},(0,n.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,n.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,n.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,n.kt)(i.Z,{value:"react-redux",mdxType:"TabItem"},(0,n.kt)("h4",{id:"indextsx-1"},(0,n.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,n.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,n.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,n.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,n.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,n.kt)("p",null,"Simply wrap the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  reducer,\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}k.isMDXComponent=!0}}]);