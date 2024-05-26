"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[7788],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,v=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(5773),i=(n(7378),n(5318));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}a.isMDXComponent=!0},6452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(5773),i=(n(7378),n(5318)),o=n(5611);const a={sidebar_position:45,title:"Anti-Counterfeiting"},s=void 0,c={unversionedId:"design-patterns/Counterfeiting",id:"design-patterns/Counterfeiting",title:"Anti-Counterfeiting",description:"Overview",source:"@site/docs/design-patterns/Counterfeiting.md",sourceDirName:"design-patterns",slug:"/design-patterns/Counterfeiting",permalink:"/spec-untp/docs/design-patterns/Counterfeiting",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/Counterfeiting.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,title:"Anti-Counterfeiting"},sidebar:"tutorialSidebar",previous:{title:"Confidentiality",permalink:"/spec-untp/docs/design-patterns/Confidentiality"},next:{title:"Mass Balance",permalink:"/spec-untp/docs/design-patterns/MassBalance"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Product Serial DID",id:"product-serial-did",level:2},{value:"Product Serial VC",id:"product-serial-vc",level:2},{value:"Brand Trust Root",id:"brand-trust-root",level:2},{value:"Public Verification",id:"public-verification",level:2},{value:"Private Acquittal",id:"private-acquittal",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.ZP,{mdxType:"Disclaimer"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"As the value of genuinely sustainable goods increases, so do the incentives to sell fake goods as the real thing. UNTP defines a simple and decentralised anti-counterfeiting protocol that can be implemented by any producer at very low cost. It builds upon the W3C DID standard by issuing a unique DID (and corresponding keypair) for every serialised (individual or batch) product. The DID (and therefore the public key) is discoverable from the product serial number using the standard link resolver protocol. The item/batch level DID is cryptographically linked to the product class level DID The private key is discoverable from a QR code hidden inside the product packaging. Scanning the QR provides the necessary key to update the individual serialised product public status to indicate consumption. Attackers that copy genuine serial numbers will find that their products are quickly identifiable as fakes. Attackers that try to create new serial numbers will not be able to create valid links to the genuine product class. The UNTP anti-counterfeiting protocol provides additional value/incentive for UNTP uptake beyond ESG integrity."),(0,i.kt)("h2",{id:"product-serial-did"},"Product Serial DID"),(0,i.kt)("h2",{id:"product-serial-vc"},"Product Serial VC"),(0,i.kt)("h2",{id:"brand-trust-root"},"Brand Trust Root"),(0,i.kt)("h2",{id:"public-verification"},"Public Verification"),(0,i.kt)("h2",{id:"private-acquittal"},"Private Acquittal"))}p.isMDXComponent=!0}}]);