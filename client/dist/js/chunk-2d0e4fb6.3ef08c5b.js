(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4fb6"],{9317:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"snippet-article"},[n("h1",{staticClass:"hero-title"},[e._v("How To Inspect Unique Globals")]),n("p",[e._v(" As a 3rd party developer, I often need to leverage existing site functionality without access to our client's source code. It's usually the case that we need to figure out which code is publicly accessible to reuse or extend in our A/B testing platform or tag manager. ")]),e._m(0),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    /**\n    * Logs an object w/ all the unique global variables on a page \n    * \n    * @return {undefined}\n    */\n    (function inspectUniqueGlobals() {\n\n      // Create object that will contain unique global variables\n      const uniqueProperties = {};\n\n      // Use an iframe to compare variables\n      const iframe = document.createElement('iframe');\n\n        // Attach blank source iframe to DOM\n      iframe.src = 'about:blank';\n\n      // On iframe load, process global properties\n      iframe.onload = function() {\n\n        // Get list of standard global objects from the iframe\n        const defaultGlobals = Object.keys(iframe.contentWindow);\n\n        // Loop through every window-level variable\n        for (let item in window) {\n          const prop = window[item];\n\n          /* If the property is not found in the iframe's globals,\n            then add it to the uniqueProperties object */\n          if (defaultGlobals.indexOf(item) === -1 &&\n              window.hasOwnProperty(item)) {\n                uniqueProperties[item] = prop;\n          }\n        }\n\n        // Inspect unique window properties\n        console.log(uniqueProperties);\n      };\n\n      // Add to document\n      document.body.appendChild(iframe);\n    })();\n  ")])]),e._m(1),n("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--F7GvuP9v--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/dormh2fvt/image/upload/v1595994797/JS%2520Bits/Screen_Shot_2020-07-28_at_10.52.36_PM.png"}}),e._m(2),n("p",[e._v("If we run it, we'll see that the user menu opens up:")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    window.toggleMenu();\n  ")])]),n("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--mVhlMzaL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/dormh2fvt/image/upload/v1595994979/JS%2520Bits/Screen_Shot_2020-07-28_at_10.55.59_PM.png"}}),n("p",[e._v(" You can learn a lot about a site with what their developers have set to the global scope. Sometimes you'll see some not-so-great things like potential vulnerabilities or even promo codes that were probably not meant to have been discovered by the average visitor. 🙊 ")]),n("p",[e._v("Whatever your use case, I hope you found this handy and insightful :)")])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Here's a handy function I created to inspect what unique properties are available on the window. The approach is to create a new iframe (with "),n("code",[e._v("about:blank")]),e._v(" as the src) and use its "),n("code",[e._v("contentWindow")]),e._v(" object as the blank canvas to compare against the parent window object to determine what properties were added to the global scope. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" We can test this out right on the blog page on "),n("a",{attrs:{href:"https://dev.to/cilly_boloe/how-to-inspect-unique-globals-js-bits-2i7i",target:"blank"}},[e._v("dev.to")]),e._v(" if we enter this code in the console: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" All of these properties are unique to the dev.to blog post page. Depending on what we're trying to achieve, we may get lucky and find a function that's already built and does exactly what we're looking for. As an example, on this page there's a global "),n("code",[e._v("toggleMenu")]),e._v(" function. ")])}],i=n("2877"),r={},s=Object(i["a"])(r,o,a,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0e4fb6.3ef08c5b.js.map