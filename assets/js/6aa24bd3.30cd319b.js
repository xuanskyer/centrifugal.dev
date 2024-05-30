"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6103],{19203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(85893),r=n(11151);const o={title:"Stream logs from Loki to browser with Centrifugo Websocket-to-GRPC subscriptions",tags:["centrifugo","loki","grpc"],description:"Centrifugo has GRPC subscription streams feature, in this post we show how this feature may simplify a task of delivering data to application UI in real-time. We integrate with Loki, injest log entries and stream logs to the browser based on user-supplied query",author:"Alexander Emelin",authorTitle:"Founder of Centrifugal Labs",authorImageURL:"/img/alexander_emelin.jpeg",image:"/img/centrifugo_loki.jpg",hide_table_of_contents:!1},s=void 0,a={permalink:"/blog/2024/03/18/stream-loki-logs-to-browser-with-websocket-to-grpc-subscriptions",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2024-03-18-stream-loki-logs-to-browser-with-websocket-to-grpc-subscriptions.md",source:"@site/blog/2024-03-18-stream-loki-logs-to-browser-with-websocket-to-grpc-subscriptions.md",title:"Stream logs from Loki to browser with Centrifugo Websocket-to-GRPC subscriptions",description:"Centrifugo has GRPC subscription streams feature, in this post we show how this feature may simplify a task of delivering data to application UI in real-time. We integrate with Loki, injest log entries and stream logs to the browser based on user-supplied query",date:"2024-03-18T00:00:00.000Z",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"loki",permalink:"/blog/tags/loki"},{label:"grpc",permalink:"/blog/tags/grpc"}],readingTime:7.955,hasTruncateMarker:!0,authors:[{name:"Alexander Emelin",title:"Founder of Centrifugal Labs",imageURL:"/img/alexander_emelin.jpeg"}],frontMatter:{title:"Stream logs from Loki to browser with Centrifugo Websocket-to-GRPC subscriptions",tags:["centrifugo","loki","grpc"],description:"Centrifugo has GRPC subscription streams feature, in this post we show how this feature may simplify a task of delivering data to application UI in real-time. We integrate with Loki, injest log entries and stream logs to the browser based on user-supplied query",author:"Alexander Emelin",authorTitle:"Founder of Centrifugal Labs",authorImageURL:"/img/alexander_emelin.jpeg",image:"/img/centrifugo_loki.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Experimenting with real-time data compression by simulating a football match events",permalink:"/blog/2024/05/30/real-time-data-compression-experiments"},nextItem:{title:"Discovering Centrifugo PRO: push notifications API",permalink:"/blog/2023/10/29/discovering-centrifugo-pro-push-notifications"}},l={authorsImageUrls:[void 0]},c=[{value:"What Are Proxy Subscription Streams?",id:"what-are-proxy-subscription-streams",level:2},{value:"Demo and source code",id:"demo-and-source-code",level:2},{value:"Setting Up Loki",id:"setting-up-loki",level:2},{value:"Configuring Centrifugo",id:"configuring-centrifugo",level:2},{value:"Writing frontend",id:"writing-frontend",level:2},{value:"Handle subscription stream on the Go side",id:"handle-subscription-stream-on-the-go-side",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/centrifugo_loki.jpg"}),"\n",(0,i.jsxs)(t.p,{children:["As of version 5.1.0, Centrifugo introduces an experimental yet powerful extension that promises to simplify the data delivery process to the browser using GRPC streams. We believe it may help you to solve some practical tasks in minutes. Let's dive into how this feature works and how you can leverage it in your applications integrating with ",(0,i.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Loki"})," real-time log streaming capabilities."]}),"\n",(0,i.jsx)(t.h2,{id:"what-are-proxy-subscription-streams",children:"What Are Proxy Subscription Streams?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/server/proxy_streams",children:"Proxy Subscription Streams"})," support pushing data directly to Centrifugo client channel subscriptions from your application backend over GRPC streams. This feature is designed to facilitate individual data streams to clients as soon as they subscribe to a channel, acting as a bridge between WebSocket connections from clients and GRPC streams to the backend. It supports both unidirectional (backend to client) and bidirectional (both ways) streams, thereby enhancing flexibility in data streaming."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(75968).Z+"",width:"3242",height:"1065"})}),"\n",(0,i.jsxs)(t.p,{children:["The design is inspired by ",(0,i.jsx)(t.a,{href:"http://websocketd.com/",children:"Websocketd"})," server \u2013 but while Websocketd transforms data from programs running locally, Centrifugo provides a more generic network interface with GRPC. And all other features of Centrifugo like connection authentication, online presence come as a great bonus."]}),"\n",(0,i.jsx)(t.p,{children:"In the documentation for Proxy Subscription Streams we mentioned streaming logs from Loki as one of the possible use cases. Let's expand on the idea and implement the working solution in just 10 minutes."}),"\n",(0,i.jsx)(t.h2,{id:"demo-and-source-code",children:"Demo and source code"}),"\n",(0,i.jsx)(t.p,{children:"Here is a demo of what we well get:"}),"\n",(0,i.jsx)("video",{width:"100%",loop:!0,autoPlay:"autoplay",muted:!0,controls:"",src:"/img/loki.mp4"}),"\n",(0,i.jsxs)(t.p,{children:["Take a look at ",(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/examples/tree/master/v5/subscription_streams_loki",children:"full source code on Github"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-loki",children:"Setting Up Loki"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Loki"})," is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost-effective and easy to operate, making it a perfect candidate for our real-time log streaming example."]}),"\n",(0,i.jsxs)(t.p,{children:["We will build the example using Docker Compose, all we have to do for the example is to include Loki image to ",(0,i.jsx)(t.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'services:\n  loki:\n    image: grafana/loki:2.9.5\n    ports:\n      - "3100:3100"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Loki can ingest logs via various methods, including Promtail, Grafana Agent, Fluentd, and more. For simplicity, we will send logs to Loki ourselves from the Go application."}),"\n",(0,i.jsx)(t.p,{children:"To send logs to Loki, we can use the HTTP API that Loki provides. This is a straightforward way to push logs directly from an application. The example below demonstrates how to create a simple Go application that generates logs and sends them to Loki using HTTP POST requests."}),"\n",(0,i.jsx)(t.p,{children:"For this post we will be using Go language to implement the backend part. But it could be any other programming language."}),"\n",(0,i.jsx)(t.p,{children:"First, let's some code to send a log entries to Loki:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'const (\n\tlokiPushEndpoint = "http://loki:3100/loki/api/v1/push"\n)\n\ntype lokiPushMessage struct {\n\tStreams []lokiStream `json:"streams"`\n}\n\ntype lokiStream struct {\n\tStream map[string]string `json:"stream"`\n\tValues [][]string        `json:"values"`\n}\n\nfunc sendLogMessageToLoki(_ context.Context) error {\n\tsources := []string{"backend1", "backend2", "backend3"}\n\tsource := sources[rand.Intn(len(sources))]\n\tlogMessage := fmt.Sprintf("log from %s source", source)\n\n\tpayload := lokiPushMessage{\n\t\tStreams: []lokiStream{\n\t\t\t{\n\t\t\t\tStream: map[string]string{\n\t\t\t\t\t"source": source,\n\t\t\t\t},\n\t\t\t\tValues: [][]string{\n\t\t\t\t\t{fmt.Sprintf("%d", time.Now().UnixNano()), logMessage},\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t}\n\n\tjsonData, err := json.Marshal(payload)\n\tif err != nil {\n\t\treturn err\n\t}\n\tresp, err := http.Post(\n\t\tlokiPushEndpoint, "application/json", bytes.NewBuffer(jsonData))\n\tif err != nil {\n\t\treturn err\n\t}\n\tdefer resp.Body.Close()\n\n\tif resp.StatusCode != http.StatusNoContent {\n\t\treturn fmt.Errorf("unexpected status code: %d", resp.StatusCode)\n\t}\n\treturn nil\n}\n\nfunc sendLogsToLoki(ctx context.Context) {\n\tfor {\n\t\tselect {\n\t\tcase <-ctx.Done():\n\t\t\treturn\n\t\tcase <-time.After(200 * time.Millisecond):\n\t\t\terr := sendLogMessageToLoki(ctx)\n\t\t\tif err != nil {\n\t\t\t\tlog.Println("error sending log to Loki:", err)\n\t\t\t\tcontinue\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunc main() {\n\tctx, cancel := signal.NotifyContext(context.Background(), syscall.SIGTERM, syscall.SIGINT)\n\tdefer cancel()\n\n\tsendLogsToLoki(ctx)\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This program defines a ",(0,i.jsx)(t.code,{children:"sendLogsToLoki"})," function that constructs a log entry and sends it to Loki using its HTTP API. It continuously generates log messages every 200 milliseconds."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"lokiPushMessage"})," struct is structured to match the JSON payload expected by Loki's ",(0,i.jsx)(t.a,{href:"https://grafana.com/docs/loki/latest/reference/api/#push-log-entries-to-loki",children:(0,i.jsx)(t.code,{children:"/loki/api/v1/push"})})," endpoint. Each log entry consists of a set of labels (in the Stream map) and log line values, where each value is a two-element array containing the timestamp and the log line. The timestamp is in nanoseconds to match Loki's expected format."]}),"\n",(0,i.jsxs)(t.p,{children:["Note, in the example we randomly set log entry ",(0,i.jsx)(t.code,{children:"source"})," label choosing between ",(0,i.jsx)(t.code,{children:"backend1"}),", ",(0,i.jsx)(t.code,{children:"backend2"})," and ",(0,i.jsx)(t.code,{children:"backend3"})," values."]}),"\n",(0,i.jsx)(t.p,{children:"At this point our program pushes some logs to Loki, now let's add Centrifugo to consume them from browser in real-time."}),"\n",(0,i.jsx)(t.h2,{id:"configuring-centrifugo",children:"Configuring Centrifugo"}),"\n",(0,i.jsx)(t.p,{children:"Adding Centrifugo is also rather straightforward:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"services:\n  centrifugo:\n    image: centrifugo/centrifugo:v5.3.0\n    restart: unless-stopped\n    volumes:\n      - ./centrifugo/config.json:/centrifugo/config.json\n    command: centrifugo -c config.json\n    expose:\n      - 8000\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"config.json"})," is:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "client_insecure": true,\n    "allowed_origins": ["http://localhost:9000"],\n    "proxy_subscribe_stream_endpoint": "grpc://backend:12000",\n    "proxy_subscribe_stream_timeout": "3s",\n    "namespaces": [\n      {\n          "name": "logs",\n          "proxy_subscribe_stream": true\n      }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Note, we enabled ",(0,i.jsx)(t.code,{children:"client_insecure"})," option here \u2013 this is to keep example short, but in real live you may benefit from Centrifugo authentication: ",(0,i.jsx)(t.a,{href:"/docs/server/authentication",children:"JWT-based"})," or ",(0,i.jsx)(t.a,{href:"/docs/server/proxy#connect-proxy",children:"proxy-based"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"writing-frontend",children:"Writing frontend"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Streaming logs with Centrifugo and Loki</title>\n</head>\n<body>\n    <div id="app">\n        <form id="input" onsubmit="subscribeToLogs(event)">\n            <input type="text" id="query" autocomplete="off" placeholder="Enter log query" />\n            <button id="submit" type="submit">SUBSCRIBE</button>\n        </form>\n        <div id="logs" style="margin-top: 20px;">\n            <ul id="lines"></ul>\n        </div>\n    </div>\n    <script src="https://unpkg.com/centrifuge@^5/dist/centrifuge.js"><\/script>\n    <script src="app.js"><\/script>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(t.p,{children:"In the final version we've also included some CSS to this HTML to make it look a bit nicer."}),"\n",(0,i.jsxs)(t.p,{children:["And our Javascript code in ",(0,i.jsx)(t.code,{children:"app.js"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const logs = document.getElementById('logs');\nconst lines = document.getElementById('lines');\nconst queryInput = document.getElementById('query');\nconst button = document.getElementById('submit');\n\nfunction subscribeToLogs(e) {\n    e.preventDefault();\n\n    const query = queryInput.value;\n    if (!query) {\n        alert('Please enter a query.');\n        return;\n    }\n    queryInput.disabled = true;\n    button.disabled = true;\n\n    const centrifuge = new Centrifuge('ws://localhost:9000/connection/websocket');\n\n    const subscription = centrifuge.newSubscription('logs:stream', {\n        data: { query: query }\n    });\n\n    subscription.on('publication', function(ctx) {\n        const logLine = ctx.data.line;\n        const logItem = document.createElement('li');\n        logItem.textContent = logLine;\n        lines.appendChild(logItem);\n        logs.scrollTop = logs.scrollHeight;\n    });\n\n    subscription.subscribe();\n    centrifuge.connect();\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"In the final example we've also added Nginx container to serve static files and proxy WebSocket connections to Centrifugo. Check it out in the source code."}),"\n",(0,i.jsxs)(t.p,{children:["When user enters Loki query to input, subscription goes to Centrifugo and Centrifugo then realizes it's a proxy stream subscription (since channel belongs to ",(0,i.jsx)(t.code,{children:"logs"})," channel namespace). Centrifugo then calls the backend GRPC endpoint (",(0,i.jsx)(t.code,{children:"backend:12000"}),") and expect it to implement unidirectional GRPC stream contract. Our last part here - to implement it."]}),"\n",(0,i.jsx)(t.h2,{id:"handle-subscription-stream-on-the-go-side",children:"Handle subscription stream on the Go side"}),"\n",(0,i.jsx)(t.p,{children:"On your backend, we'll implement a GRPC service that interacts with Loki to tail logs and then re-send them to Centrifugo subscription stream. Let's implement such service."}),"\n",(0,i.jsxs)(t.p,{children:["We first need to take Centrifugo ",(0,i.jsx)(t.a,{href:"https://github.com/centrifugal/centrifugo/blob/master/internal/proxyproto/proxy.proto",children:"proxy.proto"})," definitions. And we will implement ",(0,i.jsx)(t.code,{children:"SubscribeUnidirectional"})," method from it."]}),"\n",(0,i.jsxs)(t.p,{children:["You need to install ",(0,i.jsx)(t.a,{href:"https://grpc.io/docs/protoc-installation/",children:(0,i.jsx)(t.code,{children:"protoc"})}),", also install plugins for Go and GRPC:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"protoc -I ./ proxy.proto --go_out=./ --go-grpc_out=./\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will generate Protobuf messages and GRPC code required for writing GRPC service. We can use generated definitions now:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n\t"log"\n\t"fmt"\n\n\tpb "backend/internal/proxyproto"\n\t"github.com/grafana/loki/pkg/logproto"\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/credentials/insecure"\n)\n\nconst (\n\tlokiGRPCAddress  = "loki:9095"\n)\n\ntype streamerServer struct {\n\tpb.UnimplementedCentrifugoProxyServer\n\tlokiQuerierClient logproto.QuerierClient\n}\n\ntype clientData struct {\n\tQuery string `json:"query"`\n}\n\nfunc (s *streamerServer) SubscribeUnidirectional(\n\treq *pb.SubscribeRequest,\n\tstream pb.CentrifugoProxy_SubscribeUnidirectionalServer,\n) error {\n\tvar cd clientData\n\terr := json.Unmarshal(req.Data, &cd)\n\tif err != nil {\n\t\treturn fmt.Errorf("error unmarshaling data: %w", err)\n\t}\n\tquery := &logproto.TailRequest{\n\t\tQuery: cd.Query,\n\t}\n\tctx, cancel := context.WithCancel(stream.Context())\n\tdefer cancel()\n\n\tlogStream, err := s.lokiQuerierClient.Tail(ctx, query)\n\tif err != nil {\n\t\treturn fmt.Errorf("error querying Loki: %w", err)\n\t}\n\n\tstarted := time.Now()\n\tlog.Println("unidirectional subscribe called with request", req)\n\tdefer func() {\n\t\tlog.Println("unidirectional subscribe finished, elapsed", time.Since(started))\n\t}()\n\terr = stream.Send(&pb.StreamSubscribeResponse{\n\t\tSubscribeResponse: &pb.SubscribeResponse{},\n\t})\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tfor {\n\t\tselect {\n\t\tcase <-stream.Context().Done():\n\t\t\treturn stream.Context().Err()\n\t\tdefault:\n\t\t\tresp, err := logStream.Recv()\n\t\t\tif err != nil {\n\t\t\t\treturn fmt.Errorf("error receiving from Loki stream: %v", err)\n\t\t\t}\n\t\t\tfor _, entry := range resp.Stream.Entries {\n\t\t\t\tline := fmt.Sprintf("%s: %s", entry.Timestamp.Format("2006-01-02T15:04:05.000Z07:00"), entry.Line)\n\t\t\t\terr = stream.Send(&pb.StreamSubscribeResponse{\n\t\t\t\t\tPublication: &pb.Publication{Data: []byte(`{"line":"` + line + `"}`)},\n\t\t\t\t})\n\t\t\t\tif err != nil {\n\t\t\t\t\treturn err\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunc main() {\n\tquerierConn, err := grpc.Dial(lokiGRPCAddress, grpc.WithTransportCredentials(insecure.NewCredentials()))\n\tif err != nil {\n\t\tlog.Fatalf("failed to dial Loki: %v", err)\n\t}\n\tquerierClient := logproto.NewQuerierClient(querierConn)\n\n\taddr := ":12000"\n\tlis, err := net.Listen("tcp", addr)\n\tif err != nil {\n\t\tlog.Fatalf("failed to listen: %v", err)\n\t}\n\n\ts := grpc.NewServer(grpc.MaxConcurrentStreams(math.MaxUint32))\n\tpb.RegisterCentrifugoProxyServer(s, &streamerServer{\n\t\tlokiQuerierClient: querierClient,\n\t})\n\n\tlog.Println("Server listening on", addr)\n\tif err := s.Serve(lis); err != nil {\n\t\tlog.Fatalf("failed to serve: %v", err)\n\t}\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Things to note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Loki also supports GRPC interface to tail logs, so we use it here. We could also use Loki WebSocket endpoint ",(0,i.jsx)(t.a,{href:"https://grafana.com/docs/loki/latest/reference/api/#stream-log-messages",children:(0,i.jsx)(t.code,{children:"/loki/api/v1/tail"})})," but this would mean establishing new connection for every tail operation - with GRPC we can use many concurrent tail requests all multiplexed over a single network connection."]}),"\n",(0,i.jsx)(t.li,{children:"When subscription stream initialized from Centrifugo side we start tailing logs from Loki and resend them to Centrifugo"}),"\n",(0,i.jsx)(t.li,{children:"Centrifugo then packs data to WebSocket connection and delivers to browser."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Note, we bypass some security considerations in this example. In practice you must be more careful with query supplied by user in the form - validate and sanitize it before passing to Loki. Proxy subscription GRPC contract allows you to communicate custom errors with the client-side."})}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Subscription streams may be a very powerful generic feature in your arsenal. Here we've shown how simple it could be to make a proof of concept of the real-time application which consumes individual data from third-party streaming provider."}),"\n",(0,i.jsx)(t.p,{children:"Centrifugo provides WebSocket SDKs for popular languages used to build UI layer, provides authentication and proper management of real-time connections. And with subscription streams feature Centrifugo gives you an answer on how to quickly translate real-time data based on individual query to user."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},75968:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on_demand_stream_connections-7cc823b5765cd558dba320f7f7bfa439.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);