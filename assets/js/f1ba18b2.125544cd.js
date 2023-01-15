"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31600],{30433:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),c=r(63735),u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:v}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=(0,i.U)(),[w,x]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=h[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),a=f[r].value;a!==w&&(T(t),x(a),null!=m&&k(m,String(a)))},N=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:N,onClick:E},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(13743),n=r(30433),o=r(65559),l=r(67294);function s(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(a.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(a.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(64820);const o={React:a,...a,...n};t.Z=o},17131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(65559),l=r(30433),s=r(52393);const i={id:"installation",title:"Installation"},c=void 0,u={unversionedId:"getting-started/installation",id:"version-6.6/getting-started/installation",title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/versioned_docs/version-6.6/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/6.6/getting-started/installation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/6.6/"},next:{title:"Endpoint",permalink:"/docs/6.6/getting-started/endpoint"}},p={},d=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",level:2}],m={toc:d};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{pkgs:"rest-hooks @rest-hooks/test @rest-hooks/hooks @rest-hooks/rest",mdxType:"PkgTabs"}),(0,n.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,n.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,n.kt)(o.Z,{defaultValue:"web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,n.kt)(l.Z,{value:"18-web",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,n.kt)(l.Z,{value:"native",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from 'rest-hooks';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n")))),(0,n.kt)("p",null,"Alternatively ",(0,n.kt)("a",{parentName:"p",href:"/docs/6.6/guides/redux"},"integrate state with redux")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Legacy (IE) browser support")),(0,n.kt)("p",null,"If you see ",(0,n.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,n.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}v.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(v,l(l({ref:t},u),{},{components:r})):a.createElement(v,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);