"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[102],{24203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(85893),o=t(11151);const i={id:"sse",title:"SSE (EventSource), with bidirectional emulation",sidebar_label:"SSE (EventSource)"},r=void 0,a={id:"transports/sse",title:"SSE (EventSource), with bidirectional emulation",description:"SSE (EventSource) connection endpoint in Centrifugo is:",source:"@site/versioned_docs/version-4/transports/sse.md",sourceDirName:"transports",slug:"/transports/sse",permalink:"/docs/4/transports/sse",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/transports/sse.md",tags:[],version:"4",frontMatter:{id:"sse",title:"SSE (EventSource), with bidirectional emulation",sidebar_label:"SSE (EventSource)"},sidebar:"Transports",previous:{title:"HTTP streaming",permalink:"/docs/4/transports/http_stream"},next:{title:"SockJS",permalink:"/docs/4/transports/sockjs"}},c={},l=[{value:"Options",id:"options",level:2},{value:"sse",id:"sse",level:3},{value:"sse_max_request_body_size",id:"sse_max_request_body_size",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"SSE (EventSource) connection endpoint in Centrifugo is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/connection/sse\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This transport is only implemented by our Javascript SDK at this point \u2013 as it mostly makes sense as a fallback for WebSocket to have real-time connection in an environment where WebSocket is unavailable. These days those envs are mostly corporate networks which can block WebSocket traffic (even TLS-based)."})}),"\n",(0,s.jsx)(n.p,{children:"Here is an example how to use JavaScript SDK with WebSocket as the main transport and SSE transport fallback:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="Use SSE with bidirectional emulation as a fallback for WebSocket in JS SDK"',children:"const transports = [\n    {\n        transport: 'websocket',\n        endpoint: 'ws://localhost:8000/connection/websocket'\n    },\n    {\n        transport: 'sse',\n        endpoint: 'http://localhost:8000/connection/sse'\n    }\n];\nconst centrifuge = new Centrifuge(transports);\ncentrifuge.connect()\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.a,{href:"/docs/4/server/configuration#allowed_origins",children:"allowed_origins"})," are properly configured."]})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"sse",children:"sse"}),"\n",(0,s.jsxs)(n.p,{children:["Boolean, default: ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Enables SSE (EventSource) endpoint. And enables emulation endpoint (",(0,s.jsx)(n.code,{children:"/emulation"})," by default) to accept emulation HTTP requests from clients."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "sse": true\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sse_max_request_body_size",children:"sse_max_request_body_size"}),"\n",(0,s.jsx)(n.p,{children:"Default: 65536 (64KB)"}),"\n",(0,s.jsx)(n.p,{children:"Maximum allowed size of a initial HTTP POST request in bytes when using HTTP POST requests to connect (browsers are using GET so it's not applied)."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);