"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3089],{38762:(e,t,i)=>{i.d(t,{Z:()=>j});var n=i(67294),a=i(36905),s=i(78299),r=i(94980),l=i(75013),o=i(11614),c=i(16550),d=i(18407);function m(e){const{pathname:t}=(0,c.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=i(85893);function p(e){let{sidebar:t}=e;const i=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,a.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,a.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,a.Z)(u.sidebarItemList,"clean-list"),children:i.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=i(82306);function b(e){let{sidebar:t}=e;const i=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:i.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,g.jsx)(h.Zo,{component:b,props:e})}function f(e){let{sidebar:t}=e;const i=(0,r.i)();return t?.items.length?"mobile"===i?(0,g.jsx)(x,{sidebar:t}):(0,g.jsx)(p,{sidebar:t}):null}function j(e){const{sidebar:t,toc:i,children:n,...r}=e,l=t&&t.items.length>0;return(0,g.jsx)(s.Z,{...r,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:t}),(0,g.jsx)("main",{className:(0,a.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),i&&(0,g.jsx)("div",{className:"col col--2",children:i})]})})})}},37167:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});i(67294);var n=i(36905),a=i(6832),s=i(62581),r=i(18015),l=i(38762),o=i(61052),c=i(26145),d=i(78969),m=i(32411),u=i(16294),g=i(85893);function p(e){const t=(0,u.C)(e);return(0,g.jsx)(m.Z,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:i}}=(0,a.Z)(),{blogDescription:n,blogTitle:r,permalink:l}=t,o="/"===l?i:r;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.d,{title:o,description:n}),(0,g.jsx)(c.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:i,sidebar:n}=e;return(0,g.jsxs)(l.Z,{sidebar:n,children:[(0,g.jsx)(d.Z,{items:i}),(0,g.jsx)(o.Z,{metadata:t})]})}function x(e){return(0,g.jsxs)(s.FG,{className:(0,n.Z)(r.k.wrapper.blogPages,r.k.page.blogListPage),children:[(0,g.jsx)(h,{...e}),(0,g.jsx)(p,{...e}),(0,g.jsx)(b,{...e})]})}},61052:(e,t,i)=>{i.d(t,{Z:()=>r});i(67294);var n=i(11614),a=i(16948),s=i(85893);function r(e){const{metadata:t}=e,{previousPage:i,nextPage:r}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[i&&(0,s.jsx)(a.Z,{permalink:i,title:(0,s.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,s.jsx)(a.Z,{permalink:r,title:(0,s.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},83400:(e,t,i)=>{i.d(t,{Z:()=>a});i(67294);var n=i(85893);function a(e){let{children:t,className:i}=e;return(0,n.jsx)("article",{className:i,children:t})}},16948:(e,t,i)=>{i.d(t,{Z:()=>r});i(67294);var n=i(36905),a=i(75013),s=i(85893);function r(e){const{permalink:t,title:i,subLabel:r,isNext:l}=e;return(0,s.jsxs)(a.Z,{className:(0,n.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:i})]})}},17762:(e,t,i)=>{i.d(t,{C:()=>o,n:()=>l});var n=i(67294),a=i(93478),s=i(85893);const r=n.createContext(null);function l(e){let{children:t,content:i,isBlogPostPage:a=!1}=e;const l=function(e){let{content:t,isBlogPostPage:i}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:i})),[t,i])}({content:i,isBlogPostPage:a});return(0,s.jsx)(r.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(r);if(null===e)throw new a.i6("BlogPostProvider");return e}},16294:(e,t,i)=>{i.d(t,{C:()=>d,i:()=>m});var n=i(51402),a=i(6832),s=i(15540);var r=i(17762);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,i){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${i}`})}:{}}function d(e){const{siteConfig:t}=(0,a.Z)(),{withBaseUrl:i}=(0,n.C)(),{metadata:{blogDescription:s,blogTitle:r,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:r,description:s,blogPost:e.items.map((e=>function(e,t,i){const{assets:n,frontMatter:a,metadata:s}=e,{date:r,title:d,description:m,lastUpdatedAt:u}=s,g=n.image??a.image,p=a.keywords??[],h=`${t.url}${s.permalink}`,b=u?l(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:m,datePublished:r,...b?{dateModified:b}:{},...o(s.authors),...c(g,i,d),...p?{keywords:p}:{}}}(e.content,t,i)))}}function m(){const e=function(){const e=(0,s.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:i}=(0,r.C)(),{siteConfig:d}=(0,a.Z)(),{withBaseUrl:m}=(0,n.C)(),{date:u,title:g,description:p,frontMatter:h,lastUpdatedAt:b}=i,x=t.image??h.image,f=h.keywords??[],j=b?l(b):void 0,v=`${d.url}${i.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:p,datePublished:u,...j?{dateModified:j}:{},...o(i.authors),...c(x,m,g),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:i}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:i}}},78969:(e,t,i)=>{i.d(t,{Z:()=>o});i(67294);var n=i(75013),a=i(17762),s=i(83400);const r={container:"container_nU41",leftColumn:"leftColumn_mxRM"};var l=i(85893);function o(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,{...e})})}function c(e){let{items:t,component:i=d}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,l.jsx)(a.n,{content:t,children:(0,l.jsx)(i,{children:(0,l.jsx)(t,{})})},t.metadata.permalink)}))})}function d(e){let{className:t}=e;const{metadata:i}=(0,a.C)(),{permalink:o,title:c,formattedDate:d,frontMatter:m,description:u}=i,g=i.authors[0];return(0,l.jsx)(s.Z,{className:t,children:(0,l.jsxs)("div",{className:r.container,children:[(0,l.jsx)("div",{className:r.leftColumn,children:(0,l.jsx)("img",{src:m.image,width:"200px"})}),(0,l.jsxs)("div",{className:r.rightColumn,children:[(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{itemProp:"url",to:o,style:{fontSize:"1.0em"},children:c})}),(0,l.jsxs)("div",{style:{fontSize:"0.8em",color:"#6d6666"},children:[d," by ",g?.name]}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:{fontSize:"0.9em"},children:u})})})]})]})})}}}]);