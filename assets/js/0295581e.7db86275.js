"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(h,c(c({ref:n},d),{},{components:t})):o.createElement(h,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={id:"codes",title:"Error and disconnect codes"},c=void 0,s={unversionedId:"server/codes",id:"version-4/server/codes",title:"Error and disconnect codes",description:"This chapter describes error and disconnect codes Centrifugo uses in a client protocol, also error codes which a server API can return in response.",source:"@site/versioned_docs/version-4/server/codes.md",sourceDirName:"server",slug:"/server/codes",permalink:"/docs/4/server/codes",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/codes.md",tags:[],version:"4",frontMatter:{id:"codes",title:"Error and disconnect codes"},sidebar:"Guides",previous:{title:"Configure TLS",permalink:"/docs/4/server/tls"},next:{title:"Helper CLI commands",permalink:"/docs/4/server/console_commands"}},a={},l=[{value:"Client error codes",id:"client-error-codes",level:2},{value:"Internal",id:"internal",level:3},{value:"Unauthorized",id:"unauthorized",level:3},{value:"Unknown Channel",id:"unknown-channel",level:3},{value:"Permission Denied",id:"permission-denied",level:3},{value:"Method Not Found",id:"method-not-found",level:3},{value:"Already Subscribed",id:"already-subscribed",level:3},{value:"Limit Exceeded",id:"limit-exceeded",level:3},{value:"Bad Request",id:"bad-request",level:3},{value:"Not Available",id:"not-available",level:3},{value:"Token Expired",id:"token-expired",level:3},{value:"Expired",id:"expired",level:3},{value:"Too Many Requests",id:"too-many-requests",level:3},{value:"Unrecoverable Position",id:"unrecoverable-position",level:3},{value:"Client disconnect codes",id:"client-disconnect-codes",level:2},{value:"DisconnectConnectionClosed",id:"disconnectconnectionclosed",level:3},{value:"Non-terminal disconnect codes",id:"non-terminal-disconnect-codes",level:3},{value:"Shutdown",id:"shutdown",level:4},{value:"DisconnectServerError",id:"disconnectservererror",level:4},{value:"DisconnectExpired",id:"disconnectexpired",level:4},{value:"DisconnectSubExpired",id:"disconnectsubexpired",level:4},{value:"DisconnectSlow",id:"disconnectslow",level:4},{value:"DisconnectWriteError",id:"disconnectwriteerror",level:4},{value:"DisconnectInsufficientState",id:"disconnectinsufficientstate",level:4},{value:"DisconnectForceReconnect",id:"disconnectforcereconnect",level:4},{value:"DisconnectNoPong",id:"disconnectnopong",level:4},{value:"DisconnectTooManyRequests",id:"disconnecttoomanyrequests",level:4},{value:"Terminal disconnect codes",id:"terminal-disconnect-codes",level:3},{value:"DisconnectInvalidToken",id:"disconnectinvalidtoken",level:4},{value:"DisconnectBadRequest",id:"disconnectbadrequest",level:4},{value:"DisconnectStale",id:"disconnectstale",level:4},{value:"DisconnectForceNoReconnect",id:"disconnectforcenoreconnect",level:4},{value:"DisconnectConnectionLimit",id:"disconnectconnectionlimit",level:4},{value:"DisconnectChannelLimit",id:"disconnectchannellimit",level:4},{value:"DisconnectInappropriateProtocol",id:"disconnectinappropriateprotocol",level:4},{value:"DisconnectPermissionDenied",id:"disconnectpermissiondenied",level:4},{value:"DisconnectNotAvailable",id:"disconnectnotavailable",level:4},{value:"DisconnectTooManyErrors",id:"disconnecttoomanyerrors",level:4}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter describes error and disconnect codes Centrifugo uses in a client protocol, also error codes which a server API can return in response."),(0,r.kt)("h2",{id:"client-error-codes"},"Client error codes"),(0,r.kt)("p",null,"Client errors are errors that can be returned to a client in replies to commands. This is specific for bidirectional client protocol only. For example, an error can be returned inside a reply to a subscribe command issued by a client."),(0,r.kt)("p",null,"Here is the list of Centrifugo built-in client error codes (with proxy feature you have a way to use custom error codes in replies or reuse existing)."),(0,r.kt)("h3",{id:"internal"},"Internal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    100\nMessage: "internal server error"\nTemporary: true\n')),(0,r.kt)("p",null,"Error Internal means server error, if returned this is a signal that something went wrong with a server itself and client most probably not guilty."),(0,r.kt)("h3",{id:"unauthorized"},"Unauthorized"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    101\nMessage: "unauthorized"\n')),(0,r.kt)("p",null,"Error Unauthorized says that request is unauthorized."),(0,r.kt)("h3",{id:"unknown-channel"},"Unknown Channel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    102\nMessage: "unknown channel"\n')),(0,r.kt)("p",null,"Error Unknown Channel means that channel name does not exist."),(0,r.kt)("p",null,"Usually this is returned when client uses channel with a namespace which is not defined in Centrifugo configuration."),(0,r.kt)("h3",{id:"permission-denied"},"Permission Denied"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    103\nMessage: "permission denied"\n')),(0,r.kt)("p",null,"Error Permission Denied means that access to resource not allowed."),(0,r.kt)("h3",{id:"method-not-found"},"Method Not Found"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    104\nMessage: "method not found"\n')),(0,r.kt)("p",null,"Error Method Not Found means that method sent in command does not exist."),(0,r.kt)("h3",{id:"already-subscribed"},"Already Subscribed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    105\nMessage: "already subscribed"\n')),(0,r.kt)("p",null,"Error Already Subscribed returned when client wants to subscribe on channel it already subscribed to."),(0,r.kt)("h3",{id:"limit-exceeded"},"Limit Exceeded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    106\nMessage: "limit exceeded"\n')),(0,r.kt)("p",null,"Error Limit Exceeded says that some sort of limit exceeded, server logs should give more detailed information. See also ErrorTooManyRequests which is more specific for rate limiting purposes."),(0,r.kt)("h3",{id:"bad-request"},"Bad Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    107\nMessage: "bad request"\n')),(0,r.kt)("p",null,"Error Bad Request says that server can not process received data because it is malformed. Retrying request does not make sense."),(0,r.kt)("h3",{id:"not-available"},"Not Available"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    108\nMessage: "not available"\n')),(0,r.kt)("p",null,"Error Not Available means that resource is not enabled."),(0,r.kt)("p",null,"For example, this can be returned when trying to access history or presence in a channel that is not configured for having history or presence features."),(0,r.kt)("h3",{id:"token-expired"},"Token Expired"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    109\nMessage: "token expired"\n')),(0,r.kt)("p",null,"Error Token Expired indicates that connection token expired. Our SDKs handle it in a special way by updating token."),(0,r.kt)("h3",{id:"expired"},"Expired"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    110\nMessage: "expired"\n')),(0,r.kt)("p",null,"Error Expired indicates that connection expired (no token involved)."),(0,r.kt)("h3",{id:"too-many-requests"},"Too Many Requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    111\nMessage: "too many requests"\nTemporary: true\n')),(0,r.kt)("p",null,"Error Too Many Requests means that server rejected request due to rate limiting strategies."),(0,r.kt)("h3",{id:"unrecoverable-position"},"Unrecoverable Position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:    112\nMessage: "unrecoverable position"\n')),(0,r.kt)("p",null,"Error Unrecoverable Position means that stream does not contain required range of publications to fulfill a history query."),(0,r.kt)("p",null,"This can happen due to wrong epoch passed."),(0,r.kt)("h2",{id:"client-disconnect-codes"},"Client disconnect codes"),(0,r.kt)("p",null,"Client can be disconnected by a Centrifugo server with custom code and string reason. Here is the list of Centrifugo built-in disconnect codes (with proxy feature you have a way to use custom disconnect codes)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We expect that in most situations developers don't need to programmatically deal with handling various disconnect codes, but since Centrifugo sends them and codes shown in server metrics \u2013 they are documented. We expect these codes are mostly useful for logs and metrics.")),(0,r.kt)("h3",{id:"disconnectconnectionclosed"},"DisconnectConnectionClosed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code: 3000\nReason: "connection closed"\n')),(0,r.kt)("p",null,"DisconnectConnectionClosed is a special Disconnect object used when client connection was closed without any advice from a server side. This can be a clean disconnect, or temporary disconnect of the client due to internet connection loss. Server can not distinguish the actual reason of disconnect."),(0,r.kt)("h3",{id:"non-terminal-disconnect-codes"},"Non-terminal disconnect codes"),(0,r.kt)("p",null,"Client will reconnect after receiving such codes."),(0,r.kt)("h4",{id:"shutdown"},"Shutdown"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:      3001\nReason:    "shutdown"\n')),(0,r.kt)("p",null,"Disconnect Shutdown may be sent when node is going to shut down."),(0,r.kt)("h4",{id:"disconnectservererror"},"DisconnectServerError"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3004\nReason: "internal server error"\n')),(0,r.kt)("p",null,"DisconnectServerError issued when internal error occurred on server."),(0,r.kt)("h4",{id:"disconnectexpired"},"DisconnectExpired"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3005\nReason: "connection expired"\n')),(0,r.kt)("h4",{id:"disconnectsubexpired"},"DisconnectSubExpired"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3006\nReason: "subscription expired"\n')),(0,r.kt)("p",null,"DisconnectSubExpired issued when client subscription expired."),(0,r.kt)("h4",{id:"disconnectslow"},"DisconnectSlow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3008\nReason: "slow"\n')),(0,r.kt)("p",null,"DisconnectSlow issued when client can't read messages fast enough."),(0,r.kt)("h4",{id:"disconnectwriteerror"},"DisconnectWriteError"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3009\nReason: "write error"\n')),(0,r.kt)("p",null,"DisconnectWriteError issued when an error occurred while writing to client connection."),(0,r.kt)("h4",{id:"disconnectinsufficientstate"},"DisconnectInsufficientState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3010\nReason: "insufficient state"\n')),(0,r.kt)("p",null,"DisconnectInsufficientState issued when server detects wrong client position in channel Publication stream. Disconnect allows clien to restore missed publications on reconnect."),(0,r.kt)("h4",{id:"disconnectforcereconnect"},"DisconnectForceReconnect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3011\nReason: "force reconnect"\n')),(0,r.kt)("p",null,"DisconnectForceReconnect issued when server disconnects connection for some reason and whants it to reconnect."),(0,r.kt)("h4",{id:"disconnectnopong"},"DisconnectNoPong"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3012\nReason: "no pong"\n')),(0,r.kt)("p",null,"DisconnectNoPong may be issued when server disconnects bidirectional connection due to no pong received to application-level server-to-client pings in a configured time."),(0,r.kt)("h4",{id:"disconnecttoomanyrequests"},"DisconnectTooManyRequests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3013\nReason: "too many requests"\n')),(0,r.kt)("p",null,"DisconnectTooManyRequests may be issued when client sends too many commands to a server."),(0,r.kt)("h3",{id:"terminal-disconnect-codes"},"Terminal disconnect codes"),(0,r.kt)("p",null,"Client won't reconnect upon receiving such code."),(0,r.kt)("h4",{id:"disconnectinvalidtoken"},"DisconnectInvalidToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3500\nReason: "invalid token"\n')),(0,r.kt)("p",null,"DisconnectInvalidToken issued when client came with invalid token."),(0,r.kt)("h4",{id:"disconnectbadrequest"},"DisconnectBadRequest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3501\nReason: "bad request"\n')),(0,r.kt)("p",null,"DisconnectBadRequest issued when client uses malformed protocol frames."),(0,r.kt)("h4",{id:"disconnectstale"},"DisconnectStale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3502\nReason: "stale"\n')),(0,r.kt)("p",null,"DisconnectStale issued to close connection that did not become authenticated in configured interval after dialing."),(0,r.kt)("h4",{id:"disconnectforcenoreconnect"},"DisconnectForceNoReconnect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3503\nReason: "force disconnect"\n')),(0,r.kt)("p",null,"DisconnectForceNoReconnect issued when server disconnects connection and asks it to not reconnect again."),(0,r.kt)("h4",{id:"disconnectconnectionlimit"},"DisconnectConnectionLimit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3504\nReason: "connection limit"\n')),(0,r.kt)("p",null,"DisconnectConnectionLimit can be issued when client connection exceeds a configured connection limit (per user ID or due to other rule)."),(0,r.kt)("h4",{id:"disconnectchannellimit"},"DisconnectChannelLimit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3505\nReason: "channel limit"\n')),(0,r.kt)("p",null,"DisconnectChannelLimit can be issued when client connection exceeds a configured channel limit."),(0,r.kt)("h4",{id:"disconnectinappropriateprotocol"},"DisconnectInappropriateProtocol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3506\nReason: "inappropriate protocol"\n')),(0,r.kt)("p",null,"DisconnectInappropriateProtocol can be issued when client connection format can not handle incoming data. For example, this happens when JSON-based clients receive binary data in a channel. This is usually an indicator of programmer error, JSON clients can not handle binary."),(0,r.kt)("h4",{id:"disconnectpermissiondenied"},"DisconnectPermissionDenied"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3507\nReason: "permission denied"\n')),(0,r.kt)("p",null,"DisconnectPermissionDenied may be issued when client attempts accessing a server without enough permissions."),(0,r.kt)("h4",{id:"disconnectnotavailable"},"DisconnectNotAvailable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3508\nReason: "not available"\n')),(0,r.kt)("p",null,"DisconnectNotAvailable may be issued when ErrorNotAvailable does not fit message type, for example we issue DisconnectNotAvailable when client sends asynchronous message without MessageHandler set on server side."),(0,r.kt)("h4",{id:"disconnecttoomanyerrors"},"DisconnectTooManyErrors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Code:   3509\nReason: "too many errors"\n')),(0,r.kt)("p",null,"DisconnectTooManyErrors may be issued when client generates too many errors."))}u.isMDXComponent=!0}}]);