<template>
  <article class="snippet-article">
    <h1 class="hero-title">clearTimeout and clearInterval Are Interchangeable!</h1>

    <p>Did you know you can use <code>clearTimeout</code> and <code>clearInterval</code> interchangeably? 🤯</p>

    <pre v-highlightjs><code class="javascript">
      const myIntervalFunc = setInterval(() => {
        console.log('Hello World');
      }, 100);

      clearTimeout(myIntervalFunc); // clearTimeout works!
    </code></pre>

    <p>
    This is because both functions will return a random ID which gets saved in the browser's memory but there's no separate group of IDs that are allocated to <code>setTimeout</code> versus <code>setIntervals</code>; they're shared. 
    </p>
    <p> 
    It's easy to forget that the return value of these functions is really a numerical ID. You can check it out if you log the variable:
    </p>

    <pre v-highlightjs><code class="javascript">
      const myFunc = setTimeout(() => {}, 0);
      console.log(myFunc); // 1205 (<- This will be random)
    </code></pre>

    <p>
    And since the parameter to <code>clearTimeout</code> and <code>clearInterval</code> is the ID of the function you wish to cancel, and they're from the same pool of IDs on the window object, both functions will work for either a timeout or interval! 😃
    </p>

    <h3>Links</h3>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout" target="_blank">MDN Article on setTimeout</a>
  </article>
</template>
