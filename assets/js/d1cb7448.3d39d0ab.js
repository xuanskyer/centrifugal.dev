"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={id:"highlights",title:"Main highlights"},a=void 0,s={unversionedId:"getting-started/highlights",id:"version-4/getting-started/highlights",title:"Main highlights",description:"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation.",source:"@site/versioned_docs/version-4/getting-started/highlights.md",sourceDirName:"getting-started",slug:"/getting-started/highlights",permalink:"/docs/4/getting-started/highlights",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/getting-started/highlights.md",tags:[],version:"4",frontMatter:{id:"highlights",title:"Main highlights"},sidebar:"Introduction",previous:{title:"Quickstart tutorial",permalink:"/docs/4/getting-started/quickstart"},next:{title:"Integration guide",permalink:"/docs/4/getting-started/integration"}},l={},c=[{value:"Simple integration",id:"simple-integration",level:3},{value:"Great performance",id:"great-performance",level:3},{value:"Built-in scalability",id:"built-in-scalability",level:3},{value:"Strict client protocol",id:"strict-client-protocol",level:3},{value:"Variety of real-time transports",id:"variety-of-real-time-transports",level:3},{value:"Flexible authentication",id:"flexible-authentication",level:3},{value:"Connection management",id:"connection-management",level:3},{value:"Channel (room) concept",id:"channel-room-concept",level:3},{value:"Different types of subscriptions",id:"different-types-of-subscriptions",level:3},{value:"RPC over bidirectional connection",id:"rpc-over-bidirectional-connection",level:3},{value:"Online presence information",id:"online-presence-information",level:3},{value:"Message history in channels",id:"message-history-in-channels",level:3},{value:"Embedded admin web UI",id:"embedded-admin-web-ui",level:3},{value:"Cross-platform",id:"cross-platform",level:3},{value:"Ready to deploy",id:"ready-to-deploy",level:3},{value:"Open-source",id:"open-source",level:3},{value:"Pro features",id:"pro-features",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation."),(0,r.kt)("h3",{id:"simple-integration"},"Simple integration"),(0,r.kt)("p",null,"Centrifugo was originally designed to be used in conjunction with frameworks without built-in concurrency support (like Django, Laravel, etc.)."),(0,r.kt)("p",null,"It works as a standalone service with well-defined communication contracts. It nicely fits both monolithic and microservice architectures. Application developers should not change backend philosophy and technology stack at all \u2013 just integrate with Centrifugo ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api"},"HTTP or GRPC API")," and let users enjoy real-time updates."),(0,r.kt)("h3",{id:"great-performance"},"Great performance"),(0,r.kt)("p",null,"Centrifugo is fast. It's written in Go language, built on top of fast and battle-tested open-source libraries, has some smart internal optimizations like message queuing on broadcasts, smart batching to reduce the number of RTT with broker, connection hub sharding to avoid lock contention, JSON and Protobuf encoding speedups over code generation and other."),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"/blog/2020/02/10/million-connections-with-centrifugo"},"Million WebSocket with Centrifugo")," post in our blog to see some real-world numbers."),(0,r.kt)("h3",{id:"built-in-scalability"},"Built-in scalability"),(0,r.kt)("p",null,"Centrifugo scales well to many machines with a help of PUB/SUB brokers. So as soon as you have more client connections in the application \u2013 you can spread them over different Centrifugo nodes which will be connected together into a cluster."),(0,r.kt)("p",null,"The main PUB/SUB engine Centrifugo integrates with is Redis. It supports client-side consistent sharding and Redis Cluster \u2013 so a single Redis instance won't be a bottleneck also."),(0,r.kt)("p",null,"There are other options to scale: KeyDB, Nats, Tarantool. ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/engines"},"See docs"),"."),(0,r.kt)("h3",{id:"strict-client-protocol"},"Strict client protocol"),(0,r.kt)("p",null,"Centrifugo supports JSON and binary Protobuf protocol for client-server communication. The bidirectional protocol is defined by a strict schema and several ready-to-use SDKs wrap this protocol, handle asynchronous message passing, timeouts, reconnects, and various Centrifugo client API features. See the detailed information about client real-time transports in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/transports/overview"},"dedicated section"),"."),(0,r.kt)("h3",{id:"variety-of-real-time-transports"},"Variety of real-time transports"),(0,r.kt)("p",null,"The main transport in Centrifugo is WebSocket. For browsers that do not support WebSocket Centrifugo provides its own bidirectional WebSocket emulation layer based on HTTP-streaming and SSE (EventSource), and also supports SockJS as an older but battle-tested WebSocket polyfill option, and WebTransport in experimental form."),(0,r.kt)("p",null,"Centrifugo also supports unidirectional transports for real-time updates: like SSE (EventSource), HTTP streaming, GRPC unidirectional stream. Using unidirectional transport is sufficient for many real-time applications and does not require using our client SDKs \u2013 just native standards or GRPC-generated code."),(0,r.kt)("p",null,"See the detailed information about client real-time transports in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/transports/overview"},"dedicated section"),"."),(0,r.kt)("h3",{id:"flexible-authentication"},"Flexible authentication"),(0,r.kt)("p",null,"Centrifugo can authenticate connections using ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/authentication"},"JWT (JSON Web Token)")," or by ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/proxy"},"issuing an HTTP/GRPC")," request to your application backend upon client connection to Centrifugo. It's possible to proxy original request headers or request metadata (in the case of GRPC connection)."),(0,r.kt)("p",null,"It supports the ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK specification"),"."),(0,r.kt)("h3",{id:"connection-management"},"Connection management"),(0,r.kt)("p",null,"Connections can expire, developers can choose a way to handle connection refresh \u2013 using a client-side refresh workflow, or a server-side call from Centrifugo to the application backend."),(0,r.kt)("h3",{id:"channel-room-concept"},"Channel (room) concept"),(0,r.kt)("p",null,"Centrifugo is a PUB/SUB server \u2013 users subscribe on channels to receive real-time updates. Message sent to a channel is delivered to all online channel subscribers."),(0,r.kt)("h3",{id:"different-types-of-subscriptions"},"Different types of subscriptions"),(0,r.kt)("p",null,"Centrifugo supports client-side (initiated by a client) and ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_subs"},"server-side")," (forced by a server) channel subscriptions."),(0,r.kt)("h3",{id:"rpc-over-bidirectional-connection"},"RPC over bidirectional connection"),(0,r.kt)("p",null,"You can fully utilize bidirectional connections by sending RPC calls from the client-side to a configured endpoint on your backend. Calling RPC over WebSocket avoids sending headers on each request \u2013 thus reducing external traffic and, in most cases, provides better latency characteristics."),(0,r.kt)("h3",{id:"online-presence-information"},"Online presence information"),(0,r.kt)("p",null,"Online presence feature for channels provides information about active channel subscribers. Also, channel join and leave events (when someone subscribes/unsubscribes) can be received on the client side."),(0,r.kt)("h3",{id:"message-history-in-channels"},"Message history in channels"),(0,r.kt)("p",null,"Optionally Centrifugo allows turning on history for publications in channels. This publication history has a limited size and retention period (TTL). With a channel history, Centrifugo can help to survive the mass reconnect scenario \u2013 clients can automatically catch up missed state from a fast cache thus reducing the load on your primary database. It's also possible to manually iterate over a stream from a client or a server-side."),(0,r.kt)("h3",{id:"embedded-admin-web-ui"},"Embedded admin web UI"),(0,r.kt)("p",null,"Built-in ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/admin_web"},"admin UI")," allows publishing messages to channels, look at Centrifugo cluster information, and more."),(0,r.kt)("h3",{id:"cross-platform"},"Cross-platform"),(0,r.kt)("p",null,"Centrifugo works on Linux, macOS, and Windows."),(0,r.kt)("h3",{id:"ready-to-deploy"},"Ready to deploy"),(0,r.kt)("p",null,"Centrifugo supports various deploy ways: in Docker, using prepared RPM or DEB packages, via Kubernetes Helm chart. It supports automatic TLS with Let's Encrypt TLS, outputs Prometheus/Graphite metrics, has an official Grafana dashboard for Prometheus data source."),(0,r.kt)("h3",{id:"open-source"},"Open-source"),(0,r.kt)("p",null,"Centrifugo stands on top of open-source library Centrifuge (MIT license). The OSS version of Centrifugo is based on the permissive open-source license (Apache 2.0). All our official client SDKs and API libraries are MIT-licensed."),(0,r.kt)("h3",{id:"pro-features"},"Pro features"),(0,r.kt)("p",null,"Centrifugo PRO extends Centrifugo with several unique features which can give interesting advantages for business adopters. For additional details, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/pro/overview"},"Centrifugo PRO documentation"),"."))}d.isMDXComponent=!0}}]);