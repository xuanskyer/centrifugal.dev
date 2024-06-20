"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8589],{99512:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=i(85893),s=i(11151),o=i(74866),r=i(85162);const a={id:"authentication",title:"Client JWT authentication"},c=void 0,l={id:"server/authentication",title:"Client JWT authentication",description:"To authenticate incoming connection (client) Centrifugo can use JSON Web Token (JWT) passed from the client-side. This way Centrifugo may know the ID of user in your application, also application can pass additional data to Centrifugo inside JWT claims. This chapter describes this authentication mechanism.",source:"@site/versioned_docs/version-4/server/authentication.md",sourceDirName:"server",slug:"/server/authentication",permalink:"/docs/4/server/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/authentication.md",tags:[],version:"4",frontMatter:{id:"authentication",title:"Client JWT authentication"},sidebar:"Guides",previous:{title:"Server API walkthrough",permalink:"/docs/4/server/server_api"},next:{title:"Channels and namespaces",permalink:"/docs/4/server/channels"}},d={},h=[{value:"Connection JWT claims",id:"connection-jwt-claims",level:2},{value:"sub",id:"sub",level:3},{value:"exp",id:"exp",level:3},{value:"iat",id:"iat",level:3},{value:"jti",id:"jti",level:3},{value:"aud",id:"aud",level:3},{value:"iss",id:"iss",level:3},{value:"info",id:"info",level:3},{value:"b64info",id:"b64info",level:3},{value:"channels",id:"channels",level:3},{value:"subs",id:"subs",level:3},{value:"Subscribe options:",id:"subscribe-options",level:4},{value:"Override object",id:"override-object",level:4},{value:"meta",id:"meta",level:3},{value:"expire_at",id:"expire_at",level:3},{value:"Connection expiration",id:"connection-expiration",level:2},{value:"Examples",id:"examples",level:2},{value:"Simplest token",id:"simplest-token",level:3},{value:"Token with expiration",id:"token-with-expiration",level:3},{value:"Token with additional connection info",id:"token-with-additional-connection-info",level:3},{value:"Investigating problems with JWT",id:"investigating-problems-with-jwt",level:3},{value:"JSON Web Key support",id:"json-web-key-support",level:2},{value:"Dynamic JWKs endpoint",id:"dynamic-jwks-endpoint",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To authenticate incoming connection (client) Centrifugo can use ",(0,t.jsx)(n.a,{href:"https://jwt.io/introduction",children:"JSON Web Token"})," (JWT) passed from the client-side. This way Centrifugo may know the ID of user in your application, also application can pass additional data to Centrifugo inside JWT claims. This chapter describes this authentication mechanism."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you prefer to avoid using JWT then look at ",(0,t.jsx)(n.a,{href:"/docs/4/server/proxy",children:"the proxy feature"}),". It allows proxying connection requests from Centrifugo to your application backend endpoint for authentication details."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Using JWT auth can be nice in terms of massive reconnect scenario. Since authentication information is encoded directly in the token this may help to drastically reduce load on your application session backend. See in our ",(0,t.jsx)(n.a,{href:"/blog/2020/11/12/scaling-websocket#massive-reconnect",children:"blog post"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Upon connecting to Centrifugo client should provide a connection JWT with several predefined credential claims. Here is a diagram:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(95718).Z+"",width:"2600",height:"906"})}),"\n",(0,t.jsx)(n.p,{children:"At the moment Centrifugo supports HMAC, RSA and ECDSA JWT algorithms - i.e. HS256, HS384, HS512, RSA256, RSA384, RSA512, EC256, EC384, EC512."}),"\n",(0,t.jsxs)(n.p,{children:["We will use Javascript Centrifugo client here for example snippets for client-side and ",(0,t.jsx)(n.a,{href:"https://github.com/jpadilla/pyjwt",children:"PyJWT"})," Python library to generate a connection token on the backend side."]}),"\n",(0,t.jsxs)(n.p,{children:["To add HMAC secret key to Centrifugo add ",(0,t.jsx)(n.code,{children:"token_hmac_secret_key"})," to configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To add RSA public key (must be PEM encoded string) add ",(0,t.jsx)(n.code,{children:"token_rsa_public_key"})," option, ex:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_rsa_public_key": "-----BEGIN PUBLIC KEY-----\\nMFwwDQYJKoZ..."\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To add ECDSA public key (must be PEM encoded string) add ",(0,t.jsx)(n.code,{children:"token_ecdsa_public_key"})," option, ex:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_ecdsa_public_key": "-----BEGIN PUBLIC KEY-----\\nxyz23adf..."\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"connection-jwt-claims",children:"Connection JWT claims"}),"\n",(0,t.jsxs)(n.p,{children:["For connection JWT Centrifugo uses the some standart claims defined in ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"rfc7519"}),", also some custom Centrifugo-specific."]}),"\n",(0,t.jsx)(n.h3,{id:"sub",children:"sub"}),"\n",(0,t.jsxs)(n.p,{children:["This is a standard JWT claim which must contain an ID of the current application user (",(0,t.jsx)(n.strong,{children:"as string"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["If a user is not currently authenticated in an application, but you want to let him connect to Centrifugo anyway \u2013 you can use an empty string as a user ID in ",(0,t.jsx)(n.code,{children:"sub"})," claim. This is called anonymous access. In this case, you may need to enable corresponding channel namespace options which enable access to protocol features for anonymous users."]}),"\n",(0,t.jsx)(n.h3,{id:"exp",children:"exp"}),"\n",(0,t.jsx)(n.p,{children:"This is a UNIX timestamp seconds when the token will expire. This is a standard JWT claim - all JWT libraries for different languages provide an API to set it."}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"exp"})," claim is not provided then Centrifugo won't expire connection. When provided special algorithm will find connections with ",(0,t.jsx)(n.code,{children:"exp"})," in the past and activate the connection refresh mechanism. Refresh mechanism allows connection to survive and be prolonged. In case of refresh failure, the client connection will be eventually closed by Centrifugo and won't be accepted until new valid and actual credentials are provided in the connection token."]}),"\n",(0,t.jsx)(n.p,{children:"You can use the connection expiration mechanism in cases when you don't want users of your app to be subscribed on channels after being banned/deactivated in the application. Or to protect your users from token leakage (providing a reasonably short time of expiration)."}),"\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.code,{children:"exp"})," value wisely, you don't need small values because the refresh mechanism will hit your application often with refresh requests. But setting this value too large can lead to slow user connection deactivation. This is a trade-off."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more about connection expiration ",(0,t.jsx)(n.a,{href:"#connection-expiration",children:"below"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"iat",children:"iat"}),"\n",(0,t.jsxs)(n.p,{children:["This is a UNIX time when token was issued (seconds). See ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6",children:"definition in RFC"}),". This claim is optional but can be useful together with ",(0,t.jsx)(n.a,{href:"/docs/4/pro/token_revocation",children:"Centrifugo PRO token revocation features"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"jti",children:"jti"}),"\n",(0,t.jsxs)(n.p,{children:["This is a token unique ID. See ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7",children:"definition in RFC"}),". This claim is optional but can be useful together with ",(0,t.jsx)(n.a,{href:"/docs/4/pro/token_revocation",children:"Centrifugo PRO token revocation features"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"aud",children:"aud"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT audience (",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3",children:"rfc7519 aud"})," claim)."]}),"\n",(0,t.jsxs)(n.p,{children:["But you can force this check by setting ",(0,t.jsx)(n.code,{children:"token_audience"})," string option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "token_audience": "centrifugo"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"token_audience"})," will also affect subscription tokens (used for ",(0,t.jsx)(n.a,{href:"/docs/4/server/channel_token_auth",children:"channel token authorization"}),"). Please read ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo/issues/640",children:"this issue"})," and reach out if your use case requires separate configuration for subscription tokens."]})}),"\n",(0,t.jsx)(n.h3,{id:"iss",children:"iss"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT issuer (",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1",children:"rfc7519 iss"})," claim)."]}),"\n",(0,t.jsxs)(n.p,{children:["But you can force this check by setting ",(0,t.jsx)(n.code,{children:"token_issuer"})," string option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "token_issuer": "my_app"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"token_issuer"})," will also affect subscription tokens (used for ",(0,t.jsx)(n.a,{href:"/docs/4/server/channel_token_auth",children:"channel token authorization"}),"). Please read ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo/issues/640",children:"this issue"})," and reach out if your use case requires separate configuration for subscription tokens."]})}),"\n",(0,t.jsx)(n.h3,{id:"info",children:"info"}),"\n",(0,t.jsx)(n.p,{children:"This claim is optional - this is additional information about client connection that can be provided for Centrifugo. This information will be included in presence information, join/leave events, and channel publication if it was published from a client-side."}),"\n",(0,t.jsx)(n.h3,{id:"b64info",children:"b64info"}),"\n",(0,t.jsx)(n.p,{children:"If you are using binary Protobuf protocol you may want info to be custom bytes. Use this field in this case."}),"\n",(0,t.jsxs)(n.p,{children:["This field contains a ",(0,t.jsx)(n.code,{children:"base64"})," representation of your bytes. After receiving Centrifugo will decode base64 back to bytes and will embed the result into various places described above."]}),"\n",(0,t.jsx)(n.h3,{id:"channels",children:"channels"}),"\n",(0,t.jsxs)(n.p,{children:["An optional array of strings with server-side channels to subscribe a client to. See more details about ",(0,t.jsx)(n.a,{href:"/docs/4/server/server_subs",children:"server-side subscriptions"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"subs",children:"subs"}),"\n",(0,t.jsxs)(n.p,{children:["An optional map of channels with options. This is like a ",(0,t.jsx)(n.code,{children:"channels"})," claim but allows more control over server-side subscription since every channel can be annotated with info, data, and so on using options."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This claim is called ",(0,t.jsx)(n.code,{children:"subs"})," as a shortcut from subscriptions. The claim ",(0,t.jsx)(n.code,{children:"sub"})," described above is a standart JWT claim to provide a user ID (it's a shortcut from subject). While claims have similar names they have different purpose in a connection JWT."]})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "subs": {\n    "channel1": {\n      "data": {"welcome": "welcome to channel1"}\n    },\n    "channel2": {\n      "data": {"welcome": "welcome to channel2"}\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"subscribe-options",children:"Subscribe options:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Optional"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"JSON object"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Custom channel info"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b64info"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Custom channel info in Base64 - to pass binary channel info"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:"JSON object"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Custom JSON data to return in subscription context inside Connect reply"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b64data"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"data"})," but in Base64 to send binary data"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"override"}),(0,t.jsx)(n.td,{children:"Override object"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Allows dynamically override some channel options defined in Centrifugo configuration on a per-connection basis (see below available fields)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"override-object",children:"Override object"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Optional"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"presence"}),(0,t.jsx)(n.td,{children:"BoolValue"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Override presence"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"join_leave"}),(0,t.jsx)(n.td,{children:"BoolValue"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Override join_leave"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"position"}),(0,t.jsx)(n.td,{children:"BoolValue"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Override position"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recover"}),(0,t.jsx)(n.td,{children:"BoolValue"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Override recover"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"BoolValue is an object like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "value": true/false\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"meta",children:"meta"}),"\n",(0,t.jsxs)(n.p,{children:["Meta is an additional JSON object (ex. ",(0,t.jsx)(n.code,{children:'{"key": "value"}'}),") that will be attached to a connection. Unlike ",(0,t.jsx)(n.code,{children:"info"})," it's never exposed to clients inside presence and join/leave payloads and only accessible on a backend side. It may be included in proxy calls from Centrifugo to the application backend (see ",(0,t.jsx)(n.code,{children:"proxy_include_connection_meta"})," option). Also, there is a ",(0,t.jsx)(n.code,{children:"connections"})," API method in Centrifugo PRO that returns this data in the connection description object."]}),"\n",(0,t.jsx)(n.h3,{id:"expire_at",children:"expire_at"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Centrifugo looks on ",(0,t.jsx)(n.code,{children:"exp"})," claim to configure connection expiration. In most cases this is fine, but there could be situations where you wish to decouple token expiration check with connection expiration time. As soon as the ",(0,t.jsx)(n.code,{children:"expire_at"})," claim is provided (set) in JWT Centrifugo relies on it for setting connection expiration time (JWT expiration still checked over ",(0,t.jsx)(n.code,{children:"exp"})," though)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expire_at"})," is a UNIX timestamp seconds when the connection should expire."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set it to the future time for expiring connection at some point"}),"\n",(0,t.jsxs)(n.li,{children:["Set it to ",(0,t.jsx)(n.code,{children:"0"})," to disable connection expiration (but still check token ",(0,t.jsx)(n.code,{children:"exp"})," claim)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connection-expiration",children:"Connection expiration"}),"\n",(0,t.jsxs)(n.p,{children:["As said above ",(0,t.jsx)(n.code,{children:"exp"})," claim in a connection token allows expiring client connection at some point in time. Let's look in detail at what happens when Centrifugo detects that the connection is going to expire."]}),"\n",(0,t.jsx)(n.p,{children:"First, you should do is enable client expiration mechanism in Centrifugo providing a connection JWT with expiration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import jwt\nimport time\n\ntoken = jwt.encode({"sub": "42", "exp": int(time.time()) + 10*60}, "secret").decode()\n\nprint(token)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let's suppose that you set ",(0,t.jsx)(n.code,{children:"exp"})," field to timestamp that will expire in 10 minutes and the client connected to Centrifugo with this token. During 10 minutes the connection will be kept by Centrifugo. When this time passed Centrifugo gives the connection some time (configured, 25 seconds by default) to refresh its credentials and provide a new valid token with new ",(0,t.jsx)(n.code,{children:"exp"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When a client first connects to Centrifugo it receives the ",(0,t.jsx)(n.code,{children:"ttl"})," value in connect reply. That ",(0,t.jsx)(n.code,{children:"ttl"})," value contains the number of seconds after which the client must send the ",(0,t.jsx)(n.code,{children:"refresh"})," command with new credentials to Centrifugo. Centrifugo clients must handle this ",(0,t.jsx)(n.code,{children:"ttl"})," field and automatically start the refresh process."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, a Javascript browser client will send an AJAX POST request to your application when it's time to refresh credentials. By default, this request goes to ",(0,t.jsx)(n.code,{children:"/centrifuge/refresh"})," URL endpoint. In response your server must return JSON with a new connection JWT:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "token": token\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["So you must just return the same connection JWT for your user when rendering the page initially. But with actual valid ",(0,t.jsx)(n.code,{children:"exp"}),". Javascript client will then send them to Centrifugo server and connection will be refreshed for a time you set in ",(0,t.jsx)(n.code,{children:"exp"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In this case, you know which user wants to refresh its connection because this is just a general request to your app - so your session mechanism will tell you about the user."}),"\n",(0,t.jsx)(n.p,{children:"If you don't want to refresh the connection for this user - just return 403 Forbidden on refresh request to your application backend."}),"\n",(0,t.jsx)(n.p,{children:"Javascript client also has options to hook into a refresh mechanism to implement your custom way of refreshing. Other Centrifugo clients also should have hooks to refresh credentials but depending on client API for this can be different - see specific client docs."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Let's look at how to generate connection HS256 JWT in Python:"}),"\n",(0,t.jsx)(n.h3,{id:"simplest-token",children:"Simplest token"}),"\n","\n",(0,t.jsxs)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,t.jsx)(r.Z,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import jwt\n\ntoken = jwt.encode({"sub": "42"}, "secret").decode()\n\nprint(token)\n'})})}),(0,t.jsx)(r.Z,{value:"node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42' }, 'secret');\n\nconsole.log(token);\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Note that we use the value of ",(0,t.jsx)(n.code,{children:"token_hmac_secret_key"})," from Centrifugo config here (in this case ",(0,t.jsx)(n.code,{children:"token_hmac_secret_key"})," value is just ",(0,t.jsx)(n.code,{children:"secret"}),"). The only two who must know the HMAC secret key is your application backend which generates JWT and Centrifugo. You should never reveal the HMAC secret key to your users."]}),"\n",(0,t.jsx)(n.p,{children:"Then you can pass this token to your client side and use it when connecting to Centrifugo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="Using centrifuge-js v3"',children:'var centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {\n  token: token\n});\ncentrifuge.connect();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["See more details about working with connection tokens and handling token expiration on the client-side in the ",(0,t.jsx)(n.a,{href:"/docs/4/transports/client_api#client-connection-token",children:"real-time SDK API spec"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"token-with-expiration",children:"Token with expiration"}),"\n",(0,t.jsx)(n.p,{children:"HS256 token that will be valid for 5 minutes:"}),"\n",(0,t.jsxs)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,t.jsx)(r.Z,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import jwt\nimport time\n\nclaims = {"sub": "42", "exp": int(time.time()) + 5*60}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'})})}),(0,t.jsx)(r.Z,{value:"node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42' }, 'secret', { expiresIn: 5 * 60 });\n\nconsole.log(token);\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"token-with-additional-connection-info",children:"Token with additional connection info"}),"\n",(0,t.jsx)(n.p,{children:"Let's attach user name:"}),"\n",(0,t.jsxs)(o.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,t.jsx)(r.Z,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import jwt\n\nclaims = {"sub": "42", "info": {"name": "Alexander Emelin"}}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'})})}),(0,t.jsx)(r.Z,{value:"node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42', info: {\"name\": \"Alexander Emelin\"} }, 'secret');\n\nconsole.log(token);\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"investigating-problems-with-jwt",children:"Investigating problems with JWT"}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://jwt.io/",children:"jwt.io"})," site to investigate the contents of your tokens. Also, server logs usually contain some useful information."]}),"\n",(0,t.jsx)(n.h2,{id:"json-web-key-support",children:"JSON Web Key support"}),"\n",(0,t.jsxs)(n.p,{children:["Centrifugo supports JSON Web Key (JWK) ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7517",children:"spec"}),". This means that it's possible to improve JWT security by providing an endpoint to Centrifugo from where to load JWK (by looking at ",(0,t.jsx)(n.code,{children:"kid"})," header of JWT)."]}),"\n",(0,t.jsxs)(n.p,{children:["A mechanism can be enabled by providing ",(0,t.jsx)(n.code,{children:"token_jwks_public_endpoint"})," string option to Centrifugo (HTTP address)."]}),"\n",(0,t.jsxs)(n.p,{children:["As soon as ",(0,t.jsx)(n.code,{children:"token_jwks_public_endpoint"})," set all tokens will be verified using JSON Web Key Set loaded from JWKS endpoint. This makes it impossible to use non-JWK based tokens to connect and subscribe to private channels."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read a tutorial in our blog about ",(0,t.jsx)(n.a,{href:"/blog/2023/03/31/keycloak-sso-centrifugo",children:"using Centrifugo with Keycloak SSO"}),". In that case connection tokens are verified using public key loaded from the JWKS endpoint of Keycloak."]})}),"\n",(0,t.jsx)(n.p,{children:"At the moment Centrifugo caches keys loaded from an endpoint for one hour."}),"\n",(0,t.jsx)(n.p,{children:"Centrifugo will load keys from JWKS endpoint by issuing GET HTTP request with 1 second timeout and one retry in case of failure (not configurable at the moment)."}),"\n",(0,t.jsxs)(n.p,{children:["Only ",(0,t.jsx)(n.code,{children:"RSA"})," algorithm is supported."]}),"\n",(0,t.jsx)(n.p,{children:"Once enabled JWKS used for both connection and channel subscription tokens."}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-jwks-endpoint",children:"Dynamic JWKs endpoint"}),"\n",(0,t.jsx)(n.p,{children:"Available since Centrifugo v4.1.3"}),"\n",(0,t.jsxs)(n.p,{children:["It's possible to extract variables from ",(0,t.jsx)(n.code,{children:"iss"})," and ",(0,t.jsx)(n.code,{children:"aud"})," JWT claims using ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/regexp",children:"Go regexp"})," named groups, then use variables extracted during ",(0,t.jsx)(n.code,{children:"iss"})," or ",(0,t.jsx)(n.code,{children:"aud"})," matching to construct a JWKS endpoint dynamically upon token validation. In this case JWKS endpoint may be set in config as template."]}),"\n",(0,t.jsx)(n.p,{children:"To achieve this Centrifugo provides two additional options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token_issuer_regex"})," - match JWT issuer (",(0,t.jsx)(n.code,{children:"iss"})," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token_audience_regex"})," - match JWT audience (",(0,t.jsx)(n.code,{children:"aud"})," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "token_issuer_regex": "https://example.com/auth/realms/(?P<realm>[A-z]+)",\n  "token_jwks_public_endpoint": "https://keycloak:443/{{realm}}/protocol/openid-connect/certs",\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To use variable in ",(0,t.jsx)(n.code,{children:"token_jwks_public_endpoint"})," it must be wrapped in ",(0,t.jsx)(n.code,{children:"{{"})," ",(0,t.jsx)(n.code,{children:"}}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"token_issuer_regex"})," and ",(0,t.jsx)(n.code,{children:"token_audience_regex"})," make sure ",(0,t.jsx)(n.code,{children:"token_issuer"})," and ",(0,t.jsx)(n.code,{children:"token_audience"})," not used in the config - otherwise and error will be returned on Centrifugo start."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"token_issuer_regex"})," and ",(0,t.jsx)(n.code,{children:"token_audience_regex"})," will also affect subscription tokens (used for ",(0,t.jsx)(n.a,{href:"/docs/4/server/channel_token_auth",children:"channel token authorization"}),"). Please read ",(0,t.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo/issues/640",children:"this issue"})," and reach out if your use case requires separate configuration for subscription tokens."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,i)=>{i.d(n,{Z:()=>r});i(67294);var t=i(36905);const s={tabItem:"tabItem_Ymn6"};var o=i(85893);function r(e){let{children:n,hidden:i,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:i,children:n})}},74866:(e,n,i)=>{i.d(n,{Z:()=>k});var t=i(67294),s=i(36905),o=i(12466),r=i(16550),a=i(20469),c=i(91980),l=i(67392),d=i(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const s=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,o=u(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[l,h]=x({queryString:i,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Nk)(i);return[s,(0,t.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:s}),m=(()=>{const e=l??j;return p({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var f=i(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(85893);function g(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),s=a[i].value;s!==t&&(l(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:s}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},95718:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/diagram_jwt_authentication-6a769cc8f218228df5954d240b2057cc.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);