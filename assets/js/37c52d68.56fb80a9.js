/*! For license information please see 37c52d68.56fb80a9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53111],{41535:(e,t)=>{var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=b.prototype=new v;k.constructor=b,h(k,y.prototype),k.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var n,s={},o=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,n)&&!I.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(1===l)s.children=a;else if(1<l){for(var i=Array(l),c=0;c<l;c++)i[c]=arguments[c+2];s.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===s[n]&&(s[n]=l[n]);return{$$typeof:r,type:e,key:o,ref:u,props:s,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function Z(e,t,n,s,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case a:l=!0}}if(l)return o=o(l=e),e=""===s?"."+T(l,0):s,w(o)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),Z(o,t,n,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(l=0,s=""===s?".":s+":",w(e))for(var i=0;i<e.length;i++){var c=s+T(u=e[i],i);l+=Z(u,t,n,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),i=0;!(u=e.next()).done;)l+=Z(u=u.value,t,n,c=s+T(u,i++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function j(e,t,r){if(null==e)return e;var a=[],n=0;return Z(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},C={transition:null}},27378:(e,t,r)=>{r(41535)},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010),s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),s=r(86010),o=r(72389),u=r(67392),l=r(7094),i=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:f,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,u.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[N,S]=(0,n.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:_}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,r=I.indexOf(t),a=y[r].value;a!==N&&(_(t),S(a),null!=f&&w(f,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;r=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;r=I[t]??I[I.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},y.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:E,onFocus:x,onClick:x},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(65488),n=r(85162),s=r(67294),o=r(75690);function u(e){let{pkgs:t,dev:r=!1}=e;return s.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(n.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),s.createElement(n.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{var a=r(67294),n=r(72887);const s={React:a,...a,...n};t.Z=s},5414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(27378),r(3905)),s=r(96497),o=r(65488),u=r(85162);const l={title:"Images and other Media"},i=void 0,c={unversionedId:"guides/img-media",id:"guides/img-media",title:"Images and other Media",description:"Using React Suspense with Images and other Media | Rest Hooks",source:"@site/../docs/core/guides/img-media.md",sourceDirName:"guides",slug:"/guides/img-media",permalink:"/docs/guides/img-media",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/img-media.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Images and other Media"},sidebar:"docs",previous:{title:"Dealing with network errors",permalink:"/docs/concepts/network-errors"},next:{title:"Render as you Fetch",permalink:"/docs/guides/render-as-you-fetch"}},p={},d=[{value:"Storing buffers",id:"storing-buffers",level:2},{value:"Just Images",id:"just-images",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Prefetching",id:"prefetching",level:4}],m={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Using React Suspense with Images and other Media | Rest Hooks")),(0,n.kt)("p",null,"After setting up Rest Hooks for structured data fetching, you might want to incorporate\nsome media fetches as well to take advantage of suspense and ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"concurrent mode support"),"."),(0,n.kt)("h2",{id:"storing-buffers"},"Storing buffers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource")," and ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," should not be used in this case, since they both represent\nstring -> value map structures. Instead, we'll define our own simple ",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from 'rest-hooks';\n\nexport const getPhoto = new Endpoint(async ({ userId }: { userId: string }) => {\n  const response = await fetch(`/users/${userId}/photo`);\n  const photoArrayBuffer = await response.arrayBuffer();\n\n  return photoArrayBuffer;\n});\n")),(0,n.kt)(o.Z,{defaultValue:"useSuspense",values:[{label:"useSuspense",value:"useSuspense"},{label:"useCache",value:"useCache"},{label:"JS/Node",value:"JS/Node"}],mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"useSuspense",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = useSuspense(getPhoto, { userId });\n"))),(0,n.kt)(u.Z,{value:"useCache",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo will be undefined if the fetch hasn't completed\n// photo will be ArrayBuffer if the fetch has completed\nconst photo = useCache(getPhoto, { userId });\n"))),(0,n.kt)(u.Z,{value:"JS/Node",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"// photo is typed as ArrayBuffer\nconst photo = await getPhoto({ userId });\n")))),(0,n.kt)("h2",{id:"just-images"},"Just Images"),(0,n.kt)("p",null,"In many cases, it would be useful to suspend loading of expensive items like\nimages using suspense. This becomes especially powerful ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/render-as-you-fetch"},"with the fetch as you render")," pattern in concurrent mode."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," provides use with ",(0,n.kt)("inlineCode",{parentName:"p"},"<Img />")," component that suspends, as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"getImage")," endpoint to prefetch."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(s.Z,{pkgs:"@rest-hooks/img",mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Profile.tsx"',title:'"Profile.tsx"'},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense } from 'rest-hooks';\nimport { Img } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const user = useSuspense(UserResource.get, { username });\n  return (\n    <div>\n      <Img\n        src={user.img}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n")),(0,n.kt)("h4",{id:"prefetching"},"Prefetching"),(0,n.kt)("p",null,"Note this will cascade the requests, waiting for user to resolve before\nthe image request can start. If the image url is deterministic based on the same parameters, we can start that request at the same time as the user request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Profile.tsx"',title:'"Profile.tsx"'},"import React, { ImgHTMLAttributes } from 'react';\nimport { useSuspense, useFetch } from 'rest-hooks';\nimport { Img, getImage } from '@rest-hooks/img';\n\nexport default function Profile({ username }: { username: string }) {\n  const imageSrc = `/profile_images/${username}}`;\n  useFetch(getImage, { src: imageSrc });\n  const user = useSuspense(UserResource.get, { username });\n  return (\n    <div>\n      <Img\n        src={imageSrc}\n        alt=\"React Logo\"\n        style={{ height: '32px', width: '32px' }}\n      />\n      <h2>{user.fullName}</h2>\n    </div>\n  );\n}\n")),(0,n.kt)("p",null,"When using the ",(0,n.kt)("a",{parentName:"p",href:"../guides/render-as-you-fetch"},"fetch as you render")," pattern in concurrent mode, ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"getImage"),"\n",(0,n.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," to preload the image."))}f.isMDXComponent=!0}}]);