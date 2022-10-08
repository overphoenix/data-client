"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),s=n(86010),l=n(72389),o=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:y,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[O,N]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=y){const e=k[y];null!=e&&e!==O&&g.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==O&&(T(t),N(r),null!=y&&w(y,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:j,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65488),a=n(85162),s=n(67294);function l(e){let{children:t}=e;return s.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(a.Z,{value:"ts"},t[0]),s.createElement(a.Z,{value:"js"},t[1]))}},31767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),s=n(70523);const l={title:"Defining your Resource types",sidebar_label:"Resource types"},o=void 0,i={unversionedId:"guides/resource-types",id:"version-6.0/guides/resource-types",title:"Defining your Resource types",description:"Typing your data can be very useful and is highly recommended when using this library.",source:"@site/versioned_docs/version-6.0/guides/resource-types.md",sourceDirName:"guides",slug:"/guides/resource-types",permalink:"/docs/6.0/guides/resource-types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/resource-types.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"Defining your Resource types",sidebar_label:"Resource types"},sidebar:"version-6.0/docs",previous:{title:"Usage",permalink:"/docs/6.0/rest/usage"},next:{title:"URL Patterns",permalink:"/docs/6.0/guides/url"}},u={},c=[{value:"Guidelines:",id:"guidelines",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Typing your data can be very useful and is highly recommended when using this library.\nOne of the main benefits is to enforce immutability, as this brings certain assurances\nto the correctness of your application as well as enables certain performance enhancements\nwith React."),(0,a.kt)("p",null,"Here we have an example ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/resource"},"Resource")," for a User typed in typescript."),(0,a.kt)(s.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport interface Address {\n  readonly street: string;\n  readonly suite: string;\n  readonly city: string;\n  readonly zipcode: string;\n  readonly geo: {\n    readonly lat: string;\n    readonly lng: string;\n  };\n}\n\nexport type Status = 'pending' | 'rejected' | 'accepted';\n\nexport class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly phone: string = '';\n  readonly website: string = '';\n  readonly address: Address | null = null;\n  readonly status: Status = 'pending';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport class UserResource extends Resource {\n  id = undefined;\n  name = '';\n  username = '';\n  email = '';\n  phone = '';\n  website = '';\n  address = null;\n  status = 'pending';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n"))),(0,a.kt)("h3",{id:"guidelines"},"Guidelines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define all properties you expect to see"),(0,a.kt)("li",{parentName:"ul"},"Mark them as readonly to enforce immutability"),(0,a.kt)("li",{parentName:"ul"},"Give each property as specific and descriptive a type as possible"),(0,a.kt)("li",{parentName:"ul"},"Initialize the property with a sensible default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will simplify handling so we don't have to deal with ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"s")))))}d.isMDXComponent=!0}}]);