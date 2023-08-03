"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2278],{3951:(t,i,s)=>{s.r(i),s.d(i,{default:()=>u});var e=s(7294);function h(t,i){return Math.floor(Math.random()*(i-t+1)+t)}function n(t,i,s,e){const h=e*Math.PI/180;return[t+s*Math.cos(h),i+s*Math.sin(h)]}function r(t,i,s,e){return 180*Math.atan2(e-i,s-t)/Math.PI}function o(t,i,s,e,h,n,r,o,c,a,u,d){this.ctx=t,this.init(i,s,e,h,n,r,o,c,a,u,d)}function c(t,i,s,e,h,n){this.ctx=t,this.init(i,s,e,h,n)}let a;if(o.prototype.init=function(t,i,s,e,h,n,r,o,c,a,u){this.X=t,this.Y=i,this.radius=h,this.x=s,this.y=e,this.r=n,this.w=r,this.c=u,this.rotate=o,this.speed=60*c,this.angleDiff=a,this.a=0},o.prototype.drawSegment=function(t,i,s){this.ctx.translate(this.x,this.y),this.ctx.rotate(s*Math.PI/180),this.ctx.translate(-this.x,-this.y),this.ctx.beginPath();const e=n(this.x,this.y,this.r,t),h=e[0],o=e[1],c=n(this.x,this.y,this.r,i),a=c[0],u=c[1],d=h-this.w,f=u-this.w,x=r(this.x,this.y,d,o),l=r(this.x,this.y,a,f),p=i*Math.PI/180,w=t*Math.PI/180,y=x*Math.PI/180,m=l*Math.PI/180;this.ctx.arc(this.x,this.y,this.r,p,w,!0),this.ctx.arc(this.x,this.y,this.r-this.w,y,m,!1),this.ctx.closePath(),this.ctx.fillStyle=this.c,this.ctx.fill(),this.ctx.stroke()},o.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=3,this.ctx.strokeStyle=this.c,this.ctx.shadowColor=this.c,this.drawSegment(4+this.angleDiff,86-this.angleDiff,this.rotate+this.a),this.ctx.restore()},o.prototype.resize=function(){this.x=this.X/2,this.y=this.Y/2},o.prototype.updateParams=function(t){this.a+=this.speed*t*this.radius/this.r},o.prototype.render=function(t){this.updateParams(t),this.draw()},c.prototype.init=function(t,i,s,e,h){this.X=t,this.Y=i,this.x=s,this.y=e,this.c=h,this.lw=1,this.v={x:100*Math.random(),y:100*Math.random()}},c.prototype.draw=function(){this.ctx.save(),this.ctx.lineWidth=this.lw,this.ctx.strokeStyle=this.c,this.ctx.beginPath(),this.ctx.moveTo(0,this.y),this.ctx.lineTo(this.X,this.y),this.ctx.stroke(),this.ctx.lineWidth=this.lw,this.ctx.beginPath(),this.ctx.moveTo(this.x,0),this.ctx.lineTo(this.x,this.Y),this.ctx.stroke(),this.ctx.restore()},c.prototype.updatePosition=function(t){this.x+=this.v.x*t,this.y+=this.v.y*t},c.prototype.wrapPosition=function(){this.x<0&&(this.x=this.X),this.x>this.X&&(this.x=0),this.y<0&&(this.y=this.Y),this.y>this.Y&&(this.y=0)},c.prototype.render=function(t){this.updatePosition(t),this.wrapPosition(),this.draw()},s.g.window||process&&process.browser){a=new MutationObserver((function(t){t.forEach((function(t){"attributes"==t.type&&window.dispatchEvent(new Event("resized"))}))}));const t=document.querySelector("html");a.observe(t,{attributes:!0})}const u=t=>{const[i,n]=e.useState({x:1,y:1}),r=e.useRef(null),a=()=>{null!==r.current&&(r.current.width=r.current.clientWidth,r.current.height=r.current.clientHeight,n({x:r.current?r.current.clientWidth:0,y:r.current?r.current.clientHeight:0}))};return e.useEffect((()=>a()),[]),(s.g.window||process&&process.browser)&&(e.useEffect((()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)))),e.useEffect((()=>(window.addEventListener("resized",a),()=>window.removeEventListener("resized",a))))),e.useEffect((()=>{!function(t,i,e,n){const r=t.getContext("2d"),a=i/2,u=e/2;let d,f;n?(d="#8d3838",f="#6e2b2b"):(d="#ffd4d4",f="#ffd4d4");const x=[],l=[],p=e/7,w=p/15,y=s.g.requestAnimationFrame||s.g.mozRequestAnimationFrame||s.g.webkitRequestAnimationFrame||s.g.msRequestAnimationFrame||function(t){setTimeout(t,17)};for(let s=0;s<3;s+=1){const t=new c(r,i,e,h(0,i),h(0,e),d);x.push(t)}l.push(new o(r,i,e,a,u,p,2.65*p,9*w,0,-1.5,0,f)),l.push(new o(r,i,e,a,u,p,2.65*p,9*w,90,-1.5,0,f)),l.push(new o(r,i,e,a,u,p,2.65*p,9*w,180,-1.5,0,f)),l.push(new o(r,i,e,a,u,p,2.65*p,9*w,270,-1.5,0,f)),l.push(new o(r,i,e,a,u,p,1.45*p,8*w,45,1.5,2,f)),l.push(new o(r,i,e,a,u,p,1.45*p,8*w,135,1.5,2,f)),l.push(new o(r,i,e,a,u,p,1.45*p,8*w,225,1.5,2,f));let m=0;y((function t(s){const h=(s-m)/1e3;r.clearRect(0,0,i,e);for(let i=0;i<x.length;i+=1)x[i].render(h);for(let i=0;i<l.length;i+=1)l[i].render(h);m=s,y(t)}))}(r.current,i.x,i.y,t.isDarkTheme)}),[i]),e.createElement("canvas",{ref:r,style:{width:"100%",height:"100%"}})}}}]);