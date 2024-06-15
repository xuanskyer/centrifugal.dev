"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8982],{37570:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=s(85893),t=s(11151);const o={id:"faq_index",title:"Frequently Asked Questions"},a=void 0,r={id:"faq/faq_index",title:"Frequently Asked Questions",description:"Answers to popular questions here.",source:"@site/versioned_docs/version-4/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/docs/4/faq/",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/faq/index.md",tags:[],version:"4",frontMatter:{id:"faq_index",title:"Frequently Asked Questions"}},c={},l=[{value:"How many connections can one Centrifugo instance handle?",id:"how-many-connections-can-one-centrifugo-instance-handle",level:3},{value:"Memory usage per connection?",id:"memory-usage-per-connection",level:3},{value:"Can Centrifugo scale horizontally?",id:"can-centrifugo-scale-horizontally",level:3},{value:"Message delivery model",id:"message-delivery-model",level:3},{value:"Message order guarantees",id:"message-order-guarantees",level:3},{value:"Should I create channels explicitly?",id:"should-i-create-channels-explicitly",level:3},{value:"What about best practices with the number of channels?",id:"what-about-best-practices-with-the-number-of-channels",level:3},{value:"Any way to exclude message publisher from receiving a message from a channel?",id:"any-way-to-exclude-message-publisher-from-receiving-a-message-from-a-channel",level:3},{value:"Can I have both binary and JSON clients in one channel?",id:"can-i-have-both-binary-and-json-clients-in-one-channel",level:3},{value:"Online presence for chat apps - online status of your contacts",id:"online-presence-for-chat-apps---online-status-of-your-contacts",level:3},{value:"Centrifugo stops accepting new connections, why?",id:"centrifugo-stops-accepting-new-connections-why",level:3},{value:"Can I use Centrifugo without reverse-proxy like Nginx before it?",id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it",level:3},{value:"Does Centrifugo work with HTTP/2?",id:"does-centrifugo-work-with-http2",level:3},{value:"Does Centrifugo work with HTTP/3?",id:"does-centrifugo-work-with-http3",level:3},{value:"Is there a way to use a single connection to Centrifugo from different browser tabs?",id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs",level:3},{value:"What if I need to send push notifications to mobile or web applications?",id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications",level:3},{value:"How can I know a message is delivered to a client?",id:"how-can-i-know-a-message-is-delivered-to-a-client",level:3},{value:"Can I publish new messages over a WebSocket connection from a client?",id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client",level:3},{value:"How to create a secure channel for two users only (private chat case)?",id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case",level:3},{value:"What&#39;s the best way to organize channel configuration?",id:"whats-the-best-way-to-organize-channel-configuration",level:3},{value:"Does Centrifugo support webhooks?",id:"does-centrifugo-support-webhooks",level:3},{value:"Why Centrifugo does not have disconnect hooks?",id:"why-centrifugo-does-not-have-disconnect-hooks",level:3},{value:"Is it possible to listen to join/leave events on the app backend side?",id:"is-it-possible-to-listen-to-joinleave-events-on-the-app-backend-side",level:3},{value:"How scalable is the online presence and join/leave features?",id:"how-scalable-is-the-online-presence-and-joinleave-features",level:3},{value:"How to send initial data to channel subscriber?",id:"how-to-send-initial-data-to-channel-subscriber",level:3},{value:"Does Centrifugo support multitenancy?",id:"does-centrifugo-support-multitenancy",level:3},{value:"I have not found an answer to my question here:",id:"i-have-not-found-an-answer-to-my-question-here",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Answers to popular questions here."}),"\n",(0,i.jsx)(n.h3,{id:"how-many-connections-can-one-centrifugo-instance-handle",children:"How many connections can one Centrifugo instance handle?"}),"\n",(0,i.jsx)(n.p,{children:"This depends on many factors. Real-time transport choice, hardware, message rate, size of messages, Centrifugo features enabled, client distribution over channels, compression on/off, etc. So no certain answer to this question exists. Common sense, performance measurements, and monitoring can help here."}),"\n",(0,i.jsx)(n.p,{children:"Generally, we suggest not put more than 50-100k clients on one node - but you should measure for your use case."}),"\n",(0,i.jsxs)(n.p,{children:["You can find a description of a test stand with million WebSocket connections in ",(0,i.jsx)(n.a,{href:"/blog/2020/02/10/million-connections-with-centrifugo",children:"this blog post"}),". Though the point above is still valid \u2013 measure and ",(0,i.jsx)(n.a,{href:"/docs/4/server/monitoring",children:"monitor"})," your setup."]}),"\n",(0,i.jsx)(n.h3,{id:"memory-usage-per-connection",children:"Memory usage per connection?"}),"\n",(0,i.jsx)(n.p,{children:"Depending on transport used and features enabled the amount of RAM required per each connection can vary."}),"\n",(0,i.jsx)(n.p,{children:"For example, you can expect that each WebSocket connection will cost about 30-50 KB of RAM, thus a server with 1 GB of RAM can handle about 20-30k connections."}),"\n",(0,i.jsx)(n.p,{children:"For other real-time transports, the memory usage per connection can differ (for example, SockJS connections will cost ~ 2 times more RAM than pure WebSocket connections). So the best way is again \u2013 measure for your custom case since depending on Centrifugo transport/features memory usage can vary."}),"\n",(0,i.jsx)(n.h3,{id:"can-centrifugo-scale-horizontally",children:"Can Centrifugo scale horizontally?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, it can do this using built-in engines: Redis (or Redis-compatible storages), or Nats broker."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/4/server/engines",children:"engines"})," and ",(0,i.jsx)(n.a,{href:"/docs/4/getting-started/design#scalability-considerations",children:"scalability considerations"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"message-delivery-model",children:"Message delivery model"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/4/getting-started/design#message-delivery-model",children:"design overview"})]}),"\n",(0,i.jsx)(n.h3,{id:"message-order-guarantees",children:"Message order guarantees"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/4/getting-started/design#message-order-guarantees",children:"design overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"should-i-create-channels-explicitly",children:"Should I create channels explicitly?"}),"\n",(0,i.jsx)(n.p,{children:"No. By default, channels are created automatically as soon as the first client subscribed to it. And destroyed automatically when the last client unsubscribes from a channel."}),"\n",(0,i.jsx)(n.p,{children:"When history inside the channel is on then a window of last messages is kept automatically during the retention period. So a client that comes later and subscribes to a channel can retrieve those messages using the call to the history API (or maybe by using the automatic recovery feature which also uses a history internally)."}),"\n",(0,i.jsx)(n.h3,{id:"what-about-best-practices-with-the-number-of-channels",children:"What about best practices with the number of channels?"}),"\n",(0,i.jsx)(n.p,{children:"Channel is a very lightweight ephemeral entity - Centrifugo can deal with lots of channels, don't be afraid to have many channels in an application."}),"\n",(0,i.jsx)(n.p,{children:"But keep in mind that one client should be subscribed to a reasonable number of channels at one moment. Client-side subscription to a channel requires a separate frame from client to server \u2013 more frames mean more heavy initial connection, more heavy reconnect, etc."}),"\n",(0,i.jsxs)(n.p,{children:["One example which may lead to channel misusing is a messenger app where user can be part of many groups. In this case, using a separate channel for each group/chat in a messenger may be a bad approach. The problem is that messenger app may have chat list screen \u2013 a view that displays all user groups (probably with pagination). If you are using separate channel for each group then this may lead to lots of subscriptions. Also, with pagination, to receive updates from older chats (not visible on a screen due to pagination) \u2013 user may need to subscribe on their channels too. In this case, using a single personal channel for each user is a preferred approach. As soon as you need to deliver a message to a group you can use Centrifugo ",(0,i.jsx)(n.code,{children:"broadcast"})," API to send it to many users. If your chat groups are huge in size then you may also need additional queuing system between your application backend and Centrifugo to broadcast a message to many personal channels."]}),"\n",(0,i.jsx)(n.h3,{id:"any-way-to-exclude-message-publisher-from-receiving-a-message-from-a-channel",children:"Any way to exclude message publisher from receiving a message from a channel?"}),"\n",(0,i.jsx)(n.p,{children:"Currently, no."}),"\n",(0,i.jsx)(n.p,{children:"We know that services like Pusher provide a way to exclude current client by providing a client ID (socket ID) in publish request. A couple of problems with this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Client can reconnect while message travels over wire/Backend/Centrifugo \u2013 in this case client has a chance to receive a message unexpectedly since it will have another client ID (socket ID)"}),"\n",(0,i.jsx)(n.li,{children:"Client can call a history manually or message recovery process can run upon reconnect \u2013 in this case a message will present in a history"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Both cases may result in duplicate messages. These reasons prevent us adding such functionality into Centrifugo, the correct application architecture requires having some sort of idempotent identifier which allow dealing with message duplicates."}),"\n",(0,i.jsx)(n.p,{children:"Once added nobody will think about idempotency and this can lead to hard to catch/fix problems in an application. This can also make enabling channel history harder at some point."}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo behaves similar to Kafka here \u2013 i.e. channel should be considered as immutable stream of events where each channel subscriber simply receives all messages published to a channel."}),"\n",(0,i.jsx)(n.p,{children:"In the future releases Centrifugo may have some sort of server-side message filtering, but we are searching for a proper and safe way of adding it."}),"\n",(0,i.jsx)(n.h3,{id:"can-i-have-both-binary-and-json-clients-in-one-channel",children:"Can I have both binary and JSON clients in one channel?"}),"\n",(0,i.jsx)(n.p,{children:"No. It's not possible to transparently encode binary data into JSON protocol (without converting binary to base64 for example which we don't want to do due to increased complexity and performance penalties). So if you have clients in a channel which work with JSON \u2013 you need to use JSON payloads everywhere."}),"\n",(0,i.jsx)(n.p,{children:"Most Centrifugo bidirectional connectors are using binary Protobuf protocol between a client and Centrifugo. But you can send JSON over Protobuf protocol just fine (since JSON is a UTF-8 encoded sequence of bytes in the end)."}),"\n",(0,i.jsx)(n.p,{children:"To summarize:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"if you are using binary Protobuf clients and binary payloads everywhere \u2013 you are fine."}),"\n",(0,i.jsx)(n.li,{children:"if you are using binary or JSON clients and valid JSON payloads everywhere \u2013 you are fine."}),"\n",(0,i.jsx)(n.li,{children:"if you try to send binary data to JSON protocol based clients \u2013 you will get errors from Centrifugo."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"online-presence-for-chat-apps---online-status-of-your-contacts",children:"Online presence for chat apps - online status of your contacts"}),"\n",(0,i.jsx)(n.p,{children:"While online presence is a good feature it does not fit well for some apps. For example, if you make a chat app - you may probably use a single personal channel for each user. In this case, you cannot find who is online at moment using the built-in Centrifugo presence feature as users do not share a common channel."}),"\n",(0,i.jsxs)(n.p,{children:["You can solve this using a separate service that tracks the online status of your users (for example in Redis) and has a bulk API that returns online status approximation for a list of users. This way you will have an efficient scalable way to deal with online statuses. This is also available as ",(0,i.jsx)(n.a,{href:"/docs/4/pro/user_status",children:"Centrifugo PRO feature"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"centrifugo-stops-accepting-new-connections-why",children:"Centrifugo stops accepting new connections, why?"}),"\n",(0,i.jsxs)(n.p,{children:["The most popular reason behind this is reaching the open file limit. You can make it higher, we described how to do this ",(0,i.jsx)(n.a,{href:"/docs/4/server/infra_tuning",children:"nearby in this doc"}),". Also, check out ",(0,i.jsx)(n.a,{href:"/blog/2020/11/12/scaling-websocket",children:"an article in our blog"})," which mentions possible problems when dealing with many persistent connections like WebSocket."]}),"\n",(0,i.jsx)(n.h3,{id:"can-i-use-centrifugo-without-reverse-proxy-like-nginx-before-it",children:"Can I use Centrifugo without reverse-proxy like Nginx before it?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, you can - Go standard library designed to allow this. Though proxy before Centrifugo can be very useful for load balancing clients."}),"\n",(0,i.jsx)(n.h3,{id:"does-centrifugo-work-with-http2",children:"Does Centrifugo work with HTTP/2?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, Centrifugo works with HTTP/2. This is provided by built-in Go http server implementation."}),"\n",(0,i.jsxs)(n.p,{children:["You can disable HTTP/2 running Centrifugo server with ",(0,i.jsx)(n.code,{children:"GODEBUG"})," environment variable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GODEBUG="http2server=0" centrifugo -c config.json\n'})}),"\n",(0,i.jsx)(n.p,{children:"Keep in mind that when using WebSocket you are working only over HTTP/1.1, so HTTP/2 support mostly makes sense for SockJS HTTP transports and unidirectional transports: like EventSource (SSE) and HTTP-streaming."}),"\n",(0,i.jsx)(n.h3,{id:"does-centrifugo-work-with-http3",children:"Does Centrifugo work with HTTP/3?"}),"\n",(0,i.jsxs)(n.p,{children:["Centrifugo v4 added an ",(0,i.jsx)(n.strong,{children:"experimental"})," HTTP/3 support. As soon as you enabled TLS and provided ",(0,i.jsx)(n.code,{children:'"http3": true'})," option all endpoints on external port will be served by HTTP/3 server based on ",(0,i.jsx)(n.a,{href:"https://github.com/quic-go/quic-go",children:"github.com/quic-go/quic-go"})," implementation. This (among other benefits which HTTP/3 can provide) is a step towards a proper ",(0,i.jsx)(n.a,{href:"https://web.dev/webtransport/",children:"WebTransport"})," support. For now we ",(0,i.jsx)(n.a,{href:"/docs/4/transports/webtransport",children:"support WebTransport experimentally"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It's worth noting that WebSocket transport does not work over HTTP/3, it still starts with HTTP/1.1 Upgrade request (there is an interesting IETF draft BTW about ",(0,i.jsx)(n.a,{href:"https://www.ietf.org/archive/id/draft-ietf-httpbis-h3-websockets-02.html",children:"Bootstrapping WebSockets with HTTP/3"}),"). But HTTP-streaming and Eventsource should work just fine with HTTP/3."]}),"\n",(0,i.jsxs)(n.p,{children:["HTTP/3 does not work with ACME autocert TLS at the moment - i.e. you need to explicitly provide paths to cert and key files ",(0,i.jsx)(n.a,{href:"/docs/4/server/tls#using-crt-and-key-files",children:"as described here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"is-there-a-way-to-use-a-single-connection-to-centrifugo-from-different-browser-tabs",children:"Is there a way to use a single connection to Centrifugo from different browser tabs?"}),"\n",(0,i.jsx)(n.p,{children:"If the underlying transport is HTTP-based, and you use HTTP/2 then this will work automatically. For WebSocket, each browser tab creates a new connection."}),"\n",(0,i.jsx)(n.h3,{id:"what-if-i-need-to-send-push-notifications-to-mobile-or-web-applications",children:"What if I need to send push notifications to mobile or web applications?"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes it's confusing to see a difference between real-time messages and push notifications. Centrifugo is a real-time messaging server. It can not send push notifications to devices - to Apple iOS devices via APNS, Android devices via FCM, or browsers over Web Push API."}),"\n",(0,i.jsxs)(n.p,{children:["We are preparing our own ",(0,i.jsx)(n.a,{href:"/docs/pro/push_notifications",children:"push notifications API"})," as part of Centrifugo PRO version. This is under construction though."]}),"\n",(0,i.jsx)(n.p,{children:"The reasonable question here is how can you know when you need to send a real-time message to an online client or push notification to its device for an offline client. The solution is pretty simple. You can keep critical notifications for a client in the database. And when a client reads a message you should send an ack to your backend marking that notification as read by the client. Periodically you can check which notifications were sent to clients but they have not read it (no read ack received). For such notifications, you can send push notifications to its device using your own or another open-source solution. Look at Firebase for example."}),"\n",(0,i.jsx)(n.h3,{id:"how-can-i-know-a-message-is-delivered-to-a-client",children:"How can I know a message is delivered to a client?"}),"\n",(0,i.jsx)(n.p,{children:"You can, but Centrifugo does not have such an API. What you have to do to ensure your client has received a message is sending confirmation ack from your client to your application backend as soon as the client processed the message coming from a Centrifugo channel."}),"\n",(0,i.jsx)(n.h3,{id:"can-i-publish-new-messages-over-a-websocket-connection-from-a-client",children:"Can I publish new messages over a WebSocket connection from a client?"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to publish messages into channels directly from a client (when ",(0,i.jsx)(n.code,{children:"publish"})," channel option is enabled). But we strongly discourage this in production usage as those messages just go through Centrifugo without any additional control and validation from the application backend."]}),"\n",(0,i.jsx)(n.p,{children:"We suggest using one of the available approaches:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When a user generates an event it must be first delivered to your app backend using a convenient way (for example AJAX POST request for a web application), processed on the backend (validated, saved into the main application database), and then published to Centrifugo using Centrifugo HTTP or GRPC API."}),"\n",(0,i.jsxs)(n.li,{children:["Utilize the ",(0,i.jsx)(n.a,{href:"/docs/4/server/proxy#rpc-proxy",children:"RPC proxy feature"})," \u2013 in this case, you can call RPC over Centrifugo WebSocket which will be translated to an HTTP request to your backend. After receiving this request on the backend you can publish a message to Centrifugo server API. This way you can utilize WebSocket transport between the client and your server in a bidirectional way. HTTP traffic will be concentrated inside your private network."]}),"\n",(0,i.jsxs)(n.li,{children:["Utilize the ",(0,i.jsx)(n.a,{href:"/docs/4/server/proxy#publish-proxy",children:"publish proxy feature"})," \u2013 in this case client can call publish on the frontend, this publication request will be transformed into HTTP or GRPC call to the application backend. If your backend allows publishing - Centrifugo will pass the payload to the channel (i.e. will publish message to the channel itself)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes publishing from a client directly into a channel (without any backend involved) can be useful though - for personal projects, for demonstrations (like we do in our ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/examples",children:"examples"}),") or if you trust your users and want to build an application without backend. In all cases when you don't need any message control on your backend."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-create-a-secure-channel-for-two-users-only-private-chat-case",children:"How to create a secure channel for two users only (private chat case)?"}),"\n",(0,i.jsx)(n.p,{children:"There are several ways to achieve it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["use a private channel (starting with ",(0,i.jsx)(n.code,{children:"$"}),") - every time a user subscribes to it your backend should provide a sign to confirm that subscription request. Read more in ",(0,i.jsx)(n.a,{href:"/docs/4/server/channels#private-channel-prefix",children:"channels chapter"})]}),"\n",(0,i.jsxs)(n.li,{children:["next is ",(0,i.jsx)(n.a,{href:"/docs/4/server/channels#user-channel-boundary",children:"user limited channels"})," (with ",(0,i.jsx)(n.code,{children:"#"}),") - you can create a channel with a name like ",(0,i.jsx)(n.code,{children:"dialog#42,567"})," to limit subscribers only to the user with id ",(0,i.jsx)(n.code,{children:"42"})," and user with ID ",(0,i.jsx)(n.code,{children:"567"}),", this does not fit well for channels with many or dynamic possible subscribers"]}),"\n",(0,i.jsxs)(n.li,{children:["you can use subscribe proxy feature to validate subscriptions, see ",(0,i.jsx)(n.a,{href:"/docs/4/server/proxy",children:"chapter about proxy"})]}),"\n",(0,i.jsx)(n.li,{children:"finally, you can create a hard-to-guess channel name (based on some secret key and user IDs or just generate and save this long unique name into your main app database) so other users won't know this channel to subscribe on it. This is the simplest but not the safest way - but can be reasonable to consider in many situations"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"whats-the-best-way-to-organize-channel-configuration",children:"What's the best way to organize channel configuration?"}),"\n",(0,i.jsx)(n.p,{children:"In most situations, your application needs several different real-time features. We suggest using namespaces for every real-time feature if it requires some option enabled."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you need join/leave messages for a chat app - create a special channel namespace with this ",(0,i.jsx)(n.code,{children:"join_leave"})," option enabled. Otherwise, your other channels will receive join/leave messages too - increasing load and traffic in the system but not used by clients."]}),"\n",(0,i.jsx)(n.p,{children:"The same relates to other channel options."}),"\n",(0,i.jsx)(n.h3,{id:"does-centrifugo-support-webhooks",children:"Does Centrifugo support webhooks?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/4/server/proxy",children:"Proxy feature"})," allows integrating Centrifugo with your session mechanism (via connect proxy) and provides a way to react to connection events (rpc, subscribe, publish). Also, it opens a road for bidirectional communication with RPC calls. And periodic connection refresh hooks are also there."]}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo does not support unsubscribe/disconnect hooks \u2013 see the reasoning below."}),"\n",(0,i.jsx)(n.h3,{id:"why-centrifugo-does-not-have-disconnect-hooks",children:"Why Centrifugo does not have disconnect hooks?"}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo does not support disconnect hooks at this point."}),"\n",(0,i.jsx)(n.p,{children:"First of all, there is no guarantee that the disconnect process will have a time to execute on the client-side (as the client can just switch off its device or simply lose internet connection). This means that a server may notice a connection loss with some delay (thanks to PING/PONG mechanism)."}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo node can be unexpectedly killed. So there is a chance that disconnect event won't have a chance to be emitted to the backend."}),"\n",(0,i.jsxs)(n.p,{children:["One more reason is that Centrifugo designed to scale to many concurrent connections. Think millions of them. As we ",(0,i.jsx)(n.a,{href:"https://centrifugal.dev/blog/2020/11/12/scaling-websocket#massive-reconnect",children:"mentioned in our blog"})," there are cases when all connections start reconnecting at the same time. In this case Centrifugo could potentially generate lots of disconnect events. To reduce the load during connect process Centrifugo has JWT authentication. Even if disconnect events were queued/rate-limited there could be situations when your app processes disconnect hook while user already reconnected and connect event processed. This is a racy situation which you will need to handle somehow (possibly based on unique client ID attached to each connection)."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to know that client disconnected and program your business logic around this fact then the reasonable approach could be periodically call your backend from the client-side and update user status somewhere on the backend (use Redis maybe). This is a pretty robust solution where you can't occasionally miss disconnect events. You can also utilize Centrifugo refresh proxy for the task of periodic backend pinging. In this case you will notice that user (or particular client) left app with some delay \u2013 this may be a acceptable trade-off in many cases."}),"\n",(0,i.jsxs)(n.p,{children:["Having said that, processing disconnect events may be reasonable \u2013 as a best-effort solution while taking into account everything said above. ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/centrifuge",children:"Centrifuge"})," library for Go language (which is the core of Centrifugo) supports client disconnect callbacks on a server-side \u2013 so technically the possibility exists. If someone comes with a use case which definitely wins from having disconnect hooks in Centrifugo we are ready to discuss this and try to design a proper solution together."]}),"\n",(0,i.jsx)(n.h3,{id:"is-it-possible-to-listen-to-joinleave-events-on-the-app-backend-side",children:"Is it possible to listen to join/leave events on the app backend side?"}),"\n",(0,i.jsxs)(n.p,{children:["No, join/leave events are only available in the client protocol. In most cases join event can be handled by using ",(0,i.jsx)(n.a,{href:"/docs/4/server/proxy#subscribe-proxy",children:"subscribe proxy"}),". Leave events are harder \u2013 there is no unsubscribe hook available (mostly the same reasons as for disconnect hook described above). So the workaround here can be similar to one for disconnect \u2013 ping an app backend periodically while client is subscribed and thus know that client is currently in a channel with some approximation in time."]}),"\n",(0,i.jsx)(n.h3,{id:"how-scalable-is-the-online-presence-and-joinleave-features",children:"How scalable is the online presence and join/leave features?"}),"\n",(0,i.jsx)(n.p,{children:"Online presence is good for channels with a reasonably small number of active subscribers. As soon as there are tons of active subscribers, presence information becomes very expensive in terms of bandwidth (as it contains full information about all clients in a channel)."}),"\n",(0,i.jsxs)(n.p,{children:["There is ",(0,i.jsx)(n.code,{children:"presence_stats"})," API method that can be helpful if you only need to know the number of clients (or unique users) in a channel. But in the case of the Redis engine even ",(0,i.jsx)(n.code,{children:"presence_stats"})," call is not optimized for channels with more than several thousand active subscribers."]}),"\n",(0,i.jsxs)(n.p,{children:["You may consider using a separate service to deal with presence status information that provides information in near real-time maybe with some reasonable approximation. Centrifugo PRO provides a ",(0,i.jsx)(n.a,{href:"/docs/4/pro/user_status",children:"user status"})," feature which may fit your needs."]}),"\n",(0,i.jsx)(n.p,{children:"The same is true for join/leave messages - as soon as you turn on join/leave events for a channel with many active subscribers each subscriber starts generating indiviaual join/leave events. This may result in many messages sent to each subscriber in a channel, drastically multiplying amount of messages traveling through the system. Especially when all clients reconnect simulteniously. So be careful and estimate the possible load. There is no magic, unfortunately."}),"\n",(0,i.jsx)(n.h3,{id:"how-to-send-initial-data-to-channel-subscriber",children:"How to send initial data to channel subscriber?"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you need to send some initial state towards channel subscriber. Centrifugo provides a way to attach any data to a successful subscribe reply when using ",(0,i.jsx)(n.a,{href:"/docs/4/server/proxy#subscribe-proxy",children:"subscribe proxy"})," feature. See ",(0,i.jsx)(n.code,{children:"data"})," and ",(0,i.jsx)(n.code,{children:"b64data"})," fields. This data will be part of ",(0,i.jsx)(n.code,{children:"subscribed"})," event context. And of course, you can always simply send request to get initial data from the application backend before or after subscribing to a channel without Centrifugo connection involved (i.e. using sth like general AJAX/HTTP call or passing data to the template when rendering an application page)."]}),"\n",(0,i.jsx)(n.h3,{id:"does-centrifugo-support-multitenancy",children:"Does Centrifugo support multitenancy?"}),"\n",(0,i.jsx)(n.p,{children:"If you want to use Centrifugo with different projects the recommended approach is to have different Centrifugo installations for each project. Multitenancy is better to solve on infrastructure level in case of Centrifugo."}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to share one Redis setup though by setting unique ",(0,i.jsx)(n.code,{children:"redis_prefix"}),". But we recommend having completely isolated setups."]}),"\n",(0,i.jsx)(n.h3,{id:"i-have-not-found-an-answer-to-my-question-here",children:"I have not found an answer to my question here:"}),"\n",(0,i.jsx)(n.p,{children:"Ask in our community rooms:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"})})," \xa0",(0,i.jsx)(n.a,{href:"https://discord.gg/tYgADKx",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"})})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(67294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);