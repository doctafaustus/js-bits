(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af421"],{"0e0f":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article",{staticClass:"snippet-article"},[t("h1",{staticClass:"hero-title"},[e._v("Symbols Are Your Friend Series Part VII: Symbol.asyncIterator, Symbol.hasInstance & Symbol.isConcatSpreadable")]),t("p",[e._v(" This is it - the last of the well-known symbols! Today we'll look at: ")]),e._m(0),t("hr"),e._m(1),e._m(2),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v("\n    // Create iterable object\n    const todos = {\n      [Symbol.asyncIterator]: function() {\n        let i = 1;\n        const limit = 4;\n\n        return {\n          async next() {\n            if (i === limit) return { done: true };\n\n            i++;\n            return { value: await fetchTodo(i), done: false }\n          }\n        }\n      },\n    };\n\n    // Fetch a todo object\n    async function fetchTodo(num) {\n      const url = `https://jsonplaceholder.typicode.com/todos/${num}`;\n      const response = await fetch(url);\n      return await response.json();\n    }\n\n    // Asynchronously iterate through todos\n    (async () => {\n      for await (const todo of todos) {\n        console.log(todo.title);\n      }\n    })();\n  ")])]),e._m(3),t("hr"),e._m(4),e._m(5),e._m(6),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v("\n    class PowerRanger {\n      constructor(name) {\n        this.name = name;\n      }\n      \n      static [Symbol.hasInstance](instance) {\n        const rangersRegEx = /jason|zack|kim|billy|trini/i;\n        return rangersRegEx.test(instance.name);\n      }\n    }\n\n    const jason = new PowerRanger('Jason');\n    const bob = new PowerRanger('Bob');\n\n    jason instanceof PowerRanger; // true\n    bob instanceof PowerRanger; // false\n  ")])]),t("hr"),e._m(7),e._m(8),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v("\n    const pokemon = ['Eevee', 'Snorlax', 'Ditto'];\n    const transformers = ['Jazz', 'Grimlock', 'Arcee'];\n\n    pokemon.concat(transformers);\n    // Returns [\"Eevee\", \"Snorlax\", \"Ditto\", \"Jazz\", \"Grimlock\", \"Arcee\"]\n  ")])]),t("br"),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v("\n    const pokemon = ['Eevee', 'Snorlax', 'Ditto'];\n    const transformers = ['Jazz', 'Grimlock', 'Arcee'];\n\n    transformers[Symbol.isConcatSpreadable] = false;\n\n    pokemon.concat(transformers);\n    // Returns [\"Eevee\", \"Snorlax\", \"Ditto\", Array(3)]\n  ")])]),t("p",[e._v(" A great use for this Symbol is to force normally unflattenable array-like objects to flatten: ")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v("\n    const pokemon = ['Eevee', 'Snorlax', 'Ditto'];\n    const transformers = {\n      [Symbol.isConcatSpreadable]: true, \n      length: 3, // Length needed to specify # of props to add\n      0: 'Jazz', \n      1: 'Grimlock',\n      2: 'Arcee'\n    };\n\n    pokemon.concat(transformers);\n    // Returns [\"Eevee\", \"Snorlax\", \"Ditto\", \"Jazz\", \"Grimlock\", \"Arcee\"]\n  ")])]),e._m(9)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("code",[e._v("Symbol.asyncIterator")])]),t("li",[t("code",[e._v("Symbol.hasInstance")])]),t("li",[t("code",[e._v("Symbol.isConcatSpreadable")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("b",[t("code",[e._v("Symbol.asyncIterator")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Similar to "),t("code",[e._v("Symbol.iterator")]),e._v(", "),t("code",[e._v("Symbol.asyncIterator")]),e._v(" functions the same way, except they return promises. This enables us to make an object that has asynchronous functionality iterable: ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" With this example, we're effective making our "),t("code",[e._v("todos")]),e._v(" object async iterable. "),t("code",[e._v("Symbol.asyncIterator")]),e._v(" is also commonly implemented with generator functions but we'll explore those in another article. ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("b",[t("code",[e._v("Symbol.hasInstance")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" This symbol is used to determine whether or not a constructor has an instance of another object when "),t("code",[e._v("instanceof")]),e._v(" is used. ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" This allows us to customize the behavior of "),t("code",[e._v("instanceof")]),e._v(" when it operates on our constructor object: ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("b",[t("code",[e._v("Symbol.isConcatSpreadable")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" This symbol is a toggle that indicates if an object should be flatted when "),t("code",[e._v("Array.prototype.concat()")]),e._v(" is used: ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" This concludes the "),t("b",[e._v("Symbols Are Your Friend")]),e._v(" series! We've just gone from Symbol zero to hero! 🦸 ")])}],a=t("2877"),s={},c=Object(a["a"])(s,o,r,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0af421.5c7b74c5.js.map