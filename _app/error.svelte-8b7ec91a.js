import{S as K,i as w,s as y,e as v,t as E,c as d,a as b,g as P,d as n,f as u,J as R,h as j,j as N,k as q,l as S,K as C}from"./chunks/vendor-34826e43.js";function H(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(n)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&j(a,t)},d(l){l&&n(f)}}}function J(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(n)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&j(a,t)},d(l){l&&n(f)}}}function z(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&H(r),o=r[1].stack&&J(r);return{c(){f=v("h1"),t=E(r[0]),a=N(),l=v("pre"),c=E(s),k=N(),i&&i.c(),m=N(),o&&o.c(),p=q()},l(e){f=d(e,"H1",{});var _=b(f);t=P(_,r[0]),_.forEach(n),a=S(e),l=d(e,"PRE",{});var h=b(l);c=P(h,s),h.forEach(n),k=S(e),i&&i.l(e),m=S(e),o&&o.l(e),p=q()},m(e,_){u(e,f,_),R(f,t),u(e,a,_),u(e,l,_),R(l,c),u(e,k,_),i&&i.m(e,_),u(e,m,_),o&&o.m(e,_),u(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=J(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&n(f),e&&n(a),e&&n(l),e&&n(k),i&&i.d(e),e&&n(m),o&&o.d(e),e&&n(p)}}}function D({error:r,status:f}){return{props:{error:r,status:f}}}function A(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class F extends K{constructor(f){super();w(this,f,A,z,y,{status:0,error:1})}}export{F as default,D as load};
