(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{231:function(e,t,a){e.exports=a(422)},236:function(e,t,a){},237:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),i=a.n(l),c=(a(236),a(42)),o=(a(237),a(458)),m=a(198),s=a(467),u=a(73),d=a(15),p=a(423),f=a(462),v=a(463),g=a(464),E=a(470),h=a(187),b=a.n(h),y=a(469),O=Object(o.a)((function(e){return{linksContainer:{display:"grid",minWidth:250,padding:"1rem"},link:{color:"#fff"}}})),k=function(e){var t=e.isOpen,a=e.toggleDrawer,n=O();return r.a.createElement(y.a,{anchor:"left",open:t,onClose:a(!1),onOpen:a(!0)},r.a.createElement("div",{className:n.linksContainer},r.a.createElement(u.b,{className:n.link,to:"/"},"Overview"),r.a.createElement(u.b,{className:n.link,to:"/Spec"},"Spec Specific")))},D=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),C=function(e){var t=e.title,a=Object(n.useState)(!1),l=Object(c.a)(a,2),i=l[0],o=l[1],m=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}},s=D();return r.a.createElement(f.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(E.a,{edge:"start",className:s.menuButton,color:"inherit","aria-label":"menu",onClick:m(!0)},r.a.createElement(b.a,null)),r.a.createElement(g.a,{variant:"h6",className:s.title},t)),r.a.createElement(k,{isOpen:i,toggleDrawer:m}))},j=function(e){var t=e.title,a=e.data,n=Object(o.a)((function(e){return{box:{padding:"1rem",borderRadius:6,background:e.palette.secondary.main},title:{display:"block"}}}))();return r.a.createElement("div",{className:n.box},r.a.createElement("span",{className:n.title},t),r.a.createElement("span",null,a))},w=Object(o.a)((function(e){return{statBoxSection:{display:"grid",gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) );",justifyItems:"center",margin:"1rem"}}})),S=function(e){var t=e.data,a=e.dashboard,n=[];"overview"===a?n=[{title:"Current Footage On Hand",field:"currentFootageOnHand"},{title:"Minimum Footage On Hand",field:"minimumFootageOnHand"},{title:"Days Left In Inventory",field:"daysLeftInInventory"},{title:"Current Footage On Order",field:"currentFootageOnOrder"},{title:"Current Footage Committed",field:"currentFootageCommitted"}]:"spec"===a&&(n=[{title:"Total Material On Hand",field:"totalMatlOnHand"},{title:"Total Material $ On Order",field:"totalMatlOnOrder"},{title:"Total Material $ Committed",field:"totalMatlCommitted"}]);var l=w();return r.a.createElement("section",{id:"StatBoxes",className:l.statBoxSection},n.map((function(e){var a=0;return null===t?a=0:null!==t[e.field]&&(a=t[e.field]),r.a.createElement(j,{title:e.title,data:a})})))},N=a(17),T=Object(o.a)({chartContainer:{width:"90%",height:250,paddingBottom:30},chartTile:{color:"#fff"},lineChart:{margin:"auto"}}),x=function(e){var t=e.data,a=e.title,n=T();return null==t&&(t=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}]),r.a.createElement("div",{className:n.chartContainer},r.a.createElement("h3",{className:n.chartTile},a),r.a.createElement(N.g,null,r.a.createElement(N.f,{data:t,className:n.lineChart},r.a.createElement(N.i,{dataKey:"name",tick:{fill:"#fff"}}),r.a.createElement(N.j,{tick:{fill:"#fff"}}),r.a.createElement(N.c,{strokeDasharray:"3 3"}),r.a.createElement(N.h,null),r.a.createElement(N.d,null),r.a.createElement(N.e,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(N.e,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},P=Object(o.a)({chartContainer:{width:"90%",height:250,paddingBottom:30},chartTile:{color:"#fff"},barChart:{margin:"auto"}}),F=function(e){var t=e.data,a=e.title,n=P();return null==t&&(t=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}]),r.a.createElement("div",{className:n.chartContainer},r.a.createElement("h3",{className:n.chartTile},a),r.a.createElement(N.g,null,r.a.createElement(N.b,{data:t},r.a.createElement(N.c,{strokeDasharray:"3 3"}),r.a.createElement(N.i,{dataKey:"name",tick:{fill:"#fff"}}),r.a.createElement(N.j,{tick:{fill:"#fff"}}),r.a.createElement(N.h,null),r.a.createElement(N.d,null),r.a.createElement(N.a,{dataKey:"pv",fill:"#8884d8"}),r.a.createElement(N.a,{dataKey:"uv",fill:"#82ca9d"}))))},B=Object(o.a)({graphSection:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"center"}}),M=function(e){e.data;var t=e.dashboard,a=B(),n=[];return"overview"===t?n=[{graphType:"line",title:"Dock Schedule",field:""},{graphType:"bar",title:"Slow Moving Inventory",field:""},{graphType:"bar",title:"Growth",field:""},{graphType:"bar",title:"Decline",field:""}]:"spec"===t&&(n=[{graphType:"line",title:"Year Over Year Usage",field:""},{graphType:"line",title:"Expected Usage",field:""},{graphType:"bar",title:"Open Customer Orders",field:""}]),r.a.createElement("section",{id:"Graphs",className:a.graphSection},n.map((function(e){return"line"===e.graphType?r.a.createElement(x,{title:e.title}):"bar"===e.graphType?r.a.createElement(F,{title:e.title}):void 0})))},I=a(127),W=a.n(I),G=a(197),H=a(472),A=a(473),K=a(475),$=a(468),J=Object(o.a)((function(e){return{controlContainer:{display:""},formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}})),L=function(e){e.setData;var t=J(),a=Object(n.useState)(""),l=Object(c.a)(a,2),i=l[0],o=(l[1],Object(n.useState)(null)),m=Object(c.a)(o,2),s=m[0],u=m[1],d=Object(n.useState)(null),p=Object(c.a)(d,2),f=p[0];p[1];return Object(n.useEffect)((function(){(function(){var e=Object(G.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),r.a.createElement("section",{id:"GetData"},r.a.createElement("h2",null,"Enter Material Number"),r.a.createElement("div",{className:t.controlContainer},r.a.createElement(H.a,{className:t.formControl},r.a.createElement(A.a,{id:"materialNumInput",label:"Material #",value:i})),r.a.createElement(H.a,{className:t.formControl},r.a.createElement(K.a,{htmlFor:"stockWidth"},"Stock/Slit Width"),r.a.createElement($.a,{native:!0,value:s,onChange:function(e){u(e.target.value)},inputProps:{name:"stockWidth",id:"stockWidth"},disabled:null==f},r.a.createElement("option",{"aria-label":"None",value:""})))))},R=Object(o.a)((function(e){return{root:{}}})),U=function(e){var t=e.displayData,a=e.setDisplayData;R();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:"Spec-Specific Dashboard"}),r.a.createElement(L,{setDisplayData:a}),r.a.createElement(S,{data:t,dashboard:"spec"}),r.a.createElement(M,{data:t,dashboard:"spec"}))},Y=Object(o.a)((function(e){return{root:{}}})),q=function(e){var t=e.displayData,a=e.setDisplayData;Y();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:"Overview"}),r.a.createElement(L,{setDisplayData:a}),r.a.createElement(S,{data:t,dashboard:"overview"}),r.a.createElement(M,{data:t,dashboard:"overview"}))},z=Object(m.a)({palette:{type:"dark",primary:{main:"#731DD8"},secondary:{main:"#48A9A6"},background:{main:"#595758",dark:"#595758",light:"#E4DFDA"}}}),Q=Object(o.a)((function(e){return{root:{background:"#424242",textAlign:"center",minHeight:"100vh"}}}));var V=function(){var e=Q(),t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1];return r.a.createElement(p.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{theme:z},r.a.createElement(u.a,null,r.a.createElement(d.a,{exact:!0,path:"/Spec"},r.a.createElement(U,{displayData:l,setDisplayData:i})),r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(q,{displayData:l,setDisplayData:i}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[231,1,2]]]);
//# sourceMappingURL=main.42d7558c.chunk.js.map