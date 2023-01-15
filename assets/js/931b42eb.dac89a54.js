"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67785],{11555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"useLoading()"},i=void 0,s={unversionedId:"api/useLoading",id:"version-7.0/api/useLoading",title:"useLoading()",description:"useLoading() - Turn any promise into React State",source:"@site/versioned_docs/version-7.0/api/useLoading.md",sourceDirName:"api",slug:"/api/useLoading",permalink:"/docs/7.0/api/useLoading",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useLoading.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"useLoading()"},sidebar:"docs",previous:{title:"useCancelling()",permalink:"/docs/7.0/api/useCancelling"},next:{title:"<CacheProvider />",permalink:"/docs/7.0/api/CacheProvider"}},p={},l=[{value:"Todo toggle example",id:"todo-toggle-example",level:3}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"useLoading() - Turn any promise into React State")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function useLoading<F extends (...args: any) => Promise<any>>(\n  func: F,\n  deps: readonly any[] = [],\n): [F, boolean];\n")),(0,r.kt)("p",null,"Helps track loading state of imperative async functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoading } from '@rest-hooks/hooks';\n\nfunction Button({ onClick, children, ...props }) {\n  const [clickHandler, loading, error] = useLoading(onClick);\n  return (\n    <button onClick={clickHandler} {...props}>\n      {loading ? 'Loading...' : children}\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"Part of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/7.0/api/useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.0/api/useDLE"},"useDLE()")," are better for GET/read endpoints.")),(0,r.kt)("h3",{id:"todo-toggle-example"},"Todo toggle example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback } from 'react';\nimport { useController } from '@rest-hooks/react';\nimport { useLoading } from '@rest-hooks/hooks';\n\nimport { TodoResource, Todo } from 'api/Todo';\n\ninterface Props {\n  todo: Todo;\n}\n\nfunction TodoListItem({ todo }) {\n  const { fetch } = useController();\n\n  const [toggleHandler, loading, error] = useLoading(\n    (e: ChangeEvent<HTMLInputElement>) =>\n      fetch(\n        TodoResource.partialUpdate,\n        { id },\n        { completed: e.currentTarget.checked },\n      ),\n    [fetch],\n  );\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        checked={todo.completed}\n        onChange={toggleHandler}\n      />\n      {loading ? <Spinner /> : null}\n      {error ? <Error>{error}</Error> : null}\n      {todo.title}\n    </div>\n  );\n}\n")),(0,r.kt)("admonition",{title:"Eslint configuration",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since we use the deps list, be sure to add useLoading to the 'additionalHooks' configuration\nof ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"react-hooks/exhaustive-deps")," rule if you use it."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "rules": {\n    // ...\n    "react-hooks/exhaustive-deps": ["warn", {\n      "additionalHooks": "(useLoading)"\n    }]\n  }\n}\n'))))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);