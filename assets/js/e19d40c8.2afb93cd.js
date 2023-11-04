"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7140],{41789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={id:"uni_http_stream",title:"Unidirectional HTTP streaming",sidebar_label:"HTTP streaming"},o=void 0,a={id:"transports/uni_http_stream",title:"Unidirectional HTTP streaming",description:"HTTP streaming is a technique based on using a long-lived HTTP connection between a client and a server with a chunked transfer encoding. These days it's possible to use it from the web browser using modern Fetch and Readable Streams API.",source:"@site/docs/transports/uni_http_stream.md",sourceDirName:"transports",slug:"/transports/uni_http_stream",permalink:"/docs/transports/uni_http_stream",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_http_stream.md",tags:[],version:"current",frontMatter:{id:"uni_http_stream",title:"Unidirectional HTTP streaming",sidebar_label:"HTTP streaming"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"},next:{title:"SSE (EventSource)",permalink:"/docs/transports/uni_sse"}},c={},l=[{value:"Connect command",id:"connect-command",level:2},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_http_stream",id:"uni_http_stream",level:3},{value:"uni_http_stream_max_request_body_size",id:"uni_http_stream_max_request_body_size",level:3},{value:"Connecting using CURL",id:"connecting-using-curl",level:2},{value:"Browser example",id:"browser-example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["HTTP streaming is a technique based on using a long-lived HTTP connection between a client and a server with a chunked transfer encoding. These days it's possible to use it from the web browser using modern ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch"})," and ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream",children:"Readable Streams"})," API."]}),"\n",(0,s.jsx)(n.p,{children:"Default unidirectional HTTP streaming connection endpoint in Centrifugo is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/connection/uni_http_stream\n"})}),"\n",(0,s.jsx)(n.p,{children:"Streaming endpoint accepts HTTP POST requests and sends JSON messages to a connection. These JSON messages can have different meaning according to Centrifuge protocol Protobuf definitions. But in most cases you will be interested in Publication push types."}),"\n",(0,s.jsx)(n.h2,{id:"connect-command",children:"Connect command"}),"\n",(0,s.jsx)(n.p,{children:"It's possible to pass initial connect command by posting a JSON body to a streaming endpoint."}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the full Connect command description \u2013 it's ",(0,s.jsx)(n.a,{href:"/docs/transports/uni_websocket#connect-command",children:"the same as for unidirectional WebSocket"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-formats",children:"Supported data formats"}),"\n",(0,s.jsx)(n.p,{children:"JSON"}),"\n",(0,s.jsx)(n.h2,{id:"pings",children:"Pings"}),"\n",(0,s.jsxs)(n.p,{children:["Centrifugo will send different message types to a connection. Every message is JSON encoded. A special JSON value ",(0,s.jsx)(n.code,{children:"null"})," used as a PING message. You can simply ignore it on a client side upon receiving. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"uni_http_stream",children:"uni_http_stream"}),"\n",(0,s.jsxs)(n.p,{children:["Boolean, default: ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Enables unidirectional HTTP streaming endpoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "uni_http_stream": true\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"uni_http_stream_max_request_body_size",children:"uni_http_stream_max_request_body_size"}),"\n",(0,s.jsx)(n.p,{children:"Default: 65536 (64KB)"}),"\n",(0,s.jsx)(n.p,{children:"Maximum allowed size of a initial HTTP POST request in bytes."}),"\n",(0,s.jsx)(n.h2,{id:"connecting-using-curl",children:"Connecting using CURL"}),"\n",(0,s.jsx)(n.p,{children:"Let's look how simple it is to connect to Centrifugo using HTTP streaming."}),"\n",(0,s.jsx)(n.p,{children:"We will start from scratch, generate new configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"centrifugo genconfig\n"})}),"\n",(0,s.jsx)(n.p,{children:"Turn on uni HTTP stream and automatically subscribe users to personal channel upon connect:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "uni_http_stream": true,\n    "user_subscribe_to_personal": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Run Centrifugo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"centrifugo -c config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"In separate terminal window create token for a user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u276f go run main.go gentoken -u user12\nHMAC SHA-256 JWT for user user12 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIiLCJleHAiOjE2MjUwNzMyODh9.BxmS4R-X6YXMxLfXNhYRzeHvtu_M2NCaXF6HNu7VnDM\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then connect to Centrifugo uni HTTP stream endpoint with simple CURL POST request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8000/connection/uni_http_stream \\\n    -d \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIiLCJleHAiOjE2MjUwNzMyODh9.BxmS4R-X6YXMxLfXNhYRzeHvtu_M2NCaXF6HNu7VnDM"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Open one more terminal window and publish message to a personal user channel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8000/api/publish \\\n    -d \'{"channel": "#user12", "data": {"input": "hello"}}\' \\\n    -H "Authorization: apikey 9230f514-34d2-4971-ace2-851c656e81dc"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You should see this messages coming from server."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{}"})," messages are pings from a server."]}),"\n",(0,s.jsx)(n.p,{children:"That's all, happy streaming!"}),"\n",(0,s.jsx)(n.h2,{id:"browser-example",children:"Browser example"}),"\n",(0,s.jsx)(n.p,{children:"A basic browser will come soon as we update docs for v4."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);