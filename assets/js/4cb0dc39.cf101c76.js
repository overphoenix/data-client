"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[581],{18168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"TypeScript Types"},i=void 0,s={unversionedId:"api/types",id:"version-6.4/api/types",title:"TypeScript Types",description:"@rest-hooks/core",source:"@site/versioned_docs/version-6.4/api/types.md",sourceDirName:"api",slug:"/api/types",permalink:"/docs/6.4/api/types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/types.md",tags:[],version:"6.4",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667840704,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{title:"TypeScript Types"},sidebar:"docs",previous:{title:"Legacy browser support",permalink:"/docs/6.4/guides/legacy-browser"},next:{title:"Controller",permalink:"/docs/6.4/api/Controller"}},p={},c=[{value:"@rest-hooks/core",id:"rest-hookscore",level:2},{value:"Manager",id:"manager",level:3},{value:"NetworkError",id:"networkerror",level:3},{value:"UnknownError",id:"unknownerror",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:2},{value:"EndpointInterface",id:"endpointinterface",level:3},{value:"EndpointInstance",id:"endpointinstance",level:3},{value:"FetchFunction",id:"fetchfunction",level:3},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:2}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rest-hookscore"},"@rest-hooks/core"),(0,a.kt)("h3",{id:"manager"},"Manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Manager {\n  getMiddleware(): Middleware;\n  cleanup(): void;\n  init?: (state: State<any>) => void;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Manager"},"More")),(0,a.kt)("h3",{id:"networkerror"},"NetworkError"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface NetworkError extends Error {\n  status: number;\n  response?: Response;\n}\n")),(0,a.kt)("h3",{id:"unknownerror"},"UnknownError"),(0,a.kt)("p",null,"This is a catch-all for errors thrown in fetch functions. It is recommended\nto try to conform to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkError")," interface above"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type UnknownError = Error & { status?: unknown; response?: unknown };\n")),(0,a.kt)("h2",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,a.kt)("h3",{id:"endpointinterface"},"EndpointInterface"),(0,a.kt)("p",null,"The bare requirements for an endpoint-type. This is useful\nfor typing function parameters (like hooks), as it is accepting of any correct\nimplementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n> extends EndpointExtraOptions {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n")),(0,a.kt)("p",null,"e.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useCache<E extends EndpointInterface>(\n  endpoint: E,\n  params: Parameters<E>[0],\n);\n")),(0,a.kt)("h3",{id:"endpointinstance"},"EndpointInstance"),(0,a.kt)("p",null,"An instance of the ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EndpointInstance<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>;\n")),(0,a.kt)("p",null,"This is useful to specify types explicitly, instead of implicitly in construction.\nBeing explicit reduces TypeScript computational overhead when inferring types, which\nis sometimes necessary to avoid tripping the recursion depth limit. This is one of the reasons why\nthere is an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md"},"eslint rule to explicitly specify return types of methods/functions"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const userDetail: EndpointInstance<FetchFunction<{\n  id: string;\n}>> = new Endpoint(({ id }) => fetch(`/users/${id}`));\n\nclass User extends Entity {\n  static detail<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<{\n      id: string;\n    }>,\n    T,\n    undefined\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`), { schema: this });\n  }\n\n  /** Expected Body payload is a subset of the properties of User\n  *  Expected Response is all the properties of User\n  */\n  static update<T extends User>(\n    this: T,\n  ): EndpointInstance<\n    FetchFunction<\n      {\n        id: string;\n      },\n      Partial<T>,\n      // return value is plain object - this is an easy way to extract public members from this class' interface\n      Omit<T, never>\n    >,\n    T,\n    true\n  > {\n    return new Endpoint(({ id }) => fetch(`/users/${id}`, { method: 'PUT' }), {\n      schema: this,\n    });\n  }\n}\n")),(0,a.kt)("h3",{id:"fetchfunction"},"FetchFunction"),(0,a.kt)("p",null,"Represents a function that does actual fetch. Convenient type to specify\nonly part of the function's type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FetchFunction<A extends readonly any[] = any, R = any> = (\n  ...args: A\n) => Promise<R>;\n")),(0,a.kt)("p",null,"Providing a function type that returns a Promise also works."),(0,a.kt)("h2",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RestGenerics {\n  readonly path: string;\n  readonly schema?: Schema | undefined;\n  readonly method?: string;\n  readonly body?: any;\n}\n\nexport type GetEndpoint<\n  UrlParams = any,\n  S extends Schema | undefined = Schema | undefined,\n> = RestTypeNoBody<UrlParams, S, undefined>;\n\nexport type MutateEndpoint<\n  UrlParams = any,\n  Body extends BodyInit | Record<string, any> = any,\n  S extends Schema | undefined = Schema | undefined,\n> = RestTypeWithBody<UrlParams, S, true, Body>;\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);