(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cfb75b"],{"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var c in i){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==o)try{a(s,"forEach",o)}catch(l){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),o=r("7b0b"),a=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,h=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var y=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,x=y?"$":"$0";return[function(r,n){var i=u(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!y&&m||"string"===typeof n&&-1===n.indexOf(x)){var o=r(e,t,this,n);if(o.done)return o.value}var u=i(t),p=String(this),d="function"===typeof n;d||(n=String(n));var v=u.global;if(v){var E=u.unicode;u.lastIndex=0}var w=[];while(1){var L=l(u,p);if(null===L)break;if(w.push(L),!v)break;var S=String(L[0]);""===S&&(u.lastIndex=s(p,a(u.lastIndex),E))}for(var _="",T=0,A=0;A<w.length;A++){L=w[A];for(var R=String(L[0]),I=f(h(c(L.index),p.length),0),P=[],N=1;N<L.length;N++)P.push(g(L[N]));var k=L.groups;if(d){var O=[R].concat(P,I,p);void 0!==k&&O.push(k);var C=String(n.apply(void 0,O))}else C=b(R,p,I,P,k,n);I>=T&&(_+=p.slice(T,I)+C,T=I+R.length)}return _+p.slice(T)}];function b(t,r,n,i,a,c){var u=n+t.length,s=i.length,l=v;return void 0!==a&&(a=o(a),l=d),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"7b7e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"snippet"}},[r("article",{class:{"video-article":"video"===this.snippet.category,"snippet-article":!0}},[r("h1",{staticClass:"hero-title"},[t._v(t._s((t.snippet.title||"").replace("(JS Bits)","")))]),r("div",{attrs:{id:"article-body"},domProps:{innerHTML:t._s(t.snippet.body_html)}})])])},i=[];r("99af"),r("7db0"),r("4160"),r("d3b7"),r("ac1f"),r("5319"),r("159b"),r("96cf"),r("e6cf");function o(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}r("25f0");var c={slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},waitFor:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e4,i=t();if("abort"!==i)return i?void e(i):n<=0?void 0:(n-=r,setTimeout(this.waitFor.bind(this,t,e,r,n),r))},loadScript:function(t,e){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,"function"===typeof e&&(r.onload=e),document.head.insertAdjacentElement("beforeend",r)}},u=r("b56c"),s={name:"Snippet",mixins:[c],data:function(){return{slug:null,snippet:{}}},methods:{openImagesInNewTab:function(){document.querySelectorAll(".article-body-image-wrapper").forEach((function(t){t.setAttribute("target","_blank")}))},getSnippet:function(t){return u["a"].find((function(e){return e.slug===t}))||{}},getArticle:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dev.to/api/articles/js_bits_bill/".concat(t.slug));case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.snippet=n;case 7:case"end":return e.stop()}}),e)})))()},adjustments:function(){var t=document.querySelector('img[src*="circle-svg"]');t&&(t.style.width="50px");var e=document.querySelector('#article-body a[href*="twitter.com/js_bits_bill"]');e&&e.setAttribute("target","_blank")}},created:function(){this.slug=this.$route.params.id;var t=this.getSnippet(this.slug);"article"===t.category?this.getArticle(this.snippetName):this.snippet={category:"video",title:t.title,body_html:"\n\t\t\t\t<p>".concat(t.desc,'</p>\n\t\t\t\t<div class="video-container">\n\t\t\t\t\t<iframe \n\t\t\t\t\t\twidth="560" height="315" \n\t\t\t\t\t\tsrc="').concat(t.videoUrl.replace("watch?v=","embed/"),'" \n\t\t\t\t\t\tframeborder="0" allowfullscreen>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>')}},updated:function(){this.openImagesInNewTab(),this.adjustments()}},l=s,f=(r("912f"),r("2877")),h=Object(f["a"])(l,n,i,!1,null,null,null);e["default"]=h.exports},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,o=r("44d2"),a=r("ae40"),c="find",u=!0,s=a(c);c in[]&&Array(1)[c]((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"912f":function(t,e,r){"use strict";var n=r("c592"),i=r.n(n);i.a},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,r,i,c,f=this,h=s&&f.sticky,p=n.call(f),d=f.source,v=0,g=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),r=new RegExp("^(?:"+d+")",p)),l&&(r=new RegExp("^"+d+"$(?!\\s)",p)),u&&(e=f.lastIndex),i=o.call(h?r:f,g),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new R(n||[]);return o._invoke=S(t,r,a),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function g(){}function y(){}var m={};m[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(I([])));b&&b!==r&&n.call(b,o)&&(m=b);var E=y.prototype=v.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(i,o,a,c){var u=s(t[i],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,r){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return P()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=s(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=E.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(E),E[c]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),u=r("50c4"),s=r("8418"),l=r("65f0"),f=r("1dde"),h=r("b622"),p=r("2d00"),d=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",y=p>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),m=f("concat"),x=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:o(t)},b=!y||!m;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,i,o,a=c(this),f=l(a,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],x(o)){if(i=u(o.length),h+i>v)throw TypeError(g);for(r=0;r<i;r++,h++)r in o&&s(f,h,o[r])}else{if(h>=v)throw TypeError(g);s(f,h++,o)}return f.length=h,f}})},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,h=5==t||f;return function(p,d,v,g){for(var y,m,x=o(p),b=i(x),E=n(d,v,3),w=a(b.length),L=0,S=g||c,_=e?S(p,w):r?S(p,0):void 0;w>L;L++)if((h||L in b)&&(y=b[L],m=E(y,L,x),t))if(e)_[L]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return L;case 2:u.call(_,y)}else if(l)return!1;return f?-1:s||l?l:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c592:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),o=r("b622"),a=r("9263"),c=r("9112"),u=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var d=o(t),v=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!v||!g||"replace"===t&&(!s||!l||h)||"split"===t&&!p){var y=/./[d],m=r(d,""[t],(function(t,e,r,n,i){return e.exec===a?v&&!i?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=m[0],b=m[1];n(String.prototype,t,x),n(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-53cfb75b.989ea2ef.js.map