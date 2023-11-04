"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9571],{36591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(85893),s=n(11151);const o={id:"client_message_batching",sidebar_label:"Message batching control",title:"Message batching control"},a=void 0,r={id:"pro/client_message_batching",title:"Message batching control",description:"Centrifugo PRO provides advanced options to tweak connection message write behaviour.",source:"@site/docs/pro/client_msg_batching.md",sourceDirName:"pro",slug:"/pro/client_message_batching",permalink:"/docs/pro/client_message_batching",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/client_msg_batching.md",tags:[],version:"current",frontMatter:{id:"client_message_batching",sidebar_label:"Message batching control",title:"Message batching control"},sidebar:"Pro",previous:{title:"Singleflight",permalink:"/docs/pro/singleflight"},next:{title:"Observability enhancements",permalink:"/docs/pro/observability_enhancements"}},c={},l=[{value:"client_write_delay",id:"client_write_delay",level:2},{value:"client_reply_without_queue",id:"client_reply_without_queue",level:2},{value:"client_max_messages_in_frame",id:"client_max_messages_in_frame",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Centrifugo PRO provides advanced options to tweak connection message write behaviour."}),"\n",(0,i.jsx)(t.p,{children:"By default, Centrifugo tries to write messages to clients as fast as possible. Centrifugo also does best effort combining different protocol messages into one transport frame (to reduce system calls and thus reduce CPU usage) without sacrificing delivery latency."}),"\n",(0,i.jsx)(t.p,{children:"But still in this model if you have a lot of messages sent to each individual connection, you may have a lot of write system calls. These system calls have an huge impact on the server CPU utilization. Sometimes you want to trade-off delivery latency in favour of lower CPU consumption by Centrifugo node. It's possible to do by telling Centrifugo to slow down message delivery and collect messages to larger batches before sending them towards individual client. To achieve that Centrifugo PRO exposes additional configuration options."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Note, this is only useful when you have lots of messages per client. This specific feature won't be helpful with a case when the message is broadcasted towards many different connections as the feature described here only batches message writing it terms of a single socket."})}),"\n",(0,i.jsx)(t.h2,{id:"client_write_delay",children:"client_write_delay"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"client_write_delay"})," is a duration option, it is a time Centrifugo will try to collect messages inside each connection message write loop before sending them towards the connection."]}),"\n",(0,i.jsxs)(t.p,{children:["Enabling ",(0,i.jsx)(t.code,{children:"client_write_delay"})," may reduce CPU usage of both server and client in case of high message rate inside individual connections. The reduction happens due to the lesser number of system calls to execute. Enabling ",(0,i.jsx)(t.code,{children:"client_write_delay"})," limits the maximum throughput of messages towards the connection which may be achieved. For example, if ",(0,i.jsx)(t.code,{children:"client_write_delay"})," is 100ms then the max throughput per second will be ",(0,i.jsx)(t.code,{children:"(1000 / 100) * client_max_messages_in_frame"})," (16 by default), i.e. 160 messages per second. Though this should be more than enough for target Centrifugo use cases (frontend apps)."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    // Rest of config here ...\n    "client_write_delay": "100ms"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"client_reply_without_queue",children:"client_reply_without_queue"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"client_reply_without_queue"})," is a boolean option to not use client queue for replies to commands. When ",(0,i.jsx)(t.code,{children:"true"})," replies are written to the transport without going through the connection message queue."]}),"\n",(0,i.jsx)(t.h2,{id:"client_max_messages_in_frame",children:"client_max_messages_in_frame"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"client_max_messages_in_frame"})," is an integer option which controls the maximum number of messages which may be joined by Centrifugo into one transport frame. By default, 16. Use -1 for unlimited number."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);