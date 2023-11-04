"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7725],{40692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const c={id:"connections",title:"Connections API"},r=void 0,o={id:"pro/connections",title:"Connections API",description:"Centrifugo PRO offers an extra API call, connections, which enables retrieval of all active sessions (based on user ID or expression) without the need to activate the presence feature for channels. Furthermore, developers can attach any desired JSON payload to a connection that will then be visible in the result of the connections call. It's worth noting that this additional meta-information remains hidden from the client-side, unlike the info associated with the connection.",source:"@site/docs/pro/connections.md",sourceDirName:"pro",slug:"/pro/connections",permalink:"/docs/pro/connections",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/connections.md",tags:[],version:"current",frontMatter:{id:"connections",title:"Connections API"},sidebar:"Pro",previous:{title:"User status API",permalink:"/docs/pro/user_status"},next:{title:"User blocking API",permalink:"/docs/pro/user_block"}},d={},l=[{value:"Example",id:"example",level:3},{value:"connections",id:"connections",level:3},{value:"connections params",id:"connections-params",level:4},{value:"connections result",id:"connections-result",level:4},{value:"ConnectionInfo",id:"connectioninfo",level:4},{value:"ConnectionState object",id:"connectionstate-object",level:4},{value:"ChannelContext object",id:"channelcontext-object",level:4},{value:"ConnectionTokenInfo object",id:"connectiontokeninfo-object",level:4},{value:"SubscriptionTokenInfo object",id:"subscriptiontokeninfo-object",level:4}];function h(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Centrifugo PRO offers an extra API call, ",(0,i.jsx)(n.code,{children:"connections"}),", which enables retrieval of all active sessions (based on user ID or expression) without the need to activate the presence feature for channels. Furthermore, developers can attach any desired JSON payload to a connection that will then be visible in the result of the connections call. It's worth noting that this additional meta-information remains hidden from the client-side, unlike the info associated with the connection."]}),"\n",(0,i.jsx)(n.p,{children:"This feature serves a valuable purpose in managing active user sessions, particularly for messenger applications. Users can review their current sessions and terminate some of them using the Centrifugo disconnect server API."}),"\n",(0,i.jsx)(n.p,{children:"Moreover, this feature can help developers investigate issues by providing insights into the system's state."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Let's look at the quick example. First, generate a JWT for user 42:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ centrifugo genconfig\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generate token for some user to be used in the example connections:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ centrifugo gentoken -u 42\nHMAC SHA-256 JWT for user 42 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run Centrifugo with ",(0,i.jsx)(n.code,{children:"uni_http_stream"})," transport enabled (it will allow us connecting from the terminal with ",(0,i.jsx)(n.code,{children:"curl"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CENTRIFUGO_UNI_HTTP_STREAM=1 centrifugo -c config.json\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create new terminal window and run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"In another terminal create one more connection:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now let's call ",(0,i.jsx)(n.code,{children:"connections"})," over HTTP API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "X-API-Key: <API_KEY>" \\\n  --request POST \\\n  --data \'{"user": "42"}\' \\\n  http://localhost:8000/api/connections\n'})}),"\n",(0,i.jsx)(n.p,{children:"The result:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "result": {\n        "connections": {\n            "db8bc772-2654-4283-851a-f29b888ace74": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            },\n            "4bc3ca70-ecc5-439d-af14-a78ae18e31c7": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here we can see that user has 2 connections from ",(0,i.jsx)(n.code,{children:"terminal"})," app."]}),"\n",(0,i.jsxs)(n.p,{children:["Each connection can be annotated with meta JSON information which is set during connection establishment (over ",(0,i.jsx)(n.code,{children:"meta"})," claim of JWT or by returning ",(0,i.jsx)(n.code,{children:"meta"})," in the connect proxy result)."]}),"\n",(0,i.jsx)(n.h3,{id:"connections",children:"connections"}),"\n",(0,i.jsx)(n.p,{children:"Returns information about active connections according to the request."}),"\n",(0,i.jsx)(n.h4,{id:"connections-params",children:"connections params"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter name"}),(0,i.jsx)(n.th,{children:"Parameter type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsx)(n.td,{children:"fast filter by User ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expression"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsx)(n.td,{children:"CEL expression to filter users"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"connections-result",children:"connections result"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"connections"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"map[string]ConnectionInfo"})}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsx)(n.td,{children:"active user connections map where key is client ID and value is ConnectionInfo"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"connectioninfo",children:"ConnectionInfo"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"app_name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"client app name (if provided by client)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"app_version"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"client app version (if provided by client)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"transport"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsx)(n.td,{children:"client connection transport"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"protocol"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsx)(n.td,{children:"client connection protocol (json or protobuf)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"client user ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"state"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ConnectionState"})}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"connection state"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"connectionstate-object",children:"ConnectionState object"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"channels"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"map[string]ChannelContext"})}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Channels client subscribed to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"connection_token"}),(0,i.jsx)(n.td,{children:"ConnectionTokenInfo"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"information about connection token"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subscription_tokens"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"map<string, SubscriptionTokenInfo>"})}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"information about channel tokens used to subscribe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"meta"}),(0,i.jsx)(n.td,{children:"JSON object"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"meta information attached to a connection"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"channelcontext-object",children:"ChannelContext object"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"The source of channel subscription"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"connectiontokeninfo-object",children:"ConnectionTokenInfo object"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uid"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"unique token ID (jti)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issued_at"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"time (Unix seconds) when token was issued"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"subscriptiontokeninfo-object",children:"SubscriptionTokenInfo object"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field name"}),(0,i.jsx)(n.th,{children:"Field type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uid"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"unique token ID (jti)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issued_at"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"time (Unix seconds) when token was issued"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);