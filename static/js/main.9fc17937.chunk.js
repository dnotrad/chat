(this["webpackJsonpfirebase-react-test"]=this["webpackJsonpfirebase-react-test"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(5),r=n(13),s=n.n(r),i=(n(19),n(11)),o=(n(20),n(10));n(23);o.a.initializeApp({apiKey:"AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",authDomain:"chat-reac.firebaseapp.com",databaseURL:"https://chat-reac-default-rtdb.firebaseio.com",projectId:"chat-reac",storageBucket:"chat-reac.appspot.com",messagingSenderId:"808761910304",appId:"1:808761910304:web:e2370427ffa838fe0bc845"});var u=o.a.firestore();var f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(i.a)(s,2),f=o[0],p=o[1];return Object(c.useEffect)((function(){var e=u.collection("messages").orderBy("id","asc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data().message)})),p(t)}));return function(){return e()}}),[]),Object(c.useEffect)((function(){console.log(f)}),[f]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("input",{value:n,type:"text",onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){return e=n,void u.collection("messages").add({message:e,id:f.length});var e},children:"ADD mes"}),f.map((function(e){return Object(a.jsx)("div",{children:e})}))]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(f,{}),document.getElementById("root")),p()}},[[22,1,2]]]);
//# sourceMappingURL=main.9fc17937.chunk.js.map