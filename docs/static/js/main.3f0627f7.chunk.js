(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(7),s=n.n(i),u=(n(16),n(2)),j=n(9),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),a=Object(u.a)(n,2),i=a[0],s=a[1];return Object(c.jsx)("section",{children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&t((function(e){return[i].concat(Object(j.a)(e))})),s("")},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)}})})})},l=n(10),d=n(6),f=n.n(d),b=n(8),p=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,c,r,a,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Tgk3m9g3lF2HZVQztaVvytmkSJiGiTSF"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.original.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c},h=function(e){var t=e.title,n=e.url;return Object(c.jsxs)("article",{className:"card vov fade-in-down",children:[Object(c.jsx)("figure",{className:"figure ",children:Object(c.jsx)("img",{className:"figure__img",src:n,alt:t})}),Object(c.jsx)("p",{className:"card_p",children:t})]})},x=function(e){var t=e.category,n=O(t),r=n.data,a=n.loading;return Object(c.jsxs)("section",{className:"card-grid",children:[Object(c.jsx)("h3",{className:"card--one vov fade-in-left",children:t}),a&&Object(c.jsx)("p",{className:"vov flash",children:"Loading"}),r.map((function(e){return Object(c.jsx)(h,Object(l.a)({},e),e.id)}))]})},g=function(){var e=Object(r.useState)(["Black Clover"]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Gif Expert App"}),Object(c.jsx)(o,{setCategories:a}),Object(c.jsx)("hr",{})]}),n.map((function(e){return Object(c.jsx)(x,{category:e},e)}))]})},m=function(){return Object(c.jsx)("main",{children:Object(c.jsx)(g,{})})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f0627f7.chunk.js.map