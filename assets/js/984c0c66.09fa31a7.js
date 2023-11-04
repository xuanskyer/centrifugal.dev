"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3556],{48179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var t=s(85893),o=s(11151);const i={title:"Asynchronous message streaming to Centrifugo with Benthos",tags:["centrifugo","benthos","tutorial"],description:"In this post, we'll demonstrate how to asynchronously stream messages into Centrifugo channels from external data providers using Benthos tool. We also highlight some pitfalls which become more important in asynchronous publishing scenario.",author:"Alexander Emelin",authorTitle:"Author of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/benthos_thumb.jpg",hide_table_of_contents:!1},r=void 0,a={permalink:"/blog/2023/08/19/asynchronous-message-streaming-to-centrifugo-with-benthos",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2023-08-19-asynchronous-message-streaming-to-centrifugo-with-benthos.md",source:"@site/blog/2023-08-19-asynchronous-message-streaming-to-centrifugo-with-benthos.md",title:"Asynchronous message streaming to Centrifugo with Benthos",description:"In this post, we'll demonstrate how to asynchronously stream messages into Centrifugo channels from external data providers using Benthos tool. We also highlight some pitfalls which become more important in asynchronous publishing scenario.",date:"2023-08-19T00:00:00.000Z",formattedDate:"August 19, 2023",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"benthos",permalink:"/blog/tags/benthos"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:7.08,hasTruncateMarker:!0,authors:[{name:"Alexander Emelin",title:"Author of Centrifugo",imageURL:"https://github.com/FZambia.png"}],frontMatter:{title:"Asynchronous message streaming to Centrifugo with Benthos",tags:["centrifugo","benthos","tutorial"],description:"In this post, we'll demonstrate how to asynchronously stream messages into Centrifugo channels from external data providers using Benthos tool. We also highlight some pitfalls which become more important in asynchronous publishing scenario.",author:"Alexander Emelin",authorTitle:"Author of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/benthos_thumb.jpg",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Using Centrifugo in RabbitX",permalink:"/blog/2023/08/29/using-centrifugo-in-rabbitx"},nextItem:{title:"Centrifugo v5 released",permalink:"/blog/2023/06/29/centrifugo-v5-released"}},l={authorsImageUrls:[void 0]},h=[{value:"Start Centrifugo",id:"start-centrifugo",level:2},{value:"Install and run Benthos",id:"install-and-run-benthos",level:2},{value:"Configure Benthos input and output",id:"configure-benthos-input-and-output",level:2},{value:"Push messages to Redis queue",id:"push-messages-to-redis-queue",level:2},{value:"Demo",id:"demo",level:2},{value:"Pitfalls of async publishing",id:"pitfalls-of-async-publishing",level:2},{value:"Late delivery",id:"late-delivery",level:3},{value:"Ordering concerns",id:"ordering-concerns",level:3},{value:"Throughput when ordering preserved",id:"throughput-when-ordering-preserved",level:3},{value:"Error handling",id:"error-handling",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/img/benthos.png"}),"\n",(0,t.jsx)(n.p,{children:"Centrifugo provides HTTP and GRPC APIs for publishing messages into channels. Publish server API is very straighforward to use - it's a simple request with a channel and data to be delivered to active WebSocket connections subscribed to a channel."}),"\n",(0,t.jsx)(n.p,{children:"Sometimes though Centrifugo users want to avoid synchronous calls to Centrifugo API delegating this work to asynchronous tasks. Many companies have convenient infrastructure for messaging processing tasks - like Kafka, Nats Jetstream, Redis, RabbitMQ, etc. Some using transactional outbox pattern to reliably deliver events upon database changes and have a ready infrastructure to push such events to some queue. From which want to re-publish events to Centrifugo."}),"\n",(0,t.jsxs)(n.p,{children:["In this post we get familiar with a tool called ",(0,t.jsx)(n.a,{href:"https://www.benthos.dev/",children:"Benthos"})," and show how it may simplify integrating your asynchronous message flow with Centrifugo. And we discuss some non-obvious pitfalls of asynchronous publishing approach in regards to real-time applications."]}),"\n",(0,t.jsx)(n.h2,{id:"start-centrifugo",children:"Start Centrifugo"}),"\n",(0,t.jsx)(n.p,{children:"First start Centrifugo (with debug logging to see incoming API requests in logs):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"centrifugo genconfig\ncentrifugo -c config.json --log_level debug\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Hope this step is already simple for you, if not - check out ",(0,t.jsx)(n.a,{href:"/docs/getting-started/quickstart",children:"Quickstart tutorial"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"install-and-run-benthos",children:"Install and run Benthos"}),"\n",(0,t.jsxs)(n.p,{children:["Benthos is an awesome tool which allows consuming data from various inputs, process data, then output it into configured outputs. See more detailed description ",(0,t.jsx)(n.a,{href:"https://www.benthos.dev/docs/about",children:"on Benthos' website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The number of inputs supported by Benthos is huge: ",(0,t.jsx)(n.a,{href:"https://www.benthos.dev/docs/components/inputs/about#categories",children:"check it out here"}),". Most of the major systems widely used these days are supported. Benthos also supports ",(0,t.jsx)(n.a,{href:"https://www.benthos.dev/docs/components/outputs/about#categories",children:"many outputs"})," \u2013 but here we only interested in message transfer to Centrifugo. There is no built-in Centrifugo output in Benthos but it provides a generic ",(0,t.jsx)(n.code,{children:"http_client"})," output which may be used to send requests to any HTTP server. Benthos may also help with retries, provides tools for additional data processing and transformations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(91505).Z+"",width:"1920",height:"900"})}),"\n",(0,t.jsxs)(n.p,{children:["Just like Centrifugo Benthos written in Go language \u2013 so its installation is very straighforward and similar to Centrifugo. See ",(0,t.jsx)(n.a,{href:"https://www.benthos.dev/docs/guides/getting_started",children:"official instructions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's assume you've installed Benthos and have ",(0,t.jsx)(n.code,{children:"benthos"})," executable available in your system. Let's create Benthos configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"benthos create > config.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Take a look at generated ",(0,t.jsx)(n.code,{children:"config.yaml"})," - it contains various options for Benthos instance, the most important (for the context of this post) are ",(0,t.jsx)(n.code,{children:"input"})," and ",(0,t.jsx)(n.code,{children:"output"})," sections."]}),"\n",(0,t.jsx)(n.p,{children:"And after that you can start Benthos instance with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"benthos -c config.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we need to tell Benthos from where to get data and how to send it to Centrifugo."}),"\n",(0,t.jsx)(n.h2,{id:"configure-benthos-input-and-output",children:"Configure Benthos input and output"}),"\n",(0,t.jsx)(n.p,{children:"For our example here we will user Redis List as an input, won't add any additional data processing and will output messages consumed from Redis List into Centrifugo publish server HTTP API."}),"\n",(0,t.jsxs)(n.p,{children:["To achieve this add the following as input in Benthos ",(0,t.jsx)(n.code,{children:"config.yaml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'input:\n  label: "centrifugo_redis_consumer"\n  redis_list:\n    url: "redis://127.0.0.1:6379"\n    key: "centrifugo.publish"\n'})}),"\n",(0,t.jsx)(n.p,{children:"And configure the output like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'output:\n  label: "centrifugo_http_publisher"\n  http_client:\n    url: "http://localhost:8000/api/publish"\n    verb: POST\n    headers:\n      X-API-Key: "<CENTRIFUGO_API_KEY>"\n    timeout: 5s\n    max_in_flight: 20\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The output points to Centrifugo ",(0,t.jsx)(n.a,{href:"/docs/server/server_api#publish",children:"publish HTTP API"}),". Replace ",(0,t.jsx)(n.code,{children:"<CENTRIFUGO_API_KEY>"})," with your Centrifugo ",(0,t.jsx)(n.code,{children:"api_key"})," (found in Centrifugo configuration file)."]}),"\n",(0,t.jsx)(n.h2,{id:"push-messages-to-redis-queue",children:"Push messages to Redis queue"}),"\n",(0,t.jsx)(n.p,{children:"Start Benthos instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"benthos -c config.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"You will see errors while Benthos tries to connect to input Redis source. So start Redis server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --rm -it --name redis redis:7\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now connect to Redis (using ",(0,t.jsx)(n.code,{children:"redis-cli"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec -it redis redis-cli\n"})}),"\n",(0,t.jsx)(n.p,{children:"And push command to Redis list:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'127.0.0.1:6379> rpush centrifugo.publish \'{"channel": "chat", "data": {"input": "test"}}\'\n(integer) 1\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This message will be consumed from Redis list by Benthos and published to Centrifugo HTTP API. If you have active subscribers to channel ",(0,t.jsx)(n.code,{children:"chat"})," \u2013 you will see messages delivered to them. That's it!"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"When using Redis List input you can scale out Benthos instances to run several of them if needed."})}),"\n",(0,t.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,t.jsx)(n.p,{children:"Here is a quick demonstration of the described integration. See how we push messages into Redis List and those are delivered to WebSocket clients:"}),"\n",(0,t.jsxs)("video",{width:"100%",controls:!0,children:[(0,t.jsx)("source",{src:"/img/benthos.mp4",type:"video/mp4"}),(0,t.jsx)(n.p,{children:"Sorry, your browser doesn't support embedded video."})]}),"\n",(0,t.jsx)(n.h2,{id:"pitfalls-of-async-publishing",children:"Pitfalls of async publishing"}),"\n",(0,t.jsx)(n.p,{children:"This all seems simple. But publishing messages asynchronously may highlight some pitfalls not visible or not applicable for synchronous publishing to Centrifugo API."}),"\n",(0,t.jsx)(n.h3,{id:"late-delivery",children:"Late delivery"}),"\n",(0,t.jsx)(n.p,{children:"Most of the time it will work just fine. But one day you can come across intermediate queue growth and increased delivery lag. This may happen due to temporary Centrifugo or worker process unavailability. As soon as system comes back to normal queued messages will be delivered."}),"\n",(0,t.jsx)(n.p,{children:"Depending on the real-time feature implemented this may be a concern to think about and decide whether this is desired or not. Your application should be designed accordingly to deal with late delivery."}),"\n",(0,t.jsx)(n.p,{children:"BTW late delivery may be a case even with synchronous publishing \u2013 it just almost never strikes. But theoretically client can reload browser page and load initial app state while message flying from the backend to client over Centrifugo. It's not Centrifugo specific actually - it's just a nature of networks and involved latencies."}),"\n",(0,t.jsx)(n.p,{children:"In general solution to prevent late delivery UX issues completely is using object versioning. Object version should be updated in the database on every change from which the real-time event is generated. Attach object version information to every real-time message. Also get object version on initial state load. This way you can compare versions and drop non-actual real-time messages on client side."}),"\n",(0,t.jsx)(n.p,{children:"Possible strategy may be using synchronous API for real-time features where at most once delivery is acceptable and use asynchronous delivery where you need to deliver messages with at least once guarantees. In a latter case you most probably designed proper idempotency behaviour on client side anyway."}),"\n",(0,t.jsx)(n.h3,{id:"ordering-concerns",children:"Ordering concerns"}),"\n",(0,t.jsxs)(n.p,{children:["Another thing to consider is message ordering. Centrifugo itself ",(0,t.jsx)(n.a,{href:"/docs/getting-started/design#message-order-guarantees",children:"may provide message ordering in channels"}),". If you published one message to Centrifugo API, then another one \u2013 you can expect that messages will be delivered to a client in the same order. But as soon as you have an intermediary layer like Benthos or any other asynchronous worker process \u2013 then you must be careful about ordering. In case of Benthos and example here you can set ",(0,t.jsx)(n.code,{children:"max_in_flight"})," parameter to ",(0,t.jsx)(n.code,{children:"1"})," instead of ",(0,t.jsx)(n.code,{children:"20"})," and keep only one instance of Benthos running to preserve ordering."]}),"\n",(0,t.jsx)(n.p,{children:"In case of streaming from Kafka you can rely on Kafka message partitioning feature to preserve message ordering."}),"\n",(0,t.jsx)(n.h3,{id:"throughput-when-ordering-preserved",children:"Throughput when ordering preserved"}),"\n",(0,t.jsx)(n.p,{children:"If you preserved ordering in your asynchronous workers then the next thing to consider is throughput limitations."}),"\n",(0,t.jsx)(n.p,{children:"You have a limited number of workers, these workers send requests to Centrifugo one by one. In this case throughput is limited by the number of workers and RTT (round-trip time) between worker process and Centrifugo."}),"\n",(0,t.jsx)(n.p,{children:"If we talk about using Redis List structure as a queue - you can possibly shard data amongst different Redis List queues by some key to improve throughput. In this case you need to push messages where order should be preserved into a specific queue. In this case your get a setup similar to Kafka partitioning."}),"\n",(0,t.jsx)(n.p,{children:"In case of using manually partitioned queues or using Kafka you can have parallelism equal to the number of partitions."}),"\n",(0,t.jsx)(n.p,{children:"Let's say you have 20 workers which can publish messages in parallel and 5ms RTT time between worker and Centrifugo. In this case you can publish 20*(1000/5) = 4000 messages per second max."}),"\n",(0,t.jsx)(n.p,{children:"To improve throughput futher consider increasing worker number or batching publish requests to Centrifugo (using Centrifugo's batch API)."}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,t.jsxs)(n.p,{children:["When publishing asynchronously you should also don't forget about error handling. Benthos will handle network errors automatically for you. But there could be internal errors from Centrifugo returned as part of response. It's not very convenient to handle with Benthos out of the box \u2013 so we think about ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo/pull/690",children:"adding transport-level error mode"})," to Centrifugo."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you want to publish to Centrifugo asynchronously using messaging systems convenient for your company. Usually you can write worker process to re-publish messages to Centrifugo. Sometimes it may be simplified using helpful tools like Benthos."}),"\n",(0,t.jsx)(n.p,{children:"Here we've shown how Benthos may be used to transfer messages from Redis List queue to Centrifugo API. With some modifications you can achieve the same for other input sources - such as Kafka, RabbitMQ, Nats Jetstream, etc."}),"\n",(0,t.jsx)(n.p,{children:"But publishing messages asynchronously highlights several pifalls - like late delivery, ordering issues,  throughput considerations and error handling \u2013 which should be carefully addressed. Different real-time features may require different strategies."})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},91505:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/benthos-1eb5dd899b464895e7b27fa75e0e6857.svg"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);