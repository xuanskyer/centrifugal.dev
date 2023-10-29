"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Centrifugo integration with NodeJS tutorial",tags:["centrifugo","tutorial","proxy"],description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/keyboard_thumb.jpg",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/2021/10/18/integrating-with-nodejs",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-10-18-integrating-with-nodejs.md",source:"@site/blog/2021-10-18-integrating-with-nodejs.md",title:"Centrifugo integration with NodeJS tutorial",description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",date:"2021-10-18T00:00:00.000Z",formattedDate:"October 18, 2021",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:6.675,hasTruncateMarker:!0,authors:[{name:"Alexander Emelin",title:"Creator of Centrifugo",imageURL:"https://github.com/FZambia.png"}],frontMatter:{title:"Centrifugo integration with NodeJS tutorial",tags:["centrifugo","tutorial","proxy"],description:"In this tutorial we are integrating Centrifugo with NodeJS. We are using Centrifugo connect proxy feature to authenticate connections over standard Express.js session middleware.",author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",image:"/img/keyboard_thumb.jpg",hide_table_of_contents:!1},prevItem:{title:"Centrifugo integration with Django \u2013 building a basic chat application",permalink:"/blog/2021/11/04/integrating-with-django-building-chat-application"},nextItem:{title:"Centrifugo v3 released",permalink:"/blog/2021/08/31/hello-centrifugo-v3"}},l={authorsImageUrls:[void 0]},p=[{value:"What we are building",id:"what-we-are-building",level:2},{value:"Creating Express.js app",id:"creating-expressjs-app",level:2},{value:"Starting Centrifugo",id:"starting-centrifugo",level:2},{value:"Adding Nginx",id:"adding-nginx",level:2},{value:"Send real-time messages",id:"send-real-time-messages",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Centrifuge",src:n(2232).Z,width:"1280",height:"500"})),(0,r.kt)("p",null,"Centrifugo is a scalable real-time messaging server in a language-agnostic way. In this tutorial we will integrate Centrifugo with NodeJS backend using a connect proxy feature of Centrifugo for user authentication and native session middleware of ExpressJS framework."),(0,r.kt)("p",null,"Why would NodeJS developers want to integrate a project with Centrifugo? This is a good question especially since there are lots of various tools for real-time messaging available in NodeJS ecosystem."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial was written for Centrifugo v3. We recently released ",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/07/19/centrifugo-v4-released"},"Centrifugo v4")," which makes some parts of this tutorial obsolete. The core concepts are similar though \u2013 so this can still be used as a Centrifugo learning step.")),(0,r.kt)("p",null,"I found several points which could be a good motivation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Centrifugo scales well \u2013 we have a very optimized Redis Engine with client-side sharding and Redis Cluster support. We can also scale with KeyDB, Nats, or Tarantool. Centrifugo can scale to millions connections distributed over different server nodes."),(0,r.kt)("li",{parentName:"ul"},"Centrifugo is pretty fast (written in Go) and can handle thousands of clients per node. Client protocol is optimized for thousands of messages per second."),(0,r.kt)("li",{parentName:"ul"},"Centrifugo provides a variety of features out-of-the-box \u2013 some of them are unique, especially for real-time servers that scale to many nodes."),(0,r.kt)("li",{parentName:"ul"},"Centrifugo works as a separate service \u2013 so can be a universal tool in developer's pocket, can migrate from one project to another, no matter what programming language or framework is used for a business logic.")),(0,r.kt)("p",null,"Having said this all \u2013 let's move to a tutorial itself."),(0,r.kt)("h2",{id:"what-we-are-building"},"What we are building"),(0,r.kt)("p",null,"Not a super-cool app to be honest. Our goal here is to give a reader an idea how integration with Centrifugo could look like. There are many possible apps which could be built on top of this knowledge."),(0,r.kt)("p",null,"The end result here will allow application user to authenticate and once authenticated \u2013 connect to Centrifugo. Centrifugo will proxy connection requests to NodeJS backend and native ExpressJS session middleware will be used for connection authentication. We will also send some periodical real-time messages to a user personal channel."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/v3/nodejs_proxy"},"full source code of this tutorial")," located on Github. You can clone examples repo and run this demo by simply writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up\n")),(0,r.kt)("h2",{id:"creating-expressjs-app"},"Creating Express.js app"),(0,r.kt)("p",null,"Start new NodeJS app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")),(0,r.kt)("p",null,"Install dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express express-session cookie-parser axios morgan\n")),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const express = require('express');\nconst cookieParser = require(\"cookie-parser\");\nconst sessions = require('express-session');\nconst morgan = require('morgan');\nconst axios = require('axios');\n\nconst app = express();\nconst port = 3000;\napp.use(express.json());\n\nconst oneDay = 1000 * 60 * 60 * 24;\n\napp.use(sessions({\n  secret: \"this_is_my_secret_key\",\n  saveUninitialized: true,\n  cookie: { maxAge: oneDay },\n  resave: false\n}));\napp.use(cookieParser());\napp.use(express.urlencoded({ extended: true }))\napp.use(express.json())\napp.use(express.static('static'));\napp.use(morgan('dev'));\n\napp.get('/', (req, res) => {\n  if (req.session.userid) {\n    res.sendFile('views/app.html', { root: __dirname });\n  } else\n    res.sendFile('views/login.html', { root: __dirname })\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n")),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"login.html")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="views/login.html"',title:'"views/login.html"'},'<html>\n\n<body>\n    <form action="/login" method="post">\n        <h2>Login (username: demo-user, password: demo-pass)</h2>\n        <div class="input-field">\n            <input type="text" name="username" id="username" placeholder="Enter Username">\n        </div>\n        <div class="input-field">\n            <input type="password" name="password" id="password" placeholder="Enter Password">\n        </div>\n        <input type="submit" value="Log in">\n    </form>\n</body>\n\n</html>\n')),(0,r.kt)("p",null,"Also create ",(0,r.kt)("inlineCode",{parentName:"p"},"app.html")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="views/app.html"',title:'"views/app.html"'},'<html>\n\n<head>\n  <link rel="stylesheet" href="app.css">\n  <script src="https://cdn.jsdelivr.net/gh/centrifugal/centrifuge-js@2.8.3/dist/centrifuge.min.js"><\/script>\n</head>\n\n<body>\n  <div>\n    <a href=\'/logout\'>Click to logout</a>\n  </div>\n  <div id="log"></div>\n</body>\n\n</html>\n')),(0,r.kt)("p",null,"Make attention that we import ",(0,r.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," client here which abstracts away Centrifugo bidirectional WebSocket protocol."),(0,r.kt)("p",null,"Let's write an HTTP handler for login form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const myusername = 'demo-user'\nconst mypassword = 'demo-pass'\n\napp.post('/login', (req, res) => {\n  if (req.body.username == myusername && req.body.password == mypassword) {\n    req.session.userid = req.body.username;\n    res.redirect('/');\n  } else {\n    res.send('Invalid username or password');\n  }\n});\n")),(0,r.kt)("p",null,"In this example we use hardcoded username and password for out single user. Of course in real app you will have a database with user credentials. But since our goal is only show integration with Centrifugo \u2013 we are skipping these hard parts here."),(0,r.kt)("p",null,"Also create a handler for a logout request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"app.get('/logout', (req, res) => {\n  req.session.destroy();\n  res.redirect('/');\n});\n")),(0,r.kt)("p",null,"Now if you run an app with ",(0,r.kt)("inlineCode",{parentName:"p"},"node index.js")," you will see a login form using which you can authenticate. At this point this is a mostly convenient NodeJS application, let's add Centrifugo integration. "),(0,r.kt)("h2",{id:"starting-centrifugo"},"Starting Centrifugo"),(0,r.kt)("p",null,"Run Centrifugo with ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "token_hmac_secret_key": "secret",\n  "admin": true,\n  "admin_password": "password",\n  "admin_secret": "my_admin_secret",\n  "api_key": "my_api_key",\n  "allowed_origins": [\n    "http://localhost:9000"\n  ],\n  "user_subscribe_to_personal": true,\n  "proxy_connect_endpoint": "http://localhost:3000/centrifugo/connect",\n  "proxy_http_headers": [\n    "Cookie"\n  ]\n}\n')),(0,r.kt)("p",null,"I.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./centrifugo -c config.json\n")),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="static/app.js"',title:'"static/app.js"'},"function drawText(text) {\n    const div = document.createElement('div');\n    div.innerHTML = text;\n    document.getElementById('log').appendChild(div);\n}\n\nconst centrifuge = new Centrifuge('ws://localhost:9000/connection/websocket');\n\ncentrifuge.on('connect', function () {\n    drawText('Connected to Centrifugo');\n});\n\ncentrifuge.on('disconnect', function () {\n    drawText('Disconnected from Centrifugo');\n});\n\ncentrifuge.on('publish', function (ctx) {\n    drawText('Publication, time = ' + ctx.data.time);\n});\n\ncentrifuge.connect();\n")),(0,r.kt)("h2",{id:"adding-nginx"},"Adding Nginx"),(0,r.kt)("p",null,"Since we are going to use native session auth of ExpressJS we can't just connect from localhost:3000 (where our NodeJS app is served) to Centrifugo running on localhost:8000 \u2013 browser won't send a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie")," header to Centrifugo in this case. Due to this reason we need a reverse proxy which will terminate a traffic from frontend and proxy requests to NodeJS process or to Centrifugo depending on URL path. In this case both browser and NodeJS app will share the same origin \u2013 so Cookie will be sent to Centrifugo in WebSocket Upgrade request."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, we could also use ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/authentication"},"JWT authentication")," of Centrifugo but that's a topic for another tutorial. Here we are using ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/proxy#connect-proxy"},"connect proxy feature")," for auth. ")),(0,r.kt)("p",null,"Nginx config will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n  listen 9000;\n\n  server_name localhost;\n\n  location / {\n    proxy_pass http://localhost:3000;\n    proxy_http_version 1.1;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n  }\n\n  location /connection {\n    proxy_pass http://localhost:8000;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\n")),(0,r.kt)("p",null,"Run Nginx and open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000"},"http://localhost:9000"),". After authenticating in app you should see an attempt to connect to a WebSocket endpoint. But connection will fail since we need to implement connect proxy handler in NodeJS app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"app.post('/centrifugo/connect', (req, res) => {\n  if (req.session.userid) {\n    res.json({\n      result: {\n        user: req.session.userid\n      }\n    });\n  } else\n    res.json({\n      disconnect: {\n        code: 1000,\n        reason: \"unauthorized\",\n        reconnect: false\n      }\n    });\n});\n")),(0,r.kt)("p",null,"Restart NodeJS process and try opening an app again. Application should now successfully connect to Centrifugo."),(0,r.kt)("h2",{id:"send-real-time-messages"},"Send real-time messages"),(0,r.kt)("p",null,"Let's also periodically publish current server time to a client's personal channel. In Centrifugo configuration we set a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_subscribe_to_personal")," option which turns on ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/server_subs#automatic-personal-channel-subscription"},"automatic subscription to a personal channel")," for each connected user. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," library and send publish API requests to Centrifugo periodically (according to ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/server_api#http-api"},"API docs"),"): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const centrifugoApiClient = axios.create({\n  baseURL: `http://centrifugo:8000/api`,\n  headers: {\n    Authorization: `apikey my_api_key`,\n    'Content-Type': 'application/json',\n  },\n});\n\nsetInterval(async () => {\n  try {\n    await centrifugoApiClient.post('', {\n      method: 'publish',\n      params: {\n        channel: '#' + myusername, // construct personal channel name.\n        data: {\n          time: Math.floor(new Date().getTime() / 1000),\n        },\n      },\n    });\n  } catch (e) {\n    console.error(e.message);\n  }\n}, 5000);\n")),(0,r.kt)("p",null,"After restarting NodeJS you should see periodical updates on application web page."),(0,r.kt)("p",null,"You can also log in into Centrifugo admin web UI ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," using password ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," - and play with other available server API from within web interface."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"While not being super useful this example can help understanding core concepts of Centrifugo - specifically connect proxy feature and server API."),(0,r.kt)("p",null,"It's possible to use unidirectional Centrifugo transports instead of bidrectional WebSocket used here \u2013 in this case you can go without using ",(0,r.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," at all."),(0,r.kt)("p",null,"This application scales perfectly if you need to handle more connections \u2013 thanks to Centrifugo builtin PUB/SUB engines."),(0,r.kt)("p",null,"It's also possible to use client-side subscriptions, keep channel history cache, enable channel presence and more. All the power of Centrifugo is in your hands."))}u.isMDXComponent=!0},2232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keyboard-38dec1755b401ae21b4e5f92f3d1caa6.png"}}]);