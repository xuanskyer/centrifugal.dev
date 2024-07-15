"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4282],{42429:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(85893),r=t(11151);const s={id:"tls",title:"Configure TLS"},c=void 0,o={id:"server/tls",title:"Configure TLS",description:"TLS/SSL layer is very important not only for securing your connections but also to increase a",source:"@site/docs/server/tls.md",sourceDirName:"server",slug:"/server/tls",permalink:"/docs/server/tls",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/tls.md",tags:[],version:"current",frontMatter:{id:"tls",title:"Configure TLS"},sidebar:"Guides",previous:{title:"Load balancing",permalink:"/docs/server/load_balancing"},next:{title:"Client protocol codes",permalink:"/docs/server/codes"}},l={},d=[{value:"Using crt and key files",id:"using-crt-and-key-files",level:3},{value:"Automatic certificates",id:"automatic-certificates",level:3},{value:"TLS for GRPC API",id:"tls-for-grpc-api",level:3},{value:"TLS for GRPC unidirectional stream",id:"tls-for-grpc-unidirectional-stream",level:3},{value:"Unified TLS config object",id:"unified-tls-config-object",level:3},{value:"TLSConfig",id:"tlsconfig",level:4}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"TLS/SSL layer is very important not only for securing your connections but also to increase a\nchance to establish Websocket connection."}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"In most situations you better put TLS termination task on your reverse proxy/load balancing software such as Nginx. This can be a good thing for performance."})}),"\n",(0,n.jsx)(i.p,{children:"There are situations though when you want to serve secure connections by Centrifugo itself."}),"\n",(0,n.jsxs)(i.p,{children:["There are two ways to do this: using TLS certificate ",(0,n.jsx)(i.code,{children:"cert"})," and ",(0,n.jsx)(i.code,{children:"key"})," files that you've got\nfrom your CA provider or using automatic certificate handling via ",(0,n.jsx)(i.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555",children:"ACME"})," provider (only ",(0,n.jsx)(i.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," at this moment)."]}),"\n",(0,n.jsx)(i.h3,{id:"using-crt-and-key-files",children:"Using crt and key files"}),"\n",(0,n.jsxs)(i.p,{children:["In first way you already have ",(0,n.jsx)(i.code,{children:"cert"})," and ",(0,n.jsx)(i.code,{children:"key"})," files. For development you can create self-signed\ncertificate - see ",(0,n.jsx)(i.a,{href:"https://devcenter.heroku.com/articles/ssl-certificate-self",children:"this instruction"})," as\nexample."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  ...\n  "tls": true,\n  "tls_key": "server.key",\n  "tls_cert": "server.crt"\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"And run:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"./centrifugo --config=config.json\n"})}),"\n",(0,n.jsx)(i.h3,{id:"automatic-certificates",children:"Automatic certificates"}),"\n",(0,n.jsx)(i.p,{children:"For automatic certificates from Let's Encrypt add into configuration file:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  ...\n  "tls_autocert": true,\n  "tls_autocert_host_whitelist": "www.example.com",\n  "tls_autocert_cache_dir": "/tmp/certs",\n  "tls_autocert_email": "user@example.com",\n  "tls_autocert_http": true,\n  "tls_autocert_http_addr": ":80"\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert"})," (boolean) says Centrifugo that you want automatic certificate handling using ACME provider."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_host_whitelist"})," (string) is a string with your app domain address. This can be comma-separated\nlist. It's optional but recommended for extra security."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_cache_dir"})," (string) is a path to a folder to cache issued certificate files. This is optional\nbut will increase performance."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_email"})," (string) is optional - it's an email address ACME provider will send notifications\nabout problems with your certificates."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_http"})," (boolean) is an option to handle http_01 ACME challenge on non-TLS port."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_http_addr"})," (string) can be used to set address for handling http_01 ACME challenge (default is ",(0,n.jsx)(i.code,{children:":80"}),")"]}),"\n",(0,n.jsxs)(i.p,{children:["When configured correctly and your domain is valid (",(0,n.jsx)(i.code,{children:"localhost"})," will not work) - certificates\nwill be retrieved on first request to Centrifugo."]}),"\n",(0,n.jsx)(i.p,{children:"Also Let's Encrypt certificates will be automatically renewed."}),"\n",(0,n.jsx)(i.p,{children:"There are two options that allow Centrifugo to support TLS client connections from older\nbrowsers such as Chrome 49 on Windows XP and IE8 on XP:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_force_rsa"})," - this is a boolean option, by default ",(0,n.jsx)(i.code,{children:"false"}),". When enabled it forces\nautocert manager generate certificates with 2048-bit RSA keys."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"tls_autocert_server_name"})," - string option, allows to set server name for client handshake hello.\nThis can be useful to deal with old browsers without SNI support - see ",(0,n.jsx)(i.a,{href:"https://github.com/centrifugal/centrifugo/issues/144#issuecomment-279393819",children:"comment"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"grpc_api_tls_disable"})," boolean flag allows to disable TLS for GRPC API server but keep it on for HTTP endpoints."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"uni_grpc_tls_disable"})," boolean flag allows to disable TLS for GRPC uni stream server but keep it on for HTTP endpoints."]}),"\n",(0,n.jsx)(i.h3,{id:"tls-for-grpc-api",children:"TLS for GRPC API"}),"\n",(0,n.jsx)(i.p,{children:"You can provide custom certificate files to configure TLS for GRPC API server."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"grpc_api_tls"})," boolean flag enables TLS for GRPC API server, requires an X509 certificate and a key file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"grpc_api_tls_cert"})," string provides a path to an X509 certificate file for GRPC API server"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"grpc_api_tls_key"})," string provides a path to an X509 certificate key for GRPC API server"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tls-for-grpc-unidirectional-stream",children:"TLS for GRPC unidirectional stream"}),"\n",(0,n.jsx)(i.p,{children:"You can provide custom certificate files to configure TLS for GRPC unidirectional stream endpoint."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"uni_grpc_tls"})," boolean flag enables TLS for GRPC server, requires an X509 certificate and a key file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"uni_grpc_tls_cert"})," string provides a path to an X509 certificate file for GRPC uni stream server"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"uni_grpc_tls_key"})," string provides a path to an X509 certificate key for GRPC uni stream server"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"unified-tls-config-object",children:"Unified TLS config object"}),"\n",(0,n.jsxs)(i.p,{children:["Centrifugo v5 started a migration to a new unified way to configure TLS for all parts of Centrifugo. Some reasoning may be found in ",(0,n.jsx)(i.a,{href:"https://github.com/centrifugal/centrifugo/issues/831",children:"this issue on GitHub"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"At this point we use a unified TLS configuration object only for some parts of Centrifugo, but planning to extend this to all TLS configurations in Centrifugo v6. We explicitly point to this config in feature descriptions at this stage."})}),"\n",(0,n.jsx)(i.p,{children:"New TLS config is an object that has the following structure."}),"\n",(0,n.jsx)(i.h4,{id:"tlsconfig",children:"TLSConfig"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Option Name"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"enabled"})}),(0,n.jsx)(i.td,{children:"bool"}),(0,n.jsx)(i.td,{children:"Turns on using TLS."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"cert_pem"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Certificate in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"cert_pem_b64"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Certificate in base64 encoded PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"cert_pem_file"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Path to a file with certificate in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"key_pem"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Key in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"key_pem_b64"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Key in base64 encoded PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"key_pem_file"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Path to a file with key in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"server_ca_pem"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Server root CA certificate in PEM format used by client to verify server's certificate during handshake."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"server_ca_pem_b64"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Server root CA certificate in base64 encoded PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"server_ca_pem_file"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Path to a file with server root CA certificate in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"client_ca_pem"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Client CA certificate in PEM format used by server to verify client's certificate during handshake."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"client_ca_pem_b64"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Client CA certificate in base64 encoded PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"client_ca_pem_file"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Path to a file with client CA certificate in PEM format."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"insecure_skip_verify"})}),(0,n.jsx)(i.td,{children:"bool"}),(0,n.jsx)(i.td,{children:"Turns off server certificate verification."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"server_name"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Used to verify the hostname on the returned certificates."})]})]})]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Source Priority:"})," The configuration allows specifying TLS settings from multiple sources: file, base64 encoded PEM, and raw PEM. The sources are prioritized in the following order:","\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"File to PEM"}),"\n",(0,n.jsx)(i.li,{children:"Base64 encoded PEM"}),"\n",(0,n.jsx)(i.li,{children:"Raw PEM"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Single Source Usage:"})," Users should ensure that only one source of configured values is used. For example, if both ",(0,n.jsx)(i.code,{children:"cert_pem_file"})," and ",(0,n.jsx)(i.code,{children:"cert_pem"})," are set, the file source (",(0,n.jsx)(i.code,{children:"cert_pem_file"}),") will be used, and the raw PEM (",(0,n.jsx)(i.code,{children:"cert_pem"}),") will be ignored."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Server and Client CA:"})," ",(0,n.jsx)(i.code,{children:"server_ca_pem"})," and ",(0,n.jsx)(i.code,{children:"client_ca_pem"})," are used for verifying the server and client certificates respectively during the TLS handshake."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Insecure Option:"})," The ",(0,n.jsx)(i.code,{children:"insecure_skip_verify"})," option can be used to turn off server certificate verification, which is not recommended for production environments."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hostname Verification:"})," The ",(0,n.jsx)(i.code,{children:"server_name"})," is utilized to verify the hostname on the returned certificates, providing an additional layer of security."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"So in the configuration the usage of new TLS config may be like this:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",metastring:'title="config.json"',children:'{\n  ...\n  "proxy_grpc_tls": {\n    "enabled": true,\n    "cert_pem_file": "/path/to/cert.pem",\n    "key_pem_file": "/path/to/key.pem"\n  },\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>c});var n=t(67294);const r={},s=n.createContext(r);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);