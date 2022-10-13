"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67527],{91262:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(72389);function a(e){let{children:t,fallback:r}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):r??null}},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010),a="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(67294),a=r(86010),s=r(72389),l=r(67392),i=r(7094),c=r(12466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:r,block:s,defaultValue:p,values:m,groupId:h,className:g}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),f=(0,l.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[x,M]=(0,o.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&M(e)}const T=e=>{const t=e.currentTarget,r=N.indexOf(t),n=v[r].value;n!==x&&(P(t),M(n),null!=h&&w(h,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},g)},v.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:C,onFocus:T,onClick:T},s,{className:(0,a.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,o.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},66412:(e,t,r)=>{r.d(t,{p:()=>a});var n=r(92949),o=r(86668);function a(){const{prism:e}=(0,o.L)(),{colorMode:t}=(0,n.I)(),r=e.theme,a=e.darkTheme||r;return"dark"===t?a:r}},96497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(65488),o=r(85162),a=r(67294),s=r(75690);function l(e){let{pkgs:t,dev:r=!1}=e;return a.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var n=r(67294),o=r(72887);const a={React:n,...n,...o};t.Z=a},87560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(96497),s=r(65488),l=r(85162);const i={id:"redux",title:"Redux integration"},c=void 0,d={unversionedId:"guides/redux",id:"version-6.3/guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-6.3/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/6.3/guides/redux",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/docs/6.3/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/6.3/guides/class-components"}},u={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m={toc:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,o.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.3/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,o.kt)("p",null,"First make sure you have redux installed:"),(0,o.kt)(a.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,o.kt)("p",null,"Note: react-redux is ",(0,o.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,o.kt)("p",null,"Then you'll want to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.3/api/ExternalCacheProvider"},"<ExternalCacheProvider /",">")," instead of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/6.3/api/CacheProvider"},"<CacheProvider /",">")," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,o.kt)(s.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider\n    store={store}\n    selector={selector}\n    controller={controller}\n  >\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,o.kt)(l.Z,{value:"react-redux",mdxType:"TabItem"},(0,o.kt)("h4",{id:"indextsx-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport {\n  initialState,\n  createReducer,\n  NetworkManager,\n  Controller,\n} from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\nconst controller = new Controller();\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  applyMiddleware(\n    ...applyManager([networkManager, subscriptionManager], controller),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector} controller={controller}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,o.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      ...applyManager([networkManager, subscriptionManager], controller),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,o.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,o.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,o.kt)("p",null,"Simply wrap the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  createReducer(controller),\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      ...applyManager([networkManager, subscriptionManager], controller),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}h.isMDXComponent=!0},23746:(e,t,r)=>{r.d(t,{ZP:()=>h,lG:()=>s});var n=r(87410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=r(67294),s={Prism:n.Z,theme:o};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},p=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=i({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=i({},r,{backgroundColor:null}),o};function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?p(e.theme,e.language):void 0;return t.themeDict=r})),l(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var s=n?{display:"inline-block"}:{},l=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,s=i({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?i({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s})),l(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,s=0,l=[],i=[l];s>-1;){for(;(a=n[s]++)<o[s];){var p=void 0,m=t[s],h=r[s][a];if("string"==typeof h?(m=s>0?m:["plain"],p=h):(m=u(m,h.type),h.alias&&(m=u(m,h.alias)),p=h.content),"string"==typeof p){var g=p.split(c),y=g.length;l.push({types:m,content:g[0]});for(var v=1;v<y;v++)d(l),i.push(l=[]),l.push({types:m,content:g[v]})}else s++,t.push(m),r.push(p),n.push(0),o.push(p.length)}s--,t.pop(),r.pop(),n.pop(),o.pop()}return d(l),i}(void 0!==s?this.tokenize(t,n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);