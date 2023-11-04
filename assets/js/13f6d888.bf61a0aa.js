"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5270],{69131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(85893),i=t(11151);const o={id:"monitoring",title:"Monitoring"},a=void 0,s={id:"server/monitoring",title:"Monitoring",description:"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite.",source:"@site/versioned_docs/version-3/server/monitoring.md",sourceDirName:"server",slug:"/server/monitoring",permalink:"/docs/3/server/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/monitoring.md",tags:[],version:"3",frontMatter:{id:"monitoring",title:"Monitoring"},sidebar:"Guides",previous:{title:"Admin web UI",permalink:"/docs/3/server/admin_web"},next:{title:"Infrastructure tuning",permalink:"/docs/3/server/infra_tuning"}},d={},c=[{value:"Prometheus",id:"prometheus",level:3},{value:"Graphite",id:"graphite",level:3},{value:"Grafana dashboard",id:"grafana-dashboard",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite."}),"\n",(0,r.jsx)(n.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,r.jsxs)(n.p,{children:["To enable Prometheus endpoint start Centrifugo with ",(0,r.jsx)(n.code,{children:"prometheus"})," option on:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "prometheus": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This will enable ",(0,r.jsx)(n.code,{children:"/metrics"})," endpoint so the Centrifugo instance can be monitored by your Prometheus server."]}),"\n",(0,r.jsx)(n.h3,{id:"graphite",children:"Graphite"}),"\n",(0,r.jsx)(n.p,{children:"To enable automatic export to Graphite (via TCP):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "graphite": true,\n    "graphite_host": "localhost",\n    "graphite_port": 2003\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"By default, stats will be aggregated over 10 seconds intervals inside Centrifugo and then pushed to Graphite over TCP connection."}),"\n",(0,r.jsxs)(n.p,{children:["If you need to change this aggregation interval use the ",(0,r.jsx)(n.code,{children:"graphite_interval"})," option (in seconds, default ",(0,r.jsx)(n.code,{children:"10"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"grafana-dashboard",children:"Grafana dashboard"}),"\n",(0,r.jsxs)(n.p,{children:["Check out Centrifugo ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/13039",children:"official Grafana dashboard"})," for Prometheus storage. You can import that dashboard to your Grafana, point to Prometheus storage \u2013 and enjoy visualized metrics."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://grafana.com/api/dashboards/13039/images/8950/image",alt:""})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);