(self.webpackChunk=self.webpackChunk||[]).push([[26750],{15929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(49544),i=n(45440);function o(){return r.createElement(r.Fragment,null,r.createElement(a.i5,null),r.createElement(a.IF,{className:i.Z.playgroundError}))}},41380:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(87462),a=n(62451),i=n(56855),o=n(32588),d=n(56265),s=n(4391),c=n(78357),l=n(70794),u=n(67294),p=n(49544),m=n(72263),f=n(38480),h=n(45440);var E=n(80086),g=n(86429),v=n(67288);class w extends d.Z{id=0;pk(){return`${this.id}`}}class x extends w{userId=0;title="";completed=!1;updatedAt=0;static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class y extends g.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const A=function(e){let{path:t,schema:n,Endpoint:r=g.Z}=e;const a=(0,v.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:x,Endpoint:y}),k={...A,partialUpdate:A.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(A.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:A.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[A.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:A.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var Z=n(55423);n(3495);var I=function(e){return(0,Z.transpileModule)(e.replaceAll(/^(import.+$|export )/gm,""),{compilerOptions:{module:Z.ModuleKind.ESNext,target:Z.ScriptTarget.ES2017,jsx:Z.JsxEmit.React,skipLibCheck:!0}}).outputText};class T extends d.Z{id="";pk(){return this.id}static schema={updatedAt:Date}}const R=new s.Z((e=>{let{id:t}=e;return new Promise((e=>{setTimeout((()=>e({id:t,updatedAt:(new Date).toISOString()})),150)}))}),{schema:T});const S={...k,getList:k.getList.extend({process:e=>e.slice(0,7)})},b={...o,...c,...a,...i,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:l.Z,CurrentTime:function(){const[e,t]=(0,u.useState)((()=>new Date));return(0,u.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),u.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=u.useState(0),{resetEntireStore:a}=(0,m.Z)();return u.createElement(f.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return u.createElement(u.Fragment,null,u.createElement("div",{className:h.Z.playgroundError},t.message," ",u.createElement("i",null,t.status)),u.createElement("button",{onClick:()=>{a(),r((e=>e+1))}},"Clear Error"))}},t)}},C={...b,lastUpdated:R,TimedEntity:T,Todo:x,TodoResource:S,TodoEndpoint:y};function F(e){let{code:t,includeEndpoints:n,...a}=e;return u.createElement(p.nu,{key:"preview",code:t,transformCode:I,noInline:!0,scope:n?C:b},u.createElement(E.Z,(0,r.Z)({key:"preview"},a)))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);