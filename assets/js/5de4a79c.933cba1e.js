"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8375],{62158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var i=t(85893),o=t(11151),s=t(74866),r=t(85162);const c={id:"authentication",title:"Client JWT authentication"},a=void 0,l={id:"server/authentication",title:"Client JWT authentication",description:"To securely authenticate incoming real-time client connections, Centrifugo can use a JSON Web Token (JWT) issued by your application backend. This process allows Centrifugo to identify the user's ID in your application securely. Additionally, your application can include extra information within the JWT claims, which Centrifugo can then utilize. This chapter will explain how such connection token may be created and used.",source:"@site/docs/server/authentication.md",sourceDirName:"server",slug:"/server/authentication",permalink:"/docs/server/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/authentication.md",tags:[],version:"current",frontMatter:{id:"authentication",title:"Client JWT authentication"},sidebar:"Guides",previous:{title:"Server API walkthrough",permalink:"/docs/server/server_api"},next:{title:"Channels and namespaces",permalink:"/docs/server/channels"}},d={},h=[{value:"Connection JWT Claims",id:"connection-jwt-claims",level:2},{value:"sub",id:"sub",level:3},{value:"exp",id:"exp",level:3},{value:"iat",id:"iat",level:3},{value:"jti",id:"jti",level:3},{value:"aud",id:"aud",level:3},{value:"iss",id:"iss",level:3},{value:"info",id:"info",level:3},{value:"b64info",id:"b64info",level:3},{value:"channels",id:"channels",level:3},{value:"subs",id:"subs",level:3},{value:"Subscribe options:",id:"subscribe-options",level:4},{value:"Override object",id:"override-object",level:4},{value:"meta",id:"meta",level:3},{value:"expire_at",id:"expire_at",level:3},{value:"Connection expiration",id:"connection-expiration",level:2},{value:"Examples: create connection JWT",id:"examples-create-connection-jwt",level:2},{value:"Simplest token",id:"simplest-token",level:3},{value:"Token with expiration",id:"token-with-expiration",level:3},{value:"Token with additional connection info",id:"token-with-additional-connection-info",level:3},{value:"Example: connect with JWT",id:"example-connect-with-jwt",level:2},{value:"Investigating problems with JWT",id:"investigating-problems-with-jwt",level:2},{value:"JSON Web Key support",id:"json-web-key-support",level:2},{value:"Dynamic JWKs endpoint",id:"dynamic-jwks-endpoint",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To securely authenticate incoming real-time client connections, Centrifugo can use a ",(0,i.jsx)(n.a,{href:"https://jwt.io/introduction",children:"JSON Web Token"})," (JWT) issued by your application backend. This process allows Centrifugo to identify the user's ID in your application securely. Additionally, your application can include extra information within the JWT claims, which Centrifugo can then utilize. This chapter will explain how such connection token may be created and used."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you prefer not to use JWTs, consider the ",(0,i.jsx)(n.a,{href:"/docs/server/proxy",children:"proxy feature"}),". It enables the proxying of connection requests from Centrifugo to your application's backend endpoint for authentication."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Using JWT for authentication can be beneficial in scenarios involving massive reconnects. As the authentication information is encoded in the token, this can significantly reduce the load on your application's session backend. For more details, refer to our ",(0,i.jsx)(n.a,{href:"/blog/2020/11/12/scaling-websocket#massive-reconnect",children:"blog post"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Upon connection, the client should supply a connection JWT containing several predefined credential claims. Below is a diagram illustrating this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(98217).Z+"",width:"2951",height:"1130"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about handling connection tokens on the client side, see the ",(0,i.jsx)(n.a,{href:"/docs/transports/client_api#client-connection-token",children:"client SDK specification"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Currently, Centrifugo supports HMAC, RSA, and ECDSA JWT algorithms - specifically HS256, HS384, HS512, RSA256, RSA384, RSA512, EC256, EC384, and EC512."}),"\n",(0,i.jsxs)(n.p,{children:["Here, we will demonstrate example snippets using the Javascript Centrifugo client for the client-side and the ",(0,i.jsx)(n.a,{href:"https://github.com/jpadilla/pyjwt",children:"PyJWT"})," Python library to generate a connection token on the backend side."]}),"\n",(0,i.jsxs)(n.p,{children:["To add an HMAC secret key to Centrifugo, insert ",(0,i.jsx)(n.code,{children:"token_hmac_secret_key"})," into the configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To add RSA public key (must be PEM encoded string) add ",(0,i.jsx)(n.code,{children:"token_rsa_public_key"})," option, ex:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_rsa_public_key": "-----BEGIN PUBLIC KEY-----\\nMFwwDQYJKoZ..."\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To add ECDSA public key (must be PEM encoded string) add ",(0,i.jsx)(n.code,{children:"token_ecdsa_public_key"})," option, ex:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "token_ecdsa_public_key": "-----BEGIN PUBLIC KEY-----\\nxyz23adf..."\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"connection-jwt-claims",children:"Connection JWT Claims"}),"\n",(0,i.jsxs)(n.p,{children:["For connection JWT, Centrifugo uses some standard claims defined in ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"RFC 7519"}),", as well as custom Centrifugo-specific claims."]}),"\n",(0,i.jsx)(n.h3,{id:"sub",children:"sub"}),"\n",(0,i.jsxs)(n.p,{children:["This standard JWT claim must contain the ID of the current application user (",(0,i.jsx)(n.strong,{children:"as a string"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["If a user is not authenticated in the application but you wish to allow them to connect to Centrifugo, an empty string can be used as the user ID in the ",(0,i.jsx)(n.code,{children:"sub"})," claim. This facilitates anonymous access. In such cases, you might need to enable the corresponding channel namespace options that allow protocol features for anonymous users."]}),"\n",(0,i.jsx)(n.h3,{id:"exp",children:"exp"}),"\n",(0,i.jsx)(n.p,{children:"This claim specifies the UNIX timestamp (in seconds) when the token will expire. It is a standard JWT claim - all JWT libraries across different programming languages provide an API to set it."}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"exp"})," claim is not included, Centrifugo will not expire the connection. When included, a special algorithm will identify connections with an ",(0,i.jsx)(n.code,{children:"exp"})," in the past and initiate the connection refresh mechanism. The refresh mechanism allows a connection to be extended. If the refresh fails, Centrifugo will eventually close the client connection, which will not be accepted again until new valid and current credentials are provided in the connection token."]}),"\n",(0,i.jsx)(n.p,{children:"The connection expiration mechanism can be utilized in scenarios where you do not want users to remain subscribed to channels after being banned or deactivated in the application. It also serves to protect users from token leakage by setting a reasonably short expiration time."}),"\n",(0,i.jsxs)(n.p,{children:["Choose the ",(0,i.jsx)(n.code,{children:"exp"})," value judiciously; too short a value can lead to frequent application hits with refresh requests, whereas too long a value can result in delayed user connection deactivation. It's a matter of balance."]}),"\n",(0,i.jsxs)(n.p,{children:["Further details on connection expiration can be found ",(0,i.jsx)(n.a,{href:"#connection-expiration",children:"below"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"iat",children:"iat"}),"\n",(0,i.jsxs)(n.p,{children:["This represents the UNIX time when the token was issued (in seconds). Refer to the ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6",children:"definition in RFC 7519"}),". This claim is optional but can be advantageous in conjunction with ",(0,i.jsx)(n.a,{href:"/docs/pro/token_revocation",children:"Centrifugo PRO's token revocation features"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"jti",children:"jti"}),"\n",(0,i.jsxs)(n.p,{children:["This is a unique identifier for the token. Refer to the ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7",children:"definition in RFC 7519"}),". This claim is optional but can be beneficial in conjunction with ",(0,i.jsx)(n.a,{href:"/docs/pro/token_revocation",children:"Centrifugo PRO's token revocation features"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"aud",children:"aud"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT audience (",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3",children:"rfc7519 aud"})," claim)."]}),"\n",(0,i.jsxs)(n.p,{children:["But you can force this check by setting ",(0,i.jsx)(n.code,{children:"token_audience"})," string option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "token_audience": "centrifugo"\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"token_audience"})," will also affect subscription tokens (used for ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth",children:"channel token authorization"}),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth#separate-subscription-token-config",children:"separate subscription token config"})," feature."]})}),"\n",(0,i.jsx)(n.h3,{id:"iss",children:"iss"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Centrifugo does not check JWT issuer (",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1",children:"rfc7519 iss"})," claim)."]}),"\n",(0,i.jsxs)(n.p,{children:["But you can force this check by setting ",(0,i.jsx)(n.code,{children:"token_issuer"})," string option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  "token_issuer": "my_app"\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"token_issuer"})," will also affect subscription tokens (used for ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth",children:"channel token authorization"}),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth#separate-subscription-token-config",children:"separate subscription token config"})," feature."]})}),"\n",(0,i.jsx)(n.h3,{id:"info",children:"info"}),"\n",(0,i.jsx)(n.p,{children:"This optional claim provides additional information about the client's connection for Centrifugo. This information will be included in presence data, join/leave events, and client-side channel publications."}),"\n",(0,i.jsx)(n.h3,{id:"b64info",children:"b64info"}),"\n",(0,i.jsxs)(n.p,{children:["For those utilizing the binary Protobuf protocol and requiring the ",(0,i.jsx)(n.code,{children:"info"})," to be custom bytes, this field should be used."]}),"\n",(0,i.jsxs)(n.p,{children:["It contains a ",(0,i.jsx)(n.code,{children:"base64"})," encoded representation of your bytes. Centrifugo will decode the base64 back into bytes upon receipt and incorporate the result into the various places described above."]}),"\n",(0,i.jsx)(n.h3,{id:"channels",children:"channels"}),"\n",(0,i.jsxs)(n.p,{children:["This is an optional array of strings identifying the server-side channels to which the client will be subscribed. Further details can be found in the documentation on ",(0,i.jsx)(n.a,{href:"/docs/server/server_subs",children:"server-side subscriptions"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["It's important to note that the ",(0,i.jsx)(n.code,{children:"channels"})," claim is sometimes ",(0,i.jsx)(n.strong,{children:"misinterpreted"})," by users as a list of channel permissions. It does not serve that purpose. Instead, using this claim causes the client to be automatically subscribed to the specified channels upon connection, making it unnecessary to invoke the ",(0,i.jsx)(n.code,{children:"subscribe"})," API from the client side. More information can be found in the ",(0,i.jsx)(n.a,{href:"/docs/server/server_subs",children:"server-side subscriptions"})," documentation."]})}),"\n",(0,i.jsx)(n.h3,{id:"subs",children:"subs"}),"\n",(0,i.jsxs)(n.p,{children:["This optional claim is a map of channels with options, providing a more detailed approach to server-side subscriptions compared to the ",(0,i.jsx)(n.code,{children:"channels"})," claim, as it allows for the annotation of each channel with additional information and data through options."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The term ",(0,i.jsx)(n.code,{children:"subs"})," is shorthand for subscriptions. It should not be confused with the ",(0,i.jsx)(n.code,{children:"sub"})," claim mentioned earlier, which is a standard JWT claim used to provide a user ID (short for subject). Despite their similar names, these claims serve distinct purposes within a connection JWT."]})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "subs": {\n    "channel1": {\n      "data": {"welcome": "welcome to channel1"}\n    },\n    "channel2": {\n      "data": {"welcome": "welcome to channel2"}\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"subscribe-options",children:"Subscribe options:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"info"}),(0,i.jsx)(n.td,{children:"JSON object"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Custom channel info"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"b64info"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Custom channel info in Base64 - to pass binary channel info"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"data"}),(0,i.jsx)(n.td,{children:"JSON object"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Custom JSON data to return in subscription context inside Connect reply"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"b64data"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsxs)(n.td,{children:["Same as ",(0,i.jsx)(n.code,{children:"data"})," but in Base64 to send binary data"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"override"}),(0,i.jsx)(n.td,{children:"Override object"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Allows dynamically override some channel options defined in Centrifugo configuration on a per-connection basis (see below available fields)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"override-object",children:"Override object"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Optional"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"presence"}),(0,i.jsx)(n.td,{children:"BoolValue"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Override presence"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"join_leave"}),(0,i.jsx)(n.td,{children:"BoolValue"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Override join_leave"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"position"}),(0,i.jsx)(n.td,{children:"BoolValue"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Override position"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"recover"}),(0,i.jsx)(n.td,{children:"BoolValue"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Override recover"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"BoolValue is an object like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "value": true/false\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"meta",children:"meta"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"meta"})," is an additional JSON object (e.g., ",(0,i.jsx)(n.code,{children:'{"key": "value"}'}),") that is attached to a connection. It differs from ",(0,i.jsx)(n.code,{children:"info"})," as it is never disclosed to clients within presence and join/leave events; it is only accessible on the server side. It can be included in proxy calls from Centrifugo to the application backend (refer to the ",(0,i.jsx)(n.code,{children:"proxy_include_connection_meta"})," option). In Centrifugo PRO, there is a ",(0,i.jsx)(n.code,{children:"connections"})," API method that returns this metadata within the connection description object."]}),"\n",(0,i.jsx)(n.h3,{id:"expire_at",children:"expire_at"}),"\n",(0,i.jsxs)(n.p,{children:["Although Centrifugo typically uses the ",(0,i.jsx)(n.code,{children:"exp"})," claim to manage connection expiration, there may be scenarios where you want to separate the token expiration check from the connection expiration time. When the ",(0,i.jsx)(n.code,{children:"expire_at"})," claim is included in the JWT, Centrifugo uses it to determine the connection expiration time, while the JWT expiration is still verified using the ",(0,i.jsx)(n.code,{children:"exp"})," claim."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expire_at"})," is a UNIX timestamp indicating when the connection should expire."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To expire the connection at a specific future time, set it to that time."}),"\n",(0,i.jsxs)(n.li,{children:["To prevent connection expiration, set it to ",(0,i.jsx)(n.code,{children:"0"})," (token ",(0,i.jsx)(n.code,{children:"exp"})," claim will still be checked)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connection-expiration",children:"Connection expiration"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned, the ",(0,i.jsx)(n.code,{children:"exp"})," claim in a connection token is designed to expire the client connection at some point in time. Here's a detailed look at the process when Centrifugo identifies that the connection is going to expire."]}),"\n",(0,i.jsxs)(n.p,{children:["First, activate the client expiration mechanism in Centrifugo by providing a connection JWT with an ",(0,i.jsx)(n.code,{children:"exp"})," claim:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import jwt\nimport time\n\ntoken = jwt.encode({"sub": "42", "exp": int(time.time()) + 10*60}, "secret", algorithm="HS256")\n\nprint(token)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Assuming the ",(0,i.jsx)(n.code,{children:"exp"})," claim is set to expire in 10 minutes, the client connects to Centrifugo with this token. Centrifugo will maintain the connection for the specified duration. Once the time elapses, Centrifugo allows a grace period (default is 25 seconds) for the client to refresh its credentials with a new valid token containing an updated ",(0,i.jsx)(n.code,{children:"exp"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon initial connection, the client receives a ",(0,i.jsx)(n.code,{children:"ttl"})," value in the connect response, indicating the seconds remaining before it must initiate a refresh command with new credentials. Centrifugo SDKs handle this ",(0,i.jsx)(n.code,{children:"ttl"})," internally and automatically begin the refresh process."]}),"\n",(0,i.jsxs)(n.p,{children:["SDKs provide mechanisms to hook into this process and provide a function to get new token. It's up to developer to decide how to load new token from the backend \u2013 in web browser this is usually a simple ",(0,i.jsx)(n.code,{children:"fetch"})," request and response may look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'{\n    "token": token\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You should provide the same connection JWT you issued when the page was initially rendered, but with an updated and valid ",(0,i.jsx)(n.code,{children:"exp"}),". Our SDKs will then send this token to the Centrifugo server, and the connection will be extended for the period set in the new ",(0,i.jsx)(n.code,{children:"exp"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"When you load new token from your app backend user authentication must be facilitated by your app's session mechanism. So you know for whom you are are going to generate an updated token."}),"\n",(0,i.jsx)(n.h2,{id:"examples-create-connection-jwt",children:"Examples: create connection JWT"}),"\n",(0,i.jsx)(n.p,{children:"Let's look at how to generate connection HS256 JWT in Python:"}),"\n",(0,i.jsx)(n.h3,{id:"simplest-token",children:"Simplest token"}),"\n","\n",(0,i.jsxs)(s.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import jwt\n\ntoken = jwt.encode({"sub": "42"}, "secret").decode()\n\nprint(token)\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const jose = require('jose');\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42' })\n    .setProtectedHeader({ alg })\n    .sign(secret)\n\n  console.log(token);\n})();\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Note that we use the value of ",(0,i.jsx)(n.code,{children:"token_hmac_secret_key"})," from Centrifugo config here (in this case ",(0,i.jsx)(n.code,{children:"token_hmac_secret_key"})," value is just ",(0,i.jsx)(n.code,{children:"secret"}),"). The only two who must know the HMAC secret key is your application backend which generates JWT and Centrifugo. You should never reveal the HMAC secret key to your users."]}),"\n",(0,i.jsx)(n.p,{children:"Then you can pass this token to your client side and use it when connecting to Centrifugo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="Using centrifuge-js v3"',children:'var centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {\n  token: token\n});\ncentrifuge.connect();\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See more details about working with connection tokens and handling token expiration on the client-side in the ",(0,i.jsx)(n.a,{href:"/docs/transports/client_api#client-connection-token",children:"real-time SDK API spec"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"token-with-expiration",children:"Token with expiration"}),"\n",(0,i.jsx)(n.p,{children:"HS256 token that will be valid for 5 minutes:"}),"\n",(0,i.jsxs)(s.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import jwt\nimport time\n\nclaims = {"sub": "42", "exp": int(time.time()) + 5*60}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const jose = require('jose')\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42' })\n    .setProtectedHeader({ alg })\n    .setExpirationTime('5m')\n    .sign(secret)\n\n  console.log(token);\n})();\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"token-with-additional-connection-info",children:"Token with additional connection info"}),"\n",(0,i.jsx)(n.p,{children:"Let's attach user name:"}),"\n",(0,i.jsxs)(s.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import jwt\n\nclaims = {"sub": "42", "info": {"name": "Alexander Emelin"}}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const jose = require('jose')\n\n(async function main() {\n  const secret = new TextEncoder().encode('secret')\n  const alg = 'HS256'\n\n  const token = await new jose.SignJWT({ sub: '42', info: {\"name\": \"Alexander Emelin\"} })\n    .setProtectedHeader({ alg })\n    .setExpirationTime('5m')\n    .sign(secret)\n\n  console.log(token);\n})();\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"example-connect-with-jwt",children:"Example: connect with JWT"}),"\n",(0,i.jsx)(n.p,{children:"To connect with JWT it should be passed to Centrifugo from the client-side upon establishing real-time connection."}),"\n",(0,i.jsxs)(n.p,{children:["Our bidirectional SDKs provide options to set initial token as well as an option to set the function to load new connection token (required to handle refresh of expiring tokens). See ",(0,i.jsx)(n.a,{href:"/docs/transports/client_api#client-connection-token",children:"examples in client SDK spec"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Our unidirectional transports accept JWT as part of the connect payload. The way how connect payload is passed to Centrifugo differs for each unidirectional transport."}),"\n",(0,i.jsx)(n.h2,{id:"investigating-problems-with-jwt",children:"Investigating problems with JWT"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"https://jwt.io/",children:"jwt.io"})," site to investigate the contents of your tokens. Also, server logs usually contain some useful information."]}),"\n",(0,i.jsx)(n.h2,{id:"json-web-key-support",children:"JSON Web Key support"}),"\n",(0,i.jsxs)(n.p,{children:["Centrifugo supports JSON Web Key (JWK) ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7517",children:"spec"}),". This means that it's possible to improve JWT security by providing an endpoint to Centrifugo from where to load JWK (by looking at ",(0,i.jsx)(n.code,{children:"kid"})," header of JWT)."]}),"\n",(0,i.jsxs)(n.p,{children:["A mechanism can be enabled by providing ",(0,i.jsx)(n.code,{children:"token_jwks_public_endpoint"})," string option to Centrifugo (HTTP address)."]}),"\n",(0,i.jsxs)(n.p,{children:["As soon as ",(0,i.jsx)(n.code,{children:"token_jwks_public_endpoint"})," set all tokens will be verified using JSON Web Key Set loaded from JWKS endpoint. This makes it impossible to use non-JWK based tokens to connect and subscribe to private channels."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Read a tutorial in our blog about ",(0,i.jsx)(n.a,{href:"/blog/2023/03/31/keycloak-sso-centrifugo",children:"using Centrifugo with Keycloak SSO"}),". In that case connection tokens are verified using public key loaded from the JWKS endpoint of Keycloak."]})}),"\n",(0,i.jsx)(n.p,{children:"At the moment Centrifugo caches keys loaded from an endpoint for one hour."}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo will load keys from JWKS endpoint by issuing GET HTTP request with 1 second timeout and one retry in case of failure (not configurable at the moment)."}),"\n",(0,i.jsxs)(n.p,{children:["Centrifugo supports the following key types (",(0,i.jsx)(n.code,{children:"kty"}),") for JWKs tokens:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RSA"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EC"})," (since Centrifugo v5.1.0)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OKP"})," based on Ed25519 (since Centrifugo v5.2.1)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once enabled JWKS used for both connection and channel subscription tokens."}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-jwks-endpoint",children:"Dynamic JWKs endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to extract variables from ",(0,i.jsx)(n.code,{children:"iss"})," and ",(0,i.jsx)(n.code,{children:"aud"})," JWT claims using ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/regexp",children:"Go regexp"})," named groups, then use variables extracted during ",(0,i.jsx)(n.code,{children:"iss"})," or ",(0,i.jsx)(n.code,{children:"aud"})," matching to construct a JWKS endpoint dynamically upon token validation. In this case JWKS endpoint may be set in config as template."]}),"\n",(0,i.jsx)(n.p,{children:"To achieve this Centrifugo provides two additional options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token_issuer_regex"})," - match JWT issuer (",(0,i.jsx)(n.code,{children:"iss"})," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token_audience_regex"})," - match JWT audience (",(0,i.jsx)(n.code,{children:"aud"})," claim) against this regex, extract named groups to variables, variables are then available for jwks endpoint construction."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "token_issuer_regex": "https://example.com/auth/realms/(?P<realm>[A-z]+)",\n  "token_jwks_public_endpoint": "https://keycloak:443/{{realm}}/protocol/openid-connect/certs",\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To use variable in ",(0,i.jsx)(n.code,{children:"token_jwks_public_endpoint"})," it must be wrapped in ",(0,i.jsx)(n.code,{children:"{{"})," ",(0,i.jsx)(n.code,{children:"}}"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"token_issuer_regex"})," and ",(0,i.jsx)(n.code,{children:"token_audience_regex"})," make sure ",(0,i.jsx)(n.code,{children:"token_issuer"})," and ",(0,i.jsx)(n.code,{children:"token_audience"})," not used in the config - otherwise and error will be returned on Centrifugo start."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"token_issuer_regex"})," and ",(0,i.jsx)(n.code,{children:"token_audience_regex"})," will also affect subscription tokens (used for ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth",children:"channel token authorization"}),"). If you need to separate connection token configuration and subscription token configuration check out ",(0,i.jsx)(n.a,{href:"/docs/server/channel_token_auth#separate-subscription-token-config",children:"separate subscription token config"})," feature."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(36905);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(67294),o=t(36905),s=t(12466),r=t(16550),c=t(20469),a=t(91980),l=t(67392),d=t(50012);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[r,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[l,h]=x({queryString:t,groupId:o}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),m=(()=>{const e=l??j;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=c[t].value;o!==i&&(l(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(k,{...e,children:h(e.children)},String(n))}},98217:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connection_token-ea4cfc0055be21bde9889325fc006a24.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);