(this["webpackJsonpsewasew-election-center"]=this["webpackJsonpsewasew-election-center"]||[]).push([[10],{105:function(n,t,e){"use strict";t.a=function(n){for(var t=n.length/6|0,e=new Array(t),r=0;r<t;)e[r]="#"+n.slice(6*r,6*++r);return e}},106:function(n,t,e){"use strict";var r=e(625);t.a=function(n){return Object(r.b)(n[n.length-1])}},107:function(n,t,e){"use strict";function r(){}e.d(t,"a",(function(){return r}))},154:function(n,t,e){"use strict";function r(n,t){n&&a.hasOwnProperty(n.type)&&a[n.type](n,t)}var i={Feature:function(n,t){r(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,i=-1,a=e.length;++i<a;)r(e[i].geometry,t)}},a={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){o(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)o(e[r],t,0)},Polygon:function(n,t){u(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)u(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,i=-1,a=e.length;++i<a;)r(e[i],t)}};function o(n,t,e){var r,i=-1,a=n.length-e;for(t.lineStart();++i<a;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function u(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)o(n[e],t,1);t.polygonEnd()}t.a=function(n,t){n&&i.hasOwnProperty(n.type)?i[n.type](n,t):r(n,t)}},155:function(n,t,e){"use strict";var r=e(107),i=1/0,a=i,o=-i,u=o,c={point:function(n,t){n<i&&(i=n);n>o&&(o=n);t<a&&(a=t);t>u&&(u=t)},lineStart:r.a,lineEnd:r.a,polygonStart:r.a,polygonEnd:r.a,result:function(){var n=[[i,a],[o,u]];return o=u=-(a=i=1/0),n}};t.a=c},156:function(n,t,e){"use strict";t.a=function(n){return n}},620:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(87),i=e(88),a=Symbol("implicit");function o(){var n=new Map,t=[],e=[],u=a;function c(r){var i=r+"",o=n.get(i);if(!o){if(u!==a)return u;n.set(i,o=t.push(r))}return e[(o-1)%e.length]}return c.domain=function(e){if(!arguments.length)return t.slice();t=[],n=new Map;var i,a=Object(r.a)(e);try{for(a.s();!(i=a.n()).done;){var o=i.value,u=o+"";n.has(u)||n.set(u,t.push(o))}}catch(f){a.e(f)}finally{a.f()}return c},c.range=function(n){return arguments.length?(e=Array.from(n),c):e.slice()},c.unknown=function(n){return arguments.length?(u=n,c):u},c.copy=function(){return o(t,e).unknown(u)},i.b.apply(c,arguments),c}},621:function(n,t,e){"use strict";e.d(t,"a",(function(){return f})),e.d(t,"b",(function(){return s}));var r=e(124),i=e(100),a=e(88);function o(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function u(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function c(n){return n<0?-n*n:n*n}function f(n){var t=n(i.c,i.c),e=1;function a(){return 1===e?n(i.c,i.c):.5===e?n(u,c):n(o(e),o(1/e))}return t.exponent=function(n){return arguments.length?(e=+n,a()):e},Object(r.b)(t)}function l(){var n=f(Object(i.d)());return n.copy=function(){return Object(i.a)(n,l()).exponent(n.exponent())},a.b.apply(n,arguments),n}function s(){return l.apply(null,arguments).exponent(.5)}},623:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return f}));var r=function(n){return n},i=function(n){if(null==n)return r;var t,e,i=n.scale[0],a=n.scale[1],o=n.translate[0],u=n.translate[1];return function(n,r){r||(t=e=0);var c=2,f=n.length,l=new Array(f);for(l[0]=(t+=n[0])*i+o,l[1]=(e+=n[1])*a+u;c<f;)l[c]=n[c],++c;return l}},a=function(n,t){return"string"===typeof t&&(t=n.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return o(n,t)}))}:o(n,t)};function o(n,t){var e=t.id,r=t.bbox,i=null==t.properties?{}:t.properties,a=u(n,t);return null==e&&null==r?{type:"Feature",properties:i,geometry:a}:null==r?{type:"Feature",id:e,properties:i,geometry:a}:{type:"Feature",id:e,bbox:r,properties:i,geometry:a}}function u(n,t){var e=i(n.transform),r=n.arcs;function a(n,t){t.length&&t.pop();for(var i=r[n<0?~n:n],a=0,o=i.length;a<o;++a)t.push(e(i[a],a));n<0&&function(n,t){for(var e,r=n.length,i=r-t;i<--r;)e=n[i],n[i++]=n[r],n[r]=e}(t,o)}function o(n){return e(n)}function u(n){for(var t=[],e=0,r=n.length;e<r;++e)a(n[e],t);return t.length<2&&t.push(t[0]),t}function c(n){for(var t=u(n);t.length<4;)t.push(t[0]);return t}function f(n){return n.map(c)}return function n(t){var e,r=t.type;switch(r){case"GeometryCollection":return{type:r,geometries:t.geometries.map(n)};case"Point":e=o(t.coordinates);break;case"MultiPoint":e=t.coordinates.map(o);break;case"LineString":e=u(t.arcs);break;case"MultiLineString":e=t.arcs.map(u);break;case"Polygon":e=f(t.arcs);break;case"MultiPolygon":e=t.arcs.map(f);break;default:return null}return{type:r,coordinates:e}}(t)}var c=function(n,t){var e={},r={},i={},a=[],o=-1;function u(n,t){for(var r in n){var i=n[r];delete t[i.start],delete i.start,delete i.end,i.forEach((function(n){e[n<0?~n:n]=1})),a.push(i)}}return t.forEach((function(e,r){var i,a=n.arcs[e<0?~e:e];a.length<3&&!a[1][0]&&!a[1][1]&&(i=t[++o],t[o]=e,t[r]=i)})),t.forEach((function(t){var e,a,o=function(t){var e,r=n.arcs[t<0?~t:t],i=r[0];n.transform?(e=[0,0],r.forEach((function(n){e[0]+=n[0],e[1]+=n[1]}))):e=r[r.length-1];return t<0?[e,i]:[i,e]}(t),u=o[0],c=o[1];if(e=i[u])if(delete i[e.end],e.push(t),e.end=c,a=r[c]){delete r[a.start];var f=a===e?e:e.concat(a);r[f.start=e.start]=i[f.end=a.end]=f}else r[e.start]=i[e.end]=e;else if(e=r[c])if(delete r[e.start],e.unshift(t),e.start=u,a=i[u]){delete i[a.end];var l=a===e?e:a.concat(e);r[l.start=a.start]=i[l.end=e.end]=l}else r[e.start]=i[e.end]=e;else r[(e=[t]).start=u]=i[e.end=c]=e})),u(i,r),u(r,i),t.forEach((function(n){e[n<0?~n:n]||a.push([n])})),a},f=function(n){return u(n,l.apply(this,arguments))};function l(n,t,e){var r,i,a;if(arguments.length>1)r=s(n,t,e);else for(i=0,r=new Array(a=n.arcs.length);i<a;++i)r[i]=i;return{type:"MultiLineString",arcs:c(n,r)}}function s(n,t,e){var r,i=[],a=[];function o(n){var t=n<0?~n:n;(a[t]||(a[t]=[])).push({i:n,g:r})}function u(n){n.forEach(o)}function c(n){n.forEach(u)}return function n(t){switch(r=t,t.type){case"GeometryCollection":t.geometries.forEach(n);break;case"LineString":u(t.arcs);break;case"MultiLineString":case"Polygon":c(t.arcs);break;case"MultiPolygon":!function(n){n.forEach(c)}(t.arcs)}}(t),a.forEach(null==e?function(n){i.push(n[0].i)}:function(n){e(n[0].g,n[n.length-1].g)&&i.push(n[0].i)}),i}},645:function(n,t,e){"use strict";t.a=function(n,t){for(var e=new Array(t),r=0;r<t;++r)e[r]=n(r/(t-1));return e}},646:function(n,t,e){"use strict";t.a=function(n,t,e){n=+n,t=+t,e=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((t-n)/e)),a=new Array(i);++r<i;)a[r]=n+r*e;return a}},647:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(32),i=e(646),a=e(88),o=e(620);function u(){var n,t,e=Object(o.a)().unknown(void 0),c=e.domain,f=e.range,l=0,s=1,d=!1,h=0,p=0,b=.5;function g(){var e=c().length,r=s<l,a=r?s:l,o=r?l:s;n=(o-a)/Math.max(1,e-h+2*p),d&&(n=Math.floor(n)),a+=(o-a-n*(e-h))*b,t=n*(1-h),d&&(a=Math.round(a),t=Math.round(t));var u=Object(i.a)(e).map((function(t){return a+n*t}));return f(r?u.reverse():u)}return delete e.unknown,e.domain=function(n){return arguments.length?(c(n),g()):c()},e.range=function(n){var t,e;return arguments.length?(t=n,e=Object(r.a)(t,2),l=e[0],s=e[1],l=+l,s=+s,g()):[l,s]},e.rangeRound=function(n){var t,e;return t=n,e=Object(r.a)(t,2),l=e[0],s=e[1],l=+l,s=+s,d=!0,g()},e.bandwidth=function(){return t},e.step=function(){return n},e.round=function(n){return arguments.length?(d=!!n,g()):d},e.padding=function(n){return arguments.length?(h=Math.min(1,p=+n),g()):h},e.paddingInner=function(n){return arguments.length?(h=Math.min(1,n),g()):h},e.paddingOuter=function(n){return arguments.length?(p=+n,g()):p},e.align=function(n){return arguments.length?(b=Math.max(0,Math.min(1,n)),g()):b},e.copy=function(){return u(c(),[l,s]).round(d).paddingInner(h).paddingOuter(p).align(b)},a.b.apply(g(),arguments)}},648:function(n,t,e){"use strict";var r=e(105),i=e(106),a=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r.a);t.a=Object(i.a)(a)},649:function(n,t,e){"use strict";var r=e(105),i=e(106),a=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r.a);t.a=Object(i.a)(a)},650:function(n,t,e){"use strict";var r=e(105),i=e(106),a=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r.a);t.a=Object(i.a)(a)},651:function(n,t,e){"use strict";var r=e(105),i=e(106),a=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r.a);t.a=Object(i.a)(a)},652:function(n,t,e){"use strict";var r=e(105),i=e(106),a=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r.a);t.a=Object(i.a)(a)},653:function(n,t,e){"use strict";function r(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);if(204!==n.status&&205!==n.status)return n.json()}t.a=function(n,t){return fetch(n,t).then(r)}},655:function(n,t,e){"use strict";var r=e(89),i=e(107);function a(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}var o=function(n,t,e,i,o){var c,f,l=[],s=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,e,i,u,f=n[0],d=n[t];if(i=f,u=d,Object(r.a)(i[0]-u[0])<r.d&&Object(r.a)(i[1]-u[1])<r.d){if(!f[2]&&!d[2]){for(o.lineStart(),c=0;c<t;++c)o.point((f=n[c])[0],f[1]);return void o.lineEnd()}d[0]+=2*r.d}l.push(e=new a(f,n,null,!0)),s.push(e.o=new a(f,null,e,!1)),l.push(e=new a(d,n,null,!1)),s.push(e.o=new a(d,null,e,!0))}})),l.length){for(s.sort(t),u(l),u(s),c=0,f=s.length;c<f;++c)s[c].e=e=!e;for(var d,h,p=l[0];;){for(var b=p,g=!0;b.v;)if((b=b.n)===p)return;d=b.z,o.lineStart();do{if(b.v=b.o.v=!0,b.e){if(g)for(c=0,f=d.length;c<f;++c)o.point((h=d[c])[0],h[1]);else i(b.x,b.n.x,1,o);b=b.n}else{if(g)for(d=b.p.z,c=d.length-1;c>=0;--c)o.point((h=d[c])[0],h[1]);else i(b.x,b.p.x,-1,o);b=b.p}d=(b=b.o).z,g=!g}while(!b.v);o.lineEnd()}}};function u(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}var c=e(104),f=e.n(c),l=e(87),s=f.a.mark(d);function d(n){var t,e,r;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=Object(l.a)(n),i.prev=1,t.s();case 3:if((e=t.n()).done){i.next=8;break}return r=e.value,i.delegateYield(r,"t0",6);case 6:i.next=3;break;case 8:i.next=13;break;case 10:i.prev=10,i.t1=i.catch(1),t.e(i.t1);case 13:return i.prev=13,t.f(),i.finish(13);case 16:case"end":return i.stop()}}),s,null,[[1,10,13,16]])}var h=1e9,p=-h;function b(n,t,e,a){function u(r,i){return n<=r&&r<=e&&t<=i&&i<=a}function c(r,i,o,u){var c=0,l=0;if(null==r||(c=f(r,o))!==(l=f(i,o))||s(r,i)<0^o>0)do{u.point(0===c||3===c?n:e,c>1?a:t)}while((c=(c+o+4)%4)!==l);else u.point(i[0],i[1])}function f(i,a){return Object(r.a)(i[0]-n)<r.d?a>0?0:3:Object(r.a)(i[0]-e)<r.d?a>0?2:1:Object(r.a)(i[1]-t)<r.d?a>0?1:0:a>0?3:2}function l(n,t){return s(n.x,t.x)}function s(n,t){var e=f(n,1),r=f(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(r){var f,s,b,g,v,y,m,M,w,x,_,j=r,E=function(){var n,t=[];return{point:function(t,e,r){n.push([t,e,r])},lineStart:function(){t.push(n=[])},lineEnd:i.a,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var e=t;return t=[],n=null,e}}}(),O={point:k,lineStart:function(){O.point=S,s&&s.push(b=[]);x=!0,w=!1,m=M=NaN},lineEnd:function(){f&&(S(g,v),y&&w&&E.rejoin(),f.push(E.result()));O.point=k,w&&j.lineEnd()},polygonStart:function(){j=E,f=[],s=[],_=!0},polygonEnd:function(){var t=function(){for(var t=0,e=0,r=s.length;e<r;++e)for(var i,o,u=s[e],c=1,f=u.length,l=u[0],d=l[0],h=l[1];c<f;++c)i=d,o=h,d=(l=u[c])[0],h=l[1],o<=a?h>a&&(d-i)*(a-o)>(h-o)*(n-i)&&++t:h<=a&&(d-i)*(a-o)<(h-o)*(n-i)&&--t;return t}(),e=_&&t,i=(u=f,f=Array.from(d(u))).length;var u;(e||i)&&(r.polygonStart(),e&&(r.lineStart(),c(null,null,1,r),r.lineEnd()),i&&o(f,l,t,c,r),r.polygonEnd());j=r,f=s=b=null}};function k(n,t){u(n,t)&&j.point(n,t)}function S(r,i){var o=u(r,i);if(s&&b.push([r,i]),x)g=r,v=i,y=o,x=!1,o&&(j.lineStart(),j.point(r,i));else if(o&&w)j.point(r,i);else{var c=[m=Math.max(p,Math.min(h,m)),M=Math.max(p,Math.min(h,M))],f=[r=Math.max(p,Math.min(h,r)),i=Math.max(p,Math.min(h,i))];!function(n,t,e,r,i,a){var o,u=n[0],c=n[1],f=0,l=1,s=t[0]-u,d=t[1]-c;if(o=e-u,s||!(o>0)){if(o/=s,s<0){if(o<f)return;o<l&&(l=o)}else if(s>0){if(o>l)return;o>f&&(f=o)}if(o=i-u,s||!(o<0)){if(o/=s,s<0){if(o>l)return;o>f&&(f=o)}else if(s>0){if(o<f)return;o<l&&(l=o)}if(o=r-c,d||!(o>0)){if(o/=d,d<0){if(o<f)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>f&&(f=o)}if(o=a-c,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>f&&(f=o)}else if(d>0){if(o<f)return;o<l&&(l=o)}return f>0&&(n[0]=u+f*s,n[1]=c+f*d),l<1&&(t[0]=u+l*s,t[1]=c+l*d),!0}}}}}(c,f,n,t,e,a)?o&&(j.lineStart(),j.point(r,i),_=!1):(w||(j.lineStart(),j.point(c[0],c[1])),j.point(f[0],f[1]),o||j.lineEnd(),_=!1)}m=r,M=i,w=o}return O}}var g=e(156);function v(n){return function(t){var e=new y;for(var r in n)e[r]=n[r];return e.stream=t,e}}function y(){}y.prototype={constructor:y,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var m=e(154),M=e(155);function w(n,t,e){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=r&&n.clipExtent(null),Object(m.a)(e,n.stream(M.a)),t(M.a.result()),null!=r&&n.clipExtent(r),n}function x(n,t,e){return w(n,(function(e){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],a=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),o=+t[0][0]+(r-a*(e[1][0]+e[0][0]))/2,u=+t[0][1]+(i-a*(e[1][1]+e[0][1]))/2;n.scale(150*a).translate([o,u])}),e)}t.a=function(){var n,t,e,i,a,o,u,c=1,f=0,l=0,s=1,d=1,h=0,p=null,y=1,m=1,M=v({point:function(n,t){var e=E([n,t]);this.stream.point(e[0],e[1])}}),_=g.a;function j(){return y=c*s,m=c*d,o=u=null,E}function E(e){var r=e[0]*y,i=e[1]*m;if(h){var a=i*n-r*t;r=r*n+i*t,i=a}return[r+f,i+l]}return E.invert=function(e){var r=e[0]-f,i=e[1]-l;if(h){var a=i*n+r*t;r=r*n-i*t,i=a}return[r/y,i/m]},E.stream=function(n){return o&&u===n?o:o=M(_(u=n))},E.postclip=function(n){return arguments.length?(_=n,p=e=i=a=null,j()):_},E.clipExtent=function(n){return arguments.length?(_=null==n?(p=e=i=a=null,g.a):b(p=+n[0][0],e=+n[0][1],i=+n[1][0],a=+n[1][1]),j()):null==p?null:[[p,e],[i,a]]},E.scale=function(n){return arguments.length?(c=+n,j()):c},E.translate=function(n){return arguments.length?(f=+n[0],l=+n[1],j()):[f,l]},E.angle=function(e){return arguments.length?(h=e%360*r.e,t=Object(r.f)(h),n=Object(r.b)(h),j()):h*r.c},E.reflectX=function(n){return arguments.length?(s=n?-1:1,j()):s<0},E.reflectY=function(n){return arguments.length?(d=n?-1:1,j()):d<0},E.fitExtent=function(n,t){return x(E,n,t)},E.fitSize=function(n,t){return function(n,t,e){return x(n,[[0,0],t],e)}(E,n,t)},E.fitWidth=function(n,t){return function(n,t,e){return w(n,(function(e){var r=+t,i=r/(e[1][0]-e[0][0]),a=(r-i*(e[1][0]+e[0][0]))/2,o=-i*e[0][1];n.scale(150*i).translate([a,o])}),e)}(E,n,t)},E.fitHeight=function(n,t){return function(n,t,e){return w(n,(function(e){var r=+t,i=r/(e[1][1]-e[0][1]),a=-i*e[0][0],o=(r-i*(e[1][1]+e[0][1]))/2;n.scale(150*i).translate([a,o])}),e)}(E,n,t)},E}},658:function(n,t,e){"use strict";var r=e(156),i=e(154),a=(e(87),e(102)),o=e(110),u=function(){function n(){Object(a.a)(this,n),this._partials=new Float64Array(32),this._n=0}return Object(o.a)(n,[{key:"add",value:function(n){for(var t=this._partials,e=0,r=0;r<this._n&&r<32;r++){var i=t[r],a=n+i,o=Math.abs(n)<Math.abs(i)?n-(a-i):i-(a-n);o&&(t[e++]=o),n=a}return t[e]=n,this._n=e+1,this}},{key:"valueOf",value:function(){var n,t,e,r=this._partials,i=this._n,a=0;if(i>0){for(a=r[--i];i>0&&(n=a,!(e=(t=r[--i])-((a=n+t)-n))););i>0&&(e<0&&r[i-1]<0||e>0&&r[i-1]>0)&&(t=2*e)==(n=a+t)-a&&(a=n)}return a}}]),n}();var c,f,l,s,d=e(89),h=e(107),p=new u,b=new u,g={point:h.a,lineStart:h.a,lineEnd:h.a,polygonStart:function(){g.lineStart=v,g.lineEnd=M},polygonEnd:function(){g.lineStart=g.lineEnd=g.point=h.a,p.add(Object(d.a)(b)),b=new u},result:function(){var n=p/2;return p=new u,n}};function v(){g.point=y}function y(n,t){g.point=m,c=l=n,f=s=t}function m(n,t){b.add(s*n-l*t),l=n,s=t}function M(){m(c,f)}var w,x,_,j,E=g,O=e(155),k=0,S=0,A=0,N=0,P=0,F=0,z=0,C=0,R=0,L={point:H,lineStart:V,lineEnd:I,polygonStart:function(){L.lineStart=T,L.lineEnd=J},polygonEnd:function(){L.point=H,L.lineStart=V,L.lineEnd=I},result:function(){var n=R?[z/R,C/R]:F?[N/F,P/F]:A?[k/A,S/A]:[NaN,NaN];return k=S=A=N=P=F=z=C=R=0,n}};function H(n,t){k+=n,S+=t,++A}function V(){L.point=q}function q(n,t){L.point=G,H(_=n,j=t)}function G(n,t){var e=n-_,r=t-j,i=Object(d.g)(e*e+r*r);N+=i*(_+n)/2,P+=i*(j+t)/2,F+=i,H(_=n,j=t)}function I(){L.point=H}function T(){L.point=Y}function J(){W(w,x)}function Y(n,t){L.point=W,H(w=_=n,x=j=t)}function W(n,t){var e=n-_,r=t-j,i=Object(d.g)(e*e+r*r);N+=i*(_+n)/2,P+=i*(j+t)/2,F+=i,z+=(i=j*n-_*t)*(_+n),C+=i*(j+t),R+=3*i,H(_=n,j=t)}var X=L;function Z(n){this._context=n}Z.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,d.h)}},result:h.a};var B,D,K,Q,U,$=new u,nn={point:h.a,lineStart:function(){nn.point=tn},lineEnd:function(){B&&en(D,K),nn.point=h.a},polygonStart:function(){B=!0},polygonEnd:function(){B=null},result:function(){var n=+$;return $=new u,n}};function tn(n,t){nn.point=en,D=Q=n,K=U=t}function en(n,t){Q-=n,U-=t,$.add(Object(d.g)(Q*Q+U*U)),Q=n,U=t}var rn=nn;function an(){this._string=[]}function on(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}an.prototype={_radius:4.5,_circle:on(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._string.push("M",n,",",t),this._point=1;break;case 1:this._string.push("L",n,",",t);break;default:null==this._circle&&(this._circle=on(this._radius)),this._string.push("M",n,",",t,this._circle)}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}return null}};t.a=function(n,t){var e,a,o=4.5;function u(n){return n&&("function"===typeof o&&a.pointRadius(+o.apply(this,arguments)),Object(i.a)(n,e(a))),a.result()}return u.area=function(n){return Object(i.a)(n,e(E)),E.result()},u.measure=function(n){return Object(i.a)(n,e(rn)),rn.result()},u.bounds=function(n){return Object(i.a)(n,e(O.a)),O.a.result()},u.centroid=function(n){return Object(i.a)(n,e(X)),X.result()},u.projection=function(t){return arguments.length?(e=null==t?(n=null,r.a):(n=t).stream,u):n},u.context=function(n){return arguments.length?(a=null==n?(t=null,new an):new Z(t=n),"function"!==typeof o&&a.pointRadius(o),u):t},u.pointRadius=function(n){return arguments.length?(o="function"===typeof n?n:(a.pointRadius(+n),+n),u):o},u.projection(n).context(t)}},663:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e(618),i=e(87);function a(n,t){var e;if(void 0===t){var r,a=Object(i.a)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;null!=o&&(e>o||void 0===e&&o>=o)&&(e=o)}}catch(s){a.e(s)}finally{a.f()}}else{var u,c=-1,f=Object(i.a)(n);try{for(f.s();!(u=f.n()).done;){var l=u.value;null!=(l=t(l,++c,n))&&(e>l||void 0===e&&l>=l)&&(e=l)}}catch(s){f.e(s)}finally{f.f()}}return e}var o=e(122);function u(n,t){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.a;r>e;){if(r-e>600){var a=r-e+1,f=t-e+1,l=Math.log(a),s=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*s*(a-s)/a)*(f-a/2<0?-1:1),h=Math.max(e,Math.floor(t-f*s/a+d)),p=Math.min(r,Math.floor(t+(a-f)*s/a+d));u(n,t,h,p,i)}var b=n[t],g=e,v=r;for(c(n,e,t),i(n[r],b)>0&&c(n,e,r);g<v;){for(c(n,g,v),++g,--v;i(n[g],b)<0;)++g;for(;i(n[v],b)>0;)--v}0===i(n[e],b)?c(n,e,v):c(n,++v,r),v<=t&&(e=v+1),t<=v&&(r=v-1)}return n}function c(n,t,e){var r=n[t];n[t]=n[e],n[e]=r}var f=e(152);function l(n,t,e){if(i=(n=Float64Array.from(Object(f.b)(n,e))).length){if((t=+t)<=0||i<2)return a(n);if(t>=1)return Object(r.a)(n);var i,o=(i-1)*t,c=Math.floor(o),l=Object(r.a)(u(n,c).subarray(0,c+1));return l+(a(n.subarray(c+1))-l)*(o-c)}}},664:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(32),i=e(660),a=e(641),o=e(100),u=e(88),c=e(124);e(642),e(656),e(153);e(621);function f(){var n,t,e,u,c,f=0,l=1,s=o.c,d=!1;function h(t){return null==t||isNaN(t=+t)?c:s(0===e?.5:(t=(u(t)-n)*e,d?Math.max(0,Math.min(1,t)):t))}function p(n){return function(t){var e,i,a,o;return arguments.length?(e=t,a=(i=Object(r.a)(e,2))[0],o=i[1],s=n(a,o),h):[s(0),s(1)]}}return h.domain=function(i){var a,o;return arguments.length?(a=i,o=Object(r.a)(a,2),f=o[0],l=o[1],n=u(f=+f),t=u(l=+l),e=n===t?0:1/(t-n),h):[f,l]},h.clamp=function(n){return arguments.length?(d=!!n,h):d},h.interpolator=function(n){return arguments.length?(s=n,h):s},h.range=p(i.a),h.rangeRound=p(a.a),h.unknown=function(n){return arguments.length?(c=n,h):c},function(r){return u=r,n=r(f),t=r(l),e=n===t?0:1/(t-n),h}}function l(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function s(){var n=Object(c.b)(f()(o.c));return n.copy=function(){return l(n,s())},u.a.apply(n,arguments)}},665:function(n,t,e){"use strict";e.d(t,"b",(function(){return d})),e.d(t,"a",(function(){return h}));var r=Array.prototype.slice,i=function(n){return n},a=1e-6;function o(n){return"translate("+n+",0)"}function u(n){return"translate(0,"+n+")"}function c(n){return function(t){return+n(t)}}function f(n,t){return t=Math.max(0,n.bandwidth()-2*t)/2,n.round()&&(t=Math.round(t)),function(e){return+n(e)+t}}function l(){return!this.__axis}function s(n,t){var e=[],s=null,d=null,h=6,p=6,b=3,g="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,v=1===n||4===n?-1:1,y=4===n||2===n?"x":"y",m=1===n||3===n?o:u;function M(r){var o=null==s?t.ticks?t.ticks.apply(t,e):t.domain():s,u=null==d?t.tickFormat?t.tickFormat.apply(t,e):i:d,M=Math.max(h,0)+b,w=t.range(),x=+w[0]+g,_=+w[w.length-1]+g,j=(t.bandwidth?f:c)(t.copy(),g),E=r.selection?r.selection():r,O=E.selectAll(".domain").data([null]),k=E.selectAll(".tick").data(o,t).order(),S=k.exit(),A=k.enter().append("g").attr("class","tick"),N=k.select("line"),P=k.select("text");O=O.merge(O.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(A),N=N.merge(A.append("line").attr("stroke","currentColor").attr(y+"2",v*h)),P=P.merge(A.append("text").attr("fill","currentColor").attr(y,v*M).attr("dy",1===n?"0em":3===n?"0.71em":"0.32em")),r!==E&&(O=O.transition(r),k=k.transition(r),N=N.transition(r),P=P.transition(r),S=S.transition(r).attr("opacity",a).attr("transform",(function(n){return isFinite(n=j(n))?m(n+g):this.getAttribute("transform")})),A.attr("opacity",a).attr("transform",(function(n){var t=this.parentNode.__axis;return m((t&&isFinite(t=t(n))?t:j(n))+g)}))),S.remove(),O.attr("d",4===n||2===n?p?"M"+v*p+","+x+"H"+g+"V"+_+"H"+v*p:"M"+g+","+x+"V"+_:p?"M"+x+","+v*p+"V"+g+"H"+_+"V"+v*p:"M"+x+","+g+"H"+_),k.attr("opacity",1).attr("transform",(function(n){return m(j(n)+g)})),N.attr(y+"2",v*h),P.attr(y,v*M).text(u),E.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===n?"start":4===n?"end":"middle"),E.each((function(){this.__axis=j}))}return M.scale=function(n){return arguments.length?(t=n,M):t},M.ticks=function(){return e=r.call(arguments),M},M.tickArguments=function(n){return arguments.length?(e=null==n?[]:r.call(n),M):e.slice()},M.tickValues=function(n){return arguments.length?(s=null==n?null:r.call(n),M):s&&s.slice()},M.tickFormat=function(n){return arguments.length?(d=n,M):d},M.tickSize=function(n){return arguments.length?(h=p=+n,M):h},M.tickSizeInner=function(n){return arguments.length?(h=+n,M):h},M.tickSizeOuter=function(n){return arguments.length?(p=+n,M):p},M.tickPadding=function(n){return arguments.length?(b=+n,M):b},M.offset=function(n){return arguments.length?(g=+n,M):g},M}function d(n){return s(2,n)}function h(n){return s(3,n)}},89:function(n,t,e){"use strict";e.d(t,"d",(function(){return r})),e.d(t,"h",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"e",(function(){return u})),e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return f})),e.d(t,"f",(function(){return l})),e.d(t,"g",(function(){return s}));var r=1e-6,i=Math.PI,a=2*i,o=180/i,u=i/180,c=Math.abs,f=(Math.atan,Math.atan2,Math.cos),l=(Math.ceil,Math.exp,Math.floor,Math.hypot,Math.log,Math.pow,Math.sin),s=(Math.sign,Math.sqrt);Math.tan}}]);
//# sourceMappingURL=10.799909e1.chunk.js.map