"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1658],{21469:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(85893),s=i(11151);const r={id:"history_and_recovery",title:"History and recovery"},o=void 0,a={id:"server/history_and_recovery",title:"History and recovery",description:"Centrifugo engines can maintain publication history for channels with configured history size and TTL.",source:"@site/docs/server/history_and_recovery.md",sourceDirName:"server",slug:"/server/history_and_recovery",permalink:"/docs/server/history_and_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/history_and_recovery.md",tags:[],version:"current",frontMatter:{id:"history_and_recovery",title:"History and recovery"},sidebar:"Guides",previous:{title:"Async consumers",permalink:"/docs/server/consumers"},next:{title:"Cache recovery mode",permalink:"/docs/server/cache_recovery"}},c={},l=[{value:"History design",id:"history-design",level:2},{value:"History iteration API",id:"history-iteration-api",level:2},{value:"Automatic message recovery",id:"automatic-message-recovery",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Centrifugo engines can maintain publication history for channels with configured history size and TTL."}),"\n",(0,t.jsx)(n.h2,{id:"history-design",children:"History design"}),"\n",(0,t.jsxs)(n.p,{children:["History properties configured on a namespace level, to enable history both ",(0,t.jsx)(n.a,{href:"/docs/server/channels#history_size",children:"history_size"})," and ",(0,t.jsx)(n.a,{href:"/docs/server/channels#history_ttl",children:"history_ttl"})," should be set to a value greater than zero."]}),"\n",(0,t.jsx)(n.p,{children:"Centrifugo is designed with an idea that history streams are ephemeral (can be created on the fly without explicit create call from Centrifugo users) and can expire or can be lost at any moment. Centrifugo provides a way for a client to understand that channel history lost. In this case, the main application database should be the source of truth and state recovery."}),"\n",(0,t.jsx)(n.p,{children:"When history is on every message published into a channel is saved into a history stream. The persistence properties of history are dictated by a Centrifugo engine used. For example, in the case of the Memory engine, all history is stored in process memory. So as soon as Centrifugo restarted all history is cleared. When using Redis engine history is kept in Redis Stream data structure - persistence properties are then inherited from Redis persistence configuration (the same for KeyDB engine). For Tarantool history is kept inside Tarantool spaces."}),"\n",(0,t.jsxs)(n.p,{children:["Each publication when added to history has an ",(0,t.jsx)(n.code,{children:"offset"})," field. This is an incremental ",(0,t.jsx)(n.code,{children:"uint64"})," field. Each stream is identified by the ",(0,t.jsx)(n.code,{children:"epoch"})," field - which is an arbitrary string. As soon as the underlying engine loses data epoch field will change for a stream thus letting consumers know that stream can't be used as the source of state recovery anymore."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["History in channels is not enabled by default. See how to enable it over ",(0,t.jsx)(n.a,{href:"/docs/server/channels#channel-options",children:"channel options"}),". History is available in both server and client API."]})}),"\n",(0,t.jsx)(n.h2,{id:"history-iteration-api",children:"History iteration API"}),"\n",(0,t.jsx)(n.p,{children:"History iteration based on three fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"limit"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"since"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"reverse"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Combining these fields you can iterate over a stream in both directions."}),"\n",(0,t.jsx)(n.p,{children:"Get current stream top offset and epoch:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"history(limit: 0, since: null, reverse: false)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Get full history from the current beginning (but up to ",(0,t.jsx)(n.code,{children:"client_history_max_publication_limit"}),", which is ",(0,t.jsx)(n.code,{children:"300"})," by default):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"history(limit: -1, since: null, reverse: false)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Get full history from the current end (but up to ",(0,t.jsx)(n.code,{children:"client_history_max_publication_limit"}),", which is ",(0,t.jsx)(n.code,{children:"300"})," by default):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"history(limit: -1, since: null, reverse: true)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get history from the current beginning (up to 10):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"history(limit: 10, since: null, reverse: false)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get history from the current end in reversed direction (up to 10):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"history(limit: 10, since: null, reverse: true) \n"})}),"\n",(0,t.jsx)(n.p,{children:"Get up to 10 publications since known stream position (described by offset and epoch values):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'history(limit: 10, since: {offset: 0, epoch: "epoch"}, reverse: false)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Get up to 10 publications since known stream position (described by offset and epoch values) but in reversed direction (from last to earliest):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'history(limit: 10, since: {offset: 11, epoch: "epoch"}, reverse: true)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example program in Go which endlessly iterates over stream both ends (using ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/gocent",children:"gocent"})," API library), upon reaching the end of stream the iteration goes in reversed direction (not really useful in real world but fun):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Iterate by 10.\nlimit := 10\n// Paginate in reversed order first, then invert it.\nreverse := true\n// Start with nil StreamPosition, then fill it with value while paginating.\nvar sp *gocent.StreamPosition\n\nfor {\n\thistoryResult, err = c.History(\n        ctx,\n        channel,\n\t\tgocent.WithLimit(limit),\n\t\tgocent.WithReverse(reverse),\n        gocent.WithSince(sp),\n\t)\n\tif err != nil {\n\t\tlog.Fatalf("Error calling history: %v", err)\n\t}\n\tfor _, pub := range historyResult.Publications {\n\t\tlog.Println(pub.Offset, "=>", string(pub.Data))\n\t\tsp = &gocent.StreamPosition{\n\t\t\tOffset: pub.Offset,\n\t\t\tEpoch:  historyResult.Epoch,\n\t\t}\n\t}\n\tif len(historyResult.Publications) < limit {\n\t\t// Got all pubs, invert pagination direction.\n\t\treverse = !reverse\n\t\tlog.Println("end of stream reached, change iteration direction")\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"automatic-message-recovery",children:"Automatic message recovery"}),"\n",(0,t.jsx)(n.p,{children:"One of the most interesting features of Centrifugo is automatic message recovery after short network disconnects. This mechanism allows a client to automatically restore missed publications on successful resubscribe to a channel after being disconnected for a while."}),"\n",(0,t.jsx)(n.p,{children:"In general, you could query your application backend for the actual state on every client reconnect - but the message recovery feature allows Centrifugo to deal with this and restore missed publications from the history cache thus radically reducing the load on your application backend and your main application database in some scenarios (when many clients reconnect at the same time)."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Message recovery protocol feature designed to be used together with reasonably small history stream size as all missed publications sent towards the client in one protocol frame on resubscribing to a channel. Thus, it is mostly suitable for short-time disconnects. It helps a lot to survive a reconnect storm when many clients reconnect at one moment (balancer reload, network glitch) - but it's not a good idea to recover a long list of missed messages after clients being offline for a long time."})}),"\n",(0,t.jsxs)(n.p,{children:["To enable recovery mechanism for channels set the ",(0,t.jsx)(n.a,{href:"/docs/server/channels#force_recovery",children:"force_recovery"})," boolean configuration option to ",(0,t.jsx)(n.code,{children:"true"})," on the configuration file top-level or for a channel namespace. Make sure to enable this option in namespaces where history is on. It's also possible to ask for enabling recovery from the client-side when configuring Subscription object \u2013 in this case client must have a permission to call history API."]}),"\n",(0,t.jsxs)(n.p,{children:["When re-subscribing on channels Centrifugo will return missed ",(0,t.jsx)(n.code,{children:"publications"})," to a client in a subscribe ",(0,t.jsx)(n.code,{children:"Reply"}),", also it will return a special ",(0,t.jsx)(n.code,{children:"recovered"})," boolean flag to indicate whether all missed publications successfully recovered after a disconnect or not."]}),"\n",(0,t.jsxs)(n.p,{children:["The number of publications that is possible to automatically recover is controlled by the ",(0,t.jsx)(n.code,{children:"client_recovery_max_publication_limit"})," option which is ",(0,t.jsx)(n.code,{children:"300"})," by default."]}),"\n",(0,t.jsxs)(n.p,{children:["Centrifugo recovery model based on two fields in the protocol: ",(0,t.jsx)(n.code,{children:"offset"})," and ",(0,t.jsx)(n.code,{children:"epoch"}),". All fields are managed automatically by Centrifugo client SDKs (for bidirectional transport)."]}),"\n",(0,t.jsx)(n.p,{children:"The recovery process works this way:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Let's suppose client subscribes on a channel with recovery on."}),"\n",(0,t.jsxs)(n.li,{children:["Client receives subscribe reply from Centrifugo with two values: stream ",(0,t.jsx)(n.code,{children:"epoch"})," and stream top ",(0,t.jsx)(n.code,{children:"offset"}),", those values are saved by an SDK implementation."]}),"\n",(0,t.jsxs)(n.li,{children:["Every received publication has incremental ",(0,t.jsx)(n.code,{children:"offset"}),", client SDK increments locally saved offset on each publication from a channel."]}),"\n",(0,t.jsx)(n.li,{children:"Let's say at this point client disconnected for a while."}),"\n",(0,t.jsxs)(n.li,{children:["Upon resubscribing to a channel SDK provides last seen ",(0,t.jsx)(n.code,{children:"epoch"})," anf ",(0,t.jsx)(n.code,{children:"offset"})," to Centrifugo."]}),"\n",(0,t.jsx)(n.li,{children:"Centrifugo tries to load all the missed publications starting from the stream position provided by a client."}),"\n",(0,t.jsxs)(n.li,{children:["If Centrifugo decides it can successfully recover client's state \u2013 then all missed publications returned in subscribe reply and client receives ",(0,t.jsx)(n.code,{children:"recovered: true"})," in subscribed event context, and ",(0,t.jsx)(n.code,{children:"publication"})," event handler of Subscription is called for every missed publication. Otherwise no publications returned and ",(0,t.jsx)(n.code,{children:"recovered"})," flag of subscribed event context is set to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"epoch"})," is useful for cases when history storage is temporary and can lose the history stream entirely. In this case comparing epoch values gives Centrifugo a tip that while publications exist and theoretically have same offsets as before - the stream is actually different, so it's impossible to use it for the recovery process."]}),"\n",(0,t.jsxs)(n.p,{children:["To summarize, here is a list of possible scenarios when Centrifugo can't recover client's state for a channel and provides ",(0,t.jsx)(n.code,{children:"recovered: false"})," flag in subscribed event context:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["number of missed publications exceeds ",(0,t.jsx)(n.code,{children:"client_recovery_max_publication_limit"})," option"]}),"\n",(0,t.jsxs)(n.li,{children:["number of missed publications exceeds ",(0,t.jsx)(n.code,{children:"history_size"})," namespace option"]}),"\n",(0,t.jsxs)(n.li,{children:["client was away for a long time and history stream expired according to ",(0,t.jsx)(n.code,{children:"history_ttl"})," namespace option"]}),"\n",(0,t.jsx)(n.li,{children:"storage used by Centrifugo engine lost the stream (restart, number of shards changed, cleared by the administrator, etc.)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Having said this all, Centrifugo recovery is nice to keep the continuity of the connection and subscription. This speed-ups resubscribe in many cases and helps the backend to survive mass reconnect scenario since you avoid lots of requests for state loading. For setups with millions of connections this can be a life-saver. But we recommend applications to always have a way to load the state from the main application database. For example, on app reload."}),"\n",(0,t.jsx)(n.p,{children:"You can also manually implement your own recovery logic on top of the basic PUB/SUB possibilities that Centrifugo provides. As we said above you can simply ask your backend for an actual state after every client resubscribe completely bypassing the recovery mechanism described here. Also, it's possible to manually iterate over the Centrifugo stream using the history iteration API described above."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);