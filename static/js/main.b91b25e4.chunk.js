(this["webpackJsonpfirebase-react-test"]=this["webpackJsonpfirebase-react-test"]||[]).push([[0],{21:function(e,t,n){e.exports={footer:"Footer_footer__324hG",form:"Footer_form__WgY_f",input:"Footer_input__3d9MR",button:"Footer_button__2CRvI"}},25:function(e,t,n){e.exports={chat:"Chat_chat__x04Bp",header:"Chat_header__1C0rL"}},38:function(e,t,n){e.exports={messages:"Messages_messages__3RwPP"}},39:function(e,t,n){e.exports={message:"Message_message__1vAGJ"}},47:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(1),c=n(22),r=n.n(c),o=(n(47),n(25)),u=n.n(o),i=function(){return Object(s.jsx)("div",{className:u.a.header})},l=n(30);n(57);l.a.initializeApp({apiKey:"AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",authDomain:"chat-reac.firebaseapp.com",databaseURL:"https://chat-reac-default-rtdb.firebaseio.com",projectId:"chat-reac",storageBucket:"chat-reac.appspot.com",messagingSenderId:"808761910304",appId:"1:808761910304:web:e2370427ffa838fe0bc845"});var d=l.a,j=n(16),f=n(41),b=n(35),h=n(26),m="UPDATE-MESSAGES",p={messages:[],currentUser:{id:2,userPhoto:""}},g=Object(h.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{messages:Object(f.a)(t.messages)});default:return e}}));window.store=g;var O=g,x=n(38),v=n.n(x),_=n(39),S=n.n(_),w=function(e){return Object(s.jsx)("div",{className:S.a.message,children:e.message})},y=d.firestore(),E=Object(j.b)((function(e){return{messages:e.messages}}),{updateMessages:function(e){return{type:m,messages:e}}})((function(e){return console.log(e.messages),Object(a.useEffect)((function(){var t=y.collection("messages").orderBy("id","asc").onSnapshot((function(t){var n=[];t.forEach((function(e){return n.push({userId:e.data().userId,message:e.data().message,id:e.data().id})})),e.updateMessages(n)}));return function(){return t()}}),[]),Object(s.jsx)("div",{className:v.a.messages,children:e.messages.map((function(e){return Object(s.jsx)(w,{message:e.message})}))})})),I=n(17),N=n(21),A=n.n(N),C=n.p+"static/media/mail.2abf58c6.svg",P=Object(j.b)((function(e){return{messageLength:e.messages.length,userId:e.currentUser.id}}))((function(e){var t=Object(a.useState)(""),n=Object(I.a)(t,2),c=n[0],r=n[1];return Object(s.jsx)("div",{className:A.a.footer,children:Object(s.jsxs)("form",{onSubmit:function(t){return function(t,n){t.preventDefault(),n&&y.collection("messages").add({message:n,id:e.messageLength,userId:e.userId}).then((function(){r("")}))}(t,c)},className:A.a.form,children:[Object(s.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},className:A.a.input,type:"text"}),Object(s.jsx)("button",{className:A.a.button,children:Object(s.jsx)("img",{src:C,alt:""})})]})})})),U=function(){return Object(s.jsxs)("div",{className:u.a.chat,children:[Object(s.jsx)(i,{}),Object(s.jsx)(E,{}),Object(s.jsx)(P,{})]})},F=n(32),M=n.n(F),k=n(40),D=n(6),L=(n(36),function(){var e=Object(a.useState)(!1),t=Object(I.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(I.a)(r,2),u=o[0],i=o[1],l=Object(a.useState)(""),j=Object(I.a)(l,2),f=j[0],b=j[1];function h(){return(h=Object(k.a)(M.a.mark((function e(t,n,s){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.auth().createUserWithEmailAndPassword(n,s);case 4:e.sent,d.auth().currentUser.sendEmailVerification().then((function(){console.log("emal sent")})).catch((function(e){console.log("bad")})),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}Object(a.useEffect)((function(){d.auth().onAuthStateChanged((function(e){e.emailVerified?(console.log("user login"+e.uid),c(!0)):console.log("user should verify email")}))}),[]);return n?Object(s.jsx)(D.a,{to:"/chat"}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:function(e){return function(e,t,n){return h.apply(this,arguments)}(e,u,f)},children:[Object(s.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 e-mail",value:u,onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("input",{type:"password",placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:f,onChange:function(e){return b(e.target.value)}}),Object(s.jsx)("button",{children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(s.jsxs)("form",{onSubmit:function(e){return function(e,t,n){e.preventDefault(),d.auth().signInWithEmailAndPassword(t,n)}(e,u,f)},children:[Object(s.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 e-mail",value:u,onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("input",{type:"password",placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:f,onChange:function(e){return b(e.target.value)}}),Object(s.jsx)("button",{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}),R=function(e){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(D.b,{exact:!0,path:"/",component:L}),Object(s.jsx)(D.b,{path:"/chat",component:U})]})},B=n(24);r.a.render(Object(s.jsx)(B.a,{children:Object(s.jsx)(j.a,{store:O,children:Object(s.jsx)(R,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b91b25e4.chunk.js.map