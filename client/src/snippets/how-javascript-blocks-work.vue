<template>
  <article class="snippet-article">
    <h1 class="hero-title">How JavaScript Blocks Work</h1>

    <p>
      A block in JavaScript is used to group zero or more statements with curly braces (<code>{}</code>). Remember that a statement is simply a unit of code that does something or produces some behavior.
    </p>

    <p>
      Blocks are most often used with <code>while</code>, <code>if...else</code> and <code>for</code> statements. We've all seen this, however, there is an interesting implication when using blocks with <code>let</code> and <code>const</code>.
    </p>

    <p>In non-strict mode, functions and <code>var</code> variables do not have block scope:</p>

    <pre v-highlightjs><code class="javascript">
      var foo = 'yo';
      {
        var foo = 'hey';
      }

      console.log(foo); // Logs 'hey'
    </code></pre>

    <p>But when using <code>let</code> or <code>const</code>, blocks will hold the scope of each variable:</p>

    <pre v-highlightjs><code class="javascript">
      let foo = 'yo';
      {
        let foo = 'hey';
      }

      console.log(foo); // Logs 'yo'
    </code></pre>

    <br>
    <pre v-highlightjs><code class="javascript">
      const foo = 'yo';
      {
        const foo = 'hey';
      }

      console.log(foo); // Logs 'yo'
    </code></pre>

    <p>
      Note that no SyntaxError is thrown in the <code>const</code> example for a duplicate declaration. This is because the <code>foo</code> variable inside the block is contained within its own scope and thus does not conflict with the outer scope.
    </p>

    <p>
      We use blocks so much in JavaScript that sometimes it's easy to forget their concept. They often seem attached to their adjacent code such as an <code>if</code> statement or function. But as we've seen in the example above, you can create perfectly valid code with your own isolated blocks if you want:
    </p>

    <pre v-highlightjs><code class="javascript">
      {
        console.log('I run inside my very own block!');
      }
    </code></pre>

    <p>
      Although this looks strange (almost as if you're creating an object on the fly), it's 100% valid. Blocks are fun! 🧱
    </p>

  </article>
</template>
