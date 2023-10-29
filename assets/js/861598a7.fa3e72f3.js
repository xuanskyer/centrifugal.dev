"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"uni_websocket",title:"Unidirectional WebSocket",sidebar_label:"WebSocket"},o=void 0,l={unversionedId:"transports/uni_websocket",id:"transports/uni_websocket",title:"Unidirectional WebSocket",description:"Default unidirectional WebSocket connection endpoint in Centrifugo is:",source:"@site/docs/transports/uni_websocket.md",sourceDirName:"transports",slug:"/transports/uni_websocket",permalink:"/docs/transports/uni_websocket",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_websocket.md",tags:[],version:"current",frontMatter:{id:"uni_websocket",title:"Unidirectional WebSocket",sidebar_label:"WebSocket"},sidebar:"Transports",previous:{title:"Unidirectional protocol",permalink:"/docs/transports/uni_client_protocol"},next:{title:"HTTP streaming",permalink:"/docs/transports/uni_http_stream"}},s={},c=[{value:"Connect command",id:"connect-command",level:2},{value:"SubscribeRequest",id:"subscriberequest",level:3},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_websocket",id:"uni_websocket",level:3},{value:"uni_websocket_message_size_limit",id:"uni_websocket_message_size_limit",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Default unidirectional WebSocket connection endpoint in Centrifugo is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/connection/uni_websocket\n")),(0,a.kt)("p",null,"While WebSocket is bidirectional transport in its nature Centrifugo provides its unidirectional version too to give developers more choice in transports when using unidirectional approach."),(0,a.kt)("h2",{id:"connect-command"},"Connect command"),(0,a.kt)("p",null,"It's possible to send connect command as first WebSocket message (as JSON)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection JWT, not required when using the connect proxy feature.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"any JSON"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom JSON connection data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Application name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Application version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subs"),(0,a.kt)("td",{parentName:"tr",align:null},"map of channel to SubscribeRequest"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass an information about desired subscriptions to a server")))),(0,a.kt)("h3",{id:"subscriberequest"},"SubscribeRequest"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recover"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether a client wants to recover from a certain position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offset"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Known stream position offset when ",(0,a.kt)("inlineCode",{parentName:"td"},"recover")," is used")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"epoch"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Known stream position epoch when ",(0,a.kt)("inlineCode",{parentName:"td"},"recover")," is used")))),(0,a.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,a.kt)("p",null,"JSON"),(0,a.kt)("h2",{id:"pings"},"Pings"),(0,a.kt)("p",null,"Centrifugo uses empty commands (",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," in JSON case) as pings for unidirectional WS. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"uni_websocket"},"uni_websocket"),(0,a.kt)("p",null,"Boolean, default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Enables unidirectional WebSocket endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_websocket": true\n}\n')),(0,a.kt)("h3",{id:"uni_websocket_message_size_limit"},"uni_websocket_message_size_limit"),(0,a.kt)("p",null,"Default: 65536 (64KB)"),(0,a.kt)("p",null,"Maximum allowed size of a first connect message received from WebSocket connection in bytes."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's connect to a unidirectional WebSocket endpoint using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/websockets/wscat"},"wscat")," tool \u2013 it allows connecting to WebSocket servers interactively from a terminal."),(0,a.kt)("p",null,"First, run Centrifugo with ",(0,a.kt)("inlineCode",{parentName:"p"},"uni_websocket")," enabled. Also let's enable automatic personal channel subscriptions for users. Configuration example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "secret",\n  "uni_websocket":true,\n  "user_subscribe_to_personal": true\n}\n')),(0,a.kt)("p",null,"Run Centrifugo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./centrifugo -c config.json\n")),(0,a.kt)("p",null,"In another terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u276f ./centrifugo gentoken -c config.json -u test_user\nHMAC SHA-256 JWT for user test_user with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJleHAiOjE2MzAxMzAxNzB9.u7anX-VYXywX1p1lv9UC9CAu04vpA6LgG5gsw5lz1Iw\n")),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/websockets/wscat"},"wscat")," and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'wscat -c "ws://localhost:8000/connection/uni_websocket"\n')),(0,a.kt)("p",null,"This will establish a connection with a server and you then can send connect command to a server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u276f wscat -c "ws://localhost:8000/connection/uni_websocket"\n\nConnected (press CTRL+C to quit)\n> {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJleHAiOjE2NTY1MDMwNDV9.3UYL-UCUBp27TybeBK7Z0OenwdsKwCMRe46fuEjJnzI", "subs": {"abc": {}}}\n< {"connect":{"client":"bfd28799-b958-4791-b9e9-b011eaef68c1","version":"0.0.0","subs":{"#test_user":{}},"expires":true,"ttl":604407,"ping":25,"session":"57b1287b-44ec-45c8-93fc-696c5294af25"}}\n')),(0,a.kt)("p",null,"The connection will receive server pings (empty commands ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),") periodically. You can try to publish something to ",(0,a.kt)("inlineCode",{parentName:"p"},"#test_user")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"abc")," channels (using Centrifugo server API or using admin UI) \u2013 and the message should come to the connection we just established."))}u.isMDXComponent=!0}}]);