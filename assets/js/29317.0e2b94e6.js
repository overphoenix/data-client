"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29317],{77612:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(11614),l=t(18015),i=t(87462),o=t(86010),c="iconEdit_Z9Sw";function m(e){let{className:n,...t}=e;return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function s(e){let{editUrl:n}=e;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(m,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},34055:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(87462),r=t(67294),l=t(86010),i=t(11614),o=t(96793),c="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function s(e){let{as:n,id:t,...s}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();return"h1"!==n&&t?r.createElement(n,(0,a.Z)({},s,{className:(0,l.Z)("anchor",d?m:c),id:t}),s.children,r.createElement("a",{className:"hash-link",href:`#${t}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,(0,a.Z)({},s,{id:void 0}))}},26141:(e,n,t)=>{t.d(n,{Z:()=>P});var a=t(87462),r=t(67294),l=t(32411);var i=t(13743);var o=t(88746);var c=t(86010),m=t(5730),s=t(17940),d="details_lb9f",u="isBrowser_bmU9",p="collapsibleContent_i85q";function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function v(e){let{summary:n,children:t,...l}=e;const i=(0,m.Z)(),o=(0,r.useRef)(null),{collapsed:v,setCollapsed:g}=(0,s.u)({initialState:!l.open}),[E,b]=(0,r.useState)(l.open);return r.createElement("details",(0,a.Z)({},l,{ref:o,open:E,"data-collapsed":v,className:(0,c.Z)(d,i&&u,l.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&h(n,o.current)&&(e.preventDefault(),v?(g(!1),b(!0)):g(!0))}}),n??r.createElement("summary",null,"Details"),r.createElement(s.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),b(!e)}},r.createElement("div",{className:p},t)))}var g="details_b_Ee";function E(e){let{...n}=e;return r.createElement(v,(0,a.Z)({},n,{className:(0,c.Z)("alert alert--info",g,n.className)}))}var b=t(34055);function y(e){return r.createElement(b.Z,e)}var Z="containsTaskList_mC6p";var N="img_ev3q";var C=t(18015),T=t(11614),k="admonition_LlT9",_="admonitionHeading_tbUL",O="admonitionIcon_kALy",w="admonitionContent_S0QG";const x={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},z={secondary:"note",important:"info",success:"tip",warning:"danger"};function j(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=r.Children.toArray(e),t=n.find((e=>{var n;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}var P={head:function(e){const n=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var t;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?r.createElement("code",e):r.createElement(i.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var n;return r.createElement(i.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=r.Children.toArray(e.children),t=n.find((e=>{var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),l=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return r.createElement(E,(0,a.Z)({},e,{summary:t}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,c.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&Z))}));var n},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,c.Z)(n,N))}));var n},h1:e=>r.createElement(y,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(y,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(y,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(y,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(y,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(y,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:a,icon:l}=j(e),i=function(e){const n=z[e]??e;return x[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),x.info)}(t),o=a??i.label,{iconComponent:m}=i,s=l??r.createElement(m,null);return r.createElement("div",{className:(0,c.Z)(C.k.common.admonition,C.k.common.admonitionType(e.type),"alert",`alert--${i.infimaClassName}`,k)},r.createElement("div",{className:_},r.createElement("span",{className:O},s),o),r.createElement("div",{className:w},n))}}},42279:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(3905),l=t(80064);function i(e){let{children:n}=e;return a.createElement(r.Zo,{components:l.Z},n)}},16948:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010),l=t(88746);function i(e){const{permalink:n,title:t,subLabel:i,isNext:o}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},t))}},24588:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(67294),r=t(86010),l=t(88746),i="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:n,label:t,count:m}=e;return a.createElement(l.Z,{href:n,className:(0,r.Z)(i,m?c:o)},t,m&&a.createElement("span",null,m))}},58045:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(67294),r=t(86010),l=t(11614),i=t(24588),o="tags_jXut",c="tag_QGVx";function m(e){let{tags:n}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},n.map((e=>{let{label:n,permalink:t}=e;return a.createElement("li",{key:t,className:c},a.createElement(i.Z,{label:n,permalink:t}))}))))}},3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),m=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),p=r,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);