const snippets = [
  {
    "title": "HTML <dialog>",
    "slug": "html-5201",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1638067893/JS%20Bits/leuf9rxzeq4kgd0anrvv_o4smlq.jpg",
    "desc": "HTML's <dialog> element is a built-in tag to represent a dialog box or modal. It's not just a newer semantic element, it also includes an API and its own special CSS.",
    "category": "article"
  },
  {
    "title": "Easy console.log() inside one liner functions",
    "slug": "easy-consolelog-inside-one-liner-functions-2mja",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1638067814/JS%20Bits/7dni9u0f0apw8v6er6wq_sepnyn.jpg",
    "desc": "How to log variables inside one-liner functions without breaking up the code on multiple lines!",
    "category": "article"
  },
  {
    "title": "Creating a Text-To-Speech program in Vanilla JS",
    "slug": "creating-a-text-to-speech-program-in-vanilla-js-586l",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1638067738/JS%20Bits/dqgqga22bkwg53txss7j_gxlynp.jpg",
    "desc": "You might have discovered Edge's built-in \"Read Aloud\" feature which will speak the highlighted text out loud right in your browser. Let's make our own for Chrome!",
    "category": "article"
  },
  {
    "title": "3 Uncommon but useful HTML elements",
    "slug": "3-uncommon-but-useful-html-elements-jdi",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1638067658/JS%20Bits/euv8g14astd4or1677va_1_bqjtlg.jpg",
    "desc": "Here we'll look at the rare, but useful elements: <abbr>, <progress>, and <wbr>.",
    "category": "article"
  },
  {
    "title": "Collapsable content in Markdown with <details>",
    "slug": "collapsable-content-in-markdown-with-details-48k8",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1633935146/JS%20Bits/HTML_details_in_markdown_1_1_wzr4bm.jpg",
    "desc": " The HTML disclosure summary element (<details>) works with markdown so you can create collapsable sections in your READMEs.",
    "category": "article"
  },
  {
    "title": "Vanilla JS \"Who's that Pokémon?\" game with the PokéAPI",
    "slug": "vanilla-js-who-s-that-pokemon-game-with-pokeapi-34m4",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1638067529/JS%20Bits/n7cb564nr18ktgzmdj10_n8c8v4.jpg",
    "desc": "Remember that \"Who's that Pokémon?\" TV game? Well we can build our own version of this with the PokéAPI!",
    "category": "article"
  },
  {
    "title": "CSS Discord Logo",
    "slug": "css-discord-logo-3954",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1632280924/JS%20Bits/cover_gaenes.jpg",
    "desc": "My first attempt at CSS art! (I learned to stay away from complex shapes!)",
    "category": "article"
  },
  {
    "title": "What I learned from selling a side project online",
    "slug": "what-i-learned-from-selling-a-side-project-online-370f",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1631854638/JS%20Bits/side_project_cover_oqd3qv.jpg",
    "desc": "In 2014, I made a simple website and Chrome extension that let users save recipes online. Learn about my experience selling the site.",
    "category": "article"
  },
  {
    "title": "HTML5 Video Picture-in-Picture Mode",
    "slug": "html5-video-picture-in-picture-mode-o40",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1627445358/JS%20Bits/Picture-in-Picture_-_Cover_pagn7q.webp",
    "desc": "The native Picture-in-Picture API allows you to create a floating, pinned HTML5 video that overlays on top of your workspace.",
    "category": "article"
  },
  {
    "title": "SVG Cleanup",
    "slug": "svg-cleanup-c08",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1625026151/JS%20Bits/SVG_cleanup_-_Twitter_ula31p.jpg",
    "desc": "SVGOMG lets you easily remove unneeded SVG features like doctype, comments, metadata, etc. to reduce the file size.",
    "category": "article"
  },
  {
    "title": "CSS :placeholder-shown",
    "slug": "css-placeholder-shown-5848",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1624899533/JS%20Bits/placeholder-shown_cover_-_Twitter_iosr4m.webp",
    "desc": "The :placeholder-shown pseudo-class represents any <input> or <textarea> element that is displaying placeholder text.",
    "category": "article"
  },
  {
    "title": "Simple Lazy Loading",
    "slug": "simple-lazy-loading-4i75",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1624476943/JS%20Bits/lazyload_cover_-_Twitter_skdbot.webp",
    "desc": "The native HTML “loading” attribute can be set to “lazy,” which defers image loading until it enters the viewport.",
    "category": "article"
  },
  {
    "title": "How to check trusted events",
    "slug": "how-to-check-trusted-events-js-bits-1el4",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1624848146/JS%20Bits/how-to-check-trusted-events_ebymzf.webp",
    "desc": "How to detect real user events with Event.isTrusted and prevent bot actions",
    "category": "article"
  },
  {
    "title": "The JavaScript Banana 🍌",
    "slug": "the-javascript-banana-js-bits-2epb",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1621566988/JS%20Bits/the-javascript-banana_zugmva.webp",
    "desc": "You gotta make programming fun once in a while. Why not have a banana!",
    "category": "article"
  },
  {
    "title": "What is \"this\"? Why you should avoid arrow functions on Vue methods",
    "slug": "what-is-this-why-you-should-avoid-arrow-functions-on-vue-methods-a71",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1619206338/JS%20Bits/what-is-this_an2b4l.webp",
    "desc": "An in-depth look at why they cause issues.",
    "category": "article"
  },
  {
    "title": "HTMLInputElement.valueAsNumber",
    "slug": "htmlinputelement-valueasnumber-js-bits-3pfl",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1617642250/JS%20Bits/htmlinput-valueasnumber_iwug0n.webp",
    "desc": "By default, <input> value's are a string type. But you can use valueAsNumber on an <input> with type=\"number\". No conversion necessary!",
    "category": "article"
  },
  {
    "title": "Underscores as number separators",
    "slug": "underscores-as-number-separators-js-bits-1cjm",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1616796320/JS%20Bits/underscores-as-number-separators_z9ihwr.webp",
    "desc": "You can improve readability by using underscores (_) in numeric primitives.",
    "category": "article"
  },
  {
    "title": "Reflections on blogging",
    "slug": "reflections-on-blogging-js-bits-12go",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1609262306/JS%20Bits/reflections-on-blogging_ab9xxf.webp",
    "desc": "At the midway point of this year, I decided to pick up blogging as a new quarantine hobby. Here are some of things I learned along the way.",
    "category": "article"
  },
  {
    "title": "How to Easily Copy and Modify Network Requests",
    "slug": "how-to-easily-copy-and-modify-network-requests-js-bits-o70",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1608614348/JS%20Bits/how-to-easily-copy-and-modify-network-requests_vzyibx.webp",
    "desc": "Have you ever needed to debug a network request? Maybe you'd like to see what kind of response the server will send if you tweak some request parameters or headers?",
    "category": "article"
  },
  {
    "title": "JS Quirk: Element IDs are global variables!",
    "slug": "js-quirk-element-ids-are-global-variables-js-bits-1dka",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1608614431/JS%20Bits/js-quirk-element-ids-are-global-variables_okd41u.webp",
    "desc": "Here's an interesting quirk I recently discovered...",
    "category": "article"
  },
  {
    "title": "\"Happy Medium Commenting\" in JavaScript",
    "slug": "happy-medium-commenting-in-javascript-js-bits-461k",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1607446818/JS%20Bits/happy-medium-commenting-in-javascript_ssvgk2.webp",
    "desc": "Warning: this is an opinionated post! 😱",
    "category": "article"
  },
  {
    "title": "Event Delegation with Vanilla JS",
    "slug": "event-delegation-with-vanilla-js-js-bits-2lnb",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1606870699/JS%20Bits/event-delegations-with-vanilla-js_w8mfvd.webp",
    "desc": "One of the most powerful and convenient techniques in jQuery is event delegation - Here's how to do it in vanilla!",
    "category": "article"
  },
  {
    "title": "Dynamic Open Graph Meta Tags with VueJS and Node",
    "slug": "dynamic-open-graph-meta-tags-with-vuejs-and-node-js-bits-2a11",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1606186514/JS%20Bits/dynamic-open-graph-meta-tags-with-vuejs-and-node_nrn1ww.webp",
    "desc": "I recently faced an interesting dilemma where I was unable to solution for creation dynamic Open Graph metadata for my custom built T-shirt website, Fat Cattitude.",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Series Part VII: Symbol.asyncIterator, Symbol.hasInstance & Symbol.isConcatSpreadable",
    "slug": "symbols-are-your-friend-series-part-vii-symbol-asynciterator-symbol-hasinstance-symbol-isconcatspreadable-js-bits-4h26",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1605829852/JS%20Bits/symbols-are-your-friend-part-vii_oyxqbq.webp",
    "desc": "This is it - the last of the well-known symbols! Today we'll look at: Symbol.asyncIterator, Symbol.hasInstance, Symbol.isConcatSpreadable.",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Series Part VI: Symbol.match, Symbol.matchAll & Symbol.replace",
    "slug": "symbols-are-your-friend-series-part-vi-symbol-match-symbol-matchall-symbol-replace-js-bits-539g",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1605036338/JS%20Bits/symbols-are-your-friend-part-vi_fbgjpk.webp",
    "desc": "Well, we've made it this far 😅. We might as well explore the remaining Symbol properties. There's only 6 more left, but we'll break them up into 2 more articles.",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Part V: Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables",
    "slug": "symbols-are-your-friend-part-v-symbol-toprimitive-symbol-tostringtag-symbol-unscopables-js-bits-nee",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1604429440/JS%20Bits/symbols-are-your-friend-part-v_dacz1s.webp",
    "desc": "I know. You haven't gotten your fill of symbols yet. Rest assured, there's more! This week, we'll take a look at Symbol.toPrimitive, Symbol.toStringTag, & Symbol.unscopables.",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Part IV: Symbol.search, Symbol.split, & Symbol.species",
    "slug": "symbols-are-your-friend-part-iv-symbol-search-symbol-split-symbol-species-js-bits-4i25",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1603691587/JS%20Bits/symbols-are-your-friend-part-iv_yh4m1o.webp",
    "desc": "Since the wildly popular Symbols Are Your Friend article series has the momentum of a runaway freight train  (not really), let's check out some more static Symbol properties!",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Part III: Symbol.iterator",
    "slug": "symbols-are-your-friend-part-iii-symbol-iterator-js-bits-18c4",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1603121178/JS%20Bits/symbols-are-your-friend-part-iii_d5n9zo.webp",
    "desc": "Symbol.iterator can be the most abstruse symbol-related concept. Let's break it down!",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Part II: Symbol.for() & Symbol.keyFor()",
    "slug": "symbols-are-your-friend-part-ii-symbol-for-symbol-keyfor-js-bits-3clc",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1602048687/JS%20Bits/symbols-are-your-friend-part-ii_dde6d4.webp",
    "desc": "In this second episode, we'll explore the 2 static Symbol methods, Symbol.for() and Symbol.keyFor().",
    "category": "article"
  },
  {
    "title": "Symbols Are Your Friend Part I: A Gentle Introduction",
    "slug": "symbols-are-your-friend-a-gentle-introduction-js-bits-23af",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1602048467/JS%20Bits/symbols-are-your-friend-part-i_zlmjiz.webp",
    "desc": "The concept of the Symbol can trip up many a developer. In this article, I'll attempt to demystify them and describe what they are.",
    "category": "article"
  },
  {
    "title": "Interview with Matt Coloe (Tinuiti)",
    "slug": "interview-with-matt-coloe-tinuiti",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1601404882/JS%20Bits/interview-with-matt-coloe-tinuiti_eef78v.webp",
    "desc": "Matt is my brother and made a career transition to front-end development several years ago. We talk work/life balance, development challenges, and we do a random lightning round just for fun!",
    "category": "video",
    "videoUrl": "https://www.youtube.com/watch?v=07wagjRigE8"
  },
  {
    "title": "Interview with Chris Bongers (Daily Dev Tips)",
    "slug": "interview-with-chris-bongers-daily-dev-tips",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/interview-with-chris-bongers-daily-dev-tips_bjhsdk.webp",
    "desc": "I had the pleasure of interviewing Chris Bongers of Daily Dev Tips. We talk about blogging, JavaScript, and 3rd party tracking.",
    "category": "video",
    "videoUrl": "https://www.youtube.com/watch?v=X1lMocSwhLM"
  },
  {
    "title": "What's a JavaScript Statement Label?",
    "slug": "what-s-a-javascript-statement-label-js-bits-1ed5",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/whats-a-javascript-statement-label_1_tcrso8.webp",
    "desc": "Statement labels allow you to namespace a block that can be referenced inside a break or continue command.",
    "category": "article"
  },
  {
    "title": "How JavaScript Blocks Work",
    "slug": "how-javascript-blocks-work-js-bits-aha",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-javascript-blocks-work_1_qzc6sc.webp",
    "desc": "We use blocks so much in JavaScript that sometimes it's easy to forget their concept.",
    "category": "article"
  },
  {
    "title": "The Curious Case of the Empty Statement",
    "slug": "the-curious-case-of-the-empty-statement-js-bits-31ha",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/the-curious-case-of-the-empty-statement_rhkjoz.webp",
    "desc": "Empty statements in JavaScript are a thing! Here\'s what they are and how they can be used.",
    "category": "article"
  },
  {
    "title": "How to Restore Native Browser Code",
    "slug": "how-to-restore-native-browser-code-3e6e",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-restore-native-browser-code_1_o19ejq.webp",
    "desc": "Sometimes the browser\'s native code has be overwritten and you need to restore it back to its original state.",
    "category": "article"
  },
  {
    "title": "Another Way to Inspect Global Variables",
    "slug": "another-way-to-inspect-global-variables-js-bits-38hn",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/another-way-to-inspect-global-variables_1_d96jfy.webp",
    "desc": "This code allows us to construct a stringified JSON map of all of the window\'s properties and subproperties.",
    "category": "article"
  },
  {
    "title": "Stream Updates Natively with EventSource",
    "slug": "stream-updates-natively-with-with-eventsource-js-bits-1ol5",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/stream-updates-natively-with-eventsource_1_jnxpss.webp",
    "desc": "The EventSource object is a native Web interface used with server-sent events.",
    "category": "article"
  },
  {
    "title": "How SVGs Can Be Dangerous",
    "slug": "how-svgs-can-be-dangerous-js-bits-mjh",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-svgs-can-be-dangerous_1_ukjsom.webp",
    "desc": "SVGs have a ton of benefits over raster images, but they also have a big vulnerability.",
    "category": "article"
  },
  {
    "title": "How To Inspect Unique Globals",
    "slug": "how-to-inspect-unique-globals-js-bits-2i7i",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/how-to-inspect-unique-globals_1_v50qxj.webp",
    "desc": "Inspect all the properties on the window object that are unique to the page.",
    "category": "article"
  },
  {
    "title": "Element.classList.toggle()",
    "slug": "element-classlist-toggle-js-bits-1c6i",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/element-classlist-toggle_1_koxzrr.webp",
    "desc": "Toggle an element\'s classList with Element.classList.toggle()",
    "category": "article"
  },
  {
    "title": "Rest Properties with Object Destructuring",
    "slug": "rest-properties-with-object-destructuring-42d7",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/rest-properties-with-object-destructuring_1_ly3dpr.webp",
    "desc": "Clone and remove a property from an object with destructuring and rest properties.",
    "category": "article"
  },
  {
    "title": "addEventListener \"once\"",
    "slug": "addeventlistener-once-js-bits-565d",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/addeventlistener-once_1_ckrfts.webp",
    "desc": "How to add a single-use event listener.",
    "category": "article"
  },
  {
    "title": "clearTimeout and clearInterval Are Interchangeable!",
    "slug": "cleartimeout-and-clearinterval-are-interchangeable-30bg",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/clearTimeout-and-clearInterval-are-interchangeable_2_o4yvzu.webp",
    "desc": "Did you know you can use clearTimeout and clearInterval interchangeably?",
    "category": "article"
  },
  {
    "title": "The URL Object",
    "slug": "the-url-object-js-bits-f7p",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924034/JS%20Bits/url-object_2_recv5b.webp",
    "desc": "How to convert a URL string to an object to easily retrieve parameters.",
    "category": "article"
  },
  {
    "title": "Filter Log by Script Source",
    "slug": "filter-log-by-script-source-js-bits-22ji",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/filter-log-by-source_aahtp3.webp",
    "desc": "Remove all the garbage in the console by filtering by script source.",
    "category": "article"
  },
  {
    "title": "Cleaner setTimeout Callbacks",
    "slug": "cleaner-settimeout-callbacks-js-bits-2fbe",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/Ebj2-ZDKWAAE08-CP_e5bwen.webp",
    "desc": "How to keep your setTimeout callbacks on one line.",
    "category": "article"
  },
  {
    "title": "A Nifty Way to do Basic Argument Validation",
    "slug": "a-nifty-way-to-do-basic-argument-validation-js-bit-49ko",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924033/JS%20Bits/Eb-Sda-XBXYAUs-Qxr-1_w8lvz8.webp",
    "desc": "Here\'s a fancy trick for requiring arguments to a function.",
    "category": "article"
  },
  {
    "title": "Debugging Tip: \"Continue to here\"",
    "slug": "test-3f5a",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/continue-to-here-1_3_ohh94y.webp",
    "desc": "Inside the Chrome debugger, there\'s a simple way to advance the flow of your debugging scope.",
    "category": "article"
  },
  {
    "title": "debug()",
    "slug": "an-alternative-to-using-logs-debug-3ae0",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/chrome-p6-KVK2-Mc-AH_re9njh.webp",
    "desc": "Pause execution in the debugger on the first line of a provided fn.",
    "category": "article"
  },
  {
    "title": "Capture global JS errors with window.onerror()",
    "slug": "capture-global-js-errors-with-window-onerror-4c99",
    "image": "https://res.cloudinary.com/dzynqn10l/image/upload/v1617142251/JS%20Bits/capture-global-js-errors-with-window-onerror_pw7ydr.webp",
    "desc": "Easily capture and report on global errors with window.error.",
    "category": "article"
  }
];

export default snippets;