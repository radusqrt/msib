(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){e.exports=t(63)},29:function(e,a,t){},30:function(e,a,t){},62:function(e,a,t){e.exports=t.p+"static/media/instructions.6219ab66.gif"},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),i=t.n(l),c=(t(29),t(30),t(4)),o=t(9),s=t.n(o),u=t(21),m=function(e){var a=e.msg;return r.a.createElement("div",{className:"alert alert-info alert-dismissible fade show",role:"alert"},a,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},d=function(e){var a=e.percentage;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(a,"%")}},a,"%"))},b=t(22),p=t.n(b),g=function(e){var a=e.callback,t=Object(n.useState)(""),l=Object(c.a)(t,2),i=l[0],o=l[1],b=Object(n.useState)("Alege fi\u0219ier"),g=Object(c.a)(b,2),E=g[0],f=g[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),k=v[0],y=v[1],w=Object(n.useState)(0),N=Object(c.a)(w,2),z=N[0],O=N[1],j=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("file",i),e.prev=3,e.next=6,p.a.post("https://msib-api.herokuapp.com/upload",n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){O(parseInt(Math.round(100*e.loaded/e.total))),setTimeout((function(){return O(0)}),1e4)}});case 6:r=e.sent,l=r.data,console.log(l),a(l),y("Recomand\u0103ri generate. Dac\u0103 dori\u021bi s\u0103 genera\u021bi din nou ap\u0103sa\u021bi '\xcencarc\u0103'!"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),a(null),500===e.t0.response.status?y("There was a problem with the server"):y(e.t0.response.data);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,k?r.a.createElement(m,{msg:k}):null,r.a.createElement("form",{onSubmit:j},r.a.createElement("div",{className:"custom-file mb-4"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){o(e.target.files[0]),f(e.target.files[0].name)}}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},E)),r.a.createElement(d,{percentage:z}),r.a.createElement("input",{type:"submit",value:"\xcencarc\u0103",className:"btn btn-primary btn-block mt-4"})))},E=t(64),f={angio:"Angiogeneza sau Antiangiogeneza",regenerare:"Regenerarea",adn:"Protec\u021bia ADN-ului",microbiom:"Microbiomul",imunitate:"Imunitatea"},h={angio:["Angiogeneza","Antiangiogeneza"],regenerare:["Regenerare"],microbiom:["Microbiom"],adn:["ADN"],imunitate:["Imunitate"]},v={backgroundColor:"lightblue"},k=function(e){var a=e.recommendation;return r.a.createElement("div",null,a?Object.keys(a).map((function(e){return r.a.createElement("div",{key:e}," ","\xa0",r.a.createElement("h4",null,"Alimente care stimuleaz\u0103: ",f[e].toLowerCase()),r.a.createElement(E.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(a[e][0]).map((function(a){return r.a.createElement("th",{key:a,style:h[e].includes(a)?v:null},a)})))),r.a.createElement("tbody",null,a[e].map((function(a){return r.a.createElement("tr",{key:JSON.stringify(a)},Object.keys(a).map((function(t){return r.a.createElement("td",{key:JSON.stringify(a)+t,style:h[e].includes(t)?v:null},a[t])})))})))))})):null)},y=t(65),w=t(66),N=t(10),z=function(e){return r.a.createElement("div",null,"\xa0",r.a.createElement(y.a,null,r.a.createElement("h1",{className:"display-3"},"Apreciere"),r.a.createElement("p",{className:"lead"},"Tot ce am f\u0103cut eu a fost s\u0103 automatizez cuno\u0219tin\u021bele ob\u021binute din cartea ",r.a.createElement("em",null,"M\u0103n\xe2nc\u0103 \u0219i \xeenvinge boala, William W. Li"),". Meritele se duc \xeen \xeentregime c\u0103tre autorul acestei c\u0103r\u021bi pe care o recomand tuturor celor care vor s\u0103 devin\u0103 mai s\u0103n\u0103to\u0219i."),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,r.a.createElement("b",null,"Aten\u021bie!")," Nu am niciun studiu \xeen vreun domeniu medical \u0219i nici nu presupun c\u0103 aceasta este o diet\u0103 ",r.a.createElement("em",null,"minune"),". Interesa\u021bi-v\u0103 cu seriozitate \xeenainte de a v\u0103 schimba stilul de via\u021b\u0103! ",r.a.createElement("br",null),"Dac\u0103 ave\u021bi feedback \u0219i dori\u021bi s\u0103 m\u0103 contacta\u021bi, l\u0103sa\u021bi-mi un e-mail la adresa ",r.a.createElement("b",null,"radu.stochitoiu@gmail.com")," sau un mesaj pe re\u021belele de socializare.",r.a.createElement(N.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"3",borderStyle:"solid",icon:"facebook",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(34,200,237,1)",iconSize:"5",roundness:"26%",url:"https://www.facebook.com/radu.stochitoiu",size:"40"})," ",r.a.createElement(N.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"4",borderStyle:"solid",icon:"instagram",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(237,34,98,0.93)",iconSize:"3",roundness:"26%",url:"https://instagram.com/radusqrt",size:"40"})),r.a.createElement("p",{className:"lead"},r.a.createElement(w.a,{color:"primary",onClick:function(){window.open("https://www.goodreads.com/book/show/40697523-eat-to-beat-disease?from_search=true&from_srp=true&qid=KpGkbdzeyG&rank=1","_blank")}},"Vezi cartea pe Goodreads"))))},O=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),l=a[0],i=a[1];return r.a.createElement("div",null,r.a.createElement("h4",null,"Pentru a v\u0103 genera un set aleatoriu de alimente care v\u0103 plac \u0219i care stimuleaz\u0103 to\u021bi cei cinci st\xe2lpi ai s\u0103n\u0103t\u0103\u021bii (angiogeneza, regenerarea, microbiomul, protec\u021bia ADN-ului \u0219i imunitatea), desc\u0103rca\u021bi tabelul de"," ",r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/14A7PC1KYCFOYDbQ4iNCT7IO6pR-T4zQSVe8Uo7EgxYE/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"aici")," ","sub format ",r.a.createElement("b",null,".xlsx")," sau ",r.a.createElement("b",null,".csv"),", marca\u021bi cu ",r.a.createElement("b",null,"DA")," pe coloana"," ",r.a.createElement("b",null,"Iti place")," doar alimentele care v\u0103 plac \u0219i \xeenc\u0103rca\u021bi-l folosind formularul de mai jos."),"\xa0",r.a.createElement(g,{callback:i}),"\xa0",r.a.createElement("h4",null,"Instruc\u021biuni de utilizare"),l?null:r.a.createElement("img",{src:t(62),alt:"loading...",style:{width:"100%"}}),r.a.createElement(k,{recommendation:l}),r.a.createElement(z,null))},j=function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h4",{className:"display-4 text-center mb-4"},"M\u0103n\xe2nc\u0103 \u0219i \xeenvinge boala - Generator"),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.afe2c67f.chunk.js.map