const snippets = [
  {
    "title": "What's a JavaScript Statement Label?",
    "slug": "whats-a-javascript-statement-label",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1599707220/JS%20Bits/whats-a-javascript-statement-label.jpg",
    "desc": "Statement labels allow you to namespace a block that can be referenced inside a break or continue command."
  },
  {
    "title": "How JavaScript Blocks Work",
    "slug": "how-javascript-blocks-work",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1599021487/JS%20Bits/how-javascript-blocks-work.jpg",
    "desc": "We use blocks so much in JavaScript that sometimes it's easy to forget their concept."
  },
  {
    "title": "The Curious Case of the Empty Statement",
    "slug": "the-curious-case-of-the-empty-statement",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1600296920/JS%20Bits/the-curious-case-of-the-empty-statement.webp",
    "desc": "Empty statements in JavaScript are a thing! Here\'s what they are and how they can be used."
  },
  {
    "title": "How to Restore Native Browser Code",
    "slug": "how-to-restore-native-browser-code",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1597966622/JS%20Bits/how-to-restore-native-browser-code.jpg",
    "desc": "Sometimes the browser\'s native code has be overwritten and you need to restore it back to its original state."
  },
  {
    "title": "Another Way to Inspect Global Variables",
    "slug": "another-way-to-inspect-global-variables",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1597720556/JS%20Bits/another-way-to-inspect-global-variables.jpg",
    "desc": "This code allows us to construct a stringified JSON map of all of the window\'s properties and subproperties."
  },
  {
    "title": "Stream Updates Natively with EventSource",
    "slug": "stream-updates-natively-with-eventsource",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1597355904/JS%20Bits/stream-updates-natively-with-eventsource.jpg",
    "desc": "The EventSource object is a native Web interface used with server-sent events."
  },
  {
    "title": "How SVGs Can Be Dangerous",
    "slug": "how-svgs-can-be-dangerous",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1596773965/JS%20Bits/how-svgs-can-be-dangerous.jpg",
    "desc": "SVGs have a ton of benefits over raster images, but they also have a big vulnerability."
  },
  {
    "title": "How To Inspect Unique Globals",
    "slug": "how-to-inspect-unique-globals",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1596034386/JS%20Bits/how-to-inspect-unique-globals.jpg",
    "desc": "Inspect all the properties on the window object that are unique to the page."
  },
  {
    "title": "Element.classList.toggle()",
    "slug": "element-classlist-toggle",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1595887213/JS%20Bits/element-classlist-toggle.jpg",
    "desc": "Toggle an element\'s classList with Element.classList.toggle()"
  },
  {
    "title": "Rest Properties with Object Destructuring",
    "slug": "rest-properties-with-object-destructuring",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1595280237/JS%20Bits/rest-properties-with-object-destructuring.jpg",
    "desc": "Clone and remove a property from an object with destructuring and rest properties."
  },
  {
    "title": "addEventListener \"once\"",
    "slug": "addeventlistener-once",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1594941919/JS%20Bits/addeventlistener-once.jpg",
    "desc": "How to add a single-use event listener."
  },
  {
    "title": "clearTimeout and clearInterval Are Interchangeable!",
    "slug": "clearTimeout-and-clearInterval-are-interchangeable",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1594340736/JS%20Bits/clearTimeout-and-clearInterval-are-interchangeable.jpg",
    "desc": "Did you know you can use clearTimeout and clearInterval interchangeably?"
  },
  {
    "title": "The URL Object",
    "slug": "the-url-object",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1600214577/JS%20Bits/url-object_2.jpg",
    "desc": "How to convert a URL string to an object to easily retrieve parameters."
  },
  {
    "title": "Filter Log by Script Source",
    "slug": "filter-log-by-script-source",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593490980/JS%20Bits/filter-log-by-source.jpg",
    "desc": "Remove all the garbage in the console by filtering by script source."
  },
  {
    "title": "Cleaner setTimeout Callbacks",
    "slug": "cleaner-settimeout-callbacks",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593405909/JS%20Bits/Ebj2-ZDKWAAE08-CP.jpg",
    "desc": "How to keep your setTimeout callbacks on one line."
  },
  {
    "title": "Argument Validation",
    "slug": "argument-validation",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593405964/JS%20Bits/Eb-Sda-XBXYAUs-Qxr-1.jpg",
    "desc": "Here\'s a fancy trick for requiring arguments to a function."
  },
  {
    "title": "Debugging Tip: \"Continue to here\"",
    "slug": "debugging-tip-continue-to-here",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406006/JS%20Bits/continue-to-here-1.png",
    "desc": "Inside the Chrome debugger, there\'s a simple way to advance the flow of your debugging scope."
  },
  {
    "title": "debug()",
    "slug": "debug",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406052/JS%20Bits/chrome-p6-KVK2-Mc-AH.png",
    "desc": "Pause execution in the debugger on the first line of a provided fn."
  },
  {
    "title": "window.onerror()",
    "slug": "window-onerror",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406098/JS%20Bits/carbon-4.png",
    "desc": "Easily capture and report on global errors with window.error."
  }
];

export default snippets;