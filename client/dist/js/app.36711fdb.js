(function(e){function t(t){for(var i,s,n=t[0],l=t[1],c=t[2],u=0,d=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,s=1;s<a.length;s++){var n=a[s];0!==r[n]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={app:0},r={app:0},o=[];function n(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-4661cd16":"6ff51ec9","chunk-53cfb75b":"989ea2ef","chunk-aa8ca6e8":"45f7b9d0"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-53cfb75b":1,"chunk-aa8ca6e8":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var i="css/"+({}[e]||e)+"."+{"chunk-4661cd16":"31d6cfe0","chunk-53cfb75b":"38e46abf","chunk-aa8ca6e8":"81c4e942"}[e]+".css",r=l.p+i,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var c=o[n],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===r))return t()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){c=d[n],u=c.getAttribute("data-href");if(u===i||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete s[e],p.parentNode.removeChild(p),a(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){s[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,a){i=r[e]=[t,a]}));t.push(i[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=n(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01f7":function(e,t,a){},"0418":function(e,t,a){"use strict";var i=a("f5ad"),s=a("ad21"),r=(a("5452"),a("2877")),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=o.exports},2064:function(e,t){e.exports="data:image/webp;base64,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"},"2a73":function(e,t,a){"use strict";var i=a("af63"),s=a.n(i);s.a},"4c2e":function(e,t,a){e.exports=a.p+"img/tiktok-icon.aee6027e.webp"},"53d7":function(e,t,a){"use strict";var i=a("01f7"),s=a.n(i);s.a},5452:function(e,t,a){"use strict";var i=a("af35"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("caad"),a("2532"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"wrapper"},[a("router-view")],1),a("Footer")],1)},r=[],o=a("0418"),n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{staticClass:"footer-left"},[e._v("©2021 JS Bits")]),i("div",{staticClass:"footer-right"},[i("a",{staticClass:"footer-link",attrs:{href:"https://www.tiktok.com/@js_bits",target:"_blank"}},[i("img",{staticClass:"footer-icon",attrs:{src:a("4c2e"),width:"30",height:"30"}}),i("span",{staticClass:"footer-handle"},[e._v("@js_bits")])]),i("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com/JS_Bits_Bill",target:"_blank"}},[i("img",{staticClass:"footer-icon",attrs:{src:a("2064"),width:"30",height:"30"}}),i("span",{staticClass:"footer-handle"},[e._v("@JS_Bits_Bill")])])])])}],c=(a("53d7"),a("2877")),u={},d=Object(c["a"])(u,n,l,!1,null,null,null),p=d.exports,m={name:"App",components:{Header:o["default"],Footer:p},data:function(){return{}}},g=m,h=(a("5c0b"),Object(c["a"])(g,s,r,!1,null,null,null)),y=h.exports,b=(a("d3b7"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("Hero"),a("SnippetList")],1)},w=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"hero"}},[a("h1",{staticClass:"hero-title"},[e._v("JavaScript Tips & Tricks")]),a("div",{staticClass:"featured-snippet"},[a("div",{staticClass:"featured-snippet-left"},[a("h5",{staticClass:"latest-title"},[e._v("Latest Post")]),a("h2",{staticClass:"snippet-title"},[e._v(e._s(e.snippet.title))]),a("div",{staticClass:"featured-snippet-desc"},[e._v(e._s(e.snippet.desc))]),a("router-link",{staticClass:"read-code-notes",attrs:{to:{name:"Snippet",params:{id:e.snippet.slug}}}},[e._v("Read Article")])],1),a("div",{staticClass:"featured-snippet-right"},[a("router-link",{attrs:{to:{name:"Snippet",params:{id:e.snippet.slug}}}},[a("img",{staticClass:"featured-snippet-image",attrs:{src:e.snippet.image,width:"649",height:"358"}})])],1)])])},A=[],S=a("b56c"),k={name:"Hero",data:function(){return{snippet:S["a"][0]}}},C=k,j=(a("2a73"),Object(c["a"])(C,f,A,!1,null,null,null)),B=j.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"snippets"}},[a("h1",{staticClass:"snippets-title"},[e._v("Code Snippets")]),a("ul",{staticClass:"snippets-list"},e._l(e.snippets,(function(t){return a("li",{key:t.title,staticClass:"snippet"},[a("router-link",{staticClass:"snippet-link",attrs:{to:{name:"Snippet",params:{id:t.slug}}}},[a("img",{staticClass:"snippet-image",attrs:{src:t.image}}),a("h3",{staticClass:"snippet-title"},[e._v(e._s(t.title))])]),a("div",{staticClass:"snippet-desc"},[e._v(e._s(t.desc))])],1)})),0)])},z=[],I=(a("fb6a"),{name:"SnippetList",data:function(){return{snippets:S["a"].slice(1)}}}),E=I,J=(a("ad7c"),Object(c["a"])(E,q,z,!1,null,null,null)),T=J.exports,P={name:"Home",components:{SnippetList:T,Hero:B},data:function(){return{}}},O=P,R=Object(c["a"])(O,v,w,!1,null,null,null),Q=R.exports;i["a"].use(b["a"]);var F=new b["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Q},{path:"/code-bits",alias:"/interviews",name:"CategoryPage",component:function(){return a.e("chunk-4661cd16").then(a.bind(null,"bafc"))}},{path:"/snippet/:id",name:"Snippet",component:function(){return a.e("chunk-53cfb75b").then(a.bind(null,"7b7e"))}},{path:"/tiktok",name:"TikTok",component:function(){return a.e("chunk-aa8ca6e8").then(a.bind(null,"8237"))}}]}),U=a("0284"),N=a.n(U);i["a"].config.productionTip=!1,i["a"].use(N.a,{id:"UA-171716275-1",router:F}),new i["a"]({router:F,render:function(e){return e(y)}}).$mount("#app"),window.baseURL=window.location.host.includes("jsbits-yo.com")?"https://".concat(window.location.host,"/api"):"http://localhost:8081/api"},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"7ec4":function(e,t,a){},"9c0c":function(e,t,a){},ad21:function(e,t,a){"use strict";var i=a("e504"),s=a.n(i);t["default"]=s.a},ad7c:function(e,t,a){"use strict";var i=a("7ec4"),s=a.n(i);s.a},af35:function(e,t,a){},af63:function(e,t,a){},b56c:function(e,t,a){"use strict";var i=[{title:"HTML5 Video Picture-in-Picture Mode",slug:"html5-video-picture-in-picture-mode-o40",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1627445358/JS%20Bits/Picture-in-Picture_-_Cover_pagn7q.webp",desc:"The native Picture-in-Picture API allows you to create a floating, pinned HTML5 video that overlays on top of your workspace.",category:"article"},{title:"SVG Cleanup",slug:"svg-cleanup-c08",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1625026151/JS%20Bits/SVG_cleanup_-_Twitter_ula31p.jpg",desc:"SVGOMG lets you easily remove unneeded SVG features like doctype, comments, metadata, etc. to reduce the file size.",category:"article"},{title:"CSS :placeholder-shown",slug:"css-placeholder-shown-5848",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1624899533/JS%20Bits/placeholder-shown_cover_-_Twitter_iosr4m.webp",desc:"The :placeholder-shown pseudo-class represents any <input> or <textarea> element that is displaying placeholder text.",category:"article"},{title:"Simple Lazy Loading",slug:"simple-lazy-loading-4i75",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1624476943/JS%20Bits/lazyload_cover_-_Twitter_skdbot.webp",desc:"The native HTML “loading” attribute can be set to “lazy,” which defers image loading until it enters the viewport.",category:"article"},{title:"How to check trusted events",slug:"how-to-check-trusted-events-js-bits-1el4",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1624848146/JS%20Bits/how-to-check-trusted-events_ebymzf.webp",desc:"How to detect real user events with Event.isTrusted and prevent bot actions",category:"article"},{title:"The JavaScript Banana 🍌",slug:"the-javascript-banana-js-bits-2epb",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1621566988/JS%20Bits/the-javascript-banana_zugmva.webp",desc:"You gotta make programming fun once in a while. Why not have a banana!",category:"article"},{title:'What is "this"? Why you should avoid arrow functions on Vue methods',slug:"what-is-this-why-you-should-avoid-arrow-functions-on-vue-methods-a71",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1619206338/JS%20Bits/what-is-this_an2b4l.webp",desc:"An in-depth look at why they cause issues.",category:"article"},{title:"HTMLInputElement.valueAsNumber",slug:"htmlinputelement-valueasnumber-js-bits-3pfl",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1617642250/JS%20Bits/htmlinput-valueasnumber_iwug0n.webp",desc:'By default, <input> value\'s are a string type. But you can use valueAsNumber on an <input> with type="number". No conversion necessary!',category:"article"},{title:"Underscores as number separators",slug:"underscores-as-number-separators-js-bits-1cjm",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1616796320/JS%20Bits/underscores-as-number-separators_z9ihwr.webp",desc:"You can improve readability by using underscores (_) in numeric primitives.",category:"article"},{title:"Reflections on blogging",slug:"reflections-on-blogging-js-bits-12go",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1609262306/JS%20Bits/reflections-on-blogging_ab9xxf.webp",desc:"At the midway point of this year, I decided to pick up blogging as a new quarantine hobby. Here are some of things I learned along the way.",category:"article"},{title:"How to Easily Copy and Modify Network Requests",slug:"how-to-easily-copy-and-modify-network-requests-js-bits-o70",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1608614348/JS%20Bits/how-to-easily-copy-and-modify-network-requests_vzyibx.webp",desc:"Have you ever needed to debug a network request? Maybe you'd like to see what kind of response the server will send if you tweak some request parameters or headers?",category:"article"},{title:"JS Quirk: Element IDs are global variables!",slug:"js-quirk-element-ids-are-global-variables-js-bits-1dka",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1608614431/JS%20Bits/js-quirk-element-ids-are-global-variables_okd41u.webp",desc:"Here's an interesting quirk I recently discovered...",category:"article"},{title:'"Happy Medium Commenting" in JavaScript',slug:"happy-medium-commenting-in-javascript-js-bits-461k",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1607446818/JS%20Bits/happy-medium-commenting-in-javascript_ssvgk2.webp",desc:"Warning: this is an opinionated post! 😱",category:"article"},{title:"Event Delegation with Vanilla JS",slug:"event-delegation-with-vanilla-js-js-bits-2lnb",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1606870699/JS%20Bits/event-delegations-with-vanilla-js_w8mfvd.webp",desc:"One of the most powerful and convenient techniques in jQuery is event delegation - Here's how to do it in vanilla!",category:"article"},{title:"Dynamic Open Graph Meta Tags with VueJS and Node",slug:"dynamic-open-graph-meta-tags-with-vuejs-and-node-js-bits-2a11",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1606186514/JS%20Bits/dynamic-open-graph-meta-tags-with-vuejs-and-node_nrn1ww.webp",desc:"I recently faced an interesting dilemma where I was unable to solution for creation dynamic Open Graph metadata for my custom built T-shirt website, Fat Cattitude.",category:"article"},{title:"Symbols Are Your Friend Series Part VII: Symbol.asyncIterator, Symbol.hasInstance & Symbol.isConcatSpreadable",slug:"symbols-are-your-friend-series-part-vii-symbol-asynciterator-symbol-hasinstance-symbol-isconcatspreadable-js-bits-4h26",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1605829852/JS%20Bits/symbols-are-your-friend-part-vii_oyxqbq.webp",desc:"This is it - the last of the well-known symbols! Today we'll look at: Symbol.asyncIterator, Symbol.hasInstance, Symbol.isConcatSpreadable.",category:"article"},{title:"Symbols Are Your Friend Series Part VI: Symbol.match, Symbol.matchAll & Symbol.replace",slug:"symbols-are-your-friend-series-part-vi-symbol-match-symbol-matchall-symbol-replace-js-bits-539g",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1605036338/JS%20Bits/symbols-are-your-friend-part-vi_fbgjpk.webp",desc:"Well, we've made it this far 😅. We might as well explore the remaining Symbol properties. There's only 6 more left, but we'll break them up into 2 more articles.",category:"article"},{title:"Symbols Are Your Friend Part V: Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables",slug:"symbols-are-your-friend-part-v-symbol-toprimitive-symbol-tostringtag-symbol-unscopables-js-bits-nee",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1604429440/JS%20Bits/symbols-are-your-friend-part-v_dacz1s.webp",desc:"I know. You haven't gotten your fill of symbols yet. Rest assured, there's more! This week, we'll take a look at Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables.",category:"article"},{title:"Symbols Are Your Friend Part IV: Symbol.search, Symbol.split, & Symbol.species",slug:"symbols-are-your-friend-part-iv-symbol-search-symbol-split-symbol-species-js-bits-4i25",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1603691587/JS%20Bits/symbols-are-your-friend-part-iv_yh4m1o.webp",desc:"Since the wildly popular Symbols Are Your Friend article series has the momentum of a runaway freight train  (not really), let's check out some more static Symbol properties!",category:"article"},{title:"Symbols Are Your Friend Part III: Symbol.iterator",slug:"symbols-are-your-friend-part-iii-symbol-iterator-js-bits-18c4",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1603121178/JS%20Bits/symbols-are-your-friend-part-iii_d5n9zo.webp",desc:"Symbol.iterator can be the most abstruse symbol-related concept. Let's break it down!",category:"article"},{title:"Symbols Are Your Friend Part II: Symbol.for() & Symbol.keyFor()",slug:"symbols-are-your-friend-part-ii-symbol-for-symbol-keyfor-js-bits-3clc",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1602048687/JS%20Bits/symbols-are-your-friend-part-ii_dde6d4.webp",desc:"In this second episode, we'll explore the 2 static Symbol methods, Symbol.for() and Symbol.keyFor().",category:"article"},{title:"Symbols Are Your Friend Part I: A Gentle Introduction",slug:"symbols-are-your-friend-a-gentle-introduction-js-bits-23af",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1602048467/JS%20Bits/symbols-are-your-friend-part-i_zlmjiz.webp",desc:"The concept of the Symbol can trip up many a developer. In this article, I'll attempt to demystify them and describe what they are.",category:"article"},{title:"Interview with Matt Coloe (Tinuiti)",slug:"interview-with-matt-coloe-tinuiti",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1601404882/JS%20Bits/interview-with-matt-coloe-tinuiti_eef78v.webp",desc:"Matt is my brother and made a career transition to front-end development several years ago. We talk work/life balance, development challenges, and we do a random lightning round just for fun!",category:"video",videoUrl:"https://www.youtube.com/watch?v=07wagjRigE8"},{title:"Interview with Chris Bongers (Daily Dev Tips)",slug:"interview-with-chris-bongers-daily-dev-tips",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/interview-with-chris-bongers-daily-dev-tips_bjhsdk.webp",desc:"I had the pleasure of interviewing Chris Bongers of Daily Dev Tips. We talk about blogging, JavaScript, and 3rd party tracking.",category:"video",videoUrl:"https://www.youtube.com/watch?v=X1lMocSwhLM"},{title:"What's a JavaScript Statement Label?",slug:"what-s-a-javascript-statement-label-js-bits-1ed5",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/whats-a-javascript-statement-label_1_tcrso8.webp",desc:"Statement labels allow you to namespace a block that can be referenced inside a break or continue command.",category:"article"},{title:"How JavaScript Blocks Work",slug:"how-javascript-blocks-work-js-bits-aha",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-javascript-blocks-work_1_qzc6sc.webp",desc:"We use blocks so much in JavaScript that sometimes it's easy to forget their concept.",category:"article"},{title:"The Curious Case of the Empty Statement",slug:"the-curious-case-of-the-empty-statement-js-bits-31ha",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/the-curious-case-of-the-empty-statement_rhkjoz.webp",desc:"Empty statements in JavaScript are a thing! Here's what they are and how they can be used.",category:"article"},{title:"How to Restore Native Browser Code",slug:"how-to-restore-native-browser-code-3e6e",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-restore-native-browser-code_1_o19ejq.webp",desc:"Sometimes the browser's native code has be overwritten and you need to restore it back to its original state.",category:"article"},{title:"Another Way to Inspect Global Variables",slug:"another-way-to-inspect-global-variables-js-bits-38hn",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/another-way-to-inspect-global-variables_1_d96jfy.webp",desc:"This code allows us to construct a stringified JSON map of all of the window's properties and subproperties.",category:"article"},{title:"Stream Updates Natively with EventSource",slug:"stream-updates-natively-with-with-eventsource-js-bits-1ol5",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/stream-updates-natively-with-eventsource_1_jnxpss.webp",desc:"The EventSource object is a native Web interface used with server-sent events.",category:"article"},{title:"How SVGs Can Be Dangerous",slug:"how-svgs-can-be-dangerous-js-bits-mjh",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-svgs-can-be-dangerous_1_ukjsom.webp",desc:"SVGs have a ton of benefits over raster images, but they also have a big vulnerability.",category:"article"},{title:"How To Inspect Unique Globals",slug:"how-to-inspect-unique-globals-js-bits-2i7i",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-inspect-unique-globals_1_v50qxj.webp",desc:"Inspect all the properties on the window object that are unique to the page.",category:"article"},{title:"Element.classList.toggle()",slug:"element-classlist-toggle-js-bits-1c6i",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/element-classlist-toggle_1_koxzrr.webp",desc:"Toggle an element's classList with Element.classList.toggle()",category:"article"},{title:"Rest Properties with Object Destructuring",slug:"rest-properties-with-object-destructuring-42d7",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/rest-properties-with-object-destructuring_1_ly3dpr.webp",desc:"Clone and remove a property from an object with destructuring and rest properties.",category:"article"},{title:'addEventListener "once"',slug:"addeventlistener-once-js-bits-565d",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/addeventlistener-once_1_ckrfts.webp",desc:"How to add a single-use event listener.",category:"article"},{title:"clearTimeout and clearInterval Are Interchangeable!",slug:"cleartimeout-and-clearinterval-are-interchangeable-30bg",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/clearTimeout-and-clearInterval-are-interchangeable_2_o4yvzu.webp",desc:"Did you know you can use clearTimeout and clearInterval interchangeably?",category:"article"},{title:"The URL Object",slug:"the-url-object-js-bits-f7p",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/url-object_2_recv5b.webp",desc:"How to convert a URL string to an object to easily retrieve parameters.",category:"article"},{title:"Filter Log by Script Source",slug:"filter-log-by-script-source-js-bits-22ji",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/filter-log-by-source_aahtp3.webp",desc:"Remove all the garbage in the console by filtering by script source.",category:"article"},{title:"Cleaner setTimeout Callbacks",slug:"cleaner-settimeout-callbacks-js-bits-2fbe",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/Ebj2-ZDKWAAE08-CP_e5bwen.webp",desc:"How to keep your setTimeout callbacks on one line.",category:"article"},{title:"A Nifty Way to do Basic Argument Validation",slug:"a-nifty-way-to-do-basic-argument-validation-js-bit-49ko",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/Eb-Sda-XBXYAUs-Qxr-1_w8lvz8.webp",desc:"Here's a fancy trick for requiring arguments to a function.",category:"article"},{title:'Debugging Tip: "Continue to here"',slug:"test-3f5a",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/continue-to-here-1_3_ohh94y.webp",desc:"Inside the Chrome debugger, there's a simple way to advance the flow of your debugging scope.",category:"article"},{title:"debug()",slug:"an-alternative-to-using-logs-debug-3ae0",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/chrome-p6-KVK2-Mc-AH_re9njh.webp",desc:"Pause execution in the debugger on the first line of a provided fn.",category:"article"},{title:"Capture global JS errors with window.onerror()",slug:"capture-global-js-errors-with-window-onerror-4c99",image:"https://res.cloudinary.com/dzynqn10l/image/upload/v1617142251/JS%20Bits/capture-global-js-errors-with-window-onerror_pw7ydr.webp",desc:"Easily capture and report on global errors with window.error.",category:"article"}];t["a"]=i},c737:function(e,t){e.exports="data:image/webp;base64,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"},e504:function(e,t){},f5ad:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("router-link",{staticClass:"logo-link",attrs:{to:"/"}},[i("span",{staticClass:"logo-text-left"},[e._v("{")]),i("img",{staticClass:"js-logo",attrs:{src:a("c737"),width:"34",height:"34"}}),i("span",{staticClass:"logo-text-right"},[e._v("Bits }")])]),i("div",{staticClass:"header-links"},[i("router-link",{staticClass:"header-link tiktok-link",attrs:{to:"/tiktok"}},[i("span",[e._v("TikTok")]),i("img",{staticClass:"tiktok-icon",attrs:{src:a("4c2e"),width:"30",height:"30"}})]),i("router-link",{staticClass:"header-link",attrs:{to:"/code-bits"}},[e._v("Code Bits")]),i("router-link",{staticClass:"header-link",attrs:{to:"/interviews"}},[e._v("Interviews")])],1)],1)},s=[]}});
//# sourceMappingURL=app.36711fdb.js.map