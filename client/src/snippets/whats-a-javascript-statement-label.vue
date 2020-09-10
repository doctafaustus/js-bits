<template>
  <article class="snippet-article">
    <h1 class="hero-title">What's a JavaScript Statement Label?</h1>

    <p>
      While perusing a list of JavaScript statement and declaration types, I noticed one I hadn't seen before and that was a "label."
    </p>

    <p>With a label you can namespace a statement:</p>

    <pre v-highlightjs><code class="javascript">
      myLabel: {
        console.log('To be');
        break myLabel;
        console.log('Or not to be');
      }

      console.log('That is the question 💀');

      /*
      Logs:

        To be
        That is the question 💀
      */
    </code></pre>

    <p>
      We use a <code>break</code> to terminate the statement labeled <code>myLabel</code> and thus <code>console.log('Or not to be');</code> does not run.
    </p>

    <p>
      This code <i>looks</i> like we're creating an object with a key named <code>myLabel</code> and a value of another object but that is not it. As described in my earlier <a href="/snippet/how-javascript-blocks-work" target="_blank">article</a>, blocks are a set of zero or more statements grouped by curly braces. In our example, we've created a <i>labeled block</i>. Inside the block code we are breaking out of the same block referenced by its label.
    </p>

    <p>
      Although they're not commonly used (in lieu of function calls), labels can be used with loops to either continue or jump out of the iteration:
    </p>

    <pre v-highlightjs><code class="javascript">
      const fruit = ['🍇', '🍍', '🍎'];

      myLoop:
      for (let i = 0; i < 3; i++) {

        loopDaFruit:
        for (let j = 0; j < fruit.length; j++) {
          if (i === 1) break loopDaFruit;
          console.log(i, fruit[j]);
        }
      }

      /*
      Logs:

        0 "🍇"
        0 "🍍"
        0 "🍎"
        2 "🍇"
        2 "🍍"
        2 "🍎"
      */
    </code></pre>

    <p>
      Conversely, we can achieve the same result using the first loop's label with <code>continue</code>:
    </p>

    <pre v-highlightjs><code class="javascript">
      const fruit = ['🍇', '🍍', '🍎'];

      myLoop:
      for (let i = 0; i < 3; i++) {

        loopDaFruit:
        for (let j = 0; j < fruit.length; j++) {
          if (i === 1) continue myLoop;
          console.log(i, fruit[j]);
        }
      }

      /*
      Logs:

        0 "🍇"
        0 "🍍"
        0 "🍎"
        2 "🍇"
        2 "🍍"
        2 "🍎"
      */
    </code></pre>

    <p>
      Seeing a labeled statement first the first time threw me off because it almost looked like some form of object literal syntax. Now it's clear what's really going on on, even though labeled statements are rare to see in the wild. 🦁
    </p>
  </article>
</template>
