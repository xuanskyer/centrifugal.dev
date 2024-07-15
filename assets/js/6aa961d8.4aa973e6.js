"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3321],{96145:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(85893),i=s(11151);const t={id:"observability",title:"Server observability"},o=void 0,c={id:"server/observability",title:"Server observability",description:"To provide a better server observability Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite.",source:"@site/docs/server/observability.md",sourceDirName:"server",slug:"/server/observability",permalink:"/docs/server/observability",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/observability.md",tags:[],version:"current",frontMatter:{id:"observability",title:"Server observability"},sidebar:"Guides",previous:{title:"Admin web UI",permalink:"/docs/server/admin_web"},next:{title:"Infrastructure tuning",permalink:"/docs/server/infra_tuning"}},l={},d=[{value:"Metrics",id:"metrics",level:2},{value:"Prometheus metrics",id:"prometheus-metrics",level:3},{value:"Graphite metrics",id:"graphite-metrics",level:3},{value:"Grafana dashboard",id:"grafana-dashboard",level:3},{value:"Exposed metrics",id:"exposed-metrics",level:3},{value:"centrifugo_node_messages_sent_count",id:"centrifugo_node_messages_sent_count",level:4},{value:"centrifugo_node_messages_received_count",id:"centrifugo_node_messages_received_count",level:4},{value:"centrifugo_node_action_count",id:"centrifugo_node_action_count",level:4},{value:"centrifugo_node_num_clients",id:"centrifugo_node_num_clients",level:4},{value:"centrifugo_node_num_users",id:"centrifugo_node_num_users",level:4},{value:"centrifugo_node_num_subscriptions",id:"centrifugo_node_num_subscriptions",level:4},{value:"centrifugo_node_num_nodes",id:"centrifugo_node_num_nodes",level:4},{value:"centrifugo_node_build",id:"centrifugo_node_build",level:4},{value:"centrifugo_node_num_channels",id:"centrifugo_node_num_channels",level:4},{value:"centrifugo_node_survey_duration_seconds",id:"centrifugo_node_survey_duration_seconds",level:4},{value:"centrifugo_client_num_reply_errors",id:"centrifugo_client_num_reply_errors",level:4},{value:"centrifugo_client_num_server_unsubscribes",id:"centrifugo_client_num_server_unsubscribes",level:4},{value:"centrifugo_client_num_server_disconnects",id:"centrifugo_client_num_server_disconnects",level:4},{value:"centrifugo_client_command_duration_seconds",id:"centrifugo_client_command_duration_seconds",level:4},{value:"centrifugo_client_recover",id:"centrifugo_client_recover",level:4},{value:"centrifugo_client_connection_limit_reached_total",id:"centrifugo_client_connection_limit_reached_total",level:4},{value:"centrifugo_client_ping_pong_duration_seconds",id:"centrifugo_client_ping_pong_duration_seconds",level:4},{value:"centrifugo_transport_connect_count",id:"centrifugo_transport_connect_count",level:4},{value:"centrifugo_transport_messages_sent",id:"centrifugo_transport_messages_sent",level:4},{value:"centrifugo_transport_messages_sent_size",id:"centrifugo_transport_messages_sent_size",level:4},{value:"centrifugo_transport_messages_received",id:"centrifugo_transport_messages_received",level:4},{value:"centrifugo_transport_messages_received_size",id:"centrifugo_transport_messages_received_size",level:4},{value:"centrifugo_proxy_duration_seconds",id:"centrifugo_proxy_duration_seconds",level:4},{value:"centrifugo_proxy_errors",id:"centrifugo_proxy_errors",level:4},{value:"centrifugo_granular_proxy_duration_seconds",id:"centrifugo_granular_proxy_duration_seconds",level:4},{value:"centrifugo_granular_proxy_errors",id:"centrifugo_granular_proxy_errors",level:4},{value:"centrifugo_api_command_duration_seconds",id:"centrifugo_api_command_duration_seconds",level:4},{value:"centrifugo_api_command_duration_seconds_histogram",id:"centrifugo_api_command_duration_seconds_histogram",level:4},{value:"centrifugo_node_pub_sub_lag_seconds",id:"centrifugo_node_pub_sub_lag_seconds",level:4},{value:"centrifugo_node_broadcast_duration_seconds",id:"centrifugo_node_broadcast_duration_seconds",level:4},{value:"Traces",id:"traces",level:2},{value:"OpenTelemetry",id:"opentelemetry",level:3},{value:"Logs",id:"logs",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To provide a better server observability Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite."}),"\n",(0,r.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(n.h3,{id:"prometheus-metrics",children:"Prometheus metrics"}),"\n",(0,r.jsxs)(n.p,{children:["To enable Prometheus endpoint start Centrifugo with ",(0,r.jsx)(n.code,{children:"prometheus"})," option on:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "prometheus": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will enable ",(0,r.jsx)(n.code,{children:"/metrics"})," endpoint so the Centrifugo instance can be monitored by your Prometheus server."]}),"\n",(0,r.jsx)(n.h3,{id:"graphite-metrics",children:"Graphite metrics"}),"\n",(0,r.jsx)(n.p,{children:"To enable automatic export to Graphite (via TCP):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "graphite": true,\n    "graphite_host": "localhost",\n    "graphite_port": 2003\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"By default, stats will be aggregated over 10 seconds intervals inside Centrifugo and then pushed to Graphite over TCP connection."}),"\n",(0,r.jsxs)(n.p,{children:["If you need to change this aggregation interval use the ",(0,r.jsx)(n.code,{children:"graphite_interval"})," option (in seconds, default ",(0,r.jsx)(n.code,{children:"10"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"grafana-dashboard",children:"Grafana dashboard"}),"\n",(0,r.jsxs)(n.p,{children:["Check out Centrifugo ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/13039",children:"official Grafana dashboard"})," for Prometheus storage. You can import that dashboard to your Grafana, point to Prometheus storage \u2013 and enjoy visualized metrics."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://grafana.com/api/dashboards/13039/images/8950/image",alt:""})}),"\n",(0,r.jsx)(n.h3,{id:"exposed-metrics",children:"Exposed metrics"}),"\n",(0,r.jsx)(n.p,{children:"Here is a description of various metrics exposed by Centrifugo."}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_messages_sent_count",children:"centrifugo_node_messages_sent_count"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," type"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the number of messages sent by a node to the broker."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this metric to monitor the outgoing message rate and detect any anomalies or spikes in the data flow."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_messages_received_count",children:"centrifugo_node_messages_received_count"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," type"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the number of messages received from the broker."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in understanding the incoming message rate and ensures the node is receiving data as expected."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_action_count",children:"centrifugo_node_action_count"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," action"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of various actions called within the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Useful for tracking specific actions' usage and frequency."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_num_clients",children:"centrifugo_node_num_clients"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Shows the current number of clients connected to the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Monitor the client connections to ensure the node is not reaching its capacity."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_num_users",children:"centrifugo_node_num_users"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Displays the number of unique users connected to the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in understanding user engagement and capacity planning."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_num_subscriptions",children:"centrifugo_node_num_subscriptions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Indicates the number of active subscriptions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this to monitor the subscription levels and identify any potential issues or required optimizations."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_num_nodes",children:"centrifugo_node_num_nodes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Shows the total number of nodes in the cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Essential for monitoring the size of the cluster and ensuring that all nodes are operational."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_build",children:"centrifugo_node_build"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," version"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Provides build information of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in tracking the version of the application running across different environments."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_num_channels",children:"centrifugo_node_num_channels"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Gauge"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of channels with one or more subscribers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Useful for monitoring the activity and utilization of channels."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_survey_duration_seconds",children:"centrifugo_node_survey_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Summary"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," op"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Captures the duration of surveys conducted by the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in performance monitoring and identifying any delays or issues in survey operations."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_num_reply_errors",children:"centrifugo_client_num_reply_errors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," method, code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of errors in replies sent to clients."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Critical for error monitoring and ensuring smooth client interactions."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_num_server_unsubscribes",children:"centrifugo_client_num_server_unsubscribes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the number of server-initiated unsubscribes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this to monitor the health of client connections and identify potential issues with the server."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_num_server_disconnects",children:"centrifugo_client_num_server_disconnects"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the number of server-initiated disconnects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this to monitor the health of client connections and identify potential issues with the server."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_command_duration_seconds",children:"centrifugo_client_command_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Summary"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," method"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the duration of commands executed by clients."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Essential for performance monitoring and ensuring timely responses to client commands."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_recover",children:"centrifugo_client_recover"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," recovered"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of recover operations performed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in tracking the system's resilience and recovery mechanisms."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_connection_limit_reached_total",children:"centrifugo_client_connection_limit_reached_total"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," None"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Number of refused connections due to the node client connection limit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Useful for monitoring the load on the Centrifugo node and identifying when clients are being refused connections due to reaching the connection limit."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_client_ping_pong_duration_seconds",children:"centrifugo_client_ping_pong_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Histogram"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the duration of ping/pong \u2013 i.e. time between sending ping to client and receiving pong from client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring the client protocol performance, latency, making sure frame processing does not take too much time on the client side."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_transport_connect_count",children:"centrifugo_transport_connect_count"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the number of connections to specific transports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this to monitor the usage of different transports and ensure they are functioning as expected."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_transport_messages_sent",children:"centrifugo_transport_messages_sent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport, frame_type, channel_namespace"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the number of messages sent to client connections over specific transports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Essential for understanding the data flow and performance of different transports."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_transport_messages_sent_size",children:"centrifugo_transport_messages_sent_size"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport, frame_type, channel_namespace"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the size of messages (in bytes) sent to client connections over specific transports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring the network bandwidth usage and optimizing the data transfer."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_transport_messages_received",children:"centrifugo_transport_messages_received"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport, frame_type, channel_namespace"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of messages received from client connections over specific transports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Important for ensuring that messages are being successfully received and processed."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_transport_messages_received_size",children:"centrifugo_transport_messages_received_size"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," transport, frame_type, channel_namespace"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the size of messages (in bytes) received from client connections over specific transports."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this metric to monitor the incoming data size and optimize the application's performance."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_proxy_duration_seconds",children:"centrifugo_proxy_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Summary & Histogram"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," protocol, type"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Captures the duration of proxy calls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Critical for understanding the performance of proxy calls and identifying any potential bottlenecks or issues."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_proxy_errors",children:"centrifugo_proxy_errors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," protocol, type"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of errors occurred during proxy calls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring the reliability of proxy services and ensuring error-free operations."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_granular_proxy_duration_seconds",children:"centrifugo_granular_proxy_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Summary & Histogram"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," type, name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Measures the duration of granular proxy calls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Use this to get more detailed insights into the performance of granular proxy operations."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_granular_proxy_errors",children:"centrifugo_granular_proxy_errors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Counter"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," type, name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Counts the number of errors in granular proxy calls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Essential for error tracking and ensuring the stability of granular proxy services."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_api_command_duration_seconds",children:"centrifugo_api_command_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Summary"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," protocol, method"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the duration of API commands."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring the API performance and ensuring timely responses."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_api_command_duration_seconds_histogram",children:"centrifugo_api_command_duration_seconds_histogram"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Histogram"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Labels:"})," protocol, method"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks the duration of API commands."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring the API performance and ensuring timely responses."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_pub_sub_lag_seconds",children:"centrifugo_node_pub_sub_lag_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Histogram"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Labels:"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks pub sub lag in seconds."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Helps in monitoring of PUB/SUB layer performance. Note, this metric may be not exact in distributed environment due to time skew (to minify effect use NTP). In this case it still may be useful to identifies growth in lag."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"centrifugo_node_broadcast_duration_seconds",children:"centrifugo_node_broadcast_duration_seconds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," Histogram"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Labels:"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Tracks broadcast duration in seconds."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Usage:"})," Useful to monitor time required for broadcasting the message to subscribers on the node. If it grows and the number of messages increases \u2013 may indicate the need to scale."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"traces",children:"Traces"}),"\n",(0,r.jsx)(n.h3,{id:"opentelemetry",children:"OpenTelemetry"}),"\n",(0,r.jsx)(n.p,{children:"At this point Centrifugo can export traces for HTTP and GRPC server API requests in OpenTelemetry format."}),"\n",(0,r.jsx)(n.p,{children:"To enable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "opentelemetry": true,\n  "opentelemetry_api": true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry must be explicitly turned on to avoid tracing overhead when it's not needed."}),"\n",(0,r.jsxs)(n.p,{children:["To configure OpenTelemetry export behaviour we are relying on ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/sdk-configuration/otlp-exporter-configuration/",children:"OpenTelemetry environment vars"})," supporting only HTTP export endpoints for now."]}),"\n",(0,r.jsxs)(n.p,{children:["So a simple example to run Centrifugo with server API tracing would be running Jaeger with ",(0,r.jsx)(n.code,{children:"COLLECTOR_OTLP_ENABLED"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --rm -it --name jaeger \\\n  -e COLLECTOR_OTLP_ENABLED=true \\\n  -p 16686:16686 \\\n  -p 4318:4318 \\\n  jaegertracing/all-in-one:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then start Centrifugo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4318" CENTRIFUGO_OPENTELEMETRY=1 CENTRIFUGO_OPENTELEMETRY_API=1 ./centrifugo\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Send some API requests - and open ",(0,r.jsx)(n.a,{href:"http://localhost:16686",children:"http://localhost:16686"})," to see traces in Jaeger UI."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Centrifugo exports traces in ",(0,r.jsx)(n.code,{children:"http/protobuf"})," format. If you want to use GRPC exporter then it's possible to turn it on by setting environment variable ",(0,r.jsx)(n.code,{children:"OTEL_EXPORTER_OTLP_PROTOCOL"})," to ",(0,r.jsx)(n.code,{children:"grpc"})," (GRPC exporter format supported since Centrifugo v5.0.3)."]}),"\n",(0,r.jsx)(n.h2,{id:"logs",children:"Logs"}),"\n",(0,r.jsxs)(n.p,{children:["Logging may be configured using ",(0,r.jsx)(n.code,{children:"log_level"})," option. It may have the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"none"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"trace"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"debug"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"info"})," (default)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"warn"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"error"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We generally do not recommend anything below info to be used in production."}),"\n",(0,r.jsxs)(n.p,{children:["By default Centrifugo logs to STDOUT. Usually this is what you need when running servers on modern infrastructures. Logging into file may be configured using ",(0,r.jsx)(n.code,{children:"log_file"})," option."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var r=s(67294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);