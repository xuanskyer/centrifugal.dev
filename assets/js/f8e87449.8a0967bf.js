"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5402],{68309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const o={title:"Experimenting with real-time data compression by simulating a football match events",tags:["centrifugo","websocket","compression"],description:"This post shows the potential profit of enabling delta compression in channels and demonstrates the reduction of data transfer in various scenarios, including different Centrifugo protocol formats and using WebSocket permessage-deflate compression.",author:"Alexander Emelin",authorTitle:"Founder of Centrifugal Labs",authorImageURL:"/img/alexander_emelin.jpeg",image:"/img/football_match_compression.jpg",hide_table_of_contents:!1},r=void 0,a={permalink:"/blog/2024/05/30/real-time-data-compression-experiments",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2024-05-30-real-time-data-compression-experiments.md",source:"@site/blog/2024-05-30-real-time-data-compression-experiments.md",title:"Experimenting with real-time data compression by simulating a football match events",description:"This post shows the potential profit of enabling delta compression in channels and demonstrates the reduction of data transfer in various scenarios, including different Centrifugo protocol formats and using WebSocket permessage-deflate compression.",date:"2024-05-30T00:00:00.000Z",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"websocket",permalink:"/blog/tags/websocket"},{label:"compression",permalink:"/blog/tags/compression"}],readingTime:10.435,hasTruncateMarker:!1,authors:[{name:"Alexander Emelin",title:"Founder of Centrifugal Labs",imageURL:"/img/alexander_emelin.jpeg"}],frontMatter:{title:"Experimenting with real-time data compression by simulating a football match events",tags:["centrifugo","websocket","compression"],description:"This post shows the potential profit of enabling delta compression in channels and demonstrates the reduction of data transfer in various scenarios, including different Centrifugo protocol formats and using WebSocket permessage-deflate compression.",author:"Alexander Emelin",authorTitle:"Founder of Centrifugal Labs",authorImageURL:"/img/alexander_emelin.jpeg",image:"/img/football_match_compression.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Proper real-time document state synchronization within Centrifugal ecosystem",permalink:"/blog/2024/06/03/real-time-document-state-sync"},nextItem:{title:"Stream logs from Loki to browser with Centrifugo Websocket-to-GRPC subscriptions",permalink:"/blog/2024/03/18/stream-loki-logs-to-browser-with-websocket-to-grpc-subscriptions"}},l={authorsImageUrls:[void 0]},d=[{value:"About delta compression",id:"about-delta-compression",level:2},{value:"Experiment Overview",id:"experiment-overview",level:2},{value:"Results Breakdown",id:"results-breakdown",level:2},{value:"Results analysis",id:"results-analysis",level:2},{value:"JSON over JSON",id:"json-over-json",level:3},{value:"JSON over Protobuf",id:"json-over-protobuf",level:3},{value:"Protobuf over Protobuf",id:"protobuf-over-protobuf",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/football_match_compression.jpg"}),"\n",(0,s.jsx)(n.p,{children:"Optimizing data transfer over WebSocket connections can significantly reduce bandwidth costs. Compressing data usually leads to memory and CPU resource usage overhead \u2013 but in many cases it worth doing anyway since it positively impacts the final bill from the provider (bandwidth cost reduction overweights resource usage increase)."}),"\n",(0,s.jsxs)(n.p,{children:["Centrifugo v5.4.0 introduced ",(0,s.jsx)(n.a,{href:"/docs/server/delta_compression",children:"delta compression"})," feature. But before implementing it we wanted a playground which could demonstrate the potential benefit of using delta compression in Centrifugo channels."]}),"\n",(0,s.jsx)(n.p,{children:"This post outlines our approach to estimating the potential profit from implementing delta compression. It demonstrates the reduction in data transfer using once concrete use case across various configurations, including different Centrifugo protocol formats and the additional use of WebSocket permessage-deflate compression. Although these numbers can vary significantly depending on the data, we believe the results are valuable for providing a general understanding of Centrifugo compression options. This information can help Centrifugo users apply these insights to their use cases."}),"\n",(0,s.jsx)(n.h2,{id:"about-delta-compression",children:"About delta compression"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"delta frames",src:t(85259).Z+"",width:"4002",height:"902"})}),"\n",(0,s.jsxs)(n.p,{children:["For a good overview of delta compression topic for the real-time messaging applications I suggest starting with a ",(0,s.jsx)(n.a,{href:"https://ably.com/blog/message-delta-compression",children:"blog post in Ably engineeiring blog"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Centrifugo is very similar to Ably in many aspects (though self-hosted), so everything said in the linked post equally applies to Centrifugo use cases too. Though we have differences in the final implementation, one notable is that we are using ",(0,s.jsx)(n.a,{href:"https://fossil-scm.org/home/doc/tip/www/delta_format.wiki",children:"Fossil"})," delta algorithm in Centrifugo instead of VCDIFF. The reason over VCDIFF was mainly two factors:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["availability of several Fossil delta implementations, specifically there are good libraries for Go (see ",(0,s.jsx)(n.a,{href:"https://github.com/shadowspore/fossil-delta",children:"shadowspore/fossil-delta"}),"), and for Javascript - ",(0,s.jsx)(n.a,{href:"https://github.com/dchest/fossil-delta-js",children:"fossil-delta-js"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"the compactness of the algorithm implementation \u2013 under 500 lines of code in JavaScript"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The compactness property is nice because there are no OSS Fossil implementations for Java, Dart and Swift \u2013 languages we have SDKs for \u2013 so we may have to implement this algorithm in the future ourselves."}),"\n",(0,s.jsx)(n.p,{children:"Having said this all, let's proceed to the description of experiment we did to understand possible benefits of various compression techniques, and delta compression in particular."}),"\n",(0,s.jsx)(n.h2,{id:"experiment-overview",children:"Experiment Overview"}),"\n",(0,s.jsx)(n.p,{children:"In the experiment, we simulated a football match, sending the entire game state over a WebSocket connection upon every match event. Our compression playground looks like this:"}),"\n",(0,s.jsx)("video",{width:"100%",loop:!0,autoPlay:"autoplay",muted:!0,controls:"",src:"/img/el_classico.mp4"}),"\n",(0,s.jsx)(n.p,{children:"It visualizes only the score, but under the hood there are other game changes happen \u2013 will be shown below."}),"\n",(0,s.jsxs)(n.p,{children:["We tested various configurations to evaluate the effectiveness of data compression if different cases. In each setup the same game data was sent over the wire. The data then was captured using ",(0,s.jsx)(n.a,{href:"https://www.wireshark.org/",children:"WireShark"})," with the filter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tcp.srcport == 8000 && websocket\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is how WebSocket packets look in Wireshark when applying a filter mentioned above:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"wireshark",src:t(42968).Z+"",width:"2984",height:"1362"})}),"\n",(0,s.jsx)(n.p,{children:"Bytes captured show the entire overhead from packets in the game channel going from server to client (including TCP/IP overhead)."}),"\n",(0,s.jsxs)(n.p,{children:["The source code of the experiment may be found on Github as a ",(0,s.jsx)(n.a,{href:"https://github.com/centrifugal/centrifuge/tree/master/_examples/compression_playground",children:"Centrifuge library example"}),". You can run it to inspect the exact WebSocket frames in each scenario."]}),"\n",(0,s.jsx)(n.p,{children:"To give reader a general idea about data, we sent 30 publications with the entire football game state, for example here is a first message in a match (2 teams, 11 players):"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Click to see the data"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "homeTeam":{\n      "name":"Real Madrid",\n      "players":[\n         {\n            "name":"John Doe"\n         },\n         {\n            "name":"Jane Smith"\n         },\n         {\n            "name":"Alex Johnson"\n         },\n         {\n            "name":"Chris Lee"\n         },\n         {\n            "name":"Pat Kim"\n         },\n         {\n            "name":"Sam Morgan"\n         },\n         {\n            "name":"Jamie Brown"\n         },\n         {\n            "name":"Casey Davis"\n         },\n         {\n            "name":"Morgan Garcia"\n         },\n         {\n            "name":"Taylor White"\n         },\n         {\n            "name":"Jordan Martinez"\n         }\n      ]\n   },\n   "awayTeam":{\n      "name":"Barcelona",\n      "players":[\n         {\n            "name":"Robin Wilson"\n         },\n         {\n            "name":"Drew Taylor",\n            "events":[\n               {\n                  "type":"RED_CARD"\n               }\n            ]\n         },\n         {\n            "name":"Jessie Bailey"\n         },\n         {\n            "name":"Casey Flores"\n         },\n         {\n            "name":"Jordan Walker"\n         },\n         {\n            "name":"Charlie Green"\n         },\n         {\n            "name":"Alex Adams"\n         },\n         {\n            "name":"Morgan Thompson"\n         },\n         {\n            "name":"Taylor Clark"\n         },\n         {\n            "name":"Jordan Hernandez"\n         },\n         {\n            "name":"Jamie Lewis"\n         }\n      ]\n   }\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"Then we send intermediary states \u2013 someone scores goal, gets yellow card, being subsctituted. And here is the end message in simulation (final scores, final events attached to corresponding players):"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Click to see the data"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "homeTeam":{\n      "name":"Real Madrid",\n      "score":3,\n      "players":[\n         {\n            "name":"John Doe",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":6\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":39\n               }\n            ]\n         },\n         {\n            "name":"Jane Smith"\n         },\n         {\n            "name":"Alex Johnson"\n         },\n         {\n            "name":"Chris Lee",\n            "events":[\n               {\n                  "type":"GOAL",\n                  "minute":84\n               }\n            ]\n         },\n         {\n            "name":"Pat Kim"\n         },\n         {\n            "name":"Sam Morgan"\n         },\n         {\n            "name":"Jamie Brown",\n            "events":[\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":9\n               }\n            ]\n         },\n         {\n            "name":"Casey Davis",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":81\n               }\n            ]\n         },\n         {\n            "name":"Morgan Garcia",\n            "events":[\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":15\n               },\n               {\n                  "type":"GOAL",\n                  "minute":30\n               },\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":57\n               },\n               {\n                  "type":"GOAL",\n                  "minute":62\n               },\n               {\n                  "type":"RED_CARD",\n                  "minute":66\n               }\n            ]\n         },\n         {\n            "name":"Taylor White",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":18\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":42\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":45\n               },\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":69\n               },\n               {\n                  "type":"RED_CARD",\n                  "minute":72\n               }\n            ]\n         },\n         {\n            "name":"Jordan Martinez",\n            "events":[\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":21\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":24\n               }\n            ]\n         }\n      ]\n   },\n   "awayTeam":{\n      "name":"Barcelona",\n      "score":3,\n      "players":[\n         {\n            "name":"Robin Wilson"\n         },\n         {\n            "name":"Drew Taylor",\n            "events":[\n               {\n                  "type":"RED_CARD"\n               },\n               {\n                  "type":"GOAL",\n                  "minute":12\n               }\n            ]\n         },\n         {\n            "name":"Jessie Bailey"\n         },\n         {\n            "name":"Casey Flores",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":78\n               }\n            ]\n         },\n         {\n            "name":"Jordan Walker",\n            "events":[\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":33\n               }\n            ]\n         },\n         {\n            "name":"Charlie Green",\n            "events":[\n               {\n                  "type":"GOAL",\n                  "minute":51\n               },\n               {\n                  "type":"GOAL",\n                  "minute":60\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":75\n               }\n            ]\n         },\n         {\n            "name":"Alex Adams"\n         },\n         {\n            "name":"Morgan Thompson",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":27\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":48\n               }\n            ]\n         },\n         {\n            "name":"Taylor Clark",\n            "events":[\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":3\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":87\n               }\n            ]\n         },\n         {\n            "name":"Jordan Hernandez"\n         },\n         {\n            "name":"Jamie Lewis",\n            "events":[\n               {\n                  "type":"YELLOW_CARD",\n                  "minute":36\n               },\n               {\n                  "type":"SUBSTITUTE",\n                  "minute":54\n               }\n            ]\n         }\n      ]\n   }\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"When we used Protobuf encoding for game state we serialized the data according to this Protobuf schema:"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Click to see the Protobuf schema for the game state"}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\npackage centrifugal.centrifuge.examples.compression_playground;\n\noption go_package = "./;apppb";\n\nenum EventType {\n  UNKNOWN = 0; // Default value, should not be used\n  GOAL = 1;\n  YELLOW_CARD = 2;\n  RED_CARD = 3;\n  SUBSTITUTE = 4;\n}\n\nmessage Event {\n  EventType type = 1;\n  int32 minute = 2;\n}\n\nmessage Player {\n  string name = 1;\n  repeated Event events = 2;\n}\n\nmessage Team {\n  string name = 1;\n  int32 score = 2;\n  repeated Player players = 3;\n}\n\nmessage Match {\n  int32 id = 1;\n  Team home_team = 2;\n  Team away_team = 3;\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"results-breakdown",children:"Results Breakdown"}),"\n",(0,s.jsx)(n.p,{children:"Below are the results of our experiment, comparing different protocols and compression settings:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Compression"}),(0,s.jsx)(n.th,{children:"Delta"}),(0,s.jsx)(n.th,{children:"Bytes sent"}),(0,s.jsx)(n.th,{children:"Percentage"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over JSON"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"40251"}),(0,s.jsx)(n.td,{children:"100.0 (base)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over JSON"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"15669"}),(0,s.jsx)(n.td,{children:"38.93"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over JSON"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"6043"}),(0,s.jsx)(n.td,{children:"15.01"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over JSON"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"5360"}),(0,s.jsx)(n.td,{children:"13.32"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over Protobuf"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"39180"}),(0,s.jsx)(n.td,{children:"97.34"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over Protobuf"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"15542"}),(0,s.jsx)(n.td,{children:"38.61"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over Protobuf"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"4287"}),(0,s.jsx)(n.td,{children:"10.65"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON over Protobuf"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"4126"}),(0,s.jsx)(n.td,{children:"10.25"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"}),(0,s.jsx)(n.td,{children:"--"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protobuf over Protobuf"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"16562"}),(0,s.jsx)(n.td,{children:"41.15"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protobuf over Protobuf"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"13115"}),(0,s.jsx)(n.td,{children:"32.58"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protobuf over Protobuf"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"4382"}),(0,s.jsx)(n.td,{children:"10.89"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protobuf over Protobuf"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"4473"}),(0,s.jsx)(n.td,{children:"11.11"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"results-analysis",children:"Results analysis"}),"\n",(0,s.jsx)(n.p,{children:"Let's now discuss the results we observed in detail."}),"\n",(0,s.jsx)(n.h3,{id:"json-over-json",children:"JSON over JSON"}),"\n",(0,s.jsx)(n.p,{children:"In this case we are sending JSON data with football match game state over JSON Centrifugal protocol."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON over JSON (No Compression, No Delta)\nBytes Sent: 40251\nPercentage: 100.0%\nAnalysis: This is a baseline scenario, with no compression and no delta, results in the highest amount of data being sent. But very straightforward to implement."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["JSON over JSON (With Compression, No Delta)\nBytes Sent: 15669\nPercentage: 38.93%\nAnalysis: Enabling compression reduces the data size significantly to 38.93% of the original, showcasing the effectiveness of deflate compression. See ",(0,s.jsx)(n.a,{href:"/docs/transports/websocket#websocket_compression",children:"how to configure compression"})," in Centrifugo, note that it comes with CPU and memory overhead which depends on your load profile."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["JSON over JSON (No Compression, With Delta)\nBytes Sent: 6043\nPercentage: 15.01%\nAnalysis: Using delta compression without deflate compression reduces data size to 15.01% for this use case, only changes are being sent after the initial full payload. See how to enable ",(0,s.jsx)(n.a,{href:"/docs/server/delta_compression",children:"delta compression in channels"})," in Centrifugo. The nice thing about using delta compression instead of deflate compression is that deltas require less and more predictable resource overhead."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON over JSON (With Compression and Delta)\nBytes Sent: 5360\nPercentage: 13.32%\nAnalysis: Combining both compression and delta further reduces the data size to 13.32%, achieving the highest efficiency in this category. The benefit is not huge, because we already send small deltas here."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"json-over-protobuf",children:"JSON over Protobuf"}),"\n",(0,s.jsx)(n.p,{children:"In this case we are sending JSON data with football match game state over Protobuf Centrifugal protocol."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON over Protobuf (No Compression, No Delta)\nBytes Sent: 39180\nPercentage: 97.34%\nAnalysis: Switching to Protobuf encoding of Centrifugo protocol but still sending JSON data slightly reduces the data size to 97.34% of the JSON over JSON baseline. The benefit here comes from the fact Centrifugo does not introduce a lot of its own protocol overhead \u2013 Protobuf is more compact. But we still send JSON data as Protobuf payloads \u2013 that's why it's generally comparable with a baseline."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON over Protobuf (With Compression, No Delta)\nBytes Sent: 15542\nPercentage: 38.61%\nAnalysis: Compression with Protobuf encoding brings similar benefits as with JSON, reducing the data size to 38.61%."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON over Protobuf (No Compression, With Delta)\nBytes Sent: 4287\nPercentage: 10.65%\nAnalysis: Delta compression with Protobuf is effective, reducing data to 10.65%. It's almost x10 reduction in bandwidth compared to the baseline!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"I guess at this point you may be curious how delta frames look like in case of JSON protocol. Here is a screenshot:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"delta frames",src:t(9857).Z+"",width:"2828",height:"572"})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"JSON over Protobuf (With Compression and Delta)\nBytes Sent: 4126\nPercentage: 10.25%\nAnalysis: This combination provides the best results for JSON over Protobuf, reducing data size to 10.25% from the baseline."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"protobuf-over-protobuf",children:"Protobuf over Protobuf"}),"\n",(0,s.jsx)(n.p,{children:"In this case we are sending Protobuf binary data with football match game state over Protobuf Centrifugal protocol."}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Protobuf over Protobuf (No Compression, No Delta)\nBytes Sent: 16562\nPercentage: 41.15%\nAnalysis: Using Protobuf for both encoding and transmission ",(0,s.jsx)(n.strong,{children:"without any compression or delta"})," reduces data size to 41.15%. So you may get the most efficient setup with nice bandwidth reduction. But the cost is more complex data encoding."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Protobuf over Protobuf (With Compression, No Delta)\nBytes Sent: 13115\nPercentage: 32.58%\nAnalysis: Compression reduces the data size to 32.58%. Note, that in this case it's not very different from JSON case."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Protobuf over Protobuf (No Compression, With Delta)\nBytes Sent: 4382\nPercentage: 10.89%\nAnalysis: Delta compression is again very effective here, reducing the data size to 10.89%. Again - comparable to JSON case."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Protobuf over Protobuf (With Compression and Delta)\nBytes Sent: 4473\nPercentage: 11.11%\nAnalysis: Combining both methods results in a data size of 11.11%. Even more than in JSON case. That's bacause binary data is not compressed very well with deflate algorithm."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"WebSocket permessage-deflate compression significantly reduces the amount of data transferred over WebSocket connections. While it incurs CPU and memory overhead, it may be still worth using from a total cost perspective."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Delta compression makes perfect sense for channels where data changes only slightly between publications. In our experiment, it resulted in a tenfold reduction in bandwidth usage."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using binary data in combination with the Centrifugo Protobuf protocol provides substantial bandwidth reduction even without deflate or delta compression. However, this comes at the cost of increased data format complexity. An additional benefit of using the Centrifugo Protobuf protocol is its faster marshalling and unmarshalling on the server side compared to the JSON protocol."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For Centrifugo, these results highlighted the potential of implementing delta compression, so we proceeded with it. The benefit depends on the nature of the data being sent \u2013 you can achieve even greater savings if you have larger messages that are very similar to each other."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},42968:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/compression_wireshark-b44531ca65e851165c62331d10d661f4.png"},85259:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/delta_abstract-9104c3b2e3b81831daecf3b400e0d798.png"},9857:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/delta_frames-7d915a6b62f3cbcbfa4e0a1d738e79df.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);