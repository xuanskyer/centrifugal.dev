"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1196],{75548:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const i={id:"observability_enhancements",title:"Observability enhancements"},o=void 0,c={id:"pro/observability_enhancements",title:"Observability enhancements",description:"Centrifugo PRO has some enhancements to exposed metrics. At this moment it provides channel namespace resolution to the following metrics:",source:"@site/docs/pro/observability_enhancements.md",sourceDirName:"pro",slug:"/pro/observability_enhancements",permalink:"/docs/pro/observability_enhancements",draft:!1,unlisted:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/observability_enhancements.md",tags:[],version:"current",frontMatter:{id:"observability_enhancements",title:"Observability enhancements"},sidebar:"Pro",previous:{title:"Message batching control",permalink:"/docs/pro/client_message_batching"},next:{title:"CPU and RSS stats",permalink:"/docs/pro/process_stats"}},a={},l=[];function d(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Centrifugo PRO has some enhancements to exposed metrics. At this moment it provides channel namespace resolution to the following metrics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"centrifugo_transport_messages_sent"}),"\n",(0,t.jsx)(n.li,{children:"centrifugo_transport_messages_sent_size"}),"\n",(0,t.jsx)(n.li,{children:"centrifugo_transport_messages_received"}),"\n",(0,t.jsx)(n.li,{children:"centrifugo_transport_messages_received_size"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Since channel namespace resolution may add some overhead (though negligible in most cases), Centrifugo PRO requires it to be explicitly enabled using two boolean config options (available since Centrifugo PRO v5.1.1):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="config.json"',children:'{\n    ...\n    "channel_namespace_for_transport_messages_sent": true,\n    "channel_namespace_for_transport_messages_received": true\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First option ",(0,t.jsx)(n.code,{children:"channel_namespace_for_transport_messages_sent"})," enables channel namespace label for:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"centrifugo_transport_messages_sent"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"centrifugo_transport_messages_sent_size"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Second option ",(0,t.jsx)(n.code,{children:"channel_namespace_for_transport_messages_received"})," enables for:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"centrifugo_transport_messages_received"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"centrifugo_transport_messages_received_size"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);