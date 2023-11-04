"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1385],{48477:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),o=s(11151);const i={id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},r=void 0,c={id:"transports/uni_sse",title:"Unidirectional SSE (EventSource)",description:"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:",source:"@site/versioned_docs/version-3/transports/uni_sse.md",sourceDirName:"transports",slug:"/transports/uni_sse",permalink:"/docs/3/transports/uni_sse",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/transports/uni_sse.md",tags:[],version:"3",frontMatter:{id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/3/transports/uni_websocket"},next:{title:"HTTP streaming",permalink:"/docs/3/transports/uni_http_stream"}},a={},d=[{value:"Connect command",id:"connect-command",level:2},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_sse",id:"uni_sse",level:3},{value:"uni_sse_max_request_body_size",id:"uni_sse_max_request_body_size",level:3},{value:"Browser example",id:"browser-example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/connection/uni_sse\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Only parts of EventSource spec that make sense for Centrifugo are implemented. For example ",(0,t.jsx)(n.code,{children:"Last-Event-Id"})," header not supported (since one connection can be subscribed to many channels) and multiline strings (since we are passing JSON-encoded objects to the client) etc."]})}),"\n",(0,t.jsx)(n.h2,{id:"connect-command",children:"Connect command"}),"\n",(0,t.jsxs)(n.p,{children:["Unfortunately SSE specification does not allow POST requests from a web browser, so the only way to pass initial connect command is over URL params. Centrifugo is looking for ",(0,t.jsx)(n.code,{children:"cf_connect"})," URL param for connect command. Connect command value expected to be a JSON-encoded string, properly encoded into URL. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const url = new URL('http://localhost:8000/connection/uni_sse');\nurl.searchParams.append(\"cf_connect\", JSON.stringify({\n    'token': '<JWT>'\n}));\n\nconst eventSource = new EventSource(url);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the full Connect command description \u2013 it's ",(0,t.jsx)(n.a,{href:"/docs/3/transports/uni_websocket#connect-command",children:"the same as for unidirectional WebSocket"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The length of URL query should be kept less than 2048 characters to work throughout browsers. This should be more than enough for most use cases."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Centrifugo unidirectional SSE endpoint also supports POST requests. While it's not very useful for browsers which only allow GET requests for EventSource this can be useful when connecting from a mobile device. In this case you must send the connect object as a JSON body of a POST request (instead of using ",(0,t.jsx)(n.code,{children:"cf_connect"})," URL parameter), similar to what we have in unidirectional HTTP streaming transport case."]})}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-formats",children:"Supported data formats"}),"\n",(0,t.jsx)(n.p,{children:"JSON"}),"\n",(0,t.jsx)(n.h2,{id:"pings",children:"Pings"}),"\n",(0,t.jsx)(n.p,{children:"Centrifugo sends SSE data like this as pings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"event: ping\ndata:\n"})}),"\n",(0,t.jsxs)(n.p,{children:["I.e. with event name ",(0,t.jsx)(n.code,{children:"ping"})," and empty data. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"uni_sse",children:"uni_sse"}),"\n",(0,t.jsxs)(n.p,{children:["Boolean, default: ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Enables unidirectional SSE (EventSource) endpoint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "uni_sse": true\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"uni_sse_max_request_body_size",children:"uni_sse_max_request_body_size"}),"\n",(0,t.jsx)(n.p,{children:"Default: 65536 (64KB)"}),"\n",(0,t.jsx)(n.p,{children:"Maximum allowed size of a initial HTTP POST request in bytes (when using HTTP POST requests to connect)."}),"\n",(0,t.jsx)(n.h2,{id:"browser-example",children:"Browser example"}),"\n",(0,t.jsxs)(n.p,{children:["A basic browser example can be found ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/examples/tree/master/v3/unidirectional/sse",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);