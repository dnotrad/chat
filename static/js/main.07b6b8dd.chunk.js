(this["webpackJsonpfirebase-react-test"]=this["webpackJsonpfirebase-react-test"]||[]).push([[0],{21:function(e,t,s){e.exports={footer:"Footer_footer__324hG",form:"Footer_form__WgY_f",input:"Footer_input__3d9MR",button:"Footer_button__2CRvI"}},24:function(e,t,s){e.exports={chat:"Chat_chat__x04Bp",header:"Chat_header__1C0rL"}},38:function(e,t,s){e.exports={messages:"Messages_messages__3RwPP"}},39:function(e,t,s){e.exports={message:"Message_message__1vAGJ"}},47:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s(1),r=s(22),c=s.n(r),o=(s(47),s(24)),u=s.n(o),i=function(){return Object(a.jsx)("div",{className:u.a.header})},d=s(30);s(57);d.a.initializeApp({apiKey:"AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",authDomain:"chat-reac.firebaseapp.com",databaseURL:"https://chat-reac-default-rtdb.firebaseio.com",projectId:"chat-reac",storageBucket:"chat-reac.appspot.com",messagingSenderId:"808761910304",appId:"1:808761910304:web:e2370427ffa838fe0bc845"});var l=d.a,f=s(16),j=s(41),b=s(35),h=s(25),m="UPDATE-MESSAGES",p={messages:[],currentUser:{id:2,userPhoto:""}},g=Object(h.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{messages:Object(j.a)(t.messages)});default:return e}}));window.store=g;var O=g,x=s(38),v=s.n(x),_=s(39),S=s.n(_),w=function(e){return Object(a.jsx)("div",{className:S.a.message,children:e.message})},y=l.firestore(),I=Object(f.b)((function(e){return{messages:e.messages}}),{updateMessages:function(e){return{type:m,messages:e}}})((function(e){return console.log(e.messages),Object(n.useEffect)((function(){var t=y.collection("messages").orderBy("id","asc").onSnapshot((function(t){var s=[];t.forEach((function(e){return s.push({userId:e.data().userId,message:e.data().message,id:e.data().id})})),e.updateMessages(s)}));return function(){return t()}}),[]),Object(a.jsx)("div",{className:v.a.messages,children:e.messages.map((function(e){return Object(a.jsx)(w,{message:e.message})}))})})),N=s(20),E=s(21),A=s.n(E),C=s.p+"static/media/mail.2abf58c6.svg",U=Object(f.b)((function(e){return{messageLength:e.messages.length,userId:e.currentUser.id}}))((function(e){var t=Object(n.useState)(""),s=Object(N.a)(t,2),r=s[0],c=s[1];return Object(a.jsx)("div",{className:A.a.footer,children:Object(a.jsxs)("form",{onSubmit:function(t){return function(t,s){t.preventDefault(),s&&y.collection("messages").add({message:s,id:e.messageLength,userId:e.userId}).then((function(){c("")}))}(t,r)},className:A.a.form,children:[Object(a.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)},className:A.a.input,type:"text"}),Object(a.jsx)("button",{className:A.a.button,children:Object(a.jsx)("img",{src:C,alt:""})})]})})})),M=function(){return Object(a.jsxs)("div",{className:u.a.chat,children:[Object(a.jsx)(i,{}),Object(a.jsx)(I,{}),Object(a.jsx)(U,{})]})},P=s(32),k=s.n(P),F=s(40),L=(s(36),function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),s=t[0],r=t[1],c=Object(n.useState)(""),o=Object(N.a)(c,2),u=o[0],i=o[1],d=l.auth().currentUser;function f(){return(f=Object(F.a)(k.a.mark((function e(t,s,a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l.auth().createUserWithEmailAndPassword(s,a);case 4:n=e.sent,d.sendEmailVerification().then((function(){console.log("emal sent")})).catch((function(e){console.log("bad")})),console.log(n.user.uid,n.user.emailVerified),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsxs)("form",{onSubmit:function(e){return function(e,t,s){return f.apply(this,arguments)}(e,s,u)},children:[Object(a.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 e-mail",value:s,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("input",{type:"password",placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("button",{children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),R=s(6),B=function(e){return l.auth().onAuthStateChanged((function(e){if(!e)return Object(a.jsx)(R.a,{to:"/registr"})})),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(R.d,{children:[Object(a.jsx)(R.b,{path:"/registr",component:L}),Object(a.jsx)(R.b,{path:"/",component:M})]})})},D=s(29);c.a.render(Object(a.jsx)(D.a,{children:Object(a.jsx)(f.a,{store:O,children:Object(a.jsx)(B,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.07b6b8dd.chunk.js.map