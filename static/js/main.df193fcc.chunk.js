(this["webpackJsonpbhavita-emotees"]=this["webpackJsonpbhavita-emotees"]||[]).push([[0],{21:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},49:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(12),r=c.n(n),i=(c(38),c(2)),o=(c(39),c(3)),l=c.n(o),j=c(7),d=(c(41),c(25)),u=c.n(d),b=c(24),h=c.n(b),m=c(0);var f=function(e){var t=e.type,c=e.imgid,a=e.imgName,n=e.imgCode,r=e.ext,o=e.category,d=Object(s.useState)(!1),b=Object(i.a)(d,2),f=(b[0],b[1]),O=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(a);case 3:return f(!0),e.next=6,navigator.clipboard.readText();case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),f(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(h.a,{top:!0,children:Object(m.jsxs)("div",{className:"card",onClick:O,children:[Object(m.jsx)("div",{className:"card__image",children:"twitch"===t?Object(m.jsx)("img",{className:"emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer",src:"https://static-cdn.jtvnw.net/emoticons/v1/".concat(c,"/3.0"),alt:"amotee"}):"custom"===t?Object(m.jsx)("img",{classname:"emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer",src:"https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/emotes/".concat(o,"/").concat(c,".").concat(r)}):Object(m.jsx)("img",{className:"emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer",src:"https://cdn.betterttv.net/emote/".concat(c,"/3x"),alt:"amotee"})}),Object(m.jsx)("div",{className:"card__name",children:Object(m.jsxs)("div",{className:"card__name__copy",onClick:O,children:[Object(m.jsx)("div",{className:"card__name_code",children:n}),Object(m.jsx)(u.a,{className:"copy__icon"})]})})]})})},O=c(5),x={},v={},p={},_={fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return new Promise((function(e,c){fetch.apply(void 0,t).then((function(t){t.json().then((function(s){200===t.status?e(s):c(s)}))}))}))}))};function g(){return new Promise((function(e){_.fetch("https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/dictionary.json").then((function(t){if(t&&t.emotes){var c,s=Object(O.a)(t.emotes);try{for(s.s();!(c=s.n()).done;){var a=c.value,n={id:a.id,ext:a.ext,cat:a.cat};p[a.code]=n}}catch(r){s.e(r)}finally{s.f()}}console.log(p),e(p)}))}))}function N(){return new Promise((function(e){_.fetch("https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/twitchGlobalDictionary.json").then((function(t){N.lastUpdate=Date.now();var c,s=Object(O.a)(t.emotes);try{for(s.s();!(c=s.n()).done;){var a=c.value;a.code.match(/^[a-zA-Z0-9]+$/)&&(x[a.code.toLowerCase()]=a.id)}}catch(n){s.e(n)}finally{s.f()}e(x)}))}))}function w(){return new Promise((function(e){return _.fetch("https://api.betterttv.net/3/emotes/shared/top?offset=0&limit=100").then((function(t){var c,s=Object(O.a)(t);try{for(s.s();!(c=s.n()).done;){var a=c.value.emote;v[a.code]=a.id}}catch(n){s.e(n)}finally{s.f()}e(v)}))}))}var y=c(14),S=c.n(y);c(49);var k=function(e){return Object(m.jsx)("div",{className:"main__screen",children:Object(m.jsxs)("div",{className:"smain__info",children:[Object(m.jsx)("a",{href:"https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm",children:Object(m.jsx)("img",{className:"logo",src:"/img/icon.png",href:"https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm"})}),Object(m.jsxs)("div",{className:"main__title",children:[Object(m.jsx)("h2",{children:"Hi, This is "}),Object(m.jsx)("h2",{className:"title__effect ",children:"EMOTESLY"})]}),Object(m.jsx)("div",{className:"text__container",children:Object(m.jsx)("h2",{className:"text__effect title__delete",children:" Youtube chat enhanced. "})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{class:"glinks",children:Object(m.jsx)("a",{href:"https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm",children:Object(m.jsxs)("div",{className:"main__title ext",children:[" ",Object(m.jsx)("h2",{children:"Click to download now "}),Object(m.jsx)(S.a,{className:"ml15",fontSize:"large"})]})})}),Object(m.jsxs)("div",{class:"mouse_scroll",children:[Object(m.jsx)("div",{class:"mouse",children:Object(m.jsx)("div",{class:"wheel"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{class:"m_scroll_arrows unu"}),Object(m.jsx)("span",{class:"m_scroll_arrows doi"}),Object(m.jsx)("span",{class:"m_scroll_arrows trei"})]})]})]})]})})},C=c(8),T=c.n(C);c(50),c(21);var E=function(e){var t=e.checkData,c=Object(s.useState)([]),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(s.useState)(""),d=Object(i.a)(o,2),u=d[0],b=d[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().then((function(e){return N()})).then((function(e){r(e)}));case 2:console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){h(),t(!!n)}),[]),Object(m.jsxs)("div",{className:"twitch__emotees__screen",children:[Object(m.jsxs)("div",{className:"twitch__search",children:[Object(m.jsx)("input",{value:u,onChange:function(e){var t,c=e.target.value,s=Object.entries(n).filter((function(e){return e[0].toLowerCase().includes(c.toLowerCase())})),a={},i=Object(O.a)(s);try{for(i.s();!(t=i.n()).done;){var o=t.value;o[0].match(/^[a-zA-Z0-9]+$/)&&(a[o[0].toLowerCase()]=o[1])}}catch(l){i.e(l)}finally{i.f()}b(c),r(a)}}),Object(m.jsx)(T.a,{className:"search__icon"})]}),Object(m.jsx)("div",{className:"emotees__cards",children:Object.entries(n).map((function(e){var t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(m.jsx)(f,{type:"twitch",imgid:s,imgName:c,imgCode:c})}))})]})};var Y=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),o=r[0],d=r[1],u=Object(s.useState)(""),b=Object(i.a)(u,2),h=b[0],x=b[1],v=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w().then((function(e){return w()})).then((function(e){a(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){v()}),[]),Object(m.jsxs)("div",{className:"twitch__emotees__screen",children:[Object(m.jsxs)("div",{className:"twitch__search",children:[Object(m.jsx)("input",{value:h,onChange:function(e){return function(e){x(e),console.log(e);var t=c;console.log(t);var s,a=Object.entries(t).filter((function(t){return t[0].toLowerCase().includes(e.toLowerCase())})),n={},r=Object(O.a)(a);try{for(r.s();!(s=r.n()).done;){var i=s.value;n[i[0]]=i[1]}}catch(o){r.e(o)}finally{r.f()}d(n)}(e.target.value)}}),Object(m.jsx)(T.a,{className:"search__icon"})]}),Object(m.jsx)("div",{className:"emotees__cards",children:Object.entries(h?o:c).map((function(e){var t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(m.jsx)(f,{type:"bttv",imgid:s,imgName:c,imgCode:c})}))})]})};var L=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),o=r[0],d=r[1],u=Object(s.useState)(""),b=Object(i.a)(u,2),h=b[0],x=b[1],v=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){return g()})).then((function(e){a(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){v()}),[]),Object(m.jsxs)("div",{className:"twitch__emotees__screen",children:[Object(m.jsxs)("div",{className:"twitch__search",children:[Object(m.jsx)("input",{value:h,onChange:function(e){return function(e){x(e),console.log(e);var t=c,s=Object.entries(t).filter((function(t){return t[0].toLowerCase().includes(e.toLowerCase())}));console.log(s);var a,n={},r=Object(O.a)(s);try{for(r.s();!(a=r.n()).done;){var i=a.value,o={id:i[1].id,ext:i[1].ext,cat:i[1].cat};n[i[0]]=o}}catch(l){r.e(l)}finally{r.f()}d(n)}(e.target.value)}}),Object(m.jsx)(T.a,{className:"search__icon"})]}),Object(m.jsx)("div",{className:"emotees__cards",children:Object.entries(h?o:c).map((function(e){var t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(m.jsx)(f,{type:"custom",imgid:s.id,imgName:c,imgCode:c,ext:s.ext,category:s.cat})}))})]})},A=c(68),B=c(31),M=c.n(B);var I=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=(t[0],t[1]),n=Object(s.useState)(!1),r=Object(i.a)(n,2),o=r[0],l=r[1],j=Object(s.useState)(!0),d=Object(i.a)(j,2),u=d[0],b=d[1],h=Object(s.useState)(!0),f=Object(i.a)(h,2),O=f[0],x=f[1],v=Object(s.useState)(!1),p=Object(i.a)(v,2),_=p[0],g=p[1];return a.a.useEffect((function(){var e=document.createElement("script");e.src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js",e.async=!0,e.defer=!0,e.crossOrigin="anonymous",e.onload=function(){return g(!0)},document.body.append(e)}),[]),a.a.useEffect((function(){_&&window.kofiWidgetOverlay.draw("thatgirlcoder",{type:"floating-chat","floating-chat.donateButton.text":"Like emotesly? Consider supporting me \u2615\ufe0f\ud83d\ude07\u2764\ufe0f","floating-chat.donateButton.background-color":"#d9534f","floating-chat.donateButton.text-color":"#fff"})}),[_]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"solar-syst",children:[Object(m.jsx)("div",{className:"sun"}),Object(m.jsx)("div",{className:"mercury"}),Object(m.jsx)("div",{className:"venus"}),Object(m.jsx)("div",{className:"earth"}),Object(m.jsx)("div",{className:"mars"}),Object(m.jsx)("div",{className:"jupiter"}),Object(m.jsx)("div",{className:"saturn"}),Object(m.jsx)("div",{className:"uranus"}),Object(m.jsx)("div",{className:"neptune"}),Object(m.jsx)("div",{className:"pluto"}),Object(m.jsx)("div",{className:"asteroids-belt"})]}),Object(m.jsx)("div",{className:"app__screen",children:Object(m.jsx)(k,{})}),Object(m.jsxs)("div",{className:"app__screen__about",children:[Object(m.jsx)("div",{className:"main__about__title",children:Object(m.jsx)("h3",{children:"About EMOTESLY - INSPIRATION"})}),Object(m.jsx)(M.a,{top:!0,children:Object(m.jsxs)("div",{className:"main__about__content",children:[Object(m.jsxs)("p",{children:[" This tool is exclusively made for",Object(m.jsx)("a",{href:"https://www.youtube.com/channel/UCWxlUwW9BgGISaakjGM37aw",className:"link",children:"Valkyrae Youtube channel."})," She is one of the biggest female streamers in the world and the inspiration for Emotesly. She streams on Youtube. And Youtube by features, lacks the support of emotes and thus there is no emote culture in YT Stream chat. Also the moderation tools of Youtube lack capabilities to drive a postive chat. This gave an idea of having support for custom emoticons for Youtube chat as well as additional support for twitch & BTTV emote for Youtube"]}),Object(m.jsx)("p",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"BTTV support"}),Object(m.jsx)("li",{children:"Twitch emotes support"}),Object(m.jsx)("li",{children:"Custom emotes for Valkyrae's Youtube channel"}),Object(m.jsx)("li",{children:"Colored usernmess"}),Object(m.jsx)("li",{children:"Ability to hide profile pictures"}),Object(m.jsx)("li",{children:"Enhance Youtube chat experience and make it more aesthetic via stylings "})]})})]})})]}),Object(m.jsxs)("div",{className:"app__emotees__section",id:"emotes",children:[Object(m.jsx)("h3",{className:"app__emotees__section__title",children:"EMOTESLY"}),Object(m.jsxs)("div",{className:"app__emotees__tabs",children:[Object(m.jsx)("h3",{className:"app__emotees__tabs__single",onClick:function(){l(!1),c(!1),b(!0)},children:"CUSTOM EMOTES"}),Object(m.jsx)("h3",{className:"app__emotees__tabs__single",onClick:function(){l(!1),c(!0),b(!1)},children:"BTTV EMOTES"}),O?Object(m.jsx)("h3",{className:"app__emotees__tabs__single",onClick:function(){l(!0),c(!1),b(!1)},children:"TWITCH EMOTES"}):Object(m.jsx)(m.Fragment,{})]}),u?Object(m.jsx)(L,{}):o?Object(m.jsx)(E,{checkData:x}):Object(m.jsx)(Y,{})]}),Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("h2",{children:"Contact"}),Object(m.jsx)("p",{children:"Ideas? Thoughts? Reach out to me on"}),Object(m.jsxs)("div",{className:"contact__icons",children:[Object(m.jsx)("a",{href:"https://twitter.com/BhavitaWasTaken",children:Object(m.jsx)(A.a,{className:"twitter",fontSize:"large"})}),Object(m.jsx)("a",{href:"https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm",children:Object(m.jsx)(S.a,{className:"ext",fontSize:"large"})})]})]})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.df193fcc.chunk.js.map