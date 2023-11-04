"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5107],{37690:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=i(85893),s=i(11151);const t={id:"configuration",title:"Configure Centrifugo"},r=void 0,l={id:"server/configuration",title:"Configure Centrifugo",description:"Let's look at how Centrifugo can be configured.",source:"@site/versioned_docs/version-3/server/configuration.md",sourceDirName:"server",slug:"/server/configuration",permalink:"/docs/3/server/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/configuration.md",tags:[],version:"3",frontMatter:{id:"configuration",title:"Configure Centrifugo"},sidebar:"Guides",next:{title:"Console commands",permalink:"/docs/3/server/console_commands"}},c={},a=[{value:"Configuration sources",id:"configuration-sources",level:2},{value:"Command-line flags",id:"command-line-flags",level:3},{value:"OS environment variables",id:"os-environment-variables",level:3},{value:"Configuration file",id:"configuration-file",level:3},{value:"Config file formats",id:"config-file-formats",level:2},{value:"JSON config format",id:"json-config-format",level:3},{value:"TOML config format",id:"toml-config-format",level:3},{value:"YAML config format",id:"yaml-config-format",level:3},{value:"Important options",id:"important-options",level:2},{value:"allowed_origins",id:"allowed_origins",level:3},{value:"address",id:"address",level:3},{value:"port",id:"port",level:3},{value:"engine",id:"engine",level:3},{value:"Advanced options",id:"advanced-options",level:2},{value:"client_channel_limit",id:"client_channel_limit",level:3},{value:"channel_max_length",id:"channel_max_length",level:3},{value:"client_user_connection_limit",id:"client_user_connection_limit",level:3},{value:"client_queue_max_size",id:"client_queue_max_size",level:3},{value:"client_anonymous",id:"client_anonymous",level:3},{value:"client_concurrency",id:"client_concurrency",level:3},{value:"gomaxprocs",id:"gomaxprocs",level:3},{value:"Endpoint configuration.",id:"endpoint-configuration",level:2},{value:"Default endpoints.",id:"default-endpoints",level:3},{value:"Admin endpoints.",id:"admin-endpoints",level:3},{value:"Debug endpoints.",id:"debug-endpoints",level:3},{value:"Health check endpoint",id:"health-check-endpoint",level:3},{value:"Custom internal ports",id:"custom-internal-ports",level:3},{value:"Disable default endpoints",id:"disable-default-endpoints",level:3},{value:"Customize handler endpoints",id:"customize-handler-endpoints",level:3},{value:"Signal handling",id:"signal-handling",level:2},{value:"Insecure modes",id:"insecure-modes",level:2},{value:"Insecure client connection",id:"insecure-client-connection",level:3},{value:"Insecure API mode",id:"insecure-api-mode",level:3},{value:"Insecure admin mode",id:"insecure-admin-mode",level:3},{value:"Setting time duration options",id:"setting-time-duration-options",level:2},{value:"Setting namespaces over env",id:"setting-namespaces-over-env",level:2},{value:"Anonymous usage stats",id:"anonymous-usage-stats",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Let's look at how Centrifugo can be configured."}),"\n",(0,o.jsx)(n.admonition,{title:"There are more options",type:"info",children:(0,o.jsx)(n.p,{children:"This chapter describes configuration principles and some important configuration options. There are some options not mentioned here but described later in each feature documentation."})}),"\n",(0,o.jsx)(n.h2,{id:"configuration-sources",children:"Configuration sources"}),"\n",(0,o.jsx)(n.p,{children:"Centrifugo can be configured in several ways."}),"\n",(0,o.jsx)(n.h3,{id:"command-line-flags",children:"Command-line flags"}),"\n",(0,o.jsxs)(n.p,{children:["Centrifugo supports several command-line flags. See ",(0,o.jsx)(n.code,{children:"centrifugo -h"})," for available flags. Command-line flags limited to most frequently used. In general, we suggest to avoid using flags for configuring Centrifugo in a production environment \u2013 prefer environment or configuration file sources."]}),"\n",(0,o.jsx)(n.p,{children:"Command-line options have the highest priority when set than other ways to configure Centrifugo."}),"\n",(0,o.jsx)(n.h3,{id:"os-environment-variables",children:"OS environment variables"}),"\n",(0,o.jsxs)(n.p,{children:["All Centrifugo options can be set over env in the format ",(0,o.jsx)(n.code,{children:"CENTRIFUGO_<OPTION_NAME>"})," (i.e. option name with ",(0,o.jsx)(n.code,{children:"CENTRIFUGO_"})," prefix, all in uppercase)."]}),"\n",(0,o.jsxs)(n.p,{children:["Setting options over env is mostly straightforward except namespaces \u2013 ",(0,o.jsx)(n.a,{href:"#setting-namespaces-over-env",children:"see how to set namespaces via env"}),". Environment variables have the second priority after flags."]}),"\n",(0,o.jsxs)(n.p,{children:["Boolean options can be set using strings according to Go language ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/strconv#ParseBool",children:"ParseBool"})," function. I.e. to set ",(0,o.jsx)(n.code,{children:"true"})," you can just use ",(0,o.jsx)(n.code,{children:'"true"'})," value for an environment variable (or simply ",(0,o.jsx)(n.code,{children:'"1"'}),"). To set ",(0,o.jsx)(n.code,{children:"false"})," use ",(0,o.jsx)(n.code,{children:'"false"'})," or ",(0,o.jsx)(n.code,{children:'"0"'}),". Example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export CENTRIFUGO_PROMETHEUS="1"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Also, array options, like ",(0,o.jsx)(n.code,{children:"allowed_origins"})," can be set over environment variables as a single string where values separated by a space. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export CENTRIFUGO_ALLOWED_ORIGINS="https://mysite1.example.com https://mysite2.example.com"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For a nested object configuration (which we have, for example, in ",(0,o.jsx)(n.a,{href:"/docs/3/pro/analytics",children:"Centrifugo PRO ClickHouse analytics"}),") it's still possible to use environment variables to set options. In this case replace nesting with ",(0,o.jsx)(n.code,{children:"_"})," when constructing environment variable name."]}),"\n",(0,o.jsx)(n.p,{children:"Empty environment variables are considered unset (!) and will fall back to the next configuration source."}),"\n",(0,o.jsx)(n.h3,{id:"configuration-file",children:"Configuration file"}),"\n",(0,o.jsx)(n.p,{children:"Configuration file supports all options mentioned in Centrifugo documentation and can be in one of three supported formats: JSON, YAML, or TOML. Config file options have the lowest priority among configuration sources (i.e. option set over environment variable prevails over the same option in config file)."}),"\n",(0,o.jsx)(n.p,{children:"A simple way to start with Centrifugo is to run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"centrifugo genconfig\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command generates ",(0,o.jsx)(n.code,{children:"config.json"})," configuration file in a current directory. This file already has the minimal number of options set. So it's then possible to start Centrifugo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"centrifugo -c config.json\n"})}),"\n",(0,o.jsx)(n.h2,{id:"config-file-formats",children:"Config file formats"}),"\n",(0,o.jsx)(n.p,{children:"Centrifugo supports three configuration file formats: JSON, YAML, or TOML."}),"\n",(0,o.jsx)(n.h3,{id:"json-config-format",children:"JSON config format"}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of Centrifugo JSON configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "allowed_origins": ["http://localhost:3000"],\n  "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>",\n  "api_key": "<YOUR-API-KEY-HERE>"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"token_hmac_secret_key"})," used to check JWT signature (more info about JWT in ",(0,o.jsx)(n.a,{href:"/docs/3/server/authentication",children:"authentication chapter"}),"). If you are using ",(0,o.jsx)(n.a,{href:"/docs/3/server/proxy#connect-proxy",children:"connect proxy"})," then you may use Centrifugo without JWT."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"api_key"})," used for Centrifugo API endpoint authorization, see more in ",(0,o.jsx)(n.a,{href:"/docs/3/server/server_api#http-api",children:"chapter about server HTTP API"}),". Keep both values secret and never reveal them to clients."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"allowed_origins"})," option ",(0,o.jsx)(n.a,{href:"#allowed_origins",children:"described below"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"toml-config-format",children:"TOML config format"}),"\n",(0,o.jsx)(n.p,{children:"Centrifugo also supports TOML format for configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"centrifugo --config=config.toml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"config.toml"})," contains:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",metastring:'title="config.toml"',children:'allowed_origins: [ "http://localhost:3000" ]\ntoken_hmac_secret_key = "<YOUR-SECRET-STRING-HERE>"\napi_key = "<YOUR-API-KEY-HERE>"\nlog_level = "debug"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In the example above we also defined logging level to be ",(0,o.jsx)(n.code,{children:"debug"})," which is useful to have while developing an application. In the production environment debug logging can be too chatty."]}),"\n",(0,o.jsx)(n.h3,{id:"yaml-config-format",children:"YAML config format"}),"\n",(0,o.jsx)(n.p,{children:"YAML format is also supported:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'allowed_origins:\n  - "http://localhost:3000"\ntoken_hmac_secret_key: "<YOUR-SECRET-STRING-HERE>"\napi_key: "<YOUR-API-KEY-HERE>"\nlog_level: debug\n'})}),"\n",(0,o.jsx)(n.p,{children:"With YAML remember to use spaces, not tabs when writing a configuration file."}),"\n",(0,o.jsx)(n.h2,{id:"important-options",children:"Important options"}),"\n",(0,o.jsx)(n.p,{children:"Let's describe some important options you can configure when running Centrifugo."}),"\n",(0,o.jsx)(n.h3,{id:"allowed_origins",children:"allowed_origins"}),"\n",(0,o.jsxs)(n.p,{children:["This option allows setting an array of allowed origin patterns (array of strings) for WebSocket and SockJS endpoints to prevent ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"CSRF"})," or WebSocket hijacking attacks. Also, it's used for HTTP-based unidirectional transports to enable CORS for configured origins."]}),"\n",(0,o.jsxs)(n.p,{children:["As soon as ",(0,o.jsx)(n.code,{children:"allowed_origins"})," is defined every connection request with ",(0,o.jsx)(n.code,{children:"Origin"})," set will be checked against each pattern in an array."]}),"\n",(0,o.jsxs)(n.p,{children:["Connection requests without ",(0,o.jsx)(n.code,{children:"Origin"})," header set are passing through without any checks (i.e. always allowed)."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, a client connects to Centrifugo from a web browser application on ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),". In this case, ",(0,o.jsx)(n.code,{children:"allowed_origins"})," should be configured in this way:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"allowed_origins": [\n    "http://localhost:3000"\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When connecting from ",(0,o.jsx)(n.code,{children:"https://example.com"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"allowed_origins": [\n    "https://example.com"\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Origin pattern can contain wildcard symbol ",(0,o.jsx)(n.code,{children:"*"})," to match subdomains:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"allowed_origins": [\n    "https://*.example.com"\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u2013 in this case requests with ",(0,o.jsx)(n.code,{children:"Origin"})," header like ",(0,o.jsx)(n.code,{children:"https://foo.example.com"})," or ",(0,o.jsx)(n.code,{children:"https://bar.example.com"})," will pass the check."]}),"\n",(0,o.jsx)(n.p,{children:"It's also possible to allow all origins in the following way (but this is discouraged and insecure when using connect proxy feature):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"allowed_origins": [\n    "*"\n]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"address",children:"address"}),"\n",(0,o.jsxs)(n.p,{children:["Bind your Centrifugo to a specific interface address (string, by default ",(0,o.jsx)(n.code,{children:'""'})," - listen on all available interfaces)."]}),"\n",(0,o.jsx)(n.h3,{id:"port",children:"port"}),"\n",(0,o.jsxs)(n.p,{children:["Port to bind Centrifugo to (string, by default ",(0,o.jsx)(n.code,{children:'"8000"'}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"engine",children:"engine"}),"\n",(0,o.jsxs)(n.p,{children:["Engine to use - ",(0,o.jsx)(n.code,{children:"memory"}),", ",(0,o.jsx)(n.code,{children:"redis"})," or ",(0,o.jsx)(n.code,{children:"tarantool"}),". It's a string option, by default ",(0,o.jsx)(n.code,{children:"memory"}),". Read more about engines in ",(0,o.jsx)(n.a,{href:"/docs/3/server/engines",children:"special chapter"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"advanced-options",children:"Advanced options"}),"\n",(0,o.jsx)(n.p,{children:"These options allow tweaking server behavior, in most cases default values are good to start with."}),"\n",(0,o.jsx)(n.h3,{id:"client_channel_limit",children:"client_channel_limit"}),"\n",(0,o.jsx)(n.p,{children:"Default: 128"}),"\n",(0,o.jsx)(n.p,{children:"Sets the maximum number of different channel subscriptions a single client can have."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"When designing an application avoid subscribing to an unlimited number of channels per one client. Keep number of subscriptions for each client reasonably small \u2013 this will help keeping handshake process lightweight and fast."})}),"\n",(0,o.jsx)(n.h3,{id:"channel_max_length",children:"channel_max_length"}),"\n",(0,o.jsx)(n.p,{children:"Default: 255"}),"\n",(0,o.jsx)(n.p,{children:"Sets the maximum length of the channel name."}),"\n",(0,o.jsx)(n.h3,{id:"client_user_connection_limit",children:"client_user_connection_limit"}),"\n",(0,o.jsx)(n.p,{children:"Default: 0"}),"\n",(0,o.jsx)(n.p,{children:"The maximum number of connections from a user (with known user ID) to Centrifugo node. By default, unlimited."}),"\n",(0,o.jsxs)(n.p,{children:["The important thing to emphasize is that ",(0,o.jsx)(n.code,{children:"client_user_connection_limit"})," works only per one Centrifugo node and exists mostly to protect Centrifugo from many connections from a single user \u2013 but not for business logic limitations. This means that if you set this to 1 and scale nodes \u2013 say run 10 Centrifugo nodes \u2013 then a user will be able to create 10 connections (one to each node)."]}),"\n",(0,o.jsx)(n.h3,{id:"client_queue_max_size",children:"client_queue_max_size"}),"\n",(0,o.jsx)(n.p,{children:"Default: 1048576"}),"\n",(0,o.jsx)(n.p,{children:"Maximum client message queue size in bytes to close slow reader connections. By default - 1mb."}),"\n",(0,o.jsx)(n.h3,{id:"client_anonymous",children:"client_anonymous"}),"\n",(0,o.jsx)(n.p,{children:"Default: false"}),"\n",(0,o.jsxs)(n.p,{children:["Enable a mode when all clients can connect to Centrifugo without JWT. In this case, all connections without a token will be treated as anonymous (i.e. with empty user ID) and only can subscribe to channels with ",(0,o.jsx)(n.code,{children:"anonymous"})," option enabled."]}),"\n",(0,o.jsx)(n.h3,{id:"client_concurrency",children:"client_concurrency"}),"\n",(0,o.jsx)(n.p,{children:"Default: 0"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"client_concurrency"})," when set tells Centrifugo that commands from a client must be processed concurrently."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, concurrency disabled \u2013 Centrifugo processes commands received from a client one by one. This means that if a client issues two RPC requests to a server then Centrifugo will process the first one, then the second one. If the first RPC call is slow then the client will wait for the second RPC response much longer than it could (even if the second RPC is very fast). If you set ",(0,o.jsx)(n.code,{children:"client_concurrency"})," to some value greater than 1 then commands will be processed concurrently (in parallel) in separate goroutines (with maximum concurrency level capped by ",(0,o.jsx)(n.code,{children:"client_concurrency"})," value). Thus, this option can effectively reduce the latency of individual requests. Since separate goroutines are involved in processing this mode adds some performance and memory overhead \u2013 though it should be pretty negligible in most cases. This option applies to all commands from a client (including subscribe, publish, presence, etc)."]}),"\n",(0,o.jsx)(n.h3,{id:"gomaxprocs",children:"gomaxprocs"}),"\n",(0,o.jsx)(n.p,{children:"Default: 0"}),"\n",(0,o.jsx)(n.p,{children:"By default, Centrifugo runs on all available CPU cores. To limit the number of cores Centrifugo can utilize in one moment use this option."}),"\n",(0,o.jsx)(n.h2,{id:"endpoint-configuration",children:"Endpoint configuration."}),"\n",(0,o.jsx)(n.p,{children:"After Centrifugo started there are several endpoints available."}),"\n",(0,o.jsx)(n.h3,{id:"default-endpoints",children:"Default endpoints."}),"\n",(0,o.jsx)(n.p,{children:"Bidirectional WebSocket default endpoint:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ws://localhost:8000/connection/websocket\n"})}),"\n",(0,o.jsx)(n.p,{children:"Bidirectional SockJS default endpoint (disabled by default):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/connection/sockjs\n"})}),"\n",(0,o.jsx)(n.p,{children:"Unidirectional EventSource endpoint (disabled by default):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/connection/uni_sse\n"})}),"\n",(0,o.jsx)(n.p,{children:"Unidirectional HTTP streaming endpoint (disabled by default):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/connection/uni_http_stream\n"})}),"\n",(0,o.jsx)(n.p,{children:"Unidirectional WebSocket endpoint (disabled by default):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/connection/uni_websocket\n"})}),"\n",(0,o.jsx)(n.p,{children:"Unidirectional EventSource (SSE) endpoint (disabled by default):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/connection/uni_sse\n"})}),"\n",(0,o.jsx)(n.p,{children:"Server HTTP API endpoint:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/api\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, all endpoints work on port ",(0,o.jsx)(n.code,{children:"8000"}),". This can be changed with ",(0,o.jsx)(n.code,{children:"port"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "port": 9000\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In production setup, you may have a proper domain name in endpoint addresses above instead of ",(0,o.jsx)(n.code,{children:"localhost"}),". While domain name and port parts can differ depending on setup \u2013 URL paths stay the same: ",(0,o.jsx)(n.code,{children:"/connection/sockjs"}),", ",(0,o.jsx)(n.code,{children:"/connection/websocket"}),", ",(0,o.jsx)(n.code,{children:"/api"})," etc."]}),"\n",(0,o.jsx)(n.h3,{id:"admin-endpoints",children:"Admin endpoints."}),"\n",(0,o.jsxs)(n.p,{children:["Admin web UI endpoint works on root path by default, i.e. ",(0,o.jsx)(n.code,{children:"http://localhost:8000"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For more details about admin web UI, refer to the ",(0,o.jsx)(n.a,{href:"/docs/3/server/admin_web",children:"Admin web UI documentation"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"debug-endpoints",children:"Debug endpoints."}),"\n",(0,o.jsxs)(n.p,{children:["Next, when Centrifugo started in debug mode some extra debug endpoints become available. To start in debug mode add ",(0,o.jsx)(n.code,{children:"debug"})," option to config:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "debug": true\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"And endpoint:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:8000/debug/pprof/\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u2013 will show useful information about the internal state of Centrifugo instance. This info is especially helpful when troubleshooting. See ",(0,o.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo/wiki/Investigating-performance-issues",children:"wiki page"})," for more info."]}),"\n",(0,o.jsx)(n.h3,{id:"health-check-endpoint",children:"Health check endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"health"})," boolean option (by default ",(0,o.jsx)(n.code,{children:"false"}),") to enable the health check endpoint which will be available on path ",(0,o.jsx)(n.code,{children:"/health"}),". Also available over command-line flag:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"centrifugo -c config.json --health\n"})}),"\n",(0,o.jsx)(n.h3,{id:"custom-internal-ports",children:"Custom internal ports"}),"\n",(0,o.jsx)(n.p,{children:"We strongly recommend not expose API, admin, debug, health, and Prometheus endpoints to the Internet. The following Centrifugo endpoints are considered internal:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["API endpoint (",(0,o.jsx)(n.code,{children:"/api"}),") - for HTTP API requests"]}),"\n",(0,o.jsxs)(n.li,{children:["Admin web interface endpoints (",(0,o.jsx)(n.code,{children:"/"}),", ",(0,o.jsx)(n.code,{children:"/admin/auth"}),", ",(0,o.jsx)(n.code,{children:"/admin/api"}),") - used by web interface"]}),"\n",(0,o.jsxs)(n.li,{children:["Prometheus endpoint (",(0,o.jsx)(n.code,{children:"/metrics"}),") - used for exposing server metrics in Prometheus format"]}),"\n",(0,o.jsxs)(n.li,{children:["Health check endpoint (",(0,o.jsx)(n.code,{children:"/health"}),") - used to do health checks"]}),"\n",(0,o.jsxs)(n.li,{children:["Debug endpoints (",(0,o.jsx)(n.code,{children:"/debug/pprof"}),") - used to inspect internal server state"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["It's a good practice to protect all these endpoints with a firewall. For example, it's possible to configure in ",(0,o.jsx)(n.code,{children:"location"})," section of the Nginx configuration."]}),"\n",(0,o.jsx)(n.p,{children:"Though sometimes you don't have access to a per-location configuration in your proxy/load balancer software. For example when using Amazon ELB. In this case, you can change ports on which your internal endpoints work."}),"\n",(0,o.jsxs)(n.p,{children:["To run internal endpoints on custom port use ",(0,o.jsx)(n.code,{children:"internal_port"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "internal_port": 9000\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"So admin web interface will work on address:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:9000\n"})}),"\n",(0,o.jsx)(n.p,{children:"Also, debug page will be available on a new custom port too:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:9000/debug/pprof/\n"})}),"\n",(0,o.jsx)(n.p,{children:"The same for API and Prometheus endpoints."}),"\n",(0,o.jsx)(n.h3,{id:"disable-default-endpoints",children:"Disable default endpoints"}),"\n",(0,o.jsxs)(n.p,{children:["To disable websocket endpoint set ",(0,o.jsx)(n.code,{children:"websocket_disable"})," boolean option to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To disable API endpoint set ",(0,o.jsx)(n.code,{children:"api_disable"})," boolean option to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"customize-handler-endpoints",children:"Customize handler endpoints"}),"\n",(0,o.jsx)(n.p,{children:"It's possible to customize server HTTP handler endpoints. To do this Centrifugo supports several options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"admin_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'""'}),") - to control Admin panel URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"websocket_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/connection/websocket"'}),") - to control WebSocket URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sockjs_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/connection/sockjs"'}),") - to control SockJS URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uni_sse_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/connection/uni_sse"'}),") - to control unidirectional Eventsource URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uni_http_stream_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/connection/uni_http_stream"'}),") - to control unidirectional HTTP streaming URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uni_websocket_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/connection/uni_websocket"'}),") - to control unidirectional WebSocket URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"api_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/api"'}),") - to control HTTP API URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"prometheus_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/metrics"'}),") - to control Prometheus URL prefix"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"health_handler_prefix"})," (default ",(0,o.jsx)(n.code,{children:'"/health"'}),") - to control health check URL prefix"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"signal-handling",children:"Signal handling"}),"\n",(0,o.jsx)(n.p,{children:"It's possible to send HUP signal to Centrifugo to reload a configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kill -HUP <PID>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Though at moment ",(0,o.jsx)(n.strong,{children:"this will only reload token secrets and channel options (top-level and namespaces)"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Centrifugo tries to gracefully shut down client connections when SIGINT or SIGTERM signals are received. By default, the maximum graceful shutdown period is 30 seconds but can be changed using ",(0,o.jsx)(n.code,{children:"shutdown_timeout"})," (integer, in seconds) configuration option."]}),"\n",(0,o.jsx)(n.h2,{id:"insecure-modes",children:"Insecure modes"}),"\n",(0,o.jsx)(n.h3,{id:"insecure-client-connection",children:"Insecure client connection"}),"\n",(0,o.jsxs)(n.p,{children:["The boolean option ",(0,o.jsx)(n.code,{children:"client_insecure"})," (default ",(0,o.jsx)(n.code,{children:"false"}),") allows connecting to Centrifugo without JWT token. In this mode, there is no user authentication involved. This mode can be useful for demo projects based on Centrifugo, local projects, or real-time application prototyping. Don't use it in production."]}),"\n",(0,o.jsx)(n.h3,{id:"insecure-api-mode",children:"Insecure API mode"}),"\n",(0,o.jsxs)(n.p,{children:["This mode can be enabled using the boolean option ",(0,o.jsx)(n.code,{children:"api_insecure"})," (default ",(0,o.jsx)(n.code,{children:"false"}),"). When on there is no need to provide API key in HTTP requests. When using this mode everyone that has access to ",(0,o.jsx)(n.code,{children:"/api"})," endpoint can send any command to server. Enabling this option can be reasonable if ",(0,o.jsx)(n.code,{children:"/api"})," endpoint is protected by firewall rules."]}),"\n",(0,o.jsxs)(n.p,{children:["The option is also useful in development to simplify sending API commands to Centrifugo using CURL for example without specifying ",(0,o.jsx)(n.code,{children:"Authorization"})," header in requests."]}),"\n",(0,o.jsx)(n.h3,{id:"insecure-admin-mode",children:"Insecure admin mode"}),"\n",(0,o.jsxs)(n.p,{children:["This mode can be enabled using the boolean option ",(0,o.jsx)(n.code,{children:"admin_insecure"})," (default ",(0,o.jsx)(n.code,{children:"false"}),"). When on there is no authentication in the admin web interface. Again - this is not secure but can be justified if you protected the admin interface by firewall rules or you want to use basic authentication for the Centrifugo admin interface (configured on proxy level)."]}),"\n",(0,o.jsx)(n.h2,{id:"setting-time-duration-options",children:"Setting time duration options"}),"\n",(0,o.jsxs)(n.p,{children:["Time durations in Centrifugo can be set using strings where duration value and unit are both provided. For example, to set 5 seconds duration use ",(0,o.jsx)(n.code,{children:'"5s"'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The minimal time resolution is 1ms. Some options of Centrifugo only support second precision (for example ",(0,o.jsx)(n.code,{children:"history_ttl"})," channel option)."]}),"\n",(0,o.jsx)(n.p,{children:'Valid time units are "ms" (milliseconds), "s" (seconds), "m" (minutes), "h" (hours).'}),"\n",(0,o.jsx)(n.p,{children:"Some examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'"1000ms" // 1000 milliseconds\n"1s"     // 1 second\n"12h"    // 12 hours\n"720h"   // 30 days\n'})}),"\n",(0,o.jsx)(n.h2,{id:"setting-namespaces-over-env",children:"Setting namespaces over env"}),"\n",(0,o.jsx)(n.p,{children:"While setting most options in Centrifugo over env is pretty straightforward setting namespaces is a bit special:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'CENTRIFUGO_NAMESPACES=\'[{"name": "ns1"}, {"name": "ns2"}]\' ./centrifugo\n'})}),"\n",(0,o.jsxs)(n.p,{children:["I.e. ",(0,o.jsx)(n.code,{children:"CENTRIFUGO_NAMESPACES"})," environment variable should be a valid JSON string that represents namespaces array."]}),"\n",(0,o.jsx)(n.h2,{id:"anonymous-usage-stats",children:"Anonymous usage stats"}),"\n",(0,o.jsx)(n.p,{children:"Centrifugo periodically sends anonymous usage information (once in 24 hours). That information is impersonal and does not include sensitive data, passwords, IP addresses, hostnames, etc. Only counters to estimate version and installation size distribution, and feature usage."}),"\n",(0,o.jsx)(n.p,{children:"Please do not disable usage stats sending without reason. If you depend on Centrifugo \u2013 sure you are interested in further project improvements. Usage stats help us understand Centrifugo use cases better, concentrate on widely-used features, and be confident we are moving in the right direction. Developing in the dark is hard, and decisions may be non-optimal."}),"\n",(0,o.jsxs)(n.p,{children:["To disable sending usage stats set ",(0,o.jsx)(n.code,{children:"usage_stats_disable"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "usage_stats_disable": true\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(67294);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);