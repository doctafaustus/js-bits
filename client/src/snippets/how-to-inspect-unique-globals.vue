<template>
  <article class="snippet-article">
    <h1 class="hero-title">How To Inspect Unique Globals</h1>
    
    <p>
      As a 3rd party developer, I often need to leverage existing site functionality without access to our client's source code. It's usually the case that we need to figure out which code is publicly accessible to reuse or extend in our A/B testing platform or tag manager.
    </p>

    <p>
      Here's a handy function I created to inspect what unique properties are available on the window. The approach is to create a new iframe (with <code>about:blank</code> as the src) and use its <code>contentWindow</code> object as the blank canvas to compare against the parent window object to determine what properties were added to the global scope.
    </p>

    <pre v-highlightjs><code class="javascript">
      /**
      * Logs an object w/ all the unique global variables on a page 
      * 
      * @return {undefined}
      */
      (function inspectUniqueGlobals() {

        // Create object that will contain unique global variables
        const uniqueProperties = {};

        // Use an iframe to compare variables
        const iframe = document.createElement('iframe');

          // Attach blank source iframe to DOM
        iframe.src = 'about:blank';

        // On iframe load, process global properties
        iframe.onload = function() {

          // Get list of standard global objects from the iframe
          const defaultGlobals = Object.keys(iframe.contentWindow);

          // Loop through every window-level variable
          for (let item in window) {
            const prop = window[item];

            /* If the property is not found in the iframe's globals,
              then add it to the uniqueProperties object */
            if (defaultGlobals.indexOf(item) === -1 &&
                window.hasOwnProperty(item)) {
                  uniqueProperties[item] = prop;
            }
          }

          // Inspect unique window properties
          console.log(uniqueProperties);
        };

        // Add to document
        document.body.appendChild(iframe);
      })();
    </code></pre>

    <p>
      We can test this out right on the blog page on <a href="https://dev.to/cilly_boloe/how-to-inspect-unique-globals-js-bits-2i7i" target="blank">dev.to</a> if we enter this code in the console:
    </p>

    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--F7GvuP9v--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/dormh2fvt/image/upload/v1595994797/JS%2520Bits/Screen_Shot_2020-07-28_at_10.52.36_PM.png" />

    <p>
      All of these properties are unique to the dev.to blog post page. Depending on what we're trying to achieve, we may get lucky and find a function that's already built and does exactly what we're looking for. As an example, on this page there's a global <code>toggleMenu</code> function.
    </p>

    <p>If we run it, we'll see that the user menu opens up:</p>

    <pre v-highlightjs><code class="javascript">
      window.toggleMenu();
    </code></pre>

    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--mVhlMzaL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/dormh2fvt/image/upload/v1595994979/JS%2520Bits/Screen_Shot_2020-07-28_at_10.55.59_PM.png" />

    <p>
      You can learn a lot about a site with what their developers have set to the global scope. Sometimes you'll see some not-so-great things like potential vulnerabilities or even promo codes that were probably not meant to have been discovered by the average visitor. 🙊
    </p>
    
    <p>Whatever your use case, I hope you found this handy and insightful :)</p>
  </article>
</template>
