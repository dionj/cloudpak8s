(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),l=a("q1tI"),r=a.n(l),i=a("NmYn"),b=a.n(i),o=a("OKom"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.tabs,l=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=l.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},d=a("pEPl"),j=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,l=a||n,r=l.baseUrl,i=l.subDirectory,b=r+"/edit/"+l.branch+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),h=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=b()(e,{lower:!0}),r=l===n,i=new RegExp(n+"(?!-)"),o=a.replace(i,l);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(h.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},l))))))},n}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,d=s.tabs,j=s.title,h=s.theme,f=s.description,y=s.keywords,C=n.data.site.pathPrefix,S=C?l.pathname.replace(C,""):l.pathname,P=d?S.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:h,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:u},Object(m.b)(O,{title:r?Object(m.b)(r,null):j,label:"label",tabs:d}),d&&Object(m.b)(w,{slug:S,tabs:d,currentTab:P}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(N,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:l,slug:S,tabs:d,currentTab:P}),Object(m.b)(o.a,null))}},Y3qL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},b={_frontmatter:i},o=l.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(o,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Cloud Pak for Application Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refer to Knowledge Center ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites")," for details on what is required before starting an install."),Object(n.b)("li",{parentName:"ul"},"Refer to ",Object(n.b)("a",r({parentName:"li"},{href:"../../ocp/prerequisites/"}),"OpenShift Container Platform section")," for prerequisites on installing a cluster."),Object(n.b)("li",{parentName:"ul"},"Refer to ",Object(n.b)("a",r({parentName:"li"},{href:"../../cp4a_install_dev_tools_mac/"}),"tools installation")," for prerequisites for developer client install."),Object(n.b)("li",{parentName:"ul"},"Sizing information is also available in the ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites"))),Object(n.b)("h3",null,"Cloud Pak for Integration Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refer to Knowledge Center ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites")," for details on what is required before starting an install."),Object(n.b)("li",{parentName:"ul"},"Refer to ",Object(n.b)("a",r({parentName:"li"},{href:"../../ocp/prerequisites/"}),"OpenShift Container Platform section")," for prerequisites on installing a cluster."),Object(n.b)("li",{parentName:"ul"},"Sizing information is also available in the ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites"))),Object(n.b)("h3",null,"Cloud Pak for Automation Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refer to Knowledge Center ",Object(n.b)("a",r({parentName:"li"},{href:"https://supportcontent.ibm.com/support/pages/ibm-cloud-pak-automation-detailed-system-requirements"}),"prerequisites")," for details on what is required before starting an install."),Object(n.b)("li",{parentName:"ul"},"Refer to ",Object(n.b)("a",r({parentName:"li"},{href:"../../ocp/prerequisites/"}),"OpenShift Container Platform section")," for prerequisites on installing a cluster."),Object(n.b)("li",{parentName:"ul"},"Sizing information is also available in the ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_19.0.x/welcome/kc_welcome_dba_distrib.html"}),"prerequisites"))),Object(n.b)("h2",null,"Multipak (Integration + Application + Automation) Residency minimum requirement:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Node"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"#"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"CPU"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"RAM"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DISK 1"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DISK 2"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"DISK 3"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Bootstrap"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"100"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Installer"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"120"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"LB"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"120"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Master"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"32"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"300"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Compute"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"8"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"64"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"200"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Storage"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"16"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"200"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"500"),Object(n.b)("td",r({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"NFS"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"8"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"500"),Object(n.b)("td",r({parentName:"tr"},{align:null})),Object(n.b)("td",r({parentName:"tr"},{align:null}))))),Object(n.b)("h2",null,"Multipak (Integration + Application + Automation) installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Install Cloud Pak for Integration: ",Object(n.b)("a",r({parentName:"li"},{href:"../integration/introduction"}),"step-by-step")),Object(n.b)("li",{parentName:"ol"},"Before Installing Cloud Pak for Application",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Possible Storage issues: \n1. Cloud Pak for Application installer will use the default storage class. If not set up correctly CouchDB will fail.\nCloud Pak for Application Transformation Advisor (TA) component needs ReadWriteMany storage which means we need one NFS volume available\n2. There should be an option to choose storage class in config.yaml. This option does not exist at this time"),Object(n.b)("li",{parentName:"ol"},"Solution:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Create one NFS export on NFS server"),Object(n.b)("li",{parentName:"ol"},"Create a  RWX PV on the cluster"),Object(n.b)("li",{parentName:"ol"},"Change storage class name in the TA Operator Definition, so it uses NFS",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"oc edit crd transadvs.charts.ta.cloud.ibm.com")),Object(n.b)("li",{parentName:"ol"},"This will however be overwritten by later release"),Object(n.b)("li",{parentName:"ol"},"Only alternative is to change default storage class"))),Object(n.b)("li",{parentName:"ol"},"Note: Installer will still say completed even if TA fails"))))),Object(n.b)("li",{parentName:"ol"},"Install Cloud Pak for Application: details ",Object(n.b)("a",r({parentName:"li"},{href:"../application/introduction"}),"step-by-step")),Object(n.b)("li",{parentName:"ol"},"Before installing Cloud Pak for Automation  ","[TODO: CP4Auto team to update this section]"),Object(n.b)("li",{parentName:"ol"},"Install Cloud Pak for Automation: details ",Object(n.b)("a",r({parentName:"li"},{href:"../automation/introduction"}),"step-by-step"))),Object(n.b)("h2",null,"IBM Knowledge Center Link"),Object(n.b)("p",null,"   ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/reqs-exist-icp-inst.html"}),"System requirements for Cloud Pak for Data in an existing IBM Cloud Private installation")),Object(n.b)("p",null,"   ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/openshift-softlayer.html"}),"Installing Cloud Pak for Data on managed Red Hat OpenShift on IBM Cloud")))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-multipak-cp-4-i-cp-4-a-cp-4-a-index-mdx-67f71da82eb6a005504c.js.map