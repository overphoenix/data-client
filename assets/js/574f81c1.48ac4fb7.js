"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16802],{85162:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(67294),o=n(86010),r="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,a),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(87462),o=n(67294),r=n(86010),a=n(72389),l=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:a,defaultValue:m,values:h,groupId:p,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??k.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[N,R]=(0,o.useState)(v),U=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=p){const e=w[p];null!=e&&e!==N&&b.some((t=>t.value===e))&&R(e)}const E=e=>{const t=e.currentTarget,n=U.indexOf(t),s=b[n].value;s!==N&&(x(t),R(s),null!=p&&y(p,String(s)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=U.indexOf(e.currentTarget)+1;n=U[t]??U[0];break}case"ArrowLeft":{const t=U.indexOf(e.currentTarget)-1;n=U[t]??U[U.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},f)},b.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>U.push(e),onKeyDown:T,onFocus:E,onClick:E},a,{className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,a.Z)();return o.createElement(m,(0,s.Z)({key:String(t)},e))}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(65488),o=n(85162),r=n(67294),a=n(75690);function l(e){let{pkgs:t,dev:n=!1}=e;return r.createElement(s.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(o.Z,{value:"yarn"},r.createElement(a.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),r.createElement(o.Z,{value:"npm"},r.createElement(a.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{var s=n(67294),o=n(72887);const r={React:s,...s,...o};t.Z=r},34696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(87462),o=(n(67294),n(3905)),r=n(96497);const a={title:"Usage with class components"},l=void 0,i={unversionedId:"guides/class-components",id:"version-6.1/guides/class-components",title:"Usage with class components",description:"Hooks are great, but many of us are working with existing codebases or libraries",source:"@site/versioned_docs/version-6.1/guides/class-components.md",sourceDirName:"guides",slug:"/guides/class-components",permalink:"/docs/6.1/guides/class-components",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/class-components.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"Oct 24, 2021",frontMatter:{title:"Usage with class components"},sidebar:"version-6.1/docs",previous:{title:"Redux integration",permalink:"/docs/6.1/guides/redux"},next:{title:"Usage without Suspense",permalink:"/docs/6.1/guides/no-suspense"}},u={},c=[{value:"Install hook-hoc",id:"install-hook-hoc",level:2},{value:"Use with class",id:"use-with-class",level:2},{value:"Extracting the function",id:"extracting-the-function",level:2},{value:"Filters, debounce and more",id:"filters-debounce-and-more",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks are great, but many of us are working with existing codebases or libraries\nwith class based components. Some might be easy to migrate but others might be\nmore diffcult. Should this block you from adopting rest-hooks? Of course not!"),(0,o.kt)("p",null,"Using the simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")," interop library\nwe can create Higher Order Components from hooks quite easily. This enables us\nto easily replace any existing HOC with ease."),(0,o.kt)("h2",{id:"install-hook-hoc"},"Install ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")),(0,o.kt)(r.Z,{pkgs:"hook-hoc",mdxType:"PkgTabs"}),(0,o.kt)("h2",{id:"use-with-class"},"Use with class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(({ id }: { id: number }) => {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n})(Profile);\n")),(0,o.kt)("p",null,"Here you can see the return value of the function you pass in gets injected into the props\nof the component you wrap."),(0,o.kt)("h2",{id:"extracting-the-function"},"Extracting the function"),(0,o.kt)("p",null,"You might notice the function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"withHook()")," is a function that calls\nhooks. That makes it a hook by definition. To make this detectable by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"rules of hooks"),"\nand also potentially reusable, let's move it out to a named function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n}\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(useProfile)(Profile);\n")),(0,o.kt)("h2",{id:"filters-debounce-and-more"},"Filters, debounce and more"),(0,o.kt)("p",null,"Often times you'll be doing a bit more than just retrieving the data. We can\ndo all of that extra work in the hook we just created. Here we'll add some\nclient-side filtering as well as ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useDebounce/"},"debouncing")," the requests themselves."),(0,o.kt)("p",null,"You can combine any hooks here - the sky's the limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const debouncedId = useDebounce(id, 150);\n\n  const [user, friends] = useResource(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  const realFriends = friends.filter(friend => friend.isReal);\n\n  return { user, friends: realFriends };\n}\n\n// rest of file...\n")))}m.isMDXComponent=!0}}]);