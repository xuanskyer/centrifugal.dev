"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5069],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4377:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=["components"],s={id:"engines",title:"Engines, scalability"},l=void 0,d={unversionedId:"server/engines",id:"server/engines",isDocsHomePage:!1,title:"Engines, scalability",description:"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve presence and history data.",source:"@site/docs/server/engines.md",sourceDirName:"server",slug:"/server/engines",permalink:"/docs/server/engines",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/engines.md",version:"current",frontMatter:{id:"engines",title:"Engines, scalability"},sidebar:"Guides",previous:{title:"Server-side subscriptions",permalink:"/docs/server/server_subs"},next:{title:"Proxy to backend",permalink:"/docs/server/proxy"}},p=[{value:"Memory engine",id:"memory-engine",children:[{value:"Options",id:"options",children:[]}]},{value:"Redis engine",id:"redis-engine",children:[{value:"Options",id:"options-1",children:[]},{value:"Scaling with Redis tutorial",id:"scaling-with-redis-tutorial",children:[]},{value:"Redis Sentinel for high availability",id:"redis-sentinel-for-high-availability",children:[]},{value:"Haproxy instead of Sentinel configuration",id:"haproxy-instead-of-sentinel-configuration",children:[]},{value:"Redis sharding",id:"redis-sharding",children:[]},{value:"Redis cluster",id:"redis-cluster",children:[]}]},{value:"KeyDB Engine",id:"keydb-engine",children:[]},{value:"Tarantool engine",id:"tarantool-engine",children:[{value:"Options",id:"options-2",children:[]}]},{value:"Nats broker",id:"nats-broker",children:[{value:"Options",id:"options-3",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve presence and history data."),(0,o.kt)("p",null,"By default, Centrifugo uses a Memory engine. There are also Redis, KeyDB, Tarantool engines available. And Nats broker which also supports at most once PUB/SUB."),(0,o.kt)("p",null,"The difference between them - with Memory engine you can start only one node of Centrifugo, while Redis engine allows running several nodes on different machines and they all will be connected via PUB/SUB, will know about each other and will also keep history and presence data in Redis instead of Centrifugo node process memory so this data can be accessed from each node and won't be lost after Centrifugo server restart."),(0,o.kt)("p",null,"To set engine you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"engine")," configuration option. Available values are ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redis"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tarantool"),". The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),"."),(0,o.kt)("p",null,"For example to work with Redis engine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis"\n}\n')),(0,o.kt)("h2",{id:"memory-engine"},"Memory engine"),(0,o.kt)("p",null,"Used by default. Supports only one node. Nice choice to start with. Supports all features keeping everything in Centrifugo node process memory. You don't need to install Redis when using this engine."),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Super fast since it does not involve network at all"),(0,o.kt)("li",{parentName:"ul"},"Does not require separate broker setup")),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does not allow scaling nodes (actually you still can scale Centrifugo with Memory engine but you have to publish data into each Centrifugo node and you won't have consistent history and presence state throughout Centrifugo nodes)"),(0,o.kt)("li",{parentName:"ul"},"Does not persist message history in channels between Centrifugo restarts")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"history_meta_ttl"},"history_meta_ttl"),(0,o.kt)("p",null,"Duration, default ",(0,o.kt)("inlineCode",{parentName:"p"},"0s"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," sets a time in seconds of history stream metadata expiration. Stream metadata is information about the current offset number in the channel and epoch value. By default, metadata for channels does not expire. Though in some cases \u2013 when channels are created for \u0430 short time and then not used anymore \u2013 created metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory leak. Setting a reasonable value to this option (usually much bigger than the history retention period) can help. In this case, unused channel metadata will eventually expire."),(0,o.kt)("h2",{id:"redis-engine"},"Redis engine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis")," is an open-source, in-memory data structure store, used as a database, cache, and message broker."),(0,o.kt)("p",null,"Centrifugo Redis engine allows scaling Centrifugo nodes to different machines. Nodes will use Redis as a message broker (utilizing Redis PUB/SUB for node communication) and keep presence and history data in Redis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minimal Redis version is 5.0.1")),(0,o.kt)("h3",{id:"options-1"},"Options"),(0,o.kt)("p",null,"Several configuration options related to Redis engine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_address")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'"127.0.0.1:6379"'),") - Redis server address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_password")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - Redis password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_db")," (int, default ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),") - number of Redis db to use"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_tls")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),") - enable Redis TLS connection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_tls_skip_verify")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),") - disable Redis TLS host verification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_prefix")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'"centrifugo"'),") \u2013 custom prefix to use for channels and keys in Redis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_use_lists")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),") \u2013 turns on using Redis Lists instead of Stream data structure for keeping history (not recommended, keeping this for backwards compatibility mostly).")),(0,o.kt)("p",null,"Similar to a Memory engine Redis engine also looks at ",(0,o.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," option (int, default ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),") - which sets a time in seconds of history stream metadata expiration in Redis Engine. Meta key in Redis is a HASH that contains the current offset number in channel and epoch value. By default, metadata for channels does not expire. Though in some cases \u2013 when channels are created for \u0430 short time and then not used anymore \u2013 created stream metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory leak. Setting a reasonable value to this option (usually much bigger than the history retention period) can help. In this case, unused channel metadata will eventually expire."),(0,o.kt)("h3",{id:"scaling-with-redis-tutorial"},"Scaling with Redis tutorial"),(0,o.kt)("p",null,"Let's see how to start several Centrifugo nodes using the Redis Engine. We will start 3 Centrifugo nodes and all those nodes will be connected via Redis."),(0,o.kt)("p",null,"First, you should have Redis running. As soon as it's running - we can launch 3 Centrifugo instances. Open your terminal and start the first one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8000 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"If your Redis is on the same machine and runs on its default port you can omit ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_address")," option in the command above."),(0,o.kt)("p",null,"Then open another terminal and start another Centrifugo instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8001 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"Note that we use another port number (",(0,o.kt)("inlineCode",{parentName:"p"},"8001"),") as port 8000 is already busy by our first Centrifugo instance. If you are starting Centrifugo instances on different machines then you most probably can use\nthe same port number (",(0,o.kt)("inlineCode",{parentName:"p"},"8000")," or whatever you want) for all instances."),(0,o.kt)("p",null,"And finally, let's start the third instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8002 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"Now you have 3 Centrifugo instances running on ports 8000, 8001, 8002 and clients can connect to any of them. You can also send API requests to any of those nodes \u2013 as all nodes connected over Redis PUB/SUB message will be delivered to all interested clients on all nodes."),(0,o.kt)("p",null,"To load balance clients between nodes you can use Nginx \u2013 you can find its configuration here in the documentation."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the production environment you will most probably run Centrifugo nodes on different hosts, so there will be no need to use different ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," numbers. "))),(0,o.kt)("p",null,"Here is a live example where we locally start two Centrifugo nodes both connected to local Redis:"),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/img/redis_scale_example.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,o.kt)("h3",{id:"redis-sentinel-for-high-availability"},"Redis Sentinel for high availability"),(0,o.kt)("p",null,"Centrifugo supports the official way to add high availability to Redis - Redis ",(0,o.kt)("a",{parentName:"p",href:"http://redis.io/topics/sentinel"},"Sentinel"),"."),(0,o.kt)("p",null,"For this you only need to utilize 2 Redis Engine options: ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_sentinel_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_sentinel_master_name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_address")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - comma separated list of Sentinel addresses for HA. At least one known server required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_master_name")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - name of Redis master Sentinel monitors")),(0,o.kt)("p",null,"Also:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"redis_sentinel_password")," \u2013 optional string password for your Sentinel, works with Redis Sentinel >= 5.0.1"),(0,o.kt)("p",null,"So you can start Centrifugo which will use Sentinels to discover Redis master instances like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json\n")),(0,o.kt)("p",null,"Where config.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_sentinel_address": "127.0.0.1:26379",\n    "redis_sentinel_master_name": "mymaster"\n}\n')),(0,o.kt)("p",null,"Sentinel configuration files can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"port 26379\nsentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 10000\nsentinel failover-timeout mymaster 60000\n")),(0,o.kt)("p",null,"You can find how to properly set up Sentinels ",(0,o.kt)("a",{parentName:"p",href:"http://redis.io/topics/sentinel"},"in official documentation"),"."),(0,o.kt)("p",null,"Note that when your Redis master instance is down there will be a small downtime interval until Sentinels\ndiscover a problem and come to a quorum decision about a new master. The length of this period depends on\nSentinel configuration."),(0,o.kt)("h3",{id:"haproxy-instead-of-sentinel-configuration"},"Haproxy instead of Sentinel configuration"),(0,o.kt)("p",null,"Alternatively, you can use Haproxy between Centrifugo and Redis to let it properly balance traffic to Redis master. In this case, you still need to configure Sentinels but you can omit Sentinel specifics from Centrifugo configuration and just use Redis address as in a simple non-HA case."),(0,o.kt)("p",null,"For example, you can use something like this in Haproxy config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"listen redis\n    server redis-01 127.0.0.1:6380 check port 6380 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2\n    server redis-02 127.0.0.1:6381 check port 6381 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2 backup\n    bind *:16379\n    mode tcp\n    option tcpka\n    option tcplog\n    option tcp-check\n    tcp-check send PING\\r\\n\n    tcp-check expect string +PONG\n    tcp-check send info\\ replication\\r\\n\n    tcp-check expect string role:master\n    tcp-check send QUIT\\r\\n\n    tcp-check expect string +OK\n    balance roundrobin\n")),(0,o.kt)("p",null,"And then just point Centrifugo to this Haproxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'centrifugo --config=config.json --engine=redis --redis_address="localhost:16379"\n')),(0,o.kt)("h3",{id:"redis-sharding"},"Redis sharding"),(0,o.kt)("p",null,"Centrifugo has built-in Redis sharding support."),(0,o.kt)("p",null,"This resolves the situation when Redis becoming a bottleneck on a large Centrifugo setup. Redis is a single-threaded server, it's very fast but its power is not infinite so when your Redis approaches 100% CPU usage then the sharding feature can help your application to scale."),(0,o.kt)("p",null,"At moment Centrifugo supports a simple comma-based approach to configuring Redis shards. Let's just look at examples."),(0,o.kt)("p",null,"To start Centrifugo with 2 Redis shards on localhost running on port 6379 and port 6380 use config like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "127.0.0.1:6379",\n        "127.0.0.1:6379",\n    ]\n}\n')),(0,o.kt)("p",null,"To start Centrifugo with Redis instances on different hosts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "192.168.1.34:6379",\n        "192.168.1.35:6379",\n    ]\n}\n')),(0,o.kt)("p",null,"If you also need to customize AUTH password, Redis DB number then you can use an extended address notation."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to how Redis PUB/SUB works it's not possible (and it's pretty useless anyway) to run shards in one Redis instance using different Redis DB numbers."))),(0,o.kt)("p",null,"When sharding enabled Centrifugo will spread channels and history/presence keys over configured Redis instances using a consistent hashing algorithm. At moment we use Jump consistent hash algorithm (see ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1406.2294.pdf"},"paper")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dgryski/go-jump"},"implementation"),")."),(0,o.kt)("h3",{id:"redis-cluster"},"Redis cluster"),(0,o.kt)("p",null,"Running Centrifugo with Redis cluster is simple and can be achieved using ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_cluster_address")," option. This is an array of strings. Each element of the array is a comma-separated Redis cluster seed node. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003"\n    ]\n}\n')),(0,o.kt)("p",null,"You don't need to list all Redis cluster nodes in config \u2013 only several working nodes are enough to start."),(0,o.kt)("p",null,"To set the same over environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001" CENTRIFUGO_ENGINE=redis ./centrifugo\n')),(0,o.kt)("p",null,"If you need to shard data between several Redis clusters then simply add one more string with seed nodes of another cluster to this array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003",\n        "localhost:30101,localhost:30102,localhost:30103"\n    ]\n}\n')),(0,o.kt)("p",null,"Sharding between different Redis clusters can make sense due to the fact how PUB/SUB works in the Redis cluster. It does not scale linearly when adding nodes as all PUB/SUB messages got copied to every cluster node. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antirez/redis/issues/2672"},"this discussion")," for more information on topic. To spread data between different Redis clusters Centrifugo uses the same consistent hashing algorithm described above (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Jump"),")."),(0,o.kt)("p",null,"To reproduce the same over environment variable use ",(0,o.kt)("inlineCode",{parentName:"p"},"space")," to separate different clusters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001,localhost:30002 localhost:30101,localhost:30102" CENTRIFUGO_ENGINE=redis ./centrifugo\n')),(0,o.kt)("h2",{id:"keydb-engine"},"KeyDB Engine"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")),(0,o.kt)("p",null,"Centrifugo Redis engine seamlessly works with ",(0,o.kt)("a",{parentName:"p",href:"https://keydb.dev/"},"KeyDB"),". KeyDB server is compatible with Redis and provides several additional features beyond. "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We can't give any promises about compatibility with KeyDB in the future Centrifugo releases - while KeyDB is fully compatible with Redis things should work just fine. That's why we consider this as ",(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")," feature."))),(0,o.kt)("p",null,"Use KeyDB instead of Redis only if you are sure you need it. Nothing stops you from running several Redis instances per each core you have, configure sharding, and obtain even better performance than KeyDB can provide (due to lack of synchronization between threads in Redis)."),(0,o.kt)("p",null,"To run Centrifugo with KeyDB all you need to do is use ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," engine but run the KeyDB server instead of Redis."),(0,o.kt)("h2",{id:"tarantool-engine"},"Tarantool engine"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tarantool.io"},"Tarantool")," is a fast and flexible in-memory storage with different persistence/replication schemes and LuaJIT for writing custom logic on the Tarantool side. It allows implementing Centrifugo engine with unique characteristics."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")," status of Tarantool integration means that we are still going to improve it and there could be breaking changes as integration evolves."))),(0,o.kt)("p",null,"There are many ways to operate Tarantool in production and it's hard to distribute Centrifugo Tarantool engine in a way that suits everyone. Centrifugo tries to fit generic case by providing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," module and by providing ready-to-use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/rotor"},"centrifugal/rotor")," project based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tarantool/cartridge"},"Tarantool Cartridge"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To be honest we bet on the community help to push this integration further. Tarantool provides an incredible performance boost for presence and history operations (up to 5x more RPS compared to the Redis Engine) and a pretty fast PUB/SUB (comparable to what Redis Engine provides). Let's see what we can build together."))),(0,o.kt)("p",null,"There are several supported Tarantool topologies to which Centrifugo can connect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One standalone Tarantool instance"),(0,o.kt)("li",{parentName:"ul"},"Many standalone Tarantool instances and consistently shard data between them"),(0,o.kt)("li",{parentName:"ul"},"Tarantool running in Cartridge"),(0,o.kt)("li",{parentName:"ul"},"Tarantool with replica and automatic failover in Cartridge"),(0,o.kt)("li",{parentName:"ul"},"Many Tarantool instances (or leader-follower setup) in Cartridge with consistent client-side sharding between them"),(0,o.kt)("li",{parentName:"ul"},"Tarantool with synchronous replication (Raft-based, Tarantool >= 2.7)")),(0,o.kt)("p",null,"After running Tarantool you can point Centrifugo to it (and of course scale Centrifugo nodes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "tarantool",\n    "tarantool_address": "127.0.0.1:3301"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/rotor"},"centrifugal/rotor")," repo for ready-to-use engine based on Tarantool Cartridge framework."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," repo for examples on how to run engine with Standalone single Tarantool instance or with Raft-based synchronous replication."),(0,o.kt)("h3",{id:"options-2"},"Options"),(0,o.kt)("h4",{id:"tarantool_address"},"tarantool_address"),(0,o.kt)("p",null,"String or array of strings. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:3301"),"."),(0,o.kt)("p",null,"Connection address to Tarantool."),(0,o.kt)("h4",{id:"tarantool_mode"},"tarantool_mode"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone")),(0,o.kt)("p",null,"A mode how to connect to Tarantool. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone")," which connects to a single Tarantool instance address. Possible values are: ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-follower")," (connects to a setup with Tarantool master and async replicas) and ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-follower-raft")," (connects to a Tarantool with synchronous Raft-based replication)."),(0,o.kt)("p",null,"All modes support client-side consistent sharding (similar to what Redis engine provides)."),(0,o.kt)("h4",{id:"tarantool_user"},"tarantool_user"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),". Allows setting a user."),(0,o.kt)("h4",{id:"tarantool_password"},"tarantool_password"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),". Allows setting a password."),(0,o.kt)("h2",{id:"nats-broker"},"Nats broker"),(0,o.kt)("p",null,"It's possible to scale with ",(0,o.kt)("a",{parentName:"p",href:"https://nats.io/"},"Nats")," PUB/SUB server. Keep in mind, that Nats is called a ",(0,o.kt)("strong",{parentName:"p"},"broker")," here, ",(0,o.kt)("strong",{parentName:"p"},"not an Engine")," \u2013 Nats integration only implements PUB/SUB part of Engine, so carefully read limitations below."),(0,o.kt)("p",null,"Limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nats integration works only for unreliable at most once PUB/SUB. This means that history, presence, and message recovery Centrifugo features won't be available."),(0,o.kt)("li",{parentName:"ul"},"Nats wildcard channel subscriptions with symbols ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," and ",(0,o.kt)("inlineCode",{parentName:"li"},">")," not supported.")),(0,o.kt)("p",null,"First start Nats server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nats-server\n[3569] 2020/07/08 20:28:44.324269 [INF] Starting nats-server version 2.1.7\n[3569] 2020/07/08 20:28:44.324400 [INF] Git commit [not set]\n[3569] 2020/07/08 20:28:44.325600 [INF] Listening for client connections on 0.0.0.0:4222\n[3569] 2020/07/08 20:28:44.325612 [INF] Server id is NDAM7GEHUXAKS5SGMA3QE6ZSO4IQUJP6EL3G2E2LJYREVMAMIOBE7JT4\n[3569] 2020/07/08 20:28:44.325617 [INF] Server is ready\n")),(0,o.kt)("p",null,"Then start Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"broker")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --broker=nats --config=config.json\n")),(0,o.kt)("p",null,"And one more Centrifugo on another port (of course in real life you will start another Centrifugo on another machine):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --broker=nats --config=config.json --port=8001\n")),(0,o.kt)("p",null,"Now you can scale connections over Centrifugo instances, instances will be connected over Nats server."),(0,o.kt)("h3",{id:"options-3"},"Options"),(0,o.kt)("h4",{id:"nats_url"},"nats_url"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"nats://127.0.0.1:4222"),"."),(0,o.kt)("p",null,"Connection url in format ",(0,o.kt)("inlineCode",{parentName:"p"},"nats://derek:pass@localhost:4222"),"."),(0,o.kt)("h4",{id:"nats_prefix"},"nats_prefix"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugo"),"."),(0,o.kt)("p",null,"Prefix for channels used by Centrifugo inside Nats."),(0,o.kt)("h4",{id:"nats_dial_timeout"},"nats_dial_timeout"),(0,o.kt)("p",null,"Duration, default ",(0,o.kt)("inlineCode",{parentName:"p"},"1s"),"."),(0,o.kt)("p",null,"Timeout for dialing with Nats."),(0,o.kt)("h4",{id:"nats_write_timeout"},"nats_write_timeout"),(0,o.kt)("p",null,"Duration, default ",(0,o.kt)("inlineCode",{parentName:"p"},"1s"),"."),(0,o.kt)("p",null,"Write (and flush) timeout for a connection to Nats."))}c.isMDXComponent=!0}}]);