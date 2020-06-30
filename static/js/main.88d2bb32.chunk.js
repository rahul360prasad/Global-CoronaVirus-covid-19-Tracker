(this.webpackJsonpcovid19_project=this.webpackJsonpcovid19_project||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__aeBSo",card:"Cards_card__1n02C",infected:"Cards_infected__2yOq1",recovered:"Cards_recovered__3nE4u",deaths:"Cards_deaths__3werw"}},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(74),c=a.n(o),l=(a(93),a(6)),s=a.n(l),i=a(10),u=a(75),d=a(76),m=a(85),f=a(84),p=a(45),v=a.n(p),b=a(227),h=a(231),g=a(228),C=a(229),E=a(13),y=a.n(E),_=a(32),x=a.n(_),w=a(33),O=a.n(w),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,o=t.deaths,c=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(b.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(b.a,{item:!0,component:h.a,xs:12,md:3,className:O()(y.a.card,y.a.infected)},r.a.createElement(g.a,null,r.a.createElement(C.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(C.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(C.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(C.a,{variant:"body2"},"Number of Infected cases of COVID-19"))),r.a.createElement(b.a,{item:!0,component:h.a,xs:12,md:3,className:O()(y.a.card,y.a.recovered)},r.a.createElement(g.a,null,r.a.createElement(C.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(C.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(C.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(C.a,{variant:"body2"},"Number of Recovered cases from COVID-19"))),r.a.createElement(b.a,{item:!0,component:h.a,xs:12,md:3,className:O()(y.a.card,y.a.deaths)},r.a.createElement(g.a,null,r.a.createElement(C.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(C.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(C.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(C.a,{variant:"body2"},"Number of Deaths cases by COVID-19"))))):"Loading...."},j=a(31),D=a(34),S=a.n(D),N="https://covid19.mathdro.id/api",I=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,o,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,o=r.confirmed,c=r.recovered,l=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:o,recovered:c,deaths:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,recovered:e.recovered.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(35),V=a(47),W=a.n(V),J=function(e){var t=e.data,a=t.confirmed,o=t.recovered,c=t.deaths,l=(t.fetchedCountries,e.country),u=Object(n.useState)([]),d=Object(j.a)(u,2),m=d[0],f=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(m),e()}),[m]);var p=m.length?r.a.createElement(B.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb( 0, 0, 255)",backgroundColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:m.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgb( 0, 255, 0)",backgroundColor:"rgb( 0, 255, 0, 0.2)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb( 255, 0, 0)",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{legend:{display:!0},title:{display:!0,text:"Status of COVID-19 All Over the World",fontColor:"black"},maintainAspectRatio:!1,responsive:!0}}):null,v=m.length?r.a.createElement(B.a,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb( 0, 0, 255)",backgroundColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:m.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgb( 0, 255, 0)",backgroundColor:"rgb( 0, 255, 0, 0.2)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb( 255, 0, 0)",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{legend:{display:!0},title:{display:!0,text:"Status of COVID-19 All Over the World",fontColor:"black"},maintainAspectRatio:!1,responsive:!0}}):null,b=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.6)","rgba(0, 255, 0, 0.6)","rgba(255, 0, 0, 0.6)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current Status in ".concat(l),fontColor:"black"},maintainAspectRatio:!1,responsive:!0}}):null;return r.a.createElement("div",{className:W.a.container},l?b:p,r.a.createElement("div",{className:W.a.container1},l?p:v))},P=a(232),U=a(230),K=a(82),M=a.n(K),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),o=Object(j.a)(a,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(P.a,{className:M.a.formControl},r.a.createElement(U.a,{defaultValue:" ",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},F=a(83),G=a.n(F),H=a(48),L=a.n(H),$=function(){return r.a.createElement("footer",{className:L.a.container},r.a.createElement("div",{className:L.a.footer},r.a.createElement("h6",null,"-- Created By Rahul Prasad --")))},z=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement($,null),r.a.createElement("img",{className:v.a.image,src:G.a,alt:"COVID-19"}),r.a.createElement(k,{data:t}),r.a.createElement(q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(J,{data:t,country:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,a){e.exports={container:"App_container__3uBN7",image:"App_image__1b6VH"}},47:function(e,t,a){e.exports={container:"Charts_container__38rCK",container1:"Charts_container1__3_RdI"}},48:function(e,t,a){e.exports={container:"Footerbar_container__15-sS"}},82:function(e,t,a){e.exports={formControl:"CountryPickers_formControl__2nKJb"}},83:function(e,t,a){e.exports=a.p+"static/media/img1.2a92a6c4.png"},88:function(e,t,a){e.exports=a(209)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.88d2bb32.chunk.js.map