import{s as Q,o as Oe,c as V,n as I,j as ye,r as ke,e as je,u as De,g as Be,h as xe,k as Ue,f as X}from"../chunks/scheduler.8781a030.js";import{S as K,i as Y,g as A,s as E,m as _,h as v,j as U,c as R,n as z,f as m,k as d,a as b,A as w,d as p,p as W,t as y,b as H,o as ne,l as ae,y as x,B as Z,e as ie,r as O,u as j,v as D,w as B,x as M,D as Ee,z as Ie}from"../chunks/index.d9d6dc58.js";import{a as le,e as N,i as Re,f as L,R as Ce,S as se}from"../chunks/SpiralSvg.86cb9219.js";const Le=!0,Se=async({url:o})=>({metaTagsChild:Object.freeze({title:"Home"})}),Gt=Object.freeze(Object.defineProperty({__proto__:null,load:Se,prerender:Le},Symbol.toStringTag,{value:"Module"}));function oe(o){let e,r,t;return{c(){e=A("div"),this.h()},l(l){e=v(l,"DIV",{class:!0,style:!0}),U(e).forEach(m),this.h()},h(){d(e,"class","image absolute top-0 left-0 z-0 w-full h-full svelte-1x9d87w"),ae(e,"background-image","url('"+o[0]+"')")},m(l,i){b(l,e,i),t=!0},p(l,i){(!t||i&1)&&ae(e,"background-image","url('"+l[0]+"')")},i(l){t||(l&&V(()=>{t&&(r||(r=x(e,le,{duration:1e3},!0)),r.run(1))}),t=!0)},o(l){l&&(r||(r=x(e,le,{duration:1e3},!1)),r.run(0)),t=!1},d(l){l&&m(e),l&&r&&r.end()}}}function Ne(o){let e,r,t,l,i=o[2]&&oe(o);return{c(){e=A("div"),i&&i.c(),r=E(),t=A("div"),l=_(o[1]),this.h()},l(n){e=v(n,"DIV",{class:!0,role:!0});var a=U(e);i&&i.l(a),r=R(a),t=v(a,"DIV",{class:!0});var s=U(t);l=z(s,o[1]),s.forEach(m),a.forEach(m),this.h()},h(){d(t,"class","bg-black relative mix-blend-darken svelte-1x9d87w"),d(e,"class","inline-block relative svelte-1x9d87w"),d(e,"role","presentation")},m(n,a){b(n,e,a),i&&i.m(e,null),w(e,r),w(e,t),w(t,l)},p(n,[a]){n[2]?i?(i.p(n,a),a&4&&p(i,1)):(i=oe(n),i.c(),p(i,1),i.m(e,r)):i&&(W(),y(i,1,1,()=>{i=null}),H()),a&2&&ne(l,n[1])},i(n){p(i)},o(n){y(i)},d(n){n&&m(e),i&&i.d()}}}function Pe(o,e,r){let{initial:t=""}=e,{available:l=[]}=e,{char:i=""}=e,{seconds:n=0}=e,a=!1;return Oe(()=>{setTimeout(()=>r(2,a=!0),n*100),setInterval(()=>{r(0,t=l[Math.floor(Math.random()*(l.length-1))])},5e3+n*100)}),o.$$set=s=>{"initial"in s&&r(0,t=s.initial),"available"in s&&r(3,l=s.available),"char"in s&&r(1,i=s.char),"seconds"in s&&r(4,n=s.seconds)},[t,i,a,l,n]}class Fe extends K{constructor(e){super(),Y(this,e,Pe,Ne,Q,{initial:0,available:3,char:1,seconds:4})}}function ce(o,e,r){const t=o.slice();return t[5]=e[r],t}function fe(o,e,r){const t=o.slice();return t[8]=e[r],t[10]=r,t}function Te(o){let e=o[8]+"",r;return{c(){r=_(e)},l(t){r=z(t,e)},m(t,l){b(t,r,l)},p:I,i:I,o:I,d(t){t&&m(r)}}}function Je(o){let e,r;return e=new Fe({props:{seconds:Math.random()*15,initial:o[2](),available:o[0],char:o[8]}}),{c(){O(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){D(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.available=t[0]),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ue(o){let e,r,t,l;const i=[Je,Te],n=[];function a(s,c){return s[8].match(/[a-z]/i)?0:1}return e=a(o),r=n[e]=i[e](o),{c(){r.c(),t=ie()},l(s){r.l(s),t=ie()},m(s,c){n[e].m(s,c),b(s,t,c),l=!0},p(s,c){r.p(s,c)},i(s){l||(p(r),l=!0)},o(s){y(r),l=!1},d(s){s&&m(t),n[e].d(s)}}}function me(o){let e,r,t,l=N(o[5]),i=[];for(let a=0;a<l.length;a+=1)i[a]=ue(fe(o,l,a));const n=a=>y(i[a],1,1,()=>{i[a]=null});return{c(){e=A("div");for(let a=0;a<i.length;a+=1)i[a].c();r=E(),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=U(e);for(let c=0;c<i.length;c+=1)i[c].l(s);r=R(s),s.forEach(m),this.h()},h(){d(e,"class","block")},m(a,s){b(a,e,s);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);w(e,r),t=!0},p(a,s){if(s&7){l=N(a[5]);let c;for(c=0;c<l.length;c+=1){const f=fe(a,l,c);i[c]?(i[c].p(f,s),p(i[c],1)):(i[c]=ue(f),i[c].c(),p(i[c],1),i[c].m(e,r))}for(W(),c=l.length;c<i.length;c+=1)n(c);H()}},i(a){if(!t){for(let s=0;s<l.length;s+=1)p(i[s]);t=!0}},o(a){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)y(i[s]);t=!1},d(a){a&&m(e),Z(i,a)}}}function Qe(o){let e,r,t=N(o[1]),l=[];for(let n=0;n<t.length;n+=1)l[n]=me(ce(o,t,n));const i=n=>y(l[n],1,1,()=>{l[n]=null});return{c(){e=A("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var a=U(e);for(let s=0;s<l.length;s+=1)l[s].l(a);a.forEach(m),this.h()},h(){d(e,"class","text uppercase bg-black relative svelte-nzeyoz")},m(n,a){b(n,e,a);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);r=!0},p(n,[a]){if(a&7){t=N(n[1]);let s;for(s=0;s<t.length;s+=1){const c=ce(n,t,s);l[s]?(l[s].p(c,a),p(l[s],1)):(l[s]=me(c),l[s].c(),p(l[s],1),l[s].m(e,null))}for(W(),s=t.length;s<l.length;s+=1)i(s);H()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)p(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)y(l[a]);r=!1},d(n){n&&m(e),Z(l,n)}}}function Ke(o,e,r){let{text:t=""}=e,{backgrounds:l=[]}=e;const i=t.split(" ");let n=[...l];const a=()=>{const s=Math.floor(Math.random()*n.length),c=n[s];return n=[...n.slice(0,s),...n.slice(s+1)],n.length===0&&(n=[...l]),c};return o.$$set=s=>{"text"in s&&r(3,t=s.text),"backgrounds"in s&&r(0,l=s.backgrounds)},[l,i,a,t]}class Ye extends K{constructor(e){super(),Y(this,e,Ke,Qe,Q,{text:3,backgrounds:0})}}function he(o,e,r){const t=o.slice();return t[5]=e[r],t[7]=r,t}function de(o){let e,r="I love making things. I've worked on these (and many other) things.",t,l,i,n,a,s,c=o[1]&&ge(o);return{c(){e=A("div"),e.textContent=r,l=E(),i=A("div"),c&&c.c(),this.h()},l(f){e=v(f,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1brrwr5"&&(e.textContent=r),l=R(f),i=v(f,"DIV",{class:!0});var u=U(i);c&&c.l(u),u.forEach(m),this.h()},h(){d(e,"class","text-8xl flex-1 text-right"),d(i,"class","flex-1 flex items-center")},m(f,u){b(f,e,u),b(f,l,u),b(f,i,u),c&&c.m(i,null),n=!0,a||(s=[Ee(i,"portfolio-skills-enter",o[4]),ye(Re.call(null,i,{id:"portfolio-skills"}))],a=!0)},p(f,u){f[1]?c?(c.p(f,u),u&2&&p(c,1)):(c=ge(f),c.c(),p(c,1),c.m(i,null)):c&&(W(),y(c,1,1,()=>{c=null}),H())},i(f){n||(f&&V(()=>{n&&(t||(t=x(e,L,{delay:300,duration:800,x:-100},!0)),t.run(1))}),p(c),n=!0)},o(f){f&&(t||(t=x(e,L,{delay:300,duration:800,x:-100},!1)),t.run(0)),y(c),n=!1},d(f){f&&(m(e),m(l),m(i)),f&&t&&t.end(),c&&c.d(),a=!1,ke(s)}}}function ge(o){let e,r,t=N(o[2]),l=[];for(let n=0;n<t.length;n+=1)l[n]=pe(he(o,t,n));const i=n=>y(l[n],1,1,()=>{l[n]=null});return{c(){e=A("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var a=U(e);for(let s=0;s<l.length;s+=1)l[s].l(a);a.forEach(m),this.h()},h(){d(e,"class","text-lg space-y-4 text-right lg:text-left")},m(n,a){b(n,e,a);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);r=!0},p(n,a){if(a&4){t=N(n[2]);let s;for(s=0;s<t.length;s+=1){const c=he(n,t,s);l[s]?(l[s].p(c,a),p(l[s],1)):(l[s]=pe(c),l[s].c(),p(l[s],1),l[s].m(e,null))}for(W(),s=t.length;s<l.length;s+=1)i(s);H()}},i(n){if(!r){for(let a=0;a<t.length;a+=1)p(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)y(l[a]);r=!1},d(n){n&&m(e),Z(l,n)}}}function We(o){let e=o[5][0]+"",r;return{c(){r=_(e)},l(t){r=z(t,e)},m(t,l){b(t,r,l)},p:I,d(t){t&&m(r)}}}function He(o){let e,r=o[5][0]+"",t;return{c(){e=A("a"),t=_(r),this.h()},l(l){e=v(l,"A",{target:!0,class:!0,href:!0});var i=U(e);t=z(i,r),i.forEach(m),this.h()},h(){d(e,"target","_blank"),d(e,"class","text-red-300"),d(e,"href",o[5][1]??"#")},m(l,i){b(l,e,i),w(e,t)},p:I,d(l){l&&m(e)}}}function pe(o){let e,r,t,l;function i(s,c){return s[5][1]?He:We}let a=i(o)(o);return{c(){e=A("li"),a.c(),r=E()},l(s){e=v(s,"LI",{});var c=U(e);a.l(c),r=R(c),c.forEach(m)},m(s,c){b(s,e,c),a.m(e,null),w(e,r),l=!0},p(s,c){a.p(s,c)},i(s){l||(V(()=>{l&&(t||(t=x(e,L,{delay:300+o[7]*100,duration:400,y:"20vw"},!0)),t.run(1))}),l=!0)},o(s){t||(t=x(e,L,{delay:300+o[7]*100,duration:400,y:"20vw"},!1)),t.run(0),l=!1},d(s){s&&m(e),a.d(),s&&t&&t.end()}}}function _e(o){let e,r,t,l='<div class="text-2xl text-center">Some cool things I&#39;ve worked on I cannot share a link to. Privacy disclosures, private repos. Typical things. I can talk about some of them though! Feel free to ask me about:</div> <ul class="text-lg space-y-4 text-right lg:text-center"><li>A heavy cargo shipping order web app</li> <li>A money saver mobile phone app using plaid and solid, fintech</li> <li>A website for displaying and selling rare coins and jewelry</li> <li>An SEO auditing tool using Open AI! (not for skynet)</li></ul>',i,n,a,s=o[0]&&de(o);return{c(){e=A("section"),s&&s.c(),r=E(),t=A("section"),t.innerHTML=l,this.h()},l(c){e=v(c,"SECTION",{class:!0});var f=U(e);s&&s.l(f),f.forEach(m),r=R(c),t=v(c,"SECTION",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1sxc98m"&&(t.innerHTML=l),this.h()},h(){d(e,"class","flex flex-col lg:flex-row p-4 wrap gap-24"),d(t,"class","flex flex-col p-4 wrap gap-24")},m(c,f){b(c,e,f),s&&s.m(e,null),b(c,r,f),b(c,t,f),i=!0,n||(a=[Ee(e,"portfolio-enter",o[3]),ye(Re.call(null,e,{id:"portfolio",threshold:".9"}))],n=!0)},p(c,[f]){c[0]?s?(s.p(c,f),f&1&&p(s,1)):(s=de(c),s.c(),p(s,1),s.m(e,null)):s&&(W(),y(s,1,1,()=>{s=null}),H())},i(c){i||(p(s),i=!0)},o(c){y(s),i=!1},d(c){c&&(m(e),m(r),m(t)),s&&s.d(),n=!1,ke(a)}}}function ze(o,e,r){let t=!1,l=!1;return[t,l,[["❤️ United Way of King County (React, jQuery, Custom Wordpress Theme)","https://www.uwkc.org"],["📍 Bartell Drugs Store Locator (jQuery, Google Maps)","https://www.bartelldrugs.com/store-locator"],["🏦 Bank of Hawaii Hero and Navigation","https://boh.com"],["📈 US Senate Stock Transaction Tracker (alpha, Next.js, Azure Cosmos DB, Python scraper)","https://www.stocksentinel.app"],["🔨 Kinder Painting (Svelte)","https://www.kinderpainting.com"],["🔍 Snohomish County Valley Search and Rescue (Custom Wordpress Theme)","https://scvsar.org/"],["🛥️ Jacobsen's Marine (Custom Wordpress Theme)","https://www.jacobsensmarine.com/"],["🫱🏽‍🫲🏾 UWKC Free Tax Site Locator (in season January - July, Custom Wordpress Theme, Leafbox, Bing Maps, vanilla JS)","https://www.uwkc.org/need-help/tax-help/"],["🏋🏻 Gymbro weight lifting app (alpha, React Native)"]],()=>{r(0,t=!0)},()=>{r(1,l=!0)}]}class Ve extends K{constructor(e){super(),Y(this,e,ze,_e,Q,{})}}function Ae(o,e,r){const t=o.slice();return t[10]=e[r],t[12]=r,t}const Me=o=>({item:o&4}),ve=o=>({item:o[10]});function we(o){let e,r,t,l;const i=o[8].default,n=je(i,o,o[9],ve);return{c(){e=A("li"),n&&n.c(),r=E(),this.h()},l(a){e=v(a,"LI",{class:!0});var s=U(e);n&&n.l(s),r=R(s),s.forEach(m),this.h()},h(){d(e,"class",o[5])},m(a,s){b(a,e,s),n&&n.m(e,null),w(e,r),l=!0},p(a,s){o=a,n&&n.p&&(!l||s&516)&&De(n,i,o,o[9],l?xe(i,o[9],s,Me):Be(o[9]),ve),(!l||s&32)&&d(e,"class",o[5])},i(a){l||(p(n,a),V(()=>{l&&(t||(t=x(e,o[0],{delay:o[12]*o[6],...o[1]},!0)),t.run(1))}),l=!0)},o(a){y(n,a),t||(t=x(e,o[0],{delay:o[12]*o[6],...o[1]},!1)),t.run(0),l=!1},d(a){a&&m(e),n&&n.d(a),a&&t&&t.end()}}}function qe(o){let e,r,t=N(o[2]),l=[];for(let n=0;n<t.length;n+=1)l[n]=we(Ae(o,t,n));const i=n=>y(l[n],1,1,()=>{l[n]=null});return{c(){e=A("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var a=U(e);for(let s=0;s<l.length;s+=1)l[s].l(a);a.forEach(m),this.h()},h(){d(e,"class",o[4])},m(n,a){b(n,e,a);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);r=!0},p(n,a){if(a&614){t=N(n[2]);let s;for(s=0;s<t.length;s+=1){const c=Ae(n,t,s);l[s]?(l[s].p(c,a),p(l[s],1)):(l[s]=we(c),l[s].c(),p(l[s],1),l[s].m(e,null))}for(W(),s=t.length;s<l.length;s+=1)i(s);H()}(!r||a&16)&&d(e,"class",n[4])},i(n){if(!r){for(let a=0;a<t.length;a+=1)p(l[a]);r=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)y(l[a]);r=!1},d(n){n&&m(e),Z(l,n)}}}function Ge(o){let e,r;return e=new Ce({props:{id:o[7],className:o[3],$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){O(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){D(e,t,l),r=!0},p(t,[l]){const i={};l&128&&(i.id=t[7]),l&8&&(i.className=t[3]),l&630&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Xe(o,e,r){let{$$slots:t={},$$scope:l}=e,{theTransition:i=le}=e,{options:n={}}=e,{items:a=[]}=e,{containerClass:s=""}=e,{listClass:c=""}=e,{itemClass:f=""}=e,{spacing:u=100}=e,{id:h=0}=e;return o.$$set=g=>{"theTransition"in g&&r(0,i=g.theTransition),"options"in g&&r(1,n=g.options),"items"in g&&r(2,a=g.items),"containerClass"in g&&r(3,s=g.containerClass),"listClass"in g&&r(4,c=g.listClass),"itemClass"in g&&r(5,f=g.itemClass),"spacing"in g&&r(6,u=g.spacing),"id"in g&&r(7,h=g.id),"$$scope"in g&&r(9,l=g.$$scope)},[i,n,a,s,c,f,u,h,t,l]}class be extends K{constructor(e){super(),Y(this,e,Xe,Ge,Q,{theTransition:0,options:1,items:2,containerClass:3,listClass:4,itemClass:5,spacing:6,id:7})}}const Ze=""+new URL("../assets/wordpress.4c7bf52d.webp",import.meta.url).href,$e=""+new URL("../assets/wordpress.b6efc4a7.png",import.meta.url).href,et=""+new URL("../assets/mongodb.26e72d4a.webp",import.meta.url).href,tt=""+new URL("../assets/mongodb.fedbcc5f.png",import.meta.url).href,st="data:image/webp;base64,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",lt=""+new URL("../assets/nodejs.6aa3daf8.png",import.meta.url).href,nt=""+new URL("../assets/laravel.b93c774e.webp",import.meta.url).href,rt=""+new URL("../assets/laravel.d561ec66.png",import.meta.url).href,at=""+new URL("../assets/react.2ad3ec05.webp",import.meta.url).href,it=""+new URL("../assets/react.3243cf7c.png",import.meta.url).href,ot=""+new URL("../assets/react_native.98fd6424.webp",import.meta.url).href,ct=""+new URL("../assets/react_native.5b8b312e.png",import.meta.url).href,ft=""+new URL("../assets/mysql.401a82bc.webp",import.meta.url).href,ut=""+new URL("../assets/mysql.7602ed5a.png",import.meta.url).href,mt=""+new URL("../assets/vue.403fd997.webp",import.meta.url).href,ht=""+new URL("../assets/vue.d2cd9268.png",import.meta.url).href,dt=""+new URL("../assets/xcode.c671618d.webp",import.meta.url).href,gt=""+new URL("../assets/xcode.8aa9358b.png",import.meta.url).href,pt=""+new URL("../assets/dot_net.d9d2eb6d.webp",import.meta.url).href,At=""+new URL("../assets/dot_net.c8b38bbb.png",import.meta.url).href,vt=""+new URL("../assets/php.b9f644c4.webp",import.meta.url).href,wt=""+new URL("../assets/php.1cd42a52.png",import.meta.url).href,bt=""+new URL("../assets/javascript.443e76d0.webp",import.meta.url).href,yt=""+new URL("../assets/javascript.5c5a83ed.png",import.meta.url).href,kt=""+new URL("../assets/java.68b15a12.webp",import.meta.url).href,Ut=""+new URL("../assets/java.eee44270.png",import.meta.url).href,Et="data:image/webp;base64,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",Rt="data:image/png;base64,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",Ct=""+new URL("../assets/css.3ca36df4.webp",import.meta.url).href,Ot=""+new URL("../assets/css.d8a6b708.png",import.meta.url).href,jt=""+new URL("../assets/csharp.ba033680.webp",import.meta.url).href,Dt=""+new URL("../assets/csharp.8a8f5e4d.png",import.meta.url).href,Bt=""+new URL("../assets/python.8b9ed2f6.webp",import.meta.url).href,xt=""+new URL("../assets/python.37e094c7.png",import.meta.url).href;function It(o){let e,r,t,l,i,n,a,s,c=o[0][0]+"",f;return{c(){e=A("figure"),r=A("picture"),t=A("source"),i=E(),n=A("img"),s=E(),f=_(c),this.h()},l(u){e=v(u,"FIGURE",{class:!0});var h=U(e);r=v(h,"PICTURE",{});var g=U(r);t=v(g,"SOURCE",{srcset:!0}),i=R(g),n=v(g,"IMG",{src:!0,alt:!0}),g.forEach(m),h.forEach(m),s=R(u),f=z(u,c),this.h()},h(){Ue(t,l=o[0][1])||d(t,"srcset",l),X(n.src,a=o[0][2])||d(n,"src",a),d(n,"alt","icon"),d(e,"class","inline-block w-6")},m(u,h){b(u,e,h),w(e,r),w(r,t),w(r,i),w(r,n),b(u,s,h),b(u,f,h)},p(u,h){h&1&&l!==(l=u[0][1])&&d(t,"srcset",l),h&1&&!X(n.src,a=u[0][2])&&d(n,"src",a),h&1&&c!==(c=u[0][0]+"")&&ne(f,c)},d(u){u&&(m(e),m(s),m(f))}}}function Lt(o){let e,r,t,l,i,n,a,s,c=o[0][0]+"",f;return{c(){e=A("figure"),r=A("picture"),t=A("source"),i=E(),n=A("img"),s=E(),f=_(c),this.h()},l(u){e=v(u,"FIGURE",{class:!0});var h=U(e);r=v(h,"PICTURE",{});var g=U(r);t=v(g,"SOURCE",{srcset:!0}),i=R(g),n=v(g,"IMG",{src:!0,alt:!0}),g.forEach(m),h.forEach(m),s=R(u),f=z(u,c),this.h()},h(){Ue(t,l=o[0][1])||d(t,"srcset",l),X(n.src,a=o[0][2])||d(n,"src",a),d(n,"alt","icon"),d(e,"class","inline-block w-6")},m(u,h){b(u,e,h),w(e,r),w(r,t),w(r,i),w(r,n),b(u,s,h),b(u,f,h)},p(u,h){h&1&&l!==(l=u[0][1])&&d(t,"srcset",l),h&1&&!X(n.src,a=u[0][2])&&d(n,"src",a),h&1&&c!==(c=u[0][0]+"")&&ne(f,c)},d(u){u&&(m(e),m(s),m(f))}}}function St(o){let e,r,t="To make things, you need the right tools, and you need to know the right language. I dig these tools. I know these languages.",l,i,n,a,s,c;return n=new be({props:{id:10,items:[["Laravel",nt,rt],["React",at,it],["React Native",ot,ct],["Vue",mt,ht],["NodeJS",st,lt],["Wordpress",Ze,$e],["MySql",ft,ut],["Mongo",et,tt],["Xcode",dt,gt],[".NET",pt,At]],theTransition:L,options:{y:"20vw",duration:400},spacing:100,itemClass:"text-lg flex items-center gap-4",$$slots:{default:[It,({item:f})=>({0:f}),({item:f})=>f?1:0]},$$scope:{ctx:o}}}),s=new be({props:{id:20,theTransition:L,options:{y:"20vw",duration:400},spacing:100,itemClass:"text-lg flex items-center gap-4",items:[["Javascript",bt,yt],["PHP",vt,wt],["Python",Bt,xt],["C#",jt,Dt],["Java",kt,Ut],["HTML",Et,Rt],["CSS",Ct,Ot]],$$slots:{default:[Lt,({item:f})=>({0:f}),({item:f})=>f?1:0]},$$scope:{ctx:o}}}),{c(){e=A("section"),r=A("div"),r.textContent=t,l=E(),i=A("div"),O(n.$$.fragment),a=E(),O(s.$$.fragment),this.h()},l(f){e=v(f,"SECTION",{class:!0});var u=U(e);r=v(u,"DIV",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-1q0g2cb"&&(r.textContent=t),l=R(u),i=v(u,"DIV",{class:!0});var h=U(i);j(n.$$.fragment,h),a=R(h),j(s.$$.fragment,h),h.forEach(m),u.forEach(m),this.h()},h(){d(r,"class","text-5xl text-right"),d(i,"class","flex wrap justify-center gap-12 mt-8"),d(e,"class","p-4")},m(f,u){b(f,e,u),w(e,r),w(e,l),w(e,i),D(n,i,null),w(i,a),D(s,i,null),c=!0},p(f,[u]){const h={};u&3&&(h.$$scope={dirty:u,ctx:f}),n.$set(h);const g={};u&3&&(g.$$scope={dirty:u,ctx:f}),s.$set(g)},i(f){c||(p(n.$$.fragment,f),p(s.$$.fragment,f),c=!0)},o(f){y(n.$$.fragment,f),y(s.$$.fragment,f),c=!1},d(f){f&&m(e),B(n),B(s)}}}class Nt extends K{constructor(e){super(),Y(this,e,null,St,Q,{})}}const Pt=""+new URL("../assets/platformer.25a479fe.gif",import.meta.url).href;function Ft(o){let e,r=`<div class="text-5xl text-right">So I do a lot on the web. But I also like to make things for your phone. And I&#39;m just starting to love making games with my kids.</div> <div class="space-y-8 md:space-y-0 md:flex md:gap-8 justify-center max-w-6xl mx-auto mt-8"><div><figure class="border-md"><img src="${Pt}" alt="Animated gif of a platformer game"/></figure></div> <div><p class="text-xl">A platformer that I am making with my children using the Godot Engine. A work in progress. So much fun!</p></div></div>`;return{c(){e=A("section"),e.innerHTML=r,this.h()},l(t){e=v(t,"SECTION",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-m6w6k6"&&(e.innerHTML=r),this.h()},h(){d(e,"class","p-4")},m(t,l){b(t,e,l)},p:I,i:I,o:I,d(t){t&&m(e)}}}class Tt extends K{constructor(e){super(),Y(this,e,null,Ft,Q,{})}}const Jt=""+new URL("../assets/damien-robin-Ef7YlDOVTZw-unsplash.f647a6c8.webp",import.meta.url).href,Qt=""+new URL("../assets/ben-dutton-16ziVZtz8vA-unsplash.2f945201.webp",import.meta.url).href,Kt=""+new URL("../assets/lauren-pandolfi-sbymMSXYHvo-unsplash.74251c40.webp",import.meta.url).href,Yt=""+new URL("../assets/ryan-wilson-HkF6feHrGBE-unsplash.fec11aaf.webp",import.meta.url).href,Wt=""+new URL("../assets/towfiqu-barbhuiya-HNPrWOH2Z8U-unsplash.390bba8d.webp",import.meta.url).href;function Ht(o){let e,r="Developer. Designer. Friend.",t,l;return{c(){e=A("h2"),e.textContent=r,this.h()},l(i){e=v(i,"H2",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-jcohng"&&(e.textContent=r),this.h()},h(){d(e,"class","text-4xl")},m(i,n){b(i,e,n),l=!0},p:I,i(i){l||(i&&V(()=>{l&&(t||(t=x(e,L,{y:"20vh"},!0)),t.run(1))}),l=!0)},o(i){i&&(t||(t=x(e,L,{y:"20vh"},!1)),t.run(0)),l=!1},d(i){i&&m(e),i&&t&&t.end()}}}function _t(o){let e,r,t,l,i,n,a,s,c,f,u,h,g,P,$,F,ee,T,te,J,q;return n=new Ye({props:{text:"James Hamann",backgrounds:o[0]}}),s=new Ce({props:{theTransition:L,className:"text-center mt-8",$$slots:{default:[Ht]},$$scope:{ctx:o}}}),f=new se({props:{id:0}}),h=new Ve({}),P=new se({props:{id:1}}),F=new Nt({}),T=new se({props:{id:2}}),J=new Tt({}),{c(){e=A("meta"),r=E(),t=A("div"),l=A("section"),i=A("div"),O(n.$$.fragment),a=E(),O(s.$$.fragment),c=E(),O(f.$$.fragment),u=E(),O(h.$$.fragment),g=E(),O(P.$$.fragment),$=E(),O(F.$$.fragment),ee=E(),O(T.$$.fragment),te=E(),O(J.$$.fragment),this.h()},l(k){const S=Ie("svelte-2dtrst",document.head);e=v(S,"META",{name:!0,content:!0}),S.forEach(m),r=R(k),t=v(k,"DIV",{class:!0});var C=U(t);l=v(C,"SECTION",{});var G=U(l);i=v(G,"DIV",{class:!0});var re=U(i);j(n.$$.fragment,re),re.forEach(m),a=R(G),j(s.$$.fragment,G),G.forEach(m),c=R(C),j(f.$$.fragment,C),u=R(C),j(h.$$.fragment,C),g=R(C),j(P.$$.fragment,C),$=R(C),j(F.$$.fragment,C),ee=R(C),j(T.$$.fragment,C),te=R(C),j(J.$$.fragment,C),C.forEach(m),this.h()},h(){document.title="James Hamann",d(e,"name","description"),d(e,"content","James Hamann's web developer portfolio"),d(i,"class","flex bg-black width-vw flex-1 h-screen justify-end items-end px-2"),d(t,"class","bg-black flex flex-col gap-y-12")},m(k,S){w(document.head,e),b(k,r,S),b(k,t,S),w(t,l),w(l,i),D(n,i,null),w(l,a),D(s,l,null),w(t,c),D(f,t,null),w(t,u),D(h,t,null),w(t,g),D(P,t,null),w(t,$),D(F,t,null),w(t,ee),D(T,t,null),w(t,te),D(J,t,null),q=!0},p(k,[S]){const C={};S&2&&(C.$$scope={dirty:S,ctx:k}),s.$set(C)},i(k){q||(p(n.$$.fragment,k),p(s.$$.fragment,k),p(f.$$.fragment,k),p(h.$$.fragment,k),p(P.$$.fragment,k),p(F.$$.fragment,k),p(T.$$.fragment,k),p(J.$$.fragment,k),q=!0)},o(k){y(n.$$.fragment,k),y(s.$$.fragment,k),y(f.$$.fragment,k),y(h.$$.fragment,k),y(P.$$.fragment,k),y(F.$$.fragment,k),y(T.$$.fragment,k),y(J.$$.fragment,k),q=!1},d(k){k&&(m(r),m(t)),m(e),B(n),B(s),B(f),B(h),B(P),B(F),B(T),B(J)}}}function zt(o){return[[Jt,Qt,Kt,Yt,Wt]]}class Xt extends K{constructor(e){super(),Y(this,e,zt,_t,Q,{})}}export{Xt as component,Gt as universal};
