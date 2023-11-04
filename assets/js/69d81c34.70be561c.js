"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3352],{42271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(85893),o=s(11151);const t={id:"server_subs",title:"Server-side subscriptions"},a=void 0,r={id:"server/server_subs",title:"Server-side subscriptions",description:"Centrifugo clients can initiate a subscription to a channel by calling the subscribe method of client API. In most cases, client-side subscriptions is a more flexible and recommended approach since a frontend usually knows which channels it needs to consume at a concrete moment.",source:"@site/versioned_docs/version-4/server/server_subs.md",sourceDirName:"server",slug:"/server/server_subs",permalink:"/docs/4/server/server_subs",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/server_subs.md",tags:[],version:"4",frontMatter:{id:"server_subs",title:"Server-side subscriptions"},sidebar:"Guides",previous:{title:"Channel JWT authorization",permalink:"/docs/4/server/channel_token_auth"},next:{title:"Engines and scalability",permalink:"/docs/4/server/engines"}},c={},l=[{value:"Dynamic server-side subscriptions",id:"dynamic-server-side-subscriptions",level:3},{value:"Automatic personal channel subscription",id:"automatic-personal-channel-subscription",level:3},{value:"Maintain single user connection",id:"maintain-single-user-connection",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Centrifugo clients can initiate a subscription to a channel by calling the ",(0,i.jsx)(n.code,{children:"subscribe"})," method of client API. In most cases, client-side subscriptions is a more flexible and recommended approach since a frontend usually knows which channels it needs to consume at a concrete moment."]}),"\n",(0,i.jsxs)(n.p,{children:["But in some situations, all you need is to subscribe your connections to several channels on a server-side at the moment of connection establishment. So client effectively starts receiving publications from those channels without calling the ",(0,i.jsx)(n.code,{children:"subscribe"})," API at all."]}),"\n",(0,i.jsx)(n.p,{children:"You can set a list of channels for a connection in two ways at the moment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["over connection JWT using ",(0,i.jsx)(n.code,{children:"channels"})," claim, which is an array of strings"]}),"\n",(0,i.jsxs)(n.li,{children:["over connect proxy returning ",(0,i.jsx)(n.code,{children:"channels"})," field in result (also an array of strings)"]}),"\n",(0,i.jsx)(n.li,{children:"dynamically over server subscribe API"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On the client-side, you need to listen for publications from server-side channels using a top-level client event handler. For example with ",(0,i.jsx)(n.code,{children:"centrifuge-js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const centrifuge = new Centrifuge(address);\n\ncentrifuge.on('publication', function(ctx) {\n    const channel = ctx.channel;\n    const payload = JSON.stringify(ctx.data);\n    console.log('Publication from server-side channel', channel, payload);\n});\n\ncentrifuge.connect();\n"})}),"\n",(0,i.jsx)(n.p,{children:"I.e. listen for publications without any usage of subscription objects. You can look at channel publication relates to using field in callback context as shown in the example."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The same ",(0,i.jsx)(n.a,{href:"/docs/4/faq/#what-about-best-practices-with-amount-of-channels",children:"best practices"})," of working with channels and client-side subscriptions equally applicable to server-side subscription."]})}),"\n",(0,i.jsx)(n.h3,{id:"dynamic-server-side-subscriptions",children:"Dynamic server-side subscriptions"}),"\n",(0,i.jsxs)(n.p,{children:["See subscribe and unsubscribe ",(0,i.jsx)(n.a,{href:"/docs/4/server/server_api",children:"server API"})]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-personal-channel-subscription",children:"Automatic personal channel subscription"}),"\n",(0,i.jsx)(n.p,{children:"It's possible to automatically subscribe a user to a personal server-side channel."}),"\n",(0,i.jsxs)(n.p,{children:["To enable this you need to enable the ",(0,i.jsx)(n.code,{children:"user_subscribe_to_personal"})," boolean option (by default ",(0,i.jsx)(n.code,{children:"false"}),"). As soon as you do this every connection with a non-empty user ID will be automatically subscribed to a personal user-limited channel. Anonymous users with empty user IDs won't be subscribed to any channel."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you set this option and the user with ID ",(0,i.jsx)(n.code,{children:"87334"})," connects to Centrifugo it will be automatically subscribed to channel ",(0,i.jsx)(n.code,{children:"#87334"})," and you can process personal publications on the client-side in the same way as shown above."]}),"\n",(0,i.jsxs)(n.p,{children:["As you can see by default generated personal channel name belongs to the default namespace (i.e. no explicit namespace used). To set custom namespace name use ",(0,i.jsx)(n.code,{children:"user_personal_channel_namespace"})," option (string, default ",(0,i.jsx)(n.code,{children:'""'}),") \u2013 i.e. the name of namespace from configured configuration namespaces array. In this case, if you set ",(0,i.jsx)(n.code,{children:"user_personal_channel_namespace"})," to ",(0,i.jsx)(n.code,{children:"personal"})," for example \u2013 then the automatically generated personal channel will be ",(0,i.jsx)(n.code,{children:"personal:#87334"})," \u2013 user will be automatically subscribed to it on connect and you can use this channel name to publish personal notifications to the online user."]}),"\n",(0,i.jsx)(n.h3,{id:"maintain-single-user-connection",children:"Maintain single user connection"}),"\n",(0,i.jsx)(n.p,{children:"Usage of personal channel subscription also opens a road to enable one more feature: maintaining only a single connection for each user globally around all Centrifugo nodes."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"user_personal_single_connection"})," boolean option (default ",(0,i.jsx)(n.code,{children:"false"}),") turns on a mode in which Centrifugo will try to maintain only a single connection for each user at the same moment. As soon as the user establishes a connection other connections from the same user will be closed with connection limit reason (client won't try to automatically reconnect)."]}),"\n",(0,i.jsxs)(n.p,{children:["This feature works with a help of presence information inside a personal channel. So ",(0,i.jsx)(n.strong,{children:"presence should be turned on in a personal channel"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "user_subscribe_to_personal": true,\n  "user_personal_single_connection": true,\n  "user_personal_channel_namespace": "personal",\n  "namespaces": [\n    {\n      "name": "personal",\n      "presence": true\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Centrifugo can't guarantee that other user connections will be closed \u2013 since Disconnect messages are distributed around Centrifugo nodes with at most once guarantee. So don't add critical business logic based on this feature to your application. Though this should work just fine most of the time if the connection between the Centrifugo node and PUB/SUB broker is OK."})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(67294);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);