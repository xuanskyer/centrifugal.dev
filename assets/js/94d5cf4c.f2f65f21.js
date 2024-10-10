"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5028],{59042:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(85893),s=n(11151);const i={id:"websocket",title:"WebSocket"},r=void 0,c={id:"transports/websocket",title:"WebSocket",description:"Websocket is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP.",source:"@site/docs/transports/websocket.md",sourceDirName:"transports",slug:"/transports/websocket",permalink:"/docs/transports/websocket",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/websocket.md",tags:[],version:"current",frontMatter:{id:"websocket",title:"WebSocket"},sidebar:"Transports",previous:{title:"Client real-time SDKs",permalink:"/docs/transports/client_sdk"},next:{title:"HTTP streaming",permalink:"/docs/transports/http_stream"}},a={},l=[{value:"Options",id:"options",level:2},{value:"websocket_message_size_limit",id:"websocket_message_size_limit",level:3},{value:"websocket_read_buffer_size",id:"websocket_read_buffer_size",level:3},{value:"websocket_write_buffer_size",id:"websocket_write_buffer_size",level:3},{value:"websocket_use_write_buffer_pool",id:"websocket_use_write_buffer_pool",level:3},{value:"websocket_compression",id:"websocket_compression",level:3},{value:"Protobuf binary protocol",id:"protobuf-binary-protocol",level:2},{value:"Debugging with Postman, wscat, etc",id:"debugging-with-postman-wscat-etc",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/WebSocket",children:"Websocket"})," is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP."]}),"\n",(0,t.jsx)(o.p,{children:"The biggest advantage is that Websocket works out of the box in all modern browsers and almost all programming languages have Websocket implementations. This makes Websocket a universal transport that can be used to connect to Centrifugo from almost everywhere."}),"\n",(0,t.jsx)(o.p,{children:"Default WebSocket connection endpoint in Centrifugo is:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"/connection/websocket\n"})}),"\n",(0,t.jsx)(o.p,{children:"So to connect:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",metastring:'title="Connect to local Centrifugo with JavaScript SDK"',children:"const client = new Centrifuge('ws://localhost:8000/connection/websocket', {\n    // token: ?,\n    // getToken: ?\n});\n\nclient.connect();\n"})}),"\n",(0,t.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(o.h3,{id:"websocket_message_size_limit",children:"websocket_message_size_limit"}),"\n",(0,t.jsx)(o.p,{children:"Default: 65536 (64KB)"}),"\n",(0,t.jsx)(o.p,{children:"Maximum allowed size of a message received from WebSocket connection in bytes."}),"\n",(0,t.jsx)(o.h3,{id:"websocket_read_buffer_size",children:"websocket_read_buffer_size"}),"\n",(0,t.jsx)(o.p,{children:"In bytes, by default 0 which tells Centrifugo to reuse read buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but can increase number of system calls depending on average message size)."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "websocket_read_buffer_size": 512\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"websocket_write_buffer_size",children:"websocket_write_buffer_size"}),"\n",(0,t.jsx)(o.p,{children:"In bytes, by default 0 which tells Centrifugo to reuse write buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but HTTP buffer won't be reused):"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "websocket_write_buffer_size": 512\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"websocket_use_write_buffer_pool",children:"websocket_use_write_buffer_pool"}),"\n",(0,t.jsxs)(o.p,{children:["If you have a few writes then ",(0,t.jsx)(o.code,{children:"websocket_use_write_buffer_pool"})," (boolean, default ",(0,t.jsx)(o.code,{children:"false"}),") option can reduce memory usage of Centrifugo a bit as there won't be separate write buffer binded to each WebSocket connection."]}),"\n",(0,t.jsx)(o.h3,{id:"websocket_compression",children:"websocket_compression"}),"\n",(0,t.jsxs)(o.p,{children:["Centrifugo supports ",(0,t.jsx)(o.code,{children:"permessage-deflate"})," compression for websocket messages. Check out the ",(0,t.jsx)(o.a,{href:"https://www.igvita.com/2013/11/27/configuring-and-optimizing-websocket-compression/",children:"great article"})," about websocket compression for a general ovirview. WebSocket compression can reduce an amount of traffic travelling over the wire and reduce bandwidth costs."]}),"\n",(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsxs)(o.p,{children:["Enabling WebSocket compression may result in more CPU and memory usage by Centrifugo \u2013 depending on your load profile the increase may be notable. But it ",(0,t.jsx)(o.a,{href:"/blog/2024/08/19/optimizing-websocket-compression",children:"can be still economically sufficient"})," due to reduced bandwidth costs."]})}),"\n",(0,t.jsxs)(o.p,{children:["To enable WebSocket compression for raw WebSocket endpoint set ",(0,t.jsx)(o.code,{children:"websocket_compression"})," to ",(0,t.jsx)(o.code,{children:"true"})," in a configuration file. After this clients that support ",(0,t.jsx)(o.code,{children:"permessage-deflate"})," will negotiate compression with server automatically. Note that enabling compression does not mean that every connection will use it - this depends on client support for this feature."]}),"\n",(0,t.jsxs)(o.p,{children:["Another option is ",(0,t.jsx)(o.code,{children:"websocket_compression_min_size"}),". Default 0. This is a minimal size of message in bytes for which we use ",(0,t.jsx)(o.code,{children:"deflate"})," compression when writing it to client's connection. Default value ",(0,t.jsx)(o.code,{children:"0"})," means that we will compress all messages when ",(0,t.jsx)(o.code,{children:"websocket_compression"})," enabled and compression support negotiated with client."]}),"\n",(0,t.jsxs)(o.p,{children:["It's also possible to control websocket compression level defined at ",(0,t.jsx)(o.a,{href:"https://golang.org/pkg/compress/flate/#NewWriter",children:"compress/flate"})," By default when compression with a client negotiated Centrifugo uses compression level 1 (BestSpeed). If you want to set custom compression level use ",(0,t.jsx)(o.code,{children:"websocket_compression_level"})," configuration option."]}),"\n",(0,t.jsx)(o.h2,{id:"protobuf-binary-protocol",children:"Protobuf binary protocol"}),"\n",(0,t.jsx)(o.p,{children:"In most cases you will use Centrifugo with JSON protocol which is used by default. It consists of simple human-readable frames that can be easily inspected. Also it's a very simple task to publish JSON encoded data to HTTP API endpoint. You may want to use binary Protobuf client protocol if:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"you want less traffic on wire as Protobuf is very compact"}),"\n",(0,t.jsx)(o.li,{children:"you want maximum performance on server-side as Protobuf encoding/decoding is very efficient"}),"\n",(0,t.jsx)(o.li,{children:"you can sacrifice human-readable JSON for your application"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Binary protobuf protocol only works for raw Websocket connections (as SockJS can't deal with binary). With most clients to use binary you just need to provide query parameter ",(0,t.jsx)(o.code,{children:"format"})," to Websocket URL, so final URL look like:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"wss://centrifugo.example.com/connection/websocket?format=protobuf\n"})}),"\n",(0,t.jsx)(o.p,{children:"After doing this Centrifugo will use binary frames to pass data between client and server. Your application specific payload can be random bytes."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:"You still can continue to encode your application specific data as JSON when using Protobuf protocol thus have a possibility to co-exist with clients that use JSON protocol on the same Centrifugo installation inside the same channels."})}),"\n",(0,t.jsx)(o.h2,{id:"debugging-with-postman-wscat-etc",children:"Debugging with Postman, wscat, etc"}),"\n",(0,t.jsxs)(o.p,{children:["Centrifugo supports a special url parameter for bidirectional websocket which turns on using native WebSocket frame ping-pong mechanism instead of ",(0,t.jsx)(o.a,{href:"/docs/transports/overview#pingpong-behavior",children:"server-to-client application level pings"})," Centrifugo uses by default. This simplifies debugging Centrifugo protocol with tools like Postman, wscat, websocat, etc."]}),"\n",(0,t.jsxs)(o.p,{children:["By default, it may be inconvenient due to the fact Centrifugo sends periodic ping message to the client (",(0,t.jsx)(o.code,{children:"{}"})," in JSON protocol scenario) and expects pong response back within some time period. Otherwise Centrifugo closes connection. This results in problems with mentioned tools because you had to manually send ",(0,t.jsx)(o.code,{children:"{}"})," pong message upon ping message. So typical session in ",(0,t.jsx)(o.code,{children:"wscat"})," could look like this:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'\u276f wscat --connect ws://localhost:8000/connection/websocket\nConnected (press CTRL+C to quit)\n> {"id": 1, "connect": {}}\n< {"id":1,"connect":{"client":"9ac9de4e-5289-4ad6-9aa7-8447f007083e","version":"0.0.0","ping":25,"pong":true}}\n< {}\nDisconnected (code: 3012, reason: "no pong")\n'})}),"\n",(0,t.jsxs)(o.p,{children:["The parameter is called ",(0,t.jsx)(o.code,{children:"cf_ws_frame_ping_pong"}),", to use it connect to Centrifugo bidirectional WebSocket endpoint like ",(0,t.jsx)(o.code,{children:"ws://localhost:8000/connection/websocket?cf_ws_frame_ping_pong=true"}),". Here is an example which demonstrates working with Postman WebSocket where we connect to local Centrifugo and subscribe to two channels ",(0,t.jsx)(o.code,{children:"test1"})," and ",(0,t.jsx)(o.code,{children:"test2"}),":"]}),"\n",(0,t.jsx)("video",{width:"100%",loop:!0,autoPlay:"autoplay",muted:!0,controls:"",src:"/img/postman.mp4"}),"\n",(0,t.jsxs)(o.p,{children:["You can then proceed to Centrifugo ",(0,t.jsx)(o.a,{href:"/docs/server/admin_web",children:"admin web UI"}),", publish something to these channels and see publications in Postman."]}),"\n",(0,t.jsx)(o.p,{children:"Note, how we sent several JSON commands in one WebSocket frame to Centrifugo from Postman in the example above - this is possible since Centrifugo protocol supports batches of commands in line-delimited format."}),"\n",(0,t.jsxs)(o.p,{children:["We consider this feature to be used only for debugging, ",(0,t.jsxs)(o.strong,{children:["in production prefer using our SDKs without using ",(0,t.jsx)(o.code,{children:"cf_ws_frame_ping_pong"})," parameter"]})," \u2013 because app-level ping-pong is more efficient and our SDKs detect broken connections due to it."]})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);