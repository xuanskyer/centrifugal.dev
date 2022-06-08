"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2026],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={id:"overview",title:"Centrifugo PRO overview"},l=void 0,u={unversionedId:"pro/overview",id:"version-3/pro/overview",title:"Centrifugo PRO overview",description:"Centrifugo PRO is an extended version of Centrifugo with a set of additional features. These features can provide your business with unique benefits \u2013 drastically save development time, reduce resource usage on a server, protect your backend from misusing, and put the system observability to the next level.",source:"@site/versioned_docs/version-3/pro/overview.md",sourceDirName:"pro",slug:"/pro/overview",permalink:"/docs/pro/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/overview.md",tags:[],version:"3",frontMatter:{id:"overview",title:"Centrifugo PRO overview"},sidebar:"Pro",next:{title:"Install and run PRO version",permalink:"/docs/pro/install_and_run"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Sandbox mode",id:"sandbox-mode",level:2},{value:"Pricing",id:"pricing",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO is an extended version of Centrifugo with a set of additional features. These features can provide your business with unique benefits \u2013 drastically save development time, reduce resource usage on a server, protect your backend from misusing, and put the system observability to the next level."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Centrifugo PRO includes the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Everything from Centrifugo OSS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/tracing"},"Channel and user tracing")," provides a way to look at all client protocol frames in the specified channel or per user ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/analytics"},"Real-time analytics with ClickHouse")," for a great system observability, reporting and trending."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/user_status"},"User status")," feature to understand activity state for a list of users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/throttling"},"Operation throttling")," to protect client API from misusing and frontend bugs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/user_connections"},"User connections API")," to query for all active user sessions with additional information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/user_block"},"User blocking API")," to block/unblock abusive users by ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/token_revocation"},"JWT revoking and invalidation")," to revoking tokens by token ID (JTI) and invalidating user's tokens on issue time basis."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/performance"},"Faster performance")," to reduce resource usage on server side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/singleflight"},"Singleflight")," for online presence and history to reduce load on the broker."),(0,o.kt)("li",{parentName:"ul"},"Near real-time ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/process_stats"},"CPU and RSS memory usage stats"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"PRO features can change with time. We reserve a right to move features from PRO to OSS version if there is a clear signal that this is required to do for the Centrifugo ecosystem."))),(0,o.kt)("h2",{id:"sandbox-mode"},"Sandbox mode"),(0,o.kt)("p",null,"You can try out Centrifugo PRO for free. When you start Centrifugo PRO without license key then it's running in a sandbox mode. Sandbox mode limits the usage of Centrifigo PRO in several ways. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centrifugo handles up to 50 concurrent connections"),(0,o.kt)("li",{parentName:"ul"},"up to 2 server nodes supported"),(0,o.kt)("li",{parentName:"ul"},"up to 20 API requests per second allowed")),(0,o.kt)("p",null,"This mode should be enough for development and trying out PRO features, but must not be used in production environment as we can introduce additional limitations in the future."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Centrifugo PRO is distributed under ",(0,o.kt)("a",{parentName:"p",href:"/pro_license"},"commercial license")," which is different from OSS version. By downloading Centrifugo PRO you automatically accept license terms."))),(0,o.kt)("h2",{id:"pricing"},"Pricing"),(0,o.kt)("p",null,"To run without limits Centrifugo PRO requires a license key. At this point we are not issuing license keys for Centrifugo PRO as we are in the process of defining the pricing strategy for it. Please contact us over ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugal.dev@gmail.com"),", we can add you to the list of interested customers and will appreciate if you share which features you are mostly interested in."))}m.isMDXComponent=!0}}]);