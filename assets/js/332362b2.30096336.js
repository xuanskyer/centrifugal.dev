"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const a={id:"configuration",title:"Configure Centrifugo"},l=void 0,r={unversionedId:"server/configuration",id:"server/configuration",title:"Configure Centrifugo",description:"Let's look at how Centrifugo can be configured.",source:"@site/docs/server/configuration.md",sourceDirName:"server",slug:"/server/configuration",permalink:"/docs/server/configuration",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configure Centrifugo"},sidebar:"Guides",next:{title:"Server API walkthrough",permalink:"/docs/server/server_api"}},s={},p=[{value:"Configuration sources",id:"configuration-sources",level:2},{value:"Command-line flags",id:"command-line-flags",level:3},{value:"OS environment variables",id:"os-environment-variables",level:3},{value:"Configuration file",id:"configuration-file",level:3},{value:"Config file formats",id:"config-file-formats",level:2},{value:"JSON config format",id:"json-config-format",level:3},{value:"TOML config format",id:"toml-config-format",level:3},{value:"YAML config format",id:"yaml-config-format",level:3},{value:"Important options",id:"important-options",level:2},{value:"allowed_origins",id:"allowed_origins",level:3},{value:"address",id:"address",level:3},{value:"port",id:"port",level:3},{value:"engine",id:"engine",level:3},{value:"Advanced options",id:"advanced-options",level:2},{value:"client_channel_limit",id:"client_channel_limit",level:3},{value:"channel_max_length",id:"channel_max_length",level:3},{value:"client_user_connection_limit",id:"client_user_connection_limit",level:3},{value:"client_connection_limit",id:"client_connection_limit",level:3},{value:"client_connection_rate_limit",id:"client_connection_rate_limit",level:3},{value:"client_queue_max_size",id:"client_queue_max_size",level:3},{value:"client_concurrency",id:"client_concurrency",level:3},{value:"client_stale_close_delay",id:"client_stale_close_delay",level:3},{value:"allow_anonymous_connect_without_token",id:"allow_anonymous_connect_without_token",level:3},{value:"disallow_anonymous_connection_tokens",id:"disallow_anonymous_connection_tokens",level:3},{value:"gomaxprocs",id:"gomaxprocs",level:3},{value:"Endpoint configuration",id:"endpoint-configuration",level:2},{value:"Default endpoints",id:"default-endpoints",level:3},{value:"Admin endpoints",id:"admin-endpoints",level:3},{value:"Debug endpoints",id:"debug-endpoints",level:3},{value:"Health check endpoint",id:"health-check-endpoint",level:3},{value:"Swagger UI for server API",id:"swagger-ui-for-server-api",level:3},{value:"Custom internal ports",id:"custom-internal-ports",level:3},{value:"Disable default endpoints",id:"disable-default-endpoints",level:3},{value:"Customize handler endpoints",id:"customize-handler-endpoints",level:3},{value:"Signal handling",id:"signal-handling",level:2},{value:"Insecure modes",id:"insecure-modes",level:2},{value:"Insecure client connection",id:"insecure-client-connection",level:3},{value:"Disable client token signature check",id:"disable-client-token-signature-check",level:3},{value:"Insecure API mode",id:"insecure-api-mode",level:3},{value:"Insecure admin mode",id:"insecure-admin-mode",level:3},{value:"Setting time duration options",id:"setting-time-duration-options",level:2},{value:"Setting namespaces over env",id:"setting-namespaces-over-env",level:2},{value:"Anonymous usage stats",id:"anonymous-usage-stats",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's look at how Centrifugo can be configured."),(0,o.kt)("admonition",{title:"There are more options",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This chapter describes configuration principles and some important configuration options. There are more options not mentioned here but described throughout the doc in the context of each individual server feature.")),(0,o.kt)("h2",{id:"configuration-sources"},"Configuration sources"),(0,o.kt)("p",null,"Centrifugo can be configured in several ways: using command-line flags (highest priority), environment variables (second priority after flags), configuration file (lowest priority)."),(0,o.kt)("h3",{id:"command-line-flags"},"Command-line flags"),(0,o.kt)("p",null,"Centrifugo supports several command-line flags. See ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugo -h")," for available flags. Command-line flags limited to most frequently used. In general, we suggest to avoid using flags for configuring Centrifugo in a production environment \u2013 prefer using environment variables or configuration file."),(0,o.kt)("p",null,"Command-line options have the highest priority when set than other ways to configure Centrifugo."),(0,o.kt)("h3",{id:"os-environment-variables"},"OS environment variables"),(0,o.kt)("p",null,"All Centrifugo options can be set over env in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_<OPTION_NAME>")," (i.e. option name with ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_")," prefix, all in uppercase)."),(0,o.kt)("p",null,"Setting options over env is mostly straightforward except namespaces \u2013 ",(0,o.kt)("a",{parentName:"p",href:"#setting-namespaces-over-env"},"see how to set namespaces via env"),". Environment variables have the second priority after flags."),(0,o.kt)("p",null,"Boolean options can be set using strings according to Go language ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/strconv#ParseBool"},"ParseBool")," function. I.e. to set ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," you can just use ",(0,o.kt)("inlineCode",{parentName:"p"},'"true"')," value for an environment variable (or simply ",(0,o.kt)("inlineCode",{parentName:"p"},'"1"'),"). To set ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," use ",(0,o.kt)("inlineCode",{parentName:"p"},'"false"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"0"'),". Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export CENTRIFUGO_PROMETHEUS="1"\n')),(0,o.kt)("p",null,"Also, array options, like ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_origins")," can be set over environment variables as a single string where values separated by a space. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export CENTRIFUGO_ALLOWED_ORIGINS="https://mysite1.example.com https://mysite2.example.com"\n')),(0,o.kt)("p",null,"For a nested object configuration (which we have, for example, in ",(0,o.kt)("a",{parentName:"p",href:"/docs/pro/analytics"},"Centrifugo PRO ClickHouse analytics"),") it's still possible to use environment variables to set options. In this case replace nesting with ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," when constructing environment variable name."),(0,o.kt)("p",null,"Empty environment variables are considered unset (!) and will fall back to the next configuration source."),(0,o.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Configuration file supports all options mentioned in Centrifugo documentation and can be in one of three supported formats: JSON, YAML, or TOML. Config file options have the lowest priority among configuration sources (i.e. option set over environment variable is preferred over the same option in config file)."),(0,o.kt)("p",null,"A simple way to start with Centrifugo is to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo genconfig\n")),(0,o.kt)("p",null,"This command generates ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," configuration file in a current directory. This file already has the minimal number of options set. So it's then possible to start Centrifugo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo -c config.json\n")),(0,o.kt)("h2",{id:"config-file-formats"},"Config file formats"),(0,o.kt)("p",null,"Centrifugo supports three configuration file formats: JSON, YAML, or TOML."),(0,o.kt)("h3",{id:"json-config-format"},"JSON config format"),(0,o.kt)("p",null,"Here is an example of Centrifugo JSON configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "allowed_origins": ["http://localhost:3000"],\n  "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>",\n  "api_key": "<YOUR-API-KEY-HERE>"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," used to check JWT signature (more info about JWT in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/authentication"},"authentication chapter"),"). If you are using ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy#connect-proxy"},"connect proxy")," then you may use Centrifugo without JWT."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"api_key")," used for Centrifugo API endpoint authorization, see more in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api#http-api"},"chapter about server HTTP API"),". Keep both values secret and never reveal them to clients."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"allowed_origins")," option ",(0,o.kt)("a",{parentName:"p",href:"#allowed_origins"},"described below"),"."),(0,o.kt)("h3",{id:"toml-config-format"},"TOML config format"),(0,o.kt)("p",null,"Centrifugo also supports TOML format for configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --config=config.toml\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," contains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="config.toml"',title:'"config.toml"'},'allowed_origins: [ "http://localhost:3000" ]\ntoken_hmac_secret_key = "<YOUR-SECRET-STRING-HERE>"\napi_key = "<YOUR-API-KEY-HERE>"\nlog_level = "debug"\n')),(0,o.kt)("p",null,"In the example above we also defined logging level to be ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," which is useful to have while developing an application. In the production environment debug logging can be too chatty."),(0,o.kt)("h3",{id:"yaml-config-format"},"YAML config format"),(0,o.kt)("p",null,"YAML format is also supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'allowed_origins:\n  - "http://localhost:3000"\ntoken_hmac_secret_key: "<YOUR-SECRET-STRING-HERE>"\napi_key: "<YOUR-API-KEY-HERE>"\nlog_level: debug\n')),(0,o.kt)("p",null,"With YAML remember to use spaces, not tabs when writing a configuration file."),(0,o.kt)("h2",{id:"important-options"},"Important options"),(0,o.kt)("p",null,"Let's describe some important options you can configure when running Centrifugo."),(0,o.kt)("h3",{id:"allowed_origins"},"allowed_origins"),(0,o.kt)("p",null,"This option allows setting an array of allowed origin patterns (array of strings) for WebSocket and SockJS endpoints to prevent ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"CSRF")," or WebSocket hijacking attacks. Also, it's used for HTTP-based unidirectional transports to enable CORS for configured origins."),(0,o.kt)("p",null,"As soon as ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_origins")," is defined every connection request with ",(0,o.kt)("inlineCode",{parentName:"p"},"Origin")," set will be checked against each pattern in an array."),(0,o.kt)("p",null,"Connection requests without ",(0,o.kt)("inlineCode",{parentName:"p"},"Origin")," header set are passing through without any checks (i.e. always allowed)."),(0,o.kt)("p",null,"For example, a client connects to Centrifugo from a web browser application on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_origins")," should be configured in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"allowed_origins": [\n    "http://localhost:3000"\n]\n')),(0,o.kt)("p",null,"When connecting from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"allowed_origins": [\n    "https://example.com"\n]\n')),(0,o.kt)("p",null,"Origin pattern can contain wildcard symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," to match subdomains:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"allowed_origins": [\n    "https://*.example.com"\n]\n')),(0,o.kt)("p",null,"\u2013 in this case requests with ",(0,o.kt)("inlineCode",{parentName:"p"},"Origin")," header like ",(0,o.kt)("inlineCode",{parentName:"p"},"https://foo.example.com")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://bar.example.com")," will pass the check."),(0,o.kt)("p",null,"It's also possible to allow all origins in the following way (but this is discouraged and insecure when using connect proxy feature):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"allowed_origins": [\n    "*"\n]\n')),(0,o.kt)("h3",{id:"address"},"address"),(0,o.kt)("p",null,"Bind your Centrifugo to a specific interface address (string, by default ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," - listen on all available interfaces)."),(0,o.kt)("h3",{id:"port"},"port"),(0,o.kt)("p",null,"Port to bind Centrifugo to (string, by default ",(0,o.kt)("inlineCode",{parentName:"p"},'"8000"'),")."),(0,o.kt)("h3",{id:"engine"},"engine"),(0,o.kt)("p",null,"Engine to use - ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tarantool"),". It's a string option, by default ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),". Read more about engines in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/engines"},"special chapter"),"."),(0,o.kt)("h2",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"These options allow tweaking server behavior, in most cases default values are good to start with. "),(0,o.kt)("h3",{id:"client_channel_limit"},"client_channel_limit"),(0,o.kt)("p",null,"Default: 128"),(0,o.kt)("p",null,"Sets the maximum number of different channel subscriptions a single client can have."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When designing an application avoid subscribing to an unlimited number of channels per one client. Keep number of subscriptions for each client reasonably small \u2013 this will help keeping handshake process lightweight and fast.")),(0,o.kt)("h3",{id:"channel_max_length"},"channel_max_length"),(0,o.kt)("p",null,"Default: 255"),(0,o.kt)("p",null,"Sets the maximum length of the channel name."),(0,o.kt)("h3",{id:"client_user_connection_limit"},"client_user_connection_limit"),(0,o.kt)("p",null,"Default: 0"),(0,o.kt)("p",null,"The maximum number of connections from a user (with known user ID) to Centrifugo node. By default, unlimited."),(0,o.kt)("p",null,"The important thing to emphasize is that ",(0,o.kt)("inlineCode",{parentName:"p"},"client_user_connection_limit")," works only per one Centrifugo node and exists mostly to protect Centrifugo from many connections from a single user \u2013 but not for business logic limitations. This means that if you set this to 1 and scale nodes \u2013 say run 10 Centrifugo nodes \u2013 then a user will be able to create 10 connections (one to each node)."),(0,o.kt)("h3",{id:"client_connection_limit"},"client_connection_limit"),(0,o.kt)("p",null,"Default: 0"),(0,o.kt)("p",null,"When set to a value > 0 ",(0,o.kt)("inlineCode",{parentName:"p"},"client_connection_limit")," limits the max number of connections single Centrifugo node can handle. It acts on HTTP middleware level and stops processing request if the condition met. It logs a warning into logs in this case and increments ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugo_node_client_connection_limit")," Prometheus counter. Client SDKs will attempt reconnecting."),(0,o.kt)("p",null,"Some motivation behind this option may be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/issues/544"},"this issue"),"."),(0,o.kt)("p",null,"Note, that at this point ",(0,o.kt)("inlineCode",{parentName:"p"},"client_connection_limit")," does not affect connections coming over GRPC unidirectional transport."),(0,o.kt)("h3",{id:"client_connection_rate_limit"},"client_connection_rate_limit"),(0,o.kt)("p",null,"Default: 0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client_connection_rate_limit")," sets the maximum number of HTTP requests to establish a new real-time connection a single Centrifugo node will accept per second (on real-time transport endpoints). All requests outside the limit will get 503 Service Unavailable code in response. Our SDKs handle this with backoff reconnection."),(0,o.kt)("p",null,"By default, no limit is used."),(0,o.kt)("p",null,"Note, that at this point ",(0,o.kt)("inlineCode",{parentName:"p"},"client_connection_rate_limit")," does not affect connections coming over GRPC unidirectional transport."),(0,o.kt)("h3",{id:"client_queue_max_size"},"client_queue_max_size"),(0,o.kt)("p",null,"Default: 1048576"),(0,o.kt)("p",null,"Maximum client message queue size in bytes to close slow reader connections. By default - 1mb."),(0,o.kt)("h3",{id:"client_concurrency"},"client_concurrency"),(0,o.kt)("p",null,"Default: 0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client_concurrency")," when set tells Centrifugo that commands from a client must be processed concurrently."),(0,o.kt)("p",null,"By default, concurrency disabled \u2013 Centrifugo processes commands received from a client one by one. This means that if a client issues two RPC requests to a server then Centrifugo will process the first one, then the second one. If the first RPC call is slow then the client will wait for the second RPC response much longer than it could (even if the second RPC is very fast). If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"client_concurrency")," to some value greater than 1 then commands will be processed concurrently (in parallel) in separate goroutines (with maximum concurrency level capped by ",(0,o.kt)("inlineCode",{parentName:"p"},"client_concurrency")," value). Thus, this option can effectively reduce the latency of individual requests. Since separate goroutines are involved in processing this mode adds some performance and memory overhead \u2013 though it should be pretty negligible in most cases. This option applies to all commands from a client (including subscribe, publish, presence, etc)."),(0,o.kt)("h3",{id:"client_stale_close_delay"},"client_stale_close_delay"),(0,o.kt)("p",null,"Duration, default: 10s"),(0,o.kt)("p",null,"This option allows tuning the maximum time Centrifugo will wait for the connect frame (which contains authentication information) from the client after establishing connection. Default value should be reasonable for most use cases."),(0,o.kt)("h3",{id:"allow_anonymous_connect_without_token"},"allow_anonymous_connect_without_token"),(0,o.kt)("p",null,"Default: false"),(0,o.kt)("p",null,"Enable a mode when all clients can connect to Centrifugo without JWT. In this case, all connections without a token will be treated as anonymous (i.e. with empty user ID). Access to channel operations should be explicitly enabled for anonymous connections."),(0,o.kt)("h3",{id:"disallow_anonymous_connection_tokens"},"disallow_anonymous_connection_tokens"),(0,o.kt)("p",null,"Default: false"),(0,o.kt)("p",null,"When the option is set Centrifugo won't accept connections from anonymous users even if they provided a valid JWT. I.e. if token is valid, but ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," claim is empty \u2013 then Centrifugo closes connection with advice to not reconnect again."),(0,o.kt)("h3",{id:"gomaxprocs"},"gomaxprocs"),(0,o.kt)("p",null,"Default: 0"),(0,o.kt)("p",null,"By default, Centrifugo runs on all available CPU cores (also Centrifugo can look at cgroup limits when rnning in Docker/Kubernetes). To limit the number of cores Centrifugo can utilize in one moment use this option."),(0,o.kt)("h2",{id:"endpoint-configuration"},"Endpoint configuration"),(0,o.kt)("p",null,"After Centrifugo started there are several endpoints available."),(0,o.kt)("h3",{id:"default-endpoints"},"Default endpoints"),(0,o.kt)("p",null,"Bidirectional WebSocket default endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://localhost:8000/connection/websocket\n")),(0,o.kt)("p",null,"Bidirectional emulation with HTTP-streaming (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://localhost:8000/connection/http_stream\n")),(0,o.kt)("p",null,"Bidirectional emulation with SSE (EventSource) (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://localhost:8000/connection/sse\n")),(0,o.kt)("p",null,"Bidirectional SockJS default endpoint (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/connection/sockjs\n")),(0,o.kt)("p",null,"Unidirectional EventSource endpoint (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/connection/uni_sse\n")),(0,o.kt)("p",null,"Unidirectional HTTP streaming endpoint (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/connection/uni_http_stream\n")),(0,o.kt)("p",null,"Unidirectional WebSocket endpoint (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/connection/uni_websocket\n")),(0,o.kt)("p",null,"Unidirectional SSE (EventSource) endpoint (disabled by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/connection/uni_sse\n")),(0,o.kt)("p",null,"Server HTTP API endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/api\n")),(0,o.kt)("p",null,"By default, all endpoints work on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8000"),". This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "port": 9000\n}\n')),(0,o.kt)("p",null,"In production setup, you may have a proper domain name in endpoint addresses above instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),". While domain name and port parts can differ depending on setup \u2013 URL paths stay the same: ",(0,o.kt)("inlineCode",{parentName:"p"},"/connection/sockjs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/connection/websocket"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," etc."),(0,o.kt)("h3",{id:"admin-endpoints"},"Admin endpoints"),(0,o.kt)("p",null,"Admin web UI endpoint works on root path by default, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,o.kt)("p",null,"For more details about admin web UI, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/admin_web"},"Admin web UI documentation"),"."),(0,o.kt)("h3",{id:"debug-endpoints"},"Debug endpoints"),(0,o.kt)("p",null,"Next, when Centrifugo started in debug mode some extra debug endpoints become available. To start in debug mode add ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," option to config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "debug": true\n}\n')),(0,o.kt)("p",null,"And endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8000/debug/pprof/\n")),(0,o.kt)("p",null,"\u2013 will show useful information about the internal state of Centrifugo instance. This info is especially helpful when troubleshooting. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/wiki/Investigating-performance-issues"},"wiki page")," for more info."),(0,o.kt)("h3",{id:"health-check-endpoint"},"Health check endpoint"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"health")," boolean option (by default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") to enable the health check endpoint which will be available on path ",(0,o.kt)("inlineCode",{parentName:"p"},"/health"),". Also available over command-line flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo -c config.json --health\n")),(0,o.kt)("h3",{id:"swagger-ui-for-server-api"},"Swagger UI for server API"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger")," boolean option (by default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") to enable Swagger UI for ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"server HTTP API"),". UI will be available on path ",(0,o.kt)("inlineCode",{parentName:"p"},"/swagger"),". Also available over command-line flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo -c config.json --swagger\n")),(0,o.kt)("h3",{id:"custom-internal-ports"},"Custom internal ports"),(0,o.kt)("p",null,"We strongly recommend not expose API, admin, debug, health, and Prometheus endpoints to the Internet. The following Centrifugo endpoints are considered internal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API endpoint (",(0,o.kt)("inlineCode",{parentName:"li"},"/api"),") - for HTTP API requests"),(0,o.kt)("li",{parentName:"ul"},"Admin web interface endpoints (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/admin/auth"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/admin/api"),") - used by web interface"),(0,o.kt)("li",{parentName:"ul"},"Prometheus endpoint (",(0,o.kt)("inlineCode",{parentName:"li"},"/metrics"),") - used for exposing server metrics in Prometheus format "),(0,o.kt)("li",{parentName:"ul"},"Health check endpoint (",(0,o.kt)("inlineCode",{parentName:"li"},"/health"),") - used to do health checks"),(0,o.kt)("li",{parentName:"ul"},"Debug endpoints (",(0,o.kt)("inlineCode",{parentName:"li"},"/debug/pprof"),") - used to inspect internal server state"),(0,o.kt)("li",{parentName:"ul"},"Swagger UI endpoint (",(0,o.kt)("inlineCode",{parentName:"li"},"/swagger"),") - used for showing embedded Swagger UI for server HTTP API")),(0,o.kt)("p",null,"It's a good practice to protect all these endpoints with a firewall. For example, it's possible to configure in ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," section of the Nginx configuration."),(0,o.kt)("p",null,"Though sometimes you don't have access to a per-location configuration in your proxy/load balancer software. For example when using Amazon ELB. In this case, you can change ports on which your internal endpoints work."),(0,o.kt)("p",null,"To run internal endpoints on custom port use ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_port")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "internal_port": 9000\n}\n')),(0,o.kt)("p",null,"So admin web interface will work on address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:9000\n")),(0,o.kt)("p",null,"Also, debug page will be available on a new custom port too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:9000/debug/pprof/\n")),(0,o.kt)("p",null,"The same for API and Prometheus endpoints."),(0,o.kt)("h3",{id:"disable-default-endpoints"},"Disable default endpoints"),(0,o.kt)("p",null,"To disable websocket endpoint set ",(0,o.kt)("inlineCode",{parentName:"p"},"websocket_disable")," boolean option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"To disable API endpoint set ",(0,o.kt)("inlineCode",{parentName:"p"},"api_disable")," boolean option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"customize-handler-endpoints"},"Customize handler endpoints"),(0,o.kt)("p",null,"It's possible to customize server HTTP handler endpoints. To do this Centrifugo supports several options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"admin_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - to control Admin panel URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"websocket_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/websocket"'),") - to control WebSocket URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http_stream_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/http_stream"'),") - to control HTTP-streaming URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sse_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/sse"'),") - to control SSE/EventSource URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"emulation_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/emulation"'),") - to control emulation endpoint prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sockjs_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/sockjs"'),") - to control SockJS URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uni_sse_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/uni_sse"'),") - to control unidirectional Eventsource URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uni_http_stream_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/uni_http_stream"'),") - to control unidirectional HTTP streaming URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uni_websocket_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/connection/uni_websocket"'),") - to control unidirectional WebSocket URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/api"'),") - to control HTTP API URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prometheus_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/metrics"'),") - to control Prometheus URL prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"health_handler_prefix")," (default ",(0,o.kt)("inlineCode",{parentName:"li"},'"/health"'),") - to control health check URL prefix")),(0,o.kt)("h2",{id:"signal-handling"},"Signal handling"),(0,o.kt)("p",null,"It's possible to send HUP signal to Centrifugo to reload a configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kill -HUP <PID>\n")),(0,o.kt)("p",null,"Though at moment ",(0,o.kt)("strong",{parentName:"p"},"this will only reload token secrets and channel options (top-level and namespaces)"),"."),(0,o.kt)("p",null,"Centrifugo tries to gracefully shut down client connections when SIGINT or SIGTERM signals are received. By default, the maximum graceful shutdown period is 30 seconds but can be changed using ",(0,o.kt)("inlineCode",{parentName:"p"},"shutdown_timeout")," (integer, in seconds) configuration option."),(0,o.kt)("h2",{id:"insecure-modes"},"Insecure modes"),(0,o.kt)("h3",{id:"insecure-client-connection"},"Insecure client connection"),(0,o.kt)("p",null,"The boolean option ",(0,o.kt)("inlineCode",{parentName:"p"},"client_insecure")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") allows connecting to Centrifugo without JWT token. In this mode, there is no user authentication involved. It also disables permission checks on client API level - for presence and history calls. This mode can be useful for demo projects based on Centrifugo, integration tests, local projects, or real-time application prototyping. Don't use it in production until you 100% know what you are doing."),(0,o.kt)("h3",{id:"disable-client-token-signature-check"},"Disable client token signature check"),(0,o.kt)("p",null,"Available since Centrifugo v5.0.4"),(0,o.kt)("p",null,"The boolean option ",(0,o.kt)("inlineCode",{parentName:"p"},"client_insecure_skip_token_signature_verify")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"), if enabled \u2013 tells Centrifugo to skip JWT signature verification - for both connection and subscription tokens. This is absolutely ",(0,o.kt)("strong",{parentName:"p"},"insecure")," and must only be used for development and testing purposes. Token claims are parsed as usual - so token should still follow JWT format."),(0,o.kt)("h3",{id:"insecure-api-mode"},"Insecure API mode"),(0,o.kt)("p",null,"This mode can be enabled using the boolean option ",(0,o.kt)("inlineCode",{parentName:"p"},"api_insecure")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). When on there is no need to provide API key in HTTP requests. When using this mode everyone that has access to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," endpoint can send any command to server. Enabling this option can be reasonable if ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," endpoint is protected by firewall rules."),(0,o.kt)("p",null,"The option is also useful in development to simplify sending API commands to Centrifugo using CURL for example without specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header in requests."),(0,o.kt)("h3",{id:"insecure-admin-mode"},"Insecure admin mode"),(0,o.kt)("p",null,"This mode can be enabled using the boolean option ",(0,o.kt)("inlineCode",{parentName:"p"},"admin_insecure")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). When on there is no authentication in the admin web interface. Again - this is not secure but can be justified if you protected the admin interface by firewall rules or you want to use basic authentication for the Centrifugo admin interface (configured on proxy level)."),(0,o.kt)("h2",{id:"setting-time-duration-options"},"Setting time duration options"),(0,o.kt)("p",null,"Time durations in Centrifugo can be set using strings where duration value and unit are both provided. For example, to set 5 seconds duration use ",(0,o.kt)("inlineCode",{parentName:"p"},'"5s"'),"."),(0,o.kt)("p",null,"The minimal time resolution is 1ms. Some options of Centrifugo only support second precision (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," channel option)."),(0,o.kt)("p",null,'Valid time units are "ms" (milliseconds), "s" (seconds), "m" (minutes), "h" (hours).'),(0,o.kt)("p",null,"Some examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"1000ms" // 1000 milliseconds\n"1s"     // 1 second\n"12h"    // 12 hours\n"720h"   // 30 days\n')),(0,o.kt)("h2",{id:"setting-namespaces-over-env"},"Setting namespaces over env"),(0,o.kt)("p",null,"While setting most options in Centrifugo over env is pretty straightforward setting namespaces is a bit special:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'CENTRIFUGO_NAMESPACES=\'[{"name": "ns1"}, {"name": "ns2"}]\' ./centrifugo\n')),(0,o.kt)("p",null,"I.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_NAMESPACES")," environment variable should be a valid JSON string that represents namespaces array."),(0,o.kt)("h2",{id:"anonymous-usage-stats"},"Anonymous usage stats"),(0,o.kt)("p",null,"Centrifugo periodically sends anonymous usage information (once in 24 hours). That information is impersonal and does not include sensitive data, passwords, IP addresses, hostnames, etc. Only counters to estimate version and installation size distribution, and feature usage."),(0,o.kt)("p",null,"Please do not disable usage stats sending without reason. If you depend on Centrifugo \u2013 sure you are interested in further project improvements. Usage stats help us understand Centrifugo use cases better, concentrate on widely-used features, and be confident we are moving in the right direction. Developing in the dark is hard, and decisions may be non-optimal."),(0,o.kt)("p",null,"To disable sending usage stats set ",(0,o.kt)("inlineCode",{parentName:"p"},"usage_stats_disable")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "usage_stats_disable": true\n}\n')))}u.isMDXComponent=!0}}]);