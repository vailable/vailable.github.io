(this.webpackJsonpvailable=this.webpackJsonpvailable||[]).push([[0],{135:function(e,a,t){e.exports=t(148)},148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),i=t.n(c),l=t(67),o=t(211),s=t(119),u=t(212),m=t(213),d=t(21),p=t(92),E=t.n(p),h=t(93),v=t.n(h),f=t(110),g=t(84),b=t(85),w=t(120),y=t(121),j=t(203),C=t(210),O=t(152),k=t(202),x=t(206),D=t(209),I=t(207),R=t(208),S=t(216),U=t(217),z=t(117),N=t.n(z),B=t(118),H=t.n(B),L=t(20),W=t(29);function A(e){var a=e.name,t=e.open,c=e.close,i=e.setName,l=Object(n.useRef)();return r.a.createElement(x.a,{open:t,onClose:c},r.a.createElement(D.a,null,"Calendar Name"),r.a.createElement(I.a,null,r.a.createElement(S.a,{autoFocus:!0,type:"text",inputRef:l,defaultValue:a})),r.a.createElement(R.a,null,r.a.createElement(k.a,{onClick:c},"Cancel"),r.a.createElement(k.a,{onClick:function(){i(l.current.value),c()}},"Okay")))}function J(e){var a=e.message,t=e.open,n=e.close;return r.a.createElement(U.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,autoHideDuration:3e3,onClose:n,message:a})}function P(e){var a=e.data,t=e.setData;return r.a.createElement(W.j,{data:a.a},r.a.createElement(L.k,{onCommitChanges:function(e){var n=e.added,r=e.changed,c=e.deleted;if(n){var i=a.a.length>0?a.a[a.a.length-1].id+1:0;a.a=[].concat(Object(w.a)(a.a),[Object(b.a)({id:i},n)])}r&&(a.a=a.a.map((function(e){return r[e.id]?Object(b.a)(Object(b.a)({},e),r[e.id]):e}))),void 0!==c&&(a.a=a.a.filter((function(e){return e.id!==c}))),t(a)}}),r.a.createElement(L.r,null),r.a.createElement(W.i,null),r.a.createElement(W.n,{startDayHour:7.5,endDayHour:22.5}),r.a.createElement(W.f,{startDayHour:7.5,endDayHour:22.5}),r.a.createElement(W.l,null),r.a.createElement(W.e,null),r.a.createElement(W.k,null),r.a.createElement(W.m,null),r.a.createElement(W.c,null),r.a.createElement(W.h,null),r.a.createElement(W.g,null),r.a.createElement(W.d,{shadePreviousAppointments:!0,shadePreviousCells:!0}),r.a.createElement(W.b,{showOpenButton:!0,showDeleteButton:!0,showCloseButton:!0}),r.a.createElement(W.a,{onVisibilityChange:function(e){e&&window.scroll({top:0,left:0,behavior:"auto"})}}))}var V=function(e){var a=e.data,t=e.setData,c=Object(n.useState)(!1),i=Object(g.a)(c,2),l=i[0],o=i[1],s=Object(n.useState)(!1),u=Object(g.a)(s,2),m=u[0],p=u[1],E=Object(n.useState)("Link copied! Paste it in a message or email to share"),h=Object(g.a)(E,2),b=h[0],w=h[1],x=Object(d.e)(),D=Object(d.d)();return r.a.createElement(C.a,{disableGutters:!0},r.a.createElement(A,{name:a.n,open:l,close:function(){return o(!1)},setName:function(e){a.n=e,t(a)}}),r.a.createElement(J,{message:b,open:m,close:function(){return p(!1)}}),r.a.createElement(y.a,null,r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{item:!0,xs:12,container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{paddingTop:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"},spacing:2},r.a.createElement(j.a,{item:!0,xs:12,container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1},r.a.createElement(j.a,{item:!0},r.a.createElement(N.a,{fontSize:"large"})),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{variant:"h5",noWrap:!0},"Vailable")),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{variant:"caption",noWrap:!0},"Easy Calendar Sharing"))),r.a.createElement(j.a,{item:!0,xs:12,container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1},r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{noWrap:!0},"Directions: Double tap on the calendar to add an event"))),r.a.createElement(j.a,{item:!0,xs:12,container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},r.a.createElement(j.a,{item:!0},r.a.createElement(k.a,{size:"large",onClick:function(){return o(!0)}},a.n||"Unnamed Calendar")),r.a.createElement(j.a,{item:!0},r.a.createElement(O.a,{variant:"caption",noWrap:!0},"last edited ",(null===a||void 0===a?void 0:a.l)||"never"))),r.a.createElement(j.a,{item:!0,xs:12,container:!0,direction:"row",justify:"flex-end",alignItems:"center",spacing:1},r.a.createElement(j.a,{item:!0},r.a.createElement(k.a,{size:"medium",variant:"outlined",onClick:function(){return t({a:[]})}},"New Calendar")),r.a.createElement(j.a,{item:!0},r.a.createElement(k.a,{size:"medium",variant:"outlined",endIcon:r.a.createElement(H.a,null),onClick:Object(f.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://vailable.github.io".concat(x.pathname).concat(x.search),e.prev=1,e.next=4,fetch("https://tinyurl.com/api-create.php?url=".concat(encodeURIComponent(t)));case 4:return n=e.sent,e.next=7,n.text();case 7:(r=e.sent).startsWith("https://tinyurl.com/")&&(t=r),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:if(e.prev=13,!window.navigator.share){e.next=17;break}return window.navigator.share({text:"".concat(a.n?"".concat(a.n," - "):"","Vailable - Easy Calendar Sharing App"),url:t}),e.abrupt("return");case 17:e.next=21;break;case 19:e.prev=19,e.t1=e.catch(13);case 21:if(!window.navigator.clipboard){e.next=24;break}return window.navigator.clipboard.writeText(t).then((function(){w("Link copied! Paste it in a message or email to share"),p(!0)})).catch((function(e){w("Error sharing automatically. Copy the URL of the current page to share your calendar"),p(!0)})),e.abrupt("return");case 24:w("Error sharing automatically. Copy the URL of the current page to share your calendar"),p(!0);case 26:case"end":return e.stop()}}),e,null,[[1,11],[13,19]])})))},"Share Changes")),r.a.createElement(j.a,{item:!0},r.a.createElement(k.a,{size:"medium",variant:"outlined",onClick:function(){return D.goBack()}},"Undo")),r.a.createElement(j.a,{item:!0},r.a.createElement(k.a,{size:"medium",variant:"outlined",onClick:function(){return D.goForward()}},"Redo")))),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(P,{data:a,setData:t})))))};function F(e){return E.a.compressToEncodedURIComponent(JSON.stringify(e))}function T(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v1";if("v1"!==a)throw new Error("Unsupported version ".concat(a));var t={a:[]};if(e&&(t=JSON.parse(E.a.decompressFromEncodedURIComponent(e))),!t||!t.a||!Array.isArray(t.a))throw new Error("Invalid params payload");return t}var G=function(){var e,a=Object(d.e)(),t=Object(d.d)(),n=Object(d.f)({path:"/:v",exact:!0,sensitive:!0,strict:!0});try{var c,i=a.search.substring(1),l=null===n||void 0===n||null===(c=n.params)||void 0===c?void 0:c.v;if("v1"!==l)return i=F(T(i,l)),t.push("/".concat("v1","?").concat(i)),null;e=T(i)}catch(o){return t.push("/".concat("v1","?")),null}return r.a.createElement(V,{data:e,setData:function(e){e.l=new Date;var a=F(e);t.push("/".concat("v1","?").concat(a))}})};var M=function(){var e=Object(o.a)("(prefers-color-scheme: dark)"),a=Object(n.useMemo)((function(){return Object(s.a)({palette:{type:e?"dark":"light"}})}),[e]);return r.a.createElement(l.a,null,r.a.createElement(u.a,{theme:a},r.a.createElement(m.a,null),r.a.createElement(G,null)))};i.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.b3d7e3cc.chunk.js.map