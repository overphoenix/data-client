"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69760],{30433:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(5730),l=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:f,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,l.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[N,P]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&b.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==N&&(O(t),P(r),null!=f&&w(f,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},g)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},52393:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65559),a=n(30433),o=n(67294),s=n(13743);function l(e){let{pkgs:t,dev:n=!1}=e;return o.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},57489:(e,t,n)=>{var r=n(67294),a=n(72887);const o={React:r,...r,...a};t.Z=o},64831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(52393);const s={title:"Usage without Suspense"},l=void 0,i={unversionedId:"guides/no-suspense",id:"version-6.2/guides/no-suspense",title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-6.2/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/6.2/guides/no-suspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Usage without Suspense"},sidebar:"docs",previous:{title:"Usage with class components",permalink:"/docs/6.2/guides/class-components"},next:{title:"Legacy browser support",permalink:"/docs/6.2/guides/legacy-browser"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>resources/ProfileResource.ts</code>",id:"resourcesprofileresourcets",level:4},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4},{value:"API",id:"api",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some libraries you work with may take a ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{pkgs:"@rest-hooks/legacy",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)("h4",{id:"resourcesprofileresourcets"},(0,a.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,a.kt)("h4",{id:"profilelisttsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null\n  ): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);