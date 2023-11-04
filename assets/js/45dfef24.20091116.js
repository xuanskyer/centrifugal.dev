"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1714],{35621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const o={id:"token_revocation",title:"Token revocation API"},r=void 0,a={id:"pro/token_revocation",title:"Token revocation API",description:"One more protective instrument in Centrifugo PRO is API to manage token revocations.",source:"@site/versioned_docs/version-4/pro/token_revocation.md",sourceDirName:"pro",slug:"/pro/token_revocation",permalink:"/docs/4/pro/token_revocation",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/pro/token_revocation.md",tags:[],version:"4",frontMatter:{id:"token_revocation",title:"Token revocation API"},sidebar:"Pro",previous:{title:"User blocking API",permalink:"/docs/4/pro/user_block"},next:{title:"Channel capabilities",permalink:"/docs/4/pro/capabilities"}},d={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure",id:"configure",level:2},{value:"Redis persistence engine",id:"redis-persistence-engine",level:3},{value:"Database persistence engine",id:"database-persistence-engine",level:3},{value:"Revoke token API",id:"revoke-token-api",level:2},{value:"revoke_token",id:"revoke_token",level:3},{value:"revoke_token params",id:"revoke_token-params",level:4},{value:"revoke_token result",id:"revoke_token-result",level:4},{value:"Invalidate user tokens API",id:"invalidate-user-tokens-api",level:2},{value:"invalidate_user_tokens",id:"invalidate_user_tokens",level:3},{value:"invalidate_user_tokens params",id:"invalidate_user_tokens-params",level:4},{value:"invalidate_user_tokens result",id:"invalidate_user_tokens-result",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"One more protective instrument in Centrifugo PRO is API to manage token revocations."}),"\n",(0,i.jsx)(n.p,{children:"At the moment Centrifugo provides two ways to revoke tokens:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Revoke token by ID: based on ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7",children:"jti"})," claim in the case of JWT."]}),"\n",(0,i.jsxs)(n.li,{children:["Revoke all user's tokens issued before certain time: based on ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6",children:"iat"})," in the case of JWT."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When token is revoked client with such token will be disconnected from Centrifugo shortly. And attempt to connect with a revoked token won't succeed."}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsx)(n.p,{children:"By default, information about token revocations shared throughout Centrifugo cluster and kept in a process memory. So token revocation information will be lost upon Centrifugo restart."}),"\n",(0,i.jsx)(n.p,{children:"But it's possible to enable revocation information persistence by configuring a persistence storage \u2013 in this case token revocation information will survive Centrifugo restarts."}),"\n",(0,i.jsx)(n.p,{children:"Centrifugo also automatically expires entries in the storage to keep working set reasonably small. Keeping pool of revoked tokens small allows avoiding expensive database lookups on every check \u2013 information is loaded periodically from the database and all checks performed over in-memory data structure \u2013 thus token revocation checks are cheap and have a small impact on the overall system performance."}),"\n",(0,i.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,i.jsxs)(n.p,{children:["Token revocation features (both revocation by token ID and user token invalidation by issue time) are enabled by default in Centrifugo PRO (as soon as your JWTs has ",(0,i.jsx)(n.code,{children:"jti"})," and ",(0,i.jsx)(n.code,{children:"iat"})," claims you will be able to use revocation APIs). By default revocation information kept in a process memory."]}),"\n",(0,i.jsx)(n.p,{children:"There are two types of persistent engines supported at the moment:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"redis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"database"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"redis-persistence-engine",children:"Redis persistence engine"}),"\n",(0,i.jsx)(n.p,{children:"Revocation data can be kept in Redis. To enable this configuration should be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "token_revoke": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    },\n    "user_tokens_invalidate": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Unlike many other Redis features in Centrifugo consistent sharding is not supported for revocation data. The reason is that we don't want to loose revocation information when additional Redis node added. So only one Redis shard can be provided for ",(0,i.jsx)(n.code,{children:"token_revoke"})," and ",(0,i.jsx)(n.code,{children:"user_tokens_invalidate"})," features. This should be fine given that working set of revoked entities should be reasonably small and old entries expire. If you try to set several Redis shards here Centrifugo will exit with an error on start."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["One more thing you may notice is that Redis configuration here does not have ",(0,i.jsx)(n.code,{children:"use_redis_from_engine"})," option. The reason is that since Redis is not shardable here reusing Redis configuration here could cause problems at the moment of main Redis scaling \u2013 which we want to avoid thus require explicit configuration here."]})}),"\n",(0,i.jsx)(n.h3,{id:"database-persistence-engine",children:"Database persistence engine"}),"\n",(0,i.jsx)(n.p,{children:"Revocation data can be kept in the relational database. Only PostgreSQL is supported."}),"\n",(0,i.jsx)(n.p,{children:"To enable this configuration should be like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "database": {\n        "dsn": "postgresql://postgres:pass@127.0.0.1:5432/postgres"\n    },\n    "token_revoke": {\n        "persistence_engine": "database"\n    },\n    "user_tokens_invalidate": {\n        "persistence_engine": "database"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"revoke-token-api",children:"Revoke token API"}),"\n",(0,i.jsx)(n.h3,{id:"revoke_token",children:"revoke_token"}),"\n",(0,i.jsxs)(n.p,{children:["Allows revoking individual tokens. For example, this may be useful when token leakage has been detected and you want to revoke access for a particular tokens. BTW Centrifugo PRO provides ",(0,i.jsx)(n.code,{children:"user_connections"})," API which has an information about tokens for active users connections (if set in JWT)."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This API assumes that JWTs you are using contain ",(0,i.jsx)(n.code,{children:'"jti"'})," claim which is a unique token ID (according to ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7",children:"RFC"}),")."]})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "revoke_token", "params": {"uid": "xxx-xxx-xxx", "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n'})}),"\n",(0,i.jsx)(n.h4,{id:"revoke_token-params",children:"revoke_token params"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter name"}),(0,i.jsx)(n.th,{children:"Parameter type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uid"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"Token unique ID (JTI claim in case of JWT)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expire_at"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsxs)(n.td,{children:["Unix time in the future when revocation information should expire (Unix seconds). While optional ",(0,i.jsx)(n.strong,{children:"we recommend to use a reasonably small expiration time (matching the expiration time of your JWTs)"})," to keep working set of revocations small (since Centrifugo nodes periodically load all entries from the database table to construct in-memory cache)."]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"revoke_token-result",children:"revoke_token result"}),"\n",(0,i.jsx)(n.p,{children:"Empty object at the moment."}),"\n",(0,i.jsx)(n.h2,{id:"invalidate-user-tokens-api",children:"Invalidate user tokens API"}),"\n",(0,i.jsx)(n.h3,{id:"invalidate_user_tokens",children:"invalidate_user_tokens"}),"\n",(0,i.jsx)(n.p,{children:"Allows revoking all tokens for a user which were issued before a certain time. For example, this may be useful after user changed a password in an application."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This API assumes that JWTs you are using contain ",(0,i.jsx)(n.code,{children:'"iat"'})," claim which is a time token was issued at (according to ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6",children:"RFC"}),")."]})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "invalidate_user_tokens", "params": {"user": "test", "issued_before": 1635845022, "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n'})}),"\n",(0,i.jsx)(n.h4,{id:"invalidate_user_tokens-params",children:"invalidate_user_tokens params"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter name"}),(0,i.jsx)(n.th,{children:"Parameter type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"yes"}),(0,i.jsx)(n.td,{children:"User ID to invalidate tokens for"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"issued_before"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsxs)(n.td,{children:["All tokens issued at before this Unix time will be considered revoked (in case of JWT this requires ",(0,i.jsx)(n.code,{children:"iat"})," to be properly set in JWT), if not provided server uses current time"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expire_at"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"no"}),(0,i.jsxs)(n.td,{children:["Unix time in the future when revocation information should expire (Unix seconds). While optional ",(0,i.jsx)(n.strong,{children:"we recommend to use a reasonably small expiration time (matching the expiration time of your JWTs)"})," to keep working set of revocations small (since Centrifugo nodes periodically load all entries from the database table to construct in-memory cache)."]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"invalidate_user_tokens-result",children:"invalidate_user_tokens result"}),"\n",(0,i.jsx)(n.p,{children:"Empty object."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);