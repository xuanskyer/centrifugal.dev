"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5069],{47262:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(85893),t=s(11151);const r={id:"engines",title:"Engines and scalability"},o=void 0,a={id:"server/engines",title:"Engines and scalability",description:"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve online presence and history data.",source:"@site/docs/server/engines.md",sourceDirName:"server",slug:"/server/engines",permalink:"/docs/server/engines",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/engines.md",tags:[],version:"current",frontMatter:{id:"engines",title:"Engines and scalability"},sidebar:"Guides",previous:{title:"Server-side subscriptions",permalink:"/docs/server/server_subs"},next:{title:"History and recovery",permalink:"/docs/server/history_and_recovery"}},l={},d=[{value:"Memory engine",id:"memory-engine",level:2},{value:"Memory engine options",id:"memory-engine-options",level:3},{value:"history_meta_ttl",id:"history_meta_ttl",level:4},{value:"Redis engine",id:"redis-engine",level:2},{value:"Redis engine options",id:"redis-engine-options",level:3},{value:"redis_address",id:"redis_address",level:4},{value:"redis_password",id:"redis_password",level:4},{value:"redis_user",id:"redis_user",level:4},{value:"redis_db",id:"redis_db",level:4},{value:"redis_prefix",id:"redis_prefix",level:4},{value:"redis_use_lists",id:"redis_use_lists",level:4},{value:"redis_force_resp2",id:"redis_force_resp2",level:4},{value:"history_meta_ttl",id:"history_meta_ttl-1",level:4},{value:"Configuring Redis TLS",id:"configuring-redis-tls",level:3},{value:"redis_tls",id:"redis_tls",level:4},{value:"redis_tls_insecure_skip_verify",id:"redis_tls_insecure_skip_verify",level:4},{value:"redis_tls_cert",id:"redis_tls_cert",level:4},{value:"redis_tls_key",id:"redis_tls_key",level:4},{value:"redis_tls_root_ca",id:"redis_tls_root_ca",level:4},{value:"redis_tls_server_name",id:"redis_tls_server_name",level:4},{value:"Scaling with Redis tutorial",id:"scaling-with-redis-tutorial",level:3},{value:"Redis Sentinel for high availability",id:"redis-sentinel-for-high-availability",level:3},{value:"Redis Sentinel TLS",id:"redis-sentinel-tls",level:3},{value:"redis_sentinel_tls",id:"redis_sentinel_tls",level:4},{value:"redis_sentinel_tls_insecure_skip_verify",id:"redis_sentinel_tls_insecure_skip_verify",level:4},{value:"redis_sentinel_tls_cert",id:"redis_sentinel_tls_cert",level:4},{value:"redis_sentinel_tls_key",id:"redis_sentinel_tls_key",level:4},{value:"redis_sentinel_tls_root_ca",id:"redis_sentinel_tls_root_ca",level:4},{value:"redis_sentinel_tls_server_name",id:"redis_sentinel_tls_server_name",level:4},{value:"Haproxy instead of Sentinel configuration",id:"haproxy-instead-of-sentinel-configuration",level:3},{value:"Redis sharding",id:"redis-sharding",level:3},{value:"Redis cluster",id:"redis-cluster",level:3},{value:"Other Redis compatible",id:"other-redis-compatible",level:2},{value:"Tarantool engine",id:"tarantool-engine",level:2},{value:"Tarantool engine options",id:"tarantool-engine-options",level:3},{value:"tarantool_address",id:"tarantool_address",level:4},{value:"tarantool_mode",id:"tarantool_mode",level:4},{value:"tarantool_user",id:"tarantool_user",level:4},{value:"tarantool_password",id:"tarantool_password",level:4},{value:"history_meta_ttl",id:"history_meta_ttl-2",level:4},{value:"Nats broker",id:"nats-broker",level:2},{value:"Options",id:"options",level:3},{value:"nats_url",id:"nats_url",level:4},{value:"nats_prefix",id:"nats_prefix",level:4},{value:"nats_dial_timeout",id:"nats_dial_timeout",level:4},{value:"nats_write_timeout",id:"nats_write_timeout",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve online presence and history data."}),"\n",(0,i.jsx)(n.p,{children:"By default, Centrifugo uses a Memory engine. There are also Redis, KeyDB, Tarantool engines available. And Nats broker which also supports at most once PUB/SUB."}),"\n",(0,i.jsx)(n.p,{children:"With default Memory engine you can start only one node of Centrifugo, while other engines allow running several nodes on different machines to scale client connections and for Centrifugo node high availability. In distributed case all Centrifugo nodes will be connected via broker PUB/SUB, will discover each other and deliver publications to the node where active channel subscribers exist."}),"\n",(0,i.jsx)(n.p,{children:"Memory engine keeps history and presence data in process memory, so the data is lost upon server restart. When using Redis Engine the data is kept in Redis (where you can configure desired persistence properties) instead of Centrifugo node process memory, so channel history data won't be lost after Centrifugo server restart."}),"\n",(0,i.jsxs)(n.p,{children:["To set engine you can use ",(0,i.jsx)(n.code,{children:"engine"})," configuration option. Available values are ",(0,i.jsx)(n.code,{children:"memory"}),", ",(0,i.jsx)(n.code,{children:"redis"}),", ",(0,i.jsx)(n.code,{children:"tarantool"}),". The default value is ",(0,i.jsx)(n.code,{children:"memory"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example to work with Redis engine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "redis"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"memory-engine",children:"Memory engine"}),"\n",(0,i.jsx)(n.p,{children:"Used by default. Supports only one node. Nice choice to start with. Supports all features keeping everything in Centrifugo node process memory. You don't need to install Redis when using this engine."}),"\n",(0,i.jsx)(n.p,{children:"Advantages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Super fast since it does not involve network at all"}),"\n",(0,i.jsx)(n.li,{children:"Does not require separate broker setup"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Disadvantages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Does not allow scaling nodes (actually you still can scale Centrifugo with Memory engine but you have to publish data into each Centrifugo node and you won't have consistent history and presence state throughout Centrifugo nodes)"}),"\n",(0,i.jsx)(n.li,{children:"Does not persist message history in channels between Centrifugo restarts."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"memory-engine-options",children:"Memory engine options"}),"\n",(0,i.jsx)(n.h4,{id:"history_meta_ttl",children:"history_meta_ttl"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/server/configuration#setting-time-duration-options",children:"Duration"}),", default ",(0,i.jsx)(n.code,{children:"2160h"})," (90 days)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history_meta_ttl"})," sets a time of history stream metadata expiration."]}),"\n",(0,i.jsx)(n.p,{children:"When using a history in a channel, Centrifugo keeps some metadata for it. Metadata includes the latest stream offset and its epoch value. In some cases, when channels are created for \u0430 short time and then not used anymore, created metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory growth. Setting a reasonable value to this option can help to expire metadata faster (or slower if you need it). The rule of thumb here is to keep this value much bigger than maximum history TTL used in Centrifugo configuration."}),"\n",(0,i.jsx)(n.h2,{id:"redis-engine",children:"Redis engine"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," is an open-source, in-memory data structure store, used as a database, cache, and message broker."]}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo Redis engine allows scaling Centrifugo nodes to different machines. Nodes will use Redis as a message broker (utilizing Redis PUB/SUB for node communication) and keep presence and history data in Redis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Minimal Redis version is 5.0.1"})}),"\n",(0,i.jsx)(n.p,{children:"With Redis it's possible to come to the architecture like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"redis",src:s(58061).Z+"",width:"1660",height:"987"})}),"\n",(0,i.jsx)(n.h3,{id:"redis-engine-options",children:"Redis engine options"}),"\n",(0,i.jsx)(n.p,{children:"Several configuration options related to Redis engine."}),"\n",(0,i.jsx)(n.h4,{id:"redis_address",children:"redis_address"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'"127.0.0.1:6379"'})," - Redis server address."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_password",children:"redis_password"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," - Redis password."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_user",children:"redis_user"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," - Redis user for ",(0,i.jsx)(n.a,{href:"https://redis.io/docs/manual/security/acl/",children:"ACL-based"})," auth."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_db",children:"redis_db"}),"\n",(0,i.jsxs)(n.p,{children:["Integer, default ",(0,i.jsx)(n.code,{children:"0"})," - number of Redis db to use."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_prefix",children:"redis_prefix"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'"centrifugo"'})," \u2013 custom prefix to use for channels and keys in Redis."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_use_lists",children:"redis_use_lists"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"})," \u2013 turns on using Redis Lists instead of Stream data structure for keeping history (not recommended, keeping this for backwards compatibility mostly)."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_force_resp2",children:"redis_force_resp2"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"}),". If set to true it forces using RESP2 protocol for communicating with Redis. By default, Redis client used by Centrifugo tries to detect supported Redis protocol automatically trying RESP3 first."]}),"\n",(0,i.jsx)(n.h4,{id:"history_meta_ttl-1",children:"history_meta_ttl"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/server/configuration#setting-time-duration-options",children:"Duration"}),", default ",(0,i.jsx)(n.code,{children:"2160h"})," (90 days)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history_meta_ttl"})," sets a time of history stream metadata expiration."]}),"\n",(0,i.jsxs)(n.p,{children:["Similar to a Memory engine Redis engine also looks at ",(0,i.jsx)(n.code,{children:"history_meta_ttl"})," option. Meta key in Redis is a HASH that contains the current offset number in channel and the stream epoch value."]}),"\n",(0,i.jsx)(n.p,{children:"When using a history in a channel, Centrifugo saves metadata for it. Metadata includes the latest stream offset and its epoch value. In some cases, when channels are created for \u0430 short time and then not used anymore, created metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory growth. Setting a reasonable value to this option can help. The rule of thumb here is to keep this value much bigger than maximum history TTL used in Centrifugo configuration."}),"\n",(0,i.jsx)(n.h3,{id:"configuring-redis-tls",children:"Configuring Redis TLS"}),"\n",(0,i.jsx)(n.p,{children:"Some options may help you configuring TLS-protected communication between Centrifugo and Redis."}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls",children:"redis_tls"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"})," - enable Redis TLS connection."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls_insecure_skip_verify",children:"redis_tls_insecure_skip_verify"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"})," - disable Redis TLS host verification. Centrifugo v4 also supports alias for this option \u2013 ",(0,i.jsx)(n.code,{children:"redis_tls_skip_verify"})," \u2013 but it will be removed in v5."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls_cert",children:"redis_tls_cert"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS cert file. If you prefer passing certificate as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_tls_cert_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls_key",children:"redis_tls_key"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS key file.  If you prefer passing cert key as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_tls_key_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls_root_ca",children:"redis_tls_root_ca"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS root CA file (in PEM format) to use. If you prefer passing root CA PEM as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_tls_root_ca_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_tls_server_name",children:"redis_tls_server_name"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 used to verify the hostname on the returned certificates. It is also included in the client's handshake to support virtual hosting unless it is an IP address."]}),"\n",(0,i.jsx)(n.h3,{id:"scaling-with-redis-tutorial",children:"Scaling with Redis tutorial"}),"\n",(0,i.jsx)(n.p,{children:"Let's see how to start several Centrifugo nodes using the Redis Engine. We will start 3 Centrifugo nodes and all those nodes will be connected via Redis."}),"\n",(0,i.jsx)(n.p,{children:"First, you should have Redis running. As soon as it's running - we can launch 3 Centrifugo instances. Open your terminal and start the first one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"centrifugo --config=config.json --port=8000 --engine=redis --redis_address=127.0.0.1:6379\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your Redis is on the same machine and runs on its default port you can omit ",(0,i.jsx)(n.code,{children:"redis_address"})," option in the command above."]}),"\n",(0,i.jsx)(n.p,{children:"Then open another terminal and start another Centrifugo instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"centrifugo --config=config.json --port=8001 --engine=redis --redis_address=127.0.0.1:6379\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that we use another port number (",(0,i.jsx)(n.code,{children:"8001"}),") as port 8000 is already busy by our first Centrifugo instance. If you are starting Centrifugo instances on different machines then you most probably can use\nthe same port number (",(0,i.jsx)(n.code,{children:"8000"})," or whatever you want) for all instances."]}),"\n",(0,i.jsx)(n.p,{children:"And finally, let's start the third instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"centrifugo --config=config.json --port=8002 --engine=redis --redis_address=127.0.0.1:6379\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you have 3 Centrifugo instances running on ports 8000, 8001, 8002 and clients can connect to any of them. You can also send API requests to any of those nodes \u2013 as all nodes connected over Redis PUB/SUB message will be delivered to all interested clients on all nodes."}),"\n",(0,i.jsx)(n.p,{children:"To load balance clients between nodes you can use Nginx \u2013 you can find its configuration here in the documentation."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In the production environment you will most probably run Centrifugo nodes on different hosts, so there will be no need to use different ",(0,i.jsx)(n.code,{children:"port"})," numbers."]})}),"\n",(0,i.jsx)(n.p,{children:"Here is a live example where we locally start two Centrifugo nodes both connected to local Redis:"}),"\n",(0,i.jsxs)("video",{width:"100%",controls:!0,children:[(0,i.jsx)("source",{src:"/img/redis_scale_example.mp4",type:"video/mp4"}),(0,i.jsx)(n.p,{children:"Sorry, your browser doesn't support embedded video."})]}),"\n",(0,i.jsx)(n.h3,{id:"redis-sentinel-for-high-availability",children:"Redis Sentinel for high availability"}),"\n",(0,i.jsxs)(n.p,{children:["Centrifugo supports the official way to add high availability to Redis - Redis ",(0,i.jsx)(n.a,{href:"http://redis.io/topics/sentinel",children:"Sentinel"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For this you only need to utilize 2 Redis Engine options: ",(0,i.jsx)(n.code,{children:"redis_sentinel_address"})," and ",(0,i.jsx)(n.code,{children:"redis_sentinel_master_name"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redis_sentinel_address"})," (string, default ",(0,i.jsx)(n.code,{children:'""'}),") - comma separated list of Sentinel addresses for HA. At least one known server required."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redis_sentinel_master_name"})," (string, default ",(0,i.jsx)(n.code,{children:'""'}),") - name of Redis master Sentinel monitors"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Also:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redis_sentinel_password"})," \u2013 optional string password for your Sentinel, works with Redis Sentinel >= 5.0.1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redis_sentinel_user"})," - optional string user (used only in Redis ACL-based auth)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So you can start Centrifugo which will use Sentinels to discover Redis master instances like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"centrifugo --config=config.json\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where config.json:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "redis",\n    "redis_sentinel_address": "127.0.0.1:26379",\n    "redis_sentinel_master_name": "mymaster"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sentinel configuration file may look like this (for 3-node Sentinel setup with quorum 2):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"port 26379\nsentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 10000\nsentinel failover-timeout mymaster 60000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find how to properly set up Sentinels ",(0,i.jsx)(n.a,{href:"http://redis.io/topics/sentinel",children:"in official documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note that when your Redis master instance is down there will be a small downtime interval until Sentinels\ndiscover a problem and come to a quorum decision about a new master. The length of this period depends on\nSentinel configuration."}),"\n",(0,i.jsx)(n.h3,{id:"redis-sentinel-tls",children:"Redis Sentinel TLS"}),"\n",(0,i.jsx)(n.p,{children:"To configure TLS for Redis Sentinel use the following options."}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls",children:"redis_sentinel_tls"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"})," - enable Redis TLS connection."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls_insecure_skip_verify",children:"redis_sentinel_tls_insecure_skip_verify"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean, default ",(0,i.jsx)(n.code,{children:"false"})," - disable Redis TLS host verification. Centrifugo v4 also supports alias for this option \u2013 ",(0,i.jsx)(n.code,{children:"redis_sentinel_tls_skip_verify"})," \u2013 but it will be removed in v5."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls_cert",children:"redis_sentinel_tls_cert"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS cert file. If you prefer passing certificate as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_sentinel_tls_cert_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls_key",children:"redis_sentinel_tls_key"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS key file.  If you prefer passing cert key as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_sentinel_tls_key_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls_root_ca",children:"redis_sentinel_tls_root_ca"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 path to TLS root CA file (in PEM format) to use. If you prefer passing root CA PEM as a string instead of path to the file then use ",(0,i.jsx)(n.code,{children:"redis_sentinel_tls_root_ca_pem"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"redis_sentinel_tls_server_name",children:"redis_sentinel_tls_server_name"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'})," \u2013 used to verify the hostname on the returned certificates. It is also included in the client's handshake to support virtual hosting unless it is an IP address."]}),"\n",(0,i.jsx)(n.h3,{id:"haproxy-instead-of-sentinel-configuration",children:"Haproxy instead of Sentinel configuration"}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can use Haproxy between Centrifugo and Redis to let it properly balance traffic to Redis master. In this case, you still need to configure Sentinels but you can omit Sentinel specifics from Centrifugo configuration and just use Redis address as in a simple non-HA case."}),"\n",(0,i.jsx)(n.p,{children:"For example, you can use something like this in Haproxy config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"listen redis\n    server redis-01 127.0.0.1:6380 check port 6380 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2\n    server redis-02 127.0.0.1:6381 check port 6381 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2 backup\n    bind *:16379\n    mode tcp\n    option tcpka\n    option tcplog\n    option tcp-check\n    tcp-check send PING\\r\\n\n    tcp-check expect string +PONG\n    tcp-check send info\\ replication\\r\\n\n    tcp-check expect string role:master\n    tcp-check send QUIT\\r\\n\n    tcp-check expect string +OK\n    balance roundrobin\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then just point Centrifugo to this Haproxy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'centrifugo --config=config.json --engine=redis --redis_address="localhost:16379"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"redis-sharding",children:"Redis sharding"}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo has built-in Redis sharding support."}),"\n",(0,i.jsx)(n.p,{children:"This resolves the situation when Redis becoming a bottleneck on a large Centrifugo setup. Redis is a single-threaded server, it's very fast but its power is not infinite so when your Redis approaches 100% CPU usage then the sharding feature can help your application to scale."}),"\n",(0,i.jsx)(n.p,{children:"At moment Centrifugo supports a simple comma-based approach to configuring Redis shards. Let's just look at examples."}),"\n",(0,i.jsx)(n.p,{children:"To start Centrifugo with 2 Redis shards on localhost running on port 6379 and port 6380 use config like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "127.0.0.1:6379",\n        "127.0.0.1:6380",\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"To start Centrifugo with Redis instances on different hosts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "192.168.1.34:6379",\n        "192.168.1.35:6379",\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you also need to customize AUTH password, Redis DB number then you can use an extended address notation."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Due to how Redis PUB/SUB works it's not possible (and it's pretty useless anyway) to run shards in one Redis instance using different Redis DB numbers."})}),"\n",(0,i.jsxs)(n.p,{children:["When sharding enabled Centrifugo will spread channels and history/presence keys over configured Redis instances using a consistent hashing algorithm. At moment we use Jump consistent hash algorithm (see ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1406.2294.pdf",children:"paper"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/dgryski/go-jump",children:"implementation"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"redis-cluster",children:"Redis cluster"}),"\n",(0,i.jsxs)(n.p,{children:["Running Centrifugo with Redis cluster is simple and can be achieved using ",(0,i.jsx)(n.code,{children:"redis_cluster_address"})," option. This is an array of strings. Each element of the array is a comma-separated Redis cluster seed node. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You don't need to list all Redis cluster nodes in config \u2013 only several working nodes are enough to start."}),"\n",(0,i.jsx)(n.p,{children:"To set the same over environment variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001" CENTRIFUGO_ENGINE=redis ./centrifugo\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you need to shard data between several Redis clusters then simply add one more string with seed nodes of another cluster to this array:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003",\n        "localhost:30101,localhost:30102,localhost:30103"\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Sharding between different Redis clusters can make sense due to the fact how PUB/SUB works in the Redis cluster. It does not scale linearly when adding nodes as all PUB/SUB messages got copied to every cluster node. See ",(0,i.jsx)(n.a,{href:"https://github.com/antirez/redis/issues/2672",children:"this discussion"})," for more information on topic. To spread data between different Redis clusters Centrifugo uses the same consistent hashing algorithm described above (i.e. ",(0,i.jsx)(n.code,{children:"Jump"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["To reproduce the same over environment variable use ",(0,i.jsx)(n.code,{children:"space"})," to separate different clusters:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001,localhost:30002 localhost:30101,localhost:30102" CENTRIFUGO_ENGINE=redis ./centrifugo\n'})}),"\n",(0,i.jsx)(n.h2,{id:"other-redis-compatible",children:"Other Redis compatible"}),"\n",(0,i.jsx)(n.p,{children:"When using Redis engine it's possible to point Centrifugo not only to Redis itself, but also to the other Redis compatible server. Such servers may work just fine if implement Redis protocol and support all the data structures Centrifugo uses and have PUB/SUB implemented."}),"\n",(0,i.jsx)(n.p,{children:"Some known options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://aws.amazon.com/elasticache/",children:"AWS Elasticache"})," \u2013 it was reported to work, but we suggest you testing the setup including failover tests and work under load."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://keydb.dev/",children:"KeyDB"})," \u2013 should work fine with Centrifugo, no known problems at this point regarding Centrifugo compatibility."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://dragonflydb.io/",children:"DragonflyDB"})," - should work fine starting from DragonflyDB 1.3.0 and with ",(0,i.jsx)(n.code,{children:"redis_force_resp2"})," Centrifugo option on. We have not tested a Redis Cluster emulation mode provided by DragonflyDB yet. We suggest you testing the setup including failover tests and work under load."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tarantool-engine",children:"Tarantool engine"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"EXPERIMENTAL"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.tarantool.io",children:"Tarantool"})," is a fast and flexible in-memory storage with different persistence/replication schemes and LuaJIT for writing custom logic on the Tarantool side. It allows implementing Centrifugo engine with unique characteristics."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"EXPERIMENTAL"})," status of Tarantool integration means that we are still going to improve it and there could be breaking changes as integration evolves."]})}),"\n",(0,i.jsxs)(n.p,{children:["There are many ways to operate Tarantool in production and it's hard to distribute Centrifugo Tarantool engine in a way that suits everyone. Centrifugo tries to fit generic case by providing ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/tarantool-centrifuge",children:"centrifugal/tarantool-centrifuge"})," module and by providing ready-to-use ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/rotor",children:"centrifugal/rotor"})," project based on ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/tarantool-centrifuge",children:"centrifugal/tarantool-centrifuge"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/tarantool/cartridge",children:"Tarantool Cartridge"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"To be honest we bet on the community help to push this integration further. Tarantool provides an incredible performance boost for presence and history operations (up to 5x more RPS compared to the Redis Engine) and a pretty fast PUB/SUB (comparable to what Redis Engine provides). Let's see what we can build together."})}),"\n",(0,i.jsx)(n.p,{children:"There are several supported Tarantool topologies to which Centrifugo can connect:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"One standalone Tarantool instance"}),"\n",(0,i.jsx)(n.li,{children:"Many standalone Tarantool instances and consistently shard data between them"}),"\n",(0,i.jsx)(n.li,{children:"Tarantool running in Cartridge"}),"\n",(0,i.jsx)(n.li,{children:"Tarantool with replica and automatic failover in Cartridge"}),"\n",(0,i.jsx)(n.li,{children:"Many Tarantool instances (or leader-follower setup) in Cartridge with consistent client-side sharding between them"}),"\n",(0,i.jsx)(n.li,{children:"Tarantool with synchronous replication (Raft-based, Tarantool >= 2.7)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After running Tarantool you can point Centrifugo to it (and of course scale Centrifugo nodes):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "tarantool",\n    "tarantool_address": "127.0.0.1:3301"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/rotor",children:"centrifugal/rotor"})," repo for ready-to-use engine based on Tarantool Cartridge framework."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/centrifugal/tarantool-centrifuge",children:"centrifugal/tarantool-centrifuge"})," repo for examples on how to run engine with Standalone single Tarantool instance or with Raft-based synchronous replication."]}),"\n",(0,i.jsx)(n.h3,{id:"tarantool-engine-options",children:"Tarantool engine options"}),"\n",(0,i.jsx)(n.h4,{id:"tarantool_address",children:"tarantool_address"}),"\n",(0,i.jsxs)(n.p,{children:["String or array of strings. Default ",(0,i.jsx)(n.code,{children:"tcp://127.0.0.1:3301"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Connection address to Tarantool."}),"\n",(0,i.jsx)(n.h4,{id:"tarantool_mode",children:"tarantool_mode"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:"standalone"})]}),"\n",(0,i.jsxs)(n.p,{children:["A mode how to connect to Tarantool. Default is ",(0,i.jsx)(n.code,{children:"standalone"})," which connects to a single Tarantool instance address. Possible values are: ",(0,i.jsx)(n.code,{children:"leader-follower"})," (connects to a setup with Tarantool master and async replicas) and ",(0,i.jsx)(n.code,{children:"leader-follower-raft"})," (connects to a Tarantool with synchronous Raft-based replication)."]}),"\n",(0,i.jsx)(n.p,{children:"All modes support client-side consistent sharding (similar to what Redis engine provides)."}),"\n",(0,i.jsx)(n.h4,{id:"tarantool_user",children:"tarantool_user"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'}),". Allows setting a user."]}),"\n",(0,i.jsx)(n.h4,{id:"tarantool_password",children:"tarantool_password"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:'""'}),". Allows setting a password."]}),"\n",(0,i.jsx)(n.h4,{id:"history_meta_ttl-2",children:"history_meta_ttl"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/server/configuration#setting-time-duration-options",children:"Duration"}),", default ",(0,i.jsx)(n.code,{children:"2160h"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Same option as for Memory engine and Redis engine also applies to Tarantool case."}),"\n",(0,i.jsx)(n.h2,{id:"nats-broker",children:"Nats broker"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to scale with ",(0,i.jsx)(n.a,{href:"https://nats.io/",children:"Nats"})," PUB/SUB server. Keep in mind, that Nats is called a ",(0,i.jsx)(n.strong,{children:"broker"})," here, ",(0,i.jsx)(n.strong,{children:"not an Engine"})," \u2013 Nats integration only implements PUB/SUB part of Engine, so carefully read limitations below."]}),"\n",(0,i.jsx)(n.p,{children:"Limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nats integration works only for unreliable at most once PUB/SUB. This means that history, presence, and message recovery Centrifugo features won't be available."}),"\n",(0,i.jsxs)(n.li,{children:["Nats wildcard channel subscriptions with symbols ",(0,i.jsx)(n.code,{children:"*"})," and ",(0,i.jsx)(n.code,{children:">"})," not supported."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"First start Nats server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ nats-server\n[3569] 2020/07/08 20:28:44.324269 [INF] Starting nats-server version 2.1.7\n[3569] 2020/07/08 20:28:44.324400 [INF] Git commit [not set]\n[3569] 2020/07/08 20:28:44.325600 [INF] Listening for client connections on 0.0.0.0:4222\n[3569] 2020/07/08 20:28:44.325612 [INF] Server id is NDAM7GEHUXAKS5SGMA3QE6ZSO4IQUJP6EL3G2E2LJYREVMAMIOBE7JT4\n[3569] 2020/07/08 20:28:44.325617 [INF] Server is ready\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then start Centrifugo with ",(0,i.jsx)(n.code,{children:"broker"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"centrifugo --broker=nats --config=config.json\n"})}),"\n",(0,i.jsx)(n.p,{children:"And one more Centrifugo on another port (of course in real life you will start another Centrifugo on another machine):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"centrifugo --broker=nats --config=config.json --port=8001\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you can scale connections over Centrifugo instances, instances will be connected over Nats server."}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h4,{id:"nats_url",children:"nats_url"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:"nats://127.0.0.1:4222"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Connection url in format ",(0,i.jsx)(n.code,{children:"nats://derek:pass@localhost:4222"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"nats_prefix",children:"nats_prefix"}),"\n",(0,i.jsxs)(n.p,{children:["String, default ",(0,i.jsx)(n.code,{children:"centrifugo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Prefix for channels used by Centrifugo inside Nats."}),"\n",(0,i.jsx)(n.h4,{id:"nats_dial_timeout",children:"nats_dial_timeout"}),"\n",(0,i.jsxs)(n.p,{children:["Duration, default ",(0,i.jsx)(n.code,{children:"1s"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Timeout for dialing with Nats."}),"\n",(0,i.jsx)(n.h4,{id:"nats_write_timeout",children:"nats_write_timeout"}),"\n",(0,i.jsxs)(n.p,{children:["Duration, default ",(0,i.jsx)(n.code,{children:"1s"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Write (and flush) timeout for a connection to Nats."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},58061:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/redis_arch-812f437e8d45aeb8ce3f5d9016db4569.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);