(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e36d8f62"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"170b":function(t,e,n){"use strict";var r=n("b602"),i=n.n(r);i.a},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"414a":function(t,e,n){"use strict";n("d3b7"),n("ac1f"),n("25f0"),n("5319");e["a"]={slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},waitFor:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e4,i=t();if("abort"!==i)return i?void e(i):r<=0?void 0:(r-=n,setTimeout(this.waitFor.bind(this,t,e,n,r),n))},loadScript:function(t,e){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,"function"===typeof e&&(n.onload=e),document.head.insertAdjacentElement("beforeend",n)}}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),a=n("50c4"),c=n("a691"),u=n("1d80"),s=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,b=x?"$":"$0";return[function(n,r){var i=u(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var u=i(t),p=String(this),v="function"===typeof r;v||(r=String(r));var g=u.global;if(g){var m=u.unicode;u.lastIndex=0}var y=[];while(1){var _=l(u,p);if(null===_)break;if(y.push(_),!g)break;var w=String(_[0]);""===w&&(u.lastIndex=s(p,a(u.lastIndex),m))}for(var R="",T=0,S=0;S<y.length;S++){_=y[S];for(var A=String(_[0]),I=f(d(c(_.index),p.length),0),$=[],C=1;C<_.length;C++)$.push(h(_[C]));var U=_.groups;if(v){var P=[A].concat($,I,p);void 0!==U&&P.push(U);var j=String(r.apply(void 0,P))}else j=k(A,p,I,$,U,r);I>=T&&(R+=p.slice(T,I)+j,T=I+A.length)}return R+p.slice(T)}];function k(t,n,r,i,a,c){var u=r+t.length,s=i.length,l=g;return void 0!==a&&(a=o(a),l=v),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,a,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8237:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tiktok"}},[n("h1",[t._v("TikTok Videos")]),t._m(0),n("ul",{staticClass:"video-list"},t._l(t.tikTokVideos,(function(e,r){return n("li",{key:e.public_id,staticClass:"video-container"},[n("a",{attrs:{href:t.videoURLs[r],target:"_blank"}},[n("img",{attrs:{src:e.secure_url}})])])})),0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Just a few of my latest vids. Follow me on TikTok "),n("a",{staticClass:"tiktok-link",attrs:{href:"https://www.tiktok.com/@js_bits?",target:"_blank"}},[t._v("here")]),t._v("!")])}],o=(n("d81d"),n("d3b7"),n("414a")),a={name:"TikTok",data:function(){return{tikTokVideos:[]}},computed:{videoURLs:function(){return this.tikTokVideos.map((function(t){return"https://www.tiktok.com/@js_bits/video/".concat(t.context.custom.id)}))}},methods:{getTikTokVideos:function(){var t=this;fetch("".concat(window.baseURL,"/tiktok")).then((function(t){return t.json()})).then((function(e){t.tikTokVideos=e.resources.sort((function(t,e){return+t.context.custom.created<+e.context.custom.created?1:+t.context.custom.created>+e.context.custom.created?-1:0}))}))}},beforeCreate:function(){o["a"].loadScript("https://www.tiktok.com/embed.js")},created:function(){this.getTikTokVideos()}},c=a,u=(n("170b"),n("2877")),s=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=s.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,n,i,c,f=this,d=s&&f.sticky,p=r.call(f),v=f.source,g=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),l&&(n=new RegExp("^"+v+"$(?!\\s)",p)),u&&(e=f.lastIndex),i=o.call(d?n:f,h),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b602:function(t,e,n){},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,v,g,h){for(var x,E,b=o(p),k=i(b),m=r(v,g,3),y=a(k.length),_=0,w=h||c,R=e?w(p,y):n?w(p,0):void 0;y>_;_++)if((d||_ in k)&&(x=k[_],E=m(x,_,b),t))if(e)R[_]=E;else if(E)switch(t){case 3:return!0;case 5:return x;case 6:return _;case 2:u.call(R,x)}else if(l)return!1;return f?-1:s||l?l:R}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),u=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=o(t),g=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!h||"replace"===t&&(!s||!l||d)||"split"===t&&!p){var x=/./[v],E=n(v,""[t],(function(t,e,n,r,i){return e.exec===a?g&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],k=E[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==e?function(t,e){return k.call(t,this,e)}:function(t){return k.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),c=o("map"),u=a("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-e36d8f62.0b230360.js.map