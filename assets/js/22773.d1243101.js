"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22773],{4391:(e,t,s)=>{function n(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}s.d(t,{Z:()=>o,r:()=>i});let r=!1;try{Function()}catch(c){r=!0}class o extends Function{constructor(e,t){let s;return r?(s=(...e)=>s.fetch(...e),Object.setPrototypeOf(s,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),s=this),s.getFetchKey=e=>s.key(e),e&&(s.fetch=e),t&&"name"in t?(s.__name=t.name,delete t.name):e&&(s.__name=e.name),Object.assign(s,t),Object.defineProperty(s,"name",{get:function(){return this.__name}}),n(s,t),s}key(...e){return`${this.name} ${JSON.stringify(e)}`}bind(e,...t){const s=this.fetch,n=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,t)},key(){return n.apply(this,t)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const s=new t(e.fetch,e);return n(s,{...this.options,...e}),s}}const i=o},22773:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(4391),r=s(91085);class o extends n.Z{constructor(e,t){return super((async function(e){return this.fetchResponse(this.url,this.getRequestInit(e)).then((t=>this.process(t,e)))}),e?{...t,url:e}:t),this}key(e){return`${this.getQuery(e)} ${JSON.stringify(e)}`}getQuery(e){throw new Error("You must include a query")}getHeaders(e){return e}getRequestInit(e){var t;return{body:JSON.stringify({query:this.getQuery(e),variables:e}),method:"POST",signal:null!=(t=this.signal)?t:null,headers:this.getHeaders({"Content-Type":"application/json"})}}fetchResponse(e,t){return fetch(e,t).then((async e=>{const t=await e.json();if(t.errors)throw new r.Z(t.errors);if(!e.ok)throw new r.Z([t]);return t.data})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}process(e,t){return e}errorPolicy(e){return e.status>=500?"soft":void 0}query(e,t){const s={schema:t,getQuery:"function"==typeof e?e:()=>e};return this.extend(s)}mutation(e,t){const s={sideEffect:!0,schema:t,getQuery:"function"==typeof e?e:()=>e};return this.extend(s)}}},91085:(e,t,s)=>{s.d(t,{Z:()=>n});class n extends Error{constructor(e){super(e[0].message),this.name="NetworkError",this.status=400,this.errors=e}}}}]);