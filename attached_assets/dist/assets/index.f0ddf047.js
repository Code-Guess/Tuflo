(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function T(){}const Et=t=>t;function Ms(t,e){for(const n in e)t[n]=e[n];return t}function Cn(t){return t()}function qt(){return Object.create(null)}function Y(t){t.forEach(Cn)}function Ge(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Re;function Ps(t,e){return Re||(Re=document.createElement("a")),Re.href=e,t===Re.href}function Os(t){return Object.keys(t).length===0}function We(t,e,n,s){if(t){const r=Tn(t,e,n,s);return t[0](r)}}function Tn(t,e,n,s){return t[1]&&s?Ms(n.ctx.slice(),t[1](s(e))):n.ctx}function Je(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],a=Math.max(e.dirty.length,r.length);for(let o=0;o<a;o+=1)i[o]=e.dirty[o]|r[o];return i}return e.dirty|r}return e.dirty}function Ke(t,e,n,s,r,i){if(r){const a=Tn(e,n,s,i);t.p(a,r)}}function Qe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const Dn=typeof window<"u";let Mn=Dn?()=>window.performance.now():()=>Date.now(),At=Dn?t=>requestAnimationFrame(t):T;const Se=new Set;function Pn(t){Se.forEach(e=>{e.c(t)||(Se.delete(e),e.f())}),Se.size!==0&&At(Pn)}function On(t){let e;return Se.size===0&&At(Pn),{promise:new Promise(n=>{Se.add(e={c:t,f:n})}),abort(){Se.delete(e)}}}function p(t,e){t.appendChild(e)}function Ln(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ls(t){const e=y("style");return Bs(Ln(t),e),e.sheet}function Bs(t,e){return p(t.head||t,e),e.sheet}function S(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function Xe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function M(){return H(" ")}function Rs(){return H("")}function U(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Ht(t){return function(e){e.target===this&&t.call(this,e)}}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ns(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function jt(t,e){t.value=e==null?"":e}function X(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Z(t,e,n){t.classList[n?"add":"remove"](e)}function Bn(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}const Ve=new Map;let qe=0;function Fs(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zs(t,e){const n={stylesheet:Ls(e),rules:{}};return Ve.set(t,n),n}function pt(t,e,n,s,r,i,a,o=0){const c=16.666/s;let l=`{
`;for(let E=0;E<=1;E+=c){const v=e+(n-e)*i(E);l+=E*100+`%{${a(v,1-v)}}
`}const f=l+`100% {${a(n,1-n)}}
}`,u=`__svelte_${Fs(f)}_${o}`,d=Ln(t),{stylesheet:m,rules:_}=Ve.get(d)||zs(d,t);_[u]||(_[u]=!0,m.insertRule(`@keyframes ${u} ${f}`,m.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${u} ${s}ms linear ${r}ms 1 both`,qe+=1,u}function gt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),qe-=r,qe||Vs())}function Vs(){At(()=>{qe||(Ve.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&$(e)}),Ve.clear())})}let Me;function Te(t){Me=t}function Ct(){if(!Me)throw new Error("Function called outside component initialization");return Me}function it(t){Ct().$$.on_mount.push(t)}function qs(t){Ct().$$.on_destroy.push(t)}function Rn(){const t=Ct();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Bn(e,n,{cancelable:s});return r.slice().forEach(a=>{a.call(t,i)}),!i.defaultPrevented}return!0}}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Ce=[],_t=[],Fe=[],Ut=[],Hs=Promise.resolve();let bt=!1;function js(){bt||(bt=!0,Hs.then(Nn))}function ge(t){Fe.push(t)}const at=new Set;let Ne=0;function Nn(){const t=Me;do{for(;Ne<Ce.length;){const e=Ce[Ne];Ne++,Te(e),Us(e.$$)}for(Te(null),Ce.length=0,Ne=0;_t.length;)_t.pop()();for(let e=0;e<Fe.length;e+=1){const n=Fe[e];at.has(n)||(at.add(n),n())}Fe.length=0}while(Ce.length);for(;Ut.length;)Ut.pop()();bt=!1,at.clear(),Te(t)}function Us(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ge)}}let Ae;function Fn(){return Ae||(Ae=Promise.resolve(),Ae.then(()=>{Ae=null})),Ae}function De(t,e,n){t.dispatchEvent(Bn(`${e?"intro":"outro"}${n}`))}const ze=new Set;let re;function le(){re={r:0,c:[],p:re}}function ce(){re.r||Y(re.c),re=re.p}function I(t,e){t&&t.i&&(ze.delete(t),t.i(e))}function A(t,e,n,s){if(t&&t.o){if(ze.has(t))return;ze.add(t),re.c.push(()=>{ze.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const zn={duration:0};function xs(t,e,n){let s=e(t,n),r=!1,i,a,o=0;function c(){i&&gt(t,i)}function l(){const{delay:u=0,duration:d=300,easing:m=Et,tick:_=T,css:b}=s||zn;b&&(i=pt(t,0,1,d,u,m,b,o++)),_(0,1);const E=Mn()+u,v=E+d;a&&a.abort(),r=!0,ge(()=>De(t,!0,"start")),a=On(k=>{if(r){if(k>=v)return _(1,0),De(t,!0,"end"),c(),r=!1;if(k>=E){const C=m((k-E)/d);_(C,1-C)}}return r})}let f=!1;return{start(){f||(f=!0,gt(t),Ge(s)?(s=s(),Fn().then(l)):l())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function xt(t,e,n,s){let r=e(t,n),i=s?0:1,a=null,o=null,c=null;function l(){c&&gt(t,c)}function f(d,m){const _=d.b-i;return m*=Math.abs(_),{a:i,b:d.b,d:_,duration:m,start:d.start,end:d.start+m,group:d.group}}function u(d){const{delay:m=0,duration:_=300,easing:b=Et,tick:E=T,css:v}=r||zn,k={start:Mn()+m,b:d};d||(k.group=re,re.r+=1),a||o?o=k:(v&&(l(),c=pt(t,i,d,_,m,b,v)),d&&E(0,1),a=f(k,_),ge(()=>De(t,d,"start")),On(C=>{if(o&&C>o.start&&(a=f(o,_),o=null,De(t,a.b,"start"),v&&(l(),c=pt(t,i,a.b,a.duration,0,b,r.css))),a){if(C>=a.end)E(i=a.b,1-i),De(t,a.b,"end"),o||(a.b?l():--a.group.r||Y(a.group.c)),a=null;else if(C>=a.start){const g=C-a.start;i=a.a+a.d*b(g/a.duration),E(i,1-i)}}return!!(a||o)}))}return{run(d){Ge(r)?Fn().then(()=>{r=r(),u(d)}):u(d)},end(){l(),a=o=null}}}function Gs(t,e){t.d(1),e.delete(t.key)}function Ws(t,e,n,s,r,i,a,o,c,l,f,u){let d=t.length,m=i.length,_=d;const b={};for(;_--;)b[t[_].key]=_;const E=[],v=new Map,k=new Map;for(_=m;_--;){const w=u(r,i,_),B=n(w);let V=a.get(B);V?s&&V.p(w,e):(V=l(B,w),V.c()),v.set(B,E[_]=V),B in b&&k.set(B,Math.abs(_-b[B]))}const C=new Set,g=new Set;function D(w){I(w,1),w.m(o,f),a.set(w.key,w),f=w.first,m--}for(;d&&m;){const w=E[m-1],B=t[d-1],V=w.key,ee=B.key;w===B?(f=w.first,d--,m--):v.has(ee)?!a.has(V)||C.has(V)?D(w):g.has(ee)?d--:k.get(V)>k.get(ee)?(g.add(V),D(w)):(C.add(ee),d--):(c(B,a),d--)}for(;d--;){const w=t[d];v.has(w.key)||c(w,a)}for(;m;)D(E[m-1]);return E}function L(t){t&&t.c()}function P(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||ge(()=>{const a=t.$$.on_mount.map(Cn).filter(Ge);t.$$.on_destroy?t.$$.on_destroy.push(...a):Y(a),t.$$.on_mount=[]}),i.forEach(ge)}function O(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Js(t,e){t.$$.dirty[0]===-1&&(Ce.push(t),js(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,s,r,i,a,o=[-1]){const c=Me;Te(t);const l=t.$$={fragment:null,ctx:[],props:i,update:T,not_equal:r,bound:qt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:qt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,...m)=>{const _=m.length?m[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),f&&Js(t,u)),d}):[],l.update(),f=!0,Y(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const u=Ns(e.target);l.fragment&&l.fragment.l(u),u.forEach($)}else l.fragment&&l.fragment.c();e.intro&&I(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Nn()}Te(c)}class z{$destroy(){O(this,1),this.$destroy=T}$on(e,n){if(!Ge(n))return T;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Os(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let Ie=[{song_name:"Laisse",lofi_artist:"Beat local",lofi_preview_url:"/audio/lofi/Laisse_beat.mp3",original_preview_url:"/audio/original/Laisse_original.mp3",original_artist:"Lord Makhaveli",images:[{height:266,url:"/images/Laisse.png",width:474}]}];const Pe=t=>t.reduce((e,n)=>e+n,0);function Ks(t){var e=t/36e5,n=Math.floor(e),s=n>9?n:"0"+n,r=(e-n)*60,i=Math.floor(r),a=i>9?i:"0"+i,o=(r-i)*60,c=Math.floor(o),l=c>9?c:"0"+c;return s+":"+a+":"+l}function Vn(){const t=new Date(2022,10,26,0),e=new Date;return Math.floor(Qs(t,e))}function Gt(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}function Qs(t,e){var n=864e5;return(Gt(e).getTime()-Gt(t).getTime())/n}function Xs(t){let e,n,s,r;return{c(){e=W("svg"),n=W("path"),h(n,"d","M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"),h(e,"class","icon info svelte-1vfpmwa"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(i,a){S(i,e,a),p(e,n),s||(r=[U(e,"click",t[0]),U(e,"keypress",t[1])],s=!0)},p:T,i:T,o:T,d(i){i&&$(e),s=!1,Y(r)}}}function Zs(t){function e(s){x.call(this,t,s)}function n(s){x.call(this,t,s)}return[e,n]}class Ys extends z{constructor(e){super(),F(this,e,Zs,Xs,N,{})}}function er(t){let e,n,s,r;return{c(){e=W("svg"),n=W("path"),h(n,"d","M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"),h(e,"class","icon"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"height","48"),h(e,"width","48")},m(i,a){S(i,e,a),p(e,n),s||(r=[U(e,"click",t[0]),U(e,"keypress",t[1])],s=!0)},p:T,i:T,o:T,d(i){i&&$(e),s=!1,Y(r)}}}function tr(t){function e(s){x.call(this,t,s)}function n(s){x.call(this,t,s)}return[e,n]}class nr extends z{constructor(e){super(),F(this,e,tr,er,N,{})}}function sr(t){let e,n,s,r;return{c(){e=W("svg"),n=W("path"),h(n,"d","M12 20v-6M6 20V10M18 20V4"),h(e,"class","icon"),h(e,"aria-hidden","true"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"width","24"),h(e,"height","24"),h(e,"viewBox","0 0 24 24"),h(e,"fill","none"),h(e,"stroke","currentColor"),h(e,"stroke-width","2"),h(e,"stroke-linecap","round"),h(e,"stroke-linejoin","round")},m(i,a){S(i,e,a),p(e,n),s||(r=[U(e,"click",t[0]),U(e,"keypress",t[1])],s=!0)},p:T,i:T,o:T,d(i){i&&$(e),s=!1,Y(r)}}}function rr(t){function e(s){x.call(this,t,s)}function n(s){x.call(this,t,s)}return[e,n]}class ir extends z{constructor(e){super(),F(this,e,rr,sr,N,{})}}function ar(t){let e,n;return{c(){e=W("svg"),n=W("path"),h(n,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 384 512"),h(e,"class","icon play-button svelte-176ht4i")},m(s,r){S(s,e,r),p(e,n)},p:T,i:T,o:T,d(s){s&&$(e)}}}class or extends z{constructor(e){super(),F(this,e,null,ar,N,{})}}function lr(t){let e,n,s,r;const i=t[1].default,a=We(i,t,t[0],null);return{c(){e=y("button"),a&&a.c(),h(e,"class","play-button svelte-1r4g1lm")},m(o,c){S(o,e,c),a&&a.m(e,null),n=!0,s||(r=U(e,"click",t[2]),s=!0)},p(o,[c]){a&&a.p&&(!n||c&1)&&Ke(a,i,o,o[0],n?Je(i,o[0],c,null):Qe(o[0]),null)},i(o){n||(I(a,o),n=!0)},o(o){A(a,o),n=!1},d(o){o&&$(e),a&&a.d(o),s=!1,r()}}}function cr(t,e,n){let{$$slots:s={},$$scope:r}=e;function i(a){x.call(this,t,a)}return t.$$set=a=>{"$$scope"in a&&n(0,r=a.$$scope)},[r,s,i]}class qn extends z{constructor(e){super(),F(this,e,cr,lr,N,{})}}function ur(t){let e;return{c(){e=y("div"),e.innerHTML=`<div class="bar svelte-95zgbf"></div> 
  <div class="bar svelte-95zgbf"></div> 
  <div class="bar svelte-95zgbf"></div>`,h(e,"class","icon-bars svelte-95zgbf")},m(n,s){S(n,e,s)},p:T,i:T,o:T,d(n){n&&$(e)}}}class fr extends z{constructor(e){super(),F(this,e,null,ur,N,{})}}function dr(t){let e,n;return e=new fr({}),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function hr(t){let e,n;return e=new or({}),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function mr(t){let e,n,s,r;const i=[hr,dr],a=[];function o(c,l){return c[0]?1:0}return e=o(t),n=a[e]=i[e](t),{c(){n.c(),s=Rs()},m(c,l){a[e].m(c,l),S(c,s,l),r=!0},p(c,l){let f=e;e=o(c),e!==f&&(le(),A(a[f],1,1,()=>{a[f]=null}),ce(),n=a[e],n||(n=a[e]=i[e](c),n.c()),I(n,1),n.m(s.parentNode,s))},i(c){r||(I(n),r=!0)},o(c){A(n),r=!1},d(c){a[e].d(c),c&&$(s)}}}function pr(t){let e,n;return e=new qn({props:{$$slots:{default:[mr]},$$scope:{ctx:t}}}),e.$on("click",t[1]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,[r]){const i={};r&5&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function gr(t,e,n){let{nowPlaying:s}=e;function r(i){x.call(this,t,i)}return t.$$set=i=>{"nowPlaying"in i&&n(0,s=i.nowPlaying)},[s,r]}class Hn extends z{constructor(e){super(),F(this,e,gr,pr,N,{nowPlaying:0})}}function _r(t){let e,n;return{c(){e=W("svg"),n=W("path"),h(n,"d","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"),h(e,"class","icon play-button svelte-1pcoo8b"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 512 512")},m(s,r){S(s,e,r),p(e,n)},p:T,i:T,o:T,d(s){s&&$(e)}}}class br extends z{constructor(e){super(),F(this,e,null,_r,N,{})}}function yr(t){let e,n;return e=new br({}),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function vr(t){let e,n;return e=new qn({props:{$$slots:{default:[yr]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,[r]){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function wr(t){function e(n){x.call(this,t,n)}return[e]}class jn extends z{constructor(e){super(),F(this,e,wr,vr,N,{})}}function $r(t){let e,n;return e=new Ys({}),e.$on("click",t[7]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p:T,i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function Ir(t){let e,n;return e=new nr({}),e.$on("click",t[6]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p:T,i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function Sr(t){let e,n,s,r,i,a,o,c,l,f,u;n=new ir({}),n.$on("click",t[3]),i=new Hn({props:{nowPlaying:t[0]}}),i.$on("click",t[4]),o=new jn({}),o.$on("click",t[5]);const d=[Ir,$r],m=[];function _(b,E){return b[1]?0:1}return l=_(t),f=m[l]=d[l](t),{c(){e=y("div"),L(n.$$.fragment),s=M(),r=y("div"),L(i.$$.fragment),a=M(),L(o.$$.fragment),c=M(),f.c(),h(r,"class","flex-row svelte-1w6nz3i"),Z(r,"hidePlayButtons",t[1]),h(e,"class","footer svelte-1w6nz3i")},m(b,E){S(b,e,E),P(n,e,null),p(e,s),p(e,r),P(i,r,null),p(r,a),P(o,r,null),p(e,c),m[l].m(e,null),u=!0},p(b,[E]){const v={};E&1&&(v.nowPlaying=b[0]),i.$set(v),(!u||E&2)&&Z(r,"hidePlayButtons",b[1]);let k=l;l=_(b),l===k?m[l].p(b,E):(le(),A(m[k],1,1,()=>{m[k]=null}),ce(),f=m[l],f?f.p(b,E):(f=m[l]=d[l](b),f.c()),I(f,1),f.m(e,null))},i(b){u||(I(n.$$.fragment,b),I(i.$$.fragment,b),I(o.$$.fragment,b),I(f),u=!0)},o(b){A(n.$$.fragment,b),A(i.$$.fragment,b),A(o.$$.fragment,b),A(f),u=!1},d(b){b&&$(e),O(n),O(i),O(o),m[l].d()}}}function kr(t,e,n){let{nowPlaying:s}=e,{showFinalPage:r}=e;const i=Rn(),a=()=>i("stats"),o=()=>i("playSong"),c=()=>i("skipSegment"),l=()=>i("info"),f=()=>i("tutorial");return t.$$set=u=>{"nowPlaying"in u&&n(0,s=u.nowPlaying),"showFinalPage"in u&&n(1,r=u.showFinalPage)},[s,r,i,a,o,c,l,f]}class Er extends z{constructor(e){super(),F(this,e,kr,Sr,N,{nowPlaying:0,showFinalPage:1})}}function Wt(t,e,n){const s=t.slice();return s[3]=e[n],s[5]=n,s}function Jt(t){let e;return{c(){e=y("span"),e.textContent="\u2665",h(e,"class","heart svelte-y6q7go"),h(e,"aria-hidden","true"),Z(e,"used",t[5]<t[0].length)},m(n,s){S(n,e,s)},p(n,s){s&1&&Z(e,"used",n[5]<n[0].length)},d(n){n&&$(e)}}}function Ar(t){let e,n,s=t[1],r=[];for(let i=0;i<s.length;i+=1)r[i]=Jt(Wt(t,s,i));return{c(){e=y("div");for(let i=0;i<r.length;i+=1)r[i].c();h(e,"class","hearts svelte-y6q7go"),h(e,"aria-label",n=`${t[2]} vie${t[2]===1?"":"s"} restante${t[2]===1?"":"s"}`)},m(i,a){S(i,e,a);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(i,[a]){if(a&3){s=i[1];let o;for(o=0;o<s.length;o+=1){const c=Wt(i,s,o);r[o]?r[o].p(c,a):(r[o]=Jt(c),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}a&4&&n!==(n=`${i[2]} vie${i[2]===1?"":"s"} restante${i[2]===1?"":"s"}`)&&h(e,"aria-label",n)},i:T,o:T,d(i){i&&$(e),Xe(r,i)}}}function Cr(t,e,n){let s,{guesses:r}=e,{increments:i}=e;return t.$$set=a=>{"guesses"in a&&n(0,r=a.guesses),"increments"in a&&n(1,i=a.increments)},t.$$.update=()=>{t.$$.dirty&3&&n(2,s=Math.max(i.length-r.length,0))},[r,i,s]}class Tr extends z{constructor(e){super(),F(this,e,Cr,Ar,N,{guesses:0,increments:1})}}function Dr(t){let e,n,s;return{c(){e=W("svg"),n=W("line"),s=W("line"),h(n,"x1","18"),h(n,"y1","6"),h(n,"x2","6"),h(n,"y2","18"),h(s,"x1","6"),h(s,"y1","6"),h(s,"x2","18"),h(s,"y2","18"),h(e,"class","icon svelte-11m6arh"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"width","24"),h(e,"height","24"),h(e,"viewBox","0 0 24 24"),h(e,"stroke-width","2"),h(e,"stroke-linecap","round"),h(e,"stroke-linejoin","round"),X(e,"stroke",t[0]?"#b9951fb8":"#e20909b8")},m(r,i){S(r,e,i),p(e,n),p(e,s)},p(r,[i]){i&1&&X(e,"stroke",r[0]?"#b9951fb8":"#e20909b8")},i:T,o:T,d(r){r&&$(e)}}}function Mr(t,e,n){let{correctArtist:s}=e;return t.$$set=r=>{"correctArtist"in r&&n(0,s=r.correctArtist)},[s]}class Pr extends z{constructor(e){super(),F(this,e,Mr,Dr,N,{correctArtist:0})}}function yt(t,{delay:e=0,duration:n=400,easing:s=Et}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function Kt(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function Qt(t){let e,n,s,r,i=t[0][t[4]].guess+"",a,o,c;return n=new Pr({props:{correctArtist:t[0][t[4]].status==="correctArtist"}}),{c(){e=y("div"),L(n.$$.fragment),s=M(),r=y("div"),a=H(i),h(r,"class","song svelte-3vfzmd"),h(e,"class","guess svelte-3vfzmd")},m(l,f){S(l,e,f),P(n,e,null),p(e,s),p(e,r),p(r,a),c=!0},p(l,f){const u={};f&1&&(u.correctArtist=l[0][l[4]].status==="correctArtist"),n.$set(u),(!c||f&1)&&i!==(i=l[0][l[4]].guess+"")&&ne(a,i)},i(l){c||(I(n.$$.fragment,l),o||ge(()=>{o=xs(e,yt,{}),o.start()}),c=!0)},o(l){A(n.$$.fragment,l),c=!1},d(l){l&&$(e),O(n)}}}function Xt(t){let e,n,s,r=t[4]<t[0].length&&Qt(t);return{c(){e=y("div"),r&&r.c(),n=M(),h(e,"class","guess-wrapper svelte-3vfzmd")},m(i,a){S(i,e,a),r&&r.m(e,null),p(e,n),s=!0},p(i,a){i[4]<i[0].length?r?(r.p(i,a),a&1&&I(r,1)):(r=Qt(i),r.c(),I(r,1),r.m(e,n)):r&&(le(),A(r,1,1,()=>{r=null}),ce())},i(i){s||(I(r),s=!0)},o(i){A(r),s=!1},d(i){i&&$(e),r&&r.d()}}}function Or(t){let e,n,s=t[1],r=[];for(let a=0;a<s.length;a+=1)r[a]=Xt(Kt(t,s,a));const i=a=>A(r[a],1,1,()=>{r[a]=null});return{c(){e=y("div");for(let a=0;a<r.length;a+=1)r[a].c();h(e,"class","guesses svelte-3vfzmd")},m(a,o){S(a,e,o);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(a,[o]){if(o&3){s=a[1];let c;for(c=0;c<s.length;c+=1){const l=Kt(a,s,c);r[c]?(r[c].p(l,o),I(r[c],1)):(r[c]=Xt(l),r[c].c(),I(r[c],1),r[c].m(e,null))}for(le(),c=s.length;c<r.length;c+=1)i(c);ce()}},i(a){if(!n){for(let o=0;o<s.length;o+=1)I(r[o]);n=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)A(r[o]);n=!1},d(a){a&&$(e),Xe(r,a)}}}function Lr(t,e,n){let{guesses:s}=e,{increments:r}=e;return t.$$set=i=>{"guesses"in i&&n(0,s=i.guesses),"increments"in i&&n(1,r=i.increments)},[s,r]}class Br extends z{constructor(e){super(),F(this,e,Lr,Or,N,{guesses:0,increments:1})}}let ot=["laisse - lord makhaveli"];function Rr(t){let e,n;return{c(){e=W("svg"),n=W("path"),h(n,"d","M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"),h(e,"class","search-icon svelte-1dtg66a"),h(e,"fill","#000000"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 50 50")},m(s,r){S(s,e,r),p(e,n)},p:T,i:T,o:T,d(s){s&&$(e)}}}class Nr extends z{constructor(e){super(),F(this,e,null,Rr,N,{})}}function Fr(t){let e,n,s,r;const i=t[1].default,a=We(i,t,t[0],null);return{c(){e=y("button"),a&&a.c(),h(e,"class","submit-button svelte-1ug2wj3")},m(o,c){S(o,e,c),a&&a.m(e,null),n=!0,s||(r=U(e,"click",t[2]),s=!0)},p(o,[c]){a&&a.p&&(!n||c&1)&&Ke(a,i,o,o[0],n?Je(i,o[0],c,null):Qe(o[0]),null)},i(o){n||(I(a,o),n=!0)},o(o){A(a,o),n=!1},d(o){o&&$(e),a&&a.d(o),s=!1,r()}}}function zr(t,e,n){let{$$slots:s={},$$scope:r}=e;function i(a){x.call(this,t,a)}return t.$$set=a=>{"$$scope"in a&&n(0,r=a.$$scope)},[r,s,i]}class Tt extends z{constructor(e){super(),F(this,e,zr,Fr,N,{})}}function Zt(t,e,n){const s=t.slice();return s[16]=e[n],s}function Yt(t){let e,n=t[2],s=[];for(let r=0;r<n.length;r+=1)s[r]=en(Zt(t,n,r));return{c(){e=y("div");for(let r=0;r<s.length;r+=1)s[r].c();h(e,"class","auto-complete-list svelte-13vnjs0")},m(r,i){S(r,e,i);for(let a=0;a<s.length;a+=1)s[a].m(e,null)},p(r,i){if(i&36){n=r[2];let a;for(a=0;a<n.length;a+=1){const o=Zt(r,n,a);s[a]?s[a].p(o,i):(s[a]=en(o),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=n.length}},d(r){r&&$(e),Xe(s,r)}}}function en(t){let e,n=t[16]+"",s,r,i,a;function o(){return t[7](t[16])}function c(){return t[8](t[16])}return{c(){e=y("div"),s=H(n),r=M(),h(e,"class","auto-complete-option svelte-13vnjs0")},m(l,f){S(l,e,f),p(e,s),p(e,r),i||(a=[U(e,"click",o),U(e,"keypress",c)],i=!0)},p(l,f){t=l,f&4&&n!==(n=t[16]+"")&&ne(s,n)},d(l){l&&$(e),i=!1,Y(a)}}}function Vr(t){let e;return{c(){e=H("VALIDER")},m(n,s){S(n,e,s)},d(n){n&&$(e)}}}function qr(t){let e,n,s,r,i,a,o,c,l,f,u,d,m=t[2].length>0&&t[3]&&Yt(t);return i=new Nr({}),l=new Tt({props:{$$slots:{default:[Vr]},$$scope:{ctx:t}}}),l.$on("click",t[6]),{c(){e=y("div"),n=y("div"),m&&m.c(),s=M(),r=y("div"),L(i.$$.fragment),a=M(),o=y("input"),c=M(),L(l.$$.fragment),h(o,"class","search-input svelte-13vnjs0"),h(o,"placeholder","Tu reconnais cette m\xE9lodie ?"),h(r,"class","input-container svelte-13vnjs0"),h(n,"class","auto-complete-container svelte-13vnjs0"),h(e,"class","flex-row svelte-13vnjs0")},m(_,b){S(_,e,b),p(e,n),m&&m.m(n,null),p(n,s),p(n,r),P(i,r,null),p(r,a),p(r,o),jt(o,t[1]),t[12](o),p(e,c),P(l,e,null),f=!0,u||(d=[U(o,"keypress",t[6]),U(o,"input",t[9]),U(o,"input",t[10]),U(o,"focus",t[11])],u=!0)},p(_,[b]){_[2].length>0&&_[3]?m?m.p(_,b):(m=Yt(_),m.c(),m.m(n,s)):m&&(m.d(1),m=null),b&2&&o.value!==_[1]&&jt(o,_[1]);const E={};b&524288&&(E.$$scope={dirty:b,ctx:_}),l.$set(E)},i(_){f||(I(i.$$.fragment,_),I(l.$$.fragment,_),f=!0)},o(_){A(i.$$.fragment,_),A(l.$$.fragment,_),f=!1},d(_){_&&$(e),m&&m.d(),O(i),t[12](null),O(l),u=!1,Y(d)}}}function Hr(t,e,n){let s,r="",i=[],a=!1;const o=Rn();async function c(){n(3,a=!0),n(2,i=[]);const k=30;let C=0;if(r!==""){for(let g=0;g<ot.length;g++){const D=ot[g];if(D.replace(/['. ]/g,"").includes(r.toLowerCase().replace(/['. ]/g,""))&&(i.push(D),C+=1,C>k))return}i.sort((g,D)=>g.length-D.length),n(3,a=!0)}}function l(k){n(2,i=[]),n(1,r=k),n(3,a=!1)}function f(){o("guess",r),n(1,r="")}function u(k){s.value!==""&&(k.key===void 0||k.key==="Enter")&&ot.includes(s.value)&&f()}const d=k=>l(k),m=k=>l(k);function _(){r=this.value,n(1,r)}const b=()=>c(),E=()=>c();function v(k){_t[k?"unshift":"push"](()=>{s=k,n(0,s)})}return[s,r,i,a,c,l,u,d,m,_,b,E,v]}class jr extends z{constructor(e){super(),F(this,e,Hr,qr,N,{})}}function tn(t,e,n){const s=t.slice();return s[3]=e[n],s[5]=n,s}function nn(t){let e,n=`${Pe(t[0].slice(0,t[5]))}s`,s=`${t[3]}s`;return{c(){e=y("div"),h(e,"class","inner-segment svelte-n295vd"),X(e,"visibility",t[5]<=t[1].length?"visible":"hidden"),X(e,"animation-delay",n),X(e,"animation-duration",s)},m(r,i){S(r,e,i)},p(r,i){i&3&&X(e,"visibility",r[5]<=r[1].length?"visible":"hidden"),i&1&&n!==(n=`${Pe(r[0].slice(0,r[5]))}s`)&&X(e,"animation-delay",n),i&1&&s!==(s=`${r[3]}s`)&&X(e,"animation-duration",s)},d(r){r&&$(e)}}}function sn(t,e){let n,s,r=e[2]&&nn(e);return{key:t,first:null,c(){n=y("div"),r&&r.c(),s=M(),h(n,"class","segment svelte-n295vd"),X(n,"width",e[3]/Pe(e[0])*100+"%"),Z(n,"active-segment",e[5]<e[1].length+1),this.first=n},m(i,a){S(i,n,a),r&&r.m(n,null),p(n,s)},p(i,a){e=i,e[2]?r?r.p(e,a):(r=nn(e),r.c(),r.m(n,s)):r&&(r.d(1),r=null),a&1&&X(n,"width",e[3]/Pe(e[0])*100+"%"),a&3&&Z(n,"active-segment",e[5]<e[1].length+1)},d(i){i&&$(n),r&&r.d()}}}function Ur(t){let e,n=[],s=new Map,r=t[0];const i=a=>a[5];for(let a=0;a<r.length;a+=1){let o=tn(t,r,a),c=i(o);s.set(c,n[a]=sn(c,o))}return{c(){e=y("div");for(let a=0;a<n.length;a+=1)n[a].c();h(e,"class","timeline-container svelte-n295vd")},m(a,o){S(a,e,o);for(let c=0;c<n.length;c+=1)n[c].m(e,null)},p(a,[o]){o&7&&(r=a[0],n=Ws(n,o,i,1,a,r,s,e,Gs,sn,null,tn))},i:T,o:T,d(a){a&&$(e);for(let o=0;o<n.length;o+=1)n[o].d()}}}function xr(t,e,n){let{increments:s}=e,{guesses:r}=e,{nowPlaying:i}=e;return t.$$set=a=>{"increments"in a&&n(0,s=a.increments),"guesses"in a&&n(1,r=a.guesses),"nowPlaying"in a&&n(2,i=a.nowPlaying)},t.$$.update=()=>{t.$$.dirty&4&&i&&document.querySelectorAll(".inner-segment").forEach(a=>{a.style.display="none",a.offsetHeight,a.style.display="block"})},[s,r,i]}class Gr extends z{constructor(e){super(),F(this,e,xr,Ur,N,{increments:0,guesses:1,nowPlaying:2})}}function Wr(t){let e,n,s,r,i,a;const o=t[1].default,c=We(o,t,t[0],null);return{c(){e=y("div"),n=y("div"),c&&c.c(),h(n,"class","content svelte-grhnfd"),h(e,"class","modal svelte-grhnfd")},m(l,f){S(l,e,f),p(e,n),c&&c.m(n,null),r=!0,i||(a=[U(e,"click",Ht(t[2])),U(e,"keypress",Ht(t[3]))],i=!0)},p(l,[f]){c&&c.p&&(!r||f&1)&&Ke(c,o,l,l[0],r?Je(o,l[0],f,null):Qe(l[0]),null)},i(l){r||(I(c,l),ge(()=>{s||(s=xt(e,yt,{duration:100},!0)),s.run(1)}),r=!0)},o(l){A(c,l),s||(s=xt(e,yt,{duration:100},!1)),s.run(0),r=!1},d(l){l&&$(e),c&&c.d(l),l&&s&&s.end(),i=!1,Y(a)}}}function Jr(t,e,n){let{$$slots:s={},$$scope:r}=e;function i(o){x.call(this,t,o)}function a(o){x.call(this,t,o)}return t.$$set=o=>{"$$scope"in o&&n(0,r=o.$$scope)},[r,s,i,a]}class Dt extends z{constructor(e){super(),F(this,e,Jr,Wr,N,{})}}function Kr(t){let e;return{c(){e=y("div"),e.textContent="Compris",h(e,"class","button-text svelte-1t49zbh")},m(n,s){S(n,e,s)},p:T,d(n){n&&$(e)}}}function Qr(t){let e,n,s,r,i,a,o,c,l,f,u,d,m,_,b,E;return i=new Hn({props:{nowPlaying:!1}}),f=new jn({}),b=new Tt({props:{$$slots:{default:[Kr]},$$scope:{ctx:t}}}),b.$on("click",t[0]),{c(){e=y("h1"),e.textContent="Comment jouer",n=M(),s=y("div"),r=y("div"),L(i.$$.fragment),a=M(),o=y("p"),o.textContent="\xC9coute une reprise lofi et retrouve la chanson originale",c=M(),l=y("div"),L(f.$$.fragment),u=M(),d=y("p"),d.textContent="Passe ton tour pour \xE9couter un extrait plus long",m=M(),_=y("div"),L(b.$$.fragment),h(e,"class","title svelte-1t49zbh"),h(o,"class","body svelte-1t49zbh"),h(r,"class","instruction-container svelte-1t49zbh"),h(d,"class","body svelte-1t49zbh"),h(l,"class","instruction-container svelte-1t49zbh"),h(s,"class","instructions-container svelte-1t49zbh"),h(_,"class","button-container svelte-1t49zbh")},m(v,k){S(v,e,k),S(v,n,k),S(v,s,k),p(s,r),P(i,r,null),p(r,a),p(r,o),p(s,c),p(s,l),P(f,l,null),p(l,u),p(l,d),S(v,m,k),S(v,_,k),P(b,_,null),E=!0},p(v,k){const C={};k&4&&(C.$$scope={dirty:k,ctx:v}),b.$set(C)},i(v){E||(I(i.$$.fragment,v),I(f.$$.fragment,v),I(b.$$.fragment,v),E=!0)},o(v){A(i.$$.fragment,v),A(f.$$.fragment,v),A(b.$$.fragment,v),E=!1},d(v){v&&$(e),v&&$(n),v&&$(s),O(i),O(f),v&&$(m),v&&$(_),O(b)}}}function Xr(t){let e,n;return e=new Dt({props:{$$slots:{default:[Qr]},$$scope:{ctx:t}}}),e.$on("click",t[1]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function Zr(t){function e(s){x.call(this,t,s)}function n(s){x.call(this,t,s)}return[e,n]}class Yr extends z{constructor(e){super(),F(this,e,Zr,Xr,N,{})}}const ei=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ti=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],o=t[n++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,o=a?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,u=(i&3)<<4|o>>4;let d=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(d=64)),s.push(n[f],n[u],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Un(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ti(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||l==null||u==null)throw new ni;const d=i<<2|o>>4;if(s.push(d),l!==64){const m=o<<4&240|l>>2;if(s.push(m),u!==64){const _=l<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ni extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const si=function(t){const e=Un(t);return xn.encodeByteArray(e,!0)},Gn=function(t){return si(t).replace(/\./g,"")},ri=function(t){try{return xn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=()=>ii().__FIREBASE_DEFAULTS__,oi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},li=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ri(t[1]);return e&&JSON.parse(e)},ci=()=>{try{return ei()||ai()||oi()||li()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wn=()=>{var t;return(t=ci())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function fi(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jn(){try{return typeof indexedDB=="object"}catch{return!1}}function Kn(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function di(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="FirebaseError";class ve extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=hi,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?mi(i,s):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new ve(r,o,s)}}function mi(t,e){try{let n=0,s="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){s+=t.substring(n);break}const i=t.indexOf("}",r+2);if(i===-1){s+=t.substring(n);break}const a=t.substring(r+2,i),o=e[a];s+=t.substring(n,r)+(o!=null?String(o):`<${a}?>`),n=i+1}return s}catch{return t}}function He(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(rn(i)&&rn(a)){if(!He(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function rn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=1e3,gi=2,_i=4*60*60*1e3,bi=.5;function an(t,e=pi,n=gi){const s=e*Math.pow(n,t),r=Math.round(bi*s*(Math.random()-.5)*2);return Math.min(_i,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class de{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ui;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!=null?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wi(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);s===o&&a.resolve(r)}return r}onInit(e,n){var a;const s=this.normalizeInstanceIdentifier(n),r=(a=this.onInitCallbacks.get(s))!=null?a:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vi(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vi(t){return t===he?void 0:t}function wi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yi(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Ii={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Si=R.INFO,ki={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Ei=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ki[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qn{constructor(e){this.name=e,this._logLevel=Si,this._logHandler=Ei,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ii[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Ai=(t,e)=>e.some(n=>t instanceof n);let on,ln;function Ci(){return on||(on=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ti(){return ln||(ln=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xn=new WeakMap,vt=new WeakMap,Zn=new WeakMap,lt=new WeakMap,Pt=new WeakMap;function Di(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(ue(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Xn.set(n,t)}).catch(()=>{}),Pt.set(e,t),e}function Mi(t){if(vt.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});vt.set(t,e)}let wt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pi(t){wt=t(wt)}function Oi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ct(this),e,...n);return Zn.set(s,e.sort?e.sort():[e]),ue(s)}:Ti().includes(t)?function(...e){return t.apply(ct(this),e),ue(Xn.get(this))}:function(...e){return ue(t.apply(ct(this),e))}}function Li(t){return typeof t=="function"?Oi(t):(t instanceof IDBTransaction&&Mi(t),Ai(t,Ci())?new Proxy(t,wt):t)}function ue(t){if(t instanceof IDBRequest)return Di(t);if(lt.has(t))return lt.get(t);const e=Li(t);return e!==t&&(lt.set(t,e),Pt.set(e,t)),e}const ct=t=>Pt.get(t);function Yn(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=ue(a);return s&&a.addEventListener("upgradeneeded",c=>{s(ue(a.result),c.oldVersion,c.newVersion,ue(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Bi=["get","getKey","getAll","getAllKeys","count"],Ri=["put","add","delete","clear"],ut=new Map;function cn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ut.get(e))return ut.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ri.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bi.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return ut.set(e,i),i}Pi(t=>({...t,get:(e,n,s)=>cn(e,n)||t.get(e,n,s),has:(e,n)=>!!cn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fi(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fi(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $t="@firebase/app",un="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Qn("@firebase/app"),zi="@firebase/app-compat",Vi="@firebase/analytics-compat",qi="@firebase/analytics",Hi="@firebase/app-check-compat",ji="@firebase/app-check",Ui="@firebase/auth",xi="@firebase/auth-compat",Gi="@firebase/database",Wi="@firebase/data-connect",Ji="@firebase/database-compat",Ki="@firebase/functions",Qi="@firebase/functions-compat",Xi="@firebase/installations",Zi="@firebase/installations-compat",Yi="@firebase/messaging",ea="@firebase/messaging-compat",ta="@firebase/performance",na="@firebase/performance-compat",sa="@firebase/remote-config",ra="@firebase/remote-config-compat",ia="@firebase/storage",aa="@firebase/storage-compat",oa="@firebase/firestore",la="@firebase/ai",ca="@firebase/firestore-compat",ua="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]",fa={[$t]:"fire-core",[zi]:"fire-core-compat",[qi]:"fire-analytics",[Vi]:"fire-analytics-compat",[ji]:"fire-app-check",[Hi]:"fire-app-check-compat",[Ui]:"fire-auth",[xi]:"fire-auth-compat",[Gi]:"fire-rtdb",[Wi]:"fire-data-connect",[Ji]:"fire-rtdb-compat",[Ki]:"fire-fn",[Qi]:"fire-fn-compat",[Xi]:"fire-iid",[Zi]:"fire-iid-compat",[Yi]:"fire-fcm",[ea]:"fire-fcm-compat",[ta]:"fire-perf",[na]:"fire-perf-compat",[sa]:"fire-rc",[ra]:"fire-rc-compat",[ia]:"fire-gcs",[aa]:"fire-gcs-compat",[oa]:"fire-fst",[ca]:"fire-fst-compat",[la]:"fire-vertex","fire-js":"fire-js",[ua]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Map,da=new Map,St=new Map;function fn(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){const e=t.name;if(St.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const n of je.values())fn(n,t);for(const n of da.values())fn(n,t);return!0}function Ye(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ie=new Ze("app","Firebase",ha);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}function es(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:It,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ie.create("bad-app-name",{appName:String(r)});if(n||(n=Wn()),!n)throw ie.create("no-options");const i=je.get(r);if(i)if(He(n,i.options)){if(He(s,i.config))return i;throw ie.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw ie.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)});const a=new $i(r);for(const c of St.values())a.addComponent(c);const o=new ma(n,s,a);return je.set(r,o),o}function pa(t=It){const e=je.get(t);if(!e&&t===It&&Wn())return es();if(!e)throw ie.create("no-app",{appName:t});return e}function fe(t,e,n){var a;let s=(a=fa[t])!=null?a:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}_e(new de(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="firebase-heartbeat-database",_a=1,Oe="firebase-heartbeat-store";let ft=null;function ts(){return ft||(ft=Yn(ga,_a,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oe)}catch(n){console.warn(n)}}}}).catch(t=>{throw ie.create("idb-open",{originalErrorMessage:t.message})})),ft}async function ba(t){try{const n=(await ts()).transaction(Oe),s=await n.objectStore(Oe).get(ns(t));return await n.done,s}catch(e){if(e instanceof ve)ae.warn(e.message);else{const n=ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(n.message)}}}async function dn(t,e){try{const s=(await ts()).transaction(Oe,"readwrite");await s.objectStore(Oe).put(e,ns(t)),await s.done}catch(n){if(n instanceof ve)ae.warn(n.message);else{const s=ie.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ae.warn(s.message)}}}function ns(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=1024,va=30;class wa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ia(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>va){const a=Sa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ae.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hn(),{heartbeatsToSend:s,unsentEntries:r}=$a(this._heartbeatsCache.heartbeats),i=Gn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ae.warn(n),""}}}function hn(){return new Date().toISOString().substring(0,10)}function $a(t,e=ya){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),mn(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ia{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jn()?Kn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ba(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return dn(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return dn(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mn(t){return Gn(JSON.stringify({version:2,heartbeats:t})).length}function Sa(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){_e(new de("platform-logger",e=>new Ni(e),"PRIVATE")),_e(new de("heartbeat",e=>new wa(e),"PRIVATE")),fe($t,un,t),fe($t,un,"esm2020"),fe("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ka("");const ss="@firebase/installations",Ot="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=1e4,is=`w:${Ot}`,as="FIS_v2",Ea="https://firebaseinstallations.googleapis.com/v1",Aa=60*60*1e3,Ca="installations",Ta="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},be=new Ze(Ca,Ta,Da);function os(t){return t instanceof ve&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls({projectId:t}){return`${Ea}/projects/${t}/installations`}function cs(t){return{token:t.token,requestStatus:2,expiresIn:Pa(t.expiresIn),creationTime:Date.now()}}async function us(t,e){const s=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function fs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ma(t,{refreshToken:e}){const n=fs(t);return n.append("Authorization",Oa(e)),n}async function ds(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pa(t){return Number(t.replace("s","000"))}function Oa(t){return`${as} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=ls(t),r=fs(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const a={fid:n,authVersion:as,appId:t.appId,sdkVersion:is},o={method:"POST",headers:r,body:JSON.stringify(a)},c=await ds(()=>fetch(s,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:cs(l.authToken)}}else throw await us("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=/^[cdef][\w-]{21}$/,kt="";function Na(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Fa(t);return Ra.test(n)?n:kt}catch{return kt}}function Fa(t){return Ba(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map;function ps(t,e){const n=et(t);gs(n,e),za(n,e)}function gs(t,e){const n=ms.get(t);if(!!n)for(const s of n)s(e)}function za(t,e){const n=Va();n&&n.postMessage({key:t,fid:e}),qa()}let pe=null;function Va(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{gs(t.data.key,t.data.fid)}),pe}function qa(){ms.size===0&&pe&&(pe.close(),pe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="firebase-installations-database",ja=1,ye="firebase-installations-store";let dt=null;function Lt(){return dt||(dt=Yn(Ha,ja,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ye)}}})),dt}async function Ue(t,e){const n=et(t),r=(await Lt()).transaction(ye,"readwrite"),i=r.objectStore(ye),a=await i.get(n);return await i.put(e,n),await r.done,(!a||a.fid!==e.fid)&&ps(t,e.fid),e}async function _s(t){const e=et(t),s=(await Lt()).transaction(ye,"readwrite");await s.objectStore(ye).delete(e),await s.done}async function tt(t,e){const n=et(t),r=(await Lt()).transaction(ye,"readwrite"),i=r.objectStore(ye),a=await i.get(n),o=e(a);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&ps(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t){let e;const n=await tt(t.appConfig,s=>{const r=Ua(s),i=xa(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===kt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ua(t){const e=t||{fid:Na(),registrationStatus:0};return bs(e)}function xa(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Ga(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wa(t)}:{installationEntry:e}}async function Ga(t,e){try{const n=await La(t,e);return Ue(t.appConfig,n)}catch(n){throw os(n)&&n.customData.serverCode===409?await _s(t.appConfig):await Ue(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wa(t){let e=await pn(t.appConfig);for(;e.registrationStatus===1;)await hs(100),e=await pn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Bt(t);return s||n}return e}function pn(t){return tt(t,e=>{if(!e)throw be.create("installation-not-found");return bs(e)})}function bs(t){return Ja(t)?{fid:t.fid,registrationStatus:0}:t}function Ja(t){return t.registrationStatus===1&&t.registrationTime+rs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka({appConfig:t,heartbeatServiceProvider:e},n){const s=Qa(t,n),r=Ma(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const a={installation:{sdkVersion:is,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},c=await ds(()=>fetch(s,o));if(c.ok){const l=await c.json();return cs(l)}else throw await us("Generate Auth Token",c)}function Qa(t,{fid:e}){return`${ls(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e=!1){let n;const s=await tt(t.appConfig,i=>{if(!ys(i))throw be.create("not-registered");const a=i.authToken;if(!e&&Ya(a))return i;if(a.requestStatus===1)return n=Xa(t,e),i;{if(!navigator.onLine)throw be.create("app-offline");const o=to(i);return n=Za(t,o),o}});return n?await n:s.authToken}async function Xa(t,e){let n=await gn(t.appConfig);for(;n.authToken.requestStatus===1;)await hs(100),n=await gn(t.appConfig);const s=n.authToken;return s.requestStatus===0?Rt(t,e):s}function gn(t){return tt(t,e=>{if(!ys(e))throw be.create("not-registered");const n=e.authToken;return no(n)?{...e,authToken:{requestStatus:0}}:e})}async function Za(t,e){try{const n=await Ka(t,e),s={...e,authToken:n};return await Ue(t.appConfig,s),n}catch(n){if(os(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _s(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ue(t.appConfig,s)}throw n}}function ys(t){return t!==void 0&&t.registrationStatus===2}function Ya(t){return t.requestStatus===2&&!eo(t)}function eo(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Aa}function to(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function no(t){return t.requestStatus===1&&t.requestTime+rs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t){const e=t,{installationEntry:n,registrationPromise:s}=await Bt(e);return s?s.catch(console.error):Rt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e=!1){const n=t;return await io(n),(await Rt(n,e)).token}async function io(t){const{registrationPromise:e}=await Bt(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(!t||!t.options)throw ht("App Configuration");if(!t.name)throw ht("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ht(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ht(t){return be.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="installations",oo="installations-internal",lo=t=>{const e=t.getProvider("app").getImmediate(),n=ao(e),s=Ye(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},co=t=>{const e=t.getProvider("app").getImmediate(),n=Ye(e,vs).getImmediate();return{getId:()=>so(n),getToken:r=>ro(n,r)}};function uo(){_e(new de(vs,lo,"PUBLIC")),_e(new de(oo,co,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo();fe(ss,Ot);fe(ss,Ot,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="analytics",fo="firebase_id",ho="origin",mo=60*1e3,po="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Qn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Q=new Ze("analytics","Analytics",go);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(!t.startsWith(Nt)){const e=Q.create("invalid-gtag-resource",{gtagURL:t});return J.warn(e.message),""}return t}function ws(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bo(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yo(t,e){const n=bo("firebase-js-sdk-policy",{createScriptURL:_o}),s=document.createElement("script"),r=`${Nt}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function vo(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wo(t,e,n,s,r,i){const a=s[r];try{if(a)await e[a];else{const c=(await ws(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(o){J.error(o)}t("config",r,i)}async function $o(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const o=await ws(n);for(const c of a){const l=o.find(u=>u.measurementId===c),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){J.error(i)}}function Io(t,e,n,s){async function r(i,...a){try{if(i==="event"){const[o,c]=a;await $o(t,e,n,o,c)}else if(i==="config"){const[o,c]=a;await wo(t,e,n,s,o,c)}else if(i==="consent"){const[o,c]=a;t("consent",o,c)}else if(i==="get"){const[o,c,l]=a;t("get",o,c,l)}else if(i==="set"){const[o]=a;t("set",o)}else t(i,...a)}catch(o){J.error(o)}}return r}function So(t,e,n,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Io(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function ko(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nt)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=30,Ao=1e3;class Co{constructor(e={},n=Ao){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $s=new Co;function To(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Do(t){var a;const{appId:e,apiKey:n}=t,s={method:"GET",headers:To(n)},r=po.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(o=c.error.message)}catch{}throw Q.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Mo(t,e=$s,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Q.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Q.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Lo;return setTimeout(async()=>{o.abort()},mo),Is({appId:s,apiKey:r,measurementId:i},a,o,e)}async function Is(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=$s){var o;const{appId:i,measurementId:a}=t;try{await Po(s,e)}catch(c){if(a)return J.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Do(t);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Oo(l)){if(r.deleteThrottleMetadata(i),a)return J.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const f=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?an(n,r.intervalMillis,Eo):an(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(i,u),J.debug(`Calling attemptFetch again in ${f} millis`),Is(t,u,s,r)}}function Po(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Oo(t){if(!(t instanceof ve)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Lo{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Bo(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,a={...s,send_to:i};t("event",n,a)}}async function Ro(t,e,n,s){if(s&&s.global){const r={};for(const i of Object.keys(n))r[`user_properties.${i}`]=n[i];return t("set",r),Promise.resolve()}else{const r=await e;t("config",r,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(){if(Jn())try{await Kn()}catch(t){return J.warn(Q.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return J.warn(Q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fo(t,e,n,s,r,i,a){var d;const o=Mo(t);o.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&J.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>J.error(m)),e.push(o);const c=No().then(m=>{if(m)return s.getId()}),[l,f]=await Promise.all([o,c]);ko(i)||yo(i,l.measurementId),r("js",new Date);const u=(d=a==null?void 0:a.config)!=null?d:{};return u[ho]="firebase",u.update=!0,f!=null&&(u[fo]=f),r("config",l.measurementId,u),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.app=e}_delete(){return delete ke[this.app.options.appId],Promise.resolve()}}let ke={},_n=[];const bn={};let mt="dataLayer",Vo="gtag",yn,Ft,vn=!1;function qo(){const t=[];if(fi()&&t.push("This is a browser extension environment."),di()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Q.create("invalid-analytics-context",{errorInfo:e});J.warn(n.message)}}function Ho(t,e,n){qo();const s=t.options.appId;if(!s)throw Q.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)J.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Q.create("no-api-key");if(ke[s]!=null)throw Q.create("already-exists",{id:s});if(!vn){vo(mt);const{wrappedGtag:i,gtagCore:a}=So(ke,_n,bn,mt,Vo);Ft=i,yn=a,vn=!0}return ke[s]=Fo(t,_n,bn,e,yn,mt,n),new zo(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t=pa()){t=Mt(t);const e=Ye(t,xe);return e.isInitialized()?e.getImmediate():Uo(t)}function Uo(t,e={}){const n=Ye(t,xe);if(n.isInitialized()){const r=n.getImmediate();if(He(e,n.getOptions()))return r;throw Q.create("already-initialized")}return n.initialize({options:e})}function xo(t,e,n){t=Mt(t),Ro(Ft,ke[t.app.options.appId],e,n).catch(s=>J.error(s))}function oe(t,e,n,s){t=Mt(t),Bo(Ft,ke[t.app.options.appId],e,n,s).catch(r=>J.error(r))}const wn="@firebase/analytics",$n="0.10.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){_e(new de(xe,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Ho(s,r,n)},"PUBLIC")),_e(new de("analytics-internal",t,"PRIVATE")),fe(wn,$n),fe(wn,$n,"esm2020");function t(e){try{const n=e.getProvider(xe).getImmediate();return{logEvent:(s,r,i)=>oe(n,s,r,i),setUserProperties:(s,r)=>xo(n,s,r)}}catch(n){throw Q.create("interop-component-reg-failed",{reason:n})}}}Go();var Wo="firebase",Jo="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(Wo,Jo,"app");const Ko={apiKey:"AIzaSyDkHZLF0bz4bmx_d6rb3C3GXIS-VQWKypI",authDomain:"lofidle.firebaseapp.com",projectId:"lofidle",storageBucket:"lofidle.appspot.com",messagingSenderId:"340185945447",appId:"1:340185945447:web:30f882212758e084804bc2",measurementId:"G-K461462XS6"},Qo=es(Ko),me=jo(Qo);function Xo(t){let e;return{c(){e=y("div"),e.textContent="Ce sera pour la prochaine fois !",h(e,"class","title line-height svelte-8qhdo5")},m(n,s){S(n,e,s)},p:T,d(n){n&&$(e)}}}function Zo(t){let e,n,s,r,i,a,o=t[0]===1?"":"s",c;return{c(){e=y("div"),e.textContent="F\xE9licitations !",n=M(),s=y("p"),r=H("Tu as trouv\xE9 le Tuflo du jour en "),i=H(t[0]),a=H(" seconde"),c=H(o),h(e,"class","title svelte-8qhdo5"),h(s,"class","subtitle svelte-8qhdo5")},m(l,f){S(l,e,f),S(l,n,f),S(l,s,f),p(s,r),p(s,i),p(s,a),p(s,c)},p(l,f){f&1&&ne(i,l[0]),f&1&&o!==(o=l[0]===1?"":"s")&&ne(c,o)},d(l){l&&$(e),l&&$(n),l&&$(s)}}}function Yo(t){let e,n;return{c(){e=y("img"),h(e,"class","image svelte-8qhdo5"),Ps(e.src,n=t[6])||h(e,"src",n),h(e,"alt","Pochette de l'album")},m(s,r){S(s,e,r)},p:T,d(s){s&&$(e)}}}function In(t){let e,n,s;return{c(){e=y("h5"),n=H("Prochain morceau dans "),s=H(t[4]),h(e,"class","timer svelte-8qhdo5")},m(r,i){S(r,e,i),p(e,n),p(e,s)},p(r,i){i&16&&ne(s,r[4])},d(r){r&&$(e)}}}function el(t){let e,n,s,r,i,a,o,c,l=t[1].song_name+"",f,u,d,m=t[1].original_artist+"",_,b,E,v,k,C=t[1].lofi_artist+"",g,D,w,B,V=t[3]?"Copi\xE9 !":"Partager",ee,Le,Ee,Be;function nt(j,K){return j[5]?Zo:Xo}let we=nt(t)(t),se=t[6]&&Yo(t),G=t[2]&&In(t);return{c(){e=y("div"),n=y("div"),s=y("div"),r=y("div"),we.c(),i=M(),se&&se.c(),a=M(),o=y("div"),c=y("div"),f=H(l),u=M(),d=y("h4"),_=H(m),b=M(),E=y("h4"),v=H("Reprise lofi par : "),k=y("br"),g=H(C),D=M(),w=y("div"),B=y("button"),ee=H(V),Le=M(),G&&G.c(),h(r,"class","result svelte-8qhdo5"),h(c,"class","song-name line-height svelte-8qhdo5"),h(d,"class","line-height svelte-8qhdo5"),h(B,"class","share-button svelte-8qhdo5"),h(w,"class","button-wrapper svelte-8qhdo5"),h(o,"class","song-info svelte-8qhdo5"),h(s,"class","negative-margin svelte-8qhdo5"),h(n,"class","end-screen-content svelte-8qhdo5"),h(e,"class","answer-screen-content svelte-8qhdo5")},m(j,K){S(j,e,K),p(e,n),p(n,s),p(s,r),we.m(r,null),p(s,i),se&&se.m(s,null),p(s,a),p(s,o),p(o,c),p(c,f),p(o,u),p(o,d),p(d,_),p(o,b),p(o,E),p(E,v),p(E,k),p(E,g),p(o,D),p(o,w),p(w,B),p(B,ee),p(e,Le),G&&G.m(e,null),Ee||(Be=U(B,"click",t[7]),Ee=!0)},p(j,[K]){we.p(j,K),j[6]&&se.p(j,K),K&2&&l!==(l=j[1].song_name+"")&&ne(f,l),K&2&&m!==(m=j[1].original_artist+"")&&ne(_,m),K&2&&C!==(C=j[1].lofi_artist+"")&&ne(g,C),K&8&&V!==(V=j[3]?"Copi\xE9 !":"Partager")&&ne(ee,V),j[2]?G?G.p(j,K):(G=In(j),G.c(),G.m(e,null)):G&&(G.d(1),G=null)},i:T,o:T,d(j){j&&$(e),we.d(),se&&se.d(),G&&G.d(),Ee=!1,Be()}}}function tl(t,e,n){var b,E,v,k,C;let{timeUsed:s}=e,{lofidle:r}=e,{guesses:i}=e,{MAX_GUESSES:a}=e,{showTimer:o=!1}=e;const c=i.at(-1).status=="correct",l=(C=(E=(b=r.images)==null?void 0:b[1])==null?void 0:E.url)!=null?C:(k=(v=r.images)==null?void 0:v[0])==null?void 0:k.url;let f=!1,u="soon";m();const d=setInterval(m,1e3);qs(()=>clearInterval(d));function m(){const g=new Date,D=new Date;D.setHours(24,0,0,0);const w=Math.max(D.getTime()-g.getTime(),0);n(4,u=Ks(w)),Math.floor(w/1e3)===0&&clearInterval(d)}async function _(){var D;oe(me,"share");let g="";c?g+="\u{1F50A} ":g+="\u{1F507} ",g+=`#Tuflo #${Vn()+1}`,g+=`

`;for(let w=0;w<i.length;w++){const B=i[w].status;B==="incorrect"?g+="\u{1F7E5}":B==="correct"?g+="\u{1F7E9}":B==="correctArtist"?g+="\u{1F7E7}":g+="\u2B1B"}for(let w=0;w<a-i.length;w++)g+="\u2B1C";g+=`

`,g+=window.location.origin;try{if((D=navigator.clipboard)!=null&&D.writeText)await navigator.clipboard.writeText(g);else{const w=document.createElement("textarea");w.value=g,w.setAttribute("readonly",""),w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}n(3,f=!0)}catch(w){console.error("Impossible de copier le r\xE9sultat :",w)}}return t.$$set=g=>{"timeUsed"in g&&n(0,s=g.timeUsed),"lofidle"in g&&n(1,r=g.lofidle),"guesses"in g&&n(8,i=g.guesses),"MAX_GUESSES"in g&&n(9,a=g.MAX_GUESSES),"showTimer"in g&&n(2,o=g.showTimer)},[s,r,o,f,u,c,l,_,i,a]}class nl extends z{constructor(e){super(),F(this,e,tl,el,N,{timeUsed:0,lofidle:1,guesses:8,MAX_GUESSES:9,showTimer:2})}}function Sn(t){let e=t[0][t[2]]+"",n;return{c(){n=H(e)},m(s,r){S(s,n,r)},p(s,r){r&5&&e!==(e=s[0][s[2]]+"")&&ne(n,e)},d(s){s&&$(n)}}}function sl(t){let e,n,s,r,i,a,o,c=t[0][t[2]]>0&&Sn(t);const l=t[4].default,f=We(l,t,t[3],null);return{c(){e=y("div"),n=y("div"),s=y("div"),r=y("div"),c&&c.c(),i=M(),a=y("div"),f&&f.c(),h(r,"class","counter svelte-vmnvaq"),h(s,"class","bar svelte-vmnvaq"),X(s,"height",t[0][t[2]]/t[1]*100+"%"),h(n,"class","bar-wrapper svelte-vmnvaq"),h(a,"class","x-label svelte-vmnvaq"),h(e,"class","x-item svelte-vmnvaq")},m(u,d){S(u,e,d),p(e,n),p(n,s),p(s,r),c&&c.m(r,null),p(e,i),p(e,a),f&&f.m(a,null),o=!0},p(u,[d]){u[0][u[2]]>0?c?c.p(u,d):(c=Sn(u),c.c(),c.m(r,null)):c&&(c.d(1),c=null),(!o||d&7)&&X(s,"height",u[0][u[2]]/u[1]*100+"%"),f&&f.p&&(!o||d&8)&&Ke(f,l,u,u[3],o?Je(l,u[3],d,null):Qe(u[3]),null)},i(u){o||(I(f,u),o=!0)},o(u){A(f,u),o=!1},d(u){u&&$(e),c&&c.d(),f&&f.d(u)}}}function rl(t,e,n){let{$$slots:s={},$$scope:r}=e,{graphableValues:i}=e,{maxGraphableValue:a}=e,{increment:o}=e;return t.$$set=c=>{"graphableValues"in c&&n(0,i=c.graphableValues),"maxGraphableValue"in c&&n(1,a=c.maxGraphableValue),"increment"in c&&n(2,o=c.increment),"$$scope"in c&&n(3,r=c.$$scope)},[i,a,o,r,s]}class Ss extends z{constructor(e){super(),F(this,e,rl,sl,N,{graphableValues:0,maxGraphableValue:1,increment:2})}}function kn(t,e,n){const s=t.slice();return s[6]=e[n],s}function il(t){let e=t[6]+1+"",n;return{c(){n=H(e)},m(s,r){S(s,n,r)},p:T,d(s){s&&$(n)}}}function En(t){let e,n;return e=new Ss({props:{increment:t[6],maxGraphableValue:t[3],graphableValues:t[2],$$slots:{default:[il]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,r){const i={};r&512&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function al(t){let e;return{c(){e=H("X")},m(n,s){S(n,e,s)},d(n){n&&$(e)}}}function ol(t){let e,n,s,r,i,a=t[1],o=[];for(let l=0;l<a.length;l+=1)o[l]=En(kn(t,a,l));const c=l=>A(o[l],1,1,()=>{o[l]=null});return r=new Ss({props:{increment:t[0],maxGraphableValue:t[3],graphableValues:t[2],$$slots:{default:[al]},$$scope:{ctx:t}}}),{c(){e=y("div"),n=y("div");for(let l=0;l<o.length;l+=1)o[l].c();s=M(),L(r.$$.fragment),h(n,"class","x-axis svelte-n01avm"),h(e,"class","graph svelte-n01avm")},m(l,f){S(l,e,f),p(e,n);for(let u=0;u<o.length;u+=1)o[u].m(n,null);p(n,s),P(r,n,null),i=!0},p(l,[f]){if(f&14){a=l[1];let d;for(d=0;d<a.length;d+=1){const m=kn(l,a,d);o[d]?(o[d].p(m,f),I(o[d],1)):(o[d]=En(m),o[d].c(),I(o[d],1),o[d].m(n,s))}for(le(),d=a.length;d<o.length;d+=1)c(d);ce()}const u={};f&1&&(u.increment=l[0]),f&512&&(u.$$scope={dirty:f,ctx:l}),r.$set(u)},i(l){if(!i){for(let f=0;f<a.length;f+=1)I(o[f]);I(r.$$.fragment,l),i=!0}},o(l){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)A(o[f]);A(r.$$.fragment,l),i=!1},d(l){l&&$(e),Xe(o,l),O(r)}}}function ll(t,e,n){let{maxIncrement:s}=e,{previousScores:r}=e,i=Array.from({length:s},(l,f)=>f);const[a,o]=c(r);function c(l){let f=[];for(let d=1;d<=s;d++)f.push(l.filter(m=>m==d).length);f.push(l.filter(d=>d==-1).length);const u=Math.max(Math.max(...f),0);return[f,u]}return t.$$set=l=>{"maxIncrement"in l&&n(0,s=l.maxIncrement),"previousScores"in l&&n(4,r=l.previousScores)},[s,i,a,o,r]}class cl extends z{constructor(e){super(),F(this,e,ll,ol,N,{maxIncrement:0,previousScores:4})}}function ul(t){let e,n,s,r,i,a,o,c,l,f,u,d,m,_,b,E,v,k,C,g,D;return r=new cl({props:{maxIncrement:t[1],previousScores:t[0]}}),{c(){e=y("div"),n=y("h1"),n.textContent="Statistiques",s=M(),L(r.$$.fragment),i=M(),a=y("div"),o=y("div"),c=y("h4"),c.textContent=`${t[2]()}`,l=M(),f=y("h4"),f.textContent="r\xE9ussies",u=M(),d=y("div"),m=y("h4"),m.textContent=`${t[4]()} : ${t[3]()}`,_=M(),b=y("h4"),b.innerHTML="s\xE9rie actuelle :<br/> meilleure s\xE9rie",E=M(),v=y("div"),k=y("h4"),k.textContent=`${t[5]()}%`,C=M(),g=y("h4"),g.textContent="pr\xE9cision",h(n,"class","title svelte-1u25zt9"),h(c,"class","x-axis-label figure svelte-1u25zt9"),h(f,"class","x-axis-label svelte-1u25zt9"),h(o,"class","stat-item svelte-1u25zt9"),h(m,"class","x-axis-label figure svelte-1u25zt9"),h(b,"class","x-axis-label svelte-1u25zt9"),h(d,"class","stat-item svelte-1u25zt9"),h(k,"class","x-axis-label figure svelte-1u25zt9"),h(g,"class","x-axis-label svelte-1u25zt9"),h(v,"class","stat-item svelte-1u25zt9"),h(a,"class","stats-wrapper svelte-1u25zt9"),h(e,"class","content-wrapper svelte-1u25zt9")},m(w,B){S(w,e,B),p(e,n),p(e,s),P(r,e,null),p(e,i),p(e,a),p(a,o),p(o,c),p(o,l),p(o,f),p(a,u),p(a,d),p(d,m),p(d,_),p(d,b),p(a,E),p(a,v),p(v,k),p(v,C),p(v,g),D=!0},p(w,B){const V={};B&2&&(V.maxIncrement=w[1]),B&1&&(V.previousScores=w[0]),r.$set(V)},i(w){D||(I(r.$$.fragment,w),D=!0)},o(w){A(r.$$.fragment,w),D=!1},d(w){w&&$(e),O(r)}}}function fl(t){let e,n;return e=new Dt({props:{$$slots:{default:[ul]},$$scope:{ctx:t}}}),e.$on("click",t[6]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,[r]){const i={};r&259&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function dl(t,e,n){let{previousScores:s}=e,{maxIncrement:r}=e;function i(){return s.filter(u=>u>=1).length}function a(){return s.filter(u=>u!==0).length}function o(){let u=0,d=0;for(let m=0;m<s.length;m++)s[m]>0?(u+=1,d=Math.max(d,u)):u=0;return d}function c(){let u=0;for(let d=s.length-1;d>=0;d--)if(s[d]>0)u+=1;else return u;return 0}function l(){return a()===0?0:Math.floor(i()/a()*100)}function f(u){x.call(this,t,u)}return t.$$set=u=>{"previousScores"in u&&n(0,s=u.previousScores),"maxIncrement"in u&&n(1,r=u.maxIncrement)},[s,r,i,o,c,l,f]}class hl extends z{constructor(e){super(),F(this,e,dl,fl,N,{previousScores:0,maxIncrement:1})}}function ml(t){let e;return{c(){e=y("div"),e.textContent="D'accord",h(e,"class","button-text svelte-124rmdl")},m(n,s){S(n,e,s)},p:T,d(n){n&&$(e)}}}function pl(t){let e,n,s,r,i,a,o,c,l,f,u,d;return u=new Tt({props:{$$slots:{default:[ml]},$$scope:{ctx:t}}}),u.$on("click",t[0]),{c(){e=y("div"),n=y("h1"),n.textContent="\xC0 propos",s=M(),r=y("p"),r.innerHTML=`D\xE9couvre aussi mon travail :
      <br/> 
      <a href="https://patrickedwards.dev" target="_blank" rel="noopener noreferrer">patrickedwards.dev</a> 
      <br/>`,i=M(),a=y("div"),a.innerHTML=`Pour signaler un bug ou proposer un morceau :
      <br/> 
      <p class="smaller svelte-124rmdl">edwards.patrick247@gmail.com</p>`,o=M(),c=y("p"),c.innerHTML="Cr\xE9\xE9 par <br/>\u{1F525} <b>Patrick Edwards</b> \u{1F525}",l=M(),f=y("div"),L(u.$$.fragment),h(n,"class","title svelte-124rmdl"),h(r,"class","body svelte-124rmdl"),h(a,"class","body small svelte-124rmdl"),h(c,"class","made-by body svelte-124rmdl"),h(f,"class","button-container svelte-124rmdl"),h(e,"class","content-wrapper svelte-124rmdl")},m(m,_){S(m,e,_),p(e,n),p(e,s),p(e,r),p(e,i),p(e,a),p(e,o),p(e,c),p(e,l),p(e,f),P(u,f,null),d=!0},p(m,_){const b={};_&4&&(b.$$scope={dirty:_,ctx:m}),u.$set(b)},i(m){d||(I(u.$$.fragment,m),d=!0)},o(m){A(u.$$.fragment,m),d=!1},d(m){m&&$(e),O(u)}}}function gl(t){let e,n;return e=new Dt({props:{$$slots:{default:[pl]},$$scope:{ctx:t}}}),e.$on("click",t[1]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,[r]){const i={};r&4&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function _l(t){function e(s){x.call(this,t,s)}function n(s){x.call(this,t,s)}return[e,n]}class bl extends z{constructor(e){super(),F(this,e,_l,gl,N,{})}}function yl(t){let e,n;return e=new bl({}),e.$on("click",t[16]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p:T,i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function vl(t){let e,n;return e=new hl({props:{maxIncrement:t[8].length,previousScores:t[1]}}),e.$on("click",t[15]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,r){const i={};r[0]&2&&(i.previousScores=s[1]),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function wl(t){let e,n;return e=new Yr({}),e.$on("click",t[14]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p:T,i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function $l(t){var s;let e,n;return e=new nl({props:{timeUsed:t[13](t[0].length),lofidle:t[2],guesses:t[0],MAX_GUESSES:t[8].length,showTimer:t[0].length===t[8].length&&((s=t[0].at(-1))==null?void 0:s.status)!=="correct"}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){var o;const a={};i[0]&1&&(a.timeUsed=r[13](r[0].length)),i[0]&4&&(a.lofidle=r[2]),i[0]&1&&(a.guesses=r[0]),i[0]&1&&(a.showTimer=r[0].length===r[8].length&&((o=r[0].at(-1))==null?void 0:o.status)!=="correct"),e.$set(a)},i(r){n||(I(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function Il(t){let e,n,s,r,i,a,o,c,l,f;return s=new Tr({props:{guesses:t[0],increments:t[8]}}),i=new Br({props:{guesses:t[0],increments:t[8]}}),o=new Gr({props:{increments:t[8],guesses:t[0],nowPlaying:t[4]}}),l=new jr({}),l.$on("guess",t[12]),{c(){e=y("h1"),e.textContent="Tuflo",n=M(),L(s.$$.fragment),r=M(),L(i.$$.fragment),a=M(),L(o.$$.fragment),c=M(),L(l.$$.fragment),h(e,"class","title svelte-klhzym")},m(u,d){S(u,e,d),S(u,n,d),P(s,u,d),S(u,r,d),P(i,u,d),S(u,a,d),P(o,u,d),S(u,c,d),P(l,u,d),f=!0},p(u,d){const m={};d[0]&1&&(m.guesses=u[0]),s.$set(m);const _={};d[0]&1&&(_.guesses=u[0]),i.$set(_);const b={};d[0]&1&&(b.guesses=u[0]),d[0]&16&&(b.nowPlaying=u[4]),o.$set(b)},i(u){f||(I(s.$$.fragment,u),I(i.$$.fragment,u),I(o.$$.fragment,u),I(l.$$.fragment,u),f=!0)},o(u){A(s.$$.fragment,u),A(i.$$.fragment,u),A(o.$$.fragment,u),A(l.$$.fragment,u),f=!1},d(u){u&&$(e),u&&$(n),O(s,u),u&&$(r),O(i,u),u&&$(a),O(o,u),u&&$(c),O(l,u)}}}function Sl(t){let e;return{c(){e=y("section"),e.innerHTML=`<h2 class="svelte-klhzym">Bient\xF4t de nouveaux morceaux</h2> 
      <p class="svelte-klhzym">Le catalogue est vide pour le moment. Les morceaux et les pochettes
        locales de Tuflo seront ajout\xE9s ici.</p>`,h(e,"class","empty-state svelte-klhzym")},m(n,s){S(n,e,s)},p:T,i:T,o:T,d(n){n&&$(e)}}}function An(t){let e,n;return e=new Er({props:{nowPlaying:t[4],showFinalPage:t[3]}}),e.$on("playSong",t[9]),e.$on("skipSegment",t[10]),e.$on("stats",t[11]),e.$on("tutorial",t[17]),e.$on("info",t[18]),{c(){L(e.$$.fragment)},m(s,r){P(e,s,r),n=!0},p(s,r){const i={};r[0]&16&&(i.nowPlaying=s[4]),r[0]&8&&(i.showFinalPage=s[3]),e.$set(i)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){A(e.$$.fragment,s),n=!1},d(s){O(e,s)}}}function kl(t){let e,n,s,r,i,a,o,c,l,f,u,d;const m=[wl,vl,yl],_=[];function b(g,D){return g[7]?0:g[5]?1:g[6]?2:-1}~(e=b(t))&&(n=_[e]=m[e](t));const E=[Sl,Il,$l],v=[];function k(g,D){return g[2]?g[3]?2:1:0}i=k(t),a=v[i]=E[i](t);let C=t[2]&&An(t);return{c(){n&&n.c(),s=M(),r=y("main"),a.c(),o=M(),C&&C.c(),c=M(),l=y("div"),f=M(),u=y("div"),h(r,"class","content svelte-klhzym"),Z(r,"final-page",t[3]),h(l,"class","lines svelte-klhzym"),Z(l,"final-page-lines",t[3]),h(u,"class","background-image svelte-klhzym"),Z(u,"final-background",t[3])},m(g,D){~e&&_[e].m(g,D),S(g,s,D),S(g,r,D),v[i].m(r,null),p(r,o),C&&C.m(r,null),S(g,c,D),S(g,l,D),S(g,f,D),S(g,u,D),d=!0},p(g,D){let w=e;e=b(g),e===w?~e&&_[e].p(g,D):(n&&(le(),A(_[w],1,1,()=>{_[w]=null}),ce()),~e?(n=_[e],n?n.p(g,D):(n=_[e]=m[e](g),n.c()),I(n,1),n.m(s.parentNode,s)):n=null);let B=i;i=k(g),i===B?v[i].p(g,D):(le(),A(v[B],1,1,()=>{v[B]=null}),ce(),a=v[i],a?a.p(g,D):(a=v[i]=E[i](g),a.c()),I(a,1),a.m(r,o)),g[2]?C?(C.p(g,D),D[0]&4&&I(C,1)):(C=An(g),C.c(),I(C,1),C.m(r,null)):C&&(le(),A(C,1,1,()=>{C=null}),ce()),(!d||D[0]&8)&&Z(r,"final-page",g[3]),(!d||D[0]&8)&&Z(l,"final-page-lines",g[3]),(!d||D[0]&8)&&Z(u,"final-background",g[3])},i(g){d||(I(n),I(a),I(C),d=!0)},o(g){A(n),A(a),A(C),d=!1},d(g){~e&&_[e].d(g),g&&$(s),g&&$(r),v[i].d(),C&&C.d(),g&&$(c),g&&$(l),g&&$(f),g&&$(u)}}}function El(t){return t.setHours(23,59,59),t.setDate(t.getDate()+1),new Date<t}function Al(){let t;switch(Math.floor(Date.now()/864e5)%4){case 0:t="orange";break;case 1:t="blue";break;case 2:t="purple";break;case 3:t="green";break}document.documentElement.classList.add(t)}function Cl(t,e,n){it(Al),it(j),it(C);let r=Ie.length?Vn()%Ie.length:0,i=Ie[r],a=!1,o=[2,2,6,10,10],c=[],l=k(i),f=0,u=!1,d=!1,m=!1,_,b,E,v=!1;function k(q){if(!q)return null;const te=new Audio(q.lofi_preview_url);return te.addEventListener("timeupdate",g),te}function C(){const q=()=>{document.hidden&&l&&(l.pause(),n(4,u=!1))};return document.addEventListener("visibilitychange",q),()=>document.removeEventListener("visibilitychange",q)}function g(){!l||(l.currentTime*1e3>=f-100||l.paused)&&(l.pause(),n(4,u=!1))}function D(q){return q===`${i.song_name} - ${i.original_artist}`.toLocaleLowerCase()}function w(){!l||(l.paused?(l.currentTime=0,f=K(c.length+1)*1e3,l.play().then(()=>n(4,u=!0)).catch(()=>{n(4,u=!1)})):(l.pause(),n(4,u=!1)))}function B(){c.length<o.length&&(c.push({guess:"SKIPPED",status:"skipped"}),n(0,c))}function V(){!l||!i||(l.pause(),l.removeEventListener("timeupdate",g),l.onended=()=>n(4,u=!1),l.currentTime=0,l.src=i.original_preview_url,l.volume=.3,l.load(),l.play().then(()=>n(4,u=!0)).catch(()=>{n(4,u=!1)}))}function ee(){if(!Ie.length)return;const q=(r+1)%Ie.length;l==null||l.pause(),l==null||l.removeEventListener("timeupdate",g),l&&(l.onended=null),r=q,n(2,i=Ie[q]),l=k(i),n(0,c=[]),n(3,a=!1),f=0,n(4,u=!1),localStorage.setItem("guesses",JSON.stringify([])),localStorage.setItem("isCompleted",JSON.stringify(!1))}function Le(){a?V():w()}function Ee(){a?ee():B()}function Be(){v||oe(me,"stats-page"),v=!0,n(5,d=!0)}function nt(){n(3,a=!0)}function zt(q){return D(q)?"correct":we(q)?"correctArtist":"incorrect"}function we(q){const te=i.original_artist.toLocaleLowerCase();let $e=q.split(" - ").at(-1).toLocaleLowerCase();$e=$e.split(",");for(let st=0;st<$e.length;st++){const Ds=$e[st].trim(),Vt=te.split(",");for(let rt=0;rt<Vt.length;rt++)if(Vt[rt].trim()==Ds)return!0}return!1}function se(q){if(a||c.length>=o.length)return;const te=q.detail,$e=zt(te);c.push({guess:te,status:$e}),n(0,c),oe(me,"guess")}function G(){El(E)||b.push(0)}function j(){var te;const q=new Date(JSON.parse(localStorage.getItem("lastCheckIn")));E=new Date(JSON.parse(localStorage.getItem("lastCompletedDate"))),q.toDateString()!==new Date().toDateString()?(localStorage.setItem("guesses",JSON.stringify([])),localStorage.setItem("isCompleted",JSON.stringify(!1))):n(0,c=JSON.parse(localStorage.getItem("guesses"))),n(1,b=(te=JSON.parse(localStorage.getItem("previousScores")))!=null?te:[]),n(7,_=!localStorage.getItem("firstVisit")),oe(me,_?"first_visit":"return_visit"),localStorage.setItem("lastCheckIn",JSON.stringify(new Date)),localStorage.setItem("firstVisit",JSON.stringify(!1)),G()}function K(q){return Pe(o.slice(0,q))}const ks=()=>n(7,_=!1),Es=()=>n(5,d=!1),As=()=>n(6,m=!1),Cs=()=>n(7,_=!0),Ts=()=>n(6,m=!0);return t.$$.update=()=>{t.$$.dirty[0]&1&&c.length!==0&&localStorage.setItem("guesses",JSON.stringify(c)),t.$$.dirty[0]&3&&(c.length===o.length||c.length>0&&c.at(-1).status==="correct")&&(n(1,b=b!=null?b:[]),JSON.parse(localStorage.getItem("isCompleted"))||(c.at(-1).status=="correct"?(oe(me,`${c.length}`),oe(me,"success"),b.push(c.length)):(b.push(-1),oe(me,"fail"))),localStorage.setItem("isCompleted",JSON.stringify(!0)),localStorage.setItem("lastCompletedDate",JSON.stringify(new Date)),nt(),localStorage.setItem("previousScores",JSON.stringify(b)))},[c,b,i,a,u,d,m,_,o,Le,Ee,Be,se,K,ks,Es,As,Cs,Ts]}class Tl extends z{constructor(e){super(),F(this,e,Cl,kl,N,{},null,[-1,-1])}}new Tl({target:document.getElementById("app")});
