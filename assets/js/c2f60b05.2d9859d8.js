"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7049],{69999:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=s(85893),o=s(11151);const a={id:"channels",title:"Channels"},r=void 0,l={id:"server/channels",title:"Channels",description:"Channel is a route for publications. Clients can be subscribed to a channel to receive real-time messages published to a channel \u2013 new publications and join/leave events (if enabled for a channel namespace). A channel subscriber can also ask for a channel presence or channel history information (if enabled for a channel namespace).",source:"@site/versioned_docs/version-3/server/channels.md",sourceDirName:"server",slug:"/server/channels",permalink:"/docs/3/server/channels",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/channels.md",tags:[],version:"3",frontMatter:{id:"channels",title:"Channels"},sidebar:"Guides",previous:{title:"Client authentication",permalink:"/docs/3/server/authentication"},next:{title:"Private channels",permalink:"/docs/3/server/private_channels"}},t={},c=[{value:"Channel name rules",id:"channel-name-rules",level:2},{value:"namespace boundary (<code>:</code>)",id:"namespace-boundary-",level:3},{value:"private channel prefix (<code>$</code>)",id:"private-channel-prefix-",level:3},{value:"user channel boundary (<code>#</code>)",id:"user-channel-boundary-",level:3},{value:"Channel options",id:"channel-options",level:2},{value:"publish",id:"publish",level:3},{value:"subscribe_to_publish",id:"subscribe_to_publish",level:3},{value:"anonymous",id:"anonymous",level:3},{value:"presence",id:"presence",level:3},{value:"presence_disable_for_client",id:"presence_disable_for_client",level:3},{value:"join_leave",id:"join_leave",level:3},{value:"history_size",id:"history_size",level:3},{value:"history_ttl",id:"history_ttl",level:3},{value:"position",id:"position",level:3},{value:"recover",id:"recover",level:3},{value:"history_disable_for_client",id:"history_disable_for_client",level:3},{value:"protected",id:"protected",level:3},{value:"proxy_subscribe",id:"proxy_subscribe",level:3},{value:"proxy_publish",id:"proxy_publish",level:3},{value:"subscribe_proxy_name",id:"subscribe_proxy_name",level:3},{value:"publish_proxy_name",id:"publish_proxy_name",level:3},{value:"Channel options config example",id:"channel-options-config-example",level:2},{value:"Channel namespaces",id:"channel-namespaces",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Channel is a route for publications. Clients can be subscribed to a channel to receive real-time messages published to a channel \u2013 new publications and join/leave events (if enabled for a channel namespace). A channel subscriber can also ask for a channel presence or channel history information (if enabled for a channel namespace)."}),"\n",(0,i.jsxs)(n.p,{children:["Channel is just a string - ",(0,i.jsx)(n.code,{children:"news"}),", ",(0,i.jsx)(n.code,{children:"comments"}),", ",(0,i.jsx)(n.code,{children:"personal_feed"})," are valid channel names. Though this string has some ",(0,i.jsx)(n.a,{href:"#channel-name-rules",children:"predefined rules"})," as we will see below. You can define different channel behavior using a set of available ",(0,i.jsx)(n.a,{href:"#channel-options",children:"channel options"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Channels are ephemeral \u2013 you don't need to create them explicitly. Channels created automatically by Centrifugo as soon as the first client subscribes to a channel. As soon as the last subscriber leaves a channel - it's automatically cleaned up."}),"\n",(0,i.jsxs)(n.p,{children:["Channel can belong to a channel namespace. ",(0,i.jsx)(n.a,{href:"#channel-namespaces",children:"Channel namespacing"})," is a mechanism to define different behavior for different channels in Centrifugo. Using namespaces is a recommended way to manage channels \u2013 to turn on only those channel options which are required for a specific real-time feature you are implementing on top of Centrifugo."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["When using channel namespaces make sure you defined a namespace in configuration. Subscription attempts to a channel within a non-defined namespace will result into ",(0,i.jsx)(n.a,{href:"/docs/3/server/codes#unknown-channel",children:"102: unknown channel"})," errors."]})}),"\n",(0,i.jsx)(n.h2,{id:"channel-name-rules",children:"Channel name rules"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Only ASCII symbols must be used in channel string"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Channel name length limited by ",(0,i.jsx)(n.code,{children:"255"})," characters by default (can be changed via configuration file option ",(0,i.jsx)(n.code,{children:"channel_max_length"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Several symbols in channel names reserved for Centrifugo internal needs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:":"})," \u2013 for namespace channel boundary (see below)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$"})," \u2013 for private channel prefix (see below)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"#"})," \u2013 for user channel boundary (see below)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*"})," \u2013 for the future Centrifugo needs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"&"})," \u2013 for the future Centrifugo needs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/"})," \u2013 for the future Centrifugo needs"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-boundary-",children:["namespace boundary (",(0,i.jsx)(n.code,{children:":"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:":"})," \u2013 is a channel namespace boundary. Namespaces are used to set custom options to a group of channels. Each channel belonging to the same namespace will have the same channel options. Read more about available ",(0,i.jsx)(n.a,{href:"#channel-options",children:"channel options"})," and more about ",(0,i.jsx)(n.a,{href:"#channel-namespaces",children:"namespaces"})," below."]}),"\n",(0,i.jsxs)(n.p,{children:["If the channel is ",(0,i.jsx)(n.code,{children:"public:chat"})," - then Centrifugo will apply options to this channel from the channel namespace with the name ",(0,i.jsx)(n.code,{children:"public"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["A namespace is part of the channel name. If a user subscribed to a channel with namespace, like ",(0,i.jsx)(n.code,{children:"public:chat"})," \u2013 then you need to publish messages into ",(0,i.jsx)(n.code,{children:"public:chat"})," channel to be delivered to the user. We often see some confusion from developers trying to publish messages into ",(0,i.jsx)(n.code,{children:"chat"})," and thinking that namespace is somehow stripped upon subscription. It's not true."]})}),"\n",(0,i.jsxs)(n.h3,{id:"private-channel-prefix-",children:["private channel prefix (",(0,i.jsx)(n.code,{children:"$"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["If the channel starts with ",(0,i.jsx)(n.code,{children:"$"})," then it is considered ",(0,i.jsx)(n.em,{children:"private"}),". The subscription on a private channel must be properly signed by your backend."]}),"\n",(0,i.jsx)(n.p,{children:"Use private channels if you pass sensitive data inside the channel and want to control access permissions on your backend."}),"\n",(0,i.jsxs)(n.p,{children:["For example ",(0,i.jsx)(n.code,{children:"$secrets"})," is a private channel, ",(0,i.jsx)(n.code,{children:"$public:chat"})," - is a private channel that belongs to namespace ",(0,i.jsx)(n.code,{children:"public"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Subscription request to private channels requires additional JWT from your application backend. Read ",(0,i.jsx)(n.a,{href:"/docs/3/server/private_channels",children:"detailed chapter about private channels"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need a personal channel for a single user (or maybe a channel for a short and stable set of users) then consider using a ",(0,i.jsx)(n.code,{children:"user-limited"})," channel (see below) as a simpler alternative that does not require an additional subscription token from your backend."]}),"\n",(0,i.jsx)(n.p,{children:"Also, consider using server-side subscriptions or subscribe proxy feature of Centrifugo to model channels with restrictive access."}),"\n",(0,i.jsxs)(n.h3,{id:"user-channel-boundary-",children:["user channel boundary (",(0,i.jsx)(n.code,{children:"#"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"#"})," \u2013 is a user channel boundary. This is a separator to create personal channels for users (we call this ",(0,i.jsx)(n.em,{children:"user-limited channels"}),") without the need to provide a subscription token."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if the channel is ",(0,i.jsx)(n.code,{children:"news#42"})," then the only user with ID ",(0,i.jsx)(n.code,{children:"42"})," can subscribe to this channel (Centrifugo knows user ID because clients provide it in connection credentials with connection JWT)."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to create a user-limited channel in namespace ",(0,i.jsx)(n.code,{children:"personal"})," then you can use a name like ",(0,i.jsx)(n.code,{children:"personal:user#42"})," for example."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Channel like ",(0,i.jsx)(n.code,{children:"$personal:user#42"})," - i.e. channel with both private prefix ",(0,i.jsx)(n.code,{children:"$"})," and user channel boundary ",(0,i.jsx)(n.code,{children:"#"})," does not have a lot of sense, most probably you can just use ",(0,i.jsx)(n.code,{children:"personal:user#42"})," as the ID of the user protected by authentication JWT or set by application backend when the connect proxy feature is used."]})}),"\n",(0,i.jsxs)(n.p,{children:["Moreover, you can provide several user IDs in channel name separated by a comma: ",(0,i.jsx)(n.code,{children:"dialog#42,43"})," \u2013 in this case only the user with ID ",(0,i.jsx)(n.code,{children:"42"})," and user with ID ",(0,i.jsx)(n.code,{children:"43"})," will be able to subscribe on this channel."]}),"\n",(0,i.jsx)(n.p,{children:"This is useful for channels with a static list of allowed users, for example for single user personal messages channel, for dialog channel between certainly defined users. As soon as you need to manage access to a channel dynamically for many users this channel type does not suit well."}),"\n",(0,i.jsx)(n.h2,{id:"channel-options",children:"Channel options"}),"\n",(0,i.jsx)(n.p,{children:"Channel behavior can be modified by using channel options. Channel options can be defined on configuration top-level and for every namespace."}),"\n",(0,i.jsx)(n.h3,{id:"publish",children:"publish"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"publish"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 when on allows clients to publish messages into channels directly (from a client-side)."]}),"\n",(0,i.jsxs)(n.p,{children:["Keep in mind that your application will never receive such messages. In an idiomatic use case, all messages must be published to Centrifugo by an application backend using Centrifugo API (HTTP or GRPC). Or using ",(0,i.jsx)(n.a,{href:"/docs/3/server/proxy#publish-proxy",children:"publish proxy"}),". Since in those cases your application has a chance to validate a message, save it into a database, and only after that broadcast to all subscribers."]}),"\n",(0,i.jsxs)(n.p,{children:["But the ",(0,i.jsx)(n.code,{children:"publish"})," option still can be useful to send something without backend-side validation and saving it into a database. This option can also be handy for demos and quick prototyping real-time app ideas."]}),"\n",(0,i.jsx)(n.h3,{id:"subscribe_to_publish",children:"subscribe_to_publish"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"subscribe_to_publish"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") - when the ",(0,i.jsx)(n.code,{children:"publish"})," option is enabled client can publish into a channel without being subscribed to it. This option enables an automatic check that the client subscribed to a channel before allowing a client to publish."]}),"\n",(0,i.jsx)(n.h3,{id:"anonymous",children:"anonymous"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"anonymous"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 this option enables anonymous user access (i.e. for a user with an empty user ID). In most situations, your application works with authenticated users so every user has its unique user ID (set inside JWT ",(0,i.jsx)(n.code,{children:"sub"})," claim or provided by backend when using connect proxy). But if you provide real-time features for public access you may need unauthenticated access to some channels. Turn on this option and use an empty string as a user ID. See also related global option ",(0,i.jsx)(n.a,{href:"/docs/3/server/configuration#client_anonymous",children:"client_anonymous"})," which allows anonymous users to connect without JWT."]}),"\n",(0,i.jsx)(n.h3,{id:"presence",children:"presence"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"presence"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 enable/disable online presence information for channels. Online presence is information about clients currently subscribed to the channel. It contains each subscriber's client ID, user ID, connection info, and channel info. By default, this option is off so no presence information will be available for channels."]}),"\n",(0,i.jsx)(n.p,{children:"Enabling channel online presence adds some overhead since Centrifugo needs to maintain an additional data structure (in a process memory or a broker memory/disk)."}),"\n",(0,i.jsx)(n.h3,{id:"presence_disable_for_client",children:"presence_disable_for_client"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"presence_disable_for_client"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 allows making presence calls available only for a server-side API. By default, presence information is available for both client and server-side APIs."]}),"\n",(0,i.jsx)(n.h3,{id:"join_leave",children:"join_leave"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"join_leave"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 enable/disable sending join(leave) messages when the client subscribes to a channel (unsubscribes from a channel). Join/leave event includes information about the connection that triggered an event \u2013 client ID, user ID, connection info, and channel info."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Keep in mind that join/leave messages can generate a big number of messages in a system if turned on for channels with a large number of active subscribers. If you have channels with a large number of subscribers consider avoiding using this feature or to scale Centrifugo."})}),"\n",(0,i.jsx)(n.h3,{id:"history_size",children:"history_size"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history_size"})," (integer, default ",(0,i.jsx)(n.code,{children:"0"}),") \u2013 history size (amount of messages) for channels. As Centrifugo keeps all history messages in process memory (or in a broker memory) it's very important to limit the maximum amount of messages in channel history with a reasonable value. ",(0,i.jsx)(n.code,{children:"history_size"})," defines the maximum amount of messages that Centrifugo will keep for ",(0,i.jsx)(n.strong,{children:"each"})," channel in the namespace. As soon as history has more messages than defined by history size \u2013 old messages will be evicted."]}),"\n",(0,i.jsxs)(n.p,{children:["Setting only ",(0,i.jsx)(n.code,{children:"history_size"})," is not enough to enable history in channels \u2013 you also need to wisely configure ",(0,i.jsx)(n.code,{children:"history_ttl"})," option (see below)."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Enabling channel history adds some overhead (both memory and CPU) since Centrifugo needs to maintain an additional data structure (in a process memory or a broker memory/disk)."})}),"\n",(0,i.jsx)(n.h3,{id:"history_ttl",children:"history_ttl"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history_ttl"})," (",(0,i.jsx)(n.a,{href:"/docs/3/server/configuration#setting-time-duration-options",children:"duration"}),", default ",(0,i.jsx)(n.code,{children:"0s"}),") \u2013 interval how long to keep channel history messages (with seconds precision)."]}),"\n",(0,i.jsx)(n.p,{children:"As all history is storing in process memory (or in a broker memory) it is also very important to get rid of old history data for unused (inactive for a long time) channels."}),"\n",(0,i.jsx)(n.p,{children:"By default history TTL duration is zero \u2013 this means that channel history is disabled."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Again \u2013 to turn on history you should wisely configure both ",(0,i.jsx)(n.code,{children:"history_size"})," and ",(0,i.jsx)(n.code,{children:"history_ttl"})," options"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example for top-level channels (which do not belong to a namespace):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "history_size": 10,\n    "history_ttl": "60s"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"position",children:"position"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"position"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 when the ",(0,i.jsx)(n.code,{children:"position"})," feature is on Centrifugo tries to compensate at most once delivery of PUB/SUB messages checking client position inside a stream."]}),"\n",(0,i.jsxs)(n.p,{children:["If Centrifugo detects a bad position of the client (i.e. potential message loss) it disconnects a client with the ",(0,i.jsx)(n.code,{children:"Insufficient state"})," disconnect code. Also, when the position option is enabled Centrifugo exposes the current stream top ",(0,i.jsx)(n.code,{children:"offset"})," and current ",(0,i.jsx)(n.code,{children:"epoch"})," in subscribe reply making it possible for a client to manually recover its state upon disconnect using history API."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"position"})," option must be used in conjunction with reasonably configured message history for a channel i.e. ",(0,i.jsx)(n.code,{children:"history_size"})," and ",(0,i.jsx)(n.code,{children:"history_ttl"})," ",(0,i.jsx)(n.strong,{children:"must be set"})," (because Centrifugo uses channel history to check client position in a stream)."]}),"\n",(0,i.jsx)(n.h3,{id:"recover",children:"recover"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recover"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 when enabled Centrifugo will try to recover missed publications after a client reconnects for some reason (bad internet connection for example). Also when the recovery feature is on Centrifugo automatically enables properties of the ",(0,i.jsx)(n.code,{children:"position"})," option described above."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recover"})," option must be used in conjunction with reasonably configured message history for channel i.e. ",(0,i.jsx)(n.code,{children:"history_size"})," and ",(0,i.jsx)(n.code,{children:"history_ttl"})," ",(0,i.jsx)(n.strong,{children:"must be set"})," (because Centrifugo uses channel history to recover messages)."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, note that not all real-time events require this feature turned on so think wisely when you need this. When this option is turned on your application should be designed in a way to tolerate duplicate messages coming from a channel (currently Centrifugo returns recovered publications in order and without duplicates but this is an implementation detail that can be theoretically changed in the future). See more details about how recovery works in ",(0,i.jsx)(n.a,{href:"/docs/3/server/history_and_recovery",children:"special chapter"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"history_disable_for_client",children:"history_disable_for_client"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history_disable_for_client"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 allows making history available only for a server-side API. By default ",(0,i.jsx)(n.code,{children:"false"})," \u2013 i.e. history calls are available for both client and server-side APIs."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["History recovery mechanism if enabled will continue to work for clients anyway even if ",(0,i.jsx)(n.code,{children:"history_disable_for_client"})," is on."]})}),"\n",(0,i.jsx)(n.h3,{id:"protected",children:"protected"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"protected"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 when on will prevent a client to subscribe to arbitrary channels in a namespace. In this case, Centrifugo will only allow a client to subscribe on user-limited channels, on channels returned by the proxy response, or channels listed inside JWT. Client-side subscriptions to arbitrary channels will be rejected with PermissionDenied error. Server-side channels belonging to the protected namespace passed by the client itself during connect will be ignored."]}),"\n",(0,i.jsx)(n.h3,{id:"proxy_subscribe",children:"proxy_subscribe"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"proxy_subscribe"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 turns on subscribe proxy, more info in ",(0,i.jsx)(n.a,{href:"/docs/3/server/proxy",children:"proxy chapter"})]}),"\n",(0,i.jsx)(n.h3,{id:"proxy_publish",children:"proxy_publish"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"proxy_publish"})," (boolean, default ",(0,i.jsx)(n.code,{children:"false"}),") \u2013 turns on publish proxy, more info in ",(0,i.jsx)(n.a,{href:"/docs/3/server/proxy",children:"proxy chapter"})]}),"\n",(0,i.jsx)(n.h3,{id:"subscribe_proxy_name",children:"subscribe_proxy_name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"subscribe_proxy_name"})," (string, default ",(0,i.jsx)(n.code,{children:'""'}),") \u2013 turns on subscribe proxy when ",(0,i.jsx)(n.a,{href:"/docs/3/server/proxy#granular-proxy-mode",children:"granular proxy mode"})," is used. Note that ",(0,i.jsx)(n.code,{children:"proxy_subscribe"})," option defined above is ignored in granular proxy mode."]}),"\n",(0,i.jsx)(n.h3,{id:"publish_proxy_name",children:"publish_proxy_name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"publish_proxy_name"})," (string, default ",(0,i.jsx)(n.code,{children:'""'}),") \u2013 turns on publish proxy when ",(0,i.jsx)(n.a,{href:"/docs/3/server/proxy#granular-proxy-mode",children:"granular proxy mode"})," is used. Note that ",(0,i.jsx)(n.code,{children:"proxy_publish"})," option defined above is ignored in granular proxy mode."]}),"\n",(0,i.jsx)(n.h2,{id:"channel-options-config-example",children:"Channel options config example"}),"\n",(0,i.jsx)(n.p,{children:"Let's look at how to set some of these options in a config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    "token_hmac_secret_key": "my-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "subscribe_to_publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_ttl": "300s",\n    "recover": true\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here we set channel options on config top-level \u2013 these options will affect channels without namespace. Below we describe namespaces and how to define channel options for a namespace."}),"\n",(0,i.jsx)(n.h2,{id:"channel-namespaces",children:"Channel namespaces"}),"\n",(0,i.jsx)(n.p,{children:"It's possible to configure a list of channel namespaces. Namespaces are optional but very useful."}),"\n",(0,i.jsx)(n.p,{children:"A namespace allows setting custom options for channels starting with the namespace name. This provides great control over channel behavior so you have a flexible way to define different channel options for different real-time features in the application."}),"\n",(0,i.jsx)(n.p,{children:"Namespace has a name, and the same channel options (with the same defaults) as described above."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - unique namespace name (name must consist of letters, numbers, underscores, or hyphens and be more than 2 symbols length i.e. satisfy regexp ",(0,i.jsx)(n.code,{children:"^[-a-zA-Z0-9_]{2,}$"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use namespace options for a channel - you must include namespace name into channel name with ",(0,i.jsx)(n.code,{children:":"})," as a separator:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"public:messages"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"gossips:messages"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"public"})," and ",(0,i.jsx)(n.code,{children:"gossips"})," are namespace names. Centrifugo will look for ",(0,i.jsx)(n.code,{children:":"})," symbol in the channel name, will extract the namespace name, and will apply namespace options whenever required."]}),"\n",(0,i.jsxs)(n.p,{children:["All things together here is an example of ",(0,i.jsx)(n.code,{children:"config.json"})," which includes some top-level channel options set and has 2 additional channel namespaces configured:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    "token_hmac_secret_key": "very-long-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_ttl": "30s",\n    "namespaces": [\n        {\n          "name": "public",\n          "publish": true,\n          "anonymous": true,\n          "history_size": 10,\n          "history_ttl": "300s",\n          "recover": true\n        },\n        {\n          "name": "gossips",\n          "presence": true,\n          "join_leave": true\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"news"})," will use globally defined channel options."]}),"\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"public:news"})," will use ",(0,i.jsx)(n.code,{children:"public"})," namespace options."]}),"\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"gossips:news"})," will use ",(0,i.jsx)(n.code,{children:"gossips"})," namespace options."]}),"\n",(0,i.jsxs)(n.li,{children:["Channel ",(0,i.jsx)(n.code,{children:"xxx:hello"})," will result into subscription error since there is no ",(0,i.jsx)(n.code,{children:"xxx"})," namespace defined in configuration above."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Channel namespaces also work with private channels and user-limited channels"}),". For example, if you have a namespace called ",(0,i.jsx)(n.code,{children:"dialogs"})," then the private channel can be constructed as ",(0,i.jsx)(n.code,{children:"$dialogs:gossips"}),", user-limited channel can be constructed as ",(0,i.jsx)(n.code,{children:"dialogs:dialog#1,2"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["There is no inheritance in channel options and namespaces \u2013 for example, you defined ",(0,i.jsx)(n.code,{children:"presence: true"})," on a top level of configuration and then defined a namespace \u2013 that namespace won't have online presence enabled - you must enable it for a namespace explicitly."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(67294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);