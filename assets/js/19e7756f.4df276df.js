"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7810],{8711:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var i=n(7462),o=n(7294),r=n(3905),s=n(814);class a extends o.Component{constructor(){super(),this.onChange=this.onChange.bind(this),this.onClick=this.onClick.bind(this),this.state={providerKey:"",centrifugalKey:""}}async exchangeLicense(e){const t=await fetch("http://localhost:8080/centrifugo/license/exchange/"+this.props.providerName+"?license="+e);if(!t.ok)throw new Error(`Unexpected status code ${t.status}`);const n=await t.json();this.setState({centrifugalKey:n.license,providerKey:""})}onClick(e){this.state.providerKey?this.exchangeLicense(this.state.providerKey):alert("Provide a license key received in the purchase confirmation on email")}onChange(e){this.setState({providerKey:e.target.value})}render(){const e="Paste the key received from "+this.props.providerHuman+" here...";return o.createElement("div",null,o.createElement("input",{onChange:this.onChange,value:this.state.providerKey,placeholder:e,style:{backgroundColor:"#230808",color:"#ccc",width:"100%",height:"3em",border:"1px solid #ccc",padding:"5px",fontSize:"1em",borderRadius:"5px"}}),o.createElement("button",{onClick:this.onClick,style:{background:"#FC6459",height:50,border:"none",textAlign:"center",cursor:"pointer",textTransform:"uppercase",outline:"none",overflow:"hidden",position:"relative",color:"#fff",fontWeight:700,fontSize:15,padding:"17px 17px",marginTop:10,borderRadius:"5px"}},"Exchange"),this.state.centrifugalKey&&o.createElement("div",{style:{marginTop:"10px"}},o.createElement(s.Z,{language:"text"},this.state.centrifugalKey)))}}const c={id:"license_lemon",title:"Getting Centrifugo PRO license",hide_table_of_contents:!0},l=void 0,h={type:"mdx",permalink:"/license_exchange_lemon",source:"@site/src/pages/license_exchange_lemon.md",title:"Getting Centrifugo PRO license",description:"Thanks for purchasing Centrifugo PRO \ud83c\udf89",frontMatter:{id:"license_lemon",title:"Getting Centrifugo PRO license",hide_table_of_contents:!0}},u=[{value:"Thanks for purchasing Centrifugo PRO \ud83c\udf89",id:"thanks-for-purchasing-centrifugo-pro-",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"thanks-for-purchasing-centrifugo-pro-"},"Thanks for purchasing Centrifugo PRO \ud83c\udf89"),(0,r.kt)("p",null,"In the email you received from Lemon Squeeze you can find the license key. You need to exchange it to Centrifugo license key using the form below. Please paste the license key from the Lemon Squeeze email to the input below, press Exchange button \u2013 and we will exchange the Lemon Squezee license key to a Centrifugo PRO license key."),(0,r.kt)(a,{providerName:"lemon",providerHuman:"Lemon Squezee",mdxType:"LicenseInput"}))}d.isMDXComponent=!0}}]);