"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9235],{92146:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=a(85893),t=a(11151);const o={id:"db_namespaces",title:"Database-driven namespace configuration",sidebar_label:"Database-driven namespaces"},i=void 0,r={id:"pro/db_namespaces",title:"Database-driven namespace configuration",description:"Centrifugo PRO supports database-driven namespace configuration. This means that instead of configuring namespaces in a configuration file you will be able to configure them in admin web UI. It's also possible to select a namespace for automatic personal channel subscription.",source:"@site/versioned_docs/version-3/pro/db_namespaces.md",sourceDirName:"pro",slug:"/pro/db_namespaces",permalink:"/docs/3/pro/db_namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/db_namespaces.md",tags:[],version:"3",frontMatter:{id:"db_namespaces",title:"Database-driven namespace configuration",sidebar_label:"Database-driven namespaces"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Centrifugo PRO supports database-driven namespace configuration. This means that instead of configuring namespaces in a configuration file you will be able to configure them in admin web UI. It's also possible to select a namespace for automatic personal channel subscription."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Namespaces",src:a(35256).Z+"",width:"2564",height:"1412"})}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(n.p,{children:"As soon as you point Centrifugo PRO to an admin storage and enable storage namespace management, Centrifugo will load namespaces from database table on start. Changes made in web UI will then propagate to all running Centrifugo nodes in up to 30 seconds."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Centrifugo nodes cache namespace configuration in memory so if Centrifugo temporarily lost connection to a database it will continue working with previous namespace configuration until connection problems will be resolved."})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"By default namespace database management is off \u2013 i.e. namespaces loaded on Centrifugo start from a configuration file (or environment variable)."}),"\n",(0,s.jsx)(n.p,{children:"To enable namespace management through database add the following into configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "admin_storage": {\n        "enabled": true,\n        "storage_type": "sqlite",\n        "storage_dsn": "/path/to/centrifugo.db",\n        "manage_namespaces": true\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Centrifugo PRO supports several SQL database backends to keep namespace information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SQLite (storage_type: ",(0,s.jsx)(n.code,{children:"sqlite"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["PostgreSQL (storage_type: ",(0,s.jsx)(n.code,{children:"postgresql"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["MySQL (storage_type: ",(0,s.jsx)(n.code,{children:"mysql"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each storage type has its own ",(0,s.jsx)(n.code,{children:"storage_dsn"})," format. For SQLite it's just a path to a db file."]}),"\n",(0,s.jsxs)(n.p,{children:["PostgreSQL dsn format described ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/jackc/pgconn?utm_source=godoc#ParseConfig",children:"here"}),". Example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "admin_storage": {\n        "enabled": true,\n        "storage_type": "postgresql",\n        "storage_dsn": "host=localhost user=postgres password=mysecretpassword dbname=centrifugo port=5432 sslmode=disable",\n        "manage_namespaces": true\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["MySQL dsn format described ",(0,s.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"here"}),". Example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "admin_storage": {\n        "enabled": true,\n        "storage_type": "mysql",\n        "storage_dsn": "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local",\n        "manage_namespaces": true\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},35256:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/namespaces-4cdd9f366c740c37a12a576576b3dfb4.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var s=a(67294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);