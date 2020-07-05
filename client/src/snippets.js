import utils from '@/mixins/utils';

const snippets = [
  {
    "title": "Filter Log by Script Source",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593490980/JS%20Bits/filter-log-by-source.jpg",
    "desc": "Remove all the garbage in the console by filtering by script source."
  },
  {
    "title": "Cleaner setTimeout Callbacks",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593405909/JS%20Bits/Ebj2-ZDKWAAE08-CP.jpg",
    "desc": "How to keep your setTimeout callbacks on one line."
  },
  {
    "title": "Argument Validation",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593405964/JS%20Bits/Eb-Sda-XBXYAUs-Qxr-1.jpg",
    "desc": "Here's a fancy trick for requiring arguments to a function."
  },
  {
    "title": "Debugging Tip: \"Continue to here\"",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406006/JS%20Bits/continue-to-here-1.png",
    "desc": "Inside the Chrome debugger, there's a simple way to advance the flow of your debugging scope."
  },
  {
    "title": "debug()",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406052/JS%20Bits/chrome-p6-KVK2-Mc-AH.png",
    "desc": "Pause execution in the debugger on the first line of a provided fn."
  },
  {
    "title": "window.onerror()",
    "image": "https://res.cloudinary.com/dormh2fvt/image/upload/v1593406098/JS%20Bits/carbon-4.png",
    "desc": "Easily capture and report on global errors with window.error."
  }
];

snippets.forEach(snippets => {
  snippets.getSlug = function getSlug() {
    return utils.slugify(this.title);
  };
});

export default snippets;