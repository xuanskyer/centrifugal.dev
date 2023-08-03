"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4035],{1735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={id:"uni_client_protocol",title:"Unidirectional client protocol",sidebar_label:"Unidirectional protocol"},a=void 0,s={unversionedId:"transports/uni_client_protocol",id:"transports/uni_client_protocol",title:"Unidirectional client protocol",description:"As we mentioned in overview you can avoid using Centrifugo SDKs if you stick with unidirectional approach. In this case though you will need to implement some basic parsing on client side to consume message types sent by Centrifugo into unidirectional connections.",source:"@site/docs/transports/uni_client_protocol.md",sourceDirName:"transports",slug:"/transports/uni_client_protocol",permalink:"/docs/transports/uni_client_protocol",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_client_protocol.md",tags:[],version:"current",frontMatter:{id:"uni_client_protocol",title:"Unidirectional client protocol",sidebar_label:"Unidirectional protocol"},sidebar:"Transports",previous:{title:"Client protocol",permalink:"/docs/transports/client_protocol"},next:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"}},l={},c=[{value:"Unidirectional message types",id:"unidirectional-message-types",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As we mentioned in overview you can avoid using Centrifugo SDKs if you stick with ",(0,i.kt)("a",{parentName:"p",href:"/docs/transports/overview#unidirectional"},"unidirectional approach"),". In this case though you will need to implement some basic parsing on client side to consume message types sent by Centrifugo into unidirectional connections."),(0,i.kt)("p",null,"At this point Centrifugo supports unidirectional WebSocket, HTTP streaming, SSE (EventSource), GRPC transports \u2013 and all of them inherit the same protocol structure described here.   "),(0,i.kt)("h3",{id:"unidirectional-message-types"},"Unidirectional message types"),(0,i.kt)("p",null,"In case of unidirectional transports Centrifugo will send ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," frames to the connection. Push frames defined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"client protocol schema"),". I.e. Centrifugo reuses a part of its bidirectional protocol for unidirectional communication. Push message defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Push {\n  string channel = 2;\n\n  Publication pub = 4;\n  Join join = 5;\n  Leave leave = 6;\n  Unsubscribe unsubscribe = 7;\n  Message message = 8;\n  Subscribe subscribe = 9;\n  Connect connect = 10;\n  Disconnect disconnect = 11;\n  Refresh refresh = 12;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some numbers in Protobuf definitions skipped for backwards compatibility with previous client protocol version.")),(0,i.kt)("p",null,"So unidirectional connection will receive various pushes. Every push contains ",(0,i.kt)("strong",{parentName:"p"},"one of")," the following objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publication"),(0,i.kt)("li",{parentName:"ul"},"Join"),(0,i.kt)("li",{parentName:"ul"},"Leave"),(0,i.kt)("li",{parentName:"ul"},"Unsubscribe"),(0,i.kt)("li",{parentName:"ul"},"Message"),(0,i.kt)("li",{parentName:"ul"},"Subscribe"),(0,i.kt)("li",{parentName:"ul"},"Connect"),(0,i.kt)("li",{parentName:"ul"},"Disconnect"),(0,i.kt)("li",{parentName:"ul"},"Refresh")),(0,i.kt)("p",null,"Some pushes belong to a ",(0,i.kt)("inlineCode",{parentName:"p"},"channel")," which may be set on Push top level."),(0,i.kt)("p",null,"All you need to do is look at Push, process messages you are interested in and ignore others. In most cases you will be most interested in pushes which contain ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Publication")," messages."),(0,i.kt)("p",null,"For example, according to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"protocol schema")," Publication message type looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Publication {\n  bytes data = 4;\n  ClientInfo info = 5;\n  uint64 offset = 6;\n  map<string, string> tags = 7;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In JSON protocol case Centrifugo replaces ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," type with embedded JSON.")),(0,i.kt)("p",null,"Just try using any unidirectional transport and you will quickly get the idea."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);