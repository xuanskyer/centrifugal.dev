"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5736],{27758:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(85893),s=t(11151);const i={id:"websocket",title:"WebSocket"},r=void 0,c={id:"transports/websocket",title:"WebSocket",description:"Websocket is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP.",source:"@site/versioned_docs/version-4/transports/websocket.md",sourceDirName:"transports",slug:"/transports/websocket",permalink:"/docs/4/transports/websocket",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/transports/websocket.md",tags:[],version:"4",frontMatter:{id:"websocket",title:"WebSocket"},sidebar:"Transports",previous:{title:"Client real-time SDKs",permalink:"/docs/4/transports/client_sdk"},next:{title:"HTTP streaming",permalink:"/docs/4/transports/http_stream"}},a={},l=[{value:"Options",id:"options",level:2},{value:"websocket_message_size_limit",id:"websocket_message_size_limit",level:3},{value:"websocket_read_buffer_size",id:"websocket_read_buffer_size",level:3},{value:"websocket_write_buffer_size",id:"websocket_write_buffer_size",level:3},{value:"websocket_use_write_buffer_pool",id:"websocket_use_write_buffer_pool",level:3},{value:"websocket_compression",id:"websocket_compression",level:3},{value:"Protobuf binary protocol",id:"protobuf-binary-protocol",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/WebSocket",children:"Websocket"})," is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP."]}),"\n",(0,n.jsx)(o.p,{children:"The biggest advantage is that Websocket works out of the box in all modern browsers and almost all programming languages have Websocket implementations. This makes Websocket a universal transport that can be used to connect to Centrifugo from almost everywhere."}),"\n",(0,n.jsx)(o.p,{children:"Default WebSocket connection endpoint in Centrifugo is:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"/connection/websocket\n"})}),"\n",(0,n.jsx)(o.p,{children:"So to connect:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",metastring:'title="Connect to local Centrifugo with JavaScript SDK"',children:"const client = new Centrifuge('ws://localhost:8000/connection/websocket', {\n    // token: ?,\n    // getToken: ?\n});\n\nclient.connect();\n"})}),"\n",(0,n.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(o.h3,{id:"websocket_message_size_limit",children:"websocket_message_size_limit"}),"\n",(0,n.jsx)(o.p,{children:"Default: 65536 (64KB)"}),"\n",(0,n.jsx)(o.p,{children:"Maximum allowed size of a message received from WebSocket connection in bytes."}),"\n",(0,n.jsx)(o.h3,{id:"websocket_read_buffer_size",children:"websocket_read_buffer_size"}),"\n",(0,n.jsx)(o.p,{children:"In bytes, by default 0 which tells Centrifugo to reuse read buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but can increase number of system calls depending on average message size)."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "websocket_read_buffer_size": 512\n}\n'})}),"\n",(0,n.jsx)(o.h3,{id:"websocket_write_buffer_size",children:"websocket_write_buffer_size"}),"\n",(0,n.jsx)(o.p,{children:"In bytes, by default 0 which tells Centrifugo to reuse write buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but HTTP buffer won't be reused):"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "websocket_write_buffer_size": 512\n}\n'})}),"\n",(0,n.jsx)(o.h3,{id:"websocket_use_write_buffer_pool",children:"websocket_use_write_buffer_pool"}),"\n",(0,n.jsxs)(o.p,{children:["If you have a few writes then ",(0,n.jsx)(o.code,{children:"websocket_use_write_buffer_pool"})," (boolean, default ",(0,n.jsx)(o.code,{children:"false"}),") option can reduce memory usage of Centrifugo a bit as there won't be separate write buffer binded to each WebSocket connection."]}),"\n",(0,n.jsx)(o.h3,{id:"websocket_compression",children:"websocket_compression"}),"\n",(0,n.jsxs)(o.p,{children:["An experimental feature for raw WebSocket endpoint - ",(0,n.jsx)(o.code,{children:"permessage-deflate"})," compression for  websocket messages. Btw look at ",(0,n.jsx)(o.a,{href:"https://www.igvita.com/2013/11/27/configuring-and-optimizing-websocket-compression/",children:"great article"})," about websocket compression. WebSocket compression can reduce an amount of traffic travelling over the wire."]}),"\n",(0,n.jsxs)(o.p,{children:["We consider this experimental because this websocket compression is experimental in ",(0,n.jsx)(o.a,{href:"https://github.com/gorilla/websocket",children:"Gorilla Websocket"})," library that Centrifugo uses internally."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsx)(o.p,{children:"Enabling WebSocket compression will result in much slower Centrifugo performance and more memory usage \u2013 depending on your message rate this can be very noticeable."})}),"\n",(0,n.jsxs)(o.p,{children:["To enable WebSocket compression for raw WebSocket endpoint set ",(0,n.jsx)(o.code,{children:"websocket_compression"})," to ",(0,n.jsx)(o.code,{children:"true"})," in a configuration file. After this clients that support ",(0,n.jsx)(o.code,{children:"permessage-deflate"})," will negotiate compression with server automatically. Note that enabling compression does not mean that every connection will use it - this depends on client support for this feature."]}),"\n",(0,n.jsxs)(o.p,{children:["Another option is ",(0,n.jsx)(o.code,{children:"websocket_compression_min_size"}),". Default 0. This is a minimal size of message in bytes for which we use ",(0,n.jsx)(o.code,{children:"deflate"})," compression when writing it to client's connection. Default value ",(0,n.jsx)(o.code,{children:"0"})," means that we will compress all messages when ",(0,n.jsx)(o.code,{children:"websocket_compression"})," enabled and compression support negotiated with client."]}),"\n",(0,n.jsxs)(o.p,{children:["It's also possible to control websocket compression level defined at ",(0,n.jsx)(o.a,{href:"https://golang.org/pkg/compress/flate/#NewWriter",children:"compress/flate"})," By default when compression with a client negotiated Centrifugo uses compression level 1 (BestSpeed). If you want to set custom compression level use ",(0,n.jsx)(o.code,{children:"websocket_compression_level"})," configuration option."]}),"\n",(0,n.jsx)(o.h2,{id:"protobuf-binary-protocol",children:"Protobuf binary protocol"}),"\n",(0,n.jsx)(o.p,{children:"In most cases you will use Centrifugo with JSON protocol which is used by default. It consists of simple human-readable frames that can be easily inspected. Also it's a very simple task to publish JSON encoded data to HTTP API endpoint. You may want to use binary Protobuf client protocol if:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"you want less traffic on wire as Protobuf is very compact"}),"\n",(0,n.jsx)(o.li,{children:"you want maximum performance on server-side as Protobuf encoding/decoding is very efficient"}),"\n",(0,n.jsx)(o.li,{children:"you can sacrifice human-readable JSON for your application"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Binary protobuf protocol only works for raw Websocket connections (as SockJS can't deal with binary). With most clients to use binary you just need to provide query parameter ",(0,n.jsx)(o.code,{children:"format"})," to Websocket URL, so final URL look like:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"wss://centrifugo.example.com/connection/websocket?format=protobuf\n"})}),"\n",(0,n.jsx)(o.p,{children:"After doing this Centrifugo will use binary frames to pass data between client and server. Your application specific payload can be random bytes."}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsx)(o.p,{children:"You still can continue to encode your application specific data as JSON when using Protobuf protocol thus have a possibility to co-exist with clients that use JSON protocol on the same Centrifugo installation inside the same channels."})})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>r});var n=t(67294);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);