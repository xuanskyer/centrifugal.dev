"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7920],{8374:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(1017),r=n(4035),c=n(7294),u=n(2263),l=n(8882),s=n(5742),o=n(9960),i=n(6775),m=n(412);var h=function(){var e=(0,i.k6)(),t=(0,i.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:m.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},f=n(22),p=n(8202),d=n(2539),_=n(726),g=n(2775),v=n(311),E=n(1029);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var I="searchQueryInput_CFBF",S="searchResultItem_U687",w="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function b(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,l=t.metadata,s=0===a,i=2===a,m=(s?n.b:r.b).slice(),h=i?n.s:n.t;return s||m.push(r.t),c.createElement("article",{className:S},c.createElement("h2",null,c.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:i?(0,d.C)(h,u):(0,_.o)(h,(0,g.m)(l,"t"),u,100)}})),m.length>0&&c.createElement("p",{className:w},m.join(" \u203a ")),i&&c.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,g.m)(l,"t"),u,100)}}))}var Z=function(){var e=(0,u.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,o=t.updateSearchPath,i=(0,c.useState)(n),m=i[0],d=i[1],_=(0,c.useState)(),g=_[0],S=_[1],w=(0,c.useState)(),k=w[0],Z=w[1],C=(0,c.useMemo)((function(){return m?y(E.Iz.search_results_for,{keyword:m}):E.Iz.search_the_documentation}),[m]);(0,c.useEffect)((function(){o(m),g&&(m?g(m,(function(e){Z(e)})):Z(void 0))}),[m,g]);var R=(0,c.useCallback)((function(e){d(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==m&&d(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)((0,a.Z)().mark((function t(){var n,r,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,c=n.zhDictionary,S((function(){return(0,p.v)(r,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(l.Z,{title:C},c.createElement(s.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,C),c.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!g&&m&&c.createElement("div",null,c.createElement(v.Z,null)),k&&(k.length>0?c.createElement("p",null,y(1===k.length?E.Iz.count_documents_found:E.Iz.count_documents_found_plural,{count:k.length})):c.createElement("p",null,E.Iz.no_documents_were_found)),c.createElement("section",null,k&&k.map((function(e){return c.createElement(b,{key:e.document.i,searchResult:e})})))))}}}]);