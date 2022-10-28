"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18620],{63771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={title:"TypeScript Types"},o=void 0,s={unversionedId:"api/types",id:"version-6.3/api/types",title:"TypeScript Types",description:"@rest-hooks/core",source:"@site/versioned_docs/version-6.3/api/types.md",sourceDirName:"api",slug:"/api/types",permalink:"/docs/6.3/api/types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/types.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"TypeScript Types"},sidebar:"docs",previous:{title:"Legacy browser support",permalink:"/docs/6.3/guides/legacy-browser"},next:{title:"Controller",permalink:"/docs/6.3/api/Controller"}},p={},c=[{value:"@rest-hooks/core",id:"rest-hookscore",level:2},{value:"Manager",id:"manager",level:3},{value:"NetworkError",id:"networkerror",level:3},{value:"UnknownError",id:"unknownerror",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:2},{value:"EndpointInterface",id:"endpointinterface",level:3},{value:"EndpointInstance",id:"endpointinstance",level:3},{value:"FetchFunction",id:"fetchfunction",level:3},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:2},{value:"RestEndpoint",id:"restendpoint",level:3},{value:"RestFetch",id:"restfetch",level:3}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rest-hookscore"},"@rest-hooks/core"),(0,i.kt)("h3",{id:"manager"},"Manager"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Manager {\n  getMiddleware(): Middleware;\n  cleanup(): void;\n  init?: (state: State<any>) => void;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./Manager"},"More")),(0,i.kt)("h3",{id:"networkerror"},"NetworkError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface NetworkError extends Error {\n  status: number;\n  response?: Response;\n}\n")),(0,i.kt)("h3",{id:"unknownerror"},"UnknownError"),(0,i.kt)("p",null,"This is a catch-all for errors thrown in fetch functions. It is recommended\nto try to conform to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkError")," interface above"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type UnknownError = Error & { status?: unknown; response?: unknown };\n")),(0,i.kt)("h2",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,i.kt)("h3",{id:"endpointinterface"},"EndpointInterface"),(0,i.kt)("p",null,"The bare requirements for an endpoint-type. This is useful\nfor typing function parameters (like hooks), as it is accepting of any correct\nimplementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n> extends EndpointExtraOptions {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n")),(0,i.kt)("p",null,"e.g.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCache<E extends EndpointInterface>(\n  endpoint: E,\n  params: Parameters<E>[0],\n);\n")),(0,i.kt)("h3",{id:"endpointinstance"},"EndpointInstance"),(0,i.kt)("p",null,"An instance of the ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EndpointInstance<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>;\n")),(0,i.kt)("p",null,"This is useful to specify types explicitly, instead of implicitly in construction.\nBeing explicit reduces TypeScript computational overhead when inferring types, which\nis sometimes necessary to avoid tripping the recursion depth limit. This is one of the reasons why\nthere is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md"},"eslint rule to explicitly specify return types of methods/functions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const userDetail: EndpointInstance<FetchFunction<{\n  id: string;\n}>> = new Endpoint(({ id }) => fetch(`/users/${id}`));\n\nclass User extends Entity {\n  static detail<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<{\n      id: string;\n    }>,\n    T,\n    undefined\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`), { schema: this });\n  }\n\n  /** Expected Body payload is a subset of the properties of User\n  *  Expected Response is all the properties of User\n  */\n  static update<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<\n      {\n        id: string;\n      },\n      Partial<T>,\n      // return value is plain object - this is an easy way to extract public members from this class' interface\n      Omit<T, never>\n    >,\n    T,\n    true\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`, { method: 'PUT' }), {\n      schema: this,\n    });\n  }\n}\n")),(0,i.kt)("h3",{id:"fetchfunction"},"FetchFunction"),(0,i.kt)("p",null,"Represents a function that does actual fetch. Convenient type to specify\nonly part of the function's type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FetchFunction<P = any, B = any, R = any> = (\n  params?: P,\n  body?: B,\n) => Promise<R>;\n")),(0,i.kt)("p",null,"Providing a function type that returns a Promise also works."),(0,i.kt)("h2",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,i.kt)("h3",{id:"restendpoint"},"RestEndpoint"),(0,i.kt)("p",null,"Is a specialized form of Endpoint that includes additional extension points\nfor easy customization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RestEndpoint<\n  F extends FetchFunction = RestFetch,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n  U extends any[] = any,\n> extends EndpointInstance<F, S, M> {\n  url: (...args: U) => string;\n  fetchInit: RequestInit;\n  getFetchInit: (\n    this: any,\n    body?: RequestInit['body'] | Record<string, any>,\n  ) => any;\n  method: string;\n  signal: AbortSignal | undefined;\n}\n")),(0,i.kt)("h3",{id:"restfetch"},"RestFetch"),(0,i.kt)("p",null,"Fetch function for Resources. Unlike ",(0,i.kt)("a",{parentName:"p",href:"#fetchfunction"},"FetchFunction"),", these require the params variable\nas ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/resource"},"Resource")," expects it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type RestFetch<A extends readonly any[] = any[], R = any> = (\n  this: RestEndpoint,\n  ...args: A\n) => Promise<R>;\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(h,o(o({ref:n},l),{},{components:t})):r.createElement(h,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);