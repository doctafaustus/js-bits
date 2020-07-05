<template>
  <article class="snippet-article">
    <h1 class="hero-title">Cleaner setTimeout Callbacks</h1>
    <p>Sometimes I'll write some code that needs to be wrapped in a setTimeout:</p>

    <pre v-highlightjs><code class="javascript">
      setTimeout(myFunc, 1000);
    </code></pre>

    <p>If my function took any arguments, it would bum me out by having to add additional lines to call it inside an separate callback:</p>
    <pre v-highlightjs><code class="javascript">
      setTimeout(() => {
        myFunc(arg1, arg2);
      }, 1000);
    </code></pre>

    <p>To keep things on one line, sometimes I'd bind the arguments to the function this way:</p>
    <pre v-highlightjs><code class="javascript">
      setTimeout(myFunc.bind(null, arg1, arg2), 1000);
    </code></pre>

    <p>
      But here's the money: <code>setTimeout</code> takes additional arguments that get passed to the supplied callback:
    </p>
    <pre v-highlightjs><code class="javascript">
      setTimeout(myFunc, 1000, '🐄', '🍞'); // Logs "🐄 + 🍞 = 🍔"

      function myFunc(protein, carb) {
        console.log(`${protein} + ${carb} = 🍔`);
      }
    </code></pre>

    <p>So now you can keep your fancy one-liners without binding! 📞</p>

    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">MDN Article on setTimeout</a>
  </article>
</template>
