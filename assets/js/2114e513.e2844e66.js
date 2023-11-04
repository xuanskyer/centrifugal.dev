"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1313],{27276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),s=i(11151);const o={id:"private_channels",title:"Private channels"},r=void 0,c={id:"server/private_channels",title:"Private channels",description:"In the channels chapter we mentioned private channels. This chapter has more information about the private channel mechanism in Centrifugo.",source:"@site/versioned_docs/version-3/server/private_channels.md",sourceDirName:"server",slug:"/server/private_channels",permalink:"/docs/3/server/private_channels",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/private_channels.md",tags:[],version:"3",frontMatter:{id:"private_channels",title:"Private channels"},sidebar:"Guides",previous:{title:"Channels",permalink:"/docs/3/server/channels"},next:{title:"Server-side subscriptions",permalink:"/docs/3/server/server_subs"}},a={},l=[{value:"Claims",id:"claims",level:2},{value:"client",id:"client",level:3},{value:"channel",id:"channel",level:3},{value:"info",id:"info",level:3},{value:"b64info",id:"b64info",level:3},{value:"exp",id:"exp",level:3},{value:"expire_at",id:"expire_at",level:3},{value:"aud",id:"aud",level:3},{value:"iss",id:"iss",level:3},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.a,{href:"/docs/3/server/channels",children:"channels"})," chapter we mentioned private channels. This chapter has more information about the private channel mechanism in Centrifugo."]}),"\n",(0,t.jsxs)(n.p,{children:["All channels starting with ",(0,t.jsx)(n.code,{children:"$"})," are considered private. Your backend should additionally provide a token for every subscription request to a private channel. This way you can control subscription permissions and only allow certain users to subscribe to a channel."]}),"\n",(0,t.jsx)(n.p,{children:"The way how this token is obtained varies depending on a client connector implementation."}),"\n",(0,t.jsxs)(n.p,{children:["For example, in Javascript client, AJAX POST request is automatically sent to ",(0,t.jsx)(n.code,{children:"/centrifuge/subscribe"})," endpoint on every private channel subscription attempt. Other client libraries provide a hook for your custom code that will obtain a private channel subscription token from the application backend (so you need manually implement HTTP call to your backend for example)."]}),"\n",(0,t.jsxs)(n.p,{children:["Private channel subscription token is also JWT (like connection JWT described in ",(0,t.jsx)(n.a,{href:"/docs/3/server/authentication",children:"authentication chapter"}),"). But it has its specific claims."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Connection token and private channel subscription token are both JWT and both can be generated with any JWT library."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Even when authorizing a subscription to a private channel with a private subscription JWT you should set a proper connection JWT for a client as it provides user authentication details to Centrifugo."})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When you need to use namespace for a private channel then the name of a namespace should be written after a ",(0,t.jsx)(n.code,{children:"$"})," symbol, i.e. if you have a namespace name ",(0,t.jsx)(n.code,{children:"chat"})," \u2013 then the private channel which belongs to that namespace must be written as sth like ",(0,t.jsx)(n.code,{children:"$chat:stream"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Supported JWT algorithms for private subscription tokens match algorithms to create connection JWT. The same HMAC secret key, RSA, and ECDSA public keys set for authentication tokens are re-used to check subscription JWT."}),"\n",(0,t.jsx)(n.h2,{id:"claims",children:"Claims"}),"\n",(0,t.jsxs)(n.p,{children:["Private channel subscription token claims are: ",(0,t.jsx)(n.code,{children:"client"}),", ",(0,t.jsx)(n.code,{children:"channel"}),", ",(0,t.jsx)(n.code,{children:"info"}),", ",(0,t.jsx)(n.code,{children:"b64info"}),", ",(0,t.jsx)(n.code,{children:"exp"})," and ",(0,t.jsx)(n.code,{children:"expire_at"}),". What do they mean? Let's describe it in detail."]}),"\n",(0,t.jsx)(n.h3,{id:"client",children:"client"}),"\n",(0,t.jsxs)(n.p,{children:["Required. Client ID which wants to subscribe on a channel (",(0,t.jsx)(n.strong,{children:"string"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Centrifugo server generates a unique client ID for each incoming connection. This client ID regenerated for a client on every reconnect. You must use this client ID for a private channel subscription token. If you are using ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/centrifuge-js",children:"centrifuge-js"})," library then Client ID and channels that the user wants to subscribe will be automatically added to AJAX POST request to application backend. In other cases refer to specific client documentation (in most cases you will have client ID and channel in private subscription event context)."]})}),"\n",(0,t.jsx)(n.h3,{id:"channel",children:"channel"}),"\n",(0,t.jsxs)(n.p,{children:["Required. Channel that client tries to subscribe to (",(0,t.jsx)(n.strong,{children:"string"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"info",children:"info"}),"\n",(0,t.jsxs)(n.p,{children:["Optional. Additional information for connection inside this channel (",(0,t.jsx)(n.strong,{children:"valid JSON"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"b64info",children:"b64info"}),"\n",(0,t.jsxs)(n.p,{children:["Optional. Additional information for connection inside this channel in base64 format (",(0,t.jsx)(n.strong,{children:"string"}),"). Will be decoded by Centrifugo to raw bytes."]}),"\n",(0,t.jsx)(n.h3,{id:"exp",children:"exp"}),"\n",(0,t.jsx)(n.p,{children:"Optional. This is a standard JWT claim that allows setting private channel subscription token expiration time (a UNIX timestamp in the future, in seconds, as integer) and configures subscription expiration time."}),"\n",(0,t.jsxs)(n.p,{children:["At the moment if the subscription expires client connection will be closed and the client will try to reconnect. In most cases, you don't need this and should prefer using the expiration of the connection JWT to deactivate the connection (see ",(0,t.jsx)(n.a,{href:"/docs/3/server/authentication",children:"authentication"}),"). But if you need more granular per-channel control this may fit your needs."]}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.code,{children:"exp"})," is set in token every subscription token must be periodically refreshed. This refresh workflow happens on the client side. Refer to the specific client documentation to see how to refresh subscriptions."]}),"\n",(0,t.jsx)(n.h3,{id:"expire_at",children:"expire_at"}),"\n",(0,t.jsxs)(n.p,{children:["Optional. By default, Centrifugo looks on ",(0,t.jsx)(n.code,{children:"exp"})," claim to both check token expiration and configure subscription expiration time. In most cases this is fine, but there could be situations where you want to decouple subscription token expiration check with subscription expiration time. As soon as the ",(0,t.jsx)(n.code,{children:"expire_at"})," claim is provided (set) in subscription JWT Centrifugo relies on it for setting subscription expiration time (JWT expiration still checked over ",(0,t.jsx)(n.code,{children:"exp"})," though)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expire_at"})," is a UNIX timestamp seconds when the subscription should expire."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set it to the future time for expiring subscription at some point"}),"\n",(0,t.jsxs)(n.li,{children:["Set it to ",(0,t.jsx)(n.code,{children:"0"})," to disable subscription expiration (but still check token ",(0,t.jsx)(n.code,{children:"exp"})," claim). This allows implementing a one-time subscription token."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"aud",children:"aud"}),"\n",(0,t.jsx)(n.p,{children:"Handled since Centrifugo v3.2.0"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT audience (",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3",children:"rfc7519 aud"})," claim). But if you set ",(0,t.jsx)(n.code,{children:"token_audience"})," option as described in ",(0,t.jsx)(n.a,{href:"/docs/3/server/authentication#aud",children:"client authentication"})," then audience for subscription JWT will also be checked."]}),"\n",(0,t.jsx)(n.h3,{id:"iss",children:"iss"}),"\n",(0,t.jsx)(n.p,{children:"Handled since Centrifugo v3.2.0"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT issuer (",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1",children:"rfc7519 iss"})," claim). But if you set ",(0,t.jsx)(n.code,{children:"token_issuer"})," option as described in ",(0,t.jsx)(n.a,{href:"/docs/3/server/authentication#iss",children:"client authentication"})," then issuer for subscription JWT will also be checked."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["So to generate a subscription token you can use something like this in Python (assuming client ID is ",(0,t.jsx)(n.code,{children:"xxxx-xxx-xxx-xxxx"})," and the private channel is ",(0,t.jsx)(n.code,{children:"$gossips"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import jwt\n\ntoken = jwt.encode({\n    "client": "xxxx-xxx-xxx-xxxx",\n    "channel": "$gossips"\n}, "secret", algorithm="HS256").decode()\n\nprint(token)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:'"secret"'})," is the ",(0,t.jsx)(n.code,{children:"token_hmac_secret_key"})," from Centrifugo configuration (we use HMAC tokens in this example which relies on a shared secret key, for RSA or ECDSA tokens you need to use a private key known only by your backend)."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);