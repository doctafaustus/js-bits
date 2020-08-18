<template>
  <article class="snippet-article">
    <h1 class="hero-title">Another way to inspect global variables</h1>
    <p>As a follow up to my earlier post on <a href="https://dev.to/cilly_boloe/how-to-inspect-unique-globals-js-bits-2i7i" target="_blank">how to inspect unique global vars</a>, this is another method I use when I want to search for existing code on a site.</p>

    <pre v-highlightjs><code class="javascript">
      // First remove iframes to prevent cross-origin access errors
      document.querySelectorAll('iframe').forEach(iframe => iframe.remove());

      // Create cache array to save existing keys
      let cache = [];

      // Use JSON.stringify replacer fn to allowlist non-circular props
      const globals = JSON.stringify(window, (key, value) => {

        if (typeof value === 'object' && value !== null) {
        
          // If circular reference found, discard key
          if (cache.indexOf(value) !== -1) return;

          // Store value in our collection
          cache.push(value);
        }

        return value;
      });

      // Collect garbage
      cache = null; 

      console.log(globals);
      copy(globals); // Chrome's built-in method to add to clipboard
    </code></pre>

    <p>
      This code allows us to construct a stringified JSON map of all of the window's properties and subproperties. If using Chrome's console, the built-in <code>copy()</code> method will copy the stringified object to your clipboard. From here, I usually paste the code into <a href="https://beautifier.io/" target="_blank">beautifier.io</a> to make it easier to read:
    </p>

    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1597718378/JS%20Bits/beautifier.io__1.png">

    <p>
      From there, I'll copy that beautified code into a normal text editor so that I can "Cmd/Ctrl + F" for values easier. The advantage of this method over the iframe way mentioned in my previous article is that this gives you an "at a glance" view of all the window's properties and so you can skim the list without having to toggle each object open in the console (the downside is that the window object might be huge depending on the site/page). You can also search for substring matches if you have an idea of what you're looking for with your code editor's search feature. 
    </p>

    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1597720900/JS%20Bits/dev_to_output_1.jpg">

    <p>
      Perusing the output on dev.to, I noticed something interesting. Apparently there's a <code>window.currentUser</code> object which includes my followed tags as a string and apparently JavaScript has a <b>hotness_score</b> of 9940541 🔥. It's over <i><b>9 million</b></i>! (<i>*breaks power scouter*</i>) 💥
    </p>
  </article>
</template>
