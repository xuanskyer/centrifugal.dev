"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={id:"integration",title:"Integration guide"},a=void 0,s={unversionedId:"getting-started/integration",id:"version-4/getting-started/integration",title:"Integration guide",description:"This chapter aims to help you get started with Centrifugo. We will look at a step-by-step workflow of integrating your application with Centrifugo providing links to relevant parts of this documentation.",source:"@site/versioned_docs/version-4/getting-started/integration.md",sourceDirName:"getting-started",slug:"/getting-started/integration",permalink:"/docs/4/getting-started/integration",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/getting-started/integration.md",tags:[],version:"4",frontMatter:{id:"integration",title:"Integration guide"},sidebar:"Introduction",previous:{title:"Main highlights",permalink:"/docs/4/getting-started/highlights"},next:{title:"Design overview",permalink:"/docs/4/getting-started/design"}},l={},c=[{value:"0. Install",id:"0-install",level:2},{value:"1. Configure Centrifugo",id:"1-configure-centrifugo",level:2},{value:"2. Configure your backend",id:"2-configure-your-backend",level:2},{value:"3. Connect to Centrifugo",id:"3-connect-to-centrifugo",level:2},{value:"4. Subscribe to channels",id:"4-subscribe-to-channels",level:2},{value:"5. Publish to channel",id:"5-publish-to-channel",level:2},{value:"6. Deploy to production",id:"6-deploy-to-production",level:2},{value:"7. Monitor Centrifugo",id:"7-monitor-centrifugo",level:2},{value:"8. Scale Centrifugo",id:"8-scale-centrifugo",level:2},{value:"9. Read FAQ",id:"9-read-faq",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter aims to help you get started with Centrifugo. We will look at a step-by-step workflow of integrating your application with Centrifugo providing links to relevant parts of this documentation."),(0,r.kt)("p",null,"As Centrifugo is language-agnostic and can be used together with any language/framework we won't be specific here about any backend or frontend technology your application can be built with. Only abstract steps which you can extrapolate to your application stack."),(0,r.kt)("p",null,"Let's look at a simplified scheme:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Centrifugo scheme",src:n(7282).Z,width:"3269",height:"1068"})),(0,r.kt)("p",null,"There are three parts involved in the idiomatic Centrifugo usage scenario:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your application backend"),(0,r.kt)("li",{parentName:"ol"},"Centrifugo"),(0,r.kt)("li",{parentName:"ol"},"Your clients (frontend application)")),(0,r.kt)("p",null,"It's possible to use Centrifugo without any application backend involved but here we won't consider this use case. "),(0,r.kt)("p",null,"Here let's suppose you already have 2 of 3 elements: clients and the backend. Now you want to add Centrifugo to receive real-time events on the client-side."),(0,r.kt)("h2",{id:"0-install"},"0. Install"),(0,r.kt)("p",null,"First, you need to do is download/install Centrifugo server. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/getting-started/installation"},"install")," chapter for details."),(0,r.kt)("h2",{id:"1-configure-centrifugo"},"1. Configure Centrifugo"),(0,r.kt)("p",null,"Create basic configuration file with ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"token_rsa_public_key"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"api_key")," set and then run Centrifugo. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/configuration"},"this chapter")," for details about ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token_rsa_public_key")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api"},"chapter about server API")," for API description. The simplest way to do this automatically is by using ",(0,r.kt)("inlineCode",{parentName:"p"},"genconfig")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./centrifugo genconfig\n")),(0,r.kt)("p",null,"\u2013 which will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," file for you with a minimal set of fields to start from."),(0,r.kt)("p",null,"Properly configure ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/configuration#allowed_origins"},"allowed_origins")," option."),(0,r.kt)("h2",{id:"2-configure-your-backend"},"2. Configure your backend"),(0,r.kt)("p",null,"In the configuration file ",(0,r.kt)("strong",{parentName:"p"},"of your application backend")," register several variables: Centrifugo token secret (if you decided to stick with JWT authentication) and Centrifugo API key you set on a previous step, also Centrifugo API endpoint address. By default, the API address is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/api"),". You ",(0,r.kt)("strong",{parentName:"p"},"must never reveal token secret and API key to your users"),"."),(0,r.kt)("h2",{id:"3-connect-to-centrifugo"},"3. Connect to Centrifugo"),(0,r.kt)("p",null,"Now your users can start connecting to Centrifugo. You should get a client library (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/transports/client_sdk"},"list of available client SDKs"),") for your application frontend. Every library has a method to connect to Centrifugo. See information about Centrifugo connection endpoints ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/configuration#endpoint-configuration"},"here"),"."),(0,r.kt)("p",null,"Every client should provide a connection token (JWT) on connect. You must generate this token on your backend side using Centrifugo secret key you set to backend configuration (note that in the case of RSA tokens you are generating JWT with a private key). See how to generate this JWT ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/authentication"},"in special chapter"),"."),(0,r.kt)("p",null,"You pass this token from the backend to your frontend app (pass it in template context or use separate request from client-side to get user-specific JWT from backend side). And use this token when connecting to Centrifugo (for example browser client has a special method ",(0,r.kt)("inlineCode",{parentName:"p"},"setToken"),")."),(0,r.kt)("p",null,"There is also a way to authenticate connections without using JWT - see ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/proxy"},"chapter about proxying to backend"),"."),(0,r.kt)("p",null,"You are connecting to Centrifugo using one of the available ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/transports/overview"},"transports"),"."),(0,r.kt)("h2",{id:"4-subscribe-to-channels"},"4. Subscribe to channels"),(0,r.kt)("p",null,"After connecting to Centrifugo subscribe clients to channels they are interested in. See more about channels in ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/channels"},"special chapter"),". All bidirectional client SDKs provide a way to handle messages coming to a client from a channel after subscribing to it. Learn more about client SDK possibilities from ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/transports/client_api"},"client SDK API spec"),"."),(0,r.kt)("p",null,"There is also a way to subscribe connection to a list of channels on the server side at the moment of connection establishment. See chapter about ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_subs"},"server-side subscriptions"),"."),(0,r.kt)("h2",{id:"5-publish-to-channel"},"5. Publish to channel"),(0,r.kt)("p",null,"Everything should work now \u2013 as soon as a user opens some page of your application it must successfully connect to Centrifugo and subscribe to a channel (or channels)."),(0,r.kt)("p",null,'Now let\'s imagine you want to send a real-time message to users subscribed on a specific channel. This message can be a reaction to some event that happened in your app: someone posted a new comment, the administrator just created a new post, the user pressed the "like" button, etc. Anyway, this is an event your backend just got, and you want to immediately send it to interested users.'),(0,r.kt)("p",null,"You can do this using Centrifugo ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api"},"HTTP API"),". To simplify your life ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api#http-api-libraries"},"we have several API libraries")," for different languages. You can publish messages into a channel using one of those libraries or you can simply ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api#http-api"},"follow API description")," to construct API requests yourself - this is very simple. Also Centrifugo supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/server_api#grpc-api"},"GRPC API"),". As soon as you published a message to the channel it must be delivered to your online client subscribed to that channel."),(0,r.kt)("h2",{id:"6-deploy-to-production"},"6. Deploy to production"),(0,r.kt)("p",null,"To put this all into production you need to deploy Centrifugo on your production server. To help you with this we have many things like Docker image, ",(0,r.kt)("inlineCode",{parentName:"p"},"rpm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deb")," packages, Nginx configuration. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/infra_tuning"},"Infrastructure tuning")," chapter for some actions you have to do to prepare your server infrastructure for handling many persistent connections."),(0,r.kt)("h2",{id:"7-monitor-centrifugo"},"7. Monitor Centrifugo"),(0,r.kt)("p",null,"Don't forget to configure ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/monitoring"},"metrics monitoring")," your production Centrifugo setup. This may help you to understand what's going on with Centrifugo setup, understand number of connections, operation count and latency distributions, etc."),(0,r.kt)("h2",{id:"8-scale-centrifugo"},"8. Scale Centrifugo"),(0,r.kt)("p",null,"As soon as you are close to machine resource limits you may want to scale Centrifugo \u2013 you can run many Centrifugo instances and load-balance clients between them using Redis engine, or with KeyDB, or with Tarantool, or with Nats broker. ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/server/engines"},"Engines and scalability")," chapter describes available options in detail."),(0,r.kt)("h2",{id:"9-read-faq"},"9. Read FAQ"),(0,r.kt)("p",null,"That's all for basics. The documentation actually covers lots of other concepts Centrifugo server has: scalability, private channels, admin web interface, SockJS fallback, Protobuf support, and more. And don't forget to read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/4/faq/"},"FAQ")," \u2013 it contains lot of useful information."))}p.isMDXComponent=!0},7282:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/protocol_pub_sub-e76b4f157f224a635402046af5f6f19c.png"}}]);