"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[1368],{5245:(e,t,i)=>{i.d(t,{Ay:()=>o,RM:()=>r});var s=i(2540),n=i(3023);const r=[];function a(e){const t={admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},5190:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"design-patterns/DataCarriers","title":"Data Carriers","description":"Overview","source":"@site/docs/design-patterns/DataCarriers.md","sourceDirName":"design-patterns","slug":"/design-patterns/DataCarriers","permalink":"/spec-untp/docs/design-patterns/DataCarriers","draft":false,"unlisted":false,"editUrl":"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/DataCarriers.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"Data Carriers"},"sidebar":"tutorialSidebar","previous":{"title":"Best Practices","permalink":"/spec-untp/docs/design-patterns/"},"next":{"title":"Transparency Graphs","permalink":"/spec-untp/docs/design-patterns/TrustGraphs"}}');var n=i(2540),r=i(3023),a=i(5245);const o={sidebar_position:30,title:"Data Carriers"},d=void 0,l={},c=[...a.RM,{value:"Overview",id:"overview",level:2},{value:"Resolvers",id:"resolvers",level:2},{value:"Link Vocabulary",id:"link-vocabulary",level:2},{value:"1D Barcodes",id:"1d-barcodes",level:2},{value:"2d Matrix Codes",id:"2d-matrix-codes",level:2},{value:"QR Codes",id:"qr-codes",level:2},{value:"RFID Codes",id:"rfid-codes",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Digital data needs to be linked to the physical product it describes and should be discoverable through the identifiers printed on that product, including serial or batch number as appropriate. For high volume goods and easy / reliable discovery, these identifiers are already typically represented as barcodes, matrix codes, QR codes, or RFID encoded data. UNTP supports the use of these existing data carriers. A basic UNTP principle is that if you have a product then you should be able to find ESG data about that product even when the identifier is not a web link. Therefore, the UNTP defines a generalised protocol (based on ",(0,n.jsx)(t.a,{href:"https://www.iso.org/standard/85540.html",children:"ISO/IEC DIS 18975"}),") to allow any identifier scheme (GS1 or otherwise) to be consistently resolvable so that product passports and other data can always be accessed from the identifier of the product. The UNTP also defines a specific QR based data carrier format for use on paper/PDF versions of conformity credentials or other trade documents that provides secure access to credentials in a way that is both human and machine readable.  This provides a simple but powerful mechanism to facilitate uptake of digital solutions alongside existing paper/PDF based frameworks."]}),"\n",(0,n.jsx)(t.h2,{id:"resolvers",children:"Resolvers"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.em,{children:"resolver"})," is a service that connects an identifier to one or more sources of information about the identified thing. An internet domain name ",(0,n.jsx)(t.em,{children:"resolves"})," to one or more actual servers (identified by their IP addresses). Digital Object Identifiers (",(0,n.jsx)(t.a,{href:"https://www.doi.org/the-identifier/what-is-a-doi/",children:"DOI"}),"s), commonly used to identify research papers, ",(0,n.jsx)(t.em,{children:"resolve"})," to the paper itself (wherever it may be). In the UNTP context, identifiers for products, locations and supply chain operators must resolve to information about those entities. This can include the DPP, ESG certificates and more, some of which may be access-controlled. That is, knowing the location of information is not the same as automatically having access to it."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.iso.org/standard/85540.html",children:"ISO/IEC DIS 18975"})," specifies two different approaches for encoding identifiers in HTTP URIs (web addresses). Either can be used to point to a resolver that associates an identifier with a set of links to one more sources of relevant information following the IETF's Linkset standard ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc9264.html",children:"RFC9264"}),". A conformant resolver can respond to queries for a particular type of information about the identified entity by providing the appropriate link from the linkset. GS1 Digital Link is conformant to this model. The ",(0,n.jsx)(t.a,{href:"https://ref.gs1.org/standards/digital-link/uri-syntax/",children:"URI syntax"})," follows the ",(0,n.jsx)(t.em,{children:"structured path"})," approach set out in ISO/IEC DIS 18975 and the ",(0,n.jsx)(t.a,{href:"https://ref.gs1.org/standards/resolver/",children:"GS1-Conformant resolver"})," standard defines the related service. An example will make this clearer:"]}),"\n",(0,n.jsxs)(t.p,{children:["Imagine a white t-shirt that has a GTIN of 9506000164908. This can be encoded in a GS1 Digital Link URI as ",(0,n.jsx)(t.a,{href:"https://id.gs1.org/01/09506000164908",children:"https://id.gs1.org/01/09506000164908"}),", which can, in turn, be encoded in a QR Code. Following that link, without any specialist software, will take you to a landing page for the white t-shirt from which there are links to specific types of information. One of those links is to sustainability information. Using an app, it's possible to ask the resolver directly for that sustainability information by appending the GS1 Digital Link URI with an instruction thus: ",(0,n.jsx)(t.a,{href:"https://id.gs1.org/01/09506000164908?linkType=gs1:sustainabilityInfo",children:"https://id.gs1.org/01/09506000164908?linkType=gs1:sustainabilityInfo"}),". The resolver recognises the ",(0,n.jsx)(t.code,{children:"linkType"})," parameter and redirects immediately to that page. Alternatively, software can ",(0,n.jsx)(t.a,{href:"https://id.gs1.org/01/09506000164908?linkType=all",children:"request the full linkset"})," and either present it to the user or process it as it sees fit. See the next section for more on link types."]}),"\n",(0,n.jsx)(t.h2,{id:"link-vocabulary",children:"Link Vocabulary"}),"\n",(0,n.jsx)(t.p,{children:"With very few exceptions, all websites include hyperlinks to different pages within those websites. Users understand that clicking a 'menu' option will take them to that kind of information. Online newspapers provide a good example. There will typically be a home news section, foreign news, economics, sport, arts, lifestyle, weather, TV guide and so on. Applying this to UNTP, when looking for information about a product the user will want the DPP, certificates covering ESG issues and conformance, perhaps manufacturer's details. These can all be provided using the same infrastructure and methods as used for consumer information such as the sustainabilty page in the white t-shirt example above."}),"\n",(0,n.jsxs)(t.p,{children:["The IETF's ",(0,n.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc9264.html",children:"RFC9264"})," defines how sets of links can be made machine-discoverable and machine-interpretable. The key feature being that each link is annotated with the type of thing it points to. There is no limit on those link types but interoperability is lost if everyone uses their own. Therefore it is preferable to choose link types from a defined list that is under formal change management. GS1 provides ",(0,n.jsx)(t.a,{href:"https://www.gs1.org/voc/?show=linktypes",children:"one such list"})," as part of its Web Vocabulary."]}),"\n",(0,n.jsx)(t.h2,{id:"1d-barcodes",children:"1D Barcodes"}),"\n",(0,n.jsx)(t.h2,{id:"2d-matrix-codes",children:"2d Matrix Codes"}),"\n",(0,n.jsx)(t.h2,{id:"qr-codes",children:"QR Codes"}),"\n",(0,n.jsx)(t.h2,{id:"rfid-codes",children:"RFID Codes"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3023:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(3696);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);