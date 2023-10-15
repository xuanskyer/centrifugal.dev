"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"tracing",title:"User and channel tracing"},i=void 0,s={unversionedId:"pro/tracing",id:"pro/tracing",title:"User and channel tracing",description:"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time.",source:"@site/docs/pro/tracing.md",sourceDirName:"pro",slug:"/pro/tracing",permalink:"/docs/pro/tracing",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/tracing.md",tags:[],version:"current",frontMatter:{id:"tracing",title:"User and channel tracing"},sidebar:"Pro",previous:{title:"Install and run PRO version",permalink:"/docs/pro/install_and_run"},next:{title:"Analytics with ClickHouse",permalink:"/docs/pro/analytics"}},c={},l=[{value:"Save to a file",id:"save-to-a-file",level:3}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tracing",src:r(7298).Z,width:"4058",height:"985"})),(0,a.kt)("p",null,"It's possible to attach to trace streams using Centrifugo admin UI panel or simply from terminal using CURL and admin token. "),(0,a.kt)("p",null,"This can be super-useful for debugging issues, investigating application behavior, understanding that the application works as expected. "),(0,a.kt)("video",{width:"100%",controls:!0},(0,a.kt)("source",{src:"/img/tracing_ui.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,a.kt)("h3",{id:"save-to-a-file"},"Save to a file"),(0,a.kt)("p",null,"It's possible to connect to the admin tracing endpoint with CURL using the admin session token. And then save tracing output to a file for later processing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST http://localhost:8000/admin/trace -H "Authorization: token <ADMIN_AUTH_TOKEN>" -d \'{"type": "user", "entity": "56"}\' -o trace.txt\n')),(0,a.kt)("p",null,"Currently, you should copy the admin auth token from browser developer tools, this may be improved in the future as PRO version evolves."))}p.isMDXComponent=!0},7298:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tracing-5a543c03b5afb51779ba0ee1ab8404b6.png"}}]);