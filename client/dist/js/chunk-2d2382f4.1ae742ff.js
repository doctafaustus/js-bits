(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2382f4"],{fdff:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"snippet-article"},[n("h1",{staticClass:"hero-title"},[e._v("Symbols Are Your Friend Part I: A Gentle Introduction")]),n("p",[e._v(" The concept of the Symbol can trip up many a developer. In this article, I'll attempt to demystify them and describe what they are. ")]),e._m(0),e._m(1),e._m(2),e._m(3),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    const s1 = Symbol();\n    console.log(s1); // logs Symbol()\n\n    const s2 = Symbol('abc');\n    console.log(s2); // logs Symbol(abc);\n  ")])]),e._m(4),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v('\n    console.log(typeof s2); // Logs "symbol"\n  ')])]),n("p",[e._v(" Another gotcha' with Symbol, is that every time you create one, it is totally unique from any other symbol you created before. This demonstrates that the string you pass into the function is not being coerced into a symbol - it's simply a label that can be used for clarity or debugging: ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    Symbol('abc') === Symbol('abc'); // false\n  ")])]),e._m(5),e._m(6),n("p",[e._v(" But wait. We already use string-based keys to identify object properties. What benefit would symbols provide? ")]),e._m(7),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    const GOKU = 'Goku';\n    const PICCOLO = 'Piccolo';\n    const BULMA = 'Bulma';\n    const KRILLIN = 'Piccolo'; // ← Oops, someone messed up!\n\n    function getRace(character) {\n      switch (character) {\n        case GOKU:\n          return 'Saiyan';\n        case PICCOLO:\n          return 'Namekian';\n        case BULMA:\n          return 'Human';\n        default:\n          console.log('No race found!');\n      }\n    }\n\n    getRace(PICCOLO); // Returns 'Namekian'\n    getRace(KRILLIN); // Returns 'Namekian' (D'oh!)\n  ")])]),e._m(8),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    const GOKU = Symbol('Goku');\n    const PICCOLO = Symbol('Piccolo');\n    const BULMA = Symbol('Bulma');\n    const KRILLIN = 'Piccolo';\n\n    function getRace(character) {\n      switch (character) {\n        case GOKU:\n          return 'Saiyan';\n        case PICCOLO:\n          return 'Namekian';\n        case BULMA:\n          return 'Human';\n        default:\n          console.log('No race found!');\n      }\n    }\n\n    getRace(PICCOLO); // Returns 'Namekian'\n    getRace(KRILLIN); // Logs 'No race found!'\n  ")])]),e._m(9),n("p",[e._v("Let's look at another example:")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    // app.js\n\n    // Create character record\n    const character = {\n      id: 123, \n      name: 'Goku',\n      race: 'Saiyan'\n    };\n  ")])]),n("br"),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    // service.js\n\n    // Later in our app, some service overwrites the id 😠\n    character.id = 999;\n  ")])]),n("p",[e._v(" Since we used a regular string-based key to create the id property, any other place in our app can have code that could access and modify the property's value. That is not always desirable. ")]),n("p",[e._v("Let's use a symbol for the id instead:")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"javascript"},[e._v("\n    // app.js\n\n    // Create character record w/ id symbol\n    const id = Symbol('id');\n    const character = {\n      [id]: 123, // Using [id] makes the key dynamic\n      name: 'Goku',\n      race: 'Saiyan'\n    };\n\n    console.log(character.id) // Logs undefined\n    console.log(character[id]); // Logs 123\n  ")])]),e._m(10),n("p",[e._v(' You can see that the use of symbols can "harden" our logic in our code. There\'s plenty more to explore about symbols in another article, but hopefully this was a nice gentle introduction of their concept! 🐤 ')])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" To start: "),n("b",[e._v("Symbols are a new primitive data type in JavaScript")]),e._v(". If you haven't memorized the 6 primitives in JS, I use the mnemonic device acronym of "),n("b",[e._v("BBUNSS")]),e._v(" 🍔: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Boolean")]),n("li",[e._v("BigInt")]),n("li",[e._v("undefined")]),n("li",[e._v("Number")]),n("li",[e._v("String")]),n("li",[e._v("Symbol")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" The "),n("b",[e._v("Symbol")]),e._v(" data type is simply "),n("b",[e._v("a unique value")]),e._v(". Unique values are useful to avoid name conflicts involving variables and object properties. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" To create a new symbol we simply call the global "),n("code",[e._v("Symbol")]),e._v(" function, optionally passing in a descriptor string: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Note that these return values "),n("b",[e._v("are not strings")]),e._v(" but rather "),n("b",[e._v("symbols")]),e._v(": ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" While the return values of "),n("code",[e._v("Symbol('abc')")]),e._v(" and "),n("code",[e._v("Symbol('abc')")]),e._v(" print out exactly the same in the code, this doesn't mean that they're the same - these are unique entities. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" So why would we want to create these unique values? "),n("b",[e._v("Their main purpose is to function as an identifier for object properties")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Consider the following function "),n("code",[e._v("getRace()")]),e._v(" that takes a string of your favorite Dragon Ball Z character and uses a switch statement to return their race: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(' Here we intended for only one unique "Piccolo" character to be created. But the variable '),n("code",[e._v("KRILLIN")]),e._v(" was also created and set to the same value. So when "),n("code",[e._v("getRace(KRILLIN)")]),e._v(" is called, our function returns "),n("code",[e._v("'Namekian'")]),e._v(" because of this conflict. With symbols, we can create "),n("b",[e._v("100% unique identifiers")]),e._v(": ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Now we're checking for those "),n("b",[e._v("exact unique symbols")]),e._v(" inside that switch statement instead of non-unique strings to get a more expected result. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(' Now the id can only be read or changed if we explicitly use the "id" '),n("b",[e._v("symbol")]),e._v(" to access the property. Other parts of the app will not be able to access this property unless we also provide the symbol. This prevents clashes since we're not using a string for the property access. ")])}],i=n("2877"),o={},r=Object(i["a"])(o,a,s,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2382f4.1ae742ff.js.map