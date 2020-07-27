<template>
  <article class="snippet-article">
    <h1 class="hero-title">Element.classList.toggle()</h1>
    
    <p>Here's a quick one! To add or remove classes on an element you can use <code>element.classList.add()</code>:</p>

    <pre v-highlightjs><code class="javascript">
      // Add class
      document.body.classList.add('overlay');

      // Remove class
      document.body.classList.remove('scroll);
    </code></pre>

    <p>But did you know <code>classList</code> also includes a toggle method? :</p>
    <pre v-highlightjs><code class="javascript">
      // Toggle class
      document.body.classList.toggle('overlay');
    </code></pre>

    <p>This works similar to jQuery's <code>toggle()</code> method where it's adds the supplied class if not present, otherwise it removes it. It's just one more tool to know about help you keep your code clean! 🔨</p>
    
    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" target="_blank">MDN page on Element.classList</a>
  </article>
</template>
