<template>
  <article class="snippet-article">
    <h1 class="hero-title">window.onerror()</h1>
    <p>Easily capture and report on global errors with window.error.</p>

    <pre v-highlightjs><code class="javascript">
      // The "error" event fires when an uncaught error is thrown
      window.addEventListener('error', function(event) {
        console.log('Captured error:', event);
      });
    </code></pre>

    <p>
      Inside the error object, you'll get all sorts of information including the error message, target element, and even the stack trace.
    </p>
    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1600924032/JS%20Bits/chrome_gKb5SjwUmX_neyjfp.png">

    <p>
      This is how a lot of error logging platforms capture client-side errors: the event listener can be added globally and the callback can send the error date to a server where you can do all sorts of things with it. Neat! 😎
    </p>
  </article>
</template>
