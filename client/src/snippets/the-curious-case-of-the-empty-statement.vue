<template>
  <article class="snippet-article">
    <h1 class="hero-title">The Curious Case of the Empty Statement</h1>

    <p>
      Did you know there's such a thing as an <strong>empty statement</strong> in JavaScript? It's true! An empty statement is denoted by a semicolon:
    </p>

    <pre v-highlightjs><code class="javascript">
    ;
    </code></pre>
    <p>Here are some examples of using empty statements IRL:</p>

    <pre v-highlightjs><code class="javascript">
    for (let i = 0; i < arr.length; i++) ;
    </code></pre>
    <p></p>
    <pre v-highlightjs><code class="javascript">
    if (true) ;
    </code></pre>

    <p>
      In JavaScript, a semicolon is used to terminate a statement. If no actual statement precedes the semicolon, the JS engine will omit executing any code where a statement would be expected. So in these 2 examples, our use of <code>;</code> in place of the expected statement is considered an empty statement and has no effect.
    </p>

    <p>
      In searching for a use case for the empty statement, it seems to be used similarly to when empty functions are used for no operation (or "noop") scenarios (Empty functions are often used when you need to satisfy an argument to a function call without actually wanting the supplied function to do anything).
    </p>

    <p>
      Here's an example of where it could make sense to use an empty statement (although I personally think this should be refactored to something different altogether, but just to demonstrate the potential use...):
    </p>

    <pre v-highlightjs><code class="javascript">
    let myVar = 4;

    if (myVar < 4) {
      foo();
    } else if (myVar > 4) {
      bar();
    } else if (myVar === 4) {
      ; // Do nothing
    } else {
      throw new Error('Error!');
    }
    </code></pre>
    <p>
      With this example, if we omitted the empty statement conditional then the error would be thrown (assume we don't want that), so here we're simply adding another condition to perform no action if the value of <code>myVar</code> is exactly <code>4</code>.

    <p>
      An empty function could be used in place of the empty statement but I suppose you save a few characters worth of memory. 😉
    </p>
    
    <p>
      While the empty statement can have this kind of use, I would caution against using it since it can have some unintended consequences: 
    </p>

    <pre v-highlightjs><code class="javascript">
    if (isReady);
      load();
    </code></pre>
    <p>
      In this example, it might look like the <code>load</code> function will be called only if <code>isReady</code> is truthy, but since we're using an empty statement, the value of <code>isReady</code> is irrelevant and <code>load</code> will always be called.
    </p>

    <p>
      So if you do employ the use of empty statements, it would be ideal to call out its intentional use with a comment so as not to trip up others or yourself.
    </p>

    <p>Have you seen a good use case where empty statements are handy? If so, please share!</p>

    <h3>Resources</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty" target="_blank">MDN Article on Empty Statement</a>
  </article>
</template>
