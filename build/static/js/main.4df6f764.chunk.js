(this["webpackJsonpcheckers-webapp"]=this["webpackJsonpcheckers-webapp"]||[]).push([[0],{63:function(e,a,n){e.exports=n(94)},69:function(e,a,n){},94:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(24),l=n.n(c),i=(n(68),n(69),n(25)),u=n(17),o=n(4),s=n(5),E=n(8),m=n(60),d=function(){var e=Object(t.useState)(!1),a=Object(E.a)(e,2),n=a[0],c=a[1];return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},"Checkers"),r.a.createElement("a",{role:"button",className:"navbar-burger ".concat(n&&"is-active"),onClick:function(){return c((function(e){return!e}))},"aria-label":"menu","aria-expanded":"false"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(n&&"is-active")},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{className:"button is-light",href:"https://github.com/tk-checkers/"},r.a.createElement("span",{className:"icon"},r.a.createElement(m.b,null)),r.a.createElement("span",null,"Github")))))))},b=function(e){var a=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement(d,null),a)},f=n(97);function p(){var e=Object(o.a)(["\n    margin: 2rem 0;\n"]);return p=function(){return e},e}function v(){var e=Object(o.a)(["\n    margin: 0 auto;\n    max-width: 20rem;\n"]);return v=function(){return e},e}var h=s.a.div(v()),O=s.a.div(p()),j=function(){var e=Object(t.useState)(""),a=Object(E.a)(e,2),n=a[0],c=a[1],l=Object(u.f)(),i=Object(t.useCallback)((function(e){l.push("/match/".concat(e))}),[l]),o=Object(t.useCallback)((function(){var e=Object(f.a)();i(e)}),[i]),s=Object(t.useCallback)((function(){i(n)}),[n]);return r.a.createElement(h,null,r.a.createElement(O,null,r.a.createElement("label",{className:"label"},"Join by Game ID"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Game ID",value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"control"},r.a.createElement("a",{className:"button is-info",onClick:s},"Go"))),r.a.createElement("p",{className:"help"},"Ask your friend to share the Game ID with you!")),r.a.createElement(O,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Create a New Game"),r.a.createElement("button",{className:"button is-fullwidth",onClick:o},"Let's play!"))))};function k(){var e=Object(o.a)(["\n    text-align: center;\n    max-width: 20rem;\n    margin: 2rem auto;\n"]);return k=function(){return e},e}function N(){var e=Object(o.a)([""]);return N=function(){return e},e}var g,w=s.a.div(N()),x=s.a.article(k()),C=function(){return r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(x,{className:"message"},r.a.createElement("div",{className:"message-body"},"Play checkers with your friends, no sign-up required!")),r.a.createElement(j,null)))},y=n(15),D=n.n(y),R=n(21),_=n(14);!function(e){e[e.ADD_R_PIECE=0]="ADD_R_PIECE",e[e.ADD_B_PIECE=1]="ADD_B_PIECE",e[e.REMOVE_SELECTED=2]="REMOVE_SELECTED",e[e.KING_SELECTED=3]="KING_SELECTED"}(g||(g={}));var B=n(34),I=n.n(B),S=function(){var e=Object(R.a)(D.a.mark((function e(a,n){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={board:n},e.next=3,I.a.patch("".concat("https://checkers-api.tmk.name","/api/matches/").concat(a,"/"),t);case 3:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(R.a)(D.a.mark((function e(a){var n,t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat("https://checkers-api.tmk.name","/api/matches/").concat(a,"/"));case 2:return n=e.sent,t={board:JSON.parse(n.data.board)},e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function P(){var e=Object(o.a)(["\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n\n    border: 1px solid black;\n    background-color: ",";\n"]);return P=function(){return e},e}function A(){var e=Object(o.a)(["\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n\n    background-color: ",";\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    ","\n"]);return A=function(){return e},e}function T(){var e=Object(o.a)(["\n    width: 100%;\n    margin-left: -100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return T=function(){return e},e}function G(){var e=Object(o.a)(["\n    width: 100%;\n    border: 1px solid black;\n\n    background-color: ",";\n"]);return G=function(){return e},e}function K(){var e=Object(o.a)(["\n    display: flex;\n    width: 80px;\n    height: 80px;\n"]);return K=function(){return e},e}var M=s.a.div(K()),J=s.a.div(G(),(function(e){return e.alternate?"black":"white"})),V=s.a.div(T()),U=s.a.div(A(),(function(e){return"R"===e.player?"red":"lightblue"}),(function(e){return e.selected?"border: 5px dashed white;":""})),W=s.a.div(P(),(function(e){return"R"===e.player?"red":"lightblue"})),q=function(e){var a,n=e.alternate,t=e.piece,c=e.selected,l=e.onClick;if("E"===t)a=null;else{var i=t.split(""),u=Object(E.a)(i,2),o=u[0],s=u[1];a=r.a.createElement(U,{player:o,selected:c},s&&r.a.createElement(W,{player:o}))}return r.a.createElement(M,{onClick:l},r.a.createElement(J,{alternate:n}),r.a.createElement(V,null,a))};function $(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return $=function(){return e},e}var z=s.a.div($()),F=function(e){var a=e.onEvent;return r.a.createElement(z,null,r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button",onClick:function(){return a(g.ADD_B_PIECE)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(m.d,null)),r.a.createElement("span",null,"Add Blue Piece"))),r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button",onClick:function(){return a(g.ADD_R_PIECE)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(m.d,null)),r.a.createElement("span",null,"Add Red Piece")))),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button",onClick:function(){return a(g.REMOVE_SELECTED)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(m.c,null)),r.a.createElement("span",null,"Remove Selected"))),r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button",onClick:function(){return a(g.KING_SELECTED)}},r.a.createElement("span",{className:"icon is-small"},r.a.createElement(m.a,null)),r.a.createElement("span",null,"King Selected")))))},H=n(54),Q=n(53),X={board:[["E","R","E","R","E","R","E","R"],["R","E","R","E","R","E","R","E"],["E","R","E","R","E","R","E","R"],["E","E","E","E","E","E","E","E"],["E","E","E","E","E","E","E","E"],["B","E","B","E","B","E","B","E"],["E","B","E","B","E","B","E","B"],["B","E","B","E","B","E","B","E"]]},Y=function(e){var a=Object(t.useState)(X),n=Object(E.a)(a,2),r=n[0],c=n[1],l=Object(t.useCallback)((function(){return L(e)}),[e]),i=Object(H.a)(l),u=i.data,o=(i.error,i.isLoading);return Object(t.useEffect)((function(){o||c(u)}),[o,u]),Object(t.useEffect)((function(){if(!o){var a=new Q.a({broadcaster:"pusher",key:"".concat("a1924f941f1b9514f912"),cluster:"us2",forceTLS:!0}).channel("matches.".concat(e));return a.listen("MatchUpdated",(function(e){var a=e.match,n={board:JSON.parse(a.board)};c(n)})),function(){a.stopListening("MatchUpdated")}}}),[o,e]),r};function Z(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Z=function(){return e},e}function ee(){var e=Object(o.a)(["\n    display: inline-block;\n    margin: 2rem auto;\n"]);return ee=function(){return e},e}var ae=s.a.div(ee()),ne=s.a.div(Z()),te=function(e){var a=e.pieces,n=e.rowIndex,t=e.selectedTile,c=e.onClick,l=null===t?[-1,-1]:t,i=Object(E.a)(l,2),u=i[0],o=i[1];return r.a.createElement(ne,null,a.map((function(e,a){return r.a.createElement(q,{alternate:(n+a+1)%2==0,key:a,piece:e,selected:n===u&&a===o,onClick:function(){return c(n,a)}})})))},re=function(){var e=Object(t.useState)(null),a=Object(E.a)(e,2),n=a[0],c=a[1],l=Object(u.g)().matchId,i=Y(l),o=function(){var e=Object(R.a)(D.a.mark((function e(a,t){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(_.a)(i,(function(e){if(null!==n){var r=Object(E.a)(n,2),l=r[0],i=r[1];if(l===a&&i===t)return void c(null);e.board[a][t]=e.board[l][i],e.board[l][i]="E",c(null)}else"E"!==e.board[a][t]&&c([a,t])})),e.next=3,S(l,r.board);case 3:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(R.a)(D.a.mark((function e(a){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(_.a)(i,(function(e){switch(a){case g.ADD_B_PIECE:for(var t=0;t<e.board.length;t++)for(var r=0;r<e.board[t].length;r++)if("E"===e.board[t][r])return void(e.board[t][r]="B");break;case g.ADD_R_PIECE:for(var l=0;l<e.board.length;l++)for(var i=0;i<e.board[l].length;i++)if("E"===e.board[l][i])return void(e.board[l][i]="R");break;case g.KING_SELECTED:if(null===n)return;var u=Object(E.a)(n,2),o=u[0],s=u[1],m=e.board[o][s];if(m.includes("K"))return;e.board[o][s]=m+"K";break;case g.REMOVE_SELECTED:if(null===n)return;var d=Object(E.a)(n,2),b=d[0],f=d[1];e.board[b][f]="E",c(null)}})),e.next=3,S(l,t.board);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(ae,null,r.a.createElement(F,{onEvent:s}),i.board.map((function(e,a){return r.a.createElement(te,{key:a,pieces:e,rowIndex:a,selectedTile:n,onClick:o})})))};function ce(){var e=Object(o.a)(["\n    display: flex;\n"]);return ce=function(){return e},e}var le=s.a.div(ce()),ie=function(){return r.a.createElement(b,null,r.a.createElement(le,null,r.a.createElement(re,null)))};var ue=function(){return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/game/:matchId",component:ie}),r.a.createElement(u.a,{path:"/",component:C})))},oe=n(9),se=n(61),Ee=n(36),me=n(56),de=n.n(me),be=Object(oe.c)({}),fe={key:"root",storage:de.a,whitelist:["auth"]},pe=Object(Ee.a)(fe,be),ve=Object(se.a)({reducer:pe}),he=Object(Ee.b)(ve),Oe=n(59);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(57),ke=n(58),Ne=n.n(ke);window.Pusher=Ne.a,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe.a,{store:ve},r.a.createElement(je.a,{persistor:he},r.a.createElement(ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.4df6f764.chunk.js.map