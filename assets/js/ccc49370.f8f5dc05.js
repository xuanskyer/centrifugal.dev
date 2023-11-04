"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6103],{61460:(e,t,a)=>{a.d(t,{Z:()=>v});var s=a(67294),n=a(86010),r=a(70179),i=a(87524),l=a(39960),o=a(95999),c=a(16550),m=a(48596);function d(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=a(85893);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.Z)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(13102);function x(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:a,children:s,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},15289:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var s=a(44996),n=a(9460),r=a(85893);function i(e){let{children:t,className:a}=e;const{frontMatter:i,assets:l,metadata:{description:o}}=(0,n.C)(),{withBaseUrl:c}=(0,s.C)(),m=l.image??i.image,d=i.keywords??[];return(0,r.jsxs)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,r.jsx)("meta",{itemProp:"description",content:o}),m&&(0,r.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,r.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}},79419:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});a(67294);var s=a(86010),n=a(1944),r=a(35281),i=a(9460),l=a(61460),o=a(15289),c=a(39960);const m={title:"title_f1Hy"};var d=a(85893);function u(e){let{className:t}=e;const{metadata:a,isBlogPostPage:n}=(0,i.C)(),{permalink:r,title:l}=a,o=n?"h1":"h2";return(0,d.jsx)(o,{className:(0,s.Z)(m.title,t),itemProp:"headline",children:n?l:(0,d.jsx)(c.Z,{itemProp:"url",to:r,children:l})})}var h=a(95999),g=a(88824);const p={container:"container_mt6G"};function x(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.c)();return t=>{const a=Math.ceil(t);return e(a,(0,h.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,d.jsx)(d.Fragment,{children:a(t)})}function j(e){let{date:t,formattedDate:a}=e;return(0,d.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function b(){return(0,d.jsx)(d.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:a}=(0,i.C)(),{date:n,formattedDate:r,readingTime:l}=a;return(0,d.jsxs)("div",{className:(0,s.Z)(p.container,"margin-vert--md",t),children:[(0,d.jsx)(j,{date:n,formattedDate:r}),void 0!==l&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{}),(0,d.jsx)(x,{readingTime:l})]})]})}function f(e){return e.href?(0,d.jsx)(c.Z,{...e}):(0,d.jsx)(d.Fragment,{children:e.children})}function _(e){let{author:t,className:a}=e;const{name:n,title:r,url:i,imageURL:l,email:o}=t,c=i||o&&`mailto:${o}`||void 0;return(0,d.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",a),children:[l&&(0,d.jsx)(f,{href:c,className:"avatar__photo-link",children:(0,d.jsx)("img",{className:"avatar__photo",src:l,alt:n,itemProp:"image"})}),n&&(0,d.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,d.jsx)("div",{className:"avatar__name",children:(0,d.jsx)(f,{href:c,itemProp:"url",children:(0,d.jsx)("span",{itemProp:"name",children:n})})}),r&&(0,d.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:n}=(0,i.C)();if(0===a.length)return null;const r=a.every((e=>{let{name:t}=e;return!t}));return(0,d.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",r?P.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,d.jsx)("div",{className:(0,s.Z)(!r&&"col col--6",r?P.imageOnlyAuthorCol:P.authorCol),children:(0,d.jsx)(_,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function Z(){return(0,d.jsxs)("header",{children:[(0,d.jsx)(u,{}),(0,d.jsx)(v,{}),(0,d.jsx)(N,{})]})}var k=a(18780),I=a(40591);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:n}=(0,i.C)();return(0,d.jsx)("div",{id:n?k.blogPostContainerID:void 0,className:(0,s.Z)("markdown",a),itemProp:"articleBody",children:(0,d.jsx)(I.Z,{children:t})})}var C=a(84881),T=a(71526);function y(){return(0,d.jsx)("b",{children:(0,d.jsx)(h.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...a}=e;return(0,d.jsx)(c.Z,{"aria-label":(0,h.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,d.jsx)(y,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){const{metadata:e,isBlogPostPage:t}=(0,i.C)(),{tags:a,title:n,editUrl:r,hasTruncateMarker:l}=e,o=!t&&l,c=a.length>0;return c||o||r?(0,d.jsxs)("footer",{className:(0,s.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[c&&(0,d.jsx)("div",{className:(0,s.Z)("col",{"col--9":o}),children:(0,d.jsx)(T.Z,{tags:a})}),t&&r&&(0,d.jsx)("div",{className:"col margin-top--sm",children:(0,d.jsx)(C.Z,{editUrl:r})}),o&&(0,d.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":c}),children:(0,d.jsx)(L,{blogPostTitle:n,to:e.permalink})})]}):null}function A(e){let{children:t,className:a}=e;const n=function(){const{isBlogPostPage:e}=(0,i.C)();return e?void 0:"margin-bottom--xl"}();return(0,d.jsxs)(o.Z,{className:(0,s.Z)(n,a),children:[(0,d.jsx)(Z,{}),(0,d.jsx)(w,{children:t}),(0,d.jsx)(B,{})]})}var M=a(32244);function R(e){const{nextItem:t,prevItem:a}=e;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,d.jsx)(M.Z,{...a,subLabel:(0,d.jsx)(h.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,d.jsx)(M.Z,{...t,subLabel:(0,d.jsx)(h.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function O(){const{assets:e,metadata:t}=(0,i.C)(),{title:a,description:s,date:r,tags:l,authors:o,frontMatter:c}=t,{keywords:m}=c,u=e.image??c.image;return(0,d.jsxs)(n.d,{title:a,description:s,keywords:m,image:u,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&(0,d.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var D=a(39407),U=a(22212);function $(e){let{sidebar:t,children:a}=e;const{metadata:s,toc:n}=(0,i.C)(),{nextItem:r,prevItem:o,frontMatter:c,unlisted:m}=s,{hide_table_of_contents:u,toc_min_heading_level:h,toc_max_heading_level:g}=c;return(0,d.jsxs)(l.Z,{sidebar:t,toc:!u&&n.length>0?(0,d.jsx)(D.Z,{toc:n,minHeadingLevel:h,maxHeadingLevel:g}):void 0,children:[m&&(0,d.jsx)(U.Z,{}),(0,d.jsx)(A,{children:a}),(r||o)&&(0,d.jsx)(R,{nextItem:r,prevItem:o})]})}function H(e){const t=e.content;return(0,d.jsx)(i.n,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(n.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,d.jsx)(O,{}),(0,d.jsx)($,{sidebar:e.sidebar,children:(0,d.jsx)(t,{})})]})})}},84881:(e,t,a)=>{a.d(t,{Z:()=>m});a(67294);var s=a(95999),n=a(35281),r=a(39960),i=a(86010);const l={iconEdit:"iconEdit_Z9Sw"};var o=a(85893);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:n.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},32244:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var s=a(86010),n=a(39960),r=a(85893);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},13008:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var s=a(86010),n=a(39960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(85893);function l(e){let{permalink:t,label:a,count:l}=e;return(0,i.jsxs)(n.Z,{href:t,className:(0,s.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},71526:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var s=a(86010),n=a(95999),r=a(13008);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(85893);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.Z,{label:t,permalink:a})},a)}))})]})}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var s=a(67294),n=a(902),r=a(85893);const i=s.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,s.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}}}]);