"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7810],{9528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>h,toc:()=>u});var i=t(85893),o=t(11151),r=t(67294),s=t(9286);class c extends r.Component{constructor(){super(),this.onChange=this.onChange.bind(this),this.onClick=this.onClick.bind(this),this.state={providerKey:"",centrifugalKey:""}}async exchangeLicense(e){const n=await fetch("https://centrifugal.fly.dev/centrifugo/license/exchange/"+this.props.providerName+"?license="+e);if(!n.ok)throw new Error(`Unexpected status code ${n.status}`);const t=await n.json();this.setState({centrifugalKey:t.license,providerKey:""})}onClick(e){this.state.providerKey?this.exchangeLicense(this.state.providerKey):alert("Provide a license key received in the purchase confirmation on email")}onChange(e){this.setState({providerKey:e.target.value})}render(){const e="Paste the key received from "+this.props.providerHuman+" here...";return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{onChange:this.onChange,value:this.state.providerKey,placeholder:e,style:{backgroundColor:"#230808",color:"#ccc",width:"100%",height:"3em",border:"1px solid #ccc",padding:"5px",fontSize:"1em",borderRadius:"5px"}}),(0,i.jsx)("button",{onClick:this.onClick,style:{background:"#FC6459",height:50,border:"none",textAlign:"center",cursor:"pointer",textTransform:"uppercase",outline:"none",overflow:"hidden",position:"relative",color:"#fff",fontWeight:700,fontSize:15,padding:"17px 17px",marginTop:10,borderRadius:"5px"},children:"Exchange"}),this.state.centrifugalKey&&(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(s.Z,{language:"text",children:this.state.centrifugalKey})})]})}}const a={id:"license_lemon",title:"Getting Centrifugo PRO license",hide_table_of_contents:!0},l=void 0,h={type:"mdx",permalink:"/license_exchange_lemon",source:"@site/src/pages/license_exchange_lemon.md",title:"Getting Centrifugo PRO license",description:"Thanks for purchasing Centrifugo PRO \ud83c\udf89",frontMatter:{id:"license_lemon",title:"Getting Centrifugo PRO license",hide_table_of_contents:!0},unlisted:!1},d={},u=[{value:"Thanks for purchasing Centrifugo PRO \ud83c\udf89",id:"thanks-for-purchasing-centrifugo-pro-",level:2}];function p(e){const n={h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"thanks-for-purchasing-centrifugo-pro-",children:"Thanks for purchasing Centrifugo PRO \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"In the email you received from Lemon Squeeze you can find the license key. You need to exchange it to Centrifugo license key using the form below. Please paste the license key from the Lemon Squeeze email to the input below, press Exchange button \u2013 and we will exchange the Lemon Squezee license key to a Centrifugo PRO license key."}),"\n","\n","\n",(0,i.jsx)(c,{providerName:"lemon",providerHuman:"Lemon Squezee"})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);