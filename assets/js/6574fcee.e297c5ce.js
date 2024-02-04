"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6720],{9294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=n(85893),s=n(11151);const r={id:"client_sdk",title:"Client real-time SDKs"},d=void 0,c={id:"transports/client_sdk",title:"Client real-time SDKs",description:"In the previous chapter we investigated common principles of Centrifugo client SDK API. Here we will provide a list of available bidirectional connectors you can use to communicate with Centrifugo.",source:"@site/docs/transports/client_sdk.md",sourceDirName:"transports",slug:"/transports/client_sdk",permalink:"/docs/transports/client_sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/client_sdk.md",tags:[],version:"current",frontMatter:{id:"client_sdk",title:"Client real-time SDKs"},sidebar:"Transports",previous:{title:"Client SDK API",permalink:"/docs/transports/client_api"},next:{title:"WebSocket",permalink:"/docs/transports/websocket"}},l={},o=[{value:"List of client SDKs",id:"list-of-client-sdks",level:2},{value:"Protobuf and JSON formats in SDKs",id:"protobuf-and-json-formats-in-sdks",level:2},{value:"SDK feature matrix",id:"sdk-feature-matrix",level:2},{value:"Connection related features",id:"connection-related-features",level:3},{value:"Client-side subscription related features",id:"client-side-subscription-related-features",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/transports/client_api",children:"In the previous chapter"})," we investigated common principles of Centrifugo client SDK API. Here we will provide a list of available bidirectional connectors you can use to communicate with Centrifugo."]}),"\n",(0,i.jsx)(t.admonition,{title:"No need in SDK for unidirectional approach",type:"tip",children:(0,i.jsxs)(t.p,{children:["Real-time SDKs listed here speak Centrifugo bidirectional protocol (with WebSocket as main transport). If you aim to use unidirectional approach you don't need client connector dependency \u2013 just use standard APIs. See the difference ",(0,i.jsx)(t.a,{href:"/docs/transports/overview",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"list-of-client-sdks",children:"List of client SDKs"}),"\n",(0,i.jsx)(t.p,{children:"Here is a list of SDKs maintained by Centrifugal Labs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-js",children:"centrifuge-js"})," \u2013 for a browser, NodeJS and React Native"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-go",children:"centrifuge-go"})," - for Go language"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-dart",children:"centrifuge-dart"})," - for Dart and Flutter (mobile and web)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-swift",children:"centrifuge-swift"})," \u2013 for native iOS development"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-java",children:"centrifuge-java"})," \u2013 for native Android development and general Java"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-python",children:"centrifuge-python"})," \u2013 real-time SDK for Python on top of asyncio (curently in BETA)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"SDKs driven by the community:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/charmy/centrifuge-csharp",children:"centrifuge-csharp"})," - SDK in C# for .NET and Unity 2022.3+"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["See a description of ",(0,i.jsx)(t.a,{href:"/docs/transports/client_protocol",children:"client protocol"})," if you want to write a custom bidirectional connector or eager to learn how Centrifugo protocol internals are structured. In case of any question how protocol works take a look at existing SDK source code or reach out in the community rooms."]}),"\n",(0,i.jsx)(t.h2,{id:"protobuf-and-json-formats-in-sdks",children:"Protobuf and JSON formats in SDKs"}),"\n",(0,i.jsxs)(t.p,{children:["Centrifugo real-time SDKs work using two possible serialization formats: JSON and Protobuf. The entire bidirectional client protocol is described by the ",(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto",children:"Protobuf schema"}),". But those Protobuf messages may be also encoded as JSON objects (in JSON representation ",(0,i.jsx)(t.code,{children:"bytes"})," fields in the Protobuf schema is replaced by the embedded JSON object in Centrifugo case)."]}),"\n",(0,i.jsxs)(t.p,{children:["Our Javascript SDK - ",(0,i.jsx)(t.code,{children:"centrifuge-js"})," - uses JSON serialization for protocol frames by default. This makes communication with Centrifugo server convenient as we are exchanging human-readable JSON frames between client and server. And it makes it possible to use ",(0,i.jsx)(t.code,{children:"centrifuge-js"})," without extra dependency to ",(0,i.jsx)(t.code,{children:"protobuf.js"})," library. It's possible to switch to Protobuf protocol with ",(0,i.jsx)(t.code,{children:"centrifuge-js"})," SDK though, in case you want more compact Centrifuge protocol representation, faster decode/encode speeds on Centrifugo server side, or payloads you need to pass are custom binary. See more details on how to use ",(0,i.jsx)(t.code,{children:"centrifuge-js"})," with Protobuf serialization in ",(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifuge-js#protobuf-support",children:"README"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"centrifuge-go"})," real-time SDK for Go language also supports both JSON and Protobuf formats when communicating with Centrifugo server."]}),"\n",(0,i.jsxs)(t.p,{children:["Other SDKs, like ",(0,i.jsx)(t.code,{children:"centrifuge-dart"}),", ",(0,i.jsx)(t.code,{children:"centrifuge-swift"}),", ",(0,i.jsx)(t.code,{children:"centrifuge-java"})," work using only Protobuf serialization for Centrifuge protocol internally. So they utilize the fastest and the most compact wire representation by default. Note, that while internally in those SDKs the serialization format is Protobuf, you can still send JSON towards these clients as JSON objects may be encoded as UTF-8 bytes. So these SDKs may work with both custom binary and JSON payloads."]}),"\n",(0,i.jsxs)(t.p,{children:["There are some important notes about ",(0,i.jsx)(t.a,{href:"/docs/faq/#can-i-have-both-binary-and-json-clients-in-one-channel",children:"JSON and Protobuf interoperability"})," mentioned in our FAQ."]}),"\n",(0,i.jsx)(t.h2,{id:"sdk-feature-matrix",children:"SDK feature matrix"}),"\n",(0,i.jsx)(t.p,{children:"Below you can find an information regarding support of different features in our official client SDKs"}),"\n",(0,i.jsx)(t.h3,{id:"connection-related-features",children:"Connection related features"}),"\n",(0,i.jsx)("div",{className:"features",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Client feature"}),(0,i.jsx)(t.th,{children:"js"}),(0,i.jsx)(t.th,{children:"dart"}),(0,i.jsx)(t.th,{children:"swift"}),(0,i.jsx)(t.th,{children:"go"}),(0,i.jsx)(t.th,{children:"java"}),(0,i.jsx)(t.th,{children:"python"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"connect to a server"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"setting client options"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"automatic reconnect with backoff algorithm"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"client state changes"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"command-reply"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"command timeouts"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"async pushes"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ping-pong"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"connection token refresh"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"handle disconnect advice from server"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"server-side subscriptions"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"batching API"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bidirectional WebSocket emulation"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]})}),"\n",(0,i.jsx)(t.h3,{id:"client-side-subscription-related-features",children:"Client-side subscription related features"}),"\n",(0,i.jsx)("div",{className:"features",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Client feature"}),(0,i.jsx)(t.th,{children:"js"}),(0,i.jsx)(t.th,{children:"dart"}),(0,i.jsx)(t.th,{children:"swift"}),(0,i.jsx)(t.th,{children:"go"}),(0,i.jsx)(t.th,{children:"java"}),(0,i.jsx)(t.th,{children:"python"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subscrbe to a channel"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"setting subscription options"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"automatic resubscribe with backoff algorithm"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subscription state changes"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subscription command-reply"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subscription async pushes"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subscription token refresh"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"handle unsubscribe advice from server"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"manage subscription registry"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"optimistic subscriptions"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var i=n(67294);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);