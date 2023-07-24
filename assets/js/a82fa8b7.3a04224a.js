"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4435],{1061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"overview",title:"Real-time transports"},a=void 0,s={unversionedId:"transports/overview",id:"transports/overview",title:"Real-time transports",description:"Centrifugo supports a variety of transports to deliver real-time messages to clients.",source:"@site/docs/transports/overview.md",sourceDirName:"transports",slug:"/transports/overview",permalink:"/docs/transports/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Real-time transports"},sidebar:"Transports",next:{title:"Client SDK API",permalink:"/docs/transports/client_api"}},c={},l=[{value:"Bidirectional",id:"bidirectional",level:2},{value:"Unidirectional",id:"unidirectional",level:2},{value:"PING/PONG behavior",id:"pingpong-behavior",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo supports a variety of transports to deliver real-time messages to clients."),(0,o.kt)("admonition",{title:"Every transport is a persistent connection",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here we describe supported transports between your application frontend and Centrifugo itself. Every Centrifugo transport is a persistent connection so the server can push data towards clients at any moment.")),(0,o.kt)("p",null,"The important distinction here is that all supported transports belong to one of two possible groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bidirectional"),(0,o.kt)("li",{parentName:"ul"},"Unidirectional")),(0,o.kt)("h2",{id:"bidirectional"},"Bidirectional"),(0,o.kt)("p",null,"Bidirectional transports are capable to serve all Centrifugo features. These transports are the main Centrifugo focus and where Centrifugo really shines."),(0,o.kt)("p",null,"Bidirectional transports come with a cost that developers need to use a special client connector library (SDK) which speaks Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/client_protocol"},"client protocol"),". The reason why we need a special client connector library is that a bidirectional connection is asynchronous \u2013 it's required to match requests to responses, properly manage connection state, handle request queueing/timeouts/errors, etc. And of course to multiplex subscriptions to different channels over a single connection."),(0,o.kt)("p",null,"Centrifugo has several official ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/client_sdk"},"client SDKs")," for popular environments. All of them work over ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/websocket"},"WebSocket")," transport. Our Javascript SDK also offers bidirectional fallbacks over ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/http_stream"},"HTTP-Streaming"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/sse"},"Server-Sent Events (SSE)"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/sockjs"},"SockJS"),", and has an experimental support for ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/webtransport"},"WebTransport"),"."),(0,o.kt)("h2",{id:"unidirectional"},"Unidirectional"),(0,o.kt)("p",null,"Unidirectional transports suit well for simple use-cases with stable subscriptions, usually known at connection time."),(0,o.kt)("p",null,"The advantage is that unidirectional transports do not require special client connectors - developers can use native browser APIs (like ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_websocket"},"WebSocket"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_sse"},"EventSource/SSE"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_http_stream"},"HTTP-streaming"),"), or ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_grpc"},"GRPC")," generated code to receive real-time updates from Centrifugo. Thus avoiding dependency to a client connector that abstracts bidirectional communication."),(0,o.kt)("p",null,"The drawback is that with unidirectional transports you are not inheriting all Centrifugo features out of the box (like dynamic subscriptions/unsubscriptions, automatic message recovery on reconnect, possibility to send RPC calls over persistent connection). But some of the missing client APIs can be mimicked by using calls to Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"server API")," (i.e. over client -> application backend -> Centrifugo)."),(0,o.kt)("p",null,"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_client_protocol"},"unidirectional protocol")," and available unidirectional transports."),(0,o.kt)("h2",{id:"pingpong-behavior"},"PING/PONG behavior"),(0,o.kt)("p",null,"Centrifugo server periodically sends pings to clients and expects pong from clients that works over bidirectional transports. Sending ping and receiving pong allows to find broken connections faster. Centrifugo sends pings on the Centrifugo client protocol level, thus it's possible for clients to handle ping messages on the client side to make sure connection is not broken (our bidirectional SDKs do this automatically)."),(0,o.kt)("p",null,"By default Centrifugo sends pings every 25 seconds. This may be changed using ",(0,o.kt)("inlineCode",{parentName:"p"},"ping_interval")," option (",(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},'"25s"'),")."),(0,o.kt)("p",null,"Centrifugo expects pong message from bidirectional client SDK after sending ping to it. By default, it waits no more than 8 seconds before closing a connection. This may be changed using ",(0,o.kt)("inlineCode",{parentName:"p"},"pong_timeout")," option (",(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},'"8s"'),")."),(0,o.kt)("p",null,"In most cases default ping/pong intervals are fine so you don't really need to tweak them. Reducing timeouts may help you to find non-gracefully closed connections faster, but will increase network traffic and CPU resource usage since ping/pongs are sent faster."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ping_interval")," must be greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"pong_timeout")," in the current implementation.")),(0,o.kt)("p",null,"Here is a scheme how ping/pong works in bidirectional and unidirectional client scenarios:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3915).Z,width:"2566",height:"1558"})))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ping_pong-5819b8856db75d60f40c9067903c328f.png"}}]);