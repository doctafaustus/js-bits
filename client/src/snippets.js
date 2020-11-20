const snippets = [
  {
    "title": "Symbols Are Your Friend Series Part VII: Symbol.asyncIterator, Symbol.hasInstance & Symbol.isConcatSpreadable",
    "slug": "symbols-are-your-friend-part-vii-symbol-asynciterator-symbol-hasinstance-symbol-isconcatspreadable",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1605829852/JS%20Bits/symbols-are-your-friend-part-vii_oyxqbq.webp",
    "desc": "This is it - the last of the well-known symbols! Today we'll look at: Symbol.asyncIterator, Symbol.hasInstance, Symbol.isConcatSpreadable."
  },
  {
    "title": "Symbols Are Your Friend Series Part VI: Symbol.match, Symbol.matchAll & Symbol.replace",
    "slug": "symbols-are-your-friend-part-vi-symbol-match-symbol-matchall-symbol-replace",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1605036338/JS%20Bits/symbols-are-your-friend-part-vi_fbgjpk.webp",
    "desc": "Well, we've made it this far 😅. We might as well explore the remaining Symbol properties. There's only 6 more left, but we'll break them up into 2 more articles."
  },
  {
    "title": "Symbols Are Your Friend Part V: Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables",
    "slug": "symbols-are-your-friend-party-v-symbol-toprimitive-symbol-tostringtag-symbol-unscopables",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1604429440/JS%20Bits/symbols-are-your-friend-part-v_dacz1s.webp",
    "desc": "I know. You haven't gotten your fill of symbols yet. Rest assured, there's more! This week, we'll take a look at Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables."
  },
  {
    "title": "Symbols Are Your Friend Part IV: Symbol.search, Symbol.split, & Symbol.species",
    "slug": "symbols-are-your-friend-party-iv-symbol-search-symbol-split-symbol-species",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1603691587/JS%20Bits/symbols-are-your-friend-part-iv_yh4m1o.webp",
    "desc": "Since the wildly popular Symbols Are Your Friend article series has the momentum of a runaway freight train  (not really), let's check out some more static Symbol properties!"
  },
  {
    "title": "Symbols Are Your Friend Part III: Symbol.iterator",
    "slug": "symbols-are-your-friend-party-iii-symbol-iterator",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1603121178/JS%20Bits/symbols-are-your-friend-part-iii_d5n9zo.webp",
    "desc": "Symbol.iterator can be the most abstruse symbol-related concept. Let's break it down!"
  },
  {
    "title": "Symbols Are Your Friend Part II: Symbol.for() & Symbol.keyFor()",
    "slug": "symbols-are-your-friend-part-ii-symbol-for-and-symbol-keyfor",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1602048687/JS%20Bits/symbols-are-your-friend-part-ii_dde6d4.webp",
    "desc": "In this second episode, we'll explore the 2 static Symbol methods, Symbol.for() and Symbol.keyFor()."
  },
  {
    "title": "Symbols Are Your Friend Part I: A Gentle Introduction",
    "slug": "symbols-are-your-friend-part-i-a-gentle-introduction",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1602048467/JS%20Bits/symbols-are-your-friend-part-i_zlmjiz.webp",
    "desc": "The concept of the Symbol can trip up many a developer. In this article, I'll attempt to demystify them and describe what they are."
  },
  {
    "title": "Interview with Matt Coloe (Tinuiti)",
    "slug": "interview-with-matt-coloe-tinuiti",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1601404882/JS%20Bits/interview-with-matt-coloe-tinuiti_eef78v.webp",
    "desc": "Matt is my brother and made a career transition to front-end development several years ago. We talk work/life balance, development challenges, and we do a random lightning round just for fun!"
  },
  {
    "title": "Interview with Chris Bongers (Daily Dev Tips)",
    "slug": "interview-with-chris-bongers-daily-dev-tips",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/interview-with-chris-bongers-daily-dev-tips_bjhsdk.webp",
    "desc": "I had the pleasure of interviewing Chris Bongers of Daily Dev Tips. We talk about blogging, JavaScript, and 3rd party tracking."
  },
  {
    "title": "What's a JavaScript Statement Label?",
    "slug": "whats-a-javascript-statement-label",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/whats-a-javascript-statement-label_1_tcrso8.webp",
    "desc": "Statement labels allow you to namespace a block that can be referenced inside a break or continue command."
  },
  {
    "title": "How JavaScript Blocks Work",
    "slug": "how-javascript-blocks-work",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-javascript-blocks-work_1_qzc6sc.webp",
    "desc": "We use blocks so much in JavaScript that sometimes it's easy to forget their concept."
  },
  {
    "title": "The Curious Case of the Empty Statement",
    "slug": "the-curious-case-of-the-empty-statement",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/the-curious-case-of-the-empty-statement_rhkjoz.webp",
    "desc": "Empty statements in JavaScript are a thing! Here\'s what they are and how they can be used."
  },
  {
    "title": "How to Restore Native Browser Code",
    "slug": "how-to-restore-native-browser-code",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-restore-native-browser-code_1_o19ejq.webp",
    "desc": "Sometimes the browser\'s native code has be overwritten and you need to restore it back to its original state."
  },
  {
    "title": "Another Way to Inspect Global Variables",
    "slug": "another-way-to-inspect-global-variables",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/another-way-to-inspect-global-variables_1_d96jfy.webp",
    "desc": "This code allows us to construct a stringified JSON map of all of the window\'s properties and subproperties."
  },
  {
    "title": "Stream Updates Natively with EventSource",
    "slug": "stream-updates-natively-with-eventsource",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/stream-updates-natively-with-eventsource_1_jnxpss.webp",
    "desc": "The EventSource object is a native Web interface used with server-sent events."
  },
  {
    "title": "How SVGs Can Be Dangerous",
    "slug": "how-svgs-can-be-dangerous",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-svgs-can-be-dangerous_1_ukjsom.webp",
    "desc": "SVGs have a ton of benefits over raster images, but they also have a big vulnerability."
  },
  {
    "title": "How To Inspect Unique Globals",
    "slug": "how-to-inspect-unique-globals",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-inspect-unique-globals_1_v50qxj.webp",
    "desc": "Inspect all the properties on the window object that are unique to the page."
  },
  {
    "title": "Element.classList.toggle()",
    "slug": "element-classlist-toggle",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/element-classlist-toggle_1_koxzrr.webp",
    "desc": "Toggle an element\'s classList with Element.classList.toggle()"
  },
  {
    "title": "Rest Properties with Object Destructuring",
    "slug": "rest-properties-with-object-destructuring",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/rest-properties-with-object-destructuring_1_ly3dpr.webp",
    "desc": "Clone and remove a property from an object with destructuring and rest properties."
  },
  {
    "title": "addEventListener \"once\"",
    "slug": "addeventlistener-once",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/addeventlistener-once_1_ckrfts.webp",
    "desc": "How to add a single-use event listener."
  },
  {
    "title": "clearTimeout and clearInterval Are Interchangeable!",
    "slug": "clearTimeout-and-clearInterval-are-interchangeable",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/clearTimeout-and-clearInterval-are-interchangeable_2_o4yvzu.webp",
    "desc": "Did you know you can use clearTimeout and clearInterval interchangeably?"
  },
  {
    "title": "The URL Object",
    "slug": "the-url-object",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/url-object_2_recv5b.webp",
    "desc": "How to convert a URL string to an object to easily retrieve parameters."
  },
  {
    "title": "Filter Log by Script Source",
    "slug": "filter-log-by-script-source",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/filter-log-by-source_aahtp3.webp",
    "desc": "Remove all the garbage in the console by filtering by script source."
  },
  {
    "title": "Cleaner setTimeout Callbacks",
    "slug": "cleaner-settimeout-callbacks",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/Ebj2-ZDKWAAE08-CP_e5bwen.webp",
    "desc": "How to keep your setTimeout callbacks on one line."
  },
  {
    "title": "Argument Validation",
    "slug": "argument-validation",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/Eb-Sda-XBXYAUs-Qxr-1_w8lvz8.webp",
    "desc": "Here\'s a fancy trick for requiring arguments to a function."
  },
  {
    "title": "Debugging Tip: \"Continue to here\"",
    "slug": "debugging-tip-continue-to-here",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/continue-to-here-1_3_ohh94y.webp",
    "desc": "Inside the Chrome debugger, there\'s a simple way to advance the flow of your debugging scope."
  },
  {
    "title": "debug()",
    "slug": "debug",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/chrome-p6-KVK2-Mc-AH_re9njh.webp",
    "desc": "Pause execution in the debugger on the first line of a provided fn."
  },
  {
    "title": "window.onerror()",
    "slug": "window-onerror",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/carbon-4_tlhtkt.webp",
    "desc": "Easily capture and report on global errors with window.error."
  }
];

export default snippets;