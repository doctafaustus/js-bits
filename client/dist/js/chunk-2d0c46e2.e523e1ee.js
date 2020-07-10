(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c46e2"],{"3b96":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"snippet-article"},[o("h1",{staticClass:"hero-title"},[e._v("clearTimeout and clearInterval Are Interchangeable!")]),e._m(0),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"javascript"},[e._v("\n    const myIntervalFunc = setInterval(() => {\n      console.log('Hello World');\n    }, 100);\n\n    clearTimeout(myIntervalFunc); // clearTimeout works!\n  ")])]),e._m(1),o("p",[e._v(" It's easy to forget that the return value of these functions is really a numerical ID. You can check it out if you log the variable: ")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"javascript"},[e._v("\n    const myFunc = setTimeout(() => {}, 0);\n    console.log(myFunc); // 1205 (<- This will be random)\n  ")])]),e._m(2),e._m(3),o("h3",[e._v("Links")]),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout",target:"_blank"}},[e._v("MDN Article on setTimeout")])])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Did you know you can use "),o("code",[e._v("clearTimeout")]),e._v(" and "),o("code",[e._v("clearInterval")]),e._v(" interchangeably? 🤯")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" This is because both functions will return a random ID which gets saved in the browser's memory but there's no separate group of IDs that are allocated to "),o("code",[e._v("setTimeout")]),e._v(" versus "),o("code",[e._v("setInterval")]),e._v("; they're shared. ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" And since the parameter to "),o("code",[e._v("clearTimeout")]),e._v(" and "),o("code",[e._v("clearInterval")]),e._v(" is the ID of the function you wish to cancel, and they're from the same pool of IDs on the window object, both functions will work for either a timeout or interval! 😃 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" So while you "),o("i",[e._v("could")]),e._v(" use these functions interchangeably, I actually wouldn't since you'll probably just confuse others - but it's still cool to know why this works! ")])}],r=o("2877"),s={},l=Object(r["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c46e2.e523e1ee.js.map