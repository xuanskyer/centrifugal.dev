"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7054,8951,2278,9523,4968,2438,9217],{9250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(7294),i=n(6010);const l="featureTitle_fCfN",c="featureContent_FT24",r="featureContentReversed_juV3",s="featureImage_lJJP",o="darkSection_dAst",h="featureImageReversed_n2Vd";function m(e){let{reversed:t,title:n,img:m,text:u,isDark:d}=e;const f=a.createElement("div",{className:(0,i.Z)("col col--6",s,t?h:"")},m),v=a.createElement("div",{className:(0,i.Z)("col col--6",c,t?r:"")},a.createElement("h3",{className:l},n),u);return a.createElement("section",{className:(0,i.Z)("highlightSection",d?o+" darkSection":"")},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t?a.createElement(a.Fragment,null,v,f):a.createElement(a.Fragment,null,f,v))))}},3225:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294);function i(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function l(e,t,n,a){const i=a*Math.PI/180;return[e+n*Math.cos(i),t+n*Math.sin(i)]}function c(e,t,n,a){return 180*Math.atan2(a-t,n-e)/Math.PI}function r(e,t,n,a,i,l,c,r,s,o,h,m){this.ctx=e,this.init(t,n,a,i,l,c,r,s,o,h,m)}function s(e,t,n,a,i,l){this.ctx=e,this.init(t,n,a,i,l)}let o;if(r.prototype.init=function(e,t,n,a,i,l,c,r,s,o,h){this.X=e,this.Y=t,this.radius=i,this.x=n,this.y=a,this.r=l,this.w=c,this.c=h,this.rotate=r,this.speed=60*s,this.angleDiff=o,this.a=0},r.prototype.drawSegment=function(e,t,n){this.ctx.translate(this.x,this.y),this.ctx.rotate(n*Math.PI/180),this.ctx.translate(-this.x,-this.y),this.ctx.beginPath();const a=l(this.x,this.y,this.r,e),i=a[0],r=a[1],s=l(this.x,this.y,this.r,t),o=s[0],h=s[1],m=i-this.w,u=h-this.w,d=c(this.x,this.y,m,r),f=c(this.x,this.y,o,u),v=t*Math.PI/180,p=e*Math.PI/180,C=d*Math.PI/180,g=f*Math.PI/180;this.ctx.arc(this.x,this.y,this.r,v,p,!0),this.ctx.arc(this.x,this.y,this.r-this.w,C,g,!1),this.ctx.closePath(),this.ctx.fillStyle=this.c,this.ctx.fill(),this.ctx.stroke()},r.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=3,this.ctx.strokeStyle=this.c,this.ctx.shadowColor=this.c,this.drawSegment(4+this.angleDiff,86-this.angleDiff,this.rotate+this.a),this.ctx.restore()},r.prototype.resize=function(){this.x=this.X/2,this.y=this.Y/2},r.prototype.updateParams=function(e){this.a+=this.speed*e*this.radius/this.r},r.prototype.render=function(e){this.updateParams(e),this.draw()},s.prototype.init=function(e,t,n,a,i){this.X=e,this.Y=t,this.x=n,this.y=a,this.c=i,this.lw=1,this.v={x:100*Math.random(),y:100*Math.random()}},s.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=this.lw,this.ctx.strokeStyle=this.c,this.ctx.beginPath(),this.ctx.moveTo(0,this.y),this.ctx.lineTo(this.X,this.y),this.ctx.stroke(),this.ctx.lineWidth=this.lw,this.ctx.beginPath(),this.ctx.moveTo(this.x,0),this.ctx.lineTo(this.x,this.Y),this.ctx.stroke(),this.ctx.restore()},s.prototype.updatePosition=function(e){this.x+=this.v.x*e,this.y+=this.v.y*e},s.prototype.wrapPosition=function(){this.x<0&&(this.x=this.X),this.x>this.X&&(this.x=0),this.y<0&&(this.y=this.Y),this.y>this.Y&&(this.y=0)},s.prototype.render=function(e){this.updatePosition(e),this.wrapPosition(),this.draw()},n.g.window||process&&process.browser){o=new MutationObserver((function(e){e.forEach((function(e){"attributes"==e.type&&window.dispatchEvent(new Event("resized"))}))}));const e=document.querySelector("html");o.observe(e,{attributes:!0})}const h=e=>{const[t,l]=a.useState({x:1,y:1}),c=a.useRef(null),o=()=>{null!==c.current&&(c.current.width=c.current.clientWidth,c.current.height=c.current.clientHeight,l({x:c.current?c.current.clientWidth:0,y:c.current?c.current.clientHeight:0}))};return a.useEffect((()=>o()),[]),(n.g.window||process&&process.browser)&&(a.useEffect((()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)))),a.useEffect((()=>(window.addEventListener("resized",o),()=>window.removeEventListener("resized",o))))),a.useEffect((()=>{!function(e,t,a,l){const c=e.getContext("2d"),o=t/2,h=a/2;let m,u;l?(m="#8d3838",u="#6e2b2b"):(m="#ffd4d4",u="#ffd4d4");const d=[],f=[],v=a/7,p=v/15,C=n.g.requestAnimationFrame||n.g.mozRequestAnimationFrame||n.g.webkitRequestAnimationFrame||n.g.msRequestAnimationFrame||function(e){setTimeout(e,17)};for(let n=0;n<3;n+=1){const e=new s(c,t,a,i(0,t),i(0,a),m);d.push(e)}f.push(new r(c,t,a,o,h,v,2.65*v,9*p,0,-1.5,0,u)),f.push(new r(c,t,a,o,h,v,2.65*v,9*p,90,-1.5,0,u)),f.push(new r(c,t,a,o,h,v,2.65*v,9*p,180,-1.5,0,u)),f.push(new r(c,t,a,o,h,v,2.65*v,9*p,270,-1.5,0,u)),f.push(new r(c,t,a,o,h,v,1.45*v,8*p,45,1.5,2,u)),f.push(new r(c,t,a,o,h,v,1.45*v,8*p,135,1.5,2,u)),f.push(new r(c,t,a,o,h,v,1.45*v,8*p,225,1.5,2,u));let g=0;C((function e(n){const i=(n-g)/1e3;c.clearRect(0,0,t,a);for(let t=0;t<d.length;t+=1)d[t].render(i);for(let t=0;t<f.length;t+=1)f[t].render(i);g=n,C(e)}))}(c.current,t.x,t.y,e.isDarkTheme)}),[t]),a.createElement("canvas",{ref:c,style:{width:"100%",height:"100%"}})}},3349:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294);function i(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 140 40"},a.createElement("path",{fill:"#000000",d:"M18.412 12.216c-4.287 0-5.808 3.454-5.912 3.707a6.332 6.332 0 0 0-5.91-3.707 6.627 6.627 0 0 0-4.653 2.01A6.856 6.856 0 0 0 0 18.975c0 7.282 6.87 13.184 12.5 13.184 5.628 0 12.5-5.902 12.5-13.184a6.856 6.856 0 0 0-1.937-4.748 6.627 6.627 0 0 0-4.65-2.01zm1.13 7.037c0 1.9-0.742 3.722-2.063 5.065a6.983 6.983 0 0 1-4.98 2.099 6.983 6.983 0 0 1-4.98-2.099 7.226 7.226 0 0 1-2.062-5.065v-0.205h2.49v0.205A4.674 4.674 0 0 0 9.28 22.53a4.517 4.517 0 0 0 3.221 1.357 4.517 4.517 0 0 0 3.221-1.357 4.675 4.675 0 0 0 1.335-3.277v-0.205h2.49l-0.006 0.205zm110.438-7.03c-5.791 0-10.02 4.252-10.02 9.988 0 5.735 4.232 9.989 10.02 9.989 5.788 0 10.02-4.252 10.02-9.99 0-5.836-4.23-9.986-10.02-9.986zm0 15.93c-3.174 0-5.338-2.458-5.338-5.942 0-3.485 2.164-5.94 5.338-5.94s5.337 2.458 5.337 5.94c0 3.481-2.166 5.943-5.337 5.943zm-22.251-15.93c-5.79 0-10.02 4.252-10.02 9.988 0 5.735 4.232 9.989 10.02 9.989 5.788 0 10.023-4.252 10.023-9.99-0.008-5.836-4.237-9.986-10.023-9.986zm0 15.93c-3.172 0-5.337-2.458-5.337-5.942 0-3.485 2.165-5.94 5.337-5.94 3.172 0 5.337 2.458 5.337 5.94 0 3.481-2.17 5.943-5.337 5.943zm-65.012-15.93c-3.122 0-5.44 1.383-6.799 3.74V7h-4.232v14.7c0 6.248 3.625 10.5 9.868 10.5 5.136 0 9.92-3.74 9.92-10.09-0.007-5.379-3.168-9.886-8.757-9.886zm-1.208 15.725c-3.423 0-5.387-2.509-5.387-5.737 0-3.277 1.912-5.94 5.337-5.94 3.274 0 5.338 2.663 5.338 5.94-0.002 3.228-1.865 5.738-5.288 5.738zm22.104-15.724c-5.136 0-9.92 3.74-9.92 10.09 0 5.379 3.171 9.876 8.763 9.876 3.121 0 5.437-1.383 6.796-3.74v3.545h4.232v-9.27c-0.002-6.25-3.627-10.501-9.87-10.501zm0 15.93c-3.373 0-5.228-2.563-5.228-5.84 0-3.226 1.865-5.839 5.288-5.839s5.387 2.51 5.387 5.736c-0.01 3.279-2.024 5.943-5.447 5.943zM91.256 7v8.964c-1.359-2.358-3.674-3.74-6.796-3.74-5.591 0-8.763 4.507-8.763 9.875 0 6.455 4.481 10.09 9.709 10.09 6.244 0 10.07-4.25 10.07-10.5V7.003L91.256 7zm-5.589 20.948c-3.423 0-5.287-2.509-5.287-5.737 0-3.277 2.066-5.94 5.337-5.94 3.426 0 5.338 2.612 5.338 5.94-0.005 3.228-1.965 5.738-5.388 5.738z"}))}},650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294);function i(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"108",height:"39",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",fill:"#fff",fillRule:"evenodd"},a.createElement("defs",null,a.createElement("clipPath",{id:"A"},a.createElement("path",{d:"M15.7566 4.3862l-.0308.1504-.4803.1427-.6616.2276-.6558.2662c-.4359.1871-.868.3974-1.2904.6346l-1.2036.7561-.1003-.0463c-3.9985-1.5276-7.5494.3106-7.5494.3106-.3241 4.253 1.597 6.9341 1.977 7.4202l-.2642.7966c-.2951.9644-.517 1.9539-.6539 2.9762l-.054.4436C1.0956 20.2894 0 24.0294 0 24.0294c3.0842 3.5471 6.6795 3.767 6.6795 3.767s.0058-.0058.0097-.0077c.4571.8159.9856 1.5932 1.5816 2.3165l.7831.8795c-1.1245 3.2154.1582 5.8907.1582 5.8907 3.4333.1292 5.6881-1.5026 6.1626-1.8787l1.0377.3086c1.0551.272 2.1352.4321 3.2154.4784l.8081.0154h.1312l.0849-.0019.1697-.0058.1678-.0077.0039.0058c1.6164 2.3068 4.4614 2.6328 4.4614 2.6328 2.0233-2.1333 2.139-4.2492 2.139-4.7063h0v-.0309l-.0019-.0636-.0058-.0984c.4244-.2971.8294-.6172 1.2133-.9606a12.606 12.606 0 0 0 2.1043-2.4669l.162-.2566c2.2896.1312 3.904-1.4177 3.904-1.4177-.38-2.3859-1.7398-3.549-2.0233-3.7689h0s-.0116-.0096-.029-.0212l-.027-.0193-.0501-.0328.0347-.4301.0251-.7696-.002-.191-.0019-.0964v-.0483l-.0019-.0655-.0077-.1601-.0116-.2161-.0154-.2063-.0193-.1987-.0232-.1987-.027-.1967-.1485-.7793c-.2392-1.028-.6404-2.004-1.1708-2.8816s-1.1901-1.655-1.9327-2.3089-1.5758-1.1823-2.4496-1.5758-1.7919-.6462-2.7062-.7619c-.4571-.0598-.9123-.0829-1.3636-.0771l-.1678.0038-.0425.0019-.0579.002-.0694.0038-.1678.0116-.1852.0154-.6886.0965c-.9065.1697-1.7629.4976-2.5171.949s-1.41 1.0165-1.9442 1.6568-.9471 1.3463-1.2326 2.0793-.4455 1.4891-.4899 2.2239l-.0116.5478.0039.1351.0058.1465.0212.2624a5.907 5.907 0 0 0 .2045 1.0743c.1986.6886.5188 1.3116.9123 1.8401s.8641.9683 1.3637 1.3097 1.0338.5864 1.5623.7426a5.434 5.434 0 0 0 1.5528.2218l.1851-.0038.0984-.0039.0984-.0058.1581-.0154c.0116 0 .0289-.0039.0444-.0058l.0482-.0058.0964-.0135c.0656-.0077.1216-.0212.1794-.0309l.1736-.0385c.1138-.0251.2238-.0598.3337-.0926.216-.0714.4186-.1582.6076-.2546s.3626-.2064.5246-.3202l.135-.1022a.395.395 0 0 0 .0618-.5594c-.1216-.1485-.3299-.1871-.4957-.0945l-.1254.0656c-.1447.0694-.2951.135-.4552.1871s-.326.0926-.4996.1234l-.2623.0328c-.0444.0058-.0887.0077-.135.0077l-.1331.0039c-.0424 0-.0849-.0019-.1292-.0019l-.1621-.0078s-.027 0-.0058-.0019l-.0173-.0019-.0367-.0039-.0733-.0077-.1446-.0193c-.3877-.054-.7812-.1678-1.1592-.3395s-.7426-.4069-1.0705-.7021-.6134-.648-.8372-1.0492-.38-.8449-.4532-1.3116c-.0367-.2334-.0521-.4745-.0463-.7099l.0096-.1948c0 .0174.0019-.0096.0019-.0115l.002-.0232.0038-.0482.0097-.0964.0559-.382c.1794-1.0164.6886-2.0079 1.4756-2.762.1967-.1871.4089-.3627.6345-.517s.4668-.2932.7176-.4089.513-.2102.7812-.2835.5439-.1196.8236-.1447l.4204-.0173.0946.0019.1138.0038.0713.002c.029 0 0 0 .0135.0019l.029.0019.1138.0077c.3028.0251.6056.0676.9027.1351a6.44 6.44 0 0 1 1.7147.65c1.0802.5979 2.0002 1.5334 2.5653 2.6618a6.08 6.08 0 0 1 .5825 1.7919l.056.4725.0096.1196.0058.1196.0039.1196.0019.1119v.1022l-.0019.1157-.0135.2797-.0502.5169-.081.5092-.1138.5015c-.0829.3337-.1909.6597-.3163.9799-.2527.6403-.5902 1.2479-.9972 1.8092-.8159 1.1207-1.9288 2.0369-3.1942 2.6117-.6326.2854-1.3.4957-1.9867.6095-.3433.0578-.6905.0925-1.0377.1041l-.0636.002h-.056l-.1118.0019h-.1717-.0849c.0483 0-.0077 0-.0058-.0019l-.0347-.002-.5574-.027c-.7426-.0559-1.4775-.1871-2.1892-.3954s-1.4023-.4822-2.0562-.8294c-1.3058-.6982-2.4727-1.6549-3.387-2.8084-.4591-.5748-.8603-1.192-1.192-1.842s-.5922-1.3309-.7851-2.0272-.3105-1.41-.3568-2.1275l-.0077-.135-.0019-.0328v-.029l-.0019-.0597-.0039-.1177-.0019-.0289v-.0405-.083l-.002-.1678v-.0328c0 .0058 0 .0058 0-.0115v-.0656l.0058-.2623.0888-1.0841.1813-1.0955.2642-1.0763c.2025-.7079.4552-1.3946.7542-2.0426.5998-1.2982 1.3868-2.4419 2.3319-3.3639l.7349-.6539c.2546-.2045.5189-.3935.7908-.5709s.5497-.3414.8371-.4919l.436-.216.2218-.0984.2237-.0945c.299-.1273.6076-.2334.9162-.3337l.2334-.0714.2353-.0655.4745-.1216.2392-.052.2411-.0502.2411-.0443.1215-.0213.1215-.0192.2431-.0367.2739-.0366.2719-.0328.1717-.0174.1138-.0116.0578-.0058.0676-.0038.2758-.0174.137-.0096s.0501-.0019.0057-.0019l.029-.002.0578-.0019.2353-.0116h.9297c.6153.0251 1.2191.0926 1.8054.2006 1.1747.218 2.2799.596 3.279 1.0898s1.898 1.0917 2.6773 1.7456l.1446.1234.1408.1254.2759.2527.2661.2565.2546.2604.9124 1.0609c.5536.7117.9953 1.4292 1.3482 2.1082l.0656.1273.0617.1273.1196.2488.1138.245.1042.2392.3491.9065.3723 1.2383a.304.304 0 0 0 .3221.2276c.1543-.0135.2719-.1408.2758-.2951.0077-.3877-.0019-.8448-.0463-1.3656-.0579-.6442-.1678-1.3907-.3858-2.2104s-.5323-1.7167-.9952-2.6483-1.0705-1.898-1.8575-2.8335a14.502 14.502 0 0 0-1.0049-1.0821c.54-2.1487-.6578-4.0119-.6578-4.0119-2.0677-.1293-3.3831.6423-3.8711.9952l-.2469-.1041-1.086-.3935-1.1399-.3163-1.1881-.2295-.2122-.0309C21.7862 1.2055 19.1957 0 19.1957 0c-2.8894 1.8227-3.4391 4.3862-3.4391 4.3862",stroke:"none",strokeLinejoin:"miter",strokeLinecap:"butt",fill:"#000",fillRule:"nonzero",strokeWidth:".0193",transform:"translate(0 .0077)"}))),a.createElement("g",{fill:"#000",stroke:"none",fillRule:"nonzero"},a.createElement("path",{d:"M55.4146 19.4587c-.1404 3.6146-2.9917 6.4302-6.5348 6.4302-3.7396 0-6.5195-3.0275-6.5195-6.6778 0-3.686 3.0096-6.7135 6.6778-6.7135 1.6567 0 3.2776.7122 4.6484 1.9936l-1.0696 1.3172c-1.0517-.9087-2.3153-1.5316-3.5788-1.5316-2.6905 0-4.8986 2.2081-4.8986 4.9343 0 2.7594 2.083 4.8986 4.7378 4.8986 2.3867 0 4.2578-1.7461 4.6305-3.9898h-5.4117v-1.5853h7.3211v.9241zm6.2157-.873h-.9981c-1.1028 0-1.9936.8935-1.9936 1.9937v5.1997h-1.7818v-8.9062h1.4601v.7479c.4799-.4799 1.2457-.7479 2.1009-.7479h1.9221zm9.7053 7.1959h-1.5138v-1.1231c-1.1717 1.1436-3.0172 1.6924-4.8883.8704-1.3861-.6101-2.4174-1.8736-2.6931-3.3644-.5309-2.8794 1.6848-5.4346 4.5157-5.4346 1.1921 0 2.2616.4799 3.0453 1.2636v-1.1232h1.5316v8.9113zM69.513 21.968c.4211-1.8099-.9497-3.4538-2.7365-3.4538-1.5495 0-2.7952 1.2636-2.7952 2.7952 0 1.7332 1.524 3.0734 3.2955 2.7722 1.09-.1864 1.986-1.0339 2.2362-2.1136m5.4116-5.5903v.4978h2.8309v1.5673h-2.8309v7.3389h-1.7639v-9.3504c0-1.9604 1.4065-3.1168 3.1704-3.1168h2.1366l-.7122 1.6746h-1.4218c-.7837 0-1.4091.6228-1.4091 1.3886m12.2707 9.4039h-1.5138v-1.1231c-1.1717 1.1436-3.0172 1.6924-4.8883.8704-1.3861-.6101-2.4174-1.8736-2.6931-3.3644-.5309-2.8794 1.6848-5.4346 4.5157-5.4346 1.1921 0 2.2616.4799 3.0453 1.2636v-1.1232h1.5316v8.9113zm-1.8201-3.8136c.4212-1.8099-.9496-3.4538-2.7364-3.4538-1.5495 0-2.7952 1.2636-2.7952 2.7952 0 1.7332 1.5239 3.0734 3.2955 2.7722 1.0874-.1864 1.986-1.0339 2.2361-2.1136m11.3338-1.4602v5.2713h-1.7817v-5.2713c0-1.1053-.9087-1.9936-1.9936-1.9936-1.1232 0-2.0115.8909-2.0115 1.9936v5.2713h-1.7818v-8.9062h1.478v.7658c.6407-.5693 1.4959-.9088 2.3868-.9088 2.0651.0026 3.7038 1.695 3.7038 3.7779m10.4736 5.2738h-1.5138v-1.1231c-1.1716 1.1436-3.0172 1.6924-4.8883.8704-1.3861-.6101-2.4174-1.8736-2.6931-3.3644-.5309-2.8794 1.6848-5.4346 4.5157-5.4346 1.1921 0 2.2616.4799 3.0453 1.2636v-1.1232h1.5316v8.9113zM105.36 21.968c.4211-1.8099-.9496-3.4538-2.7365-3.4538-1.5495 0-2.7952 1.2636-2.7952 2.7952 0 1.7332 1.524 3.0734 3.2955 2.7722 1.0875-.1864 1.986-1.0339 2.2362-2.1136"}),a.createElement("path",{d:"M0 0h35.3825v38.4281H0z",transform:"translate(0 -.0077)",clipPath:"url(#A)"})))}},1374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294);function i(){return a.createElement("svg",{width:"160",height:"29",viewBox:"0 0 160 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M44.985 9.6615C44.7884 9.31867 44.5534 8.99925 44.2847 8.70943C43.7645 8.15179 43.138 7.70383 42.4421 7.39193C41.7311 7.06577 40.958 6.89714 40.1757 6.89752C39.0539 6.87224 37.9496 7.17767 37.0002 7.77581C36.0334 8.43321 35.2941 9.37419 34.8842 10.4692C34.3411 11.903 34.0845 13.4295 34.1287 14.9621V15.9572C34.0844 17.4882 34.3303 19.0138 34.8535 20.4533C35.2458 21.5357 35.9649 22.4693 36.9112 23.1251C37.8605 23.7223 38.9655 24.0248 40.0866 23.9942C40.8739 23.998 41.6529 23.8337 42.3715 23.5121C43.0801 23.1988 43.7214 22.7514 44.2602 22.1946C44.5261 21.9186 44.7657 21.6184 44.9757 21.2979V23.5397H52.0392V7.35204H44.9757L44.985 9.6615ZM45.16 15.8251C45.1745 16.512 45.1033 17.1982 44.9481 17.8675C44.8566 18.318 44.6443 18.7351 44.3339 19.0743C44.198 19.2054 44.0373 19.308 43.8611 19.376C43.685 19.4441 43.497 19.4762 43.3082 19.4705C43.1233 19.4755 42.9391 19.4431 42.7671 19.375C42.595 19.3069 42.4384 19.2046 42.307 19.0743C41.9942 18.7392 41.7815 18.3234 41.6928 17.8736C41.5474 17.2009 41.4814 16.5132 41.4962 15.8251V14.9621C41.4809 14.2796 41.5502 13.5978 41.7021 12.9322C41.7888 12.4922 41.9961 12.0849 42.3008 11.7559C42.4329 11.6293 42.5891 11.5306 42.76 11.4652C42.9309 11.3998 43.1131 11.3691 43.2959 11.3752C43.6746 11.3626 44.0429 11.4993 44.3216 11.7559C44.6326 12.0826 44.8455 12.4902 44.9358 12.9322C45.0916 13.5972 45.1628 14.2792 45.1477 14.9621L45.16 15.8251Z",fill:"black"}),a.createElement("path",{d:"M69.0228 7.546C68.2385 7.10178 67.347 6.8819 66.4461 6.91034C65.5689 6.89745 64.6994 7.07449 63.8972 7.42934C63.1644 7.75789 62.5068 8.23345 61.9654 8.82662C61.6036 9.22935 61.2987 9.68 61.0594 10.1657V7.36485H54.2233V23.5525H61.2652V13.8479C61.2518 13.483 61.3244 13.1201 61.477 12.7884C61.5941 12.531 61.7884 12.3163 62.0329 12.1742C62.2633 12.0474 62.5224 11.9818 62.7854 11.9838C62.9678 11.9736 63.1503 12.0022 63.3207 12.0679C63.4912 12.1335 63.6457 12.2346 63.7742 12.3645C64.0467 12.7129 64.1753 13.1526 64.1335 13.5929V23.5586H71.1725V12.6839C71.2056 11.5894 71.0197 10.4994 70.6258 9.47772C70.3089 8.68225 69.7476 8.00798 69.0228 7.55215",fill:"black"}),a.createElement("path",{d:"M100.983 17.1711C101.01 17.847 100.839 18.5161 100.492 19.0966C100.348 19.306 100.154 19.4755 99.9277 19.5894C99.701 19.7033 99.4491 19.7576 99.1956 19.7476C98.7997 19.7649 98.4123 19.6286 98.1146 19.3669C97.792 19.0157 97.5786 18.5781 97.5004 18.1077C97.3466 17.322 97.2787 16.5219 97.2977 15.7215V14.9751C97.2977 13.5901 97.4544 12.6044 97.7738 12.0209C97.9086 11.7459 98.1208 11.5163 98.3843 11.3603C98.6478 11.2043 98.9511 11.1285 99.257 11.1424C99.5036 11.1258 99.7503 11.1737 99.9727 11.2814C100.195 11.3891 100.386 11.5529 100.525 11.7566C100.837 12.3067 100.986 12.934 100.955 13.5655V13.6516H108.172C108.142 12.3473 107.724 11.0814 106.972 10.0154C106.183 8.9613 105.105 8.15821 103.87 7.70291C102.349 7.13926 100.735 6.86831 99.1127 6.9044C97.4861 6.87585 95.8711 7.18219 94.3679 7.80428C93.0212 8.37295 91.8787 9.33669 91.0911 10.5682C90.2906 11.7967 89.8903 13.3382 89.8903 15.1932V15.6478C89.8903 17.4905 90.2782 19.0393 91.0542 20.2943C91.8216 21.5312 92.9505 22.5025 94.2881 23.0767C95.8095 23.7154 97.4477 24.0292 99.0974 23.9981C100.697 24.0273 102.289 23.7575 103.79 23.2026C105.063 22.7366 106.177 21.9187 107.002 20.8441C107.801 19.7537 108.241 18.4423 108.261 17.0911H100.983V17.1711Z",fill:"black"}),a.createElement("path",{d:"M124.443 7.54468C123.66 7.09528 122.769 6.87106 121.866 6.89672C120.99 6.88379 120.122 7.06084 119.321 7.41571C118.587 7.74266 117.929 8.21858 117.389 8.81315C117.123 9.10845 116.888 9.42931 116.686 9.77121V2.36688H109.644V23.5389H116.686V13.8342C116.672 13.4693 116.745 13.1065 116.897 12.7748C117.016 12.518 117.21 12.3037 117.453 12.1606C117.685 12.0332 117.945 11.9676 118.209 11.9701C118.391 11.9602 118.574 11.9889 118.744 12.0546C118.914 12.1202 119.069 12.2212 119.198 12.3509C119.468 12.7005 119.595 13.1395 119.554 13.5793V23.545H126.596V12.6703C126.628 11.5756 126.441 10.4855 126.046 9.4641C125.731 8.66752 125.169 7.99272 124.443 7.53853",fill:"black"}),a.createElement("path",{d:"M139.064 9.66154C138.868 9.31871 138.633 8.99929 138.364 8.70947C137.844 8.15183 137.218 7.70387 136.522 7.39197C135.815 7.07262 135.049 6.90827 134.274 6.90986C133.152 6.88457 132.047 7.19 131.098 7.78815C130.132 8.44644 129.393 9.38712 128.982 10.4815C128.439 11.9154 128.182 13.4418 128.227 14.9744V15.9695C128.182 17.5005 128.428 19.0261 128.951 20.4656C129.344 21.548 130.063 22.4816 131.009 23.1374C131.958 23.7347 133.063 24.0371 134.185 24.0065C134.972 24.0104 135.751 23.846 136.469 23.5244C137.178 23.2111 137.819 22.7637 138.358 22.2069C138.624 21.931 138.864 21.6308 139.074 21.3102V23.552H146.137V7.36438H139.074L139.064 9.66154ZM139.243 15.8251C139.256 16.5122 139.184 17.1984 139.028 17.8675C138.936 18.3181 138.724 18.7351 138.413 19.0744C138.277 19.2055 138.117 19.308 137.941 19.3761C137.764 19.4441 137.576 19.4763 137.388 19.4705C137.203 19.4756 137.019 19.4431 136.846 19.375C136.674 19.3069 136.518 19.2046 136.386 19.0744C136.074 18.7392 135.861 18.3234 135.772 17.8737C135.627 17.2009 135.561 16.5133 135.576 15.8251V14.9621C135.56 14.2796 135.63 13.5978 135.781 12.9322C135.868 12.4922 136.076 12.085 136.38 11.756C136.512 11.6294 136.669 11.5306 136.839 11.4652C137.01 11.3998 137.192 11.3692 137.375 11.3752C137.754 11.3626 138.122 11.4993 138.401 11.756C138.712 12.0827 138.925 12.4903 139.015 12.9322C139.172 13.5971 139.245 14.2791 139.23 14.9621L139.243 15.8251Z",fill:"black"}),a.createElement("path",{d:"M160 11.6973V7.36408H156.984V2.37973H149.945V7.36408H147.47V11.6973H149.927V18.7608C149.879 19.7987 150.153 20.826 150.71 21.7029C151.226 22.4493 151.963 23.0152 152.817 23.3214C153.798 23.6629 154.831 23.8282 155.869 23.8097C156.648 23.8187 157.426 23.7426 158.188 23.5825C158.813 23.4502 159.42 23.244 159.997 22.9683V19.1479C159.511 19.3103 159.002 19.3942 158.489 19.3966C158.092 19.4252 157.698 19.3168 157.371 19.0895C157.11 18.8807 156.981 18.5121 156.981 17.9839V11.6912L160 11.6973Z",fill:"black"}),a.createElement("path",{d:"M27.8915 0.00614816H27.6642C20.9416 0.00614816 17.674 10.0639 17.674 10.0639V2.34635H0V23.5582H7.06348V9.41598H10.8317V23.5582H18.411C18.411 23.5582 22.3052 6.77177 25.9506 8.02784C28.4075 8.94917 21.4791 23.5429 21.4791 23.5429H31.4877C31.4877 23.5429 32.8758 14.0379 32.8973 10.7488C33.2044 5.16248 32.323 0 27.8853 0",fill:"black"}),a.createElement("path",{d:"M77.4955 24.4947C77.5058 24.2161 77.4236 23.9419 77.262 23.7147C77.0874 23.4942 76.8496 23.3324 76.5803 23.251C76.2265 23.1414 75.8573 23.0896 75.487 23.0974L71.7219 7.36431H79.0525L81.2484 20.8586H80.5789L82.876 7.36431H90.0593L86.4969 23.0974C86.1031 23.0851 85.71 23.137 85.3329 23.251C85.0775 23.3265 84.8547 23.4855 84.7002 23.7025C84.559 23.9419 84.4907 24.2171 84.5037 24.4947V28.2169H77.4955V24.4947Z",fill:"black"}))}},2537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294);function i(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"191",height:"55",viewBox:"0 0 191 55",className:"site-brand__logo"},a.createElement("g",{fill:"#000000"},a.createElement("g",null,a.createElement("path",{d:"M89.348 16.818l-4.585-12.18c-.19-.473-.326-.892-.326-1.254 0-.948.734-1.255 2.88-1.338V.847h-8.07v1.2c.87.139 1.549.306 1.875 1.142l.97 2.562-4.267 11.039-4.423-12.152c-.19-.501-.326-.892-.326-1.254 0-.948.734-1.255 2.88-1.338V.847h-8.234v1.2c.87.139 1.55.306 1.875 1.142l7.005 18.48h.924l5.408-13.8 5.38 13.8h.925l6.626-18.48c.326-.864 1.006-1.003 1.875-1.143V.847h-6.848v1.2c2.147.083 2.908.417 2.908 1.365 0 .362-.163.78-.327 1.255l-4.125 12.15zM107.986 17.04c-.897 1.144-2.419 2.203-4.675 2.203-3.587 0-5.218-2.37-5.218-6.217h10.653v-.78c0-3.345-2.065-5.91-6.033-5.91-4.158 0-7.202 3.262-7.202 8.14 0 3.987 2.582 7.192 6.958 7.192 3.832 0 5.707-2.23 6.305-4.265l-.788-.362zm-5.952-8.975c2.446 0 3.723 1.616 3.723 3.568h-7.582c.3-2.091 1.712-3.568 3.86-3.568M51.395 17.04c-.897 1.144-2.42 2.203-4.675 2.203-3.587 0-5.218-2.37-5.218-6.217h10.654v-.78c0-3.345-2.066-5.91-6.033-5.91-4.158 0-7.202 3.262-7.202 8.14 0 3.987 2.581 7.192 6.957 7.192 3.831 0 5.707-2.23 6.305-4.265l-.788-.362zm-5.952-8.975c2.446 0 3.723 1.616 3.723 3.568h-7.582c.299-2.091 1.712-3.568 3.859-3.568M30.782 6.336c-2.12 0-4.022 1.06-5.191 2.592V6.336h-.815L21.63 7.73v.669l1.243.976v15.377c0 1.281-.924 1.42-2.174 1.588v1.087h7.066V26.34c-1.25-.168-2.174-.307-2.174-1.59v-4.197c.87.669 2.12 1.115 3.75 1.115 4.294 0 7.827-3.206 7.827-8.363 0-3.847-2.202-6.969-6.386-6.969zM29.64 20.08c-2.062 0-4.043-.862-4.049-3.5v-6.285c.924-1.003 2.5-1.84 4.158-1.84 3.505 0 4.62 3.123 4.62 6.022 0 3.596-1.875 5.603-4.729 5.603zM10.488.607C4.765.607.017 4.82.017 11.532c0 5.318 3.772 10.136 9.906 10.136 5.723 0 10.471-4.213 10.471-10.925 0-5.318-3.772-10.136-9.906-10.136m6.511 11.215c0 4.908-2.328 7.837-6.229 7.837-2.324 0-4.244-.967-5.55-2.798-1.166-1.635-1.808-3.91-1.808-6.408 0-4.907 2.329-7.837 6.229-7.837 2.325 0 4.244.968 5.55 2.799C16.357 7.05 17 9.325 17 11.822M68.392 18.713v-7.805c0-3.262-1.875-4.572-4.538-4.572-2.146 0-4.319 1.393-5.515 2.73v-2.73h-.815L54.38 7.73v.669l1.243.976v9.406c-.034 1.217-.945 1.357-2.171 1.521v1.087h7.066v-1.087c-1.25-.167-2.174-.307-2.174-1.589h-.004v-8.392c1.142-.947 3.015-1.727 4.482-1.727 1.794 0 2.854.641 2.854 2.704v7.415c0 1.282-.924 1.422-2.174 1.589v1.087h7.066v-1.087c-1.251-.167-2.175-.307-2.175-1.589zM119.036 6.336c-2.12 0-3.968 1.06-5.164 2.593V.02h-.815l-3.146 1.394v.669l1.243.976v16.743h.003c1.169.92 3.423 1.866 6.465 1.866 4.267 0 7.827-3.206 7.827-8.363 0-3.847-2.228-6.969-6.413-6.969zM117.92 20.08c-2.064 0-4.047-.863-4.049-3.508v-6.277c.924-1.003 2.5-1.84 4.158-1.84 3.479 0 4.62 3.123 4.62 6.022 0 3.596-1.875 5.603-4.729 5.603z",transform:"translate(64.687 15.682)"})),a.createElement("path",{d:"M40.828 27.457l-.001.055 6.38 3.517s1.855 1.048 3.889 1.808c-2.163-.193-4.29-.05-4.29-.05l-7.277.41c-.265.554-.569 1.087-.906 1.596l11.096 8.805c.487-.666.945-1.355 1.37-2.065l-5.016-3.985c-1.95-1.616-3.903-2.52-3.903-2.52 1.817.37 4.435.21 4.435.21l7.373-.414c.23-.829.425-1.673.578-2.53l-6.463-3.56s-2.288-1.277-4.086-1.729c0 0 2.152.03 4.613-.584l6.25-1.42c-.073-.83-.182-1.649-.328-2.455l-13.835 3.138c.078.58.121 1.172.121 1.773zM37.1 36.694c-.424.44-.878.852-1.358 1.231l1.22 7.168s.334 2.099 1.005 4.157c-1.197-1.806-2.635-3.375-2.635-3.375l-4.86-5.417c-.591.136-1.197.235-1.815.29l.011 14.137c.835-.036 1.66-.11 2.475-.22l-.002-6.392c.052-2.528-.457-4.613-.457-4.613.842 1.647 2.6 3.586 2.6 3.586l4.923 5.489c.801-.34 1.584-.716 2.345-1.128l-1.237-7.255s-.426-2.58-1.192-4.263c0 0 1.318 1.696 3.334 3.231l5.012 3.986c.599-.57 1.17-1.168 1.716-1.79L37.1 36.694zM35.827 17.056l6.738-2.78s1.978-.792 3.843-1.903c-1.501 1.565-2.715 3.312-2.715 3.312l-4.215 5.926c.268.547.497 1.115.689 1.7l13.828-3.157c-.22-.8-.477-1.586-.767-2.356l-6.257 1.427c-2.484.511-4.41 1.47-4.41 1.47 1.423-1.185 2.929-3.326 2.929-3.326l4.27-5.999c-.511-.703-1.054-1.38-1.628-2.03l-6.816 2.814s-2.428.988-3.903 2.108c0 0 1.366-1.659 2.418-3.96l2.784-5.759c-.69-.455-1.4-.88-2.132-1.272l-6.162 12.735c.527.316 1.03.668 1.506 1.05zM15.393 21.612l-4.216-5.925s-1.214-1.747-2.715-3.311c1.865 1.11 3.844 1.901 3.844 1.901l6.737 2.78c.477-.383.979-.734 1.506-1.05L14.385 3.272c-.73.393-1.441.818-2.131 1.273l2.785 5.759c1.052 2.3 2.419 3.959 2.419 3.959-1.476-1.12-3.905-2.107-3.905-2.107L6.737 9.342c-.573.65-1.116 1.328-1.627 2.03l4.27 6s1.506 2.14 2.93 3.325c0 0-1.926-.959-4.41-1.47l-6.257-1.425c-.29.77-.547 1.555-.768 2.355l13.83 3.156c.19-.585.42-1.154.688-1.7zM24.402 40.458l-4.86 5.418s-1.438 1.57-2.634 3.376c.67-2.06 1.004-4.158 1.004-4.158l1.22-7.168c-.481-.38-.935-.79-1.359-1.231L6.69 45.518c.545.622 1.118 1.22 1.717 1.79l5.011-3.986c2.015-1.535 3.333-3.231 3.333-3.231-.766 1.683-1.19 4.262-1.19 4.262l-1.237 7.256c.76.412 1.543.788 2.345 1.128l4.921-5.49s1.758-1.94 2.6-3.586c0 0-.509 2.085-.456 4.612l-.001 6.393c.814.11 1.64.183 2.474.22l.01-14.137c-.62-.056-1.224-.154-1.815-.29zM24.511 14.43l2.02-6.981s.613-2.036.904-4.181c.293 2.145.905 4.18.905 4.18l2.02 6.983c.605.134 1.194.307 1.764.52L38.27 2.206c-.758-.324-1.535-.614-2.326-.87L33.16 7.1c-1.148 2.255-1.597 4.354-1.597 4.354-.042-1.848-.782-4.356-.782-4.356L28.739.032C28.307.012 27.873 0 27.436 0c-.437 0-.872.011-1.304.032L24.09 7.099s-.74 2.508-.782 4.356c0 0-.449-2.099-1.597-4.354l-2.783-5.764c-.792.256-1.568.546-2.326.87l6.146 12.743c.57-.212 1.16-.385 1.763-.52zM6.252 26.424c2.46.614 4.613.583 4.613.583-1.798.452-4.087 1.73-4.087 1.73l-6.462 3.56c.153.858.347 1.702.579 2.53l7.373.413s2.618.161 4.434-.21c0 0-1.952.903-3.902 2.52l-5.017 3.986c.427.71.884 1.399 1.371 2.065l11.095-8.807c-.337-.509-.64-1.041-.907-1.596l-7.276-.41s-2.127-.141-4.29.053c2.033-.762 3.888-1.81 3.888-1.81l6.38-3.517-.002-.057c0-.601.044-1.192.121-1.772L.33 22.55c-.146.807-.255 1.626-.329 2.455l6.252 1.42z"})))}},6157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7294),i=n(6010),l=n(3929),c=n(9960),r=n(2263),s=n(4996);const o={heroBanner:"heroBanner_UJJx",hero:"hero_syme",container:"container_czXe",mainTitle:"mainTitle_BcKq",subTitle:"subTitle_opAm",section:"section_rC2D",sectionAlt:"sectionAlt_XiGz",buttons:"buttons_pzbO",logos:"logos_NYVn",features:"features_keug",featureImage:"featureImage_yA8i",heart:"heart_Zeus",quote:"quote_aYQC",responsiveEmbed:"responsiveEmbed_q7kv",lspDemo:"lspDemo_XLVG",playWithIt:"playWithIt_Xc2P"};var h=n(3225),m=n(2949),u=n(9250),d=n(3349),f=n(650),v=n(1374),p=n(2537);function C(e){let{imageUrl:t,title:n,children:l}=e;const c=(0,s.Z)(t);return a.createElement("div",{className:(0,i.Z)("col col--4",o.feature)},c&&a.createElement("div",{className:"text--center"},a.createElement("div",{className:"feature-media"},a.createElement("img",{className:o.featureImage,src:c,alt:n}))),a.createElement("h2",{className:"text--center"},n),a.createElement("p",null,l))}function g(){const e="dark"==(0,m.I)().colorMode;return a.createElement("header",{id:"hero",className:(0,i.Z)("hero hero--primary",o.heroBanner)},a.createElement(h.default,{isDarkTheme:e}),a.createElement("div",{className:"container",style:{zIndex:1}},a.createElement("div",{className:o.mainTitle},"CENTRIFUGO"),a.createElement("div",{className:o.subTitle},"Scalable real-time messaging server. Set up once and forever."),a.createElement("div",{className:o.buttons},a.createElement(c.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg"),to:(0,s.Z)("docs/getting-started/introduction")},"GET STARTED"))))}const E=function(){const e=(0,r.Z)(),{siteConfig:{tagline:t}={}}=e;return a.createElement(l.Z,{title:t,description:"Centrifugo is an open source server designed to help building interactive real-time messaging applications. Think chats, live comments, multiplayer games, streaming metrics etc. Centrifugo provides a variety of real-time transports, scales well and integrates with any application."},a.createElement(g,null),a.createElement("main",null,a.createElement("section",{className:(0,i.Z)("logos-wrapper",o.logos)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col"}),a.createElement("div",{className:"col"},a.createElement(d.default,null)),a.createElement("div",{className:"col"},a.createElement(f.default,null)),a.createElement("div",{className:"col"},a.createElement(v.default,null)),a.createElement("div",{className:"col"},a.createElement(p.default,null)),a.createElement("div",{className:"col"})))),a.createElement("section",{className:(0,i.Z)("features-wrapper",o.features)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement(C,{title:"Integrates with everything",imageUrl:"img/feature_integration.png"},"Centrifugo is a self-hosted service which can handle connections over various ",a.createElement("a",{href:"/docs/transports/overview"},"real-time transports")," and provides a simple ",a.createElement("a",{href:"/docs/server/server_api"},"publishing API"),". Centrifugo integrates with any application \u2013 no need to change an existing app architecture to introduce real-time features."),a.createElement(C,{title:"Great performance",imageUrl:"img/feature_performance.png"},"Centrifugo is written in Go language with some smart optimizations inside. See the description of the test stand with ",a.createElement("a",{href:"/blog/2020/02/10/million-connections-with-centrifugo"},"one million WebSocket")," connections and 30 million delivered messages per minute with hardware comparable to a single modern server machine."),a.createElement(C,{title:"Feature-rich",imageUrl:"img/feature_rich.png"},"Centrifugo provides flexible authentication, various types of subscriptions, hot channel history, online presence, the ability to proxy connection events to the backend, and much more. It comes with official SDK libraries for both web and mobile development."),a.createElement(C,{title:"Out-of-the-box scalability",imageUrl:"img/feature_scalability.png"},"Built-in Redis, KeyDB, Tarantool engines, or Nats broker make it possible to scale connections across different Centrifugo nodes. So Centrifugo helps you to scale to millions of active connections with reasonable hardware requirements."),a.createElement(C,{title:"Used in production",imageUrl:"img/feature_production.png"},"Started a decade ago, Centrifugo (and Centrifuge library for Go it's built on top of) is mature, battle-tested software that has been successfully used in production by many companies around the world: VK, Badoo, ManyChat, OpenWeb, Grafana, and others."),a.createElement(C,{title:"Centrifugo PRO",imageUrl:"img/feature_pro.png"},a.createElement("a",{href:"/docs/pro/overview"},"Centrifugo PRO")," provides a set of unique features on top of the OSS version: connection analytics with ClickHouse, real-time user and channel tracing, operation throttling, faster performance, token extensions, and more.")))),a.createElement(u.default,{img:a.createElement("img",{src:"/img/scheme_sketch.png"}),reversed:!0,isDark:!0,title:"What is real-time messaging?",text:a.createElement(a.Fragment,null,a.createElement("p",null,"Real-time messaging can help create interactive applications where events are delivered to online users with minimal delay."),a.createElement("p",null,"Chats apps, live comments, multiplayer games, real-time data visualizations, collaborative tools, etc. can all be built on top of a real-time messaging system."),a.createElement("p",null,"Centrifugo is a user facing ",a.createElement("b",null,"PUB/SUB")," server that handles persistent connections over various real-time transports \u2013 ",a.createElement("b",null,"WebSocket"),", HTTP-streaming, SSE (Server-Sent Events), SockJS, WebTransport or GRPC."))}),a.createElement(u.default,{img:a.createElement("iframe",{width:"560",height:"355",src:"https://player.vimeo.com/video/570333329?title=0&byline=0&portrait=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),title:"Looking for a cool demo?",text:a.createElement(a.Fragment,null,a.createElement("p",null,"Here is the real-time telemetry streamed from the Assetto Corsa racing simulator to the Grafana dashboard with a help of our WebSocket technologies."),a.createElement("p",null,"This demonstrates that you can stream ",a.createElement("b",null,"60Hz")," data towards client connections and thus provide instant visual feedback on the state of the system."),a.createElement("div",{className:o.buttons},a.createElement(c.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg",o.getStarted),to:(0,s.Z)("docs/getting-started/introduction")},"Impressive? Get Started!")))}),a.createElement(u.default,{img:a.createElement("video",{width:"100%",loop:!0,autoPlay:"autoplay",muted:!0,controls:"",src:"/img/logo.mp4"}),reversed:!0,isDark:!0,title:"What users \u2764\ufe0f in Centrifugo",text:a.createElement("div",{className:"quotes"},a.createElement("code",null,"Stability. It just works without restarts, for few years already"),a.createElement("code",null,"Scalability and integration with Redis"),a.createElement("code",null,"It's simple and powerful"),a.createElement("code",null,"Open source"),a.createElement("code",null,"Very simple integration"),a.createElement("code",null,"It's really well written. Super easy to setup, especially for auth!"),a.createElement("code",null,"Clean code"),a.createElement("code",null,"Has a Dart Client <3"))}),a.createElement("div",{className:"container get-started-row"},a.createElement("div",{className:"row"},a.createElement(c.Z,{to:(0,s.Z)("docs/getting-started/introduction")},"GET STARTED")))))}}}]);