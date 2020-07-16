<template>
  <article class="snippet-article">
    <h1 class="hero-title">addEventListener "once"</h1>
    <p>If you want to add an event callback but have it run only once, you can simply use the <code>once</code> option in the method's options object:</p>

    <pre v-highlightjs><code class="javascript">
      document.body.addEventListener('click', () => {
        console.log('I run only once! 😇');
      }, { once: true });
    </code></pre>

    <p>This prevents the need to otherwise immediately remove the event listener after the callback first fires (which I've been guilty of!):</p>
    <pre v-highlightjs><code class="javascript">
      document.body.addEventListener('click', cb);

      function cb() {
        console.log('Hi! 👋');
        document.body.removeEventListener('click', cb);
      }
    </code></pre>

    <p>The more you know! 🌈</p>

    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">MDN Article on addEventListener()</a>
  </article>
</template>
