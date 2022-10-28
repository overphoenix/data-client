"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50129],{97041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Using a custom networking library",sidebar_label:"Custom networking library",id:"custom-networking",original_id:"custom-networking"},s=void 0,a={unversionedId:"guides/custom-networking",id:"version-3.0/guides/custom-networking",title:"Using a custom networking library",description:"The default fetch() implementation uses superagent due to it's server-side support",source:"@site/versioned_docs/version-3.0/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/docs/3.0/guides/custom-networking",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/custom-networking.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library",id:"custom-networking",original_id:"custom-networking"},sidebar:"version-3.0/docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/docs/3.0/guides/rpc"},next:{title:"Custom cache lifetime",permalink:"/docs/3.0/guides/resource-lifetime"}},u={},l=[{value:"Default fetch with superagent:",id:"default-fetch-with-superagent",level:3},{value:"Fetch",id:"fetch",level:2},{value:"Axios",id:"axios",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," implementation uses ",(0,o.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"superagent")," due to it's server-side support\nand excellent builder-pattern api. However, a simple overriding of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch()")," function\nwill enable you to use any networking library you please. By extending from ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleResource"),"\ninstead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," you can potentially reduce your bundle size by enabling the superagent\nlibrary to be tree-shaken away."),(0,o.kt)("h3",{id:"default-fetch-with-superagent"},"Default fetch with superagent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import request from 'superagent';\nimport { Method } from '~/types';\n\nimport SimpleResource from './SimpleResource';\n\n/** Represents an entity to be retrieved from a server. Typically 1:1 with a url endpoint. */\nexport default abstract class Resource extends SimpleResource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: request.Plugin;\n\n  /** Perform network request and resolve with json body */\n  static fetch<T extends typeof Resource>(\n    this: T,\n    method: Method,\n    url: string,\n    body?: Readonly<object | string>,\n  ) {\n    let req = request[method](url).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (body) req = req.send(body);\n    return req.then(res => {\n      if (process.env.NODE_ENV !== 'production') {\n        if (!res.type.includes('json') && Object.keys(res.body).length === 0) {\n          throw new Error('JSON expected but not returned from API');\n        }\n      }\n      return res.body;\n    });\n  }\n}\n")),(0,o.kt)("p",null,"Here are examples using other popular networking APIs:"),(0,o.kt)("h2",{id:"fetch"},"Fetch"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from 'rest-hooks';\n\nexport default abstract class FetchResource extends SimpleResource {\n  /** A function to mutate all request options for fetch */\n  static fetchOptionsPlugin?: (options: RequestInit) => RequestInit;\n\n  /** Perform network request and resolve with json body */\n  static async fetch<T extends typeof SimpleResource>(\n    this: T,\n    method: Method,\n    url: string,\n    body?: Readonly<object | string>\n  ) {\n    let options: RequestInit = {\n      method: method.toUpperCase(),\n      credentials: 'same-origin',\n      headers: {\n        'Content-Type': 'application/json',\n        // \"Content-Type\": \"application/x-www-form-urlencoded\",  -- maybe use this if typeof body is FormData ?\n      },\n    };\n    if (this.fetchOptionsPlugin) options = this.fetchOptionsPlugin(options);\n    if (body) options.body = JSON.stringify(body);\n    const response = await fetch(url, options);\n    if (!response.ok) throw new Error(response.statusText);\n    const json = (await response).json();\n    return json;\n  }\n}\n")),(0,o.kt)("h2",{id:"axios"},"Axios"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from 'rest-hooks';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends SimpleResource {\n  /** Perform network request and resolve with json body */\n  static async fetch<T extends typeof AxiosResource>(\n    this: T,\n    method: Method,\n    url: string,\n    body?: Readonly<object | string>\n  ) {\n    return await axios[method](url, body);\n  }\n}\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);