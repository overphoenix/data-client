"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54602],{11779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={title:"Using a custom networking library",sidebar_label:"Custom networking library"},i=void 0,a={unversionedId:"guides/custom-networking",id:"version-5.1/guides/custom-networking",title:"Using a custom networking library",description:"Resource.fetch() wraps the standard fetch.",source:"@site/rest_versioned_docs/version-5.1/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/rest/5.1/guides/custom-networking",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/custom-networking.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library"},sidebar:"docs",previous:{title:"Computed Properties",permalink:"/rest/5.1/guides/computed-properties"},next:{title:"Resource",permalink:"/rest/5.1/api/resource"}},u={},c=[{value:"Fetch (default)",id:"fetch-default",level:2},{value:"Superagent",id:"superagent",level:2},{value:"Axios",id:"axios",level:2}],p={toc:c};function l(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Resource.fetch()")," wraps the standard ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),".\nOne key customization is ensuring every network related error thrown has a\nstatus member. This is useful in distinguishing code errors from networking errors,\nand is used in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/NetworkManager"},"NetworkManager"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SimpleResource")," can be used as an abstract class to implement custom fetch methods\nwithout including the default."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you plan on using ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/NetworkErrorBoundary"},"NetworkErrorBoundary")," make sure\nto add a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," member to errors, as it catches only errors with a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," member.")),(0,s.kt)("h2",{id:"fetch-default"},"Fetch (default)"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/github/fetch#installation"},"whatwg-fetch")," polyfill will be\nuseful in environments that don't support it, like node and older browsers\n(Internet Explorer). Be sure to include it in any bundles that need it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport type { EndpointExtraOptions, Schema } from '@rest-hooks/endpoint';\nimport { Entity } from '@rest-hooks/endpoint';\n\nimport paramsToString from './paramsToString.js';\nimport { RestEndpoint } from './types.js';\n\nclass NetworkError extends Error {\n  declare status: number;\n  declare response: Response;\n  name = 'NetworkError';\n\n  constructor(response: Response) {\n    super(\n      response.statusText || `Network response not 'ok': ${response.status}`,\n    );\n    this.status = response.status;\n    this.response = response;\n  }\n}\n\n/** Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n *\n * This can be a useful organization for many REST-like API patterns.\n * @see https://resthooks.io/docs/api/resource\n */\nexport default abstract class BaseResource extends Entity {\n  // typescript todo: require subclasses to implement\n  /** Used as base of url construction */\n  static readonly urlRoot: string;\n\n  static toString() {\n    return `${this.name}::${this.urlRoot}`;\n  }\n\n  /** Returns the globally unique identifier for this BaseResource */\n  static get key(): string {\n    /* istanbul ignore else */\n    if (process.env.NODE_ENV !== 'production') {\n      if (this.urlRoot === undefined) {\n        throw new Error(`urlRoot is not defined for Resource \"${this.name}\"\n  Resources require a 'static urlRoot' or 'static get key()' defined.\n  (See https://resthooks.io/docs/api/resource#static-urlroot-string)\n`);\n      }\n    }\n    return this.urlRoot;\n  }\n\n  /** URL to find this BaseResource */\n  declare readonly url: string;\n\n  /** Get the url for a BaseResource\n   *\n   * Default implementation conforms to common REST patterns\n   */\n  static url(urlParams: Readonly<Record<string, any>>): string {\n    if (\n      Object.hasOwn(urlParams, 'url') &&\n      urlParams.url &&\n      typeof urlParams.url === 'string'\n    ) {\n      return urlParams.url;\n    }\n    if (this.pk(urlParams as any) !== undefined) {\n      return `${this.urlRoot.replace(/\\/$/, '')}/${this.pk(urlParams as any)}`;\n    }\n    return this.urlRoot;\n  }\n\n  /** Get the url for many BaseResources\n   *\n   * Default implementation conforms to common REST patterns\n   */\n  static listUrl(\n    searchParams: Readonly<Record<string, string | number | boolean>> = {},\n  ): string {\n    if (Object.keys(searchParams).length) {\n      return `${this.urlRoot}?${paramsToString(searchParams)}`;\n    }\n    return this.urlRoot;\n  }\n\n  /** Perform network request and resolve with HTTP Response */\n  static fetchResponse(input: RequestInfo, init: RequestInit) {\n    let options: RequestInit = init;\n    if (!options.body || typeof options.body === 'string') {\n      options = {\n        ...options,\n        headers: {\n          'Content-Type': 'application/json',\n          ...options.headers,\n        },\n      };\n    }\n    return fetch(input, options)\n      .then(response => {\n        if (!response.ok) {\n          throw new NetworkError(response);\n        }\n        return response;\n      })\n      .catch(error => {\n        // ensure CORS, network down, and parse errors are still caught by NetworkErrorBoundary\n        if (error instanceof TypeError) {\n          (error as any).status = 400;\n        }\n        throw error;\n      });\n  }\n\n  /** Perform network request and resolve with json body */\n  static fetch(input: RequestInfo, init: RequestInit) {\n    return this.fetchResponse(input, init).then((response: Response) => {\n      if (\n        !response.headers.get('content-type')?.includes('json') ||\n        response.status === 204\n      )\n        return response.text();\n      return response.json().catch(error => {\n        error.status = 400;\n        throw error;\n      });\n    });\n  }\n\n  /** Init options for fetch - run at fetch */\n  static getFetchInit(init: Readonly<RequestInit>): RequestInit {\n    return init;\n  }\n\n  /** Get the request options for this BaseResource */\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n\n  /** Field where endpoint cache is stored */\n  protected static readonly cacheSymbol = Symbol('memo');\n\n  /** Used to memoize endpoint methods\n   *\n   * Relies on existance of runInit() member.\n   */\n  protected static memo<T extends { extend: (...args: any) => any }>(\n    name: string,\n    construct: () => T,\n  ): T {\n    if (!Object.hasOwnProperty.call(this, this.cacheSymbol)) {\n      (this as any)[this.cacheSymbol] = {};\n    }\n    const cache = (this as any)[this.cacheSymbol];\n    if (!(name in cache)) {\n      // eslint-disable-next-line @typescript-eslint/no-this-alias\n      const resource: any = this;\n      cache[name] = construct().extend({\n        get name() {\n          return `${resource.name}.${name.replace(/#/, '')}`;\n        },\n      });\n    }\n    return cache[name] as T;\n  }\n\n  /** Base endpoint that uses all the hooks provided by Resource  */\n  protected static endpoint(): RestEndpoint<\n    (this: RestEndpoint, params: any) => Promise<any>,\n    Schema | undefined,\n    undefined\n  > {\n    return this.memo('#endpoint', () => {\n      // eslint-disable-next-line\n      const resource = this;\n      const instanceFetch = this.fetch.bind(this);\n      const url = this.url.bind(this);\n\n      return new Endpoint(\n        function (params: any) {\n          return instanceFetch(this.url(params), this.getFetchInit());\n        },\n        {\n          ...this.getEndpointExtra(),\n          key: function (this: any, params: any) {\n            return `${this.method} ${this.url(params)}`;\n          },\n          url,\n          fetchInit: {} as RequestInit,\n          getFetchInit(this: any, body?: any) {\n            if (isPojo(body)) {\n              body = JSON.stringify(body);\n            }\n            return resource.getFetchInit({\n              ...this.fetchInit,\n              method: this.method,\n              signal: this.signal,\n              body,\n            });\n          },\n          method: 'GET',\n          signal: undefined as AbortSignal | undefined,\n        },\n      );\n    });\n  }\n\n  /** Base endpoint but for sideEffects */\n  protected static endpointMutate(): RestEndpoint<\n    (this: RestEndpoint, params: any, body?: any) => Promise<any>,\n    Schema | undefined,\n    true\n  > {\n    const instanceFetch = this.fetch.bind(this);\n    const endpoint = this.endpoint();\n    return this.memo('#endpointMutate', () =>\n      endpoint.extend({\n        fetch(this: RestEndpoint, params: any, body: any) {\n          return instanceFetch(this.url(params), this.getFetchInit(body));\n        },\n        sideEffect: true,\n        method: 'POST',\n      }),\n    );\n  }\n\n  static {\n    Object.defineProperty(this.prototype, 'url', {\n      get(): string {\n        // typescript thinks constructor is just a function\n        const Static = this.constructor as typeof BaseResource;\n        return Static.url(this);\n      },\n      set(v: string) {\n        Object.defineProperty(this, 'url', {\n          value: v,\n          writable: true,\n          enumerable: true,\n        });\n      },\n    });\n  }\n}\n\nconst proto = Object.prototype;\nconst gpo = Object.getPrototypeOf;\n\nfunction isPojo(obj: unknown): obj is Record<string, any> {\n  if (obj === null || typeof obj !== 'object') {\n    return false;\n  }\n  return gpo(obj) === proto;\n}\n")),(0,s.kt)("h2",{id:"superagent"},"Superagent"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://visionmedia.github.io/superagent/"},"Superagent")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, Method } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nconst ResourceError = `JSON expected but not returned from API`;\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n */\nexport default abstract class SuperResource extends Resource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: (request: SuperAgentRequest) => SuperAgentRequest;\n\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    let req = request[init.method](input).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (init.body) req = req.send(init.body);\n    return req.then(res => {\n      if (isInvalidResponse(res)) {\n        throw new Error(ResourceError);\n      }\n      return res.body;\n    });\n  }\n}\n\nexport const isInvalidResponse = (res: request.Response): boolean => {\n  // Empty is only valid when no response is expect (204)\n  const resEmptyIsExpected = res.text === '' && res.status === 204;\n  const resBodyEmpty = Object.keys(res.body).length === 0;\n  return !(res.type.includes('json') || resEmptyIsExpected) && resBodyEmpty;\n};\n")),(0,s.kt)("h2",{id:"axios"},"Axios"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, Method } from '@rest-hooks/rest';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends Resource {\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    return await axios[init.method](input, init.body);\n  }\n}\n")))}l.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),h=s,m=d["".concat(u,".").concat(h)]||d[h]||l[h]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);