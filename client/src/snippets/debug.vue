<template>
  <article class="snippet-article">
    <h1 class="hero-title">debug()</h1>
    <p>The Chrome console includes a helper method called debug that will pause execution in the debugger on the first line of a provided function.</p>

    <pre v-highlightjs><code class="javascript">
      function greeting(msg) {
        console.log(msg);
      }

      // Debug the greeting function whenever it gets called
      debug(greeting);

      // Once greeting is called the Sources panel in DevTools will automatically open
      greeting('Hello World!');
    </code></pre>

    <img src="https://res.cloudinary.com/dormh2fvt/image/upload/v1593406052/JS%20Bits/chrome-p6-KVK2-Mc-AH.png">

    <p>
      When using <code>debug</code>, the breakpoint is added to the function definition and paused regardless of where it is called. So this is just a quick way to see if and how a function is being called without having to add your own logs to it or manually track it down in the Sources to add a breakpoint! ⚡
    </p>
  </article>
</template>
