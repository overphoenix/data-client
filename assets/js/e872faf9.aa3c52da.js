"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81335],{30433:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(5730),o=n(20636),s=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[E,w]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==E&&b.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(T(t),w(r),null!=f&&N(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(65559),a=n(30433),l=n(67294);function i(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(a.Z,{value:"simple"},t[0]),l.createElement(a.Z,{value:"generics"},t[1]))}},63033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(88705);const i={title:"useRetrieve()"},o=void 0,s={unversionedId:"api/useRetrieve",id:"version-6.2/api/useRetrieve",title:"useRetrieve()",description:"Use useFetch() instead",source:"@site/versioned_docs/version-6.2/api/useRetrieve.md",sourceDirName:"api",slug:"/api/useRetrieve",permalink:"/docs/6.2/api/useRetrieve",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useRetrieve.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"useRetrieve()"},sidebar:"docs",previous:{title:"useResource()",permalink:"/docs/6.2/api/useresource"},next:{title:"useDebounce()",permalink:"/docs/6.2/api/useDebounce"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Conditional",id:"conditional",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/useFetch"},"useFetch()")," instead")),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): Promise<any> | undefined;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): Promise<any> | undefined;\n"))),(0,a.kt)("p",null,"Great for retrieving resources optimistically before they are needed."),(0,a.kt)("p",null,"This can be useful for ensuring resources early in a render tree before they are needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"/docs/6.2/api/Controller#invalidate"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returned promise will reject"))),(0,a.kt)("li",{parentName:"ul"},"On fetch returns a promise else undefined.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id }: { id: number }) {\n  useRetrieve(PostResource.detail(), { id });\n  // ...\n}\n")),(0,a.kt)("h3",{id:"conditional"},"Conditional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id, doNotFetch }: { id: number, doNotFetch: boolean }) {\n  useRetrieve(PostResource.detail(), doNotFetch ? null : { id });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint"},"Endpoint")," as well."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);