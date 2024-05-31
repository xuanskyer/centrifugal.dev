"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3165],{16116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(85893),i=n(11151);const s={id:"tls",title:"Configure TLS"},o=void 0,c={id:"server/tls",title:"Configure TLS",description:"TLS/SSL layer is very important not only for securing your connections but also to increase a",source:"@site/versioned_docs/version-4/server/tls.md",sourceDirName:"server",slug:"/server/tls",permalink:"/docs/4/server/tls",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/tls.md",tags:[],version:"4",frontMatter:{id:"tls",title:"Configure TLS"},sidebar:"Guides",previous:{title:"Load balancing",permalink:"/docs/4/server/load_balancing"},next:{title:"Error and disconnect codes",permalink:"/docs/4/server/codes"}},a={},l=[{value:"Using crt and key files",id:"using-crt-and-key-files",level:3},{value:"Automatic certificates",id:"automatic-certificates",level:3},{value:"TLS for GRPC API",id:"tls-for-grpc-api",level:3},{value:"TLS for GRPC unidirectional stream",id:"tls-for-grpc-unidirectional-stream",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"TLS/SSL layer is very important not only for securing your connections but also to increase a\nchance to establish Websocket connection."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"In most situations you better put TLS termination task on your reverse proxy/load balancing software such as Nginx. This can be a good thing for performance."})}),"\n",(0,r.jsx)(t.p,{children:"There are situations though when you want to serve secure connections by Centrifugo itself."}),"\n",(0,r.jsxs)(t.p,{children:["There are two ways to do this: using TLS certificate ",(0,r.jsx)(t.code,{children:"cert"})," and ",(0,r.jsx)(t.code,{children:"key"})," files that you've got\nfrom your CA provider or using automatic certificate handling via ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555",children:"ACME"})," provider (only ",(0,r.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," at this moment)."]}),"\n",(0,r.jsx)(t.h3,{id:"using-crt-and-key-files",children:"Using crt and key files"}),"\n",(0,r.jsxs)(t.p,{children:["In first way you already have ",(0,r.jsx)(t.code,{children:"cert"})," and ",(0,r.jsx)(t.code,{children:"key"})," files. For development you can create self-signed\ncertificate - see ",(0,r.jsx)(t.a,{href:"https://devcenter.heroku.com/articles/ssl-certificate-self",children:"this instruction"})," as\nexample."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  ...\n  "tls": true,\n  "tls_key": "server.key",\n  "tls_cert": "server.crt"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"And run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"./centrifugo --config=config.json\n"})}),"\n",(0,r.jsx)(t.h3,{id:"automatic-certificates",children:"Automatic certificates"}),"\n",(0,r.jsx)(t.p,{children:"For automatic certificates from Let's Encrypt add into configuration file:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  ...\n  "tls_autocert": true,\n  "tls_autocert_host_whitelist": "www.example.com",\n  "tls_autocert_cache_dir": "/tmp/certs",\n  "tls_autocert_email": "user@example.com",\n  "tls_autocert_http": true,\n  "tls_autocert_http_addr": ":80"\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert"})," (boolean) says Centrifugo that you want automatic certificate handling using ACME provider."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_host_whitelist"})," (string) is a string with your app domain address. This can be comma-separated\nlist. It's optional but recommended for extra security."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_cache_dir"})," (string) is a path to a folder to cache issued certificate files. This is optional\nbut will increase performance."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_email"})," (string) is optional - it's an email address ACME provider will send notifications\nabout problems with your certificates."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_http"})," (boolean) is an option to handle http_01 ACME challenge on non-TLS port."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_http_addr"})," (string) can be used to set address for handling http_01 ACME challenge (default is ",(0,r.jsx)(t.code,{children:":80"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["When configured correctly and your domain is valid (",(0,r.jsx)(t.code,{children:"localhost"})," will not work) - certificates\nwill be retrieved on first request to Centrifugo."]}),"\n",(0,r.jsx)(t.p,{children:"Also Let's Encrypt certificates will be automatically renewed."}),"\n",(0,r.jsx)(t.p,{children:"There are two options that allow Centrifugo to support TLS client connections from older\nbrowsers such as Chrome 49 on Windows XP and IE8 on XP:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_force_rsa"})," - this is a boolean option, by default ",(0,r.jsx)(t.code,{children:"false"}),". When enabled it forces\nautocert manager generate certificates with 2048-bit RSA keys."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"tls_autocert_server_name"})," - string option, allows to set server name for client handshake hello.\nThis can be useful to deal with old browsers without SNI support - see ",(0,r.jsx)(t.a,{href:"https://github.com/centrifugal/centrifugo/issues/144#issuecomment-279393819",children:"comment"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"grpc_api_tls_disable"})," boolean flag allows to disable TLS for GRPC API server but keep it on for HTTP endpoints."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"uni_grpc_tls_disable"})," boolean flag allows to disable TLS for GRPC uni stream server but keep it on for HTTP endpoints."]}),"\n",(0,r.jsx)(t.h3,{id:"tls-for-grpc-api",children:"TLS for GRPC API"}),"\n",(0,r.jsx)(t.p,{children:"You can provide custom certificate files to configure TLS for GRPC API server."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"grpc_api_tls"})," boolean flag enables TLS for GRPC API server, requires an X509 certificate and a key file"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"grpc_api_tls_cert"})," string provides a path to an X509 certificate file for GRPC API server"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"grpc_api_tls_key"})," string provides a path to an X509 certificate key for GRPC API server"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"tls-for-grpc-unidirectional-stream",children:"TLS for GRPC unidirectional stream"}),"\n",(0,r.jsx)(t.p,{children:"You can provide custom certificate files to configure TLS for GRPC unidirectional stream endpoint."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"uni_grpc_tls"})," boolean flag enables TLS for GRPC server, requires an X509 certificate and a key file"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"uni_grpc_tls_cert"})," string provides a path to an X509 certificate file for GRPC uni stream server"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"uni_grpc_tls_key"})," string provides a path to an X509 certificate key for GRPC uni stream server"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);