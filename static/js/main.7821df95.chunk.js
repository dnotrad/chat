(this["webpackJsonpfirebase-react-test"]=this["webpackJsonpfirebase-react-test"]||[]).push([[0],{16:function(e,t,a){e.exports={messageBlock:"Message_messageBlock__utJZM",mine:"Message_mine__iiOk3",inner:"Message_inner__225oS",reverse:"Message_reverse__2JLTd",message:"Message_message__1vAGJ",author:"Message_author__2TXa-"}},24:function(e,t,a){e.exports={chat:"Chat_chat__x04Bp",header:"Chat_header__1C0rL",exit:"Chat_exit__2GGOj"}},25:function(e,t,a){e.exports={footer:"Footer_footer__324hG",form:"Footer_form__WgY_f",input:"Footer_input__3d9MR",button:"Footer_button__2CRvI"}},36:function(e,t,a){e.exports={position:"Loader_position__N8BIn",lds_ellipsis:"Loader_lds_ellipsis__1iJi9","lds-ellipsis1":"Loader_lds-ellipsis1__27YTn","lds-ellipsis2":"Loader_lds-ellipsis2__RsNal","lds-ellipsis3":"Loader_lds-ellipsis3__BlnwX"}},4:function(e,t,a){e.exports={auth:"Auth_auth__2y4GR",form:"Auth_form__33eMm",title:"Auth_title__2aWY8",inputTitle:"Auth_inputTitle__3CdyK",input:"Auth_input__2-oVn",button:"Auth_button__3DF7T",log:"Auth_log__3Ytqi",reg:"Auth_reg__2n3nC",modal:"Auth_modal__Rro9I",modal__inner:"Auth_modal__inner__208cL",close:"Auth_close__1Oels",modal__title:"Auth_modal__title__T5iSy"}},41:function(e,t,a){e.exports={messages:"Messages_messages__3RwPP",counter:"Messages_counter__20fVS"}},49:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(1),c=a(28),r=a.n(c),i=(a(49),a(10)),u=a(7),o=a(34);a(59);o.a.initializeApp({apiKey:"AIzaSyA3mE1pxhOx_PNYUXE2q1qLJFNRd9WlgS0",authDomain:"chat-reac.firebaseapp.com",databaseURL:"https://chat-reac-default-rtdb.firebaseio.com",projectId:"chat-reac",storageBucket:"chat-reac.appspot.com",messagingSenderId:"808761910304",appId:"1:808761910304:web:e2370427ffa838fe0bc845"});var l=o.a,d=(a(27),a(20)),j=a(43),m=a(26),b=a(31),h="UPDATE-MESSAGES",_="UPDATE-CURRENT-USER",p={messages:[],currentUser:{}},O=Object(b.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)(Object(m.a)({},e),{},{messages:Object(j.a)(t.messages)});case _:return Object(m.a)(Object(m.a)({},e),{},{currentUser:{uid:t.uid}});default:return e}}));window.store=O;var f=O,x=a(24),g=a.n(x),v=function(e){return Object(s.jsx)("div",{className:g.a.header,children:Object(s.jsx)("button",{onClick:e.logOut,className:g.a.exit,children:"\u0412\u044b\u0439\u0442\u0438"})})},N=a(41),I=a.n(N),S=a(16),E=a.n(S),A=function(e){return Object(s.jsx)("div",{className:"".concat(E.a.messageBlock," ").concat(e.userId===e.currentUserId?"".concat(E.a.mine):""),children:Object(s.jsxs)("div",{className:"".concat(E.a.inner," ").concat(e.userId===e.currentUserId?"".concat(E.a.reverse):""),children:[Object(s.jsx)("div",{className:"".concat(E.a.author," ").concat(e.userId===e.currentUserId?"".concat(E.a.mine):""),children:e.userEmail[0]}),Object(s.jsx)("div",{className:"".concat(E.a.message," ").concat(e.userId===e.currentUserId?"".concat(E.a.mine):""),children:e.message})]})})},C=a(36),U=a.n(C),y=function(){return Object(s.jsx)("div",{className:U.a.position,children:Object(s.jsxs)("div",{className:U.a.lds_ellipsis,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})},T=l.firestore(),w=Object(d.b)((function(e){return{messages:e.messages,id:e.currentUser.uid}}),{updateMessages:function(e){return{type:h,messages:e}}})((function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){var t=T.collection("messages").orderBy("date","asc").limitToLast(15).onSnapshot((function(t){var a=[];t.forEach((function(e){return a.push({userId:e.data().userId,message:e.data().message,userEmail:e.data().userEmail,mesId:e.data().date.seconds})})),e.updateMessages(a),r(!1)}));return function(){t()}}),[]);var u=Object(n.useRef)(null);return u.current&&setTimeout((function(){u.current.scrollTop=u.current.scrollHeight}),1),Object(s.jsx)("div",{className:I.a.messages,ref:u,children:c?Object(s.jsx)(y,{}):e.messages.map((function(t){return Object(s.jsx)(A,{userId:t.userId,message:t.message,currentUserId:e.id,userEmail:t.userEmail},t.mesId)}))})})),M=a(25),k=a.n(M),R=a.p+"static/media/mail.607ad05e.svg",L=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(s.jsx)("div",{className:k.a.footer,children:Object(s.jsxs)("form",{onSubmit:function(t){return function(t,a){t.preventDefault(),a&&(T.collection("messages").add({userEmail:e.userEmail,message:a,userId:e.uid,date:new Date}),r(""))}(t,c)},className:k.a.form,children:[Object(s.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},className:k.a.input,type:"text"}),Object(s.jsx)("button",{className:k.a.button,children:Object(s.jsx)("img",{src:R,alt:""})})]})})},B=Object(d.b)((function(e){return{id:e.currentUser.uid}}),{updateCurrentUser:function(e){return{type:_,uid:e}}})((function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),d=Object(i.a)(o,2),j=d[0],m=d[1];Object(n.useEffect)((function(){l.auth().onAuthStateChanged((function(t){t&&t.emailVerified?m(!1):m(!0),e.updateCurrentUser(t.uid),r(t.email)}))}),[]);return j?Object(s.jsx)(u.a,{to:"auth"}):Object(s.jsxs)("div",{className:g.a.chat,children:[Object(s.jsx)(v,{logOut:function(){l.auth().signOut()}}),Object(s.jsx)(w,{}),Object(s.jsx)(L,{uid:e.id,userEmail:c})]})})),D=a(17),F=a(4),J=a.n(F),P=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),j=d[0],m=d[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),_=h[0],p=h[1];return _?Object(s.jsx)(u.a,{to:"/"}):Object(s.jsxs)("div",{className:J.a.auth,children:[Object(s.jsx)("div",{className:J.a.title,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442"}),Object(s.jsxs)("form",{onSubmit:function(e){return function(e,t,a){e.preventDefault(),l.auth().signInWithEmailAndPassword(t.trim(),a.trim()).then((function(e){var t=e.user;t&&t.emailVerified?p(!0):alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430 \u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430!")})).catch((function(e){alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u043f\u043e\u0447\u0442\u0430 \u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430!")}))}(e,c,j)},className:J.a.form,children:[Object(s.jsxs)("div",{className:J.a.inputs,children:[Object(s.jsx)("div",{className:J.a.inputTitle,children:"e-mail"}),Object(s.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 e-mail",value:c,onChange:function(e){return r(e.target.value)},className:J.a.input}),Object(s.jsx)("div",{className:J.a.inputTitle,children:"\u043f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{type:"password",placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:j,onChange:function(e){return m(e.target.value)},className:J.a.input})]}),Object(s.jsx)("button",{className:"".concat(J.a.button," ").concat(J.a.log),children:"\u0412\u043e\u0439\u0442\u0438"}),Object(s.jsx)(D.b,{to:"registr",className:"".concat(J.a.button," ").concat(J.a.reg),children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})},G=a(39),V=a.n(G),W=a(42),Y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),o=u[0],d=u[1],j=Object(n.useState)(""),m=Object(i.a)(j,2),b=m[0],h=m[1];function _(){return(_=Object(W.a)(V.a.mark((function e(t,a,s){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l.auth().createUserWithEmailAndPassword(a,s).then((function(e){e.user.sendEmailVerification().then((function(){c(!0),console.log("emal sent")})).catch((function(e){alert(e)}))}));case 4:e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),alert(e.t0.message),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:J.a.auth,children:[a&&Object(s.jsx)("div",{className:J.a.modal,children:Object(s.jsxs)("div",{className:J.a.modal__inner,children:[Object(s.jsx)("button",{onClick:function(){return c(!1)},className:J.a.close,children:"X"}),Object(s.jsxs)("div",{className:J.a.modal__title,children:["\u041d\u0430 ",o," \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e!",Object(s.jsx)("br",{}),"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0432 \u043f\u0438\u0441\u044c\u043c\u0435 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c :)",Object(s.jsx)("br",{}),"*\u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043f\u0430\u043c, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u043d\u043e \u0442\u0430\u043c"]})]})}),Object(s.jsx)("div",{className:J.a.title,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(s.jsxs)("form",{onSubmit:function(e){return function(e,t,a){return _.apply(this,arguments)}(e,o,b)},className:J.a.form,children:[Object(s.jsxs)("div",{className:J.a.inputs,children:[Object(s.jsx)("div",{className:J.a.inputTitle,children:"e-mail"}),Object(s.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 e-mail",value:o,onChange:function(e){return d(e.target.value.trim())},className:J.a.input}),Object(s.jsx)("div",{className:J.a.inputTitle,children:"\u043f\u0430\u0440\u043e\u043b\u044c"}),Object(s.jsx)("input",{type:"password",placeholder:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:b,onChange:function(e){return h(e.target.value.trim())},className:J.a.input})]}),Object(s.jsx)("button",{className:"".concat(J.a.button," ").concat(J.a.log),children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(s.jsx)(D.b,{to:"/auth",className:"".concat(J.a.button," ").concat(J.a.log),children:"\u0412\u043e\u0439\u0442\u0438"}),Object(s.jsx)("button",{type:"button",className:"".concat(J.a.button," ").concat(J.a.reg),onClick:function(){var e=l.auth().currentUser;e&&e.sendEmailVerification().then((function(){return c(!0)}))},children:"\u041f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e"})]})]})})},X=function(e){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u.b,{path:"/auth",component:P}),Object(s.jsx)(u.b,{path:"/registr",component:Y}),Object(s.jsx)(u.b,{path:"/",component:B})]})};r.a.render(Object(s.jsx)(D.a,{children:Object(s.jsx)(d.a,{store:f,children:Object(s.jsx)(X,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.7821df95.chunk.js.map