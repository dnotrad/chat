(this["webpackJsonpfirebase-react-test"]=this["webpackJsonpfirebase-react-test"]||[]).push([[0],{11:function(e,t,s){e.exports={footer:"Footer_footer__324hG",form:"Footer_form__WgY_f",input:"Footer_input__3d9MR",button:"Footer_button__2CRvI"}},13:function(e,t,s){e.exports={chat:"Chat_chat__x04Bp",header:"Chat_header__1C0rL"}},24:function(e,t,s){e.exports={messages:"Messages_messages__3RwPP"}},25:function(e,t,s){e.exports={message:"Message_message__1vAGJ"}},33:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(1),r=s(12),c=s.n(r),o=(s(33),s(13)),i=s.n(o),u=function(){return Object(a.jsx)("div",{className:i.a.header})},d=s(19);s(41);d.a.initializeApp({apiKey:"AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",authDomain:"chat-reac.firebaseapp.com",databaseURL:"https://chat-reac-default-rtdb.firebaseio.com",projectId:"chat-reac",storageBucket:"chat-reac.appspot.com",messagingSenderId:"808761910304",appId:"1:808761910304:web:e2370427ffa838fe0bc845"});var m=d.a,f=s(9),b=s(26),g=s(22),j=s(14),h="UPDATE-MESSAGES",p={messages:[],currentUser:{id:2,userPhoto:""}},l=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(g.a)(Object(g.a)({},e),{},{messages:Object(b.a)(t.messages)});default:return e}}));window.store=l;var O=l,_=s(24),x=s.n(_),v=s(25),I=s.n(v),N=function(e){return Object(a.jsx)("div",{className:I.a.message,children:e.message})},S=m.firestore(),E=Object(f.b)((function(e){return{messages:e.messages}}),{updateMessages:function(e){return{type:h,messages:e}}})((function(e){return console.log(e.messages),Object(n.useEffect)((function(){var t=S.collection("messages").orderBy("id","asc").onSnapshot((function(t){var s=[];t.forEach((function(e){return s.push({userId:e.data().userId,message:e.data().message,id:e.data().id})})),e.updateMessages(s)}));return function(){return t()}}),[]),Object(a.jsx)("div",{className:x.a.messages,children:e.messages.map((function(e){return Object(a.jsx)(N,{message:e.message})}))})})),w=s(27),y=s(11),A=s.n(y),M=s.p+"static/media/mail.2abf58c6.svg",C=Object(f.b)((function(e){return{messageLength:e.messages.length,userId:e.currentUser.id}}))((function(e){var t=Object(n.useState)(""),s=Object(w.a)(t,2),r=s[0],c=s[1];return Object(a.jsx)("div",{className:A.a.footer,children:Object(a.jsxs)("form",{onSubmit:function(t){return function(t,s){t.preventDefault(),s&&S.collection("messages").add({message:s,id:e.messageLength,userId:e.userId}).then((function(){c("")}))}(t,r)},className:A.a.form,children:[Object(a.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)},className:A.a.input,type:"text"}),Object(a.jsx)("button",{className:A.a.button,children:Object(a.jsx)("img",{src:M,alt:""})})]})})})),F=function(){return Object(a.jsxs)("div",{className:i.a.chat,children:[Object(a.jsx)(u,{}),Object(a.jsx)(E,{}),Object(a.jsx)(C,{})]})},L=function(e){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(F,{})})};c.a.render(Object(a.jsx)(f.a,{store:O,children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.47b8aa6f.chunk.js.map