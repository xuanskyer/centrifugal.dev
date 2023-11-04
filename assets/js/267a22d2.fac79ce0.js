"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9668],{8441:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=t(85893),r=t(11151);const i={id:"user_status",title:"User status API"},a=void 0,l={id:"pro/user_status",title:"User status API",description:"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality.",source:"@site/versioned_docs/version-4/pro/user_status.md",sourceDirName:"pro",slug:"/pro/user_status",permalink:"/docs/4/pro/user_status",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/pro/user_status.md",tags:[],version:"4",frontMatter:{id:"user_status",title:"User status API"},sidebar:"Pro",previous:{title:"Push notification API",permalink:"/docs/4/pro/push_notifications"},next:{title:"Connections API",permalink:"/docs/4/pro/connections"}},d={},o=[{value:"Client-side status update RPC",id:"client-side-status-update-rpc",level:3},{value:"update_user_status server API",id:"update_user_status-server-api",level:3},{value:"Update user status params",id:"update-user-status-params",level:4},{value:"Update user status result",id:"update-user-status-result",level:4},{value:"get_user_status server API",id:"get_user_status-server-api",level:3},{value:"Get user status params",id:"get-user-status-params",level:4},{value:"Get user status result",id:"get-user-status-result",level:4},{value:"UserStatus",id:"userstatus",level:4},{value:"delete_user_status server API",id:"delete_user_status-server-api",level:3},{value:"Delete user status params",id:"delete-user-status-params",level:4},{value:"Delete user status result",id:"delete-user-status-result",level:4},{value:"Configuration",id:"configuration",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality."}),"\n",(0,n.jsx)(s.p,{children:"What if you want to get a specific user status based on its recent activity in application? You can create a personal channel with a presence enabled for each user. It will show that user has an active connection with a server. But this won't show whether user did some actions in an application recently or just left it open while not actually using it."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"user status",src:t(89877).Z+"",width:"4790",height:"835"})}),"\n",(0,n.jsx)(s.p,{children:"User status feature of Centrifugo PRO allows calling a special RPC method from a client side when a user makes a useful action in an application (clicks on buttons, uses a mouse \u2013 whatever means that user really uses application at the moment). This call sets a time of last user activity in Redis, and this information can then be queried over Centrifugo PRO server API."}),"\n",(0,n.jsx)(s.p,{children:"The feature can be useful for chat applications when you need to get online/activity status for a list of buddies (Centrifugo supports batch requests to user status information \u2013 i.e. ask for many users in one call)."}),"\n",(0,n.jsx)(s.h3,{id:"client-side-status-update-rpc",children:"Client-side status update RPC"}),"\n",(0,n.jsxs)(s.p,{children:["Centrifugo PRO provides a built-in RPC method of client API called ",(0,n.jsx)(s.code,{children:"update_user_status"}),". Call it with empty parameters from a client side whenever user performs a useful action that proves it's active status in your app. For example, in Javascript:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"await centrifuge.rpc('update_user_status', {});\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Don't forget to debounce this method calls on a client side to avoid exposing RPC on every mouse move event for example."})}),"\n",(0,n.jsx)(s.p,{children:"This RPC call sets user's last active time value in Redis (with sharding and Cluster support). Information about active status will be kept in Redis for a configured time interval, then expire."}),"\n",(0,n.jsx)(s.h3,{id:"update_user_status-server-api",children:"update_user_status server API"}),"\n",(0,n.jsxs)(s.p,{children:["It's also possible to call ",(0,n.jsx)(s.code,{children:"update_user_status"})," using Centrifugo server API (for example if you want to force status during application development or you want to proxy status updates over your app backend when using unidirectional transports):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "update_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n'})}),"\n",(0,n.jsx)(s.h4,{id:"update-user-status-params",children:"Update user status params"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter name"}),(0,n.jsx)(s.th,{children:"Parameter type"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"users"}),(0,n.jsx)(s.td,{children:"array of strings"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"List of users to update status for"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"update-user-status-result",children:"Update user status result"}),"\n",(0,n.jsx)(s.p,{children:"Empty object at the moment."}),"\n",(0,n.jsx)(s.h3,{id:"get_user_status-server-api",children:"get_user_status server API"}),"\n",(0,n.jsx)(s.p,{children:"Now on a backend side you have access to a bulk API to effectively get status of particular users."}),"\n",(0,n.jsx)(s.p,{children:"Call RPC method of server API (over HTTP or GRPC):"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "get_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n'})}),"\n",(0,n.jsx)(s.p,{children:"You should get a response like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42",\n                "active":1627107289,\n                "online":1627107289\n            }\n        ]\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"In case information about last status update time not available the response will be like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["I.e. status object will present in a response but ",(0,n.jsx)(s.code,{children:"active"})," field won't be set for status object."]}),"\n",(0,n.jsxs)(s.p,{children:["Note that Centrifugo also maintains ",(0,n.jsx)(s.code,{children:"online"})," field inside user status object. This field updated periodically by Centrifugo itself while user has active connection with a server. So you can draw ",(0,n.jsx)(s.code,{children:"away"})," statuses in your application: i.e. when user connected (",(0,n.jsx)(s.code,{children:"online"})," time) but not using application for a long time (",(0,n.jsx)(s.code,{children:"active"})," time)."]}),"\n",(0,n.jsx)(s.h4,{id:"get-user-status-params",children:"Get user status params"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter name"}),(0,n.jsx)(s.th,{children:"Parameter type"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"users"}),(0,n.jsx)(s.td,{children:"array of strings"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"List of users to get status for"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"get-user-status-result",children:"Get user status result"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field name"}),(0,n.jsx)(s.th,{children:"Field type"}),(0,n.jsx)(s.th,{children:"Optional"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"statuses"}),(0,n.jsx)(s.td,{children:"array of UserStatus"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"Statuses for each user in params (same order)"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"userstatus",children:"UserStatus"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Field name"}),(0,n.jsx)(s.th,{children:"Field type"}),(0,n.jsx)(s.th,{children:"Optional"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"no"}),(0,n.jsx)(s.td,{children:"User ID"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"active"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"Last active time (Unix seconds)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"online"}),(0,n.jsx)(s.td,{children:"integer"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"Last online time (Unix seconds)"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"delete_user_status-server-api",children:"delete_user_status server API"}),"\n",(0,n.jsxs)(s.p,{children:["If you need to clear user status information for some reason there is a ",(0,n.jsx)(s.code,{children:"delete_user_status"})," server API call:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "delete_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n'})}),"\n",(0,n.jsx)(s.h4,{id:"delete-user-status-params",children:"Delete user status params"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter name"}),(0,n.jsx)(s.th,{children:"Parameter type"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"users"}),(0,n.jsx)(s.td,{children:"array of strings"}),(0,n.jsx)(s.td,{children:"yes"}),(0,n.jsx)(s.td,{children:"List of users to delete status for"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"delete-user-status-result",children:"Delete user status result"}),"\n",(0,n.jsx)(s.p,{children:"Empty object at the moment."}),"\n",(0,n.jsx)(s.h3,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(s.p,{children:"To enable Redis user status feature:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "user_status": {\n        "enabled": true,\n        "redis_address": "127.0.0.1:6379"\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Redis configuration for user status feature matches Centrifugo Redis engine configuration. So Centrifugo supports client-side consistent sharding to scale Redis, Redis Sentinel, Redis Cluster for user status feature too."}),"\n",(0,n.jsxs)(s.p,{children:["It's also possible to reuse Centrifugo Redis engine by setting ",(0,n.jsx)(s.code,{children:"use_redis_from_engine"})," option instead of custom throttling Redis address declaration, like this:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "engine": "redis",\n    "redis_address": "localhost:6379",\n    "user_status": {\n        "enabled": true,\n        "use_redis_from_engine": true,\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"In this case Redis active status will simply connect to Redis instances configured for Centrifugo Redis engine."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"expire_interval"})," is a ",(0,n.jsx)(s.a,{href:"/docs/4/server/configuration#setting-time-duration-options",children:"duration"})," for how long Redis keys will be kept for each user. Expiration time extended on every update. By default expiration time is 31 day. To set it to 1 day:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "user_status": {\n        ...\n        "expire_interval": "24h"\n    }\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},89877:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/user_status-f8ea87131a11792b032fb4fc4eb373c5.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>a});var n=t(67294);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);