/*! For license information please see 997a7325.0f04b6af.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80245],{41535:(t,e)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function g(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||d}function v(){}function h(t,e,r){this.props=t,this.context=e,this.refs=b,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},g.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},v.prototype=g.prototype;var O=h.prototype=new v;O.constructor=h,m(O,g.prototype),O.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,n){var o,a={},i=null,u=null;if(null!=e)for(o in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(i=""+e.key),e)k.call(e,o)&&!S.hasOwnProperty(o)&&(a[o]=e[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:t,key:i,ref:u,props:a,_owner:w.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===r}var P=/\/+/g;function x(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function D(t,e,o,a,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=t),t=""===a?"."+x(c,0):a,j(i)?(o="",null!=t&&(o=t.replace(P,"$&/")+"/"),D(i,e,o,"",(function(t){return t}))):null!=i&&(E(i)&&(i=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t)),e.push(i)),1;if(c=0,a=""===a?".":a+":",j(t))for(var l=0;l<t.length;l++){var s=a+x(u=t[l],l);c+=D(u,e,o,s,i)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=y&&t[y]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=D(u=u.value,e,o,s=a+x(u,l++),i);else if("object"===u)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function A(t,e,r){if(null==t)return t;var n=[],o=0;return D(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function M(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var $={current:null},R={transition:null}},27378:(t,e,r)=>{r(41535)},73484:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={},i=void 0,u={unversionedId:"getting-started/README",id:"getting-started/README",title:"README",description:"Getting Started",source:"@site/../docs/core/getting-started/README.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{}},c={},l=[{value:"Getting Started",id:"getting-started",level:2}],s={toc:l};function f(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/installation"},"Installation"))))}f.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(r),y=o,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,i(i({ref:e},s),{},{components:r})):n.createElement(d,i({ref:e},s))}));function y(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);