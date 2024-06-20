"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6230],{38555:(e,n,t)=>{t.d(n,{Z:()=>T});var i=t(67294),s=t(85893);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),l=t?.props.children;return{mdxAdmonitionTitle:l,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var l=t(36905),r=t(11614),o=t(18015);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,l.Z)(o.k.common.admonition,o.k.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:i,children:a,className:l}=e;return(0,s.jsxs)(d,{type:n,className:l,children:[i||t?(0,s.jsx)(u,{title:i,icon:t}):null,(0,s.jsx)(m,{children:a})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,s.jsx)(h,{...x,...e,className:(0,l.Z)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,s.jsx)(h,{...j,...e,className:(0,l.Z)("alert alert--success",e.className),children:e.children})}function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Z(e){return(0,s.jsx)(h,{...b,...e,className:(0,l.Z)("alert alert--info",e.className),children:e.children})}function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const y={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const H={icon:(0,s.jsx)(L,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const k={...{note:v,tip:g,info:Z,warning:function(e){return(0,s.jsx)(h,{...y,...e,className:(0,l.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...H,...e,className:(0,l.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(v,{title:"secondary",...e}),important:e=>(0,s.jsx)(Z,{title:"important",...e}),success:e=>(0,s.jsx)(g,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...w,...e,className:(0,l.Z)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=a(e),t=(i=n.type,k[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),k.info));var i;return(0,s.jsx)(t,{...n})}},18842:(e,n,t)=>{t.d(n,{Z:()=>v});t(67294);var i=t(36905),s=t(11614),a=t(18015),l=t(75013);const r={iconEdit:"iconEdit_Z9Sw"};var o=t(85893);function c(e){let{className:n,...t}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(r.iconEdit,n),"aria-hidden":"true",...t,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:n}=e;return(0,o.jsxs)(l.Z,{to:n,className:a.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=t(92538);function m(e){let{lastUpdatedAt:n}=e;const t=new Date(n),i=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,o.jsx)(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:n}=e;return(0,o.jsx)(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:n})},children:" by {user}"})}function f(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,o.jsxs)("span",{className:a.k.common.lastUpdated,children:[(0,o.jsx)(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,o.jsx)(m,{lastUpdatedAt:n}):"",byUser:t?(0,o.jsx)(h,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function v(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,o.jsxs)("div",{className:(0,i.Z)("row",n),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(d,{editUrl:t})}),(0,o.jsx)("div",{className:(0,i.Z)("col",x.lastUpdated),children:(s||a)&&(0,o.jsx)(f,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}},33658:(e,n,t)=>{t.d(n,{Z:()=>U});var i=t(67294),s=t(11151),a=t(32411),l=t(84316),r=t(85893);function o(e){return(0,r.jsx)("code",{...e})}var c=t(75013);var d=t(36905),u=t(788),m=t(43444),h=t(5730),f=t(17940);const x={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function j(e){let{summary:n,children:t,...s}=e;(0,m.Z)().collectAnchor(s.id);const a=(0,h.Z)(),l=(0,i.useRef)(null),{collapsed:o,setCollapsed:c}=(0,f.u)({initialState:!s.open}),[d,j]=(0,i.useState)(s.open),g=i.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...s,ref:l,open:d,"data-collapsed":o,className:(0,u.Z)(x.details,a&&x.isBrowser,s.className),onMouseDown:e=>{v(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;v(n)&&p(n,l.current)&&(e.preventDefault(),o?(c(!1),j(!0)):c(!0))},children:[g,(0,r.jsx)(f.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),j(!e)},children:(0,r.jsx)("div",{className:x.collapsibleContent,children:t})})]})}const g={details:"details_b_Ee"},N="alert alert--info";function b(e){let{...n}=e;return(0,r.jsx)(j,{...n,className:(0,d.Z)(N,g.details,n.className)})}function Z(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(b,{...e,summary:t,children:s})}var C=t(34055);function y(e){return(0,r.jsx)(C.Z,{...e})}const L={containsTaskList:"containsTaskList_mC6p"};function H(e){if(void 0!==e)return(0,d.Z)(e,e?.includes("contains-task-list")&&L.containsTaskList)}const w={img:"img_ev3q"};var k=t(38555);const T={Head:a.Z,details:Z,Details:Z,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,r.jsx)(o,{...e}):(0,r.jsx)(l.Z,{...e})},a:function(e){return(0,r.jsx)(c.Z,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:H(e.className)})},li:function(e){return(0,m.Z)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.Z)(n,w.img))});var n},h1:e=>(0,r.jsx)(y,{as:"h1",...e}),h2:e=>(0,r.jsx)(y,{as:"h2",...e}),h3:e=>(0,r.jsx)(y,{as:"h3",...e}),h4:e=>(0,r.jsx)(y,{as:"h4",...e}),h5:e=>(0,r.jsx)(y,{as:"h5",...e}),h6:e=>(0,r.jsx)(y,{as:"h6",...e}),admonition:k.Z,mermaid:()=>null};function U(e){let{children:n}=e;return(0,r.jsx)(s.Z,{components:T,children:n})}},95967:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var i=t(36905),s=t(21351);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(85893);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,i.Z)(a.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.Z,{...t,linkClassName:r,linkActiveClassName:o})})}},21351:(e,n,t)=>{t.d(n,{Z:()=>x});var i=t(67294),s=t(96793);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(75013),m=t(85893);function h(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,s.L)(),v=c??x.tableOfContents.minHeadingLevel,p=u??x.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>l({toc:a(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return d((0,i.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[r,o,v,p])),(0,m.jsx)(f,{toc:j,className:t,linkClassName:r,...h})}},94007:(e,n,t)=>{t.d(n,{Z:()=>h});t(67294);var i=t(36905),s=t(11614),a=t(32411),l=t(85893);function r(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(a.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(18015),u=t(38555);function m(e){let{className:n}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},92538:(e,n,t)=>{t.d(n,{P:()=>s});var i=t(6832);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,i.Z)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,i.Z)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}}}]);