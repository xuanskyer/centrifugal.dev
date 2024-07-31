"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9678],{11296:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(85893),t=n(11151);const a={id:"delta_compression",sidebar_label:"Delta compression",title:"Delta compression in channels"},o=void 0,r={id:"server/delta_compression",title:"Delta compression in channels",description:"Delta compression feature allows a client to subscribe to a channel in a way so that message payloads contain only the differences between the current message and the previous one sent on the channel. The feature is available since Centrifugo v5.4.0.",source:"@site/docs/server/delta_compression.md",sourceDirName:"server",slug:"/server/delta_compression",permalink:"/docs/server/delta_compression",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/delta_compression.md",tags:[],version:"current",frontMatter:{id:"delta_compression",sidebar_label:"Delta compression",title:"Delta compression in channels"},sidebar:"Guides",previous:{title:"Cache recovery mode",permalink:"/docs/server/cache_recovery"},next:{title:"Online presence",permalink:"/docs/server/presence"}},l={},c=[{value:"Subscribe using delta",id:"subscribe-using-delta",level:3},{value:"Use delta when publishing",id:"use-delta-when-publishing",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Delta compression feature allows a client to subscribe to a channel in a way so that message payloads contain only the differences between the current message and the previous one sent on the channel. The feature is available ",(0,i.jsx)(s.strong,{children:"since Centrifugo v5.4.0"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Delta compression is beneficial for channels that send a series of updates to a particular object or document with high similarity between successive publications. A client can apply the delta to the previous message to reconstruct the full payload."}),"\n",(0,i.jsxs)(s.p,{children:["Using delta mode can significantly reduce the size of each message when the differences between successive payloads are small compared to their overall size. This reduction ",(0,i.jsx)(s.strong,{children:"can lower bandwidth costs"}),", decrease transit latencies, and increase message throughput on a connection."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"delta frames",src:n(85259).Z+"",width:"4002",height:"902"})}),"\n",(0,i.jsx)(s.p,{children:"In the scenario we used to evaluate delta compression feature usefullness we were able to achieve x10 reduction of traffic going through the network interface by enabling delta compression in the channel. This heavily depends on the nature of data you publish, but proves that deltas make a perfect sense in some scenarios."}),"\n",(0,i.jsxs)(s.p,{children:["The diff is calculated using ",(0,i.jsx)(s.a,{href:"https://fossil-scm.org/home/doc/tip/www/delta_format.wiki",children:"Fossil"})," delta algorithm. Delta compression via Fossil supports all payloads, whether binary, or JSON-encoded. The delta algorithm processes message payloads as opaque binaries and has no dependency on the structure of the payload."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["At this point delta compression is only available for bidirectional client-side subscriptions and supported by Centrifugo Javascript SDK ",(0,i.jsx)(s.a,{href:"https://github.com/centrifugal/centrifuge-js",children:"centrifuge-js"})," (since 5.2.0)."]})}),"\n",(0,i.jsxs)(s.p,{children:["Deltas apply only to the ",(0,i.jsx)(s.code,{children:"data"})," property of a Publication. Publications retrieved via history calls are not compressed \u2013 delta applied only for clent protocol publications travelling to real-time connections."]}),"\n",(0,i.jsx)(s.p,{children:"How it may look in practice? Here is a screenshot of WebSocket frames in case of using our JSON protocol format. Note that the connection receives publication push with full payload first, then only deltas are sent which are much smaller in size:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"delta frames",src:n(9857).Z+"",width:"2828",height:"572"})}),"\n",(0,i.jsx)(s.h3,{id:"subscribe-using-delta",children:"Subscribe using delta"}),"\n",(0,i.jsx)(s.p,{children:"To successfully negotiate delta compression for a subscriber several conditions should be met:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["subscriber provides ",(0,i.jsx)(s.code,{children:'delta: "fossil"'})," option when creating a client-side Subscription"]}),"\n",(0,i.jsxs)(s.li,{children:["server uses ",(0,i.jsx)(s.code,{children:'"allowed_delta_types": ["fossil"]'})," for a channel namespace a client subscribes to"]}),"\n",(0,i.jsx)(s.li,{children:"server uses history for a channel"}),"\n",(0,i.jsx)(s.li,{children:"positioning or recovery are used for channel subscription"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Example of subscription creation on the client side:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const sub = centrifuge.newSubscription('example:updates', {\n  delta: 'fossil'\n});\n"})}),"\n",(0,i.jsx)(s.p,{children:"And the example of Centrifugo configuration:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ..\n    "namespaces": [\n        {\n            "name": "example",\n            "allowed_delta_types": ["fossil"],\n            "force_positioning": true,\n            "history_size": 1,\n            "history_ttl": "60s"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["If you want to use delta compression without history, positioning and recovery on, i.e. in at most once scenario \u2013 then Centrifugo PRO ",(0,i.jsx)(s.a,{href:"/docs/pro/delta_at_most_once",children:"provides such a possibility"})," with its option to keep latest publication in channel in the node's memory."]})}),"\n",(0,i.jsx)(s.p,{children:"If all conditions met \u2013 subscriber will negotiate compression with a server. If SDK does not support delta compression \u2013 it can still subscribe to the channel, but will receive publications with full payload. To let Centrifugo know that delta compression must be used for a particular publication some configuration is required for the publisher also. We will describe it shortly."}),"\n",(0,i.jsx)(s.h3,{id:"use-delta-when-publishing",children:"Use delta when publishing"}),"\n",(0,i.jsx)(s.p,{children:"If subscriber successfully negotiated delta compression with Centrifugo, it will start receiving deltas for publications marked with delta flag by the publisher. It's possible to mark channel publications to use delta compression upon broadcasting to subscribers in the following ways:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["enable it for all publications in the channel namespace by setting a boolean channel option ",(0,i.jsx)(s.a,{href:"/docs/server/channels#delta_publish",children:"delta_publish"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"delta"})," flag may be set on a per call basis (in publish or broadcast server APIs). For example, see ",(0,i.jsx)(s.code,{children:"delta"})," field in ",(0,i.jsx)(s.a,{href:"/docs/server/server_api#publish-request",children:"publish request"})," description."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"For example, this means that to automatically use delta calculation for all publications in the namespace the configuration example above evolves to:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ..\n    "namespaces": [\n        {\n            "name": "example",\n            "allowed_delta_types": ["fossil"],\n            "force_positioning": true,\n            "history_size": 1,\n            "history_ttl": "60s",\n            "delta_publish": true\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Again \u2013 subscribers which support delta compression and do not support it can co-exist in one channel."})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85259:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/delta_abstract-9104c3b2e3b81831daecf3b400e0d798.png"},9857:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/delta_frames-7d915a6b62f3cbcbfa4e0a1d738e79df.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>o});var i=n(67294);const t={},a=i.createContext(t);function o(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);